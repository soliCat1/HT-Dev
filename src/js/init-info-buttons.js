const advantages = Array.from(document.querySelectorAll('.advantages__item'));

const initButtons = () => {
  advantages.forEach(element => {
    element.addEventListener('click', ({target}) => {
      if(target.tagName === "BUTTON" || target.tagName === "svg") {
        element.classList.toggle('advantages__item--open-info');
      }
    })
  })
}

export {initButtons}