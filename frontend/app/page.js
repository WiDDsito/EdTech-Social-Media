'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Aquí puedes hacer una llamada a tu API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
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
      <div className="grid gap-4">
        {data.map((item, index) => (
          <div key={index} className="p-4 border rounded shadow">
            <pre>{JSON.stringify(item, null, 2)}</pre>
          </div>
        ))}
      </div>
    </main>
  );
}
