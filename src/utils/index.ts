// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const randomSortArray = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5)
}

export const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max)
}
