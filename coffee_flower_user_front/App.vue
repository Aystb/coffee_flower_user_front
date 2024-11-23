<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>


<style lang="scss">
	/*每个页面公共scss */
	@import "uni_modules/uview-plus/index.scss";
	
	@import "./styles/flex.css";

	@import "./styles/text.css";
	
	@import "./styles/margin.css";
    @import "./styles/color.css";
	/*每个页面公共css */
</style>
