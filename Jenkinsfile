pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "akhilkk03/myexpress-app-prod"
        DOCKER_TAG = "latest"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                bat "docker build -t $DOCKER_IMAGE:$DOCKER_TAG ."
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    bat "echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin"
                }
            }
        }

        stage('Push Image to Docker Hub') {
            steps {
                bat "docker push $DOCKER_IMAGE:$DOCKER_TAG"
            }
        }

        stage('Deploy Container') {
            steps {
                bat "docker stop myexpress-app || true"
                bat "docker rm myexpress-app || true"
                bat "docker run -d -p 8000:8000 --name myexpress-app $DOCKER_IMAGE:$DOCKER_TAG"
            }
        }
    }

    post {
        always {
            bat "docker logout"
        }
    }
}
