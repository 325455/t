const { program } = require('commander')

function helpOptions() {
  // 1.处理--version的操作
  const version = require('../../package.json').version
  program.version(version, '-v --version')
}

module.exports = helpOptions
