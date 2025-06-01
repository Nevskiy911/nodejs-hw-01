import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
  } catch (error) {
    console.error('Error of removing all contacts:', error.message);
  }
};

removeAllContacts();
