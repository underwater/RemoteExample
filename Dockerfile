# Client App
FROM nginx:alpine
LABEL authors="Some dude"
COPY ./www /user/share/nginx/html
EXPOSE 80 443
ENTRYPOINT [ "nginx","-g", "daemon off" ]