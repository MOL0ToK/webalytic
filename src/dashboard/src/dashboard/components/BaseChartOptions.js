import echarts from 'echarts'
import numeral from 'numeral'

export default {
  animation: false,
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    show: false,
    height: '100px',
    left: '0%',
    right: '40px',
    bottom: '12%'
  },
  xAxis: {
    splitNumber: 3,
    type: 'time',
    minInterval: 3600 * 24 * 1000,
    splitLine: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: '#8d8d8d'
      }
    },
    axisLabel: {
      showMinLabel: false,
      showMaxLabel: false,
      formatter(value) {
        return echarts.format.formatTime('yyyy-MM-dd', value)
      }
    }
  },
  yAxis: {
    position: 'right',
    show: true,
    type: 'value',
    axisLabel: {
      inside: false,
      showMaxLabel: false,
      showMinLabel: false,
      formatter(value) {
        return numeral(+value).format('0a')
      }
    },
    axisLine: {
      lineStyle: {
        color: '#8d8d8d'
      },
      show: false
    },
    splitLine: {
      show: false
    },
    z: 10
  }
}
