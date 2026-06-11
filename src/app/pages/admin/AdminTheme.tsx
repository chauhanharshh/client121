import { useCMS } from "../../context/CMSContext";

export default function AdminTheme() {
  const { content, updateContent } = useCMS();

  // Handle case where theme might not exist in older local storage saves
  const themeColors = content.theme?.colors || {
    background: "#FAF8F4",
    backgroundDark: "#2D2D2D",
    backgroundLight: "#E8EBEC",
    textPrimary: "#2D2D2D",
    textInverse: "#FFFFFF",
    accentPrimary: "#D8C7A1",
    accentSecondary: "#8F9E92",
  };

  const handleUpdate = (field: string, value: string) => {
    updateContent({
      ...content,
      theme: {
        ...content.theme,
        colors: {
          ...themeColors,
          [field]: value
        }
      }
    });
  };

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Theme Settings</h2>
        <p className="mt-1 text-sm text-gray-500">
          Customize the global colors of the website. Changes will apply instantly across all pages.
        </p>
      </div>

      <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6 space-y-6">
        <h3 className="text-lg font-medium text-gray-900">Global Color Palette</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Background Colors */}
          <div className="space-y-3 p-4 border rounded-md">
            <h4 className="font-semibold text-gray-700">Backgrounds</h4>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Primary Background</label>
              <div className="flex gap-2 items-center">
                <input type="color" value={themeColors.background} onChange={(e) => handleUpdate("background", e.target.value)} className="w-8 h-8 rounded cursor-pointer" />
                <input type="text" value={themeColors.background} onChange={(e) => handleUpdate("background", e.target.value)} className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1.5 border uppercase" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Dark Background</label>
              <div className="flex gap-2 items-center">
                <input type="color" value={themeColors.backgroundDark} onChange={(e) => handleUpdate("backgroundDark", e.target.value)} className="w-8 h-8 rounded cursor-pointer" />
                <input type="text" value={themeColors.backgroundDark} onChange={(e) => handleUpdate("backgroundDark", e.target.value)} className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1.5 border uppercase" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Light Alternate</label>
              <div className="flex gap-2 items-center">
                <input type="color" value={themeColors.backgroundLight} onChange={(e) => handleUpdate("backgroundLight", e.target.value)} className="w-8 h-8 rounded cursor-pointer" />
                <input type="text" value={themeColors.backgroundLight} onChange={(e) => handleUpdate("backgroundLight", e.target.value)} className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1.5 border uppercase" />
              </div>
            </div>
          </div>

          {/* Text Colors */}
          <div className="space-y-3 p-4 border rounded-md">
            <h4 className="font-semibold text-gray-700">Typography</h4>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Primary Text</label>
              <div className="flex gap-2 items-center">
                <input type="color" value={themeColors.textPrimary} onChange={(e) => handleUpdate("textPrimary", e.target.value)} className="w-8 h-8 rounded cursor-pointer" />
                <input type="text" value={themeColors.textPrimary} onChange={(e) => handleUpdate("textPrimary", e.target.value)} className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1.5 border uppercase" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Inverse Text (on dark bg)</label>
              <div className="flex gap-2 items-center">
                <input type="color" value={themeColors.textInverse} onChange={(e) => handleUpdate("textInverse", e.target.value)} className="w-8 h-8 rounded cursor-pointer" />
                <input type="text" value={themeColors.textInverse} onChange={(e) => handleUpdate("textInverse", e.target.value)} className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1.5 border uppercase" />
              </div>
            </div>
          </div>

          {/* Accent Colors */}
          <div className="space-y-3 p-4 border rounded-md">
            <h4 className="font-semibold text-gray-700">Accents</h4>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Primary Accent (Gold/Highlight)</label>
              <div className="flex gap-2 items-center">
                <input type="color" value={themeColors.accentPrimary} onChange={(e) => handleUpdate("accentPrimary", e.target.value)} className="w-8 h-8 rounded cursor-pointer" />
                <input type="text" value={themeColors.accentPrimary} onChange={(e) => handleUpdate("accentPrimary", e.target.value)} className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1.5 border uppercase" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Secondary Accent (Green/Subtle)</label>
              <div className="flex gap-2 items-center">
                <input type="color" value={themeColors.accentSecondary} onChange={(e) => handleUpdate("accentSecondary", e.target.value)} className="w-8 h-8 rounded cursor-pointer" />
                <input type="text" value={themeColors.accentSecondary} onChange={(e) => handleUpdate("accentSecondary", e.target.value)} className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1.5 border uppercase" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
