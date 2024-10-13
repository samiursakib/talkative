"use client";

import { createId } from "@/utils/helpers.global";
import token from "@/utils/token-generation";
import { MeetingProvider, useMeeting } from "@videosdk.live/react-sdk";
import { ReactNode } from "react";
import MeetingContainer from "./MeetingContainer";
import { useRouter } from "next/navigation";

export default function Home({ roomIds }: { roomIds: string[] }) {
  const router = useRouter();
  return (
    <>
      {roomIds.map((id) => (
        <div key={id} onClick={() => router.push(`/meeting/${id}`)}>
          {id}
        </div>
      ))}
    </>
  );
}
