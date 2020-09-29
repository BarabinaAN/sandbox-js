const tasks = [
  {
    _id: '5d2ca9e2e03d40b326596aa7',
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095c1288e0',
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
  {
    _id: '5d2ca9e2e03d40b3232496aa7',
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095564788e0',
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
];

(function (arrOfTasks) {
  
  // transformation [] => {}
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task
    return acc
  }, {})

  // get DOM elements
  const ul = document.querySelector('.list-group')
  const form = document.forms['addTask']
  const inputTitle = form.elements['title']
  const inputBody = form.elements['body']

  // events
  form.addEventListener('submit', onFormSubmitHendler)
  ul.addEventListener('click', onDeleteHendler)

  // submit form && add new list item to the DOM
  function onFormSubmitHendler(e) {
    e.preventDefault()
    const titleVal = inputTitle.value
    const bodyVal = inputBody.value
    if (!titleVal || !bodyVal) alert('Заполните поля')

    const task = createNewTask(titleVal, bodyVal)
    const li = listItemTemplate(task)
    ul.insertAdjacentElement('afterbegin', li)
    form.reset()
  }

  // delete list item from DOM
  function onDeleteHendler(e) {
    e.preventDefault()
    const current = e.target
    if (current.tagName !== 'BUTTON') return
    const parent = current.closest('[data-task-id]')
    const id = parent.dataset.taskId
    if (deleteTask(id)) parent.remove();
  }

  // delete task
  function deleteTask(id) {
    const { title } = objOfTasks[id];
    const isDelete = confirm(`Delete task: ${title}`) && delete objOfTasks[id]
    return isDelete
  }

  // create new task
  function createNewTask(title, body) {
    const newTask = {
      _id: `task-${Math.random()}`,
      completed: false,
      title,
      body,
    }
    objOfTasks[newTask._id] = newTask
    return { ...newTask }
  }

  // render list of tasks
  function renderAllTasks(list) {
    if (!list) return console.error('Передайте список задач')

    const fragment = document.createDocumentFragment()

    Object.values(list).forEach(task => {
      const li = listItemTemplate(task)
      fragment.appendChild(li)
    });
    ul.appendChild(fragment)
  }
  renderAllTasks(objOfTasks)

  // create task DOM element
  function listItemTemplate({ _id, title, body } = {}) {
    const li = document.createElement('li')
    li.classList.add(
      'list-group-item',
      'd-flex',
      'align-items-center',
      'flex-wrap',
      'mt-2'
    )
    li.setAttribute('data-task-id', _id)

    const span = document.createElement('span')
    span.textContent = title

    const btn = document.createElement('button')
    btn.classList.add(
      'btn',
      'btn-danger',
      'ml-auto',
      'delete-btn'
    )
    btn.textContent = 'Delete'

    const p = document.createElement('p')
    p.classList.add(
      'mt-2',
      'w-100',
    )
    p.textContent = body

    li.appendChild(span)
    li.appendChild(btn)
    li.appendChild(p)

    return li
  }

})(tasks);
