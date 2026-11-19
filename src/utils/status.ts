export interface StatusConfig {
  label: string;
  badgeClass: string;
  dotClass: string;
}

export function getStatusConfig(status: string): StatusConfig {
  switch (status) {
    case 'available':
      return {
        label: 'Dostępna od ręki',
        badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
        dotClass: 'bg-emerald-500',
      };
    case 'made_to_order':
      return {
        label: 'Na zamówienie',
        badgeClass: 'bg-sky-50 text-sky-800 border-sky-200/80',
        dotClass: 'bg-sky-500',
      };
    case 'in_progress':
      return {
        label: 'Na drutach',
        badgeClass: 'bg-amber-50 text-amber-900 border-amber-200/80',
        dotClass: 'bg-amber-500',
      };
    case 'concept':
      return {
        label: 'W planach / Koncept',
        badgeClass: 'bg-stone-100 text-stone-700 border-stone-200',
        dotClass: 'bg-stone-400',
      };
    case 'sold':
      return {
        label: 'Znalazła dom',
        badgeClass: 'bg-stone-200/80 text-stone-500 border-stone-300',
        dotClass: 'bg-stone-400',
      };
    default:
      return {
        label: status,
        badgeClass: 'bg-stone-100 text-stone-700 border-stone-200',
        dotClass: 'bg-stone-400',
      };
  }
}

export function getCategoryLabel(category: string): string {
  switch (category) {
    case 'sci-fi':
      return 'Sci-Fi';
    case 'post-apo':
      return 'Post-Apo';
    case 'retro':
      return 'Retro';
    case 'zwierzaki':
      return 'Zwierzaki';
    case 'fantastyka':
      return 'Fantastyka';
    default:
      return category;
  }
}
