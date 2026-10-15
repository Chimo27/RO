import React, { useState } from 'react';
import { AdviceGuide } from '../types';

interface ArticleModalProps {
  guide: AdviceGuide | null;
  onClose: () => void;
  onBookmarkToggle?: (guideId: string) => void;
  isBookmarked?: boolean;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  guide,
  onClose,
  onBookmarkToggle,
  isBookmarked = false,
}) => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  if (!guide) return null;

  const toggleStep = (idx: number) => {
    if (completedSteps.includes(idx)) {
      setCompletedSteps(completedSteps.filter((i) => i !== idx));
    } else {
      setCompletedSteps([...completedSteps, idx]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="w-full max-w-3xl bg-surface-container-lowest rounded-2xl shadow-2xl border border-surface-container-high overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-space-lg py-3.5 bg-surface-container-low border-b border-surface-container-high shrink-0">
          <div className="flex items-center gap-space-sm">
            <span className={`px-space-sm py-0.5 rounded-full ${guide.categoryPillBg} ${guide.categoryPillText} font-label-sm text-label-sm font-semibold`}>
              {guide.categoryLabel}
            </span>
            <span className="text-outline font-label-sm text-label-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">schedule</span>
              {guide.readTime}
            </span>
          </div>

          <div className="flex items-center gap-space-xs">
            {onBookmarkToggle && (
              <button
                onClick={() => onBookmarkToggle(guide.id)}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  isBookmarked
                    ? 'bg-primary-fixed text-primary'
                    : 'text-outline hover:text-on-surface hover:bg-surface-container'
                }`}
                title="Sauvegarder"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {isBookmarked ? 'bookmark' : 'bookmark_border'}
                </span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-6">
          <div className="space-y-3 border-b border-surface-container pb-6">
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              {guide.title}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {guide.summary}
            </p>
          </div>

          <div className="space-y-6 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            <p className="font-medium text-on-surface text-[15px]">
              {guide.fullArticle.introduction}
            </p>

            {guide.fullArticle.sections.map((section, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="font-headline-md text-headline-md text-on-surface pt-2">
                  {section.heading}
                </h3>
                <p>{section.content}</p>
                {section.bulletPoints && (
                  <ul className="space-y-2 pl-2 pt-1">
                    {section.bulletPoints.map((bp, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Practical Action Steps Checklist */}
            <div className="p-space-lg rounded-xl bg-surface-container-low border border-surface-container space-y-space-sm mt-8">
              <div className="flex items-center gap-2 text-primary font-headline-sm text-headline-sm">
                <span className="material-symbols-outlined text-[20px]">task_alt</span>
                <span>Plan d'action concret à appliquer dès aujourd'hui</span>
              </div>
              <div className="space-y-2 pt-1">
                {guide.fullArticle.actionSteps.map((step, sIdx) => {
                  const isChecked = completedSteps.includes(sIdx);
                  return (
                    <button
                      key={sIdx}
                      onClick={() => toggleStep(sIdx)}
                      className="w-full flex items-start gap-3 p-2 rounded-lg hover:bg-surface-container text-left transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[20px] text-primary shrink-0 mt-0.5">
                        {isChecked ? 'check_box' : 'check_box_outline_blank'}
                      </span>
                      <span className={`text-body-sm ${isChecked ? 'line-through text-outline' : 'text-on-surface'}`}>
                        {step}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-space-lg py-3 bg-surface-container-low border-t border-surface-container flex items-center justify-between">
          <span className="font-label-sm text-label-sm text-outline">
            S5 Compass • Méthodologie active de promotion
          </span>
          <button
            onClick={onClose}
            className="px-space-md py-1.5 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md transition-all cursor-pointer"
          >
            Fermer le guide
          </button>
        </div>
      </div>
    </div>
  );
};
