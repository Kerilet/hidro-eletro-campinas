let codes1 = [];

let codes2 = [];

let codes3 = [];

let codes4 = [];

let codes5 = [];

const konamiKode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
    'Enter',
].join('-');

const goodBom = [
    'g',
    'o',
    'o',
    'd',
    'b',
    'o',
    'm',
].join('-');


const barrelRoll = [
    'd',
    'o',
    'a',
    'b',
    'a',
    'r',
    'r',
    'e',
    'l',
    'r',
    'o',
    'l',
    'l',
].join('-');

const reroRero = [
    'r',
    'e',
    'r',
    'o',
    'r',
    'e',
    'r',
    'o',
].join('-');

const konoDio = [
    'k',
    'o',
    'n',
    'o',
    'd',
    'i',
    'o',
    'd',
    'a',
].join('-');

const writeKonamiCode = () => {
    document.body.innerHTML += '<img src="./img/rickroll.gif" alt="Konami Kode duuude!" loading="here\'s an easter egg!">';
    playAudio();
};

const writeGoodBom = () => {
    document.body.innerHTML += '<img src="./img/good-bom.jpg" alt="É Goodbom é goodbom bom!" loading="é tão gostoso quando o dia amanheçe">';
    playAudio4();
};

const konoDioDa = () => {
    document.body.innerHTML += '<img src="./img/konodioda.gif" alt="You thought this was an alt, but it was I, Dio!" loading="here\'s Dio!">';
    playAudio3();
};

const writeReroRero = () => {
    document.body.innerHTML += '<img src="./img/rerorero.gif" alt="rero rero rero" loading="Hey Jotaro, can I have that cherry?">';
    playAudio5();
};


const playAudio = () => {
    const audio = document.getElementById('audio1');
    audio.play();
};

const playAudio2 = () => {
    const audio = document.getElementById('audio2');
    audio.play();
};

const playAudio3 = () => {
    const audio = document.getElementById('audio3');
    audio.play();
};

const playAudio4 = () => {
    const audio = document.getElementById('audio4');
    audio.play();
};

const playAudio5 = () => {
    const audio = document.getElementById('audio5');
    audio.play();
};

const rotateScreen = () => {
    var a = '-webkit-',
        b = 'transform:rotate(1turn);',
        c = 'transition:4s;';
    document.head.innerHTML += '<style>body{' + a + b + a + c + b + c;
};

const spinScreen = () => {
    var a = '-webkit-',
        b = 'transform:rotate(1turn);',
        c = 'transition:4s;';
    document.head.innerHTML += '<style>body{' + a + b + a + c + b + c;
};

const writeBarrelRoll = () => {
    document.body.innerHTML += ` <script>
    var doABarrelRoll = function() {
        var a = "-webkit-",
            b = 'transform:rotate(1turn);',
            c = 'transition:4s;';
        document.head.innerHTML += '<style>body{' + a + b + a + c + b + c
    }

    doABarrelRoll();
</script>`;
    rotateScreen();
    spinScreen();
    playAudio2();
};

const barrelCheck = (callback) => {
    document.addEventListener('keyup', (event) => {
        codes2.push(event.key);
        const joined = codes2.join('-');
        if (barrelRoll.startsWith(joined)) {
            if (barrelRoll === joined) {
                callback();
            }
        } else {
            codes2 = [];
        }
        console.log(event, codes2);
    });
};


const reroCheck = (callback) => {
    document.addEventListener('keyup', (event) => {
        codes5.push(event.key);
        const joined = codes5.join('-');
        if (reroRero.startsWith(joined)) {
            if (reroRero === joined) {
                callback();
            }
        } else {
            codes5 = [];
        }
        console.log(event, codes5);
    });
};

const konamiCheck = (callback) => {
    document.addEventListener('keyup', (event) => {
        codes1.push(event.key);
        const joined = codes1.join('-');
        if (konamiKode.startsWith(joined)) {
            if (konamiKode === joined) {
                callback();
            }
        } else {
            codes1 = [];
        }
        console.log(event, codes1);
    });
};

const dioCheck = (callback) => {
    document.addEventListener('keyup', (event) => {
        codes3.push(event.key);
        const joined = codes3.join('-');
        if (konoDio.startsWith(joined)) {
            if (konoDio === joined) {
                callback();
            }
        } else {
            codes3 = [];
        }
        console.log(event, codes3);
    });
};

const goodCheck = (callback) => {
    document.addEventListener('keyup', (event) => {
        codes4.push(event.key);
        const joined = codes4.join('-');
        if (goodBom.startsWith(joined)) {
            if (goodBom === joined) {
                callback();
            }
        } else {
            codes4 = [];
        }
        console.log(event, codes4);
    });
};

konamiCheck(writeKonamiCode);
barrelCheck(writeBarrelRoll);
dioCheck(konoDioDa);
goodCheck(writeGoodBom);
reroCheck(writeReroRero);