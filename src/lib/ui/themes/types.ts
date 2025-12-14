/**
 * Core type definitions for the Tutors application.
 * Defines interfaces for services, data models, and user interactions.
 */

export type IconType = {
  type: string;
  color: string;
};

/**
 * Collection of icon definitions
 */
export type IconLib = Record<string, IconType>;

/**
 * Theme definition with icons
 */
export type Theme = {
  name: string; // Theme name
  icons: IconLib; // Theme icons
};

/**
 * Service for theme management and icon customization
 */
export interface ThemeService {
  /** Available themes with their icon libraries */
  themes: Theme[];
  /** current theme */
  currentTheme: any;
  lightMode: any;

  initDisplay(forceTheme?: string, forceMode?: string): void;
  setDisplayMode(mode: string): void;
  toggleDisplayMode(): void;
  setTheme(theme: string): void;
  getIcon(type: string): IconType;
  addIcon(type: string, icon: IconType): void;
  getTypeColour(type: string): string;
}
