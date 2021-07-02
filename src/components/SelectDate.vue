<template>
  <div class="select-date">
    <div class="check-wrap">
      <el-checkbox :model-value="showLunar" class="check" @input="lunarChange">农历</el-checkbox>
      <el-checkbox :model-value="showFestival" class="check" @input="festivalChange">节日</el-checkbox>
      <el-checkbox :model-value="beganMonday" class="check" @input="beganMondayChange">从周一开始</el-checkbox>
      <el-checkbox :model-value="disabled" class="check" @input="disabledChange">禁用点击</el-checkbox>
      <el-switch
        :model-value="switchTheme"
        class="check"
        active-color="#eeee99"
        active-text="black"
        inactive-color="#409EFF"
        inactive-text="white"
        @input="switchThemeChange"
      ></el-switch>
    </div>
    <div class="select-date-wrap">
      <el-select
        v-model="year"
        size="small"
        placeholder="请选择年份"
        class="select-date-item"
        filterable
        @change="handleChange"
      >
        <el-option
          v-for="(item, i) in lunarInfo"
          :key="i"
          :label="`${1900 + i}年`"
          :value="1900 + i"
        ></el-option>
      </el-select>
      <div class="month-wrap">
        <i :disabled="year <= minYear" class="el-icon-arrow-left" @click="skipToPrevMonth"></i>
        <el-select
          v-model="month"
          size="small"
          placeholder="请选择月份"
          class="select-date-item"
          filterable
          @change="handleChange"
        >
          <el-option v-for="item in 12" :key="item" :label="`${item}月`" :value="item"></el-option>
        </el-select>
        <i :disabled="year >= maxYear" class="el-icon-arrow-right" @click="skipToNextMonth"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { lunarInfo } from "./MCalendarPanel/utils.js";

export default {
  name: "SelectDate",
  props: {
    date: [Date, String],
    showLunar: Boolean,
    showFestival: Boolean,
    beganMonday: Boolean,
    disabled: Boolean,
    switchTheme: Boolean
  },
  emits: [
    "update:date",
    "update:showLunar",
    "update:showFestival",
    "update:beganMonday",
    "update:disabled",
    "update:switchTheme"
  ],
  data() {
    return {
      lunarInfo,
      year: "",
      month: "",
      minYear: 1900,
      maxYear: 2100
    };
  },
  watch: {
    date: {
      deep: true,
      immediate: true,
      handler(val) {
        let date;
        if (!val) {
          date = new Date();
        } else {
          date = val instanceof Date ? val : new Date(val);
        }
        this.year = date.getFullYear();
        this.month = date.getMonth() + 1;
      }
    }
  },
  methods: {
    handleChange() {
      this.$emit("update:date", new Date(this.year, this.month - 1));
    },
    lunarChange(e) {
      this.$emit("update:showLunar", e.target.checked);
    },
    festivalChange(e) {
      this.$emit("update:showFestival", e.target.checked);
    },
    beganMondayChange(e) {
      this.$emit("update:beganMonday", e.target.checked);
    },
    disabledChange(e) {
      this.$emit("update:disabled", e.target.checked);
    },
    switchThemeChange(value) {
      this.$emit("update:switchTheme", value);
    },
    skipToPrevMonth() {
      const year = this.month - 2 < 0 ? this.year - 1 : this.year;
      const month = this.month - 2 < 0 ? 11 : this.month - 2;

      this.$emit("update:date", new Date(year, month));
    },
    skipToNextMonth() {
      const year = this.month > 11 ? this.year + 1 : this.year;
      const month = this.month > 11 ? 0 : this.month;

      this.$emit("update:date", new Date(year, month));
    }
  }
};
</script>

<style lang="stylus" scoped>
.select-date
  margin-bottom 10px

.check-wrap
  margin-bottom 25px
  width 500px
  line-height 28px

.check
  margin-right 0
  margin-left 25px

.select-date-wrap
  display flex
  align-items center

.select-date-item
  width 100px

.month-wrap
  display flex
  align-items center
  margin-left 25px

  i
    margin 0 5px
    color #777
    cursor pointer
</style>