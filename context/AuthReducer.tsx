enum AuthActionKind {
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGOUT_SUCCESS = "LOGOUT_SUCCESS",
}

interface ActionProps {
  type: AuthActionKind;
  payload: any;
}

const AuthReducer = (state: any, action: ActionProps) => {
  const { type, payload } = action;

  switch (type) {
    case AuthActionKind.LOGIN_SUCCESS: {
      return {
        user: {
          name: payload.name,
          email: payload.email,
        },
        token: payload.token,
        isLogged: true,
      };
    }

    case AuthActionKind.LOGOUT_SUCCESS: {
      return {
        user: null,
        token: "",
        isLogged: false,
      };
    }
  }
};

export default AuthReducer;
