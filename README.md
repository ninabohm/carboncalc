# Project carboncalc

A micro-services cluster that uses Apache Kafka as messaging broker. 
This project is based on a tutorial by Michal Guay https://www.youtube.com/watch?v=JJEKPqSlXvk&t=494s&ab_channel=MichaelGuay 

Users that want to offset their footprint can see available carbon certificates and purchase certificates via an API Gateway. 
User data is handled in the user service, certificate data is handles in the certificate service. 

# Setup 

Prerequisites:
1. IDE of your choice installed, e.g. IntelliJ or VSCode
2. Install Java Runtime Environment 
3. Install Apache Kafka https://kafka.apache.org/quickstart
4. start zookeeper according to the instructions in 1.
5. start kafka according to the instructions in 1.

Copy code & run services:

1. clone repo & cd into `carboncalc`
2. run `npm install`
3. open a new terminal window, cd into `user-service` and run 
   1. `npm install`
   2. `npm run start:dev`
4. open a new terminal window, cd into `certificate-service` and run 
   1. `npm install`
   2. `npm run start:dev`
5. open a new terminal window, cd into `api-gateway` and run
   1. `npm install`
   2. `npm run start:dev`
6. open Postman and send a `GET`request to `http://localhost:3001/certificate`to get all certificates
