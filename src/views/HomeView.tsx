import React, { useState } from 'react';
import { CourseModule, AdviceGuide, ViewMode } from '../types';

interface HomeViewProps {
  modules: CourseModule[];
  adviceGuides: AdviceGuide[];
  onSelectModule: (moduleId: string) => void;
  onSelectGuide: (guideId: string) => void;
  onNavigate: (view: ViewMode) => void;
  onOpenProposal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  modules,
  adviceGuides,
  onSelectModule,
  onSelectGuide,
  onNavigate,
  onOpenProposal,
}) => {
  const [filter, setFilter] = useState<'all' | 'ia' | 'opt' | 'stat'>('all');

  const filteredModules = modules.filter((m) => {
    if (filter === 'all') return true;
    if (filter === 'ia') return m.category === 'ia' || m.id === 'ro-502';
    if (filter === 'opt') return m.category === 'optimisation' || m.category === 'seminar';
    if (filter === 'stat') return m.category === 'stats' || m.category === 'bigdata';
    return true;
  });

  return (
    <div className="flex flex-col w-full">
      {/* 1. Editorial Notice Banner */}
      <section className="w-full bg-surface-container-low/70 py-space-xs px-margin-mobile lg:px-margin border-b border-surface-container-high/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
          <div className="flex items-center gap-space-xs flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-semibold">
              Plateforme Promo
            </span>
            <span className="text-outline-variant hidden sm:inline">•</span>
            <span>Guide d'entraide indépendant S5</span>
            <span className="text-outline-variant hidden md:inline">•</span>
            <span className="hidden md:inline text-on-surface">
              Parcours Recherche Opérationnelle & Science de la Décision
            </span>
          </div>
          <div className="flex items-center gap-space-sm font-label-sm text-label-sm text-outline">
            <span className="inline-flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">event</span>
              Semestre d'Automne 2024–2025
            </span>
            <span className="px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm">
              v2.4
            </span>
          </div>
        </div>
      </section>

      {/* 2. Hero Section */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            {/* Text Column */}
            <div className="lg:col-span-7 space-y-space-md">
              <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-primary-fixed text-on-primary-fixed shadow-sm">
                <span className="text-base leading-none">🎓</span>
                <span className="font-label-md text-label-md font-semibold">
                  Rentrée Semestre 5 • Tronc Commun Avancé
                </span>
              </div>
              <div className="space-y-space-sm">
                <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight max-w-2xl">
                  Ton S5, avec plus de <span className="text-primary-container inline-block">repères</span>.
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                  Découvre tes modules, prépare mieux tes cours et comprends concrètement les compétences mathématiques et algorithmiques qu'ils t'apportent en ingénierie.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                <a
                  href="#modules-section"
                  className="inline-flex items-center justify-center gap-space-xs px-space-lg h-11 rounded-lg bg-primary text-on-primary font-headline-sm text-headline-sm hover:bg-primary-container active:scale-[0.99] transition-all shadow-sm group cursor-pointer"
                >
                  <span>Explorer les modules</span>
                  <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>
                <a
                  href="#conseils-section"
                  className="inline-flex items-center justify-center gap-space-xs px-space-lg h-11 rounded-lg bg-surface-container-lowest text-on-surface font-headline-sm text-headline-sm hover:bg-surface-container-low transition-all shadow-sm border border-surface-container group cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px] text-outline group-hover:text-primary transition-colors">
                    menu_book
                  </span>
                  <span>Voir les conseils</span>
                </a>
              </div>

              {/* Quick Micro Indicators */}
              <div className="pt-space-md grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
                <div
                  onClick={() => onNavigate('modules-s5')}
                  className="p-space-md rounded-lg bg-surface-container-lowest shadow-sm border border-surface-container-high/60 flex items-start gap-space-sm cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[18px]">account_tree</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-headline-sm text-headline-sm text-on-surface">7 Modules</p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant truncate">
                      Syllabus complets & ECTS
                    </p>
                  </div>
                </div>

                <div
                  onClick={() => onNavigate('conseils-et-ressources')}
                  className="p-space-md rounded-lg bg-surface-container-lowest shadow-sm border border-surface-container-high/60 flex items-start gap-space-sm cursor-pointer hover:border-secondary/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shrink-0">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-headline-sm text-headline-sm text-on-surface">Méthodologie</p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant truncate">
                      Retours d'expériences promo
                    </p>
                  </div>
                </div>

                <div
                  onClick={() => onNavigate('conseils-et-ressources')}
                  className="p-space-md rounded-lg bg-surface-container-lowest shadow-sm border border-surface-container-high/60 flex items-start gap-space-sm cursor-pointer hover:border-tertiary/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shrink-0">
                    <span className="material-symbols-outlined text-[18px]">folder_special</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-headline-sm text-headline-sm text-on-surface">Annales</p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant truncate">
                      Sujets résolus & fiches mémo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Curriculum Snapshot Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl bg-surface-container-lowest p-space-lg shadow-md border border-surface-container-high/80 space-y-space-md overflow-hidden">
                {/* Scrim glow decoration */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary-fixed-dim/40 rounded-full blur-3xl pointer-events-none"></div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                    <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold">
                      Piliers Académiques S5
                    </span>
                  </div>
                  <span className="px-space-xs py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-primary font-bold">
                    23 ECTS Global
                  </span>
                </div>

                {/* Progress bar visual */}
                <div className="space-y-space-xs pt-space-xs">
                  <div className="flex items-center justify-between font-label-sm text-label-sm">
                    <span className="text-on-surface font-medium">Répartition des crédits</span>
                    <span className="text-outline">Optimisation & Data</span>
                  </div>

                  {/* Horizontal stack chart */}
                  <div className="w-full h-3 rounded-full bg-surface-container overflow-hidden flex shadow-inner">
                    <div
                      className="h-full bg-primary hover:opacity-90 transition-opacity"
                      style={{ width: '35%' }}
                      title="IA & Modélisation (8 ECTS)"
                    ></div>
                    <div
                      className="h-full bg-secondary hover:opacity-90 transition-opacity"
                      style={{ width: '30%' }}
                      title="Optimisation & Métaheuristiques (7 ECTS)"
                    ></div>
                    <div
                      className="h-full bg-tertiary hover:opacity-90 transition-opacity"
                      style={{ width: '25%' }}
                      title="Statistiques & Échantillonnage (6 ECTS)"
                    ></div>
                    <div
                      className="h-full bg-outline-variant hover:opacity-90 transition-opacity"
                      style={{ width: '10%' }}
                      title="Séminaires (2 ECTS)"
                    ></div>
                  </div>

                  <div className="flex flex-wrap gap-x-space-md gap-y-1 font-label-sm text-label-sm text-on-surface-variant pt-1">
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-primary inline-block"></span> Machine Learning & HMM
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-secondary inline-block"></span> Métaheuristiques & Spark
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-tertiary inline-block"></span> Régression & Sondages
                    </span>
                  </div>
                </div>

                {/* Focus Formula Snippet */}
                <div className="rounded-xl bg-surface-container-low p-space-md space-y-space-xs border border-surface-container">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                      Concept Fondateur du Semestre
                    </span>
                    <span className="font-label-sm text-label-sm text-outline">Lasso Regularization</span>
                  </div>
                  <div className="p-space-sm bg-surface-container-lowest rounded font-mono text-body-sm text-on-surface overflow-x-auto shadow-xs">
                    min<sub>β</sub> &#123; ||y - Xβ||<sup>2</sup><sub>2</sub> + λ ||β||<sub>1</sub> &#125;
                  </div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    Compromis fidélité aux données & sélection de variables parcimonieuses dans les espaces massifs.
                  </p>
                </div>

                {/* Quick Agenda Highlight */}
                <div className="flex items-center gap-space-sm pt-space-xs text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-primary text-[20px]">calendar_today</span>
                  <p className="truncate">
                    <strong className="text-on-surface font-semibold">Conseil promo :</strong> Premiers contrôles continus programmés en Semaine 7.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Section: "Explore tes modules" */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl bg-surface-container-low/40 border-t border-surface-container" id="modules-section">
        <div className="max-w-7xl mx-auto space-y-space-lg">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="space-y-space-xs max-w-2xl">
              <div className="inline-flex items-center gap-space-xs text-primary font-label-md text-label-md uppercase tracking-wider font-semibold">
                <span className="material-symbols-outlined text-[16px]">apps</span>
                <span>Index Pédagogique Synthétique</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Explore tes modules
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Aperçu synthétique des enseignements du semestre 5. Découvre le programme détaillé, les prérequis recommandés et les paquets de révision par matière.
              </p>
            </div>

            {/* Filter Tags */}
            <div className="flex items-center gap-space-xs overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              <button
                onClick={() => setFilter('all')}
                className={`px-space-md py-1.5 rounded-lg text-label-md font-label-md transition-all cursor-pointer ${
                  filter === 'all'
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container hover:text-on-surface shadow-xs'
                }`}
              >
                Tous (7)
              </button>
              <button
                onClick={() => setFilter('ia')}
                className={`px-space-md py-1.5 rounded-lg text-label-md font-label-md transition-all cursor-pointer ${
                  filter === 'ia'
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container hover:text-on-surface shadow-xs'
                }`}
              >
                IA & Proba
              </button>
              <button
                onClick={() => setFilter('opt')}
                className={`px-space-md py-1.5 rounded-lg text-label-md font-label-md transition-all cursor-pointer ${
                  filter === 'opt'
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container hover:text-on-surface shadow-xs'
                }`}
              >
                Optimisation
              </button>
              <button
                onClick={() => setFilter('stat')}
                className={`px-space-md py-1.5 rounded-lg text-label-md font-label-md transition-all cursor-pointer ${
                  filter === 'stat'
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container hover:text-on-surface shadow-xs'
                }`}
              >
                Statistique & Data
              </button>
            </div>
          </div>

          {/* Grid of 7 Module Cards matching Image 3.png */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
            {filteredModules.map((module) => {
              const isWide = module.id === 'ro-507';
              return (
                <article
                  key={module.id}
                  onClick={() => onSelectModule(module.id)}
                  className={`group bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md border border-surface-container-high/60 hover:border-primary/30 transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                    isWide ? 'md:col-span-2 lg:col-span-3' : ''
                  }`}
                >
                  {isWide ? (
                    /* Wide layout for RO-507 as seen in screenshot */
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-center w-full">
                      <div className="lg:col-span-8 space-y-space-xs">
                        <div className="flex items-center gap-space-sm">
                          <span className="inline-flex items-center px-space-sm py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
                            {module.categoryLabel}
                          </span>
                          <span className="inline-flex items-center px-space-xs py-0.5 rounded bg-surface-container font-label-sm text-label-sm font-bold text-primary">
                            {module.ects} ECTS
                          </span>
                        </div>
                        <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                          {module.title}
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant max-w-3xl leading-relaxed">
                          {module.shortDescription}
                        </p>
                      </div>
                      <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-center items-start lg:items-end gap-space-sm pt-space-xs lg:pt-0">
                        <div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm">
                          <span className="material-symbols-outlined text-[16px]">notes</span>
                          <span className="font-medium">Résumés d'interventions & fiches contact</span>
                        </div>
                        <button
                          type="button"
                          className="inline-flex items-center gap-space-xs font-headline-sm text-headline-sm text-primary hover:text-primary-container transition-colors group/link cursor-pointer"
                        >
                          <span>Consulter le planning</span>
                          <span className="material-symbols-outlined text-[18px] transition-transform group-hover/link:translate-x-1">
                            arrow_forward
                          </span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Standard Card Layout */
                    <>
                      <div className="space-y-space-md">
                        <div className="flex items-start justify-between gap-space-xs">
                          <span className="inline-flex items-center px-space-sm py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold">
                            {module.categoryLabel}
                          </span>
                          <span className="inline-flex items-center px-space-xs py-0.5 rounded bg-surface-container font-label-sm text-label-sm font-bold text-primary">
                            {module.ects} ECTS
                          </span>
                        </div>

                        <div className="space-y-space-xs">
                          <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                            {module.title}
                          </h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-3">
                            {module.shortDescription}
                          </p>
                        </div>

                        {/* Mathematical Pill Badge */}
                        <div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm bg-surface-container-low px-space-sm py-1.5 rounded-lg">
                          <span className="material-symbols-outlined text-[16px] text-primary">analytics</span>
                          <span className="font-mono text-[11px] truncate">
                            {module.prereqBadges.join(' • ')}
                          </span>
                        </div>
                      </div>

                      <div className="pt-space-md mt-space-md space-y-space-sm border-t border-surface-container-high/40">
                        <div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm">
                          <span className="material-symbols-outlined text-[16px]">
                            {module.verified ? 'check_circle' : 'pending'}
                          </span>
                          <span className="font-medium truncate">{module.statusTag}</span>
                        </div>
                        <div className="inline-flex items-center justify-between w-full font-headline-sm text-headline-sm text-primary group-hover:text-primary-container transition-colors pt-space-xs group/link">
                          <span>Découvrir le module</span>
                          <span className="material-symbols-outlined text-[18px] transition-transform group-hover/link:translate-x-1">
                            arrow_forward
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Section: "Conseils pour mieux réussir" */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl" id="conseils-section">
        <div className="max-w-7xl mx-auto space-y-space-lg">
          <div className="space-y-space-xs max-w-2xl">
            <div className="inline-flex items-center gap-space-xs text-primary font-label-md text-label-md uppercase tracking-wider font-semibold">
              <span className="material-symbols-outlined text-[16px]">tips_and_updates</span>
              <span>Méthodologie Active</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Conseils pour mieux réussir
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Méthodes éprouvées par les promotions précédentes pour aborder sereinement les matières à forte densité théorique et technique.
            </p>
          </div>

          {/* 3 Practical Editorial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            {adviceGuides.slice(0, 3).map((guide) => (
              <article
                key={guide.id}
                onClick={() => onSelectGuide(guide.id)}
                className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md border border-surface-container-high/60 hover:border-primary/30 transition-all duration-200 flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-space-md">
                  <div className="flex items-center justify-between text-outline font-label-sm text-label-sm">
                    <span className="inline-flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">schedule</span>
                      Lecture {guide.readTime}
                    </span>
                    <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                      {guide.categoryLabel}
                    </span>
                  </div>
                  <div className="space-y-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-snug">
                      {guide.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {guide.summary}
                    </p>
                  </div>
                </div>

                <div className="pt-space-md mt-space-md flex items-center justify-between font-label-md text-label-md text-primary border-t border-surface-container/60">
                  <span>Lire le guide pratique</span>
                  <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Section: "Comprendre les compétences professionnelles" */}
      <section className="w-full px-margin-mobile lg:px-margin pb-space-xl">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl bg-surface-container-low p-space-lg lg:p-space-xl space-y-space-lg border border-surface-container">
            <div className="max-w-3xl space-y-space-xs">
              <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider inline-flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">work</span>
                Perspective Carrière & Projets
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Faire le pont entre théorie académique et défis d'ingénierie
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                La Recherche Opérationnelle et la Science de la Décision fournissent le socle quantitatif qui pilote la logistique mondiale, la tarification dynamique, l'allocation d'actifs financiers et le dimensionnement de réseaux. S5 Compass explicite pour chaque cours les compétences transférables que vous développez, afin de valoriser vos projets en stage ou entretien technique.
              </p>
            </div>

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
              <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-xs border border-surface-container space-y-space-xs">
                <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
                  <span className="material-symbols-outlined text-[20px]">functions</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface pt-space-xs">
                  Modélisation mathématique rigoureuse
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Traduire un problème industriel flou (contraintes de capacité, incertitudes de demande) en un modèle formel d'optimisation ou un processus stochastique résoluble.
                </p>
              </div>

              <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-xs border border-surface-container space-y-space-xs">
                <div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                  <span className="material-symbols-outlined text-[20px]">memory</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface pt-space-xs">
                  Implémentation algorithmique à l'échelle
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Passer de la démonstration sur tableau noir à des architectures concrètes en Python, C++ ou PySpark capables de traiter des millions d'enregistrements.
                </p>
              </div>

              <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-xs border border-surface-container space-y-space-xs">
                <div className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
                  <span className="material-symbols-outlined text-[20px]">insights</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface pt-space-xs">
                  Aide à la décision stratégique & opérationnelle
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Interpréter les compromis biais-variance, les sensibilités duales et les intervalles de confiance pour orienter les choix de direction générale.
                </p>
              </div>
            </div>

            {/* Student Contribution Callout Ribbon */}
            <div className="p-space-md rounded-xl bg-surface-container-high/60 flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface border border-surface-container-high">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-primary text-[22px]">contact_support</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Tu disposes d'une fiche synthèse ou d'un sujet d'examen récent à partager avec la promo ?
                </span>
              </div>
              <button
                onClick={onOpenProposal}
                className="px-space-md py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container shadow-xs transition-all whitespace-nowrap cursor-pointer"
              >
                Proposer une ressource
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
