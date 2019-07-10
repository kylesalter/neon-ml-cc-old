export interface UserState {
  id: string;
  accessToken: string;
}

export const initialUserState: UserState = {
  id: '',
  accessToken: '',
};

// export class SignUpArgs {
//   email: string = '';
//   username: string = '';
//   password: string = '';
//   public constructor(
//     public readonly email: string,
//     public readonly username: string,
//     public readonly password: string
//   );
// }

// const changeUser = createAction('CHANGE_USER', resolve => (user: UserState) =>
//   resolve(user)
// );

export interface LogInAction {
  email: string;
  password: string;
}
const defaultLogInParams: LogInAction = {
  email: '',
  password: '',
};

export interface UserActions {
  signUp: SignUpAction;
  logIn: LogInAction;
  logOut: null;
  changeUser: UserState;
  resetUser: null;
}

const defaultParams: UserActions = {
  signUp: defaultSignUpParams,
  logIn: defaultLogInParams,
  logOut: null,
  changeUser: initialUserState,
  resetUser: null,
};

// // const { Types, Creators } = createActions(defaultParams);

// export const UserTypes = Types;
// export default Creators;

// export const changeUser = (
//   state: UserState,
//   { type, ...user }: { type: string } & UserState
// ): UserState => ({
//   ...state,
//   ...user,
// });

// export const resetUser = (): UserState => ({
//   ...initialUserState,
// });

// const handlers = {
//   [Types.CHANGE_USER]: changeUser,
//   [Types.RESET_USER]: resetUser,
// };

// const reducer = createReducer(initialUserState, handlers);
// type ReducerType = ReturnType<typeof reducer>;
// // console.log(jkk);
