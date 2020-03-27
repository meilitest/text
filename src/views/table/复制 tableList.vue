<template>
	<div class="app-container">
		<el-table :data="tableData3" style="width: 100%">
			<el-table-column label="医疗机构" align="right" width="150">
				<el-table-column prop="name" label="收费项目" width="120"></el-table-column>
			</el-table-column>
			<el-table-column v-for="(item,index) of mechanism" :label="item" align="center" :key="item" width="120">
				<el-table-column label="次数" align="center" width="120">
					<template slot-scope="scope">
						{{scope.row.mechanism[index].frequency}}
					</template>
				</el-table-column>
				<el-table-column label="费用" align="center" width="120">
					<template slot-scope="scope">
						{{scope.row.mechanism[index].cost}}
					</template>
				</el-table-column>
			</el-table-column>

		</el-table>

	</div>
</template>

<script>
	export default {
		filters: {},
		data() {
			return {
				mechanism: ['医疗机构A', '医疗机构B', '医疗机构C', '医疗机构D'],
				tableData3: [{
						name: '项目A',
						mechanism: [{
								frequency: 8,
								cost: 1000
							},
							{
								frequency: 9,
								cost: 2000
							},
							{
								frequency: 10,
								cost: 3000
							},
							{
								frequency: 11,
								cost: 4000
							}
						]
					},
					{
						name: '项目B',
						mechanism: [{
								frequency: 3,
								cost: 3001
							},
							{
								frequency: 4,
								cost: 2002
							},
							{
								frequency: 5,
								cost: 2003
							},
							{
								frequency: 6,
								cost: 2004
							}
						]
					}
				]

			}
		},
		created() {},
		methods: {}
	}
</script>
<style lang="scss">
	.el-table thead.is-group th {
		background: none;
	}
	
	.el-table thead.is-group tr:first-of-type th:first-of-type {
		border-bottom: none;
	}
	/*.line{
		display: inline-block;
		width: 100%;
		height: 2px;
		background: red;
	}*/
	
	.el-table thead.is-group tr:first-of-type th:first-of-type:before {
		content: '';
		position: absolute;
		width: 100%;
		height: 1px;
		top: 0;
		left: 0;
		background-color: grey;
		display: block;
		transform: rotate(38deg);
		transform-origin:top left;
		-ms-transform: rotate(38deg); /* IE 9 */
		-ms-transform-origin:top left; /* IE 9 */
		-webkit-transform: rotate(38deg); /* Safari and Chrome */
		-webkit-transform-origin:top left; /* Safari and Chrome */
	}
	
	.el-table thead.is-group tr:last-of-type th:first-of-type:before {
		content: '';
		position: absolute;
		width: 100%;
		height: 1px;
		bottom: 0;
		right: 0;
		background-color: grey;
		transform: rotate(38deg);
		transform-origin:bottom right;
		-ms-transform: rotate(38deg); /* IE 9 */
		-ms-transform-origin:bottom right; /* IE 9 */
		-webkit-transform: rotate(38deg); /* Safari and Chrome */
		-webkit-transform-origin:bottom right; /* Safari and Chrome */
	}
</style>