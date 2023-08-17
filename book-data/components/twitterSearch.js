import axios from "axios";
import { useEffect, useState } from "react";

const TwitterSearch = () => {
  const [tweets, setTweets] = useState([]);

  const searchTweets = async () => {
    try {
      const response = await axios.get("/api/twitter");
      setTweets(response.data);
    } catch (error) {
      console.error("Erro ao buscar tweets:", error);
    }
  };

  useEffect(() => {
    searchTweets();
  }, []);

  return (
    <div>
      <h1>Últimos Tweets</h1>
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id}>{tweet.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TwitterSearch;
