export function insertSorted(array: number[], value: number): number[] {
  let i = 0;

  // Find the correct position to insert the number
  while (i < array.length && array[i] < value) {
    i++;
  }

  // Insert the value at the correct position
  array.splice(i, 0, value);
  return array;
}
