export default async function handler(req, res) {
  const response = await fetch(
    "https://replicate.com/api/models/cloneofsimo/realistic_vision_v1.3/versions/9df116d11c8e8acc08ee2bdb96af16f75db5aeee28b23abe0f16259038dc866a/predictions",
    {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    }
  );

  if (response.status !== 201) {
    let error = await response.json();
    res.statusCode = 500;
    res.end(JSON.stringify({ detail: error.detail }));
    return;
  }

  const outputs = await response.json();
  res.statusCode = 201;
  res.end(JSON.stringify(outputs));
}
