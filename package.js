Package.describe({
  summary: "Ionic framework packaged for Meteor.",
  version: "0.1.1",
  git: "https://github.com/pedrohenriquerls/meteor-ionic"
});

Package.on_use(function (api, where) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.use([
      'urigo:angular@0.6.0',
      'mquandalle:bower@0.1.11'],
    'client');

  api.use([
    'fastclick@1.0.1'
  ], 'client', {weak : true});

  // Add bower
  api.addFiles('smart.json', 'client');

  // Fix icons to absolute path
  api.addFiles('ionic-override.css', 'client');

  // ionic files
  api.addFiles('init.js', 'client');
});
