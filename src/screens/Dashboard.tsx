import { useState } from "react";
import Blocks from "../components/Blocks";
import Hero from "../components/Hero";
import User from "./User";
import { EventInterface } from '../models/Event';

function Dashboard() {
  const [blocks, setBlocks] = useState<EventInterface[]>([]);

  function handleUpdateBlocks(blocks: EventInterface[]): void {
    return setBlocks(blocks);
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