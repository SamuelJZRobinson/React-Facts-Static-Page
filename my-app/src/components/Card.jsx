export default function Card({ title, imageURL, text, sourceURL }) {
  return (
    <>
      <div className="card">
        <div className="label">
          <img className="icon" src={imageURL} />
          <p className="title">{title}</p>
        </div>
        <ul>
          {text.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
        <a className="source" href={sourceURL}>
          Source
        </a>
        <img className="overlay" src={imageURL} />
      </div>
    </>
  );
}
