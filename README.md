# 📡 Monitor NOC

Aplicación móvil de monitoreo de red desarrollada con **Ionic/Angular** y **Capacitor**. Permite visualizar en tiempo real el estado de la infraestructura de red a través de una API personalizada conectada a **PRTG Network Monitor** y **CheckMK**.

---

## 📋 Descripción

Monitor NOC es una app diseñada para equipos de infraestructura y soporte técnico que necesitan monitorear el estado de su red desde cualquier dispositivo móvil. Muestra el estado en tiempo real de:

- 🌐 **Interfaces WAN** — velocidad de bajada/subida y estado de cada enlace
- 🐳 **Contenedores Docker** — estado de cada contenedor en ejecución
- ⚡ **UPS** — estado y nivel de carga de cada unidad
- 📶 **Red Unifi** — dispositivos WiFi y LAN conectados
- 🖥️ **Servidores** — ping y estado de servidores monitoreados
- 🔌 **Switches y APs** — estado de switches y puntos de acceso
- 📷 **Cámaras IP** — estado de cámaras de seguridad

### Características principales

- 🔄 Actualización automática cada 15 segundos (polling)
- 🔔 Notificaciones push cuando un dispositivo cae o un UPS baja de carga
- 📴 Banner de error cuando se pierde conexión con la API
- 🔃 Refresh manual con deslizamiento hacia abajo
- 🌙 Interfaz dark mode estilo StatusPage

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Versión | Uso |
|---|---|---|
| [Ionic Framework](https://ionicframework.com/) | 7+ | UI y componentes móviles |
| [Angular](https://angular.io/) | 17+ | Framework frontend |
| [Capacitor](https://capacitorjs.com/) | 6+ | Bridge nativo Android/iOS |
| [RxJS](https://rxjs.dev/) | 7+ | Programación reactiva y polling |
| [@capacitor/local-notifications](https://capacitorjs.com/docs/apis/local-notifications) | - | Notificaciones push |
| [TypeScript](https://www.typescriptlang.org/) | 5+ | Tipado estático |

---

## ⚙️ Requisitos previos

Antes de instalar asegúrate de tener:

- [Node.js](https://nodejs.org/) v22 LTS o superior
- [NVM](https://github.com/coreybutler/nvm-windows) (recomendado para manejar versiones de Node)
- [Ionic CLI](https://ionicframework.com/docs/cli) instalado globalmente
- [Android Studio](https://developer.android.com/studio) para compilar en Android
- Acceso a la API de monitoreo (red interna o VPN)

---

## 🚀 Instalación

### 1. Clona el repositorio

```bash
git clone https://github.com/TU_USUARIO/monitor-noc.git
cd monitor-noc
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Configura la URL de la API

Abre `src/app/core/services/prtg-service.ts` y actualiza la URL:

```typescript
private readonly apiUrl = 'https://tu-api.ejemplo.com/api/mobile';
```

### 4. Ejecuta en el navegador

```bash
ionic serve
```

---

## 📱 Compilar para Android

### 1. Genera el build de producción

```bash
ionic build
```

### 2. Agrega la plataforma Android (solo la primera vez)

```bash
ionic capacitor add android
```

### 3. Sincroniza los archivos

```bash
ionic capacitor sync android
```

### 4. Abre en Android Studio

```bash
ionic capacitor open android
```

### Para compilaciones posteriores

```bash
ionic build
ionic capacitor sync android
```

---

## 🔄 Flujo de actualización de datos

```
PrtgService
├── Carga inicial al abrir la app
├── Polling automático cada 15 segundos
├── Detección de cambios de estado
└── Notificaciones push al detectar caídas
```

---

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── core/
│   │   └── services/
│   │       ├── prtg-service.ts       # Servicio principal de API
│   │       └── notification.service.ts # Notificaciones push
│   ├── pages/
│   │   ├── home/                     # Dashboard principal
│   │   └── details/
│   │       ├── wan/                  # Detalle interfaces WAN
│   │       ├── docker/               # Detalle contenedores
│   │       ├── ups/                  # Detalle UPS
│   │       ├── servers/              # Detalle servidores
│   │       ├── switches/             # Detalle switches y APs
│   │       └── cameras/              # Detalle cámaras IP
│   └── shared/
│       ├── interfaces/               # Interfaces TypeScript
│       ├── pipes/                    # Pipes personalizados
│       └── components/
│           └── error-banner/         # Banner de error de conexión
└── theme/
    └── variables.scss                # Variables de tema
```

---

## 🔒 Acceso a la API

La API de monitoreo opera en una red privada interna. Para acceder desde fuera de la red se recomienda:

- **VPN** — opción más segura para uso corporativo
- **Cloudflare Tunnel** — alternativa sin exponer puertos

---

## 📄 Licencia

Proyecto de uso interno. Todos los derechos reservados.
