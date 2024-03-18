export const get_login = () => {
    return 'http://34.126.181.161:4646/api/v1/auth/login'
}
export const get_register = () => {
    return ''
}

// import { create } from 'zustand';

// const useAuthStore = create((set) => ({
//   accessToken: null,
//   refreshToken: null,
//   accountId: null,

//   setTokens: (accessToken, refreshToken, accountId) => {
//     set({ accessToken, refreshToken, accountId });

//   },

//   clearTokens: () => {
//     set({ accessToken: null, refreshToken: null, accountId: null });
//   },
// }));

// export default useAuthStore;
