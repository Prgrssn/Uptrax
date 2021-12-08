# UpTrax

<img width="400" alt="UpTrax Home Page screenshot" src="https://user-images.githubusercontent.com/79485612/145256944-bd98d82c-166e-49dd-b1a5-7ec8228a1306.png">

## Description

UpTrax connects backcountry users so that they can find new touring partners and plan backcountry ski tours around the area of Nelson, BC, Canada.

Every winter, skiers and snowboarders from all over Canada and the world, travel to Nelson to explore the backcountry and ride some of North America's deepest and lightest powder. Although there are many backcountry users in the area, it can be difficult to find reliable and knowledgeable ski touring partners. This is especially true if you're new to the sport or are relatively inexperienced.

The backcountry is an unforgiving environment where one mistake can quite literally cost you your life. This makes finding knowledgeable, reliable and experienced partners a must if you're to mitigate some of traveling in avalanche terrain.

UpTrax allows more experienced users to mentor those who are relatively new to the sport, so that they can pass down the knowledge that will allow them to travel safely in the backcountry.

With the addition of the Avalanche Canada avy & weather forecast, UpTrax makes it possible for users to start their trip planning in-app and to make more educated decisions about which objectives to tackle. 

<img width="401" alt="Screen Shot Match Page UpTrax" src="https://user-images.githubusercontent.com/79485612/145257128-6232043d-8b0a-4c52-b532-b653855a5a0f.png"> <img width="401" alt="Screen Shot Areas Page UpTrax" src="https://user-images.githubusercontent.com/79485612/145257202-b8d8275d-6501-405a-82f7-cd866a7f6c84.png">
<img width="402" alt="Screen Shot Forecast Page UpTrax" src="https://user-images.githubusercontent.com/79485612/145257336-bf0df13d-6ec2-4531-a0e9-24c713ebf04e.png">
<img width="401" alt="Screen Shot Profile Page UpTrax" src="https://user-images.githubusercontent.com/79485612/145259597-86c93b38-56e8-4522-9098-aa7c545ed2ec.png">


## Tech Stack

<img width="680" alt="tech stack used" src="https://user-images.githubusercontent.com/79485612/145256746-f3d8855d-b27b-4d1b-a511-f348e937a4c2.png">

## How To Use

- UpTrax is a mobile web application and is optimized to be used at a screen width of 400px. In the Chrome Dev Tools, set the screen width to 375-400px for the best experience.

- To clone and run this application, you'll need Git and Node.js

From the command line:

```
#Clone this repository
$ git@github.com:Prgrssn/uptrax.git

#CD into the repository
$ cd uptrax

#Install client side dependencies
$ cd server
$ npm install

#Install server side dependencies
$ cd ../client
$ npm install

#Migrate Tables into a MySQL Database
$ npx knex migrate:latest

#Seed User and Area Tables
$ npx knex seed:run
```

### Firebase User Auth:
- You'll have to signup for a firebase account if you do not already have one. 
- Create a project.
- Enable Authentication with email and password.
- Firebase will provide Firebase Config key value pairs. Enter this information into the .env.sample file
- Change the .env.sample to a .env file.

## APIs Used

- The Avalanche Canada API requires a key. You will have to request this from AvCanada if you want the forecast feature to work.
- Wireframes from FatMaps

## Pride Points

- The forecast page is updated auto-magically through the use of the Avalanche Canada API. Up until this project I had not made a call to an API that returned so much data in a complicated structure. I really enjoyed having to sort through the information to find what I wanted displayed on the app and that I had to use different JS methods to get that information to be human readable. 

- Having a full-stack web app: We did not really spend that much time on databases in the cohort, and although the tables only have 1:1 relationships, I'm excited that I was able to include this in the project.

- Firebase User Authentication: This took me a bit of time to figure out. It was a good challenge that taught me about auth contexts and forced me to think outside the box to create a data model for a user that worked with both firebase auth and my own database. I ended up using the firebase uid as a foreign key on the database so that both sides understood who was actively using the app. 


## Future Features

UpTrax aims to be a one stop shop with all the necessary resources for meeting new touring partners and planning ski tour objectives built into the app. Some of the features that I would like to work on after the Web Development Bootcamp include:

- In-App Messaging between Users
- Strava/TrailForks, Gaia Maps integrations so that users can track their tours and share them on their favourite platforms.
- Additional Touring Areas In BC.
- Additional Trip Planning Resources.
- Expand into other backcountry activity offerings such as mountain biking, climbing, hunting and fishing.
