@echo off
:BEGIN
echo (1) Dev
echo (2) Dev with build
echo (3) Local with generate
echo (4) Local
echo (5) Eslint
echo (6) Eslint Fix
CHOICE /N /C:123456 /M "Pick mode"
IF ERRORLEVEL == 6 GOTO Eslint-Fix
IF ERRORLEVEL == 5 GOTO Eslint
IF ERRORLEVEL == 4 GOTO Local
IF ERRORLEVEL == 3 GOTO Local-with-generate
IF ERRORLEVEL == 2 GOTO Dev-Build
IF ERRORLEVEL == 1 GOTO Dev
GOTO END
:Dev
cd .theme
npm run dev
cd ..
:Dev-Build
cd .theme
npm run dev:build
cd ..
:Local
cd .theme
npx http-server .theme/.output/public -p 3000
cd ..
:Local-with-generate
cd .theme
npm run local
cd ..
:Eslint
cd .theme
npx eslint .
cd ..
:Eslint-Fix
cd .theme
npx eslint . --fix
cd ..
END: