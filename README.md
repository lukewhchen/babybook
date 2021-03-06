# Babybook
[LIVE](https://aa-babybook.herokuapp.com/#/)

Babybook is a full-stack, single page web application that makes it easy for parents to share baby photos and exchange parenting information.

# Technologies

* Ruby on Rails
* PostgreSQL
* JavaScript (ES6)
* React.js
* Redux
* AWS S3
* HTML
* CSS
* Heroku

# Features and Implementation

## Authentication
When visiting babybook, you can use the Demo button on the navigation bar to login on the fly. You can also create a new account using the signup form and login with your personal password. The user's account information are protected by the Auth pattern. Only the valid user can log-in and see all the features.

![Welcome Page](https://github.com/lukewhchen/babybook/blob/master/docs/welcome1.png)

## News Feed
Once users sign up for an account, they can see all the posts/comments/news on the main page. Users can post their cutest baby photos through the Post button. The main purpose of babybook is to share baby's photo, if you don't have one for now, the algorithm will automatically pick one for you. Photos are hosted using an AWS S3 bucket and stored references into the database.

![Main Page](https://github.com/lukewhchen/babybook/blob/master/docs/main.png)

## Search & Third Party API Integration
There is a search bar located on the navigation bar. Users can easily navigate search results through a mouse and/or keyboard.
Babybook integrated a weather API from OpenWeatherMap to access the current weather data.

![Search](https://github.com/lukewhchen/babybook/blob/master/docs/search.png)

## Infinite Scrolling
Implementing Infinite Scrolling feature with Intersection Observer API

![Scroll](https://github.com/lukewhchen/babybook/blob/master/docs/scroll.png)

## Profile Pages
In order to improve server loading speed, we cannot fetch all information pertaining to all of our users in the database in the first request. Therefore, when the current user visits another user's profile page, the information for that specific user must be fetched before the page is rendered. This was accomplished by saving an attribute in our Redux store which allowed us to know if the user's information had already been fetched, and if not, we could fetch the user through our ApiUtil.

![Profile](https://github.com/lukewhchen/babybook/blob/master/docs/profile.png)
