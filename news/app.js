// Custom Http Module
function customHttp() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post(url, body, headers, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }

        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    },
  };
}
// Init http module
const http = customHttp();

const service = (function () {
  const apiKey = '8f13bbc9f4cb4be882690b31743b35ed'
  const apiUrl = 'http://news-api-v2.herokuapp.com'
  return {
    topheadlines(country = 'ua', cb) {
      http.get(
        `${apiUrl}/top-headlines?country=${country}&apiKey=${apiKey}`,
        cb
      )
    },
    everising(query, cb) {
      http.get(
        `${apiUrl}/everything?q=${query}&apiKey=${apiKey}`,
        cb
      )
    }
  }
})()

// DOM
const form = document.forms['newsControls']
const select = form.elements['country']
const search = form.elements['search']

//  init selects
document.addEventListener('DOMContentLoaded', function () {
  M.AutoInit();
  loadNews();
});

form.addEventListener('submit', (e) => {
  e.preventDefault()
  loadNews()
})

// load all news
function loadNews() {
  const country = select.value
  const text = search.value

  if (!text) {
    service.topheadlines(country, getResponse)
  } else {
    service.everising(text, getResponse)
  }
}

function getResponse(err, res) {
  if (err) {
    showMessage(err, 'error-msg')
    return
  }

  if (!res.articles.length) {
    console.log('ничего не найдено');
    return
  }

  renderNews(res.articles)
}

function showMessage(msg, type = 'success') {
  M.toast({
    html: msg,
    classes: type
  })
}

// render all news
function renderNews(news) {
  const container = document.querySelector('.news-container .row')
  if(container.children.length) {
    clearNews(container)
  }
  let fragment = ''

  news.forEach(item => {
    const newsItem = newsItemTemplate(item)
    fragment += newsItem
  })

  container.insertAdjacentHTML('afterbegin', fragment)
}

// clear news list

function clearNews(container) {
  let child = container.lastElementChild
  while(child) {
    container.removeChild(child)
    child = container.lastElementChild
  }
}

// html template item news
function newsItemTemplate({ urlToImage, title, url, description }) {
  return `
    <div class="col s12">
      <div class="card">
        <div class="card-image">
          <img src="${urlToImage}" />
          <span class="card-title">${title || ''}</span>
        </div>
        <div class="card-content">
          <p>${description || ''}</p>
        </div>
        <div class="card-action">
          <a href="${url}">Read more</a>
        </div>
      </div>
    </div>
  `
}


