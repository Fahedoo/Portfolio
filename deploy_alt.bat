@echo off
echo ===================================================
echo  Deploiement sur GitHub Pages - Construction Manuelle
echo ===================================================
echo.

REM Configuration
set "REPO_URL=https://github.com/Fahedoo/Portfolio.git"
set "BRANCH=gh-pages"
set "BUILD_DIR=dist"

echo Etape 1: Construction du projet
echo.
echo Ce script ne tentera pas de construire automatiquement le projet.
echo Veuillez d'abord construire votre projet manuellement en suivant
echo ces etapes:
echo.
echo 1. Ouvrez une invite de commande Windows (pas PowerShell)
echo 2. Naviguez vers votre projet: cd /d D:\Projects\portfolio
echo 3. Executez: npx vite build
echo.
echo Une fois que vous avez construit le projet et que le dossier
echo 'dist' existe, appuyez sur une touche pour continuer avec
echo le deploiement sur GitHub Pages...
echo.

pause

REM Verifier si le dossier dist existe
if not exist "%BUILD_DIR%" (
    echo.
    echo ERREUR: Le dossier '%BUILD_DIR%' n'existe pas.
    echo Veuillez construire le projet avant de continuer.
    echo.
    pause
    exit /b 1
)

echo.
echo Etape 2: Deploiement sur GitHub Pages
echo.

REM Creer un dossier temporaire
set "TEMP_DIR=temp_deploy_%RANDOM%"
mkdir "%TEMP_DIR%"

REM Copier les fichiers de build
echo Copie des fichiers de build...
xcopy "%BUILD_DIR%\*" "%TEMP_DIR%\" /E /I /Y

REM Creer un fichier .nojekyll pour indiquer a GitHub de ne pas utiliser Jekyll
echo. > "%TEMP_DIR%\.nojekyll"

REM Initialiser un depot Git
cd "%TEMP_DIR%"
echo Initialisation du depot Git...
git init
git checkout -b %BRANCH%

REM Ajouter tous les fichiers
echo Ajout des fichiers...
git add .

REM Creer un commit
echo Creation du commit...
git commit -m "Deploiement sur GitHub Pages"

REM Configurer le depot distant et pousser
echo Configuration du depot distant...
git remote add origin %REPO_URL%

echo Deploiement sur GitHub Pages...
git push -f origin %BRANCH%

REM Revenir au dossier original
cd ..

REM Nettoyer le dossier temporaire
echo Nettoyage...
rmdir /S /Q "%TEMP_DIR%"

echo.
echo ===================================================
echo Deploiement termine avec succes!
echo.
echo Votre site est maintenant disponible sur:
echo https://fahedoo.github.io/Portfolio
echo.
echo N'oubliez pas d'activer GitHub Pages dans les parametres
echo de votre depot en selectionnant la branche 'gh-pages'.
echo ===================================================
echo.
pause
