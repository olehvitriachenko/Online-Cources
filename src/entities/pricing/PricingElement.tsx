import Section from "../../shared/ui/Section";
import {
  pricingData,
  pricingListMonth,
  pricingListYear,
} from "./config/pricing";
import { useState } from "react";
import Tabs from "./ui/PricingTabs";
import PricingList from "./ui/PricingList";

function Pricing() {
  const [activeTab, setActiveTab] = useState<"monthly" | "yearly">("monthly");
  return (
    <Section
      title={pricingData.title}
      description={pricingData.description}
      content={
        activeTab === "monthly" ? (
          <PricingList pricingType={pricingListMonth} />
        ) : (
          <PricingList pricingType={pricingListYear} />
        )
      }
      tabs={
        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          contentButtonFirst="Monthly"
          contentButtonSecond="Yearly"
        />
      }
    />
  );
}

export default Pricing;
