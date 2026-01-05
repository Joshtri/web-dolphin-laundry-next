// This page renders when a route is requested that doesn't match the
// middleware and therefore doesn't have a locale associated with it.

export default function NotFound() {
  return (
    <html lang="id">
      <body>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          fontFamily: 'system-ui, sans-serif'
        }}>
          <h1 style={{fontSize: '4rem', margin: 0}}>404</h1>
          <p style={{fontSize: '1.5rem', marginTop: '1rem'}}>Halaman tidak ditemukan / Page not found</p>
          <a href="/" style={{marginTop: '2rem', color: '#3B82F6', textDecoration: 'underline'}}>
            Kembali ke beranda / Back to home
          </a>
        </div>
      </body>
    </html>
  );
}
