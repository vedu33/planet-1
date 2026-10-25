# GRAVITATION & PLANETARY MOTION
### Class XI Physics Art-Integrated Interactive Project
> *"An Interactive Journey Through the Forces That Shape Worlds"*

---

## 1. Project Overview & Pedagogical Objectives

This project is an interactive, educational web application created for the **CBSE Class XI Physics** curriculum (**Chapter 8: Gravitation**). It unifies:

1. **Rigorous Physics:** True mathematical and physical models calculated from first principles (no decorative fake animations).
2. **Interactive Simulations:** Real-time parameter manipulation demonstrating inverse-square laws, orbital mechanics, Kepler's laws, escape velocity, and satellite motion.
3. **Meaningful Art Integration:** Visual metaphors inspired by historical Indian astronomical traditions (Jantar Mantar gnomonics, Yantra circular geometries, celestial mandalas) blended seamlessly with modern scientific data visualization.
4. **Cinematic Storytelling:** Guided visual narrative transitioning from cosmic darkness to celestial mechanics.
5. **100% Offline Portability:** Built to be directly opened from a USB flash drive (`file:///` protocol) without requiring local servers, Node.js, Python, or an internet connection.

---

## 2. Core Architecture & Separation of Concerns

To guarantee maintainability, extensibility, and scientific validity, the project strictly isolates three core layers:

```
┌─────────────────────────────────────────────────────────────┐
│                    USER INTERFACE (UI)                      │
│     (HUD Panels, Sliders, Mathematical Notations, Cards)     │
└──────────────────────────────┬──────────────────────────────┘
                               │ User Interactions / Config
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                 VISUALIZATION & ART LAYER                   │
│   (Canvas Rendering, Coordinate Transforms, Starfields,     │
│       Celestial Motifs, Trajectory Ribbons, Vectors)        │
└──────────────────────────────┬──────────────────────────────┘
                               │ Render States / Coordinates
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                    PHYSICS ENGINE CORE                      │
│   (Vector2, Universal Gravitation, Keplerian Solvers,       │
│        Velocity-Verlet Symplectic Numerical Integrators)    │
└─────────────────────────────────────────────────────────────┘
```

- **Physics Logic (`src/physics/`):** Pure numerical calculations. Independent of HTML Canvas, DOM, or browser state. Independently testable in automated CLI environments.
- **Simulation Engine (`src/simulation/`):** Fixed-timestep accumulator loop (`dt = 1/60 s`), eliminating frame-rate dependency and ensuring identical orbital physics on 60 Hz, 120 Hz, or laggy hardware.
- **Art & Rendering (`src/art/`):** Procedural generators for astronomical coordinate rings, radiant central masses, orbit ribbons, and directional alignments.
- **UI & Navigation (`src/ui/`):** Responsive navigation bar, section scroll-spy, keyboard shortcuts (`j`/`k` or arrows), and pedagogical concept cards.

---

## 3. Directory Structure

```
Gravitation-Planetary-Motion-Antigravity/
├── dist/                          # Production portable single-file bundle
│   └── index.html                 # Self-contained bundle (<60KB, zero dependencies)
├── public/
│   └── favicon.svg                # Celestial orbit motif icon
├── src/
│   ├── art/
│   │   └── CelestialMotifs.ts     # Procedural Indian astronomical motifs & starfield
│   ├── physics/
│   │   ├── Vector2.ts             # High-performance 2D vector kinematics
│   │   ├── constants.ts           # SI astronomical constants & simulation scales
│   │   ├── gravitation.ts         # CBSE Class XI Gravitation formulas
│   │   └── integrators.ts         # Velocity-Verlet, RK4, and Euler integrators
│   ├── simulation/
│   │   ├── CoordinateTransform.ts # World-to-screen & screen-to-world mapping
│   │   ├── SimulationEngine.ts    # Reusable fixed-timestep base engine
│   │   ├── SimulationRegistry.ts  # Viewport IntersectionObserver coordinator
│   │   └── PreviewHeroSimulation.ts # Stage 1 Hero foundation simulation
│   ├── styles/
│   │   └── main.css               # Cosmic indigo, gold & brass visual identity
│   ├── ui/
│   │   ├── Navigation.ts          # Sticky navbar, scroll-spy & shortcuts
│   │   └── SectionController.ts   # Structured placeholders for all 11 sections
│   ├── main.ts                    # Application bootstrap
│   └── vite-env.d.ts              # TypeScript environment definitions
├── tests/
│   └── physics.test.ts            # Automated physics verification suite (8 suites)
├── index.html                     # Application HTML5 entry point
├── package.json                   # Project configuration & scripts
├── tsconfig.json                  # TypeScript compiler options
├── vite.config.ts                 # Vite bundler & single-file plugin config
└── README.md                      # Architecture documentation
```

---

## 4. CBSE Class XI Physics Syllabus Coverage

| Section | Topic | Core Equations | Key Concepts |
| :--- | :--- | :--- | :--- |
| **01. Prologue** | Historical Overview | $F = G \frac{m_1 m_2}{r^2}$ | Cosmic forces, universal unification |
| **02. Art & Sky** | Art & Astronomy | $\theta = \frac{s}{r}$ | Observational geometry, Yantras, coordinate grids |
| **03. Universal Law** | Newton's Gravitation | $F = G \frac{m_1 m_2}{r^2}, \vec{F}_{12} = -\vec{F}_{21}$ | Inverse-square law, Cavendish constant, central force |
| **04. Field & $g$** | Field & Acceleration | $g = \frac{GM}{R^2}, g_h = g\left(\frac{R}{R+h}\right)^2, g_d = g\left(1-\frac{d}{R}\right)$ | Gravitational field intensity, altitude & depth variations |
| **05. Orbits** | Orbital Motion Engine | $v_o = \sqrt{\frac{GM}{r}}, E = K + U = -\frac{GMm}{2a}$ | Centripetal force balance, bound vs unbound trajectories |
| **06. Kepler** | Kepler's Three Laws | $r = \frac{a(1-e^2)}{1+e\cos\theta}, \frac{dA}{dt} = \text{const}, T^2 \propto a^3$ | Elliptic orbits, areal velocity conservation, harmonic law |
| **07. Escape & Satellites** | Satellites & Escape Speed | $v_e = \sqrt{\frac{2GM}{R}} = \sqrt{2} v_o \approx 11.2\text{ km/s}$ | Newton's cannon, geostationary orbits ($h \approx 35,786\text{ km}$) |
| **08. Solar System** | Planetary Motion | $T^2/a^3 = \text{const}, \vec{F}_i = \sum \vec{F}_{ij}$ | Multi-planet heliocentric clockwork, planetary velocities |
| **09. Challenges** | Interactive Problem Solving | $\Delta v = v_{\text{target}} - v_{\text{initial}}$ | Orbital insertion challenge, planet mass deduction |
| **10. Theory** | Derivations & Algorithms | $E_g = -\frac{dV}{dr}$, Symplectic Verlet | Mathematical derivations, energy conservation proofs |
| **11. Credits** | References & Bibliography | NCERT Class XI, CBSE AIL Framework | Academic sources, astronomical ephemeris attribution |

---

## 5. Development Roadmap (12 Stages)

- **Stage 1:** Project foundation, architecture, type-safe physics core, test suite, and preview.
- **Stage 2:** Cinematic introduction & visual storytelling experience.
- **Stage 3:** Interactive Newtonian gravity laboratory (variable masses & distances, live force vectors).
- **Stage 4:** Gravitational field lines & altitude/depth $g$-variation interactive lab.
- **Stage 5:** Reusable orbital motion engine (velocity launcher, eccentricity controls, energy breakdown).
- **Stage 6:** Kepler's Laws demonstration (area sweeping with equal time sectors, $T^2$ vs $a^3$ graph).
- **Stage 7 (CURRENT):** Satellites & Escape Velocity laboratory ($v_o$, $v_e$, bound/unbound energy states, live energy graph).
- **Stage 8:** Multi-body solar system planetary clockwork simulator.
- **Stage 9:** Formative assessment physics challenges with instant feedback.
- **Stage 10:** Mathematical derivations and symplectic integrator performance comparison.
- **Stage 11:** Performance optimization, mobile responsiveness polish, accessibility audit.
- **Stage 12:** Self-contained portable production build verification for USB distribution.

---

## 6. How to Run & Verify

### A. Development Mode
Run the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open `http://localhost:3000` in any modern web browser.

### B. Automated Physics Verification Suite
Run the 8 automated physics test suites:
```bash
npm test
```
Verifies:
1. Vector2 kinematics, magnitude, cross/dot products.
2. Universal gravitation scaling ($F \propto m$, $F \propto 1/r^2$) and Newton's Third Law symmetry.
3. Earth surface $g$ ($\approx 9.8\text{ m/s}^2$), altitude reduction, and center zero-gravity.
4. Circular orbital velocity and escape velocity exact theoretical ratio ($v_e / v_o = \sqrt{2}$).
5. Kepler's Third Law ($T^2/a^3 = \text{constant}$) across astronomical distances.
6. Kepler's Second Law areal velocity conservation ($\frac{dA}{dt} = \text{constant}$).
7. Mechanical energy conservation ($E < 0$ for bound orbit, Virial theorem $E = U/2$).
8. Velocity-Verlet integrator orbital stability with $<0.5\%$ numerical drift over complete orbits.

### C. Portable Offline USB Build
Generate the standalone single-file offline bundle:
```bash
npm run build
```
Output:
`dist/index.html` (approx. 52 KB) containing all HTML, CSS, and JavaScript bundled in a single file.
Double-click `dist/index.html` directly in any web browser to run completely offline without Node, npm, or local servers!
