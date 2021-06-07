export const loadUser = (state: {user: any, loading: boolean, error: string, isAuthenticated: boolean}, action: any) => {
    state.loading = false;
    state.user = action.payload.user;
    state.isAuthenticated = true;
};

export const noUser = (state: {user: any, loading: boolean, error: string, isAuthenticated: boolean}) => {
    state.loading = false;
    state.user = null
    state.isAuthenticated = false;
};