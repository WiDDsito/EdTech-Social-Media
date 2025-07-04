import './globals.css';

export const metadata = {
  title: 'Mi Aplicación',
  description: 'Aplicación CRUD con Next.js y MongoDB',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
