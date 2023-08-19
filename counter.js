export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `me diste ${counter} cafecito con roll de canela`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
