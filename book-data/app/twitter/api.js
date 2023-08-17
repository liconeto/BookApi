import axios from "axios";

export default async function handler(req, res) {
  const { TWITTER_BEARER_TOKEN } = process.env;
  const query = "livro";
  const startDate = "2023-01-01T00:00:00Z"; // Data de início
  const endDate = "2023-01-31T23:59:59Z"; // Data de término

  const url = `https://api.twitter.com/2/tweets/search/recent?query=${encodeURIComponent(
    query
  )}&start_time=${encodeURIComponent(startDate)}&end_time=${encodeURIComponent(
    endDate
  )}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${TWITTER_BEARER_TOKEN}`,
      },
    });

    res.status(200).json(response.data.data);
  } catch (error) {
    console.error("Erro ao buscar tweets:", error);
    res.status(500).json({ error: "Erro ao buscar tweets" });
  }
}
