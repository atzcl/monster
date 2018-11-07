import dayjs from 'dayjs';

export default {
  // 完整
  dateTimeConvert (time: string) {
    return time && dayjs(time).format('YYYY-MM-DD HH:mm:ss');
  },

  // 只取年月日
  dateConvert (time: string) {
    return time && dayjs(time).format('YYYY-MM-DD');
  },

  // 只取日期
  timeDate (time: string) {
    return time && dayjs(time).format('DD');
  },

  // 只取年月
  dateYears (time: string) {
    return time && dayjs(time).format('YYYY-MM');
  },
};
