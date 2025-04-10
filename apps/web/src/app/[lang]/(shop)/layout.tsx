import '@/src/app/app.css';

interface ShopLayoutProps {
  readonly children: React.ReactNode;
}

export default function ShopLayout({children}: ShopLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
