# Application Architecture

## Overview

This mobile application was developed using React Native with TypeScript and SQLite as local persistence.

The main objective of the structure is to maintain a clear separation of responsibilities between the user interface, application logic, domain rules, and data persistence.

The application implements three main registration flows:

- User registration.
- Product registration.
- Person registration.

The solution focuses on the required scope while keeping the code organized, maintainable, and prepared for future growth.

---

# Architecture Layers

## Presentation Layer

Location:

```text
src/presentation
```

Responsibility:

This layer contains screens and reusable UI components.

It is responsible for:

- Receiving user input.
- Displaying information.
- Interacting with application use cases.

Implemented screens:

- UserScreen.
- ProductScreen.
- PersonScreen.

The presentation layer does not communicate directly with SQLite. All data operations are delegated through the application layer.

---

## Application Layer

Location:

```text
src/application
```

Responsibility:

This layer contains the application use cases.

It manages the actions that the application can perform and applies validations before accessing persistence.

Implemented use cases:

- CreateUser.
- CreateProduct.
- CreatePerson.

Example flow:

```text
User input
     |
     v
Application Use Case
     |
     v
Repository
```

The objective is to keep business operations separated from interface and database implementation.

---

## Domain Layer

Location:

```text
src/domain
```

Responsibility:

This layer contains the main concepts of the application and the contracts required by the business logic.

Contains:

- Entities.
- Repository interfaces.

Entities:

- User.
- Product.
- Person.

The domain layer does not depend on React Native, Expo, or SQLite.

This allows the core application logic to remain independent from external technologies.

---

## Infrastructure Layer

Location:

```text
src/infrastructure
```

Responsibility:

This layer contains the technical implementations required by the application.

It includes:

- SQLite database configuration.
- Database schema creation.
- Repository implementations.

Implemented repositories:

- SQLiteUserRepository.
- SQLiteProductRepository.
- SQLitePersonRepository.

This layer is responsible for handling communication with the local database.

---

# Database

SQLite was selected because the application requires local persistence.

The database is initialized when the application starts.

Implemented tables:

## users

Fields:

- id.
- name.
- email.

## products

Fields:

- id.
- name.
- price.

## persons

Fields:

- id.
- name.
- phone.

The database structure is created automatically if the tables do not exist.

---

# Design Decisions

## Separation of Responsibilities

The application avoids concentrating all functionality inside App.tsx or individual screens.

Each layer has a specific responsibility:

- Presentation manages the user interface.
- Application manages actions and validations.
- Domain defines entities and contracts.
- Infrastructure manages external technologies.

This improves readability, maintainability, and future scalability.

---

## Repository Pattern

Repositories were implemented to separate application logic from database access.

The application depends on repository contracts instead of directly depending on SQLite.

This allows changing the persistence technology in the future without modifying the main application logic.

Example:

```text
CreateUser
     |
     v
UserRepository Interface
     |
     v
SQLiteUserRepository
     |
     v
SQLite Database
```

---

## Reusable Components

Common interface elements were extracted into reusable components.

Examples:

- FormInput.
- SaveButton.

This avoids duplicated code and keeps the user interface consistent.

---

## Scope Control

Only the functionality requested in the activity was implemented:

- Register users.
- Register products.
- Register persons.
- Store information using SQLite.

Additional features such as authentication, remote APIs, cloud databases, or complex navigation were not included because they were outside the requested requirements.

---

# Application Flow

```text
Presentation Layer
        |
        v
Application Use Case
        |
        v
Domain Repository Contract
        |
        v
Infrastructure Repository
        |
        v
SQLite Database
```

---

# Conclusion

The application structure follows clean code principles by separating responsibilities, reducing unnecessary dependencies, avoiding duplicated logic, and maintaining clear naming conventions.

The implemented architecture provides a simple but scalable foundation that can support future features without requiring major changes to the current code organization.