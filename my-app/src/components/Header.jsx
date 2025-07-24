export default function Header() {
  return (
    <header>
      <div id="logo-container">
        <a href="#">
          <img
            className="logo"
            src="./src/assets/react-logo.png"
            alt="React Logo"
          />
          <p>FactCo</p>
        </a>
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
