import { create } from 'zustand';

interface AppState {
  currentSection: number;
  setCurrentSection: (section: number) => void;
  isLoaded: boolean;
  setIsLoaded: (loaded: boolean) => void;
  scrollProgress: number;
  setScrollProgress: (progress: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentSection: 0,
  setCurrentSection: (currentSection) => set({ currentSection }),
  isLoaded: false,
  setIsLoaded: (isLoaded) => set({ isLoaded }),
  scrollProgress: 0,
  setScrollProgress: (scrollProgress) => set({ scrollProgress }),
}));
