# React + Vite
### this application basically use websocket to make a realtime messaging system and kafka for dealing with large amount of users and services 
### react js and mui for the front end 
### spring boot for the backend
 - ## Home Screen
  ![click me](https://github.com/IMDADMI/kafka-websocket-chatApp/blob/master/src/assets/home.PNG?raw=true)
# how to run the app
### to get started you need to install kafka server and launch the following commands :
## backend (https://github.com/IMDADMI/kafka-websocket-chatApp-backend)
* .\bin\windows\zookeeper-server-start.bat .\config\zookeeper.properties : to start zookeeper 
* .\bin\windows\kafka-server-start.bat .\config\server.properties : to start the kafka server
* create a database named (view in the properties file of the backend part (kafka-websocket-chatApp-backend))
## front end
* npm i : to install the packages
* npm run dev to start the application
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
