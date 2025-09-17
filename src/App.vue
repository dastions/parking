<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg fixed w-full top-0 z-50">
      <div class="container-custom">
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center">
            <h1 class="text-2xl font-bold text-primary-800">DASTIONS</h1>
            <span class="ml-2 text-sm text-gray-600">Digital Application Solutions</span>
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
    <section class="gradient-bg text-white pt-24 pb-16">
      <div class="container-custom">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Control de Accesos Inteligente
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100 animate-slide-up">
            Solución integral desarrollada por DASTIONS para automatizar, controlar y optimizar el acceso a tus instalaciones
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <button class="btn-secondary text-lg px-8 py-4" @click="scrollToContact">
              Solicita una demo gratuita
            </button>
            <button class="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Contacta ahora
            </button>
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
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Sistema LPR</h3>
            <p class="text-gray-700">Reconocimiento automático de matrículas con tecnología de última generación para identificación instantánea y precisa.</p>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Barreras Automatizadas</h3>
            <p class="text-gray-700">Control total del acceso vehicular con barreras inteligentes que se adaptan a diferentes tipos de vehículos y situaciones.</p>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Software Propio</h3>
            <p class="text-gray-700">Plataforma de gestión desarrollada específicamente para nuestros sistemas, con interfaz intuitiva y funcionalidades avanzadas.</p>
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
              <p class="text-gray-700">Elimina la intervención manual y reduce los errores humanos con procesos completamente automatizados.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Control Remoto</h3>
              <p class="text-gray-700">Gestiona y supervisa tus instalaciones desde cualquier lugar con acceso web y móvil.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Máxima Fiabilidad</h3>
              <p class="text-gray-700">Sistemas robustos diseñados para funcionar 24/7 con mínima intervención y mantenimiento.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Escalabilidad</h3>
              <p class="text-gray-700">Adapta el sistema a tus necesidades actuales y futuras con facilidad de expansión.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Soporte Técnico</h3>
              <p class="text-gray-700">Equipo especializado disponible para resolver cualquier incidencia de forma rápida y eficiente.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">ROI Garantizado</h3>
              <p class="text-gray-700">Reducción de costes operativos y mejora de la eficiencia con retorno de inversión demostrable.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Areas Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ámbitos de Aplicación</h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Nuestros sistemas están diseñados para adaptarse a diferentes sectores y necesidades específicas.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div class="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4 text-center">Residencial</h3>
            <p class="text-gray-700 text-center">Comunidades de vecinos, urbanizaciones privadas y complejos residenciales.</p>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div class="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4 text-center">Industrial</h3>
            <p class="text-gray-700 text-center">Fábricas, almacenes industriales y complejos de producción.</p>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div class="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4 text-center">Comercial</h3>
            <p class="text-gray-700 text-center">Centros comerciales, oficinas corporativas y espacios de negocio.</p>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div class="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4 text-center">Logístico</h3>
            <p class="text-gray-700 text-center">Puertos, aeropuertos, centros de distribución y terminales de carga.</p>
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

    <!-- Experience Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Experiencia Comprobada</h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Nuestros sistemas ya están operativos en diversos sectores, demostrando su eficacia y fiabilidad.
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="bg-white p-8 rounded-xl shadow-lg text-center">
            <div class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg class="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Parques Naturales</h3>
            <p class="text-gray-700">Control de acceso vehicular en espacios naturales protegidos con sistemas resistentes a condiciones adversas.</p>
          </div>
          
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
            <h3 class="text-2xl font-bold mb-4">DASTIONS</h3>
            <p class="text-gray-300 mb-4">Digital Application Solutions</p>
            <p class="text-gray-400">
              Soluciones tecnológicas avanzadas para el control de accesos. 
              Automatización, fiabilidad y eficiencia para tu negocio.
            </p>
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
