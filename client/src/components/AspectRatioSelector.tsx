import React from "react";
import {
  RectangleHorizontal,
  RectangleVertical,
  Square,
} from "lucide-react";

import { aspectRatios, type AspectRatio } from "../assets/assets";

type Props = {
  value: AspectRatio;
  onChange: (ratio: AspectRatio) => void;
};

const AspectRatioSelector: React.FC<Props> = ({ value, onChange }) => {
  const iconMap: Record<AspectRatio, React.ReactNode> = {
    "16:9": <RectangleHorizontal className="size-6" />,
    "1:1": <Square className="size-6" />,
    "9:16": <RectangleVertical className="size-6" />,
  };

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-zinc-200">
        Aspect Ratio
      </label>

      <div className="flex flex-wrap gap-2">
        {aspectRatios.map((ratio) => {
          const selected = value === ratio;

          return (
            <button
              key={ratio}
              type="button"
              onClick={() => onChange(ratio)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border
                ${
                  selected
                    ? "bg-pink-500/20 border-pink-500 text-pink-400"
                    : "bg-white/5 border-white/10 text-zinc-300 hover:bg-white/10"
                }
                transition`}
            >
              {iconMap[ratio]}
              <span className="text-sm tracking-wide">{ratio}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AspectRatioSelector;
