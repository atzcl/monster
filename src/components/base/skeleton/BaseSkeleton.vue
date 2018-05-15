<template functional>
	<div class="timeline-item" v-bind="data.attrs">
		<p class="card-loading-block" style="width: 94%;"></p>
		<p>
				<span class="card-loading-block" style="width: 28%;"></span>
				<span class="card-loading-block" style="width: 62%;"></span>
		</p>
		<p>
				<span class="card-loading-block" style="width: 22%;"></span>
				<span class="card-loading-block" style="width: 66%;"></span>
		</p>
		<p>
				<span class="card-loading-block" style="width: 56%;"></span>
				<span class="card-loading-block" style="width: 39%;"></span>
		</p>
		<p>
				<span class="card-loading-block" style="width: 21%;"></span>
				<span class="card-loading-block" style="width: 15%;"></span>
				<span class="card-loading-block" style="width: 40%;"></span>
		</p>
	</div>
</template>

<style lang="stylus" scoped>
.timeline-item {
	background: #fff;
	border: none !important;
	border-radius: 3px;
	padding: 12px;
	margin: 0 auto;
	width: inherit !important;
	height: 100%;
}

/* 样式一 */
.animated-background {
	animation-duration: 2s;
	animation-fill-mode: forwards;
	animation-iteration-count: infinite;
	animation-name: placeHolderShimmer;
	animation-timing-function: linear;
	background: #f6f7f8;
	background: linear-gradient(to right, #f3f3f3 8%, #fff 18%, #f3f3f3 33%);
	background-size: 800px 104px;
	width: 100%;
	height: 15px;
	position: relative;
	margin-bottom: 10px;
}

@keyframes placeHolderShimmer {
	0% {
		background-position: -468px 0;
	}

	100% {
		background-position: 468px 0;
	}
}

/* 样式二，抄袭于 ant design */
.card-loading-block {
	display: inline-block;
	margin: 5px 1% 0;
	height: 14px;
	border-radius: 2px;
	background: -webkit-linear-gradient(left, rgba(207, 216, 220, 0.2), rgba(207, 216, 220, 0.4), rgba(207, 216, 220, 0.2));
	background: linear-gradient(90deg, rgba(207, 216, 220, 0.2), rgba(207, 216, 220, 0.4), rgba(207, 216, 220, 0.2));
	-webkit-animation: card-loading 1.4s ease infinite;
	animation: card-loading 1.4s ease infinite;
	background-size: 600% 600%;
}

@keyframes card-loading {
	0%, to {
		background-position: 0 50%;
	}

	50% {
		background-position: 100% 50%;
	}
}

@keyframes card-loading {
	0%, to {
		background-position: 0 50%;
	}

	50% {
		background-position: 100% 50%;
	}
}
</style>
