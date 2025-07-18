import { STORAGE_KEYS } from "@/lib/constants/api";
import { Idea } from "@/types/idea";

/**
 * Safely save data to sessionStorage with error handling
 */
export function saveToSessionStorage<T>(key: string, data: T): boolean {
  try {
    if (typeof window === "undefined") return false;

    sessionStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error(`Error saving to sessionStorage with key "${key}":`, error);
    return false;
  }
}

/**
 * Safely get data from sessionStorage with error handling
 */
export function getFromSessionStorage<T>(key: string): T | null {
  try {
    if (typeof window === "undefined") return null;

    const item = sessionStorage.getItem(key);
    if (!item) return null;

    return JSON.parse(item) as T;
  } catch (error) {
    console.error(
      `Error reading from sessionStorage with key "${key}":`,
      error
    );
    return null;
  }
}

/**
 * Remove item from sessionStorage
 */
export function removeFromSessionStorage(key: string): boolean {
  try {
    if (typeof window === "undefined") return false;

    sessionStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(
      `Error removing from sessionStorage with key "${key}":`,
      error
    );
    return false;
  }
}

/**
 * Specific utility for saving selected idea
 */
export function saveSelectedIdea(idea: Idea): boolean {
  return saveToSessionStorage(STORAGE_KEYS.SELECTED_IDEA, idea);
}

/**
 * Specific utility for getting selected idea
 */
export function getSelectedIdea(): Idea | null {
  return getFromSessionStorage<Idea>(STORAGE_KEYS.SELECTED_IDEA);
}
