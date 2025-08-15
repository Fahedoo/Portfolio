@echo off
echo ===================================================
echo  Construction et deploiement du portfolio (CMD)
echo ===================================================
echo.
echo Ce script va construire et deployer votre site sans utiliser PowerShell
echo.

REM Verifier si node_modules existe
if not exist "node_modules" (
    echo Le dossier node_modules n'existe pas. Vous devez installer les dependances.
    echo Executez 'npm install' avant de continuer.
    pause
    exit /b 1
)

REM Tentative de construction avec plusieurs methodes
echo Construction du projet - tentative 1 (npx)...
call npx vite build

REM Verifier si la construction a reussi
if exist "dist" goto :build_success

echo Construction avec npx a echoue, tentative 2 (binaire direct)...
if exist "node_modules\.bin\vite.cmd" (
    call node_modules\.bin\vite.cmd build
) else if exist "node_modules\.bin\vite.exe" (
    call node_modules\.bin\vite.exe build
) else if exist "node_modules\.bin\vite" (
    call node_modules\.bin\vite build
)

REM Verifier si la construction a reussi
if exist "dist" goto :build_success

echo Construction avec binaire direct a echoue, tentative 3 (npm)...
call npm run build

REM Verifier si la construction a reussi
if not exist "dist" (
    echo Toutes les tentatives de construction ont echoue.
    echo.
    echo Options pour construire manuellement :
    echo 1. Executez 'npm run build' dans une invite de commande
    echo 2. Executez 'npx vite build' dans une invite de commande
    echo 3. Ouvrez un terminal dans VS Code et executez 'npm run build'
    echo.
    echo Une fois la construction reussie, relancez ce script.
    pause
    exit /b 1
)

:build_success
echo Construction reussie!

REM Preparer le deploiement GitHub Pages
echo Preparation du deploiement GitHub Pages...

REM Creer un dossier temporaire
set "temp_dir=temp_deploy_%RANDOM%"
mkdir %temp_dir%

REM Copier les fichiers de dist
echo Copie des fichiers...
xcopy "dist\*" "%temp_dir%\" /E /I /Y

REM Initialiser un depot Git dans le dossier temporaire
cd %temp_dir%
git init
git checkout --orphan gh-pages

REM Ajouter tous les fichiers
git add .
git commit -m "Deploiement sur GitHub Pages"

REM Obtenir l'URL du depot distant
cd ..
for /f "tokens=* USEBACKQ" %%F in (`git remote get-url origin`) do set "remote_url=%%F"

REM Configurer le depot distant et pousser
cd %temp_dir%
git remote add origin %remote_url%
git push origin gh-pages -f

REM Revenir au dossier original et nettoyer
cd ..
rmdir /S /Q %temp_dir%

echo.
echo ===================================================
echo Deploiement termine!
echo Votre site est maintenant disponible sur: https://fahedoo.github.io/portfolio
echo N'oubliez pas d'activer GitHub Pages dans les parametres de votre depot.
echo ===================================================
pause
