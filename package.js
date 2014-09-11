Package.describe({
  summary: "Provides nice outlined buttons for bootstrap 3.",
  version: "1.1.0",
  git: "https://github.com/andruschka/meteor-bootstrap-outlined-buttons.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.addFiles('outlined-buttons.css', 'client');
});
