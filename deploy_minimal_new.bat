@echo off
echo ===================================================
echo  Deploiement ultra minimal - HTML simple
echo ===================================================
echo.

REM Configuration
set "REPO_URL=https://github.com/Fahedoo/Portfolio.git"
set "BRANCH=gh-pages"

REM Creer un dossier temporaire
set "TEMP_DIR=temp_deploy_%RANDOM%"
mkdir "%TEMP_DIR%"

REM Créer un fichier index.html ultra simple
echo ^<!DOCTYPE html^> > "%TEMP_DIR%\index.html"
echo ^<html lang="fr"^> >> "%TEMP_DIR%\index.html"
echo ^<head^> >> "%TEMP_DIR%\index.html"
echo   ^<meta charset="UTF-8"^> >> "%TEMP_DIR%\index.html"
echo   ^<meta name="viewport" content="width=device-width, initial-scale=1.0"^> >> "%TEMP_DIR%\index.html"
echo   ^<title^>Portfolio de Fahed^</title^> >> "%TEMP_DIR%\index.html"
echo   ^<style^> >> "%TEMP_DIR%\index.html"
echo     body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; text-align: center; } >> "%TEMP_DIR%\index.html"
echo     h1 { color: #ff3e00; } >> "%TEMP_DIR%\index.html"
echo   ^</style^> >> "%TEMP_DIR%\index.html"
echo ^</head^> >> "%TEMP_DIR%\index.html"
echo ^<body^> >> "%TEMP_DIR%\index.html"
echo   ^<h1^>Portfolio de Fahed^</h1^> >> "%TEMP_DIR%\index.html"
echo   ^<p^>Bienvenue sur mon portfolio.^</p^> >> "%TEMP_DIR%\index.html"
echo   ^<p^>Ce site est en cours de déploiement.^</p^> >> "%TEMP_DIR%\index.html"
echo   ^<p^>^<strong^>Date et heure:^</strong^> %DATE% %TIME%^</p^> >> "%TEMP_DIR%\index.html"
echo ^</body^> >> "%TEMP_DIR%\index.html"
echo ^</html^> >> "%TEMP_DIR%\index.html"

REM Creer un fichier .nojekyll
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
git commit -m "Page HTML simple pour test"

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
echo Votre page simple est maintenant disponible sur:
echo https://fahedoo.github.io/Portfolio
echo.
echo Utilisez ce script uniquement pour tester le déploiement.
echo Une fois que cette page s'affiche correctement, utilisez
echo les autres scripts pour déployer votre portfolio complet.
echo ===================================================
echo.
pause
