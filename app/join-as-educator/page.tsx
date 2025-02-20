import { BannerContent } from "./bannerContent";
import EducatorDetails from "./educatorDetails";
import { FaqContent } from "./faqContent";
import "./styles.css";

export default function joinAsEducator() {
  return (
    <main className="container mx-auto bg-white">
      <div className="educator_container ">
        <BannerContent />
        <EducatorDetails />
        <FaqContent />
      </div>
    </main>
  );
}
