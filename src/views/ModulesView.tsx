import React, { useState } from 'react';
import { CourseModule, ViewMode } from '../types';

interface ModulesViewProps {
  modules: CourseModule[];
  onSelectModule: (moduleId: string) => void;
  onNavigate: (view: ViewMode) => void;
}

export const ModulesView: React.FC<ModulesViewProps> = ({
  modules,
  onSelectModule,
  onNavigate,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [onlyVerified, setOnlyVerified] = useState<boolean>(false);
  const [highlightedCode, setHighlightedCode] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Tous les modules (7)' },
    { id: 'optimisation', label: 'Optimisation & Métaheuristiques (1)' },
    { id: 'ia', label: 'Intelligence Artificielle & ML (2)' },
    { id: 'stats', label: 'Statistique & Probabilités (2)' },
    { id: 'bigdata', label: 'Big Data & Systèmes (1)' },
    { id: 'seminar', label: 'Séminaires (1)' },
  ];

  const filteredModules = modules.filter((mod) => {
    const matchesCategory =
      selectedCategory === 'all' || mod.category === selectedCategory;
    const matchesVerified = !onlyVerified || mod.verified;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      mod.title.toLowerCase().includes(q) ||
      mod.code.toLowerCase().includes(q) ||
      mod.keywords.toLowerCase().includes(q) ||
      mod.skills.some((s) => s.toLowerCase().includes(q));

    return matchesCategory && matchesVerified && matchesSearch;
  });

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setOnlyVerified(false);
    setHighlightedCode(null);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-lg sm:py-space-xl">
      {/* Top Editorial Header & Breadcrumb */}
      <section className="space-y-space-md mb-space-lg">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md"
        >
          <button
            onClick={() => onNavigate('accueil')}
            className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer focus:outline-none"
          >
            <span className="material-symbols-outlined text-[16px]">home</span>
            <span>Accueil</span>
          </button>
          <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
          <span className="text-on-surface font-semibold">Modules S5</span>
        </nav>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
          <div className="max-w-3xl space-y-space-xs">
            <div className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              Semestre 5 • 7 Modules obligatoires & électifs répertoriés
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              Répertoire des Modules du Semestre 5
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Consulte le programme complet des cours de Recherche Opérationnelle & Science de la Décision. Chaque fiche détaille les prérequis, les concepts-clés, la méthodologie de révision et les ressources d'annales vérifiées.
            </p>
          </div>

          {/* Metric pill summary */}
          <div className="flex items-center gap-space-sm bg-surface-container-low p-space-sm rounded-2xl border border-surface-container shrink-0">
            <div className="px-space-md py-space-xs bg-surface-container-lowest rounded-xl shadow-xs text-center min-w-[72px]">
              <span className="block font-headline-sm text-headline-sm text-primary font-bold">23</span>
              <span className="block font-label-sm text-[10px] text-outline uppercase tracking-wider">
                ECTS Total
              </span>
            </div>
            <div className="px-space-md py-space-xs bg-surface-container-lowest rounded-xl shadow-xs text-center min-w-[72px]">
              <span className="block font-headline-sm text-headline-sm text-secondary font-bold">7</span>
              <span className="block font-label-sm text-[10px] text-outline uppercase tracking-wider">
                Fiches Cours
              </span>
            </div>
            <div className="px-space-md py-space-xs bg-surface-container-lowest rounded-xl shadow-xs text-center min-w-[72px]">
              <span className="block font-headline-sm text-headline-sm text-tertiary font-bold">100%</span>
              <span className="block font-label-sm text-[10px] text-outline uppercase tracking-wider">
                Ressources
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Controls */}
      <section aria-label="Barre de filtre et recherche" className="space-y-space-md mb-space-lg">
        <div className="flex flex-col sm:flex-row items-stretch gap-space-sm">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px] pointer-events-none">
              search
            </span>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher par mot-clé (ex: Markov, Descente de gradient, Spark, Lasso...)"
              className="w-full h-11 pl-11 pr-4 bg-surface-container-lowest text-on-surface rounded-xl placeholder:text-outline font-body-md text-body-md shadow-xs border border-surface-container focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <button
            type="button"
            onClick={() => setOnlyVerified(!onlyVerified)}
            className={`inline-flex items-center justify-center gap-space-xs h-11 px-space-md rounded-xl font-body-sm text-body-sm shadow-xs border transition-all cursor-pointer ${
              onlyVerified
                ? 'bg-primary-fixed text-on-primary-fixed border-primary/30 font-semibold'
                : 'bg-surface-container-lowest text-on-surface-variant border-surface-container hover:bg-surface-container-low'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">verified</span>
            <span>Disponibilité des ressources (Annales, Fiches, TD)</span>
            <span
              className={`w-2 h-2 rounded-full transition-colors ${
                onlyVerified ? 'bg-primary' : 'bg-outline-variant'
              }`}
            ></span>
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-space-xs overflow-x-auto pb-1 -mx-margin-mobile px-margin-mobile sm:mx-0 sm:px-0 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                type="button"
                className={`shrink-0 inline-flex items-center h-8 px-space-md rounded-full font-label-md text-label-md transition-all cursor-pointer ${
                  isActive
                    ? 'bg-primary text-on-primary shadow-xs font-semibold'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Visual Knowledge Summary Graphic */}
      <div className="mb-space-lg p-space-md rounded-2xl bg-surface-container-low shadow-xs border border-surface-container flex flex-col md:flex-row items-center justify-between gap-space-md">
        <div className="space-y-space-xs text-left max-w-xl">
          <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
            Architecture du Tronc Commun
          </span>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">
            Piliers théoriques & Méthodologiques S5
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            L'interconnexion entre modélisation stochastique, optimisation combinatoire et calcul massif forme le socle de la décision algorithmique moderne.
          </p>
        </div>

        {/* Interactive Connected Graph SVG */}
        <div className="shrink-0 w-full sm:w-80 h-20 bg-surface-container-lowest rounded-xl p-2 shadow-xs border border-surface-container flex items-center justify-center">
          <svg className="w-full h-full" fill="none" viewBox="0 0 320 64" xmlns="http://www.w3.org/2000/svg">
            <line
              className="text-surface-dim"
              stroke="currentColor"
              strokeDasharray="3 3"
              strokeWidth="2"
              x1="45"
              x2="115"
              y1="32"
              y2="32"
            />
            <line
              className="text-surface-dim"
              stroke="currentColor"
              strokeWidth="2"
              x1="125"
              x2="195"
              y1="32"
              y2="32"
            />
            <line
              className="text-surface-dim"
              stroke="currentColor"
              strokeDasharray="3 3"
              strokeWidth="2"
              x1="205"
              x2="275"
              y1="32"
              y2="32"
            />

            {/* Node 1: RO-501 */}
            <g
              className="cursor-pointer group/node"
              onClick={() => onSelectModule('ro-501')}
              onMouseEnter={() => setHighlightedCode('RO-501')}
              onMouseLeave={() => setHighlightedCode(null)}
            >
              <circle
                className="fill-primary-fixed group-hover/node:fill-primary transition-colors"
                cx="35"
                cy="32"
                r="15"
              />
              <text
                className="fill-on-primary-fixed group-hover/node:fill-on-primary transition-colors"
                fontFamily="Inter"
                fontSize="9"
                fontWeight="600"
                textAnchor="middle"
                x="35"
                y="36"
              >
                RO-501
              </text>
            </g>

            {/* Node 2: RO-502 */}
            <g
              className="cursor-pointer group/node"
              onClick={() => onSelectModule('ro-502')}
              onMouseEnter={() => setHighlightedCode('RO-502')}
              onMouseLeave={() => setHighlightedCode(null)}
            >
              <circle
                className="fill-secondary-fixed group-hover/node:fill-secondary transition-colors"
                cx="120"
                cy="32"
                r="16"
              />
              <text
                className="fill-on-secondary-fixed group-hover/node:fill-on-secondary transition-colors"
                fontFamily="Inter"
                fontSize="9"
                fontWeight="600"
                textAnchor="middle"
                x="120"
                y="36"
              >
                RO-502
              </text>
            </g>

            {/* Node 3: RO-506 */}
            <g
              className="cursor-pointer group/node"
              onClick={() => onSelectModule('ro-506')}
              onMouseEnter={() => setHighlightedCode('RO-506')}
              onMouseLeave={() => setHighlightedCode(null)}
            >
              <circle
                className="fill-primary-container group-hover/node:fill-primary transition-colors"
                cx="200"
                cy="32"
                r="16"
              />
              <text
                className="fill-on-primary group-hover/node:fill-on-primary transition-colors"
                fontFamily="Inter"
                fontSize="9"
                fontWeight="600"
                textAnchor="middle"
                x="200"
                y="36"
              >
                RO-506
              </text>
            </g>

            {/* Node 4: RO-503 */}
            <g
              className="cursor-pointer group/node"
              onClick={() => onSelectModule('ro-503')}
              onMouseEnter={() => setHighlightedCode('RO-503')}
              onMouseLeave={() => setHighlightedCode(null)}
            >
              <circle
                className="fill-tertiary-fixed group-hover/node:fill-tertiary transition-colors"
                cx="285"
                cy="32"
                r="15"
              />
              <text
                className="fill-on-tertiary-fixed group-hover/node:fill-on-tertiary transition-colors"
                fontFamily="Inter"
                fontSize="9"
                fontWeight="600"
                textAnchor="middle"
                x="285"
                y="36"
              >
                RO-503
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* Active Count Counter */}
      <div className="flex items-center justify-between mb-space-sm">
        <span className="font-label-md text-label-md text-outline">
          Affichage de {filteredModules.length} module{filteredModules.length > 1 ? 's' : ''}
        </span>
        <span className="font-label-sm text-label-sm text-outline">
          Trié par code d'enseignement
        </span>
      </div>

      {/* Directory Grid of Modules */}
      {filteredModules.length === 0 ? (
        /* Empty State */
        <div className="p-space-xl text-center rounded-2xl bg-surface-container-lowest shadow-sm border border-surface-container mb-space-xl">
          <span className="material-symbols-outlined text-[42px] text-outline mb-space-xs block mx-auto">
            search_off
          </span>
          <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">
            Aucun module correspondant
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mx-auto">
            Modifie tes filtres ou essaie un mot-clé plus générique tel que "stochastique", "optimisation" ou "spark".
          </p>
          <button
            onClick={handleResetFilters}
            className="mt-space-md px-space-md py-2 rounded-lg bg-primary text-on-primary font-body-sm text-body-sm hover:bg-primary/90 transition-colors cursor-pointer shadow-xs"
          >
            Réinitialiser la recherche
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md mb-space-xl">
          {filteredModules.map((module) => {
            const isHighlighted = highlightedCode === module.code;

            return (
              <article
                key={module.id}
                onClick={() => onSelectModule(module.id)}
                className={`group flex flex-col justify-between p-space-lg rounded-2xl bg-surface-container-lowest shadow-xs hover:shadow-md border transition-all duration-200 cursor-pointer ${
                  isHighlighted
                    ? 'border-primary ring-2 ring-primary/20 scale-[1.01]'
                    : 'border-surface-container-high/60 hover:border-primary/40'
                }`}
              >
                <div className="space-y-space-md">
                  {/* Top line with Category badge & Code */}
                  <div className="flex items-start justify-between gap-space-xs">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="px-space-xs py-0.5 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                        {module.categoryLabel}
                      </span>
                      <span className="px-space-xs py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                        {module.ects} ECTS
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-outline font-mono">
                      {module.code}
                    </span>
                  </div>

                  {/* Title & Status */}
                  <div className="space-y-space-xs">
                    <h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                      {module.title}
                    </h2>
                    <div
                      className={`inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded font-label-sm text-label-sm ${
                        module.verified
                          ? 'bg-surface-container text-primary'
                          : 'bg-surface-container-high text-on-surface-variant'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          module.verified ? 'bg-primary' : 'bg-outline'
                        }`}
                      ></span>
                      {module.statusTag}
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed pt-1">
                      {module.shortDescription}
                    </p>
                  </div>

                  {/* Skills tags */}
                  <div className="pt-space-xs">
                    <span className="block font-label-sm text-label-sm text-outline mb-1 uppercase tracking-wider font-semibold">
                      Compétences clés
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {module.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface font-body-sm text-body-sm border border-surface-container-high/40"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-space-lg mt-space-md bg-surface-container-lowest">
                  <div className="w-full inline-flex items-center justify-between px-space-md py-2 rounded-lg bg-surface-container-low text-primary font-body-sm text-body-sm group-hover:bg-primary group-hover:text-on-primary transition-all font-semibold">
                    <span>Consulter la fiche complète</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Bottom Contextual / Disclaimer Card */}
      <section className="p-space-lg rounded-2xl bg-surface-container-low shadow-xs border border-surface-container flex flex-col sm:flex-row items-start gap-space-md">
        <div className="p-2.5 rounded-xl bg-surface-container-lowest text-primary shrink-0 shadow-xs border border-surface-container">
          <span className="material-symbols-outlined text-[24px]">info</span>
        </div>
        <div className="space-y-space-xs">
          <h4 className="font-headline-sm text-headline-sm text-on-surface">
            À propos des annotations et des annales
          </h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Tous les contenus marqués <strong className="text-on-surface font-semibold">« Vérifiés »</strong> proviennent des descriptifs officiels d'enseignement validés par les enseignants-chercheurs. Les fiches de synthèse, conseils méthodologiques et retours d'expérience sont des contributions bénévoles d'étudiants des promotions passées.
          </p>
        </div>
      </section>
    </div>
  );
};
