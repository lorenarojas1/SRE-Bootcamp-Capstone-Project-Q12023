export const index = (_, res, next) => {
  res.status(200).render('index')
  next();
  let response ={
    data: 'OK'
  }
  console.log(response)
};