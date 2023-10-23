import { NoteList } from "./NoteList.js";
export class ToDo {
    _notes = null;
    _users = [];
    _currentUser = 'todo';

  constructor(container, currentTitle = 'Список дел', currentKey = 'todo', currentDef = [] ) {
    this.container = container;

    this.nav = document.createElement("nav")
    this.title = document.createElement("h2")
    this.form = document.createElement("form")
    this.input = document.createElement("input")
    this.buttonWrapper = document.createElement("div")
    this.button = document.createElement("button")
    this.list = document.createElement("div")

    this.container.classList.add('container')
    this.list.classList.add('hz')
    this.nav.classList.add('nav')
    this.form.classList.add('form')
    this.input.classList.add('inp')
    this.input.placeholder = 'Введите новое дело'
    this.buttonWrapper.classList.add('button-wrapper')
    this.button.classList.add('btn', 'button')
    this.button.textContent = 'Добавите дело'
    this.button.disabled = true;

    this.buttonWrapper.append(this.button)
    this.form.append(this.input)
    this.form.append(this.buttonWrapper)
    this.container.append(this.nav)
    this.container.append(this.title)
    this.container.append(this.form)
    this.container.append(this.list)

    // this._notes = new NoteList(this.list)

    this.input.addEventListener("input", () => {
        this.button.disabled = false;
        if (this.input.value.length == 0) {
            this.button.disabled = true;
        }
    });

   this.addUser(currentTitle, currentKey, currentDef)

    this.form.addEventListener("submit", (e) => {
        
        e.preventDefault()
        if (!this.input.value) {
            return;
        }
        if (this._notes) {
            this._notes.add(this.input.value)
        }

        this.button.disabled = true;
        this.input.value = '';
    });
}

addUser(title, key, def = []) {
    // Создание кнопки пользователя
    let button = document.createElement("button")
    button.classList.add("btn", "btn-primary");
    button.type = "button"
    button.textContent = title

    button.addEventListener('click', () => {
        this.currentUser = key;
    })

    // Добавление пользователея в массив пользователей
    this._users.push({
        title: title,
        key: key,
        def: def,
        button: button
    })
    this.nav.append(button)
    

  }


  set currentUser(value) {
     this._currentUser = value;
      
    let currentUser = null

    for (const user of this._users){

    if (user.key == value) {
        currentUser  = user;
        user.button.classList.add('active')
    } else {
        user.button.classList.remove('active')
        
    }
 
}
 
this.title.textContent = currentUser.title;
this._notes = new NoteList(this.list, value)
}

  get currentUser() {
    return this._currentUser;
  }
}