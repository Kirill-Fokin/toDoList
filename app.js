import { ToDo } from "./ToDo.js"

// import { clickSound } from "./Audio.js"

let app = new ToDo(document.getElementById('app'))

app.addUser('Мои дела', 'my')
app.addUser('Покупки', 'lena')
app.addUser('Дела', 'papa')

app.currentUser = 'my'


const clickSound = new Audio('./assets/sound/on-sound.mp3')
clickSound.autoplay = true;
clickSound.muted="muted"
clickSound.play()

// app.removeUser('lena')

