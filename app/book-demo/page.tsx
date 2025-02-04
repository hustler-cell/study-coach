import DemoBanner from "./demoBanner";
import StudentDetails from "./studentDetails";
import { FaqContent } from "../join-as-educator/faqContent";

export default function bookDemo() {
  return (
    <main>
      <DemoBanner />
      <StudentDetails />
      <FaqContent />
    </main>
  );
}
