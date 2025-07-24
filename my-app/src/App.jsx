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

function Main() {
  return (
    <main>
      <h1>Facts Compiliation</h1>

      <div class="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}

function Card() {
  return (
    <>
      <div class="card">
        <div class="label">
          <img class="icon" src="./src/assets/react-logo.png"></img>
          <p class="title">React</p>
        </div>
        <ul>
          <li>Recent stable release 19.1.0 on 28 March 2025</li>
          <li>Written in JavaScript</li>
          <li>MIT License</li>
          <li>Free and open-source front-end JavaScript library</li>
          <li>Original author Jordan Walke</li>
        </ul>
        <a class="source" href="https://en.wikipedia.org/wiki/React_(software)">
          Source
        </a>
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
      <Main />
      <Footer />
    </>
  );
}

export default App;
