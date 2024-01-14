import reactImg from "../assets/react-core-concepts.png";
import './Header.css';


const reactDescription = ["fundamental", "core", "crucial"];

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}
export default function Header() {
  const description = reactDescription[getRandomInt(2)];
  return (
    <div>
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}