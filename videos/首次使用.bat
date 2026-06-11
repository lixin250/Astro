@echo off
chcp 65001 >nul
cd /d "%~dp0"
call _init.bat
if errorlevel 1 exit /b 1

echo ========================================
echo   视频站首次使用向导
echo ========================================
echo.
echo 将依次执行 4 步：
echo   1. 登录 Cloudflare
echo   2. 创建 R2 bucket
echo   3. 上传 videos\files\ 里的视频
echo   4. 部署到 videos.lixin.dev
echo.
pause

echo.
echo -------- 步骤 1/4: 登录 Cloudflare --------
call npx wrangler login
if errorlevel 1 goto :failed

echo.
echo -------- 步骤 2/4: 创建 R2 bucket --------
call npm run setup
if errorlevel 1 goto :failed

echo.
echo -------- 步骤 3/4: 上传视频 --------
if not exist "files\" (
    echo [提示] files 文件夹为空或不存在，跳过上传。
    echo 请把视频放进 videos\files\ 后，再双击 upload-videos.bat
) else (
    call npm run upload
    if errorlevel 1 goto :failed
)

echo.
echo -------- 步骤 4/4: 部署 Worker --------
call npm run deploy
if errorlevel 1 goto :failed

echo.
echo ========================================
echo   全部完成！访问 https://videos.lixin.dev
echo ========================================
pause
exit /b 0

:failed
echo.
echo [失败] 向导中断，可单独双击对应 bat 重试。
pause
exit /b 1
