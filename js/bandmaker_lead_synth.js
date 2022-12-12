var synth;

async function lead_synth() {
    synth = new Tone.DuoSynth().toDestination();
    // for (let i = 0; i < 12; i += 1) {
    //     fm6Lead();
    //     await new Promise(r => setTimeout(r, 4000));
    // }
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

// async function fm6Lead() {
//     synth.triggerAttackRelease("F1", "8N");
//     await new Promise(r => setTimeout(r, 750));
//     synth.triggerAttackRelease("AB1", "16N");
//     await new Promise(r => setTimeout(r, 250));
//     synth.triggerAttackRelease("C2", "16N");
//     await new Promise(r => setTimeout(r, 250));
//     synth.triggerAttackRelease("F2", "16N");
//     await new Promise(r => setTimeout(r, 500));
//     synth.triggerAttackRelease("F1", "16N");
//     await new Promise(r => setTimeout(r, 250));
//     synth.triggerAttackRelease("AB2", "16N");
//     await new Promise(r => setTimeout(r, 500));
//     synth.triggerAttackRelease("G2", "16N");
//     await new Promise(r => setTimeout(r, 250));
//     synth.triggerAttackRelease("F2", "16N");
//     await new Promise(r => setTimeout(r, 1500));
// }
