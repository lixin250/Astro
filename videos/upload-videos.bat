@echo off
chcp 65001 >nul
cd /d "%~dp0"
call _init.bat
if errorlevel 1 exit /b 1

echo ========================================
echo   上传 files 文件夹到 Cloudflare R2
echo ========================================
echo.

if not exist "files\" (
    echo [错误] files 文件夹不存在，请把视频放进 videos\files\
    pause
    exit /b 1
)

call npm run upload
if errorlevel 1 (
    echo.
    echo [失败] 上传未完成。如未登录 Cloudflare，请先双击 login-cloudflare.bat
    pause
    exit /b 1
)

echo.
echo [完成] 视频已上传到 R2，访问 https://videos.lixin.dev
pause
