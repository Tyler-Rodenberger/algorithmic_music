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
    await new Promise(r => setTimeout(r, 3000));
    oscillatorg.stop();

}

async function h() {
    console.log("h");
    const autoFilterh = new Tone.AutoFilter("4n").toDestination().start();
    const oscillatorh = new Tone.Oscillator().connect(autoFilterh).start();
    await new Promise(r => setTimeout(r, 3000));
    oscillatorh.stop();
}

async function i() {
    console.log("i");
    const autoFilteri = new Tone.AutoFilter("4n").toDestination().start();
    const autoPanneri = new Tone.AutoPanner("4n").toDestination().start();
    const oscillatori = new Tone.Oscillator().connect(autoFilteri).connect(autoPanneri).start();
    await new Promise(r => setTimeout(r, 3000));
    oscillatori.stop();
}

function j() {
    console.log("j");
    const chorusj = new Tone.Chorus(5, 15, 30).toDestination().start();
    const synthj = new Tone.PolySynth().connect(chorusj);
    synthj.triggerAttackRelease(["C#3", "F3", "A3"], "8n");
}

function k() {
    console.log("k");
    const synthk = new Tone.Synth().toDestination();
    synthk.triggerAttackRelease("C4", "4N");
}

function l() {
    console.log("l");
    const synthl = new Tone.Synth().toDestination();
    synthl.triggerAttackRelease("C4", "4N");
}

function m() {
    console.log("m");
    const synthm = new Tone.Synth().toDestination();
    synthm.triggerAttackRelease("C4", "4N");
}

function n() {
    console.log("n");
    const synthn = new Tone.Synth().toDestination();
    synthn.triggerAttackRelease("C4", "4N");
}

function o() {
    console.log("o");
    const syntho = new Tone.Synth().toDestination();
    syntho.triggerAttackRelease("C4", "4N");
}

function p() {
    console.log("p");
    const synthp = new Tone.Synth().toDestination();
    synthp.triggerAttackRelease("C4", "4N");
}

function q() {
    console.log("q");
    const synthq = new Tone.Synth().toDestination();
    synthq.triggerAttackRelease("C4", "4N");
}

function r() {
    console.log("r");
    const synthr = new Tone.Synth().toDestination();
    synthr.triggerAttackRelease("C4", "4N");
}

function s() {
    console.log("s");
    const synths = new Tone.Synth().toDestination();
    synths.triggerAttackRelease("C4", "4N");
}

function t() {
    console.log("t");
    const syntht = new Tone.Synth().toDestination();
    syntht.triggerAttackRelease("C4", "4N");
}

function u() {
    console.log("u");
    const synthu = new Tone.Synth().toDestination();
    synthu.triggerAttackRelease("C4", "4N");
}

function v() {
    console.log("v");
    const synthv = new Tone.Synth().toDestination();
    synthv.triggerAttackRelease("C4", "4N");
}

function w() {
    console.log("w");
    const synthw = new Tone.Synth().toDestination();
    synthw.triggerAttackRelease("C4", "4N");
}

function x() {
    console.log("x");
    const synthx = new Tone.Synth().toDestination();
    synthx.triggerAttackRelease("C4", "4N");
}

function y() {
    console.log("y");
    const synthy = new Tone.Synth().toDestination();
    synthy.triggerAttackRelease("C4", "4N");
}

function z() {
    console.log("z");
    const synthz = new Tone.Synth().toDestination();
    synthz.triggerAttackRelease("C4", "4N");
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
