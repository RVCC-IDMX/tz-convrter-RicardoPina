/* eslint-disable no-console */
const moment = require('moment-timezone');

const yargs = require('yargs');

const defaultTz = 'America/New_York';
moment.tz.setDefault(defaultTz);

let targetTimezone;

const command = yargs.argv._[0];
const params = yargs.argv;

// Checks if no timezone was passed and returns error
if (yargs.argv._.length !== 1) {
  console.log('Usage: node tz <timezone> [--format]');
  process.exit(1);
} else {
  targetTimezone = command;
}

// Checks for --format flag and formats if true, otherwise returns unformatted
if (params.format) {
  console.log(`Time here is: ${moment().tz(defaultTz).format('dddd, MMMM Do YYYY, h:mm:ss a')}`);
  console.log(`The time in ${targetTimezone} is: ${moment().tz(targetTimezone).format('dddd, MMMM Do YYYY, h:mm:ss a')}`);
} else {
  console.log(`Time here is: ${moment().tz(defaultTz).format()}`);
  console.log(`The time in ${targetTimezone} is: ${moment().tz(targetTimezone).format()}`);
}
