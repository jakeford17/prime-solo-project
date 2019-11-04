# Hockey Prospect DB
Hockey Prospect DB is an internal website used by an NHL franchise's scouting department to create and organize scouting reports in anticipation of the following year's NHL Entry Draft. The admin assigns usernames and passwords to the scouts and each scout has the ability to create, edit, and delete player profiles. Profiles are broken down by position and are viewable by anyone with access to the site. At the end of each season, the admin can log in and delete all players by position in order to start the scouting process for the following year.

## Usage
-Once logged in, the user can view a list of scouted players by position or choose to create a player.
-On each Position page, the user can view a list of scouted players at that position. From there, the user can click on the player's Profile page and on the Profile page, there is a link that directs them to the Edit page. On the Edit page, any of the player's information can be edited. The player can also be deleted. The Edit page also has a navigation bar that allows navigation throughout the page.
-The Create pages allow scouts to add a player based on position. These pages have tabs that allow scouts to evaluate different categories throughout the game and go back as necessary until they submit the form after the game. Each category tab has information on what to look for in that category.

## Installation
-`npm install`
-In separate Terminal tabs `npm run client` and `npm run server`
-The register functionality is commented out on the Log In page, but can be re-activated to make new users (users can also be added straight to the database); an admin level of 1 gives the user admin access and an admin level of 2 gives the user normal access

## Technologies Used
Hockey DB used the following technologies: React, React-Redux, Redux-Sagas, Node.js, Express.js, Passport, Sweet Alerts, React Tabs and Icons, PostgreSQL, and CSS for styling.

## Version 2.0
The next version of the site will have a search bar and sortable position tables. Another feature I'd like to add is a comment section in each player profile. Before beginning to add these features, I would like to decrease the file size of the Create and Edit pages by further componentizing them.

## Acknowledgement
Thanks to Prime Digital Academy in Minneapolis, which equipped me and helped me to make this application a reality. I'd specifically like to thank my instructors Casie Siekman and Dev Jana and the Porta cohort. Additionally, I appreciate the support from my wife Tricia and my daughter, Vivian.