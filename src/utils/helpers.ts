export function lockBody(isAdd = true) {
  if (isAdd) {
    document.body.classList.add('body-lock')
  } else {
    document.body.classList.remove('body-lock')
  }
}