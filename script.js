const donations = Array.from(document.querySelectorAll('.add-funds'))
const remaining = document.querySelector('#remaining')
let progress = document.querySelector('#progress')

progressNum = (Number(progress.innerHTML))

// When the page load, the scrollbar should be animated from 0 to its current value.
// Add 3 buttons for donations of £1, £5, and £10. Clicking these buttons should donate that amount to the campaign.

setTimeout(
  function(){
    progress.style.width = `${progressNum}%`;
  }
,100);

donations.forEach((element) => {
  element.addEventListener('click', (event) => {
    
    let number = Number(event.target.id)
    let progressCount = (progressNum += number)
   
    if (progressCount < 100){
      progress.style.width = `${progressCount}%`
    } else {
      progress.style.width = '100%'
    }
    progress.innerHTML = progressCount
    updateRemainder()
  })
})

function updateRemainder (){
  let newNumber = Number(progress.innerHTML)
  let remainder = 100 - newNumber
  let over = newNumber - 100

  if (newNumber <= 100){
    remaining.innerHTML = `You need £${remainder} more to reach your target`
  } else {
    remaining.innerHTML = `You have £${over} more than your target`
  }
}

updateRemainder()



