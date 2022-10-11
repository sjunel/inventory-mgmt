# inventory-mgmt

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
