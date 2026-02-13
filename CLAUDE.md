# File naming convention

File names must follow the lowercase pattern with words separated by hyphens (`-`), for example:
`dashboard-content.tsx`

---

# Prisma Database Development Rules

Database (Prisma):

* Never use `findMany` without filters in production.
* Always consider indexes.
* Avoid N+1 queries.
* Use transactions when necessary.
* Explicitly handle Prisma errors.
* Never expose sensitive data.

---

# Performance

* Use caching when appropriate.
* Avoid unnecessary re-renders.
* Consider using Server Components.
* Minimize database calls.
