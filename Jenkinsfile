node{
    stage('Prepare'){
        sh "cd /var/jenkins_home/workspace/vuekaoser"
    }
    stage('install'){
        sh "npm install"
    }

    stage('vue test'){
        //vue 测试
        sh "npm run dev"
    }

    stage('deploy'){
        //执行部署脚本
        echo "deploy ......" 
    }
}