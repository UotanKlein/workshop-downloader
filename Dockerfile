FROM archlinux:multilib-devel

# Установка необходимых пакетов
RUN pacman -Syu --noconfirm \
    && pacman -S --needed --noconfirm nodejs npm git base-devel sudo glibc-locales curl

# Создание пользователя без прав суперпользователя
RUN useradd -m builder \
    && passwd -d builder \
    && printf 'builder ALL=(ALL) NOPASSWD: ALL\n' | tee /etc/sudoers.d/builder

# Настройка локалей
RUN echo "en_US.UTF-8 UTF-8" > /etc/locale.gen \
    && locale-gen

ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

USER builder
WORKDIR /home/builder

# Клонирование репозитория yay и установка yay
RUN git clone https://aur.archlinux.org/yay.git \
    && cd yay \
    && makepkg -si --noconfirm

# Обновление системы и установка необходимых пакетов с помощью yay
RUN yay -Syu --noconfirm \
    && yay -S --noconfirm wine winetricks steamcmd

WORKDIR /app
COPY . /app/

# Установка зависимостей проекта
RUN sudo npm install --unsafe-perm=true

# Указание порта, который будет использоваться
EXPOSE 3000

# Запуск приложения
ENTRYPOINT ["sudo", "npm", "run", "start"]
