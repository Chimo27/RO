import React from 'react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="w-full max-w-xl bg-surface-container-lowest rounded-2xl shadow-2xl border border-surface-container-high overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-space-lg border-b border-surface-container-high/60">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-[22px]">policy</span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Mentions légales & Charte</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="p-space-lg space-y-space-md text-body-sm text-on-surface-variant max-h-[70vh] overflow-y-auto leading-relaxed">
          <section className="space-y-1">
            <h4 className="font-headline-sm text-[14px] text-on-surface">1. Objet du projet</h4>
            <p>
              <strong>S5 Compass</strong> est une plateforme bénévole d'entraide étudiante destinée à accompagner les élèves-ingénieurs du Semestre 5 dans l'assimilation des enseignements de Recherche Opérationnelle & Science de la Décision.
            </p>
          </section>

          <section className="space-y-1">
            <h4 className="font-headline-sm text-[14px] text-on-surface">2. Propriété intellectuelle & Documents officiels</h4>
            <p>
              Les polycopiés et sujets d'annales estampillés « Officiels » sont la propriété intellectuelle exclusive des enseignants-chercheurs et de l'établissement d'enseignement supérieur. Ils sont partagés dans un cadre d'étude strictly restreint et non commercial au bénéfice des étudiants inscrits au cours.
            </p>
          </section>

          <section className="space-y-1">
            <h4 className="font-headline-sm text-[14px] text-on-surface">3. Contributions étudiantes</h4>
            <p>
              Les fiches de révision, carnets de code et conseils méthodologiques sont rédigés bénévolement par les étudiants des promotions actuelles et passées. Ils sont fournis à titre indicatif et ne sauraient remplacer l'assiduité aux cours magistraux et travaux dirigés.
            </p>
          </section>

          <section className="space-y-1">
            <h4 className="font-headline-sm text-[14px] text-on-surface">4. Données personnelles</h4>
            <p>
              Aucun cookie publicitaire ni traceur tiers n'est utilisé sur cette plateforme. Les préférences d'affichage (filtres, favoris de révision) sont stockées localement dans votre navigateur.
            </p>
          </section>
        </div>

        <div className="p-space-md bg-surface-container-low border-t border-surface-container flex justify-end">
          <button
            onClick={onClose}
            className="px-space-lg py-1.5 rounded-lg bg-primary text-on-primary font-headline-sm text-[13px] hover:bg-primary-container transition-colors cursor-pointer"
          >
            Compris
          </button>
        </div>
      </div>
    </div>
  );
};
