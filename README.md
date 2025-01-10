# AI Chat API

Esta es una API que funciona como un chat para responder a preguntas utilizando inteligencia artificial. La API está implementada usando Cloudflare y utiliza el modelo Llama 3.

## Características

- Responde a preguntas en tiempo real.
- Utiliza el modelo de inteligencia artificial Llama 3.

## Uso

Para utilizar la API, simplemente envía una pregunta y recibirás una respuesta generada por el modelo de inteligencia artificial.

## Ejemplo de solicitud

```http
POST /api/chat
Content-Type: application/json

{
  "question": "¿Cuál es la capital de Francia?"
}
```

## Ejemplo de respuesta

```json
{
  "response": "La capital de Francia es París."
}
```

## Instalación

1. Clona el repositorio.
2. Configura tu entorno y token en Cloudflare.
3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
    ```env
    PORT=tu_puerto
    CLOUDFLARE_TOKEN=tu_token_de_cloudflare
    CLOUDFLARE_URL=tu_url_de_cloudflare
    ```

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que te gustaría realizar.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
