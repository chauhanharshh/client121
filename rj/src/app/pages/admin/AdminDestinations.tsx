import { useState } from "react";
import { useCMS } from "../../context/CMSContext";

export default function AdminDestinations() {
  const { content, updateContent } = useCMS();
  const [activeRegion, setActiveRegion] = useState<keyof typeof content.destinationsData>("north");
  const dests = content.destinationsData;
  const pageData = content.destinationsPage;

  const destinations = content.destinationsData[activeRegion];

  const handleUpdate = (id: number, field: string, value: string) => {
    const updatedDestinations = destinations.map(dest => 
      dest.id === id ? { ...dest, [field]: value } : dest
    );

    updateContent({
      ...content,
      destinationsData: {
        ...content.destinationsData,
        [activeRegion]: updatedDestinations
      }
    });
  };

  const handleAdd = (region: keyof typeof content.destinationsData) => {
    const regionDests = content.destinationsData[region];
    const newId = Math.max(0, ...regionDests.map(d => d.id)) + 1;
    const newDest = {
      id: newId,
      name: "New Destination",
      description: "Description",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80",
      tag: "Heritage",
      state: "State",
      region: region
    };
    updateContent({
      ...content,
      destinationsData: {
        ...content.destinationsData,
        [region]: [...regionDests, newDest]
      }
    });
  };

  const handleDelete = (id: number) => {
    updateContent({
      ...content,
      destinationsData: {
        ...content.destinationsData,
        [activeRegion]: destinations.filter(d => d.id !== id)
      }
    });
  };

  const handlePageUpdate = (field: string, value: string) => {
    updateContent({
      ...content,
      destinationsPage: {
        ...content.destinationsPage,
        [field]: value
      }
    });
  };

  return (
    <div className="space-y-8 pb-12">
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Manage Destinations</h2>
          <button
            onClick={() => handleAdd(activeRegion)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors shadow-sm font-medium text-sm"
          >
            + Add Destination
          </button>
        </div>
        <p className="mt-1 text-sm text-gray-500">
          Edit the hero section and the destination cards displayed on the Destinations page.
        </p>
      </div>

      <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6 space-y-6">
        <h3 className="text-lg font-medium text-gray-900 border-b pb-4 mb-4">Hero Section</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Hero Subtitle</label>
            <input
              type="text"
              value={pageData.heroSubtitle}
              onChange={(e) => handlePageUpdate("heroSubtitle", e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Hero Title</label>
            <input
              type="text"
              value={pageData.heroTitle}
              onChange={(e) => handlePageUpdate("heroTitle", e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Hero Description</label>
            <textarea
              value={pageData.heroDescription}
              onChange={(e) => handlePageUpdate("heroDescription", e.target.value)}
              rows={3}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {Object.keys(content.destinationsData).map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region as any)}
              className={`${
                activeRegion === region
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium capitalize`}
            >
              {region}
            </button>
          ))}
        </nav>
      </div>

      <div className="space-y-6">
        {destinations.map((dest) => (
          <div key={dest.id} className="bg-white shadow-sm rounded-lg border border-gray-200 p-6 flex gap-6">
            <div className="w-48 h-32 rounded-md overflow-hidden flex-shrink-0 bg-gray-100">
              <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    value={dest.name}
                    onChange={(e) => handleUpdate(dest.id, "name", e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700">State</label>
                  <input
                    type="text"
                    value={dest.state}
                    onChange={(e) => handleUpdate(dest.id, "state", e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700">Description</label>
                <textarea
                  value={dest.description}
                  onChange={(e) => handleUpdate(dest.id, "description", e.target.value)}
                  rows={2}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700">Tag (e.g. Heritage, Adventure)</label>
                  <input
                    type="text"
                    value={dest.tag}
                    onChange={(e) => handleUpdate(dest.id, "tag", e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700">Image URL</label>
                  <input
                    type="text"
                    value={dest.image}
                    onChange={(e) => handleUpdate(dest.id, "image", e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  />
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <button
                  onClick={() => handleDelete(dest.id)}
                  className="text-red-600 hover:text-red-800 text-sm font-medium"
                >
                  Delete Destination
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
