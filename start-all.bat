@echo off
echo.
echo ========================================
echo   Starting Syvairo Full Stack App
echo ========================================
echo.
echo This will start:
echo   1. Backend Server (port 3001)
echo   2. Frontend App (port 5173)
echo.
echo Press any key to continue...
pause >nul

echo.
echo Starting Backend Server...
start cmd /k "cd server && npm start"

timeout /t 3 /nobreak >nul

echo Starting Frontend App...
start cmd /k "npm run dev"

echo.
echo ========================================
echo   Both servers are starting!
echo ========================================
echo.
echo Backend:  http://localhost:3001
echo Frontend: http://localhost:5173
echo.
echo Press any key to exit this window...
pause >nul
