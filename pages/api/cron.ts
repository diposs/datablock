import type { NextApiRequest, NextApiResponse } from 'next';
import { ethPersonalSign } from '@polybase/eth'
import { Polybase } from "@polybase/client";
import { ethers, Wallet } from "ethers";

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
)
{
  const trydipo:any = await process.env.NEXT_PUBLIC_ACCOUNT_PRIVATE_KEY;
  const wallet:any = await new ethers!.Wallet(trydipo!);
  const dood = wallet.publicKey;
  const dpkey = '0x' + dood.slice(4);
  var url = 'https://rpc.ankr.com/eth';
  var provider = await new ethers.providers.JsonRpcProvider(url);
  const db = await new Polybase({
  defaultNamespace: "pk/0x89de820323237a0e6cab8c5f29dfbf2f026f8c1da20c01f5b06b31877252a9d0f493bf95b625b667b1bdb3fb1593553bda1f056220cb2aa0e680316dba8b9a2c/DataBlockV2.1",
});
  db.signer((data) => {
  return {
    h: 'eth-personal-sign',
    sig: ethPersonalSign(wallet.privateKey, data)
  }
});
 
  let we =  0;
  while(wed <= 20000){
    try{
      const data6 = await db.collection('Chaintrack').record('ETH').get()
  let we2 = data6.data.blockNumber[0];
      let we = we2 + 1;
  const dsd = await provider.getBlock(we);
  const doinge = {'parentHash':dsd.parentHash, 'hash': dsd.hash, 'numbers':dsd.number, 'timestamp':dsd.timestamp};
  const daada = JSON.stringify(doinge);
  const data7 = await db.collection('IndexBlock').create([db.collection('LevelnMembership').record('Membership'),db.collection('Chaintrack').record('ETH'),db.collection('CompilerUser').record(dpkey),db.collection('AvailableJobs').record('Jobs'),daada]);
    }catch (e: any) {
      console.log(e);
    }
  we += 1;
    };
  res.status(200).json({ name: 'John Doe' });
}
