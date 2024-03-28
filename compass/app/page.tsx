import Image from "next/image";
import CompassPage from "./components/CompassPage";
import CardPage from "./components/CardPage";
import EventPage from "./components/EventPage";
import Event2ndPage from "./components/Event2ndPage";
export default function Home() {
  return (
    <>
    <div className="bg-FED900">
    <CompassPage/>
    <CardPage/>
    {/* <EventPage/> */}
    <Event2ndPage/>
    </div>
   
    </>
  );
}
