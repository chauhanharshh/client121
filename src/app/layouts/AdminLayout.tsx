import { Outlet, Link, useLocation } from "react-router";
import { LayoutDashboard, Home, Map, Compass, Info, MessageSquare, Settings, Palette, FileText, Users, Phone } from "lucide-react";

export default function AdminLayout() {
  const location = useLocation();

  const navItems = [
    { name: "Global Settings", path: "/admin/global", icon: <FileText size={20} /> },
    { name: "Theme Settings", path: "/admin/theme", icon: <Palette size={20} /> },
    { name: "Home Page", path: "/admin/home", icon: <Home size={20} /> },
    { name: "Destinations", path: "/admin/destinations", icon: <Map size={20} /> },
    { name: "Experiences", path: "/admin/experiences", icon: <Compass size={20} /> },
    { name: "About Page", path: "/admin/about", icon: <Info size={20} /> },
    { name: "Contact Page", path: "/admin/contact", icon: <MessageSquare size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-[#F3F4F6] text-gray-900 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <h1 className="text-xl font-bold tracking-tight text-gray-800">CMS Admin</h1>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== "/admin" && location.pathname.startsWith(item.path));
              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors ${
                      isActive 
                        ? "bg-gray-100 text-gray-900 font-medium" 
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {item.icon}
                    <span className="text-sm">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <Link to="/" className="text-sm text-blue-600 hover:underline flex items-center gap-2">
            <Home size={16} /> Back to Website
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-8 shadow-sm z-10">
          <h2 className="text-lg font-semibold text-gray-800">
            {navItems.find(i => i.path === location.pathname)?.name || "Admin"}
          </h2>
        </header>
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-5xl mx-auto">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
