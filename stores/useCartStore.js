import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware";

const store = set => ({
    purchaseItems: [],

    setPurchaseItems: (list) => set({ purchaseItems: list }),
})

export const useCartStore = create(persist(store, { name: "cart-store", storage: createJSONStorage(() => AsyncStorage) }));