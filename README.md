# TCC - Arquitetura de Software Distribuído - PUC-MG

Projeto criado para validação do documento arquitetural.

# Instalação do Kubernetes no Ubuntu 18.04 utilizando o MiniKube

## Setup Inicial

```
apt-get update
apt-get upgrade
apt-get install curl
```
## Instalar docker

```
apt-get install -y docker.io

cat << EOF > /etc/docker/daemon.json
{
  "exec-opts": ["native.cgroupdriver=cgroupfs"]
}
EOF
```

## Instalar e configurar o kubectl

Use a ferramenta de linha de comando do Kubernetes , kubectl , para implantar e gerenciar aplicativos no Kubernetes. 

```
apt-get install -y apt-transport-https
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -

cat <<EOF >/etc/apt/sources.list.d/kubernetes.list
deb http://apt.kubernetes.io/ kubernetes-bionic main
EOF

apt-get update
apt-get install -y kubectl
```

## Instalar o MiniKube

Baixe o Minikube conforme o seu sistema operacional.

```
https://github.com/kubernetes/minikube/releases
```

Manual MiniKube

```
https://github.com/kubernetes/minikube

```

Para este projeto utilizei o VirtualBox versão 5.2.18 Ubuntu 18.04 ("Bionic")

```
https://www.virtualbox.org/wiki/Linux_Downloads

```

## Iniciar o MiniKube

```
minikube start

```

## Verificar informação do cluster

```
kubectl cluster-info

```