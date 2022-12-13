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



// ==============MASTER START STOP====================



function bandmaker_start_stop () {
    button = document.getElementById("bandmakerbutton");
    button.addEventListener("click", bandmakerstart);
    if (!running) { bandmakerstart(); }
}

function bandmakerstart() {
    accompaniment_synth = new Tone.PolySynth(Tone.Synth).toDestination();
    lead_synth = new Tone.DuoSynth().toDestination();
    bass_synth = new Tone.Synth().toDestination();
    drums_synth = new Tone.MembraneSynth().toDestination();
    set_volumes();
    running = true;
    play();
    button.removeEventListener("click", bandmakerstart);
    button.addEventListener("click", bandmakerstop);
    button.value = "Stop";
}

function bandmakerstop() {
    running = false;
    button.removeEventListener("click", bandmakerstop);
    button.addEventListener("click", bandmakerstart);
    button.value = "Start";
}

function set_volumes() {
    accompaniment_synth.volume.value = accompaniment_volume;
    lead_synth.volume.value = lead_synth_volume;
    bass_synth.volume.value = bass_volume;
    drums_synth.volume.value = drums_volume;
}




// ==================BASS=========================



function bass_mute_unmute () {
    button = document.getElementById("bassbutton");
    button.addEventListener("click", bassunmute);
    if (button.value == "Unmute") {
        bassunmute();
    } else {
        bassmute();
    }
}

function bassunmute() {
    console.log("bass unmuted")
    bass_volume = -3;
    button.removeEventListener("click", bassunmute);
    button.addEventListener("click", bassmute);
    button.value = "Mute";
}

function bassmute() {
    console.log("bass muted");
    bass_volume = -100;
    button.removeEventListener("click", bassmute);
    button.addEventListener("click", bassunmute);
    button.value = "Unmute";
}


// ===============DRUMS===================



function drums_mute_unmute () {
    button = document.getElementById("drumsbutton");
    button.addEventListener("click", drumsunmute);
    if (button.value == "Unmute") {
        drumsunmute();
    } else {
        drumsmute();
    }
}

function drumsunmute() {
    console.log("drums unmuted")
    drums_volume = -8;
    button.removeEventListener("click", drumsunmute);
    button.addEventListener("click", drumsmute);
    button.value = "Mute";
}

function drumsmute() {
    console.log("drums muted");
    drums_volume = -100;
    button.removeEventListener("click", drumsmute);
    button.addEventListener("click", drumsunmute);
    button.value = "Unmute";
}



// ===============ACCOMPANIMENT===================



function accompaniment_mute_unmute () {
    button = document.getElementById("accompanimentbutton");
    button.addEventListener("click", accompanimentunmute);
    if (button.value == "Unmute") {
        accompanimentunmute();
    } else {
        accompanimentmute();
    }
}

function accompanimentunmute() {
    console.log("accompaniment unmuted")
    accompaniment_volume = -16;
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



// ================LEAD SYNTH==================



function lead_synth_mute_unmute () {
    button = document.getElementById("leadsynthbutton");
    button.addEventListener("click", lead_synthunmute);
    if (button.value == "Unmute") {
        lead_synthunmute();
    } else {
        lead_synthmute();
    }
}

function lead_synthunmute() {
    console.log("lead_synth unmuted")
    lead_synth_volume = -12;
    button.removeEventListener("click", lead_synthunmute);
    button.addEventListener("click", lead_synthmute);
    button.value = "Mute";
}

function lead_synthmute() {
    console.log("lead_synth muted");
    lead_synth_volume = -100;
    button.removeEventListener("click", lead_synthmute);
    button.addEventListener("click", lead_synthunmute);
    button.value = "Unmute";
}



// ====================MUSIC============================


async function play() {
    console.log("playing");
    for (let i = 0; i < 1000; i += 1) {
        if (!running) { break; }
        set_volumes();
        // beat 1
        drums_synth.triggerAttackRelease("C1", "32N");
        bass_synth.triggerAttackRelease("D2", "16N");
        accompaniment_synth.triggerAttackRelease(["D4", "F#4", "A4", "D5"], "8N");
        lead_synth.triggerAttackRelease("D5", "4N");
        await new Promise(r => setTimeout(r, 125));
        // 1.25
        await new Promise(r => setTimeout(r, 125));
        // 1.5
        bass_synth.triggerAttackRelease("A2", "8N");
        await new Promise(r => setTimeout(r, 125));
        // 1.75
        drums_synth.triggerAttackRelease("C2", "32N");
        lead_synth.triggerAttackRelease("Db5", "16N");
        await new Promise(r => setTimeout(r, 125));
        // 2
        drums_synth.triggerAttackRelease("C1", "32N");
        bass_synth.triggerAttackRelease("C#3", "16N");
        accompaniment_synth.triggerAttackRelease(["D4", "F#4", "A4", "D5"], "8N");
        lead_synth.triggerAttackRelease("F#5", "4N");
        await new Promise(r => setTimeout(r, 125));
        // 2.25
        bass_synth.triggerAttackRelease("D3", "8N");
        await new Promise(r => setTimeout(r, 125));
        // 2.5
        drums_synth.triggerAttackRelease("C2", "32N");
        await new Promise(r => setTimeout(r, 125));
        // 2.75
        bass_synth.triggerAttackRelease("F#3", "8N");
        lead_synth.triggerAttackRelease("A5", "16N");
        await new Promise(r => setTimeout(r, 125));
        if (!running) { break; }
        set_volumes();
        // 3
        drums_synth.triggerAttackRelease("C1", "32N");
        bass_synth.triggerAttackRelease("Ab2", "8N");
        accompaniment_synth.triggerAttackRelease(["D#4", "G4", "A#4", "D#5"], "8N");
        lead_synth.triggerAttackRelease("A#5", "4N");
        await new Promise(r => setTimeout(r, 125));
        // 3.25
        await new Promise(r => setTimeout(r, 125));
        // 3.5
        bass_synth.triggerAttackRelease("A#3", "16N");
        await new Promise(r => setTimeout(r, 125));
        // 3.75
        drums_synth.triggerAttackRelease("C2", "32N");
        bass_synth.triggerAttackRelease("A3", "16N");
        await new Promise(r => setTimeout(r, 125));
        // 4
        drums_synth.triggerAttackRelease("C1", "32N");
        bass_synth.triggerAttackRelease("G3", "16N");
        await new Promise(r => setTimeout(r, 125));
        // 4.25
        bass_synth.triggerAttackRelease("C#3", "16N");
        await new Promise(r => setTimeout(r, 125));
        // 4.5
        drums_synth.triggerAttackRelease("C2", "32N");
        bass_synth.triggerAttackRelease("B2", "8N");
        lead_synth.triggerAttackRelease("A#5", "8N");
        await new Promise(r => setTimeout(r, 125));
        // 4.75
        bass_synth.triggerAttackRelease("C#3", "16N");
        await new Promise(r => setTimeout(r, 125));
        if (!running) { break; }
        // 5
        drums_synth.triggerAttackRelease("C1", "32N");
        bass_synth.triggerAttackRelease("D3", "8N");
        accompaniment_synth.triggerAttackRelease(["D4", "F#4", "A4", "D5"], "8N");
        lead_synth.triggerAttackRelease("D5", "2N");
        await new Promise(r => setTimeout(r, 125));
        // 5.25
        await new Promise(r => setTimeout(r, 125));
        // 5.5
        await new Promise(r => setTimeout(r, 125));
        // 5.75
        drums_synth.triggerAttackRelease("C2", "32N");
        bass_synth.triggerAttackRelease("D#3", "16N");
        await new Promise(r => setTimeout(r, 125));
        // 6
        drums_synth.triggerAttackRelease("C1", "32N");
        bass_synth.triggerAttackRelease("A#2", "16N");
        await new Promise(r => setTimeout(r, 125));
        // 6.25
        await new Promise(r => setTimeout(r, 125));
        // 6.5
        drums_synth.triggerAttackRelease("C2", "32N");
        accompaniment_synth.triggerAttackRelease(["D4", "F#4", "A4", "D5"], "8N");
        await new Promise(r => setTimeout(r, 125));
        // 6.75
        bass_synth.triggerAttackRelease("A2", "16N");
        await new Promise(r => setTimeout(r, 125));
        if (!running) { break; }
        set_volumes();
        // 7
        drums_synth.triggerAttackRelease("C1", "32N");
        bass_synth.triggerAttackRelease("G2", "16N");
        accompaniment_synth.triggerAttackRelease(["D#4", "G4", "A#4", "D#5"], "8N");
        lead_synth.triggerAttackRelease("Db5", "4N");
        await new Promise(r => setTimeout(r, 125));
        // 7.25
        await new Promise(r => setTimeout(r, 125));
        // 7.5
        await new Promise(r => setTimeout(r, 125));
        // 7.75
        drums_synth.triggerAttackRelease("C2", "32N");
        bass_synth.triggerAttackRelease("F#2", "16N");
        await new Promise(r => setTimeout(r, 125));
        // 8
        drums_synth.triggerAttackRelease("C1", "32N");
        bass_synth.triggerAttackRelease("D#2", "16N");
        lead_synth.triggerAttackRelease("A#4", "8N");
        await new Promise(r => setTimeout(r, 125));
        // 8.25
        await new Promise(r => setTimeout(r, 125));
        // 8.5
        drums_synth.triggerAttackRelease("C2", "32N");
        bass_synth.triggerAttackRelease("A2", "8N");
        lead_synth.triggerAttackRelease("A4", "16N");
        await new Promise(r => setTimeout(r, 125));
        // 8.75
        lead_synth.triggerAttackRelease("A#5", "16N");
        await new Promise(r => setTimeout(r, 125));
    }
    console.log("done playing");
}
