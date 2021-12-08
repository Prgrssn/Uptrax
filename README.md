# UpTrax

<img width="400" alt="UpTrax Home Page screenshot" src="https://user-images.githubusercontent.com/79485612/145256944-bd98d82c-166e-49dd-b1a5-7ec8228a1306.png">

## Description

<div style="position: relative; width: 100%; height: 0; padding-top: 56.2500%;
 padding-bottom: 48px; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEx1dZRS5A&#x2F;view?embed">
  </iframe>
</div>
<a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEx1dZRS5A&#x2F;view?utm_content=DAEx1dZRS5A&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">UpTrax</a> by J Young

UpTrax connects backcountry users so that they can find new touring partners and plan backcountry ski tours around the area of Nelson, BC, Canada.

Every winter, skiers and snowboarders from all over Canada and the world, travel to Nelson to explore the backcountry and ride some of North America's deepest and lightest powder. Although there are many backcountry users in the area, it can be difficult to find reliable and knowledgeable ski touring partners. This is especially true if you're new to the sport or are relatively inexperienced.

The backcountry is an unforgiving environment where one mistake can quite literally cost you your life. This makes finding knowledgeable, reliable and experienced partners a must if you're to mitigate some of traveling in avalanche terrain.

UpTrax allows more experienced users to mentor those who are relatively new to the sport, so that they can pass down the knowledge that will allow them to travel safely in the backcountry.

With the addition of the Avalanche Canada avy & weather forecast, UpTrax makes it possible for users to start their trip planning in-app and to make more educated decisions about which objectives to tackle. 

<img width="401" alt="Screen Shot Match Page UpTrax" src="https://user-images.githubusercontent.com/79485612/145257128-6232043d-8b0a-4c52-b532-b653855a5a0f.png"> <img width="401" alt="Screen Shot Areas Page UpTrax" src="https://user-images.githubusercontent.com/79485612/145257202-b8d8275d-6501-405a-82f7-cd866a7f6c84.png">
<img width="402" alt="Screen Shot Forecast Page UpTrax" src="https://user-images.githubusercontent.com/79485612/145257336-bf0df13d-6ec2-4531-a0e9-24c713ebf04e.png">


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

- The Avalanche Canada API requires a key. You will have to request this from AvCanada if you want the forecast feature to work.


##Future Features

UpTrax aims to be a one stop shop with all the necessary resources for meeting new touring partners and planning ski tour objectives built into the app. Some of the features that I would like to work on after the Web Development Bootcamp include:

- In-App Messaging between Users
- Strava/TrailForks, Gaia Maps integrations so that users can track their tours and share them on their favourite platforms.
- Additional Touring Areas In BC.
- Additional Trip Planning Resources.
- Expand into other backcountry activity offerings such as mountain biking, climbing, hunting and fishing.
