import Link from 'next/link';


const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      <Link href="/">
        <a className="navbar-brand">Next Portfolio</a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link href="/blog">
            <a className="nav-link">Blog</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/github">
            <a className="nav-link">Github</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
