const moment = require('moment-timezone');
const yargs = require('yargs');

moment.tz.setDefault('America/New_York');

let targetTimezone;

console.log(yargs.argv);
const command = yargs.argv._[0];
const params = yargs.argv;

if (yargs.argv._.length !== 1) {
  console.log('Usage: node tz <timezone> [--format]');
  process.exit(1);
} else {
  targetTimezone = command;
}

if (params.format) {
  console.log(`The time at the ${targetTimezone} timezone is ${moment().tz(targetTimezone).format('dddd, MMMM Do YYYY, h:mm:ss a')}`);
} else {
  console.log(`The time at the ${targetTimezone} timezone is ${moment().tz(targetTimezone).format()}`);
}
