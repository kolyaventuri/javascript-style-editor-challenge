$(document).ready(function(){
  $('#style_editor').submit((e) => {
    e.preventDefault();

    let selector = $('#style_editor input[name="selector"]').val();
    let property = $('#style_editor input[name="property"]').val();
    let value    = $('#style_editor input[name="value"]').val();

    setProperty(selector, property, value);
  });
});

const setProperty = (selector, property, value) => {
  if(!selector || !property || !value) throw new Error('Invalid arguments.');

  $(selector).css(property, value);
};
