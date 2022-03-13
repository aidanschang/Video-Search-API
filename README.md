# Youtube Video Search API

## Overview
This Youtube video API allows users to search a list of 5 youtube videos at one time and has the ability to play any videos that were searched.
![Screen Shot 2022-03-12 at 9 47 58 PM](https://user-images.githubusercontent.com/84875731/158046903-3a9f42d9-27d9-42a6-b313-9eb3f9ed0ec4.png)

## Structures
### App.js
App.js is my main file which passes four different props to its children and I used async term-submit to obtain the response from youtube API.

<img width="766" alt="Screen Shot 2022-03-12 at 10 45 58 PM" src="https://user-images.githubusercontent.com/84875731/158048581-feed2a9b-1368-4a3a-a76a-04805da9c55f.png">

### VideoList
I have a list of searched videos displayed on the right side of the App. I used *renderedList* function to map *VideoItem* from the response, then I evoke *renderedList* to return a list of *VideoItems* into a *VideoList* to be displayed.

<img width="755" alt="Screen Shot 2022-03-12 at 10 44 20 PM" src="https://user-images.githubusercontent.com/84875731/158048522-38fbcf8d-5f56-4e18-91c9-180af6097a73.png">

<img width="674" alt="Screen Shot 2022-03-12 at 10 44 44 PM" src="https://user-images.githubusercontent.com/84875731/158048538-5774def5-9cde-46f0-ac61-21fe81cb8f2e.png">

### VideoDetail
On the left side of the App, A state called *selectedVideo* is defaulted to be the first video of a searched list of videos on the App.js file. The *selectedVideo* state is then passed down to *VideoDetail* function through props and rendered the video player, title, and description. Finally, it returns the *VideoDetail* back to App.js.

<img width="602" alt="Screen Shot 2022-03-12 at 10 43 37 PM" src="https://user-images.githubusercontent.com/84875731/158048500-0a5af02c-c0bd-418e-bb54-0e80a53fb7fa.png">

### CSS
In this project, I heavily rely on Semantic UI for formatting the video list, text format, and grids. With that, restricted class names are implemented. Lastly, I also set some default search parameters to make the whole App a bit more intuitive.

## Features

### Default Display
A default searched videos will shown when the APP is initially opened and the "read to play video" is defaulted as the first video of a searched video list.

![Screen Shot 2022-03-12 at 10 03 44 PM](https://user-images.githubusercontent.com/84875731/158047240-3a97654c-f73a-49d5-ad4e-ac622f5c453b.png)

![Screen Shot 2022-03-12 at 10 04 11 PM](https://user-images.githubusercontent.com/84875731/158047251-86323d00-a84b-4088-ba2b-d0a5ddc67962.png)


### 
