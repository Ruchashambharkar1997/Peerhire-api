variable "aws_region" {
  default = "us-east-1"
}

variable "ami_id" {
  default = "ami-0c1ac8a41498c1a9c" 
}

variable "instance_type" {
  default = "t3.micro"
}

variable "key_name" {
  default = "peerhire-key"
}

variable "public_key_path" {
  description = "Path to your local .pub SSH key"
  default     = "~/.ssh/id_rsa.pub"
}
