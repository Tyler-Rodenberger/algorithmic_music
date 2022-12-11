var button;
var abort = false;

function random_start_stop () {
    button = document.getElementById("randombutton");
    button.addEventListener("click", start);
}

function start() {
    console.log("Started");
    randomTones();
    button.removeEventListener("click", start);
    button.addEventListener("click", stop);
    button.value = "Stop";
}

async function stop() {
    abort = true;
    console.log("Stopped");
    button.removeEventListener("click", stop);
    button.addEventListener("click", start);
    button.value = "Start";
    await new Promise(r => setTimeout(r, 300));
    abort = false;
}

async function randomTones() {
    var reference_list = ["C2", "EB2", "G2", "C3", "D3", "EB3", "F3", "G3", "AB3", "B3",
                          "C4", "D4", "EB4", "F4", "G4", "AB4", "B4", "C5", "D5", "EB5",
                          "F5", "G5", "AB5", "B5", "C6", "D6", "EB6", "F6", "G6", "AB6"];
    const synth = new Tone.Synth().toDestination();
    let j = 0;
    while (true) {
        let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
                    10, 11, 12, 13, 14, 15, 16, 17 ,18, 19,
                    20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
        shuffle(nums);
        for (let i = 0; i < nums.length; i += 1) {
            if (abort == true) {
              return;
            }
            synth.triggerAttackRelease(reference_list[nums[i]], "16N");
            await new Promise(r => setTimeout(r, 150));
        }
        j += 1;
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
