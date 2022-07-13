import MeetupList from "../components/meetups/MeetupList";

function HomePage() {
  const DUMMY_MEETUPS = [
    {
      id: "m1",
      title: "first meetup",
    },
  ];
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
