var button;
var abort = false;

function comb_start_stop () {
    button = document.getElementById("combbutton");
    button.addEventListener("click", combstart);
}

function combstart() {
    console.log("Started");
    combSort();
    button.removeEventListener("click", combstart);
    button.addEventListener("click", combstop);
    button.value = "Stop";
}

async function combstop() {
    abort = true;
    console.log("Stopped");
    button.removeEventListener("click", combstop);
    button.addEventListener("click", combstart);
    button.value = "Start";
    await new Promise(r => setTimeout(r, 300));
    abort = false;
}

async function combSort() {
    var reference_list = ["C4", "D4", "EB4", "F4", "G4", "AB4", "B4", "C5", "EB5"];
    const synth = new Tone.Synth().toDestination();
    let nums = [0, 1, 2, 3, 4, 5, 6, 7];
    shuffle(nums);
    let gap = nums.length;
    let swapped = true;
    while (gap != 1 || swapped == true) {
        gap = getNextGap(gap);
        swapped = false;
        for (let i = 0; i < nums.length - gap; i += 1) {
            if (nums[i] > nums[i+gap]) {
                swap(nums, i, i + gap);
                swapped = true;
            }
        }
        for (let i = 0; i < nums.length; i += 1) {
            if (abort == true) {
              return;
            }
            synth.triggerAttackRelease(reference_list[nums[i]], "16N");
            await new Promise(r => setTimeout(r, 150));
        }
    }
}

function getNextGap(gap) {
    gap = parseInt((gap * 10) / 13, 10);
    if (gap < 1)
        return 1;
    return gap;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
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
