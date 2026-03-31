# BioCare-Appv1

1. npm create vite@latest biocare-web -- --template react
2. cd biocare-web
3. npm install
4. npm run dev

- # Steps to Build and Upload Firmware to ESP32
1. Go to PlatformIO
2. Create a New Project (If no Project Created Already)
      a. Board Name (upesy WROOM)
3. Upload (Found on Left Side)

npm create vite@latest biocare-web -- --template react
cd biocare-web
npm install
npm run dev //run dev locally
npm install -g eas-cli //run this to download EAS
eas login //log in to your eas account -- from the expo.com
eas whoami //check to see if youve logged in properly



npm install vite-plugin-pwa
npm install --global eas-cli

npm run build //build actual application

//EXPO EAS
eas build:configure -p all //for all platforms can either be ios or android
eas build -p ios     

// uninstalling EAS
npm -g uninstall expo-cli --save