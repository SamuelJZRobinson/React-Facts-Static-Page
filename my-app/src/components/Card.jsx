export default function Card({ imageURL, text, sourceURL }) {
  return (
    <>
      <div class="card">
        <div class="label">
          <img class="icon" src={imageURL} />
          <p class="title">React</p>
        </div>
        <ul>
          {text.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
        <a class="source" href={sourceURL}>
          Source
        </a>
        <img class="overlay" src={imageURL} />
      </div>
    </>
  );
}
