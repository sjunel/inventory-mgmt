# inventory-mgmt

## Run App
1. Clone the project locally
2. `cd` into the root of the project directory
3. Run `npm install` in your terminal to install project dependencies
4. Set up development environment
5. Set up database
6. Run `npm start` in your terminal to run the app

## Dev Setup
Add an `.env` file in the root of the project directory with the following:
```
PORT="3000"
DB_NAME=
USR_PW=
```
Include the database name and your user password.

## Database Setup
Assuming that PostgreSQL is installed, create a database:
```
dropdb inventory-mgmt
createdb inventory-mgmt
psql -d inventory-mgmt < schema.sql
```
