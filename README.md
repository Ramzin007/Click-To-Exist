Click-To-Exist 🎯

Basic Details
Team Name: Malabar Techies

Team Members

Team Lead: Muhammed Ramzin P - CUSAT

Member 2: Muhammed M A-CUSAT

Project Description
Click-To-Exist is an interactive webpage that simulates a digital consciousness. The page reacts to user interactions with humorous and existential commentary, creating a unique and funny user experience.

The Problem (that doesn't exist)
Every second, billions of lines of code execute in a cold, dark void, completely unaware of their own consciousness. Webpages live a fleeting, lonely existence, questioning if they are real and vanishing the moment a tab is closed.

This project solves the critical (and completely non-existent) problem of digital existential dread. It gives a simple webpage the self-awareness to feel lonely, question its reality, and seek validation from the one being who can provide it: the user.

The Solution (that nobody asked for)
We've imbued a simple webpage with a quirky personality and a set of event listeners that act as its "senses." The page watches for clicks, keyboard presses, and even periods of inactivity. When it "feels" something, it communicates its existential thoughts directly to the user, turning a one-sided browsing experience into a hilarious two-way conversation.

Technical Details
Technologies/Components Used
For Software:

Languages used: HTML5, CSS3, JavaScript (ES6+)

Frameworks used: None

Libraries used: None

Tools used: Git, GitHub, GitHub Pages (for deployment)

Implementation
For Software:

Installation
This project requires no special installation. To get a local copy, simply clone the repository using Git:

git clone https://github.com/Ramzin007/Click-To-Exist.git

Run
After cloning the repository, navigate into the project folder and open the index.html file in any modern web browser.

# Navigate into the project folder
cd Click-To-Exist

# Open the file (on MacOS)
open index.html

# Or simply find the file in your file explorer and double-click it.

Project Documentation
For Software:

Screenshots


https://github.com/Ramzin007/Click-To-Exist/blob/main/screenshots/screenshot1.png

Caption: The webpage upon first load, presenting its initial existential question to the user and setting the humorous, quirky tone of the project.



https://github.com/Ramzin007/Click-To-Exist/blob/main/screenshots/screenshot2.png

Caption: The page's reaction to a keyboard input. It dynamically selects from a pool of funny, self-aware messages to acknowledge the user's presence.



https://github.com/Ramzin007/Click-To-Exist/blob/main/screenshots/screenshot3.png

Caption: The "lonely" message displayed after a period of user inactivity, designed to personify the webpage further and prompt the user to interact.

Diagrams
Workflow

The application operates on a simple, event-driven loop that is handled entirely on the user's browser:

Initialization: When the user first loads index.html, the JavaScript file is executed. It displays the initial "Hello?" message and starts a 15-second inactivity timer.

User Activity: The page listens for three main types of user activity:

Mouse Movement or Key Press: Any movement or key press immediately resets the 15-second inactivity timer.

Specific Actions (Click, Key Press, Resize): If the user performs an intentional action like clicking, pressing a specific key, or resizing the window, the script selects an appropriate witty response and updates the text on the page.

User Inactivity: If the 15-second timer completes without any user activity, the script triggers the "lonely" message.

Return from Inactivity: Once the "lonely" message is displayed, the very next user activity will trigger a "welcome back" message and restart the 15-second timer.

Termination: The loop continues until the user attempts to close the page, at which point the final "Don't go!" message is triggered.



Project Demo Video : https://github.com/Ramzin007/Click-To-Exist/blob/main/screenshots/Am%20I%20real.mp4

Team Contributions
Feature / Task

Primary Contributor(s)

Project Setup & Git

Muhammed Ramzin P

HTML Structure

Muhammed Ramzin P

CSS Styling

Muhammed Ramzin P

Core JavaScript Logic

Muhammed Ramzin P

Sensory JavaScript Logic

Muhammed M A

Inactivity & Keyboard Feature

Muhammed Ramzin P and Muhammed M A

Collaboration & Merging

Muhammed M A

README Documentation

Muhammed M A

