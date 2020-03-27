<template>
	<div class="dashboard-container">
		<div class="dashboard-text">name: {{ name }}</div>
	</div>
</template>

<script>
	export default {
		name: 'Dashboard',
		data() {
			return {
				name: '',
			}
		},
		created() {
			//			this.name=this.$store.getters.appInfo;
		}
	}
</script>

<style lang="scss" scoped>
	.dashboard {
		&-container {
			margin: 30px;
		}
		&-text {
			font-size: 30px;
			line-height: 46px;
		}
		.tree-view-item-key {
			color: #204a87;
		}
		.tree-view-item-value {
			color: #4e9a06;
		}
	}
</style>