import { useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, _setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);

    if (jsonValue !== null) {
      const dataFromLocal = JSON.parse(jsonValue);
      const currentDate = new Date().toLocaleDateString();

      //if date is diff then don't send data (to set expiry) else return data
      if (dataFromLocal.hasOwnProperty("date")) {
        if (dataFromLocal.date === currentDate) {
          return dataFromLocal as T;
        }
      } else {
        return dataFromLocal as T;
      }
    }

    //if fn then call and get data else return initialValue value
    if (initialValue instanceof Function) {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  //on every call to setValue => setItem in localStorage and setting the state
  const setValue = (newState: T | (() => T)) => {
    const value = newState instanceof Function ? newState() : newState;
    _setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [value, setValue] as const;
}

export default useLocalStorage;
