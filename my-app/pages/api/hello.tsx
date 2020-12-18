// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { readFileSync, writeFileSync } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { resolve } from "path";
import db from "../../db.json";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password } = req.body;

  if (username && password && db.users) {
    let obj = { username, password };

    writeFileSync(resolve(__dirname, "a.json"),"EAE");
    // readFileSync()
    res.statusCode = 200;
    res.send("Bem vindo");
  } else {
    res.statusCode = 400;
    res.send("Failou");
  }
};
