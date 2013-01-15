chrome/Ripple测试

����html/javascript���ļ���
/Users/kk/RippleSites/HelloWorld

��������� 
http://localhost:9910/HelloWorld/index.html 

----------------
编译
SDK Home

/Developer/SDKs/Research In Motion/BlackBerry 10 WebWorks SDK 1.0.4.5

Project Root

/Users/kk/RippleSites/BBOA

Archive Name

BBOA

Output Folder

/Users/kk/out

Bundle Number 41

-----------------------------
部署到真机器

export PATH="/Developer/SDKs/Research In Motion/BlackBerry 10 WebWorks SDK 1.0.4.5/dependencies/tools/bin":$PATH
export myip=192.168.100.107
blackberry-deploy -installApp -device $myip -package /Users/kk/out/device/BBOA.bar -password 1q2w3e