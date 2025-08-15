@echo off
echo ===================================================
echo  Creation d'une page minimale fonctionnelle
echo ===================================================
echo.

REM Configuration
set "REPO_URL=https://github.com/Fahedoo/Portfolio.git"
set "BRANCH=gh-pages"
set "TEMP_DIR=temp_deploy_%RANDOM%"

echo Creation d'une page HTML minimale garantie de fonctionner...
mkdir "%TEMP_DIR%"

REM Creer un fichier index.html minimal
echo ^<!DOCTYPE html^> > "%TEMP_DIR%\index.html"
echo ^<html lang="fr"^> >> "%TEMP_DIR%\index.html"
echo ^<head^> >> "%TEMP_DIR%\index.html"
echo   ^<meta charset="UTF-8"^> >> "%TEMP_DIR%\index.html"
echo   ^<meta name="viewport" content="width=device-width, initial-scale=1.0"^> >> "%TEMP_DIR%\index.html"
echo   ^<title^>Portfolio de Fahed^</title^> >> "%TEMP_DIR%\index.html"
echo   ^<style^> >> "%TEMP_DIR%\index.html"
echo     body { >> "%TEMP_DIR%\index.html"
echo       font-family: Arial, sans-serif; >> "%TEMP_DIR%\index.html"
echo       max-width: 800px; >> "%TEMP_DIR%\index.html"
echo       margin: 0 auto; >> "%TEMP_DIR%\index.html"
echo       padding: 20px; >> "%TEMP_DIR%\index.html"
echo       line-height: 1.6; >> "%TEMP_DIR%\index.html"
echo       color: #333; >> "%TEMP_DIR%\index.html"
echo     } >> "%TEMP_DIR%\index.html"
echo     h1 { color: #553c9a; } >> "%TEMP_DIR%\index.html"
echo     .container { >> "%TEMP_DIR%\index.html"
echo       border: 1px solid #ddd; >> "%TEMP_DIR%\index.html"
echo       padding: 20px; >> "%TEMP_DIR%\index.html"
echo       border-radius: 5px; >> "%TEMP_DIR%\index.html"
echo       background-color: #f9f9f9; >> "%TEMP_DIR%\index.html"
echo     } >> "%TEMP_DIR%\index.html"
echo     .footer { >> "%TEMP_DIR%\index.html"
echo       margin-top: 40px; >> "%TEMP_DIR%\index.html"
echo       padding-top: 20px; >> "%TEMP_DIR%\index.html"
echo       border-top: 1px solid #ddd; >> "%TEMP_DIR%\index.html"
echo       font-size: 0.8em; >> "%TEMP_DIR%\index.html"
echo     } >> "%TEMP_DIR%\index.html"
echo   ^</style^> >> "%TEMP_DIR%\index.html"
echo ^</head^> >> "%TEMP_DIR%\index.html"
echo ^<body^> >> "%TEMP_DIR%\index.html"
echo   ^<h1^>Portfolio de Fahed^</h1^> >> "%TEMP_DIR%\index.html"
echo   ^<div class="container"^> >> "%TEMP_DIR%\index.html"
echo     ^<h2^>Page temporaire^</h2^> >> "%TEMP_DIR%\index.html"
echo     ^<p^>Cette page est une version temporaire de mon portfolio pendant que nous résolvons quelques problèmes techniques.^</p^> >> "%TEMP_DIR%\index.html"
echo     ^<p^>Vous pouvez me contacter à : ^<a href="mailto:votre-email@example.com"^>votre-email@example.com^</a^>^</p^> >> "%TEMP_DIR%\index.html"
echo   ^</div^> >> "%TEMP_DIR%\index.html"
echo   ^<div class="footer"^> >> "%TEMP_DIR%\index.html"
echo     ^<p^>© 2025 Fahed - Tous droits réservés^</p^> >> "%TEMP_DIR%\index.html"
echo   ^</div^> >> "%TEMP_DIR%\index.html"
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
git commit -m "Page minimale fonctionnelle"

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
echo Une page minimale a ete deployee et devrait s'afficher
echo correctement a l'adresse :
echo https://fahedoo.github.io/Portfolio
echo.
echo Cette page simple nous permet de verifier que GitHub Pages
echo fonctionne correctement. Une fois confirmé, nous pourrons
echo deployer la version complete de votre portfolio.
echo ===================================================
echo.
pause
