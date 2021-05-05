# Lusha Engineering Task 

## Quick Start
----

1. User docker-compose to setup the server

``` sh
bash compose.sh
```
The command above should build and ru  n the following services

* Server
* Client (compiled and behind Caddy server)  

## Populate data
-----
In order to populate data into the server i've created a simple script that should run 2000 requests filling data to the mongodb server through the servers api

``` sh
bash test_add_users.sh
```

### CURLs
----
```sh
# GET
# Returns the first 10 users
curl http://localhost:4000/api/v1/users?page=0

# POST
# Creates a user.
curl localhost:4000/api/v1/users/create -H "content-type: application/json" \
   -d '{ "email": "someEmail@gmail.com", "password": "somePass", "firstName": "Jhon", "lastName": "Doe", "description": "From CURL" }'
```

## Project Structure
----
### Server

``` 

|- server
  |- main.ts            | Entry point
  |- config             | Configuration files
     |- default.ts      | default configuration file
     |- constants.ts    | constants file
  |- src                | core
     |- server.ts       | Server bootstrap
     |- controllers     | Controller classes
     |- routes          | Router classes
     |- repositories    | Repository/Database classes
     |- types           | Typescript types files
     |- utils           | Utilities
```

### Client (created with create-react-app)

``` 
|- client 
  |- src                | React App
     |- components      | React components
     |- containers      | Views
     |- redux           | Redux store, reducers, actions
     |- routes          | react-dom-router
     |- App.tsx         | React App
     |- index.tsx       | React Index
```
