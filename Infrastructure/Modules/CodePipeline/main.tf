/*=======================================================
      AWS CodePipeline for build and deployment
========================================================*/

resource "aws_codepipeline" "aws_codepipeline" {
  name     = var.name
  role_arn = var.pipe_role

  artifact_store {
    location = var.s3_bucket
    type     = "S3"
  }

  stage {
    name = "Source"

    action {
      name             = "Source"
      category         = "Source"
      owner            = "ThirdParty"
      provider         = "GitHub"
      version          = "1"
      output_artifacts = ["SourceArtifact"]

      configuration = {
        OAuthToken           = var.github_token
        Owner                = var.repo_owner
        Repo                 = var.repo_name
        Branch               = var.branch
        PollForSourceChanges = true
      }
    }
  }

  stage {
    name = "Build"

    action {
      name             = "Build_server"
      category         = "Build"
      owner            = "AWS"
      provider         = "CodeBuild"
      version          = "1"
      input_artifacts  = ["SourceArtifact"]
      output_artifacts = ["BuildArtifact_server"]

      configuration = {
        ProjectName = var.codebuild_project_server
      }
    }

  }

  stage {
    name = "Deploy"

    action {
      name            = "Deploy_server"
      category        = "Deploy"
      owner           = "AWS"
      provider        = "CodeDeployToECS"
      input_artifacts = ["BuildArtifact_server"]
      version         = "1"

      configuration = {
        ApplicationName                = var.app_name_server
        DeploymentGroupName            = var.deployment_group_server
        TaskDefinitionTemplateArtifact = "BuildArtifact_server"
        TaskDefinitionTemplatePath     = "taskdef.json"
        AppSpecTemplateArtifact        = "BuildArtifact_server"
        AppSpecTemplatePath            = "appspec.yaml"
      }
    }

  }

  lifecycle {
    # prevents github OAuthToken from causing updates, since it's removed from state file
    ignore_changes = [stage[0].action[0].configuration]
  }

}