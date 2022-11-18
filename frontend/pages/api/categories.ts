import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const SERVER_URL = process.env.SERVER_URL;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[]>
) {
  console.log("SERVER", SERVER_URL);
  if (req.method === "GET") {
    try {
      const response = await axios.get(`${SERVER_URL}/categories`);
      res.json(response.data);
    } catch (error) {
      res.status(400).json({ error: "Failed to retrieve data." });
    }
  }
}
