const shuf = (arr: Array<number>) => {
  for (let i = arr.length - 1; i > -1; i--) {
    const j = Math.floor(Math.random() * (i + 1))

    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }

  return arr
}

export function sort(arr: Array<number>) {
  if (!Array.isArray(arr) || (Array.isArray(arr) && arr.length === 0)) {
    throw new Error('The #0 argument is not a valid array.')
  }

  let curArr: Array<number> = []

  for (let prog = 0; prog < arr.length; prog++) {
    if (typeof arr[prog] !== 'number' || isNaN(arr[prog])) {
      arr.splice(prog, 1)
      prog--

      continue
    }

    curArr = arr.slice(0, prog + 1)

    if (shuf(curArr).some((elem, ind) => ind > 0 && elem < curArr[ind - 1])) {
      prog = -1
    }
  }

  /*
   * Copyright (C) 2024 Connor Kuo, licensed under MIT.
   */

  return curArr
}
