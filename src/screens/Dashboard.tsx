import { useRef, useState, useEffect } from "react";
import Blocks from "../components/Blocks";
import Hero from "../components/Hero";


function Dashboard() {
  const [blocks, setBlocks] = useState<any>();

  function handleUpdateBlocks(blocks: any) {
    setBlocks(blocks);
  }

  return (
    <>
    <Hero updateBlocks={handleUpdateBlocks}/>
    <Blocks blocks={blocks}/>
    </>
  )
}

export default Dashboard;