import { Note } from './Note.js'

export class NoteList {
  _notes = [];
  _key = null;
  _def = [];

  constructor(container, key = null, def = []) {
    this.container = container;
    this.list = document.createElement("div");
    this.list.classList.add('list-group')
    this.checkEmpty()

    this._key = key;
    this._def = def;

    this.update()

    container.innerHTML = '';
    container.append(this.list)


  }

  getNewID () {
    return  this._notes.length + 1;
  }

  safe () {
    if (this._key) {
    let safeList = [];
    
    for (const note of this._notes) {
      safeList.push({
        id: note.is,
        name: note.name,
        done: note.done
      })
      localStorage.setItem(this._key, JSON.stringify(safeList))
    }
   }
  }

  update () {
    console.log('update')
    let startList = this._def
    this._note = []
    this.list.innerHTML = '';
     
    if (this._key){
    let dataLS = localStorage.getItem(this._key)
    if( dataLS !== "" && dataLS !== null  ) startList = JSON.parse(dataLS)
    }
   if (startList.length > 0) {
    for (const obj of startList) {
        let newNote = new Note(this, obj.name, obj.done)
        if (obj.id) {
            newNote.id = obj.id
        } else {
            newNote.id = this.getNewID()
        }
        this._notes.push(newNote) 
    }
   }
   this.safe()
   this.checkEmpty()
  }

  add(name, done = false) {
    let newNote = new Note(this, name, done)
    newNote.id  =   this.getNewID() 
    console.log("ID: " + newNote.id )
    this._notes.push(newNote)
    this.checkEmpty()
    this.safe()
  } 

  checkEmpty() {
   if (this._notes.length == 0) {
    this.empty = document.createElement("div")
    this.empty.classList.add('empty')

    this.empty.textContent = 'Empty'
    this.list.append(this.empty);

   } else {
    if (this.empty) {
        this.empty.remove()
    }
   }

  }

  remove (value) {
    let id = value;

    if (value instanceof Note) {
      id = value.id
    }
    for (let i=0; i < this._notes.length; i++) {
      if (this._notes[i].id == id) {
        this._notes.splice(i, 1)
      }
    }
    console.log(this._notes)
    this.checkEmpty()
    this.safe()
  }

}