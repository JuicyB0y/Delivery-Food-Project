export const fetchUser = () => {
  const userInfo =
    localStorage.getItem('user') !== 'indefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
  return userInfo;
};

export const fetchCart = () => {
  const userInfo =
    localStorage.getItem('cartItems') !== 'indefined'
      ? JSON.parse(localStorage.getItem('cartItems'))
      : localStorage.clear();
  return userInfo;
};
