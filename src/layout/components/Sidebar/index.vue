<template>
	<div :class="{'has-logo':showLogo}">
		<logo v-if="showLogo" :collapse="isCollapse" />
		<el-scrollbar wrap-class="scrollbar-wrapper">
			<el-menu :default-active="activeMenu" :collapse="isCollapse" :background-color="variables.menuBg" :text-color="variables.menuText" :unique-opened="false" :active-text-color="variables.menuActiveText" :collapse-transition="false" mode="vertical">
				<sidebar-item v-for="route in menuList" :key="route.path" :item="route" :base-path="route.path" />
			</el-menu>
		</el-scrollbar>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import Logo from './Logo'
	import SidebarItem from './SidebarItem'
	import variables from '@/styles/variables.scss'

	export default {
		components: {
			SidebarItem,
			Logo
		},
		data() {
			return {
				menuList: []
			}
		},
		computed: {
			...mapGetters([
				'routes',
				'sidebar'
			]),
			activeMenu() {
				const route = this.$route
				const {
					meta,
					path
				} = route
				// if set path, the sidebar will highlight the path you set
				if(meta.activeMenu) {
					return meta.activeMenu
				}
				return path
			},
			showLogo() {
				return this.$store.state.settings.sidebarLogo
			},
			variables() {
				return variables
			},
			isCollapse() {
				return !this.sidebar.opened
			}
		},
		mounted() {
			//菜单列表(数据是tree格式)
			//如果登录接口返回菜单则通过vuex获取
			/*
			 *	let storeNav= this.$store.getters.navTreeData;		
			 * let navList=this.$router.options.routes.concat(storeNav);
			 * */
			//如何需要单独请求接口则直接获取
			let nomalMenu = [{ //默认登录成功进去首页
				path: '/',
				redirect: '/dashboard',
				children: [{
					path: 'dashboard',
					meta: {
						title: 'Dashboard',
						icon: 'dashboard'
					}
				}]
			}];
			let resMenu = [{
					path: '/form',
					children: [{
						path: 'index',
						meta: {
							title: 'Form',
							icon: 'form'
						}
					}]
				},
				{
					path: '/table',
					children: [{
						path: 'tableList',
						meta: {
							title: 'Table',
							icon: 'table'
						}
					}]
				},
				{

					path: '/nested',
					meta: {
						title: 'Nested',
						icon: 'nested'
					},
					children: [{
							path: 'menu1',
							meta: {
								title: 'Menu1'
							},
							children: [{
									path: 'menu1-1',
									meta: {
										title: 'Menu1-1'
									}
								},
								{
									path: 'menu1-2',
									meta: {
										title: 'Menu1-2'
									},
									children: [{
											path: 'menu1-2-1',
											meta: {
												title: 'Menu1-2-1'
											}
										},
										{
											path: 'menu1-2-2',
											meta: {
												title: 'Menu1-2-2'
											}
										}
									]
								},
								{
									path: 'menu1-3',
									meta: {
										title: 'Menu1-3'
									}
								}
							]
						},
						{
							path: 'menu2',
							meta: {
								title: 'menu2'
							}
						}
					]
				}
			];
			this.menuList = nomalMenu.concat(resMenu);
		}
	}
</script>