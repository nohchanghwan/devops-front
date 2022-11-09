pipeline {
    agent any
    //npm 이슈해결을위해 설정
    tools {nodejs "nodejs"}
    stages {
        // stage('Checkout') {
        //     steps {
        //         git branch: 'main',
        //             credentialsId: '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',
        //             url: 'https://github.com/nohchanghwan/devops-front.git'
        //     }
        // }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test...') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy...') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}