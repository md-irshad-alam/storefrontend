const initialstate = {
  users: [
    // {
    //   fname: 'Md Hayan',
    //   lname: 'Alam',
    //   email: 'default@gmail.com',
    //   mobile: '+91-4855632543',
    // },
  ],
};

export const saveuserinfo = (fname, lname, email, mobile) => ({
  type: 'SaveUser',
  payload: {
    fname,
    lname,
    email,
    mobile,
  },
});

export const AuthReducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'SaveUser':
      return {
        ...state,
        user: [...state.users, action.payload],
      };
    default:
      return state;
  }
};
