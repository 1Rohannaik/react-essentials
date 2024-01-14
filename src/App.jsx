import { CORE_CONCEPTS } from "./data.js";
import Header from './components/Header.jsx'
import CoreConcept from "./components/CoreConcepts.jsx";
import TabButtons from "./components/TabButtons.jsx";
import { useState } from "react";
import {EXAMPLES} from "./data.js";

function App() {
  const [selectedTopice, setselectedTopice] = useState();

  function handleSelect(selectedButtons) {
    setselectedTopice(selectedButtons)
    console.log(selectedButtons)
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((array) => <CoreConcept key={array.title}{...array} />)};
          </ul>
        </section>
        <section id="examples">
          <h2>examples</h2>
          <menu>
            <TabButtons
              isSelected={selectedTopice === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButtons>
            <TabButtons
              isSelected={selectedTopice === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              jsx
            </TabButtons>
            <TabButtons
              isSelected={selectedTopice === "props"}
              onSelect={() => handleSelect("props")}
            >
              props
            </TabButtons>
            <TabButtons
              isSelected={selectedTopice === "state"}
              onSelect={() => handleSelect("state")}
            >
              state
            </TabButtons>
          </menu>
          {!selectedTopice ? (
            <p>please select the topic....</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopice].title}</h3>
              <p>{EXAMPLES[selectedTopice].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopice].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
export default App;
