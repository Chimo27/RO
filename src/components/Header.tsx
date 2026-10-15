import React, { useState } from 'react';
import { ViewMode } from '../types';

interface HeaderProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode, moduleId?: string) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff]/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#eaedff]">
      <div className="h-16 max-w-7xl mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-space-md">
        {/* Brand & Nav */}
        <div className="flex items-center gap-space-lg">
          <button
            onClick={() => onNavigate('accueil')}
            className="flex items-center gap-space-sm group text-left cursor-pointer focus:outline-none"
            aria-label="S5 Compass Accueil"
          >
            <img
              alt="S5 Compass Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida/AEtjO1UQ2NijytdpM1Tyi_UTJ_M-mAw_ChJ3tatkrLXNKu_MgtgOZryKHwAR-OFWtr1H1iLjDrldNNL6GMzHKaP6h-m7OSp232xkGkChLTMsQCgfK1_-Kng4JvhIwcL6mEZluc9tZWMtziiylsnGm9YvbjmtKEYxiEJQO5kL8d0rPO5-hW9Qs3SC85MNJwRbUeYrsDRgmBObWqBVtIcTmImQzgbFL9BOTsKaqAZWYLkBMOg6L97yfUO2861MyUE"
            />
            <div className="flex items-center gap-space-xs">
              <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight group-hover:text-primary transition-colors">
                S5 Compass
              </span>
              <span className="hidden sm:inline-flex items-center px-space-xs py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">
                Guide étudiant
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-space-xs">
            <button
              onClick={() => onNavigate('accueil')}
              className={`px-space-md py-space-xs rounded-lg font-body-sm text-body-sm transition-all cursor-pointer ${
                currentView === 'accueil'
                  ? 'bg-surface-container text-primary font-semibold'
                  : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
              }`}
            >
              Accueil
            </button>
            <button
              onClick={() => onNavigate('modules-s5')}
              className={`px-space-md py-space-xs rounded-lg font-body-sm text-body-sm transition-all cursor-pointer ${
                currentView === 'modules-s5' || currentView === 'module-detail'
                  ? 'bg-surface-container text-primary font-semibold'
                  : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
              }`}
            >
              Modules S5
            </button>
            <button
              onClick={() => onNavigate('conseils-et-ressources')}
              className={`px-space-md py-space-xs rounded-lg font-body-sm text-body-sm transition-all cursor-pointer ${
                currentView === 'conseils-et-ressources'
                  ? 'bg-surface-container text-primary font-semibold'
                  : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
              }`}
            >
              Conseils et ressources
            </button>
          </nav>
        </div>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-space-md">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-space-sm h-9 px-space-md rounded-lg bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container hover:text-on-surface transition-all focus:outline-none cursor-pointer"
            type="button"
            title="Rechercher (⌘K)"
          >
            <span className="material-symbols-outlined text-[18px] text-outline">search</span>
            <span className="hidden lg:inline">Rechercher un module, un concept...</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-surface-container-lowest text-outline font-label-sm text-label-sm shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
              ⌘K
            </kbd>
          </button>

          {/* Semester Pill */}
          <span className="hidden sm:inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed font-label-sm text-label-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            Semestre 5 • 2024-2025
          </span>

          {/* Profile Button with dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="w-8 h-8 rounded-full bg-primary hover:bg-primary-container flex items-center justify-center text-on-primary shadow-sm transition-all cursor-pointer focus:outline-none"
              type="button"
              aria-label="Menu étudiant"
            >
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </button>

            {showProfileMenu && (
              <div
                className="absolute right-0 mt-2 w-64 bg-surface-container-lowest rounded-xl shadow-lg border border-surface-container-high p-space-sm z-50"
                onMouseLeave={() => setShowProfileMenu(false)}
              >
                <div className="p-space-sm border-b border-surface-container-high/60">
                  <p className="font-headline-sm text-headline-sm text-on-surface">Espace Étudiant S5</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Recherche Opérationnelle & Décision</p>
                </div>
                <div className="py-1">
                  <div className="px-space-sm py-2 text-body-sm font-body-sm text-on-surface-variant flex items-center justify-between">
                    <span>Crédits accumulés</span>
                    <span className="font-semibold text-primary">23 ECTS</span>
                  </div>
                  <div className="px-space-sm py-2 text-body-sm font-body-sm text-on-surface-variant flex items-center justify-between">
                    <span>Modules suivis</span>
                    <span className="font-semibold text-secondary">7 / 7</span>
                  </div>
                  <div className="px-space-sm py-1.5 text-label-sm font-label-sm text-outline">
                    Promotion 2024-2025 • Tronc Commun
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container cursor-pointer"
            aria-label="Ouvrir le menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-lowest border-t border-surface-container px-margin-mobile py-space-md space-y-space-sm shadow-md animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            <button
              onClick={() => {
                onNavigate('accueil');
                setMobileMenuOpen(false);
              }}
              className={`text-left px-space-md py-space-sm rounded-lg font-body-sm text-body-sm ${
                currentView === 'accueil'
                  ? 'bg-surface-container text-primary font-semibold'
                  : 'text-on-surface-variant'
              }`}
            >
              Accueil
            </button>
            <button
              onClick={() => {
                onNavigate('modules-s5');
                setMobileMenuOpen(false);
              }}
              className={`text-left px-space-md py-space-sm rounded-lg font-body-sm text-body-sm ${
                currentView === 'modules-s5'
                  ? 'bg-surface-container text-primary font-semibold'
                  : 'text-on-surface-variant'
              }`}
            >
              Modules S5
            </button>
            <button
              onClick={() => {
                onNavigate('conseils-et-ressources');
                setMobileMenuOpen(false);
              }}
              className={`text-left px-space-md py-space-sm rounded-lg font-body-sm text-body-sm ${
                currentView === 'conseils-et-ressources'
                  ? 'bg-surface-container text-primary font-semibold'
                  : 'text-on-surface-variant'
              }`}
            >
              Conseils et ressources
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
