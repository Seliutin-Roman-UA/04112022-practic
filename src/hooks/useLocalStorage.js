
export function useLocalStorage({ key }) {
    const fooArray = {
      add: value => localStorage.setItem(key, JSON.stringify(value)),
      get: () => JSON.parse( localStorage.getItem(key)),
    };
   return fooArray;
}