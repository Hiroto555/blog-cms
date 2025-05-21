import React from 'react';

interface Article {
  id: number;
  title: string;
  body: string;
  slug: string;
}

async function getArticle(slug: string): Promise<Article> {
  const res = await fetch(`http://localhost:18000/api/articles/${slug}/`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch article');
  }
  return res.json();
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);
  return (
    <article className="prose mx-auto p-8">
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </article>
  );
}
