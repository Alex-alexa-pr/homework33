import { useState } from "react";

import Title from "./components/Title";

function App() {
  const [isOpened, setOpened] = useState<boolean>(false);

  function handleClick() {
      setOpened(true);
    };

  if (!isOpened) {
      return <button onClick={handleClick}>Open title</button>
    }
    return (
      <>
          <Title name="Products" type="bold" />
          <Title name="Employees" type="normal" />
      </>
    )
}

export default App;