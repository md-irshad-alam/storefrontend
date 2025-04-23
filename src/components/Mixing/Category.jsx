import React, { useState } from "react";

const tabs = [
  { name: "Home", value: "home" },
  { name: "Profile", value: "profile" },
  { name: "Settings", value: "settings" },
  { name: "Messages", value: "messages" },
];

const HorizontalSidebar = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex justify-left space-x-4 bg-white shadow-md py-3 px-5 rounded-b-xl">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2  font-medium transition-all duration-300 ${
              activeTab === tab.value
                ? "border-b-gray-500 shadow-md"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6 p-6 bg-white shadow rounded-lg text-gray-800">
        {activeTab === "home" && <p>This is the Home tab content.</p>}
        {activeTab === "profile" && <p>This is the Profile tab content.</p>}
        {activeTab === "settings" && <p>This is the Settings tab content.</p>}
        {activeTab === "messages" && <p>This is the Messages tab content.</p>}
      </div>
    </div>
  );
};

export default HorizontalSidebar;
