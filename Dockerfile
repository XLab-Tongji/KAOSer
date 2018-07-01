FROM node:8.0.0
RUN apt-get update -y && \
    apt-get install -y nginx
WORKDIR /app
COPY . /app/
EXPOSE 8091
RUN  npm install -g cnpm --registry=https://registry.npm.taobao.org  && \ 
     cnpm install && \
     cnpm install --save vue-resource Vue
     cnpm run dev && \
     cp -r dist/* /var/www/html && \
     rm -rf /app
CMD ["nginx","-g","daemon off;"]