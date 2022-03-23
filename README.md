# Promotion Score Application Server

## How to Use This Server

You have to create .env file to application root directory and have following enviroment variable added to it.

```
APP_PORT="3001"
```

To start server type following command to terminal.

```
npm start
```

## How to Set Upp Database MysqlDB or MariaDB

Go to database terminal.

```
mysql -u root -p
```

Create database psdb.

```
CREATE DATABASE psdb;
```

Create user "somename".

```
CREATE USER 'someuser'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON psdb.* TO 'someuser'@'localhost';
```

If you use mysql >8.0 you have to also run this.

```
ALTER USER 'someuser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;
```

Now our new user and psdb database should be ready for action. Next you have to put .env file information about your database. It should look like this.

```
APP_PORT="3001"
DB_NAME="psdb"
DB_HOST="localhost"
DB_PORT="3306"
DB_USER="someuser"
DB_PASSWORD="password"
```

## How to Use Migration

We have to have knex working globaly so that we can use its CLI commands.

```
npm install knex -g
```

For migrating to latest state of database use lateas. It runs all needed migrations. Migration files you can find under migrations folder.

```
knex migrate:lates
```

If you want clean your database from all migrations you can use rollback.

```
knex migrate:rollback
```

To populate database with data we use seed files. All seed files are in seeds folder.

```
knex seed:run
```
