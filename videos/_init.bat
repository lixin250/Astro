@echo off
set "VIDEOS_DIR=%~dp0"
set "ROOT_DIR=%VIDEOS_DIR%.."

where npm >nul 2>&1
if errorlevel 1 (
    echo [错误] 未找到 npm，请先安装 Node.js: https://nodejs.org
    pause
    exit /b 1
)

cd /d "%ROOT_DIR%"
if not exist "node_modules\" (
    echo [准备] 首次运行，正在安装依赖（只需一次）...
    call npm install
    if errorlevel 1 (
        echo [错误] 依赖安装失败。
        pause
        exit /b 1
    )
    echo.
)

cd /d "%VIDEOS_DIR%"
