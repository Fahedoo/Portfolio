@echo off
echo ===================================================
echo  Deploiement direct sur GitHub Pages (sans build)
echo ===================================================
echo.

REM Configuration
set "REPO_URL=https://github.com/Fahedoo/Portfolio.git"
set "BRANCH=gh-pages"

echo Attention: Ce script va deployer votre code source directement
echo sans le construire d'abord. Cette methode n'est pas recommandee
echo pour la production, mais peut etre utile en cas d'urgence.
echo.
echo Appuyez sur une touche pour continuer...
pause >nul

echo.
echo 1. Preparation du deploiement...
echo.

REM Creer un dossier temporaire
set "TEMP_DIR=temp_deploy_%RANDOM%"
mkdir "%TEMP_DIR%"

REM Copier les fichiers necessaires
echo Copie des fichiers source...
xcopy "src\*" "%TEMP_DIR%\src\" /E /I /Y
xcopy "public\*" "%TEMP_DIR%\public\" /E /I /Y
copy "package.json" "%TEMP_DIR%\"
copy "vite.config.js" "%TEMP_DIR%\"
copy "index.html" "%TEMP_DIR%\"

REM Creer un fichier README explicatif
echo # Code source du portfolio > "%TEMP_DIR%\README.md"
echo. >> "%TEMP_DIR%\README.md"
echo Ce dépôt contient le code source de mon portfolio. >> "%TEMP_DIR%\README.md"
echo Pour visualiser le site, veuillez visiter: https://fahedoo.github.io/Portfolio >> "%TEMP_DIR%\README.md"

REM Creer un fichier .nojekyll pour indiquer a GitHub de ne pas utiliser Jekyll
echo. > "%TEMP_DIR%\.nojekyll"

REM Creer un fichier HTML simple pour la redirection
echo ^<!DOCTYPE html^> > "%TEMP_DIR%\index.html"
echo ^<html^> >> "%TEMP_DIR%\index.html"
echo ^<head^> >> "%TEMP_DIR%\index.html"
echo   ^<meta charset="UTF-8"^> >> "%TEMP_DIR%\index.html"
echo   ^<title^>Portfolio de Fahed^</title^> >> "%TEMP_DIR%\index.html"
echo   ^<meta http-equiv="refresh" content="0; URL=https://github.com/Fahedoo/Portfolio"^> >> "%TEMP_DIR%\index.html"
echo ^</head^> >> "%TEMP_DIR%\index.html"
echo ^<body^> >> "%TEMP_DIR%\index.html"
echo   ^<p^>Redirection vers le dépôt GitHub...^</p^> >> "%TEMP_DIR%\index.html"
echo ^</body^> >> "%TEMP_DIR%\index.html"
echo ^</html^> >> "%TEMP_DIR%\index.html"

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
git commit -m "Deploiement du code source sur GitHub Pages"

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
echo Votre code source est maintenant disponible sur:
echo https://github.com/Fahedoo/Portfolio/tree/gh-pages
echo.
echo REMARQUE: Cette methode a deploye votre code source, pas le site construit.
echo Pour un deploiement complet, vous devrez resoudre les problemes
echo de construction avec Vite.
echo ===================================================
echo.
pause
