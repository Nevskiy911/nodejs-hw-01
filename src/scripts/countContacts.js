import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const constants = await readContacts();
    return constants.length;
  } catch (error) {
    console.error('Error of counting:', error.message);
  }
};

console.log(await countContacts());
