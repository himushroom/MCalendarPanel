<template>
	<select-date
		v-model:date="value"
		v-model:showLunar="showLunar"
		v-model:showFestival="showFestival"
		v-model:beganMonday="beganMonday"
		v-model:disabled="disabled"
		v-model:switchTheme="switchTheme"
	/>
	<div class="m-calendar-panel__wrap">
		<m-calendar-panel
			ref="m-calendar"
			v-model:select="select"
			v-model:date="value"
			:show-lunar="showLunar"
			:show-festival="showFestival"
			:began-monday="beganMonday"
			:disabled="disabled"
			:theme="switchTheme ? 'black' : 'white'"
			@select-change="selectChange"
		>
			<!-- <template #today="scope">
                <div>今日</div>
        </template>-->
			<!-- <template #dateCell="scope">
                <div>{{ scope.data.day+'/'+scope.data.lunarDay }}</div>
                <div>{{ scope.data.festival[0] || scope.data.IDayCn }}</div>
        </template>-->
		</m-calendar-panel>
	</div>
</template>

<script>
export default {
	mounted() {
		// 默认选中
		console.log(this.$refs["m-calendar"]?.setSelectDate("2021-05-18"));
		console.log(this.$refs["m-calendar"]?.getSolarLunarInfo("2021-05-18"));
		console.log(this.$refs["m-calendar"]?.toDoubleDigit("5"));
	}
};
</script>

<script setup>
/* eslint-disable no-unused-vars */
import { ref } from "vue";
import SelectDate from "../components/SelectDate.vue";
import MCalendarPanel from "../components/MCalendarPanel";

// import MCalendarPanel from "../../dist/m-calendar-panel.common.js";
// import "../../dist/m-calendar-panel.css";

const value = ref("");
const select = ref("");
const showLunar = ref(true);
const showFestival = ref(true);
const beganMonday = ref(false);
const disabled = ref(false);
const switchTheme = ref(false);

const selectChange = (value, data) => {
	console.log(value);
	console.log(data);
};
</script>

<style>
.m-calendar-panel__wrap {
	width: 455px;
}
</style>
