import Hero from "../component/Hero";
import BestSeller from "../component/BestSeller";
import LatestCollection from "../component/LatestCollection";
import OurPolicies from "../component/OurPolicies";
import NewsletterBox from "../component/NewsletterBox";

function Home() {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicies />
      <NewsletterBox />
    </div>
  );
}

export default Home;
