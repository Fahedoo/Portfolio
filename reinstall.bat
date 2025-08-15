@echo off
echo ===================================================
echo  Reinstallation des dependances npm
echo ===================================================
echo.

echo Cette commande va supprimer le dossier node_modules et reinstaller toutes les dependances.
echo Cela peut prendre quelques minutes.
echo.
echo Appuyez sur une touche pour continuer...
pause >nul

echo Suppression du dossier node_modules...
rmdir /S /Q node_modules

echo Suppression du fichier package-lock.json...
del /F /Q package-lock.json

echo Installation des dependances...
call npm install

echo.
echo Installation terminee. Verifiez qu'il n'y a pas d'erreurs ci-dessus.
echo.
echo Vous pouvez maintenant essayer de construire le projet avec:
echo npm run build
echo.
pause
