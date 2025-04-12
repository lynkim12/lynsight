// components/ImageTabs.tsx
import React, { useState } from 'react';

export type ImageTab = {
  id: string;
  label: string;
  imageUrl: string;
};

interface ImageTabsProps {
  tabs: ImageTab[];
  defaultTabId?: string;
}

const ImageTabs: React.FC<ImageTabsProps> = ({ tabs, defaultTabId }) => {
  const [selectedTab, setSelectedTab] = useState<string>(defaultTabId || tabs[0]?.id);

  const currentImage = tabs.find((tab) => tab.id === selectedTab)?.imageUrl;

  return (
    <div className="w-full max-w-md mx-auto p-4">
      {/* 탭 버튼 */}
      <div className="flex space-x-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={`px-4 py-2 rounded ${
              selectedTab === tab.id ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 이미지 보여주는 영역 */}
      <div style={{maxHeight:'800px'}}>
        <div className="workImage">
            {currentImage ? (
            <img
                src={currentImage}
                alt={selectedTab}
                className="max-w-full max-h-full object-contain"
            />
            ) : (
            <p>No image available</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default ImageTabs;
