node {
    stage('Slack started') {
        slackSend channel: "#northcoders-java", message: "Front end:)) started building"
       }
   stage('Preparation') {
      git credentialsId: 'kami', url: 'https://github.com/kami4u/java-spring-data.git'
   }
   stage('Clean') {
      sh "mvn -Dmaven.test.failure.ignore clean"
   }
   stage('Package') {
      sh "mvn -Dmaven.test.failure.ignore package"
   }
   stage('Docker Build') {
      sh "docker build -t myapp ."
   }
   stage('Stop app') {
      sh "docker stop myapp || true"
      sh "docker rm myapp || true"
   }
   stage('Docker Deploy') {
         sh "docker run -d --name myapp -p 8081:8080 myapp"
      }
}