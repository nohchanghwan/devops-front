pipeline {
    agent any
    //npm 이슈해결을위해 설정
    tools {nodejs "NODEJS"}

    stages {
        // Jenkins에서 SCM 체크아웃
        // stage('Checkout') {
        //     steps {
        //         git branch: 'main',
        //             credentialsId: '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',
        //             url: 'https://github.com/nohchanghwan/devops-front.git'
        //     }
        // }
        stage('NPM Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Docker Image Build') {
            steps {
                echo 'Docker Iamge Build..'
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