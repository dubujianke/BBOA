REM Deply to BlackBerry 10 device on Windows

set PATH="C:\RIM\BlackBerry 10 WebWorks SDK 1.0.4.5\dependencies\tools\bin";%PATH%
set myip=192.168.100.127
set app=BBOA.bar
blackberry-deploy -installApp -device %myip% -package c:\temp\out\device\%app% -password 1q2w3e
pause