# Assignment 1 - ReactJS app.

Name: Jiacheng Shen

## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,
 
 + Feature 1 - display the now playing movies.
 + Feature 2 - display the top movies.
 + Feature 3 - display the popular actors.
 + Feature 4 - display the similar movies of a specific movie.
 + Feature 5 - display the credits of a specific movie.
 + Feature 6 - display the detail infomation of one movie or one actor.
 + Feature 7 - sign up/log in/log out .
 + Feature 8 - show the watchlist and favorites after logging in .
 + Feature 9 - show the statement of users (Whether you are logged in).

## Setup requirements (If required).

...... A brief explanation of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........
+ npm i bootstrap react-bootstrap
+ npm install antd --save
+ npm i firebase
+ install ES7 React/Redux/GraphQL/React-Native snippets

## API Data Model.

..... List the additional TMDB endpoints used in your assignment, e.g.

+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres.
+ https://api.themoviedb.org/3/movie/top_rated - get a list of top movies. 
+ https://api.themoviedb.org/3/movie/now_playing - get a list of now playing movies.
+ https://api.themoviedb.org/3/movie/${movieId}/credits -get a list of credits on a specific movie.
+ https://api.themoviedb.org/3/credit/${creditId} -get the information of a specific credit.
+ https://api.themoviedb.org/3/movie/${movieId}/similar -get a list of similar movies on a specific movie.
+ https://api.themoviedb.org/3/person/popular -get a list of popular people.
+ https://api.themoviedb.org/3/person/${id} -get information of a specific actor.

## App Design.
### Component catalogue (If required).

....... Insert a screenshot from the Storybook UI, hi-light stories relating to new/modified components you developed - see example screenshot below] .......

![][catalogue]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

![][homeUI]
>Shows the List of different types of movies including upcoming, top-rated and now-playing.

![][Login]
>Shows the login page, you need to enter the email and password. 

![][LoginFail]
>Shows the page that fail to login.

![][Logout]
>Shows the logout button that is used to log out.

![][Showcredit]
>Shows the information of movie details, including movie information, credits and similar movies.

![][CreditDetails]
>Shows the information of credits.

![][ActorDetails]
>Shows the details of actors.

## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/login - displays the login function.
+ /movies/signup - displays the logout button.
+ /movies/profile - display the statements of user.
+ /words/form - display the leave words function.
+ /movies/now_playing - display the page of now playing movies.
+ /movies/top_rated - display the page of top movies.
+ /credit/:id - display the credit page

### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][creditButton]
> Clicking the 'leave words' button can implement the function of leave words.
> Clicking the 'information' button can display the information of credits.

![][similarMovieButton]
>Clicking the 'Details' for details of similar movies.

![][FullReview]
>Clicking the 'Full review' for a review extract will display the full text of the review.

![][Login1]
>Clicking the log in button will display the logout page.

![][Image]
>Clicking the card causes the display of that person's details.

## Independent learning (If relevant).

. . . . . Briefly mention each technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include reference material links (articles/blogs).

---------------------------------

[catalogue]: ./public/catalogue.png
[homeUI]: ./public/homeUI.png
[Login]: ./public/Login.png
[LoginFail]: ./public/LoginFail.png
[Logout]: ./public/Logout.png
[Showcredit]: ./public/Showcredit.png
[CreditDetails]: ./public/CreditDetails.png
[ActorDetails]: ./public/ActorDetails.png
[creditButton]: ./public/creditButton.png
[similarMovieButton]: ./public/similarMovieButton.png
[FullReview]: ./public/FullReview.png
[Login1]: ./public/Login1.png
[Image]: ./public/Image.png