# Youtube Video Search API

## Overview
This Youtube video API allows users to search a list of 5 youtube videos at one time and has the ability to play any videos that were searched.
![Screen Shot 2022-03-12 at 9 47 58 PM](https://user-images.githubusercontent.com/84875731/158046903-3a9f42d9-27d9-42a6-b313-9eb3f9ed0ec4.png)

## Structures

App.js is my main file which passes four different props to its children and I used async term-submit to obtain the response from youtube API.

I have a list of searched videos displayed on the right side of the App. I used *renderedList* function to map *VideoItem* from the response, then I evoke *renderedList* to return a list of *VideoItems* into a *VideoList* to be displayed.

On the left side of the App, A state called *selectedVideo* is defaulted to be the first video of a searched list of videos on the App.js file. The *selectedVideo* state is then passed down to *VideoDetail* function through props and rendered the video player, title, and description. Finally, it returns the *VideoDetail* back to App.js.

In this project, I heavily rely on Semantic UI for formatting the video list, text format, and grids. With that, restricted class names are implemented. Lastly, I also set some default search parameters to make the whole App a bit more intuitive.

![Screen Shot 2022-03-12 at 10 18 23 PM](https://user-images.githubusercontent.com/84875731/158047642-c07c3d05-7415-4182-99af-b861fbb54d79.png)


## Features

### Default Display
A default searched videos will shown when the APP is initially opened and the "read to play video" is defaulted as the first video of a searched video list.

![Screen Shot 2022-03-12 at 10 03 44 PM](https://user-images.githubusercontent.com/84875731/158047240-3a97654c-f73a-49d5-ad4e-ac622f5c453b.png)

![Screen Shot 2022-03-12 at 10 04 11 PM](https://user-images.githubusercontent.com/84875731/158047251-86323d00-a84b-4088-ba2b-d0a5ddc67962.png)


### 
