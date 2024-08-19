# FakeAPI

FakeAPI - это простое API-приложение, созданное с использованием Node.js, Express и других библиотек. Это приложение предназначено для демонстрации базовой архитектуры RESTful API с аутентификацией и управлением пользователями и постами.

## Установка и запуск

1. **Клонировать репозиторий**:
```bash
git clone <repository_url>
```

2. **Перейти в папку**:
```bash
cd fakeapi
```

3. **Установить зависимости**:
```bash
npm install
```

3. **Создайте файл .env в корне проекта и добавьте переменную окружения**:
```makefile
PORT=5000
ACCESS_KEY = 'YOUR_ACCESS_KEY'
REFRESH_KEY = 'YOUR_REFRESH_KEY'
```

4. **Запустить сервер**:
```bash
npm run dev
```

## Маршруты API

### Аутентификация

Эти маршруты используются для регистрации, входа в систему и обновления токенов доступа.

**POST /auth/signin** - Вход пользователя в систему.

Тело запроса:
```json
{
  "email": "johndoe@example.com",
  "password": "user12345"
}
```

**POST /auth/signin** - Регистрация нового пользователя.

Тело запроса:
```json
{
  "email": "johndoe@example.com",
  "password": "user12345",
  "confirm": "user12345",
}
```

**GET /auth/refreshtoken** - Обновление токена доступа.

### Пользователи

**GET /users/all** - Получение списка всех пользователей.

**GET /users/me** - Получение информации о текущем авторизованном пользователе.

**GET /users/:id** - Получение информации о конкретном пользователе по ID.

### Пользователи

**POST /posts/** - Создание нового поста.

Тело запроса:
```json
{
  "title": "New Post",
  "body": "<p>This is the content of the post.</p>"
}
```

**GET /posts/all** - Получение списка всех постов.

**GET /posts/:id** - Получение конкретного поста по ID.

**PUT /posts/** - Обновление поста по ID.

Тело запроса:
```json
{
  "title": "Updated Post",
  "body": "<p>This is the updated content of the post.</p>"
}
```

**DELETE /posts/** - Удаление поста по ID.

### Обработка ошибок

Все ошибки обрабатываются через errorMiddleware, который возвращает ответ в формате JSON с соответствующим HTTP-кодом и сообщением об ошибке.

Пример ответа на ошибку:
```json
{
  "code": 401,
  "message": "Access denied"
}
```