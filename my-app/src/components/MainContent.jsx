import Card from "./Card";

export default function MainContent() {
  return (
    <main>
      <h1>Facts Compiliation</h1>

      <div class="card-container">
        <Card
          imageURL="./src/assets/react-logo.png"
          text={[
            "Recent stable release 19.1.0 on 28 March 2025",
            "Written in JavaScript",
            "MIT License",
            "Free and open-source front-end JavaScript library",
            "Original author Jordan Walke",
          ]}
          sourceURL="https://en.wikipedia.org/wiki/React_(software)"
        />
      </div>
    </main>
  );
}
