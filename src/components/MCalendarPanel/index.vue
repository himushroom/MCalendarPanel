<template>
  <div :class="['m-calendar', `theme-${theme}`]">
    <div class="weeks">
      <div v-for="week in weeks" :key="week" class="week">{{ week }}</div>
    </div>
    <div :class="['panel', {'disabled': disabled}]">
      <div
        v-for="(item, index) in dateArr"
        :key="index"
        :class="['item', {'not-now-month': item.notNowMonth}]"
      >
        <div
          :class="['line', {'now-day': isToday === item.isToday, 'select': isSelect === item.isToday, selectClassName: isSelect === item.isToday}]"
          :style="isSelect === item.isToday ? selectStyle : {}"
          @click="handleChange(item.isToday, item)"
        >
          <slot
            v-if="$slots.today && isToday === item.isToday"
            :data="getSolarLunarInfo(isToday)"
            name="today"
          ></slot>
          <template v-else>
            <slot v-if="$slots.dateCell" :data="getSolarLunarInfo(item.isToday)" name="dateCell"></slot>
            <template v-else>
              <div>{{ item.dateNum || '' }}</div>
              <div
                v-if="item.lunar.isFestival && showFestival"
                :class="['extra', festivalClassName]"
                :style="festivalStyle"
              >{{ item.lunar.festival[0] }}</div>
              <div v-else class="extra">{{ item.dateNum ? `${currentLunar(item.lunar)}` : '' }}</div>
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { getSolarLunar } from "./utils.js";

export default defineComponent({
  name: "MCalendarPanel",
  props: {
    width: {
      type: String,
      default: "100%"
    },
    date: {
      // 指定日期，默认为当日
      type: [Date, String],
      default: new Date()
    },
    select: {
      // 指定选中日期，默认无
      type: [Date, String],
      default: ""
    },
    beganMonday: {
      // 是否从周一开始展示。默认为周日
      type: Boolean,
      default: false
    },
    showLunar: {
      // 是否显示农历，默认显示
      type: Boolean,
      default: true
    },
    showFestival: {
      // 是否显示节日，默认显示
      type: Boolean,
      default: true
    },
    theme: {
      // 主题：白色/黑色
      type: String,
      default: "white"
    },
    festivalStyle: {
      // 节日单独配置样式
      type: Object,
      default: () => {}
    },
    festivalClassName: {
      // 节日单独配置样式
      type: String,
      default: ""
    },
    selectStyle: {
      // 选中日期时的样式
      type: Object,
      default: () => {}
    },
    selectClassName: {
      // 选中日期时的样式
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:date", "update:select", "date-change", "select-change"],
  data() {
    return {
      dateArr: [],
      isToday: "",
      value: new Date(), // 内部控制的日期
      isSelect: ""
    };
  },
  computed: {
    cWidth() {
      return this.width;
    },
    year() {
      return this.value.getFullYear();
    },
    month() {
      return this.value.getMonth();
    },
    weeks() {
      if (!this.beganMonday) {
        return ["日", "一", "二", "三", "四", "五", "六"];
      } else {
        return ["一", "二", "三", "四", "五", "六", "日"];
      }
    }
  },
  watch: {
    date: {
      deep: true,
      immediate: true,
      handler(val) {
        if (!val) return;
        const date = val instanceof Date ? val : new Date(val);

        this.value = date;
      }
    },
    value: {
      deep: true,
      immediate: true,
      handler() {
        this.getMonthDays(this.year, this.month);
      }
    },
    select: {
      deep: true,
      immediate: true,
      handler(val) {
        if (val instanceof Date) {
          this.isSelect = val;
        }
        if (val && val instanceof String) {
          this.isSelect = new Date(val);
        }
      }
    },
    beganMonday() {
      this.getMonthDays(this.year, this.month);
    }
  },
  created() {
    const now = new Date();
    this.isToday = `${now.getFullYear()}-${this.toDoubleDigit(
      now.getMonth() + 1
    )}-${this.toDoubleDigit(now.getDate())}`;
  },
  methods: {
    getMonthDays(setYear, setMonth) {
      // 全部时间的月份都是按0~11基准，显示月份才+1
      const dateArr = []; // 需要遍历的日历数组数据
      let arrLen = 0; // dateArr的数组长度，显示6排，多出来的格子补充下月数据

      const now = setYear ? new Date(setYear, setMonth) : new Date();
      const year = setYear || now.getFullYear();
      const month = setMonth || now.getMonth(); // 没有+1方便后面计算当月总天数
      let startWeek = new Date(
        `${year}-${this.toDoubleDigit(month + 1)}-01`
      ).getDay(); // 目标月1号对应的星期
      startWeek = this.beganMonday ? startWeek - 1 : startWeek;

      // month: 0 ~ 11
      const isJun = month < 1; // 当前月是否在一月
      const isDec = month + 1 > 11; // 当前月是否在十二月

      const dayNums = new Date(year, month + 1, 0).getDate(); // 获取目标月有多少天

      const prevDayNums = isJun // 计算上个月有多少天
        ? new Date(year - 1, 12, 0).getDate()
        : new Date(year, month, 0).getDate();

      let obj = {};
      let num = 0;

      arrLen = startWeek + dayNums;
      let fullNumber = 6 * 7;
      for (let i = 0; i < fullNumber; i++) {
        num = i - startWeek + 1;

        if (i >= startWeek && i < arrLen) {
          obj = {
            isToday: `${year}-${this.toDoubleDigit(
              this.toDoubleDigit(month + 1)
            )}-${this.toDoubleDigit(num)}`,
            dateNum: num,
            lunar: getSolarLunar(+new Date(year, month, num))
          };
        } else if (i < startWeek) {
          // 上月数据
          const prevYear = isJun ? year - 1 : year;
          const prevMonth = isJun ? 12 : month;
          const prevDay = prevDayNums + num;
          obj = {
            isToday: `${prevYear}-${this.toDoubleDigit(
              prevMonth
            )}-${this.toDoubleDigit(prevDay)}`,
            dateNum: prevDay,
            lunar: getSolarLunar(+new Date(prevYear, prevMonth - 1, prevDay)),
            notNowMonth: "prev"
          };
        } else {
          // 下月数据
          const nextYear = isDec ? year + 1 : year;
          const nextMonth = isDec ? 1 : month + 2;
          const nextDay = num - dayNums;
          obj = {
            isToday: `${nextYear}-${this.toDoubleDigit(
              nextMonth
            )}-${this.toDoubleDigit(nextDay)}`,
            dateNum: nextDay,
            lunar: getSolarLunar(+new Date(nextYear, nextMonth - 1, nextDay)),
            notNowMonth: "next"
          };
        }
        dateArr[i] = obj;
      }
      this.dateArr = dateArr;
    },
    currentLunar(lunar) {
      if (!lunar) return;
      // 默认显示农历日期，从上到下优先级依次递增
      let text = "";
      if (this.showLunar) {
        text = lunar.IDayCn;
      }
      // 显示农历月份
      if (lunar.IDayCn === "初一" && this.showLunar) {
        text = lunar.IMonthCn;
      }
      // 显示节气
      if (lunar.isTerm && this.showLunar) {
        text = lunar.Term;
      }

      return text;
    },
    handleChange(value, data) {
      if (this.disabled) return;
      this.setSelectDate(value);

      if (data && !data.notNowMonth) return;
      // 如果点击的不是当前月日期还需要进行月份跳转
      let newDate;
      // month: 0 ~ 11
      const isJun = this.month < 1; // 当前月是否在一月
      const isDec = this.month + 1 > 11; // 当前月是否在十二月
      if (data.notNowMonth === "prev") {
        newDate = new Date(
          isJun ? this.year - 1 : this.year,
          isJun ? 11 : this.month - 1
        );
      }
      if (data.notNowMonth === "next") {
        newDate = new Date(
          isDec ? this.year + 1 : this.year,
          isDec ? 0 : this.month + 1
        );
      }
      this.value = newDate;
      this.$emit("update:date", newDate);
      this.$emit("date-change", value, this.getSolarLunarInfo(value));
    },
    setSelectDate(value) {
      if (value === this.isSelect) return;
      this.isSelect = value;

      this.$emit("update:select", value);
      this.$emit("select-change", value, this.getSolarLunarInfo(value));
    },
    getSolarLunarInfo(value) {
      return getSolarLunar(value);
    },
    toDoubleDigit(value) {
      return value.toString().padStart(2, "0");
    }
  }
});
</script>

<style lang="stylus" scoped>
$width = v-bind(cWidth)
$grid = calc((v-bind(cWidth) / 7))
$weekHeight = 35
$gap = 2
$gapLength = ($gap * 2) px
$black = #333

.m-calendar
  width $width

  &.theme-white
    background-color #fff

    .line
      border 1px solid #fff
      color #555

      &:hover
        border-color #ccc

      &.select
        border-color #999

      &.now-day >div
        color #409EFF

    .panel.disabled
      .line:hover
        border-color #fff

      .line.select
        border-color #999

    .extra
      color #aaa

  &.theme-black
    background-color $black

    .week
      color #fff

    .line
      border 1px solid $black
      color #fff

      &:hover
        border-color #fff - 10%

      &.select
        border-color #fff

      &.now-day >div
        color #ffff99

    .panel.disabled
      .line:hover
        border-color $black

      .line.select
        border-color #fff

    .extra
      color #fff

.weeks
  display flex
  align-items center
  box-sizing border-box

.week
  width $grid
  height $weekHeight px
  text-align center
  line-height $weekHeight px

.panel
  display flex
  flex-wrap wrap

  &.disabled
    .line
      cursor default

.item
  display flex
  justify-content center
  align-items center
  width $grid
  height 18 + 16 + 14 * 2 px

  .line
    display flex
    flex 0 0 auto
    flex-direction column
    justify-content center
    align-items center
    box-sizing border-box
    margin $gap px
    width 'calc(100% - %s)' % $gapLength
    height @width
    border-radius 4px
    font-size 16px
    cursor pointer

  &.not-now-month
    opacity 0.4

.extra
  font-size 12px
</style>