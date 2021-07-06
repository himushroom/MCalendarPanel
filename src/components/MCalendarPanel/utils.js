/**
 * 农历1900-2100的润大小信息表
 * @Array Of Property
 * @return Hex
 */
export const lunarInfo = [
	0x04bd8,
	0x04ae0,
	0x0a570,
	0x054d5,
	0x0d260,
	0x0d950,
	0x16554,
	0x056a0,
	0x09ad0,
	0x055d2, // 1900-1909
	0x04ae0,
	0x0a5b6,
	0x0a4d0,
	0x0d250,
	0x1d255,
	0x0b540,
	0x0d6a0,
	0x0ada2,
	0x095b0,
	0x14977, // 1910-1919
	0x04970,
	0x0a4b0,
	0x0b4b5,
	0x06a50,
	0x06d40,
	0x1ab54,
	0x02b60,
	0x09570,
	0x052f2,
	0x04970, // 1920-1929
	0x06566,
	0x0d4a0,
	0x0ea50,
	0x06e95,
	0x05ad0,
	0x02b60,
	0x186e3,
	0x092e0,
	0x1c8d7,
	0x0c950, // 1930-1939
	0x0d4a0,
	0x1d8a6,
	0x0b550,
	0x056a0,
	0x1a5b4,
	0x025d0,
	0x092d0,
	0x0d2b2,
	0x0a950,
	0x0b557, // 1940-1949
	0x06ca0,
	0x0b550,
	0x15355,
	0x04da0,
	0x0a5b0,
	0x14573,
	0x052b0,
	0x0a9a8,
	0x0e950,
	0x06aa0, // 1950-1959
	0x0aea6,
	0x0ab50,
	0x04b60,
	0x0aae4,
	0x0a570,
	0x05260,
	0x0f263,
	0x0d950,
	0x05b57,
	0x056a0, // 1960-1969
	0x096d0,
	0x04dd5,
	0x04ad0,
	0x0a4d0,
	0x0d4d4,
	0x0d250,
	0x0d558,
	0x0b540,
	0x0b6a0,
	0x195a6, // 1970-1979
	0x095b0,
	0x049b0,
	0x0a974,
	0x0a4b0,
	0x0b27a,
	0x06a50,
	0x06d40,
	0x0af46,
	0x0ab60,
	0x09570, // 1980-1989
	0x04af5,
	0x04970,
	0x064b0,
	0x074a3,
	0x0ea50,
	0x06b58,
	0x055c0,
	0x0ab60,
	0x096d5,
	0x092e0, // 1990-1999
	0x0c960,
	0x0d954,
	0x0d4a0,
	0x0da50,
	0x07552,
	0x056a0,
	0x0abb7,
	0x025d0,
	0x092d0,
	0x0cab5, // 2000-2009
	0x0a950,
	0x0b4a0,
	0x0baa4,
	0x0ad50,
	0x055d9,
	0x04ba0,
	0x0a5b0,
	0x15176,
	0x052b0,
	0x0a930, // 2010-2019
	0x07954,
	0x06aa0,
	0x0ad50,
	0x05b52,
	0x04b60,
	0x0a6e6,
	0x0a4e0,
	0x0d260,
	0x0ea65,
	0x0d530, // 2020-2029
	0x05aa0,
	0x076a3,
	0x096d0,
	0x04afb,
	0x04ad0,
	0x0a4d0,
	0x1d0b6,
	0x0d250,
	0x0d520,
	0x0dd45, // 2030-2039
	0x0b5a0,
	0x056d0,
	0x055b2,
	0x049b0,
	0x0a577,
	0x0a4b0,
	0x0aa50,
	0x1b255,
	0x06d20,
	0x0ada0, // 2040-2049
	/** Add By JJonline@JJonline.Cn**/
	0x14b63,
	0x09370,
	0x049f8,
	0x04970,
	0x064b0,
	0x168a6,
	0x0ea50,
	0x06b20,
	0x1a6c4,
	0x0aae0, // 2050-2059
	0x0a2e0,
	0x0d2e3,
	0x0c960,
	0x0d557,
	0x0d4a0,
	0x0da50,
	0x05d55,
	0x056a0,
	0x0a6d0,
	0x055d4, // 2060-2069
	0x052d0,
	0x0a9b8,
	0x0a950,
	0x0b4a0,
	0x0b6a6,
	0x0ad50,
	0x055a0,
	0x0aba4,
	0x0a5b0,
	0x052b0, // 2070-2079
	0x0b273,
	0x06930,
	0x07337,
	0x06aa0,
	0x0ad50,
	0x14b55,
	0x04b60,
	0x0a570,
	0x054e4,
	0x0d160, // 2080-2089
	0x0e968,
	0x0d520,
	0x0daa0,
	0x16aa6,
	0x056d0,
	0x04ae0,
	0x0a9d4,
	0x0a2d0,
	0x0d150,
	0x0f252, // 2090-2099
	0x0d520
];

/**
 * 数字转中文速查表
 * @Array Of Property
 * @trans ['日','一','二','三','四','五','六','七','八','九','十']
 * @return Cn string
 */
const nStr1 = [
	"\u65e5",
	"\u4e00",
	"\u4e8c",
	"\u4e09",
	"\u56db",
	"\u4e94",
	"\u516d",
	"\u4e03",
	"\u516b",
	"\u4e5d",
	"\u5341",
	"\u5341\u4e00",
	"\u5341\u4e8c"
];

/**
 * 日期转农历称呼速查表
 * @Array Of Property
 * @trans ['初','十','廿','卅']
 * @return Cn string
 */
const nStr2 = ["\u521d", "\u5341", "\u5eff", "\u5345"];

/**
 * 月份转农历称呼速查表
 * @Array Of Property
 * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
 * @return Cn string
 */
const nStr3 = [
	"\u6b63",
	"\u4e8c",
	"\u4e09",
	"\u56db",
	"\u4e94",
	"\u516d",
	"\u4e03",
	"\u516b",
	"\u4e5d",
	"\u5341",
	"\u51ac",
	"\u814a"
];

/**
 * 1900-2100各年的24节气日期速查表
 * @Array Of Property
 * @return 0x string For splice
 */
const sTermInfo = [
	"9778397bd097c36b0b6fc9274c91aa",
	"97b6b97bd19801ec9210c965cc920e",
	"97bcf97c3598082c95f8c965cc920f",
	"97bd0b06bdb0722c965ce1cfcc920f",
	"b027097bd097c36b0b6fc9274c91aa",
	"97b6b97bd19801ec9210c965cc920e",
	"97bcf97c359801ec95f8c965cc920f",
	"97bd0b06bdb0722c965ce1cfcc920f",
	"b027097bd097c36b0b6fc9274c91aa",
	"97b6b97bd19801ec9210c965cc920e",
	"97bcf97c359801ec95f8c965cc920f",
	"97bd0b06bdb0722c965ce1cfcc920f",
	"b027097bd097c36b0b6fc9274c91aa",
	"9778397bd19801ec9210c965cc920e",
	"97b6b97bd19801ec95f8c965cc920f",
	"97bd09801d98082c95f8e1cfcc920f",
	"97bd097bd097c36b0b6fc9210c8dc2",
	"9778397bd197c36c9210c9274c91aa",
	"97b6b97bd19801ec95f8c965cc920e",
	"97bd09801d98082c95f8e1cfcc920f",
	"97bd097bd097c36b0b6fc9210c8dc2",
	"9778397bd097c36c9210c9274c91aa",
	"97b6b97bd19801ec95f8c965cc920e",
	"97bcf97c3598082c95f8e1cfcc920f",
	"97bd097bd097c36b0b6fc9210c8dc2",
	"9778397bd097c36c9210c9274c91aa",
	"97b6b97bd19801ec9210c965cc920e",
	"97bcf97c3598082c95f8c965cc920f",
	"97bd097bd097c35b0b6fc920fb0722",
	"9778397bd097c36b0b6fc9274c91aa",
	"97b6b97bd19801ec9210c965cc920e",
	"97bcf97c3598082c95f8c965cc920f",
	"97bd097bd097c35b0b6fc920fb0722",
	"9778397bd097c36b0b6fc9274c91aa",
	"97b6b97bd19801ec9210c965cc920e",
	"97bcf97c359801ec95f8c965cc920f",
	"97bd097bd097c35b0b6fc920fb0722",
	"9778397bd097c36b0b6fc9274c91aa",
	"97b6b97bd19801ec9210c965cc920e",
	"97bcf97c359801ec95f8c965cc920f",
	"97bd097bd097c35b0b6fc920fb0722",
	"9778397bd097c36b0b6fc9274c91aa",
	"97b6b97bd19801ec9210c965cc920e",
	"97bcf97c359801ec95f8c965cc920f",
	"97bd097bd07f595b0b6fc920fb0722",
	"9778397bd097c36b0b6fc9210c8dc2",
	"9778397bd19801ec9210c9274c920e",
	"97b6b97bd19801ec95f8c965cc920f",
	"97bd07f5307f595b0b0bc920fb0722",
	"7f0e397bd097c36b0b6fc9210c8dc2",
	"9778397bd097c36c9210c9274c920e",
	"97b6b97bd19801ec95f8c965cc920f",
	"97bd07f5307f595b0b0bc920fb0722",
	"7f0e397bd097c36b0b6fc9210c8dc2",
	"9778397bd097c36c9210c9274c91aa",
	"97b6b97bd19801ec9210c965cc920e",
	"97bd07f1487f595b0b0bc920fb0722",
	"7f0e397bd097c36b0b6fc9210c8dc2",
	"9778397bd097c36b0b6fc9274c91aa",
	"97b6b97bd19801ec9210c965cc920e",
	"97bcf7f1487f595b0b0bb0b6fb0722",
	"7f0e397bd097c35b0b6fc920fb0722",
	"9778397bd097c36b0b6fc9274c91aa",
	"97b6b97bd19801ec9210c965cc920e",
	"97bcf7f1487f595b0b0bb0b6fb0722",
	"7f0e397bd097c35b0b6fc920fb0722",
	"9778397bd097c36b0b6fc9274c91aa",
	"97b6b97bd19801ec9210c965cc920e",
	"97bcf7f1487f531b0b0bb0b6fb0722",
	"7f0e397bd097c35b0b6fc920fb0722",
	"9778397bd097c36b0b6fc9274c91aa",
	"97b6b97bd19801ec9210c965cc920e",
	"97bcf7f1487f531b0b0bb0b6fb0722",
	"7f0e397bd07f595b0b6fc920fb0722",
	"9778397bd097c36b0b6fc9274c91aa",
	"97b6b97bd19801ec9210c9274c920e",
	"97bcf7f0e47f531b0b0bb0b6fb0722",
	"7f0e397bd07f595b0b0bc920fb0722",
	"9778397bd097c36b0b6fc9210c91aa",
	"97b6b97bd197c36c9210c9274c920e",
	"97bcf7f0e47f531b0b0bb0b6fb0722",
	"7f0e397bd07f595b0b0bc920fb0722",
	"9778397bd097c36b0b6fc9210c8dc2",
	"9778397bd097c36c9210c9274c920e",
	"97b6b7f0e47f531b0723b0b6fb0722",
	"7f0e37f5307f595b0b0bc920fb0722",
	"7f0e397bd097c36b0b6fc9210c8dc2",
	"9778397bd097c36b0b70c9274c91aa",
	"97b6b7f0e47f531b0723b0b6fb0721",
	"7f0e37f1487f595b0b0bb0b6fb0722",
	"7f0e397bd097c35b0b6fc9210c8dc2",
	"9778397bd097c36b0b6fc9274c91aa",
	"97b6b7f0e47f531b0723b0b6fb0721",
	"7f0e27f1487f595b0b0bb0b6fb0722",
	"7f0e397bd097c35b0b6fc920fb0722",
	"9778397bd097c36b0b6fc9274c91aa",
	"97b6b7f0e47f531b0723b0b6fb0721",
	"7f0e27f1487f531b0b0bb0b6fb0722",
	"7f0e397bd097c35b0b6fc920fb0722",
	"9778397bd097c36b0b6fc9274c91aa",
	"97b6b7f0e47f531b0723b0b6fb0721",
	"7f0e27f1487f531b0b0bb0b6fb0722",
	"7f0e397bd097c35b0b6fc920fb0722",
	"9778397bd097c36b0b6fc9274c91aa",
	"97b6b7f0e47f531b0723b0b6fb0721",
	"7f0e27f1487f531b0b0bb0b6fb0722",
	"7f0e397bd07f595b0b0bc920fb0722",
	"9778397bd097c36b0b6fc9274c91aa",
	"97b6b7f0e47f531b0723b0787b0721",
	"7f0e27f0e47f531b0b0bb0b6fb0722",
	"7f0e397bd07f595b0b0bc920fb0722",
	"9778397bd097c36b0b6fc9210c91aa",
	"97b6b7f0e47f149b0723b0787b0721",
	"7f0e27f0e47f531b0723b0b6fb0722",
	"7f0e397bd07f595b0b0bc920fb0722",
	"9778397bd097c36b0b6fc9210c8dc2",
	"977837f0e37f149b0723b0787b0721",
	"7f07e7f0e47f531b0723b0b6fb0722",
	"7f0e37f5307f595b0b0bc920fb0722",
	"7f0e397bd097c35b0b6fc9210c8dc2",
	"977837f0e37f14998082b0787b0721",
	"7f07e7f0e47f531b0723b0b6fb0721",
	"7f0e37f1487f595b0b0bb0b6fb0722",
	"7f0e397bd097c35b0b6fc9210c8dc2",
	"977837f0e37f14998082b0787b06bd",
	"7f07e7f0e47f531b0723b0b6fb0721",
	"7f0e27f1487f531b0b0bb0b6fb0722",
	"7f0e397bd097c35b0b6fc920fb0722",
	"977837f0e37f14998082b0787b06bd",
	"7f07e7f0e47f531b0723b0b6fb0721",
	"7f0e27f1487f531b0b0bb0b6fb0722",
	"7f0e397bd097c35b0b6fc920fb0722",
	"977837f0e37f14998082b0787b06bd",
	"7f07e7f0e47f531b0723b0b6fb0721",
	"7f0e27f1487f531b0b0bb0b6fb0722",
	"7f0e397bd07f595b0b0bc920fb0722",
	"977837f0e37f14998082b0787b06bd",
	"7f07e7f0e47f531b0723b0b6fb0721",
	"7f0e27f1487f531b0b0bb0b6fb0722",
	"7f0e397bd07f595b0b0bc920fb0722",
	"977837f0e37f14998082b0787b06bd",
	"7f07e7f0e47f149b0723b0787b0721",
	"7f0e27f0e47f531b0b0bb0b6fb0722",
	"7f0e397bd07f595b0b0bc920fb0722",
	"977837f0e37f14998082b0723b06bd",
	"7f07e7f0e37f149b0723b0787b0721",
	"7f0e27f0e47f531b0723b0b6fb0722",
	"7f0e397bd07f595b0b0bc920fb0722",
	"977837f0e37f14898082b0723b02d5",
	"7ec967f0e37f14998082b0787b0721",
	"7f07e7f0e47f531b0723b0b6fb0722",
	"7f0e37f1487f595b0b0bb0b6fb0722",
	"7f0e37f0e37f14898082b0723b02d5",
	"7ec967f0e37f14998082b0787b0721",
	"7f07e7f0e47f531b0723b0b6fb0722",
	"7f0e37f1487f531b0b0bb0b6fb0722",
	"7f0e37f0e37f14898082b0723b02d5",
	"7ec967f0e37f14998082b0787b06bd",
	"7f07e7f0e47f531b0723b0b6fb0721",
	"7f0e37f1487f531b0b0bb0b6fb0722",
	"7f0e37f0e37f14898082b072297c35",
	"7ec967f0e37f14998082b0787b06bd",
	"7f07e7f0e47f531b0723b0b6fb0721",
	"7f0e27f1487f531b0b0bb0b6fb0722",
	"7f0e37f0e37f14898082b072297c35",
	"7ec967f0e37f14998082b0787b06bd",
	"7f07e7f0e47f531b0723b0b6fb0721",
	"7f0e27f1487f531b0b0bb0b6fb0722",
	"7f0e37f0e366aa89801eb072297c35",
	"7ec967f0e37f14998082b0787b06bd",
	"7f07e7f0e47f149b0723b0787b0721",
	"7f0e27f1487f531b0b0bb0b6fb0722",
	"7f0e37f0e366aa89801eb072297c35",
	"7ec967f0e37f14998082b0723b06bd",
	"7f07e7f0e47f149b0723b0787b0721",
	"7f0e27f0e47f531b0723b0b6fb0722",
	"7f0e37f0e366aa89801eb072297c35",
	"7ec967f0e37f14998082b0723b06bd",
	"7f07e7f0e37f14998083b0787b0721",
	"7f0e27f0e47f531b0723b0b6fb0722",
	"7f0e37f0e366aa89801eb072297c35",
	"7ec967f0e37f14898082b0723b02d5",
	"7f07e7f0e37f14998082b0787b0721",
	"7f07e7f0e47f531b0723b0b6fb0722",
	"7f0e36665b66aa89801e9808297c35",
	"665f67f0e37f14898082b0723b02d5",
	"7ec967f0e37f14998082b0787b0721",
	"7f07e7f0e47f531b0723b0b6fb0722",
	"7f0e36665b66a449801e9808297c35",
	"665f67f0e37f14898082b0723b02d5",
	"7ec967f0e37f14998082b0787b06bd",
	"7f07e7f0e47f531b0723b0b6fb0721",
	"7f0e36665b66a449801e9808297c35",
	"665f67f0e37f14898082b072297c35",
	"7ec967f0e37f14998082b0787b06bd",
	"7f07e7f0e47f531b0723b0b6fb0721",
	"7f0e26665b66a449801e9808297c35",
	"665f67f0e37f1489801eb072297c35",
	"7ec967f0e37f14998082b0787b06bd",
	"7f07e7f0e47f531b0723b0b6fb0721",
	"7f0e27f1487f531b0b0bb0b6fb0722"
];

/**
 * 24节气速查表
 * @Array Of Property
 * @trans ["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
 * @return Cn string
 */
const solarTerm = [
	"\u5c0f\u5bd2",
	"\u5927\u5bd2",
	"\u7acb\u6625",
	"\u96e8\u6c34",
	"\u60ca\u86f0",
	"\u6625\u5206",
	"\u6e05\u660e",
	"\u8c37\u96e8",
	"\u7acb\u590f",
	"\u5c0f\u6ee1",
	"\u8292\u79cd",
	"\u590f\u81f3",
	"\u5c0f\u6691",
	"\u5927\u6691",
	"\u7acb\u79cb",
	"\u5904\u6691",
	"\u767d\u9732",
	"\u79cb\u5206",
	"\u5bd2\u9732",
	"\u971c\u964d",
	"\u7acb\u51ac",
	"\u5c0f\u96ea",
	"\u5927\u96ea",
	"\u51ac\u81f3"
];

/**
 * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
 * @param y lunar Year
 * @return Number (0-12)
 * @eg:const leapMonth = leapMonth(1964) ;// leapMonth = 0
 */
const leapMonth = y => {
	return lunarInfo[y - 1900] & 0xf;
};

/**
 * 返回农历y年闰月的天数 若该年没有闰月则返回0
 * @param y lunar Year
 * @return Number (0、29、30)
 * @eg:const leapMonthDay = leapDays(1964) ;// leapMonthDay = 0
 */
const leapDays = y => {
	if (leapMonth(y)) {
		return lunarInfo[y - 1900] & 0x10000 ? 30 : 29;
	}
	return 0;
};

/**
 * 返回农历y年m月（非闰月）的总天数，月份参数从1至12，参数错误返回-1
 * @param y lunar Year
 * @param m 月份
 * @return Number (-1、29、30)
 * @eg:const MonthDay = monthDays(1964, 1) ;// MonthDay = 30
 */
const monthDays = (y, m) => {
	if (m > 12 || m < 1) {
		return -1;
	}
	return lunarInfo[y - 1900] & (0x10000 >> m) ? 30 : 29;
};

/**
 * 返回农历y年一整年的总天数
 * @param lunar Year
 * @return Number
 * @eg:const count = lYearDays(1964) ;// count = 355
 */
const lYearDays = y => {
	var i,
		sum = 348;
	for (i = 0x8000; i > 0x8; i >>= 1) {
		sum += lunarInfo[y - 1900] & i ? 1 : 0;
	}
	return sum + leapDays(y);
};

/**
 * 传入年份月份返回第n个星期日的日期数字
 * @param y 年份
 * @param m 月份
 * @param n 第几个星期日 ( 5>n>0的数字 一个月一般就4个星期日，最多5个)
 * @return 日期数字；const n = getSunday(1964, 1, 1) // n = 5; 1月的第一个星期日是5号；超出返回-1
 */
const getSunday = (y, m, n) => {
	var d = new Date(y + "-" + m + "-1");
	var d2 = new Date(y + "-" + (m + 1) + "-1");
	d2.setDate(0);
	var maxDay = d2.getDate(); // 传入月份的最后一天

	var week = d.getDay();
	var first = 1;
	if (week > 0) first = d.getDate() + (7 - week);
	var result = (n - 1) * 7 + first;
	if (result > maxDay) return -1;
	return result;
};

/**
 * 传入农历数字月份返回汉语通俗表示法
 * @param lunar month
 * @return Cn string
 * @eg:const cnMonth = toChinaMonth(12) ;// cnMonth = '腊月'
 */
const toChinaMonth = m => {
	// 月 => \u6708
	if (m > 12 || m < 1) {
		return -1;
	}
	var s = nStr3[m - 1];
	s += "\u6708"; // 加上月字
	return s;
};

/**
 * 传入公历y年获得该年第n个节气的公历日期
 * @param y公历年(1900-2100)；n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起
 * @return day Number
 * @eg:const _24 = getTerm(1964, 1) ;//_24 = 6; 即1987年1月6日小寒
 */
const getTerm = (y, n) => {
	if (y < 1900 || y > 2100) {
		return -1;
	}
	if (n < 1 || n > 24) {
		return -1;
	}
	var _table = sTermInfo[y - 1900];
	var _info = [
		parseInt("0x" + _table.substr(0, 5)).toString(),
		parseInt("0x" + _table.substr(5, 5)).toString(),
		parseInt("0x" + _table.substr(10, 5)).toString(),
		parseInt("0x" + _table.substr(15, 5)).toString(),
		parseInt("0x" + _table.substr(20, 5)).toString(),
		parseInt("0x" + _table.substr(25, 5)).toString()
	];
	var _calday = [
		_info[0].substr(0, 1),
		_info[0].substr(1, 2),
		_info[0].substr(3, 1),
		_info[0].substr(4, 2),

		_info[1].substr(0, 1),
		_info[1].substr(1, 2),
		_info[1].substr(3, 1),
		_info[1].substr(4, 2),

		_info[2].substr(0, 1),
		_info[2].substr(1, 2),
		_info[2].substr(3, 1),
		_info[2].substr(4, 2),

		_info[3].substr(0, 1),
		_info[3].substr(1, 2),
		_info[3].substr(3, 1),
		_info[3].substr(4, 2),

		_info[4].substr(0, 1),
		_info[4].substr(1, 2),
		_info[4].substr(3, 1),
		_info[4].substr(4, 2),

		_info[5].substr(0, 1),
		_info[5].substr(1, 2),
		_info[5].substr(3, 1),
		_info[5].substr(4, 2)
	];
	return parseInt(_calday[n - 1]);
};

/**
 * 传入农历日期数字返回汉字表示法
 * @param lunar day
 * @return Cn string
 * @eg:const cnDay = toChinaDay(25) ;// cnMonth = '廿五'
 */
const toChinaDay = d => {
	let s;
	switch (d) {
		case 10:
			s = "\u521d\u5341";
			break;
		case 20:
			s = "\u4e8c\u5341";
			break;
		case 30:
			s = "\u4e09\u5341";
			break;
		default:
			s = nStr2[Math.floor(d / 10)];
			s += nStr1[d % 10];
	}

	return s;
};

/**
 * 传入时间戳获得详细的公历、农历object信息 <=>JSON
 * @param time 时间戳
 * @return JSON object
 * @eg:console.log(getSolarLunar());
 */
export const getSolarLunar = time => {
	// 未传参获得当天
	let objDate;
	if (!time) {
		objDate = new Date();
	} else {
		objDate = new Date(time);
	}
	let i;
	let temp = 0;
	const y = objDate.getFullYear();
	const m = objDate.getMonth() + 1;
	const d = objDate.getDate();
	// 参数区间1900.1.31~2100.12.31
	if (y < 1900 || y > 2100) {
		return -1;
	}
	// 公历传参最下限
	if (y === 1900 && m === 1 && d < 31) {
		return -1;
	}
	let offset =
		(Date.UTC(
			objDate.getFullYear(),
			objDate.getMonth(),
			objDate.getDate()
		) -
			Date.UTC(1900, 0, 31)) /
		86400000;
	for (i = 1900; i < 2101 && offset > 0; i++) {
		temp = lYearDays(i);
		offset -= temp;
	}
	if (offset < 0) {
		offset += temp;
		i--;
	}

	// 农历年
	const year = i;
	const leap = leapMonth(i); // 闰哪个月
	let isLeap = false;

	// 校验闰月
	for (i = 1; i < 13 && offset > 0; i++) {
		// 闰月
		if (leap > 0 && i === leap + 1 && isLeap === false) {
			--i;
			isLeap = true;
			temp = leapDays(year); // 计算农历闰月天数
		} else {
			temp = monthDays(year, i); // 计算农历普通月天数
		}
		// 解除闰月
		if (isLeap === true && i === leap + 1) {
			isLeap = false;
		}
		offset -= temp;
	}
	// 闰月导致数组下标重叠取反
	if (offset === 0 && leap > 0 && i === leap + 1) {
		if (isLeap) {
			isLeap = false;
		} else {
			isLeap = true;
			--i;
		}
	}
	if (offset < 0) {
		offset += temp;
		--i;
	}
	// 农历月
	const month = i;
	// 农历日
	const day = offset + 1;
	// 当月的两个节气
	const firstNode = getTerm(y, m * 2 - 1); // 返回当月「节」为几日开始
	const secondNode = getTerm(y, m * 2); // 返回当月「节」为几日开始

	// 传入的日期的节气与否
	let isTerm = false;
	let Term = null;
	if (firstNode === d) {
		isTerm = true;
		Term = solarTerm[m * 2 - 2];
	}
	if (secondNode === d) {
		isTerm = true;
		Term = solarTerm[m * 2 - 1];
	}
	// 该日期所有的节日
	const festival = [];
	// 农历传统节日
	if (month === 1 && day === 1) {
		festival.push("春节");
	} else if (month === 1 && day === 15) {
		festival.push("上元节");
	} else if (month === 2 && day === 2) {
		festival.push("龙抬头");
	} else if (month === 5 && day === 5) {
		festival.push("端午");
	} else if (month === 7) {
		if (day === 7) festival.push("七夕");
		if (day === 15) festival.push("中元节");
	} else if (month === 8 && day === 15) {
		festival.push("中秋");
	} else if (month === 9 && day === 9) {
		festival.push("重阳");
	} else if (month === 10 && day === 15) {
		festival.push("下元节");
	} else if (month === 12) {
		if (day === 8) festival.push("腊八");
		if (day === 23) festival.push("小年");
		if (
			isLeap
				? day === leapDays(year)
				: monthDays(month - 1) === 29
				? day === 30
				: day === 29
		) {
			festival.push("除夕");
		}
	}
	// 公历节日
	if (m === 1 && d === 1) {
		festival.splice(0, 0, "元旦");
	} else if (m === 2 && d === 14) {
		festival.push("情人节");
	} else if (m === 3) {
		if (d === 7) festival.push("女生节");
		if (d === 8 && y >= 1924) festival.push("妇女节");
		if (d === 12) festival.push("植树节");
	} else if (m === 4 && d === 1) {
		festival.push("愚人节");
	} else if (m === 5) {
		if (d === 1) festival.push("劳动节");
		if (d === 4 && y >= 1939) festival.push("青年节");
		if (d === getSunday(y, m, 2)) festival.push("母亲节");
	} else if (m === 6) {
		if (d === 1) festival.push("儿童节");
		if (d === getSunday(y, m, 3)) festival.push("父亲节");
	} else if (m === 7 && d === 1 && y >= 1941) {
		festival.push("建党节");
	} else if (m === 8 && d === 1 && y >= 1933) {
		festival.push("建军节");
	} else if (m === 9 && d === 10 && y >= 1985) {
		festival.push("教师节");
	} else if (m === 10 && d === 1 && y >= 1949) {
		festival.push("国庆节");
	} else if (m === 11 && d === 1) {
		festival.push("万圣节");
	} else if (m === 12) {
		if (d === 24) festival.push("平安夜");
		if (d === 25) festival.push("圣诞节");
	}

	// 闰 => \u95f0
	return {
		lunarYear: year,
		lunarMonth: month,
		lunarDay: day,
		year: y,
		month: m,
		day: d,
		isFestival: festival.length > 0,
		festival: festival,
		IMonthCn: (isLeap ? "\u95f0" : "") + toChinaMonth(month),
		IDayCn: toChinaDay(day),
		isLeap: isLeap,
		isTerm: isTerm,
		Term: Term
	};
};
