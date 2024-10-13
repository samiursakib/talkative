"use client";

import { createId } from "@/utils/helpers.global";
import token from "@/utils/token-generation";
import { MeetingProvider } from "@videosdk.live/react-sdk";
import dynamic from "next/dynamic";
import { ReactNode, useEffect, useState } from "react";

export default function MeetingContainer({
  children,
  meetingId,
}: {
  children: ReactNode;
  meetingId: string;
}) {
  const [component, setComponent] = useState<JSX.Element>();
  useEffect(() => {
    const loadModule = async () => {
      if (!meetingId) return;
      const { MeetingProvider } = await import("@videosdk.live/react-sdk");
      setComponent(
        <MeetingProvider
          config={{
            meetingId,
            name: "Me",
            micEnabled: true,
            webcamEnabled: true,
            debugMode: true,
          }}
          token={token}
          joinWithoutUserInteraction
        >
          {children}
        </MeetingProvider>,
      );
    };
    loadModule();
  }, [children, meetingId]);
  return component;
}
