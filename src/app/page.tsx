import Home from "@/components/Home";
import HomeComponent from "@/components/HomeComponent";
import { createRoom, getRoom, getRooms } from "@/utils/services.global";
import { Meeting } from "@videosdk.live/react-sdk/dist/types/meeting";
import dynamic from "next/dynamic";

export default async function Page() {
  const rooms = await getRooms();
  console.log(rooms);
  return <Home roomIds={rooms.data.map((room: Meeting) => room.id)} />;
}
