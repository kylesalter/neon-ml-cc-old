export interface ThemerState {
  themeName: string;
}

export const initialThemerState: UserState = {
  themeName: 'neon-dark',
};

export interface ThemerActions {
  changeTheme: ThemerState;
}

const defaultParams: UserActions = {
  changeTheme: initialThemerState,
};

const { Types, Creators } = createActions(defaultParams);
export const UserTypes = Types;
export default Creators;

export const changeTheme = (
  state: UserState,
  { type, ...user }: { type: string } & UserState
): UserState => ({
  ...state,
  ...user,
});

export const reducer = createReducer(initialThemerState, {
  [Types.CHANGE_THEME]: changeTheme,
});
