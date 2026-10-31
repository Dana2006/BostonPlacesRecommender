# Final Code Report
###### *Estella Del Moro, Dana Dinmukhametova*
###### delmoroe@emmanuel.edu, dinmukhametovad@emmanuel.edu

## Project Description
The Boston Places Suggestion App is an interactive web-based application that helps users discover places to visit in Boston based on their current mood or interests. The app presents users with a list of categories (e.g., Food, Museums, Sightseeing, Shopping) in various Boston areas (e.g., South Boston, Back Bay, Fenway, Downtown). Users can select an area and a category, and the app will display a random place in that category within the selected area. The app also provides a clickable link to each place's official website for more details.
User Instructions

## Some Logistics:
How to run it: 
Simply open the app. You'll be presented with four buttons, each labeled a different neighborhood in Boston. Click one of the buttons. Once you do so, a new screen will open with four button categories: Food, Museums, Sightseeing, and Shopping. Click an option, and a location name with a short description will pop up on a new screen. The location name is a link; if you click it, it will take you to the location's website.
If you want to choose another place, simply click the "Restart" button at the top left of the screen. This will bring you back to the first screen with the four neighborhoods.

## We used a .map function to create our buttons: 
```javascript
categoryButtons = categories.map((category, index) => {
    ...
  });
  ```
## We also used Math.floor and .length to randomize locations within categories:
```javascript
const randomPlace = filteredPlaces[Math.floor(Math.random() * filteredPlaces.length)];
```
This function randomly generates a number value. However, the random value may be a decimal which will not coordinate with the locations' array values in the array, so .floor is used to round the randomly generated number to an integer that WILL correspond to a value in the array.

##
## Motivation Behind Our Project
The idea behind this project was to create a simple yet functional app that helps users navigate Boston’s diverse places based on their preferences. As we are all familiar with the struggle of deciding where to eat or what to do, we wanted to build an app that makes these decisions easier by offering curated suggestions from different categories.
The app was also a great opportunity for us to practice key programming concepts like handling user input, displaying dynamic content, and manipulating arrays. This project is practical and can be extended further with additional features such as user ratings or event suggestions.
------
**Step 1**: Decide which area you want to visit
**Step 2**: Click on the corresponding area button
**Step 3**: Decide which category you are interested in and click on it


Favorite Code Chunks By Member
------
**Dana:**
 I liked how we used the map() function to create buttons dynamically based on the categories array. This kept the code clean and easy to scale if we add more categories in the future.
``` javascript
  categories.map((category, index) => {
  const button = createButton(category);
  button.position(150 + (index * 150), height / 2);
  button.mousePressed(() => chooseCategory(category));
```


**Estella:**
I liked how we made our randomization function a little more sophisticated. It felt similar to last semester's random song selection function, but streamlined.
``` javascript
const randomPlace = filteredPlaces[Math.floor(Math.random() * filteredPlaces.length)];
```