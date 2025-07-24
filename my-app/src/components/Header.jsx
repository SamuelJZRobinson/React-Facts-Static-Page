export default function Header() {
  return (
    <header>
      <div id="logo-container">
        <img class="logo" src="./src/assets/react-logo.png" alt="React Logo" />
        <p>FactCo</p>
      </div>
      <nav>
        <ul class="nav-list">
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
