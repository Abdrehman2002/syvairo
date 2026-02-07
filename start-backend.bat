@echo off
echo.
echo ========================================
echo   Starting Retell AI Backend Server
echo ========================================
echo.

cd server

echo [1/2] Checking dependencies...
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
)

echo.
echo [2/2] Starting server...
echo.
call npm start
