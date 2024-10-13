"use client";

import { useMeetingManager } from "@/providers/MeetingManagerProvider";
import { RoomType } from "@/utils/types";
import { useMeeting } from "@videosdk.live/react-sdk";

export default function MeetingView() {
  const meeting = useMeeting();
  console.log(meeting);
  return <>{meeting.meetingId}</>;
}
