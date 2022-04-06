const modal = $.modal({
  title: 'Alexeyenko Artyom',
  closable: true,
  content: `
  <p>lorem</p>`,
  width: '400px',
  footerButtons: [
    {text: 'Ok', type: 'primary', handler() {
      modal.close()
    }},
    {text: 'Cancel', type: 'danger', handler() {
      modal.close()
    }},
  ]
})