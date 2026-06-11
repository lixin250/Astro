@echo off
chcp 65001 >nul
cd /d "%~dp0"
call _init.bat
if errorlevel 1 exit /b 1

echo ========================================
echo   首次创建 R2 bucket（只需运行一次）
echo ========================================
echo.

call npm run setup
if errorlevel 1 (
    echo.
    echo [失败] 创建 bucket 未完成。如未登录，请先双击 login-cloudflare.bat
    pause
    exit /b 1
)

echo.
echo [完成] R2 bucket 已就绪，接下来双击 upload-videos.bat 上传视频。
pause
