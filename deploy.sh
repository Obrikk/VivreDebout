#!/bin/bash

# Variables
local_dist_path="dist"  # Chemin local vers le dossier de distribution (à adapter selon votre configuration)
remote_user="ubuntu"  # Nom de l'utilisateur sur le VPS
remote_ip="51.77.137.87"  # Adresse IP de votre VPS
remote_dist_path="/var/www/"  # Chemin distant vers le dossier de destination sur le VPS

# Construire l'application React
npm run build

# Vérifier si la construction a réussi
if [ $? -ne 0 ]; then
  echo "Erreur: La construction de l'application a échoué."
  exit 1
fi

# Copier les fichiers de build vers le VPS
ssh "$remote_user"@"$remote_ip" "rm -rf /var/www/dist"
scp -r "$local_dist_path" "$remote_user"@"$remote_ip":"$remote_dist_path"

# Vérifier si la copie s'est bien déroulée
if [ $? -ne 0 ]; then
  echo "Erreur: La copie des fichiers sur le VPS a échoué."
  exit 1
fi

# Remplacer les anciens fichiers par les nouveaux sur le VPS
ssh "$remote_user"@"$remote_ip" "rm -rf /var/www/VivreDebout"
ssh "$remote_user"@"$remote_ip" "mv /var/www/dist /var/www/VivreDebout"

# Vérifier si le remplacement s'est bien déroulé
if [ $? -ne 0 ]; then
  echo "Erreur: Le remplacement des fichiers sur le VPS a échoué."
  exit 1
fi

echo "Déploiement terminé avec succès."
