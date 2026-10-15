import React from 'react';
import { ViewMode } from '../types';

interface FooterProps {
  onNavigate: (view: ViewMode) => void;
  onOpenProposal: () => void;
  onOpenLegal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenProposal, onOpenLegal }) => {
  return (
    <footer className="w-full bg-surface-container-low border-t border-surface-container-high/60 mt-auto">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-space-lg mb-space-lg">
          <div className="max-w-xl space-y-space-xs">
            <div className="flex items-center gap-space-xs">
              <span className="font-headline-sm text-headline-sm text-on-surface">S5 Compass</span>
              <span className="text-outline font-body-sm text-body-sm">—</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Recherche Opérationnelle & Sciences de la Décision
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Projet étudiant indépendant conçu pour accompagner la promotion du Semestre 5 dans l'assimilation rigoureuse des cours théoriques et pratiques.
            </p>
            <p className="font-label-sm text-label-sm text-outline leading-normal pt-space-xs">
              Ce guide est une initiative étudiante d'entraide et n'engage pas formellement l'administration des études. Les contenus illustratifs et retours d'expérience sont clairement indiqués.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-space-lg gap-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
            <button
              onClick={() => onNavigate('conseils-et-ressources')}
              className="hover:text-primary transition-colors cursor-pointer text-left focus:outline-none"
            >
              Guide d'étude
            </button>
            <button
              onClick={() => onNavigate('modules-s5')}
              className="hover:text-primary transition-colors cursor-pointer text-left focus:outline-none"
            >
              Index des modules
            </button>
            <button
              onClick={onOpenProposal}
              className="hover:text-primary transition-colors cursor-pointer text-left focus:outline-none font-medium text-primary"
            >
              Contribuer / Proposer une ressource
            </button>
            <button
              onClick={onOpenLegal}
              className="hover:text-primary transition-colors cursor-pointer text-left focus:outline-none"
            >
              Mentions légales
            </button>
          </div>
        </div>

        <div className="pt-space-md border-t border-surface-container flex flex-col sm:flex-row items-center justify-between gap-space-sm font-label-sm text-label-sm text-outline">
          <span>© 2024—2025 S5 Compass • Initiative étudiante libre & ouverte</span>
          <span>Fait avec rigueur pour la promo S5</span>
        </div>
      </div>
    </footer>
  );
};
