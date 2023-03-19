FROM node:16-alpine
WORKDIR /app
COPY package.json ./
RUN npm i
COPY . .
EXPOSE 8000
CMD npm run start

# App must run on port 8000
# Add your instructions to dockerize the application
