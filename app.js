import { ToDo } from "./ToDo.js"



let app = new ToDo(document.getElementById('app'))


app.addUser('мои дела', 'my')
app.addUser('покупки', 'lena')
app.addUser('дела', 'papa')

app.currentUser = 'my'
// newList2.add(213)
// newList2.add(42443)
// newList2.add(42342)




// document.getElementById('1').addEventListener('click', function() {
//   newList.add('gdfgfdg')

//   console.log(newList._notes)
// })

