import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export type TUseConfiguration = {
  mode: 'day' | 'night';
  setMode: () => void;
  translate: 'br' | 'us';
  setTranslate: () => void;
};

export const useConfiguration = create<TUseConfiguration>()(
  immer(
    persist(
      (set) => ({
        translate: 'us',
        mode: 'day',
        setTranslate: () => {
          set((state) => {
            state.translate = state.translate === 'us' ? 'br' : 'us';
          });
        },
        setMode: () => {
          set((state) => {
            state.mode = state.mode === 'day' ? 'night' : 'day';
          });
        },
      }),
      { name: 'translate' },
    ),
  ),
);
