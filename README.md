# Landing Page DASTIONS - Control de Accesos Inteligente

Una landing page moderna y responsive desarrollada con Vue.js y TailwindCSS para promocionar la solución integral de control de accesos de DASTIONS.

## 🚀 Características

- **Diseño Responsive**: Optimizado para móviles, tablets y desktop
- **Moderno y Profesional**: Colores azul oscuro, gris y toques verdes
- **Animaciones Suaves**: Implementadas con TailwindCSS y CSS animations
- **SEO Optimizado**: Meta tags y estructura optimizada para buscadores
- **Formulario de Captación**: Con validación básica para generar leads
- **Mobile-First**: Diseño pensado primero para dispositivos móviles

## 📋 Secciones Incluidas

- ✅ **Hero Section**: Titular potente, subtítulo y CTA principal
- ✅ **¿Quiénes somos?**: Descripción breve de la empresa
- ✅ **¿Qué ofrecemos?**: Servicios con iconos representativos
- ✅ **Ventajas**: Grid con checkmarks verdes
- ✅ **Ámbitos de aplicación**: Tarjetas para diferentes sectores
- ✅ **Modelo de servicio**: Venta + cuota mensual
- ✅ **Experiencia comprobada**: Casos de éxito
- ✅ **Formulario de contacto**: Captación de leads
- ✅ **Footer**: Información de contacto completa

## 🛠️ Tecnologías Utilizadas

- **Vue.js 3**: Framework JavaScript reactivo
- **TailwindCSS**: Framework CSS utilitario
- **Vite**: Herramienta de construcción rápida
- **PostCSS**: Procesador CSS
- **Autoprefixer**: Prefijos CSS automáticos

## 📦 Instalación

1. **Clona el repositorio**:
   ```bash
   git clone [url-del-repositorio]
   cd parking-landing
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abre tu navegador** en `http://localhost:3000`

## 🏗️ Construcción para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

## 📱 Características Responsive

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: Adaptación automática a diferentes tamaños de pantalla
- **Navegación**: Menú hamburguesa en móviles
- **Formularios**: Campos adaptados a pantallas táctiles

## 🎨 Personalización

### Colores
Los colores principales están definidos en `tailwind.config.js`:
- **Primary**: Azul oscuro (#1e3a8a)
- **Secondary**: Verde (#22c55e)
- **Gray**: Escala de grises para textos y fondos

### Animaciones
Las animaciones están definidas en `src/style.css` y `tailwind.config.js`:
- `fade-in`: Aparición suave
- `slide-up`: Deslizamiento hacia arriba
- `slide-in-left/right`: Deslizamiento lateral

## 📧 Formulario de Contacto

El formulario incluye validación básica para:
- Nombre (requerido)
- Email (requerido, formato válido)
- Teléfono (requerido)
- Empresa (opcional)
- Mensaje (opcional)

## 🔧 Configuración del Servidor

Para conectar el formulario con un backend, modifica el método `submitForm()` en `src/App.vue`:

```javascript
async submitForm() {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.form)
    });
    
    if (response.ok) {
      alert('¡Gracias por tu interés! Te contactaremos pronto.');
      this.resetForm();
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
```

## 📈 SEO

La página incluye:
- Meta tags optimizados
- Estructura semántica HTML5
- Open Graph tags para redes sociales
- Twitter Card tags
- Títulos jerárquicos (H1, H2, H3)
- Alt text para imágenes

## 🚀 Despliegue

### GitHub Pages (Automático) ⭐ **Recomendado**
El proyecto incluye un workflow de GitHub Actions que despliega automáticamente a GitHub Pages:

1. **Habilita GitHub Pages** en tu repositorio:
   - Ve a `Settings` → `Pages`
   - En `Source`, selecciona `GitHub Actions`

2. **Sube el código** a tu repositorio:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **El workflow se ejecutará automáticamente** y desplegará la página en:
   `https://[tu-usuario].github.io/[nombre-repositorio]`

4. **Para futuras actualizaciones**, simplemente haz push a la rama `main`:
   ```bash
   git add .
   git commit -m "Update landing page"
   git push origin main
   ```

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run build`
3. Directorio de publicación: `dist`

### Vercel
1. Instala Vercel CLI: `npm i -g vercel`
2. Ejecuta: `vercel`
3. Sigue las instrucciones

## 📞 Soporte

Para soporte técnico o consultas sobre la implementación:
- **Email**: info@dastions.com
- **Teléfono**: 977 131 296

## 📄 Licencia

© 2024 DASTIONS - Digital Application Solutions. Todos los derechos reservados.
