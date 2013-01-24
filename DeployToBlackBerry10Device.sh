# Deply to BlackBerry 10 device on Macbook

export PATH="/Developer/SDKs/Research In Motion/BlackBerry 10 WebWorks SDK 1.0.4.5/dependencies/tools/bin":$PATH
export myip=192.168.100.107
blackberry-deploy -installApp -device $myip -package /Users/kk/out/device/BBOA.bar -password 1q2w3e

