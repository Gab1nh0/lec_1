import temas from '../../../content/temas.json';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return temas.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const tema = temas.find((item) => item.slug === params.slug);
  return { title: tema ? `${tema.titulo} - Aporte` : 'Aporte' };
}

export default function Aporte({ params }: { params: { slug: string } }) {
  const tema = temas.find((item) => item.slug === params.slug);
  if (!tema) return <div className="card">Tema no encontrado.</div>;

  return (
    <article className="card">
      <h1>{tema.titulo}</h1>
      <p className="muted">Autor: {tema.autor}</p>
      <h2>Resumen</h2>
      <p>{tema.resumen}</p>
      <h2>Idea clave</h2>
      <p>{tema.ideaClave}</p>
      <h2>Aplicación práctica</h2>
      <ul>
        {tema.aplicaciones.map((aplicacion, index) => (
          <li key={index}>{aplicacion}</li>
        ))}
      </ul>
    </article>
  );
}
