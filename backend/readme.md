# Backend Documentation

## Overview

This document provides an overview of the backend architecture, setup instructions, and API endpoints for the project.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [API Endpoints](#api-endpoints)
4. [Database Schema](#database-schema)
5. [Environment Variables](#environment-variables)
6. [Running Tests](#running-tests)

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/yourproject.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd yourproject/backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables (see [Environment Variables](#environment-variables)).

### Running the Server

To start the development server, run:

```bash
npm run dev
```

## Project Structure

```
backend/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── app.js
├── tests/
├── .env
├── package.json
└── README.md
```

## API Endpoints

### User

- `POST /api/users/signup` - signup for user
- `POST /api/users/signin` - signin for user
- `POST /api/users/profile` - Get user by ID

### Recruiter

- `POST /api/recruiters/signup` - signup for recruiter
- `POST /api/recruiters/signin` - signin for recruiter
- `POST /api/recruiters/create` - create a job
- `POST /api/recruiters/jobs` - get a job posted by recruiter

### Jobs

- `GET /api/jobs/all` - to get all jobs
- `POST /api/jobs/byId` - to get job by ID

## Database Schema

### User

```json
{
  "id": "ObjectId",
  "name": "String",
  "email": "String",
  "city": "String",
  "country": "String",
  "phone": "String",
  "password": "String",
  "appliedJob": "ObjectID" //job
}
```

### Recruiter

```json
{
  "id": "ObjectId",
  "name": "String",
  "email": "String",
  "phone": "String",
  "password": "String",
  "application": "ObjectId" //job
}
```

### Jobs

```json
{
  "id": "ObjectId",
  "title": "String",
  "description": "String",
  "city": "String",
  "country": "String",
  "education": "String",
  "skills": "String",
  "salary": "Number",
  "recruiterId": "ObjectId" //recruiter
}
```

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/yourdatabase
JWT_SECRET=your_jwt_secret
```
