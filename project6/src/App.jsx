import { useState } from "react";

function App() {
  const [name, setName] = useState("Tushar");
  const [age, setAge] = useState(20);

  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>

      <button onClick={() => setName("Amit")}>
        Change Name
      </button>

      <button onClick={() => setAge(age + 1)}>
        Increase Age
      </button>
    </div>
  );
}

export default App;