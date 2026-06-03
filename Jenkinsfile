pipeline {
    agent any
    stages {

         stage('Fetch Secrets') {
            steps {
                sh 'npx -y @infisical/cli export --env="dev" --path="/pagamento" --token="st.9adf4e27-b7c0-486c-922f-4995d97f5ff7.dabcaa2e7c9a9ed79af18fc652f6aef6.e44b98cf7e558ddaf96da069b14a6b93" > .env'
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
