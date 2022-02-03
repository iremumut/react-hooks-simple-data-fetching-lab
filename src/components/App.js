// create your App component here

import { useEffect, useState } from "react";

function App() {
  const [images, setImages] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setImages(data.message);
        setIsLoaded(true);
      });
  }, []);

  if (!isLoaded) return <p>Loading...</p>;

  return (
    <div>
      <img src={images} alt="A Random Dog" />
    </div>
  );
}

export default App;
