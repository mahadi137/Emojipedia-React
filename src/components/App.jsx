import React from "react";
import Emojipedia from "../emojipedia";
import Entry from "./Entry";
import Footer from "./Footer";

//Function for map method and create new <Entry />
function createEntry(dictionaryItem) {
  return (
    <Entry
      key={dictionaryItem.id}
      emoji={dictionaryItem.emoji}
      name={dictionaryItem.name}
      meaning={dictionaryItem.meaning}
      alt={dictionaryItem.alt}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{Emojipedia.map(createEntry)}</dl>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
