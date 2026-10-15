import React, { useState, useEffect, useRef } from 'react';
import { CourseModule, AdviceGuide, DownloadableResource, ViewMode } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  modules: CourseModule[];
  guides: AdviceGuide[];
  resources: DownloadableResource[];
  onSelectModule: (moduleId: string) => void;
  onSelectGuide: (guideId: string) => void;
  onSelectResource: (resourceId: string) => void;
  onNavigate: (view: ViewMode) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  modules,
  guides,
  resources,
  onSelectModule,
  onSelectGuide,
  onSelectResource,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Trigger handled outside
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalized = query.toLowerCase().trim();

  const filteredModules = modules.filter(
    (m) =>
      m.title.toLowerCase().includes(normalized) ||
      m.code.toLowerCase().includes(normalized) ||
      m.keywords.toLowerCase().includes(normalized) ||
      m.skills.some((s) => s.toLowerCase().includes(normalized))
  );

  const filteredGuides = guides.filter(
    (g) =>
      g.title.toLowerCase().includes(normalized) ||
      g.summary.toLowerCase().includes(normalized) ||
      g.categoryLabel.toLowerCase().includes(normalized)
  );

  const filteredResources = resources.filter(
    (r) =>
      r.title.toLowerCase().includes(normalized) ||
      r.typeDesc.toLowerCase().includes(normalized) ||
      (r.moduleCode && r.moduleCode.toLowerCase().includes(normalized))
  );

  const totalResults = filteredModules.length + filteredGuides.length + filteredResources.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="w-full max-w-2xl bg-surface-container-lowest rounded-2xl shadow-2xl border border-surface-container-high overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Box */}
        <div className="flex items-center gap-space-sm px-space-md py-3 border-b border-surface-container-high">
          <span className="material-symbols-outlined text-[22px] text-outline">search</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un module, un concept, une formule, un TP..."
            className="w-full bg-transparent text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded text-outline hover:text-on-surface cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          )}
          <kbd className="px-2 py-0.5 rounded bg-surface-container-low text-outline font-mono text-[11px]">
            ESC
          </kbd>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-space-md space-y-space-md">
          {totalResults === 0 ? (
            <div className="py-12 text-center text-on-surface-variant">
              <span className="material-symbols-outlined text-[36px] text-outline mb-2">search_off</span>
              <p className="font-headline-sm text-headline-sm text-on-surface">Aucun résultat trouvé</p>
              <p className="font-body-sm text-body-sm text-outline mt-1">
                Essaie avec un mot-clé comme "Markov", "Descente de gradient", "Spark", "Lasso" ou "VRP".
              </p>
            </div>
          ) : (
            <>
              {/* Modules Group */}
              {filteredModules.length > 0 && (
                <div>
                  <div className="flex items-center justify-between pb-1 mb-2 border-b border-surface-container-high/40">
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
                      Modules S5 ({filteredModules.length})
                    </span>
                    <button
                      onClick={() => {
                        onNavigate('modules-s5');
                        onClose();
                      }}
                      className="text-[11px] text-primary hover:underline cursor-pointer"
                    >
                      Voir le répertoire
                    </button>
                  </div>
                  <div className="space-y-1">
                    {filteredModules.map((module) => (
                      <button
                        key={module.id}
                        onClick={() => {
                          onSelectModule(module.id);
                          onClose();
                        }}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-surface-container-low text-left transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-mono text-[11px] font-semibold">
                            {module.code}
                          </span>
                          <div>
                            <span className="font-headline-sm text-[14px] text-on-surface group-hover:text-primary transition-colors block">
                              {module.title}
                            </span>
                            <span className="text-[12px] text-on-surface-variant line-clamp-1">
                              {module.shortDescription}
                            </span>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-[16px] text-outline group-hover:text-primary transition-transform group-hover:translate-x-1 shrink-0">
                          arrow_forward
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Advice Guides Group */}
              {filteredGuides.length > 0 && (
                <div>
                  <div className="pb-1 mb-2 border-b border-surface-container-high/40">
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
                      Conseils Méthodologiques ({filteredGuides.length})
                    </span>
                  </div>
                  <div className="space-y-1">
                    {filteredGuides.map((guide) => (
                      <button
                        key={guide.id}
                        onClick={() => {
                          onSelectGuide(guide.id);
                          onClose();
                        }}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-surface-container-low text-left transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-[20px] text-primary">
                            menu_book
                          </span>
                          <div>
                            <span className="font-headline-sm text-[14px] text-on-surface group-hover:text-primary transition-colors block">
                              {guide.title}
                            </span>
                            <span className="text-[12px] text-on-surface-variant">
                              {guide.categoryLabel} • {guide.readTime}
                            </span>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-[16px] text-outline group-hover:text-primary transition-transform group-hover:translate-x-1 shrink-0">
                          arrow_forward
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Resources Group */}
              {filteredResources.length > 0 && (
                <div>
                  <div className="pb-1 mb-2 border-b border-surface-container-high/40">
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
                      Annales & Documents ({filteredResources.length})
                    </span>
                  </div>
                  <div className="space-y-1">
                    {filteredResources.map((res) => (
                      <button
                        key={res.id}
                        onClick={() => {
                          onSelectResource(res.id);
                          onClose();
                        }}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-surface-container-low text-left transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-[20px] text-secondary">
                            {res.icon}
                          </span>
                          <div>
                            <span className="font-headline-sm text-[14px] text-on-surface group-hover:text-secondary transition-colors block">
                              {res.title}
                            </span>
                            <span className="text-[12px] text-on-surface-variant">
                              {res.typeDesc} • {res.size}
                            </span>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-label-sm text-[11px]">
                          {res.badgeLabel}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer shortcuts info */}
        <div className="px-space-md py-2.5 bg-surface-container-low border-t border-surface-container-high/50 flex items-center justify-between text-outline font-label-sm text-label-sm">
          <div className="flex items-center gap-space-sm">
            <span>Navigation instantanée</span>
          </div>
          <div className="flex items-center gap-space-xs">
            <span>Appuie sur</span>
            <kbd className="px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-mono shadow-xs">
              ESC
            </kbd>
            <span>pour fermer</span>
          </div>
        </div>
      </div>
    </div>
  );
};
