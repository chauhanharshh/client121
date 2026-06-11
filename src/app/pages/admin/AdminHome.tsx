import { useCMS } from "../../context/CMSContext";

export default function AdminHome() {
  const { content, updateContent } = useCMS();
  const home = content.home;

  const handleHeroChange = (field: string, value: string) => {
    updateContent({
      ...content,
      home: {
        ...content.home,
        hero: {
          ...content.home.hero,
          [field]: value
        }
      }
    });
  };

  const handleWhyChange = (field: string, value: string) => {
    updateContent({
      ...content,
      home: {
        ...content.home,
        why: {
          ...content.home.why,
          [field]: value
        }
      }
    });
  };

  const handleWhyCardChange = (index: number, field: string, value: string) => {
    const newCards = [...content.home.why.cards];
    newCards[index] = { ...newCards[index], [field]: value };
    updateContent({
      ...content,
      home: {
        ...content.home,
        why: {
          ...content.home.why,
          cards: newCards
        }
      }
    });
  };

  const handleStoryChange = (field: string, value: string) => {
    updateContent({
      ...content,
      home: {
        ...content.home,
        ourStory: {
          ...content.home.ourStory,
          [field]: value
        }
      }
    });
  };

  const handleCTAChange = (field: string, value: string) => {
    updateContent({
      ...content,
      home: {
        ...content.home,
        cta: {
          ...content.home.cta,
          [field]: value
        }
      }
    });
  };

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Home Page Settings</h2>
        <p className="mt-1 text-sm text-gray-500">
          Manage the content of the home page sections: Hero, Why Choose Us, Our Story, and Call to Action.
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6 space-y-6">
        <h3 className="text-lg font-medium text-gray-900 border-b pb-4 mb-4">Hero Section</h3>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Subtitle</label>
            <input
              type="text"
              value={home.hero.subtitle}
              onChange={(e) => handleHeroChange("subtitle", e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title Part 1</label>
              <input
                type="text"
                value={home.hero.title1}
                onChange={(e) => handleHeroChange("title1", e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Title Highlight</label>
              <input
                type="text"
                value={home.hero.titleHighlight}
                onChange={(e) => handleHeroChange("titleHighlight", e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Title Part 2</label>
              <input
                type="text"
                value={home.hero.title2}
                onChange={(e) => handleHeroChange("title2", e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={home.hero.description}
              onChange={(e) => handleHeroChange("description", e.target.value)}
              rows={2}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Background Image URL</label>
            <input
              type="text"
              value={home.hero.image}
              onChange={(e) => handleHeroChange("image", e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6 space-y-6">
        <h3 className="text-lg font-medium text-gray-900 border-b pb-4 mb-4">Why Choose Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Subtitle</label>
            <input
              type="text"
              value={home.why.subtitle}
              onChange={(e) => handleWhyChange("subtitle", e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={home.why.title}
              onChange={(e) => handleWhyChange("title", e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="space-y-4 pt-4">
          <h4 className="text-md font-medium text-gray-700">Cards</h4>
          {home.why.cards.map((card, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-md">
              <div>
                <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Card {i + 1} Title</label>
                <input
                  type="text"
                  value={card.title}
                  onChange={(e) => handleWhyCardChange(i, "title", e.target.value)}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Card {i + 1} Description</label>
                <textarea
                  value={card.description}
                  onChange={(e) => handleWhyCardChange(i, "description", e.target.value)}
                  rows={2}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story */}
      <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6 space-y-6">
        <h3 className="text-lg font-medium text-gray-900 border-b pb-4 mb-4">Our Story Section</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Subtitle</label>
            <input
              type="text"
              value={home.ourStory.subtitle}
              onChange={(e) => handleStoryChange("subtitle", e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div></div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Title Part 1</label>
            <input
              type="text"
              value={home.ourStory.title1}
              onChange={(e) => handleStoryChange("title1", e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Title Part 2</label>
            <input
              type="text"
              value={home.ourStory.title2}
              onChange={(e) => handleStoryChange("title2", e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Paragraph 1</label>
            <textarea
              value={home.ourStory.p1}
              onChange={(e) => handleStoryChange("p1", e.target.value)}
              rows={4}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Paragraph 2</label>
            <textarea
              value={home.ourStory.p2}
              onChange={(e) => handleStoryChange("p2", e.target.value)}
              rows={4}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              value={home.ourStory.image}
              onChange={(e) => handleStoryChange("image", e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6 space-y-6">
        <h3 className="text-lg font-medium text-gray-900 border-b pb-4 mb-4">Call To Action</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Subtitle</label>
            <input
              type="text"
              value={home.cta.subtitle}
              onChange={(e) => handleCTAChange("subtitle", e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={home.cta.title}
              onChange={(e) => handleCTAChange("title", e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={home.cta.description}
              onChange={(e) => handleCTAChange("description", e.target.value)}
              rows={2}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Background Image URL</label>
            <input
              type="text"
              value={home.cta.image}
              onChange={(e) => handleCTAChange("image", e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
