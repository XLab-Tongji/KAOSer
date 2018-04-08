# README-KAOSer

## 项目简介

随着软件技术的发展，需求工程已经成为软件生命周期中一个重要组成部分。本项目围绕着需求工程方法——KAOS建模，建立了一套Web端的在线需求建模工具。用户可以通过使用KAOS方法利用系统进行需求分析建模，并获取需求文档的模板。

## 项目构建方法

### 环境准备

 - 文本编辑器
 - git
 - IEAD
 - docker

### 获取项目

- 从github上获取项目
	> git clone https://github.com/tjuyinkanglin/document-template.git

### 导入项目

 1. 打开IDEA
 2. 点击：File -> open
 3. 选择项目文件夹

### 构建项目

通过docker构建项目

 - 拉取项目

> git clone https://github.com/tjuyinkanglin/document-template.git

 - 构建docker镜像

> cd docker
> sudo docker build -t kaoser .

 - 从镜像创建容器

> docker run --name=kaoser -p 8080:8080 kaoser
## 项目运行方法

通过docker运行项目


 - 从浏览器中访问项目

> http://localhost:8080/?offline=1&https=0

## How to Use (项目基本功能)

 1. 绘制KAOS模型
 2. 生成需求文档模板
 3. 下载和保存文件

## 代码结构说明

项目结构及文件夹描述如下：

*/docker* - 该文件夹包含利用docker部署项目所需的部件

*/docker/assets* - 存放补丁

*/etc* - 存放与配置相关的文件

*/war* - 项目打包war时所有的内容

/war/images - 存放项目UI所用到的图形

/war/img - 存放各种绘图图形

/war/js - 项目所用到的JS文件

/war/mxgraph - drawio依赖的mxgraph库

/war/META-INF - 包含应用程序、扩展程序、类加载器和服务等配置的信息包

/war/plugins - 项目用到的插件

/war/resources - dia相关文件

/war/shapes - 与绘制图形相关的文件

/war/stencils

/war/styles - 项目所用的CSS文件

/war/templates - drawio给出的一些模板

/war/trello - 包含一些示例页面

/war/WEB-INF - WEB应用的安全目录