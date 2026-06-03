pipeline {
    agent any
    stages {

         stage('Fetch Secrets') {
            steps {
                sh 'npx -y @infisical/cli export --env="dev" --path="/pagamento" --token="st.9f5c370d-4cd4-40df-bf3a-84cbfefb99e0.f62a8b34cbc3a65e086f6a9f63f5bf95.05eab83d22dfe8e0fed54f8df122f4c3" > .env'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Prisma Generate') {
            steps {
                sh 'npx prisma generate'
            }
        }
        stage('Docker Build') {
            steps {
                sh 'docker compose build'
            }
        }
        stage('Docker Up') {
            steps {
                sh 'docker compose up -d'
            }
        }
        stage('Docker PS') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }
    }
    post {
        success {
            echo 'Pipeline executada com sucesso!'
        }
        failure {
            echo 'Erro na pipeline!'
        }
    }
}
