# Script de déploiement manuel pour GitHub Pages (version alternative)
# Cette version utilise une approche différente qui ne dépend pas de npm ou vite

# Vérifier que le dossier dist existe déjà
if (-not (Test-Path -Path "dist")) {
    Write-Host "Le dossier 'dist' n'existe pas. Vous devez d'abord construire le projet manuellement." -ForegroundColor Yellow
    Write-Host "Pour construire le projet, exécutez : 'npx vite build' ou 'npm run build'" -ForegroundColor Cyan
    Write-Host "Voulez-vous essayer de construire le projet maintenant ? (O/N)" -ForegroundColor Yellow
    $response = Read-Host
    if ($response -eq "O" -or $response -eq "o") {
        Write-Host "Tentative de construction avec npx..." -ForegroundColor Green
        try {
            npx vite build
            if (-not (Test-Path -Path "dist")) {
                Write-Host "La construction a échoué avec npx. Tentative avec npm..." -ForegroundColor Yellow
                npm run build
            }
        }
        catch {
            Write-Host "Erreur lors de la construction. Essayons avec npm..." -ForegroundColor Yellow
            npm run build
        }
    }
    else {
        Write-Host "Déploiement annulé." -ForegroundColor Red
        exit 1
    }
}

# Vérifier à nouveau si le dossier dist existe
if (-not (Test-Path -Path "dist")) {
    Write-Host "Le dossier 'dist' n'existe toujours pas. La construction a échoué." -ForegroundColor Red
    Write-Host "Veuillez construire le projet manuellement avant de lancer le déploiement." -ForegroundColor Red
    exit 1
}

Write-Host "Dossier 'dist' trouvé. Démarrage du déploiement..." -ForegroundColor Green

# Vérifier la branche actuelle
$currentBranch = git rev-parse --abbrev-ref HEAD
Write-Host "Branche actuelle: $currentBranch" -ForegroundColor Blue

# Créer un dossier temporaire pour le déploiement
Write-Host "Création d'un dossier temporaire pour le déploiement..." -ForegroundColor Green
$tempDir = "temp_deploy_$(Get-Random)"
New-Item -ItemType Directory -Path $tempDir | Out-Null

# Copier le contenu du dossier dist dans le dossier temporaire
Write-Host "Copie des fichiers de build..." -ForegroundColor Green
Copy-Item -Path "dist\*" -Destination $tempDir -Recurse -Force

# Créer une branche orpheline pour GitHub Pages
Write-Host "Création d'une branche temporaire pour le déploiement..." -ForegroundColor Green
$currentDir = Get-Location
Set-Location $tempDir

# Initialiser un nouveau dépôt Git dans le dossier temporaire
git init
git checkout --orphan gh-pages

# Ajouter tous les fichiers au suivi Git
Write-Host "Ajout des fichiers de construction..." -ForegroundColor Green
git add .

# Créer un commit pour le déploiement
Write-Host "Création du commit de déploiement..." -ForegroundColor Green
git commit -m "Déploiement sur GitHub Pages"

# Obtenir l'URL du dépôt distant
Set-Location $currentDir
$remoteUrl = git remote get-url origin

# Configurer le dépôt distant dans le dossier temporaire
Set-Location $tempDir
git remote add origin $remoteUrl

# Pousser la branche gh-pages
Write-Host "Création/Mise à jour de la branche gh-pages..." -ForegroundColor Green
git push origin gh-pages -f

# Revenir au dossier original
Set-Location $currentDir

# Nettoyage du dossier temporaire
Write-Host "Nettoyage..." -ForegroundColor Blue
Remove-Item -Path $tempDir -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "Déploiement terminé! Votre site est maintenant disponible sur: https://fahedoo.github.io/portfolio" -ForegroundColor Green
Write-Host "N'oubliez pas d'activer GitHub Pages dans les paramètres de votre dépôt en sélectionnant la branche gh-pages." -ForegroundColor Yellow
