## Gatling Corp React project

The goal of this small project is to create a small webapp displaying users and their related posts (data are located
on [jsonplaceholder](https://jsonplaceholder.typicode.com)). 

Please **do NOT fork this repository**.
You should [use it as template (the green button)](https://github.com/gatling/react-interview-project/generate) ([GitHub documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)).
Note: if you choose to make your repository private, add us as collaborators.

This project already configure yarn and implement a table of users.

The architecture of the project is up to you.

Please code as you would do in your everyday work.

#### Specifications

- Add the option to fetch each user posts on [jsonplaceholder](https://jsonplaceholder.typicode.com) and display them 
  with their user.
- The name of each user should be editable, and should send the update to the server (note that the update is faked on
  jsonplaceholder).
- Display the number of users living in an Appt, and in a Suite (field address.suite)

##### Bonus

- add a spinner while information is loading
- add css
- use redux
- split the application into different pages
- add tools typically used in a development environment (linters, code formatter, ...)
