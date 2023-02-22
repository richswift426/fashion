export default async function handler(req, res) {
  const response = await fetch(
    "https://replicate.com/api/models/cloneofsimo/lora-training/versions/b2a308762e36ac48d16bfadc03a65493fe6e799f429f7941639a6acec5b276cc/predictions" +
      req.query.id,
    {
      headers: {
        Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status !== 200) {
    let error = await response.json();
    res.statusCode = 500;
    res.end(JSON.stringify({ detail: error.detail }));
    return;
  }

  const prediction = await response.json();
  res.end(JSON.stringify(prediction));
}
