# Simple Facebook clone

> ### Laravel + Vue 2 + Tailwind Facebook clone.

----------

# Getting started

## Installation

Clone the repository

    git clone git@github.com:Prego666/laravel_facebook_clone.git    

Switch to the repo folder

    cd laravel_facebook_clone

Install all the dependencies using composer

    composer install

Install node dependencies

    npm i

Compiles and minifies for dev

    npm run dev

Copy the example env file and make the required configuration changes in the .env file

    cp .env.example .env

Generate a new application key

    php artisan key:generate

Create the symbolic link    

    php artisan storage:link

Run the database migrations (**Set the database connection in .env before migrating**)

    php artisan migrate

Run tests

    php artisan test

Start the local development server

    php artisan serve

You can now access the server at http://localhost:8000

**TL;DR command list**

    git clone git@github.com:Prego666/laravel_facebook_clone.git
    cd laravel_facebook_clone
    composer install
    npm i
    npm run dev
    cp .env.example .env
    php artisan key:generate
    
**Make sure you set the correct database connection information before running the migrations** [Environment variables](#environment-variables)

    php artisan migrate
    php artisan serve



