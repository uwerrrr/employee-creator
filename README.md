# Employee-Creator: Your Ultimate Employee Management Solution

- Dive into the world of seamless employee management with our full-stack web app.
- VIEW, CREATE, EDIT, and DELETE employee information effortlessly – your all-in-one solution for streamlined HR management.
- Say goodbye to data woes! Our project comes with built-in data validation, ensuring every piece of information is spot on.

## Demo & Snippets

- You can access the project by following this [link](https://oscar-employeecreator.onrender.com).
  - The frontend, backend and database are deployed using [render.com](https://render.com).
  - **Important**: The backend is deployed with a free tier, so the initial load may take up to 2 minutes if it's waking up from sleep mode.

---

## Requirements / Purpose

- MVP:
  - A web application to create, list, modify and delete employees. The application should consist of a spring RESTful API and a React Typescript frontend. The schema for the employee is left to the criteria of the candidate.
- Purpose of project
  - Demonstrate the ability to create a full-stack web application with Spring Boot and Typescript

### Tech stack:

- Front end:
  - React
  - TypeScript
  - React hook form
  - Yup (for form validation)
- Back end:
  - Spring Boot
  - Java
  - Spring Data JPA (for connecting backend to database)
  - mySQL (database)

---

## Build Steps

- The project is deployed and can be accessed [here]().

- To build locally,
  1. Run PostgreSQL server and create a database name "employee_creator"
  2. Run backend with Eclipses
  3. Run frontend with Vite

---

## Features:

- Users can VIEW, CREATE, EDIT, DELETE employee information.
- Inputs are validated by React hook form and Yup.

---

## Known issues

- Displayed error messages at frontend are not the error messages set at backend

---

## Future Goals

- Add testing for backend & frontend

---

## Change logs

### 18/09/2023 - Project Deployment Updates

- Switched the database from MySQL to PostgreSQL.
- Introduced a Dockerfile to facilitate Docker-based project builds.
- Successfully deployed both the backend application and the database to [render.com](https://render.com).

---

## What Were My Challenges?

1. **Working with Yup Schema and TypeScript**:

   - Using the Yup schema library alongside TypeScript was a bit tricky. One issue was making sure that every object and input I used had the right interfaces defined. To simplify things, I tried to create reusable interfaces to avoid repeating myself.

2. **Finding a Wallet-Friendly Hosting Platform**:
   - When it came to deploying my backend, I struggled to find a platform that didn't break the bank. There weren't many free options available. After doing some research, I discovered render.com, which turned out to be budget-friendly. However, getting my backend to play nicely with Docker and PostgreSQL was another puzzle. To overcome this, I followed the steps in this [repository](https://github.com/TakiRahal/spring-boot-render/tree/main), and it helped me successfully deploy my project.
