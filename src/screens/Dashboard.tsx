import Blocks from "../components/Blocks";
import Hero from "../components/Hero";
import User from "./User";
import useGetEvents from "../hooks/useGetEvents";

function Dashboard() {
  const {events, searchEvent} = useGetEvents();

  return (
    <>
      <User/>
      <Hero searchHandler={searchEvent}/>
      <Blocks blocks={events} isLoading={false}/>
    </>
  )
}

export default Dashboard;