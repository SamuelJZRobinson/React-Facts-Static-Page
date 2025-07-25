export default function Card(props) {
  return (
    <>
      <div className="card">
        <div className="label">
          <img className="icon" src={props.imageURL} />
          <p className="title">{props.title}</p>
        </div>
        <ul>
          {props.text.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
        <a className="source" href={props.sourceURL}>
          Source
        </a>
        <img className="overlay" src={props.imageURL} />
      </div>
    </>
  );
}
