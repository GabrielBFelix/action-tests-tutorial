function mooncakeSays(message) {
  let mooncake = '(UwU)';

  if ( !message ) mooncake;

  return `${mooncake} ${message}`;
}

module.exports.mooncakeSays = mooncakeSays;
