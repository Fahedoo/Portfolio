@echo off
echo ===================================================
echo  Diagnostic GitHub Pages - Test HTML Simple
echo ===================================================
echo.

REM Configuration
set "REPO_URL=https://github.com/Fahedoo/Portfolio.git"
set "BRANCH=gh-pages"
set "TEMP_DIR=temp_deploy_%RANDOM%"

echo Creation d'une page HTML de test...
mkdir "%TEMP_DIR%"

REM Creer un fichier index.html minimal avec informations de debug
echo ^<!DOCTYPE html^> > "%TEMP_DIR%\index.html"
echo ^<html lang="fr"^> >> "%TEMP_DIR%\index.html"
echo ^<head^> >> "%TEMP_DIR%\index.html"
echo   ^<meta charset="UTF-8"^> >> "%TEMP_DIR%\index.html"
echo   ^<meta name="viewport" content="width=device-width, initial-scale=1.0"^> >> "%TEMP_DIR%\index.html"
echo   ^<title^>Test GitHub Pages - Diagnostic^</title^> >> "%TEMP_DIR%\index.html"
echo   ^<style^> >> "%TEMP_DIR%\index.html"
echo     body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; } >> "%TEMP_DIR%\index.html"
echo     h1 { color: #ff3e00; } >> "%TEMP_DIR%\index.html"
echo     pre { background: #f0f0f0; padding: 10px; border-radius: 5px; overflow-x: auto; } >> "%TEMP_DIR%\index.html"
echo     .success { color: green; font-weight: bold; } >> "%TEMP_DIR%\index.html"
echo     .highlight { background-color: yellow; padding: 2px 5px; } >> "%TEMP_DIR%\index.html"
echo   ^</style^> >> "%TEMP_DIR%\index.html"
echo ^</head^> >> "%TEMP_DIR%\index.html"
echo ^<body^> >> "%TEMP_DIR%\index.html"
echo   ^<h1^>Test de deploiement GitHub Pages^</h1^> >> "%TEMP_DIR%\index.html"
echo   ^<p class="success"^>Si vous voyez cette page, le deploiement sur GitHub Pages fonctionne correctement!^</p^> >> "%TEMP_DIR%\index.html"
echo   ^<p^>URL attendue: ^<strong^>https://fahedoo.github.io/Portfolio/^</strong^>^</p^> >> "%TEMP_DIR%\index.html"
echo   ^<h2^>Informations de debug:^</h2^> >> "%TEMP_DIR%\index.html"
echo   ^<pre^>Date et heure du deploiement: %DATE% %TIME%^</pre^> >> "%TEMP_DIR%\index.html"
echo   ^<h2^>Actions necessaires:^</h2^> >> "%TEMP_DIR%\index.html"
echo   ^<ol^> >> "%TEMP_DIR%\index.html"
echo     ^<li^>Allez sur GitHub.com et connectez-vous^</li^> >> "%TEMP_DIR%\index.html"
echo     ^<li^>Accedez a votre depot "Portfolio"^</li^> >> "%TEMP_DIR%\index.html"
echo     ^<li^>Cliquez sur l'onglet ^<span class="highlight"^>"Settings"^</span^> (Parametres)^</li^> >> "%TEMP_DIR%\index.html"
echo     ^<li^>Dans le menu de gauche, cliquez sur ^<span class="highlight"^>"Pages"^</span^>^</li^> >> "%TEMP_DIR%\index.html"
echo     ^<li^>Verifiez que ^<span class="highlight"^>"Deploy from a branch"^</span^> est selectionne^</li^> >> "%TEMP_DIR%\index.html"
echo     ^<li^>Verifiez que la branche ^<span class="highlight"^>"gh-pages"^</span^> est selectionnee^</li^> >> "%TEMP_DIR%\index.html"
echo     ^<li^>Verifiez que le dossier ^<span class="highlight"^>"/ (root)"^</span^> est selectionne^</li^> >> "%TEMP_DIR%\index.html"
echo     ^<li^>Cliquez sur ^<span class="highlight"^>"Save"^</span^> si necessaire^</li^> >> "%TEMP_DIR%\index.html"
echo     ^<li^>Verifiez la section "Custom domain" - si elle est vide, c'est normal^</li^> >> "%TEMP_DIR%\index.html"
echo     ^<li^>Attendez quelques minutes (jusqu'a 10 minutes) et rafraichissez cette page^</li^> >> "%TEMP_DIR%\index.html"
echo     ^<li^>Essayez d'ouvrir la page en navigation privee pour eviter les problemes de cache^</li^> >> "%TEMP_DIR%\index.html"
echo   ^</ol^> >> "%TEMP_DIR%\index.html"
echo   ^<h2^>Problemes connus:^</h2^> >> "%TEMP_DIR%\index.html"
echo   ^<ul^> >> "%TEMP_DIR%\index.html"
echo     ^<li^>Le deploiement initial peut prendre jusqu'a 10 minutes^</li^> >> "%TEMP_DIR%\index.html"
echo     ^<li^>Verifiez que les parametres GitHub Pages sont correctement configures^</li^> >> "%TEMP_DIR%\index.html"
echo     ^<li^>Si vous utilisez un nom de depot autre que "Portfolio", l'URL sera differente^</li^> >> "%TEMP_DIR%\index.html"
echo     ^<li^>Pour les applications React, assurez-vous d'utiliser HashRouter au lieu de BrowserRouter^</li^> >> "%TEMP_DIR%\index.html"
echo   ^</ul^> >> "%TEMP_DIR%\index.html"
echo ^</body^> >> "%TEMP_DIR%\index.html"
echo ^</html^> >> "%TEMP_DIR%\index.html"

REM Creer un fichier README.md
echo # Test de diagnostic pour GitHub Pages > "%TEMP_DIR%\README.md"
echo. >> "%TEMP_DIR%\README.md"
echo Ce depot contient une page HTML simple pour diagnostiquer les problemes de deploiement sur GitHub Pages. >> "%TEMP_DIR%\README.md"
echo. >> "%TEMP_DIR%\README.md"
echo Si le deploiement fonctionne correctement, vous devriez pouvoir acceder a la page a l'adresse suivante: >> "%TEMP_DIR%\README.md"
echo [https://fahedoo.github.io/Portfolio/](https://fahedoo.github.io/Portfolio/) >> "%TEMP_DIR%\README.md"

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
git commit -m "Test de diagnostic GitHub Pages"

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
echo Deploiement de diagnostic termine!
echo.
echo INSTRUCTIONS:
echo 1. Accedez a GitHub.com et ouvrez votre depot
echo 2. Allez dans Settings -> Pages
echo 3. Verifiez que la source est configuree sur la branche gh-pages
echo 4. Attendez quelques minutes (jusqu'a 10 minutes)
echo 5. Visitez: https://fahedoo.github.io/Portfolio/
echo 6. Si la page ne s'affiche pas, essayez en navigation privee
echo.
echo IMPORTANT: GitHub Pages peut prendre jusqu'a 10 minutes
echo pour mettre a jour apres un nouveau deploiement.
echo ===================================================
echo.
pause
