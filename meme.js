#!/usr/bin/env node --harmony
const chalk = require('chalk');
const co = require('co');
const prompt = require('co-prompt');
const program = require('commander');

const a = (b) => b.split('').map((v, i, r) => r[i] = ((i % 2 === 0) ? v.toUpperCase() : v.toLowerCase())).join('');

program
  .action((stringInput) => {
    co(function *() {
      while(true) {
        const stringToMeme = yield prompt(chalk.bold.cyan('Enter string to meme-ify: '));
        console.log(chalk.bold.greenBright(a(stringToMeme)));
      }
    })
  })
  .parse(process.argv);