Package.describe({
  summary: "Chosen is a library for making long, unwieldy select boxes more friendly."
});

Package.on_use(function (api, where) {
  api.use('jquery');

  api.add_files('chosen.jquery.js', 'client');
  api.add_files('chosen.css', 'client');
  api.add_files('chosen-sprite.png', 'client');
  api.add_files('chosen-sprite@2x.png', 'client');
});