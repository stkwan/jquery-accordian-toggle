$(function() {
  const $form = $("form");
  const $input = $("#char");
  const $accordian = $("#accordian");
  const $anchor = $('a');

  let currentKey;

  $form.submit(event => {
    event.preventDefault();
    currentKey = $input.val();
  });

  $(document).off("keypress").on("keypress", event => {
    if (event.key !== currentKey) {
      return;
    }
    $anchor.trigger('click');
  });

  $anchor.click(event => {
    event.preventDefault();
    $accordian.slideToggle();
  });
});