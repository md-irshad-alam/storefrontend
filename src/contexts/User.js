import { Axios } from './index';
export async function LoginAPI(email, password) {
  return Axios.post('/auth/login', {
    email,
    password,
  });
}

export async function registerApi(fname, lname, email, mobile, password) {
  return Axios.post('auth/register', {
    fname,
    lname,
    email,
    mobile,
    password,
  });
}
export const getusers = () => {
  return Axios.get('auth/users');
};
export const loggedout = (token) => {
  return Axios.post('/auth/logout', { token });
};
export const addCategory = () => {
  return Axios.post('');
};
export const getCategory = () => {
  return Axios.get();
};
export const updateCategory = () => {
  return Axios.put('');
};

export const getstore = () => {
  return Axios.get('/Store/get-store');
};
export const getcolor = () => {
  return Axios.get('/Color/get-color');
};
export const getuom = () => {
  return Axios.get('/UOM/get_UOM');
};
export const getheel = () => {
  return Axios.get('/HeelCategory/get-HeelCategory');
};
export const getforpart = () => {
  return Axios.get('/ForePartCategory/get-ForePartCategory');
};
export const gettype = () => {
  return Axios.get('/Type/get-Type');
};
export const getcategory = () => {
  return Axios.get('ForePartCategory/');
};
export const getgroup = () => {
  return Axios.get('/ArticleGroupMaster/get-ArticleGroupMaster');
};
export const getstate = () => {
  return Axios.get('/country/get-country');
};
export const getState = () => {
  return Axios.get('/state/get-state');
};
// product
export const saveProduct = (
  article_code,
  article_name,
  group,
  category,
  heel_category,
  forepart_category,
  UOM,
  hardness,
  price,
  gstin,
  hsn,
  remark,
  type,
  image,
  tikki,
  tikki_one,
  tikki_two,
  logo_r,
  logo_l,
  outsole,
  midsole,
  bottom,
  side_wall,
  heel,
  fore,
  sidewall_color,
  remarks,
  logo_rs,
  logo_ls,
  outsoles,
  midsoles,
  bottoms,
  side_walls,
  heels,
  fores,
  sidewall_colors,
  remarkss,
  size,
  outSize,
  rate,
  mould,
  outsole_wt,
  sidewall_wt,
  bottom_wt,
  logo_l_wt,
  logo_r_wt,
  sidewall_logo_wt,
  group_id,
  wl_22_1,
  manufactured,
  target,
  dummy_moulds,
  store
) => {
  return Axios.post('Product/add-Product', {
    article_code,
    article_name,
    group,
    category,
    heel_category,
    forepart_category,
    UOM,
    hardness,
    price,
    gstin,
    hsn,
    remark,
    type,
    image,
    tikki,
    tikki_one,
    tikki_two,
    logo_r,
    logo_l,
    outsole,
    midsole,
    bottom,
    side_wall,
    heel,
    fore,
    sidewall_color,
    remarks,
    logo_rs,
    logo_ls,
    outsoles,
    midsoles,
    bottoms,
    side_walls,
    heels,
    fores,
    sidewall_colors,
    remarkss,
    size,
    outSize,
    rate,
    mould,
    outsole_wt,
    sidewall_wt,
    bottom_wt,
    logo_l_wt,
    logo_r_wt,
    sidewall_logo_wt,
    group_id,
    wl_22_1,
    manufactured,
    target,
    dummy_moulds,
    store,
  });
};
export const UpdateProduct = (
  id,
  article_code,
  article_name,
  group,
  category,
  heel_category,
  forepart_category,
  UOM,
  hardness,
  price,
  gstin,
  hsn,
  remark,
  type,
  image,
  tikki,
  tikki_one,
  tikki_two,
  logo_r,
  logo_l,
  outsole,
  midsole,
  bottom,
  side_wall,
  heel,
  fore,
  sidewall_color,
  remarks,
  logo_rs,
  logo_ls,
  outsoles,
  midsoles,
  bottoms,
  side_walls,
  heels,
  fores,
  sidewall_colors,
  remarkss,
  size,
  outSize,
  rate,
  mould,
  outsole_wt,
  sidewall_wt,
  bottom_wt,
  logo_l_wt,
  logo_r_wt,
  sidewall_logo_wt,
  group_id,
  wl_22_1,
  manufactured,
  target,
  dummy_moulds,
  store
) => {
  return Axios.put(`Product/update-Product/${id}`, {
    article_code,
    article_name,
    group,
    category,
    heel_category,
    forepart_category,
    UOM,
    hardness,
    price,
    gstin,
    hsn,
    remark,
    type,
    image,
    tikki,
    tikki_one,
    tikki_two,
    logo_r,
    logo_l,
    outsole,
    midsole,
    bottom,
    side_wall,
    heel,
    fore,
    sidewall_color,
    remarks,
    logo_rs,
    logo_ls,
    outsoles,
    midsoles,
    bottoms,
    side_walls,
    heels,
    fores,
    sidewall_colors,
    remarkss,
    size,
    outSize,
    rate,
    mould,
    outsole_wt,
    sidewall_wt,
    bottom_wt,
    logo_l_wt,
    logo_r_wt,
    sidewall_logo_wt,
    group_id,
    wl_22_1,
    manufactured,
    target,
    dummy_moulds,
    store,
  });
};
export const getProduct = () => {
  return Axios.get('Product/get-Product');
};
export const DeleteProduct = (id) => {
  return Axios.delete(`Product/delete-Product/${id}`);
};
