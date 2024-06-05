 c#!/bin/bash

# Variables
local_dist_path="dist"  # Chemin local vers le dossier de distribution (à adapter selon votre configuration)
remote_user="ubuntu"  # Nom de l'utilisateur sur le VPS
remote_dist_path="/vremote_ip="51.77.137.87"  # Adresse IP de votre VPS
ar/www/"  # Chemin distant vers le dossier de destination sur le VPS

# Construire l'application React
npm run build

# Copier les fichiers de build vers le VPS
scp -r "$local_dist_path" "$remote_user"@"$remote_ip":"$remote_dist_path"

# Remplacer les anciens fichiers par les nouveaux sur le VPS
ssh "$remote_user"@"$remote_ip" "rm -rf /var/www/VivreDebout"
ssh "$remote_user"@"$remote_ip" "mv /var/www/dist /var/wwwVivreDebout"
