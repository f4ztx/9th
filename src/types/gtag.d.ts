interface Window {
  gtag: (
    command: "consent" | "js" | "config",
    target: string | Date,
    config?: {
      analytics_storage?: "granted" | "denied";
      anonymize_ip?: boolean;
    }
  ) => void;
  dataLayer: any[];
} 