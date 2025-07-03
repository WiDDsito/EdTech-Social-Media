# Proyecto Base de Datos: Next.js + Node.js + MongoDB + Docker

Este proyecto es un stack completo con:
- **Frontend:** Next.js (React)
- **Backend:** Node.js (Express/MongoDB)
- **Base de datos:** MongoDB
- **Orquestación:** Docker Compose

## Estructura del proyecto

```
├── crud-api/           # Backend Node.js (Express)
├── frontend/           # Frontend Next.js
│   ├── app/
│   ├── package.json
│   └── ...
├── docker-compose.yml  # Orquestación de servicios
└── README.md           # Este archivo
```

## Requisitos
- Docker y Docker Compose
- (Opcional) Node.js y npm para desarrollo local

## Uso rápido con Docker

1. Clona el repositorio:
   ```sh
   git clone https://github.com/tuusuario/basedatos.git
   cd basedatos
   ```
2. Levanta todos los servicios:
   ```sh
   docker-compose up --build
   ```
3. Accede a:
   - Frontend: [http://localhost:3001](http://localhost:3001)
   - Backend: [http://localhost:3000](http://localhost:3000)
   - MongoDB: `mongodb://localhost:27017/miapp`

## Desarrollo local (sin Docker)

### Frontend
```sh
cd frontend
npm install
npm run dev
```

### Backend
```sh
cd crud-api
npm install
node app.js
```

## Personalización
- Modifica el frontend en `frontend/app/`
- Modifica el backend en `crud-api/`

## Notas
- El frontend consume la API del backend en `/api`.
- Puedes cambiar variables de entorno en `docker-compose.yml`.

## Guía detallada de uso de APIs y comandos

### 1. Introducción
Este proyecto implementa una arquitectura de microservicios utilizando Docker Compose, integrando un frontend en Next.js, un backend en Node.js (Express) y una base de datos MongoDB. A continuación, se describe el uso de las APIs y los comandos principales para la gestión y despliegue del sistema.

### 2. Uso de la API REST (Backend)

El backend expone una API REST en `http://localhost:3000/api`. Los endpoints pueden variar según tu implementación, pero un ejemplo típico sería:

- **GET /api**
  - Descripción: Obtiene todos los registros de la base de datos.
  - Ejemplo de uso con `curl`:
    ```sh
    curl http://localhost:3000/api
    ```
- **POST /api**
  - Descripción: Crea un nuevo registro.
  - Ejemplo de uso con `curl`:
    ```sh
    curl -X POST http://localhost:3000/api -H "Content-Type: application/json" -d '{"nombre":"Ejemplo"}'
    ```
- **PUT /api/:id**
  - Descripción: Actualiza un registro existente.
  - Ejemplo de uso:
    ```sh
    curl -X PUT http://localhost:3000/api/ID_DEL_REGISTRO -H "Content-Type: application/json" -d '{"nombre":"Nuevo Nombre"}'
    ```
- **DELETE /api/:id**
  - Descripción: Elimina un registro.
  - Ejemplo de uso:
    ```sh
    curl -X DELETE http://localhost:3000/api/ID_DEL_REGISTRO
    ```

> **Nota:** Puedes probar estos endpoints desde Postman, Insomnia o cualquier cliente HTTP.

### 3. Comandos principales del proyecto

#### 3.1. Clonar el repositorio
```sh
git clone https://github.com/tuusuario/basedatos.git
cd basedatos
```

#### 3.2. Levantar todos los servicios con Docker
```sh
docker-compose up --build
```
Esto construye y ejecuta los contenedores de frontend, backend y base de datos.

#### 3.3. Detener los servicios
```sh
docker-compose down
```

#### 3.4. Desarrollo local sin Docker
- **Frontend:**
  ```sh
  cd frontend
  npm install
  npm run dev
  ```
- **Backend:**
  ```sh
  cd crud-api
  npm install
  node app.js
  ```

#### 3.5. Subir cambios a GitHub
```sh
git add .
git commit -m "Mensaje descriptivo"
git push
```

### 4. Consideraciones finales
- Asegúrate de que los puertos 3000 (backend) y 3001 (frontend) estén libres.
- Puedes modificar los endpoints del backend según tus necesidades.
- El frontend está configurado para consumir la API del backend automáticamente.
- Consulta los logs de los servicios con:
  ```sh
  docker-compose logs -f
  ```

---

¡Listo para usar y modificar según tus necesidades!

Esta guía está pensada para documentar y presentar el flujo de trabajo y uso del sistema en un contexto académico o profesional.
