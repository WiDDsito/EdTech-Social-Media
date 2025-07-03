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

---

¡Listo para usar y modificar según tus necesidades!
