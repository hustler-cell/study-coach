import DemoBanner from "./demoBanner";
import StudentDetails from "./studentDetails";
// import { FaqContent } from "../join-as-educator/faqContent";
import { DemoFaqContent } from "./demoFaqContent";

export default function bookDemo() {
  return (
    <main className="container mx-auto bg-white">
      <DemoBanner />
      <StudentDetails />
      <DemoFaqContent />
    </main>
  );
}
