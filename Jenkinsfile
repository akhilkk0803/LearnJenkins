pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "akhilkk03/myexpress-app"
        DOCKER_TAG = "latest"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                sh "docker build -t $DOCKER_IMAGE:$DOCKER_TAG ."
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh "echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin"
                }
            }
        }

        stage('Push Image to Docker Hub') {
            steps {
                sh "docker push $DOCKER_IMAGE:$DOCKER_TAG"
            }
        }

        stage('Deploy Container') {
            steps {
                sh "docker stop myexpress-app || true"
                sh "docker rm myexpress-app || true"
                sh "docker run -d -p 8000:8000 --name myexpress-app $DOCKER_IMAGE:$DOCKER_TAG"
            }
        }
    }

    post {
        always {
            sh "docker logout"
        }
    }
}
