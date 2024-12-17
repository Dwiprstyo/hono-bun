# Social Media API

## Prerequisites
- Bun runtime
- PostgreSQL database

## Setup
1. Clone the repository
2. Install dependencies:
```bash
bun install
```

3. Create a `.env` file with:
```
DATABASE_URL="postgresql://username:password@localhost:5432/socialmedia"
JWT_SECRET="your-secret-key"
```

4. Generate Prisma client:
```bash
bun run prisma:generate
```

5. Run database migrations:
```bash
bun run prisma:migrate
```

6. Start the development server:
```bash
bun run dev
```

## API Endpoints
- `/auth/register`: User registration
- `/auth/login`: User login
- `/posts`: Create, read posts
- `/users`: User profile management
- `/interactions`: Like, comment, follow functionalities

## Technologies
- Hono.js
- Prisma ORM
- PostgreSQL
- Zod Validation
- Bun Runtime