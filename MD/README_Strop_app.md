# 🏗️ STROP - Plataforma Operativa de Construcción

![coverage][coverage_badge]
[![style: very good analysis][very_good_analysis_badge]][very_good_analysis_link]
[![License: MIT][license_badge]][license_link]
[![Flutter](https://img.shields.io/badge/Flutter-3.0+-02569B?logo=flutter)](https://flutter.dev)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?logo=supabase)](https://supabase.com)

<div align="center">
  <h3>📱 Ecosistema STROP (Módulo Móvil y Core)</h3>
</div>

---

## 1. Descripción Breve

**STROP** es una plataforma operativa integral B2B (Módulo de Construcción) enfocada en centralizar y eficientar la gestión de proyectos de construcción. Resuelve el crítico problema de fugas financieras y falta de transparencia operacional en obra al digitalizar y automatizar: **reporte de incidentes en tiempo real, gestión estricta de presupuestos y flujos de mitigación.**

El sistema orquesta la fuerza laboral desde la trinchera (gracias a esta app móvil offline-first impulsada por Flutter) hasta el centro de comando directivo (Dashboard Web Next.js), combinando supervisión gerencial con potentes herramientas de Inteligencia Artificial para la toma de decisiones.

---

## 2. Características Principales

*   **Multimedios y Reporte en Campo Geo-Localizado:** Los ingenieros de obra procesan incidentes incorporando trazabilidad cartográfica GPS, capturando fotos estructuradas y depositando reportes mediante notas de voz (`audio_url`).
*   **Aprobaciones Fluidas Vía WhatsApp:** Aceleración gerencial; alertas predictivas, briefings, y autorizaciones de presupuesto de contingencia (FinOps) completamente gobernados mediante interacciones inteligentes en WhatsApp (Agente IA).
*   **FinOps y Mitigación de Riesgos:** El estado de las obras se cruza con procedimientos almacenados (RPC) evaluando fugas comerciales como "Cálculo de Dinero en Riesgo" o "Presupuesto de Contingencia Asignado".
*   **Asistencia por IA y Embeddings RAG:** Auditoría automatizada de los catálogos y tareas utilizando tecnología genAI (`ai_document_chunks`) directamente cruzado a la BD y conectado a todos los administradores.
*   **Operación Full Multi-plataforma:** Interfaz limpia BLoC, permitiendo estados desconectados/asíncronos vitales en construcciones profundas.

---

## 3. Arquitectura y Stack Tecnológico

Para mantener los más altos niveles de consistencia e integridad, el ecosistema utiliza un poderoso músculo de ingeniería basado fuertemente en **Principios SOLID**.

### Frontend Móvil (STROP App)
*   **Framework:** Flutter (Lenguaje Dart) bajo los estigmas de calidad top del Very Good CLI.
*   **Clean Architecture Extrema:** Disociamiento transversal en capas (`core`, `data`, `domain`, `presentation`), haciendo que la lógica vital dependa de abstracciones.
*   **Manejo de Estado (State Management):** Estandarización de flujos responsivos a través del patrón **BLoC / Cubit** asilando inminentemente la UI de los datos. Inyección de Múltiples Dependencias regida vía `get_it`.
*   **Diseño Interfaz:** UI minimalista e intrusiva desarrollada sobre ecosistemas tipográficos como `shadcn_flutter` y `flutter_animate`.

### Backend & Database (La Columna Vertebral)
*   **Backend as a Service:** Supabase, anclado sobre ecosistema PostgreSQL transaccional 14.1.
*   **RBAC & Seguridad Zero-Trust:** Estancamientos absolutos de seguridad a través de RLS (Row Level Security Policies). El software garantiza aislamiento `multi-tenant` a nivel fila/empresa.
*   **Centralización Funcional:** Delegación de carga de cálculos y mutaciones mediante _Stored Procedures (plpgsql)_, manteniendo la capa cliente ultra ligera.

---

## 4. Estructura de Carpetas (Clean Architecture)

Nuestro árbol representa nuestra cordura. Así está orquestada la capa móvil (`strop_app/lib`):

```text
lib/
├── core/              # Archivos transversales: inyección, theme, servicios nativos (cámara), red HTTP.
├── data/              # Modelos consumibles DTO y Orígenes (DataSources API Supabase + Local).
├── domain/            # Entidades agnósticas limpias del negocio (Incident, Project, User) e Interfaces.
├── presentation/      # Orquestador Visual en BLoC. Incluye features como Auth, Capture, Inbox.
├── l10n/              # Generadores de traducción y localización global (ARB).
└── main_*.dart        # Múltiples entornos inyectables (Dev, Prod, Staging).
```

---

## 5. El Equipo (Créditos)

Edificar un software PropTech/ConTech del más alto calibre y arquitectar una sinergia perfecta de extremo a extremo sin fricciones, ha requerido un talento técnico altamente sincronizado:

*   **Braulio Isaias Bernal Padron** - *Lead Architect & Systems Core*: Trazado maestro de las arquitecturas limpias, lógica BLoC, implementación global en Dart y despliegues transaccionales. 
*   **Luis Yael Zapata Paredez** - *Frontend Integration & Reactive Flow*: Engranaje de la visual UI/UX conectando componentes vivos con las máquinas de estado BLoC y experiencia del usuario en campo móvil.
*   **Andri Yael Rodriguez Flota** - *Backend, Bases de datos y Data Layer*: Estructuración minuciosa del schema `Supabase` relacional (PostgreSQL), creación de DTOs, llamadas asíncronas y reglas de encriptamiento RLS estricto.
*   **Jose Gaspar Anguas Ku** - *QA Operations & Test Assurance*: Pruebas cruzadas entre dispositivos, flujos de consistencia del código, revisiones algorítmicas de transacciones y aseguramiento de funcionalidad.
*   **Francia Faride Ojeda Estrella** - *UI/UX Liaison & Flow Design*: Orquestación de la experiencia visual y sincronización de las lógicas entre los diferentes módulos operativos y gerenciales.

---

## 6. 🤖 Desarrollo Impulsado por Inteligencia Artificial (+IA)

Este no es un proyecto de software tradicional. **STROP** fue orquestado y fundamentado utilizando metodologías de vanguardia en **Agentic AI Workflow y Prompt Engineering**.

A través de la co-creación con avanzados modelos de Inteligencia Artificial actuando como arquitectos de co-piloto, logramos catalizar drásticamente la eficiencia del ciclo de desarrollo. Desde la estructuración de la base de datos SQL y la inferencia de políticas de seguridad multi-tenant (RLS), hasta el hilado fino de las estrictas capas de la _Clean Architecture_ en Flutter y la creación de interfaces complejas, la IA funcionó como una extensión hiper-optimizada de las capacidades de nuestros desarrolladores. Esto redujo el *Time to Market* significativamente y afianzó el código con las mejores prácticas globales desde el día 1.

---

## 7. Prerrequisitos e Instalación (Guía CLI Original)

*(Todo lo que está debajo de esta línea corresponde a la información útil y vital de configuración original para comandos y utilidades integradas en el pipeline).*

Generated by the [Very Good CLI][very_good_cli_link] 🤖

Plataforma operativa de construccion

### Getting Started 🚀

This project contains 3 flavors:

- development
- staging
- production

To run the desired flavor either use the launch configuration in VSCode/Android Studio or use the following commands:

```sh
# Development
$ flutter run --flavor development --target lib/main_development.dart

# Staging
$ flutter run --flavor staging --target lib/main_staging.dart

# Production
$ flutter run --flavor production --target lib/main_production.dart
```

_\*Strop App works on iOS, Android, Web, and Windows._

---

### Running Tests 🧪

To run all unit and widget tests use the following command:

```sh
$ very_good test --coverage --test-randomize-ordering-seed random
```

To view the generated coverage report you can use [lcov](https://github.com/linux-test-project/lcov).

```sh
# Generate Coverage Report
$ genhtml coverage/lcov.info -o coverage/

# Open Coverage Report
$ open coverage/index.html
```

---

### Bloc Lints 🔍

This project uses the [bloc_lint](https://pub.dev/packages/bloc_lint) package to enforce best practices using [bloc](https://pub.dev/packages/bloc).

To validate linter errors, run

```bash
dart run bloc_tools:bloc lint .
```

You can also validate with VSCode-based IDEs using the [official bloc extension](https://marketplace.visualstudio.com/items?itemName=FelixAngelov.bloc).

To learn more, visit https://bloclibrary.dev/lint/

---

### Working with Translations 🌐

This project relies on [flutter_localizations][flutter_localizations_link] and follows the [official internationalization guide for Flutter][internationalization_link].

#### Adding Strings

1. To add a new localizable string, open the `app_en.arb` file at `lib/l10n/arb/app_en.arb`.

```arb
{
    "@@locale": "en",
    "counterAppBarTitle": "Counter",
    "@counterAppBarTitle": {
        "description": "Text shown in the AppBar of the Counter Page"
    }
}
```

2. Then add a new key/value and description

```arb
{
    "@@locale": "en",
    "counterAppBarTitle": "Counter",
    "@counterAppBarTitle": {
        "description": "Text shown in the AppBar of the Counter Page"
    },
    "helloWorld": "Hello World",
    "@helloWorld": {
        "description": "Hello World Text"
    }
}
```

3. Use the new string

```dart
import 'package:strop_app/l10n/l10n.dart';

@override
Widget build(BuildContext context) {
  final l10n = context.l10n;
  return Text(l10n.helloWorld);
}
```

#### Adding Supported Locales

Update the `CFBundleLocalizations` array in the `Info.plist` at `ios/Runner/Info.plist` to include the new locale.

```xml
    ...

    <key>CFBundleLocalizations</key>
	<array>
		<string>en</string>
		<string>es</string>
	</array>

    ...
```

#### Adding Translations

1. For each supported locale, add a new ARB file in `lib/l10n/arb`.

```
├── l10n
│   ├── arb
│   │   ├── app_en.arb
│   │   └── app_es.arb
```

2. Add the translated strings to each `.arb` file:

`app_en.arb`

```arb
{
    "@@locale": "en",
    "counterAppBarTitle": "Counter",
    "@counterAppBarTitle": {
        "description": "Text shown in the AppBar of the Counter Page"
    }
}
```

`app_es.arb`

```arb
{
    "@@locale": "es",
    "counterAppBarTitle": "Contador",
    "@counterAppBarTitle": {
        "description": "Texto mostrado en la AppBar de la página del contador"
    }
}
```

#### Generating Translations

To use the latest translations changes, you will need to generate them:

1. Generate localizations for the current project:

```sh
flutter gen-l10n --arb-dir="lib/l10n/arb"
```

Alternatively, run `flutter run` and code generation will take place automatically.

[coverage_badge]: coverage_badge.svg
[flutter_localizations_link]: https://api.flutter.dev/flutter/flutter_localizations/flutter_localizations-library.html
[internationalization_link]: https://flutter.dev/docs/development/accessibility-and-localization/internationalization
[license_badge]: https://img.shields.io/badge/license-MIT-blue.svg
[license_link]: https://opensource.org/licenses/MIT
[very_good_analysis_badge]: https://img.shields.io/badge/style-very_good_analysis-B22C89.svg
[very_good_analysis_link]: https://pub.dev/packages/very_good_analysis
[very_good_cli_link]: https://github.com/VeryGoodOpenSource/very_good_cli
