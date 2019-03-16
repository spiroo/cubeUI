const getters = {
  requestLoading: state => state.app.requestLoading,
  token: state => state.user.token,
  userList: state => state.user.userList,
  name: state => state.user.name
};
export default getters;
