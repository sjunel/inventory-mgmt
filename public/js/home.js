document.addEventListener('DOMContentLoaded', e => {
  const slot = document.getElementById('add-slot');

  slot.addEventListener('click', e => {
    const footer = document.getElementById('footer');

    const source = document.getElementById('form-modal-template').innerHTML;
    const template = Handlebars.compile(source);
    const context = {
      title: "Add your product",
    };
    const form_modal_html = template(context);

    footer.insertAdjacentHTML('afterend', form_modal_html);
  });

  // TODO
  // add event listener for deal alert
  // href change
});
