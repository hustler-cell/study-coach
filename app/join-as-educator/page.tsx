import { BannerContent } from "./bannerContent";
import EducatorDetails from "./educatorDetails";
import { FaqContent } from "./faqContent";
import "./styles.css";

export default function joinAsEducator() {
  return (
    <main>
      <div className="educator_container shadow-md">
        <BannerContent />
        <EducatorDetails />
        <FaqContent />
      </div>
    </main>
  );
}
