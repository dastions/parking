<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg fixed w-full top-0 z-50">
      <div class="container-custom">
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center">
            <a href="https://www.dastions.com/#/" target="_blank" rel="noopener noreferrer" class="flex items-center hover:opacity-80 transition-opacity">
              <h1 class="text-2xl font-bold text-primary-800">DASTIONS</h1>
              <span class="ml-2 text-sm text-gray-600">Digital Application Solutions</span>
            </a>
          </div>
          <div class="hidden md:flex space-x-8">
            <a href="#about" class="text-gray-700 hover:text-primary-600 transition-colors">¿Quiénes somos?</a>
            <a href="#services" class="text-gray-700 hover:text-primary-600 transition-colors">Servicios</a>
            <a href="#advantages" class="text-gray-700 hover:text-primary-600 transition-colors">Ventajas</a>
            <a href="#contact" class="text-gray-700 hover:text-primary-600 transition-colors">Contacto</a>
          </div>
          <button class="btn-primary md:hidden">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-bg text-white pt-24 pb-16 relative overflow-hidden">
      <!-- Content -->
      <div class="container-custom relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="text-center lg:text-left">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Control de Accesos Inteligente
            </h1>
            <p class="text-xl md:text-2xl mb-8 text-blue-100 animate-slide-up">
              Solución integral desarrollada por DASTIONS para automatizar, controlar y optimizar el acceso a tus instalaciones
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
              <button class="btn-secondary text-lg px-8 py-4" @click="scrollToContact">
                Solicita una demo gratuita
              </button>
              <button class="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" @click="scrollToContact">
                Contacta ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">¿Quiénes somos?</h2>
            <p class="text-lg text-gray-700 leading-relaxed">
              <strong>DASTIONS (Digital Application Solutions)</strong> es una empresa especializada en el desarrollo de soluciones tecnológicas avanzadas para el control de accesos. 
              Nuestro equipo de ingenieros y desarrolladores trabaja con las últimas tecnologías para crear sistemas robustos, fiables y fáciles de usar que se adaptan a las necesidades específicas de cada cliente.
            </p>
            <div class="mt-6">
              <a href="https://www.dastions.com/#/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors">
                Visita nuestra web corporativa
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">¿Qué ofrecemos?</h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Nuestra solución integral combina hardware de última generación con software propio desarrollado específicamente para maximizar la eficiencia y seguridad de tus instalaciones.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="w-full h-48 mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
              <img src="/lpr.jpeg" alt="Sistema LPR" class="w-full h-full object-contain">
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Sistema LPR</h3>
            <p class="text-gray-700 mb-4">Reconocimiento automático de matrículas con tecnología de última generación para identificación instantánea y precisa.</p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Detección automática de vehículos</li>
              <li>• Lectura en tiempo real</li>
              <li>• Base de datos integrada</li>
            </ul>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="w-full h-48 mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
              <img src="/barrera.jpeg" alt="Barreras Automatizadas" class="w-full h-full object-contain">
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Barreras Electromecánicas</h3>
            <p class="text-gray-700 mb-4">Control total del acceso vehicular con barreras inteligentes que soportan hasta <strong>15.000 maniobras diarias</strong> y apertura en <strong>1,5 segundos</strong>.</p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Motor trifásico 230V de bajo consumo</li>
              <li>• Tecnología inverter para movimiento suave</li>
              <li>• Sistema antirrobo integrado</li>
            </ul>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="w-full h-48 mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
              <img src="/monitoring.jpeg" alt="Control Remoto" class="w-full h-full object-contain">
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Control Remoto Inteligente</h3>
            <p class="text-gray-700 mb-4">Gestión completa desde smartphone con conexión SIM de datos para monitoreo 24/7 desde cualquier lugar.</p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• App móvil integrada</li>
              <li>• Monitoreo en tiempo real</li>
              <li>• Control de acceso remoto</li>
            </ul>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            
            <div class="w-full h-48 mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
              <img src="/pyment.jpeg" alt="Control Remoto" class="w-full h-full object-contain">
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Sistemas de Pago</h3>
            <p class="text-gray-700 mb-4">Integración completa de sistemas de pago automatizados para gestión de tarifas y facturación en tiempo real.</p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Pago con tarjeta y móvil</li>
              <li>• Facturación automática</li>
              <li>• Gestión de abonos</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Advantages Section -->
    <section id="advantages" class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ventajas de Nuestra Solución</h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Descubre por qué nuestros clientes confían en DASTIONS para sus necesidades de control de accesos.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Automatización Total</h3>
              <p class="text-gray-700">Elimina la intervención manual y reduce los errores humanos con procesos completamente automatizados y <strong>hasta 15.000 maniobras diarias</strong>.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Apertura Ultrarrápida</h3>
              <p class="text-gray-700">Apertura del asta a 90º en <strong>solo 1,5 segundos</strong> para evitar acumulación de vehículos en pasos muy transitados.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Tecnología Inverter</h3>
              <p class="text-gray-700">Movimiento súper fluido y preciso con control absoluto de velocidad y desaceleraciones mediante tecnología inverter.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Bajo Consumo Energético</h3>
              <p class="text-gray-700">Motor trifásico 230V optimizado para <strong>bajo consumo</strong> a pesar del ciclo de trabajo casi continuo.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Sistema Antirrobo</h3>
              <p class="text-gray-700">Protección máxima con palancas perfectamente alineadas que <strong>hacen imposible la manipulación forzada manual</strong>.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Materiales Premium</h3>
              <p class="text-gray-700">Cajón de acero sólido con <strong>doble tratamiento anticorrosión</strong> y engranajes metálicos para máxima durabilidad.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Model Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Modelo de Servicio</h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Ofrecemos una solución completa que incluye tanto la implementación inicial como el soporte continuo.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div class="text-center">
            <div class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg class="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">Venta del Sistema</h3>
            <p class="text-gray-700 mb-6">
              Adquiere el sistema completo con hardware de última generación y software propio desarrollado específicamente para tus necesidades.
            </p>
            <ul class="text-left space-y-2 text-gray-700">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-secondary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Instalación completa incluida
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-secondary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Configuración personalizada
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-secondary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Formación del personal
              </li>
            </ul>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 bg-secondary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg class="w-10 h-10 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">Cuota Mensual</h3>
            <p class="text-gray-700 mb-6">
              Mantén tu sistema actualizado y funcionando perfectamente con nuestro servicio de soporte y mantenimiento continuo.
            </p>
            <ul class="text-left space-y-2 text-gray-700">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-secondary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Soporte técnico 24/7
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-secondary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Actualizaciones de software
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-secondary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Mantenimiento preventivo
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Case Video Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Caso de Éxito Real</h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Descubre cómo nuestro sistema está funcionando en el Parque Natural del Montsec, una reserva natural protegida.
          </p>
        </div>
        
        <div class="max-w-6xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Video Section -->
            <div class="order-2 lg:order-1">
              <div class="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                <div class="aspect-video">
                  <iframe 
                    src="https://www.youtube.com/embed/jfYukGbFxFk" 
                    title="Sistema de Control de Accesos DASTIONS - Parque Natural del Montsec"
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                    class="w-full h-full">
                  </iframe>
                </div>
              </div>
            </div>
            
            <!-- Content Section -->
            <div class="order-1 lg:order-2">
              <div class="space-y-6">
                <div class="flex items-center space-x-3">
                  <div class="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-900">Parque Natural del Montsec</h3>
                </div>
                
                <p class="text-lg text-gray-700 leading-relaxed">
                  <strong>Reserva Natural Protegida</strong> donde nuestro sistema de control de accesos está operativo, 
                  demostrando su eficacia en condiciones ambientales exigentes y su capacidad para gestionar el acceso 
                  vehicular de forma sostenible y respetuosa con el medio ambiente.
                </p>
                
                <div class="space-y-4">
                  <div class="flex items-start space-x-3">
                    <svg class="w-5 h-5 text-secondary-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 class="font-semibold text-gray-900">Control Automatizado</h4>
                      <p class="text-gray-700">Gestión 24/7 sin intervención manual</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start space-x-3">
                    <svg class="w-5 h-5 text-secondary-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 class="font-semibold text-gray-900">Resistencia Ambiental</h4>
                      <p class="text-gray-700">Funcionamiento óptimo en condiciones adversas</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start space-x-3">
                    <svg class="w-5 h-5 text-secondary-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 class="font-semibold text-gray-900">Sostenibilidad</h4>
                      <p class="text-gray-700">Solución respetuosa con el entorno natural</p>
                    </div>
                  </div>
                </div>
                
                <div class="pt-4 space-y-3">
                  <button class="btn-secondary" @click="scrollToContact">
                    Ver más casos de éxito
                  </button>
                  <div>
                    <a href="https://www.dastions.com/#/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors">
                      Más información en dastions.com
                      <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Más Experiencia Comprobada</h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Nuestros sistemas están operativos en diversos sectores, demostrando su eficacia y fiabilidad.
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="bg-white p-8 rounded-xl shadow-lg text-center">
            <div class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg class="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Canteras</h3>
            <p class="text-gray-700">Gestión de acceso de maquinaria pesada y vehículos en explotaciones mineras y canteras industriales.</p>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-lg text-center">
            <div class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg class="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Puertos</h3>
            <p class="text-gray-700">Control de acceso marítimo y terrestre en instalaciones portuarias con alta seguridad y trazabilidad.</p>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-lg text-center">
            <div class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg class="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Centros Comerciales</h3>
            <p class="text-gray-700">Gestión eficiente del acceso vehicular en centros comerciales y espacios de alta concurrencia.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section id="contact" class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">¿Listo para Automatizar tu Control de Accesos?</h2>
            <p class="text-lg text-gray-700">
              Solicita información personalizada y descubre cómo podemos adaptar nuestra solución a tus necesidades específicas.
            </p>
          </div>
          
          <form @submit.prevent="submitForm" class="bg-gray-50 p-8 rounded-xl shadow-lg">
            <div class="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label for="nombre" class="block text-sm font-medium text-gray-700 mb-2">Nombre *</label>
                <input 
                  type="text" 
                  id="nombre" 
                  v-model="form.nombre"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tu nombre completo"
                >
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="tu@email.com"
                >
              </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label for="telefono" class="block text-sm font-medium text-gray-700 mb-2">Teléfono *</label>
                <input 
                  type="tel" 
                  id="telefono" 
                  v-model="form.telefono"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="+34 600 000 000"
                >
              </div>
              <div>
                <label for="empresa" class="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                <input 
                  type="text" 
                  id="empresa" 
                  v-model="form.empresa"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Nombre de tu empresa"
                >
              </div>
            </div>
            
            <div class="mb-6">
              <label for="mensaje" class="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
              <textarea 
                id="mensaje" 
                v-model="form.mensaje"
                rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Cuéntanos sobre tu proyecto y necesidades específicas..."
              ></textarea>
            </div>
            
            <div class="text-center">
              <button type="submit" class="btn-secondary text-lg px-8 py-4">
                Quiero más información
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container-custom">
        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <a href="https://www.dastions.com/#/" target="_blank" rel="noopener noreferrer" class="hover:opacity-80 transition-opacity">
              <h3 class="text-2xl font-bold mb-4">DASTIONS</h3>
              <p class="text-gray-300 mb-4">Digital Application Solutions</p>
            </a>
            <p class="text-gray-400 mb-4">
              Soluciones tecnológicas avanzadas para el control de accesos. 
              Automatización, fiabilidad y eficiencia para tu negocio.
            </p>
            <div class="space-y-2">
              <a href="https://www.dastions.com/#/" target="_blank" rel="noopener noreferrer" class="block text-primary-400 hover:text-primary-300 text-sm transition-colors">
                www.dastions.com
              </a>
              <p class="text-gray-500 text-sm">Web corporativa</p>
            </div>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Contacto</h4>
            <div class="space-y-3">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-primary-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>info@dastions.com</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-primary-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>977 131 296</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            © 2024 DASTIONS - Digital Application Solutions. Todos los derechos reservados.
          </p>
          <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">
            Política de Privacidad
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      form: {
        nombre: '',
        email: '',
        telefono: '',
        empresa: '',
        mensaje: ''
      }
    }
  },
  methods: {
    scrollToContact() {
      document.getElementById('contact').scrollIntoView({ 
        behavior: 'smooth' 
      });
    },
    submitForm() {
      // Aquí se implementaría la lógica de envío del formulario
      console.log('Formulario enviado:', this.form);
      alert('¡Gracias por tu interés! Te contactaremos pronto.');
      
      // Reset form
      this.form = {
        nombre: '',
        email: '',
        telefono: '',
        empresa: '',
        mensaje: ''
      };
    }
  }
}
</script>
