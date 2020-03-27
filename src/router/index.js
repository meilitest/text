import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)

/* Layout */
import Layout from '@/layout'
const _import = file => () => import(`@/views/${file}`);

/*
 * 涉及动态权限的情况下 用户访问 路由列表有 菜单权限没有的页面 需要接口返回 无权限 重新登录
 * */
export const constantRoutes = [{
		path: '/login',
		component: () =>
			import('@/views/login/index'),
		hidden: true
	},
	{
		path: '/404',
		component: () =>
			import('@/views/404'),
		hidden: true
	},
	{
		path: '/',
		component: Layout,
		redirect: '/dashboard',
		children: [{
			path: 'dashboard',
			name: 'Dashboard',
			component: () =>
				import('@/views/dashboard/index'),
			meta: {
				title: 'Dashboard',
				icon: 'dashboard'
			}
		}]
	},
	{
		path: '/example',
		component: Layout,
		meta: {
			title: 'Example',
			icon: 'example'
		},
		children: [{
				path: 'table',
				component: _import('table/tableList'),
				meta: {
					title: 'Table',
					icon: 'table'
				}
			},
			{
				path: 'tree',
				name: 'Tree',
				component: _import('tree/treeList'),
				meta: {
					title: 'Tree',
					icon: 'tree'
				}
			}
		]
	},
	{
		path: '/table',
        component: Layout,
        children: [{
			path: 'tableList',
			component: _import('table/tableList'),
			meta: {
				title: 'Table',
				icon: 'table'
			}
		}]
	},
	{
		path: '/form',
		component: Layout,
		children: [{
			path: 'index',
			component: _import('form/index'),
			meta: {
				title: 'Form',
				icon: 'form'
			}
		}]
	},
	{
		path: '/nested',
		component: Layout,
		redirect: '/nested/menu1',
		name: 'Nested',
		meta: {
			title: 'Nested',
			icon: 'nested'
		},
		children: [{
				path: 'menu1',
				component: _import('nested/menu1/index'), // Parent router-view
				name: 'Menu1',
				meta: {
					title: 'Menu1'
				},
				children: [{
						path: 'menu1-1',
						component: _import('nested/menu1/menu1-1'),
						name: 'Menu1-1',
						meta: {
							title: 'Menu1-1'
						}
					},
					{
						path: 'menu1-2',
						component: _import('nested/menu1/menu1-2'),
						name: 'Menu1-2',
						meta: {
							title: 'Menu1-2'
						},
						children: [{
								path: 'menu1-2-1',
								component: _import('nested/menu1/menu1-2/menu1-2-1'),
								name: 'Menu1-2-1',
								meta: {
									title: 'Menu1-2-1'
								}
							},
							{
								path: 'menu1-2-2',
								component: _import('nested/menu1/menu1-2/menu1-2-2'),
								name: 'Menu1-2-2',
								meta: {
									title: 'Menu1-2-2'
								}
							}
						]
					},
					{
						path: 'menu1-3',
						component: () =>
							import('@/views/nested/menu1/menu1-3'),
						name: 'Menu1-3',
						meta: {
							title: 'Menu1-3'
						}
					}
				]
			},
			{
				path: 'menu2',
				component: () =>
					import('@/views/nested/menu2/index'),
				meta: {
					title: 'menu2'
				}
			}
		]
	}
];

const createRouter = () => new Router({
	// mode: 'history', // require service support
	scrollBehavior: () => ({
		y: 0
	}),
	routes: constantRoutes
})

const router = createRouter()
export function resetRouter() {
	const newRouter = createRouter()
	router.matcher = newRouter.matcher // reset router
}

export default router