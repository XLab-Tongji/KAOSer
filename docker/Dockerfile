FROM node:6.10.3-slim
RUN apt-get update -y \    && apt-get install -y nginx
WORKDIR /app
COPY . /app/
EXPOSE 8080
RUN  npm install \     && npm run build \     && cp -r dist/* /var/www/html \     && rm -rf /app
CMD ["nginx","-g","daemon off;"]