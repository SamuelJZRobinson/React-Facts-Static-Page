import Card from "./Card";

export default function MainContent() {
  return (
    <main>
      <h1>Facts Compiliation</h1>

      <div class="card-container">
        <Card
          title="React"
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
        <Card
          title="Vite"
          imageURL="./src/assets/vite-logo.png"
          text={[
            "Recent stable release 7.0.4 10 July 2025",
            "Written in TypeScript",
            "MIT License",
            "Local development server backed",
            "Original author Evan You",
          ]}
          sourceURL="https://en.wikipedia.org/wiki/Vite_(software)"
        />
      </div>
    </main>
  );
}
