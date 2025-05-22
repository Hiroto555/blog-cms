import React from 'react';

interface Article {
  id: number;
  title: string;
  slug: string;
  body: string;
}

async function getArticles(): Promise<Article[]> {
  const res = await fetch('http://localhost:18000/api/articles/', {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch articles');
  }
  return res.json();
}

export default async function Page() {
  const articles = await getArticles();
  return (
    <main className="p-8 grid gap-4 grid-cols-1">
      {articles.map((article) => (
        <a
          key={article.slug}
          href={`/articles/${article.slug}`}
          className="p-4 border rounded shadow hover:bg-gray-50"
        >
          <h2 className="text-xl font-bold mb-2">{article.title}</h2>
          <p className="text-gray-700">
            {article.body.substring(0, 100)}...
          </p>
        </a>
      ))}
    </main>
  );
}
