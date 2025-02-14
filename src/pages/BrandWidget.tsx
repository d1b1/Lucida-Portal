import React from 'react';
import { Code2 } from 'lucide-react';

const BrandWidget = () => {
  const widgetUrl = import.meta.env.VITE_BRAND_WIDGET_URL?.replace(/\/+$/, '');

  const iframeCode = `<iframe
  src="${widgetUrl}"
  width="100%"
  height="600"
  style="border: none;"
  title="Brand Widget"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
></iframe>`;

  return (
    <div className="w-full h-[calc(100vh-64px)] p-4 space-y-4">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-6xl mx-auto">
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

      <div className="bg-white p-4 rounded-lg shadow-lg max-w-6xl mx-auto">
        <div className="text-sm text-gray-600 mb-2">
          Widget URL: {widgetUrl}
        </div>
        <div className="w-full">
          <iframe
            src={widgetUrl}
            width="100%"
            height="600"
            style={{ border: 'none' }}
            className="rounded-lg"
            title="Brand Widget"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>
      </div>
    </div>
  );
};

export default BrandWidget;