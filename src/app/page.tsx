import Link from 'next/link';

export default function Home() {
  return (
    <section className="card">
      <span className="chip">Proyecto académico</span>
      <h1>¡Tráguese ese Sapo! — Blog de Lectura</h1>
      <p>
        Blog colaborativo donde cada integrante aporta una explicación coherente y un enfoque personal
        del libro seleccionado, con creatividad, innovación y tecnología.
      </p>
      <div style={{marginTop:'1rem', display:'flex', gap:'.5rem', flexWrap:'wrap'}}>
        <Link href="/nombre" className="btn">Nombre del blog</Link>
        <Link href="/introduccion" className="btn">Introducción</Link>
        <Link href="/contenido" className="btn">Contenido</Link>
        <Link href="/aportes" className="btn">Aportes</Link>
        <Link href="/conclusion" className="btn">Conclusión</Link>
        <Link href="/bibliografia" className="btn">Bibliografía</Link>
        <Link href="/referencias" className="btn">Referencias</Link>
      </div>
    </section>
  );
}
