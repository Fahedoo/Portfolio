@echo off
echo ===================================================
echo  Solution simple pour revenir a master
echo ===================================================

echo Abandon des changements locaux...
git reset --hard

echo Creation d'une nouvelle branche master propre...
git checkout --orphan new_master

echo Nettoyage des fichiers...
git clean -fdx

echo Recuperation de la branche master d'origine...
git fetch origin master
git reset --hard origin/master

echo Renommage de la branche...
git branch -m master

echo.
echo ===================================================
echo Vous devriez maintenant etre sur une branche master propre.
echo Vous pouvez maintenant executer deploy_cmd.bat pour deployer votre site.
echo ===================================================
pause
