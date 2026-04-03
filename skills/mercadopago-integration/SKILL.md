---
name: Mercado Pago & Hostinger Integration
description: Guía técnica para integrar Mercado Pago Checkout Pro en aplicaciones Node.js desplegadas en Hostinger Business y Vercel.
---

# Mercado Pago & Hostinger Business Integration

Esta skill proporciona las pautas necesarias para implementar una integración robusta de Mercado Pago, optimizada para el despliegue en **Hostinger Business** y compatible con entornos de prueba en **Vercel**.

## 1. Infraestructura y Despliegue

### Hostinger Business (Producción)
- **Node.js Runtime:** Hostinger Business permite hasta 5 aplicaciones Node.js. Utilizar Express.js o Next.js para detección automática.
- **Variables de Entorno:** Cargar `MP_ACCESS_TOKEN` y `MP_PUBLIC_KEY` en la sección "Settings & Redeploy" del panel de Hostinger. **NUNCA** subir el archivo `.env` al repositorio.
- **CI/CD:** Conectar el repositorio de GitHub a Hostinger para habilitar el despliegue automático en cada `push`.

### Vercel (Pruebas/Frontend)
- Utilizar Vercel para despliegues rápidos de ramas de desarrollo o el frontend.
- Replicar las mismas variables de entorno en el panel de Vercel.

## 2. Implementación de Mercado Pago

### Checkout Pro (Recomendado)
Es la solución más "vibe-friendly" y fácil de mantener.
- **Preferencia:** Crear una preferencia en el servidor y devolver el `init_point` al frontend.
- **SDK:** Utilizar el SDK oficial de Node.js (`mercadopago`).

### Webhooks y Seguridad
- **Endpoint:** Crear una ruta POST (ej: `/api/webhooks/mercadopago`).
- **Validación:** Implementar validación de firma `x-signature` para asegurar que la notificación proviene de Mercado Pago.
- **Integridad:** Validar el estado del pago consultando la API de Mercado Pago con el ID recibido en la notificación antes de impactar cambios en la base de datos.

## 3. Configuración de Red y CORS

- Si el backend está en Hostinger y el frontend en Vercel (dominios distintos):
  - Configurar encabezados CORS permitiendo el dominio de Vercel.
  - Asegurar que las `back_urls` apunten al dominio correcto según el entorno.

## 4. Flujo de Trabajo Agéntico

Para implementar nuevas funcionalidades, usar prompts como:
- *"Implementá una integración de Checkout Pro siguiendo la Skill de Mercado Pago, manejando el retorno de URLs y guardando el ID del pago."*
- *"Configurá el webhook de Mercado Pago con validación de firma x-signature."*
