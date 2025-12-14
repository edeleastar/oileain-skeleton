/**
 * Theme management service for the Tutors application.
 * Handles theme switching, display modes, icon libraries, and special theme effects.
 * Supports multiple icon sets and persists user preferences.
 */

import type { IconType, Theme, ThemeService } from "../types";
import { FluentIconLib } from "../icons/fluent-icons";

import { rune } from "$lib/runes.svelte";

/**
 * Implementation of the ThemeService interface.
 * Manages application theming, icon sets, and theme-specific effects.
 */

export const themeService: ThemeService = {
  /** Available themes with their associated icon libraries */
  themes: [
    { name: "tutors", icons: FluentIconLib },
    { name: "classic", icons: FluentIconLib },
    { name: "dyslexia", icons: FluentIconLib },
    { name: "terminus", icons: FluentIconLib },
    { name: "rose", icons: FluentIconLib },
    { name: "cerberus", icons: FluentIconLib },
  ] as Theme[],


  /** Current light move layout */
  lightMode: rune<string>("light"),

  /** Current theme */
  currentTheme: rune<string>("tutors"),

  /**
   * Initializes theme display settings on application start
   * Handles both forced themes and user preferences
   * @param forceTheme - Optional theme to enforce
   * @param forceMode - Optional display mode to enforce
   */
  initDisplay(forceTheme?: string, forceMode?: string): void {
    if (forceTheme && forceMode && !localStorage[forceTheme]) {
      this.setDisplayMode(forceMode);
      this.setTheme(forceTheme);
      localStorage[forceTheme] = true;
    } else {
      this.setDisplayMode(localStorage.modeCurrent);
      this.setTheme(localStorage.theme);
    }
  },

  /**
   * Sets and persists the display mode (light/dark)
   * Updates DOM classes for theme application
   * @param mode - Display mode to set
   */
  setDisplayMode(mode: string): void {
    if (!mode) {
      mode = "light";
    }
    this.lightMode.value = mode;
    localStorage.modeCurrent = mode;
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },

  /**
   * Toggles the display mode between light and dark
   */
  toggleDisplayMode(): void {
    if (this.lightMode.value === "dark") {
      this.setDisplayMode("light");
    } else {
      this.setDisplayMode("dark");
    }
  },

  /**
   * Sets and persists the current theme
   * Updates DOM attributes and triggers theme-specific events
   * @param theme - Theme name to set
   */
  setTheme(theme: string): void {
    if (!theme) {
      theme = "tutors";
    }
    if (themeService.themes.find((theme) => theme.name === this.currentTheme.value)) {
      this.currentTheme.value = theme;
    } else {
      this.currentTheme.value = "tutors";
    }
    document.documentElement.setAttribute("data-theme", this.currentTheme.value);
    localStorage.theme = this.currentTheme.value;
  },

  /**
   * Retrieves an icon from the current theme's icon library
   * Falls back to default icon if not found
   * @param type - Icon type to retrieve
   * @returns IconType definition for requested type
   */
  getIcon(type: string): IconType {
    const iconLib = themeService.themes.find((theme) => theme.name === this.currentTheme.value)?.icons;
    if (iconLib && iconLib[type]) {
      return iconLib[type];
    } else {
      console.log("No type found for icon", type);
      return FluentIconLib.tutors;
    }
  },

  /**
   * Adds a new icon to all available icon libraries
   * @param type - Icon type identifier
   * @param icon - Icon definition to add
   */
  addIcon(type: string, icon: IconType) {
    FluentIconLib[type] = icon;
  },

  /**
   * Gets the color associated with a type in the current theme
   * @param type - Type to get color for
   * @returns Color string or 'primary' if not found
   */
  getTypeColour(type: string): string {
    const iconLib = themeService.themes.find((theme) => theme.name === this.currentTheme.value)?.icons;
    if (iconLib && iconLib[type]) {
      return iconLib[type].color;
    }
    return "primary";
  },
};
