import { useCMS } from "../../context/CMSContext";

export default function AdminExperiences() {
  const { content, updateContent } = useCMS();
  const experiences = content.experiencesData;
  const pageData = content.experiencesPage;

  const handleUpdate = (id: number, field: string, value: string) => {
    const updatedExperiences = experiences.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    );

    updateContent({
      ...content,
      experiencesData: updatedExperiences
    });
  };

  const handleAdd = () => {
    const newId = Math.max(0, ...experiences.map(e => e.id)) + 1;
    const newExp = {
      id: newId,
      title: "New Experience",
      category: "Category",
      description: "Description",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80"
    };
    updateContent({
      ...content,
      experiencesData: [...experiences, newExp]
    });
  };

  const handleDelete = (id: number) => {
    updateContent({
      ...content,
      experiencesData: experiences.filter(e => e.id !== id)
    });
  };

  const handlePageUpdate = (field: string, value: string) => {
    updateContent({
      ...content,
      experiencesPage: {
        ...content.experiencesPage,
        [field]: value
      }
    });
  };

  return (
    <div className="space-y-8 pb-12">
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Manage Experiences</h2>
          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors shadow-sm font-medium text-sm"
          >
            + Add Experience
          </button>
        </div>
        <p className="mt-1 text-sm text-gray-500">
          Edit the hero section and the experiences cards displayed on the site.
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

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-white shadow-sm rounded-lg border border-gray-200 p-6 flex gap-6">
            <div className="w-48 h-32 rounded-md overflow-hidden flex-shrink-0 bg-gray-100">
              <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700">Title</label>
                  <input
                    type="text"
                    value={exp.title}
                    onChange={(e) => handleUpdate(exp.id, "title", e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700">Category</label>
                  <input
                    type="text"
                    value={exp.category}
                    onChange={(e) => handleUpdate(exp.id, "category", e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700">Description</label>
                <textarea
                  value={exp.description}
                  onChange={(e) => handleUpdate(exp.id, "description", e.target.value)}
                  rows={2}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700">Image URL</label>
                <input
                  type="text"
                  value={exp.image}
                  onChange={(e) => handleUpdate(exp.id, "image", e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                />
              </div>
              <div className="flex justify-end pt-2">
                <button
                  onClick={() => handleDelete(exp.id)}
                  className="text-red-600 hover:text-red-800 text-sm font-medium"
                >
                  Delete Experience
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
