
# 🚀 PeerHire API – DevOps Internship Assignment

This repository contains a containerized Express.js API application built for the PeerHire DevOps Internship assignment. It features CI/CD automation, AWS deployment, monitoring, secrets management, and API documentation.

---

## 📦 Tech Stack

- *Backend*: Node.js, Express.js
- *Containerization*: Docker & Docker Compose
- *CI/CD*: GitHub Actions
- *Cloud Deployment*: AWS EC2
- *Infrastructure as Code*: Terraform
- *Monitoring*: Prometheus + Grafana
- *Secrets Management*: AWS Secrets Manager
- *Documentation*: Swagger & Postman

---

## 🧱 Project Structure

. ├── app.js ├── routes/ │ └── users.js ├── Dockerfile ├── docker-compose.yml ├── .gitignore ├── .dockerignore ├── infra/ # Terraform IaC files │ ├── main.tf │ ├── variables.tf │ ├── provider.tf │ ├── outputs.tf │ └── terraform.tfvars ├── postman/ │ └── PeerHire-API.postman_collection.json └── README.md

yaml
Copy
Edit

---

## ⚙️ Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Run the app
npm run dev

# App runs on: http://localhost:3000
🐳 Docker
Build & Run Locally
bash
Copy
Edit
docker-compose up --build
App will be available at: http://localhost:3000

🔁 CI/CD – GitHub Actions
CI/CD pipeline configured in .github/workflows/deploy.yml.

Pipeline Steps:
Run Jest tests

Build Docker image

Push to Docker Hub

SSH into EC2 and deploy via Docker Compose

☁️ AWS EC2 Deployment
Region: ap-south-1 (Mumbai)

Deployed using Terraform (EC2 + Security Group)

App auto-cloned and deployed with Docker Compose on provision

🌐 Live App URL: http://<your-ec2-ip>:3000

🧾 API Endpoints
➕ GET /api/users
Returns sample users

🔐 POST /api/login
json
Copy
Edit
{
  "username": "admin",
  "password": "password"
}
📚 Swagger API Docs
Accessible at:
http://localhost:3000/api-docs

📬 Postman Collection
Import the following file into Postman:

bash
Copy
Edit
/postman/PeerHire-API.postman_collection.json
Includes:

GET /api/users

POST /api/login

🛠️ Infrastructure as Code – Terraform
Setup
bash
Copy
Edit
cd infra
terraform init
terraform apply
Resources provisioned:

EC2 instance

Security Group with ports 22 & 3000

User-data script to auto-install Docker, clone repo, and deploy app
