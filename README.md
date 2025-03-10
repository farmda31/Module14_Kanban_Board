# Module14_Kanban_Board

## Description
This application allows for the user to have an existing Kanban board where they can create a user to access the app.
This user will be authorized through JWT so that they can access the board.
The application is backed by a SQL database with seed data with informations tored for the user and existing tickets for the board.

## Installation
- The user will need to access the command terminal within the "Develop" folder and type "npm i" to install all the dependencies.

## Setup
- The user will need to connect to PostGresQL to run the schema file to create the database.  The file is located at "Develop > client > server > db > schema.sql".
- The user will need to connect to PostGresQL to run the seed data. The existing database is called "Kanban" and the seed data scripts are called "ticket-seeds.sql" and "user-seeds.sql" within the "seeds" folder under "Develop > client > server > src > seeds".
- A "JWT_SECRET_KEY" will be required to run the application and access the site. Run the file located at "Develop > generateSecretKey.js" in the command terminal with "node generateSecretKey.js" and this will generate a secret key.  Store this information safely and proceed to the next step below to update that value for the app.
- The .env file located at "Develop > .env" will need to be updated for the "JWT_SECRET_KEY" on line 4 of the file.
- The "JWT_SECRET_KEY" also needs to be updated on line 11 of the file at "Develop > client > server > src > routers > api > auth-routes.ts".  This will be used by the api to connect to the kanban project and request information.
