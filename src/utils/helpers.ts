export function lockBody(isAdd = true) {
  if (isAdd) {
    document.body.classList.add('body-lock')
  } else {
    document.body.classList.remove('body-lock')
  }
}

function memoCreateUniqID() {
  let ID = 0;

  return () => ID += 1
}

export const getUniqID = memoCreateUniqID();