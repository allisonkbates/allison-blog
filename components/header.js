import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <h2><Link href="/"><a>Allison Mazzetti</a></Link></h2>
      <nav>
        <ul>
          <li><Link href="/blog"><a>Food Blog</a></Link></li>
          <li><Link href="/projects"><a>Projects</a></Link></li>
          <li><Link href="/about"><a>About</a></Link></li>
        </ul>
      </nav>
      <style jsx>{`
        header {
          background-color: var(--color-grey-10);
          border-bottom: 1px solid var(--color-grey-20);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1em 6em;
        }
        h2 a {
          font-family: "IBM Plex Mono", monospace;
          font-size: var(--fs-600);
          font-weight: 300;
          text-decoration: none;
          color: var(--color-grey-100);
          text-align: center;
        }
        ul {
          padding: 0;
        }
        li {
          margin: 0em 1em;
          display: inline-flex;
        }
        li a {
          font-family: "IBM Plex Mono", monospace;
          text-transform: uppercase;
          font-size: var(--fs-400);
          text-decoration: none;
          color: var(--color-grey-100);
        }
        @media only screen and (max-width: 768px) {
          header {
            flex-direction: column;
            padding: 1em 2em;
          }
          h2 a {
            font-size: var(--fs-500);
          }
          li a {
            font-size: var(--fs-300);
          }
        }
      `}</style>
    </header>

  )
}
