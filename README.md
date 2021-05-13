<div align="center">
  <h1>Dragons | Login API</h1>
  
  ![Javascript](https://img.shields.io/badge/-Javascript-black?style=flat-square&logo=javascript)
  ![Node.js](https://img.shields.io/badge/-Node.js-black?style=flat-square&logo=node.js)
  ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-black?style=flat-square&logo=PostgreSQL)
  ![Sequelize](https://img.shields.io/badge/-Sequelize-black?style=flat-square&logo=sequelize)
  ![JWT](https://img.shields.io/badge/-JWT-black?style=flat-square&logo=jwt)
  ![BCrypt](https://img.shields.io/badge/-BCrypt-black?style=flat-square&logo=bcrypt)
</div>

API developed for login authentication in [Dragons App](https://github.com/cunhasbia/dragons-frontend).

Please, go to the [front end](https://github.com/cunhasbia/dragons-frontend) repository, follow the steps and run both projects together.

## Endpoints

GET `.../users`
(users list)

GET `.../users/:uid`
(show details of a specific user)

POST `.../users`
(create new user)

PUT `.../users/:uid`
(update a user)

DELETE `.../users/:uid`
(delete a user)

---

POST `.../login`
(login authentication)

---

## Technologies and tools used

- Javascript ES6+
- Nodejs
- Sequelize
- PostgreSQL
- JSON Web Token
- BCrypt

## How to run the project?

Before start, install [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) and [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) on your machine. Moreover, recommend use the [VSCode](https://code.visualstudio.com/) terminal.

```bash
# Clone this repository
$ git clone https://github.com/cunhasbia/dragons-login-auth-backend.git

# Access the repository on your terminal
$ cd dragons-login-auth-backend

# Install dependencies
$ yarn

# Run the project
$ yarn dev
```

---
<p align="center">Made with :orange_heart: by Bianca Cunha | Find me on <a href="https://www.linkedin.com/in/biancascunha">LinkedIn</a></p>