# Этап 1: Установка зависимостей и сборка приложения
FROM node:14 as build

# Установка рабочей директории
WORKDIR /app

# Копирование package.json и package-lock.json
COPY ./package*.json ./

# Установка зависимостей npm
RUN npm install

# Копирование всех файлов из локальной директории workshop-downloader в /app
COPY ./ /app/

# Этап 2: Сборка финального образа с SteamCMD и другими зависимостями
FROM steamcmd/steamcmd:alpine

# Обновление пакетов и установка необходимых зависимостей
RUN apk update && apk add --no-cache \
    nodejs \
    npm \
    wine \
    cabextract \
    xterm \
    gcompat \
    wget \
    && rm -rf /var/cache/apk/*

# Скачивание и установка winetricks
RUN wget https://raw.githubusercontent.com/Winetricks/winetricks/master/src/winetricks \
    && chmod +x winetricks \
    && mv winetricks /usr/local/bin/

# Установка рабочей директории
WORKDIR /app

# Копирование собранных файлов из предыдущего этапа
COPY --from=build /app /app

# Указание точки входа
ENTRYPOINT ["npm", "run", "start"]
