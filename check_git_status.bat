@echo off
echo ===================================================
echo  Verification de l'etat Git pour GitHub Pages
echo ===================================================
echo.

echo Verification des branches Git...
git branch -a
echo.

echo Verification de la branche actuelle...
git branch --show-current
echo.

echo Verification des remotes Git...
git remote -v
echo.

echo Verification de l'URL de votre depot GitHub...
git config --get remote.origin.url
echo.

echo ===================================================
echo Actions recommandees:
echo.
echo 1. Verifiez que la branche gh-pages existe a distance
echo 2. Allez sur GitHub.com et connectez-vous
echo 3. Accedez a votre depot "Portfolio"
echo 4. Cliquez sur l'onglet "Settings" (Parametres)
echo 5. Dans le menu de gauche, cliquez sur "Pages"
echo 6. Sous "Source", verifiez:
echo    - "Deploy from a branch" est selectionne
echo    - La branche "gh-pages" est selectionnee
echo    - Le dossier "/ (root)" est selectionne
echo 7. Cliquez sur "Save" si necessaire
echo 8. Attendez quelques minutes et visitez:
echo    https://fahedoo.github.io/Portfolio/
echo ===================================================
echo.
pause
