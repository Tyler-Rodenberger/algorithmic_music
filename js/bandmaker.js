var button;
var running = false;
var bass_volume = -100;
var drums_volume = -100;
var accompaniment_volume = -100;
var lead_volume = -100;
var bass_synth;
var drums_synth;
var accompaniment_synth;
var lead_synth;




// ==================================




function bandmaker_start_stop () {
    button = document.getElementById("bandmakerbutton");
    if (button.value == "Start") {
      running = true;
    } else {
      running = false;
    }
    button.addEventListener("click", bandmakerstart);
}

function bandmakerstart() {
    running = true;
    button.removeEventListener("click", bandmakerstart);
    button.addEventListener("click", bandmakerstop);
    button.value = "Stop";
}

async function bandmakerstop() {
    running = false;
    button.removeEventListener("click", bandmakerstop);
    button.addEventListener("click", bandmakerstart);
    button.value = "Start";
}




// ===========================================




function bass_start_stop() {
    
}


function bass_mute_unmute () {
    button = document.getElementById("bassbutton");
    if (button.value == "Unmute") {
      bass_volume = -6;
    } else {
      bass_volume = -100;
    }
    button.addEventListener("click", bassunmute);
}

function bassunmute() {
    button.removeEventListener("click", bassunmute);
    button.addEventListener("click", bassmute);
    button.value = "Mute";
}

async function bassmute() {
    button.removeEventListener("click", bassmute);
    button.addEventListener("click", bassunmute);
    button.value = "Unmute";
}


// ==================================


// ==================================


// ==================================


// ==================================



















async function bass() {
    bass_synth = new Tone.DuoSynth().toDestination();
    for (let i = 0; i < 12; i += 1) {
        bass_synth.volume.value = bass_volume;
        fm6Bass();
        await new Promise(r => setTimeout(r, 4000));
    }
    // bbm6();
    // fm6();
    // f7();
    // bbm6();
    // bbm6();
    // fm6();
    // fm6();
    // g7s5b9();
    // c7s5b9();
    // fm6();
    // fm6();
}

async function fm6Bass() {
    bass_synth.triggerAttackRelease("F1", "8N");
    await new Promise(r => setTimeout(r, 750));
    bass_synth.triggerAttackRelease("AB1", "16N");
    await new Promise(r => setTimeout(r, 250));
    bass_synth.triggerAttackRelease("C2", "16N");
    await new Promise(r => setTimeout(r, 250));
    bass_synth.triggerAttackRelease("F2", "16N");
    await new Promise(r => setTimeout(r, 500));
    bass_synth.triggerAttackRelease("F1", "16N");
    await new Promise(r => setTimeout(r, 250));
    bass_synth.triggerAttackRelease("AB2", "16N");
    await new Promise(r => setTimeout(r, 500));
    bass_synth.triggerAttackRelease("G2", "16N");
    await new Promise(r => setTimeout(r, 250));
    bass_synth.triggerAttackRelease("F2", "16N");
    await new Promise(r => setTimeout(r, 1500));
}
