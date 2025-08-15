@echo off
echo ===================================================
echo  Reparation de l'etat Git
echo ===================================================
echo.

echo 1. Sauvegarde des changements non commites (si necessaire)...
git stash -u

echo 2. Retour a la branche master...
git checkout master

echo 3. Creation d'une nouvelle branche temporaire (si master n'existe pas)...
git checkout -b temp_master 2>nul

echo 4. Essai de supprimer la reference a gh-pages-temp...
git worktree prune
git branch -D gh-pages-temp 2>nul

echo 5. Verification de l'etat actuel...
git branch

echo.
echo ===================================================
echo Operation terminee.
echo Vous devriez maintenant etre sur la branche master ou une nouvelle branche temp_master.
echo Vous pouvez maintenant executer deploy_cmd.bat pour deployer votre site.
echo ===================================================
pause
