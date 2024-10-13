import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MeetingProvider } from "@videosdk.live/react-sdk";
import token from "@/utils/token-generation";
import { createId } from "@/utils/helpers.global";
import DynamicMeetingContainer from "@/components/MeetingContainer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Talkative",
  description: "A platform to meet people from around",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DynamicMeetingContainer meetingId={"sldkfjsdf"}>
          {children}
        </DynamicMeetingContainer>
      </body>
    </html>
  );
}
