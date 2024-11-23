terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = ">=6.9.0"
    }

    helm = {
      source  = "hashicorp/helm"
      version = "2.0.3"
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "2.7.1"
    }
    kubectl = {
      source  = "gavinbunney/kubectl"
      version = "1.14.0" 
    }
  }

  required_version = ">=1.9.8"
}
