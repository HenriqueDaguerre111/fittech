import './globals.css'; 
import { ReactNode } from 'react';

export const metadata = {
  title: 'Fittech',
  description: 'Inscreva-se na nossa landing page e receba novidades exclusivas.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}
