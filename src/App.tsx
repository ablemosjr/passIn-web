import { AttendeeList } from "./components/Attendee-list";
import { Header } from "./components/Header";

export function App() {
  return (
    <div className="max-w-[1216px] mx-auto py-5 flex flex-col gap-5">
      <Header />
      <AttendeeList />
    </div>
  );
}

// npm i lucide
// npm i tailwind-merge
// npm i @faker-js/faker
// npm i date-fns --save ou npm install dayjs (mais leve)