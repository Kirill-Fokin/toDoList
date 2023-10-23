import { NoteList } from "./NoteList.js"

export class Note {
  _name = "";
  _done = false;

  constructor(container, name="", done=false) {
    this.item = document.createElement("div");
    this.buttonGroup = document.createElement("div")
    this.nameSpan = document.createElement("span")
    this.doneButton = document.createElement("button")
    this.deleteButton = document.createElement("button")

    this.item.classList.add('note')

   
    this.buttonGroup.classList.add("group")
    this.doneButton.classList.add("btn","done-btn")
    this.doneButton.textContent = "Готово"
    this.deleteButton.classList.add("btn", "delete-btn")
    this.deleteButton.textContent = "Удалить"

   this.deleteButton.addEventListener('click', ()=> {
     if (confirm('вы уверены?')) {
        this.delete() 
     }
   })

   this.doneButton.addEventListener('click', ()=> {
    this.done = !this.done
  })

   this.name = name;
   this.done = done;
   this.container = container;
   
   this.buttonGroup.append(this.doneButton)
   this.buttonGroup.append(this.deleteButton)
   this.item.append(this.nameSpan)
   this.item.append(this.buttonGroup)

   if (container instanceof NoteList) {
     container.list.append(this.item);
  } else {
    container.append(this.item);
  }

  }
  set name (value) {
    this._name = value;
    this.nameSpan.textContent = value;
    console.log('сделано')
  }

  get name() {
    return this._name;
  }

  set done(value) {
    this._done = value;

    if (value) {
      this.item.classList.add('done-btn')
    } else {
        this.item.classList.remove('done-btn')
    }

    if (this.container instanceof NoteList) {
      this.container.save()
    }
   
  }

  get done() {
    return this._done;
  }

  delete () {
    this.item.remove()

    if (this.container instanceof NoteList) {
      this.container.remove(this)
    }
  }

}



