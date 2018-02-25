
export const cleanCryptoData = (data) => {
  const recent = data.Data.reverse()

  let time = 0
  const last24 = recent.splice(0, 24)
  const current = last24.map(hour => {
    const dataPoint = [time, hour.close]
    time--
    return dataPoint
  })

  console.log('current: ', current)

  return [['time', 'price'], ...current]

  //console.log('24: ', last24, 'next: ', next)


  // allData = {
  //   current: [[0, 9999], {time: 0200, price: 8999}],
  //   yesterday: {},
  //   twoAgo: {},
  //   threeAgo: {},
  //   fourAgo: {},
  //   fiveAgo: {},
  //   sixAgo: {}
  // }
}