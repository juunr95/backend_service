interface EventProp {
  image_url: string;
  name: string;
  description: string;
  city: {
    name: string;
    state: string;
  };
}

function Card({ event }: { event: EventProp }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="h-64">
        <img className="rounded-t-lg object-cover w-full h-full" src={event.image_url} alt="" />
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{event.name}</h5>
        </a>
        <p>{event.description}</p>
        <div className="relative pt-4 flex items-center ">
          <p className="inline-flex items-center">
            {event.city.name} - {event.city.state}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card;