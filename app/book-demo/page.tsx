import DemoBanner from "./demoBanner";
import StudentDetails from "./studentDetails";
import { FaqContent } from "../join-as-educator/faqContent";

export default function bookDemo() {
  return (
    <main className="bg-white">
      <DemoBanner />
      <StudentDetails />
      <FaqContent />
    </main>
  );
}
