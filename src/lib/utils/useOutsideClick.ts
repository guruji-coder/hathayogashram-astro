import { onMount } from 'svelte';

export function useOutsideClick(node: HTMLElement, callback: () => void) {
  const handleClick = (event: MouseEvent | TouchEvent) => {
    if (node && !node.contains(event.target as Node)) {
      callback();
    }
  };

  onMount(() => {
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  });
}
