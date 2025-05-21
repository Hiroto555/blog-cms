# Blog CMS Overview

This repository provides a simple content management system for blog articles using Django and the Django REST framework (DRF). It is designed to run locally via Docker Compose with a PostgreSQL database.

## Repository Structure

- **blog/** – Stand‑alone Django app for managing articles, categories and tags.
- **cms_backend/** – Project configuration containing settings and the main URL routing.
- **manage.py** – Entrypoint for Django commands; loads environment variables from `.env`.
- **docker-compose.yml** – Defines a `web` container and a PostgreSQL `db` for local development.
- **requirements.txt** – Python package requirements for the project.

## Key Dependencies

- `Django` – Web framework powering the application.
- `djangorestframework` – Provides API functionality for the blog app.
- `drf-spectacular` – Generates OpenAPI documentation.
- `psycopg[binary]` – PostgreSQL database driver.
- `python-dotenv` – Loads environment variables for `manage.py`.

## Application Relationships

The `cms_backend` project includes the `blog` app in `INSTALLED_APPS`. The root URL configuration (`cms_backend/urls.py`) exposes the blog API under `/api/` and Swagger documentation under `/api/docs/`. Models in `blog` (`Article`, `Category`, `Tag`) define relationships for categorising and tagging articles. DRF viewsets in `blog/views.py` expose CRUD APIs for these models, and serializers in `blog/serializers.py` control how data is represented.

## Getting Started

1. Create a `.env` file with database credentials referenced by `docker-compose.yml`.
2. Start the application: `docker-compose up`.
3. Access the API at `http://localhost:18000/api/` and documentation at `http://localhost:18000/api/docs/`.
