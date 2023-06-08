import type { NextApiRequest, NextApiResponse } from 'next';
import { ethPersonalSign } from '@polybase/eth'
import { Polybase } from "@polybase/client";
import { ethers } from "ethers";

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
)
{
  const trydipo:any = await process.env.NEXT_PUBLIC_ACCOUNT_PRIVATE_KEY;
  const db = await new Polybase({
  defaultNamespace: "pk/0x89de820323237a0e6cab8c5f29dfbf2f026f8c1da20c01f5b06b31877252a9d0f493bf95b625b667b1bdb3fb1593553bda1f056220cb2aa0e680316dba8b9a2c/bd",
});
  db.signer((data) => {
  return {
    h: 'eth-personal-sign',
    sig: ethPersonalSign(trydipo, data)
  }
});
 
 let wedd =  0;

  while(wedd <= 20000){

    try{

  const data7 = await db.collection('IndexBlock').create([db.collection('jobs').record('jobs'),wedd]);

    }catch (e: any) {

      var ed = 12;

    }

  wedd += 1;

    };

  res.status(200).json({ name: 'John Doe' });

}
