# Christine Adelusi DevOps and Platform Engineering Portfolio

A professional portfolio showcasing production-style DevOps and platform engineering projects, architecture decisions, technical writing, and operational practices.

## Live Portfolio

[View the portfolio website](https://xtinead.github.io/christine-devops-portfolio/)

## Portfolio Purpose

This website presents my experience designing and automating secure, scalable, observable, and recoverable cloud platforms.

It is intended for:

- Engineering recruiters
- Hiring managers
- DevOps and platform engineering teams
- Technical interviewers

## Core Capabilities

- AWS cloud and platform architecture
- Infrastructure as Code with Terraform
- Configuration management with Ansible
- Kubernetes and container platforms
- Jenkins CI/CD pipelines
- Pull-based GitOps with Argo CD
- Docker and Amazon ECR image delivery
- Prometheus and Grafana observability
- Amazon CloudWatch monitoring
- IAM, OIDC, IRSA, and workload security
- Bash, Python, and SQL
- Platform reliability and disaster recovery
- Technical documentation, runbooks, and architecture decisions

## Featured Projects

### Clixx GitOps Platform

A production-style AWS and Kubernetes platform built with Terraform, Jenkins, Amazon EKS, Amazon ECR, and Argo CD.

### Kubernetes Observability and Scaling Platform

A Kubernetes monitoring and autoscaling platform using Prometheus, Grafana, CloudWatch, Metrics Server, and Horizontal Pod Autoscaling.

### AWS Platform Networking and Security

A multi-environment AWS foundation demonstrating secure networking, controlled traffic flows, environment isolation, and reusable Terraform modules.

### AWS ECS Application Platform

A containerized WordPress platform deployed through Jenkins to Amazon ECS on EC2 capacity, with Amazon ECR, RDS, EFS, and Auto Scaling.

### Golden AMI Pipeline

An immutable infrastructure pipeline that uses Packer, Ansible, Jenkins, and AWS to build, validate, and promote reusable Amazon Machine Images.

### Platform Launchpad

A multi-user platform engineering application using FastAPI, Next.js, PostgreSQL, Redis, Docker, Jenkins, and AWS services.

### AWS Platform Reliability and Resilience

A reliability-focused AWS platform demonstrating multi-AZ architecture, health monitoring, backup and recovery strategies, disaster recovery, and Terraform-based reconstruction.

### Serverless Text-to-Speech Platform

A planned event-driven platform using Amazon Polly, Lambda, API Gateway, S3, SQS, CloudWatch, and Terraform.

## Technical Writing

The portfolio includes case studies covering:

- Jenkins and pull-based GitOps
- Kubernetes observability and autoscaling
- Golden AMI pipelines
- ECS versus EKS cost considerations

## Website Features

- Responsive desktop and mobile layouts
- Dark and light themes
- Accessible navigation and keyboard-focus states
- Project repository and documentation links
- Technical articles and case studies
- Professional headshot
- Downloadable ATS résumé
- LinkedIn, GitHub, and email contact links
- Open Graph social-sharing metadata
- Custom favicon

## Website Technology

- HTML5
- CSS3
- JavaScript
- Git and GitHub
- GitHub Pages

## Repository Structure

```text
christine-devops-portfolio/
├── index.html
├── articles/
├── assets/
│   ├── images/
│   └── resume/
├── css/
├── js/
├── projects/
└── README.md

```

## Local Development

Clone the repository:

```bash
git clone https://github.com/xtinead/christine-devops-portfolio.git
cd christine-devops-portfolio
```

Start a local web server:

```bash
python -m http.server 5500
```

Open:

```text
http://localhost:5500/
```

## Deployment

The website is hosted with GitHub Pages and published from the `main` branch using the repository root.

Production URL:

```text
https://xtinead.github.io/christine-devops-portfolio/
```

A custom domain may be added in a future update.

## Author

Christine Adelusi  
Senior DevOps / Platform Engineer

- [LinkedIn](https://www.linkedin.com/in/christine-adelusi-31b64512b)
- [GitHub](https://github.com/xtinead)