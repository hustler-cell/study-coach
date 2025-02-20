import FreqQues from "./freqQues";
import GetInTouch from "./getInTouch";
import "./styles.css";

export default function Contact() {
  return (
    <>
      <main className="container mx-auto main_container">
        <div className="contact_container">
          <GetInTouch />
          <FreqQues />
        </div>
      </main>
    </>
  );
}
