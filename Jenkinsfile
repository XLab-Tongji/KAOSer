node{
    stage('path'){
        sh "pwd"
    }
    stage('Clone Sources') {
      steps {
        git url:'https://github.com/XLab-Tongji/KAOSer.git',
            branch:'multi-vue'
      }
    }
    stage('Prepare'){
        sh "cd /var/jenkins_home/workspace/vuekaoser/KAOSer"
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