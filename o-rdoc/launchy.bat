@ECHO OFF
IF NOT "%~f0" == "~f0" GOTO :WinNT
@"C:\Ruby22-x64\bin\ruby.exe" "C:/git/thinkful-projects/bball-battle/o-rdoc/launchy" %1 %2 %3 %4 %5 %6 %7 %8 %9
GOTO :EOF
:WinNT
@"C:\Ruby22-x64\bin\ruby.exe" "%~dpn0" %*
