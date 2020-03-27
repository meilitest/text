const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  navTreeData: state => state.navTreeData,// 获取菜单列表
}
export default getters
