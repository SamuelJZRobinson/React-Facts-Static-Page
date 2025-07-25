import Card from "./Card";
import FactData from "../data/FactData";

export default function MainContent() {
  return (
    <main>
      <h1>Facts Compiliation</h1>

      <div className="card-container">
        {FactData.map((fact) => (
          <Card key={fact.id} {...fact} />
        ))}
      </div>
    </main>
  );
}
