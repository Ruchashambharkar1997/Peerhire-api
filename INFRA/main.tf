provider "aws" {
  region = var.aws_region
}

resource "aws_key_pair" "peerhire_key" {
  key_name   = var.key_name
  public_key = file(var.public_key_path)
}

resource "aws_security_group" "peerhire_sg" {
  name        = "peerhire_sg"
  description = "Allow port 22 and 3000"
  ingress = [
    {
      from_port   = 22
      to_port     = 22
      protocol    = "tcp"
      cidr_blocks = ["0.0.0.0/0"]
    },
    {
      from_port   = 3000
      to_port     = 3000
      protocol    = "tcp"
      cidr_blocks = ["0.0.0.0/0"]
    }
  ]
  egress = [{
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }]
}

resource "aws_instance" "peerhire_ec2" {
  ami           = var.ami_id
  instance_type = var.instance_type
  key_name      = aws_key_pair.peerhire_key.key_name
  security_groups = [aws_security_group.peerhire_sg.name]

  tags = {
    Name = "PeerHire-DevOps"
  }
}
