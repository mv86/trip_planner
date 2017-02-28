#Scotrip planner

Plan your holiday in Scotland with this app. Choose to visit Distilleries, Movie locations, Sports venues and Historical monuments.

##Team members:
  - Ross Loggie
  - Thomas Crines
  - Max Veasey
  - Adrian Tuckwell

##Requirements:
  You are required to build a day trip planner using Google Maps API and Google Places API. Users should be able to find out about interesting places or events near to where they're planning to go and save the ones they like most into an itinerary.


##Mimimal Viable Product (MVP):
  Must:
  - Users should be able to select a location
  - Be able to see local places of interest
  - Create an itinerary of the places they wish to visit that day

  Should:
  - Users should be able to persist data to a DB
  - Users can create a “road trip” of different cities and places to visit as they travel

##Installation instructions:
  
  Download repostiory or clone repostitory using git clone `https://github.com/mv86/trip_planner`

  Download Node.js - install instructions [here](https://nodejs.org/en/download/)
  
  Download MongoDb - install instructions [here](https://docs.mongodb.com/manual/tutorial/)

  Need 4 terminals running:

    Terminal 1. - NPM
    > npm install 
    > npm start

    Terminal 2. - MONGO SERVER
    > mongod (macOS)
    > sudo service mongod start (Ubuntu)

    Terminal 3. - WEB PACK
    > cd client/
    > npm install
    > npm start

    Terminal 4. - RUN TESTS
    > cd client/
    > npm test


