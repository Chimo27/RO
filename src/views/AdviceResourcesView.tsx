import React, { useState } from 'react';
import { AdviceGuide, DownloadableResource, ViewMode } from '../types';

interface AdviceResourcesViewProps {
  adviceGuides: AdviceGuide[];
  resources: DownloadableResource[];
  onSelectGuide: (guideId: string) => void;
  onOpenResource: (resource: DownloadableResource) => void;
  onOpenProposal: () => void;
  onNavigate: (view: ViewMode) => void;
  onDownload: (title: string) => void;
  bookmarkedGuideIds: string[];
  onToggleBookmark: (guideId: string) => void;
}

export const AdviceResourcesView: React.FC<AdviceResourcesViewProps> = ({
  adviceGuides,
  resources,
  onSelectGuide,
  onOpenResource,
  onOpenProposal,
  onNavigate,
  onDownload,
  bookmarkedGuideIds,
  onToggleBookmark,
}) => {
  const [viewTab, setViewTab] = useState<'all' | 'guides' | 'resources'>('all');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'method' | 'exam' | 'sheet'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const q = searchQuery.toLowerCase().trim();

  const filteredGuides = adviceGuides.filter((g) => {
    const matchesCat = categoryFilter === 'all' || categoryFilter === 'method';
    const matchesSearch =
      !q ||
      g.title.toLowerCase().includes(q) ||
      g.summary.toLowerCase().includes(q) ||
      g.categoryLabel.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  const filteredResources = resources.filter((r) => {
    const matchesCat =
      categoryFilter === 'all' ||
      (categoryFilter === 'exam' && r.category === 'exam') ||
      (categoryFilter === 'sheet' && r.category === 'sheet');
    const matchesSearch =
      !q ||
      r.title.toLowerCase().includes(q) ||
      r.typeDesc.toLowerCase().includes(q) ||
      (r.moduleCode && r.moduleCode.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  const showSectionA = viewTab === 'all' || viewTab === 'guides';
  const showSectionB = viewTab === 'all' || viewTab === 'resources';

  return (
    <div className="flex flex-col w-full">
      {/* Subtle decorative ambient backdrop */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 right-12 w-96 h-96 rounded-full bg-primary-fixed/30 blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute top-80 -left-20 w-80 h-80 rounded-full bg-secondary-fixed/40 blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-space-lg pb-space-xl">
          {/* Breadcrumbs & Meta Tag */}
          <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md">
            <nav className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
              <button
                onClick={() => onNavigate('accueil')}
                className="hover:text-primary transition-colors cursor-pointer focus:outline-none"
              >
                Accueil
              </button>
              <span className="text-outline-variant">/</span>
              <span className="text-on-surface font-semibold">Conseils et ressources</span>
            </nav>

            <div className="flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span>Actualisé pour la promo S5 • 2024-2025</span>
            </div>
          </div>

          {/* Header Section */}
          <div className="max-w-3xl mb-space-xl">
            <div className="inline-flex items-center gap-space-xs text-primary font-label-md text-label-md tracking-wider uppercase mb-space-xs font-semibold">
              <span className="material-symbols-outlined text-[18px]">school</span>
              <span>Boîte à Outils Étudiante</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mb-space-sm">
              Conseils méthodologiques & Ressources pédagogiques
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Retrouve ici les méthodes de travail pour aborder le Semestre 5, ainsi que l'ensemble des polycopiés, annales d'examens et fiches de synthèse partagées par les étudiants.
            </p>
          </div>

          {/* Segmented View Controller & Realtime Filter Bar */}
          <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-xs border border-surface-container mb-space-xl space-y-space-md">
            {/* Tab Pill Switcher */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
              <div className="inline-flex p-1 bg-surface-container rounded-xl self-start">
                <button
                  type="button"
                  onClick={() => setViewTab('all')}
                  className={`px-space-md py-1.5 rounded-lg font-label-md text-label-md transition-all flex items-center gap-1.5 cursor-pointer ${
                    viewTab === 'all'
                      ? 'bg-surface-container-lowest text-primary shadow-xs font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">view_quilt</span>
                  <span>Vue globale ({adviceGuides.length + resources.length})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewTab('guides')}
                  className={`px-space-md py-1.5 rounded-lg font-label-md text-label-md transition-all flex items-center gap-1.5 cursor-pointer ${
                    viewTab === 'guides'
                      ? 'bg-surface-container-lowest text-primary shadow-xs font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">menu_book</span>
                  <span>Conseils méthodologiques ({adviceGuides.length})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewTab('resources')}
                  className={`px-space-md py-1.5 rounded-lg font-label-md text-label-md transition-all flex items-center gap-1.5 cursor-pointer ${
                    viewTab === 'resources'
                      ? 'bg-surface-container-lowest text-primary shadow-xs font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">folder_open</span>
                  <span>Ressources & Annales ({resources.length})</span>
                </button>
              </div>

              {/* Quick Metrics Bar */}
              <div className="hidden md:flex items-center gap-space-lg text-on-surface-variant font-label-sm text-label-sm">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-primary">verified</span>
                  4 validés enseignants
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-secondary">group</span>
                  7 retours de pairs
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">timer</span>
                  24 min lecture totale
                </span>
              </div>
            </div>

            {/* Search & Filter Badges */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-space-md pt-space-xs">
              {/* Search Input */}
              <div className="relative flex-1">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px] pointer-events-none">
                  search
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher un conseil, une annale, une fiche de révision, un mot-clé..."
                  className="w-full h-10 pl-10 pr-space-md bg-surface-container-low rounded-xl text-on-surface font-body-sm text-body-sm placeholder:text-outline border border-surface-container focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap items-center gap-space-xs">
                <button
                  type="button"
                  onClick={() => setCategoryFilter('all')}
                  className={`px-space-md py-1.5 rounded-full font-label-sm text-label-sm transition-all cursor-pointer ${
                    categoryFilter === 'all'
                      ? 'bg-primary text-on-primary font-semibold'
                      : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                  }`}
                >
                  Tous ({adviceGuides.length + resources.length})
                </button>
                <button
                  type="button"
                  onClick={() => setCategoryFilter('method')}
                  className={`px-space-md py-1.5 rounded-full font-label-sm text-label-sm transition-all cursor-pointer ${
                    categoryFilter === 'method'
                      ? 'bg-primary text-on-primary font-semibold'
                      : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                  }`}
                >
                  Conseils pratiques (5)
                </button>
                <button
                  type="button"
                  onClick={() => setCategoryFilter('exam')}
                  className={`px-space-md py-1.5 rounded-full font-label-sm text-label-sm transition-all cursor-pointer ${
                    categoryFilter === 'exam'
                      ? 'bg-primary text-on-primary font-semibold'
                      : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                  }`}
                >
                  Annales & Examens (4)
                </button>
                <button
                  type="button"
                  onClick={() => setCategoryFilter('sheet')}
                  className={`px-space-md py-1.5 rounded-full font-label-sm text-label-sm transition-all cursor-pointer ${
                    categoryFilter === 'sheet'
                      ? 'bg-primary text-on-primary font-semibold'
                      : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                  }`}
                >
                  Fiches de synthèse (3)
                </button>
              </div>
            </div>
          </div>

          {/* SECTION A: Conseils pratiques pour réussir son S5 */}
          {showSectionA && (
            <section className="mb-space-xl">
              <div className="flex items-center justify-between mb-space-lg">
                <div>
                  <div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm font-semibold tracking-wider uppercase mb-1">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Section A • Pédagogie & Rigueur
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    Conseils pratiques pour réussir son S5
                  </h2>
                </div>
                <span className="hidden sm:inline-block font-label-sm text-label-sm text-on-surface-variant bg-surface-container-high px-space-sm py-1 rounded-full font-semibold">
                  {filteredGuides.length} guide{filteredGuides.length > 1 ? 's' : ''} disponible{filteredGuides.length > 1 ? 's' : ''}
                </span>
              </div>

              {filteredGuides.length === 0 ? (
                <div className="p-8 text-center bg-surface-container-lowest rounded-xl border border-surface-container text-outline">
                  Aucun guide correspondant à cette recherche.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
                  {filteredGuides.map((guide, idx) => {
                    const isBookmarked = bookmarkedGuideIds.includes(guide.id);
                    const isWide = idx === 4; // Card 5 spans 2 columns on lg

                    return (
                      <article
                        key={guide.id}
                        className={`group bg-surface-container-lowest rounded-2xl p-space-lg shadow-xs hover:shadow-md border border-surface-container-high/60 hover:border-primary/40 hover:-translate-y-0.5 transition-all flex flex-col justify-between relative overflow-hidden ${
                          isWide ? 'lg:col-span-2' : ''
                        }`}
                      >
                        {isWide && (
                          <div className="absolute right-0 top-0 w-48 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none hidden sm:block"></div>
                        )}

                        <div>
                          <div className="flex items-center justify-between gap-space-xs mb-space-md">
                            <span
                              className={`px-space-sm py-0.5 rounded-full ${guide.categoryPillBg} ${guide.categoryPillText} font-label-sm text-label-sm font-semibold`}
                            >
                              {guide.categoryLabel}
                            </span>
                            <span className="font-label-sm text-label-sm text-outline flex items-center gap-1">
                              <span className="material-symbols-outlined text-[14px]">schedule</span>
                              {guide.readTime}
                            </span>
                          </div>

                          <h3
                            onClick={() => onSelectGuide(guide.id)}
                            className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors mb-space-sm cursor-pointer"
                          >
                            {guide.title}
                          </h3>

                          <p className={`font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md ${isWide ? 'max-w-2xl' : ''}`}>
                            {guide.summary}
                          </p>

                          {/* Specific highlight badge */}
                          {guide.badge.type === 'formula' && (
                            <div className="bg-surface-container-low rounded-lg p-space-xs px-space-sm mb-space-md flex items-center gap-space-xs text-outline font-label-sm text-label-sm font-mono border border-surface-container">
                              <span className="text-primary font-semibold">{guide.badge.label}</span>
                              <span className="truncate">{guide.badge.value}</span>
                            </div>
                          )}

                          {guide.badge.type === 'rule' && (
                            <div className="bg-surface-container-low rounded-lg p-space-xs px-space-sm mb-space-md flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm border border-surface-container">
                              <span className="material-symbols-outlined text-[16px] text-secondary">tips_and_updates</span>
                              <span>{guide.badge.value}</span>
                            </div>
                          )}

                          {guide.badge.type === 'planning' && (
                            <div className="bg-surface-container-low rounded-lg p-space-xs px-space-sm mb-space-md flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm border border-surface-container">
                              <span className="material-symbols-outlined text-[16px] text-primary">event_repeat</span>
                              <span>{guide.badge.value}</span>
                            </div>
                          )}

                          {guide.badge.type === 'feynman' && (
                            <div className="bg-surface-container-low rounded-lg p-space-xs px-space-sm mb-space-md flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm border border-surface-container">
                              <span className="material-symbols-outlined text-[16px] text-secondary">psychology</span>
                              <span>{guide.badge.value}</span>
                            </div>
                          )}

                          {guide.badge.type === 'team' && (
                            <div className="flex flex-wrap items-center gap-space-md mb-space-md">
                              <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm bg-surface-container-low px-space-sm py-1 rounded-lg border border-surface-container">
                                <span className="material-symbols-outlined text-[16px] text-primary">groups</span>
                                Projets d'équipe : matrice RACI
                              </div>
                              <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm bg-surface-container-low px-space-sm py-1 rounded-lg border border-surface-container">
                                <span className="material-symbols-outlined text-[16px] text-secondary">fitness_center</span>
                                Hygiène de vie & sommeil
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="pt-space-md flex items-center justify-between text-primary font-label-md text-label-md font-semibold border-t border-surface-container/60">
                          <button
                            type="button"
                            onClick={() => onSelectGuide(guide.id)}
                            className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 cursor-pointer"
                          >
                            <span>{isWide ? 'Lire le guide complet' : 'Lire le guide'}</span>
                            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => onToggleBookmark(guide.id)}
                            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                              isBookmarked
                                ? 'text-primary bg-primary-fixed'
                                : 'text-outline-variant hover:text-primary hover:bg-surface-container'
                            }`}
                            title={isBookmarked ? 'Retirer des favoris' : 'Enregistrer'}
                          >
                            <span className="material-symbols-outlined text-[20px]">
                              {isBookmarked ? 'bookmark' : 'bookmark_border'}
                            </span>
                          </button>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </section>
          )}

          {/* SECTION B: Ressources pédagogiques téléchargeables */}
          {showSectionB && (
            <section className="mb-space-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm mb-space-lg">
                <div>
                  <div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm font-semibold tracking-wider uppercase mb-1">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    Section B • Documents & Supports
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    Ressources pédagogiques téléchargeables
                  </h2>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-high px-space-sm py-1 rounded-full self-start sm:self-auto font-semibold">
                  {filteredResources.length} fichier{filteredResources.length > 1 ? 's' : ''} indexé{filteredResources.length > 1 ? 's' : ''}
                </span>
              </div>

              {filteredResources.length === 0 ? (
                <div className="p-8 text-center bg-surface-container-lowest rounded-xl border border-surface-container text-outline">
                  Aucun fichier correspondant à cette recherche.
                </div>
              ) : (
                <div className="bg-surface-container-lowest rounded-2xl shadow-xs border border-surface-container overflow-hidden divide-y divide-surface-container-high/40">
                  {filteredResources.map((res) => (
                    <div
                      key={res.id}
                      className="p-space-md lg:p-space-lg hover:bg-surface-container-low/60 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-space-md"
                    >
                      <div className="flex items-start gap-space-md min-w-0">
                        <div
                          className={`w-10 h-10 rounded-xl ${res.iconBg} ${res.iconText} flex items-center justify-center shrink-0 shadow-xs`}
                        >
                          <span className="material-symbols-outlined text-[22px]">{res.icon}</span>
                        </div>
                        <div className="min-w-0 space-y-1">
                          <div className="flex flex-wrap items-center gap-space-xs">
                            <h4
                              onClick={() => onOpenResource(res)}
                              className="font-headline-sm text-headline-sm text-on-surface truncate cursor-pointer hover:text-primary transition-colors"
                            >
                              {res.title}
                            </h4>
                            <span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-semibold shrink-0">
                              <span className="material-symbols-outlined text-[14px]">
                                {res.badgeType === 'verified' ? 'verified' : res.badgeType === 'official' ? 'policy' : 'handshake'}
                              </span>
                              {res.badgeLabel}
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-x-space-md gap-y-1 font-label-sm text-label-sm text-on-surface-variant">
                            <span className="font-mono text-outline">{res.format} ({res.size})</span>
                            <span>•</span>
                            <span>{res.typeDesc}</span>
                            <span>•</span>
                            <span className="text-outline">{res.extraMeta}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-space-sm shrink-0 self-end md:self-center">
                        <button
                          type="button"
                          onClick={() => onOpenResource(res)}
                          className="px-space-md py-2 rounded-xl bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[16px]">visibility</span>
                          <span>Consulter {res.category === 'sheet' ? 'la fiche' : 'le document'}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => onDownload(res.title)}
                          className="w-9 h-9 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant flex items-center justify-center transition-all cursor-pointer border border-surface-container"
                          title="Télécharger"
                        >
                          <span className="material-symbols-outlined text-[18px]">download</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* Collaborative Contribution Callout Banner */}
          <aside className="relative overflow-hidden bg-primary rounded-2xl p-space-lg lg:p-space-xl text-on-primary shadow-md">
            {/* Abstract geometry highlight */}
            <div className="absolute -right-8 -bottom-8 w-64 h-64 rounded-full bg-secondary/30 blur-2xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-space-lg">
              <div className="max-w-2xl space-y-space-xs">
                <div className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[14px]">volunteer_activism</span>
                  Plateforme Ouverte & Solidaire
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-primary tracking-tight">
                  Tu disposes d'une fiche de révision claire ou d'un corrigé propre ?
                </h3>
                <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
                  Contribue à enrichir S5 Compass pour les futures promotions. Chaque ressource partagée fait l'objet d'une relecture collégiale avant mise en ligne.
                </p>
              </div>

              <div className="shrink-0">
                <button
                  type="button"
                  onClick={onOpenProposal}
                  className="px-space-lg py-3 rounded-xl bg-surface-container-lowest text-primary hover:bg-surface-container-low font-headline-sm text-headline-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">upload_file</span>
                  <span>Proposer une ressource</span>
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
