import { create } from "zustand"

const store = set => ({
    region: null,

    setRegion: (region) => set({ region }),
})

export const useUserStore = create(store)