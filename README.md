<h1 align="center">
    <img alt="Happy" src="https://thexcodes.com/wp-content/uploads/2021/04/happy-site3.png" />
</h1>

<p align="center">
  <a href="#page_with_curl-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#books-requirements">Requirements</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-start">Start</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-starting-back-end">Node.js</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-starting-front-end">ReactJS</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#ipnone-starting-mobile">React Native</a>
</p>

<h1 align="center">
    <img alt="Happy" src="https://thexcodes.com/wp-content/uploads/2021/04/happy-site1.png" />
    <img alt"App Happy" src="https://thexcodes.com/wp-content/uploads/2021/04/happy-mobile-1.gif" />
</h1>

## :page_with_curl: About
Happy, it's an app for gather people who want to visit and meet children in orphanages. In the app your possible find orphanages based on your location and read about orphanage and create a new appointment. 

This repository contains an API REST in Node.js, web application in React JS and a mobile app in React Native.

**Node.js**: is a REST API that does all the CRUD of the application, data persistence, exception handling and that serves data to both the front-end and the mobile.

**ReactJS**: application web where the user find orphanages based on your location.

**React Native**: similar the web application, the mobile app have all features the application web beyond and develop using Expo.

## :books: Requirements
- Have [**Git**](https://git-scm.com/) to clone the project.
- Have [**Node.js**](https://nodejs.org/en/) installed.
- Have [**Yarn**](https://yarnpkg.com/) installed.
- Have a mobile device or emulator iOS or Android

## :rocket: Start
``` bash
  # Clone the project:
  $ git clone https://github.com/leandro-oliveira83/happy.git

  # Entry on directory:
  $ cd happy
```

## :gear: Starting back-end
```bash
  # Entry on directory backend:
  $ cd backend

  # Install all dependencies:
  $ yarn

  # Run migrations:
  $ yarn typeorm migration:run

  # Run application:
  $ yarn dev:server
```

## :computer: Starting front-end
```bash
  # Entry on directory web:
  $ cd web

  # Install all dependencies:
  $ yarn

  # Run application:
  $ yarn start
```

## :iphone: Starting mobile
```bash
  # Entry on directory mobile:
  $ cd mobile

  # Install all dependencies:
  $ yarn

  # Run application by Expo:
  $ yarn start
```

