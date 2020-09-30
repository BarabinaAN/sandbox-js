const users = [
  {
    "_id": "5d220b10e8265cc978e2586b",
    "isActive": true,
    "balance": 2853.33,
    "age": 20,
    "name": "Buckner Osborne",
    "gender": "male",
    "company": "EMPIRICA",
    "email": "bucknerosborne@empirica.com",
    "phone": "+1 (850) 411-2997",
    "registered": "2018-08-13T04:28:45 -03:00",
    "nestedField": { total: 300 }
  },
  {
    "_id": "5d220b10144ef972f6c2b332",
    "isActive": true,
    "balance": 1464.63,
    "age": 38,
    "name": "Rosalie Smith",
    "gender": "female",
    "company": "KATAKANA",
    "email": "rosaliesmith@katakana.com",
    "phone": "+1 (943) 463-2496",
    "registered": "2016-12-09T05:15:34 -02:00",
    "nestedField": { total: 400 }
  },
  {
    "_id": "5d220b1083a0494655cdecf6",
    "isActive": false,
    "balance": 2823.39,
    "age": 40,
    "name": "Estrada Davenport",
    "gender": "male",
    "company": "EBIDCO",
    "email": "estradadavenport@ebidco.com",
    "phone": "+1 (890) 461-2088",
    "registered": "2016-03-04T03:36:38 -02:00",
    "nestedField": { total: 200 }
  }
];

(function (arrOfUsers) {

  const headerTable = {
    position: '#',
    name: 'Name',
    email: 'Email',
    balance: 'Balance'
  }

  // transformation [] => {}
  const objOfUsers = arrOfUsers.reduce((acc, user) => {
    acc[user.name] = user
    return acc
  }, {})

  // get DOM elements
  const tableSection = document.querySelector('.section-table')

  // render list of tasks
  function renderTable(list) {
    if (!list) return console.error('Передайте список пользователей')

    const fragment = document.createDocumentFragment()
    const table = document.createElement('table')
    table.classList.add('table')

    table.appendChild(tableHeaderTemplate(headerTable))
    table.appendChild(tableBodyTemplate(list))
    fragment.appendChild(table)

    tableSection.appendChild(fragment)
  }

  renderTable(objOfUsers)

  // create table header DOM node
  function tableHeaderTemplate(list) {
    const thead = document.createElement('thead')
    const tr = rowTemplate(list)
    thead.appendChild(tr)

    return thead
  }

  // calculate total balance
  function calcTotal(list) {
    let total = 0
    Object.values(list).forEach(({ balance }) => !isNaN(balance) ? total += balance : 0)
    return total.toFixed(2)
  }

  // create row with total balance
  function totalRowTemplate(list) {
    const total = calcTotal(list)

    const tr = document.createElement('tr')
    const td = document.createElement('td')
    td.setAttribute('colspan', '4')
    td.classList.add('text-right')
    td.textContent = 'Total balance: '

    const b = document.createElement('b')
    b.textContent = `${total}`

    td.appendChild(b)
    tr.appendChild(td)

    return tr
  }

  // create table body DOM node
  function tableBodyTemplate(list) {
    const tbody = document.createElement('tbody')

    Object.values(list).forEach((item, indx) => {
      const tr = rowTemplate(item, indx)
      tbody.appendChild(tr)
    })
    tbody.appendChild(totalRowTemplate(list))

    return tbody
  }

  // create user DOM item
  function rowTemplate({ name, email, balance } = {}, indx = '#') {
    const position = !isNaN(indx) ? ++indx : indx
    const details = { position, name, email, balance }


    if (isNaN(indx)) return cellsTemplate(details, 'th')
    return cellsTemplate(details, 'td')
  }

  // create row && cells DOM nodes
  function cellsTemplate(details, selector) {
    const tr = document.createElement('tr')
    Object.values(details).forEach(detail => {
      const cell = document.createElement(`${selector}`)
      cell.textContent = detail
      tr.appendChild(cell)
    })
    return tr
  }

})(users);
