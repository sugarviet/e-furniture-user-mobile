import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useAuthStore = create(
  persist((set, get) => (
    {
      accessToken: null,
      refreshToken: null,
      accountId: null,

      setTokens: (accessToken, refreshToken, accountId) => {
        set({ accessToken, refreshToken, accountId });

      },

      clearTokens: () => {
        set({ accessToken: null, refreshToken: null, accountId: null });
      },
    }
  ),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
)

export default useAuthStore;
