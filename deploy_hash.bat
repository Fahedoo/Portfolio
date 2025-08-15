@echo off
echo ===================================================
echo  Correction du routage et deploiement
echo ===================================================
echo.

REM Configuration
set "REPO_URL=https://github.com/Fahedoo/Portfolio.git"
set "BRANCH=gh-pages"
set "BUILD_DIR=dist"

echo Tentative de construction du projet...
echo.

REM Essayer de construire avec NPM
call npm run build

REM Verifier si la construction a reussi
if not exist "%BUILD_DIR%" (
    echo.
    echo La construction a echoue. Le processus ne peut pas continuer.
    echo.
    pause
    exit /b 1
)

echo.
echo Construction reussie! Préparation des fichiers pour GitHub Pages...
echo.

REM Creer un dossier temporaire
set "TEMP_DIR=temp_deploy_%RANDOM%"
mkdir "%TEMP_DIR%"

REM Copier les fichiers de build
echo Copie des fichiers de build...
xcopy "%BUILD_DIR%\*" "%TEMP_DIR%\" /E /I /Y

REM Creer un fichier .nojekyll pour indiquer a GitHub de ne pas utiliser Jekyll
echo. > "%TEMP_DIR%\.nojekyll"

REM Créer un fichier 404.html qui redirige vers index.html
echo ^<!DOCTYPE html^> > "%TEMP_DIR%\404.html"
echo ^<html^> >> "%TEMP_DIR%\404.html"
echo ^<head^> >> "%TEMP_DIR%\404.html"
echo   ^<meta charset="UTF-8"^> >> "%TEMP_DIR%\404.html"
echo   ^<meta http-equiv="X-UA-Compatible" content="IE=edge"^> >> "%TEMP_DIR%\404.html"
echo   ^<meta name="viewport" content="width=device-width, initial-scale=1.0"^> >> "%TEMP_DIR%\404.html"
echo   ^<title^>Redirection^</title^> >> "%TEMP_DIR%\404.html"
echo   ^<script^> >> "%TEMP_DIR%\404.html"
echo     window.location.href = '/Portfolio/'; >> "%TEMP_DIR%\404.html"
echo   ^</script^> >> "%TEMP_DIR%\404.html"
echo ^</head^> >> "%TEMP_DIR%\404.html"
echo ^<body^> >> "%TEMP_DIR%\404.html"
echo   Redirection... >> "%TEMP_DIR%\404.html"
echo ^</body^> >> "%TEMP_DIR%\404.html"
echo ^</html^> >> "%TEMP_DIR%\404.html"

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
git commit -m "Correction du routage pour GitHub Pages"

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
echo Remarques importantes:
echo 1. Nous avons remplacé BrowserRouter par HashRouter pour 
echo    le routage compatible avec GitHub Pages
echo 2. L'URL de vos pages aura maintenant un # (par exemple:
echo    /Portfolio/#/projets au lieu de /Portfolio/projets)
echo 3. Patientez quelques minutes pour que les changements
echo    soient visibles sur GitHub Pages
echo ===================================================
echo.
pause
