import React, { useState } from 'react';
import { Code2 } from 'lucide-react';

const ProductWidget = () => {
  const [pendingWidth, setPendingWidth] = useState('800px');
  const [pendingHeight, setPendingHeight] = useState('600px');
  const [width, setWidth] = useState('800px');
  const [height, setHeight] = useState('600px');

  const iframeCode = `<iframe
  src="${window.location.origin}/product.html"
  width="${width}"
  height="${height}"
  style="border: none;"
  title="Product Widget"
></iframe>`;

  const handleApplyChanges = () => {
    const validatedWidth = validateDimension(pendingWidth);
    const validatedHeight = validateDimension(pendingHeight);
    
    setWidth(validatedWidth);
    setHeight(validatedHeight);
  };

  const validateDimension = (value: string): string => {
    const num = parseInt(value.replace(/[^0-9]/g, ''));
    if (isNaN(num)) return '200px';
    return Math.max(200, Math.min(2000, num)) + 'px';
  };

  return (
    <div className="w-full h-[calc(100vh-64px)] p-4 space-y-4">
      <div className="grid grid-cols-5 gap-4 max-w-6xl mx-auto">
        <div className="col-span-2 bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Widget Controls</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-1">
                Width
              </label>
              <input
                type="text"
                id="width"
                value={pendingWidth}
                onChange={(e) => setPendingWidth(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 800px"
              />
            </div>
            <div>
              <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
                Height
              </label>
              <input
                type="text"
                id="height"
                value={pendingHeight}
                onChange={(e) => setPendingHeight(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 600px"
              />
            </div>
          </div>
          <button
            onClick={handleApplyChanges}
            className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Apply Changes
          </button>
        </div>

        <div className="col-span-3 bg-white p-4 rounded-lg shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <Code2 className="h-5 w-5 text-gray-700" />
            <h2 className="text-lg font-semibold">Embed Code</h2>
          </div>
          <div className="relative">
            <pre className="bg-gray-50 p-4 rounded-lg text-sm overflow-x-auto">
              <code>{iframeCode}</code>
            </pre>
            <button
              onClick={() => navigator.clipboard.writeText(iframeCode)}
              className="absolute top-2 right-2 px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-lg max-w-6xl mx-auto">
        <div className="w-full flex justify-center">
          <iframe
            src="/product.html"
            style={{ width, height }}
            className="border-2 border-gray-300 rounded-lg"
            title="Product Widget"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductWidget;