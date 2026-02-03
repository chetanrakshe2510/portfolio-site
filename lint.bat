@echo off
echo ==========================================
echo RUNNING HTML LINTING (htmlhint)...
echo ==========================================
call npx htmlhint index.html --config .htmlhintrc
echo.
echo ==========================================
echo RUNNING CSS LINTING (stylelint)...
echo ==========================================
call npx stylelint style.css --config .stylelintrc.json
echo.
echo Linting Complete.
pause
