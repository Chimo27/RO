import React, { useState, useEffect } from 'react';
import { ViewMode, DownloadableResource } from './types';
import { MODULES_DATA } from './data/modules';
import { ADVICE_GUIDES_DATA } from './data/advice';
import { DOWNLOADABLE_RESOURCES_DATA } from './data/resources';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { ResourceProposalModal } from './components/ResourceProposalModal';
import { DocumentViewerModal } from './components/DocumentViewerModal';
import { ArticleModal } from './components/ArticleModal';
import { LegalModal } from './components/LegalModal';

import { HomeView } from './views/HomeView';
import { ModulesView } from './views/ModulesView';
import { ModuleDetailView } from './views/ModuleDetailView';
import { AdviceResourcesView } from './views/AdviceResourcesView';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('accueil');
  const [selectedModuleId, setSelectedModuleId] = useState<string>('ro-501');

  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProposalOpen, setIsProposalOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [activeGuideId, setActiveGuideId] = useState<string | null>(null);
  const [activeResource, setActiveResource] = useState<DownloadableResource | null>(null);

  // Bookmarks & Toast state
  const [bookmarkedGuideIds, setBookmarkedGuideIds] = useState<string[]>(['guide-notes']);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Synchronize with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('module/')) {
        const modId = hash.replace('module/', '');
        const exists = MODULES_DATA.find((m) => m.id === modId);
        if (exists) {
          setSelectedModuleId(modId);
          setCurrentView('module-detail');
          return;
        }
      }
      if (hash === 'modules-s5') {
        setCurrentView('modules-s5');
      } else if (hash === 'conseils-et-ressources' || hash === 'guide-detude') {
        setCurrentView('conseils-et-ressources');
      } else if (hash === 'accueil' || !hash) {
        setCurrentView('accueil');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view: ViewMode, moduleId?: string) => {
    setCurrentView(view);
    if (view === 'module-detail' && moduleId) {
      setSelectedModuleId(moduleId);
      window.location.hash = `module/${moduleId}`;
    } else if (view === 'accueil') {
      window.location.hash = 'accueil';
    } else if (view === 'modules-s5') {
      window.location.hash = 'modules-s5';
    } else if (view === 'conseils-et-ressources') {
      window.location.hash = 'conseils-et-ressources';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectModule = (modId: string) => {
    setSelectedModuleId(modId);
    setCurrentView('module-detail');
    window.location.hash = `module/${modId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3800);
  };

  const handleDownloadSimulation = (title: string) => {
    showToast(`Téléchargement de « ${title} » démarré.`);
  };

  const toggleBookmark = (guideId: string) => {
    if (bookmarkedGuideIds.includes(guideId)) {
      setBookmarkedGuideIds(bookmarkedGuideIds.filter((id) => id !== guideId));
      showToast('Guide retiré de vos favoris.');
    } else {
      setBookmarkedGuideIds([...bookmarkedGuideIds, guideId]);
      showToast('Guide ajouté à vos favoris de révision !');
    }
  };

  const currentModule =
    MODULES_DATA.find((m) => m.id === selectedModuleId) || MODULES_DATA[0];

  const currentGuide =
    ADVICE_GUIDES_DATA.find((g) => g.id === activeGuideId) || null;

  return (
    <div className="min-h-screen flex flex-col bg-surface font-body-md text-body-md text-on-surface">
      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-surface-container-highest/95 backdrop-blur-md text-on-surface shadow-xl border border-surface-container-high animate-in slide-in-from-bottom duration-200">
          <span className="material-symbols-outlined text-primary text-[20px]">
            check_circle
          </span>
          <span className="font-headline-sm text-[13px]">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="p-1 rounded text-outline hover:text-on-surface cursor-pointer ml-2"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>
      )}

      {/* Persistent Navigation Header */}
      <Header
        currentView={currentView}
        onNavigate={navigateTo}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main View Router */}
      <main className="w-full pt-16 flex-1">
        {currentView === 'accueil' && (
          <HomeView
            modules={MODULES_DATA}
            adviceGuides={ADVICE_GUIDES_DATA}
            onSelectModule={handleSelectModule}
            onSelectGuide={(id) => setActiveGuideId(id)}
            onNavigate={navigateTo}
            onOpenProposal={() => setIsProposalOpen(true)}
          />
        )}

        {currentView === 'modules-s5' && (
          <ModulesView
            modules={MODULES_DATA}
            onSelectModule={handleSelectModule}
            onNavigate={navigateTo}
          />
        )}

        {currentView === 'module-detail' && (
          <ModuleDetailView
            module={currentModule}
            allModules={MODULES_DATA}
            onSelectModule={handleSelectModule}
            onNavigate={navigateTo}
            onOpenResource={(res) => setActiveResource(res)}
            onOpenProposal={() => setIsProposalOpen(true)}
          />
        )}

        {currentView === 'conseils-et-ressources' && (
          <AdviceResourcesView
            adviceGuides={ADVICE_GUIDES_DATA}
            resources={DOWNLOADABLE_RESOURCES_DATA}
            onSelectGuide={(id) => setActiveGuideId(id)}
            onOpenResource={(res) => setActiveResource(res)}
            onOpenProposal={() => setIsProposalOpen(true)}
            onNavigate={navigateTo}
            onDownload={handleDownloadSimulation}
            bookmarkedGuideIds={bookmarkedGuideIds}
            onToggleBookmark={toggleBookmark}
          />
        )}
      </main>

      {/* Persistent Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenProposal={() => setIsProposalOpen(true)}
        onOpenLegal={() => setIsLegalOpen(true)}
      />

      {/* Modals & Overlays */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        modules={MODULES_DATA}
        guides={ADVICE_GUIDES_DATA}
        resources={DOWNLOADABLE_RESOURCES_DATA}
        onSelectModule={handleSelectModule}
        onSelectGuide={(id) => setActiveGuideId(id)}
        onSelectResource={(id) => {
          const res = DOWNLOADABLE_RESOURCES_DATA.find((r) => r.id === id);
          if (res) setActiveResource(res);
        }}
        onNavigate={navigateTo}
      />

      <ResourceProposalModal
        isOpen={isProposalOpen}
        onClose={() => setIsProposalOpen(false)}
        modules={MODULES_DATA}
        onSuccess={showToast}
      />

      <DocumentViewerModal
        resource={activeResource}
        onClose={() => setActiveResource(null)}
        onDownload={handleDownloadSimulation}
      />

      <ArticleModal
        guide={currentGuide}
        onClose={() => setActiveGuideId(null)}
        onBookmarkToggle={toggleBookmark}
        isBookmarked={activeGuideId ? bookmarkedGuideIds.includes(activeGuideId) : false}
      />

      <LegalModal
        isOpen={isLegalOpen}
        onClose={() => setIsLegalOpen(false)}
      />
    </div>
  );
}
