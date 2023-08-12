function swap(arr: number[], a: number, b: number) {
  let tmp = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}

export default function bubble_sort(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    // -1: exclude the last member.
    // -i: exclude the members we've sorted in the last iterations.
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // Swap the current member with the next member.
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1)
    }
  }
}
