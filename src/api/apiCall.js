export const getFeedback = async () => {
  const response = await fetch('https://hackcuv4.herokuapp.com/api/v1/sentiment?text=')

  return response.json()
}