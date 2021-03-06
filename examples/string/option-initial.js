'use strict';

const { StringPrompt } = require('enquirer');
const prompt = new StringPrompt({
  message: 'What is your username?',
  initial: 'jonschlinkert'
});

prompt.run()
  .then(answer => console.log('ANSWER:', answer))
  .catch(console.log);
