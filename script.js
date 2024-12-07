// hashing stuff
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
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
function _a(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
}
function _c(input) {
    var output = "";
    for (var i = 0; i < input.length * 32; i += 8)
        output += String.fromCharCode((input[i >> 5] >>> (24 - i % 32)) & 0xFF);
    return output;
}
function _d(input) {
    var output = Array(input.length >> 2);
    for (var i = 0; i < output.length; i++)
        output[i] = 0;
    for (var i = 0; i < input.length * 8; i += 8)
        output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (24 - i % 32);
    return output;
}
function _e(input) {
    var hex_tab = "0123456789abcdef";
    var output = "";
    for (var i = 0; i < input.length; i++) {
        var x = input.charCodeAt(i);
        output += hex_tab.charAt((x >>> 4) & 0x0F) + hex_tab.charAt(x & 0x0F);
    }
    return output;
}
function sha256_S(X, n) { return (X >>> n) | (X << (32 - n)); }
function sha256_R(X, n) { return (X >>> n); }
function sha256_Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }
function sha256_Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }
function sha256_Sigma0256(x) { return (sha256_S(x, 2) ^ sha256_S(x, 13) ^ sha256_S(x, 22)); }
function sha256_Sigma1256(x) { return (sha256_S(x, 6) ^ sha256_S(x, 11) ^ sha256_S(x, 25)); }
function sha256_Gamma0256(x) { return (sha256_S(x, 7) ^ sha256_S(x, 18) ^ sha256_R(x, 3)); }
function sha256_Gamma1256(x) { return (sha256_S(x, 17) ^ sha256_S(x, 19) ^ sha256_R(x, 10)); }
function _f(m, l) {
    var HASH = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225);
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
            if (j < 16)
                W[j] = m[j + i];
            else
                W[j] = _a(_a(_a(sha256_Gamma1256(W[j - 2]), W[j - 7]), sha256_Gamma0256(W[j - 15])), W[j - 16]);
            T1 = _a(_a(_a(_a(h, sha256_Sigma1256(e)), sha256_Ch(e, f, g)), _b[j]), W[j]);
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
function _g(s) {
    return _c(_f(_d(s), s.length * 8));
}
function _h(input) {
    var output = "";
    var i = -1;
    var x, y;
    while (++i < input.length) {
        x = input.charCodeAt(i);
        y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
        if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
            x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
            i++;
        }
        if (x <= 0x7F)
            output += String.fromCharCode(x);
        else if (x <= 0x7FF)
            output += String.fromCharCode(0xC0 | ((x >>> 6) & 0x1F), 0x80 | (x & 0x3F));
        else if (x <= 0xFFFF)
            output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F), 0x80 | ((x >>> 6) & 0x3F), 0x80 | (x & 0x3F));
        else if (x <= 0x1FFFFF)
            output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07), 0x80 | ((x >>> 12) & 0x3F), 0x80 | ((x >>> 6) & 0x3F), 0x80 | (x & 0x3F));
    }
    return output;
}
function sha256(s) {
    return _e(_g(_h(s)));
}
var ballAPIURLPrefix = "https://raw.githubusercontent.com/rexgamer338571/balls-api/refs/heads/main/";
var spawnHashesURL = "".concat(ballAPIURLPrefix, "all_balls");
var spawnArtURLPrefix = "".concat(ballAPIURLPrefix, "balls/");
var spawn_art = document.querySelector("#spawn-art");
var guessButton = document.querySelector("#guess-button");
var guess = document.querySelector("#guess");
var output = document.querySelector("#output");
var spawnHashes;
var currentHash;
function checkHash(input) {
    return __awaiter(this, void 0, void 0, function () {
        var hash;
        return __generator(this, function (_j) {
            hash = sha256(input);
            return [2 /*return*/, hash == currentHash];
        });
    });
}
function pickNew() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_j) {
            currentHash = pickRandom(spawnHashes);
            spawn_art.src = "".concat(spawnArtURLPrefix).concat(currentHash, ".png");
            return [2 /*return*/];
        });
    });
}
guessButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
    var sanitized;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                sanitized = guess.value.replace(" ", "_").toLowerCase();
                return [4 /*yield*/, checkHash(sanitized)];
            case 1:
                if (!(_j.sent())) {
                    output.innerHTML = "Wrong name!";
                    return [2 /*return*/];
                }
                output.innerHTML = "Correct!";
                pickNew();
                return [2 /*return*/];
        }
    });
}); });
function pickRandom(set) {
    var hash = Array.from(set)[Math.floor(Math.random() * set.size)];
    return hash;
}
;
function populateSpawnHashes() {
    return __awaiter(this, void 0, void 0, function () {
        var response, text, linesSet, error_1;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0:
                    _j.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(spawnHashesURL)];
                case 1:
                    response = _j.sent();
                    if (!response.ok) {
                        throw new Error("Failed to fetch spawn hashes: ".concat(response.statusText));
                    }
                    return [4 /*yield*/, response.text()];
                case 2:
                    text = _j.sent();
                    linesSet = new Set(text.split("\n").map(function (line) { return line.trim(); }).filter(function (line) { return line; }));
                    return [2 /*return*/, linesSet];
                case 3:
                    error_1 = _j.sent();
                    if (error_1 instanceof Error)
                        console.error("Error: ".concat(error_1.message));
                    throw error_1;
                case 4: return [2 /*return*/];
            }
        });
    });
}
var main = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                if (spawn_art == null) {
                    return [2 /*return*/];
                }
                return [4 /*yield*/, populateSpawnHashes()];
            case 1:
                spawnHashes = _j.sent();
                pickNew();
                return [2 /*return*/];
        }
    });
}); };
(function () { return __awaiter(_this, void 0, void 0, function () {
    var error_2;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _j.trys.push([0, 2, , 3]);
                return [4 /*yield*/, main()];
            case 1:
                _j.sent();
                return [3 /*break*/, 3];
            case 2:
                error_2 = _j.sent();
                if (error_2 instanceof Error) {
                    console.error("Error in main(): ", error_2);
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); })();
