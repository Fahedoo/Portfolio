@echo off
echo ===================================================
echo  Deploiement sur GitHub Pages - Solution Simple
echo ===================================================
echo.

REM Configuration
set "REPO_URL=https://github.com/Fahedoo/Portfolio.git"
set "BRANCH=gh-pages"
set "BUILD_DIR=dist"

echo 1. Construction du projet...
echo.
echo Note: Si cette etape echoue, ouvrez une invite de commande et
echo executez 'npm run build' manuellement, puis relancez ce script.
echo.
call npm run build

REM Verifier si la construction a reussi
if not exist "%BUILD_DIR%" (
    echo.
    echo La construction a echoue. Veuillez construire le projet manuellement
    echo avec 'npm run build' avant de continuer.
    echo.
    pause
    exit /b 1
)

echo.
echo 2. Preparation du deploiement...
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
