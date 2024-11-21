# Check for existing VPC
data "google_compute_network" "existing_vpc" {
  name = var.vpc_name
}

resource "google_compute_network" "vpc_network" {
  count = length(data.google_compute_network.existing_vpc.self_link) == 0 ? 1 : 0

  name                    = var.vpc_name
  auto_create_subnetworks = var.vpc_auto_create_subnets
  mtu                     = var.vpc_mtu
}

# Check for existing Subnet
data "google_compute_subnetwork" "existing_subnet" {
  name   = var.vpc_subnet_name
  region = var.vpc_subnet_region
}

resource "google_compute_subnetwork" "vpc_network_subnet" {
  count = length(data.google_compute_subnetwork.existing_subnet.self_link) == 0 ? 1 : 0

  name          = var.vpc_subnet_name
  ip_cidr_range = var.vpc_subnet_cidr_range
  region        = var.vpc_subnet_region
  network       = google_compute_network.vpc_network.self_link
}

# Check for existing Firewall
data "google_compute_firewall" "existing_firewall_icmp" {
  name = var.vpc_firewall_icmp_name
}

resource "google_compute_firewall" "vpc_firewall_icmp" {
  count = length(data.google_compute_firewall.existing_firewall_icmp.self_link) == 0 ? 1 : 0

  name    = var.vpc_firewall_icmp_name
  network = google_compute_network.vpc_network.self_link

  allow {
    protocol = var.vpc_firewall_icmp_protocol
  }

  source_ranges = var.vpc_firewall_icmp_source_range
}

# Repeat this pattern for other firewall rules
# Example for SSH Firewall
data "google_compute_firewall" "existing_firewall_ssh" {
  name = var.vpc_firewall_ssh_name
}

resource "google_compute_firewall" "vpc_firewall_ssh" {
  count = length(data.google_compute_firewall.existing_firewall_ssh.self_link) == 0 ? 1 : 0

  name    = var.vpc_firewall_ssh_name
  network = google_compute_network.vpc_network.self_link

  allow {
    protocol = var.vpc_firewall_ssh_protocol
    ports    = var.vpc_firewall_ssh_ports
  }

  source_ranges = var.vpc_firewall_ssh_source_range
}

# Check for existing GKE Cluster
data "google_container_cluster" "existing_cluster" {
  name     = var.gke_cluster_name
  location = var.gke_location
}

resource "google_container_cluster" "primary" {
  count = length(data.google_container_cluster.existing_cluster.name) == 0 ? 1 : 0

  name       = var.gke_cluster_name
  location   = var.gke_location
  network    = google_compute_network.vpc_network.self_link
  subnetwork = google_compute_subnetwork.vpc_network_subnet.self_link

  deletion_protection      = false
  remove_default_node_pool = true
  initial_node_count       = 1
}

# # Check for existing Kubernetes Namespace
# data "kubernetes_namespace" "existing_namespace" {
#   metadata {
#     name = "argocd"
#   }
# }

# resource "kubernetes_namespace" "argocd" {
#   count = length(data.kubernetes_namespace.existing_namespace.metadata.0.name) == 0 ? 1 : 0

#   metadata {
#     name = "argocd"
#   }
# }

# # Check for existing Helm Release
# data "helm_release" "existing_argocd" {
#   name      = "argocd"
#   namespace = "argocd"
# }

# resource "helm_release" "argocd" {
#   count = length(data.helm_release.existing_argocd.name) == 0 ? 1 : 0

#   name       = "argocd"
#   namespace  = kubernetes_namespace.argocd.metadata[0].name
#   repository = "https://argoproj.github.io/argo-helm"
#   chart      = "argo-cd"
#   version    = "5.12.0"
# }

# Check for existing Kubernetes Deployment
data "kubernetes_deployment" "existing_nextjs_deployment" {
  metadata {
    name = "portfolio-nextjs"
  }
}

resource "kubernetes_deployment" "nextjs_deployment" {
  count = length(data.kubernetes_deployment.existing_nextjs_deployment.metadata.0.name) == 0 ? 1 : 0

  metadata {
    name = "portfolio-nextjs"
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "portfolio-nextjs"
      }
    }

    template {
      metadata {
        labels = {
          app = "portfolio-nextjs"
        }
      }

      spec {
        container {
          name  = "nextjs-container"
          image = "gcr.io/${data.google_client_config.default.project}/portfolio-nextjs:latest"
          port {
            container_port = 3000
          }
        }
      }
    }
  }
}


resource "kubernetes_service" "nextjs_service" {
  metadata {
    name = "nextjs-service"
  }

  spec {
    selector = {
      app = "portfolio-nextjs"
    }

    type = "LoadBalancer"

    port {
      port        = 80
      target_port = 3000
    }
  }
}

#

