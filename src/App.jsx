import React from "react";
import Dropdown from "./Dropdown";

const items = ["첫 번째 아이템", "두 번째 아이템", "세 번째 아이템"];

function App() {
  return (
    <div>
      <h3>useContext로 만드는 Dropdown Item</h3>
      <Dropdown items={items} />
    </div>
  );
}

export default App;
