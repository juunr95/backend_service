import React, { useState } from 'react';
import Card from './Card';
import { BiLoaderAlt } from 'react-icons/bi';
import {EventInterface} from "../models/Event";
import {render} from "react-dom";

function Blocks({ blocks, isLoading }: { blocks: EventInterface[], isLoading: boolean }) {
  const [active, setActive] = useState<boolean>(false);

  function handleChange(event: React.MouseEvent<HTMLAnchorElement>) {
    setActive(!active);
  }

  function renderCards(blocks: EventInterface[]) {
    return (
        <div className="events w-full grid grid-cols-3 gap-x-4 mt-12 gap-y-8">
          {blocks?.map((item: EventInterface) => (
              <Card key={item.id} event={item}/>
          ))}
        </div>
    )
  }

  return (
    <div className="max-w-6xl bg-white flex items-center justify-center mx-auto mt-24 flex-col mb-24">
      <div className="flex justify-between w-full">
        <h3 className="font-bold text-2xl leading-loose">Blocos recomendados</h3>
        <div className="border-2 border-gray-100 rounded-md space-x-4 p-2 flex">
          <a onClick={handleChange} className={!active ? "bg-indigo-600 text-white cursor-pointer px-6 py-1 uppercase font-semibold text-sm rounded-md" : "cursor-pointer px-6 py-1 uppercase font-semibold text-indigo-600 text-sm rounded-md"}>Lista</a>
          <a onClick={handleChange} className={active ? "bg-indigo-600 text-white cursor-pointer px-6 py-1 uppercase font-semibold text-sm rounded-md" : "cursor-pointer px-6 py-1 uppercaes font-semibold text-indigo-600 text-sm rounded-md"}>Mapa</a>
        </div>
      </div>
      {
        isLoading ?
          <div className="w-full h-full flex items-center justify-center mt-12">
            <BiLoaderAlt size={24} className="animate-spin text-indigo-500"/>
          </div> :
          renderCards(blocks)
      }
    </div>
  )
}

export default Blocks