import React, { useState } from 'react';
import { DownloadableResource } from '../types';

interface DocumentViewerModalProps {
  resource: DownloadableResource | null;
  onClose: () => void;
  onDownload: (title: string) => void;
}

export const DocumentViewerModal: React.FC<DocumentViewerModalProps> = ({
  resource,
  onClose,
  onDownload,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isBookmarked, setIsBookmarked] = useState(false);

  if (!resource) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="w-full max-w-4xl bg-surface-container-lowest rounded-2xl shadow-2xl border border-surface-container-high overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Document Header Bar */}
        <div className="flex items-center justify-between px-space-md py-3 bg-surface-container-low border-b border-surface-container-high shrink-0">
          <div className="flex items-center gap-space-sm min-w-0">
            <div className={`p-2 rounded-lg ${resource.iconBg} ${resource.iconText} shrink-0`}>
              <span className="material-symbols-outlined text-[20px]">{resource.icon}</span>
            </div>
            <div className="min-w-0">
              <h3 className="font-headline-sm text-[15px] text-on-surface truncate">
                {resource.title}
              </h3>
              <div className="flex items-center gap-2 text-outline font-label-sm text-[11px]">
                <span>{resource.format}</span>
                <span>•</span>
                <span>{resource.size}</span>
                <span>•</span>
                <span className="text-primary font-medium">{resource.badgeLabel}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                isBookmarked
                  ? 'bg-primary-fixed text-primary'
                  : 'text-outline hover:text-on-surface hover:bg-surface-container'
              }`}
              title="Sauvegarder dans mes favoris"
            >
              <span className="material-symbols-outlined text-[18px]">
                {isBookmarked ? 'bookmark' : 'bookmark_border'}
              </span>
            </button>
            <button
              onClick={() => onDownload(resource.title)}
              className="inline-flex items-center gap-1.5 px-space-md py-1.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-headline-sm text-[13px] shadow-sm transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span className="hidden sm:inline">Télécharger</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Viewer Toolbar */}
        <div className="flex items-center justify-between px-space-md py-2 bg-surface-container-lowest border-b border-surface-container text-body-sm text-outline shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-label-sm uppercase tracking-wider text-primary font-semibold">
              Visionneuse Document Promo S5
            </span>
            <span className="hidden sm:inline-block text-[11px] px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-mono">
              Lecture active
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage <= 1}
              className="p-1 rounded text-outline hover:text-on-surface disabled:opacity-30 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <span className="font-mono text-label-sm">
              Page {currentPage} sur 4
            </span>
            <button
              onClick={() => setCurrentPage(Math.min(4, currentPage + 1))}
              disabled={currentPage >= 4}
              className="p-1 rounded text-outline hover:text-on-surface disabled:opacity-30 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Document Content Canvas */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-surface-container-low/30">
          <div className="max-w-2xl mx-auto bg-surface-container-lowest rounded-xl shadow-md border border-surface-container-high/60 p-8 sm:p-12 space-y-6">
            {/* Document Header Paper */}
            <div className="border-b border-surface-container pb-4">
              <div className="flex items-center justify-between text-outline font-mono text-[11px] uppercase tracking-wider mb-2">
                <span>École d'Ingénieurs — Semestre 5</span>
                <span>Session 2024–2025</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-2">
                {resource.title}
              </h1>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Document certifié conforme aux programmes du département Recherche Opérationnelle & Science de la Décision.
              </p>
            </div>

            {/* Simulated Content based on page */}
            {currentPage === 1 && (
              <div className="space-y-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                <div className="p-3 rounded-lg bg-surface-container-low border border-surface-container space-y-1">
                  <span className="font-headline-sm text-[13px] text-primary block">
                    Note de cadrage & Consignes de révision
                  </span>
                  <p className="text-[13px]">
                    {resource.previewText ||
                      "Ce document synthétise les points capitaux attendus lors des sessions d'examens terminaux. Il est recommandé d'avoir assimilé les lemmes de convergence avant d'aborder les exercices d'annales."}
                  </p>
                </div>

                <h3 className="font-headline-md text-headline-md text-on-surface pt-2">
                  1. Éléments Fondamentaux & Formulation Mathématique
                </h3>
                <p>
                  Soit un espace de probabilités filtré (Ω, F, (F_t), P) satisfaisant les conditions habituelles. On considère le problème d'optimisation suivant :
                </p>
                <div className="p-4 bg-surface-container-low rounded-lg font-mono text-center text-on-surface text-[14px]">
                  min &#123; (1/2n) ||y - Xw||² + λ ||w||₁ &#125;
                </div>
                <p>
                  Sous la condition de régularité des colonnes de la matrice X normalisées, l'opérateur de sous-gradient permet d'établir les conditions d'optimalité de Karush-Kuhn-Tucker (KKT).
                </p>
              </div>
            )}

            {currentPage === 2 && (
              <div className="space-y-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  2. Théorèmes d'Optimalité & Algorithmes de Résolution
                </h3>
                <div className="p-3 rounded-lg bg-secondary-fixed/30 border border-secondary/20">
                  <span className="font-headline-sm text-[13px] text-secondary font-semibold block mb-1">
                    Théorème de convergence (Lipschitz & Décroissance)
                  </span>
                  <p className="text-[13px] text-on-surface font-mono">
                    f(w_&#123;t+1&#125;) - f(w_t) ≤ -η (1 - Lη/2) ||∇f(w_t)||²
                  </p>
                </div>
                <p>
                  Ce résultat garantit une décroissance monotone stricte de la fonction objectif à chaque pas non stationnaire.
                </p>
              </div>
            )}

            {currentPage === 3 && (
              <div className="space-y-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  3. Exercices d'Annales Résolus & Erreurs Fréquentes
                </h3>
                <p>
                  <strong>Question type d'examen (Session 2023) :</strong> Démontrer pourquoi l'estimateur des moindres carrés ordinaires n'est plus univoque lorsque p &gt; n.
                </p>
                <div className="p-3 rounded-lg bg-surface-container-low font-body-sm text-[13px] space-y-1">
                  <span className="font-semibold text-primary">Corrigé officiel type :</span>
                  <p>
                    Le rang de la matrice empirique X^T X est au plus min(n, p) = n &lt; p. Le noyau ker(X^T X) est donc de dimension au moins p - n &gt; 0. Il existe ainsi une infinité de solutions minimisant la somme des résidus au carré.
                  </p>
                </div>
              </div>
            )}

            {currentPage === 4 && (
              <div className="space-y-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  4. Conseils Méthodologiques pour l'Épreuve
                </h3>
                <ul className="space-y-2 text-[14px]">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                    <span>Écrivez systématiquement les hypothèses avant de poser le premier calcul.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                    <span>Vérifiez l'homogénéité dimensionnelle de vos matrices et vecteurs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                    <span>Passez au maximum 35 minutes sur la première partie pour sécuriser la note.</span>
                  </li>
                </ul>

                <div className="mt-8 pt-4 border-t border-surface-container text-center text-outline text-[12px]">
                  Document édité par S5 Compass — Initiative étudiante libre
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
