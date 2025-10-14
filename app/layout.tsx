import './globals.css';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Blog de Lectura — ¡Tráguese ese Sapo!',
  description: 'Proyecto académico: creatividad, innovación y tecnología.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <div className="container">
          <header>
            <Link href="/" className="btn">Inicio</Link>
            <nav>
              <Link href="/nombre">Nombre</Link>
              <Link href="/introduccion">Introducción</Link>
              <Link href="/contenido">Contenido</Link>
              <Link href="/aportes">Aportes</Link>
              <Link href="/conclusion">Conclusión</Link>
              <Link href="/bibliografia">Bibliografía</Link>
              <Link href="/referencias">Referencias</Link>
            </nav>
          </header><br />
          <main>{children}</main>
          <footer className="muted" style={{marginTop:'2rem'}}>
            © {new Date().getFullYear()} Blog de Lectura — Proyecto académico.
          </footer>
        </div>
      </body>
    </html>
  );
}
