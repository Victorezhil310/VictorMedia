// Custom privacy-respecting Analytics tracking helper

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackToolUsage = (toolSlug: string) => {
  trackEvent('tool_complete', 'Tools', toolSlug);
};

export const trackToolOpen = (toolSlug: string) => {
  trackEvent('tool_open', 'Tools', toolSlug);
};
