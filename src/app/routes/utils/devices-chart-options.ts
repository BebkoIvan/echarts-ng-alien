import { EChartsOption } from "echarts";

const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const spoOptions = () => {
    const data = [];
    for (let i = 0; i <= 12; i++) {
      data.push(
        [`${ i < 10 ? '0' + i : i}:00`, randomNumber(70, 100)],
        [`${ i < 10 ? '0' + i : i}:30`, randomNumber(70, 100)]
      );
    };
    const dateList = data.map(function (item) {
      return item[0];
    });
    const valueList = data.map(function (item) {
      return item[1];
    });
    return {
      visualMap: [
        {
          show: true,
          type: 'continuous',
          seriesIndex: 0,
          min: 70,
          max: 100
        },
      ],
      title: [
        {
          left: 'center',
          text: 'Oxygen Saturation Level'
        }
      ],
      tooltip: {
        trigger: 'axis'
      },
      xAxis: [
        {
          data: dateList
        },
      ],
      yAxis: [
        {},
      ],
      series: [
        {
          type: 'line',
          showSymbol: false,
          data: valueList
        }
      ]
    };
}

const bpOptions = (): EChartsOption => {
    const colors = ['#5470C6', '#EE6666'];
    const options: EChartsOption = {
        color: colors,
        tooltip: {
            trigger: 'none',
            axisPointer: {
            type: 'cross'
            }
        },
        legend: {},
        grid: {
            top: 70,
            bottom: 50
        },
        xAxis: [
            {
                boundaryGap: false,
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                color: colors[0]
                }
            },
            axisPointer: {
                label: {
                formatter: function (params: any) {
                    return (
                    'Precipitation  ' +
                    params.value +
                    (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                    );
                }
                }
            },

            // prettier-ignore
            data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12']
            }
        ],
        yAxis: [
            {
            type: 'value'
            }
        ],
        series: [
            {
            name: 'Systolic',
            type: 'line',
            smooth: true,
            emphasis: {
                focus: 'series'
            },
            data: [
                2.6, 5.9, 9.0, 26.4, 28.7, 70.7
            ]
            },
            {
            name: 'Diastolic',
            type: 'line',
            smooth: true,
            emphasis: {
                focus: 'series'
            },
            data: [
                3.9, 5.9, 11.1, 18.7, 48.3, 69.2
            ]
            }
        ]
    };

    return options;
};

const ecgOptions = () => {
    const data = [];
    for (let i = 0; i <= 12; i++) {
      data.push(
        randomNumber(40, 100)
        );
    };
    const options: EChartsOption = {
      visualMap: [
        {
          show: false,
          type: 'continuous',
          seriesIndex: 0,
          min: 40,
          max: 100
        },
      ],
      title: [
        {
          left: 'center',
          text: 'ECG'
        }
      ],
      tooltip: {
        trigger: 'axis'
      },
      xAxis: 
        {
            boundaryGap: false,
            show: false,   
            data: Object.keys(data),
        },
      yAxis: [
        {},
      ],
      series: [
        {
          type: 'line',
          showSymbol: false,
          data
        }
      ]
    };
    return options;
};

const temperatureOptions = () => {
    return {
        title: [
            {
              left: 'center',
              text: 'Body Temperature'
            }
        ],
        xAxis: {
          boundaryGap: false,
          type: 'category',
          data: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [36.6, 37, 37.2, 39, 38.5, 37.8, 37.5],
            type: 'line'
          }
        ]
      };
}

const bmiOptions = () => {
    return {
        title: {
          text: 'BMI',
          left: 'left'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}'
        },
        legend: {
          left: 'center'
        },
        xAxis: {
          boundaryGap: false,
          type: 'category',
          splitLine: { show: false },
          data: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: {
        },
        series: [
          {
            name: 'BMI',
            type: 'line',
            data: [30, 30, 29.5, 28, 27.8, 27.5, 27.2]
          },
          {
            name: 'Body Fat (%)',
            type: 'line',
            data: [60, 59, 58, 57, 55, 52, 50]
          },
          {
            name: 'Body Weight (kg)',
            type: 'line',
            data: [
              150,
              147,
              143,
              140,
              138,
              135,
              132
            ]
          }
        ]
      };
};

const glOptions = () => {
    const data = (new Array(7)).fill(1).map(el => randomNumber(118, 150));
    return {
        title: [
            {
              left: 'center',
              text: 'Glucose Level (mg/dL)'
            }
        ],
        xAxis: {
          type: 'category',
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data,
            type: 'line'
          }
        ]
      };
}

export const optionsMap = {
    spo: spoOptions(),
    bp: bpOptions(),
    ecg: ecgOptions(),
    temperature: temperatureOptions(),
    bmi: bmiOptions(),
    gl: glOptions()
};