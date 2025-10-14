import Link from 'next/link';
import temas from '../../content/temas.json';

export default function Contenido() {
  return (
    <section className="card">
      <h1>Contenido — Temas por Estudiante</h1>
      <p>Selecciona un tema para ver el aporte individual.</p>
      <div className="grid">
        {temas.map((t) => (
          <article key={t.slug} className="card">
            <h3>{t.titulo}</h3>
            <p>{t.resumen}</p>
            <p className="muted">Por: {t.autor}</p>
            <Link className="btn" href={`/contenido/${t.slug}`}>Ver aporte</Link>
          </article>
        ))}
      </div>
      <p className="muted" style={{marginTop:'1rem'}}>Edita la lista en <code>/content/temas.json</code>.</p>
    </section>
  );
}
