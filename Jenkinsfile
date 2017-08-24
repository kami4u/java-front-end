node {
    stage('Slack started') {
        slackSend channel: "#northcoders-java", message: "Front end:)) started building"
       }
   stage('Preparation') {
      git credentialsId: 'kami', url: 'https://github.com/kami4u/java-front-end.git'
   }
   stage('Installation') {
      sh "npm install"
   }
   stage('npm Build') {
      sh "npm run build"
   }
   stage('Docker Build') {
      sh "docker build -t front ."
   }
   stage('Stop app') {
      sh "docker stop front || true"
      sh "docker rm front || true"
   }
   stage('Docker Deploy') {
         sh "docker run -d --name front -p 80:80 front"
      }
}