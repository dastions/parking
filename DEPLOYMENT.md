# GitHub Pages Deployment Guide

## 🚀 Configuración Automática con GitHub Actions

Este proyecto incluye un workflow de GitHub Actions que despliega automáticamente la landing page a GitHub Pages cada vez que haces push a la rama `main`.

### Pasos para Configurar:

1. **Crear el repositorio en GitHub**:
   - Ve a GitHub y crea un nuevo repositorio
   - Nómbralo como `parking-landing` o el nombre que prefieras

2. **Subir el código**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: DASTIONS landing page"
   git branch -M main
   git remote add origin https://github.com/[tu-usuario]/[nombre-repositorio].git
   git push -u origin main
   ```

3. **Habilitar GitHub Pages**:
   - Ve a `Settings` en tu repositorio de GitHub
   - Busca la sección `Pages` en el menú lateral
   - En `Source`, selecciona `GitHub Actions`

4. **El workflow se ejecutará automáticamente**:
   - Ve a la pestaña `Actions` en tu repositorio
   - Verás el workflow "Deploy to GitHub Pages" ejecutándose
   - Una vez completado, tu sitio estará disponible en:
     `https://[tu-usuario].github.io/[nombre-repositorio]`

### Flujo de Trabajo:

- **Push a main** → GitHub Actions ejecuta el build → Despliega a GitHub Pages
- **Tiempo de despliegue**: ~2-3 minutos
- **URL del sitio**: Se genera automáticamente

### Ventajas del Workflow Incluido:

✅ **Despliegue automático** en cada push a main  
✅ **Build optimizado** con Vite  
✅ **Caché de dependencias** para builds más rápidos  
✅ **Permisos seguros** configurados correctamente  
✅ **Concurrencia controlada** para evitar conflictos  
✅ **Trigger manual** disponible si necesitas desplegar sin push  

### Comandos Útiles:

```bash
# Ver el estado del workflow
gh run list

# Ver logs del último despliegue
gh run view --log

# Trigger manual del despliegue
gh workflow run deploy.yml
```

### Troubleshooting:

**Si el workflow falla:**
1. Verifica que GitHub Pages esté habilitado en `Settings` → `Pages`
2. Asegúrate de que el repositorio sea público (GitHub Pages gratuito requiere repositorios públicos)
3. Revisa los logs en la pestaña `Actions`

**Si el sitio no se actualiza:**
1. Espera 2-3 minutos después del push
2. Verifica que el workflow se haya completado exitosamente
3. Limpia la caché del navegador (Ctrl+F5)

### Personalización:

Para cambiar la URL del sitio, puedes:
1. Renombrar el repositorio en GitHub
2. La nueva URL será: `https://[tu-usuario].github.io/[nuevo-nombre]`

Para usar un dominio personalizado:
1. Añade un archivo `CNAME` en la carpeta `public/`
2. Configura el dominio en `Settings` → `Pages` → `Custom domain`
