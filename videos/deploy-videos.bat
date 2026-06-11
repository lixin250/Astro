@echo off
chcp 65001 >nul
cd /d "%~dp0"
call _init.bat
if errorlevel 1 exit /b 1

echo ========================================
echo   部署视频站 Worker 到 videos.lixin.dev
echo ========================================
echo.

call npm run deploy
if errorlevel 1 (
    echo.
    echo [失败] 部署未完成。如未登录，请先双击 login-cloudflare.bat
    pause
    exit /b 1
)

echo.
echo [完成] 已部署到 https://videos.lixin.dev
pause
