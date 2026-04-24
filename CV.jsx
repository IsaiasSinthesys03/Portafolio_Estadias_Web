import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Github, 
  User, 
  Printer
} from 'lucide-react';

const Resume = () => {

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-200 p-4 md:p-8 font-sans flex flex-col items-center print:p-0 print:bg-white print:m-0">
      
      {/* Estilos específicos para impresión */}
      <style>{`
        @media print {
          @page {
            size: letter;
            margin: 0mm;
          }
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            margin: 0;
            padding: 0;
          }
        }
      `}</style>

      {/* Botón de Impresión */}
      <div className="w-full max-w-[21.6cm] flex justify-end mb-4 print:hidden">
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 bg-[#12364D] text-white px-4 py-2 rounded shadow hover:bg-black transition-colors"
        >
          <Printer size={18} />
          Guardar como PDF / Imprimir
        </button>
      </div>

      {/* LIENZO TAMAÑO CARTA EXACTO (21.6cm x 27.9cm) */}
      <div className="bg-white shadow-2xl w-[21.6cm] h-[27.9cm] print:shadow-none relative overflow-hidden text-gray-800">
        
        {/* ================= FONDOS ================= */}
        
        {/* FONDO BARRA LATERAL (Izquierda) */}
        <div className="absolute top-0 left-0 w-[34%] h-[27.9cm] bg-[#DCE2E6] z-0"></div>

        {/* FONDO ENCABEZADO AZUL OSCURO (Derecha, altura exacta de 6cm) */}
        <div 
          className="absolute top-0 right-0 w-[72%] h-[6cm] bg-[#12364D] z-10" 
          style={{ clipPath: 'polygon(6% 0, 100% 0, 100% 100%, 0 100%)' }}
        ></div>


        {/* ================= CONTENIDO ================= */}

        {/* RECUADRO PARA FOTO */}
        <div className="absolute top-[1.2cm] left-[1.6cm] w-[4.2cm] h-[5.6cm] bg-gray-300 shadow-md z-30 flex flex-col items-center justify-center overflow-hidden border-2 border-white">
          <User size={36} className="text-gray-400" strokeWidth={1.5} />
          <span className="text-[10px] text-gray-500 font-medium mt-1">Foto</span>
        </div>

        {/* TEXTO DEL ENCABEZADO */}
        <div className="absolute top-0 right-0 w-[66%] h-[6cm] z-20 flex flex-col justify-center px-10">
          <h1 className="text-[30px] font-extrabold text-white leading-none tracking-wide">
            Braulio Isaias <br/> Bernal Padron
          </h1>
          <div className="w-full h-[3px] bg-white my-3"></div>
          <p className="text-[10px] text-white/95 leading-relaxed text-justify font-medium">
            Desarrollador de software con sólida base en diseño de bases de datos, creación de APIs, páginas web y aplicaciones móviles (Arquitectura Limpia). Busco integrarme a un equipo de trabajo dinámico para realizar mis <span className="font-extrabold text-white">Estadías Profesionales de la UTM</span>, con el objetivo de aportar los conocimientos técnicos que poseo y continuar desarrollando nuevas habilidades en un entorno real. Cuento con <span className="font-extrabold text-white">RFC activo</span> para trámites de contratación y disponibilidad en turno matutino.
          </p>
        </div>

        {/* COLUMNA IZQUIERDA (BARRA LATERAL DE DATOS) */}
        {/* Ajuste fino: gap-6, py-3 */}
        <div className="absolute top-[6.9cm] left-0 w-[34%] h-[21cm] z-20 px-7 py-3 flex flex-col gap-6">
          
          {/* CONTACTO */}
          <section>
            <h3 className="text-[13px] font-extrabold text-black uppercase tracking-wider mb-3 py-1 border-y-[1.5px] border-black">
              Contacto
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <div className="w-[24px] h-[24px] bg-[#455A64] rounded flex items-center justify-center shrink-0 text-white shadow-sm mt-0.5">
                  <MapPin size={13} />
                </div>
                <span className="text-[10.5px] font-medium text-gray-900 leading-tight">
                  Calle 21 #198c x8 y 8a1<br/>Mérida, Yucatán, C.P. 91173
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-[24px] h-[24px] bg-[#455A64] rounded flex items-center justify-center shrink-0 text-white shadow-sm">
                  <Phone size={13} />
                </div>
                <span className="text-[10.5px] font-medium text-gray-900 leading-tight">
                  +52 999 272 7810
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-[24px] h-[24px] bg-[#455A64] rounded flex items-center justify-center shrink-0 text-white shadow-sm">
                  <Mail size={13} />
                </div>
                <span className="text-[10.5px] font-medium text-gray-900 leading-tight break-all">
                  braulioisaiasbernalpadron<br/>@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-[24px] h-[24px] bg-[#455A64] rounded flex items-center justify-center shrink-0 text-white shadow-sm">
                  <Github size={13} />
                </div>
                <span className="text-[10.5px] font-medium text-gray-900 leading-tight">
                  github.com/IsaiasSinthesys03
                </span>
              </div>
            </div>
          </section>

          {/* HABILIDADES */}
          <section>
            <h3 className="text-[13px] font-extrabold text-black uppercase tracking-wider mb-3 py-1 border-y-[1.5px] border-black">
              Habilidades
            </h3>
            <ul className="list-none space-y-2 text-[10.5px] text-gray-900 font-bold">
              <li className="flex gap-2 items-start"><span className="text-[#12364D] mt-[1.5px]">•</span><span>Arquitectura Limpia</span></li>
              <li className="flex gap-2 items-start"><span className="text-[#12364D] mt-[1.5px]">•</span><span>Requerimientos, Documentación y Diagramas</span></li>
              <li className="flex gap-2 items-start"><span className="text-[#12364D] mt-[1.5px]">•</span><span>TypeScript, JS, Dart, C#, Python</span></li>
              <li className="flex gap-2 items-start"><span className="text-[#12364D] mt-[1.5px]">•</span><span>Flutter, React, Angular</span></li>
              <li className="flex gap-2 items-start"><span className="text-[#12364D] mt-[1.5px]">•</span><span>Node.js, Laravel, PHP</span></li>
              <li className="flex gap-2 items-start"><span className="text-[#12364D] mt-[1.5px]">•</span><span>SQL Server, Postgres, MySQL, MongoDB, Supabase</span></li>
              <li className="flex gap-2 items-start"><span className="text-[#12364D] mt-[1.5px]">•</span><span>Git/GitHub, Figma, IA Docs</span></li>
            </ul>
          </section>

          {/* IDIOMAS */}
          <section>
            <h3 className="text-[13px] font-extrabold text-black uppercase tracking-wider mb-3 py-1 border-y-[1.5px] border-black">
              Idiomas
            </h3>
            <div className="mb-4">
              <div className="flex justify-between text-[10.5px] font-bold text-black mb-1.5">
                <span>Español: <span className="font-medium text-gray-800">Idioma nativo</span></span>
              </div>
              <div className="w-full h-[6px] bg-gray-300 rounded-sm overflow-hidden">
                <div className="w-full h-full bg-[#12364D]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[10.5px] font-bold text-black mb-1.5">
                <span>Inglés:</span>
                <span className="font-bold">A2</span>
              </div>
              <div className="w-full h-[6px] bg-gray-300 rounded-sm overflow-hidden">
                <div className="w-[30%] h-full bg-[#12364D]"></div>
              </div>
            </div>
          </section>

          {/* DATOS PERSONALES */}
          <section>
            <h3 className="text-[13px] font-extrabold text-black uppercase tracking-wider mb-3 py-1 border-y-[1.5px] border-black">
              Datos
            </h3>
            <div className="text-[10.5px] text-gray-900 space-y-1.5 font-medium">
              <p><span className="font-bold">RFC:</span> BEPB060216ELO</p>
              <p><span className="font-bold">CURP:</span> BEPB060216HYNRDRA4</p>
              <p><span className="font-bold">Edad:</span> 20 (16/02/06)</p>
            </div>
          </section>

        </div>

        {/* COLUMNA DERECHA PRINCIPAL */}
        {/* Ajuste fino: pt-8, pb-6, gap-6 */}
        <div className="absolute top-[6cm] right-0 w-[66%] h-[21.9cm] z-20 bg-white px-10 pt-8 pb-6 flex flex-col gap-6">
          
          {/* EXPERIENCIA LABORAL */}
          <section>
            <h3 className="text-[15.5px] font-extrabold text-[#12364D] uppercase tracking-wider mb-4 py-1.5 border-y-[1.5px] border-[#12364D]">
              Experiencia Laboral
            </h3>

            <div className="mb-5">
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="text-[13px] font-extrabold text-black">Apoyo Administrativo (Servicio Social)</h4>
                <span className="text-[11px] text-gray-800 font-semibold">09/2023 – 2024</span>
              </div>
              <p className="text-[12px] font-extrabold text-[#12364D] mb-2">
                Dirección de Gobernación <span className="font-medium text-gray-600">- Mérida</span>
              </p>
              <ul className="list-none space-y-2 text-[11.5px] text-gray-800 ml-1 font-medium text-justify pr-2 leading-relaxed">
                <li className="flex gap-2 items-start"><span className="text-[#12364D] mt-[3.5px]">•</span><span>Atención al ciudadano y gestión documental en dependencias.</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#12364D] mt-[3.5px]">•</span><span>Desarrollo de responsabilidad laboral y estructuración de procesos.</span></li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="text-[13px] font-extrabold text-black">Agente Telefónico</h4>
                <span className="text-[11px] text-gray-800 font-semibold">05/2025 – 06/2025</span>
              </div>
              <p className="text-[12px] font-extrabold text-[#12364D] mb-2">
                TYT Callcenter <span className="font-medium text-gray-600">- Mérida</span>
              </p>
              <ul className="list-none space-y-2 text-[11.5px] text-gray-800 ml-1 font-medium text-justify pr-2 leading-relaxed">
                <li className="flex gap-2 items-start"><span className="text-[#12364D] mt-[3.5px]">•</span><span>Resolución de dudas y atención directa al cliente bajo métricas de calidad.</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#12364D] mt-[3.5px]">•</span><span>Mejora comprobada de habilidades de comunicación, tolerancia y paciencia.</span></li>
              </ul>
            </div>
          </section>

          {/* ESTUDIOS */}
          <section>
            <h3 className="text-[15.5px] font-extrabold text-[#12364D] uppercase tracking-wider mb-4 py-1.5 border-y-[1.5px] border-[#12364D]">
              Estudios
            </h3>

            <div className="mb-4">
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="text-[13px] font-extrabold text-black">TSU en Desarrollo de Software</h4>
                <span className="text-[11px] text-gray-800 font-semibold">En curso</span>
              </div>
              <p className="text-[12px] font-extrabold text-[#12364D]">
                Universidad Tecnológica Metropolitana <span className="font-medium text-gray-600">- Mérida</span>
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="text-[13px] font-extrabold text-black">Profesional Técnico Bachiller</h4>
                <span className="text-[11px] text-gray-800 font-semibold">Finalizado</span>
              </div>
              <p className="text-[12px] font-extrabold text-[#12364D]">
                CONALEP Mérida 1 <span className="font-medium text-gray-600">- Mérida</span>
              </p>
            </div>
          </section>

          {/* CERTIFICACIONES */}
          <section>
            <h3 className="text-[15.5px] font-extrabold text-[#12364D] uppercase tracking-wider mb-3.5 py-1.5 border-y-[1.5px] border-[#12364D]">
              Certificaciones
            </h3>
            <ul className="list-none space-y-2 text-[12px] text-gray-800 font-medium ml-1">
              <li className="flex gap-2 items-center"><span className="text-[#12364D]">•</span><span><span className="font-extrabold text-black">CCNA 1:</span> Fundamentos de Redes</span></li>
              <li className="flex gap-2 items-center"><span className="text-[#12364D]">•</span><span><span className="font-extrabold text-black">CCNA 2:</span> Routing and Switching</span></li>
            </ul>
          </section>

          {/* HABILIDADES BLANDAS */}
          <section>
            <h3 className="text-[15.5px] font-extrabold text-[#12364D] uppercase tracking-wider mb-3.5 py-1.5 border-y-[1.5px] border-[#12364D]">
              Habilidades Blandas
            </h3>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-[12px] text-gray-900 font-semibold ml-1 pr-2">
              <li className="flex gap-2 items-start"><span className="text-[#12364D] mt-[3px]">•</span><span>Autoaprendizaje rápido</span></li>
              <li className="flex gap-2 items-start"><span className="text-[#12364D] mt-[3px]">•</span><span>Pensamiento analítico</span></li>
              <li className="flex gap-2 items-start"><span className="text-[#12364D] mt-[3px]">•</span><span>Resolución de problemas</span></li>
              <li className="flex gap-2 items-start"><span className="text-[#12364D] mt-[3px]">•</span><span>Trabajo en equipo</span></li>
              <li className="flex gap-2 items-start"><span className="text-[#12364D] mt-[3px]">•</span><span>Comunicación asertiva</span></li>
              <li className="flex gap-2 items-start"><span className="text-[#12364D] mt-[3px]">•</span><span>Atención al detalle</span></li>
              <li className="flex gap-2 items-start"><span className="text-[#12364D] mt-[3px]">•</span><span>Tolerancia a la frustración</span></li>
              <li className="flex gap-2 items-start"><span className="text-[#12364D] mt-[3px]">•</span><span>Gestión del tiempo</span></li>
            </ul>
          </section>

        </div>

      </div>
    </div>
  );
};

export default Resume;