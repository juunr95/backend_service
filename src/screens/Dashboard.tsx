import { useState } from "react";
import { EventInterface } from '../models/Event';
import Blocks from "../components/Blocks";
import Hero from "../components/Hero";
import User from "./User";

function Dashboard() {
  const [blocks, setBlocks] = useState<EventInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  function handleUpdateBlocks(blocks: EventInterface[]): void {
    return setBlocks(blocks);
  }

  function handleIsLoading(loading: boolean): void {
    return setIsLoading(loading);
  }

  return (
    <>
      <User/>
      <Hero updateBlocks={handleUpdateBlocks} setIsLoading={handleIsLoading}/>
      <Blocks blocks={blocks} isLoading={isLoading}/>
    </>
  )
}

export default Dashboard;