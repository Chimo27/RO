import React, { useState, useEffect } from 'react';
import { CourseModule, ViewMode, DownloadableResource } from '../types';

interface ModuleDetailViewProps {
  module: CourseModule;
  allModules: CourseModule[];
  onSelectModule: (moduleId: string) => void;
  onNavigate: (view: ViewMode) => void;
  onOpenResource: (resource: DownloadableResource) => void;
  onOpenProposal: () => void;
}

export const ModuleDetailView: React.FC<ModuleDetailViewProps> = ({
  module,
  allModules,
  onSelectModule,
  onNavigate,
  onOpenResource,
  onOpenProposal,
}) => {
  const [activeSection, setActiveSection] = useState<string>('comprendre');
  const [upvotedReviews, setUpvotedReviews] = useState<Record<string, boolean>>({});
  const [reviewsData, setReviewsData] = useState(module.studentReviews);

  useEffect(() => {
    setReviewsData(module.studentReviews);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [module]);

  const currentIndex = allModules.findIndex((m) => m.id === module.id);
  const prevModule = currentIndex > 0 ? allModules[currentIndex - 1] : null;
  const nextModule = currentIndex < allModules.length - 1 ? allModules[currentIndex + 1] : null;

  const handleUpvote = (reviewId: string) => {
    const isUpvoted = !!upvotedReviews[reviewId];
    setUpvotedReviews({ ...upvotedReviews, [reviewId]: !isUpvoted });
    setReviewsData(
      reviewsData.map((r) =>
        r.id === reviewId ? { ...r, upvotes: isUpvoted ? r.upvotes - 1 : r.upvotes + 1 } : r
      )
    );
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Subtle Gradient Accent Band */}
      <div className="w-full h-1.5 bg-gradient-to-r from-primary via-primary-container to-secondary"></div>

      {/* Header Banner & Module Meta */}
      <section className="w-full bg-surface-container-lowest border-b border-surface-container shadow-xs">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-space-lg pb-space-xl">
          {/* Breadcrumb */}
          <nav
            aria-label="Fil d'Ariane"
            className="flex items-center gap-space-xs font-body-sm text-body-sm text-outline mb-space-md"
          >
            <button
              onClick={() => onNavigate('accueil')}
              className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer focus:outline-none"
            >
              <span className="material-symbols-outlined text-[16px]">home</span>
              <span>Accueil</span>
            </button>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <button
              onClick={() => onNavigate('modules-s5')}
              className="hover:text-primary transition-colors cursor-pointer focus:outline-none"
            >
              Modules S5
            </button>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-on-surface font-semibold truncate">{module.title}</span>
          </nav>

          {/* Main Course Title Block */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-space-lg">
            <div className="space-y-space-sm max-w-3xl">
              <div className="flex flex-wrap items-center gap-space-xs">
                <span className="px-space-sm py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm tracking-wide font-semibold">
                  Semestre 5 • {module.isMandatory ? 'Obligatoire' : 'Électif'}
                </span>
                <span className="px-space-sm py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                  {module.ects} ECTS
                </span>
                <span className="px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-mono font-bold">
                  {module.code}
                </span>
                <span className="px-space-sm py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
                  {module.hours}
                </span>
              </div>

              <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                {module.title}
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {module.fullDescription}
              </p>

              <div className="flex items-center gap-space-xs text-primary pt-space-xs">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span className="font-label-md text-label-md font-semibold">
                  Fiche validée d'après le syllabus officiel 2024–2025
                </span>
              </div>
            </div>

            {/* Quick Stats & Action Card */}
            <div className="w-full lg:w-72 bg-surface-container-low rounded-2xl p-space-md space-y-space-sm flex-shrink-0 shadow-xs border border-surface-container">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
                  Évaluation S5
                </span>
                <span className="px-2 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm font-bold">
                  Coef. {module.evaluation.coef}
                </span>
              </div>

              <div className="space-y-2 pt-1">
                <div className="flex justify-between items-center font-body-sm text-body-sm">
                  <span className="text-on-surface-variant">Examen Final Théorique</span>
                  <span className="font-semibold text-on-surface">{module.evaluation.examPct}%</span>
                </div>
                <div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full transition-all duration-500"
                    style={{ width: `${module.evaluation.examPct}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-center font-body-sm text-body-sm pt-1">
                  <span className="text-on-surface-variant">Contrôle Continu TP & Projet</span>
                  <span className="font-semibold text-on-surface">{module.evaluation.ccPct}%</span>
                </div>
                <div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-secondary-container h-full rounded-full transition-all duration-500"
                    style={{ width: `${module.evaluation.ccPct}%` }}
                  ></div>
                </div>
              </div>

              <div className="pt-space-xs">
                <button
                  type="button"
                  onClick={() => scrollToSection('ressources')}
                  className="w-full flex items-center justify-center gap-space-xs py-2 px-space-md rounded-xl bg-primary hover:bg-primary-container text-on-primary font-headline-sm text-headline-sm text-[13px] transition-all shadow-xs cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">download</span>
                  <span>Télécharger les ressources</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Layout: Content Column & Sticky Table of Contents */}
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* Sticky Editorial Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-24 space-y-space-md">
            <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-xs border border-surface-container space-y-space-md">
              <div className="flex items-center gap-space-xs text-primary pb-2 border-b border-surface-container">
                <span className="material-symbols-outlined text-[18px]">menu_book</span>
                <span className="font-headline-sm text-headline-sm text-[14px]">
                  Sommaire du cours
                </span>
              </div>

              <nav className="space-y-1 font-body-sm text-body-sm">
                {[
                  { id: 'comprendre', label: '1. Comprendre le module' },
                  { id: 'notions', label: '2. Notions fondamentales' },
                  { id: 'validation', label: '3. Méthodes & Validation' },
                  { id: 'utilite', label: '4. Utilité professionnelle' },
                  { id: 'retours', label: '5. Retours d’expérience' },
                  { id: 'ressources', label: '6. Documents & GitHub' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg text-left transition-all cursor-pointer ${
                      activeSection === item.id
                        ? 'text-primary bg-surface-container font-semibold'
                        : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        activeSection === item.id ? 'bg-primary' : 'bg-outline-variant'
                      }`}
                    ></span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Student Helper Mini-Box */}
            <div className="bg-surface-container-low rounded-2xl p-space-md space-y-space-xs border border-surface-container">
              <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                Aide & Entraide S5
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Une question sur les TPs ? Rejoins le canal d'entraide de promotion ou propose tes propres fiches annotées.
              </p>
              <button
                onClick={onOpenProposal}
                className="inline-flex items-center gap-1 font-body-sm text-body-sm text-primary hover:underline font-semibold pt-1 cursor-pointer"
              >
                <span>Poser une question / Contribuer</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </aside>

          {/* Main Editorial Content */}
          <div className="lg:col-span-9 space-y-space-xl">
            {/* Visual Hero Card: Convex vs Model Architecture */}
            <div className="w-full bg-surface-container-lowest rounded-2xl p-space-lg shadow-xs border border-surface-container flex flex-col md:flex-row items-center justify-between gap-space-lg overflow-hidden relative">
              <div className="space-y-space-xs max-w-lg z-10">
                <span className="px-space-xs py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold">
                  {module.theoreticalQuote.axis}
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  {module.theoreticalQuote.headline}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {module.theoreticalQuote.description}
                </p>
              </div>

              {/* Minimal SVG Graphic representing Optimization Contour / Gradient Descent */}
              <div className="w-full md:w-56 h-36 flex-shrink-0 flex items-center justify-center relative bg-surface-container-low rounded-xl p-space-sm border border-surface-container">
                <svg
                  className="w-full h-full text-primary"
                  fill="none"
                  viewBox="0 0 200 130"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="100"
                    cy="65"
                    rx="85"
                    ry="50"
                    stroke="currentColor"
                    strokeDasharray="4 4"
                    strokeOpacity="0.15"
                    strokeWidth="1.5"
                  />
                  <ellipse
                    cx="100"
                    cy="65"
                    rx="60"
                    ry="35"
                    stroke="currentColor"
                    strokeOpacity="0.3"
                    strokeWidth="1.5"
                  />
                  <ellipse
                    cx="100"
                    cy="65"
                    rx="35"
                    ry="20"
                    stroke="currentColor"
                    strokeOpacity="0.6"
                    strokeWidth="1.5"
                  />
                  <ellipse
                    cx="100"
                    cy="65"
                    fill="currentColor"
                    fillOpacity="0.2"
                    rx="12"
                    ry="7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  {/* Optimization trajectory */}
                  <path
                    d="M 30 25 Q 55 45 75 48 T 96 63"
                    fill="none"
                    stroke="#4e45d5"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                  />
                  <circle cx="30" cy="25" fill="#6860ef" r="4" />
                  <circle cx="100" cy="65" fill="#3525cd" r="3.5" />
                  <path d="M 75 48 L 72 43" stroke="#4e45d5" strokeLinecap="round" strokeWidth="2" />
                </svg>
                <span className="absolute bottom-2 right-3 font-mono font-label-sm text-label-sm text-outline">
                  {module.theoreticalQuote.formula}
                </span>
              </div>
            </div>

            {/* 1. Section: Comprendre le module */}
            <section className="scroll-mt-24 space-y-space-md" id="comprendre">
              <div className="flex items-center gap-space-xs border-b border-surface-container pb-space-xs">
                <span className="w-7 h-7 rounded-lg bg-primary-fixed text-primary flex items-center justify-center font-bold text-headline-sm">
                  1
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Comprendre le module
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                {/* Ce que le module étudie */}
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-xs border border-surface-container space-y-space-xs">
                  <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined text-[20px]">psychology</span>
                    <h3 className="font-headline-md text-headline-md">Ce que le module étudie</h3>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {module.whatItStudies}
                  </p>
                </div>

                {/* Objectifs pédagogiques */}
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-xs border border-surface-container space-y-space-xs">
                  <div className="flex items-center gap-2 text-secondary">
                    <span className="material-symbols-outlined text-[20px]">track_changes</span>
                    <h3 className="font-headline-md text-headline-md">Objectifs pédagogiques</h3>
                  </div>
                  <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                    {module.learningObjectives.map((obj, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px] flex-shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Prérequis conseillés callout */}
              <div className="bg-surface-container-low rounded-2xl p-space-md border border-surface-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
                <div className="flex items-start gap-space-sm">
                  <div className="p-2.5 rounded-xl bg-surface-container-high text-primary flex-shrink-0 shadow-xs">
                    <span className="material-symbols-outlined text-[22px]">account_tree</span>
                  </div>
                  <div>
                    <span className="font-headline-sm text-headline-sm text-on-surface block">
                      Prérequis conseillés
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {module.prerequisites.join(' • ')}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 flex-shrink-0">
                  {module.prereqBadges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="px-2.5 py-1 rounded-lg bg-surface-container-lowest font-mono font-label-sm text-label-sm text-on-surface shadow-xs border border-surface-container"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* 2. Section: Les notions importantes */}
            <section className="scroll-mt-24 space-y-space-md" id="notions">
              <div className="flex items-center gap-space-xs border-b border-surface-container pb-space-xs">
                <span className="w-7 h-7 rounded-lg bg-primary-fixed text-primary flex items-center justify-center font-bold text-headline-sm">
                  2
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Les notions importantes
                </h2>
              </div>

              <p className="font-body-md text-body-md text-on-surface-variant">
                Le programme s'articule autour de 4 piliers fondamentaux. Chaque bloc fait l'objet d'un examen théorique et d'applications directes en TP.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                {module.pillars.map((pillar, pIdx) => {
                  const colors = [
                    { bg: 'bg-primary-fixed text-primary' },
                    { bg: 'bg-secondary-fixed text-secondary' },
                    { bg: 'bg-surface-container-high text-primary' },
                    { bg: 'bg-tertiary-fixed text-tertiary' },
                  ][pIdx % 4];

                  return (
                    <div
                      key={pIdx}
                      className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-xs border border-surface-container hover:shadow-md transition-shadow space-y-space-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-0.5 rounded-full font-label-sm text-label-sm font-semibold ${colors.bg}`}>
                          {pillar.number}
                        </span>
                        <span className="material-symbols-outlined text-outline text-[20px]">
                          {pillar.iconName || 'show_chart'}
                        </span>
                      </div>
                      <h3 className="font-headline-md text-headline-md text-on-surface">
                        {pillar.title}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        {pillar.description}
                      </p>
                      {(pillar.theorem || pillar.formula) && (
                        <div className="pt-2">
                          <span className="text-secondary font-label-sm text-label-sm font-mono block">
                            {pillar.theorem || pillar.formula}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Practical skills box */}
              <div className="p-space-md rounded-2xl bg-surface-container-low border border-surface-container flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm">
                <div className="space-y-1">
                  <span className="font-headline-sm text-headline-sm text-on-surface block">
                    Compétences pratiques attendues
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {module.practicalExpectations.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {module.practicalExpectations.badges.map((b, bIdx) => (
                    <span
                      key={bIdx}
                      className="px-3 py-1 rounded-lg bg-surface-container-lowest text-primary font-headline-sm text-headline-sm text-[13px] shadow-xs border border-surface-container"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* 3. Section: Comment préparer et valider le module */}
            <section className="scroll-mt-24 space-y-space-md" id="validation">
              <div className="flex items-center gap-space-xs border-b border-surface-container pb-space-xs">
                <span className="w-7 h-7 rounded-lg bg-primary-fixed text-primary flex items-center justify-center font-bold text-headline-sm">
                  3
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Comment préparer et valider le module
                </h2>
              </div>

              {/* Method Card */}
              <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-xs border border-surface-container space-y-space-sm">
                <div className="flex items-center gap-space-xs text-primary">
                  <span className="material-symbols-outlined">lightbulb</span>
                  <h3 className="font-headline-md text-headline-md">
                    Méthodes d'étude recommandées
                  </h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed italic">
                  {module.studyMethodology.mainQuote}
                </p>
                <div className="p-space-sm rounded-xl bg-surface-container-low font-body-sm text-body-sm text-on-surface space-y-1 border border-surface-container">
                  <div className="font-semibold text-primary">
                    Approche des séances de TP ({module.evaluation.ccPct}% de la note finale) :
                  </div>
                  <p className="text-on-surface-variant">
                    {module.studyMethodology.tpAdvice}
                  </p>
                </div>
              </div>

              {/* Pitfalls */}
              <div className="space-y-space-xs">
                <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-error text-[20px]">warning</span>
                  <span>Erreurs fréquentes à éviter absolument</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                  {module.pitfalls.map((pitfall, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-space-md rounded-2xl bg-surface-container-lowest shadow-xs border border-surface-container space-y-2"
                    >
                      <div className="w-7 h-7 rounded-full bg-error-container text-on-error-container flex items-center justify-center font-bold text-[13px]">
                        !
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">
                        {pitfall.title}
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        {pitfall.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. Section: Utilité professionnelle */}
            <section className="scroll-mt-24 space-y-space-md" id="utilite">
              <div className="flex items-center gap-space-xs border-b border-surface-container pb-space-xs">
                <span className="w-7 h-7 rounded-lg bg-primary-fixed text-primary flex items-center justify-center font-bold text-headline-sm">
                  4
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Utilité professionnelle
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {module.professionalUtility.intro}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                {module.professionalUtility.useCases.map((uc, uIdx) => (
                  <div
                    key={uIdx}
                    className="p-space-md rounded-2xl bg-surface-container-lowest shadow-xs border border-surface-container space-y-space-xs"
                  >
                    <span className="material-symbols-outlined text-primary text-[24px]">
                      {uc.icon}
                    </span>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">
                      {uc.title}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {uc.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Deontological Note */}
              <div className="p-space-md rounded-2xl bg-surface-container-high/60 border border-surface-container flex items-start gap-space-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-outline text-[20px] flex-shrink-0 mt-0.5">
                  info
                </span>
                <p className="font-body-sm text-body-sm leading-normal">
                  <strong className="text-on-surface font-semibold">Note déontologique :</strong>{' '}
                  {module.professionalUtility.deontologicalNote}
                </p>
              </div>
            </section>

            {/* 5. Section: Tips et retours d'expérience */}
            <section className="scroll-mt-24 space-y-space-md" id="retours">
              <div className="flex items-center justify-between border-b border-surface-container pb-space-xs">
                <div className="flex items-center gap-space-xs">
                  <span className="w-7 h-7 rounded-lg bg-primary-fixed text-primary flex items-center justify-center font-bold text-headline-sm">
                    5
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">
                    Tips et retours d'expérience
                  </h2>
                </div>
                <span className="px-space-xs py-0.5 rounded-full bg-secondary-fixed/50 text-secondary font-label-sm text-label-sm font-semibold">
                  Retours étudiants bénévoles
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                {reviewsData.map((review) => {
                  const hasUpvoted = !!upvotedReviews[review.id];

                  return (
                    <div
                      key={review.id}
                      className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-xs border border-surface-container space-y-space-sm flex flex-col justify-between"
                    >
                      <div className="space-y-space-xs">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold text-label-md">
                              {review.initials}
                            </div>
                            <div>
                              <div className="font-headline-sm text-headline-sm text-[13px] text-on-surface">
                                {review.author}
                              </div>
                              <div className="font-label-sm text-label-sm text-outline">
                                {review.promo} • {review.specialty}
                              </div>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                            {review.tag}
                          </span>
                        </div>
                        <blockquote className="font-body-sm text-body-sm text-on-surface-variant italic pt-2 leading-relaxed">
                          {review.quote}
                        </blockquote>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleUpvote(review.id)}
                        className={`pt-space-xs font-label-sm text-label-sm font-semibold flex items-center gap-1.5 cursor-pointer transition-colors ${
                          hasUpvoted ? 'text-primary' : 'text-outline hover:text-primary'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          {hasUpvoted ? 'thumb_up' : 'thumb_up_off_alt'}
                        </span>
                        <span>Conseil validé par {review.upvotes} étudiants</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 6. Section: Ressources disponibles */}
            <section className="scroll-mt-24 space-y-space-md" id="ressources">
              <div className="flex items-center gap-space-xs border-b border-surface-container pb-space-xs">
                <span className="w-7 h-7 rounded-lg bg-primary-fixed text-primary flex items-center justify-center font-bold text-headline-sm">
                  6
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Ressources disponibles
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                {module.resources.map((res) => {
                  const asDownloadable: DownloadableResource = {
                    id: res.id,
                    title: res.title,
                    category: res.category === 'syllabus' ? 'syllabus' : res.category === 'annales' ? 'exam' : 'sheet',
                    badgeLabel: res.tagLabel,
                    badgeType: 'official',
                    format: res.format,
                    size: res.size,
                    typeDesc: res.description,
                    extraMeta: res.details,
                    icon: res.icon,
                    iconBg: 'bg-primary/10',
                    iconText: 'text-primary',
                    moduleCode: module.code,
                  };

                  return (
                    <div
                      key={res.id}
                      onClick={() => onOpenResource(asDownloadable)}
                      className="p-space-md rounded-2xl bg-surface-container-lowest shadow-xs border border-surface-container hover:shadow-md hover:bg-surface-container-low transition-all flex items-start gap-space-sm group cursor-pointer"
                    >
                      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-105 transition-transform shrink-0">
                        <span className="material-symbols-outlined text-[24px]">{res.icon}</span>
                      </div>
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors truncate">
                            {res.title}
                          </h4>
                          <span className={`px-1.5 py-0.5 rounded font-label-sm text-label-sm shrink-0 ${res.tagStyle}`}>
                            {res.tagLabel}
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                          {res.description}
                        </p>
                        <div className="flex items-center gap-space-xs text-outline font-label-sm text-label-sm pt-1">
                          <span>{res.details}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Template Navigation Footer (Next / Prev course) */}
            <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md border-t border-surface-container">
              {prevModule ? (
                <button
                  type="button"
                  onClick={() => onSelectModule(prevModule.id)}
                  className="w-full sm:w-auto flex items-center gap-space-sm p-space-sm rounded-xl hover:bg-surface-container-low transition-colors group cursor-pointer text-left"
                >
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                    arrow_back
                  </span>
                  <div>
                    <span className="font-label-sm text-label-sm text-outline block">
                      Module précédent
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                      {prevModule.title}
                    </span>
                  </div>
                </button>
              ) : (
                <div></div>
              )}

              <button
                type="button"
                onClick={() => onNavigate('modules-s5')}
                className="px-space-md py-2 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface font-body-sm text-body-sm transition-colors flex items-center gap-2 cursor-pointer shadow-xs border border-surface-container"
              >
                <span className="material-symbols-outlined text-[16px]">grid_view</span>
                <span>Index de tous les modules</span>
              </button>

              {nextModule ? (
                <button
                  type="button"
                  onClick={() => onSelectModule(nextModule.id)}
                  className="w-full sm:w-auto flex items-center justify-end gap-space-sm p-space-sm rounded-xl hover:bg-surface-container-low transition-colors group cursor-pointer text-right"
                >
                  <div>
                    <span className="font-label-sm text-label-sm text-outline block">
                      Module suivant
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                      {nextModule.title}
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                    arrow_forward
                  </span>
                </button>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
