// action creator

export const Adddetails = (user) => ({
  type: 'add_user',
  payload: user,
});

export const addCategory = (category) => ({
  type: 'ADD_CATEGORY',
  payload: category,
});
export const editCategory = (catoId, category) => ({
  type: 'Edit_CATEGORY',
  payload: {
    catoId,
    category,
  },
});
export const addstore = (store) => ({
  type: 'ADD_STORE',
  payload: store,
});
export const AddColor = (color) => ({
  type: 'Add_Color',
  payload: color,
});
export const AddCountry = (country) => ({
  type: 'Add_Country',
  payload: country,
});
export const Addcurency = (curency) => ({
  type: 'Add_Courency',
  payload: curency,
});
export const EditCountry = (id, country) => ({
  type: 'EDIT_COUNTRY',
  payload: {
    id,
    country,
  },
});
export const AddState = (state) => ({
  type: 'Add_STATE',
  payload: {
    state,
  },
});
export const EditState = (stateId, state) => ({
  type: 'EDIT_STATE',
  payload: {
    stateId,
    state,
  },
});
export const AddDesignation = (designation) => ({
  type: 'Designation',
  payload: designation,
});
export const EditDesignation = (DesiId, designation) => ({
  type: 'Edit_Designation',
  payload: {
    DesiId,
    designation,
  },
});
export const AddHeels = (heel) => ({
  type: 'Heel',
  payload: heel,
});
export const EditHeels = (Heelid, heel) => ({
  type: 'Edit_Heel',
  payload: {
    Heelid,
    heel,
  },
});
export const AddUom = (uom) => ({
  type: 'Uom',
  payload: uom,
});
export const EditUom = (Uomid, uom) => ({
  type: 'Edit_Uom',
  payload: {
    Uomid,
    uom,
  },
});
export const AddGroup = (group) => ({
  type: 'Add_Group',
  payload: group,
});
export const EditGroup = (groupId, group) => ({
  type: 'Edit_Group',
  payload: {
    groupId,
    group,
  },
});
export const AddIngredient = (gredient) => ({
  type: 'Add_gredient',
  payload: gredient,
});
export const EditIngredient = (gredId, Grendient) => ({
  type: 'Edit_gredient',
  payload: {
    gredId,
    Grendient,
  },
});
export const AddForepart = (forepart) => ({
  type: 'Add_Forepart',
  payload: forepart,
});
export const EditForepart = (forId, forepart) => ({
  type: 'Edit_Forepart',
  payload: {
    forId,
    forepart,
  },
});

const initalstate = {
  categories: [],
  store: [],
  color: [],
  country: [
    {
      id: 1,
      country: 'india',
    },
    {
      id: 2,
      country: 'japan',
    },
    {
      id: 3,
      country: 'nepal',
    },
  ],
  state: [
    {
      id: 1,
      state: 'jharkhand',
    },
    {
      id: 2,
      state: 'Bihar',
    },
    {
      id: 3,
      state: 'Utter predesh',
    },
  ],
  user: [
    {
      id: 0,
      fname: 'irshad',
      lname: 'alam',
      email: 'hayan@gmail.com',
    },
  ],
  designation: [],
  heel: [],
  uom: [],
  group: [],
  gredient: [],
  forepart: [],
};

// Reducer
const Reducer = (state = initalstate, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case 'Edit_CATEGORY': {
      const { catoId, category } = action.payload;
      const editcategory = state.categories.map((item) =>
        item.id === catoId ? { ...item, category } : item
      );

      return {
        ...state,
        categories: editcategory,
      };
    }
    case 'add_user':
      return {
        ...state,
        user: [state.user, action.payload],
      };
    case 'ADD_STORE':
      return {
        ...state,
        store: [...state.store, action.payload],
      };
    case 'Add_Color':
      return {
        ...state,
        color: [...state.color, action.payload],
      };
    case 'Add_Country':
      return {
        ...state,
        country: [...state.country, action.payload],
      };
    case 'EDIT_COUNTRY': {
      const { id, country } = action.payload;
      const updatedCountries = state.country.map((c) =>
        c.id === id ? { ...c, country } : c
      );

      return {
        ...state,
        country: updatedCountries,
      };
    }
    // state
    case 'Add_STATE':
      return {
        ...state,
        state: [...state.state, action.payload],
      };

    case 'EDIT_STATE': {
      var { stateId, state } = action.payload;
      const updatedState = state.state.map((c) =>
        c.id === stateId ? { ...c, state } : c
      );

      return {
        ...state,
        state: updatedState,
      };
    }
    // designation
    case 'Designation':
      return {
        ...state,
        designation: [...state.designation, action.payload],
      };
    case 'Edit_Designation': {
      const { DesiId, designation } = action.payload;
      const editdesi = state.designation.map((item) =>
        item.id === DesiId ? { ...item, designation } : item
      );
      return {
        ...state,
        designation: editdesi,
      };
    }
    case 'Heel':
      return {
        ...state,
        heel: [...state.heel, action.payload],
      };
    case 'Edit_Heel': {
      const { Heelid, heel } = action.payload;
      const editheel = state.heel.map((item) =>
        item.id === Heelid ? { ...item, heel } : item
      );
      return {
        ...state,
        heel: editheel,
      };
    }
    case 'Uom':
      return {
        ...state,
        uom: [...state.uom, action.payload],
      };
    case 'Edit_Uom': {
      const { Uomid, uom } = action.payload;
      const edituom = state.uom.map((item) =>
        item.id === Uomid ? { ...item, uom } : item
      );
      return {
        ...state,
        uom: edituom,
      };
    }
    // group
    case 'Add_Group':
      return {
        ...state,
        group: [...state.group, action.payload],
      };

    case 'Add_gredient':
      return {
        ...state,
        gredient: [...state.gredient, action.payload],
      };
    case 'Edit_gredient': {
      const { gredId, Grendient } = action.payload;
      const editgredient = state.gredient.map((item) =>
        item.id === gredId ? { ...item, gredint: Grendient } : item
      );

      return {
        ...state,
        gredient: editgredient,
      };
    }
    case 'Add_Forepart':
      return {
        ...state,
        forepart: [...state.forepart, action.payload],
      };
    case 'Edit_Forepart': {
      const { forId, forepart } = action.payload;
      const editForepart = state.forepart.map((item) =>
        item.id === forId ? { ...item, forepart } : item
      );

      return {
        ...state,
        forepart: editForepart,
      };
    }

    default:
      return state;
  }
};

export default Reducer;

// Action creator
