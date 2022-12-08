// function recursive(nums, size) {
//   if (sorted(nums)) {
//     return nums;
//   }
//   let min = 0;
//   for (let i = 1; i < size; i += 1) {
//     if (nums[i] < nums[min]) {
//       min = i;
//     }
//   }
//   if (min != 0) {
//     swap(nums, 0, min);
//   }
//   console.log(nums);
//   nums = nums[0] + recursive(nums.slice(1), size);
//   return nums;
// }

let nums = [7, 5, 6, 4, 1, 2, 3, 9, 8];
console.log(nums);
let size = 9;


let min = 0;
for (let i = 0; i < size; i += 1) {
  min = i;
  for (let j = i + 1; j < size; j += 1) {
    if (nums[j] < nums[min]) {
      min = j;
    }
    if (min != i) {
      swap(nums, min, i);
    }
  }
  console.log(nums);
}

function swap(list, index1, index2) {
    const val1 = list[index1];
    const val2 = list[index2];
    list[index1] = val2;
    list[index2] = val1;
    return list;
}

function sorted(list) {
    for (let i = 0; i < list.length - 1; i += 1) {
        if (list[i] > list[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(nums);
