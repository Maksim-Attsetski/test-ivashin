interface IKeys {
  notes: 'notes';
  tags: 'tags';
}

class Storage {
  LSKeys: IKeys;

  constructor() {
    this.LSKeys = {
      notes: 'notes',
      tags: 'tags',
    };
  }

  setItem(key: keyof IKeys, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: keyof IKeys) {
    localStorage.removeItem(key);
  }

  getItem<T>(key: keyof IKeys): T | null {
    const valueAsString: string | null = localStorage.getItem(key);

    return valueAsString ? JSON.parse(valueAsString) : null;
  }

  clear() {
    localStorage.clear();
  }
}

const storage = new Storage();
export default storage;
