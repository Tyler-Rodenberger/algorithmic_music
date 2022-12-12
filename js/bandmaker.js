var button;
var running = false;
var bass_volume = -100;
var drums_volume = -100;
var accompaniment_volume = -100;
var lead_synth_volume = -100;
var bass_synth;
var drums_synth;
var accompaniment_synth;
var lead_synth;




// ==================================




function bandmaker_start_stop () {
    button = document.getElementById("bandmakerbutton");
    if (!running) {
        bandmakerstart();
    }
    button.addEventListener("click", bandmakerstart);
}

async function bandmakerstart() {
    await new Promise(r => setTimeout(r, 10));
    running = true;
    console.log("running == true");
    console.log("Music Started");
    button.removeEventListener("click", bandmakerstart);
    button.addEventListener("click", bandmakerstop);
    button.value = "Stop";
}

function bandmakerstop() {
  console.log("music stopped");
    running = false;
    button.removeEventListener("click", bandmakerstop);
    button.addEventListener("click", bandmakerstart);
    button.value = "Start";
}




// ===========================================




function bass_start_stop() {
    if (running == false) {
        drums();
    }
}

function bass_mute_unmute () {
    button = document.getElementById("bassbutton");
    button.addEventListener("click", bassunmute);
}

function bassunmute() {
    bass_volume = -6;
    button.removeEventListener("click", bassunmute);
    button.addEventListener("click", bassmute);
    button.value = "Mute";
    console.log("Bass unmuted");
}

function bassmute() {
    bass_volume = -100;
    button.removeEventListener("click", bassmute);
    button.addEventListener("click", bassunmute);
    button.value = "Unmute";
    console.log("Bass muted");
}


// ==================================



function drums_start_stop() {
    if (running == false) {
        drums();
    }
}

function drums_mute_unmute () {
    button = document.getElementById("drumsbutton");
    button.addEventListener("click", drumsunmute);
}

function drumsunmute() {
    drums_volume = -6;
    button.removeEventListener("click", drumsunmute);
    button.addEventListener("click", drumsmute);
    button.value = "Mute";
    console.log("drums unmuted");
}

function drumsmute() {
    drums_volume = -100;
    button.removeEventListener("click", drumsmute);
    button.addEventListener("click", drumsunmute);
    button.value = "Unmute";
    console.log("drums muted");
}



// ==================================



function accompaniment_start_stop() {
    if (running == false) {
        accompaniment();
        console.log("Accompaniment started");
    } else {
        console.log("Accompaniment not started because running = true");
    }
}

function accompaniment_mute_unmute () {
    button = document.getElementById("accompanimentbutton");
    button.addEventListener("click", accompanimentunmute);
}

function accompanimentunmute() {
    console.log("accompaniment unmuted")
    accompaniment_volume = -6;
    button.removeEventListener("click", accompanimentunmute);
    button.addEventListener("click", accompanimentmute);
    button.value = "Mute";
}

function accompanimentmute() {
    console.log("accompaniment muted");
    accompaniment_volume = -100;
    button.removeEventListener("click", accompanimentmute);
    button.addEventListener("click", accompanimentunmute);
    button.value = "Unmute";
}



// ==================================



function lead_synth_start_stop() {
    if (running == false) {
        lead_synth();
    }
}

function lead_synth_mute_unmute () {
    button = document.getElementById("leadsynthbutton");
    button.addEventListener("click", lead_synthunmute);
}

function lead_synthunmute() {
    lead_synth_volume = -6;
    button.removeEventListener("click", lead_synthunmute);
    button.addEventListener("click", lead_synthmute);
    button.value = "Mute";
    console.log("lead unmuted");
}

function lead_synthmute() {
    lead_synth_volume = -100;
    button.removeEventListener("click", lead_synthmute);
    button.addEventListener("click", lead_synthunmute);
    button.value = "Unmute";
    console.log("lead muted");
}



// ==================================


async function bass() {
    bass_synth = new Tone.DuoSynth().toDestination();
    for (let i = 0; i < 12; i += 1) {
        bass_synth.volume.value = bass_volume;
        cmbass();
    }
}

async function accompaniment() {
    await new Promise(r => (r, 200));
    accompaniment_synth = new Tone.PolySynth(Tone.Synth).toDestination();
    while (running) {
        console.log("accompaniment Started");
        cmaccompaniment();
    }
    console.log("accompaniment Stopped");
}

function lead_synth() {
    let rat = true;
    return rat;
}

function drums() {
    let rat = true;
    return rat;
}






async function cmaccompaniment() {
    accompaniment_synth.volume.value = accompaniment_volume;
    accompaniment_synth.triggerAttack("C4");
    accompaniment_synth.triggerAttack("Eb4");
    accompaniment_synth.triggerAttack("G4");
    accompaniment_synth.triggerAttack("Bb4");
    await new Promise(r => setTimeout(r, 800));
    accompaniment_synth.triggerRelease(["C4", "Eb4", "G4", "Bb4"])
    await new Promise(r => setTimeout(r, 200));

    accompaniment_synth.volume.value = accompaniment_volume;
    accompaniment_synth.triggerAttack("Bb2");
    accompaniment_synth.triggerAttack("D3");
    accompaniment_synth.triggerAttack("F3");
    accompaniment_synth.triggerAttack("Ab3");
    await new Promise(r => setTimeout(r, 800));
    accompaniment_synth.triggerRelease(["Bb2", "D3", "F3", "Ab3"])
    await new Promise(r => setTimeout(r, 200));

    accompaniment_synth.volume.value = accompaniment_volume;
    accompaniment_synth.triggerAttack("Ab2");
    accompaniment_synth.triggerAttack("C3");
    accompaniment_synth.triggerAttack("Eb3");
    accompaniment_synth.triggerAttack("Gb3");
    await new Promise(r => setTimeout(r, 800));
    accompaniment_synth.triggerRelease(["Ab2", "C3", "Eb3", "Gb3"])
    await new Promise(r => setTimeout(r, 200));

    accompaniment_synth.volume.value = accompaniment_volume;
    accompaniment_synth.triggerAttack("G2");
    accompaniment_synth.triggerAttack("B2");
    accompaniment_synth.triggerAttack("D3");
    accompaniment_synth.triggerAttack("F3");
    await new Promise(r => setTimeout(r, 800));
    accompaniment_synth.triggerRelease(["G2", "B2", "D3", "F3"])
    await new Promise(r => setTimeout(r, 200));
}

async function cmbass() {
    // for (let i = 0; i < 3; i += 1) {
    //     bass_synth.triggerAttackRelease("C3", "8N");
    //     await new Promise(r => setTimeout(r, 250));
    //     bass_synth.triggerAttackRelease("Bb2", "8N");
    //     await new Promise(r => setTimeout(r, 250));
    //     bass_synth.triggerAttackRelease("Ab2", "8N");
    //     await new Promise(r => setTimeout(r, 250));
    //     bass_synth.triggerAttackRelease("G2", "8N");
    //     await new Promise(r => setTimeout(r, 250));
    // }
    //
    // bass_synth.triggerAttackRelease("C3", "8N");
    // await new Promise(r => setTimeout(r, 250));
    // bass_synth.triggerAttackRelease("G2", "8N");
    // await new Promise(r => setTimeout(r, 250));
    // bass_synth.triggerAttackRelease("C3", "16N");
    // await new Promise(r => setTimeout(r, 125));
    // bass_synth.triggerAttackRelease("D3", "8N");
    // await new Promise(r => setTimeout(r, 250));
    // bass_synth.triggerAttackRelease("Eb3", "16N");
    // await new Promise(r => setTimeout(r, 125));
    // bass_synth.triggerAttackRelease("C3", "8N");
    // await new Promise(r => setTimeout(r, 250));
}


// async function fm6Bass() {
//     bass_synth.triggerAttackRelease("F1", "8N");
//     await new Promise(r => setTimeout(r, 750));
//     bass_synth.triggerAttackRelease("AB1", "16N");
//     await new Promise(r => setTimeout(r, 250));
//     bass_synth.triggerAttackRelease("C2", "16N");
//     await new Promise(r => setTimeout(r, 250));
//     bass_synth.triggerAttackRelease("F2", "16N");
//     await new Promise(r => setTimeout(r, 500));
//     bass_synth.triggerAttackRelease("F1", "16N");
//     await new Promise(r => setTimeout(r, 250));
//     bass_synth.triggerAttackRelease("AB2", "16N");
//     await new Promise(r => setTimeout(r, 500));
//     bass_synth.triggerAttackRelease("G2", "16N");
//     await new Promise(r => setTimeout(r, 250));
//     bass_synth.triggerAttackRelease("F2", "16N");
//     await new Promise(r => setTimeout(r, 1500));
// }
