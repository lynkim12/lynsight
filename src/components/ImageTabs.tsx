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
      <div className="flex justify-center space-x-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={`px-6 py-2 rounded-full transition-all duration-200 ${
              selectedTab === tab.id 
                ? 'bg-black text-white' 
                : 'border-2 border-gray-300 text-gray-700 hover:border-gray-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 이미지 보여주는 영역 */}
      <div className="w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="workImage w-full h-full flex items-center justify-center">
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
