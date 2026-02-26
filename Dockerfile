# Étape 1 : Compilation du Frontend (Inertia)
FROM node:20 AS build-assets
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Étape 2 : Configuration du Backend PHP
FROM php:8.2-fpm

# Installation des dépendances système, Nginx et Supervisor
RUN apt-get update && apt-get install -y \
    nginx \
    supervisor \
    libpq-dev \
    libzip-dev \
    zip \
    unzip \
    git \
    curl \
    && docker-php-ext-install pdo pdo_pgsql zip bcmath opcache

# Nettoyage du cache apt
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Configuration de Nginx
COPY .docker/nginx.conf /etc/nginx/sites-available/default

# Configuration de Supervisor
COPY .docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Copie du projet
WORKDIR /var/www
COPY . .
COPY --from=build-assets /app/public/build ./public/build

# Installation de Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev --optimize-autoloader

# Permissions
RUN chown -R www-data:www-data storage bootstrap/cache

# Script d'entrée
COPY .docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

EXPOSE 80

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]