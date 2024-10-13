// "use client";

// import { getRooms } from "@/utils/services.global";
// import { RoomType } from "@/utils/types";
// import {
//   createContext,
//   Dispatch,
//   ReactNode,
//   SetStateAction,
//   useContext,
//   useEffect,
//   useState,
// } from "react";

// type MeetingManagerType = {
//   [meetingId: string]: RoomType;
// }[];

// type MeetingManagerContextType = {
//   meetings: MeetingManagerType;
//   setMeetings: Dispatch<SetStateAction<MeetingManagerType>>;
// };

// export const MeetingManagerContext = createContext(
//   {} as MeetingManagerContextType,
// );

// export const MeetingManagerProvider = ({
//   children,
// }: {
//   children: ReactNode;
// }) => {
//   const [meetings, setMeetings] = useState<MeetingManagerType>([]);
//   useEffect(() => {
//     const fetchRooms = async () => {
//       const rooms = await getRooms();
//       setMeetings(rooms.data);
//     };
//     fetchRooms();
//   }, []);
//   console.log(meetings);
//   return (
//     <MeetingManagerContext.Provider value={{ meetings, setMeetings }}>
//       {children}
//     </MeetingManagerContext.Provider>
//   );
// };

// export const useMeetingManager = () => {
//   return useContext(MeetingManagerContext);
// };
