import React, { useState } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import { EventInterface } from "../models/Event";
import Card from './Card';

interface BlockProps {
  blocks: EventInterface[],
  isLoading: boolean
}

function Blocks({ blocks, isLoading }: BlockProps) {
  let TAB_LIST = 1;
  let TAB_MAP = 2;

  const [tab, setTab] = useState<number>(1);

  function handleChange(tab: number) {
    setTab(tab);
  }

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center mt-12">
        <BiLoaderAlt size={24} className="animate-spin text-indigo-500"/>
      </div>
    )
  }

  return (
    <div className="max-w-6xl bg-white flex items-center justify-center mx-auto mt-24 flex-col mb-24">
      <div className="flex justify-between w-full">
        <h3 className="font-bold text-2xl leading-loose">Blocos recomendados</h3>
        <div className="border-2 border-gray-100 rounded-md space-x-4 p-2 flex">
          <a onClick={() => handleChange(TAB_LIST)}
             className={`cursor-pointer px-6 py-1 uppercase font-semibold text-sm rounded-md ${tab === TAB_LIST ? "bg-indigo-600 text-white" : "text-indigo-600"}`}>
            Lista
          </a>
          <a onClick={() => handleChange(TAB_MAP)}
             className={`cursor-pointer px-6 py-1 uppercase font-semibold text-sm rounded-md ${tab === TAB_MAP ? "bg-indigo-600 text-white" : "text-indigo-600"}`}>
            Mapa
          </a>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-x-4 mt-12 gap-y-8">
        {blocks.length
          ? blocks?.map(item => (
            <Card key={item.id} event={item}/>
          ))
          : <p  className="text-center text-2xl font-semibold col-span-3">Nenhum bloco encontrado</p>}
      </div>
    </div>
  )
}

export default Blocks