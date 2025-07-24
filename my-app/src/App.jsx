import "./App.css";

// React translates JSX into create element DOM code, etc.
// Component names must start with capital letters.

function Header() {
  return (
    <header>
      <img class="logo" src="./src/assets/react-logo.png" alt="React Logo" />
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

function Card() {
  return (
    <>
      <div class="card">
        <h1>Facts Compiliation</h1>
        <a href="https://en.wikipedia.org/wiki/React_(software)">Source</a>
        <ul>
          <li>Recent stable release 19.1.0 on 28 March 2025</li>
          <li>Written in JavaScript</li>
          <li>MIT License</li>
          <li>Free and open-source front-end JavaScript library</li>
          <li>Original author Jordan Walke</li>
        </ul>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Samuel Robinson.</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Card />
      </main>
      <Footer />
    </>
  );
}

export default App;
