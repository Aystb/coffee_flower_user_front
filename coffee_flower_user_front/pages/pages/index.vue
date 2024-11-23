<template>
	<view class="flex-y pd-20">
		this is index page
		<u-icon name="map" size="22"></u-icon>
		<button @click="jumpToHome()">jumpToHome</button>
    <button @click="jumpTomarkets()">jumpTomarket</button>
	</view>
</template>

<script setup>
	function jumpToHome(){
		uni.redirectTo({ url: 'pages/pages/home' })

}

function jumpTomarkets(){
	uni.redirectTo({ url: 'pages/pages/markets' })

}

</script>

<style scoped>
	
</style>
