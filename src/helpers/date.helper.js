export let parsedDate = new Date()
  .toUTCString()
  .split(' ')
  .slice(1, 4)
  .join(' ');
