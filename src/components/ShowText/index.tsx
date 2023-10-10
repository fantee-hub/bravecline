import React, { useState } from "react";

const ShowText = ({ image, desc, title }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="w-[350px] card-shadow rounded overflow-hidden relative">
      <div>
        <img src={image} alt={title} />
      </div>
      <div className="p-4 text-sm pb-14">
        <div className="pb-3 font-bold">{title}</div>
        <div className="leading-[1.8] lg:text-base text-xs">
          {isExpanded ? desc : desc.split(" ").slice(0, 20).join(" ") + "..."}
        </div>
      </div>
      <div className="absolute bottom-4 left-4">
        <button
          className="lg:bg-slate-900 bg-white lg:text-base text-xs rounded lg:text-white text-slate-900 outline-none p-1"
          onClick={() => setIsExpanded((exp) => !exp)}
        >
          {isExpanded ? "SHOW LESS" : "READ MORE"}
        </button>
      </div>
    </div>
  );
};

export default ShowText;
