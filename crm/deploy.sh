#!/usr/bin/env sh

# Остановить публикацию при ошибках
set -e

# Переход в котолог сборки
cd dist

# Инициация репозитория и загрузка кода в gitHub
git init
git add -A
git commit -m 'deploy'
# f - forse!!!!!!!!!
git push -f git@github.com:K4maS/crm-practic.git master:gh-pages

cd -