pipeline{
    agent any
    stages{
       stage("Install dependency"){
            steps{
                bat "npm install"
            }
       }
       stage("Run application"){
        steps{
            bat "npm start"
        }
       }
    }
}