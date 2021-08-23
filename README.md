# DEV-TEST-FRONTEND-ANGULAR

This repo contains my solutions for the Angular task.


## Task description

Application consists of a table with randomly generated users (new ones are generated on app refresh each time).
It provides standard operations on a set of data:
- CRUD operations 
- Filtering field allows filtering by username, first name, last name and role. Filtering takes place on each keystroke immediately. 
- Pagination allows choosing number of data shown on each view


## Stack

- Angular 12
- Angular Material 12
- Bootstrap 5
- `unique-names-generator` library (to generate random users on refresh)


## TODO later

- implement NgRx to maintain application state in a modern way
- Unit/Integration tests


## Running (DEV mode)

Run `ng serve` and navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
