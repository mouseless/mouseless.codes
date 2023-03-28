@echo off
:BEGIN
echo (1) Local
echo (2) Production
CHOICE /N /C:12 /M "Pick mode"
IF ERRORLEVEL == 2 GOTO Production
IF ERRORLEVEL == 1 GOTO Local
GOTO END
:Local
cd .theme
npm run generate:local
cd ..
:Production
cd .theme
npm run generate:production
cd ..
END: