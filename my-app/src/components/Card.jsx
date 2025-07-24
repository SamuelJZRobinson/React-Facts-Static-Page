export default function Card() {
  return (
    <>
      <div class="card">
        <div class="label">
          <img class="icon" src="./src/assets/react-logo.png" />
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
        <img class="overlay" src="./src/assets/react-logo.png" />
      </div>
    </>
  );
}
