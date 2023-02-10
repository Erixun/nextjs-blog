// Access this endpoint by going to localhost:3000/api/hello

import { NextApiRequest, NextApiResponse } from "next";

/**
 *
 * @param {*} req An instance of http.IncomingMessage, plus some pre-built middlewares.
 * @param {*} res An instance of http.ServerResponse, plus some helper functions.
 */
export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ text: "Hello" });
}

// API Route code will not be a part of your client bundle.
