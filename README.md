# Server Base - Proyecto ONG


## Envinroment setup

1) Create database
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:

To create seeders:
``` bash
sequelize db:seed:all
```
To erase seeders:
``` bash   
sequelize db:seed:undo:all
```

## Start local server

``` bash
npm start
```
