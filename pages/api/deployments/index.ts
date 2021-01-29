import { NextApiRequest, NextApiResponse } from "next";
import { KraneClient } from "@krane/common";

const endpoint = process.env.KRANE_ENDPOINT;
const token = process.env.KRANE_TOKEN;

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  const client = new KraneClient(endpoint, token);
  const deployments = await client.getDeployments();
  res.status(200).json(deployments);
};

export default handler;
