import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const deviceData = JSON.parse(req.body);
      console.log("device", deviceData);
      const savedDevice = await prisma.user.update({
        where: {
          name: "rizzrark",
        },
        data: {
          device: deviceData.device,
          description: deviceData.description,
        },
      });
      res.status(200).json(savedDevice);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Something goes wrong" });
    }
  }
};
