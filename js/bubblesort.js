var button;
var abort = false;

function bubble_start_stop () {
    button = document.getElementById("bubblebutton");
    bubblestart();
    button.addEventListener("click", bubblestart);
}

function bubblestart() {
    bubbleSort();
    button.removeEventListener("click", bubblestart);
    button.addEventListener("click", bubblestop);
    button.value = "Stop";
}

async function bubblestop() {
    abort = true;
    button.removeEventListener("click", bubblestop);
    button.addEventListener("click", bubblestart);
    button.value = "Start";
    await new Promise(r => setTimeout(r, 300));
    abort = false;
}

async function bubbleSort() {
    var reference_list = ["C4", "D4", "EB4", "F4", "G4", "AB4", "B4", "C5", "EB5"];
    const synth = new Tone.Synth().toDestination();
    let nums = [0, 1, 2, 3, 4, 5, 6, 7];
    shuffle(nums);
    let count = 0;
    for (let j = 0; j < nums.length; j += 1) {
        if (sorted(nums)) {
            button.value = "Start";
            return;
        }
        for (let i = 0; i < nums.length - count; i += 1) {
            if (nums[i] > nums[i + 1]) {
                swap(nums, i, i + 1);
            }
        }
        count += 1;
        for (let i = 0; i < nums.length; i += 1) {
            if (abort == true) {
                return;
            } else {
                synth.triggerAttackRelease(reference_list[nums[i]], "16N");
                await new Promise(r => setTimeout(r, 150));
            }
        }
    }
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
