# Cauule

Hi, welcome Cauule, the app aimed as a platform for small/unpopulated towns in Spain to gain population and businesses.

Currently built in Angular 11 for the frontend and using Firebase as the database.


## Structure of the app:

### Main page:
You will be able to select a province where you can find all the registered municipalities in the app. Additionally, it's possible to create a Cauule account to receive info about an specific municipality via a free subscription.  
<img style="width: 500px;" src="https://i.imgur.com/5ob3RVV.png"/>

### Municipality page:
When selecting a municipality, you will be able to see all possible details about the place:
Mostly divided in 4 main sections:

#### INFO:
Main information about population, taxes, COVID statistics and main services.
<img style="width: 500px;" src="https://i.imgur.com/wQK6qOp.png"/>

#### TURISMO (TOURISM):
Main tourist attractions in the municipality:
<img style="width: 500px;" src="https://i.imgur.com/HaOnMuc.png"/>

#### VIVIENDA (ACCOMMODATION):
Allows the posting of accommodation ads in that municipality and the possibility to search using a menu:
<img style="width: 500px;" src="https://i.imgur.com/INKIfZH.png"/>

#### EMPLEO (JOBS):
Allows the posting of employment ads in that municipality and the possibility to search using the search bar:
<img style="width: 500px;" src="https://i.imgur.com/LXdzxLQ.png"/>




## Technologies requirements:

NodeJS 12.x

Angular 11


## Installation (Ubuntu 18.04):

### Install NodeJS, npm and angular CLI:

*sudo apt-get upgrade*

*sudo apt-get update*

*sudo apt-get install curl -y*

*curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -*

*sudo apt-get install nodejs -y*   (This install both required NodeJS and npm)

*npm install -g @angular/cli*

### Install Firebase API:

In the terminal in the main directory of our project:

*npm install firebase @angular/fire*


## Execute the program:

In the terminal in the main directory of our project:

*ng serve*

It will be available at localhost:4200 if that socket is not occupied.




## Santa Claus' list:
All the improvements I want to add to this project:

- [ ] Migrate from Firebase to MongoDB
- [ ] Collect usage data for a recommendation system
- [ ] Profile interface to manage subscriptions

