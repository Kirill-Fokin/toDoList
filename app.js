import { NoteList } from "./NoteList.js"
import { Note } from "./Note.js"



let newList = new NoteList(document.getElementById('app'), 'my')


// newList2.add(213)
// newList2.add(42443)
// newList2.add(42342)




document.getElementById('btn').addEventListener('click', function() {
  newList.add('gdfgfdg')

  console.log(newList._notes)
})

