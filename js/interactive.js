function get_key(e) {
    e = window.event;
    let charCode = e.keyCode;
    return String.fromCharCode(charCode);
}

window.addEventListener('keypress', function e(e) {
    var key = get_key(e);
    console.log("You pressed", key);
    do_it(key);
});

function a() {
    console.log("a");
    const syntha = new Tone.PolySynth().toDestination();
    syntha.triggerAttackRelease(["C4", "E4", "G4", "B4", "D5"], "4N");
}

function b() {
    console.log("b");
    const synthb = new Tone.MetalSynth().toDestination();
    synthb.triggerAttackRelease("C2", "1N");
}

async function c() {
    console.log("c");
    const synthc = new Tone.MembraneSynth().toDestination();
    synthc.triggerAttackRelease("E4", "4N");
    await new Promise(r => setTimeout(r, 150));
    synthc.triggerAttackRelease("B3", "4N");
    await new Promise(r => setTimeout(r, 150));
    synthc.triggerAttackRelease("E2", "4N");
}

function d() {
    console.log("d");
    const synthd = new Tone.AMSynth().toDestination();
    synthd.volume.value = -1;
    synthd.triggerAttackRelease("D2", "1N");
}

async function e() {
    console.log("e");
    const synthe = new Tone.DuoSynth().toDestination();
    synthe.volume.value = -10;
    synthe.triggerAttackRelease("A3", "16N");
    await new Promise(r => setTimeout(r, 75));
    synthe.triggerAttackRelease("E3", "2N");
}

function f() {
    console.log("f");
    const synthf = new Tone.PolySynth().toDestination();
    const now = Tone.now();
    synthf.triggerAttack("G#4", now);
    synthf.triggerAttack("B4", now + 0.25);
    synthf.triggerAttack("E5", now + 0.5);
    synthf.triggerAttack("G#5", now + 0.75);
    synthf.triggerAttack("B5", now + 1);
    synthf.triggerRelease(["G#4", "B4", "E5", "G#5", "B5"], now + 2);
}

async function g() {
    console.log("g");
    const autoPannerg = new Tone.AutoPanner("4n").toDestination().start();
    const oscillatorg = new Tone.Oscillator().connect(autoPannerg).start();
    await new Promise(r => setTimeout(r, 2000));
    oscillatorg.stop();

}

async function h() {
    console.log("h");
    const autoFilterh = new Tone.AutoFilter("4n").toDestination().start();
    const oscillatorh = new Tone.Oscillator().connect(autoFilterh).start();
    await new Promise(r => setTimeout(r, 2000));
    oscillatorh.stop();
}

async function i() {
    console.log("i");
    const autoFilteri = new Tone.AutoFilter("4n").toDestination().start();
    const autoPanneri = new Tone.AutoPanner("4n").toDestination().start();
    const distortioni = new Tone.Distortion(1).toDestination();
    const oscillatori = new Tone.Oscillator().connect(autoFilteri).connect(autoPanneri).connect(distortioni).start();
    oscillatori.volume.value = -20;
    await new Promise(r => setTimeout(r, 2000));
    oscillatori.stop();
}

function j() {
    console.log("j");
    const chorusj = new Tone.Chorus(5, 15, 30).toDestination().start();
    const synthj = new Tone.PolySynth().connect(chorusj);
    synthj.triggerAttackRelease(["C#3", "F3", "A3"], "8N");
}

function k() {
    console.log("k");
    const chorusk = new Tone.Chorus(10, 50, 100).toDestination().start();
    const synthk = new Tone.PolySynth().connect(chorusk);
    synthk.triggerAttackRelease(["C#3", "F3", "A3"], "2N");
}

function l() {
    console.log("l");
    const distortionl = new Tone.Distortion(1).toDestination();
    const synthl = new Tone.FMSynth().connect(distortionl);
    synthl.triggerAttackRelease("A1", "4N");
}

function m() {
    console.log("m");
    const distortionm = new Tone.Distortion(1).toDestination();
    const synthm = new Tone.PolySynth().connect(distortionm);
    synthm.volume.value = -12;
    synthm.triggerAttackRelease(["A3", "E4", "C5"], "4N");
}

function n() {
    const autoWahn = new Tone.AutoWah(50, 6, -30).toDestination();
    const synthn = new Tone.Synth().connect(autoWahn);
    autoWahn.Q.value = 6;
    synthn.triggerAttackRelease("C4", "8n");
}

function o() {
    console.log("o");
    const feedbackDelay = new Tone.FeedbackDelay("8N", 0.5).toDestination();
    const syntho = new Tone.MembraneSynth({
    	octaves: 6,
    	pitchDecay: 0.1
    }).connect(feedbackDelay);
    syntho.triggerAttackRelease("A2", "16N");
    }

function p() {
    console.log("p");
    const pingPongp = new Tone.PingPongDelay("4N", 0.2).toDestination();
    const distortionp = new Tone.Distortion(0.5).toDestination();
    const synthp = new Tone.PolySynth().connect(pingPongp).connect(distortionp);
    synthp.volume.value = -1;
    synthp.triggerAttackRelease(["C5", "E5", "G5"], "32n");
}

async function q() {
    console.log("q");
    const tremoloq = new Tone.Tremolo(9, 0.75).toDestination().start();
    const oscillatorq = new Tone.Oscillator().connect(tremoloq).start();
    await new Promise(r => setTimeout(r, 1500));
    oscillatorq.stop();
}

function r() {
    console.log("r");
    const autoWahr = new Tone.AutoWah(50, 6, -30).toDestination();
    const pingPongr = new Tone.PingPongDelay("8N", 0.15).toDestination();
    const synthr = new Tone.Synth().connect(autoWahr).connect(pingPongr);
    autoWahr.Q.value = 6;
    synthr.volume.value = 0;
    synthr.triggerAttackRelease("G3", "8n");
}

function s() {
    console.log("s");
    const synths = new Tone.Synth().toDestination();
    synths.triggerAttackRelease("C6", "4N");
}

function t() {
    console.log("t");
    const chorust = new Tone.Chorus(10, 5, 20).toDestination().start();
    const syntht = new Tone.Synth().connect(chorust);
    syntht.volume.value = -10;
    syntht.triggerAttackRelease("C6", "8N");
}

async function u() {
    console.log("u");
    const synthu1 = new Tone.AMSynth().toDestination();
    const synthu2 = new Tone.AMSynth().toDestination();
    const synthu3 = new Tone.AMSynth().toDestination();
    synthu1.volume.value = -1;
    synthu2.volume.value = -1;
    synthu3.volume.value = -1;
    synthu1.triggerAttackRelease("F2", "2N");
    await new Promise(r => setTimeout(r, 150));
    synthu2.triggerAttackRelease("F4", "2N");
    await new Promise(r => setTimeout(r, 150));
    synthu3.triggerAttackRelease("F6", "2N");
}

async function v() {
    console.log("v");
    const synthv = new Tone.Synth().toDestination();
    synthv.triggerAttackRelease("C6", "32N");
    await new Promise(r => setTimeout(r, 50));
    synthv.triggerAttackRelease("C7", "8N");
}

function w() {
    console.log("w");
    const pingPongw = new Tone.PingPongDelay("8N", 0.1).toDestination();
    const synthw = new Tone.MetalSynth().connect(pingPongw).toDestination();
    synthw.triggerAttackRelease("C-1", "1N");
}

async function x() {
    console.log("x");
    const feedbackDelayx = new Tone.FeedbackDelay("8N", 0.5).toDestination();
    const synthx = new Tone.MembraneSynth().connect(feedbackDelayx).toDestination();
    synthx.triggerAttackRelease("G#2", "4N");
    await new Promise(r => setTimeout(r, 150));
    synthx.triggerAttackRelease("E3", "4N");
    await new Promise(r => setTimeout(r, 150));
    synthx.triggerAttackRelease("B#4", "4N");
}

async function y() {
    console.log("y");
    const chorusy = new Tone.Chorus(5, 5, 5).toDestination().start();
    const synthy = new Tone.Synth().connect(chorusy);
    synthy.triggerAttackRelease("C5", "16N");
    await new Promise(r => setTimeout(r, 100));
    synthy.triggerAttackRelease("E4", "16N");
    await new Promise(r => setTimeout(r, 100));
    synthy.triggerAttackRelease("C3", "16N");
}

async function z() {
    console.log("z");
    const synthz = new Tone.Synth().toDestination();
    synthz.triggerAttackRelease("E4", "32N");
    await new Promise(r => setTimeout(r, 50));
    synthz.triggerAttackRelease("D4", "32N");
    await new Promise(r => setTimeout(r, 50));
    synthz.triggerAttackRelease("C4", "32N");
    await new Promise(r => setTimeout(r, 50));
    synthz.triggerAttackRelease("D4", "32N");
    await new Promise(r => setTimeout(r, 50));
    synthz.triggerAttackRelease("E4", "32N");
    await new Promise(r => setTimeout(r, 50));
    synthz.triggerAttackRelease("G4", "32N");
    await new Promise(r => setTimeout(r, 50));
    synthz.triggerAttackRelease("C5", "32N");
    await new Promise(r => setTimeout(r, 50));
    synthz.triggerAttackRelease("E4", "32N");
    await new Promise(r => setTimeout(r, 50));
    synthz.triggerAttackRelease("D4", "32N");
    await new Promise(r => setTimeout(r, 50));
    synthz.triggerAttackRelease("C4", "32N");
    await new Promise(r => setTimeout(r, 50));
    synthz.triggerAttackRelease("D4", "32N");
    await new Promise(r => setTimeout(r, 50));
    synthz.triggerAttackRelease("E4", "32N");
    await new Promise(r => setTimeout(r, 50));
    synthz.triggerAttackRelease("G4", "32N");
    await new Promise(r => setTimeout(r, 50));
    synthz.triggerAttackRelease("C5", "32N");
    await new Promise(r => setTimeout(r, 50));
    synthz.triggerAttackRelease("E4", "32N");
    await new Promise(r => setTimeout(r, 50));
    synthz.triggerAttackRelease("D4", "32N");
    await new Promise(r => setTimeout(r, 50));
    synthz.triggerAttackRelease("C4", "32N");
    await new Promise(r => setTimeout(r, 50));
    synthz.triggerAttackRelease("E4", "32N");
    await new Promise(r => setTimeout(r, 50));
    synthz.triggerAttackRelease("G4", "32N");
    await new Promise(r => setTimeout(r, 50));
    synthz.triggerAttackRelease("C5", "32N");
    await new Promise(r => setTimeout(r, 50));
    synthz.triggerAttackRelease("C6", "32N");
}


function do_it(key) {
    switch (key) {
        case 'a':
            a();
            break;
        case 'b':
            b();
            break;
        case 'c':
            c();
            break;
        case 'd':
            d();
            break;
        case 'e':
            e();
            break;
        case 'f':
            f();
            break;
        case 'g':
            g();
            break;
        case 'h':
            h();
            break;
        case 'i':
            i();
            break;
        case 'j':
            j();
            break;
        case 'k':
            k();
            break;
        case 'l':
            l();
            break;
        case 'm':
            m();
            break;
        case 'n':
            n();
            break;
        case 'o':
            o();
            break;
        case 'p':
            p();
            break;
        case 'q':
            q();
            break;
        case 'r':
            r();
            break;
        case 's':
            s();
            break;
        case 't':
            t();
            break;
        case 'u':
            u();
            break;
        case 'v':
            v();
            break;
        case 'w':
            w();
            break;
        case 'x':
            x();
            break;
        case 'y':
            y();
            break;
        case 'z':
            z();
            break;
    }
}
