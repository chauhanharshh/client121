import { useCMS } from "../../context/CMSContext";

export default function AdminDashboard() {
  const { content } = useCMS();

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Welcome to the CMS Dashboard</h3>
        <p className="text-gray-600">
          This is a headless CMS stored directly in your browser's local storage. Any changes you make here will instantly reflect on the main website. 
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h4 className="font-medium text-gray-900 mb-4">Content Stats</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex justify-between">
              <span>Destinations</span>
              <span className="font-semibold text-gray-900">
                {Object.values(content.destinationsData).flat().length}
              </span>
            </li>
            <li className="flex justify-between">
              <span>Experiences</span>
              <span className="font-semibold text-gray-900">{content.experiencesData.length}</span>
            </li>
            <li className="flex justify-between">
              <span>Testimonials</span>
              <span className="font-semibold text-gray-900">{content.testimonialsData.length}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
