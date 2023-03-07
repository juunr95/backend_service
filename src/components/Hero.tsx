import {useState} from 'react';
import Art1 from '../assets/art1.svg';
import Art2 from '../assets/art2.svg';
import useGetCities from "../hooks/useGetCities";

function Hero(props: any) {
  const [eventName, setEventName] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const { cities } = useGetCities();

  async function handleSearch() {
    return props.searchHandler(eventName, city);
  }

  return (
    <section className="w-screen bg-purple-50 relative flex items-center justify-center z-0">
      <img className="absolute top-0 left-0 -z-10" src={Art1} alt="Art 1"></img>
      <img className="absolute bottom-0 right-0 -z-10" src={Art2} alt="Art 1"></img>
      <div className="container flex items-center justify-center">
        <div className="content text-center py-28 w-full">
          <div className="subcontent max-w-3xl mx-auto space-y-8 mb-16">
            <span className="tracking-widest text-red-500 font-semibold">FIND YOUR BLOCK</span>
            <h1 className="text-5xl font-bold">Encontre os <span className="text-indigo-600">melhores blocos</span> de carnaval de 2023</h1>
          </div>
          <div className="search mx-auto max-w-6xl bg-white shadow-md p-8 rounded-lg border-1 border-gray-200 flex space-x-6">
            <div className="relative flex w-2/5">
              <input onChange={e => setEventName(e.target.value)} className="pl-10 py-4 bg-purple-50 w-full rounded-md" placeholder="Pesquise pelo nome" type="text" />
              <i className="search-icon"></i>
            </div>
            <div className="relative flex w-2/5">
              <select onChange={e => setCity(e.target.value)} className="city-selector pl-10 py-2 bg-purple-50 w-full rounded-md" placeholder="Selecione uma cidade">
              <option value="">Selecione uma cidade</option>
                {cities?.map((city : any) => (
                  <option key={city.id} value={city.id}>{city.name}</option>
                ))}
              </select>
              <i className="location-icon"></i>
            </div>
            <button onClick={handleSearch} className="bg-indigo-600 px-6 py-2 uppercase font-semibold text-white rounded-md w-1/5 hover:bg-indigo-700">Buscar agora</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;