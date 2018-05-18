# Babybook
Babybook is a Facebook-inspired full-stack web application built upon a Rails framework, using PostgreSQL database and React for the rendering of frontend components, with Redux being used for state management.

[babybook LIVE](https://aa-babybook.herokuapp.com/#/)
# Features and Implementation

## Authentication - User Log-in/out and Sign-up/out

![Welcome Page](https://github.com/lukewhchen/babybook/blob/master/docs/Welcome%20Page.png?raw=true)

When visiting babybook if you already have an account, you can easily log in on navigation bar. You can always create a new account using the sign up form. The users account information are protected by Auth pattern. Only the valid user can log-in and see all the features.

## Posts - Main Page
Once user sign up for an account, they can see all the posts on the main page. User can post their cutest baby photo through Post button. The main purpose for developed babybook is to share baby's photo, if you don't have for now, babybook will pick one on your post. Photos are hosted using an AWS S3 bucket and uploaded and stored into the database using the `paperclip` gem.

![Main Page](https://github.com/lukewhchen/babybook/blob/master/docs/Main%20Page.png?raw=true)

## Parenting Information
User can also share parenting information with other user. On the right-side of main page, user can see all kind of parenting infor and visiting the website through links.


# Future Directions
- error handling
- like/comment/share
- user profile
- user photo albums
