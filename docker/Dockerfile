FROM node:6.10.3-slim
RUN apt-get update -y && \
    apt-get install -y nginx
WORKDIR /app
COPY . /app/
EXPOSE 8080
RUN  cnpm install && \
     npm run dev && 
CMD ["nginx","-g","daemon off;"]