import { useState } from 'react';

export function useToggle(initialState = false) {
  const [isToggled, setIsToggled] = useState<boolean>(initialState);

  return {
    isToggled,
    toggleOn() {
      setIsToggled(true);
    },
    toggleOff() {
      setIsToggled(false);
    },
    toggle() {
      setIsToggled((prev) => !prev);
    },
  };
}
