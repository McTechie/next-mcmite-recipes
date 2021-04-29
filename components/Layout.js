import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Just Add</span>
              <span>Mcmite</span>
            </h1>
            <h2 className="tagline">Spread The Joy</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>&copy; Copyright 2021 Just Add Mcmite ;&#41;</p>
      </footer>
    </div>
  )
}