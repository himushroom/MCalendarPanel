# m-calendar-panel

## 介绍

一个 vue3 搭建的日历面板组件，提供 npm 包，本组件只适用于 vue3/vite 项目

and

这是一个纯练手项目

## 安装

Using yarn:

```code
    $ npm i -g yarn
    $ yarn add m-calendar-panel -D
```

## 使用

```code
    <template>
        <m-calendar-panel />
    </template>

    <script>
        import MCalendarPanel from "m-calendar-panel";
        import "m-calendar-panel/cDist/m-calendar-panel.css";

        export default {
            components: { MCalendarPanel }
        }
    </script>
```

## Option

| 参数           | 说明                                                                                                        | 类型             | 默认值             |
| :------------- | :---------------------------------------------------------------------------------------------------------- | :--------------- | :----------------- |
| date           | 当前日历展示的年月，字符串格式为'2021-05'，默认展示今年当月，如果值和 select 传入值冲突，展示页以'date'为准 | Date, String     | new Date()         |
| select         | 选中项，默认无选中项，字符串格式为'2021-05-18'                                                              | Date, String     | 省/市/区县/乡镇/村 |
| select-color   | 选中日期时的颜色，默认跟随主题色                                                                            | String           |                    |
| began-monday   | 日历是否从周一开始，默认为从周日开始                                                                        | Boolean          | false              |
| show-lunar     | 是否显示农历，默认显示                                                                                      | Boolean          | true               |
| show-festival  | 是否显示节日，默认显示                                                                                      | Boolean          | true               |
| festival-color | 节日单独配置颜色，默认跟随主题色                                                                            | String           |                    |
| theme          | 主题                                                                                                        | 'white', 'black' | 'white'            |
| width          | 日历宽度，可传入百分比/实际的 px/计算后的宽度等                                                             | String           | '100%'             |
| disabled       | 日历是否可点击，设置不可点击仍然可以通过 select/setSelectDate 来设置选中项                                  | Boolean          | false              |

## Events

| 参数          | 说明                             | 类型                                 | 默认值 |
| :------------ | :------------------------------- | :----------------------------------- | :----- |
| select-change | 选中日期状态发生变化时的回调函数 | function(date, SolarLunarInfo(date)) | -      |

## Methods

> tips: 以下方法请确保日历加载完成后使用

| 参数              | 说明                                                                        | 类型                                                                   | 默认值 |
| :---------------- | :-------------------------------------------------------------------------- | :--------------------------------------------------------------------- | :----- |
| setSelectDate     | 手动设置选中项                                                              | `this.$refs["m-calendar"].setSelectDate("2021-05-18")`                 | -      |
| getSolarLunarInfo | 可获得传入日期的 SolarLunarInfo                                             | `this.$refs["m-calendar"].getSolarLunarInfo("2021-05-18")` => [Object] | -      |
| toDoubleDigit     | 如果传入的数字/字符不足两位则补足两位，大于等于两位则返回它本身的字符串表示 | `this.$refs["m-calendar"].getSolarLunarInfo(5)` => [String]'05'        | -      |

## SolarLunarInfo

```code
SolarLunarInfo = {
    lunarYear: 农历年份,
    lunarMonth: 农历月份,
    lunarDay: 农历日期,
    year: 公历年份,
    month: 公历月份,
    day: 公历日期,
    isFestival: 是否有节日,
    festival: 节日数组,
    IMonthCn: 农历月份的大写(eg: '四月'，如果遇上闰月，返回'润四月'),
    IDayCn: 农历日期的大写(eg: '十一'),
    isLeap: 是否闰月,
    isTerm: 是否节气,
    Term: 返回当天节气
}
```
