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

  function toggleCollorsCards(card) {
    card.classList.toggle('active')
  }

  function removeActiveCollorsCards(cardOne, cardTwo, cardTree){
    cardOne.classList.remove('active')
    cardTwo.classList.remove('active')
    cardTree.classList.remove('active')
  }

  return {
    startAplication,
    toggleTeme,
    toggleCollorsCards,
    removeActiveCollorsCards,
  }
}

