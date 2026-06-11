@echo off
chcp 65001 >nul
cd /d "%~dp0"
call _init.bat
if errorlevel 1 exit /b 1

echo ========================================
echo   登录 Cloudflare（首次使用需要）
echo ========================================
echo.
echo 即将打开浏览器，请按提示登录 Cloudflare 账号。
echo.

call npx wrangler login
if errorlevel 1 (
    echo.
    echo [失败] 登录未完成，请重试。
    pause
    exit /b 1
)

echo.
echo [完成] 已登录 Cloudflare。
pause
