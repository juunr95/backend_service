import { useState } from "react";
import Blocks from "../components/Blocks";
import Hero from "../components/Hero";
import User from "./User";


function Dashboard() {
  const [blocks, setBlocks] = useState<any>();

  function handleUpdateBlocks(blocks: any) {
    setBlocks(blocks);
  }

  return (
    <>
      <User/>
      <Hero updateBlocks={handleUpdateBlocks}/>
      <Blocks blocks={blocks}/>
    </>
  )
}

export default Dashboard;