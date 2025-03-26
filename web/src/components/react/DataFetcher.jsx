import { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(Math.floor(Math.random() * 100));
    console.warn(`Données chargées: ${data}`);

    return () => {
      console.log("Nettoyage du composant");
    };
  }, [data]); // Le tableau vide signifie que ça s'exécute une seule fois (au montage)

  function handleUpdate() {
    setData(2000);
  }

  return (
    <div>
      <p>Données: {data ?? "Aucune donnée"}</p>
      <button onClick={handleUpdate}>Update!</button>
    </div>
  );
}

export default DataFetcher;