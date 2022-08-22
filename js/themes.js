export default function ({
  buttonTemeLightMode, 
  buttonTemeDarkMode,
  body,
}) {
  
  function startAplication() {
    body.classList.add('lightMode')
    buttonTemeDarkMode.classList.add('hide')
  }

  function toggleTeme() {
    buttonTemeLightMode.classList.toggle('hide')
    buttonTemeDarkMode.classList.toggle('hide')
    body.classList.toggle('darkMode')
    body.classList.toggle('lightMode')
  }

  function toggleCollorsCards(card, button, input) {
    card.classList.toggle('active')
    button.classList.toggle('active')
    input.classList.toggle('active')
  }

  function removeActiveCollorsCards(card, button, input){
    card.classList.remove('active')
    button.classList.remove('active')
    input.classList.remove('active')
  }


  return {
    startAplication,
    toggleTeme,
    toggleCollorsCards,
    removeActiveCollorsCards
  }
}

