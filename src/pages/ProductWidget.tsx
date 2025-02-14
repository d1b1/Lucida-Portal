import React, { useState } from 'react';
import { Code2, Package } from 'lucide-react';

const SAMPLE_PRODUCTS = [
  { id: 'PRD001', name: 'Premium Coffee Maker' },
  { id: 'PRD002', name: 'Wireless Earbuds Pro' },
  { id: 'PRD003', name: 'Smart Fitness Watch' },
  { id: 'PRD004', name: 'Ultra HD Gaming Monitor' },
  { id: 'PRD005', name: 'Ergonomic Office Chair' },
];

const ProductWidget = () => {
  const [selectedProduct, setSelectedProduct] = useState(SAMPLE_PRODUCTS[0].id);
  const baseUrl = import.meta.env.VITE_PRODUCT_WIDGET_URL?.replace(/\/+$/, '');
  const widgetUrl = `${baseUrl}?id=${selectedProduct}`;

  const iframeCode = `<iframe
  src="${widgetUrl}"
  width="100%"
  height="600"
  style="border: none;"
  title="Product Widget"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
></iframe>`;

  return (
    <div className="w-full h-[calc(100vh-64px)] p-4 space-y-4">
      <div className="flex gap-4 max-w-6xl mx-auto">
        <div className="w-[40%] bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <Package className="h-8 w-8 text-blue-500" />
            <h2 className="text-2xl font-bold">Product Widget</h2>
          </div>
          <p className="text-gray-600 mb-4">
            A customizable widget that showcases your products with rich interactive features. Perfect for embedding in e-commerce platforms, marketplaces, and product landing pages.
          </p>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Key Features</h3>
            <ul className="list-disc list-inside text-blue-700 space-y-1">
              <li>Real-time product updates</li>
              <li>Interactive product viewer</li>
              <li>Customizable styling</li>
              <li>Mobile-responsive design</li>
            </ul>
          </div>
        </div>

        <div className="w-[60%] bg-white p-4 rounded-lg shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <Code2 className="h-5 w-5 text-gray-700" />
            <h2 className="text-lg font-semibold">Embed Code</h2>
          </div>
          
          <div className="mb-4">
            <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
              Select Product
            </label>
            <select
              id="product"
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {SAMPLE_PRODUCTS.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name} ({product.id})
                </option>
              ))}
            </select>
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
            title="Product Widget"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductWidget;