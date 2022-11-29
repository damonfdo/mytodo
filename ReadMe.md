# TODO List App

TODO List is a MERN Stack based app which helps to manage your simple tasks

## Features
1. Login to the app
2. Add, Edit task with Image uploads
3. Customizable Status in backend. YES, you can add your own status to the system.
4. Responsive

## Depoloyment
It uses terraform to deploy it on AWS cloud.

1. Authenticate with your AWS IAM account using aws-vault. Replace it with your account-name
```bash
aws-vault exec --duration=12h account-name
```

2. Within same terminal run the below command 
```bash
docker-compose -f deploy/docker-compose.yml run --rm terraform init
```
3. Run terraform through Docker
```bash
docker-compose -f deploy/docker-compose.yml run --rm terraform fmt
```
4. Validate terraform
```bash
docker-compose -f deploy/docker-compose.yml run --rm terraform validate
```
5. Plan and Apply to deploy the application
   ```bash
   docker-compose -f deploy/docker-compose.yml run --rm terraform plan
   docker-compose -f deploy/docker-compose.yml run --rm terraform apply
   ```

## TODO
1. Add Signup
2. Add Edit function to task
3. Implement Redux


## Note
Special thanks to London App Developer for the guid on deploying using Terraform(https://github.com/LondonAppDeveloper/tf-docker-compose-starter-code.git)