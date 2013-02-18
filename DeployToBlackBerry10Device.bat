REM Deply to BlackBerry 10 device on Windows

set PATH="C:\RIM\BlackBerry 10 WebWorks SDK 1.0.4.5\dependencies\tools\bin";%PATH%
REM USB
set myip=169.254.0.1
REM home
set myip=192.168.100.135
REM office
set myip=192.168.100.127
set app=BBOA.bar
REM blackberry-deploy -installApp -device %myip% -package "C:\Users\jiyang\AppData\Local\Research In Motion\debugtoken1.bar"  -password 1q2w3e 
blackberry-deploy -installApp -device %myip% -package c:\temp\out\device\%app% -password 1q2w3e

pause