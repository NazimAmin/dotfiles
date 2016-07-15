module.exports = {
  brew: [
    'ack',
    // Install GNU core utilities (those that come with OS X are outdated)
    // Don’t forget to add `$(brew --prefix coreutils)/libexec/gnubin` to `$PATH`.
    'coreutils',
    'dos2unix',
    'gnu-sed --default-names',
    // better, more recent grep
    'homebrew/dupes/grep',
    // jq is a sort of JSON grep
    'jq',
    // better/more recent version of screen
    'homebrew/dupes/screen',
    'tree',
    // better, more recent vim
    'require_brew vim --override-system-vi',
    'watch',
    // Install wget with IRI support
    'wget --enable-iri'
  ],
  cask: [
      'chrome',
      'brackets',
      'dropbox',
      'the-unarchiver',
      'vlc',
      'spotify', 
      'atom',
      'brackets',
      'xquartz'
  ],
  gem: [
    'git-up'
  ],
  npm: [
    'antic',
    'buzzphrase',
    'bower',
    'bower-check-updates',
    'esformatter',
    'eslint',
    'instant-markdown-d',
    'npm-check',
    'yo',
    'generator-dockerize',
    'gulp',
    'prettyjson',
    'trash',
    'vtop'
  ]
};
