import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/test`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>React + Laravel + PostgreSQL + Redis</h1>

      {data && (
        <>
          <p>{data.message}</p>
          <p>{data.cached_time}</p>
        </>
      )}
    </div>
  );
}

export default App;
