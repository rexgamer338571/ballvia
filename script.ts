// hashing stuff

var _b = [
    1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993,
    -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987,
    1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885,
    -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872,
    -1866530822, -1538233109, -1090935817, -965641998
];

function _a(x: number, y: number) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
}

function _c(input: number[]) {
    var output = "";
    for (var i = 0; i < input.length * 32; i += 8)
      output += String.fromCharCode((input[i >> 5] >>> (24 - i % 32)) & 0xFF);
    return output;
}

function _d(input: string) {
    var output = Array(input.length >> 2);
    for (var i = 0; i < output.length; i++) output[i] = 0;
    for (var i = 0; i < input.length * 8; i += 8)
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (24 - i % 32);
    return output;
}

function _e(input: string) {
    var hex_tab = "0123456789abcdef";
    var output = "";
    for (var i = 0; i < input.length; i++) {
        var x = input.charCodeAt(i);
        output += hex_tab.charAt((x >>> 4) & 0x0F) + hex_tab.charAt(x & 0x0F);
    }
    return output;
}

function sha256_S (X: number, n: number) {return ( X >>> n ) | (X << (32 - n));}
function sha256_R (X: number, n: number) {return ( X >>> n );}
function sha256_Ch(x: number, y: number, z: number) {return ((x & y) ^ ((~x) & z));}
function sha256_Maj(x: number, y: number, z: number) {return ((x & y) ^ (x & z) ^ (y & z));}
function sha256_Sigma0256(x: number) {return (sha256_S(x, 2) ^ sha256_S(x, 13) ^ sha256_S(x, 22));}
function sha256_Sigma1256(x: number) {return (sha256_S(x, 6) ^ sha256_S(x, 11) ^ sha256_S(x, 25));}
function sha256_Gamma0256(x: number) {return (sha256_S(x, 7) ^ sha256_S(x, 18) ^ sha256_R(x, 3));}
function sha256_Gamma1256(x: number) {return (sha256_S(x, 17) ^ sha256_S(x, 19) ^ sha256_R(x, 10));}

function _f(m: Array<number>, l: number) {
    var HASH = new Array(1779033703, -1150833019, 1013904242, -1521486534,
                         1359893119, -1694144372, 528734635, 1541459225);
    var W = new Array(64);
    var a, b, c, d, e, f, g, h;
    var i, j, T1, T2;

    m[l >> 5] |= 0x80 << (24 - l % 32);
    m[((l + 64 >> 9) << 4) + 15] = l;
  
    for (i = 0; i < m.length; i += 16) {
        a = HASH[0];
        b = HASH[1];
        c = HASH[2];
        d = HASH[3];
        e = HASH[4];
        f = HASH[5];
        g = HASH[6];
        h = HASH[7];
  
        for (j = 0; j < 64; j++) {
            if (j < 16) W[j] = m[j + i];
            else W[j] = _a(_a(_a(sha256_Gamma1256(W[j - 2]), W[j - 7]),
                                        sha256_Gamma0256(W[j - 15])), W[j - 16]);
    
            T1 = _a(_a(_a(_a(h, sha256_Sigma1256(e)), sha256_Ch(e, f, g)),
                                                                _b[j]), W[j]);
            T2 = _a(sha256_Sigma0256(a), sha256_Maj(a, b, c));
            h = g;
            g = f;
            f = e;
            e = _a(d, T1);
            d = c;
            c = b;
            b = a;
            a = _a(T1, T2);
        }
  
        HASH[0] = _a(a, HASH[0]);
        HASH[1] = _a(b, HASH[1]);
        HASH[2] = _a(c, HASH[2]);
        HASH[3] = _a(d, HASH[3]);
        HASH[4] = _a(e, HASH[4]);
        HASH[5] = _a(f, HASH[5]);
        HASH[6] = _a(g, HASH[6]);
        HASH[7] = _a(h, HASH[7]);
    }
    return HASH;
}

function _g(s: string) {
    return _c(_f(_d(s), s.length * 8));
}

function _h(input: string) {
    var output = "";
    var i = -1;
    var x, y;

    while(++i < input.length) {
        x = input.charCodeAt(i);
        y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;

        if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
            x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
            i++;
        }

    if(x <= 0x7F)
      output += String.fromCharCode(x);
    else if(x <= 0x7FF)
      output += String.fromCharCode(0xC0 | ((x >>> 6 ) & 0x1F),
                                    0x80 | ( x         & 0x3F));
    else if(x <= 0xFFFF)
      output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F),
                                    0x80 | ((x >>> 6 ) & 0x3F),
                                    0x80 | ( x         & 0x3F));
    else if(x <= 0x1FFFFF)
      output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07),
                                    0x80 | ((x >>> 12) & 0x3F),
                                    0x80 | ((x >>> 6 ) & 0x3F),
                                    0x80 | ( x         & 0x3F));
    }
    return output;
}


function sha256(s: string) {
    return _e(_g(_h(s)));
}

const ballAPIURLPrefix: string = "https://raw.githubusercontent.com/rexgamer338571/balls-api/refs/heads/main/";
const spawnHashesURL: string = `${ballAPIURLPrefix}all_balls`;
const spawnArtURLPrefix: string = `${ballAPIURLPrefix}balls/`;

const spawn_art: HTMLImageElement = document.querySelector("#spawn-art") as HTMLImageElement;
const guessButton: HTMLButtonElement = document.querySelector("#guess-button") as HTMLButtonElement;
const guess: HTMLInputElement = document.querySelector("#guess") as HTMLInputElement;
const output: HTMLParagraphElement = document.querySelector("#output") as HTMLParagraphElement;

let spawnHashes: Set<string>;
let currentHash: string;


async function checkHash(input: string) : Promise<boolean> {
    const hash = sha256(input);

    return hash == currentHash;
}

async function pickNew() {
    currentHash = pickRandom(spawnHashes);

    spawn_art.src = `${spawnArtURLPrefix}${currentHash}.png`
}

guessButton.addEventListener("click", async () => {
    const sanitized = guess.value.replace(" ", "_").toLowerCase();
    if (!await checkHash(sanitized)) {
        output.innerHTML = "Wrong name!";
        return;
    }

    output.innerHTML = "Correct!";

    pickNew();
});

function pickRandom(set: Set<string>) : string {
    const hash: string = Array.from(set)[Math.floor(Math.random() * set.size)];
    return hash;
};

async function populateSpawnHashes () : Promise<Set<string>> {
    try {
        const response = await fetch(spawnHashesURL);

        if (!response.ok) {
            throw new Error(`Failed to fetch spawn hashes: ${response.statusText}`);
        }

        const text = await response.text();
        const linesSet = new Set(text.split("\n").map(line => line.trim()).filter(line => line));

        return linesSet;
    } catch (error) {
        if (error instanceof Error) 
            console.error(`Error: ${error.message}`);

        throw error;
    }
}

const main = async () => {
    if (spawn_art == null) {
        return;
    }

    spawnHashes = await populateSpawnHashes();

    pickNew();
};

(async () => {
    try {
        await main();
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error in main(): ", error);
        }
    }
})();