/**
 * Tracking configuration for managedsuppliers.com.
 *
 * Nothing loads from Google until the visitor accepts in the cookie banner
 * (Google Consent Mode v2, default-denied). Fill these in to activate tracking;
 * empty strings mean "not configured yet" and the banner still works, it just
 * loads nothing. GA4 and Google Ads are meant to fire *through* the GTM
 * container, so gtmId is the main one to set.
 */
export const ANALYTICS = {
  /** Google Tag Manager container, e.g. "GTM-XXXXXXX". Loads GA4 + Ads. */
  gtmId: "",
  /** Optional: GA4 measurement ID if you also want it loaded directly, e.g. "G-XXXXXXXXXX". Normally leave empty and configure GA4 inside GTM. */
  ga4Id: "",
  /** Optional: Google Ads ID, e.g. "AW-XXXXXXXXX". Normally configure inside GTM. */
  adsId: "",
  /** Google Search Console meta-tag verification code (the content="" value). Leave empty if verifying by DNS TXT or the GTM/GA method. */
  searchConsoleVerification: "",
};

export const CONSENT_STORAGE_KEY = "ms-cookie-consent";
