const addToList = (selector, ...items) => {
  items.forEach(item => {
    const textNode = document.createTextNode(item)

    const newLi = document.createElement('li');

    newLi.appendChild(textNode)
    newLi.setAttribute('class', 'detail')

    selector.appendChild(newLi)
  })
}


const newClockElement = () => {

  const timeStr = document.createTextNode(updateTime())
  const clockElement = document.createElement('h3');
  clockElement.setAttribute('id', 'clock')
  clockElement.appendChild(timeStr);
  document.body.appendChild(clockElement)

  setInterval(() => {
    clock.innerHTML = `time: ${updateTime()}`;
  }, 1000);

}

const updateTime = () => {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  return `${hours}:${minutes}:${seconds}`
}

const defaultTimer = () => {
  const timerStr = document.createTextNode(updateTime())
  const timerElement = document.createElement('h1');
  timerElement.setAttribute('id', 'timer')
  timerElement.appendChild(timerStr);
  document.body.appendChild(timerElement)
}


const timer = (hours , minutes, seconds) => {
  const timerSelector = document.querySelector('#timer')

  setInterval(() => {
    seconds--;
    if (!seconds) {
      minutes--;
      seconds = 60;
      if (!minutes) {
        hours--;
        minutes = 60;
      }
    }
    const time = `${hours}:${minutes}:${seconds}`
    timerSelector.innerHTML = `this is the timer: ${time}`;

    if (!seconds && !minutes && !hours) {
      clearInterval();
      alert('ay yo, times up')
      //sound = upgrade
    }
  }, 1000);
}


const setNewTimer = () => {

  const timerInputHours = document.querySelector('set-hours')
  const timerInputMinutes = document.querySelector('set-minutes')
  const timerInputSeconds = document.querySelector('set-seconds')

  return timer(timerInputHours, timerInputMinutes, timerInputSeconds)

}








window.addEventListener("DOMContentLoaded", (event) => {

  const h1Ele = document.createElement("h1")
  h1Ele.setAttribute('id', 'name')
  h1Ele.setAttribute('class', 'my-name')

  const tom = document.createTextNode('Tom Anderson')
  h1Ele.appendChild(tom);
  document.body.appendChild(h1Ele)

  const profilePic = document.createElement('img')
  profilePic.setAttribute('src', 'images/tom-profile-picture.jpg')
  profilePic.setAttribute('id', 'profile')
  document.body.appendChild(profilePic)


  const list = document.createElement('ul')
  list.setAttribute('class', 'my-details');
  document.body.appendChild(list);


  addToList(
    list,
    'AKA Lord Flathead',
    'When I was in highschool, I hacked the security code of Chase Manhattan Bank',
    'Was caught by the FBI but I didn/t go to jail because I was underage',
    'I am your friend'
  )

  newClockElement();





  const hoursInput = document.createElement('input')
  const minutesInput = document.createElement('input')
  const secondsInput = document.createElement('input')
  const newTimerBtn = document.createElement('button')
  hoursInput.setAttribute('placeholder', 'hours')
  minutesInput.setAttribute('placeholder', 'minutes')
  secondsInput.setAttribute('placeholder', 'seconds')
  hoursInput.setAttribute('id', 'set-hours')
  minutesInput.setAttribute('id', 'set-minutes')
  secondsInput.setAttribute('id', 'set-seconds')


  newTimerBtn.addEventListener('onclick', setNewTimer());

  document.body.appendChild(newTimerBtn)
  document.body.appendChild(hoursInput)
  document.body.appendChild(minutesInput)
  document.body.appendChild(secondsInput)







});
