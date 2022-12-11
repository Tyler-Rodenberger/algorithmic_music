var button;
var abort = false;

function selection_start_stop () {
    button = document.getElementById("selectionbutton");
    button.addEventListener("click", selectionstart);
}

function selectionstart() {
    console.log("Started");
    selectionSort();
    button.removeEventListener("click", selectionstart);
    button.addEventListener("click", selectionstop);
    button.value = "Stop";
}

async function selectionstop() {
    abort = true;
    console.log("Stopped");
    button.removeEventListener("click", selectionstop);
    button.addEventListener("click", selectionstart);
    button.value = "Start";
    await new Promise(r => setTimeout(r, 300));
    abort = false;
}

async function selectionSort() {
    var reference_list = ["C4", "D4", "EB4", "F4", "G4", "AB4", "B4", "C5", "EB5"];
    const synth = new Tone.Synth().toDestination();
    let nums = [0, 1, 2, 3, 4, 5, 6, 7];
    shuffle(nums);
    for (let i = 0; i < nums.length; i += 1) {
        if (sorted(nums)) {
            return;
        }
        let min = i;
        for (let j = i + 1; j < nums.length; j += 1) {
            if (nums[j] < nums[min]) {
                min = j;
            }
        }
        if (min != i) {
            swap(nums, min, i);
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
