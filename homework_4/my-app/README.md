## Simple little app made in React

1. Create a registration screen under the url /signup with 2 fields for email and password and a register button, which will register the user in firebase and redirect to the login screen - 3 points

2. Create a login screen under the url /signin with 2 fields for email and password and a login button that will log the user into firebase when pressed, will store his data in the global state and redirect to the /home subpage - 3 points

3. Create the main screen of the application under the url /home on which there will be a welcome message with the user's email provided when logging in and a logout button which, when pressed, will log the user out of firebase, remove his data from the global state and redirect to the login / registration screen - 3 points

4. Add a section with your favorite songs on the main screen (under the welcome message) which will have 1 input with adding a song and an add button which will add the song to the firestore in the new songs collection and save it in the global state of the application. When the page is refreshed, the songs should still be visible (downloading them to start from the firestore and displaying them under the input). By default, songs can be seen by other users without distinction (the distinction will be in the additional task) - 6 points

5. If the user is logged in, he is redirected to the main view and  access to login and registration is blocked. If the user is logged out, redirect to the login/registration screen without access to the main screen. The transition between the login and registration screen should be available at all times via the login link on the registration screen and vice versa, the registration link on the login screen. - 2 points

6. Connect a global context and add storing information there (both about the user and about the songs) - 3 points

7. ADDITIONAL - Distinguish songs by users who added them so that only the user who added a given song can see it on the list in the application. - 3 points
