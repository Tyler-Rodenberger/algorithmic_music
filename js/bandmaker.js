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
    bandmakerstart();
}

function bandmakerstart() {
    accompaniment_synth = new Tone.PolySynth(Tone.Synth).toDestination();
    lead_synth = new Tone.Synth().toDestination();
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
    lead_synth_volume = -6;
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
    for (let i = 0; i < 100; i += 1) {
        if (!running) {
            break;
        }
        set_volumes();
        // beat 1
        drums_synth.triggerAttackRelease("C1", "32N");
        bass_synth.triggerAttackRelease("C3", "8N");

        await new Promise(r => setTimeout(r, 125));
        // 1.25

        await new Promise(r => setTimeout(r, 125));
        // 1.5

        await new Promise(r => setTimeout(r, 125));
        // 1.75
        drums_synth.triggerAttackRelease("C2", "32N");

        await new Promise(r => setTimeout(r, 125));

        set_volumes();
        // 2
        drums_synth.triggerAttackRelease("C1", "32N");
        bass_synth.triggerAttackRelease("Bb2", "8N");

        await new Promise(r => setTimeout(r, 125));
        // 2.25

        await new Promise(r => setTimeout(r, 125));
        // 2.5
        drums_synth.triggerAttackRelease("C2", "32N");

        await new Promise(r => setTimeout(r, 125));
        // 2.75

        await new Promise(r => setTimeout(r, 125));

        set_volumes();
        // 3
        drums_synth.triggerAttackRelease("C1", "32N");
        bass_synth.triggerAttackRelease("Ab2", "8N");

        await new Promise(r => setTimeout(r, 125));
        // 3.25

        await new Promise(r => setTimeout(r, 125));
        // 3.5

        await new Promise(r => setTimeout(r, 125));
        // 3.75
        drums_synth.triggerAttackRelease("C2", "32N");

        await new Promise(r => setTimeout(r, 125));
        
        set_volumes();
        // 4
        drums_synth.triggerAttackRelease("C1", "32N");
        bass_synth.triggerAttackRelease("G2", "8N");

        await new Promise(r => setTimeout(r, 125));
        // 4.25

        await new Promise(r => setTimeout(r, 125));
        // 4.5
        drums_synth.triggerAttackRelease("C2", "32N");
        bass_synth.triggerAttackRelease("B2", "8N");

        await new Promise(r => setTimeout(r, 125));
        // 4.75

        await new Promise(r => setTimeout(r, 125));
    }
    console.log("done playing");
}














// async function cmaccompaniment() {
//     console.log("Insert accompaniment here");
//     // accompaniment_synth.volume.value = accompaniment_volume;
//     // accompaniment_synth.triggerAttack("C4");
//     // accompaniment_synth.triggerAttack("Eb4");
//     // accompaniment_synth.triggerAttack("G4");
//     // accompaniment_synth.triggerAttack("Bb4");
//     // await new Promise(r => setTimeout(r, 800));
//     // accompaniment_synth.triggerRelease(["C4", "Eb4", "G4", "Bb4"])
//     // await new Promise(r => setTimeout(r, 200));
//     //
//     // accompaniment_synth.volume.value = accompaniment_volume;
//     // accompaniment_synth.triggerAttack("Bb2");
//     // accompaniment_synth.triggerAttack("D3");
//     // accompaniment_synth.triggerAttack("F3");
//     // accompaniment_synth.triggerAttack("Ab3");
//     // await new Promise(r => setTimeout(r, 800));
//     // accompaniment_synth.triggerRelease(["Bb2", "D3", "F3", "Ab3"])
//     // await new Promise(r => setTimeout(r, 200));
//     //
//     // accompaniment_synth.volume.value = accompaniment_volume;
//     // accompaniment_synth.triggerAttack("Ab2");
//     // accompaniment_synth.triggerAttack("C3");
//     // accompaniment_synth.triggerAttack("Eb3");
//     // accompaniment_synth.triggerAttack("Gb3");
//     // await new Promise(r => setTimeout(r, 800));
//     // accompaniment_synth.triggerRelease(["Ab2", "C3", "Eb3", "Gb3"])
//     // await new Promise(r => setTimeout(r, 200));
//     //
//     // accompaniment_synth.volume.value = accompaniment_volume;
//     // accompaniment_synth.triggerAttack("G2");
//     // accompaniment_synth.triggerAttack("B2");
//     // accompaniment_synth.triggerAttack("D3");
//     // accompaniment_synth.triggerAttack("F3");
//     // await new Promise(r => setTimeout(r, 800));
//     // accompaniment_synth.triggerRelease(["G2", "B2", "D3", "F3"])
//     // await new Promise(r => setTimeout(r, 200));
// }
// async function cmbass() {
//     console.log("Insert bass here");
//     // for (let i = 0; i < 3; i += 1) {
//     //     bass_synth.triggerAttackRelease("C3", "8N");
//     //     await new Promise(r => setTimeout(r, 250));
//     //     bass_synth.triggerAttackRelease("Bb2", "8N");
//     //     await new Promise(r => setTimeout(r, 250));
//     //     bass_synth.triggerAttackRelease("Ab2", "8N");
//     //     await new Promise(r => setTimeout(r, 250));
//     //     bass_synth.triggerAttackRelease("G2", "8N");
//     //     await new Promise(r => setTimeout(r, 250));
//     // }
//     //
//     // bass_synth.triggerAttackRelease("C3", "8N");
//     // await new Promise(r => setTimeout(r, 250));
//     // bass_synth.triggerAttackRelease("G2", "8N");
//     // await new Promise(r => setTimeout(r, 250));
//     // bass_synth.triggerAttackRelease("C3", "16N");
//     // await new Promise(r => setTimeout(r, 125));
//     // bass_synth.triggerAttackRelease("D3", "8N");
//     // await new Promise(r => setTimeout(r, 250));
//     // bass_synth.triggerAttackRelease("Eb3", "16N");
//     // await new Promise(r => setTimeout(r, 125));
//     // bass_synth.triggerAttackRelease("C3", "8N");
//     // await new Promise(r => setTimeout(r, 250));
// }
