var delay = 10
var time
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
var translateMonth = function (month) {
  month = month * 1 + 1
  if (month < 10) {
    return month = '0' + month
  }
  else return month = month + ''
}
var translateWeek = function (week) {
  switch (week) {
    case 0:
      return '星期日';
    case 1:
      return '星期一';
    case 2:
      return '星期二';
    case 3:
      return '星期三';
    case 4:
      return '星期四';
    case 5:
      return '星期五';
    case 6:
      return '星期六';
    default:
  }
}

function disable(seconds, total, callback) {
  if (total != '')
    delay = total
  delay--;
  if (delay == 0) {
    delay = 10
    clearTimeout(time)
    typeof callback == "function" && callback(false)
    console.log('清除了定时器')
  } else {
    console.log('重开了定时器计时' + delay)
    time = setTimeout(() => {
      this.disable(seconds, '', callback)
    }, seconds);
  }

}
module.exports = {
  formatTime: formatTime,
  disable: disable,
  translateMonth: translateMonth,
  translateWeek: translateWeek
}