// import yargs to re-use code from someone else that has already 
// solved the complexities of parsing command line arguments
import yargs = require('yargs');
import { calcWoodNeeded } from './commands/calc-wood-needed';
import {recall} from './commands/recall';

calcWoodNeeded( yargs );

recall( yargs );

yargs.help();
yargs.parse();