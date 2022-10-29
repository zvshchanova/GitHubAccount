import "./styles.css";
import { useState, useEffect } from "react";
import GitAccount from "./GitAccount";
import { InfinitySpin } from "react-loader-spinner";

export default function App() {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch("https://api.github.com/users/zvshchanova")
        .then((response) => response.json())
        .then((response) => setData(response))
        .then(() => setLoading(false))
        .catch(setError);
    }, 5000);
  }, []);

  if (loading) {
    // return <h2>Loading...</h2>
    return <InfinitySpin width="200" color="#4fa94d" />;
  }

  if (error) {
    return <h2>Something went wrong</h2>;
  }

  if (data) {
    return (
      <div
        style={
          {
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
            // height: '100vh',
          }
        }
      >
        <GitAccount
          name={data.name}
          login={data.login}
          id={data.id}
          avatar_url={data.avatar_url}
        />
      </div>
    );
  }
  return (
    <>
      <h1>No DATA</h1>
    </>
  );
}
