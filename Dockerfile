FROM node:latest

WORKDIR /app

COPY *.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "build"]

FROM nginx:alpine

COPY dist/ /usr/share/nginx/html/
