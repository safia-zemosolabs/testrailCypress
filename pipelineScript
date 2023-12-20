pipeline {
agent any
stages {
	stage('build') 
		{
			steps	{
					sh 'npm install cypress-cucumber-preprocessor --save-dev'
					sh 'npm install salty-cypress-testrail-reporter --save-dev'
					sh 'npm install cypress --save-dev'               
					sh 'npm run cypress:run'
				}
        	}
	}	
}
