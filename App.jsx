import React, { useState, useEffect, useRef } from 'react';
import {
  Github,
  Printer,
  ExternalLink,
  Monitor,
  Smartphone,
  Terminal,
  Cpu,
  Server,
  Layers,
  Code2,
  ShieldCheck,
  Database,
  Copy,
  CheckCircle2,
  ArrowRight,
  Globe,
  LayoutDashboard,
  Tablet,
  User,
  Briefcase,
  GraduationCap,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

// --- DATA: PROFUNDAMENTE ENRIQUECIDA DESDE LOS READMES Y TU CV ---
const portfolioData = {
  header: {
    name: "Braulio Isaias Bernal Padron",
    title: "Desarrollador Full Stack y Arquitecto de Sistemas",
    summary: "Soy estudiante de TSU en Desarrollo de Software y busco una oportunidad para realizar mis estadías profesionales de la UTM. Me llama mucho la atencion el construir aplicaciones web y móviles que sean funcionales y fáciles de mantener, aplicando siempre buenas prácticas de programación. Mi objetivo es integrarme a un equipo donde pueda aportar mis conocimientos, aprender de retos reales y ayudar a crear soluciones que funcionen para el usuario final.",
    contact: {
      email: "braulioisaiasbernalpadron@gmail.com",
      emailSchool: "24090652@alumno.utmetropolitana.edu.mx",
      phone: "+52 999 272 7810",
      location: "Calle 21 #198c x8 y 8a1, Mérida, Yucatán, C.P. 91173",
      linkedin: "linkedin.com/in/braulio-isaias-bernal-padron"
    }
  },
  personalInfo: {
    age: "20 años (16/02/2006)",
    rfc: "BEPB060216ELO",
    curp: "BEPB060216HYNRDRA4",
  },
  experience: [
    {
      role: "Agente Telefónico",
      company: "TYT Callcenter - Mérida",
      period: "05/2025 – 06/2025",
      desc: "Resolución de dudas y atención directa al cliente bajo métricas de calidad. Mejora comprobada de habilidades de comunicación asertiva, tolerancia a la frustración y gestión del tiempo."
    },
    {
      role: "Apoyo Administrativo (Servicio Social)",
      company: "Dirección de Gobernación - Mérida",
      period: "09/2023 – 2024",
      desc: "Atención al ciudadano y gestión documental en dependencias. Desarrollo de responsabilidad laboral profunda y estructuración de procesos administrativos internos."
    }
  ],
  education: [
    {
      title: "TSU en Desarrollo de Software",
      institution: "Universidad Tecnológica Metropolitana (UTM) - Mérida",
      status: "En curso"
    },
    {
      title: "Profesional Técnico Bachiller",
      institution: "CONALEP Mérida 1 - Mérida",
      status: "Finalizado"
    }
  ],
  certifications: [
    "CCNA 1: Fundamentos de Redes",
    "CCNA 2: Routing and Switching"
  ],
  languages: [
    { lang: "Español", level: "Nativo" },
    { lang: "Inglés", level: "A2" }
  ],
  softSkills: [
    "Autoaprendizaje Acelerado",
    "Pensamiento Analítico y Crítico",
    "Resolución de Problemas bajo presión",
    "Comunicación Asertiva y Tolerancia",
    "Atención al detalle y Metodicidad",
    "Trabajo en Equipo y Gestión del Tiempo"
  ],
  projects: [
    {
      id: "strop",
      title: "STROP",
      subtitle: "Plataforma Operativa de Construcción",
      platforms: [
        { name: "App iOS / Android", icon: Smartphone },
        { name: "Dashboard Web B2B", icon: LayoutDashboard }
      ],
      context: "Ecosistema integral dividido en dos núcleos: un Módulo Móvil para la trinchera de obra y un Comando Central Web para la alta gerencia. STROP resuelve el crítico problema de fugas financieras y falta de transparencia operacional en campo digitalizando el reporte de incidentes, la gestión estricta de presupuestos (FinOps) y los flujos de mitigación avalados por la gerencia.",
      features: [
        "Reportes multimedia en campo con trazabilidad cartográfica GPS y almacenamiento de notas de voz (alojadas mediante audio_url).",
        "Módulo de Supervisión Finanzas FinOps: Panel que cruza el estado de obra para calcular 'Dinero en Riesgo' y presupuestos de contingencia.",
        "Gestión Multi-Tenant B2B: Permite administrar distintas organizaciones de construcción manteniendo sus datos financieros aislados."
      ],
      architecture: "Construido bajo extrema Clean Architecture. El cliente móvil opera sin conexión usando Flutter (BLoC/Cubit) e inyección de dependencias. El centro de comando web utiliza Next.js 16 con Renderizado del Lado del Servidor (SSR). Todo se orquesta sobre Supabase, delegando cálculos a procedimientos almacenados (plpgsql) con políticas de máxima seguridad (RLS) en PostgreSQL 14.1.",
      techStack: ["Next.js 16", "Flutter BLoC", "Supabase", "PostgreSQL (RLS)", "TypeScript", "Tailwind v4"],
      icon: Monitor,
      repos: [
        { name: "Comando Central Web", url: "https://github.com/SKANL/strop_web" },
        { name: "Aplicación Móvil Core", url: "https://github.com/SKANL/strop_app" }
      ]
    },
    {
      id: "proyex",
      title: "PX Forge & Kiosco",
      subtitle: "Ecosistema de Gestión de Exhibiciones Tecnológicas",
      platforms: [
        { name: "Servicio Web API", icon: Server },
        { name: "Panel Web SPA", icon: Globe },
        { name: "Kiosco iOS/Android", icon: Tablet }
      ],
      context: "Plataforma integral que actúa como central de control para orquestar ferias tecnológicas corporativas o académicas. Facilita el trabajo de los organizadores al centralizar la evaluación de jueces en el lugar mediante la app portátil 'Kiosco', enviando retroalimentación cuantitativa instantánea al servidor 'PX Forge'.",
      features: [
        "Escáner de Código QR Integrado: Utiliza 'mobile_scanner' en la app móvil para identificar proyectos físicos expuestos en milisegundos.",
        "Sistema de WebSockets interactivo (SignalR) para el recálculo asíncrono y en vivo del 'Top Rankings' de proyectos evaluados.",
        "Arquitectura de ingesta de archivos (Kestrel) configurada de forma agresiva para soportar adjuntos masivos de hasta 500 MB (ej. demoreels).",
        "Trazabilidad lógica mediante borrado suave (Soft-Delete), guardando versiones previas ('snapshots') de rúbricas de evaluación."
      ],
      architecture: "El músculo asíncrono es un servidor C# compilado en .NET 9.0 con Clean Architecture estricta (Dominios, Aplicación, Infraestructura, API). Persistencia en MongoDB Atlas, explotado para guardar esquemas fuertemente anidados. El panel principal está construido en React 19 (Vite, Recharts), y el cliente móvil en Flutter asíncrono (go_router, Provider).",
      techStack: ["C# .NET 9", "MongoDB Atlas", "React 19", "Flutter", "SignalR", "Autenticación JWT"],
      icon: Server,
      repos: [
        { name: "Motor API Backend (.NET)", url: "https://github.com/IsaiasSinthesys03/Proyex_API" },
        { name: "Panel Administrador (PX Forge)", url: "https://github.com/IsaiasSinthesys03/Proyex_WEB" },
        { name: "Aplicación Portátil (Kiosco)", url: "https://github.com/IsaiasSinthesys03/Proyex_APP_Mobile" }
      ]
    },
    {
      id: "napoli",
      title: "Napoli SaaS",
      subtitle: "Sistema Logístico Multi-Tenant para Pizzerías",
      platforms: [
        { name: "App Repartidor", icon: Smartphone },
        { name: "App Cliente", icon: Smartphone },
        { name: "Dashboard Web Admin", icon: LayoutDashboard }
      ],
      context: "Software como Servicio (SaaS) logístico que resuelve el problema de múltiples restaurantes operando en la misma infraestructura. Abarca la gestión administrativa de menús, experiencia del cliente (pedidos) y logística de entrega (repartidores), manteniendo aislamiento total de datos para cada entidad gastronómica.",
      features: [
        "Ecosistema de Tres Aplicativos: Módulo administrativo web, aplicación de consumo para clientes, y herramienta de rutas para repartidores.",
        "Sincronización instantánea de estados de pedido y rastreo satelital en vivo de repartidores utilizando canales de Supabase Realtime.",
        "Sistema de cobro blindado con cálculo a nivel de centavos exactos para evadir errores de punto flotante en la facturación de impuestos y propinas.",
        "Manejo avanzado de repartidores: asignación automática inteligente, cálculo de ganancias acumuladas y métricas de desempeño operando sin conexión."
      ],
      architecture: "Compuesto por 3 aplicaciones modulares compartiendo filosofía de arquitectura limpia. Panel Web en React 18 (Vite, Tailwind). Aplicaciones Móviles en Flutter 3.0+ implementando BLoC. La lógica de negocio intensiva está compilada en procedimientos almacenados (Pl/pgSQL) de PostgreSQL 15, garantizando aislamiento total mediado por 'restaurant_id' y políticas RLS.",
      techStack: ["React 18", "Flutter BLoC", "PostgreSQL 15", "Pl/pgSQL", "Supabase Realtime"],
      icon: Smartphone,
      repos: [
        { name: "Ecosistema Completo (Monorepo)", url: "https://github.com/IsaiasSinthesys03/Proyecto_Napoli_APPS" }
      ]
    },
    {
      id: "aseptic",
      title: "Aseptic Engine",
      subtitle: "Motor Gráfico Nativo (Trazado de Rayos)",
      platforms: [
        { name: "iOS / Android", icon: Smartphone },
        { name: "Web Canvas", icon: Globe }
      ],
      context: "Motor gráfico de grado profesional construido nativamente desde cero, evadiendo depender de herramientas comerciales de alto peso como Unity o Godot. Su objetivo es asegurar un rendimiento inamovible de 60 cuadros por segundo aprovechando cálculos de iluminación estáticos y dinámicos directamente en dispositivos móviles convencionales.",
      features: [
        "Renderizado O(N) ultrarrápido operando a nivel de fragmentos de píxeles vía algoritmo matemático DDA (Analizador Diferencial Digital).",
        "Ecosistema espacial de audio personalizado (sfx pooling) permitiendo superponer múltiples canales de efectos simultáneos sin retraso de hardware.",
        "Múltiples capas de texturas inyectadas en vivo a la memoria gráfica (Renderizado de niebla logarítmica, proyección de sombras).",
        "Controles táctiles parcheados y optimizados asíncronamente para evitar el retraso clásico del ciclo de eventos del lenguaje anfitrión."
      ],
      architecture: "Dictaminado por un diseño orientado a características (Feature-First). Interfaz anfitriona construida en Flutter 3.35+, inyectando lógicas de físicas 2D con Flame Engine. El renderizado visual puro ocurre en código binario (C++/GLSL). Utiliza Patrón BLoC para aislar la máquina de estados finita de la Inteligencia Artificial enemiga, evitando bloqueos en la interfaz.",
      techStack: ["Flutter", "Flame Engine", "GLSL 460", "C++", "Algoritmo DDA"],
      icon: Code2,
      repos: [
        { name: "Repositorio del Motor Base", url: "https://github.com/SKANL/raycasting_improve_engine.git" }
      ]
    }
  ]
};

// --- COMPONENTES AUXILIARES Y HOOKS ---
const useScrollFade = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const { ref, isVisible } = useScrollFade();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${className} print:opacity-100 print:translate-y-0`}
    >
      {children}
    </div>
  );
};

// --- APP PRINCIPAL ---
export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [copiedText, setCopiedText] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}%`;
      setScrollProgress(scroll);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // PANTALLA DE CARGA (SPLASH SCREEN)
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-[9999]">
        <div className="w-64 h-1 bg-white/20 mb-8 overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full bg-white animate-[loading_2s_ease-in-out_forwards]"></div>
        </div>
        <div className="flex items-center gap-3">
          <Terminal className="w-6 h-6 animate-pulse" />
          <h1 className="text-2xl font-black uppercase tracking-widest animate-pulse">Compilando DOM...</h1>
        </div>
        <p className="text-white/50 text-xs font-mono mt-4 uppercase tracking-[0.3em]">Inicializando Arquitectura</p>
        <style>{`
          @keyframes loading {
            0% { width: 0%; }
            50% { width: 70%; }
            100% { width: 100%; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-black font-sans selection:bg-brand selection:text-white relative overflow-x-hidden">

      {/* ESTILOS GLOBALES */}
      <style>{`
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.035;
          pointer-events: none;
          z-index: 40;
        }
        @keyframes scrollX {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: scrollX 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #fcfcfc; }
        ::-webkit-scrollbar-thumb { background: #12364D; border-radius: 0px; }
        
        /* OPTIMIZACIÓN DEL MOTOR DE IMPRESIÓN */
        @media print {
          @page {
            size: letter;
            margin: 5mm;
          }
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            font-size: 8px !important;
          }
          .print-break-avoid {
            break-inside: avoid;
            page-break-inside: avoid;
          }
          .print-break-before {
            break-before: page;
            page-break-before: always;
          }
          /* Ocultar scrollbars en impresión */
          ::-webkit-scrollbar { display: none; }
        }

        .bg-tapestry {
          background-image: 
            linear-gradient(rgba(0,0,0,0.07) 1.5px, transparent 1.5px),
            linear-gradient(90deg, rgba(0,0,0,0.07) 1.5px, transparent 1.5px);
          background-size: 40px 40px;
        }

        .web-page-card {
          background-color: white;
          box-shadow: 0 40px 100px rgba(0,0,0,0.1);
          border: 1px solid rgba(0,0,0,0.05);
          margin-bottom: 80px;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          z-index: 10;
          width: 1100px;
        }

        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body {
            background: white !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .web-page-card {
            width: 1100px !important;
            margin: 0 auto !important;
            border: none !important;
            box-shadow: none !important;
            page-break-after: always !important;
            page-break-inside: avoid !important;
          }
          main {
            padding-top: 0 !important;
            margin: 0 !important;
            width: 1100px !important;
          }
        }

        @media screen and (max-device-width: 768px) {
          .mobile-text-hide {
            display: none;
          }
          .mobile-padding-adj {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>

      {/* TEXTURA DE FONDO */}
      <div className="fixed inset-0 bg-tapestry print:hidden"></div>
      <div className="fixed inset-0 bg-noise mix-blend-multiply opacity-50 print:hidden"></div>

      {/* CURSOR MAGNÉTICO */}
      <div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-[1.5px] border-black pointer-events-none z-[100] transition-transform duration-150 ease-out hidden lg:flex items-center justify-center mix-blend-difference print:hidden"
        style={{
          transform: `translate(${mousePos.x - 16}px, ${mousePos.y - 16}px) scale(${isHovering ? 1.8 : 1})`,
          backgroundColor: isHovering ? 'white' : 'transparent',
          borderColor: isHovering ? 'white' : 'black'
        }}
      ></div>

      {/* BARRA DE PROGRESO */}
      <div className="fixed top-0 left-0 h-1 bg-black z-[60] print:hidden transition-all duration-75 ease-out" style={{ width: scrollProgress }}></div>

      {/* HEADER NAVEGACIÓN - RESPONSIVO Y FIJO */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b-4 border-black print:hidden transition-all">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-4 sm:py-8 flex justify-between items-center gap-6">
          <div className="flex items-center gap-4 sm:gap-6 group cursor-pointer" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black text-white flex items-center justify-center font-bold text-lg sm:text-2xl transform group-hover:rotate-180 transition-transform duration-500 shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)]">
              <Terminal className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h1 className="text-xl sm:text-4xl font-black tracking-tighter uppercase leading-none">Portafolio <span className="hidden sm:inline">de <span className="text-gray-400">Estadías</span></span></h1>
          </div>

          <div className="flex items-center gap-3 sm:gap-6">
            <a
              href={`https://${portfolioData.header.contact.linkedin}`}
              target="_blank" rel="noopener noreferrer"
              className="p-3 sm:p-6 border-2 sm:border-4 border-black bg-white hover:bg-black hover:text-white transition-all print:hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
            >
              <Briefcase className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a
              href="https://github.com/IsaiasSinthesys03"
              target="_blank" rel="noopener noreferrer"
              className="p-3 sm:p-6 border-2 sm:border-4 border-black bg-white hover:bg-black hover:text-white transition-all print:hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
            >
              <Github className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 sm:gap-4 px-6 sm:px-12 py-3 sm:py-6 bg-black text-white border-2 sm:border-4 border-black font-black text-xs sm:text-xl tracking-widest uppercase print:hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all ml-2 sm:ml-6 mobile-padding-adj"
            >
              <Printer className="w-6 h-6 sm:w-8 sm:h-8" /> <span className="mobile-text-hide">Imprimir CV</span>
            </button>
          </div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL - ANCHO MÍNIMO PARA VISTA DESKTOP EN MÓVIL */}
      <main className="pt-32 sm:pt-64 print:pt-0 min-w-[1100px] sm:w-[1100px] mx-auto print:max-w-full print:px-0 relative z-10 px-4 sm:px-0">

        {/* PÁGINA 1: PERFIL PROFESIONAL */}
        <div className="web-page-card print:shadow-none print:border-none print:bg-transparent print:mb-0">

          {/* HERO SECTION */}
          <AnimatedSection className="px-6 py-10 md:py-24 border-b-2 border-black/10 print:border-black print:py-0 print:pb-2 print-break-avoid">
            <div className="max-w-6xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-black/20 rounded-full text-xs font-bold uppercase tracking-widest mb-8 print:mb-1 bg-white print:border-black">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse print:animate-none print:bg-black"></span>
                Disponible para Estadías Profesionales
              </div>
              <div className="flex flex-row print:flex-row gap-12 print:gap-6 items-start justify-between">
                <div className="flex-1">
                  <h1 className="text-[6.5rem] print:text-4xl font-black tracking-tighter leading-[0.85] uppercase mb-8 text-black print:mb-1 break-words">
                    {portfolioData.header.name}
                  </h1>
                  <h2 className="text-3xl print:text-lg font-bold border-l-8 border-black pl-6 mb-10 text-gray-800 print:mb-2 print:py-0.5 print:pl-3">
                    {portfolioData.header.title}
                  </h2>
                  <p className="text-xl print:text-[10px] print:leading-tight leading-relaxed text-gray-600 font-medium max-w-4xl text-justify">
                    {portfolioData.header.summary}
                  </p>
                </div>

                {/* ESPACIO PARA FOTO */}
                <div className="w-48 h-64 print:w-28 print:h-36 bg-gray-50 border-4 print:border-2 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] print:shadow-none flex flex-col items-center justify-center overflow-hidden shrink-0 relative group transition-transform hover:-translate-x-1 hover:-translate-y-1 print:mt-2">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                  <User className="w-16 h-16 print:w-10 print:h-10 text-black/20" />
                  <span className="absolute bottom-2 text-[8px] font-black uppercase tracking-tighter text-black/30">ID_PHOTO_SQ</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-4 mt-8 pt-6 border-t-2 border-black/10 print:border-black print:mt-2 print:pt-1 print:gap-y-1 print:gap-x-4">
                <div className="flex items-center gap-2 text-sm print:text-[9px] font-bold break-all">
                  <Mail className="w-4 h-4 print:w-3 print:h-3 text-gray-500 shrink-0" />
                  {portfolioData.header.contact.email}
                  <button
                    onClick={() => handleCopy(portfolioData.header.contact.email)}
                    className="p-1 hover:bg-gray-100 rounded transition-colors print:hidden shrink-0"
                    title="Copiar personal"
                  >
                    {copiedText === portfolioData.header.contact.email ? <CheckCircle2 className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
                <div className="flex items-center gap-2 text-sm print:text-[9px] font-bold break-all">
                  <GraduationCap className="w-4 h-4 print:w-3 print:h-3 text-gray-500 shrink-0" />
                  {portfolioData.header.contact.emailSchool}
                  <button
                    onClick={() => handleCopy(portfolioData.header.contact.emailSchool)}
                    className="p-1 hover:bg-gray-100 rounded transition-colors print:hidden shrink-0"
                    title="Copiar escolar"
                  >
                    {copiedText === portfolioData.header.contact.emailSchool ? <CheckCircle2 className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
                <span className="flex items-center gap-2 text-sm print:text-[9px] font-bold"><Phone className="w-4 h-4 print:w-3 print:h-3 text-gray-500 shrink-0" /> {portfolioData.header.contact.phone}</span>
                <span className="flex items-center gap-2 text-sm print:text-[9px] font-bold"><MapPin className="w-4 h-4 print:w-3 print:h-3 text-gray-500 shrink-0" /> {portfolioData.header.contact.location}</span>
                <span className="flex items-center gap-2 text-sm print:text-[9px] font-bold"><Github className="w-4 h-4 print:w-3 print:h-3 text-gray-500 shrink-0" /> github.com/IsaiasSinthesys03</span>
              </div>
            </div>
          </AnimatedSection>

          {/* TRAYECTORIA Y PERFIL CV (NUEVA SECCIÓN) */}
          <AnimatedSection className="px-6 py-24 print:py-2 border-b-2 border-black/10 print:border-black bg-white print:bg-transparent print-break-avoid">
            <div className="flex items-center gap-4 mb-16 print:mb-2">
              <User className="w-10 h-10 print:w-4 print:h-4 text-black" />
              <h2 className="text-4xl print:text-xl font-black uppercase tracking-tighter text-black">Trayectoria y Perfil</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] print:grid-cols-[1.2fr_2fr] gap-16 print:gap-4">

              {/* COLUMNA 1: Datos Personales e Idiomas */}
              <div className="flex flex-col gap-12 print:gap-4">
                <div>
                  <h3 className="text-lg print:text-[10px] font-bold uppercase tracking-widest border-b-2 border-black/20 print:border-black pb-3 print:pb-1 mb-6 print:mb-2 flex items-center gap-2">
                    <Database className="w-4 h-4 print:w-3 print:h-3" /> Datos de Contratación
                  </h3>
                  <ul className="space-y-4 print:space-y-1 text-sm print:text-[9px] font-medium text-gray-800">
                    <li className="flex justify-between items-center"><span className="font-bold text-black uppercase tracking-wide text-xs print:text-[8px]">Edad:</span> <span>{portfolioData.personalInfo.age}</span></li>
                    <li className="flex justify-between items-center"><span className="font-bold text-black uppercase tracking-wide text-xs print:text-[8px]">Ubicación:</span> <span className="text-right max-w-[150px]">{portfolioData.header.contact.location}</span></li>
                    <li className="flex justify-between items-center"><span className="font-bold text-black uppercase tracking-wide text-xs print:text-[8px]">RFC:</span> <span className="font-mono bg-white px-2 py-1 border border-gray-200 print:border-none print:px-0 print:py-0">{portfolioData.personalInfo.rfc}</span></li>
                    <li className="flex justify-between items-center"><span className="font-bold text-black uppercase tracking-wide text-xs print:text-[8px]">CURP:</span> <span className="font-mono bg-white px-2 py-1 border border-gray-200 print:border-none print:px-0 print:py-0">{portfolioData.personalInfo.curp}</span></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg print:text-[10px] font-bold uppercase tracking-widest border-b-2 border-black/20 print:border-black pb-3 print:pb-1 mb-6 print:mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 print:w-3 print:h-3" /> Habilidades Blandas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {portfolioData.softSkills.map((skill, i) => (
                      <span key={i} className="text-[10px] font-bold uppercase border border-black/10 px-2 py-1 bg-gray-50 print:bg-transparent print:border-none print:p-0 print:before:content-['•'] print:before:mr-1">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg print:text-[10px] font-bold uppercase tracking-widest border-b-2 border-black/20 print:border-black pb-3 print:pb-1 mb-6 print:mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 print:w-3 print:h-3" /> Certificaciones e Idiomas
                  </h3>
                  <ul className="space-y-3 print:space-y-1 text-sm print:text-[9px] font-medium text-gray-800 mb-8 print:mb-3">
                    {portfolioData.certifications.map((cert, i) => (
                      <li key={i} className="flex items-center gap-3 print:gap-1.5">
                        <div className="w-1.5 h-1.5 print:w-1 print:h-1 bg-black rounded-full"></div>
                        {cert}
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-3 print:space-y-1 text-sm print:text-[9px] font-bold text-black">
                    {portfolioData.languages.map((lang, i) => (
                      <div key={i} className="flex justify-between items-center bg-white p-3 border border-black/10 print:border-black print:p-1">
                        <span>{lang.lang}</span>
                        <span className="bg-black text-white px-3 py-1 print:px-1.5 print:py-0.5 text-[10px] print:text-[7px] uppercase tracking-widest">{lang.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* COLUMNA 2: Experiencia y Educación */}
              <div className="flex flex-col gap-16 print:gap-4">

                <div>
                  <h3 className="flex items-center gap-3 print:gap-1.5 text-2xl print:text-sm font-black uppercase tracking-tight mb-10 print:mb-3">
                    <Briefcase className="w-6 h-6 print:w-3.5 print:h-3.5" /> Experiencia Laboral
                  </h3>
                  <div className="flex flex-col gap-10 print:gap-3 border-l-2 border-black/20 print:border-black pl-8 print:pl-4 relative">
                    {portfolioData.experience.map((exp, i) => (
                      <div key={i} className="relative">
                        {/* Punto de la línea de tiempo */}
                        <div className="absolute -left-[41px] print:-left-[21px] top-1 print:top-0 w-4 h-4 print:w-2 print:h-2 bg-white border-4 print:border-2 border-black rounded-full"></div>

                        <span className="text-[10px] print:text-[7px] font-bold font-mono bg-black text-white px-3 py-1 print:px-1.5 print:py-0.5 uppercase tracking-widest print:border print:border-black print:bg-white print:text-black">
                          {exp.period}
                        </span>
                        <h4 className="text-xl print:text-xs font-black mt-4 print:mt-1 text-black uppercase tracking-tight">{exp.role}</h4>
                        <h5 className="text-sm print:text-[9px] font-bold text-gray-500 mb-3 print:mb-0.5">{exp.company}</h5>
                        <p className="text-sm print:text-[9px] print:leading-tight leading-relaxed text-gray-700 text-justify">{exp.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="flex items-center gap-3 print:gap-1.5 text-2xl print:text-sm font-black uppercase tracking-tight mb-10 print:mb-3">
                    <GraduationCap className="w-6 h-6 print:w-3.5 print:h-3.5" /> Formación Académica
                  </h3>
                  <div className="flex flex-col gap-10 print:gap-3 border-l-2 border-black/20 print:border-black pl-8 print:pl-4 relative">
                    {portfolioData.education.map((edu, i) => (
                      <div key={i} className="relative">
                        {/* Punto de la línea de tiempo */}
                        <div className="absolute -left-[41px] print:-left-[21px] top-1 print:top-0 w-4 h-4 print:w-2 print:h-2 bg-white border-4 print:border-2 border-black rounded-full"></div>

                        <span className="text-[10px] print:text-[7px] font-bold font-mono border-2 print:border border-black text-black px-3 py-1 print:px-1.5 print:py-0.5 uppercase tracking-widest">
                          {edu.status}
                        </span>
                        <h4 className="text-xl print:text-xs font-black mt-4 print:mt-1 text-black uppercase tracking-tight">{edu.title}</h4>
                        <h5 className="text-sm print:text-[9px] font-bold text-gray-500">{edu.institution}</h5>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </AnimatedSection>

        </div>

        {/* PÁGINA 2: MATRIZ DE HABILIDADES TÉCNICAS */}
        <div className="web-page-card print:shadow-none print:border-none print:bg-transparent print:mb-0">
          <section className="px-6 py-24 print:py-4 bg-transparent print-break-before">
            <div className="flex items-center gap-4 mb-16 print:mb-4">
              <Code2 className="w-10 h-10 print:w-5 print:h-5 text-black" />
              <div className="flex flex-col">
                <h2 className="text-4xl print:text-xl font-black uppercase tracking-tighter text-black">Matriz de Habilidades</h2>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest print:hidden">Ecosistema técnico y capacidades de ejecución</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 print:gap-4 print:grid-cols-2">
              {[
                {
                  cat: "Arquitectura y Patrones",
                  icon: Layers,
                  skills: [
                    { n: "Clean Architecture", c: "Estructuración por capas desacopladas en Proyex-V2" },
                    { n: "SOLID Principles", c: "Escritura de código escalable y fácil de mantener" },
                    { n: "Patrón BLoC/Cubit", c: "Gestión de estado reactiva en STROP App" },
                    { n: "Patrón Repository", c: "Abstracción total de orígenes de datos locales/remotos" },
                    { n: "Inyección de Dependencias", c: "Gestión desacoplada de servicios con GetIt" },
                    { n: "Programación Reactiva", c: "Uso avanzado de Streams y flujos asíncronos" },
                    { n: "Patrón Singleton", c: "Control de instancias únicas para servicios core" },
                    { n: "DTOs (Mapeo de Datos)", c: "Transformación estricta entre API y App" },
                    { n: "Manejo de Errores", c: "Robustez mediante programación funcional (Either)" },
                    { n: "Modularización", c: "División de lógica compleja en paquetes independientes" }
                  ]
                },
                {
                  cat: "Mobile & Web Ecosystem",
                  icon: Smartphone,
                  skills: [
                    { n: "Flutter SDK", c: "Desarrollo multiplataforma nativo (iOS/Android)" },
                    { n: "Geolocalización GPS", c: "Trazabilidad en tiempo real para logística (STROP)" },
                    { n: "Almacenamiento Local", c: "Persistencia de datos con SQLite y Hive" },
                    { n: "Consumo APIs REST", c: "Integración profunda con backends de producción" },
                    { n: "UI Adaptativa", c: "Interfaces fluidas en dispositivos de todo tamaño" },
                    { n: "Notificaciones Push", c: "Implementación de alertas transaccionales reales" },
                    { n: "Next.js 16+ (SSR)", c: "Desarrollo web moderno con App Router" },
                    { n: "Tailwind CSS", c: "Estilizado rápido basado en utilidades de alto rendimiento" },
                    { n: "Dashboards B2B", c: "Paneles administrativos para gestión operativa" },
                    { n: "TypeScript", c: "Tipado estricto para seguridad de código en runtime" },
                    { n: "Validación de Datos", c: "Reglas de negocio complejas en formularios" }
                  ]
                },
                {
                  cat: "Backend & Data Architecture",
                  icon: Database,
                  skills: [
                    { n: "PostgreSQL (plpgsql)", c: "Lógica de negocio compleja en base de datos" },
                    { n: "Supabase (BaaS)", c: "Ecosistema completo para autenticación y DB" },
                    { n: "Row Level Security (RLS)", c: "Seguridad granular de datos a nivel de fila" },
                    { n: "WebSockets (SignalR)", c: "Comunicación bidireccional en tiempo real" },
                    { n: "APIs .NET / Node.js", c: "Creación de microservicios y APIs escalables" },
                    { n: "Arquitectura Multi-Tenant", c: "Aislamiento de datos para múltiples empresas" },
                    { n: "Modelado E-R", c: "Diseño de esquemas relacionales optimizados" },
                    { n: "Optimización SQL", c: "Indexación y mejora de rendimiento en consultas" }
                  ]
                },
                {
                  cat: "Tecnologías Especializadas",
                  icon: Cpu,
                  skills: [
                    { n: "Shaders GLSL 460", c: "Programación gráfica de bajo nivel en tiempo real" },
                    { n: "Raycasting Engine", c: "Desarrollo de lógica de renderizado pseudo-3D" },
                    { n: "Lógica FinOps", c: "Cálculos financieros de presupuestos automatizados" },
                    { n: "Automatización Reportes", c: "Generación dinámica de informes operativos" },
                    { n: "Gestión Multimedia Cloud", c: "Procesamiento de archivos en nubes de almacenamiento" }
                  ]
                },
                {
                  cat: "Herramientas & Profesionales",
                  icon: ShieldCheck,
                  skills: [
                    { n: "Git Flow", c: "Control de versiones colaborativo y disciplinado" },
                    { n: "CI/CD Pipelines", c: "Automatización de despliegues y pruebas" },
                    { n: "Postman Testing", c: "Verificación y documentación rigurosa de APIs" },
                    { n: "Análisis de Logs", c: "Monitoreo preventivo y corrección de errores" },
                    { n: "Figma to Code", c: "Implementación fiel de diseños de interfaz de usuario" },
                    { n: "Documentación Técnica", c: "READMEs y manuales de arquitectura profesional" },
                    { n: "Metodologías Ágiles", c: "Gestión de tareas eficiente basada en Scrum" },
                    { n: "Resolución de Problemas", c: "Diagnóstico y corrección de bugs críticos" },
                    { n: "Arquitecto de Soluciones", c: "Visión integral de sistemas multiplataforma" },
                    { n: "Autoaprendizaje", c: "Capacidad de adopción rápida de nuevos stacks técnicos" }
                  ]
                }
              ].map((group, idx) => (
                <div key={idx} className="flex flex-col gap-6 print:gap-1.5">
                  <div className="flex items-center gap-3 border-b-2 border-black pb-2 mb-2">
                    <group.icon className="w-5 h-5 print:w-3.5 print:h-3.5 text-black" />
                    <h3 className="font-black text-sm print:text-[10px] uppercase tracking-wider">{group.cat}</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-4 print:gap-1">
                    {group.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex flex-col border-l-2 border-black/5 pl-3 hover:border-black transition-colors group/skill">
                        <span className="text-[11px] print:text-[8px] font-black uppercase tracking-tight text-black">
                          {skill.n}
                        </span>
                        <span className="text-[10px] print:text-[7px] text-gray-500 font-mono leading-tight group-hover/skill:text-black transition-colors">
                          {skill.c}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-black/5 print:hidden">
              <p className="text-[10px] font-mono text-gray-400 uppercase text-center italic">
                * Todas las habilidades listadas han sido validadas mediante implementación directa en proyectos de producción o casos de estudio técnicos.
              </p>
            </div>
          </section>
        </div>

        {/* PÁGINA 3: CASOS DE ESTUDIO */}
        <div className="web-page-card print:shadow-none print:border-none print:bg-transparent print:mb-0">
          <section className="px-6 py-24 print:py-4 bg-transparent print-break-before">

            <div className="flex items-center gap-4 mb-24 print:mb-6">
              <Database className="w-12 h-12 print:w-6 print:h-6 text-black" />
              <h2 className="text-5xl print:text-2xl font-black uppercase tracking-tighter text-black">Casos de Estudio</h2>
            </div>

            <div className="flex flex-col gap-20 print:gap-8">
              {portfolioData.projects.map((project, index) => {
                const ProjectIcon = project.icon;
                return (
                  <AnimatedSection key={project.id} className="grid grid-cols-1 lg:grid-cols-[2.5fr_1.2fr] gap-12 lg:gap-20 print:gap-8 print:grid-cols-1 print:break-inside-avoid relative group/project p-10 border-2 border-black/10 rounded-[2rem] hover:border-black hover:shadow-[30px_30px_60px_rgba(0,0,0,0.05)] transition-all duration-500 print:border-none print:p-0 print:rounded-none">

                    {/* Número Fondo */}
                    <div className="absolute -left-10 -top-20 text-[18rem] font-black text-black/[0.02] select-none -z-10 print:hidden transition-transform duration-700 group-hover/project:translate-x-4">
                      0{index + 1}
                    </div>

                    {/* COLUMNA IZQUIERDA: Contexto, Títulos, Plataformas y Features */}
                    <div className="flex flex-col gap-10 print:gap-6 z-10">
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-5 print:mb-3">
                          <div className="p-5 border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] print:shadow-none print:border-2 print:p-2 self-start sm:self-center">
                            <ProjectIcon className="w-8 h-8" />
                          </div>
                          <div className="flex flex-col gap-3 print:gap-1">
                            <h3 className="text-5xl print:text-2xl font-black tracking-tighter uppercase leading-none mt-1 font-outfit text-black">
                              {project.title}
                            </h3>
                            {/* PLATAFORMAS CERCA DEL NOMBRE CON LOGOS */}
                            <div className="flex flex-wrap gap-2 print:mt-1">
                              {project.platforms.map((plat, i) => {
                                const PlatIcon = plat.icon;
                                return (
                                  <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] sm:text-[11px] font-black uppercase tracking-wider border-2 border-black text-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] print:shadow-none print:bg-transparent">
                                    <PlatIcon className="w-3.5 h-3.5" />
                                    {plat.name}
                                  </span>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                        <h4 className="text-2xl print:text-lg font-bold border-l-4 border-black pl-5 text-gray-800">
                          {project.subtitle}
                        </h4>
                      </div>

                      <div>
                        <h5 className="text-xs font-black uppercase tracking-widest mb-3 opacity-60">Contexto Operativo</h5>
                        <p className="text-lg print:text-sm leading-relaxed text-gray-700 text-justify">
                          {project.context}
                        </p>
                      </div>

                      <div>
                        <h5 className="text-xs font-black uppercase tracking-widest mb-4 border-b-2 border-black/10 pb-2 print:border-black">Integraciones Principales</h5>
                        <ul className="flex flex-col gap-4 print:gap-2">
                          {project.features.map((feat, i) => (
                            <li key={i} className="flex items-start gap-4 print:gap-2 text-base print:text-[11px] text-gray-800 bg-white p-5 border border-black/10 hover:border-black transition-colors print:bg-transparent print:border-black print:p-1.5 rounded-lg print:rounded-none shadow-sm print:shadow-none">
                              <ArrowRight className="w-5 h-5 print:w-3 print:h-3 shrink-0 mt-0.5 text-black" />
                              <span className="leading-relaxed">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    {/* COLUMNA DERECHA: Arquitectura y Repositorios (Sticky) */}
                    <div className="relative z-10">
                      <div className="sticky top-32 flex flex-col gap-10 print:static print:gap-6">

                        {/* Arquitectura */}
                        <div className="bg-black text-white p-8 rounded-xl print:rounded-none print:bg-white print:text-black print:border-2 print:border-black print:p-4 shadow-2xl print:shadow-none transform transition-transform hover:-translate-y-1">
                          <h5 className="text-xs font-black uppercase tracking-widest mb-5 flex items-center gap-2 opacity-80 print:opacity-100">
                            <Layers className="w-4 h-4" /> Arquitectura & Core
                          </h5>
                          <p className="text-sm print:text-xs leading-loose font-mono text-white/90 print:text-black text-justify">
                            {project.architecture}
                          </p>
                        </div>

                        {/* Stack Tecnológico */}
                        <div>
                          <h5 className="text-xs font-black uppercase tracking-widest mb-4">Stack Tecnológico</h5>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map(tech => (
                              <span key={tech} className="px-3 py-1.5 text-xs font-bold font-mono border border-black/20 bg-white text-black hover:bg-black hover:text-white hover:border-black transition-all cursor-default print:border-black">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Repositorios */}
                        <div>
                          <h5 className="text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2 border-b-2 border-black/10 pb-2 print:border-black">
                            <Github className="w-4 h-4" /> Repositorios Fuente
                          </h5>
                          <div className="flex flex-col gap-3 print:gap-1">
                            {project.repos.map(repo => (
                              <a
                                key={repo.url}
                                href={repo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
                                className="group/link flex flex-col p-4 border border-black/10 bg-white hover:bg-black hover:text-white transition-all rounded-lg print:rounded-none print:border-none print:p-0 print:hover:bg-transparent print:hover:text-black print:no-underline"
                              >
                                <div className="flex justify-between items-center mb-2 print:mb-0">
                                  <span className="text-sm font-bold uppercase tracking-wide">
                                    {repo.name}
                                  </span>
                                  <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity print:hidden" />
                                </div>
                                <span className="text-xs font-mono text-gray-500 group-hover/link:text-gray-300 print:text-black">
                                  {repo.url.replace('https://', '')}
                                </span>
                              </a>
                            ))}
                          </div>
                        </div>

                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-black text-white pt-32 pb-12 mt-32 print:hidden relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none">
          DESARROLLADOR.FULL.STACK
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-16 border-b border-white/10 pb-20">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-[5rem] font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              Hablemos de<br />Soluciones.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed font-mono max-w-lg">
              Arquitecturas escalables. Rendimiento puro. Preparado para aportar valor real en un entorno corporativo.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto">
            <a
              href={`mailto:${portfolioData.header.contact.email}`}
              onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
              className="flex items-center justify-between gap-8 border-2 border-white bg-white text-black px-8 py-5 hover:bg-transparent hover:text-white transition-all duration-300 group"
            >
              <span className="font-black tracking-widest uppercase text-sm">Contactar Ahora</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
            </a>

            {/* Solo se mantuvo tu perfil principal */}
            <div className="flex flex-col gap-2">
              <a
                href={`https://${portfolioData.header.contact.linkedin}`} target="_blank" rel="noopener noreferrer"
                onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
                className="flex items-center justify-center gap-3 border-2 border-white/20 px-8 py-4 hover:bg-white hover:text-black transition-all duration-300"
              >
                <Briefcase className="w-4 h-4" />
                <span className="font-bold tracking-widest uppercase text-xs">LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com/IsaiasSinthesys03" target="_blank" rel="noopener noreferrer"
                onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
                className="flex items-center justify-center gap-3 border-2 border-white/20 px-8 py-4 hover:bg-white hover:text-black transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                <span className="font-bold tracking-widest uppercase text-xs">IsaiasSinthesys03</span>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col sm:flex-row justify-between items-center text-white/30 text-xs font-mono uppercase gap-4">
          <span>© 2026 // Todos los Sistemas Operativos.</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
            className="hover:text-white transition-colors"
          >
            Volver Arriba ↑
          </button>
        </div>
      </footer>

      <div className="hidden print:block text-center mt-10 pt-4 border-t-2 border-black text-[10px] font-black uppercase tracking-widest text-gray-500">
        Portafolio de Estadías | Desarrollador de Software Multiplataforma | Braulio Isaias Bernal Padron
      </div>
    </div>
  );
}