import {
  pricingSectionData,
  pricingListMonth,
  pricingListYear,
} from "../../entities/pricing/config/pricing.ts";
import { useState } from "react";
import Tabs from "../../entities/pricing/ui/PricingTabs.tsx";
import PricingList from "../../entities/pricing/ui/PricingList.tsx";
import Section from "../../shared/ui/Section.tsx";

function PrcingSection() {
  const [activeTab, setActiveTab] = useState<"monthly" | "yearly">("monthly");

  return (
    <Section
      title={pricingSectionData.title}
      description={pricingSectionData.description}
      tabs={false}
      hasLink={false}
      content={
        <>
          <div className="section__body--pricing">
            <Tabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              contentButtonFirst="Monthly"
              contentButtonSecond="Yearly"
            />

            {activeTab === "monthly" ? (
              <PricingList pricingType={pricingListMonth} />
            ) : (
              <PricingList pricingType={pricingListYear} />
            )}
          </div>
        </>
      }
    />
  );
}

export default PrcingSection;
