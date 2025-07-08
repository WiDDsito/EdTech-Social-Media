'use client';
import { useState, useEffect } from 'react';
import { GetPostsQuery } from '../application/GetPostsQuery';
import Image from 'next/image';


export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const query = new GetPostsQuery();
        const result = await query.execute();
        setPosts(result);
      } catch (err) {
        setError('Error al obtener los posts');
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <main className="min-h-screen p-8">
      <div className="flex justify-center mb-8">
        <Image
          src="https://nextjs.org/static/images/nextjs-logo.png"
          alt="Next.js Logo"
          width={200}
          height={120}
          priority
        />
      </div>
      <h1 className="text-3xl font-bold mb-6">Mi Aplicación</h1>
      {loading && <div>Cargando posts...</div>}
      {error && <div className="text-red-500">{error}</div>}
      <div className="grid gap-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="mb-2">{post.content}</p>
            <div className="text-sm text-gray-500">Por: {post.author} | {post.createdAt && new Date(post.createdAt).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
