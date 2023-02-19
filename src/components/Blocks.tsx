import { useRef, useState, useEffect } from 'react';
import Card from './Card';

function Blocks({ blocks }: { blocks: any}) {
  const [active, setActive] = useState<boolean>(false);

  function handleChange(event: React.MouseEvent<HTMLAnchorElement>) {
    setActive(!active);
  }



  return (
    <div className="max-w-6xl bg-white flex items-center justify-center mx-auto mt-24 flex-col mb-24">
      <div className="flex justify-between w-full">
        <h3 className="font-bold text-2xl leading-loose">Blocos recomendados</h3>
        <div className="border-2 border-gray-100 rounded-md space-x-4 p-2 flex">
          <a onClick={handleChange} className={!active ? "bg-indigo-600 text-white cursor-pointer px-6 py-1 uppercas font-semibold text-sm rounded-md" : "cursor-pointer px-6 py-1 uppercas font-semibold text-indigo-600 text-sm rounded-md"}>Lista</a>
          <a onClick={handleChange} className={active ? "bg-indigo-600 text-white cursor-pointer px-6 py-1 uppercas font-semibold text-sm rounded-md" : "cursor-pointer px-6 py-1 uppercas font-semibold text-indigo-600 text-sm rounded-md"}>Mapa</a>
        </div>
      </div>
      <div className="events w-full grid grid-cols-3 gap-x-4 mt-12">
        {blocks?.map((item: any) => (
          <Card key={item.id} event={item}/>
        ))}
      </div>
    </div>
  )
}

export default Blocks