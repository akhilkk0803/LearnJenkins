pipeline{
    agent any
    stages{
       stage("Install dependency"){
            steps{
                sh "npm install"
            }
       }
       stage("Run application"){
        steps{
            sh "npm start"
        }
       }
    }
}
