# Étape 1 : Compilation du Frontend (Inertia)
FROM node:25 AS build-assets
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Étape 2 : Configuration du Backend PHP
FROM php:8.2-apache

# Installation des extensions PHP nécessaires pour PostgreSQL
RUN apt-get update && apt-get install -y \
    libpq-dev \
    libzip-dev \
    zip \
    unzip \
    git \
    curl \
    && docker-php-ext-install pdo pdo_pgsql zip bcmath

# Configuration d'Apache
ENV APACHE_DOCUMENT_ROOT /var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/000-default.conf
RUN a2enmod rewrite

# Copie du projet
WORKDIR /var/www/html
COPY . .
COPY --from=build-assets /app/public/build ./public/build

# Installation de Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install --no-dev --optimize-autoloader

# Permissions
RUN chown -R www-data:www-data storage bootstrap/cache

EXPOSE 80