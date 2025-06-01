import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('	There are no contacts!');
      return;
    }
    contacts.pop();
    await writeContacts(contacts);
  } catch (error) {
    console.error('Error of removing last contact:', error.message);
  }
};

removeLastContact();
