import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { initialSiteContent } from "../data/initialContent";

export type SiteContent = typeof initialSiteContent;

interface CMSContextType {
  content: SiteContent;
  updateContent: (newContent: SiteContent) => void;
  updateHomeHero: (data: Partial<SiteContent["home"]["hero"]>) => void;
  // ... can add more specific updaters later if needed
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export function CMSProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(initialSiteContent);

  useEffect(() => {
    // Fetch initial content from backend
    fetch("/api/content")
      .then(res => {
        if (!res.ok) throw new Error("Content not found");
        return res.json();
      })
      .then(parsed => {
        setContent({
          ...initialSiteContent,
          ...parsed,
          // Ensure new fields added in later versions don't crash the app
          global: parsed.global || initialSiteContent.global,
          aboutPage: parsed.aboutPage || initialSiteContent.aboutPage,
          destinationsPage: parsed.destinationsPage || initialSiteContent.destinationsPage,
          experiencesPage: parsed.experiencesPage || initialSiteContent.experiencesPage,
          contactPage: parsed.contactPage || initialSiteContent.contactPage,
          featuredJourneysData: parsed.featuredJourneysData?.length >= 10 
            ? parsed.featuredJourneysData 
            : initialSiteContent.featuredJourneysData,
        });
      })
      .catch(e => {
        console.error("Failed to fetch CMS content from API, falling back to initial", e);
      });
  }, []);

  useEffect(() => {
    // We only want to inject CSS variables when content updates.
    // Saving to backend happens explicitly in updateContent.
    if (content.theme && content.theme.colors) {
      const root = document.documentElement;
      root.style.setProperty('--color-bg', content.theme.colors.background);
      root.style.setProperty('--color-bg-dark', content.theme.colors.backgroundDark);
      root.style.setProperty('--color-bg-light', content.theme.colors.backgroundLight);
      root.style.setProperty('--color-text-primary', content.theme.colors.textPrimary);
      root.style.setProperty('--color-text-inverse', content.theme.colors.textInverse);
      root.style.setProperty('--color-accent-primary', content.theme.colors.accentPrimary);
      root.style.setProperty('--color-accent-secondary', content.theme.colors.accentSecondary);
    }
  }, [content]);

  const updateContent = async (newContent: SiteContent) => {
    // Optimistic update
    setContent(newContent);
    // Push to backend
    try {
      await fetch("/api/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newContent)
      });
    } catch (err) {
      console.error("Failed to push content to backend", err);
    }
  };

  const updateHomeHero = (data: Partial<SiteContent["home"]["hero"]>) => {
    updateContent({
      ...content,
      home: {
        ...content.home,
        hero: {
          ...content.home.hero,
          ...data
        }
      }
    });
  };

  return (
    <CMSContext.Provider value={{ content, updateContent, updateHomeHero }}>
      {children}
    </CMSContext.Provider>
  );
}

export function useCMS() {
  const context = useContext(CMSContext);
  if (context === undefined) {
    throw new Error("useCMS must be used within a CMSProvider");
  }
  return context;
}
