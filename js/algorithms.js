// import "build-v14-7-77/Tone.js";
//
// const synth = new Tone.Synth().toDestination();
// const now = Tone.now()
// synth.triggerAttackRelease("C4", "8n", now)
// synth.triggerAttackRelease("E4", "8n", now + 0.5)
// synth.triggerAttackRelease("G4", "8n", now + 1)
//



// let nums = [8, 7, 3, 5, 6, 1];
// bubblesort(nums);

function bubblesort(nums) {
    console.log("=== Original List ===");
    console.log(nums, '\n');
    console.log("=== Bubblesort Output ===");
    while (!sorted(nums)) {
        for (let i = 0; i < nums.length; i += 1) {
            if (nums[i] > nums[i + 1]) {
                swap(nums, i, i + 1);
                console.log(nums[i], " ", nums[i + 1], " ");
            }
        }
    }
    console.log('\n', "=== Sorted List === ");
    console.log(nums);
}


function sorted(list) {
    for (let i = 0; i < list.length - 1; i += 1) {
        if (list[i] > list[i + 1]) {
            return false;
        }
    }
    return true;
}

function swap(list, index1, index2) {
    const val1 = list[index1];
    const val2 = list[index2];
    list[index1] = val2;
    list[index2] = val1;
    return list;
}
