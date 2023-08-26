# Makefile for Django Project

# Variables
PROJECT_NAME = yourprojectname
MANAGE_PY = python manage.py

# Commands
runserver:
	$(MANAGE_PY) runserver

migrate:
	$(MANAGE_PY) migrate

makemigrations:
	$(MANAGE_PY) makemigrations

createsuperuser:
	$(MANAGE_PY) createsuperuser

ctest:
	coverage run manage.py test

shell:
	$(MANAGE_PY) shell

test:
	$(MANAGE_PY) test

lint:
	flake8 .
	isort .

# Default task
.PHONY: help
help:
	@echo "Available commands:"
	@echo "  runserver       Start development server"
	@echo "  migrate         Apply database migrations"
	@echo "  makemigrations  Create new database migrations"
	@echo "  createsuperuser Create a superuser"
	@echo "  shell           Start Django shell"
	@echo "  test            Run tests"
	@echo "  lint            Run code linting and formatting"
	@echo "  help            Display this help message"
