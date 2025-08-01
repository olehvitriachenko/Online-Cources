import Button from "../../../shared/ui/Button";

type TabType = "monthly" | "yearly";

type Props = {
  activeTab: string;
  setActiveTab: (tab: TabType) => void;
  contentButtonFirst: string;
  contentButtonSecond: string;
};

const Tabs: React.FC<Props> = ({
  activeTab,
  setActiveTab,
  contentButtonFirst,
  contentButtonSecond,
}) => {
  return (
    <div className="tabs">
      <Button
        isActive={activeTab === "monthly"}
        onClick={() => setActiveTab("monthly")}
        className={`button--tab ${
          activeTab === "monthly" ? "button--active" : ""
        }`}
      >
        {contentButtonFirst}
      </Button>
      <Button
        isActive={activeTab === "yearly"}
        onClick={() => setActiveTab("yearly")}
        className={`button--tab ${
          activeTab === "yearly" ? "button--active" : ""
        }`}
      >
        {contentButtonSecond}
      </Button>
    </div>
  );
};

export default Tabs;
