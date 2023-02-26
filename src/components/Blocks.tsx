import React, { useState } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import { EventInterface } from "../models/Event";
import Card from './Card';

function Blocks({ blocks, isLoading }: { blocks: EventInterface[], isLoading: boolean }) {
  const [active, setActive] = useState<boolean>(false);

  function handleChange() {
    setActive(!active);
  }

  return (
    <div className="max-w-6xl bg-white flex items-center justify-center mx-auto mt-24 flex-col mb-24">
      <div className="flex justify-between w-full">
        <h3 className="font-bold text-2xl leading-loose">Blocos recomendados</h3>
        <div className="border-2 border-gray-100 rounded-md space-x-4 p-2 flex">
          <a onClick={handleChange} className={`cursor-pointer px-6 py-1 uppercase font-semibold text-sm rounded-md ${!active ? "bg-indigo-600 text-white" : "text-indigo-600"}`}>Lista</a>
          <a onClick={handleChange} className={`cursor-pointer px-6 py-1 uppercase font-semibold text-sm rounded-md ${active ? "bg-indigo-600 text-white" : "text-indigo-600"}`}>Mapa</a>
        </div>
      </div>
      {
        isLoading
          ? <div className="w-full h-full flex items-center justify-center mt-12">
            <BiLoaderAlt size={24} className="animate-spin text-indigo-500"/>
          </div>
          : <div className="events w-full grid grid-cols-3 gap-x-4 mt-12 gap-y-8">
            {blocks?.map((item: EventInterface) => (
              <Card key={item.id} event={item}/>
            ))}
          </div>
      }
    </div>
  )
}

export default Blocks