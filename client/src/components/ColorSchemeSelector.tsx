import React from "react";
import { colorSchemes, type ColorScheme } from "../assets/assets";

type Props = {
  value: ColorScheme;
  onChange: (color: ColorScheme) => void;
};

const ColorSchemeSelector: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-zinc-200">
        Color Scheme
      </label>

      <div className="grid grid-cols-6 gap-3">
        {colorSchemes.map((scheme) => (
          <button
            key={scheme.id}
            type="button"
            onClick={() => onChange(scheme.id)}
            className={`relative rounded-lg transition-all ${
              value === scheme.id ? "ring-2 ring-pink-500" : ""
            }`}
            title={scheme.name}
          >
            <div className="flex h-10 overflow-hidden rounded-lg">
              {scheme.colors.map((color, index) => (
                <div
                  key={index}
                  className="flex-1"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </button>
        ))}
      </div>

      <p className="text-xs text-zinc-400">
        Selected:{" "}
        {colorSchemes.find((scheme) => scheme.id === value)?.name}
      </p>
    </div>
  );
};

export default ColorSchemeSelector;
