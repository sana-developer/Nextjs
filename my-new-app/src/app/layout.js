// This layout applies to all pages in app/.

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <h2>My Next.js App</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
        <footer>
          <p>© 2021 My Next.js App</p>
        </footer>
      </body>
    </html>
  );
}
