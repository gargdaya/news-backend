# news-backend
## Installation
  Use the package manager [npm] to install.
  ```bash
  npm install
  ```
  To seed data to the mongodb or import json file from seederData folder
 ```bash
 npm install -g mongo-seeding-cli
 ```
 then
 ```bash
 seed -u mongodb://127.0.0.1:27017/news --drop-collections  ./seederData
 ```
 then
 ```bash
 npm run start
 ```
 
