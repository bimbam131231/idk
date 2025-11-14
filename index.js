#!/usr/bin/env node

const args = process.argv.slice(2);
const command = args[0];

// Decision responses
const decisions = [
  "Definitely do it!",
  "Probably not a good idea...",
  "Why not? Go for it!",
  "Maybe later...",
  "Absolutely!",
  "I wouldn't if I were you",
  "Sounds like a plan!",
  "Sleep on it first",
  "Trust your gut on this one",
  "Fortune favors the bold!"
];

// Activity suggestions
const activities = [
  "Go for a walk",
  "Read a book",
  "Learn something new",
  "Call a friend",
  "Make some coffee/tea",
  "Listen to music",
  "Exercise for 20 minutes",
  "Cook something delicious",
  "Watch a documentary",
  "Clean/organize something",
  "Start that project you've been thinking about",
  "Take a power nap",
  "Write in a journal",
  "Try a new recipe"
];

// Motivational quotes
const quotes = [
  "The best time to start was yesterday. The next best time is now.",
  "Done is better than perfect.",
  "Small steps in the right direction can turn out to be the biggest step of your life.",
  "You don't have to be great to start, but you have to start to be great.",
  "The only way to do great work is to love what you do.",
  "Believe you can and you're halfway there.",
  "It always seems impossible until it's done.",
  "Don't wait for opportunity. Create it."
];

function printHelp() {
  console.log(`
🤷 idk - Decision Making CLI

Usage:
  idk                    Get a yes/no decision
  idk decide <question>  Get advice on a decision
  idk do                 Get a random activity suggestion
  idk quote              Get a motivational quote
  idk help               Show this help message

Examples:
  idk
  idk decide "Should I learn Rust?"
  idk do
  idk quote
  `);
}

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function main() {
  if (!command || command === 'help') {
    printHelp();
    return;
  }

  switch (command) {
    case 'decide':
      const question = args.slice(1).join(' ');
      if (question) {
        console.log(`\n🤔 "${question}"`);
      }
      console.log(`\n💡 ${getRandom(decisions)}\n`);
      break;

    case 'do':
      console.log(`\n✨ How about: ${getRandom(activities)}\n`);
      break;

    case 'quote':
      console.log(`\n💪 ${getRandom(quotes)}\n`);
      break;

    default:
      // No command or unrecognized = simple yes/no
      console.log(`\n${getRandom(decisions)}\n`);
  }
}

main();
