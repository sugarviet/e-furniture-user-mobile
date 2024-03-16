import { create } from 'zustand';

const useAuth = create((set) => ({
  accessToken: null,
  refreshToken: null,
  accountId: null,

  setTokens: (accessToken, refreshToken, accountId) => {
    set({ accessToken, refreshToken, accountId });

  },

  clearTokens: () => {
    set({ accessToken: null, refreshToken: null, accountId: null });
  },
}));

export default useAuth;
