let technics = [
  {id:1, title: 'Ipad', price: 20, img: 'https://images.unsplash.com/photo-1546868871-0f936769675e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aXBhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'},
  {id:2, title: 'MacBook', price: 30, img: 'https://images.unsplash.com/photo-1468436139062-f60a71c5c892?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFjfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'},
  {id:3, title: 'Apple Watch', price: 40, img: 'https://images.unsplash.com/photo-1517420879524-86d64ac2f339?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'}
]

const toHTML = technic => `
<div class="col"><div class="card">
          <img src="${technic.img}" style="height: 300px;" class="card-img-top" alt="${technic.title}>
          <div class="card-body">
            <h5 class="card-title">${technic.title}</h5>
            <p class="card-text">Some quick example text to build on the card title and     make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary" data-btn="price" data-id="${technic.id}">Buy</a>
            <a href="#" class="btn btn-danger" data-btn="remove">Hide</a>
          </div>
        </div>
      </div>`

function render() {
  const html = technics.map(toHTML).join('')
  document.querySelector('#technics').innerHTML = html
}

render()

const priceModal = $.modal({
  title: 'Price',
  closable: true,
  width: '400px',
  footerButtons: [
    {text: 'Close', type: 'primary', handler() {
      modal.close()
    }},
  ]
})

document.addEventListener('click', event => {
  event.preventDefault()
  const id = +event.target.dataset.id
  const btnType = event.target.dataset.btn
  const technic = technics.find(f => f.id === id)
  if(btnType === 'price') {
    priceModal.setContent(`
    <p>Price on ${technic.title}: <strong>${technic.price}</strong></p>`)
    priceModal.open()
  } else if(btnType === 'remove') {
    $.confirm({
      title: 'Are you sure?',
      content: `<p>You hide: <strong>${technics.title}</strong></p>`,
    }).then(() => {
      technics = technics.filter(f => f.id !== id)
      render()
    }).catch(() => {
      console.log('cancel')
    })
  }
})