## Requisitos

Node.js > 14.16.1

## Para empezar

Primero debes de correr el servidor de desarrollo con **npm** o con **yarn** (en windows node ya viene con npm)

```bash
npm run dev
# o
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

`pages/index.js`. Es el archivo principal del proyecto

[Los endpoints de las APIS](https://nextjs.org/docs/api-routes/introduction) pueden ser aceesadas [http://localhost:3000/api/hello](http://localhost:3000/api/hello). este endpoint puede ser editado en `pages/api/hello.js`.

El directorio `pages/api` tiene el endpont `/api/*`. Esto archivos pueden ser tratados como rutas de la API [API routes](https://nextjs.org/docs/api-routes/introduction) en lugar de las paginas de react.

## Documentación

Para aprender más sobre Next.js, echale un ojo a los siguientes recursos:

- [Documentación de Next.js](https://nextjs.org/docs) - leer sobre Next.js sus caracteristicas y la API.
- [Aprnede Next.js](https://nextjs.org/learn) - un tutorial interactivo de Next.js

Tu puedes echar un vistazo a [El repositirio de Github de Next.js](https://github.com/vercel/next.js/) - tus recomendaciones y contribuciones son bienvenidas!

## Despliegue en vercel platform (Es como un entorno de producción)

El camino facil para desplegar tu Next.js app es usar [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) para creadores de Next.js.

Echa un vistazo a nuestro [Next.js despliegue de implementación](https://nextjs.org/docs/deployment) para más detalles.
