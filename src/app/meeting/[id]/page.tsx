import MeetingContainer from "@/components/MeetingContainer";
import MeetingView from "@/components/MeetingView";

export default function Page({ params: { id } }: { params: { id: string } }) {
  console.log(id);
  return (
    <>
      <MeetingContainer meetingId={id}>
        <MeetingView />
      </MeetingContainer>
    </>
  );
}
