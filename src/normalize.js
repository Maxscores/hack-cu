export const compareData = (data) => {
  let min = +Infinity
  let max = -Infinity

  for(let i = 0; i < data.length; i++) {
    if (data[i][1] < min) min = data[i][1]
    if (data[i][1] > max) max = data[i][1]
  }

  console.log('min: ', min, 'max: ', max)
  const normalized = data.map(num => [num[0], normalize(num[1], min, max)])
  console.log('normalized: ', normalized)
  return normalized
}

const normalize = (num, min, max) => {
  let result = (num - min) / (max - min)

  return result
}

