# Homeworks made during the frontend bootcamp

## 1. Homwework 2
## A few excercises from Java Scrpit
1. Create a function that takes 2 arrays as arguments, it will combine them into one array, will remove duplicates from it and sort it from smallest to largest. E.g. with these arrays [1,3,2] [2,3,12] result should be [1,2,3,12]
2. Create a function that takes 2 arrays as arguments and returns an array values that are unique to one of the given arrays. E.g. for tables [1,2,3] and [100,2,1,10] result will be [3,10,100]
3. Create a function that takes an object as an argument, it will create a new object in which it will replace the keys with values and will return this newly created object. E.g. for object {red: '#FF0000', green: '#00FF00', white: '#FFFFFF'} the result will be object: {'#FF0000': 'red', '#00FF00': 'green', '#FFFFFF': 'white'}
4. Create a function that takes an array of objects as an argument and returns it sorted by libraryId.

## 2. Homework 3
### A simple form that saves and retrieves data using local storage. HTML, CSS, Javascript, REST API
1. Create a form with 3 fields (name, surname, address) and an add button below. At the press of a button, the data from the form is to be collected and
displayed in the table under the form (each field, i.e. name, surname and address separately, will be in a separate column, i.e. 3 columns must be in the table).
2.Get the list of comments from the endpoint https://dummyjson.com/posts with a GET request and display it as a list. Each individual comment should look like this: the `id` and `title` fields should be displayed at the top of the element and the `body` field below them
3. Create an input to enter the name and an Add button, which will add each name to it when pressed local storage and then display a counter of names that are already in local storage next to the input. In case there is nothing in local storage it will display 0.
4. (Additional task) Create an input to enter the id (according to the id of comments displayed from task 2) and the Find button, which will download from the endpoint https://dummyjson.com/posts/${id} with a GET request the appropriate element with the given id (as in the list from task 2) and will display it under the input in the format as in task 2

## 3. Homework 4
### Simple app created with React and Type Script
1. Create a registration screen under the url /signup with 2 fields for email and password and a register button, which will register the user in firebase and redirect to the login screen - 3 points
2. Create a login screen under the url /signin with 2 fields for email and password and a login button that will log the user into firebase when pressed, will store his data in the global state and redirect to the /home subpage - 3 points
3. Create the main screen of the application under the url /home on which there will be a welcome message with the user's email provided when logging in and a logout button which, when pressed, will log the user out of firebase, remove his data from the global state and redirect to the login / registration screen - 3 points
4. Add a section with your favorite songs on the main screen (under the welcome message) which will have 1 input with adding a song and an add button which will add the song to the firestore in the new songs collection and save it in the global state of the application. When the page is refreshed, the songs should still be visible (downloading them to start from the firestore and displaying them under the input). By default, songs can be seen by other users without distinction (the distinction will be in the additional task) - 6 points
5. If the user is logged in, he is redirected to the main view and access to login and registration is blocked. If the user is logged out, redirect to the login/registration screen without access to the main screen. The transition between the login and registration screen should be available at all times via the login link on the registration screen and vice versa, the registration link on the login screen. - 2 points
6. Connect a global context and add storing information there (both about the user and about the songs) - 3 points
7. ADDITIONAL - Distinguish songs by users who added them so that only the user who added a given song can see it on the list in the application. - 3 points
