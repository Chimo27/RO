import React, { useState } from 'react';
import { CourseModule } from '../types';

interface ResourceProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  modules: CourseModule[];
  onSuccess: (message: string) => void;
}

export const ResourceProposalModal: React.FC<ResourceProposalModalProps> = ({
  isOpen,
  onClose,
  modules,
  onSuccess,
}) => {
  const [title, setTitle] = useState('');
  const [selectedModule, setSelectedModule] = useState(modules[0]?.code || 'RO-501');
  const [resourceType, setResourceType] = useState('annale');
  const [authorName, setAuthorName] = useState('');
  const [academicYear, setAcademicYear] = useState('2024-2025');
  const [description, setDescription] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess(`Merci ! La ressource « ${title} » a été soumise pour vérification.`);
      onClose();
      // Reset form
      setTitle('');
      setDescription('');
      setFileName(null);
    }, 600);
  };

  const handleSimulateFileSelect = () => {
    const fakeNames = [
      'fiche_synthese_markov_2024.pdf',
      'sujet_examen_metaheuristiques_corrige.pdf',
      'tp4_pyspark_streaming_resolution.ipynb',
      'cheatsheet_formulaire_lasso_s5.pdf'
    ];
    const picked = fakeNames[Math.floor(Math.random() * fakeNames.length)];
    setFileName(picked);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="w-full max-w-lg bg-surface-container-lowest rounded-2xl shadow-2xl border border-surface-container-high overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-space-lg border-b border-surface-container-high/60">
          <div className="flex items-center gap-space-xs">
            <div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[18px]">upload_file</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Proposer une ressource</h3>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Partage une fiche, une annale ou un corrigé avec la promo S5
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-space-lg space-y-space-md max-h-[75vh] overflow-y-auto">
          {/* Title */}
          <div>
            <label className="block font-label-md text-label-md text-on-surface mb-1">
              Titre de la ressource *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Fiche récapitulative algorithmes de gradient et convexité"
              className="w-full px-space-md py-2 bg-surface-container-low rounded-lg text-on-surface text-body-sm font-body-sm border border-surface-container focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Module & Type selection row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-1">
                Module concerné *
              </label>
              <select
                value={selectedModule}
                onChange={(e) => setSelectedModule(e.target.value)}
                className="w-full px-space-md py-2 bg-surface-container-low rounded-lg text-on-surface text-body-sm font-body-sm border border-surface-container focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {modules.map((m) => (
                  <option key={m.id} value={m.code}>
                    {m.code} — {m.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-1">
                Type de document
              </label>
              <select
                value={resourceType}
                onChange={(e) => setResourceType(e.target.value)}
                className="w-full px-space-md py-2 bg-surface-container-low rounded-lg text-on-surface text-body-sm font-body-sm border border-surface-container focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="annale">Annale / Corrigé d'examen</option>
                <option value="fiche">Fiche mémo / Synthèse de cours</option>
                <option value="td">Exercices de TD résolus</option>
                <option value="code">Notebook de TP / Code corrigé</option>
              </select>
            </div>
          </div>

          {/* Author & Academic Year */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-1">
                Auteur ou promotion
              </label>
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="Ex: Anonyme ou Prénom N. (Promo 2024)"
                className="w-full px-space-md py-2 bg-surface-container-low rounded-lg text-on-surface text-body-sm font-body-sm border border-surface-container focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-1">
                Année académique
              </label>
              <input
                type="text"
                value={academicYear}
                onChange={(e) => setAcademicYear(e.target.value)}
                placeholder="2024-2025"
                className="w-full px-space-md py-2 bg-surface-container-low rounded-lg text-on-surface text-body-sm font-body-sm border border-surface-container focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* File Upload Box */}
          <div>
            <label className="block font-label-md text-label-md text-on-surface mb-1">
              Fichier attaché (PDF, ZIP, IPYNB, Markdown)
            </label>
            <div
              onClick={handleSimulateFileSelect}
              className="border-2 border-dashed border-surface-container-high hover:border-primary/50 bg-surface-container-low/50 rounded-xl p-space-md text-center cursor-pointer transition-colors"
            >
              <span className="material-symbols-outlined text-[28px] text-primary mb-1">
                {fileName ? 'check_circle' : 'cloud_upload'}
              </span>
              {fileName ? (
                <div className="text-on-surface font-body-sm">
                  <p className="font-semibold text-primary">{fileName}</p>
                  <p className="text-[11px] text-outline mt-0.5">Clique pour changer de fichier</p>
                </div>
              ) : (
                <div className="text-on-surface-variant font-body-sm">
                  <p className="font-medium text-on-surface">Clique pour sélectionner un fichier</p>
                  <p className="text-[11px] text-outline mt-0.5">Taille max conseillée : 25 Mo</p>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block font-label-md text-label-md text-on-surface mb-1">
              Commentaires ou conseils associés
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Précise les lemmes traités, les points d'attention ou la méthodologie..."
              className="w-full px-space-md py-2 bg-surface-container-low rounded-lg text-on-surface text-body-sm font-body-sm border border-surface-container focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Notice */}
          <div className="p-space-sm rounded-lg bg-surface-container text-on-surface-variant text-[12px] flex items-start gap-2">
            <span className="material-symbols-outlined text-primary text-[18px] shrink-0">info</span>
            <span>
              Les documents sont relus par des bénévoles de promotion avant d'être référencés comme « Vérifiés ».
            </span>
          </div>

          {/* Actions */}
          <div className="pt-2 flex items-center justify-end gap-space-sm border-t border-surface-container-high/60">
            <button
              type="button"
              onClick={onClose}
              className="px-space-md py-2 rounded-lg text-on-surface font-headline-sm text-[13px] hover:bg-surface-container transition-colors cursor-pointer"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !title.trim()}
              className="px-space-lg py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-headline-sm text-[13px] transition-all shadow-sm cursor-pointer disabled:opacity-50 flex items-center gap-1.5"
            >
              {isSubmitting ? (
                <>
                  <span className="inline-block w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  <span>Envoi en cours...</span>
                </>
              ) : (
                <>
                  <span>Soumettre la ressource</span>
                  <span className="material-symbols-outlined text-[16px]">send</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
