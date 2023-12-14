(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver(i => {
    for (const s of i)
      if (s.type === 'childList')
        for (const a of s.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = t(i);
    fetch(i.href, s);
  }
})();
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const zs = '148',
  Vn = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
  Wn = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  Tl = 0,
  Qs = 1,
  Al = 2,
  Uo = 1,
  Cl = 2,
  Ii = 3,
  Nn = 0,
  zt = 1,
  _i = 2,
  Zi = 3,
  pn = 0,
  hi = 1,
  Js = 2,
  ea = 3,
  ta = 4,
  Ll = 5,
  si = 100,
  Pl = 101,
  Dl = 102,
  na = 103,
  ia = 104,
  Rl = 200,
  Il = 201,
  Ol = 202,
  Fl = 203,
  Bo = 204,
  ko = 205,
  Nl = 206,
  zl = 207,
  Ul = 208,
  Bl = 209,
  kl = 210,
  Gl = 0,
  Hl = 1,
  Vl = 2,
  bs = 3,
  Wl = 4,
  Xl = 5,
  ql = 6,
  Yl = 7,
  Go = 0,
  jl = 1,
  Zl = 2,
  an = 0,
  $l = 1,
  Kl = 2,
  Ql = 3,
  Jl = 4,
  ec = 5,
  Ho = 300,
  fi = 301,
  pi = 302,
  Ms = 303,
  Ss = 304,
  Ar = 306,
  ws = 1e3,
  Ht = 1001,
  Es = 1002,
  mt = 1003,
  ra = 1004,
  Ur = 1005,
  Ft = 1006,
  tc = 1007,
  ki = 1008,
  zn = 1009,
  nc = 1010,
  ic = 1011,
  Vo = 1012,
  rc = 1013,
  Dn = 1014,
  Rn = 1015,
  Gi = 1016,
  sc = 1017,
  ac = 1018,
  di = 1020,
  oc = 1021,
  lc = 1022,
  Vt = 1023,
  cc = 1024,
  uc = 1025,
  On = 1026,
  mi = 1027,
  hc = 1028,
  dc = 1029,
  fc = 1030,
  pc = 1031,
  mc = 1033,
  Br = 33776,
  kr = 33777,
  Gr = 33778,
  Hr = 33779,
  sa = 35840,
  aa = 35841,
  oa = 35842,
  la = 35843,
  gc = 36196,
  ca = 37492,
  ua = 37496,
  ha = 37808,
  da = 37809,
  fa = 37810,
  pa = 37811,
  ma = 37812,
  ga = 37813,
  _a = 37814,
  xa = 37815,
  va = 37816,
  ya = 37817,
  ba = 37818,
  Ma = 37819,
  Sa = 37820,
  wa = 37821,
  Ea = 36492,
  Un = 3e3,
  Ve = 3001,
  _c = 3200,
  xc = 3201,
  Wo = 0,
  vc = 1,
  Gt = 'srgb',
  Hi = 'srgb-linear',
  Vr = 7680,
  yc = 519,
  Ta = 35044,
  Aa = '300 es',
  Ts = 1035;
class Gn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, a = i.length; s < a; s++) i[s].call(this, e);
      e.target = null;
    }
  }
}
const ft = [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '0a',
    '0b',
    '0c',
    '0d',
    '0e',
    '0f',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '1a',
    '1b',
    '1c',
    '1d',
    '1e',
    '1f',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '2a',
    '2b',
    '2c',
    '2d',
    '2e',
    '2f',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '3a',
    '3b',
    '3c',
    '3d',
    '3e',
    '3f',
    '40',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '4a',
    '4b',
    '4c',
    '4d',
    '4e',
    '4f',
    '50',
    '51',
    '52',
    '53',
    '54',
    '55',
    '56',
    '57',
    '58',
    '59',
    '5a',
    '5b',
    '5c',
    '5d',
    '5e',
    '5f',
    '60',
    '61',
    '62',
    '63',
    '64',
    '65',
    '66',
    '67',
    '68',
    '69',
    '6a',
    '6b',
    '6c',
    '6d',
    '6e',
    '6f',
    '70',
    '71',
    '72',
    '73',
    '74',
    '75',
    '76',
    '77',
    '78',
    '79',
    '7a',
    '7b',
    '7c',
    '7d',
    '7e',
    '7f',
    '80',
    '81',
    '82',
    '83',
    '84',
    '85',
    '86',
    '87',
    '88',
    '89',
    '8a',
    '8b',
    '8c',
    '8d',
    '8e',
    '8f',
    '90',
    '91',
    '92',
    '93',
    '94',
    '95',
    '96',
    '97',
    '98',
    '99',
    '9a',
    '9b',
    '9c',
    '9d',
    '9e',
    '9f',
    'a0',
    'a1',
    'a2',
    'a3',
    'a4',
    'a5',
    'a6',
    'a7',
    'a8',
    'a9',
    'aa',
    'ab',
    'ac',
    'ad',
    'ae',
    'af',
    'b0',
    'b1',
    'b2',
    'b3',
    'b4',
    'b5',
    'b6',
    'b7',
    'b8',
    'b9',
    'ba',
    'bb',
    'bc',
    'bd',
    'be',
    'bf',
    'c0',
    'c1',
    'c2',
    'c3',
    'c4',
    'c5',
    'c6',
    'c7',
    'c8',
    'c9',
    'ca',
    'cb',
    'cc',
    'cd',
    'ce',
    'cf',
    'd0',
    'd1',
    'd2',
    'd3',
    'd4',
    'd5',
    'd6',
    'd7',
    'd8',
    'd9',
    'da',
    'db',
    'dc',
    'dd',
    'de',
    'df',
    'e0',
    'e1',
    'e2',
    'e3',
    'e4',
    'e5',
    'e6',
    'e7',
    'e8',
    'e9',
    'ea',
    'eb',
    'ec',
    'ed',
    'ee',
    'ef',
    'f0',
    'f1',
    'f2',
    'f3',
    'f4',
    'f5',
    'f6',
    'f7',
    'f8',
    'f9',
    'fa',
    'fb',
    'fc',
    'fd',
    'fe',
    'ff',
  ],
  Wr = Math.PI / 180,
  Ca = 180 / Math.PI;
function qi() {
  const r = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    ft[r & 255] +
    ft[(r >> 8) & 255] +
    ft[(r >> 16) & 255] +
    ft[(r >> 24) & 255] +
    '-' +
    ft[e & 255] +
    ft[(e >> 8) & 255] +
    '-' +
    ft[((e >> 16) & 15) | 64] +
    ft[(e >> 24) & 255] +
    '-' +
    ft[(t & 63) | 128] +
    ft[(t >> 8) & 255] +
    '-' +
    ft[(t >> 16) & 255] +
    ft[(t >> 24) & 255] +
    ft[n & 255] +
    ft[(n >> 8) & 255] +
    ft[(n >> 16) & 255] +
    ft[(n >> 24) & 255]
  ).toLowerCase();
}
function St(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function bc(r, e) {
  return ((r % e) + e) % e;
}
function Xr(r, e, t) {
  return (1 - t) * r + t * e;
}
function La(r) {
  return (r & (r - 1)) === 0 && r !== 0;
}
function As(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function $i(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error('Invalid component type.');
  }
}
function At(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error('Invalid component type.');
  }
}
class we {
  constructor(e = 0, t = 0) {
    (we.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error('index is out of range: ' + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error('index is out of range: ' + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[3] * n + i[6]),
      (this.y = i[1] * t + i[4] * n + i[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n)),
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      s = this.x - e.x,
      a = this.y - e.y;
    return (this.x = s * n - a * i + e.x), (this.y = s * i + a * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Pt {
  constructor() {
    (Pt.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
  }
  set(e, t, n, i, s, a, o, l, c) {
    const u = this.elements;
    return (
      (u[0] = e),
      (u[1] = i),
      (u[2] = o),
      (u[3] = t),
      (u[4] = s),
      (u[5] = l),
      (u[6] = n),
      (u[7] = a),
      (u[8] = c),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      s = this.elements,
      a = n[0],
      o = n[3],
      l = n[6],
      c = n[1],
      u = n[4],
      h = n[7],
      d = n[2],
      m = n[5],
      _ = n[8],
      p = i[0],
      f = i[3],
      x = i[6],
      b = i[1],
      v = i[4],
      S = i[7],
      y = i[2],
      C = i[5],
      I = i[8];
    return (
      (s[0] = a * p + o * b + l * y),
      (s[3] = a * f + o * v + l * C),
      (s[6] = a * x + o * S + l * I),
      (s[1] = c * p + u * b + h * y),
      (s[4] = c * f + u * v + h * C),
      (s[7] = c * x + u * S + h * I),
      (s[2] = d * p + m * b + _ * y),
      (s[5] = d * f + m * v + _ * C),
      (s[8] = d * x + m * S + _ * I),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      u = e[8];
    return (
      t * a * u - t * o * c - n * s * u + n * o * l + i * s * c - i * a * l
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      h = u * a - o * c,
      d = o * l - u * s,
      m = c * s - a * l,
      _ = t * h + n * d + i * m;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const p = 1 / _;
    return (
      (e[0] = h * p),
      (e[1] = (i * c - u * n) * p),
      (e[2] = (o * n - i * a) * p),
      (e[3] = d * p),
      (e[4] = (u * t - i * l) * p),
      (e[5] = (i * s - o * t) * p),
      (e[6] = m * p),
      (e[7] = (n * l - c * t) * p),
      (e[8] = (a * t - n * s) * p),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, i, s, a, o) {
    const l = Math.cos(s),
      c = Math.sin(s);
    return (
      this.set(
        n * l,
        n * c,
        -n * (l * a + c * o) + a + e,
        -i * c,
        i * l,
        -i * (-c * a + l * o) + o + t,
        0,
        0,
        1,
      ),
      this
    );
  }
  scale(e, t) {
    return this.premultiply(qr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(qr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(qr.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
  }
  makeRotation(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const qr = new Pt();
function Xo(r) {
  for (let e = r.length - 1; e >= 0; --e) if (r[e] >= 65535) return !0;
  return !1;
}
function Vi(r) {
  return document.createElementNS('http://www.w3.org/1999/xhtml', r);
}
function Fn(r) {
  return r < 0.04045
    ? r * 0.0773993808
    : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function Mr(r) {
  return r < 0.0031308 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
const Yr = { [Gt]: { [Hi]: Fn }, [Hi]: { [Gt]: Mr } },
  xt = {
    legacyMode: !0,
    get workingColorSpace() {
      return Hi;
    },
    set workingColorSpace(r) {
      console.warn('THREE.ColorManagement: .workingColorSpace is readonly.');
    },
    convert: function (r, e, t) {
      if (this.legacyMode || e === t || !e || !t) return r;
      if (Yr[e] && Yr[e][t] !== void 0) {
        const n = Yr[e][t];
        return (r.r = n(r.r)), (r.g = n(r.g)), (r.b = n(r.b)), r;
      }
      throw new Error('Unsupported color space conversion.');
    },
    fromWorkingColorSpace: function (r, e) {
      return this.convert(r, this.workingColorSpace, e);
    },
    toWorkingColorSpace: function (r, e) {
      return this.convert(r, e, this.workingColorSpace);
    },
  },
  qo = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  tt = { r: 0, g: 0, b: 0 },
  Ut = { h: 0, s: 0, l: 0 },
  Ki = { h: 0, s: 0, l: 0 };
function jr(r, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? r + (e - r) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? r + (e - r) * 6 * (2 / 3 - t)
      : r
  );
}
function Qi(r, e) {
  return (e.r = r.r), (e.g = r.g), (e.b = r.b), e;
}
let Be = class {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n)
    );
  }
  set(e) {
    return (
      e && e.isColor
        ? this.copy(e)
        : typeof e == 'number'
        ? this.setHex(e)
        : typeof e == 'string' && this.setStyle(e),
      this
    );
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = Gt) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      xt.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, i = xt.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      xt.toWorkingColorSpace(this, i),
      this
    );
  }
  setHSL(e, t, n, i = xt.workingColorSpace) {
    if (((e = bc(e, 1)), (t = St(t, 0, 1)), (n = St(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        a = 2 * n - s;
      (this.r = jr(a, s, e + 1 / 3)),
        (this.g = jr(a, s, e)),
        (this.b = jr(a, s, e - 1 / 3));
    }
    return xt.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Gt) {
    function n(s) {
      s !== void 0 &&
        parseFloat(s) < 1 &&
        console.warn(
          'THREE.Color: Alpha component of ' + e + ' will be ignored.',
        );
    }
    let i;
    if ((i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e))) {
      let s;
      const a = i[1],
        o = i[2];
      switch (a) {
        case 'rgb':
        case 'rgba':
          if (
            (s =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o,
              ))
          )
            return (
              (this.r = Math.min(255, parseInt(s[1], 10)) / 255),
              (this.g = Math.min(255, parseInt(s[2], 10)) / 255),
              (this.b = Math.min(255, parseInt(s[3], 10)) / 255),
              xt.toWorkingColorSpace(this, t),
              n(s[4]),
              this
            );
          if (
            (s =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o,
              ))
          )
            return (
              (this.r = Math.min(100, parseInt(s[1], 10)) / 100),
              (this.g = Math.min(100, parseInt(s[2], 10)) / 100),
              (this.b = Math.min(100, parseInt(s[3], 10)) / 100),
              xt.toWorkingColorSpace(this, t),
              n(s[4]),
              this
            );
          break;
        case 'hsl':
        case 'hsla':
          if (
            (s =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o,
              ))
          ) {
            const l = parseFloat(s[1]) / 360,
              c = parseFloat(s[2]) / 100,
              u = parseFloat(s[3]) / 100;
            return n(s[4]), this.setHSL(l, c, u, t);
          }
          break;
      }
    } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const s = i[1],
        a = s.length;
      if (a === 3)
        return (
          (this.r = parseInt(s.charAt(0) + s.charAt(0), 16) / 255),
          (this.g = parseInt(s.charAt(1) + s.charAt(1), 16) / 255),
          (this.b = parseInt(s.charAt(2) + s.charAt(2), 16) / 255),
          xt.toWorkingColorSpace(this, t),
          this
        );
      if (a === 6)
        return (
          (this.r = parseInt(s.charAt(0) + s.charAt(1), 16) / 255),
          (this.g = parseInt(s.charAt(2) + s.charAt(3), 16) / 255),
          (this.b = parseInt(s.charAt(4) + s.charAt(5), 16) / 255),
          xt.toWorkingColorSpace(this, t),
          this
        );
    }
    return e && e.length > 0 ? this.setColorName(e, t) : this;
  }
  setColorName(e, t = Gt) {
    const n = qo[e.toLowerCase()];
    return (
      n !== void 0
        ? this.setHex(n, t)
        : console.warn('THREE.Color: Unknown color ' + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = Fn(e.r)), (this.g = Fn(e.g)), (this.b = Fn(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = Mr(e.r)), (this.g = Mr(e.g)), (this.b = Mr(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Gt) {
    return (
      xt.fromWorkingColorSpace(Qi(this, tt), e),
      (St(tt.r * 255, 0, 255) << 16) ^
        (St(tt.g * 255, 0, 255) << 8) ^
        (St(tt.b * 255, 0, 255) << 0)
    );
  }
  getHexString(e = Gt) {
    return ('000000' + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = xt.workingColorSpace) {
    xt.fromWorkingColorSpace(Qi(this, tt), t);
    const n = tt.r,
      i = tt.g,
      s = tt.b,
      a = Math.max(n, i, s),
      o = Math.min(n, i, s);
    let l, c;
    const u = (o + a) / 2;
    if (o === a) (l = 0), (c = 0);
    else {
      const h = a - o;
      switch (((c = u <= 0.5 ? h / (a + o) : h / (2 - a - o)), a)) {
        case n:
          l = (i - s) / h + (i < s ? 6 : 0);
          break;
        case i:
          l = (s - n) / h + 2;
          break;
        case s:
          l = (n - i) / h + 4;
          break;
      }
      l /= 6;
    }
    return (e.h = l), (e.s = c), (e.l = u), e;
  }
  getRGB(e, t = xt.workingColorSpace) {
    return (
      xt.fromWorkingColorSpace(Qi(this, tt), t),
      (e.r = tt.r),
      (e.g = tt.g),
      (e.b = tt.b),
      e
    );
  }
  getStyle(e = Gt) {
    return (
      xt.fromWorkingColorSpace(Qi(this, tt), e),
      e !== Gt
        ? `color(${e} ${tt.r} ${tt.g} ${tt.b})`
        : `rgb(${(tt.r * 255) | 0},${(tt.g * 255) | 0},${(tt.b * 255) | 0})`
    );
  }
  offsetHSL(e, t, n) {
    return (
      this.getHSL(Ut),
      (Ut.h += e),
      (Ut.s += t),
      (Ut.l += n),
      this.setHSL(Ut.h, Ut.s, Ut.l),
      this
    );
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(Ut), e.getHSL(Ki);
    const n = Xr(Ut.h, Ki.h, t),
      i = Xr(Ut.s, Ki.s, t),
      s = Xr(Ut.l, Ki.l, t);
    return this.setHSL(n, i, s), this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
};
Be.NAMES = qo;
let Xn;
class Yo {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > 'u') return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      Xn === void 0 && (Xn = Vi('canvas')),
        (Xn.width = e.width),
        (Xn.height = e.height);
      const n = Xn.getContext('2d');
      e instanceof ImageData
        ? n.putImageData(e, 0, 0)
        : n.drawImage(e, 0, 0, e.width, e.height),
        (t = Xn);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          'THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons',
          e,
        ),
        t.toDataURL('image/jpeg', 0.6))
      : t.toDataURL('image/png');
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < 'u' && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < 'u' && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < 'u' && e instanceof ImageBitmap)
    ) {
      const t = Vi('canvas');
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext('2d');
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height),
        s = i.data;
      for (let a = 0; a < s.length; a++) s[a] = Fn(s[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(Fn(t[n] / 255) * 255))
          : (t[n] = Fn(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn(
          'THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.',
        ),
        e
      );
  }
}
class jo {
  constructor(e = null) {
    (this.isSource = !0),
      (this.uuid = qi()),
      (this.data = e),
      (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == 'string';
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: '' },
      i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let a = 0, o = i.length; a < o; a++)
          i[a].isDataTexture ? s.push(Zr(i[a].image)) : s.push(Zr(i[a]));
      } else s = Zr(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Zr(r) {
  return (typeof HTMLImageElement < 'u' && r instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < 'u' && r instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < 'u' && r instanceof ImageBitmap)
    ? Yo.getDataURL(r)
    : r.data
    ? {
        data: Array.from(r.data),
        width: r.width,
        height: r.height,
        type: r.data.constructor.name,
      }
    : (console.warn('THREE.Texture: Unable to serialize Texture.'), {});
}
let Mc = 0;
class wt extends Gn {
  constructor(
    e = wt.DEFAULT_IMAGE,
    t = wt.DEFAULT_MAPPING,
    n = Ht,
    i = Ht,
    s = Ft,
    a = ki,
    o = Vt,
    l = zn,
    c = wt.DEFAULT_ANISOTROPY,
    u = Un,
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, 'id', { value: Mc++ }),
      (this.uuid = qi()),
      (this.name = ''),
      (this.source = new jo(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.wrapS = n),
      (this.wrapT = i),
      (this.magFilter = s),
      (this.minFilter = a),
      (this.anisotropy = c),
      (this.format = o),
      (this.internalFormat = null),
      (this.type = l),
      (this.offset = new we(0, 0)),
      (this.repeat = new we(1, 1)),
      (this.center = new we(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Pt()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.encoding = u),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.needsPMREMUpdate = !1);
  }
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y,
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.encoding = e.encoding),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == 'string';
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.5, type: 'Texture', generator: 'Texture.toJSON' },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: 'dispose' });
  }
  transformUv(e) {
    if (this.mapping !== Ho) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case ws:
          e.x = e.x - Math.floor(e.x);
          break;
        case Ht:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Es:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case ws:
          e.y = e.y - Math.floor(e.y);
          break;
        case Ht:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Es:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
}
wt.DEFAULT_IMAGE = null;
wt.DEFAULT_MAPPING = Ho;
wt.DEFAULT_ANISOTROPY = 1;
class ht {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (ht.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = i);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = i), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error('index is out of range: ' + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error('index is out of range: ' + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = this.w,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * s),
      (this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * s),
      (this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * s),
      (this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * s),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const l = e.elements,
      c = l[0],
      u = l[4],
      h = l[8],
      d = l[1],
      m = l[5],
      _ = l[9],
      p = l[2],
      f = l[6],
      x = l[10];
    if (
      Math.abs(u - d) < 0.01 &&
      Math.abs(h - p) < 0.01 &&
      Math.abs(_ - f) < 0.01
    ) {
      if (
        Math.abs(u + d) < 0.1 &&
        Math.abs(h + p) < 0.1 &&
        Math.abs(_ + f) < 0.1 &&
        Math.abs(c + m + x - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const v = (c + 1) / 2,
        S = (m + 1) / 2,
        y = (x + 1) / 2,
        C = (u + d) / 4,
        I = (h + p) / 4,
        g = (_ + f) / 4;
      return (
        v > S && v > y
          ? v < 0.01
            ? ((n = 0), (i = 0.707106781), (s = 0.707106781))
            : ((n = Math.sqrt(v)), (i = C / n), (s = I / n))
          : S > y
          ? S < 0.01
            ? ((n = 0.707106781), (i = 0), (s = 0.707106781))
            : ((i = Math.sqrt(S)), (n = C / i), (s = g / i))
          : y < 0.01
          ? ((n = 0.707106781), (i = 0.707106781), (s = 0))
          : ((s = Math.sqrt(y)), (n = I / s), (i = g / s)),
        this.set(n, i, s, t),
        this
      );
    }
    let b = Math.sqrt(
      (f - _) * (f - _) + (h - p) * (h - p) + (d - u) * (d - u),
    );
    return (
      Math.abs(b) < 0.001 && (b = 1),
      (this.x = (f - _) / b),
      (this.y = (h - p) / b),
      (this.z = (d - u) / b),
      (this.w = Math.acos((c + m + x - 1) / 2)),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n)),
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w,
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Bn extends Gn {
  constructor(e = 1, t = 1, n = {}) {
    super(),
      (this.isWebGLRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new ht(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new ht(0, 0, e, t));
    const i = { width: e, height: t, depth: 1 };
    (this.texture = new wt(
      i,
      n.mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.encoding,
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.flipY = !1),
      (this.texture.generateMipmaps =
        n.generateMipmaps !== void 0 ? n.generateMipmaps : !1),
      (this.texture.internalFormat =
        n.internalFormat !== void 0 ? n.internalFormat : null),
      (this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : Ft),
      (this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0),
      (this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1),
      (this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null),
      (this.samples = n.samples !== void 0 ? n.samples : 0);
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) &&
      ((this.width = e),
      (this.height = t),
      (this.depth = n),
      (this.texture.image.width = e),
      (this.texture.image.height = t),
      (this.texture.image.depth = n),
      this.dispose()),
      this.viewport.set(0, 0, e, t),
      this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.viewport.copy(e.viewport),
      (this.texture = e.texture.clone()),
      (this.texture.isRenderTargetTexture = !0);
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new jo(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: 'dispose' });
  }
}
class Zo extends wt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = mt),
      (this.minFilter = mt),
      (this.wrapR = Ht),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Sc extends wt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = mt),
      (this.minFilter = mt),
      (this.wrapR = Ht),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class ut {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i);
  }
  static slerpFlat(e, t, n, i, s, a, o) {
    let l = n[i + 0],
      c = n[i + 1],
      u = n[i + 2],
      h = n[i + 3];
    const d = s[a + 0],
      m = s[a + 1],
      _ = s[a + 2],
      p = s[a + 3];
    if (o === 0) {
      (e[t + 0] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = h);
      return;
    }
    if (o === 1) {
      (e[t + 0] = d), (e[t + 1] = m), (e[t + 2] = _), (e[t + 3] = p);
      return;
    }
    if (h !== p || l !== d || c !== m || u !== _) {
      let f = 1 - o;
      const x = l * d + c * m + u * _ + h * p,
        b = x >= 0 ? 1 : -1,
        v = 1 - x * x;
      if (v > Number.EPSILON) {
        const y = Math.sqrt(v),
          C = Math.atan2(y, x * b);
        (f = Math.sin(f * C) / y), (o = Math.sin(o * C) / y);
      }
      const S = o * b;
      if (
        ((l = l * f + d * S),
        (c = c * f + m * S),
        (u = u * f + _ * S),
        (h = h * f + p * S),
        f === 1 - o)
      ) {
        const y = 1 / Math.sqrt(l * l + c * c + u * u + h * h);
        (l *= y), (c *= y), (u *= y), (h *= y);
      }
    }
    (e[t] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = h);
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, a) {
    const o = n[i],
      l = n[i + 1],
      c = n[i + 2],
      u = n[i + 3],
      h = s[a],
      d = s[a + 1],
      m = s[a + 2],
      _ = s[a + 3];
    return (
      (e[t] = o * _ + u * h + l * m - c * d),
      (e[t + 1] = l * _ + u * d + c * h - o * m),
      (e[t + 2] = c * _ + u * m + o * d - l * h),
      (e[t + 3] = u * _ - o * h - l * d - c * m),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, i) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t) {
    const n = e._x,
      i = e._y,
      s = e._z,
      a = e._order,
      o = Math.cos,
      l = Math.sin,
      c = o(n / 2),
      u = o(i / 2),
      h = o(s / 2),
      d = l(n / 2),
      m = l(i / 2),
      _ = l(s / 2);
    switch (a) {
      case 'XYZ':
        (this._x = d * u * h + c * m * _),
          (this._y = c * m * h - d * u * _),
          (this._z = c * u * _ + d * m * h),
          (this._w = c * u * h - d * m * _);
        break;
      case 'YXZ':
        (this._x = d * u * h + c * m * _),
          (this._y = c * m * h - d * u * _),
          (this._z = c * u * _ - d * m * h),
          (this._w = c * u * h + d * m * _);
        break;
      case 'ZXY':
        (this._x = d * u * h - c * m * _),
          (this._y = c * m * h + d * u * _),
          (this._z = c * u * _ + d * m * h),
          (this._w = c * u * h - d * m * _);
        break;
      case 'ZYX':
        (this._x = d * u * h - c * m * _),
          (this._y = c * m * h + d * u * _),
          (this._z = c * u * _ - d * m * h),
          (this._w = c * u * h + d * m * _);
        break;
      case 'YZX':
        (this._x = d * u * h + c * m * _),
          (this._y = c * m * h + d * u * _),
          (this._z = c * u * _ - d * m * h),
          (this._w = c * u * h - d * m * _);
        break;
      case 'XZY':
        (this._x = d * u * h - c * m * _),
          (this._y = c * m * h - d * u * _),
          (this._z = c * u * _ + d * m * h),
          (this._w = c * u * h + d * m * _);
        break;
      default:
        console.warn(
          'THREE.Quaternion: .setFromEuler() encountered an unknown order: ' +
            a,
        );
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      i = Math.sin(n);
    return (
      (this._x = e.x * i),
      (this._y = e.y * i),
      (this._z = e.z * i),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      i = t[4],
      s = t[8],
      a = t[1],
      o = t[5],
      l = t[9],
      c = t[2],
      u = t[6],
      h = t[10],
      d = n + o + h;
    if (d > 0) {
      const m = 0.5 / Math.sqrt(d + 1);
      (this._w = 0.25 / m),
        (this._x = (u - l) * m),
        (this._y = (s - c) * m),
        (this._z = (a - i) * m);
    } else if (n > o && n > h) {
      const m = 2 * Math.sqrt(1 + n - o - h);
      (this._w = (u - l) / m),
        (this._x = 0.25 * m),
        (this._y = (i + a) / m),
        (this._z = (s + c) / m);
    } else if (o > h) {
      const m = 2 * Math.sqrt(1 + o - n - h);
      (this._w = (s - c) / m),
        (this._x = (i + a) / m),
        (this._y = 0.25 * m),
        (this._z = (l + u) / m);
    } else {
      const m = 2 * Math.sqrt(1 + h - n - o);
      (this._w = (a - i) / m),
        (this._x = (s + c) / m),
        (this._y = (l + u) / m),
        (this._z = 0.25 * m);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(St(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w,
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      i = e._y,
      s = e._z,
      a = e._w,
      o = t._x,
      l = t._y,
      c = t._z,
      u = t._w;
    return (
      (this._x = n * u + a * o + i * c - s * l),
      (this._y = i * u + a * l + s * o - n * c),
      (this._z = s * u + a * c + n * l - i * o),
      (this._w = a * u - n * o - i * l - s * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      i = this._y,
      s = this._z,
      a = this._w;
    let o = a * e._w + n * e._x + i * e._y + s * e._z;
    if (
      (o < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (o = -o))
        : this.copy(e),
      o >= 1)
    )
      return (this._w = a), (this._x = n), (this._y = i), (this._z = s), this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const m = 1 - t;
      return (
        (this._w = m * a + t * this._w),
        (this._x = m * n + t * this._x),
        (this._y = m * i + t * this._y),
        (this._z = m * s + t * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    }
    const c = Math.sqrt(l),
      u = Math.atan2(c, o),
      h = Math.sin((1 - t) * u) / c,
      d = Math.sin(t * u) / c;
    return (
      (this._w = a * h + this._w * d),
      (this._x = n * h + this._x * d),
      (this._y = i * h + this._y * d),
      (this._z = s * h + this._z * d),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(),
      t = Math.sqrt(1 - e),
      n = Math.sqrt(e),
      i = 2 * Math.PI * Math.random(),
      s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(s),
      n * Math.cos(s),
      t * Math.sin(i),
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class L {
  constructor(e = 0, t = 0, n = 0) {
    (L.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error('index is out of range: ' + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error('index is out of range: ' + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(Pa.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Pa.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[3] * n + s[6] * i),
      (this.y = s[1] * t + s[4] * n + s[7] * i),
      (this.z = s[2] * t + s[5] * n + s[8] * i),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements,
      a = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return (
      (this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * a),
      (this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * a),
      (this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * a),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.x,
      a = e.y,
      o = e.z,
      l = e.w,
      c = l * t + a * i - o * n,
      u = l * n + o * t - s * i,
      h = l * i + s * n - a * t,
      d = -s * t - a * n - o * i;
    return (
      (this.x = c * l + d * -s + u * -o - h * -a),
      (this.y = u * l + d * -a + h * -s - c * -o),
      (this.z = h * l + d * -o + c * -a - u * -s),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix,
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld,
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[4] * n + s[8] * i),
      (this.y = s[1] * t + s[5] * n + s[9] * i),
      (this.z = s[2] * t + s[6] * n + s[10] * i),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n)),
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      i = e.y,
      s = e.z,
      a = t.x,
      o = t.y,
      l = t.z;
    return (
      (this.x = i * l - s * o),
      (this.y = s * a - n * l),
      (this.z = n * o - i * a),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return $r.copy(this).projectOnVector(e), this.sub($r);
  }
  reflect(e) {
    return this.sub($r.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(St(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return (
      (this.x = i * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = i * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      i = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = i), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2,
      t = Math.random() * Math.PI * 2,
      n = Math.sqrt(1 - e ** 2);
    return (
      (this.x = n * Math.cos(t)), (this.y = n * Math.sin(t)), (this.z = e), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const $r = new L(),
  Pa = new ut();
class Yi {
  constructor(
    e = new L(1 / 0, 1 / 0, 1 / 0),
    t = new L(-1 / 0, -1 / 0, -1 / 0),
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0,
      n = 1 / 0,
      i = 1 / 0,
      s = -1 / 0,
      a = -1 / 0,
      o = -1 / 0;
    for (let l = 0, c = e.length; l < c; l += 3) {
      const u = e[l],
        h = e[l + 1],
        d = e[l + 2];
      u < t && (t = u),
        h < n && (n = h),
        d < i && (i = d),
        u > s && (s = u),
        h > a && (a = h),
        d > o && (o = d);
    }
    return this.min.set(t, n, i), this.max.set(s, a, o), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0,
      n = 1 / 0,
      i = 1 / 0,
      s = -1 / 0,
      a = -1 / 0,
      o = -1 / 0;
    for (let l = 0, c = e.count; l < c; l++) {
      const u = e.getX(l),
        h = e.getY(l),
        d = e.getZ(l);
      u < t && (t = u),
        h < n && (n = h),
        d < i && (i = d),
        u > s && (s = u),
        h > a && (a = h),
        d > o && (o = d);
    }
    return this.min.set(t, n, i), this.max.set(s, a, o), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Sn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0)
      if (t && n.attributes != null && n.attributes.position !== void 0) {
        const s = n.attributes.position;
        for (let a = 0, o = s.count; a < o; a++)
          Sn.fromBufferAttribute(s, a).applyMatrix4(e.matrixWorld),
            this.expandByPoint(Sn);
      } else
        n.boundingBox === null && n.computeBoundingBox(),
          Kr.copy(n.boundingBox),
          Kr.applyMatrix4(e.matrixWorld),
          this.union(Kr);
    const i = e.children;
    for (let s = 0, a = i.length; s < a; s++) this.expandByObject(i[s], t);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z),
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, Sn),
      Sn.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(Mi),
      Ji.subVectors(this.max, Mi),
      qn.subVectors(e.a, Mi),
      Yn.subVectors(e.b, Mi),
      jn.subVectors(e.c, Mi),
      on.subVectors(Yn, qn),
      ln.subVectors(jn, Yn),
      wn.subVectors(qn, jn);
    let t = [
      0,
      -on.z,
      on.y,
      0,
      -ln.z,
      ln.y,
      0,
      -wn.z,
      wn.y,
      on.z,
      0,
      -on.x,
      ln.z,
      0,
      -ln.x,
      wn.z,
      0,
      -wn.x,
      -on.y,
      on.x,
      0,
      -ln.y,
      ln.x,
      0,
      -wn.y,
      wn.x,
      0,
    ];
    return !Qr(t, qn, Yn, jn, Ji) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !Qr(t, qn, Yn, jn, Ji))
      ? !1
      : (er.crossVectors(on, ln),
        (t = [er.x, er.y, er.z]),
        Qr(t, qn, Yn, jn, Ji));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return Sn.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return (
      this.getCenter(e.center), (e.radius = this.getSize(Sn).length() * 0.5), e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (Qt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        Qt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        Qt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        Qt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        Qt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        Qt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        Qt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        Qt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(Qt),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Qt = [
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
  ],
  Sn = new L(),
  Kr = new Yi(),
  qn = new L(),
  Yn = new L(),
  jn = new L(),
  on = new L(),
  ln = new L(),
  wn = new L(),
  Mi = new L(),
  Ji = new L(),
  er = new L(),
  En = new L();
function Qr(r, e, t, n, i) {
  for (let s = 0, a = r.length - 3; s <= a; s += 3) {
    En.fromArray(r, s);
    const o =
        i.x * Math.abs(En.x) + i.y * Math.abs(En.y) + i.z * Math.abs(En.z),
      l = e.dot(En),
      c = t.dot(En),
      u = n.dot(En);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > o) return !1;
  }
  return !0;
}
const wc = new Yi(),
  Si = new L(),
  Jr = new L();
class Cr {
  constructor(e = new L(), t = -1) {
    (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : wc.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, a = e.length; s < a; s++)
      i = Math.max(i, n.distanceToSquared(e[s]));
    return (this.radius = Math.sqrt(i)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    Si.subVectors(e, this.center);
    const t = Si.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        i = (n - this.radius) * 0.5;
      this.center.addScaledVector(Si, i / n), (this.radius += i);
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(e), this)
      : (this.center.equals(e.center) === !0
          ? (this.radius = Math.max(this.radius, e.radius))
          : (Jr.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(Si.copy(e.center).add(Jr)),
            this.expandByPoint(Si.copy(e.center).sub(Jr))),
        this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Jt = new L(),
  es = new L(),
  tr = new L(),
  cn = new L(),
  ts = new L(),
  nr = new L(),
  ns = new L();
class Us {
  constructor(e = new L(), t = new L(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.direction).multiplyScalar(e).add(this.origin);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Jt)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.direction).multiplyScalar(n).add(this.origin);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Jt.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (Jt.copy(this.direction).multiplyScalar(t).add(this.origin),
        Jt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    es.copy(e).add(t).multiplyScalar(0.5),
      tr.copy(t).sub(e).normalize(),
      cn.copy(this.origin).sub(es);
    const s = e.distanceTo(t) * 0.5,
      a = -this.direction.dot(tr),
      o = cn.dot(this.direction),
      l = -cn.dot(tr),
      c = cn.lengthSq(),
      u = Math.abs(1 - a * a);
    let h, d, m, _;
    if (u > 0)
      if (((h = a * l - o), (d = a * o - l), (_ = s * u), h >= 0))
        if (d >= -_)
          if (d <= _) {
            const p = 1 / u;
            (h *= p),
              (d *= p),
              (m = h * (h + a * d + 2 * o) + d * (a * h + d + 2 * l) + c);
          } else
            (d = s),
              (h = Math.max(0, -(a * d + o))),
              (m = -h * h + d * (d + 2 * l) + c);
        else
          (d = -s),
            (h = Math.max(0, -(a * d + o))),
            (m = -h * h + d * (d + 2 * l) + c);
      else
        d <= -_
          ? ((h = Math.max(0, -(-a * s + o))),
            (d = h > 0 ? -s : Math.min(Math.max(-s, -l), s)),
            (m = -h * h + d * (d + 2 * l) + c))
          : d <= _
          ? ((h = 0),
            (d = Math.min(Math.max(-s, -l), s)),
            (m = d * (d + 2 * l) + c))
          : ((h = Math.max(0, -(a * s + o))),
            (d = h > 0 ? s : Math.min(Math.max(-s, -l), s)),
            (m = -h * h + d * (d + 2 * l) + c));
    else
      (d = a > 0 ? -s : s),
        (h = Math.max(0, -(a * d + o))),
        (m = -h * h + d * (d + 2 * l) + c);
    return (
      n && n.copy(this.direction).multiplyScalar(h).add(this.origin),
      i && i.copy(tr).multiplyScalar(d).add(es),
      m
    );
  }
  intersectSphere(e, t) {
    Jt.subVectors(e.center, this.origin);
    const n = Jt.dot(this.direction),
      i = Jt.dot(Jt) - n * n,
      s = e.radius * e.radius;
    if (i > s) return null;
    const a = Math.sqrt(s - i),
      o = n - a,
      l = n + a;
    return o < 0 && l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, s, a, o, l;
    const c = 1 / this.direction.x,
      u = 1 / this.direction.y,
      h = 1 / this.direction.z,
      d = this.origin;
    return (
      c >= 0
        ? ((n = (e.min.x - d.x) * c), (i = (e.max.x - d.x) * c))
        : ((n = (e.max.x - d.x) * c), (i = (e.min.x - d.x) * c)),
      u >= 0
        ? ((s = (e.min.y - d.y) * u), (a = (e.max.y - d.y) * u))
        : ((s = (e.max.y - d.y) * u), (a = (e.min.y - d.y) * u)),
      n > a ||
      s > i ||
      ((s > n || isNaN(n)) && (n = s),
      (a < i || isNaN(i)) && (i = a),
      h >= 0
        ? ((o = (e.min.z - d.z) * h), (l = (e.max.z - d.z) * h))
        : ((o = (e.max.z - d.z) * h), (l = (e.min.z - d.z) * h)),
      n > l || o > i) ||
      ((o > n || n !== n) && (n = o), (l < i || i !== i) && (i = l), i < 0)
        ? null
        : this.at(n >= 0 ? n : i, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, Jt) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    ts.subVectors(t, e), nr.subVectors(n, e), ns.crossVectors(ts, nr);
    let a = this.direction.dot(ns),
      o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0) (o = -1), (a = -a);
    else return null;
    cn.subVectors(this.origin, e);
    const l = o * this.direction.dot(nr.crossVectors(cn, nr));
    if (l < 0) return null;
    const c = o * this.direction.dot(ts.cross(cn));
    if (c < 0 || l + c > a) return null;
    const u = -o * cn.dot(ns);
    return u < 0 ? null : this.at(u / a, s);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Qe {
  constructor() {
    (Qe.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }
  set(e, t, n, i, s, a, o, l, c, u, h, d, m, _, p, f) {
    const x = this.elements;
    return (
      (x[0] = e),
      (x[4] = t),
      (x[8] = n),
      (x[12] = i),
      (x[1] = s),
      (x[5] = a),
      (x[9] = o),
      (x[13] = l),
      (x[2] = c),
      (x[6] = u),
      (x[10] = h),
      (x[14] = d),
      (x[3] = m),
      (x[7] = _),
      (x[11] = p),
      (x[15] = f),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Qe().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      i = 1 / Zn.setFromMatrixColumn(e, 0).length(),
      s = 1 / Zn.setFromMatrixColumn(e, 1).length(),
      a = 1 / Zn.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * i),
      (t[1] = n[1] * i),
      (t[2] = n[2] * i),
      (t[3] = 0),
      (t[4] = n[4] * s),
      (t[5] = n[5] * s),
      (t[6] = n[6] * s),
      (t[7] = 0),
      (t[8] = n[8] * a),
      (t[9] = n[9] * a),
      (t[10] = n[10] * a),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      s = e.z,
      a = Math.cos(n),
      o = Math.sin(n),
      l = Math.cos(i),
      c = Math.sin(i),
      u = Math.cos(s),
      h = Math.sin(s);
    if (e.order === 'XYZ') {
      const d = a * u,
        m = a * h,
        _ = o * u,
        p = o * h;
      (t[0] = l * u),
        (t[4] = -l * h),
        (t[8] = c),
        (t[1] = m + _ * c),
        (t[5] = d - p * c),
        (t[9] = -o * l),
        (t[2] = p - d * c),
        (t[6] = _ + m * c),
        (t[10] = a * l);
    } else if (e.order === 'YXZ') {
      const d = l * u,
        m = l * h,
        _ = c * u,
        p = c * h;
      (t[0] = d + p * o),
        (t[4] = _ * o - m),
        (t[8] = a * c),
        (t[1] = a * h),
        (t[5] = a * u),
        (t[9] = -o),
        (t[2] = m * o - _),
        (t[6] = p + d * o),
        (t[10] = a * l);
    } else if (e.order === 'ZXY') {
      const d = l * u,
        m = l * h,
        _ = c * u,
        p = c * h;
      (t[0] = d - p * o),
        (t[4] = -a * h),
        (t[8] = _ + m * o),
        (t[1] = m + _ * o),
        (t[5] = a * u),
        (t[9] = p - d * o),
        (t[2] = -a * c),
        (t[6] = o),
        (t[10] = a * l);
    } else if (e.order === 'ZYX') {
      const d = a * u,
        m = a * h,
        _ = o * u,
        p = o * h;
      (t[0] = l * u),
        (t[4] = _ * c - m),
        (t[8] = d * c + p),
        (t[1] = l * h),
        (t[5] = p * c + d),
        (t[9] = m * c - _),
        (t[2] = -c),
        (t[6] = o * l),
        (t[10] = a * l);
    } else if (e.order === 'YZX') {
      const d = a * l,
        m = a * c,
        _ = o * l,
        p = o * c;
      (t[0] = l * u),
        (t[4] = p - d * h),
        (t[8] = _ * h + m),
        (t[1] = h),
        (t[5] = a * u),
        (t[9] = -o * u),
        (t[2] = -c * u),
        (t[6] = m * h + _),
        (t[10] = d - p * h);
    } else if (e.order === 'XZY') {
      const d = a * l,
        m = a * c,
        _ = o * l,
        p = o * c;
      (t[0] = l * u),
        (t[4] = -h),
        (t[8] = c * u),
        (t[1] = d * h + p),
        (t[5] = a * u),
        (t[9] = m * h - _),
        (t[2] = _ * h - m),
        (t[6] = o * u),
        (t[10] = p * h + d);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Ec, e, Tc);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return (
      Ct.subVectors(e, t),
      Ct.lengthSq() === 0 && (Ct.z = 1),
      Ct.normalize(),
      un.crossVectors(n, Ct),
      un.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (Ct.x += 1e-4) : (Ct.z += 1e-4),
        Ct.normalize(),
        un.crossVectors(n, Ct)),
      un.normalize(),
      ir.crossVectors(Ct, un),
      (i[0] = un.x),
      (i[4] = ir.x),
      (i[8] = Ct.x),
      (i[1] = un.y),
      (i[5] = ir.y),
      (i[9] = Ct.y),
      (i[2] = un.z),
      (i[6] = ir.z),
      (i[10] = Ct.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      s = this.elements,
      a = n[0],
      o = n[4],
      l = n[8],
      c = n[12],
      u = n[1],
      h = n[5],
      d = n[9],
      m = n[13],
      _ = n[2],
      p = n[6],
      f = n[10],
      x = n[14],
      b = n[3],
      v = n[7],
      S = n[11],
      y = n[15],
      C = i[0],
      I = i[4],
      g = i[8],
      T = i[12],
      P = i[1],
      G = i[5],
      $ = i[9],
      O = i[13],
      R = i[2],
      B = i[6],
      Q = i[10],
      K = i[14],
      q = i[3],
      J = i[7],
      ee = i[11],
      k = i[15];
    return (
      (s[0] = a * C + o * P + l * R + c * q),
      (s[4] = a * I + o * G + l * B + c * J),
      (s[8] = a * g + o * $ + l * Q + c * ee),
      (s[12] = a * T + o * O + l * K + c * k),
      (s[1] = u * C + h * P + d * R + m * q),
      (s[5] = u * I + h * G + d * B + m * J),
      (s[9] = u * g + h * $ + d * Q + m * ee),
      (s[13] = u * T + h * O + d * K + m * k),
      (s[2] = _ * C + p * P + f * R + x * q),
      (s[6] = _ * I + p * G + f * B + x * J),
      (s[10] = _ * g + p * $ + f * Q + x * ee),
      (s[14] = _ * T + p * O + f * K + x * k),
      (s[3] = b * C + v * P + S * R + y * q),
      (s[7] = b * I + v * G + S * B + y * J),
      (s[11] = b * g + v * $ + S * Q + y * ee),
      (s[15] = b * T + v * O + S * K + y * k),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      i = e[8],
      s = e[12],
      a = e[1],
      o = e[5],
      l = e[9],
      c = e[13],
      u = e[2],
      h = e[6],
      d = e[10],
      m = e[14],
      _ = e[3],
      p = e[7],
      f = e[11],
      x = e[15];
    return (
      _ *
        (+s * l * h -
          i * c * h -
          s * o * d +
          n * c * d +
          i * o * m -
          n * l * m) +
      p *
        (+t * l * m -
          t * c * d +
          s * a * d -
          i * a * m +
          i * c * u -
          s * l * u) +
      f *
        (+t * c * h -
          t * o * m -
          s * a * h +
          n * a * m +
          s * o * u -
          n * c * u) +
      x *
        (-i * o * u - t * l * h + t * o * d + i * a * h - n * a * d + n * l * u)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return (
      e.isVector3
        ? ((i[12] = e.x), (i[13] = e.y), (i[14] = e.z))
        : ((i[12] = e), (i[13] = t), (i[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      h = e[9],
      d = e[10],
      m = e[11],
      _ = e[12],
      p = e[13],
      f = e[14],
      x = e[15],
      b = h * f * c - p * d * c + p * l * m - o * f * m - h * l * x + o * d * x,
      v = _ * d * c - u * f * c - _ * l * m + a * f * m + u * l * x - a * d * x,
      S = u * p * c - _ * h * c + _ * o * m - a * p * m - u * o * x + a * h * x,
      y = _ * h * l - u * p * l - _ * o * d + a * p * d + u * o * f - a * h * f,
      C = t * b + n * v + i * S + s * y;
    if (C === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const I = 1 / C;
    return (
      (e[0] = b * I),
      (e[1] =
        (p * d * s -
          h * f * s -
          p * i * m +
          n * f * m +
          h * i * x -
          n * d * x) *
        I),
      (e[2] =
        (o * f * s -
          p * l * s +
          p * i * c -
          n * f * c -
          o * i * x +
          n * l * x) *
        I),
      (e[3] =
        (h * l * s -
          o * d * s -
          h * i * c +
          n * d * c +
          o * i * m -
          n * l * m) *
        I),
      (e[4] = v * I),
      (e[5] =
        (u * f * s -
          _ * d * s +
          _ * i * m -
          t * f * m -
          u * i * x +
          t * d * x) *
        I),
      (e[6] =
        (_ * l * s -
          a * f * s -
          _ * i * c +
          t * f * c +
          a * i * x -
          t * l * x) *
        I),
      (e[7] =
        (a * d * s -
          u * l * s +
          u * i * c -
          t * d * c -
          a * i * m +
          t * l * m) *
        I),
      (e[8] = S * I),
      (e[9] =
        (_ * h * s -
          u * p * s -
          _ * n * m +
          t * p * m +
          u * n * x -
          t * h * x) *
        I),
      (e[10] =
        (a * p * s -
          _ * o * s +
          _ * n * c -
          t * p * c -
          a * n * x +
          t * o * x) *
        I),
      (e[11] =
        (u * o * s -
          a * h * s -
          u * n * c +
          t * h * c +
          a * n * m -
          t * o * m) *
        I),
      (e[12] = y * I),
      (e[13] =
        (u * p * i -
          _ * h * i +
          _ * n * d -
          t * p * d -
          u * n * f +
          t * h * f) *
        I),
      (e[14] =
        (_ * o * i -
          a * p * i -
          _ * n * l +
          t * p * l +
          a * n * f -
          t * o * f) *
        I),
      (e[15] =
        (a * h * i -
          u * o * i +
          u * n * l -
          t * h * l -
          a * n * d +
          t * o * d) *
        I),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      s = e.z;
    return (
      (t[0] *= n),
      (t[4] *= i),
      (t[8] *= s),
      (t[1] *= n),
      (t[5] *= i),
      (t[9] *= s),
      (t[2] *= n),
      (t[6] *= i),
      (t[10] *= s),
      (t[3] *= n),
      (t[7] *= i),
      (t[11] *= s),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      s = 1 - n,
      a = e.x,
      o = e.y,
      l = e.z,
      c = s * a,
      u = s * o;
    return (
      this.set(
        c * a + n,
        c * o - i * l,
        c * l + i * o,
        0,
        c * o + i * l,
        u * o + n,
        u * l - i * a,
        0,
        c * l - i * o,
        u * l + i * a,
        s * l * l + n,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, i, s, a) {
    return this.set(1, n, s, 0, e, 1, a, 0, t, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const i = this.elements,
      s = t._x,
      a = t._y,
      o = t._z,
      l = t._w,
      c = s + s,
      u = a + a,
      h = o + o,
      d = s * c,
      m = s * u,
      _ = s * h,
      p = a * u,
      f = a * h,
      x = o * h,
      b = l * c,
      v = l * u,
      S = l * h,
      y = n.x,
      C = n.y,
      I = n.z;
    return (
      (i[0] = (1 - (p + x)) * y),
      (i[1] = (m + S) * y),
      (i[2] = (_ - v) * y),
      (i[3] = 0),
      (i[4] = (m - S) * C),
      (i[5] = (1 - (d + x)) * C),
      (i[6] = (f + b) * C),
      (i[7] = 0),
      (i[8] = (_ + v) * I),
      (i[9] = (f - b) * I),
      (i[10] = (1 - (d + p)) * I),
      (i[11] = 0),
      (i[12] = e.x),
      (i[13] = e.y),
      (i[14] = e.z),
      (i[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = Zn.set(i[0], i[1], i[2]).length();
    const a = Zn.set(i[4], i[5], i[6]).length(),
      o = Zn.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s),
      (e.x = i[12]),
      (e.y = i[13]),
      (e.z = i[14]),
      Bt.copy(this);
    const c = 1 / s,
      u = 1 / a,
      h = 1 / o;
    return (
      (Bt.elements[0] *= c),
      (Bt.elements[1] *= c),
      (Bt.elements[2] *= c),
      (Bt.elements[4] *= u),
      (Bt.elements[5] *= u),
      (Bt.elements[6] *= u),
      (Bt.elements[8] *= h),
      (Bt.elements[9] *= h),
      (Bt.elements[10] *= h),
      t.setFromRotationMatrix(Bt),
      (n.x = s),
      (n.y = a),
      (n.z = o),
      this
    );
  }
  makePerspective(e, t, n, i, s, a) {
    const o = this.elements,
      l = (2 * s) / (t - e),
      c = (2 * s) / (n - i),
      u = (t + e) / (t - e),
      h = (n + i) / (n - i),
      d = -(a + s) / (a - s),
      m = (-2 * a * s) / (a - s);
    return (
      (o[0] = l),
      (o[4] = 0),
      (o[8] = u),
      (o[12] = 0),
      (o[1] = 0),
      (o[5] = c),
      (o[9] = h),
      (o[13] = 0),
      (o[2] = 0),
      (o[6] = 0),
      (o[10] = d),
      (o[14] = m),
      (o[3] = 0),
      (o[7] = 0),
      (o[11] = -1),
      (o[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, i, s, a) {
    const o = this.elements,
      l = 1 / (t - e),
      c = 1 / (n - i),
      u = 1 / (a - s),
      h = (t + e) * l,
      d = (n + i) * c,
      m = (a + s) * u;
    return (
      (o[0] = 2 * l),
      (o[4] = 0),
      (o[8] = 0),
      (o[12] = -h),
      (o[1] = 0),
      (o[5] = 2 * c),
      (o[9] = 0),
      (o[13] = -d),
      (o[2] = 0),
      (o[6] = 0),
      (o[10] = -2 * u),
      (o[14] = -m),
      (o[3] = 0),
      (o[7] = 0),
      (o[11] = 0),
      (o[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const Zn = new L(),
  Bt = new Qe(),
  Ec = new L(0, 0, 0),
  Tc = new L(1, 1, 1),
  un = new L(),
  ir = new L(),
  Ct = new L(),
  Da = new Qe(),
  Ra = new ut();
class xi {
  constructor(e = 0, t = 0, n = 0, i = xi.DefaultOrder) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements,
      s = i[0],
      a = i[4],
      o = i[8],
      l = i[1],
      c = i[5],
      u = i[9],
      h = i[2],
      d = i[6],
      m = i[10];
    switch (t) {
      case 'XYZ':
        (this._y = Math.asin(St(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-u, m)), (this._z = Math.atan2(-a, s)))
            : ((this._x = Math.atan2(d, c)), (this._z = 0));
        break;
      case 'YXZ':
        (this._x = Math.asin(-St(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(o, m)), (this._z = Math.atan2(l, c)))
            : ((this._y = Math.atan2(-h, s)), (this._z = 0));
        break;
      case 'ZXY':
        (this._x = Math.asin(St(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._y = Math.atan2(-h, m)), (this._z = Math.atan2(-a, c)))
            : ((this._y = 0), (this._z = Math.atan2(l, s)));
        break;
      case 'ZYX':
        (this._y = Math.asin(-St(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._x = Math.atan2(d, m)), (this._z = Math.atan2(l, s)))
            : ((this._x = 0), (this._z = Math.atan2(-a, c)));
        break;
      case 'YZX':
        (this._z = Math.asin(St(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._x = Math.atan2(-u, c)), (this._y = Math.atan2(-h, s)))
            : ((this._x = 0), (this._y = Math.atan2(o, m)));
        break;
      case 'XZY':
        (this._z = Math.asin(-St(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(d, c)), (this._y = Math.atan2(o, s)))
            : ((this._x = Math.atan2(-u, m)), (this._y = 0));
        break;
      default:
        console.warn(
          'THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' +
            t,
        );
    }
    return (this._order = t), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      Da.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Da, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Ra.setFromEuler(this), this.setFromQuaternion(Ra, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
  toVector3() {
    console.error(
      'THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead',
    );
  }
}
xi.DefaultOrder = 'XYZ';
xi.RotationOrders = ['XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX'];
class Bs {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let Ac = 0;
const Ia = new L(),
  $n = new ut(),
  en = new Qe(),
  rr = new L(),
  wi = new L(),
  Cc = new L(),
  Lc = new ut(),
  Oa = new L(1, 0, 0),
  Fa = new L(0, 1, 0),
  Na = new L(0, 0, 1),
  Pc = { type: 'added' },
  za = { type: 'removed' };
class lt extends Gn {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, 'id', { value: Ac++ }),
      (this.uuid = qi()),
      (this.name = ''),
      (this.type = 'Object3D'),
      (this.parent = null),
      (this.children = []),
      (this.up = lt.DefaultUp.clone());
    const e = new L(),
      t = new xi(),
      n = new ut(),
      i = new L(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s),
      n._onChange(a),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: i },
        modelViewMatrix: { value: new Qe() },
        normalMatrix: { value: new Pt() },
      }),
      (this.matrix = new Qe()),
      (this.matrixWorld = new Qe()),
      (this.matrixAutoUpdate = lt.DefaultMatrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = !1),
      (this.matrixWorldAutoUpdate = lt.DefaultMatrixWorldAutoUpdate),
      (this.layers = new Bs()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return $n.setFromAxisAngle(e, t), this.quaternion.multiply($n), this;
  }
  rotateOnWorldAxis(e, t) {
    return $n.setFromAxisAngle(e, t), this.quaternion.premultiply($n), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Oa, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Fa, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Na, e);
  }
  translateOnAxis(e, t) {
    return (
      Ia.copy(e).applyQuaternion(this.quaternion),
      this.position.add(Ia.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(Oa, e);
  }
  translateY(e) {
    return this.translateOnAxis(Fa, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Na, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(en.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, n) {
    e.isVector3 ? rr.copy(e) : rr.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1),
      wi.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? en.lookAt(wi, rr, this.up)
        : en.lookAt(rr, wi, this.up),
      this.quaternion.setFromRotationMatrix(en),
      i &&
        (en.extractRotation(i.matrixWorld),
        $n.setFromRotationMatrix(en),
        this.quaternion.premultiply($n.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e,
        ),
        this)
      : (e && e.isObject3D
          ? (e.parent !== null && e.parent.remove(e),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(Pc))
          : console.error(
              'THREE.Object3D.add: object not an instance of THREE.Object3D.',
              e,
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(za)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      (t.parent = null), t.dispatchEvent(za);
    }
    return (this.children.length = 0), this;
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      en.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), en.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(en),
      this.add(e),
      e.updateWorldMatrix(!1, !0),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty('id', e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty('name', e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let i = 0, s = this.children.length; i < s; i++) {
      const a = this.children[i].getObjectsByProperty(e, t);
      a.length > 0 && (n = n.concat(a));
    }
    return n;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(wi, e, Cc), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(wi, Lc, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix,
            ),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 &&
        n !== null &&
        n.matrixWorldAutoUpdate === !0 &&
        n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.parent === null
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix,
          ),
      t === !0)
    ) {
      const i = this.children;
      for (let s = 0, a = i.length; s < a; s++) {
        const o = i[s];
        o.matrixWorldAutoUpdate === !0 && o.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == 'string',
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.5,
        type: 'Object',
        generator: 'Object3D.toJSON',
      }));
    const i = {};
    (i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== '' && (i.name = this.name),
      this.castShadow === !0 && (i.castShadow = !0),
      this.receiveShadow === !0 && (i.receiveShadow = !0),
      this.visible === !1 && (i.visible = !1),
      this.frustumCulled === !1 && (i.frustumCulled = !1),
      this.renderOrder !== 0 && (i.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      (i.layers = this.layers.mask),
      (i.matrix = this.matrix.toArray()),
      this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((i.type = 'InstancedMesh'),
        (i.count = this.count),
        (i.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (i.instanceColor = this.instanceColor.toJSON()));
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (i.background = this.background.toJSON())
          : this.background.isTexture &&
            (i.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, u = l.length; c < u; c++) {
            const h = l[c];
            s(e.shapes, h);
          }
        else s(e.shapes, l);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((i.bindMode = this.bindMode),
        (i.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (s(e.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(s(e.materials, this.material[l]));
        i.material = o;
      } else i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        i.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries),
        l = a(e.materials),
        c = a(e.textures),
        u = a(e.images),
        h = a(e.shapes),
        d = a(e.skeletons),
        m = a(e.animations),
        _ = a(e.nodes);
      o.length > 0 && (n.geometries = o),
        l.length > 0 && (n.materials = l),
        c.length > 0 && (n.textures = c),
        u.length > 0 && (n.images = u),
        h.length > 0 && (n.shapes = h),
        d.length > 0 && (n.skeletons = d),
        m.length > 0 && (n.animations = m),
        _.length > 0 && (n.nodes = _);
    }
    return (n.object = i), n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const u = o[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
lt.DefaultUp = new L(0, 1, 0);
lt.DefaultMatrixAutoUpdate = !0;
lt.DefaultMatrixWorldAutoUpdate = !0;
const kt = new L(),
  tn = new L(),
  is = new L(),
  nn = new L(),
  Kn = new L(),
  Qn = new L(),
  Ua = new L(),
  rs = new L(),
  ss = new L(),
  as = new L();
class sn {
  constructor(e = new L(), t = new L(), n = new L()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), kt.subVectors(e, t), i.cross(kt);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, s) {
    kt.subVectors(i, t), tn.subVectors(n, t), is.subVectors(e, t);
    const a = kt.dot(kt),
      o = kt.dot(tn),
      l = kt.dot(is),
      c = tn.dot(tn),
      u = tn.dot(is),
      h = a * c - o * o;
    if (h === 0) return s.set(-2, -1, -1);
    const d = 1 / h,
      m = (c * l - o * u) * d,
      _ = (a * u - o * l) * d;
    return s.set(1 - m - _, _, m);
  }
  static containsPoint(e, t, n, i) {
    return (
      this.getBarycoord(e, t, n, i, nn),
      nn.x >= 0 && nn.y >= 0 && nn.x + nn.y <= 1
    );
  }
  static getUV(e, t, n, i, s, a, o, l) {
    return (
      this.getBarycoord(e, t, n, i, nn),
      l.set(0, 0),
      l.addScaledVector(s, nn.x),
      l.addScaledVector(a, nn.y),
      l.addScaledVector(o, nn.z),
      l
    );
  }
  static isFrontFacing(e, t, n, i) {
    return kt.subVectors(n, t), tn.subVectors(e, t), kt.cross(tn).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, i),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      kt.subVectors(this.c, this.b),
      tn.subVectors(this.a, this.b),
      kt.cross(tn).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return sn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return sn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, s) {
    return sn.getUV(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return sn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return sn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      i = this.b,
      s = this.c;
    let a, o;
    Kn.subVectors(i, n), Qn.subVectors(s, n), rs.subVectors(e, n);
    const l = Kn.dot(rs),
      c = Qn.dot(rs);
    if (l <= 0 && c <= 0) return t.copy(n);
    ss.subVectors(e, i);
    const u = Kn.dot(ss),
      h = Qn.dot(ss);
    if (u >= 0 && h <= u) return t.copy(i);
    const d = l * h - u * c;
    if (d <= 0 && l >= 0 && u <= 0)
      return (a = l / (l - u)), t.copy(n).addScaledVector(Kn, a);
    as.subVectors(e, s);
    const m = Kn.dot(as),
      _ = Qn.dot(as);
    if (_ >= 0 && m <= _) return t.copy(s);
    const p = m * c - l * _;
    if (p <= 0 && c >= 0 && _ <= 0)
      return (o = c / (c - _)), t.copy(n).addScaledVector(Qn, o);
    const f = u * _ - m * h;
    if (f <= 0 && h - u >= 0 && m - _ >= 0)
      return (
        Ua.subVectors(s, i),
        (o = (h - u) / (h - u + (m - _))),
        t.copy(i).addScaledVector(Ua, o)
      );
    const x = 1 / (f + p + d);
    return (
      (a = p * x),
      (o = d * x),
      t.copy(n).addScaledVector(Kn, a).addScaledVector(Qn, o)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let Dc = 0;
class vi extends Gn {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, 'id', { value: Dc++ }),
      (this.uuid = qi()),
      (this.name = ''),
      (this.type = 'Material'),
      (this.blending = hi),
      (this.side = Nn),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.blendSrc = Bo),
      (this.blendDst = ko),
      (this.blendEquation = si),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.depthFunc = bs),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = yc),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = Vr),
      (this.stencilZFail = Vr),
      (this.stencilZPass = Vr),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(
            'THREE.' +
              this.type +
              ": '" +
              t +
              "' is not a property of this material.",
          );
          continue;
        }
        i && i.isColor
          ? i.set(n)
          : i && i.isVector3 && n && n.isVector3
          ? i.copy(n)
          : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == 'string';
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.5,
        type: 'Material',
        generator: 'Material.toJSON',
      },
    };
    (n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== '' && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== hi && (n.blending = this.blending),
      this.side !== Nn && (n.side = this.side),
      this.vertexColors && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = this.transparent),
      (n.depthFunc = this.depthFunc),
      (n.depthTest = this.depthTest),
      (n.depthWrite = this.depthWrite),
      (n.colorWrite = this.colorWrite),
      (n.stencilWrite = this.stencilWrite),
      (n.stencilWriteMask = this.stencilWriteMask),
      (n.stencilFunc = this.stencilFunc),
      (n.stencilRef = this.stencilRef),
      (n.stencilFuncMask = this.stencilFuncMask),
      (n.stencilFail = this.stencilFail),
      (n.stencilZFail = this.stencilZFail),
      (n.stencilZPass = this.stencilZPass),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage),
      this.premultipliedAlpha === !0 &&
        (n.premultipliedAlpha = this.premultipliedAlpha),
      this.wireframe === !0 && (n.wireframe = this.wireframe),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== 'round' &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== 'round' &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = this.flatShading),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(s) {
      const a = [];
      for (const o in s) {
        const l = s[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (t) {
      const s = i(e.textures),
        a = i(e.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s) n[s] = t[s].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: 'dispose' });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class Lr extends vi {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = 'MeshBasicMaterial'),
      (this.color = new Be(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = Go),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = 'round'),
      (this.wireframeLinejoin = 'round'),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const $e = new L(),
  sr = new we();
class Zt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError(
        'THREE.BufferAttribute: array should be a Typed Array.',
      );
    (this.isBufferAttribute = !0),
      (this.name = ''),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = Ta),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let i = 0, s = this.itemSize; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        sr.fromBufferAttribute(this, t),
          sr.applyMatrix3(e),
          this.setXY(t, sr.x, sr.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        $e.fromBufferAttribute(this, t),
          $e.applyMatrix3(e),
          this.setXYZ(t, $e.x, $e.y, $e.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      $e.fromBufferAttribute(this, t),
        $e.applyMatrix4(e),
        this.setXYZ(t, $e.x, $e.y, $e.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      $e.fromBufferAttribute(this, t),
        $e.applyNormalMatrix(e),
        this.setXYZ(t, $e.x, $e.y, $e.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      $e.fromBufferAttribute(this, t),
        $e.transformDirection(e),
        this.setXYZ(t, $e.x, $e.y, $e.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = $i(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = At(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = $i(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = At(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = $i(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = At(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = $i(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = At(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = At(t, this.array)), (n = At(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = At(t, this.array)),
        (n = At(n, this.array)),
        (i = At(i, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, s) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = At(t, this.array)),
        (n = At(n, this.array)),
        (i = At(i, this.array)),
        (s = At(s, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      (this.array[e + 3] = s),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== '' && (e.name = this.name),
      this.usage !== Ta && (e.usage = this.usage),
      (this.updateRange.offset !== 0 || this.updateRange.count !== -1) &&
        (e.updateRange = this.updateRange),
      e
    );
  }
  copyColorsArray() {
    console.error(
      'THREE.BufferAttribute: copyColorsArray() was removed in r144.',
    );
  }
  copyVector2sArray() {
    console.error(
      'THREE.BufferAttribute: copyVector2sArray() was removed in r144.',
    );
  }
  copyVector3sArray() {
    console.error(
      'THREE.BufferAttribute: copyVector3sArray() was removed in r144.',
    );
  }
  copyVector4sArray() {
    console.error(
      'THREE.BufferAttribute: copyVector4sArray() was removed in r144.',
    );
  }
}
class $o extends Zt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Ko extends Zt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class We extends Zt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Rc = 0;
const Ot = new Qe(),
  os = new lt(),
  Jn = new L(),
  Lt = new Yi(),
  Ei = new Yi(),
  ot = new L();
class yt extends Gn {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, 'id', { value: Rc++ }),
      (this.uuid = qi()),
      (this.name = ''),
      (this.type = 'BufferGeometry'),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (Xo(e) ? Ko : $o)(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Pt().getNormalMatrix(e);
      n.applyNormalMatrix(s), (n.needsUpdate = !0);
    }
    const i = this.attributes.tangent;
    return (
      i !== void 0 && (i.transformDirection(e), (i.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return Ot.makeRotationFromQuaternion(e), this.applyMatrix4(Ot), this;
  }
  rotateX(e) {
    return Ot.makeRotationX(e), this.applyMatrix4(Ot), this;
  }
  rotateY(e) {
    return Ot.makeRotationY(e), this.applyMatrix4(Ot), this;
  }
  rotateZ(e) {
    return Ot.makeRotationZ(e), this.applyMatrix4(Ot), this;
  }
  translate(e, t, n) {
    return Ot.makeTranslation(e, t, n), this.applyMatrix4(Ot), this;
  }
  scale(e, t, n) {
    return Ot.makeScale(e, t, n), this.applyMatrix4(Ot), this;
  }
  lookAt(e) {
    return os.lookAt(e), os.updateMatrix(), this.applyMatrix4(os.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(Jn).negate(),
      this.translate(Jn.x, Jn.y, Jn.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute('position', new We(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Yi());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
        this,
      ),
        this.boundingBox.set(
          new L(-1 / 0, -1 / 0, -1 / 0),
          new L(1 / 0, 1 / 0, 1 / 0),
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          Lt.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (ot.addVectors(this.boundingBox.min, Lt.min),
                this.boundingBox.expandByPoint(ot),
                ot.addVectors(this.boundingBox.max, Lt.max),
                this.boundingBox.expandByPoint(ot))
              : (this.boundingBox.expandByPoint(Lt.min),
                this.boundingBox.expandByPoint(Lt.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this,
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Cr());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
        this,
      ),
        this.boundingSphere.set(new L(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((Lt.setFromBufferAttribute(e), t))
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          Ei.setFromBufferAttribute(o),
            this.morphTargetsRelative
              ? (ot.addVectors(Lt.min, Ei.min),
                Lt.expandByPoint(ot),
                ot.addVectors(Lt.max, Ei.max),
                Lt.expandByPoint(ot))
              : (Lt.expandByPoint(Ei.min), Lt.expandByPoint(Ei.max));
        }
      Lt.getCenter(n);
      let i = 0;
      for (let s = 0, a = e.count; s < a; s++)
        ot.fromBufferAttribute(e, s),
          (i = Math.max(i, n.distanceToSquared(ot)));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s],
            l = this.morphTargetsRelative;
          for (let c = 0, u = o.count; c < u; c++)
            ot.fromBufferAttribute(o, c),
              l && (Jn.fromBufferAttribute(e, c), ot.add(Jn)),
              (i = Math.max(i, n.distanceToSquared(ot)));
        }
      (this.boundingSphere.radius = Math.sqrt(i)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this,
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        'THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)',
      );
      return;
    }
    const n = e.array,
      i = t.position.array,
      s = t.normal.array,
      a = t.uv.array,
      o = i.length / 3;
    this.hasAttribute('tangent') === !1 &&
      this.setAttribute('tangent', new Zt(new Float32Array(4 * o), 4));
    const l = this.getAttribute('tangent').array,
      c = [],
      u = [];
    for (let P = 0; P < o; P++) (c[P] = new L()), (u[P] = new L());
    const h = new L(),
      d = new L(),
      m = new L(),
      _ = new we(),
      p = new we(),
      f = new we(),
      x = new L(),
      b = new L();
    function v(P, G, $) {
      h.fromArray(i, P * 3),
        d.fromArray(i, G * 3),
        m.fromArray(i, $ * 3),
        _.fromArray(a, P * 2),
        p.fromArray(a, G * 2),
        f.fromArray(a, $ * 2),
        d.sub(h),
        m.sub(h),
        p.sub(_),
        f.sub(_);
      const O = 1 / (p.x * f.y - f.x * p.y);
      isFinite(O) &&
        (x
          .copy(d)
          .multiplyScalar(f.y)
          .addScaledVector(m, -p.y)
          .multiplyScalar(O),
        b
          .copy(m)
          .multiplyScalar(p.x)
          .addScaledVector(d, -f.x)
          .multiplyScalar(O),
        c[P].add(x),
        c[G].add(x),
        c[$].add(x),
        u[P].add(b),
        u[G].add(b),
        u[$].add(b));
    }
    let S = this.groups;
    S.length === 0 && (S = [{ start: 0, count: n.length }]);
    for (let P = 0, G = S.length; P < G; ++P) {
      const $ = S[P],
        O = $.start,
        R = $.count;
      for (let B = O, Q = O + R; B < Q; B += 3) v(n[B + 0], n[B + 1], n[B + 2]);
    }
    const y = new L(),
      C = new L(),
      I = new L(),
      g = new L();
    function T(P) {
      I.fromArray(s, P * 3), g.copy(I);
      const G = c[P];
      y.copy(G),
        y.sub(I.multiplyScalar(I.dot(G))).normalize(),
        C.crossVectors(g, G);
      const O = C.dot(u[P]) < 0 ? -1 : 1;
      (l[P * 4] = y.x),
        (l[P * 4 + 1] = y.y),
        (l[P * 4 + 2] = y.z),
        (l[P * 4 + 3] = O);
    }
    for (let P = 0, G = S.length; P < G; ++P) {
      const $ = S[P],
        O = $.start,
        R = $.count;
      for (let B = O, Q = O + R; B < Q; B += 3)
        T(n[B + 0]), T(n[B + 1]), T(n[B + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute('position');
    if (t !== void 0) {
      let n = this.getAttribute('normal');
      if (n === void 0)
        (n = new Zt(new Float32Array(t.count * 3), 3)),
          this.setAttribute('normal', n);
      else for (let d = 0, m = n.count; d < m; d++) n.setXYZ(d, 0, 0, 0);
      const i = new L(),
        s = new L(),
        a = new L(),
        o = new L(),
        l = new L(),
        c = new L(),
        u = new L(),
        h = new L();
      if (e)
        for (let d = 0, m = e.count; d < m; d += 3) {
          const _ = e.getX(d + 0),
            p = e.getX(d + 1),
            f = e.getX(d + 2);
          i.fromBufferAttribute(t, _),
            s.fromBufferAttribute(t, p),
            a.fromBufferAttribute(t, f),
            u.subVectors(a, s),
            h.subVectors(i, s),
            u.cross(h),
            o.fromBufferAttribute(n, _),
            l.fromBufferAttribute(n, p),
            c.fromBufferAttribute(n, f),
            o.add(u),
            l.add(u),
            c.add(u),
            n.setXYZ(_, o.x, o.y, o.z),
            n.setXYZ(p, l.x, l.y, l.z),
            n.setXYZ(f, c.x, c.y, c.z);
        }
      else
        for (let d = 0, m = t.count; d < m; d += 3)
          i.fromBufferAttribute(t, d + 0),
            s.fromBufferAttribute(t, d + 1),
            a.fromBufferAttribute(t, d + 2),
            u.subVectors(a, s),
            h.subVectors(i, s),
            u.cross(h),
            n.setXYZ(d + 0, u.x, u.y, u.z),
            n.setXYZ(d + 1, u.x, u.y, u.z),
            n.setXYZ(d + 2, u.x, u.y, u.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  merge() {
    return (
      console.error(
        'THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead.',
      ),
      this
    );
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      ot.fromBufferAttribute(e, t),
        ot.normalize(),
        e.setXYZ(t, ot.x, ot.y, ot.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array,
        u = o.itemSize,
        h = o.normalized,
        d = new c.constructor(l.length * u);
      let m = 0,
        _ = 0;
      for (let p = 0, f = l.length; p < f; p++) {
        o.isInterleavedBufferAttribute
          ? (m = l[p] * o.data.stride + o.offset)
          : (m = l[p] * u);
        for (let x = 0; x < u; x++) d[_++] = c[m++];
      }
      return new Zt(d, u, h);
    }
    if (this.index === null)
      return (
        console.warn(
          'THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.',
        ),
        this
      );
    const t = new yt(),
      n = this.index.array,
      i = this.attributes;
    for (const o in i) {
      const l = i[o],
        c = e(l, n);
      t.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [],
        c = s[o];
      for (let u = 0, h = c.length; u < h; u++) {
        const d = c[u],
          m = e(d, n);
        l.push(m);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: 'BufferGeometry',
        generator: 'BufferGeometry.toJSON',
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== '' && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const i = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l],
        u = [];
      for (let h = 0, d = c.length; h < d; h++) {
        const m = c[h];
        u.push(m.toJSON(e.data));
      }
      u.length > 0 && ((i[l] = u), (s = !0));
    }
    s &&
      ((e.data.morphAttributes = i),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return (
      o !== null &&
        (e.data.boundingSphere = {
          center: o.center.toArray(),
          radius: o.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const c in i) {
      const u = i[c];
      this.setAttribute(c, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const u = [],
        h = s[c];
      for (let d = 0, m = h.length; d < m; d++) u.push(h[d].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, u = a.length; c < u; c++) {
      const h = a[c];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return (
      l !== null && (this.boundingSphere = l.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      e.parameters !== void 0 &&
        (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: 'dispose' });
  }
}
const Ba = new Qe(),
  ei = new Us(),
  ls = new Cr(),
  Ti = new L(),
  Ai = new L(),
  Ci = new L(),
  cs = new L(),
  ar = new L(),
  or = new we(),
  lr = new we(),
  cr = new we(),
  us = new L(),
  ur = new L();
class ce extends lt {
  constructor(e = new yt(), t = new Lr()) {
    super(),
      (this.isMesh = !0),
      (this.type = 'Mesh'),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary,
        )),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = s);
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry,
      i = n.attributes.position,
      s = n.morphAttributes.position,
      a = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      ar.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const u = o[l],
          h = s[l];
        u !== 0 &&
          (cs.fromBufferAttribute(h, e),
          a ? ar.addScaledVector(cs, u) : ar.addScaledVector(cs.sub(t), u));
      }
      t.add(ar);
    }
    return this.isSkinnedMesh && this.boneTransform(e, t), t;
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.material,
      s = this.matrixWorld;
    if (
      i === void 0 ||
      (n.boundingSphere === null && n.computeBoundingSphere(),
      ls.copy(n.boundingSphere),
      ls.applyMatrix4(s),
      e.ray.intersectsSphere(ls) === !1) ||
      (Ba.copy(s).invert(),
      ei.copy(e.ray).applyMatrix4(Ba),
      n.boundingBox !== null && ei.intersectsBox(n.boundingBox) === !1)
    )
      return;
    let a;
    const o = n.index,
      l = n.attributes.position,
      c = n.attributes.uv,
      u = n.attributes.uv2,
      h = n.groups,
      d = n.drawRange;
    if (o !== null)
      if (Array.isArray(i))
        for (let m = 0, _ = h.length; m < _; m++) {
          const p = h[m],
            f = i[p.materialIndex],
            x = Math.max(p.start, d.start),
            b = Math.min(
              o.count,
              Math.min(p.start + p.count, d.start + d.count),
            );
          for (let v = x, S = b; v < S; v += 3) {
            const y = o.getX(v),
              C = o.getX(v + 1),
              I = o.getX(v + 2);
            (a = hr(this, f, e, ei, c, u, y, C, I)),
              a &&
                ((a.faceIndex = Math.floor(v / 3)),
                (a.face.materialIndex = p.materialIndex),
                t.push(a));
          }
        }
      else {
        const m = Math.max(0, d.start),
          _ = Math.min(o.count, d.start + d.count);
        for (let p = m, f = _; p < f; p += 3) {
          const x = o.getX(p),
            b = o.getX(p + 1),
            v = o.getX(p + 2);
          (a = hr(this, i, e, ei, c, u, x, b, v)),
            a && ((a.faceIndex = Math.floor(p / 3)), t.push(a));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(i))
        for (let m = 0, _ = h.length; m < _; m++) {
          const p = h[m],
            f = i[p.materialIndex],
            x = Math.max(p.start, d.start),
            b = Math.min(
              l.count,
              Math.min(p.start + p.count, d.start + d.count),
            );
          for (let v = x, S = b; v < S; v += 3) {
            const y = v,
              C = v + 1,
              I = v + 2;
            (a = hr(this, f, e, ei, c, u, y, C, I)),
              a &&
                ((a.faceIndex = Math.floor(v / 3)),
                (a.face.materialIndex = p.materialIndex),
                t.push(a));
          }
        }
      else {
        const m = Math.max(0, d.start),
          _ = Math.min(l.count, d.start + d.count);
        for (let p = m, f = _; p < f; p += 3) {
          const x = p,
            b = p + 1,
            v = p + 2;
          (a = hr(this, i, e, ei, c, u, x, b, v)),
            a && ((a.faceIndex = Math.floor(p / 3)), t.push(a));
        }
      }
  }
}
function Ic(r, e, t, n, i, s, a, o) {
  let l;
  if (
    (e.side === zt
      ? (l = n.intersectTriangle(a, s, i, !0, o))
      : (l = n.intersectTriangle(i, s, a, e.side === Nn, o)),
    l === null)
  )
    return null;
  ur.copy(o), ur.applyMatrix4(r.matrixWorld);
  const c = t.ray.origin.distanceTo(ur);
  return c < t.near || c > t.far
    ? null
    : { distance: c, point: ur.clone(), object: r };
}
function hr(r, e, t, n, i, s, a, o, l) {
  r.getVertexPosition(a, Ti),
    r.getVertexPosition(o, Ai),
    r.getVertexPosition(l, Ci);
  const c = Ic(r, e, t, n, Ti, Ai, Ci, us);
  if (c) {
    i &&
      (or.fromBufferAttribute(i, a),
      lr.fromBufferAttribute(i, o),
      cr.fromBufferAttribute(i, l),
      (c.uv = sn.getUV(us, Ti, Ai, Ci, or, lr, cr, new we()))),
      s &&
        (or.fromBufferAttribute(s, a),
        lr.fromBufferAttribute(s, o),
        cr.fromBufferAttribute(s, l),
        (c.uv2 = sn.getUV(us, Ti, Ai, Ci, or, lr, cr, new we())));
    const u = { a, b: o, c: l, normal: new L(), materialIndex: 0 };
    sn.getNormal(Ti, Ai, Ci, u.normal), (c.face = u);
  }
  return c;
}
class Ke extends yt {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, a = 1) {
    super(),
      (this.type = 'BoxGeometry'),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: i,
        heightSegments: s,
        depthSegments: a,
      });
    const o = this;
    (i = Math.floor(i)), (s = Math.floor(s)), (a = Math.floor(a));
    const l = [],
      c = [],
      u = [],
      h = [];
    let d = 0,
      m = 0;
    _('z', 'y', 'x', -1, -1, n, t, e, a, s, 0),
      _('z', 'y', 'x', 1, -1, n, t, -e, a, s, 1),
      _('x', 'z', 'y', 1, 1, e, n, t, i, a, 2),
      _('x', 'z', 'y', 1, -1, e, n, -t, i, a, 3),
      _('x', 'y', 'z', 1, -1, e, t, n, i, s, 4),
      _('x', 'y', 'z', -1, -1, e, t, -n, i, s, 5),
      this.setIndex(l),
      this.setAttribute('position', new We(c, 3)),
      this.setAttribute('normal', new We(u, 3)),
      this.setAttribute('uv', new We(h, 2));
    function _(p, f, x, b, v, S, y, C, I, g, T) {
      const P = S / I,
        G = y / g,
        $ = S / 2,
        O = y / 2,
        R = C / 2,
        B = I + 1,
        Q = g + 1;
      let K = 0,
        q = 0;
      const J = new L();
      for (let ee = 0; ee < Q; ee++) {
        const k = ee * G - O;
        for (let H = 0; H < B; H++) {
          const te = H * P - $;
          (J[p] = te * b),
            (J[f] = k * v),
            (J[x] = R),
            c.push(J.x, J.y, J.z),
            (J[p] = 0),
            (J[f] = 0),
            (J[x] = C > 0 ? 1 : -1),
            u.push(J.x, J.y, J.z),
            h.push(H / I),
            h.push(1 - ee / g),
            (K += 1);
        }
      }
      for (let ee = 0; ee < g; ee++)
        for (let k = 0; k < I; k++) {
          const H = d + k + B * ee,
            te = d + k + B * (ee + 1),
            re = d + (k + 1) + B * (ee + 1),
            oe = d + (k + 1) + B * ee;
          l.push(H, te, oe), l.push(te, re, oe), (q += 6);
        }
      o.addGroup(m, q, T), (m += q), (d += K);
    }
  }
  static fromJSON(e) {
    return new Ke(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments,
    );
  }
}
function gi(r) {
  const e = {};
  for (const t in r) {
    e[t] = {};
    for (const n in r[t]) {
      const i = r[t][n];
      i &&
      (i.isColor ||
        i.isMatrix3 ||
        i.isMatrix4 ||
        i.isVector2 ||
        i.isVector3 ||
        i.isVector4 ||
        i.isTexture ||
        i.isQuaternion)
        ? (e[t][n] = i.clone())
        : Array.isArray(i)
        ? (e[t][n] = i.slice())
        : (e[t][n] = i);
    }
  }
  return e;
}
function vt(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const n = gi(r[t]);
    for (const i in n) e[i] = n[i];
  }
  return e;
}
function Oc(r) {
  const e = [];
  for (let t = 0; t < r.length; t++) e.push(r[t].clone());
  return e;
}
function Qo(r) {
  return r.getRenderTarget() === null && r.outputEncoding === Ve ? Gt : Hi;
}
const Fc = { clone: gi, merge: vt };
var Nc = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  zc = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class kn extends vi {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = 'ShaderMaterial'),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = Nc),
      (this.fragmentShader = zc),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1,
      }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = gi(e.uniforms)),
      (this.uniformsGroups = Oc(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture
        ? (t.uniforms[i] = { type: 't', value: a.toJSON(e).uuid })
        : a && a.isColor
        ? (t.uniforms[i] = { type: 'c', value: a.getHex() })
        : a && a.isVector2
        ? (t.uniforms[i] = { type: 'v2', value: a.toArray() })
        : a && a.isVector3
        ? (t.uniforms[i] = { type: 'v3', value: a.toArray() })
        : a && a.isVector4
        ? (t.uniforms[i] = { type: 'v4', value: a.toArray() })
        : a && a.isMatrix3
        ? (t.uniforms[i] = { type: 'm3', value: a.toArray() })
        : a && a.isMatrix4
        ? (t.uniforms[i] = { type: 'm4', value: a.toArray() })
        : (t.uniforms[i] = { value: a });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader);
    const n = {};
    for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Jo extends lt {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = 'Camera'),
      (this.matrixWorldInverse = new Qe()),
      (this.projectionMatrix = new Qe()),
      (this.projectionMatrixInverse = new Qe());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      this
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Nt extends Jo {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = 'PerspectiveCamera'),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = i),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = Ca * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Wr * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return Ca * 2 * Math.atan(Math.tan(Wr * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, i, s, a) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = s),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(Wr * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      i = this.aspect * n,
      s = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth,
        c = a.fullHeight;
      (s += (a.offsetX * i) / l),
        (t -= (a.offsetY * n) / c),
        (i *= a.width / l),
        (n *= a.height / c);
    }
    const o = this.filmOffset;
    o !== 0 && (s += (e * o) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const ti = -90,
  ni = 1;
class Uc extends lt {
  constructor(e, t, n) {
    super(), (this.type = 'CubeCamera'), (this.renderTarget = n);
    const i = new Nt(ti, ni, e, t);
    (i.layers = this.layers), i.up.set(0, 1, 0), i.lookAt(1, 0, 0), this.add(i);
    const s = new Nt(ti, ni, e, t);
    (s.layers = this.layers),
      s.up.set(0, 1, 0),
      s.lookAt(-1, 0, 0),
      this.add(s);
    const a = new Nt(ti, ni, e, t);
    (a.layers = this.layers),
      a.up.set(0, 0, -1),
      a.lookAt(0, 1, 0),
      this.add(a);
    const o = new Nt(ti, ni, e, t);
    (o.layers = this.layers),
      o.up.set(0, 0, 1),
      o.lookAt(0, -1, 0),
      this.add(o);
    const l = new Nt(ti, ni, e, t);
    (l.layers = this.layers), l.up.set(0, 1, 0), l.lookAt(0, 0, 1), this.add(l);
    const c = new Nt(ti, ni, e, t);
    (c.layers = this.layers),
      c.up.set(0, 1, 0),
      c.lookAt(0, 0, -1),
      this.add(c);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget,
      [i, s, a, o, l, c] = this.children,
      u = e.getRenderTarget(),
      h = e.toneMapping,
      d = e.xr.enabled;
    (e.toneMapping = an), (e.xr.enabled = !1);
    const m = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0),
      e.render(t, i),
      e.setRenderTarget(n, 1),
      e.render(t, s),
      e.setRenderTarget(n, 2),
      e.render(t, a),
      e.setRenderTarget(n, 3),
      e.render(t, o),
      e.setRenderTarget(n, 4),
      e.render(t, l),
      (n.texture.generateMipmaps = m),
      e.setRenderTarget(n, 5),
      e.render(t, c),
      e.setRenderTarget(u),
      (e.toneMapping = h),
      (e.xr.enabled = d),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class el extends wt {
  constructor(e, t, n, i, s, a, o, l, c, u) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : fi),
      super(e, t, n, i, s, a, o, l, c, u),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Bc extends Bn {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      i = [n, n, n, n, n, n];
    (this.texture = new el(
      i,
      t.mapping,
      t.wrapS,
      t.wrapT,
      t.magFilter,
      t.minFilter,
      t.format,
      t.type,
      t.anisotropy,
      t.encoding,
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Ft);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.encoding = t.encoding),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      i = new Ke(5, 5, 5),
      s = new kn({
        name: 'CubemapFromEquirect',
        uniforms: gi(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: zt,
        blending: pn,
      });
    s.uniforms.tEquirect.value = t;
    const a = new ce(i, s),
      o = t.minFilter;
    return (
      t.minFilter === ki && (t.minFilter = Ft),
      new Uc(1, 10, this).update(e, a),
      (t.minFilter = o),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const hs = new L(),
  kc = new L(),
  Gc = new Pt();
class An {
  constructor(e = new L(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), (this.constant = i), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = hs.subVectors(n, t).cross(kc.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
  }
  intersectLine(e, t) {
    const n = e.delta(hs),
      i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(n).multiplyScalar(s).add(e.start);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Gc.getNormalMatrix(e),
      i = this.coplanarPoint(hs).applyMatrix4(e),
      s = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -i.dot(s)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ii = new Cr(),
  dr = new L();
class tl {
  constructor(
    e = new An(),
    t = new An(),
    n = new An(),
    i = new An(),
    s = new An(),
    a = new An(),
  ) {
    this.planes = [e, t, n, i, s, a];
  }
  set(e, t, n, i, s, a) {
    const o = this.planes;
    return (
      o[0].copy(e),
      o[1].copy(t),
      o[2].copy(n),
      o[3].copy(i),
      o[4].copy(s),
      o[5].copy(a),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes,
      n = e.elements,
      i = n[0],
      s = n[1],
      a = n[2],
      o = n[3],
      l = n[4],
      c = n[5],
      u = n[6],
      h = n[7],
      d = n[8],
      m = n[9],
      _ = n[10],
      p = n[11],
      f = n[12],
      x = n[13],
      b = n[14],
      v = n[15];
    return (
      t[0].setComponents(o - i, h - l, p - d, v - f).normalize(),
      t[1].setComponents(o + i, h + l, p + d, v + f).normalize(),
      t[2].setComponents(o + s, h + c, p + m, v + x).normalize(),
      t[3].setComponents(o - s, h - c, p - m, v - x).normalize(),
      t[4].setComponents(o - a, h - u, p - _, v - b).normalize(),
      t[5].setComponents(o + a, h + u, p + _, v + b).normalize(),
      this
    );
  }
  intersectsObject(e) {
    const t = e.geometry;
    return (
      t.boundingSphere === null && t.computeBoundingSphere(),
      ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
      this.intersectsSphere(ii)
    );
  }
  intersectsSprite(e) {
    return (
      ii.center.set(0, 0, 0),
      (ii.radius = 0.7071067811865476),
      ii.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(ii)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      i = -e.radius;
    for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(n) < i) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (
        ((dr.x = i.normal.x > 0 ? e.max.x : e.min.x),
        (dr.y = i.normal.y > 0 ? e.max.y : e.min.y),
        (dr.z = i.normal.z > 0 ? e.max.z : e.min.z),
        i.distanceToPoint(dr) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function nl() {
  let r = null,
    e = !1,
    t = null,
    n = null;
  function i(s, a) {
    t(s, a), (n = r.requestAnimationFrame(i));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = r.requestAnimationFrame(i)), (e = !0));
    },
    stop: function () {
      r.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (s) {
      t = s;
    },
    setContext: function (s) {
      r = s;
    },
  };
}
function Hc(r, e) {
  const t = e.isWebGL2,
    n = new WeakMap();
  function i(c, u) {
    const h = c.array,
      d = c.usage,
      m = r.createBuffer();
    r.bindBuffer(u, m), r.bufferData(u, h, d), c.onUploadCallback();
    let _;
    if (h instanceof Float32Array) _ = 5126;
    else if (h instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t) _ = 5131;
        else
          throw new Error(
            'THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.',
          );
      else _ = 5123;
    else if (h instanceof Int16Array) _ = 5122;
    else if (h instanceof Uint32Array) _ = 5125;
    else if (h instanceof Int32Array) _ = 5124;
    else if (h instanceof Int8Array) _ = 5120;
    else if (h instanceof Uint8Array) _ = 5121;
    else if (h instanceof Uint8ClampedArray) _ = 5121;
    else
      throw new Error(
        'THREE.WebGLAttributes: Unsupported buffer data format: ' + h,
      );
    return {
      buffer: m,
      type: _,
      bytesPerElement: h.BYTES_PER_ELEMENT,
      version: c.version,
    };
  }
  function s(c, u, h) {
    const d = u.array,
      m = u.updateRange;
    r.bindBuffer(h, c),
      m.count === -1
        ? r.bufferSubData(h, 0, d)
        : (t
            ? r.bufferSubData(
                h,
                m.offset * d.BYTES_PER_ELEMENT,
                d,
                m.offset,
                m.count,
              )
            : r.bufferSubData(
                h,
                m.offset * d.BYTES_PER_ELEMENT,
                d.subarray(m.offset, m.offset + m.count),
              ),
          (m.count = -1)),
      u.onUploadCallback();
  }
  function a(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function o(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = n.get(c);
    u && (r.deleteBuffer(u.buffer), n.delete(c));
  }
  function l(c, u) {
    if (c.isGLBufferAttribute) {
      const d = n.get(c);
      (!d || d.version < c.version) &&
        n.set(c, {
          buffer: c.buffer,
          type: c.type,
          bytesPerElement: c.elementSize,
          version: c.version,
        });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const h = n.get(c);
    h === void 0
      ? n.set(c, i(c, u))
      : h.version < c.version && (s(h.buffer, c, u), (h.version = c.version));
  }
  return { get: a, remove: o, update: l };
}
class ji extends yt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(),
      (this.type = 'PlaneGeometry'),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: i,
      });
    const s = e / 2,
      a = t / 2,
      o = Math.floor(n),
      l = Math.floor(i),
      c = o + 1,
      u = l + 1,
      h = e / o,
      d = t / l,
      m = [],
      _ = [],
      p = [],
      f = [];
    for (let x = 0; x < u; x++) {
      const b = x * d - a;
      for (let v = 0; v < c; v++) {
        const S = v * h - s;
        _.push(S, -b, 0), p.push(0, 0, 1), f.push(v / o), f.push(1 - x / l);
      }
    }
    for (let x = 0; x < l; x++)
      for (let b = 0; b < o; b++) {
        const v = b + c * x,
          S = b + c * (x + 1),
          y = b + 1 + c * (x + 1),
          C = b + 1 + c * x;
        m.push(v, S, C), m.push(S, y, C);
      }
    this.setIndex(m),
      this.setAttribute('position', new We(_, 3)),
      this.setAttribute('normal', new We(p, 3)),
      this.setAttribute('uv', new We(f, 2));
  }
  static fromJSON(e) {
    return new ji(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Vc = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,
  Wc = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Xc = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
  qc = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  Yc = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  jc = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  Zc = 'vec3 transformed = vec3( position );',
  $c = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  Kc = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,
  Qc = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  Jc = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  eu = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
  tu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  nu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  iu = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  ru = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  su = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  au = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  ou = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
  lu = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,
  cu = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  uu = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  hu = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  du = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,
  fu = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  pu = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  mu = 'gl_FragColor = linearToOutputTexel( gl_FragColor );',
  gu = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  _u = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  xu = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  vu = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  yu = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  bu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  Mu = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  Su = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  wu = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  Eu = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  Tu = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  Au = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  Cu = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  Lu = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  Pu = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  Du = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  Ru = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,
  Iu = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  Ou = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  Fu = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  Nu = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  zu = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,
  Uu = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  Bu = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  ku = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  Gu = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
  Hu = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  Vu = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Wu = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  Xu = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
  qu = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  Yu = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  ju = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  Zu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  $u = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  Ku = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  Qu = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  Ju = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
  eh = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
  th = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
  nh = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,
  ih = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  rh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  sh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  ah = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  oh = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,
  lh = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
  ch = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,
  uh = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,
  hh = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  dh = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  fh = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,
  ph = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  mh = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  gh = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  _h = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  xh = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  vh = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  yh = `#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
  bh = `#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  Mh = `#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,
  Sh = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  wh = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  Eh = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,
  Th = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  Ah = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  Ch = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  Lh = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  Ph = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  Dh = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  Rh = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,
  Ih = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,
  Oh = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,
  Fh = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,
  Nh = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,
  zh = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,
  Uh = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,
  Bh = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,
  kh = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Gh = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  Hh = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  Vh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Wh = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  Xh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  qh = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  Yh = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  jh = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
  Zh = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  $h = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  Kh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  Qh = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  Jh = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  ed = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  td = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  nd = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  id = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  rd = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  sd = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  ad = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  od = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  ld = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  cd = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  ud = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  hd = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  dd = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  fd = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  pd = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  md = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  gd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  _d = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  xd = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  vd = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  yd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  Te = {
    alphamap_fragment: Vc,
    alphamap_pars_fragment: Wc,
    alphatest_fragment: Xc,
    alphatest_pars_fragment: qc,
    aomap_fragment: Yc,
    aomap_pars_fragment: jc,
    begin_vertex: Zc,
    beginnormal_vertex: $c,
    bsdfs: Kc,
    iridescence_fragment: Qc,
    bumpmap_pars_fragment: Jc,
    clipping_planes_fragment: eu,
    clipping_planes_pars_fragment: tu,
    clipping_planes_pars_vertex: nu,
    clipping_planes_vertex: iu,
    color_fragment: ru,
    color_pars_fragment: su,
    color_pars_vertex: au,
    color_vertex: ou,
    common: lu,
    cube_uv_reflection_fragment: cu,
    defaultnormal_vertex: uu,
    displacementmap_pars_vertex: hu,
    displacementmap_vertex: du,
    emissivemap_fragment: fu,
    emissivemap_pars_fragment: pu,
    encodings_fragment: mu,
    encodings_pars_fragment: gu,
    envmap_fragment: _u,
    envmap_common_pars_fragment: xu,
    envmap_pars_fragment: vu,
    envmap_pars_vertex: yu,
    envmap_physical_pars_fragment: Ru,
    envmap_vertex: bu,
    fog_vertex: Mu,
    fog_pars_vertex: Su,
    fog_fragment: wu,
    fog_pars_fragment: Eu,
    gradientmap_pars_fragment: Tu,
    lightmap_fragment: Au,
    lightmap_pars_fragment: Cu,
    lights_lambert_fragment: Lu,
    lights_lambert_pars_fragment: Pu,
    lights_pars_begin: Du,
    lights_toon_fragment: Iu,
    lights_toon_pars_fragment: Ou,
    lights_phong_fragment: Fu,
    lights_phong_pars_fragment: Nu,
    lights_physical_fragment: zu,
    lights_physical_pars_fragment: Uu,
    lights_fragment_begin: Bu,
    lights_fragment_maps: ku,
    lights_fragment_end: Gu,
    logdepthbuf_fragment: Hu,
    logdepthbuf_pars_fragment: Vu,
    logdepthbuf_pars_vertex: Wu,
    logdepthbuf_vertex: Xu,
    map_fragment: qu,
    map_pars_fragment: Yu,
    map_particle_fragment: ju,
    map_particle_pars_fragment: Zu,
    metalnessmap_fragment: $u,
    metalnessmap_pars_fragment: Ku,
    morphcolor_vertex: Qu,
    morphnormal_vertex: Ju,
    morphtarget_pars_vertex: eh,
    morphtarget_vertex: th,
    normal_fragment_begin: nh,
    normal_fragment_maps: ih,
    normal_pars_fragment: rh,
    normal_pars_vertex: sh,
    normal_vertex: ah,
    normalmap_pars_fragment: oh,
    clearcoat_normal_fragment_begin: lh,
    clearcoat_normal_fragment_maps: ch,
    clearcoat_pars_fragment: uh,
    iridescence_pars_fragment: hh,
    output_fragment: dh,
    packing: fh,
    premultiplied_alpha_fragment: ph,
    project_vertex: mh,
    dithering_fragment: gh,
    dithering_pars_fragment: _h,
    roughnessmap_fragment: xh,
    roughnessmap_pars_fragment: vh,
    shadowmap_pars_fragment: yh,
    shadowmap_pars_vertex: bh,
    shadowmap_vertex: Mh,
    shadowmask_pars_fragment: Sh,
    skinbase_vertex: wh,
    skinning_pars_vertex: Eh,
    skinning_vertex: Th,
    skinnormal_vertex: Ah,
    specularmap_fragment: Ch,
    specularmap_pars_fragment: Lh,
    tonemapping_fragment: Ph,
    tonemapping_pars_fragment: Dh,
    transmission_fragment: Rh,
    transmission_pars_fragment: Ih,
    uv_pars_fragment: Oh,
    uv_pars_vertex: Fh,
    uv_vertex: Nh,
    uv2_pars_fragment: zh,
    uv2_pars_vertex: Uh,
    uv2_vertex: Bh,
    worldpos_vertex: kh,
    background_vert: Gh,
    background_frag: Hh,
    backgroundCube_vert: Vh,
    backgroundCube_frag: Wh,
    cube_vert: Xh,
    cube_frag: qh,
    depth_vert: Yh,
    depth_frag: jh,
    distanceRGBA_vert: Zh,
    distanceRGBA_frag: $h,
    equirect_vert: Kh,
    equirect_frag: Qh,
    linedashed_vert: Jh,
    linedashed_frag: ed,
    meshbasic_vert: td,
    meshbasic_frag: nd,
    meshlambert_vert: id,
    meshlambert_frag: rd,
    meshmatcap_vert: sd,
    meshmatcap_frag: ad,
    meshnormal_vert: od,
    meshnormal_frag: ld,
    meshphong_vert: cd,
    meshphong_frag: ud,
    meshphysical_vert: hd,
    meshphysical_frag: dd,
    meshtoon_vert: fd,
    meshtoon_frag: pd,
    points_vert: md,
    points_frag: gd,
    shadow_vert: _d,
    shadow_frag: xd,
    sprite_vert: vd,
    sprite_frag: yd,
  },
  ae = {
    common: {
      diffuse: { value: new Be(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      uvTransform: { value: new Pt() },
      uv2Transform: { value: new Pt() },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
    },
    specularmap: { specularMap: { value: null } },
    envmap: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
    lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
    emissivemap: { emissiveMap: { value: null } },
    bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
    normalmap: {
      normalMap: { value: null },
      normalScale: { value: new we(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    roughnessmap: { roughnessMap: { value: null } },
    metalnessmap: { metalnessMap: { value: null } },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new Be(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new Be(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new Pt() },
    },
    sprite: {
      diffuse: { value: new Be(16777215) },
      opacity: { value: 1 },
      center: { value: new we(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new Pt() },
    },
  },
  jt = {
    basic: {
      uniforms: vt([
        ae.common,
        ae.specularmap,
        ae.envmap,
        ae.aomap,
        ae.lightmap,
        ae.fog,
      ]),
      vertexShader: Te.meshbasic_vert,
      fragmentShader: Te.meshbasic_frag,
    },
    lambert: {
      uniforms: vt([
        ae.common,
        ae.specularmap,
        ae.envmap,
        ae.aomap,
        ae.lightmap,
        ae.emissivemap,
        ae.bumpmap,
        ae.normalmap,
        ae.displacementmap,
        ae.fog,
        ae.lights,
        { emissive: { value: new Be(0) } },
      ]),
      vertexShader: Te.meshlambert_vert,
      fragmentShader: Te.meshlambert_frag,
    },
    phong: {
      uniforms: vt([
        ae.common,
        ae.specularmap,
        ae.envmap,
        ae.aomap,
        ae.lightmap,
        ae.emissivemap,
        ae.bumpmap,
        ae.normalmap,
        ae.displacementmap,
        ae.fog,
        ae.lights,
        {
          emissive: { value: new Be(0) },
          specular: { value: new Be(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Te.meshphong_vert,
      fragmentShader: Te.meshphong_frag,
    },
    standard: {
      uniforms: vt([
        ae.common,
        ae.envmap,
        ae.aomap,
        ae.lightmap,
        ae.emissivemap,
        ae.bumpmap,
        ae.normalmap,
        ae.displacementmap,
        ae.roughnessmap,
        ae.metalnessmap,
        ae.fog,
        ae.lights,
        {
          emissive: { value: new Be(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Te.meshphysical_vert,
      fragmentShader: Te.meshphysical_frag,
    },
    toon: {
      uniforms: vt([
        ae.common,
        ae.aomap,
        ae.lightmap,
        ae.emissivemap,
        ae.bumpmap,
        ae.normalmap,
        ae.displacementmap,
        ae.gradientmap,
        ae.fog,
        ae.lights,
        { emissive: { value: new Be(0) } },
      ]),
      vertexShader: Te.meshtoon_vert,
      fragmentShader: Te.meshtoon_frag,
    },
    matcap: {
      uniforms: vt([
        ae.common,
        ae.bumpmap,
        ae.normalmap,
        ae.displacementmap,
        ae.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Te.meshmatcap_vert,
      fragmentShader: Te.meshmatcap_frag,
    },
    points: {
      uniforms: vt([ae.points, ae.fog]),
      vertexShader: Te.points_vert,
      fragmentShader: Te.points_frag,
    },
    dashed: {
      uniforms: vt([
        ae.common,
        ae.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Te.linedashed_vert,
      fragmentShader: Te.linedashed_frag,
    },
    depth: {
      uniforms: vt([ae.common, ae.displacementmap]),
      vertexShader: Te.depth_vert,
      fragmentShader: Te.depth_frag,
    },
    normal: {
      uniforms: vt([
        ae.common,
        ae.bumpmap,
        ae.normalmap,
        ae.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Te.meshnormal_vert,
      fragmentShader: Te.meshnormal_frag,
    },
    sprite: {
      uniforms: vt([ae.sprite, ae.fog]),
      vertexShader: Te.sprite_vert,
      fragmentShader: Te.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new Pt() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Te.background_vert,
      fragmentShader: Te.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Te.backgroundCube_vert,
      fragmentShader: Te.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: Te.cube_vert,
      fragmentShader: Te.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Te.equirect_vert,
      fragmentShader: Te.equirect_frag,
    },
    distanceRGBA: {
      uniforms: vt([
        ae.common,
        ae.displacementmap,
        {
          referencePosition: { value: new L() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Te.distanceRGBA_vert,
      fragmentShader: Te.distanceRGBA_frag,
    },
    shadow: {
      uniforms: vt([
        ae.lights,
        ae.fog,
        { color: { value: new Be(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Te.shadow_vert,
      fragmentShader: Te.shadow_frag,
    },
  };
jt.physical = {
  uniforms: vt([
    jt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: new we(1, 1) },
      clearcoatNormalMap: { value: null },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: new Be(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: new we() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new Be(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: new Be(1, 1, 1) },
      specularColorMap: { value: null },
    },
  ]),
  vertexShader: Te.meshphysical_vert,
  fragmentShader: Te.meshphysical_frag,
};
const fr = { r: 0, b: 0, g: 0 };
function bd(r, e, t, n, i, s, a) {
  const o = new Be(0);
  let l = s === !0 ? 0 : 1,
    c,
    u,
    h = null,
    d = 0,
    m = null;
  function _(f, x) {
    let b = !1,
      v = x.isScene === !0 ? x.background : null;
    v && v.isTexture && (v = (x.backgroundBlurriness > 0 ? t : e).get(v));
    const S = r.xr,
      y = S.getSession && S.getSession();
    y && y.environmentBlendMode === 'additive' && (v = null),
      v === null ? p(o, l) : v && v.isColor && (p(v, 1), (b = !0)),
      (r.autoClear || b) &&
        r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil),
      v && (v.isCubeTexture || v.mapping === Ar)
        ? (u === void 0 &&
            ((u = new ce(
              new Ke(1, 1, 1),
              new kn({
                name: 'BackgroundCubeMaterial',
                uniforms: gi(jt.backgroundCube.uniforms),
                vertexShader: jt.backgroundCube.vertexShader,
                fragmentShader: jt.backgroundCube.fragmentShader,
                side: zt,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              }),
            )),
            u.geometry.deleteAttribute('normal'),
            u.geometry.deleteAttribute('uv'),
            (u.onBeforeRender = function (C, I, g) {
              this.matrixWorld.copyPosition(g.matrixWorld);
            }),
            Object.defineProperty(u.material, 'envMap', {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            i.update(u)),
          (u.material.uniforms.envMap.value = v),
          (u.material.uniforms.flipEnvMap.value =
            v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1),
          (u.material.uniforms.backgroundBlurriness.value =
            x.backgroundBlurriness),
          (u.material.uniforms.backgroundIntensity.value =
            x.backgroundIntensity),
          (u.material.toneMapped = v.encoding !== Ve),
          (h !== v || d !== v.version || m !== r.toneMapping) &&
            ((u.material.needsUpdate = !0),
            (h = v),
            (d = v.version),
            (m = r.toneMapping)),
          u.layers.enableAll(),
          f.unshift(u, u.geometry, u.material, 0, 0, null))
        : v &&
          v.isTexture &&
          (c === void 0 &&
            ((c = new ce(
              new ji(2, 2),
              new kn({
                name: 'BackgroundMaterial',
                uniforms: gi(jt.background.uniforms),
                vertexShader: jt.background.vertexShader,
                fragmentShader: jt.background.fragmentShader,
                side: Nn,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              }),
            )),
            c.geometry.deleteAttribute('normal'),
            Object.defineProperty(c.material, 'map', {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            i.update(c)),
          (c.material.uniforms.t2D.value = v),
          (c.material.uniforms.backgroundIntensity.value =
            x.backgroundIntensity),
          (c.material.toneMapped = v.encoding !== Ve),
          v.matrixAutoUpdate === !0 && v.updateMatrix(),
          c.material.uniforms.uvTransform.value.copy(v.matrix),
          (h !== v || d !== v.version || m !== r.toneMapping) &&
            ((c.material.needsUpdate = !0),
            (h = v),
            (d = v.version),
            (m = r.toneMapping)),
          c.layers.enableAll(),
          f.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function p(f, x) {
    f.getRGB(fr, Qo(r)), n.buffers.color.setClear(fr.r, fr.g, fr.b, x, a);
  }
  return {
    getClearColor: function () {
      return o;
    },
    setClearColor: function (f, x = 1) {
      o.set(f), (l = x), p(o, l);
    },
    getClearAlpha: function () {
      return l;
    },
    setClearAlpha: function (f) {
      (l = f), p(o, l);
    },
    render: _,
  };
}
function Md(r, e, t, n) {
  const i = r.getParameter(34921),
    s = n.isWebGL2 ? null : e.get('OES_vertex_array_object'),
    a = n.isWebGL2 || s !== null,
    o = {},
    l = f(null);
  let c = l,
    u = !1;
  function h(R, B, Q, K, q) {
    let J = !1;
    if (a) {
      const ee = p(K, Q, B);
      c !== ee && ((c = ee), m(c.object)),
        (J = x(R, K, Q, q)),
        J && b(R, K, Q, q);
    } else {
      const ee = B.wireframe === !0;
      (c.geometry !== K.id || c.program !== Q.id || c.wireframe !== ee) &&
        ((c.geometry = K.id), (c.program = Q.id), (c.wireframe = ee), (J = !0));
    }
    q !== null && t.update(q, 34963),
      (J || u) &&
        ((u = !1),
        g(R, B, Q, K),
        q !== null && r.bindBuffer(34963, t.get(q).buffer));
  }
  function d() {
    return n.isWebGL2 ? r.createVertexArray() : s.createVertexArrayOES();
  }
  function m(R) {
    return n.isWebGL2 ? r.bindVertexArray(R) : s.bindVertexArrayOES(R);
  }
  function _(R) {
    return n.isWebGL2 ? r.deleteVertexArray(R) : s.deleteVertexArrayOES(R);
  }
  function p(R, B, Q) {
    const K = Q.wireframe === !0;
    let q = o[R.id];
    q === void 0 && ((q = {}), (o[R.id] = q));
    let J = q[B.id];
    J === void 0 && ((J = {}), (q[B.id] = J));
    let ee = J[K];
    return ee === void 0 && ((ee = f(d())), (J[K] = ee)), ee;
  }
  function f(R) {
    const B = [],
      Q = [],
      K = [];
    for (let q = 0; q < i; q++) (B[q] = 0), (Q[q] = 0), (K[q] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: B,
      enabledAttributes: Q,
      attributeDivisors: K,
      object: R,
      attributes: {},
      index: null,
    };
  }
  function x(R, B, Q, K) {
    const q = c.attributes,
      J = B.attributes;
    let ee = 0;
    const k = Q.getAttributes();
    for (const H in k)
      if (k[H].location >= 0) {
        const re = q[H];
        let oe = J[H];
        if (
          (oe === void 0 &&
            (H === 'instanceMatrix' &&
              R.instanceMatrix &&
              (oe = R.instanceMatrix),
            H === 'instanceColor' && R.instanceColor && (oe = R.instanceColor)),
          re === void 0 || re.attribute !== oe || (oe && re.data !== oe.data))
        )
          return !0;
        ee++;
      }
    return c.attributesNum !== ee || c.index !== K;
  }
  function b(R, B, Q, K) {
    const q = {},
      J = B.attributes;
    let ee = 0;
    const k = Q.getAttributes();
    for (const H in k)
      if (k[H].location >= 0) {
        let re = J[H];
        re === void 0 &&
          (H === 'instanceMatrix' &&
            R.instanceMatrix &&
            (re = R.instanceMatrix),
          H === 'instanceColor' && R.instanceColor && (re = R.instanceColor));
        const oe = {};
        (oe.attribute = re),
          re && re.data && (oe.data = re.data),
          (q[H] = oe),
          ee++;
      }
    (c.attributes = q), (c.attributesNum = ee), (c.index = K);
  }
  function v() {
    const R = c.newAttributes;
    for (let B = 0, Q = R.length; B < Q; B++) R[B] = 0;
  }
  function S(R) {
    y(R, 0);
  }
  function y(R, B) {
    const Q = c.newAttributes,
      K = c.enabledAttributes,
      q = c.attributeDivisors;
    (Q[R] = 1),
      K[R] === 0 && (r.enableVertexAttribArray(R), (K[R] = 1)),
      q[R] !== B &&
        ((n.isWebGL2 ? r : e.get('ANGLE_instanced_arrays'))[
          n.isWebGL2 ? 'vertexAttribDivisor' : 'vertexAttribDivisorANGLE'
        ](R, B),
        (q[R] = B));
  }
  function C() {
    const R = c.newAttributes,
      B = c.enabledAttributes;
    for (let Q = 0, K = B.length; Q < K; Q++)
      B[Q] !== R[Q] && (r.disableVertexAttribArray(Q), (B[Q] = 0));
  }
  function I(R, B, Q, K, q, J) {
    n.isWebGL2 === !0 && (Q === 5124 || Q === 5125)
      ? r.vertexAttribIPointer(R, B, Q, q, J)
      : r.vertexAttribPointer(R, B, Q, K, q, J);
  }
  function g(R, B, Q, K) {
    if (
      n.isWebGL2 === !1 &&
      (R.isInstancedMesh || K.isInstancedBufferGeometry) &&
      e.get('ANGLE_instanced_arrays') === null
    )
      return;
    v();
    const q = K.attributes,
      J = Q.getAttributes(),
      ee = B.defaultAttributeValues;
    for (const k in J) {
      const H = J[k];
      if (H.location >= 0) {
        let te = q[k];
        if (
          (te === void 0 &&
            (k === 'instanceMatrix' &&
              R.instanceMatrix &&
              (te = R.instanceMatrix),
            k === 'instanceColor' && R.instanceColor && (te = R.instanceColor)),
          te !== void 0)
        ) {
          const re = te.normalized,
            oe = te.itemSize,
            Y = t.get(te);
          if (Y === void 0) continue;
          const Le = Y.buffer,
            me = Y.type,
            ye = Y.bytesPerElement;
          if (te.isInterleavedBufferAttribute) {
            const pe = te.data,
              Ne = pe.stride,
              Ee = te.offset;
            if (pe.isInstancedInterleavedBuffer) {
              for (let be = 0; be < H.locationSize; be++)
                y(H.location + be, pe.meshPerAttribute);
              R.isInstancedMesh !== !0 &&
                K._maxInstanceCount === void 0 &&
                (K._maxInstanceCount = pe.meshPerAttribute * pe.count);
            } else
              for (let be = 0; be < H.locationSize; be++) S(H.location + be);
            r.bindBuffer(34962, Le);
            for (let be = 0; be < H.locationSize; be++)
              I(
                H.location + be,
                oe / H.locationSize,
                me,
                re,
                Ne * ye,
                (Ee + (oe / H.locationSize) * be) * ye,
              );
          } else {
            if (te.isInstancedBufferAttribute) {
              for (let pe = 0; pe < H.locationSize; pe++)
                y(H.location + pe, te.meshPerAttribute);
              R.isInstancedMesh !== !0 &&
                K._maxInstanceCount === void 0 &&
                (K._maxInstanceCount = te.meshPerAttribute * te.count);
            } else
              for (let pe = 0; pe < H.locationSize; pe++) S(H.location + pe);
            r.bindBuffer(34962, Le);
            for (let pe = 0; pe < H.locationSize; pe++)
              I(
                H.location + pe,
                oe / H.locationSize,
                me,
                re,
                oe * ye,
                (oe / H.locationSize) * pe * ye,
              );
          }
        } else if (ee !== void 0) {
          const re = ee[k];
          if (re !== void 0)
            switch (re.length) {
              case 2:
                r.vertexAttrib2fv(H.location, re);
                break;
              case 3:
                r.vertexAttrib3fv(H.location, re);
                break;
              case 4:
                r.vertexAttrib4fv(H.location, re);
                break;
              default:
                r.vertexAttrib1fv(H.location, re);
            }
        }
      }
    }
    C();
  }
  function T() {
    $();
    for (const R in o) {
      const B = o[R];
      for (const Q in B) {
        const K = B[Q];
        for (const q in K) _(K[q].object), delete K[q];
        delete B[Q];
      }
      delete o[R];
    }
  }
  function P(R) {
    if (o[R.id] === void 0) return;
    const B = o[R.id];
    for (const Q in B) {
      const K = B[Q];
      for (const q in K) _(K[q].object), delete K[q];
      delete B[Q];
    }
    delete o[R.id];
  }
  function G(R) {
    for (const B in o) {
      const Q = o[B];
      if (Q[R.id] === void 0) continue;
      const K = Q[R.id];
      for (const q in K) _(K[q].object), delete K[q];
      delete Q[R.id];
    }
  }
  function $() {
    O(), (u = !0), c !== l && ((c = l), m(c.object));
  }
  function O() {
    (l.geometry = null), (l.program = null), (l.wireframe = !1);
  }
  return {
    setup: h,
    reset: $,
    resetDefaultState: O,
    dispose: T,
    releaseStatesOfGeometry: P,
    releaseStatesOfProgram: G,
    initAttributes: v,
    enableAttribute: S,
    disableUnusedAttributes: C,
  };
}
function Sd(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function a(c) {
    s = c;
  }
  function o(c, u) {
    r.drawArrays(s, c, u), t.update(u, s, 1);
  }
  function l(c, u, h) {
    if (h === 0) return;
    let d, m;
    if (i) (d = r), (m = 'drawArraysInstanced');
    else if (
      ((d = e.get('ANGLE_instanced_arrays')),
      (m = 'drawArraysInstancedANGLE'),
      d === null)
    ) {
      console.error(
        'THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.',
      );
      return;
    }
    d[m](s, c, u, h), t.update(u, s, h);
  }
  (this.setMode = a), (this.render = o), (this.renderInstances = l);
}
function wd(r, e, t) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (e.has('EXT_texture_filter_anisotropic') === !0) {
      const I = e.get('EXT_texture_filter_anisotropic');
      n = r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else n = 0;
    return n;
  }
  function s(I) {
    if (I === 'highp') {
      if (
        r.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
        r.getShaderPrecisionFormat(35632, 36338).precision > 0
      )
        return 'highp';
      I = 'mediump';
    }
    return I === 'mediump' &&
      r.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
      r.getShaderPrecisionFormat(35632, 36337).precision > 0
      ? 'mediump'
      : 'lowp';
  }
  const a =
    (typeof WebGL2RenderingContext < 'u' &&
      r instanceof WebGL2RenderingContext) ||
    (typeof WebGL2ComputeRenderingContext < 'u' &&
      r instanceof WebGL2ComputeRenderingContext);
  let o = t.precision !== void 0 ? t.precision : 'highp';
  const l = s(o);
  l !== o &&
    (console.warn(
      'THREE.WebGLRenderer:',
      o,
      'not supported, using',
      l,
      'instead.',
    ),
    (o = l));
  const c = a || e.has('WEBGL_draw_buffers'),
    u = t.logarithmicDepthBuffer === !0,
    h = r.getParameter(34930),
    d = r.getParameter(35660),
    m = r.getParameter(3379),
    _ = r.getParameter(34076),
    p = r.getParameter(34921),
    f = r.getParameter(36347),
    x = r.getParameter(36348),
    b = r.getParameter(36349),
    v = d > 0,
    S = a || e.has('OES_texture_float'),
    y = v && S,
    C = a ? r.getParameter(36183) : 0;
  return {
    isWebGL2: a,
    drawBuffers: c,
    getMaxAnisotropy: i,
    getMaxPrecision: s,
    precision: o,
    logarithmicDepthBuffer: u,
    maxTextures: h,
    maxVertexTextures: d,
    maxTextureSize: m,
    maxCubemapSize: _,
    maxAttributes: p,
    maxVertexUniforms: f,
    maxVaryings: x,
    maxFragmentUniforms: b,
    vertexTextures: v,
    floatFragmentTextures: S,
    floatVertexTextures: y,
    maxSamples: C,
  };
}
function Ed(r) {
  const e = this;
  let t = null,
    n = 0,
    i = !1,
    s = !1;
  const a = new An(),
    o = new Pt(),
    l = { value: null, needsUpdate: !1 };
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (h, d, m) {
      const _ = h.length !== 0 || d || n !== 0 || i;
      return (i = d), (t = u(h, m, 0)), (n = h.length), _;
    }),
    (this.beginShadows = function () {
      (s = !0), u(null);
    }),
    (this.endShadows = function () {
      (s = !1), c();
    }),
    (this.setState = function (h, d, m) {
      const _ = h.clippingPlanes,
        p = h.clipIntersection,
        f = h.clipShadows,
        x = r.get(h);
      if (!i || _ === null || _.length === 0 || (s && !f)) s ? u(null) : c();
      else {
        const b = s ? 0 : n,
          v = b * 4;
        let S = x.clippingState || null;
        (l.value = S), (S = u(_, d, v, m));
        for (let y = 0; y !== v; ++y) S[y] = t[y];
        (x.clippingState = S),
          (this.numIntersection = p ? this.numPlanes : 0),
          (this.numPlanes += b);
      }
    });
  function c() {
    l.value !== t && ((l.value = t), (l.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0);
  }
  function u(h, d, m, _) {
    const p = h !== null ? h.length : 0;
    let f = null;
    if (p !== 0) {
      if (((f = l.value), _ !== !0 || f === null)) {
        const x = m + p * 4,
          b = d.matrixWorldInverse;
        o.getNormalMatrix(b),
          (f === null || f.length < x) && (f = new Float32Array(x));
        for (let v = 0, S = m; v !== p; ++v, S += 4)
          a.copy(h[v]).applyMatrix4(b, o),
            a.normal.toArray(f, S),
            (f[S + 3] = a.constant);
      }
      (l.value = f), (l.needsUpdate = !0);
    }
    return (e.numPlanes = p), (e.numIntersection = 0), f;
  }
}
function Td(r) {
  let e = new WeakMap();
  function t(a, o) {
    return o === Ms ? (a.mapping = fi) : o === Ss && (a.mapping = pi), a;
  }
  function n(a) {
    if (a && a.isTexture && a.isRenderTargetTexture === !1) {
      const o = a.mapping;
      if (o === Ms || o === Ss)
        if (e.has(a)) {
          const l = e.get(a).texture;
          return t(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = new Bc(l.height / 2);
            return (
              c.fromEquirectangularTexture(r, a),
              e.set(a, c),
              a.addEventListener('dispose', i),
              t(c.texture, a.mapping)
            );
          } else return null;
        }
    }
    return a;
  }
  function i(a) {
    const o = a.target;
    o.removeEventListener('dispose', i);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function s() {
    e = new WeakMap();
  }
  return { get: n, dispose: s };
}
class Ad extends Jo {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, a = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = 'OrthographicCamera'),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = i),
      (this.near = s),
      (this.far = a),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, i, s, a) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = s),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      i = (this.top + this.bottom) / 2;
    let s = n - e,
      a = n + e,
      o = i + t,
      l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (s += c * this.view.offsetX),
        (a = s + c * this.view.width),
        (o -= u * this.view.offsetY),
        (l = o - u * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(s, a, o, l, this.near, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const li = 4,
  ka = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  Pn = 20,
  ds = new Ad(),
  Ga = new Be();
let fs = null;
const Cn = (1 + Math.sqrt(5)) / 2,
  ri = 1 / Cn,
  Ha = [
    new L(1, 1, 1),
    new L(-1, 1, 1),
    new L(1, 1, -1),
    new L(-1, 1, -1),
    new L(0, Cn, ri),
    new L(0, Cn, -ri),
    new L(ri, 0, Cn),
    new L(-ri, 0, Cn),
    new L(Cn, ri, 0),
    new L(-Cn, ri, 0),
  ];
class Va {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    (fs = this._renderer.getRenderTarget()), this._setSize(256);
    const s = this._allocateTargets();
    return (
      (s.depthBuffer = !0),
      this._sceneToCubeUV(e, n, i, s),
      t > 0 && this._blur(s, 0, 0, t),
      this._applyPMREM(s),
      this._cleanup(s),
      s
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = qa()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = Xa()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(fs),
      (e.scissorTest = !1),
      pr(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === fi || e.mapping === pi
      ? this._setSize(
          e.image.length === 0
            ? 16
            : e.image[0].width || e.image[0].image.width,
        )
      : this._setSize(e.image.width / 4),
      (fs = this._renderer.getRenderTarget());
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: Ft,
        minFilter: Ft,
        generateMipmaps: !1,
        type: Gi,
        format: Vt,
        encoding: Un,
        depthBuffer: !1,
      },
      i = Wa(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = Wa(e, t, n));
      const { _lodMax: s } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = Cd(s)),
        (this._blurMaterial = Ld(s, e, t));
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new ce(this._lodPlanes[0], e);
    this._renderer.compile(t, ds);
  }
  _sceneToCubeUV(e, t, n, i) {
    const o = new Nt(90, 1, t, n),
      l = [1, -1, 1, 1, 1, 1],
      c = [1, 1, 1, -1, -1, -1],
      u = this._renderer,
      h = u.autoClear,
      d = u.toneMapping;
    u.getClearColor(Ga), (u.toneMapping = an), (u.autoClear = !1);
    const m = new Lr({
        name: 'PMREM.Background',
        side: zt,
        depthWrite: !1,
        depthTest: !1,
      }),
      _ = new ce(new Ke(), m);
    let p = !1;
    const f = e.background;
    f
      ? f.isColor && (m.color.copy(f), (e.background = null), (p = !0))
      : (m.color.copy(Ga), (p = !0));
    for (let x = 0; x < 6; x++) {
      const b = x % 3;
      b === 0
        ? (o.up.set(0, l[x], 0), o.lookAt(c[x], 0, 0))
        : b === 1
        ? (o.up.set(0, 0, l[x]), o.lookAt(0, c[x], 0))
        : (o.up.set(0, l[x], 0), o.lookAt(0, 0, c[x]));
      const v = this._cubeSize;
      pr(i, b * v, x > 2 ? v : 0, v, v),
        u.setRenderTarget(i),
        p && u.render(_, o),
        u.render(e, o);
    }
    _.geometry.dispose(),
      _.material.dispose(),
      (u.toneMapping = d),
      (u.autoClear = h),
      (e.background = f);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      i = e.mapping === fi || e.mapping === pi;
    i
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = qa()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = Xa());
    const s = i ? this._cubemapMaterial : this._equirectMaterial,
      a = new ce(this._lodPlanes[0], s),
      o = s.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    pr(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, ds);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const s = Math.sqrt(
          this._sigmas[i] * this._sigmas[i] -
            this._sigmas[i - 1] * this._sigmas[i - 1],
        ),
        a = Ha[(i - 1) % Ha.length];
      this._blur(e, i - 1, i, s, a);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, n, i, 'latitudinal', s),
      this._halfBlur(a, e, n, n, i, 'longitudinal', s);
  }
  _halfBlur(e, t, n, i, s, a, o) {
    const l = this._renderer,
      c = this._blurMaterial;
    a !== 'latitudinal' &&
      a !== 'longitudinal' &&
      console.error(
        'blur direction must be either latitudinal or longitudinal!',
      );
    const u = 3,
      h = new ce(this._lodPlanes[i], c),
      d = c.uniforms,
      m = this._sizeLods[n] - 1,
      _ = isFinite(s) ? Math.PI / (2 * m) : (2 * Math.PI) / (2 * Pn - 1),
      p = s / _,
      f = isFinite(s) ? 1 + Math.floor(u * p) : Pn;
    f > Pn &&
      console.warn(
        `sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Pn}`,
      );
    const x = [];
    let b = 0;
    for (let I = 0; I < Pn; ++I) {
      const g = I / p,
        T = Math.exp((-g * g) / 2);
      x.push(T), I === 0 ? (b += T) : I < f && (b += 2 * T);
    }
    for (let I = 0; I < x.length; I++) x[I] = x[I] / b;
    (d.envMap.value = e.texture),
      (d.samples.value = f),
      (d.weights.value = x),
      (d.latitudinal.value = a === 'latitudinal'),
      o && (d.poleAxis.value = o);
    const { _lodMax: v } = this;
    (d.dTheta.value = _), (d.mipInt.value = v - n);
    const S = this._sizeLods[i],
      y = 3 * S * (i > v - li ? i - v + li : 0),
      C = 4 * (this._cubeSize - S);
    pr(t, y, C, 3 * S, 2 * S), l.setRenderTarget(t), l.render(h, ds);
  }
}
function Cd(r) {
  const e = [],
    t = [],
    n = [];
  let i = r;
  const s = r - li + 1 + ka.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let l = 1 / o;
    a > r - li ? (l = ka[a - r + li - 1]) : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2),
      u = -c,
      h = 1 + c,
      d = [u, u, h, u, h, h, u, u, h, h, u, h],
      m = 6,
      _ = 6,
      p = 3,
      f = 2,
      x = 1,
      b = new Float32Array(p * _ * m),
      v = new Float32Array(f * _ * m),
      S = new Float32Array(x * _ * m);
    for (let C = 0; C < m; C++) {
      const I = ((C % 3) * 2) / 3 - 1,
        g = C > 2 ? 0 : -1,
        T = [
          I,
          g,
          0,
          I + 2 / 3,
          g,
          0,
          I + 2 / 3,
          g + 1,
          0,
          I,
          g,
          0,
          I + 2 / 3,
          g + 1,
          0,
          I,
          g + 1,
          0,
        ];
      b.set(T, p * _ * C), v.set(d, f * _ * C);
      const P = [C, C, C, C, C, C];
      S.set(P, x * _ * C);
    }
    const y = new yt();
    y.setAttribute('position', new Zt(b, p)),
      y.setAttribute('uv', new Zt(v, f)),
      y.setAttribute('faceIndex', new Zt(S, x)),
      e.push(y),
      i > li && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Wa(r, e, t) {
  const n = new Bn(r, e, t);
  return (
    (n.texture.mapping = Ar),
    (n.texture.name = 'PMREM.cubeUv'),
    (n.scissorTest = !0),
    n
  );
}
function pr(r, e, t, n, i) {
  r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i);
}
function Ld(r, e, t) {
  const n = new Float32Array(Pn),
    i = new L(0, 1, 0);
  return new kn({
    name: 'SphericalGaussianBlur',
    defines: {
      n: Pn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${r}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i },
    },
    vertexShader: ks(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: pn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Xa() {
  return new kn({
    name: 'EquirectangularToCubeUV',
    uniforms: { envMap: { value: null } },
    vertexShader: ks(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: pn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function qa() {
  return new kn({
    name: 'CubemapToCubeUV',
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: ks(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: pn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function ks() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function Pd(r) {
  let e = new WeakMap(),
    t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping,
        c = l === Ms || l === Ss,
        u = l === fi || l === pi;
      if (c || u)
        if (o.isRenderTargetTexture && o.needsPMREMUpdate === !0) {
          o.needsPMREMUpdate = !1;
          let h = e.get(o);
          return (
            t === null && (t = new Va(r)),
            (h = c ? t.fromEquirectangular(o, h) : t.fromCubemap(o, h)),
            e.set(o, h),
            h.texture
          );
        } else {
          if (e.has(o)) return e.get(o).texture;
          {
            const h = o.image;
            if ((c && h && h.height > 0) || (u && h && i(h))) {
              t === null && (t = new Va(r));
              const d = c ? t.fromEquirectangular(o) : t.fromCubemap(o);
              return e.set(o, d), o.addEventListener('dispose', s), d.texture;
            } else return null;
          }
        }
    }
    return o;
  }
  function i(o) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++) o[u] !== void 0 && l++;
    return l === c;
  }
  function s(o) {
    const l = o.target;
    l.removeEventListener('dispose', s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return { get: n, dispose: a };
}
function Dd(r) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let i;
    switch (n) {
      case 'WEBGL_depth_texture':
        i =
          r.getExtension('WEBGL_depth_texture') ||
          r.getExtension('MOZ_WEBGL_depth_texture') ||
          r.getExtension('WEBKIT_WEBGL_depth_texture');
        break;
      case 'EXT_texture_filter_anisotropic':
        i =
          r.getExtension('EXT_texture_filter_anisotropic') ||
          r.getExtension('MOZ_EXT_texture_filter_anisotropic') ||
          r.getExtension('WEBKIT_EXT_texture_filter_anisotropic');
        break;
      case 'WEBGL_compressed_texture_s3tc':
        i =
          r.getExtension('WEBGL_compressed_texture_s3tc') ||
          r.getExtension('MOZ_WEBGL_compressed_texture_s3tc') ||
          r.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc');
        break;
      case 'WEBGL_compressed_texture_pvrtc':
        i =
          r.getExtension('WEBGL_compressed_texture_pvrtc') ||
          r.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');
        break;
      default:
        i = r.getExtension(n);
    }
    return (e[n] = i), i;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function (n) {
      n.isWebGL2
        ? t('EXT_color_buffer_float')
        : (t('WEBGL_depth_texture'),
          t('OES_texture_float'),
          t('OES_texture_half_float'),
          t('OES_texture_half_float_linear'),
          t('OES_standard_derivatives'),
          t('OES_element_index_uint'),
          t('OES_vertex_array_object'),
          t('ANGLE_instanced_arrays')),
        t('OES_texture_float_linear'),
        t('EXT_color_buffer_half_float'),
        t('WEBGL_multisampled_render_to_texture');
    },
    get: function (n) {
      const i = t(n);
      return (
        i === null &&
          console.warn(
            'THREE.WebGLRenderer: ' + n + ' extension not supported.',
          ),
        i
      );
    },
  };
}
function Rd(r, e, t, n) {
  const i = {},
    s = new WeakMap();
  function a(h) {
    const d = h.target;
    d.index !== null && e.remove(d.index);
    for (const _ in d.attributes) e.remove(d.attributes[_]);
    d.removeEventListener('dispose', a), delete i[d.id];
    const m = s.get(d);
    m && (e.remove(m), s.delete(d)),
      n.releaseStatesOfGeometry(d),
      d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount,
      t.memory.geometries--;
  }
  function o(h, d) {
    return (
      i[d.id] === !0 ||
        (d.addEventListener('dispose', a),
        (i[d.id] = !0),
        t.memory.geometries++),
      d
    );
  }
  function l(h) {
    const d = h.attributes;
    for (const _ in d) e.update(d[_], 34962);
    const m = h.morphAttributes;
    for (const _ in m) {
      const p = m[_];
      for (let f = 0, x = p.length; f < x; f++) e.update(p[f], 34962);
    }
  }
  function c(h) {
    const d = [],
      m = h.index,
      _ = h.attributes.position;
    let p = 0;
    if (m !== null) {
      const b = m.array;
      p = m.version;
      for (let v = 0, S = b.length; v < S; v += 3) {
        const y = b[v + 0],
          C = b[v + 1],
          I = b[v + 2];
        d.push(y, C, C, I, I, y);
      }
    } else {
      const b = _.array;
      p = _.version;
      for (let v = 0, S = b.length / 3 - 1; v < S; v += 3) {
        const y = v + 0,
          C = v + 1,
          I = v + 2;
        d.push(y, C, C, I, I, y);
      }
    }
    const f = new (Xo(d) ? Ko : $o)(d, 1);
    f.version = p;
    const x = s.get(h);
    x && e.remove(x), s.set(h, f);
  }
  function u(h) {
    const d = s.get(h);
    if (d) {
      const m = h.index;
      m !== null && d.version < m.version && c(h);
    } else c(h);
    return s.get(h);
  }
  return { get: o, update: l, getWireframeAttribute: u };
}
function Id(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function a(d) {
    s = d;
  }
  let o, l;
  function c(d) {
    (o = d.type), (l = d.bytesPerElement);
  }
  function u(d, m) {
    r.drawElements(s, m, o, d * l), t.update(m, s, 1);
  }
  function h(d, m, _) {
    if (_ === 0) return;
    let p, f;
    if (i) (p = r), (f = 'drawElementsInstanced');
    else if (
      ((p = e.get('ANGLE_instanced_arrays')),
      (f = 'drawElementsInstancedANGLE'),
      p === null)
    ) {
      console.error(
        'THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.',
      );
      return;
    }
    p[f](s, m, o, d * l, _), t.update(m, s, _);
  }
  (this.setMode = a),
    (this.setIndex = c),
    (this.render = u),
    (this.renderInstances = h);
}
function Od(r) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(s, a, o) {
    switch ((t.calls++, a)) {
      case 4:
        t.triangles += o * (s / 3);
        break;
      case 1:
        t.lines += o * (s / 2);
        break;
      case 3:
        t.lines += o * (s - 1);
        break;
      case 2:
        t.lines += o * s;
        break;
      case 0:
        t.points += o * s;
        break;
      default:
        console.error('THREE.WebGLInfo: Unknown draw mode:', a);
        break;
    }
  }
  function i() {
    t.frame++, (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n,
  };
}
function Fd(r, e) {
  return r[0] - e[0];
}
function Nd(r, e) {
  return Math.abs(e[1]) - Math.abs(r[1]);
}
function zd(r, e, t) {
  const n = {},
    i = new Float32Array(8),
    s = new WeakMap(),
    a = new ht(),
    o = [];
  for (let c = 0; c < 8; c++) o[c] = [c, 0];
  function l(c, u, h, d) {
    const m = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const p =
          u.morphAttributes.position ||
          u.morphAttributes.normal ||
          u.morphAttributes.color,
        f = p !== void 0 ? p.length : 0;
      let x = s.get(u);
      if (x === void 0 || x.count !== f) {
        let Q = function () {
          R.dispose(), s.delete(u), u.removeEventListener('dispose', Q);
        };
        var _ = Q;
        x !== void 0 && x.texture.dispose();
        const S = u.morphAttributes.position !== void 0,
          y = u.morphAttributes.normal !== void 0,
          C = u.morphAttributes.color !== void 0,
          I = u.morphAttributes.position || [],
          g = u.morphAttributes.normal || [],
          T = u.morphAttributes.color || [];
        let P = 0;
        S === !0 && (P = 1), y === !0 && (P = 2), C === !0 && (P = 3);
        let G = u.attributes.position.count * P,
          $ = 1;
        G > e.maxTextureSize &&
          (($ = Math.ceil(G / e.maxTextureSize)), (G = e.maxTextureSize));
        const O = new Float32Array(G * $ * 4 * f),
          R = new Zo(O, G, $, f);
        (R.type = Rn), (R.needsUpdate = !0);
        const B = P * 4;
        for (let K = 0; K < f; K++) {
          const q = I[K],
            J = g[K],
            ee = T[K],
            k = G * $ * 4 * K;
          for (let H = 0; H < q.count; H++) {
            const te = H * B;
            S === !0 &&
              (a.fromBufferAttribute(q, H),
              (O[k + te + 0] = a.x),
              (O[k + te + 1] = a.y),
              (O[k + te + 2] = a.z),
              (O[k + te + 3] = 0)),
              y === !0 &&
                (a.fromBufferAttribute(J, H),
                (O[k + te + 4] = a.x),
                (O[k + te + 5] = a.y),
                (O[k + te + 6] = a.z),
                (O[k + te + 7] = 0)),
              C === !0 &&
                (a.fromBufferAttribute(ee, H),
                (O[k + te + 8] = a.x),
                (O[k + te + 9] = a.y),
                (O[k + te + 10] = a.z),
                (O[k + te + 11] = ee.itemSize === 4 ? a.w : 1));
          }
        }
        (x = { count: f, texture: R, size: new we(G, $) }),
          s.set(u, x),
          u.addEventListener('dispose', Q);
      }
      let b = 0;
      for (let S = 0; S < m.length; S++) b += m[S];
      const v = u.morphTargetsRelative ? 1 : 1 - b;
      d.getUniforms().setValue(r, 'morphTargetBaseInfluence', v),
        d.getUniforms().setValue(r, 'morphTargetInfluences', m),
        d.getUniforms().setValue(r, 'morphTargetsTexture', x.texture, t),
        d.getUniforms().setValue(r, 'morphTargetsTextureSize', x.size);
    } else {
      const p = m === void 0 ? 0 : m.length;
      let f = n[u.id];
      if (f === void 0 || f.length !== p) {
        f = [];
        for (let y = 0; y < p; y++) f[y] = [y, 0];
        n[u.id] = f;
      }
      for (let y = 0; y < p; y++) {
        const C = f[y];
        (C[0] = y), (C[1] = m[y]);
      }
      f.sort(Nd);
      for (let y = 0; y < 8; y++)
        y < p && f[y][1]
          ? ((o[y][0] = f[y][0]), (o[y][1] = f[y][1]))
          : ((o[y][0] = Number.MAX_SAFE_INTEGER), (o[y][1] = 0));
      o.sort(Fd);
      const x = u.morphAttributes.position,
        b = u.morphAttributes.normal;
      let v = 0;
      for (let y = 0; y < 8; y++) {
        const C = o[y],
          I = C[0],
          g = C[1];
        I !== Number.MAX_SAFE_INTEGER && g
          ? (x &&
              u.getAttribute('morphTarget' + y) !== x[I] &&
              u.setAttribute('morphTarget' + y, x[I]),
            b &&
              u.getAttribute('morphNormal' + y) !== b[I] &&
              u.setAttribute('morphNormal' + y, b[I]),
            (i[y] = g),
            (v += g))
          : (x &&
              u.hasAttribute('morphTarget' + y) === !0 &&
              u.deleteAttribute('morphTarget' + y),
            b &&
              u.hasAttribute('morphNormal' + y) === !0 &&
              u.deleteAttribute('morphNormal' + y),
            (i[y] = 0));
      }
      const S = u.morphTargetsRelative ? 1 : 1 - v;
      d.getUniforms().setValue(r, 'morphTargetBaseInfluence', S),
        d.getUniforms().setValue(r, 'morphTargetInfluences', i);
    }
  }
  return { update: l };
}
function Ud(r, e, t, n) {
  let i = new WeakMap();
  function s(l) {
    const c = n.render.frame,
      u = l.geometry,
      h = e.get(l, u);
    return (
      i.get(h) !== c && (e.update(h), i.set(h, c)),
      l.isInstancedMesh &&
        (l.hasEventListener('dispose', o) === !1 &&
          l.addEventListener('dispose', o),
        t.update(l.instanceMatrix, 34962),
        l.instanceColor !== null && t.update(l.instanceColor, 34962)),
      h
    );
  }
  function a() {
    i = new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener('dispose', o),
      t.remove(c.instanceMatrix),
      c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: s, dispose: a };
}
const il = new wt(),
  rl = new Zo(),
  sl = new Sc(),
  al = new el(),
  Ya = [],
  ja = [],
  Za = new Float32Array(16),
  $a = new Float32Array(9),
  Ka = new Float32Array(4);
function yi(r, e, t) {
  const n = r[0];
  if (n <= 0 || n > 0) return r;
  const i = e * t;
  let s = Ya[i];
  if ((s === void 0 && ((s = new Float32Array(i)), (Ya[i] = s)), e !== 0)) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a) (o += t), r[a].toArray(s, o);
  }
  return s;
}
function nt(r, e) {
  if (r.length !== e.length) return !1;
  for (let t = 0, n = r.length; t < n; t++) if (r[t] !== e[t]) return !1;
  return !0;
}
function it(r, e) {
  for (let t = 0, n = e.length; t < n; t++) r[t] = e[t];
}
function Pr(r, e) {
  let t = ja[e];
  t === void 0 && ((t = new Int32Array(e)), (ja[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = r.allocateTextureUnit();
  return t;
}
function Bd(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), (t[0] = e));
}
function kd(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (r.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (nt(t, e)) return;
    r.uniform2fv(this.addr, e), it(t, e);
  }
}
function Gd(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (r.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (r.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (nt(t, e)) return;
    r.uniform3fv(this.addr, e), it(t, e);
  }
}
function Hd(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (r.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (nt(t, e)) return;
    r.uniform4fv(this.addr, e), it(t, e);
  }
}
function Vd(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (nt(t, e)) return;
    r.uniformMatrix2fv(this.addr, !1, e), it(t, e);
  } else {
    if (nt(t, n)) return;
    Ka.set(n), r.uniformMatrix2fv(this.addr, !1, Ka), it(t, n);
  }
}
function Wd(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (nt(t, e)) return;
    r.uniformMatrix3fv(this.addr, !1, e), it(t, e);
  } else {
    if (nt(t, n)) return;
    $a.set(n), r.uniformMatrix3fv(this.addr, !1, $a), it(t, n);
  }
}
function Xd(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (nt(t, e)) return;
    r.uniformMatrix4fv(this.addr, !1, e), it(t, e);
  } else {
    if (nt(t, n)) return;
    Za.set(n), r.uniformMatrix4fv(this.addr, !1, Za), it(t, n);
  }
}
function qd(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), (t[0] = e));
}
function Yd(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (r.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (nt(t, e)) return;
    r.uniform2iv(this.addr, e), it(t, e);
  }
}
function jd(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (r.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (nt(t, e)) return;
    r.uniform3iv(this.addr, e), it(t, e);
  }
}
function Zd(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (r.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (nt(t, e)) return;
    r.uniform4iv(this.addr, e), it(t, e);
  }
}
function $d(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), (t[0] = e));
}
function Kd(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (r.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (nt(t, e)) return;
    r.uniform2uiv(this.addr, e), it(t, e);
  }
}
function Qd(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (r.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (nt(t, e)) return;
    r.uniform3uiv(this.addr, e), it(t, e);
  }
}
function Jd(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (nt(t, e)) return;
    r.uniform4uiv(this.addr, e), it(t, e);
  }
}
function ef(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2D(e || il, i);
}
function tf(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture3D(e || sl, i);
}
function nf(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    t.setTextureCube(e || al, i);
}
function rf(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2DArray(e || rl, i);
}
function sf(r) {
  switch (r) {
    case 5126:
      return Bd;
    case 35664:
      return kd;
    case 35665:
      return Gd;
    case 35666:
      return Hd;
    case 35674:
      return Vd;
    case 35675:
      return Wd;
    case 35676:
      return Xd;
    case 5124:
    case 35670:
      return qd;
    case 35667:
    case 35671:
      return Yd;
    case 35668:
    case 35672:
      return jd;
    case 35669:
    case 35673:
      return Zd;
    case 5125:
      return $d;
    case 36294:
      return Kd;
    case 36295:
      return Qd;
    case 36296:
      return Jd;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return ef;
    case 35679:
    case 36299:
    case 36307:
      return tf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return nf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return rf;
  }
}
function af(r, e) {
  r.uniform1fv(this.addr, e);
}
function of(r, e) {
  const t = yi(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function lf(r, e) {
  const t = yi(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function cf(r, e) {
  const t = yi(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function uf(r, e) {
  const t = yi(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, t);
}
function hf(r, e) {
  const t = yi(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, t);
}
function df(r, e) {
  const t = yi(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, t);
}
function ff(r, e) {
  r.uniform1iv(this.addr, e);
}
function pf(r, e) {
  r.uniform2iv(this.addr, e);
}
function mf(r, e) {
  r.uniform3iv(this.addr, e);
}
function gf(r, e) {
  r.uniform4iv(this.addr, e);
}
function _f(r, e) {
  r.uniform1uiv(this.addr, e);
}
function xf(r, e) {
  r.uniform2uiv(this.addr, e);
}
function vf(r, e) {
  r.uniform3uiv(this.addr, e);
}
function yf(r, e) {
  r.uniform4uiv(this.addr, e);
}
function bf(r, e, t) {
  const n = this.cache,
    i = e.length,
    s = Pr(t, i);
  nt(n, s) || (r.uniform1iv(this.addr, s), it(n, s));
  for (let a = 0; a !== i; ++a) t.setTexture2D(e[a] || il, s[a]);
}
function Mf(r, e, t) {
  const n = this.cache,
    i = e.length,
    s = Pr(t, i);
  nt(n, s) || (r.uniform1iv(this.addr, s), it(n, s));
  for (let a = 0; a !== i; ++a) t.setTexture3D(e[a] || sl, s[a]);
}
function Sf(r, e, t) {
  const n = this.cache,
    i = e.length,
    s = Pr(t, i);
  nt(n, s) || (r.uniform1iv(this.addr, s), it(n, s));
  for (let a = 0; a !== i; ++a) t.setTextureCube(e[a] || al, s[a]);
}
function wf(r, e, t) {
  const n = this.cache,
    i = e.length,
    s = Pr(t, i);
  nt(n, s) || (r.uniform1iv(this.addr, s), it(n, s));
  for (let a = 0; a !== i; ++a) t.setTexture2DArray(e[a] || rl, s[a]);
}
function Ef(r) {
  switch (r) {
    case 5126:
      return af;
    case 35664:
      return of;
    case 35665:
      return lf;
    case 35666:
      return cf;
    case 35674:
      return uf;
    case 35675:
      return hf;
    case 35676:
      return df;
    case 5124:
    case 35670:
      return ff;
    case 35667:
    case 35671:
      return pf;
    case 35668:
    case 35672:
      return mf;
    case 35669:
    case 35673:
      return gf;
    case 5125:
      return _f;
    case 36294:
      return xf;
    case 36295:
      return vf;
    case 36296:
      return yf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return bf;
    case 35679:
    case 36299:
    case 36307:
      return Mf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Sf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return wf;
  }
}
class Tf {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.setValue = sf(t.type));
  }
}
class Af {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.size = t.size),
      (this.setValue = Ef(t.type));
  }
}
class Cf {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, a = i.length; s !== a; ++s) {
      const o = i[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const ps = /(\w+)(\])?(\[|\.)?/g;
function Qa(r, e) {
  r.seq.push(e), (r.map[e.id] = e);
}
function Lf(r, e, t) {
  const n = r.name,
    i = n.length;
  for (ps.lastIndex = 0; ; ) {
    const s = ps.exec(n),
      a = ps.lastIndex;
    let o = s[1];
    const l = s[2] === ']',
      c = s[3];
    if ((l && (o = o | 0), c === void 0 || (c === '[' && a + 2 === i))) {
      Qa(t, c === void 0 ? new Tf(o, r, e) : new Af(o, r, e));
      break;
    } else {
      let h = t.map[o];
      h === void 0 && ((h = new Cf(o)), Qa(t, h)), (t = h);
    }
  }
}
class Sr {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i),
        a = e.getUniformLocation(t, s.name);
      Lf(s, a, this);
    }
  }
  setValue(e, t, n, i) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s],
        l = n[o.id];
      l.needsUpdate !== !1 && o.setValue(e, l.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, s = e.length; i !== s; ++i) {
      const a = e[i];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function Ja(r, e, t) {
  const n = r.createShader(e);
  return r.shaderSource(n, t), r.compileShader(n), n;
}
let Pf = 0;
function Df(r, e) {
  const t = r.split(`
`),
    n = [],
    i = Math.max(e - 6, 0),
    s = Math.min(e + 6, t.length);
  for (let a = i; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? '>' : ' '} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
function Rf(r) {
  switch (r) {
    case Un:
      return ['Linear', '( value )'];
    case Ve:
      return ['sRGB', '( value )'];
    default:
      return (
        console.warn('THREE.WebGLProgram: Unsupported encoding:', r),
        ['Linear', '( value )']
      );
  }
}
function eo(r, e, t) {
  const n = r.getShaderParameter(e, 35713),
    i = r.getShaderInfoLog(e).trim();
  if (n && i === '') return '';
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const a = parseInt(s[1]);
    return (
      t.toUpperCase() +
      `

` +
      i +
      `

` +
      Df(r.getShaderSource(e), a)
    );
  } else return i;
}
function If(r, e) {
  const t = Rf(e);
  return 'vec4 ' + r + '( vec4 value ) { return LinearTo' + t[0] + t[1] + '; }';
}
function Of(r, e) {
  let t;
  switch (e) {
    case $l:
      t = 'Linear';
      break;
    case Kl:
      t = 'Reinhard';
      break;
    case Ql:
      t = 'OptimizedCineon';
      break;
    case Jl:
      t = 'ACESFilmic';
      break;
    case ec:
      t = 'Custom';
      break;
    default:
      console.warn('THREE.WebGLProgram: Unsupported toneMapping:', e),
        (t = 'Linear');
  }
  return (
    'vec3 ' + r + '( vec3 color ) { return ' + t + 'ToneMapping( color ); }'
  );
}
function Ff(r) {
  return [
    r.extensionDerivatives ||
    r.envMapCubeUVHeight ||
    r.bumpMap ||
    r.tangentSpaceNormalMap ||
    r.clearcoatNormalMap ||
    r.flatShading ||
    r.shaderID === 'physical'
      ? '#extension GL_OES_standard_derivatives : enable'
      : '',
    (r.extensionFragDepth || r.logarithmicDepthBuffer) &&
    r.rendererExtensionFragDepth
      ? '#extension GL_EXT_frag_depth : enable'
      : '',
    r.extensionDrawBuffers && r.rendererExtensionDrawBuffers
      ? '#extension GL_EXT_draw_buffers : require'
      : '',
    (r.extensionShaderTextureLOD || r.envMap || r.transmission) &&
    r.rendererExtensionShaderTextureLod
      ? '#extension GL_EXT_shader_texture_lod : enable'
      : '',
  ].filter(Oi).join(`
`);
}
function Nf(r) {
  const e = [];
  for (const t in r) {
    const n = r[t];
    n !== !1 && e.push('#define ' + t + ' ' + n);
  }
  return e.join(`
`);
}
function zf(r, e) {
  const t = {},
    n = r.getProgramParameter(e, 35721);
  for (let i = 0; i < n; i++) {
    const s = r.getActiveAttrib(e, i),
      a = s.name;
    let o = 1;
    s.type === 35674 && (o = 2),
      s.type === 35675 && (o = 3),
      s.type === 35676 && (o = 4),
      (t[a] = {
        type: s.type,
        location: r.getAttribLocation(e, a),
        locationSize: o,
      });
  }
  return t;
}
function Oi(r) {
  return r !== '';
}
function to(r, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function no(r, e) {
  return r
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection,
    );
}
const Uf = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Cs(r) {
  return r.replace(Uf, Bf);
}
function Bf(r, e) {
  const t = Te[e];
  if (t === void 0) throw new Error('Can not resolve #include <' + e + '>');
  return Cs(t);
}
const kf =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function io(r) {
  return r.replace(kf, Gf);
}
function Gf(r, e, t, n) {
  let i = '';
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n
      .replace(/\[\s*i\s*\]/g, '[ ' + s + ' ]')
      .replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function ro(r) {
  let e =
    'precision ' +
    r.precision +
    ` float;
precision ` +
    r.precision +
    ' int;';
  return (
    r.precision === 'highp'
      ? (e += `
#define HIGH_PRECISION`)
      : r.precision === 'mediump'
      ? (e += `
#define MEDIUM_PRECISION`)
      : r.precision === 'lowp' &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
function Hf(r) {
  let e = 'SHADOWMAP_TYPE_BASIC';
  return (
    r.shadowMapType === Uo
      ? (e = 'SHADOWMAP_TYPE_PCF')
      : r.shadowMapType === Cl
      ? (e = 'SHADOWMAP_TYPE_PCF_SOFT')
      : r.shadowMapType === Ii && (e = 'SHADOWMAP_TYPE_VSM'),
    e
  );
}
function Vf(r) {
  let e = 'ENVMAP_TYPE_CUBE';
  if (r.envMap)
    switch (r.envMapMode) {
      case fi:
      case pi:
        e = 'ENVMAP_TYPE_CUBE';
        break;
      case Ar:
        e = 'ENVMAP_TYPE_CUBE_UV';
        break;
    }
  return e;
}
function Wf(r) {
  let e = 'ENVMAP_MODE_REFLECTION';
  if (r.envMap)
    switch (r.envMapMode) {
      case pi:
        e = 'ENVMAP_MODE_REFRACTION';
        break;
    }
  return e;
}
function Xf(r) {
  let e = 'ENVMAP_BLENDING_NONE';
  if (r.envMap)
    switch (r.combine) {
      case Go:
        e = 'ENVMAP_BLENDING_MULTIPLY';
        break;
      case jl:
        e = 'ENVMAP_BLENDING_MIX';
        break;
      case Zl:
        e = 'ENVMAP_BLENDING_ADD';
        break;
    }
  return e;
}
function qf(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
    texelHeight: n,
    maxMip: t,
  };
}
function Yf(r, e, t, n) {
  const i = r.getContext(),
    s = t.defines;
  let a = t.vertexShader,
    o = t.fragmentShader;
  const l = Hf(t),
    c = Vf(t),
    u = Wf(t),
    h = Xf(t),
    d = qf(t),
    m = t.isWebGL2 ? '' : Ff(t),
    _ = Nf(s),
    p = i.createProgram();
  let f,
    x,
    b = t.glslVersion
      ? '#version ' +
        t.glslVersion +
        `
`
      : '';
  t.isRawShaderMaterial
    ? ((f = [_].filter(Oi).join(`
`)),
      f.length > 0 &&
        (f += `
`),
      (x = [m, _].filter(Oi).join(`
`)),
      x.length > 0 &&
        (x += `
`))
    : ((f = [
        ro(t),
        '#define SHADER_NAME ' + t.shaderName,
        _,
        t.instancing ? '#define USE_INSTANCING' : '',
        t.instancingColor ? '#define USE_INSTANCING_COLOR' : '',
        t.supportsVertexTextures ? '#define VERTEX_TEXTURES' : '',
        t.useFog && t.fog ? '#define USE_FOG' : '',
        t.useFog && t.fogExp2 ? '#define FOG_EXP2' : '',
        t.map ? '#define USE_MAP' : '',
        t.envMap ? '#define USE_ENVMAP' : '',
        t.envMap ? '#define ' + u : '',
        t.lightMap ? '#define USE_LIGHTMAP' : '',
        t.aoMap ? '#define USE_AOMAP' : '',
        t.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
        t.bumpMap ? '#define USE_BUMPMAP' : '',
        t.normalMap ? '#define USE_NORMALMAP' : '',
        t.normalMap && t.objectSpaceNormalMap
          ? '#define OBJECTSPACE_NORMALMAP'
          : '',
        t.normalMap && t.tangentSpaceNormalMap
          ? '#define TANGENTSPACE_NORMALMAP'
          : '',
        t.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
        t.clearcoatRoughnessMap ? '#define USE_CLEARCOAT_ROUGHNESSMAP' : '',
        t.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
        t.iridescenceMap ? '#define USE_IRIDESCENCEMAP' : '',
        t.iridescenceThicknessMap ? '#define USE_IRIDESCENCE_THICKNESSMAP' : '',
        t.displacementMap && t.supportsVertexTextures
          ? '#define USE_DISPLACEMENTMAP'
          : '',
        t.specularMap ? '#define USE_SPECULARMAP' : '',
        t.specularIntensityMap ? '#define USE_SPECULARINTENSITYMAP' : '',
        t.specularColorMap ? '#define USE_SPECULARCOLORMAP' : '',
        t.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
        t.metalnessMap ? '#define USE_METALNESSMAP' : '',
        t.alphaMap ? '#define USE_ALPHAMAP' : '',
        t.transmission ? '#define USE_TRANSMISSION' : '',
        t.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',
        t.thicknessMap ? '#define USE_THICKNESSMAP' : '',
        t.sheenColorMap ? '#define USE_SHEENCOLORMAP' : '',
        t.sheenRoughnessMap ? '#define USE_SHEENROUGHNESSMAP' : '',
        t.vertexTangents ? '#define USE_TANGENT' : '',
        t.vertexColors ? '#define USE_COLOR' : '',
        t.vertexAlphas ? '#define USE_COLOR_ALPHA' : '',
        t.vertexUvs ? '#define USE_UV' : '',
        t.uvsVertexOnly ? '#define UVS_VERTEX_ONLY' : '',
        t.flatShading ? '#define FLAT_SHADED' : '',
        t.skinning ? '#define USE_SKINNING' : '',
        t.morphTargets ? '#define USE_MORPHTARGETS' : '',
        t.morphNormals && t.flatShading === !1
          ? '#define USE_MORPHNORMALS'
          : '',
        t.morphColors && t.isWebGL2 ? '#define USE_MORPHCOLORS' : '',
        t.morphTargetsCount > 0 && t.isWebGL2
          ? '#define MORPHTARGETS_TEXTURE'
          : '',
        t.morphTargetsCount > 0 && t.isWebGL2
          ? '#define MORPHTARGETS_TEXTURE_STRIDE ' + t.morphTextureStride
          : '',
        t.morphTargetsCount > 0 && t.isWebGL2
          ? '#define MORPHTARGETS_COUNT ' + t.morphTargetsCount
          : '',
        t.doubleSided ? '#define DOUBLE_SIDED' : '',
        t.flipSided ? '#define FLIP_SIDED' : '',
        t.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
        t.shadowMapEnabled ? '#define ' + l : '',
        t.sizeAttenuation ? '#define USE_SIZEATTENUATION' : '',
        t.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? '#define USE_LOGDEPTHBUF_EXT'
          : '',
        'uniform mat4 modelMatrix;',
        'uniform mat4 modelViewMatrix;',
        'uniform mat4 projectionMatrix;',
        'uniform mat4 viewMatrix;',
        'uniform mat3 normalMatrix;',
        'uniform vec3 cameraPosition;',
        'uniform bool isOrthographic;',
        '#ifdef USE_INSTANCING',
        '	attribute mat4 instanceMatrix;',
        '#endif',
        '#ifdef USE_INSTANCING_COLOR',
        '	attribute vec3 instanceColor;',
        '#endif',
        'attribute vec3 position;',
        'attribute vec3 normal;',
        'attribute vec2 uv;',
        '#ifdef USE_TANGENT',
        '	attribute vec4 tangent;',
        '#endif',
        '#if defined( USE_COLOR_ALPHA )',
        '	attribute vec4 color;',
        '#elif defined( USE_COLOR )',
        '	attribute vec3 color;',
        '#endif',
        '#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )',
        '	attribute vec3 morphTarget0;',
        '	attribute vec3 morphTarget1;',
        '	attribute vec3 morphTarget2;',
        '	attribute vec3 morphTarget3;',
        '	#ifdef USE_MORPHNORMALS',
        '		attribute vec3 morphNormal0;',
        '		attribute vec3 morphNormal1;',
        '		attribute vec3 morphNormal2;',
        '		attribute vec3 morphNormal3;',
        '	#else',
        '		attribute vec3 morphTarget4;',
        '		attribute vec3 morphTarget5;',
        '		attribute vec3 morphTarget6;',
        '		attribute vec3 morphTarget7;',
        '	#endif',
        '#endif',
        '#ifdef USE_SKINNING',
        '	attribute vec4 skinIndex;',
        '	attribute vec4 skinWeight;',
        '#endif',
        `
`,
      ].filter(Oi).join(`
`)),
      (x = [
        m,
        ro(t),
        '#define SHADER_NAME ' + t.shaderName,
        _,
        t.useFog && t.fog ? '#define USE_FOG' : '',
        t.useFog && t.fogExp2 ? '#define FOG_EXP2' : '',
        t.map ? '#define USE_MAP' : '',
        t.matcap ? '#define USE_MATCAP' : '',
        t.envMap ? '#define USE_ENVMAP' : '',
        t.envMap ? '#define ' + c : '',
        t.envMap ? '#define ' + u : '',
        t.envMap ? '#define ' + h : '',
        d ? '#define CUBEUV_TEXEL_WIDTH ' + d.texelWidth : '',
        d ? '#define CUBEUV_TEXEL_HEIGHT ' + d.texelHeight : '',
        d ? '#define CUBEUV_MAX_MIP ' + d.maxMip + '.0' : '',
        t.lightMap ? '#define USE_LIGHTMAP' : '',
        t.aoMap ? '#define USE_AOMAP' : '',
        t.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
        t.bumpMap ? '#define USE_BUMPMAP' : '',
        t.normalMap ? '#define USE_NORMALMAP' : '',
        t.normalMap && t.objectSpaceNormalMap
          ? '#define OBJECTSPACE_NORMALMAP'
          : '',
        t.normalMap && t.tangentSpaceNormalMap
          ? '#define TANGENTSPACE_NORMALMAP'
          : '',
        t.clearcoat ? '#define USE_CLEARCOAT' : '',
        t.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
        t.clearcoatRoughnessMap ? '#define USE_CLEARCOAT_ROUGHNESSMAP' : '',
        t.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
        t.iridescence ? '#define USE_IRIDESCENCE' : '',
        t.iridescenceMap ? '#define USE_IRIDESCENCEMAP' : '',
        t.iridescenceThicknessMap ? '#define USE_IRIDESCENCE_THICKNESSMAP' : '',
        t.specularMap ? '#define USE_SPECULARMAP' : '',
        t.specularIntensityMap ? '#define USE_SPECULARINTENSITYMAP' : '',
        t.specularColorMap ? '#define USE_SPECULARCOLORMAP' : '',
        t.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
        t.metalnessMap ? '#define USE_METALNESSMAP' : '',
        t.alphaMap ? '#define USE_ALPHAMAP' : '',
        t.alphaTest ? '#define USE_ALPHATEST' : '',
        t.sheen ? '#define USE_SHEEN' : '',
        t.sheenColorMap ? '#define USE_SHEENCOLORMAP' : '',
        t.sheenRoughnessMap ? '#define USE_SHEENROUGHNESSMAP' : '',
        t.transmission ? '#define USE_TRANSMISSION' : '',
        t.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',
        t.thicknessMap ? '#define USE_THICKNESSMAP' : '',
        t.decodeVideoTexture ? '#define DECODE_VIDEO_TEXTURE' : '',
        t.vertexTangents ? '#define USE_TANGENT' : '',
        t.vertexColors || t.instancingColor ? '#define USE_COLOR' : '',
        t.vertexAlphas ? '#define USE_COLOR_ALPHA' : '',
        t.vertexUvs ? '#define USE_UV' : '',
        t.uvsVertexOnly ? '#define UVS_VERTEX_ONLY' : '',
        t.gradientMap ? '#define USE_GRADIENTMAP' : '',
        t.flatShading ? '#define FLAT_SHADED' : '',
        t.doubleSided ? '#define DOUBLE_SIDED' : '',
        t.flipSided ? '#define FLIP_SIDED' : '',
        t.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
        t.shadowMapEnabled ? '#define ' + l : '',
        t.premultipliedAlpha ? '#define PREMULTIPLIED_ALPHA' : '',
        t.physicallyCorrectLights ? '#define PHYSICALLY_CORRECT_LIGHTS' : '',
        t.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? '#define USE_LOGDEPTHBUF_EXT'
          : '',
        'uniform mat4 viewMatrix;',
        'uniform vec3 cameraPosition;',
        'uniform bool isOrthographic;',
        t.toneMapping !== an ? '#define TONE_MAPPING' : '',
        t.toneMapping !== an ? Te.tonemapping_pars_fragment : '',
        t.toneMapping !== an ? Of('toneMapping', t.toneMapping) : '',
        t.dithering ? '#define DITHERING' : '',
        t.opaque ? '#define OPAQUE' : '',
        Te.encodings_pars_fragment,
        If('linearToOutputTexel', t.outputEncoding),
        t.useDepthPacking ? '#define DEPTH_PACKING ' + t.depthPacking : '',
        `
`,
      ].filter(Oi).join(`
`))),
    (a = Cs(a)),
    (a = to(a, t)),
    (a = no(a, t)),
    (o = Cs(o)),
    (o = to(o, t)),
    (o = no(o, t)),
    (a = io(a)),
    (o = io(o)),
    t.isWebGL2 &&
      t.isRawShaderMaterial !== !0 &&
      ((b = `#version 300 es
`),
      (f =
        [
          'precision mediump sampler2DArray;',
          '#define attribute in',
          '#define varying out',
          '#define texture2D texture',
        ].join(`
`) +
        `
` +
        f),
      (x =
        [
          '#define varying in',
          t.glslVersion === Aa
            ? ''
            : 'layout(location = 0) out highp vec4 pc_fragColor;',
          t.glslVersion === Aa ? '' : '#define gl_FragColor pc_fragColor',
          '#define gl_FragDepthEXT gl_FragDepth',
          '#define texture2D texture',
          '#define textureCube texture',
          '#define texture2DProj textureProj',
          '#define texture2DLodEXT textureLod',
          '#define texture2DProjLodEXT textureProjLod',
          '#define textureCubeLodEXT textureLod',
          '#define texture2DGradEXT textureGrad',
          '#define texture2DProjGradEXT textureProjGrad',
          '#define textureCubeGradEXT textureGrad',
        ].join(`
`) +
        `
` +
        x));
  const v = b + f + a,
    S = b + x + o,
    y = Ja(i, 35633, v),
    C = Ja(i, 35632, S);
  if (
    (i.attachShader(p, y),
    i.attachShader(p, C),
    t.index0AttributeName !== void 0
      ? i.bindAttribLocation(p, 0, t.index0AttributeName)
      : t.morphTargets === !0 && i.bindAttribLocation(p, 0, 'position'),
    i.linkProgram(p),
    r.debug.checkShaderErrors)
  ) {
    const T = i.getProgramInfoLog(p).trim(),
      P = i.getShaderInfoLog(y).trim(),
      G = i.getShaderInfoLog(C).trim();
    let $ = !0,
      O = !0;
    if (i.getProgramParameter(p, 35714) === !1) {
      $ = !1;
      const R = eo(i, y, 'vertex'),
        B = eo(i, C, 'fragment');
      console.error(
        'THREE.WebGLProgram: Shader Error ' +
          i.getError() +
          ' - VALIDATE_STATUS ' +
          i.getProgramParameter(p, 35715) +
          `

Program Info Log: ` +
          T +
          `
` +
          R +
          `
` +
          B,
      );
    } else
      T !== ''
        ? console.warn('THREE.WebGLProgram: Program Info Log:', T)
        : (P === '' || G === '') && (O = !1);
    O &&
      (this.diagnostics = {
        runnable: $,
        programLog: T,
        vertexShader: { log: P, prefix: f },
        fragmentShader: { log: G, prefix: x },
      });
  }
  i.deleteShader(y), i.deleteShader(C);
  let I;
  this.getUniforms = function () {
    return I === void 0 && (I = new Sr(i, p)), I;
  };
  let g;
  return (
    (this.getAttributes = function () {
      return g === void 0 && (g = zf(i, p)), g;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        i.deleteProgram(p),
        (this.program = void 0);
    }),
    (this.name = t.shaderName),
    (this.id = Pf++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = p),
    (this.vertexShader = y),
    (this.fragmentShader = C),
    this
  );
}
let jf = 0;
class Zf {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      i = this._getShaderStage(t),
      s = this._getShaderStage(n),
      a = this._getShaderCacheForMaterial(e);
    return (
      a.has(i) === !1 && (a.add(i), i.usedTimes++),
      a.has(s) === !1 && (a.add(s), s.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Set()), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && ((n = new $f(e)), t.set(e, n)), n;
  }
}
class $f {
  constructor(e) {
    (this.id = jf++), (this.code = e), (this.usedTimes = 0);
  }
}
function Kf(r, e, t, n, i, s, a) {
  const o = new Bs(),
    l = new Zf(),
    c = [],
    u = i.isWebGL2,
    h = i.logarithmicDepthBuffer,
    d = i.vertexTextures;
  let m = i.precision;
  const _ = {
    MeshDepthMaterial: 'depth',
    MeshDistanceMaterial: 'distanceRGBA',
    MeshNormalMaterial: 'normal',
    MeshBasicMaterial: 'basic',
    MeshLambertMaterial: 'lambert',
    MeshPhongMaterial: 'phong',
    MeshToonMaterial: 'toon',
    MeshStandardMaterial: 'physical',
    MeshPhysicalMaterial: 'physical',
    MeshMatcapMaterial: 'matcap',
    LineBasicMaterial: 'basic',
    LineDashedMaterial: 'dashed',
    PointsMaterial: 'points',
    ShadowMaterial: 'shadow',
    SpriteMaterial: 'sprite',
  };
  function p(g, T, P, G, $) {
    const O = G.fog,
      R = $.geometry,
      B = g.isMeshStandardMaterial ? G.environment : null,
      Q = (g.isMeshStandardMaterial ? t : e).get(g.envMap || B),
      K = Q && Q.mapping === Ar ? Q.image.height : null,
      q = _[g.type];
    g.precision !== null &&
      ((m = i.getMaxPrecision(g.precision)),
      m !== g.precision &&
        console.warn(
          'THREE.WebGLProgram.getParameters:',
          g.precision,
          'not supported, using',
          m,
          'instead.',
        ));
    const J =
        R.morphAttributes.position ||
        R.morphAttributes.normal ||
        R.morphAttributes.color,
      ee = J !== void 0 ? J.length : 0;
    let k = 0;
    R.morphAttributes.position !== void 0 && (k = 1),
      R.morphAttributes.normal !== void 0 && (k = 2),
      R.morphAttributes.color !== void 0 && (k = 3);
    let H, te, re, oe;
    if (q) {
      const Ne = jt[q];
      (H = Ne.vertexShader), (te = Ne.fragmentShader);
    } else
      (H = g.vertexShader),
        (te = g.fragmentShader),
        l.update(g),
        (re = l.getVertexShaderID(g)),
        (oe = l.getFragmentShaderID(g));
    const Y = r.getRenderTarget(),
      Le = g.alphaTest > 0,
      me = g.clearcoat > 0,
      ye = g.iridescence > 0;
    return {
      isWebGL2: u,
      shaderID: q,
      shaderName: g.type,
      vertexShader: H,
      fragmentShader: te,
      defines: g.defines,
      customVertexShaderID: re,
      customFragmentShaderID: oe,
      isRawShaderMaterial: g.isRawShaderMaterial === !0,
      glslVersion: g.glslVersion,
      precision: m,
      instancing: $.isInstancedMesh === !0,
      instancingColor: $.isInstancedMesh === !0 && $.instanceColor !== null,
      supportsVertexTextures: d,
      outputEncoding:
        Y === null
          ? r.outputEncoding
          : Y.isXRRenderTarget === !0
          ? Y.texture.encoding
          : Un,
      map: !!g.map,
      matcap: !!g.matcap,
      envMap: !!Q,
      envMapMode: Q && Q.mapping,
      envMapCubeUVHeight: K,
      lightMap: !!g.lightMap,
      aoMap: !!g.aoMap,
      emissiveMap: !!g.emissiveMap,
      bumpMap: !!g.bumpMap,
      normalMap: !!g.normalMap,
      objectSpaceNormalMap: g.normalMapType === vc,
      tangentSpaceNormalMap: g.normalMapType === Wo,
      decodeVideoTexture:
        !!g.map && g.map.isVideoTexture === !0 && g.map.encoding === Ve,
      clearcoat: me,
      clearcoatMap: me && !!g.clearcoatMap,
      clearcoatRoughnessMap: me && !!g.clearcoatRoughnessMap,
      clearcoatNormalMap: me && !!g.clearcoatNormalMap,
      iridescence: ye,
      iridescenceMap: ye && !!g.iridescenceMap,
      iridescenceThicknessMap: ye && !!g.iridescenceThicknessMap,
      displacementMap: !!g.displacementMap,
      roughnessMap: !!g.roughnessMap,
      metalnessMap: !!g.metalnessMap,
      specularMap: !!g.specularMap,
      specularIntensityMap: !!g.specularIntensityMap,
      specularColorMap: !!g.specularColorMap,
      opaque: g.transparent === !1 && g.blending === hi,
      alphaMap: !!g.alphaMap,
      alphaTest: Le,
      gradientMap: !!g.gradientMap,
      sheen: g.sheen > 0,
      sheenColorMap: !!g.sheenColorMap,
      sheenRoughnessMap: !!g.sheenRoughnessMap,
      transmission: g.transmission > 0,
      transmissionMap: !!g.transmissionMap,
      thicknessMap: !!g.thicknessMap,
      combine: g.combine,
      vertexTangents: !!g.normalMap && !!R.attributes.tangent,
      vertexColors: g.vertexColors,
      vertexAlphas:
        g.vertexColors === !0 &&
        !!R.attributes.color &&
        R.attributes.color.itemSize === 4,
      vertexUvs:
        !!g.map ||
        !!g.bumpMap ||
        !!g.normalMap ||
        !!g.specularMap ||
        !!g.alphaMap ||
        !!g.emissiveMap ||
        !!g.roughnessMap ||
        !!g.metalnessMap ||
        !!g.clearcoatMap ||
        !!g.clearcoatRoughnessMap ||
        !!g.clearcoatNormalMap ||
        !!g.iridescenceMap ||
        !!g.iridescenceThicknessMap ||
        !!g.displacementMap ||
        !!g.transmissionMap ||
        !!g.thicknessMap ||
        !!g.specularIntensityMap ||
        !!g.specularColorMap ||
        !!g.sheenColorMap ||
        !!g.sheenRoughnessMap,
      uvsVertexOnly:
        !(
          g.map ||
          g.bumpMap ||
          g.normalMap ||
          g.specularMap ||
          g.alphaMap ||
          g.emissiveMap ||
          g.roughnessMap ||
          g.metalnessMap ||
          g.clearcoatNormalMap ||
          g.iridescenceMap ||
          g.iridescenceThicknessMap ||
          g.transmission > 0 ||
          g.transmissionMap ||
          g.thicknessMap ||
          g.specularIntensityMap ||
          g.specularColorMap ||
          g.sheen > 0 ||
          g.sheenColorMap ||
          g.sheenRoughnessMap
        ) && !!g.displacementMap,
      fog: !!O,
      useFog: g.fog === !0,
      fogExp2: O && O.isFogExp2,
      flatShading: !!g.flatShading,
      sizeAttenuation: g.sizeAttenuation,
      logarithmicDepthBuffer: h,
      skinning: $.isSkinnedMesh === !0,
      morphTargets: R.morphAttributes.position !== void 0,
      morphNormals: R.morphAttributes.normal !== void 0,
      morphColors: R.morphAttributes.color !== void 0,
      morphTargetsCount: ee,
      morphTextureStride: k,
      numDirLights: T.directional.length,
      numPointLights: T.point.length,
      numSpotLights: T.spot.length,
      numSpotLightMaps: T.spotLightMap.length,
      numRectAreaLights: T.rectArea.length,
      numHemiLights: T.hemi.length,
      numDirLightShadows: T.directionalShadowMap.length,
      numPointLightShadows: T.pointShadowMap.length,
      numSpotLightShadows: T.spotShadowMap.length,
      numSpotLightShadowsWithMaps: T.numSpotLightShadowsWithMaps,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: g.dithering,
      shadowMapEnabled: r.shadowMap.enabled && P.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: g.toneMapped ? r.toneMapping : an,
      physicallyCorrectLights: r.physicallyCorrectLights,
      premultipliedAlpha: g.premultipliedAlpha,
      doubleSided: g.side === _i,
      flipSided: g.side === zt,
      useDepthPacking: !!g.depthPacking,
      depthPacking: g.depthPacking || 0,
      index0AttributeName: g.index0AttributeName,
      extensionDerivatives: g.extensions && g.extensions.derivatives,
      extensionFragDepth: g.extensions && g.extensions.fragDepth,
      extensionDrawBuffers: g.extensions && g.extensions.drawBuffers,
      extensionShaderTextureLOD: g.extensions && g.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: u || n.has('EXT_frag_depth'),
      rendererExtensionDrawBuffers: u || n.has('WEBGL_draw_buffers'),
      rendererExtensionShaderTextureLod: u || n.has('EXT_shader_texture_lod'),
      customProgramCacheKey: g.customProgramCacheKey(),
    };
  }
  function f(g) {
    const T = [];
    if (
      (g.shaderID
        ? T.push(g.shaderID)
        : (T.push(g.customVertexShaderID), T.push(g.customFragmentShaderID)),
      g.defines !== void 0)
    )
      for (const P in g.defines) T.push(P), T.push(g.defines[P]);
    return (
      g.isRawShaderMaterial === !1 &&
        (x(T, g), b(T, g), T.push(r.outputEncoding)),
      T.push(g.customProgramCacheKey),
      T.join()
    );
  }
  function x(g, T) {
    g.push(T.precision),
      g.push(T.outputEncoding),
      g.push(T.envMapMode),
      g.push(T.envMapCubeUVHeight),
      g.push(T.combine),
      g.push(T.vertexUvs),
      g.push(T.fogExp2),
      g.push(T.sizeAttenuation),
      g.push(T.morphTargetsCount),
      g.push(T.morphAttributeCount),
      g.push(T.numDirLights),
      g.push(T.numPointLights),
      g.push(T.numSpotLights),
      g.push(T.numSpotLightMaps),
      g.push(T.numHemiLights),
      g.push(T.numRectAreaLights),
      g.push(T.numDirLightShadows),
      g.push(T.numPointLightShadows),
      g.push(T.numSpotLightShadows),
      g.push(T.numSpotLightShadowsWithMaps),
      g.push(T.shadowMapType),
      g.push(T.toneMapping),
      g.push(T.numClippingPlanes),
      g.push(T.numClipIntersection),
      g.push(T.depthPacking);
  }
  function b(g, T) {
    o.disableAll(),
      T.isWebGL2 && o.enable(0),
      T.supportsVertexTextures && o.enable(1),
      T.instancing && o.enable(2),
      T.instancingColor && o.enable(3),
      T.map && o.enable(4),
      T.matcap && o.enable(5),
      T.envMap && o.enable(6),
      T.lightMap && o.enable(7),
      T.aoMap && o.enable(8),
      T.emissiveMap && o.enable(9),
      T.bumpMap && o.enable(10),
      T.normalMap && o.enable(11),
      T.objectSpaceNormalMap && o.enable(12),
      T.tangentSpaceNormalMap && o.enable(13),
      T.clearcoat && o.enable(14),
      T.clearcoatMap && o.enable(15),
      T.clearcoatRoughnessMap && o.enable(16),
      T.clearcoatNormalMap && o.enable(17),
      T.iridescence && o.enable(18),
      T.iridescenceMap && o.enable(19),
      T.iridescenceThicknessMap && o.enable(20),
      T.displacementMap && o.enable(21),
      T.specularMap && o.enable(22),
      T.roughnessMap && o.enable(23),
      T.metalnessMap && o.enable(24),
      T.gradientMap && o.enable(25),
      T.alphaMap && o.enable(26),
      T.alphaTest && o.enable(27),
      T.vertexColors && o.enable(28),
      T.vertexAlphas && o.enable(29),
      T.vertexUvs && o.enable(30),
      T.vertexTangents && o.enable(31),
      T.uvsVertexOnly && o.enable(32),
      g.push(o.mask),
      o.disableAll(),
      T.fog && o.enable(0),
      T.useFog && o.enable(1),
      T.flatShading && o.enable(2),
      T.logarithmicDepthBuffer && o.enable(3),
      T.skinning && o.enable(4),
      T.morphTargets && o.enable(5),
      T.morphNormals && o.enable(6),
      T.morphColors && o.enable(7),
      T.premultipliedAlpha && o.enable(8),
      T.shadowMapEnabled && o.enable(9),
      T.physicallyCorrectLights && o.enable(10),
      T.doubleSided && o.enable(11),
      T.flipSided && o.enable(12),
      T.useDepthPacking && o.enable(13),
      T.dithering && o.enable(14),
      T.specularIntensityMap && o.enable(15),
      T.specularColorMap && o.enable(16),
      T.transmission && o.enable(17),
      T.transmissionMap && o.enable(18),
      T.thicknessMap && o.enable(19),
      T.sheen && o.enable(20),
      T.sheenColorMap && o.enable(21),
      T.sheenRoughnessMap && o.enable(22),
      T.decodeVideoTexture && o.enable(23),
      T.opaque && o.enable(24),
      g.push(o.mask);
  }
  function v(g) {
    const T = _[g.type];
    let P;
    if (T) {
      const G = jt[T];
      P = Fc.clone(G.uniforms);
    } else P = g.uniforms;
    return P;
  }
  function S(g, T) {
    let P;
    for (let G = 0, $ = c.length; G < $; G++) {
      const O = c[G];
      if (O.cacheKey === T) {
        (P = O), ++P.usedTimes;
        break;
      }
    }
    return P === void 0 && ((P = new Yf(r, T, g, s)), c.push(P)), P;
  }
  function y(g) {
    if (--g.usedTimes === 0) {
      const T = c.indexOf(g);
      (c[T] = c[c.length - 1]), c.pop(), g.destroy();
    }
  }
  function C(g) {
    l.remove(g);
  }
  function I() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: f,
    getUniforms: v,
    acquireProgram: S,
    releaseProgram: y,
    releaseShaderCache: C,
    programs: c,
    dispose: I,
  };
}
function Qf() {
  let r = new WeakMap();
  function e(s) {
    let a = r.get(s);
    return a === void 0 && ((a = {}), r.set(s, a)), a;
  }
  function t(s) {
    r.delete(s);
  }
  function n(s, a, o) {
    r.get(s)[a] = o;
  }
  function i() {
    r = new WeakMap();
  }
  return { get: e, remove: t, update: n, dispose: i };
}
function Jf(r, e) {
  return r.groupOrder !== e.groupOrder
    ? r.groupOrder - e.groupOrder
    : r.renderOrder !== e.renderOrder
    ? r.renderOrder - e.renderOrder
    : r.material.id !== e.material.id
    ? r.material.id - e.material.id
    : r.z !== e.z
    ? r.z - e.z
    : r.id - e.id;
}
function so(r, e) {
  return r.groupOrder !== e.groupOrder
    ? r.groupOrder - e.groupOrder
    : r.renderOrder !== e.renderOrder
    ? r.renderOrder - e.renderOrder
    : r.z !== e.z
    ? e.z - r.z
    : r.id - e.id;
}
function ao() {
  const r = [];
  let e = 0;
  const t = [],
    n = [],
    i = [];
  function s() {
    (e = 0), (t.length = 0), (n.length = 0), (i.length = 0);
  }
  function a(h, d, m, _, p, f) {
    let x = r[e];
    return (
      x === void 0
        ? ((x = {
            id: h.id,
            object: h,
            geometry: d,
            material: m,
            groupOrder: _,
            renderOrder: h.renderOrder,
            z: p,
            group: f,
          }),
          (r[e] = x))
        : ((x.id = h.id),
          (x.object = h),
          (x.geometry = d),
          (x.material = m),
          (x.groupOrder = _),
          (x.renderOrder = h.renderOrder),
          (x.z = p),
          (x.group = f)),
      e++,
      x
    );
  }
  function o(h, d, m, _, p, f) {
    const x = a(h, d, m, _, p, f);
    m.transmission > 0
      ? n.push(x)
      : m.transparent === !0
      ? i.push(x)
      : t.push(x);
  }
  function l(h, d, m, _, p, f) {
    const x = a(h, d, m, _, p, f);
    m.transmission > 0
      ? n.unshift(x)
      : m.transparent === !0
      ? i.unshift(x)
      : t.unshift(x);
  }
  function c(h, d) {
    t.length > 1 && t.sort(h || Jf),
      n.length > 1 && n.sort(d || so),
      i.length > 1 && i.sort(d || so);
  }
  function u() {
    for (let h = e, d = r.length; h < d; h++) {
      const m = r[h];
      if (m.id === null) break;
      (m.id = null),
        (m.object = null),
        (m.geometry = null),
        (m.material = null),
        (m.group = null);
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: s,
    push: o,
    unshift: l,
    finish: u,
    sort: c,
  };
}
function ep() {
  let r = new WeakMap();
  function e(n, i) {
    const s = r.get(n);
    let a;
    return (
      s === void 0
        ? ((a = new ao()), r.set(n, [a]))
        : i >= s.length
        ? ((a = new ao()), s.push(a))
        : (a = s[i]),
      a
    );
  }
  function t() {
    r = new WeakMap();
  }
  return { get: e, dispose: t };
}
function tp() {
  const r = {};
  return {
    get: function (e) {
      if (r[e.id] !== void 0) return r[e.id];
      let t;
      switch (e.type) {
        case 'DirectionalLight':
          t = { direction: new L(), color: new Be() };
          break;
        case 'SpotLight':
          t = {
            position: new L(),
            direction: new L(),
            color: new Be(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case 'PointLight':
          t = { position: new L(), color: new Be(), distance: 0, decay: 0 };
          break;
        case 'HemisphereLight':
          t = { direction: new L(), skyColor: new Be(), groundColor: new Be() };
          break;
        case 'RectAreaLight':
          t = {
            color: new Be(),
            position: new L(),
            halfWidth: new L(),
            halfHeight: new L(),
          };
          break;
      }
      return (r[e.id] = t), t;
    },
  };
}
function np() {
  const r = {};
  return {
    get: function (e) {
      if (r[e.id] !== void 0) return r[e.id];
      let t;
      switch (e.type) {
        case 'DirectionalLight':
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new we(),
          };
          break;
        case 'SpotLight':
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new we(),
          };
          break;
        case 'PointLight':
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new we(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (r[e.id] = t), t;
    },
  };
}
let ip = 0;
function rp(r, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (r.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (r.map ? 1 : 0)
  );
}
function sp(r, e) {
  const t = new tp(),
    n = np(),
    i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
    };
  for (let u = 0; u < 9; u++) i.probe.push(new L());
  const s = new L(),
    a = new Qe(),
    o = new Qe();
  function l(u, h) {
    let d = 0,
      m = 0,
      _ = 0;
    for (let G = 0; G < 9; G++) i.probe[G].set(0, 0, 0);
    let p = 0,
      f = 0,
      x = 0,
      b = 0,
      v = 0,
      S = 0,
      y = 0,
      C = 0,
      I = 0,
      g = 0;
    u.sort(rp);
    const T = h !== !0 ? Math.PI : 1;
    for (let G = 0, $ = u.length; G < $; G++) {
      const O = u[G],
        R = O.color,
        B = O.intensity,
        Q = O.distance,
        K = O.shadow && O.shadow.map ? O.shadow.map.texture : null;
      if (O.isAmbientLight)
        (d += R.r * B * T), (m += R.g * B * T), (_ += R.b * B * T);
      else if (O.isLightProbe)
        for (let q = 0; q < 9; q++)
          i.probe[q].addScaledVector(O.sh.coefficients[q], B);
      else if (O.isDirectionalLight) {
        const q = t.get(O);
        if (
          (q.color.copy(O.color).multiplyScalar(O.intensity * T), O.castShadow)
        ) {
          const J = O.shadow,
            ee = n.get(O);
          (ee.shadowBias = J.bias),
            (ee.shadowNormalBias = J.normalBias),
            (ee.shadowRadius = J.radius),
            (ee.shadowMapSize = J.mapSize),
            (i.directionalShadow[p] = ee),
            (i.directionalShadowMap[p] = K),
            (i.directionalShadowMatrix[p] = O.shadow.matrix),
            S++;
        }
        (i.directional[p] = q), p++;
      } else if (O.isSpotLight) {
        const q = t.get(O);
        q.position.setFromMatrixPosition(O.matrixWorld),
          q.color.copy(R).multiplyScalar(B * T),
          (q.distance = Q),
          (q.coneCos = Math.cos(O.angle)),
          (q.penumbraCos = Math.cos(O.angle * (1 - O.penumbra))),
          (q.decay = O.decay),
          (i.spot[x] = q);
        const J = O.shadow;
        if (
          (O.map &&
            ((i.spotLightMap[I] = O.map),
            I++,
            J.updateMatrices(O),
            O.castShadow && g++),
          (i.spotLightMatrix[x] = J.matrix),
          O.castShadow)
        ) {
          const ee = n.get(O);
          (ee.shadowBias = J.bias),
            (ee.shadowNormalBias = J.normalBias),
            (ee.shadowRadius = J.radius),
            (ee.shadowMapSize = J.mapSize),
            (i.spotShadow[x] = ee),
            (i.spotShadowMap[x] = K),
            C++;
        }
        x++;
      } else if (O.isRectAreaLight) {
        const q = t.get(O);
        q.color.copy(R).multiplyScalar(B),
          q.halfWidth.set(O.width * 0.5, 0, 0),
          q.halfHeight.set(0, O.height * 0.5, 0),
          (i.rectArea[b] = q),
          b++;
      } else if (O.isPointLight) {
        const q = t.get(O);
        if (
          (q.color.copy(O.color).multiplyScalar(O.intensity * T),
          (q.distance = O.distance),
          (q.decay = O.decay),
          O.castShadow)
        ) {
          const J = O.shadow,
            ee = n.get(O);
          (ee.shadowBias = J.bias),
            (ee.shadowNormalBias = J.normalBias),
            (ee.shadowRadius = J.radius),
            (ee.shadowMapSize = J.mapSize),
            (ee.shadowCameraNear = J.camera.near),
            (ee.shadowCameraFar = J.camera.far),
            (i.pointShadow[f] = ee),
            (i.pointShadowMap[f] = K),
            (i.pointShadowMatrix[f] = O.shadow.matrix),
            y++;
        }
        (i.point[f] = q), f++;
      } else if (O.isHemisphereLight) {
        const q = t.get(O);
        q.skyColor.copy(O.color).multiplyScalar(B * T),
          q.groundColor.copy(O.groundColor).multiplyScalar(B * T),
          (i.hemi[v] = q),
          v++;
      }
    }
    b > 0 &&
      (e.isWebGL2 || r.has('OES_texture_float_linear') === !0
        ? ((i.rectAreaLTC1 = ae.LTC_FLOAT_1), (i.rectAreaLTC2 = ae.LTC_FLOAT_2))
        : r.has('OES_texture_half_float_linear') === !0
        ? ((i.rectAreaLTC1 = ae.LTC_HALF_1), (i.rectAreaLTC2 = ae.LTC_HALF_2))
        : console.error(
            'THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.',
          )),
      (i.ambient[0] = d),
      (i.ambient[1] = m),
      (i.ambient[2] = _);
    const P = i.hash;
    (P.directionalLength !== p ||
      P.pointLength !== f ||
      P.spotLength !== x ||
      P.rectAreaLength !== b ||
      P.hemiLength !== v ||
      P.numDirectionalShadows !== S ||
      P.numPointShadows !== y ||
      P.numSpotShadows !== C ||
      P.numSpotMaps !== I) &&
      ((i.directional.length = p),
      (i.spot.length = x),
      (i.rectArea.length = b),
      (i.point.length = f),
      (i.hemi.length = v),
      (i.directionalShadow.length = S),
      (i.directionalShadowMap.length = S),
      (i.pointShadow.length = y),
      (i.pointShadowMap.length = y),
      (i.spotShadow.length = C),
      (i.spotShadowMap.length = C),
      (i.directionalShadowMatrix.length = S),
      (i.pointShadowMatrix.length = y),
      (i.spotLightMatrix.length = C + I - g),
      (i.spotLightMap.length = I),
      (i.numSpotLightShadowsWithMaps = g),
      (P.directionalLength = p),
      (P.pointLength = f),
      (P.spotLength = x),
      (P.rectAreaLength = b),
      (P.hemiLength = v),
      (P.numDirectionalShadows = S),
      (P.numPointShadows = y),
      (P.numSpotShadows = C),
      (P.numSpotMaps = I),
      (i.version = ip++));
  }
  function c(u, h) {
    let d = 0,
      m = 0,
      _ = 0,
      p = 0,
      f = 0;
    const x = h.matrixWorldInverse;
    for (let b = 0, v = u.length; b < v; b++) {
      const S = u[b];
      if (S.isDirectionalLight) {
        const y = i.directional[d];
        y.direction.setFromMatrixPosition(S.matrixWorld),
          s.setFromMatrixPosition(S.target.matrixWorld),
          y.direction.sub(s),
          y.direction.transformDirection(x),
          d++;
      } else if (S.isSpotLight) {
        const y = i.spot[_];
        y.position.setFromMatrixPosition(S.matrixWorld),
          y.position.applyMatrix4(x),
          y.direction.setFromMatrixPosition(S.matrixWorld),
          s.setFromMatrixPosition(S.target.matrixWorld),
          y.direction.sub(s),
          y.direction.transformDirection(x),
          _++;
      } else if (S.isRectAreaLight) {
        const y = i.rectArea[p];
        y.position.setFromMatrixPosition(S.matrixWorld),
          y.position.applyMatrix4(x),
          o.identity(),
          a.copy(S.matrixWorld),
          a.premultiply(x),
          o.extractRotation(a),
          y.halfWidth.set(S.width * 0.5, 0, 0),
          y.halfHeight.set(0, S.height * 0.5, 0),
          y.halfWidth.applyMatrix4(o),
          y.halfHeight.applyMatrix4(o),
          p++;
      } else if (S.isPointLight) {
        const y = i.point[m];
        y.position.setFromMatrixPosition(S.matrixWorld),
          y.position.applyMatrix4(x),
          m++;
      } else if (S.isHemisphereLight) {
        const y = i.hemi[f];
        y.direction.setFromMatrixPosition(S.matrixWorld),
          y.direction.transformDirection(x),
          f++;
      }
    }
  }
  return { setup: l, setupView: c, state: i };
}
function oo(r, e) {
  const t = new sp(r, e),
    n = [],
    i = [];
  function s() {
    (n.length = 0), (i.length = 0);
  }
  function a(h) {
    n.push(h);
  }
  function o(h) {
    i.push(h);
  }
  function l(h) {
    t.setup(n, h);
  }
  function c(h) {
    t.setupView(n, h);
  }
  return {
    init: s,
    state: { lightsArray: n, shadowsArray: i, lights: t },
    setupLights: l,
    setupLightsView: c,
    pushLight: a,
    pushShadow: o,
  };
}
function ap(r, e) {
  let t = new WeakMap();
  function n(s, a = 0) {
    const o = t.get(s);
    let l;
    return (
      o === void 0
        ? ((l = new oo(r, e)), t.set(s, [l]))
        : a >= o.length
        ? ((l = new oo(r, e)), o.push(l))
        : (l = o[a]),
      l
    );
  }
  function i() {
    t = new WeakMap();
  }
  return { get: n, dispose: i };
}
class op extends vi {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = 'MeshDepthMaterial'),
      (this.depthPacking = _c),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class lp extends vi {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = 'MeshDistanceMaterial'),
      (this.referencePosition = new L()),
      (this.nearDistance = 1),
      (this.farDistance = 1e3),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.referencePosition.copy(e.referencePosition),
      (this.nearDistance = e.nearDistance),
      (this.farDistance = e.farDistance),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const cp = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  up = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function hp(r, e, t) {
  let n = new tl();
  const i = new we(),
    s = new we(),
    a = new ht(),
    o = new op({ depthPacking: xc }),
    l = new lp(),
    c = {},
    u = t.maxTextureSize,
    h = { 0: zt, 1: Nn, 2: _i },
    d = new kn({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new we() },
        radius: { value: 4 },
      },
      vertexShader: cp,
      fragmentShader: up,
    }),
    m = d.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const _ = new yt();
  _.setAttribute(
    'position',
    new Zt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3),
  );
  const p = new ce(_, d),
    f = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = Uo),
    (this.render = function (S, y, C) {
      if (
        f.enabled === !1 ||
        (f.autoUpdate === !1 && f.needsUpdate === !1) ||
        S.length === 0
      )
        return;
      const I = r.getRenderTarget(),
        g = r.getActiveCubeFace(),
        T = r.getActiveMipmapLevel(),
        P = r.state;
      P.setBlending(pn),
        P.buffers.color.setClear(1, 1, 1, 1),
        P.buffers.depth.setTest(!0),
        P.setScissorTest(!1);
      for (let G = 0, $ = S.length; G < $; G++) {
        const O = S[G],
          R = O.shadow;
        if (R === void 0) {
          console.warn('THREE.WebGLShadowMap:', O, 'has no shadow.');
          continue;
        }
        if (R.autoUpdate === !1 && R.needsUpdate === !1) continue;
        i.copy(R.mapSize);
        const B = R.getFrameExtents();
        if (
          (i.multiply(B),
          s.copy(R.mapSize),
          (i.x > u || i.y > u) &&
            (i.x > u &&
              ((s.x = Math.floor(u / B.x)),
              (i.x = s.x * B.x),
              (R.mapSize.x = s.x)),
            i.y > u &&
              ((s.y = Math.floor(u / B.y)),
              (i.y = s.y * B.y),
              (R.mapSize.y = s.y))),
          R.map === null)
        ) {
          const K = this.type !== Ii ? { minFilter: mt, magFilter: mt } : {};
          (R.map = new Bn(i.x, i.y, K)),
            (R.map.texture.name = O.name + '.shadowMap'),
            R.camera.updateProjectionMatrix();
        }
        r.setRenderTarget(R.map), r.clear();
        const Q = R.getViewportCount();
        for (let K = 0; K < Q; K++) {
          const q = R.getViewport(K);
          a.set(s.x * q.x, s.y * q.y, s.x * q.z, s.y * q.w),
            P.viewport(a),
            R.updateMatrices(O, K),
            (n = R.getFrustum()),
            v(y, C, R.camera, O, this.type);
        }
        R.isPointLightShadow !== !0 && this.type === Ii && x(R, C),
          (R.needsUpdate = !1);
      }
      (f.needsUpdate = !1), r.setRenderTarget(I, g, T);
    });
  function x(S, y) {
    const C = e.update(p);
    d.defines.VSM_SAMPLES !== S.blurSamples &&
      ((d.defines.VSM_SAMPLES = S.blurSamples),
      (m.defines.VSM_SAMPLES = S.blurSamples),
      (d.needsUpdate = !0),
      (m.needsUpdate = !0)),
      S.mapPass === null && (S.mapPass = new Bn(i.x, i.y)),
      (d.uniforms.shadow_pass.value = S.map.texture),
      (d.uniforms.resolution.value = S.mapSize),
      (d.uniforms.radius.value = S.radius),
      r.setRenderTarget(S.mapPass),
      r.clear(),
      r.renderBufferDirect(y, null, C, d, p, null),
      (m.uniforms.shadow_pass.value = S.mapPass.texture),
      (m.uniforms.resolution.value = S.mapSize),
      (m.uniforms.radius.value = S.radius),
      r.setRenderTarget(S.map),
      r.clear(),
      r.renderBufferDirect(y, null, C, m, p, null);
  }
  function b(S, y, C, I, g, T) {
    let P = null;
    const G =
      C.isPointLight === !0 ? S.customDistanceMaterial : S.customDepthMaterial;
    if (G !== void 0) P = G;
    else if (
      ((P = C.isPointLight === !0 ? l : o),
      (r.localClippingEnabled &&
        y.clipShadows === !0 &&
        Array.isArray(y.clippingPlanes) &&
        y.clippingPlanes.length !== 0) ||
        (y.displacementMap && y.displacementScale !== 0) ||
        (y.alphaMap && y.alphaTest > 0) ||
        (y.map && y.alphaTest > 0))
    ) {
      const $ = P.uuid,
        O = y.uuid;
      let R = c[$];
      R === void 0 && ((R = {}), (c[$] = R));
      let B = R[O];
      B === void 0 && ((B = P.clone()), (R[O] = B)), (P = B);
    }
    return (
      (P.visible = y.visible),
      (P.wireframe = y.wireframe),
      T === Ii
        ? (P.side = y.shadowSide !== null ? y.shadowSide : y.side)
        : (P.side = y.shadowSide !== null ? y.shadowSide : h[y.side]),
      (P.alphaMap = y.alphaMap),
      (P.alphaTest = y.alphaTest),
      (P.map = y.map),
      (P.clipShadows = y.clipShadows),
      (P.clippingPlanes = y.clippingPlanes),
      (P.clipIntersection = y.clipIntersection),
      (P.displacementMap = y.displacementMap),
      (P.displacementScale = y.displacementScale),
      (P.displacementBias = y.displacementBias),
      (P.wireframeLinewidth = y.wireframeLinewidth),
      (P.linewidth = y.linewidth),
      C.isPointLight === !0 &&
        P.isMeshDistanceMaterial === !0 &&
        (P.referencePosition.setFromMatrixPosition(C.matrixWorld),
        (P.nearDistance = I),
        (P.farDistance = g)),
      P
    );
  }
  function v(S, y, C, I, g) {
    if (S.visible === !1) return;
    if (
      S.layers.test(y.layers) &&
      (S.isMesh || S.isLine || S.isPoints) &&
      (S.castShadow || (S.receiveShadow && g === Ii)) &&
      (!S.frustumCulled || n.intersectsObject(S))
    ) {
      S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse, S.matrixWorld);
      const G = e.update(S),
        $ = S.material;
      if (Array.isArray($)) {
        const O = G.groups;
        for (let R = 0, B = O.length; R < B; R++) {
          const Q = O[R],
            K = $[Q.materialIndex];
          if (K && K.visible) {
            const q = b(S, K, I, C.near, C.far, g);
            r.renderBufferDirect(C, null, G, q, S, Q);
          }
        }
      } else if ($.visible) {
        const O = b(S, $, I, C.near, C.far, g);
        r.renderBufferDirect(C, null, G, O, S, null);
      }
    }
    const P = S.children;
    for (let G = 0, $ = P.length; G < $; G++) v(P[G], y, C, I, g);
  }
}
function dp(r, e, t) {
  const n = t.isWebGL2;
  function i() {
    let D = !1;
    const W = new ht();
    let ne = null;
    const de = new ht(0, 0, 0, 0);
    return {
      setMask: function (xe) {
        ne !== xe && !D && (r.colorMask(xe, xe, xe, xe), (ne = xe));
      },
      setLocked: function (xe) {
        D = xe;
      },
      setClear: function (xe, ze, st, dt, vn) {
        vn === !0 && ((xe *= dt), (ze *= dt), (st *= dt)),
          W.set(xe, ze, st, dt),
          de.equals(W) === !1 && (r.clearColor(xe, ze, st, dt), de.copy(W));
      },
      reset: function () {
        (D = !1), (ne = null), de.set(-1, 0, 0, 0);
      },
    };
  }
  function s() {
    let D = !1,
      W = null,
      ne = null,
      de = null;
    return {
      setTest: function (xe) {
        xe ? Le(2929) : me(2929);
      },
      setMask: function (xe) {
        W !== xe && !D && (r.depthMask(xe), (W = xe));
      },
      setFunc: function (xe) {
        if (ne !== xe) {
          switch (xe) {
            case Gl:
              r.depthFunc(512);
              break;
            case Hl:
              r.depthFunc(519);
              break;
            case Vl:
              r.depthFunc(513);
              break;
            case bs:
              r.depthFunc(515);
              break;
            case Wl:
              r.depthFunc(514);
              break;
            case Xl:
              r.depthFunc(518);
              break;
            case ql:
              r.depthFunc(516);
              break;
            case Yl:
              r.depthFunc(517);
              break;
            default:
              r.depthFunc(515);
          }
          ne = xe;
        }
      },
      setLocked: function (xe) {
        D = xe;
      },
      setClear: function (xe) {
        de !== xe && (r.clearDepth(xe), (de = xe));
      },
      reset: function () {
        (D = !1), (W = null), (ne = null), (de = null);
      },
    };
  }
  function a() {
    let D = !1,
      W = null,
      ne = null,
      de = null,
      xe = null,
      ze = null,
      st = null,
      dt = null,
      vn = null;
    return {
      setTest: function (Xe) {
        D || (Xe ? Le(2960) : me(2960));
      },
      setMask: function (Xe) {
        W !== Xe && !D && (r.stencilMask(Xe), (W = Xe));
      },
      setFunc: function (Xe, $t, It) {
        (ne !== Xe || de !== $t || xe !== It) &&
          (r.stencilFunc(Xe, $t, It), (ne = Xe), (de = $t), (xe = It));
      },
      setOp: function (Xe, $t, It) {
        (ze !== Xe || st !== $t || dt !== It) &&
          (r.stencilOp(Xe, $t, It), (ze = Xe), (st = $t), (dt = It));
      },
      setLocked: function (Xe) {
        D = Xe;
      },
      setClear: function (Xe) {
        vn !== Xe && (r.clearStencil(Xe), (vn = Xe));
      },
      reset: function () {
        (D = !1),
          (W = null),
          (ne = null),
          (de = null),
          (xe = null),
          (ze = null),
          (st = null),
          (dt = null),
          (vn = null);
      },
    };
  }
  const o = new i(),
    l = new s(),
    c = new a(),
    u = new WeakMap(),
    h = new WeakMap();
  let d = {},
    m = {},
    _ = new WeakMap(),
    p = [],
    f = null,
    x = !1,
    b = null,
    v = null,
    S = null,
    y = null,
    C = null,
    I = null,
    g = null,
    T = !1,
    P = null,
    G = null,
    $ = null,
    O = null,
    R = null;
  const B = r.getParameter(35661);
  let Q = !1,
    K = 0;
  const q = r.getParameter(7938);
  q.indexOf('WebGL') !== -1
    ? ((K = parseFloat(/^WebGL (\d)/.exec(q)[1])), (Q = K >= 1))
    : q.indexOf('OpenGL ES') !== -1 &&
      ((K = parseFloat(/^OpenGL ES (\d)/.exec(q)[1])), (Q = K >= 2));
  let J = null,
    ee = {};
  const k = r.getParameter(3088),
    H = r.getParameter(2978),
    te = new ht().fromArray(k),
    re = new ht().fromArray(H);
  function oe(D, W, ne) {
    const de = new Uint8Array(4),
      xe = r.createTexture();
    r.bindTexture(D, xe),
      r.texParameteri(D, 10241, 9728),
      r.texParameteri(D, 10240, 9728);
    for (let ze = 0; ze < ne; ze++)
      r.texImage2D(W + ze, 0, 6408, 1, 1, 0, 6408, 5121, de);
    return xe;
  }
  const Y = {};
  (Y[3553] = oe(3553, 3553, 1)),
    (Y[34067] = oe(34067, 34069, 6)),
    o.setClear(0, 0, 0, 1),
    l.setClear(1),
    c.setClear(0),
    Le(2929),
    l.setFunc(bs),
    et(!1),
    gt(Qs),
    Le(2884),
    rt(pn);
  function Le(D) {
    d[D] !== !0 && (r.enable(D), (d[D] = !0));
  }
  function me(D) {
    d[D] !== !1 && (r.disable(D), (d[D] = !1));
  }
  function ye(D, W) {
    return m[D] !== W
      ? (r.bindFramebuffer(D, W),
        (m[D] = W),
        n && (D === 36009 && (m[36160] = W), D === 36160 && (m[36009] = W)),
        !0)
      : !1;
  }
  function pe(D, W) {
    let ne = p,
      de = !1;
    if (D)
      if (
        ((ne = _.get(W)),
        ne === void 0 && ((ne = []), _.set(W, ne)),
        D.isWebGLMultipleRenderTargets)
      ) {
        const xe = D.texture;
        if (ne.length !== xe.length || ne[0] !== 36064) {
          for (let ze = 0, st = xe.length; ze < st; ze++) ne[ze] = 36064 + ze;
          (ne.length = xe.length), (de = !0);
        }
      } else ne[0] !== 36064 && ((ne[0] = 36064), (de = !0));
    else ne[0] !== 1029 && ((ne[0] = 1029), (de = !0));
    de &&
      (t.isWebGL2
        ? r.drawBuffers(ne)
        : e.get('WEBGL_draw_buffers').drawBuffersWEBGL(ne));
  }
  function Ne(D) {
    return f !== D ? (r.useProgram(D), (f = D), !0) : !1;
  }
  const Ee = { [si]: 32774, [Pl]: 32778, [Dl]: 32779 };
  if (n) (Ee[na] = 32775), (Ee[ia] = 32776);
  else {
    const D = e.get('EXT_blend_minmax');
    D !== null && ((Ee[na] = D.MIN_EXT), (Ee[ia] = D.MAX_EXT));
  }
  const be = {
    [Rl]: 0,
    [Il]: 1,
    [Ol]: 768,
    [Bo]: 770,
    [kl]: 776,
    [Ul]: 774,
    [Nl]: 772,
    [Fl]: 769,
    [ko]: 771,
    [Bl]: 775,
    [zl]: 773,
  };
  function rt(D, W, ne, de, xe, ze, st, dt) {
    if (D === pn) {
      x === !0 && (me(3042), (x = !1));
      return;
    }
    if ((x === !1 && (Le(3042), (x = !0)), D !== Ll)) {
      if (D !== b || dt !== T) {
        if (
          ((v !== si || C !== si) &&
            (r.blendEquation(32774), (v = si), (C = si)),
          dt)
        )
          switch (D) {
            case hi:
              r.blendFuncSeparate(1, 771, 1, 771);
              break;
            case Js:
              r.blendFunc(1, 1);
              break;
            case ea:
              r.blendFuncSeparate(0, 769, 0, 1);
              break;
            case ta:
              r.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error('THREE.WebGLState: Invalid blending: ', D);
              break;
          }
        else
          switch (D) {
            case hi:
              r.blendFuncSeparate(770, 771, 1, 771);
              break;
            case Js:
              r.blendFunc(770, 1);
              break;
            case ea:
              r.blendFuncSeparate(0, 769, 0, 1);
              break;
            case ta:
              r.blendFunc(0, 768);
              break;
            default:
              console.error('THREE.WebGLState: Invalid blending: ', D);
              break;
          }
        (S = null), (y = null), (I = null), (g = null), (b = D), (T = dt);
      }
      return;
    }
    (xe = xe || W),
      (ze = ze || ne),
      (st = st || de),
      (W !== v || xe !== C) &&
        (r.blendEquationSeparate(Ee[W], Ee[xe]), (v = W), (C = xe)),
      (ne !== S || de !== y || ze !== I || st !== g) &&
        (r.blendFuncSeparate(be[ne], be[de], be[ze], be[st]),
        (S = ne),
        (y = de),
        (I = ze),
        (g = st)),
      (b = D),
      (T = !1);
  }
  function Je(D, W) {
    D.side === _i ? me(2884) : Le(2884);
    let ne = D.side === zt;
    W && (ne = !ne),
      et(ne),
      D.blending === hi && D.transparent === !1
        ? rt(pn)
        : rt(
            D.blending,
            D.blendEquation,
            D.blendSrc,
            D.blendDst,
            D.blendEquationAlpha,
            D.blendSrcAlpha,
            D.blendDstAlpha,
            D.premultipliedAlpha,
          ),
      l.setFunc(D.depthFunc),
      l.setTest(D.depthTest),
      l.setMask(D.depthWrite),
      o.setMask(D.colorWrite);
    const de = D.stencilWrite;
    c.setTest(de),
      de &&
        (c.setMask(D.stencilWriteMask),
        c.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask),
        c.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)),
      Ue(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits),
      D.alphaToCoverage === !0 ? Le(32926) : me(32926);
  }
  function et(D) {
    P !== D && (D ? r.frontFace(2304) : r.frontFace(2305), (P = D));
  }
  function gt(D) {
    D !== Tl
      ? (Le(2884),
        D !== G &&
          (D === Qs
            ? r.cullFace(1029)
            : D === Al
            ? r.cullFace(1028)
            : r.cullFace(1032)))
      : me(2884),
      (G = D);
  }
  function Ye(D) {
    D !== $ && (Q && r.lineWidth(D), ($ = D));
  }
  function Ue(D, W, ne) {
    D
      ? (Le(32823),
        (O !== W || R !== ne) && (r.polygonOffset(W, ne), (O = W), (R = ne)))
      : me(32823);
  }
  function Rt(D) {
    D ? Le(3089) : me(3089);
  }
  function bt(D) {
    D === void 0 && (D = 33984 + B - 1),
      J !== D && (r.activeTexture(D), (J = D));
  }
  function E(D, W, ne) {
    ne === void 0 && (J === null ? (ne = 33984 + B - 1) : (ne = J));
    let de = ee[ne];
    de === void 0 && ((de = { type: void 0, texture: void 0 }), (ee[ne] = de)),
      (de.type !== D || de.texture !== W) &&
        (J !== ne && (r.activeTexture(ne), (J = ne)),
        r.bindTexture(D, W || Y[D]),
        (de.type = D),
        (de.texture = W));
  }
  function M() {
    const D = ee[J];
    D !== void 0 &&
      D.type !== void 0 &&
      (r.bindTexture(D.type, null), (D.type = void 0), (D.texture = void 0));
  }
  function V() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (D) {
      console.error('THREE.WebGLState:', D);
    }
  }
  function ie() {
    try {
      r.compressedTexImage3D.apply(r, arguments);
    } catch (D) {
      console.error('THREE.WebGLState:', D);
    }
  }
  function se() {
    try {
      r.texSubImage2D.apply(r, arguments);
    } catch (D) {
      console.error('THREE.WebGLState:', D);
    }
  }
  function le() {
    try {
      r.texSubImage3D.apply(r, arguments);
    } catch (D) {
      console.error('THREE.WebGLState:', D);
    }
  }
  function Me() {
    try {
      r.compressedTexSubImage2D.apply(r, arguments);
    } catch (D) {
      console.error('THREE.WebGLState:', D);
    }
  }
  function A() {
    try {
      r.compressedTexSubImage3D.apply(r, arguments);
    } catch (D) {
      console.error('THREE.WebGLState:', D);
    }
  }
  function F() {
    try {
      r.texStorage2D.apply(r, arguments);
    } catch (D) {
      console.error('THREE.WebGLState:', D);
    }
  }
  function he() {
    try {
      r.texStorage3D.apply(r, arguments);
    } catch (D) {
      console.error('THREE.WebGLState:', D);
    }
  }
  function fe() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (D) {
      console.error('THREE.WebGLState:', D);
    }
  }
  function ue() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (D) {
      console.error('THREE.WebGLState:', D);
    }
  }
  function _e(D) {
    te.equals(D) === !1 && (r.scissor(D.x, D.y, D.z, D.w), te.copy(D));
  }
  function ge(D) {
    re.equals(D) === !1 && (r.viewport(D.x, D.y, D.z, D.w), re.copy(D));
  }
  function Pe(D, W) {
    let ne = h.get(W);
    ne === void 0 && ((ne = new WeakMap()), h.set(W, ne));
    let de = ne.get(D);
    de === void 0 && ((de = r.getUniformBlockIndex(W, D.name)), ne.set(D, de));
  }
  function De(D, W) {
    const de = h.get(W).get(D);
    u.get(W) !== de &&
      (r.uniformBlockBinding(W, de, D.__bindingPointIndex), u.set(W, de));
  }
  function ke() {
    r.disable(3042),
      r.disable(2884),
      r.disable(2929),
      r.disable(32823),
      r.disable(3089),
      r.disable(2960),
      r.disable(32926),
      r.blendEquation(32774),
      r.blendFunc(1, 0),
      r.blendFuncSeparate(1, 0, 1, 0),
      r.colorMask(!0, !0, !0, !0),
      r.clearColor(0, 0, 0, 0),
      r.depthMask(!0),
      r.depthFunc(513),
      r.clearDepth(1),
      r.stencilMask(4294967295),
      r.stencilFunc(519, 0, 4294967295),
      r.stencilOp(7680, 7680, 7680),
      r.clearStencil(0),
      r.cullFace(1029),
      r.frontFace(2305),
      r.polygonOffset(0, 0),
      r.activeTexture(33984),
      r.bindFramebuffer(36160, null),
      n === !0 &&
        (r.bindFramebuffer(36009, null), r.bindFramebuffer(36008, null)),
      r.useProgram(null),
      r.lineWidth(1),
      r.scissor(0, 0, r.canvas.width, r.canvas.height),
      r.viewport(0, 0, r.canvas.width, r.canvas.height),
      (d = {}),
      (J = null),
      (ee = {}),
      (m = {}),
      (_ = new WeakMap()),
      (p = []),
      (f = null),
      (x = !1),
      (b = null),
      (v = null),
      (S = null),
      (y = null),
      (C = null),
      (I = null),
      (g = null),
      (T = !1),
      (P = null),
      (G = null),
      ($ = null),
      (O = null),
      (R = null),
      te.set(0, 0, r.canvas.width, r.canvas.height),
      re.set(0, 0, r.canvas.width, r.canvas.height),
      o.reset(),
      l.reset(),
      c.reset();
  }
  return {
    buffers: { color: o, depth: l, stencil: c },
    enable: Le,
    disable: me,
    bindFramebuffer: ye,
    drawBuffers: pe,
    useProgram: Ne,
    setBlending: rt,
    setMaterial: Je,
    setFlipSided: et,
    setCullFace: gt,
    setLineWidth: Ye,
    setPolygonOffset: Ue,
    setScissorTest: Rt,
    activeTexture: bt,
    bindTexture: E,
    unbindTexture: M,
    compressedTexImage2D: V,
    compressedTexImage3D: ie,
    texImage2D: fe,
    texImage3D: ue,
    updateUBOMapping: Pe,
    uniformBlockBinding: De,
    texStorage2D: F,
    texStorage3D: he,
    texSubImage2D: se,
    texSubImage3D: le,
    compressedTexSubImage2D: Me,
    compressedTexSubImage3D: A,
    scissor: _e,
    viewport: ge,
    reset: ke,
  };
}
function fp(r, e, t, n, i, s, a) {
  const o = i.isWebGL2,
    l = i.maxTextures,
    c = i.maxCubemapSize,
    u = i.maxTextureSize,
    h = i.maxSamples,
    d = e.has('WEBGL_multisampled_render_to_texture')
      ? e.get('WEBGL_multisampled_render_to_texture')
      : null,
    m =
      typeof navigator > 'u' ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    _ = new WeakMap();
  let p;
  const f = new WeakMap();
  let x = !1;
  try {
    x =
      typeof OffscreenCanvas < 'u' &&
      new OffscreenCanvas(1, 1).getContext('2d') !== null;
  } catch {}
  function b(E, M) {
    return x ? new OffscreenCanvas(E, M) : Vi('canvas');
  }
  function v(E, M, V, ie) {
    let se = 1;
    if (
      ((E.width > ie || E.height > ie) &&
        (se = ie / Math.max(E.width, E.height)),
      se < 1 || M === !0)
    )
      if (
        (typeof HTMLImageElement < 'u' && E instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < 'u' && E instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < 'u' && E instanceof ImageBitmap)
      ) {
        const le = M ? As : Math.floor,
          Me = le(se * E.width),
          A = le(se * E.height);
        p === void 0 && (p = b(Me, A));
        const F = V ? b(Me, A) : p;
        return (
          (F.width = Me),
          (F.height = A),
          F.getContext('2d').drawImage(E, 0, 0, Me, A),
          console.warn(
            'THREE.WebGLRenderer: Texture has been resized from (' +
              E.width +
              'x' +
              E.height +
              ') to (' +
              Me +
              'x' +
              A +
              ').',
          ),
          F
        );
      } else
        return (
          'data' in E &&
            console.warn(
              'THREE.WebGLRenderer: Image in DataTexture is too big (' +
                E.width +
                'x' +
                E.height +
                ').',
            ),
          E
        );
    return E;
  }
  function S(E) {
    return La(E.width) && La(E.height);
  }
  function y(E) {
    return o
      ? !1
      : E.wrapS !== Ht ||
          E.wrapT !== Ht ||
          (E.minFilter !== mt && E.minFilter !== Ft);
  }
  function C(E, M) {
    return E.generateMipmaps && M && E.minFilter !== mt && E.minFilter !== Ft;
  }
  function I(E) {
    r.generateMipmap(E);
  }
  function g(E, M, V, ie, se = !1) {
    if (o === !1) return M;
    if (E !== null) {
      if (r[E] !== void 0) return r[E];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          E +
          "'",
      );
    }
    let le = M;
    return (
      M === 6403 &&
        (V === 5126 && (le = 33326),
        V === 5131 && (le = 33325),
        V === 5121 && (le = 33321)),
      M === 33319 &&
        (V === 5126 && (le = 33328),
        V === 5131 && (le = 33327),
        V === 5121 && (le = 33323)),
      M === 6408 &&
        (V === 5126 && (le = 34836),
        V === 5131 && (le = 34842),
        V === 5121 && (le = ie === Ve && se === !1 ? 35907 : 32856),
        V === 32819 && (le = 32854),
        V === 32820 && (le = 32855)),
      (le === 33325 ||
        le === 33326 ||
        le === 33327 ||
        le === 33328 ||
        le === 34842 ||
        le === 34836) &&
        e.get('EXT_color_buffer_float'),
      le
    );
  }
  function T(E, M, V) {
    return C(E, V) === !0 ||
      (E.isFramebufferTexture && E.minFilter !== mt && E.minFilter !== Ft)
      ? Math.log2(Math.max(M.width, M.height)) + 1
      : E.mipmaps !== void 0 && E.mipmaps.length > 0
      ? E.mipmaps.length
      : E.isCompressedTexture && Array.isArray(E.image)
      ? M.mipmaps.length
      : 1;
  }
  function P(E) {
    return E === mt || E === ra || E === Ur ? 9728 : 9729;
  }
  function G(E) {
    const M = E.target;
    M.removeEventListener('dispose', G), O(M), M.isVideoTexture && _.delete(M);
  }
  function $(E) {
    const M = E.target;
    M.removeEventListener('dispose', $), B(M);
  }
  function O(E) {
    const M = n.get(E);
    if (M.__webglInit === void 0) return;
    const V = E.source,
      ie = f.get(V);
    if (ie) {
      const se = ie[M.__cacheKey];
      se.usedTimes--,
        se.usedTimes === 0 && R(E),
        Object.keys(ie).length === 0 && f.delete(V);
    }
    n.remove(E);
  }
  function R(E) {
    const M = n.get(E);
    r.deleteTexture(M.__webglTexture);
    const V = E.source,
      ie = f.get(V);
    delete ie[M.__cacheKey], a.memory.textures--;
  }
  function B(E) {
    const M = E.texture,
      V = n.get(E),
      ie = n.get(M);
    if (
      (ie.__webglTexture !== void 0 &&
        (r.deleteTexture(ie.__webglTexture), a.memory.textures--),
      E.depthTexture && E.depthTexture.dispose(),
      E.isWebGLCubeRenderTarget)
    )
      for (let se = 0; se < 6; se++)
        r.deleteFramebuffer(V.__webglFramebuffer[se]),
          V.__webglDepthbuffer &&
            r.deleteRenderbuffer(V.__webglDepthbuffer[se]);
    else {
      if (
        (r.deleteFramebuffer(V.__webglFramebuffer),
        V.__webglDepthbuffer && r.deleteRenderbuffer(V.__webglDepthbuffer),
        V.__webglMultisampledFramebuffer &&
          r.deleteFramebuffer(V.__webglMultisampledFramebuffer),
        V.__webglColorRenderbuffer)
      )
        for (let se = 0; se < V.__webglColorRenderbuffer.length; se++)
          V.__webglColorRenderbuffer[se] &&
            r.deleteRenderbuffer(V.__webglColorRenderbuffer[se]);
      V.__webglDepthRenderbuffer &&
        r.deleteRenderbuffer(V.__webglDepthRenderbuffer);
    }
    if (E.isWebGLMultipleRenderTargets)
      for (let se = 0, le = M.length; se < le; se++) {
        const Me = n.get(M[se]);
        Me.__webglTexture &&
          (r.deleteTexture(Me.__webglTexture), a.memory.textures--),
          n.remove(M[se]);
      }
    n.remove(M), n.remove(E);
  }
  let Q = 0;
  function K() {
    Q = 0;
  }
  function q() {
    const E = Q;
    return (
      E >= l &&
        console.warn(
          'THREE.WebGLTextures: Trying to use ' +
            E +
            ' texture units while this GPU supports only ' +
            l,
        ),
      (Q += 1),
      E
    );
  }
  function J(E) {
    const M = [];
    return (
      M.push(E.wrapS),
      M.push(E.wrapT),
      M.push(E.wrapR || 0),
      M.push(E.magFilter),
      M.push(E.minFilter),
      M.push(E.anisotropy),
      M.push(E.internalFormat),
      M.push(E.format),
      M.push(E.type),
      M.push(E.generateMipmaps),
      M.push(E.premultiplyAlpha),
      M.push(E.flipY),
      M.push(E.unpackAlignment),
      M.push(E.encoding),
      M.join()
    );
  }
  function ee(E, M) {
    const V = n.get(E);
    if (
      (E.isVideoTexture && Rt(E),
      E.isRenderTargetTexture === !1 &&
        E.version > 0 &&
        V.__version !== E.version)
    ) {
      const ie = E.image;
      if (ie === null)
        console.warn(
          'THREE.WebGLRenderer: Texture marked for update but no image data found.',
        );
      else if (ie.complete === !1)
        console.warn(
          'THREE.WebGLRenderer: Texture marked for update but image is incomplete',
        );
      else {
        me(V, E, M);
        return;
      }
    }
    t.bindTexture(3553, V.__webglTexture, 33984 + M);
  }
  function k(E, M) {
    const V = n.get(E);
    if (E.version > 0 && V.__version !== E.version) {
      me(V, E, M);
      return;
    }
    t.bindTexture(35866, V.__webglTexture, 33984 + M);
  }
  function H(E, M) {
    const V = n.get(E);
    if (E.version > 0 && V.__version !== E.version) {
      me(V, E, M);
      return;
    }
    t.bindTexture(32879, V.__webglTexture, 33984 + M);
  }
  function te(E, M) {
    const V = n.get(E);
    if (E.version > 0 && V.__version !== E.version) {
      ye(V, E, M);
      return;
    }
    t.bindTexture(34067, V.__webglTexture, 33984 + M);
  }
  const re = { [ws]: 10497, [Ht]: 33071, [Es]: 33648 },
    oe = {
      [mt]: 9728,
      [ra]: 9984,
      [Ur]: 9986,
      [Ft]: 9729,
      [tc]: 9985,
      [ki]: 9987,
    };
  function Y(E, M, V) {
    if (
      (V
        ? (r.texParameteri(E, 10242, re[M.wrapS]),
          r.texParameteri(E, 10243, re[M.wrapT]),
          (E === 32879 || E === 35866) &&
            r.texParameteri(E, 32882, re[M.wrapR]),
          r.texParameteri(E, 10240, oe[M.magFilter]),
          r.texParameteri(E, 10241, oe[M.minFilter]))
        : (r.texParameteri(E, 10242, 33071),
          r.texParameteri(E, 10243, 33071),
          (E === 32879 || E === 35866) && r.texParameteri(E, 32882, 33071),
          (M.wrapS !== Ht || M.wrapT !== Ht) &&
            console.warn(
              'THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.',
            ),
          r.texParameteri(E, 10240, P(M.magFilter)),
          r.texParameteri(E, 10241, P(M.minFilter)),
          M.minFilter !== mt &&
            M.minFilter !== Ft &&
            console.warn(
              'THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.',
            )),
      e.has('EXT_texture_filter_anisotropic') === !0)
    ) {
      const ie = e.get('EXT_texture_filter_anisotropic');
      if (
        M.magFilter === mt ||
        (M.minFilter !== Ur && M.minFilter !== ki) ||
        (M.type === Rn && e.has('OES_texture_float_linear') === !1) ||
        (o === !1 &&
          M.type === Gi &&
          e.has('OES_texture_half_float_linear') === !1)
      )
        return;
      (M.anisotropy > 1 || n.get(M).__currentAnisotropy) &&
        (r.texParameterf(
          E,
          ie.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(M.anisotropy, i.getMaxAnisotropy()),
        ),
        (n.get(M).__currentAnisotropy = M.anisotropy));
    }
  }
  function Le(E, M) {
    let V = !1;
    E.__webglInit === void 0 &&
      ((E.__webglInit = !0), M.addEventListener('dispose', G));
    const ie = M.source;
    let se = f.get(ie);
    se === void 0 && ((se = {}), f.set(ie, se));
    const le = J(M);
    if (le !== E.__cacheKey) {
      se[le] === void 0 &&
        ((se[le] = { texture: r.createTexture(), usedTimes: 0 }),
        a.memory.textures++,
        (V = !0)),
        se[le].usedTimes++;
      const Me = se[E.__cacheKey];
      Me !== void 0 &&
        (se[E.__cacheKey].usedTimes--, Me.usedTimes === 0 && R(M)),
        (E.__cacheKey = le),
        (E.__webglTexture = se[le].texture);
    }
    return V;
  }
  function me(E, M, V) {
    let ie = 3553;
    (M.isDataArrayTexture || M.isCompressedArrayTexture) && (ie = 35866),
      M.isData3DTexture && (ie = 32879);
    const se = Le(E, M),
      le = M.source;
    t.bindTexture(ie, E.__webglTexture, 33984 + V);
    const Me = n.get(le);
    if (le.version !== Me.__version || se === !0) {
      t.activeTexture(33984 + V),
        r.pixelStorei(37440, M.flipY),
        r.pixelStorei(37441, M.premultiplyAlpha),
        r.pixelStorei(3317, M.unpackAlignment),
        r.pixelStorei(37443, 0);
      const A = y(M) && S(M.image) === !1;
      let F = v(M.image, A, !1, u);
      F = bt(M, F);
      const he = S(F) || o,
        fe = s.convert(M.format, M.encoding);
      let ue = s.convert(M.type),
        _e = g(M.internalFormat, fe, ue, M.encoding, M.isVideoTexture);
      Y(ie, M, he);
      let ge;
      const Pe = M.mipmaps,
        De = o && M.isVideoTexture !== !0,
        ke = Me.__version === void 0 || se === !0,
        D = T(M, F, he);
      if (M.isDepthTexture)
        (_e = 6402),
          o
            ? M.type === Rn
              ? (_e = 36012)
              : M.type === Dn
              ? (_e = 33190)
              : M.type === di
              ? (_e = 35056)
              : (_e = 33189)
            : M.type === Rn &&
              console.error(
                'WebGLRenderer: Floating point depth texture requires WebGL2.',
              ),
          M.format === On &&
            _e === 6402 &&
            M.type !== Vo &&
            M.type !== Dn &&
            (console.warn(
              'THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.',
            ),
            (M.type = Dn),
            (ue = s.convert(M.type))),
          M.format === mi &&
            _e === 6402 &&
            ((_e = 34041),
            M.type !== di &&
              (console.warn(
                'THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.',
              ),
              (M.type = di),
              (ue = s.convert(M.type)))),
          ke &&
            (De
              ? t.texStorage2D(3553, 1, _e, F.width, F.height)
              : t.texImage2D(3553, 0, _e, F.width, F.height, 0, fe, ue, null));
      else if (M.isDataTexture)
        if (Pe.length > 0 && he) {
          De && ke && t.texStorage2D(3553, D, _e, Pe[0].width, Pe[0].height);
          for (let W = 0, ne = Pe.length; W < ne; W++)
            (ge = Pe[W]),
              De
                ? t.texSubImage2D(
                    3553,
                    W,
                    0,
                    0,
                    ge.width,
                    ge.height,
                    fe,
                    ue,
                    ge.data,
                  )
                : t.texImage2D(
                    3553,
                    W,
                    _e,
                    ge.width,
                    ge.height,
                    0,
                    fe,
                    ue,
                    ge.data,
                  );
          M.generateMipmaps = !1;
        } else
          De
            ? (ke && t.texStorage2D(3553, D, _e, F.width, F.height),
              t.texSubImage2D(3553, 0, 0, 0, F.width, F.height, fe, ue, F.data))
            : t.texImage2D(3553, 0, _e, F.width, F.height, 0, fe, ue, F.data);
      else if (M.isCompressedTexture)
        if (M.isCompressedArrayTexture) {
          De &&
            ke &&
            t.texStorage3D(35866, D, _e, Pe[0].width, Pe[0].height, F.depth);
          for (let W = 0, ne = Pe.length; W < ne; W++)
            (ge = Pe[W]),
              M.format !== Vt
                ? fe !== null
                  ? De
                    ? t.compressedTexSubImage3D(
                        35866,
                        W,
                        0,
                        0,
                        0,
                        ge.width,
                        ge.height,
                        F.depth,
                        fe,
                        ge.data,
                        0,
                        0,
                      )
                    : t.compressedTexImage3D(
                        35866,
                        W,
                        _e,
                        ge.width,
                        ge.height,
                        F.depth,
                        0,
                        ge.data,
                        0,
                        0,
                      )
                  : console.warn(
                      'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()',
                    )
                : De
                ? t.texSubImage3D(
                    35866,
                    W,
                    0,
                    0,
                    0,
                    ge.width,
                    ge.height,
                    F.depth,
                    fe,
                    ue,
                    ge.data,
                  )
                : t.texImage3D(
                    35866,
                    W,
                    _e,
                    ge.width,
                    ge.height,
                    F.depth,
                    0,
                    fe,
                    ue,
                    ge.data,
                  );
        } else {
          De && ke && t.texStorage2D(3553, D, _e, Pe[0].width, Pe[0].height);
          for (let W = 0, ne = Pe.length; W < ne; W++)
            (ge = Pe[W]),
              M.format !== Vt
                ? fe !== null
                  ? De
                    ? t.compressedTexSubImage2D(
                        3553,
                        W,
                        0,
                        0,
                        ge.width,
                        ge.height,
                        fe,
                        ge.data,
                      )
                    : t.compressedTexImage2D(
                        3553,
                        W,
                        _e,
                        ge.width,
                        ge.height,
                        0,
                        ge.data,
                      )
                  : console.warn(
                      'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()',
                    )
                : De
                ? t.texSubImage2D(
                    3553,
                    W,
                    0,
                    0,
                    ge.width,
                    ge.height,
                    fe,
                    ue,
                    ge.data,
                  )
                : t.texImage2D(
                    3553,
                    W,
                    _e,
                    ge.width,
                    ge.height,
                    0,
                    fe,
                    ue,
                    ge.data,
                  );
        }
      else if (M.isDataArrayTexture)
        De
          ? (ke && t.texStorage3D(35866, D, _e, F.width, F.height, F.depth),
            t.texSubImage3D(
              35866,
              0,
              0,
              0,
              0,
              F.width,
              F.height,
              F.depth,
              fe,
              ue,
              F.data,
            ))
          : t.texImage3D(
              35866,
              0,
              _e,
              F.width,
              F.height,
              F.depth,
              0,
              fe,
              ue,
              F.data,
            );
      else if (M.isData3DTexture)
        De
          ? (ke && t.texStorage3D(32879, D, _e, F.width, F.height, F.depth),
            t.texSubImage3D(
              32879,
              0,
              0,
              0,
              0,
              F.width,
              F.height,
              F.depth,
              fe,
              ue,
              F.data,
            ))
          : t.texImage3D(
              32879,
              0,
              _e,
              F.width,
              F.height,
              F.depth,
              0,
              fe,
              ue,
              F.data,
            );
      else if (M.isFramebufferTexture) {
        if (ke)
          if (De) t.texStorage2D(3553, D, _e, F.width, F.height);
          else {
            let W = F.width,
              ne = F.height;
            for (let de = 0; de < D; de++)
              t.texImage2D(3553, de, _e, W, ne, 0, fe, ue, null),
                (W >>= 1),
                (ne >>= 1);
          }
      } else if (Pe.length > 0 && he) {
        De && ke && t.texStorage2D(3553, D, _e, Pe[0].width, Pe[0].height);
        for (let W = 0, ne = Pe.length; W < ne; W++)
          (ge = Pe[W]),
            De
              ? t.texSubImage2D(3553, W, 0, 0, fe, ue, ge)
              : t.texImage2D(3553, W, _e, fe, ue, ge);
        M.generateMipmaps = !1;
      } else
        De
          ? (ke && t.texStorage2D(3553, D, _e, F.width, F.height),
            t.texSubImage2D(3553, 0, 0, 0, fe, ue, F))
          : t.texImage2D(3553, 0, _e, fe, ue, F);
      C(M, he) && I(ie),
        (Me.__version = le.version),
        M.onUpdate && M.onUpdate(M);
    }
    E.__version = M.version;
  }
  function ye(E, M, V) {
    if (M.image.length !== 6) return;
    const ie = Le(E, M),
      se = M.source;
    t.bindTexture(34067, E.__webglTexture, 33984 + V);
    const le = n.get(se);
    if (se.version !== le.__version || ie === !0) {
      t.activeTexture(33984 + V),
        r.pixelStorei(37440, M.flipY),
        r.pixelStorei(37441, M.premultiplyAlpha),
        r.pixelStorei(3317, M.unpackAlignment),
        r.pixelStorei(37443, 0);
      const Me = M.isCompressedTexture || M.image[0].isCompressedTexture,
        A = M.image[0] && M.image[0].isDataTexture,
        F = [];
      for (let W = 0; W < 6; W++)
        !Me && !A
          ? (F[W] = v(M.image[W], !1, !0, c))
          : (F[W] = A ? M.image[W].image : M.image[W]),
          (F[W] = bt(M, F[W]));
      const he = F[0],
        fe = S(he) || o,
        ue = s.convert(M.format, M.encoding),
        _e = s.convert(M.type),
        ge = g(M.internalFormat, ue, _e, M.encoding),
        Pe = o && M.isVideoTexture !== !0,
        De = le.__version === void 0 || ie === !0;
      let ke = T(M, he, fe);
      Y(34067, M, fe);
      let D;
      if (Me) {
        Pe && De && t.texStorage2D(34067, ke, ge, he.width, he.height);
        for (let W = 0; W < 6; W++) {
          D = F[W].mipmaps;
          for (let ne = 0; ne < D.length; ne++) {
            const de = D[ne];
            M.format !== Vt
              ? ue !== null
                ? Pe
                  ? t.compressedTexSubImage2D(
                      34069 + W,
                      ne,
                      0,
                      0,
                      de.width,
                      de.height,
                      ue,
                      de.data,
                    )
                  : t.compressedTexImage2D(
                      34069 + W,
                      ne,
                      ge,
                      de.width,
                      de.height,
                      0,
                      de.data,
                    )
                : console.warn(
                    'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()',
                  )
              : Pe
              ? t.texSubImage2D(
                  34069 + W,
                  ne,
                  0,
                  0,
                  de.width,
                  de.height,
                  ue,
                  _e,
                  de.data,
                )
              : t.texImage2D(
                  34069 + W,
                  ne,
                  ge,
                  de.width,
                  de.height,
                  0,
                  ue,
                  _e,
                  de.data,
                );
          }
        }
      } else {
        (D = M.mipmaps),
          Pe &&
            De &&
            (D.length > 0 && ke++,
            t.texStorage2D(34067, ke, ge, F[0].width, F[0].height));
        for (let W = 0; W < 6; W++)
          if (A) {
            Pe
              ? t.texSubImage2D(
                  34069 + W,
                  0,
                  0,
                  0,
                  F[W].width,
                  F[W].height,
                  ue,
                  _e,
                  F[W].data,
                )
              : t.texImage2D(
                  34069 + W,
                  0,
                  ge,
                  F[W].width,
                  F[W].height,
                  0,
                  ue,
                  _e,
                  F[W].data,
                );
            for (let ne = 0; ne < D.length; ne++) {
              const xe = D[ne].image[W].image;
              Pe
                ? t.texSubImage2D(
                    34069 + W,
                    ne + 1,
                    0,
                    0,
                    xe.width,
                    xe.height,
                    ue,
                    _e,
                    xe.data,
                  )
                : t.texImage2D(
                    34069 + W,
                    ne + 1,
                    ge,
                    xe.width,
                    xe.height,
                    0,
                    ue,
                    _e,
                    xe.data,
                  );
            }
          } else {
            Pe
              ? t.texSubImage2D(34069 + W, 0, 0, 0, ue, _e, F[W])
              : t.texImage2D(34069 + W, 0, ge, ue, _e, F[W]);
            for (let ne = 0; ne < D.length; ne++) {
              const de = D[ne];
              Pe
                ? t.texSubImage2D(34069 + W, ne + 1, 0, 0, ue, _e, de.image[W])
                : t.texImage2D(34069 + W, ne + 1, ge, ue, _e, de.image[W]);
            }
          }
      }
      C(M, fe) && I(34067),
        (le.__version = se.version),
        M.onUpdate && M.onUpdate(M);
    }
    E.__version = M.version;
  }
  function pe(E, M, V, ie, se) {
    const le = s.convert(V.format, V.encoding),
      Me = s.convert(V.type),
      A = g(V.internalFormat, le, Me, V.encoding);
    n.get(M).__hasExternalTextures ||
      (se === 32879 || se === 35866
        ? t.texImage3D(se, 0, A, M.width, M.height, M.depth, 0, le, Me, null)
        : t.texImage2D(se, 0, A, M.width, M.height, 0, le, Me, null)),
      t.bindFramebuffer(36160, E),
      Ue(M)
        ? d.framebufferTexture2DMultisampleEXT(
            36160,
            ie,
            se,
            n.get(V).__webglTexture,
            0,
            Ye(M),
          )
        : (se === 3553 || (se >= 34069 && se <= 34074)) &&
          r.framebufferTexture2D(36160, ie, se, n.get(V).__webglTexture, 0),
      t.bindFramebuffer(36160, null);
  }
  function Ne(E, M, V) {
    if ((r.bindRenderbuffer(36161, E), M.depthBuffer && !M.stencilBuffer)) {
      let ie = 33189;
      if (V || Ue(M)) {
        const se = M.depthTexture;
        se &&
          se.isDepthTexture &&
          (se.type === Rn ? (ie = 36012) : se.type === Dn && (ie = 33190));
        const le = Ye(M);
        Ue(M)
          ? d.renderbufferStorageMultisampleEXT(
              36161,
              le,
              ie,
              M.width,
              M.height,
            )
          : r.renderbufferStorageMultisample(36161, le, ie, M.width, M.height);
      } else r.renderbufferStorage(36161, ie, M.width, M.height);
      r.framebufferRenderbuffer(36160, 36096, 36161, E);
    } else if (M.depthBuffer && M.stencilBuffer) {
      const ie = Ye(M);
      V && Ue(M) === !1
        ? r.renderbufferStorageMultisample(36161, ie, 35056, M.width, M.height)
        : Ue(M)
        ? d.renderbufferStorageMultisampleEXT(
            36161,
            ie,
            35056,
            M.width,
            M.height,
          )
        : r.renderbufferStorage(36161, 34041, M.width, M.height),
        r.framebufferRenderbuffer(36160, 33306, 36161, E);
    } else {
      const ie =
        M.isWebGLMultipleRenderTargets === !0 ? M.texture : [M.texture];
      for (let se = 0; se < ie.length; se++) {
        const le = ie[se],
          Me = s.convert(le.format, le.encoding),
          A = s.convert(le.type),
          F = g(le.internalFormat, Me, A, le.encoding),
          he = Ye(M);
        V && Ue(M) === !1
          ? r.renderbufferStorageMultisample(36161, he, F, M.width, M.height)
          : Ue(M)
          ? d.renderbufferStorageMultisampleEXT(36161, he, F, M.width, M.height)
          : r.renderbufferStorage(36161, F, M.width, M.height);
      }
    }
    r.bindRenderbuffer(36161, null);
  }
  function Ee(E, M) {
    if (M && M.isWebGLCubeRenderTarget)
      throw new Error(
        'Depth Texture with cube render targets is not supported',
      );
    if (
      (t.bindFramebuffer(36160, E),
      !(M.depthTexture && M.depthTexture.isDepthTexture))
    )
      throw new Error(
        'renderTarget.depthTexture must be an instance of THREE.DepthTexture',
      );
    (!n.get(M.depthTexture).__webglTexture ||
      M.depthTexture.image.width !== M.width ||
      M.depthTexture.image.height !== M.height) &&
      ((M.depthTexture.image.width = M.width),
      (M.depthTexture.image.height = M.height),
      (M.depthTexture.needsUpdate = !0)),
      ee(M.depthTexture, 0);
    const ie = n.get(M.depthTexture).__webglTexture,
      se = Ye(M);
    if (M.depthTexture.format === On)
      Ue(M)
        ? d.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, ie, 0, se)
        : r.framebufferTexture2D(36160, 36096, 3553, ie, 0);
    else if (M.depthTexture.format === mi)
      Ue(M)
        ? d.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, ie, 0, se)
        : r.framebufferTexture2D(36160, 33306, 3553, ie, 0);
    else throw new Error('Unknown depthTexture format');
  }
  function be(E) {
    const M = n.get(E),
      V = E.isWebGLCubeRenderTarget === !0;
    if (E.depthTexture && !M.__autoAllocateDepthBuffer) {
      if (V)
        throw new Error(
          'target.depthTexture not supported in Cube render targets',
        );
      Ee(M.__webglFramebuffer, E);
    } else if (V) {
      M.__webglDepthbuffer = [];
      for (let ie = 0; ie < 6; ie++)
        t.bindFramebuffer(36160, M.__webglFramebuffer[ie]),
          (M.__webglDepthbuffer[ie] = r.createRenderbuffer()),
          Ne(M.__webglDepthbuffer[ie], E, !1);
    } else
      t.bindFramebuffer(36160, M.__webglFramebuffer),
        (M.__webglDepthbuffer = r.createRenderbuffer()),
        Ne(M.__webglDepthbuffer, E, !1);
    t.bindFramebuffer(36160, null);
  }
  function rt(E, M, V) {
    const ie = n.get(E);
    M !== void 0 && pe(ie.__webglFramebuffer, E, E.texture, 36064, 3553),
      V !== void 0 && be(E);
  }
  function Je(E) {
    const M = E.texture,
      V = n.get(E),
      ie = n.get(M);
    E.addEventListener('dispose', $),
      E.isWebGLMultipleRenderTargets !== !0 &&
        (ie.__webglTexture === void 0 &&
          (ie.__webglTexture = r.createTexture()),
        (ie.__version = M.version),
        a.memory.textures++);
    const se = E.isWebGLCubeRenderTarget === !0,
      le = E.isWebGLMultipleRenderTargets === !0,
      Me = S(E) || o;
    if (se) {
      V.__webglFramebuffer = [];
      for (let A = 0; A < 6; A++)
        V.__webglFramebuffer[A] = r.createFramebuffer();
    } else {
      if (((V.__webglFramebuffer = r.createFramebuffer()), le))
        if (i.drawBuffers) {
          const A = E.texture;
          for (let F = 0, he = A.length; F < he; F++) {
            const fe = n.get(A[F]);
            fe.__webglTexture === void 0 &&
              ((fe.__webglTexture = r.createTexture()), a.memory.textures++);
          }
        } else
          console.warn(
            'THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.',
          );
      if (o && E.samples > 0 && Ue(E) === !1) {
        const A = le ? M : [M];
        (V.__webglMultisampledFramebuffer = r.createFramebuffer()),
          (V.__webglColorRenderbuffer = []),
          t.bindFramebuffer(36160, V.__webglMultisampledFramebuffer);
        for (let F = 0; F < A.length; F++) {
          const he = A[F];
          (V.__webglColorRenderbuffer[F] = r.createRenderbuffer()),
            r.bindRenderbuffer(36161, V.__webglColorRenderbuffer[F]);
          const fe = s.convert(he.format, he.encoding),
            ue = s.convert(he.type),
            _e = g(
              he.internalFormat,
              fe,
              ue,
              he.encoding,
              E.isXRRenderTarget === !0,
            ),
            ge = Ye(E);
          r.renderbufferStorageMultisample(36161, ge, _e, E.width, E.height),
            r.framebufferRenderbuffer(
              36160,
              36064 + F,
              36161,
              V.__webglColorRenderbuffer[F],
            );
        }
        r.bindRenderbuffer(36161, null),
          E.depthBuffer &&
            ((V.__webglDepthRenderbuffer = r.createRenderbuffer()),
            Ne(V.__webglDepthRenderbuffer, E, !0)),
          t.bindFramebuffer(36160, null);
      }
    }
    if (se) {
      t.bindTexture(34067, ie.__webglTexture), Y(34067, M, Me);
      for (let A = 0; A < 6; A++)
        pe(V.__webglFramebuffer[A], E, M, 36064, 34069 + A);
      C(M, Me) && I(34067), t.unbindTexture();
    } else if (le) {
      const A = E.texture;
      for (let F = 0, he = A.length; F < he; F++) {
        const fe = A[F],
          ue = n.get(fe);
        t.bindTexture(3553, ue.__webglTexture),
          Y(3553, fe, Me),
          pe(V.__webglFramebuffer, E, fe, 36064 + F, 3553),
          C(fe, Me) && I(3553);
      }
      t.unbindTexture();
    } else {
      let A = 3553;
      (E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) &&
        (o
          ? (A = E.isWebGL3DRenderTarget ? 32879 : 35866)
          : console.error(
              'THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.',
            )),
        t.bindTexture(A, ie.__webglTexture),
        Y(A, M, Me),
        pe(V.__webglFramebuffer, E, M, 36064, A),
        C(M, Me) && I(A),
        t.unbindTexture();
    }
    E.depthBuffer && be(E);
  }
  function et(E) {
    const M = S(E) || o,
      V = E.isWebGLMultipleRenderTargets === !0 ? E.texture : [E.texture];
    for (let ie = 0, se = V.length; ie < se; ie++) {
      const le = V[ie];
      if (C(le, M)) {
        const Me = E.isWebGLCubeRenderTarget ? 34067 : 3553,
          A = n.get(le).__webglTexture;
        t.bindTexture(Me, A), I(Me), t.unbindTexture();
      }
    }
  }
  function gt(E) {
    if (o && E.samples > 0 && Ue(E) === !1) {
      const M = E.isWebGLMultipleRenderTargets ? E.texture : [E.texture],
        V = E.width,
        ie = E.height;
      let se = 16384;
      const le = [],
        Me = E.stencilBuffer ? 33306 : 36096,
        A = n.get(E),
        F = E.isWebGLMultipleRenderTargets === !0;
      if (F)
        for (let he = 0; he < M.length; he++)
          t.bindFramebuffer(36160, A.__webglMultisampledFramebuffer),
            r.framebufferRenderbuffer(36160, 36064 + he, 36161, null),
            t.bindFramebuffer(36160, A.__webglFramebuffer),
            r.framebufferTexture2D(36009, 36064 + he, 3553, null, 0);
      t.bindFramebuffer(36008, A.__webglMultisampledFramebuffer),
        t.bindFramebuffer(36009, A.__webglFramebuffer);
      for (let he = 0; he < M.length; he++) {
        le.push(36064 + he), E.depthBuffer && le.push(Me);
        const fe =
          A.__ignoreDepthValues !== void 0 ? A.__ignoreDepthValues : !1;
        if (
          (fe === !1 &&
            (E.depthBuffer && (se |= 256), E.stencilBuffer && (se |= 1024)),
          F &&
            r.framebufferRenderbuffer(
              36008,
              36064,
              36161,
              A.__webglColorRenderbuffer[he],
            ),
          fe === !0 &&
            (r.invalidateFramebuffer(36008, [Me]),
            r.invalidateFramebuffer(36009, [Me])),
          F)
        ) {
          const ue = n.get(M[he]).__webglTexture;
          r.framebufferTexture2D(36009, 36064, 3553, ue, 0);
        }
        r.blitFramebuffer(0, 0, V, ie, 0, 0, V, ie, se, 9728),
          m && r.invalidateFramebuffer(36008, le);
      }
      if ((t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), F))
        for (let he = 0; he < M.length; he++) {
          t.bindFramebuffer(36160, A.__webglMultisampledFramebuffer),
            r.framebufferRenderbuffer(
              36160,
              36064 + he,
              36161,
              A.__webglColorRenderbuffer[he],
            );
          const fe = n.get(M[he]).__webglTexture;
          t.bindFramebuffer(36160, A.__webglFramebuffer),
            r.framebufferTexture2D(36009, 36064 + he, 3553, fe, 0);
        }
      t.bindFramebuffer(36009, A.__webglMultisampledFramebuffer);
    }
  }
  function Ye(E) {
    return Math.min(h, E.samples);
  }
  function Ue(E) {
    const M = n.get(E);
    return (
      o &&
      E.samples > 0 &&
      e.has('WEBGL_multisampled_render_to_texture') === !0 &&
      M.__useRenderToTexture !== !1
    );
  }
  function Rt(E) {
    const M = a.render.frame;
    _.get(E) !== M && (_.set(E, M), E.update());
  }
  function bt(E, M) {
    const V = E.encoding,
      ie = E.format,
      se = E.type;
    return (
      E.isCompressedTexture === !0 ||
        E.isVideoTexture === !0 ||
        E.format === Ts ||
        (V !== Un &&
          (V === Ve
            ? o === !1
              ? e.has('EXT_sRGB') === !0 && ie === Vt
                ? ((E.format = Ts),
                  (E.minFilter = Ft),
                  (E.generateMipmaps = !1))
                : (M = Yo.sRGBToLinear(M))
              : (ie !== Vt || se !== zn) &&
                console.warn(
                  'THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.',
                )
            : console.error(
                'THREE.WebGLTextures: Unsupported texture encoding:',
                V,
              ))),
      M
    );
  }
  (this.allocateTextureUnit = q),
    (this.resetTextureUnits = K),
    (this.setTexture2D = ee),
    (this.setTexture2DArray = k),
    (this.setTexture3D = H),
    (this.setTextureCube = te),
    (this.rebindTextures = rt),
    (this.setupRenderTarget = Je),
    (this.updateRenderTargetMipmap = et),
    (this.updateMultisampleRenderTarget = gt),
    (this.setupDepthRenderbuffer = be),
    (this.setupFrameBufferTexture = pe),
    (this.useMultisampledRTT = Ue);
}
function pp(r, e, t) {
  const n = t.isWebGL2;
  function i(s, a = null) {
    let o;
    if (s === zn) return 5121;
    if (s === sc) return 32819;
    if (s === ac) return 32820;
    if (s === nc) return 5120;
    if (s === ic) return 5122;
    if (s === Vo) return 5123;
    if (s === rc) return 5124;
    if (s === Dn) return 5125;
    if (s === Rn) return 5126;
    if (s === Gi)
      return n
        ? 5131
        : ((o = e.get('OES_texture_half_float')),
          o !== null ? o.HALF_FLOAT_OES : null);
    if (s === oc) return 6406;
    if (s === Vt) return 6408;
    if (s === cc) return 6409;
    if (s === uc) return 6410;
    if (s === On) return 6402;
    if (s === mi) return 34041;
    if (s === lc)
      return (
        console.warn(
          'THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228',
        ),
        6408
      );
    if (s === Ts)
      return (o = e.get('EXT_sRGB')), o !== null ? o.SRGB_ALPHA_EXT : null;
    if (s === hc) return 6403;
    if (s === dc) return 36244;
    if (s === fc) return 33319;
    if (s === pc) return 33320;
    if (s === mc) return 36249;
    if (s === Br || s === kr || s === Gr || s === Hr)
      if (a === Ve)
        if (((o = e.get('WEBGL_compressed_texture_s3tc_srgb')), o !== null)) {
          if (s === Br) return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === kr) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === Gr) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === Hr) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((o = e.get('WEBGL_compressed_texture_s3tc')), o !== null)) {
        if (s === Br) return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === kr) return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === Gr) return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === Hr) return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (s === sa || s === aa || s === oa || s === la)
      if (((o = e.get('WEBGL_compressed_texture_pvrtc')), o !== null)) {
        if (s === sa) return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === aa) return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === oa) return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === la) return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (s === gc)
      return (
        (o = e.get('WEBGL_compressed_texture_etc1')),
        o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null
      );
    if (s === ca || s === ua)
      if (((o = e.get('WEBGL_compressed_texture_etc')), o !== null)) {
        if (s === ca)
          return a === Ve ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
        if (s === ua)
          return a === Ve
            ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : o.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      s === ha ||
      s === da ||
      s === fa ||
      s === pa ||
      s === ma ||
      s === ga ||
      s === _a ||
      s === xa ||
      s === va ||
      s === ya ||
      s === ba ||
      s === Ma ||
      s === Sa ||
      s === wa
    )
      if (((o = e.get('WEBGL_compressed_texture_astc')), o !== null)) {
        if (s === ha)
          return a === Ve
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === da)
          return a === Ve
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === fa)
          return a === Ve
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === pa)
          return a === Ve
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === ma)
          return a === Ve
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === ga)
          return a === Ve
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === _a)
          return a === Ve
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === xa)
          return a === Ve
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === va)
          return a === Ve
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === ya)
          return a === Ve
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === ba)
          return a === Ve
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === Ma)
          return a === Ve
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === Sa)
          return a === Ve
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === wa)
          return a === Ve
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (s === Ea)
      if (((o = e.get('EXT_texture_compression_bptc')), o !== null)) {
        if (s === Ea)
          return a === Ve
            ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else return null;
    return s === di
      ? n
        ? 34042
        : ((o = e.get('WEBGL_depth_texture')),
          o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null)
      : r[s] !== void 0
      ? r[s]
      : null;
  }
  return { convert: i };
}
class mp extends Nt {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class mr extends lt {
  constructor() {
    super(), (this.isGroup = !0), (this.type = 'Group');
  }
}
const gp = { type: 'move' };
class ms {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new mr()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new mr()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new L()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new L())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new mr()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new L()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new L())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: 'connected', data: e }), this;
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: 'disconnected', data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let i = null,
      s = null,
      a = null;
    const o = this._targetRay,
      l = this._grip,
      c = this._hand;
    if (e && t.session.visibilityState !== 'visible-blurred') {
      if (c && e.hand) {
        a = !0;
        for (const p of e.hand.values()) {
          const f = t.getJointPose(p, n),
            x = this._getHandJoint(c, p);
          f !== null &&
            (x.matrix.fromArray(f.transform.matrix),
            x.matrix.decompose(x.position, x.rotation, x.scale),
            (x.jointRadius = f.radius)),
            (x.visible = f !== null);
        }
        const u = c.joints['index-finger-tip'],
          h = c.joints['thumb-tip'],
          d = u.position.distanceTo(h.position),
          m = 0.02,
          _ = 0.005;
        c.inputState.pinching && d > m + _
          ? ((c.inputState.pinching = !1),
            this.dispatchEvent({
              type: 'pinchend',
              handedness: e.handedness,
              target: this,
            }))
          : !c.inputState.pinching &&
            d <= m - _ &&
            ((c.inputState.pinching = !0),
            this.dispatchEvent({
              type: 'pinchstart',
              handedness: e.handedness,
              target: this,
            }));
      } else
        l !== null &&
          e.gripSpace &&
          ((s = t.getPose(e.gripSpace, n)),
          s !== null &&
            (l.matrix.fromArray(s.transform.matrix),
            l.matrix.decompose(l.position, l.rotation, l.scale),
            s.linearVelocity
              ? ((l.hasLinearVelocity = !0),
                l.linearVelocity.copy(s.linearVelocity))
              : (l.hasLinearVelocity = !1),
            s.angularVelocity
              ? ((l.hasAngularVelocity = !0),
                l.angularVelocity.copy(s.angularVelocity))
              : (l.hasAngularVelocity = !1)));
      o !== null &&
        ((i = t.getPose(e.targetRaySpace, n)),
        i === null && s !== null && (i = s),
        i !== null &&
          (o.matrix.fromArray(i.transform.matrix),
          o.matrix.decompose(o.position, o.rotation, o.scale),
          i.linearVelocity
            ? ((o.hasLinearVelocity = !0),
              o.linearVelocity.copy(i.linearVelocity))
            : (o.hasLinearVelocity = !1),
          i.angularVelocity
            ? ((o.hasAngularVelocity = !0),
              o.angularVelocity.copy(i.angularVelocity))
            : (o.hasAngularVelocity = !1),
          this.dispatchEvent(gp)));
    }
    return (
      o !== null && (o.visible = i !== null),
      l !== null && (l.visible = s !== null),
      c !== null && (c.visible = a !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new mr();
      (n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (e.joints[t.jointName] = n),
        e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class _p extends wt {
  constructor(e, t, n, i, s, a, o, l, c, u) {
    if (((u = u !== void 0 ? u : On), u !== On && u !== mi))
      throw new Error(
        'DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat',
      );
    n === void 0 && u === On && (n = Dn),
      n === void 0 && u === mi && (n = di),
      super(null, i, s, a, o, l, u, n, c),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = o !== void 0 ? o : mt),
      (this.minFilter = l !== void 0 ? l : mt),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
class xp extends Gn {
  constructor(e, t) {
    super();
    const n = this;
    let i = null,
      s = 1,
      a = null,
      o = 'local-floor',
      l = null,
      c = null,
      u = null,
      h = null,
      d = null,
      m = null;
    const _ = t.getContextAttributes();
    let p = null,
      f = null;
    const x = [],
      b = [],
      v = new Set(),
      S = new Map(),
      y = new Nt();
    y.layers.enable(1), (y.viewport = new ht());
    const C = new Nt();
    C.layers.enable(2), (C.viewport = new ht());
    const I = [y, C],
      g = new mp();
    g.layers.enable(1), g.layers.enable(2);
    let T = null,
      P = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (k) {
        let H = x[k];
        return (
          H === void 0 && ((H = new ms()), (x[k] = H)), H.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (k) {
        let H = x[k];
        return H === void 0 && ((H = new ms()), (x[k] = H)), H.getGripSpace();
      }),
      (this.getHand = function (k) {
        let H = x[k];
        return H === void 0 && ((H = new ms()), (x[k] = H)), H.getHandSpace();
      });
    function G(k) {
      const H = b.indexOf(k.inputSource);
      if (H === -1) return;
      const te = x[H];
      te !== void 0 && te.dispatchEvent({ type: k.type, data: k.inputSource });
    }
    function $() {
      i.removeEventListener('select', G),
        i.removeEventListener('selectstart', G),
        i.removeEventListener('selectend', G),
        i.removeEventListener('squeeze', G),
        i.removeEventListener('squeezestart', G),
        i.removeEventListener('squeezeend', G),
        i.removeEventListener('end', $),
        i.removeEventListener('inputsourceschange', O);
      for (let k = 0; k < x.length; k++) {
        const H = b[k];
        H !== null && ((b[k] = null), x[k].disconnect(H));
      }
      (T = null),
        (P = null),
        e.setRenderTarget(p),
        (d = null),
        (h = null),
        (u = null),
        (i = null),
        (f = null),
        ee.stop(),
        (n.isPresenting = !1),
        n.dispatchEvent({ type: 'sessionend' });
    }
    (this.setFramebufferScaleFactor = function (k) {
      (s = k),
        n.isPresenting === !0 &&
          console.warn(
            'THREE.WebXRManager: Cannot change framebuffer scale while presenting.',
          );
    }),
      (this.setReferenceSpaceType = function (k) {
        (o = k),
          n.isPresenting === !0 &&
            console.warn(
              'THREE.WebXRManager: Cannot change reference space type while presenting.',
            );
      }),
      (this.getReferenceSpace = function () {
        return l || a;
      }),
      (this.setReferenceSpace = function (k) {
        l = k;
      }),
      (this.getBaseLayer = function () {
        return h !== null ? h : d;
      }),
      (this.getBinding = function () {
        return u;
      }),
      (this.getFrame = function () {
        return m;
      }),
      (this.getSession = function () {
        return i;
      }),
      (this.setSession = async function (k) {
        if (((i = k), i !== null)) {
          if (
            ((p = e.getRenderTarget()),
            i.addEventListener('select', G),
            i.addEventListener('selectstart', G),
            i.addEventListener('selectend', G),
            i.addEventListener('squeeze', G),
            i.addEventListener('squeezestart', G),
            i.addEventListener('squeezeend', G),
            i.addEventListener('end', $),
            i.addEventListener('inputsourceschange', O),
            _.xrCompatible !== !0 && (await t.makeXRCompatible()),
            i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)
          ) {
            const H = {
              antialias: i.renderState.layers === void 0 ? _.antialias : !0,
              alpha: _.alpha,
              depth: _.depth,
              stencil: _.stencil,
              framebufferScaleFactor: s,
            };
            (d = new XRWebGLLayer(i, t, H)),
              i.updateRenderState({ baseLayer: d }),
              (f = new Bn(d.framebufferWidth, d.framebufferHeight, {
                format: Vt,
                type: zn,
                encoding: e.outputEncoding,
                stencilBuffer: _.stencil,
              }));
          } else {
            let H = null,
              te = null,
              re = null;
            _.depth &&
              ((re = _.stencil ? 35056 : 33190),
              (H = _.stencil ? mi : On),
              (te = _.stencil ? di : Dn));
            const oe = { colorFormat: 32856, depthFormat: re, scaleFactor: s };
            (u = new XRWebGLBinding(i, t)),
              (h = u.createProjectionLayer(oe)),
              i.updateRenderState({ layers: [h] }),
              (f = new Bn(h.textureWidth, h.textureHeight, {
                format: Vt,
                type: zn,
                depthTexture: new _p(
                  h.textureWidth,
                  h.textureHeight,
                  te,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  H,
                ),
                stencilBuffer: _.stencil,
                encoding: e.outputEncoding,
                samples: _.antialias ? 4 : 0,
              }));
            const Y = e.properties.get(f);
            Y.__ignoreDepthValues = h.ignoreDepthValues;
          }
          (f.isXRRenderTarget = !0),
            this.setFoveation(1),
            (l = null),
            (a = await i.requestReferenceSpace(o)),
            ee.setContext(i),
            ee.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: 'sessionstart' });
        }
      });
    function O(k) {
      for (let H = 0; H < k.removed.length; H++) {
        const te = k.removed[H],
          re = b.indexOf(te);
        re >= 0 && ((b[re] = null), x[re].disconnect(te));
      }
      for (let H = 0; H < k.added.length; H++) {
        const te = k.added[H];
        let re = b.indexOf(te);
        if (re === -1) {
          for (let Y = 0; Y < x.length; Y++)
            if (Y >= b.length) {
              b.push(te), (re = Y);
              break;
            } else if (b[Y] === null) {
              (b[Y] = te), (re = Y);
              break;
            }
          if (re === -1) break;
        }
        const oe = x[re];
        oe && oe.connect(te);
      }
    }
    const R = new L(),
      B = new L();
    function Q(k, H, te) {
      R.setFromMatrixPosition(H.matrixWorld),
        B.setFromMatrixPosition(te.matrixWorld);
      const re = R.distanceTo(B),
        oe = H.projectionMatrix.elements,
        Y = te.projectionMatrix.elements,
        Le = oe[14] / (oe[10] - 1),
        me = oe[14] / (oe[10] + 1),
        ye = (oe[9] + 1) / oe[5],
        pe = (oe[9] - 1) / oe[5],
        Ne = (oe[8] - 1) / oe[0],
        Ee = (Y[8] + 1) / Y[0],
        be = Le * Ne,
        rt = Le * Ee,
        Je = re / (-Ne + Ee),
        et = Je * -Ne;
      H.matrixWorld.decompose(k.position, k.quaternion, k.scale),
        k.translateX(et),
        k.translateZ(Je),
        k.matrixWorld.compose(k.position, k.quaternion, k.scale),
        k.matrixWorldInverse.copy(k.matrixWorld).invert();
      const gt = Le + Je,
        Ye = me + Je,
        Ue = be - et,
        Rt = rt + (re - et),
        bt = ((ye * me) / Ye) * gt,
        E = ((pe * me) / Ye) * gt;
      k.projectionMatrix.makePerspective(Ue, Rt, bt, E, gt, Ye);
    }
    function K(k, H) {
      H === null
        ? k.matrixWorld.copy(k.matrix)
        : k.matrixWorld.multiplyMatrices(H.matrixWorld, k.matrix),
        k.matrixWorldInverse.copy(k.matrixWorld).invert();
    }
    (this.updateCamera = function (k) {
      if (i === null) return;
      (g.near = C.near = y.near = k.near),
        (g.far = C.far = y.far = k.far),
        (T !== g.near || P !== g.far) &&
          (i.updateRenderState({ depthNear: g.near, depthFar: g.far }),
          (T = g.near),
          (P = g.far));
      const H = k.parent,
        te = g.cameras;
      K(g, H);
      for (let oe = 0; oe < te.length; oe++) K(te[oe], H);
      g.matrixWorld.decompose(g.position, g.quaternion, g.scale),
        k.matrix.copy(g.matrix),
        k.matrix.decompose(k.position, k.quaternion, k.scale);
      const re = k.children;
      for (let oe = 0, Y = re.length; oe < Y; oe++)
        re[oe].updateMatrixWorld(!0);
      te.length === 2
        ? Q(g, y, C)
        : g.projectionMatrix.copy(y.projectionMatrix);
    }),
      (this.getCamera = function () {
        return g;
      }),
      (this.getFoveation = function () {
        if (h !== null) return h.fixedFoveation;
        if (d !== null) return d.fixedFoveation;
      }),
      (this.setFoveation = function (k) {
        h !== null && (h.fixedFoveation = k),
          d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = k);
      }),
      (this.getPlanes = function () {
        return v;
      });
    let q = null;
    function J(k, H) {
      if (((c = H.getViewerPose(l || a)), (m = H), c !== null)) {
        const te = c.views;
        d !== null &&
          (e.setRenderTargetFramebuffer(f, d.framebuffer),
          e.setRenderTarget(f));
        let re = !1;
        te.length !== g.cameras.length && ((g.cameras.length = 0), (re = !0));
        for (let oe = 0; oe < te.length; oe++) {
          const Y = te[oe];
          let Le = null;
          if (d !== null) Le = d.getViewport(Y);
          else {
            const ye = u.getViewSubImage(h, Y);
            (Le = ye.viewport),
              oe === 0 &&
                (e.setRenderTargetTextures(
                  f,
                  ye.colorTexture,
                  h.ignoreDepthValues ? void 0 : ye.depthStencilTexture,
                ),
                e.setRenderTarget(f));
          }
          let me = I[oe];
          me === void 0 &&
            ((me = new Nt()),
            me.layers.enable(oe),
            (me.viewport = new ht()),
            (I[oe] = me)),
            me.matrix.fromArray(Y.transform.matrix),
            me.projectionMatrix.fromArray(Y.projectionMatrix),
            me.viewport.set(Le.x, Le.y, Le.width, Le.height),
            oe === 0 && g.matrix.copy(me.matrix),
            re === !0 && g.cameras.push(me);
        }
      }
      for (let te = 0; te < x.length; te++) {
        const re = b[te],
          oe = x[te];
        re !== null && oe !== void 0 && oe.update(re, H, l || a);
      }
      if ((q && q(k, H), H.detectedPlanes)) {
        n.dispatchEvent({ type: 'planesdetected', data: H.detectedPlanes });
        let te = null;
        for (const re of v)
          H.detectedPlanes.has(re) || (te === null && (te = []), te.push(re));
        if (te !== null)
          for (const re of te)
            v.delete(re),
              S.delete(re),
              n.dispatchEvent({ type: 'planeremoved', data: re });
        for (const re of H.detectedPlanes)
          if (!v.has(re))
            v.add(re),
              S.set(re, H.lastChangedTime),
              n.dispatchEvent({ type: 'planeadded', data: re });
          else {
            const oe = S.get(re);
            re.lastChangedTime > oe &&
              (S.set(re, re.lastChangedTime),
              n.dispatchEvent({ type: 'planechanged', data: re }));
          }
      }
      m = null;
    }
    const ee = new nl();
    ee.setAnimationLoop(J),
      (this.setAnimationLoop = function (k) {
        q = k;
      }),
      (this.dispose = function () {});
  }
}
function vp(r, e) {
  function t(p, f) {
    f.color.getRGB(p.fogColor.value, Qo(r)),
      f.isFog
        ? ((p.fogNear.value = f.near), (p.fogFar.value = f.far))
        : f.isFogExp2 && (p.fogDensity.value = f.density);
  }
  function n(p, f, x, b, v) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial
      ? i(p, f)
      : f.isMeshToonMaterial
      ? (i(p, f), u(p, f))
      : f.isMeshPhongMaterial
      ? (i(p, f), c(p, f))
      : f.isMeshStandardMaterial
      ? (i(p, f), h(p, f), f.isMeshPhysicalMaterial && d(p, f, v))
      : f.isMeshMatcapMaterial
      ? (i(p, f), m(p, f))
      : f.isMeshDepthMaterial
      ? i(p, f)
      : f.isMeshDistanceMaterial
      ? (i(p, f), _(p, f))
      : f.isMeshNormalMaterial
      ? i(p, f)
      : f.isLineBasicMaterial
      ? (s(p, f), f.isLineDashedMaterial && a(p, f))
      : f.isPointsMaterial
      ? o(p, f, x, b)
      : f.isSpriteMaterial
      ? l(p, f)
      : f.isShadowMaterial
      ? (p.color.value.copy(f.color), (p.opacity.value = f.opacity))
      : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
  }
  function i(p, f) {
    (p.opacity.value = f.opacity),
      f.color && p.diffuse.value.copy(f.color),
      f.emissive &&
        p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),
      f.map && (p.map.value = f.map),
      f.alphaMap && (p.alphaMap.value = f.alphaMap),
      f.bumpMap &&
        ((p.bumpMap.value = f.bumpMap),
        (p.bumpScale.value = f.bumpScale),
        f.side === zt && (p.bumpScale.value *= -1)),
      f.displacementMap &&
        ((p.displacementMap.value = f.displacementMap),
        (p.displacementScale.value = f.displacementScale),
        (p.displacementBias.value = f.displacementBias)),
      f.emissiveMap && (p.emissiveMap.value = f.emissiveMap),
      f.normalMap &&
        ((p.normalMap.value = f.normalMap),
        p.normalScale.value.copy(f.normalScale),
        f.side === zt && p.normalScale.value.negate()),
      f.specularMap && (p.specularMap.value = f.specularMap),
      f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    const x = e.get(f).envMap;
    if (
      (x &&
        ((p.envMap.value = x),
        (p.flipEnvMap.value =
          x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1),
        (p.reflectivity.value = f.reflectivity),
        (p.ior.value = f.ior),
        (p.refractionRatio.value = f.refractionRatio)),
      f.lightMap)
    ) {
      p.lightMap.value = f.lightMap;
      const S = r.physicallyCorrectLights !== !0 ? Math.PI : 1;
      p.lightMapIntensity.value = f.lightMapIntensity * S;
    }
    f.aoMap &&
      ((p.aoMap.value = f.aoMap), (p.aoMapIntensity.value = f.aoMapIntensity));
    let b;
    f.map
      ? (b = f.map)
      : f.specularMap
      ? (b = f.specularMap)
      : f.displacementMap
      ? (b = f.displacementMap)
      : f.normalMap
      ? (b = f.normalMap)
      : f.bumpMap
      ? (b = f.bumpMap)
      : f.roughnessMap
      ? (b = f.roughnessMap)
      : f.metalnessMap
      ? (b = f.metalnessMap)
      : f.alphaMap
      ? (b = f.alphaMap)
      : f.emissiveMap
      ? (b = f.emissiveMap)
      : f.clearcoatMap
      ? (b = f.clearcoatMap)
      : f.clearcoatNormalMap
      ? (b = f.clearcoatNormalMap)
      : f.clearcoatRoughnessMap
      ? (b = f.clearcoatRoughnessMap)
      : f.iridescenceMap
      ? (b = f.iridescenceMap)
      : f.iridescenceThicknessMap
      ? (b = f.iridescenceThicknessMap)
      : f.specularIntensityMap
      ? (b = f.specularIntensityMap)
      : f.specularColorMap
      ? (b = f.specularColorMap)
      : f.transmissionMap
      ? (b = f.transmissionMap)
      : f.thicknessMap
      ? (b = f.thicknessMap)
      : f.sheenColorMap
      ? (b = f.sheenColorMap)
      : f.sheenRoughnessMap && (b = f.sheenRoughnessMap),
      b !== void 0 &&
        (b.isWebGLRenderTarget && (b = b.texture),
        b.matrixAutoUpdate === !0 && b.updateMatrix(),
        p.uvTransform.value.copy(b.matrix));
    let v;
    f.aoMap ? (v = f.aoMap) : f.lightMap && (v = f.lightMap),
      v !== void 0 &&
        (v.isWebGLRenderTarget && (v = v.texture),
        v.matrixAutoUpdate === !0 && v.updateMatrix(),
        p.uv2Transform.value.copy(v.matrix));
  }
  function s(p, f) {
    p.diffuse.value.copy(f.color), (p.opacity.value = f.opacity);
  }
  function a(p, f) {
    (p.dashSize.value = f.dashSize),
      (p.totalSize.value = f.dashSize + f.gapSize),
      (p.scale.value = f.scale);
  }
  function o(p, f, x, b) {
    p.diffuse.value.copy(f.color),
      (p.opacity.value = f.opacity),
      (p.size.value = f.size * x),
      (p.scale.value = b * 0.5),
      f.map && (p.map.value = f.map),
      f.alphaMap && (p.alphaMap.value = f.alphaMap),
      f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    let v;
    f.map ? (v = f.map) : f.alphaMap && (v = f.alphaMap),
      v !== void 0 &&
        (v.matrixAutoUpdate === !0 && v.updateMatrix(),
        p.uvTransform.value.copy(v.matrix));
  }
  function l(p, f) {
    p.diffuse.value.copy(f.color),
      (p.opacity.value = f.opacity),
      (p.rotation.value = f.rotation),
      f.map && (p.map.value = f.map),
      f.alphaMap && (p.alphaMap.value = f.alphaMap),
      f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    let x;
    f.map ? (x = f.map) : f.alphaMap && (x = f.alphaMap),
      x !== void 0 &&
        (x.matrixAutoUpdate === !0 && x.updateMatrix(),
        p.uvTransform.value.copy(x.matrix));
  }
  function c(p, f) {
    p.specular.value.copy(f.specular),
      (p.shininess.value = Math.max(f.shininess, 1e-4));
  }
  function u(p, f) {
    f.gradientMap && (p.gradientMap.value = f.gradientMap);
  }
  function h(p, f) {
    (p.roughness.value = f.roughness),
      (p.metalness.value = f.metalness),
      f.roughnessMap && (p.roughnessMap.value = f.roughnessMap),
      f.metalnessMap && (p.metalnessMap.value = f.metalnessMap),
      e.get(f).envMap && (p.envMapIntensity.value = f.envMapIntensity);
  }
  function d(p, f, x) {
    (p.ior.value = f.ior),
      f.sheen > 0 &&
        (p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),
        (p.sheenRoughness.value = f.sheenRoughness),
        f.sheenColorMap && (p.sheenColorMap.value = f.sheenColorMap),
        f.sheenRoughnessMap &&
          (p.sheenRoughnessMap.value = f.sheenRoughnessMap)),
      f.clearcoat > 0 &&
        ((p.clearcoat.value = f.clearcoat),
        (p.clearcoatRoughness.value = f.clearcoatRoughness),
        f.clearcoatMap && (p.clearcoatMap.value = f.clearcoatMap),
        f.clearcoatRoughnessMap &&
          (p.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap),
        f.clearcoatNormalMap &&
          (p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),
          (p.clearcoatNormalMap.value = f.clearcoatNormalMap),
          f.side === zt && p.clearcoatNormalScale.value.negate())),
      f.iridescence > 0 &&
        ((p.iridescence.value = f.iridescence),
        (p.iridescenceIOR.value = f.iridescenceIOR),
        (p.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0]),
        (p.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1]),
        f.iridescenceMap && (p.iridescenceMap.value = f.iridescenceMap),
        f.iridescenceThicknessMap &&
          (p.iridescenceThicknessMap.value = f.iridescenceThicknessMap)),
      f.transmission > 0 &&
        ((p.transmission.value = f.transmission),
        (p.transmissionSamplerMap.value = x.texture),
        p.transmissionSamplerSize.value.set(x.width, x.height),
        f.transmissionMap && (p.transmissionMap.value = f.transmissionMap),
        (p.thickness.value = f.thickness),
        f.thicknessMap && (p.thicknessMap.value = f.thicknessMap),
        (p.attenuationDistance.value = f.attenuationDistance),
        p.attenuationColor.value.copy(f.attenuationColor)),
      (p.specularIntensity.value = f.specularIntensity),
      p.specularColor.value.copy(f.specularColor),
      f.specularIntensityMap &&
        (p.specularIntensityMap.value = f.specularIntensityMap),
      f.specularColorMap && (p.specularColorMap.value = f.specularColorMap);
  }
  function m(p, f) {
    f.matcap && (p.matcap.value = f.matcap);
  }
  function _(p, f) {
    p.referencePosition.value.copy(f.referencePosition),
      (p.nearDistance.value = f.nearDistance),
      (p.farDistance.value = f.farDistance);
  }
  return { refreshFogUniforms: t, refreshMaterialUniforms: n };
}
function yp(r, e, t, n) {
  let i = {},
    s = {},
    a = [];
  const o = t.isWebGL2 ? r.getParameter(35375) : 0;
  function l(b, v) {
    const S = v.program;
    n.uniformBlockBinding(b, S);
  }
  function c(b, v) {
    let S = i[b.id];
    S === void 0 &&
      (_(b), (S = u(b)), (i[b.id] = S), b.addEventListener('dispose', f));
    const y = v.program;
    n.updateUBOMapping(b, y);
    const C = e.render.frame;
    s[b.id] !== C && (d(b), (s[b.id] = C));
  }
  function u(b) {
    const v = h();
    b.__bindingPointIndex = v;
    const S = r.createBuffer(),
      y = b.__size,
      C = b.usage;
    return (
      r.bindBuffer(35345, S),
      r.bufferData(35345, y, C),
      r.bindBuffer(35345, null),
      r.bindBufferBase(35345, v, S),
      S
    );
  }
  function h() {
    for (let b = 0; b < o; b++) if (a.indexOf(b) === -1) return a.push(b), b;
    return (
      console.error(
        'THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.',
      ),
      0
    );
  }
  function d(b) {
    const v = i[b.id],
      S = b.uniforms,
      y = b.__cache;
    r.bindBuffer(35345, v);
    for (let C = 0, I = S.length; C < I; C++) {
      const g = S[C];
      if (m(g, C, y) === !0) {
        const T = g.__offset,
          P = Array.isArray(g.value) ? g.value : [g.value];
        let G = 0;
        for (let $ = 0; $ < P.length; $++) {
          const O = P[$],
            R = p(O);
          typeof O == 'number'
            ? ((g.__data[0] = O), r.bufferSubData(35345, T + G, g.__data))
            : O.isMatrix3
            ? ((g.__data[0] = O.elements[0]),
              (g.__data[1] = O.elements[1]),
              (g.__data[2] = O.elements[2]),
              (g.__data[3] = O.elements[0]),
              (g.__data[4] = O.elements[3]),
              (g.__data[5] = O.elements[4]),
              (g.__data[6] = O.elements[5]),
              (g.__data[7] = O.elements[0]),
              (g.__data[8] = O.elements[6]),
              (g.__data[9] = O.elements[7]),
              (g.__data[10] = O.elements[8]),
              (g.__data[11] = O.elements[0]))
            : (O.toArray(g.__data, G),
              (G += R.storage / Float32Array.BYTES_PER_ELEMENT));
        }
        r.bufferSubData(35345, T, g.__data);
      }
    }
    r.bindBuffer(35345, null);
  }
  function m(b, v, S) {
    const y = b.value;
    if (S[v] === void 0) {
      if (typeof y == 'number') S[v] = y;
      else {
        const C = Array.isArray(y) ? y : [y],
          I = [];
        for (let g = 0; g < C.length; g++) I.push(C[g].clone());
        S[v] = I;
      }
      return !0;
    } else if (typeof y == 'number') {
      if (S[v] !== y) return (S[v] = y), !0;
    } else {
      const C = Array.isArray(S[v]) ? S[v] : [S[v]],
        I = Array.isArray(y) ? y : [y];
      for (let g = 0; g < C.length; g++) {
        const T = C[g];
        if (T.equals(I[g]) === !1) return T.copy(I[g]), !0;
      }
    }
    return !1;
  }
  function _(b) {
    const v = b.uniforms;
    let S = 0;
    const y = 16;
    let C = 0;
    for (let I = 0, g = v.length; I < g; I++) {
      const T = v[I],
        P = { boundary: 0, storage: 0 },
        G = Array.isArray(T.value) ? T.value : [T.value];
      for (let $ = 0, O = G.length; $ < O; $++) {
        const R = G[$],
          B = p(R);
        (P.boundary += B.boundary), (P.storage += B.storage);
      }
      if (
        ((T.__data = new Float32Array(
          P.storage / Float32Array.BYTES_PER_ELEMENT,
        )),
        (T.__offset = S),
        I > 0)
      ) {
        C = S % y;
        const $ = y - C;
        C !== 0 && $ - P.boundary < 0 && ((S += y - C), (T.__offset = S));
      }
      S += P.storage;
    }
    return (
      (C = S % y), C > 0 && (S += y - C), (b.__size = S), (b.__cache = {}), this
    );
  }
  function p(b) {
    const v = { boundary: 0, storage: 0 };
    return (
      typeof b == 'number'
        ? ((v.boundary = 4), (v.storage = 4))
        : b.isVector2
        ? ((v.boundary = 8), (v.storage = 8))
        : b.isVector3 || b.isColor
        ? ((v.boundary = 16), (v.storage = 12))
        : b.isVector4
        ? ((v.boundary = 16), (v.storage = 16))
        : b.isMatrix3
        ? ((v.boundary = 48), (v.storage = 48))
        : b.isMatrix4
        ? ((v.boundary = 64), (v.storage = 64))
        : b.isTexture
        ? console.warn(
            'THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.',
          )
        : console.warn(
            'THREE.WebGLRenderer: Unsupported uniform value type.',
            b,
          ),
      v
    );
  }
  function f(b) {
    const v = b.target;
    v.removeEventListener('dispose', f);
    const S = a.indexOf(v.__bindingPointIndex);
    a.splice(S, 1), r.deleteBuffer(i[v.id]), delete i[v.id], delete s[v.id];
  }
  function x() {
    for (const b in i) r.deleteBuffer(i[b]);
    (a = []), (i = {}), (s = {});
  }
  return { bind: l, update: c, dispose: x };
}
function bp() {
  const r = Vi('canvas');
  return (r.style.display = 'block'), r;
}
function ol(r = {}) {
  this.isWebGLRenderer = !0;
  const e = r.canvas !== void 0 ? r.canvas : bp(),
    t = r.context !== void 0 ? r.context : null,
    n = r.depth !== void 0 ? r.depth : !0,
    i = r.stencil !== void 0 ? r.stencil : !0,
    s = r.antialias !== void 0 ? r.antialias : !1,
    a = r.premultipliedAlpha !== void 0 ? r.premultipliedAlpha : !0,
    o = r.preserveDrawingBuffer !== void 0 ? r.preserveDrawingBuffer : !1,
    l = r.powerPreference !== void 0 ? r.powerPreference : 'default',
    c =
      r.failIfMajorPerformanceCaveat !== void 0
        ? r.failIfMajorPerformanceCaveat
        : !1;
  let u;
  t !== null
    ? (u = t.getContextAttributes().alpha)
    : (u = r.alpha !== void 0 ? r.alpha : !1);
  let h = null,
    d = null;
  const m = [],
    _ = [];
  (this.domElement = e),
    (this.debug = { checkShaderErrors: !0 }),
    (this.autoClear = !0),
    (this.autoClearColor = !0),
    (this.autoClearDepth = !0),
    (this.autoClearStencil = !0),
    (this.sortObjects = !0),
    (this.clippingPlanes = []),
    (this.localClippingEnabled = !1),
    (this.outputEncoding = Un),
    (this.physicallyCorrectLights = !1),
    (this.toneMapping = an),
    (this.toneMappingExposure = 1);
  const p = this;
  let f = !1,
    x = 0,
    b = 0,
    v = null,
    S = -1,
    y = null;
  const C = new ht(),
    I = new ht();
  let g = null,
    T = e.width,
    P = e.height,
    G = 1,
    $ = null,
    O = null;
  const R = new ht(0, 0, T, P),
    B = new ht(0, 0, T, P);
  let Q = !1;
  const K = new tl();
  let q = !1,
    J = !1,
    ee = null;
  const k = new Qe(),
    H = new we(),
    te = new L(),
    re = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0,
    };
  function oe() {
    return v === null ? G : 1;
  }
  let Y = t;
  function Le(w, z) {
    for (let X = 0; X < w.length; X++) {
      const N = w[X],
        j = e.getContext(N, z);
      if (j !== null) return j;
    }
    return null;
  }
  try {
    const w = {
      alpha: !0,
      depth: n,
      stencil: i,
      antialias: s,
      premultipliedAlpha: a,
      preserveDrawingBuffer: o,
      powerPreference: l,
      failIfMajorPerformanceCaveat: c,
    };
    if (
      ('setAttribute' in e && e.setAttribute('data-engine', `three.js r${zs}`),
      e.addEventListener('webglcontextlost', _e, !1),
      e.addEventListener('webglcontextrestored', ge, !1),
      e.addEventListener('webglcontextcreationerror', Pe, !1),
      Y === null)
    ) {
      const z = ['webgl2', 'webgl', 'experimental-webgl'];
      if ((p.isWebGL1Renderer === !0 && z.shift(), (Y = Le(z, w)), Y === null))
        throw Le(z)
          ? new Error(
              'Error creating WebGL context with your selected attributes.',
            )
          : new Error('Error creating WebGL context.');
    }
    Y.getShaderPrecisionFormat === void 0 &&
      (Y.getShaderPrecisionFormat = function () {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
  } catch (w) {
    throw (console.error('THREE.WebGLRenderer: ' + w.message), w);
  }
  let me,
    ye,
    pe,
    Ne,
    Ee,
    be,
    rt,
    Je,
    et,
    gt,
    Ye,
    Ue,
    Rt,
    bt,
    E,
    M,
    V,
    ie,
    se,
    le,
    Me,
    A,
    F,
    he;
  function fe() {
    (me = new Dd(Y)),
      (ye = new wd(Y, me, r)),
      me.init(ye),
      (A = new pp(Y, me, ye)),
      (pe = new dp(Y, me, ye)),
      (Ne = new Od()),
      (Ee = new Qf()),
      (be = new fp(Y, me, pe, Ee, ye, A, Ne)),
      (rt = new Td(p)),
      (Je = new Pd(p)),
      (et = new Hc(Y, ye)),
      (F = new Md(Y, me, et, ye)),
      (gt = new Rd(Y, et, Ne, F)),
      (Ye = new Ud(Y, gt, et, Ne)),
      (se = new zd(Y, ye, be)),
      (M = new Ed(Ee)),
      (Ue = new Kf(p, rt, Je, me, ye, F, M)),
      (Rt = new vp(p, Ee)),
      (bt = new ep()),
      (E = new ap(me, ye)),
      (ie = new bd(p, rt, Je, pe, Ye, u, a)),
      (V = new hp(p, Ye, ye)),
      (he = new yp(Y, Ne, ye, pe)),
      (le = new Sd(Y, me, Ne, ye)),
      (Me = new Id(Y, me, Ne, ye)),
      (Ne.programs = Ue.programs),
      (p.capabilities = ye),
      (p.extensions = me),
      (p.properties = Ee),
      (p.renderLists = bt),
      (p.shadowMap = V),
      (p.state = pe),
      (p.info = Ne);
  }
  fe();
  const ue = new xp(p, Y);
  (this.xr = ue),
    (this.getContext = function () {
      return Y;
    }),
    (this.getContextAttributes = function () {
      return Y.getContextAttributes();
    }),
    (this.forceContextLoss = function () {
      const w = me.get('WEBGL_lose_context');
      w && w.loseContext();
    }),
    (this.forceContextRestore = function () {
      const w = me.get('WEBGL_lose_context');
      w && w.restoreContext();
    }),
    (this.getPixelRatio = function () {
      return G;
    }),
    (this.setPixelRatio = function (w) {
      w !== void 0 && ((G = w), this.setSize(T, P, !1));
    }),
    (this.getSize = function (w) {
      return w.set(T, P);
    }),
    (this.setSize = function (w, z, X) {
      if (ue.isPresenting) {
        console.warn(
          "THREE.WebGLRenderer: Can't change size while VR device is presenting.",
        );
        return;
      }
      (T = w),
        (P = z),
        (e.width = Math.floor(w * G)),
        (e.height = Math.floor(z * G)),
        X !== !1 && ((e.style.width = w + 'px'), (e.style.height = z + 'px')),
        this.setViewport(0, 0, w, z);
    }),
    (this.getDrawingBufferSize = function (w) {
      return w.set(T * G, P * G).floor();
    }),
    (this.setDrawingBufferSize = function (w, z, X) {
      (T = w),
        (P = z),
        (G = X),
        (e.width = Math.floor(w * X)),
        (e.height = Math.floor(z * X)),
        this.setViewport(0, 0, w, z);
    }),
    (this.getCurrentViewport = function (w) {
      return w.copy(C);
    }),
    (this.getViewport = function (w) {
      return w.copy(R);
    }),
    (this.setViewport = function (w, z, X, N) {
      w.isVector4 ? R.set(w.x, w.y, w.z, w.w) : R.set(w, z, X, N),
        pe.viewport(C.copy(R).multiplyScalar(G).floor());
    }),
    (this.getScissor = function (w) {
      return w.copy(B);
    }),
    (this.setScissor = function (w, z, X, N) {
      w.isVector4 ? B.set(w.x, w.y, w.z, w.w) : B.set(w, z, X, N),
        pe.scissor(I.copy(B).multiplyScalar(G).floor());
    }),
    (this.getScissorTest = function () {
      return Q;
    }),
    (this.setScissorTest = function (w) {
      pe.setScissorTest((Q = w));
    }),
    (this.setOpaqueSort = function (w) {
      $ = w;
    }),
    (this.setTransparentSort = function (w) {
      O = w;
    }),
    (this.getClearColor = function (w) {
      return w.copy(ie.getClearColor());
    }),
    (this.setClearColor = function () {
      ie.setClearColor.apply(ie, arguments);
    }),
    (this.getClearAlpha = function () {
      return ie.getClearAlpha();
    }),
    (this.setClearAlpha = function () {
      ie.setClearAlpha.apply(ie, arguments);
    }),
    (this.clear = function (w = !0, z = !0, X = !0) {
      let N = 0;
      w && (N |= 16384), z && (N |= 256), X && (N |= 1024), Y.clear(N);
    }),
    (this.clearColor = function () {
      this.clear(!0, !1, !1);
    }),
    (this.clearDepth = function () {
      this.clear(!1, !0, !1);
    }),
    (this.clearStencil = function () {
      this.clear(!1, !1, !0);
    }),
    (this.dispose = function () {
      e.removeEventListener('webglcontextlost', _e, !1),
        e.removeEventListener('webglcontextrestored', ge, !1),
        e.removeEventListener('webglcontextcreationerror', Pe, !1),
        bt.dispose(),
        E.dispose(),
        Ee.dispose(),
        rt.dispose(),
        Je.dispose(),
        Ye.dispose(),
        F.dispose(),
        he.dispose(),
        Ue.dispose(),
        ue.dispose(),
        ue.removeEventListener('sessionstart', de),
        ue.removeEventListener('sessionend', xe),
        ee && (ee.dispose(), (ee = null)),
        ze.stop();
    });
  function _e(w) {
    w.preventDefault(),
      console.log('THREE.WebGLRenderer: Context Lost.'),
      (f = !0);
  }
  function ge() {
    console.log('THREE.WebGLRenderer: Context Restored.'), (f = !1);
    const w = Ne.autoReset,
      z = V.enabled,
      X = V.autoUpdate,
      N = V.needsUpdate,
      j = V.type;
    fe(),
      (Ne.autoReset = w),
      (V.enabled = z),
      (V.autoUpdate = X),
      (V.needsUpdate = N),
      (V.type = j);
  }
  function Pe(w) {
    console.error(
      'THREE.WebGLRenderer: A WebGL context could not be created. Reason: ',
      w.statusMessage,
    );
  }
  function De(w) {
    const z = w.target;
    z.removeEventListener('dispose', De), ke(z);
  }
  function ke(w) {
    D(w), Ee.remove(w);
  }
  function D(w) {
    const z = Ee.get(w).programs;
    z !== void 0 &&
      (z.forEach(function (X) {
        Ue.releaseProgram(X);
      }),
      w.isShaderMaterial && Ue.releaseShaderCache(w));
  }
  (this.renderBufferDirect = function (w, z, X, N, j, ve) {
    z === null && (z = re);
    const Se = j.isMesh && j.matrixWorld.determinant() < 0,
      Ae = Ml(w, z, X, N, j);
    pe.setMaterial(N, Se);
    let Ce = X.index,
      Fe = 1;
    N.wireframe === !0 && ((Ce = gt.getWireframeAttribute(X)), (Fe = 2));
    const Re = X.drawRange,
      Ie = X.attributes.position;
    let je = Re.start * Fe,
      Et = (Re.start + Re.count) * Fe;
    ve !== null &&
      ((je = Math.max(je, ve.start * Fe)),
      (Et = Math.min(Et, (ve.start + ve.count) * Fe))),
      Ce !== null
        ? ((je = Math.max(je, 0)), (Et = Math.min(Et, Ce.count)))
        : Ie != null && ((je = Math.max(je, 0)), (Et = Math.min(Et, Ie.count)));
    const Kt = Et - je;
    if (Kt < 0 || Kt === 1 / 0) return;
    F.setup(j, N, Ae, X, Ce);
    let yn,
      Ze = le;
    if (
      (Ce !== null && ((yn = et.get(Ce)), (Ze = Me), Ze.setIndex(yn)), j.isMesh)
    )
      N.wireframe === !0
        ? (pe.setLineWidth(N.wireframeLinewidth * oe()), Ze.setMode(1))
        : Ze.setMode(4);
    else if (j.isLine) {
      let Oe = N.linewidth;
      Oe === void 0 && (Oe = 1),
        pe.setLineWidth(Oe * oe()),
        j.isLineSegments
          ? Ze.setMode(1)
          : j.isLineLoop
          ? Ze.setMode(2)
          : Ze.setMode(3);
    } else j.isPoints ? Ze.setMode(0) : j.isSprite && Ze.setMode(4);
    if (j.isInstancedMesh) Ze.renderInstances(je, Kt, j.count);
    else if (X.isInstancedBufferGeometry) {
      const Oe = X._maxInstanceCount !== void 0 ? X._maxInstanceCount : 1 / 0,
        Or = Math.min(X.instanceCount, Oe);
      Ze.renderInstances(je, Kt, Or);
    } else Ze.render(je, Kt);
  }),
    (this.compile = function (w, z) {
      function X(N, j, ve) {
        N.transparent === !0 && N.side === Zi
          ? ((N.side = zt),
            (N.needsUpdate = !0),
            It(N, j, ve),
            (N.side = Nn),
            (N.needsUpdate = !0),
            It(N, j, ve),
            (N.side = Zi))
          : It(N, j, ve);
      }
      (d = E.get(w)),
        d.init(),
        _.push(d),
        w.traverseVisible(function (N) {
          N.isLight &&
            N.layers.test(z.layers) &&
            (d.pushLight(N), N.castShadow && d.pushShadow(N));
        }),
        d.setupLights(p.physicallyCorrectLights),
        w.traverse(function (N) {
          const j = N.material;
          if (j)
            if (Array.isArray(j))
              for (let ve = 0; ve < j.length; ve++) {
                const Se = j[ve];
                X(Se, w, N);
              }
            else X(j, w, N);
        }),
        _.pop(),
        (d = null);
    });
  let W = null;
  function ne(w) {
    W && W(w);
  }
  function de() {
    ze.stop();
  }
  function xe() {
    ze.start();
  }
  const ze = new nl();
  ze.setAnimationLoop(ne),
    typeof self < 'u' && ze.setContext(self),
    (this.setAnimationLoop = function (w) {
      (W = w), ue.setAnimationLoop(w), w === null ? ze.stop() : ze.start();
    }),
    ue.addEventListener('sessionstart', de),
    ue.addEventListener('sessionend', xe),
    (this.render = function (w, z) {
      if (z !== void 0 && z.isCamera !== !0) {
        console.error(
          'THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.',
        );
        return;
      }
      if (f === !0) return;
      w.matrixWorldAutoUpdate === !0 && w.updateMatrixWorld(),
        z.parent === null &&
          z.matrixWorldAutoUpdate === !0 &&
          z.updateMatrixWorld(),
        ue.enabled === !0 &&
          ue.isPresenting === !0 &&
          (ue.cameraAutoUpdate === !0 && ue.updateCamera(z),
          (z = ue.getCamera())),
        w.isScene === !0 && w.onBeforeRender(p, w, z, v),
        (d = E.get(w, _.length)),
        d.init(),
        _.push(d),
        k.multiplyMatrices(z.projectionMatrix, z.matrixWorldInverse),
        K.setFromProjectionMatrix(k),
        (J = this.localClippingEnabled),
        (q = M.init(this.clippingPlanes, J, z)),
        (h = bt.get(w, m.length)),
        h.init(),
        m.push(h),
        st(w, z, 0, p.sortObjects),
        h.finish(),
        p.sortObjects === !0 && h.sort($, O),
        q === !0 && M.beginShadows();
      const X = d.state.shadowsArray;
      if (
        (V.render(X, w, z),
        q === !0 && M.endShadows(),
        this.info.autoReset === !0 && this.info.reset(),
        ie.render(h, w),
        d.setupLights(p.physicallyCorrectLights),
        z.isArrayCamera)
      ) {
        const N = z.cameras;
        for (let j = 0, ve = N.length; j < ve; j++) {
          const Se = N[j];
          dt(h, w, Se, Se.viewport);
        }
      } else dt(h, w, z);
      v !== null &&
        (be.updateMultisampleRenderTarget(v), be.updateRenderTargetMipmap(v)),
        w.isScene === !0 && w.onAfterRender(p, w, z),
        F.resetDefaultState(),
        (S = -1),
        (y = null),
        _.pop(),
        _.length > 0 ? (d = _[_.length - 1]) : (d = null),
        m.pop(),
        m.length > 0 ? (h = m[m.length - 1]) : (h = null);
    });
  function st(w, z, X, N) {
    if (w.visible === !1) return;
    if (w.layers.test(z.layers)) {
      if (w.isGroup) X = w.renderOrder;
      else if (w.isLOD) w.autoUpdate === !0 && w.update(z);
      else if (w.isLight) d.pushLight(w), w.castShadow && d.pushShadow(w);
      else if (w.isSprite) {
        if (!w.frustumCulled || K.intersectsSprite(w)) {
          N && te.setFromMatrixPosition(w.matrixWorld).applyMatrix4(k);
          const Se = Ye.update(w),
            Ae = w.material;
          Ae.visible && h.push(w, Se, Ae, X, te.z, null);
        }
      } else if (
        (w.isMesh || w.isLine || w.isPoints) &&
        (w.isSkinnedMesh &&
          w.skeleton.frame !== Ne.render.frame &&
          (w.skeleton.update(), (w.skeleton.frame = Ne.render.frame)),
        !w.frustumCulled || K.intersectsObject(w))
      ) {
        N && te.setFromMatrixPosition(w.matrixWorld).applyMatrix4(k);
        const Se = Ye.update(w),
          Ae = w.material;
        if (Array.isArray(Ae)) {
          const Ce = Se.groups;
          for (let Fe = 0, Re = Ce.length; Fe < Re; Fe++) {
            const Ie = Ce[Fe],
              je = Ae[Ie.materialIndex];
            je && je.visible && h.push(w, Se, je, X, te.z, Ie);
          }
        } else Ae.visible && h.push(w, Se, Ae, X, te.z, null);
      }
    }
    const ve = w.children;
    for (let Se = 0, Ae = ve.length; Se < Ae; Se++) st(ve[Se], z, X, N);
  }
  function dt(w, z, X, N) {
    const j = w.opaque,
      ve = w.transmissive,
      Se = w.transparent;
    d.setupLightsView(X),
      ve.length > 0 && vn(j, z, X),
      N && pe.viewport(C.copy(N)),
      j.length > 0 && Xe(j, z, X),
      ve.length > 0 && Xe(ve, z, X),
      Se.length > 0 && Xe(Se, z, X),
      pe.buffers.depth.setTest(!0),
      pe.buffers.depth.setMask(!0),
      pe.buffers.color.setMask(!0),
      pe.setPolygonOffset(!1);
  }
  function vn(w, z, X) {
    const N = ye.isWebGL2;
    ee === null &&
      (ee = new Bn(1, 1, {
        generateMipmaps: !0,
        type: me.has('EXT_color_buffer_half_float') ? Gi : zn,
        minFilter: ki,
        samples: N && s === !0 ? 4 : 0,
      })),
      p.getDrawingBufferSize(H),
      N ? ee.setSize(H.x, H.y) : ee.setSize(As(H.x), As(H.y));
    const j = p.getRenderTarget();
    p.setRenderTarget(ee), p.clear();
    const ve = p.toneMapping;
    (p.toneMapping = an),
      Xe(w, z, X),
      (p.toneMapping = ve),
      be.updateMultisampleRenderTarget(ee),
      be.updateRenderTargetMipmap(ee),
      p.setRenderTarget(j);
  }
  function Xe(w, z, X) {
    const N = z.isScene === !0 ? z.overrideMaterial : null;
    for (let j = 0, ve = w.length; j < ve; j++) {
      const Se = w[j],
        Ae = Se.object,
        Ce = Se.geometry,
        Fe = N === null ? Se.material : N,
        Re = Se.group;
      Ae.layers.test(X.layers) && $t(Ae, z, X, Ce, Fe, Re);
    }
  }
  function $t(w, z, X, N, j, ve) {
    w.onBeforeRender(p, z, X, N, j, ve),
      w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse, w.matrixWorld),
      w.normalMatrix.getNormalMatrix(w.modelViewMatrix),
      j.onBeforeRender(p, z, X, N, w, ve),
      j.transparent === !0 && j.side === Zi
        ? ((j.side = zt),
          (j.needsUpdate = !0),
          p.renderBufferDirect(X, z, N, j, w, ve),
          (j.side = Nn),
          (j.needsUpdate = !0),
          p.renderBufferDirect(X, z, N, j, w, ve),
          (j.side = Zi))
        : p.renderBufferDirect(X, z, N, j, w, ve),
      w.onAfterRender(p, z, X, N, j, ve);
  }
  function It(w, z, X) {
    z.isScene !== !0 && (z = re);
    const N = Ee.get(w),
      j = d.state.lights,
      ve = d.state.shadowsArray,
      Se = j.state.version,
      Ae = Ue.getParameters(w, j.state, ve, z, X),
      Ce = Ue.getProgramCacheKey(Ae);
    let Fe = N.programs;
    (N.environment = w.isMeshStandardMaterial ? z.environment : null),
      (N.fog = z.fog),
      (N.envMap = (w.isMeshStandardMaterial ? Je : rt).get(
        w.envMap || N.environment,
      )),
      Fe === void 0 &&
        (w.addEventListener('dispose', De),
        (Fe = new Map()),
        (N.programs = Fe));
    let Re = Fe.get(Ce);
    if (Re !== void 0) {
      if (N.currentProgram === Re && N.lightsStateVersion === Se)
        return Zs(w, Ae), Re;
    } else
      (Ae.uniforms = Ue.getUniforms(w)),
        w.onBuild(X, Ae, p),
        w.onBeforeCompile(Ae, p),
        (Re = Ue.acquireProgram(Ae, Ce)),
        Fe.set(Ce, Re),
        (N.uniforms = Ae.uniforms);
    const Ie = N.uniforms;
    ((!w.isShaderMaterial && !w.isRawShaderMaterial) || w.clipping === !0) &&
      (Ie.clippingPlanes = M.uniform),
      Zs(w, Ae),
      (N.needsLights = wl(w)),
      (N.lightsStateVersion = Se),
      N.needsLights &&
        ((Ie.ambientLightColor.value = j.state.ambient),
        (Ie.lightProbe.value = j.state.probe),
        (Ie.directionalLights.value = j.state.directional),
        (Ie.directionalLightShadows.value = j.state.directionalShadow),
        (Ie.spotLights.value = j.state.spot),
        (Ie.spotLightShadows.value = j.state.spotShadow),
        (Ie.rectAreaLights.value = j.state.rectArea),
        (Ie.ltc_1.value = j.state.rectAreaLTC1),
        (Ie.ltc_2.value = j.state.rectAreaLTC2),
        (Ie.pointLights.value = j.state.point),
        (Ie.pointLightShadows.value = j.state.pointShadow),
        (Ie.hemisphereLights.value = j.state.hemi),
        (Ie.directionalShadowMap.value = j.state.directionalShadowMap),
        (Ie.directionalShadowMatrix.value = j.state.directionalShadowMatrix),
        (Ie.spotShadowMap.value = j.state.spotShadowMap),
        (Ie.spotLightMatrix.value = j.state.spotLightMatrix),
        (Ie.spotLightMap.value = j.state.spotLightMap),
        (Ie.pointShadowMap.value = j.state.pointShadowMap),
        (Ie.pointShadowMatrix.value = j.state.pointShadowMatrix));
    const je = Re.getUniforms(),
      Et = Sr.seqWithValue(je.seq, Ie);
    return (N.currentProgram = Re), (N.uniformsList = Et), Re;
  }
  function Zs(w, z) {
    const X = Ee.get(w);
    (X.outputEncoding = z.outputEncoding),
      (X.instancing = z.instancing),
      (X.skinning = z.skinning),
      (X.morphTargets = z.morphTargets),
      (X.morphNormals = z.morphNormals),
      (X.morphColors = z.morphColors),
      (X.morphTargetsCount = z.morphTargetsCount),
      (X.numClippingPlanes = z.numClippingPlanes),
      (X.numIntersection = z.numClipIntersection),
      (X.vertexAlphas = z.vertexAlphas),
      (X.vertexTangents = z.vertexTangents),
      (X.toneMapping = z.toneMapping);
  }
  function Ml(w, z, X, N, j) {
    z.isScene !== !0 && (z = re), be.resetTextureUnits();
    const ve = z.fog,
      Se = N.isMeshStandardMaterial ? z.environment : null,
      Ae =
        v === null
          ? p.outputEncoding
          : v.isXRRenderTarget === !0
          ? v.texture.encoding
          : Un,
      Ce = (N.isMeshStandardMaterial ? Je : rt).get(N.envMap || Se),
      Fe =
        N.vertexColors === !0 &&
        !!X.attributes.color &&
        X.attributes.color.itemSize === 4,
      Re = !!N.normalMap && !!X.attributes.tangent,
      Ie = !!X.morphAttributes.position,
      je = !!X.morphAttributes.normal,
      Et = !!X.morphAttributes.color,
      Kt = N.toneMapped ? p.toneMapping : an,
      yn =
        X.morphAttributes.position ||
        X.morphAttributes.normal ||
        X.morphAttributes.color,
      Ze = yn !== void 0 ? yn.length : 0,
      Oe = Ee.get(N),
      Or = d.state.lights;
    if (q === !0 && (J === !0 || w !== y)) {
      const Tt = w === y && N.id === S;
      M.setState(N, w, Tt);
    }
    let at = !1;
    N.version === Oe.__version
      ? ((Oe.needsLights && Oe.lightsStateVersion !== Or.state.version) ||
          Oe.outputEncoding !== Ae ||
          (j.isInstancedMesh && Oe.instancing === !1) ||
          (!j.isInstancedMesh && Oe.instancing === !0) ||
          (j.isSkinnedMesh && Oe.skinning === !1) ||
          (!j.isSkinnedMesh && Oe.skinning === !0) ||
          Oe.envMap !== Ce ||
          (N.fog === !0 && Oe.fog !== ve) ||
          (Oe.numClippingPlanes !== void 0 &&
            (Oe.numClippingPlanes !== M.numPlanes ||
              Oe.numIntersection !== M.numIntersection)) ||
          Oe.vertexAlphas !== Fe ||
          Oe.vertexTangents !== Re ||
          Oe.morphTargets !== Ie ||
          Oe.morphNormals !== je ||
          Oe.morphColors !== Et ||
          Oe.toneMapping !== Kt ||
          (ye.isWebGL2 === !0 && Oe.morphTargetsCount !== Ze)) &&
        (at = !0)
      : ((at = !0), (Oe.__version = N.version));
    let bn = Oe.currentProgram;
    at === !0 && (bn = It(N, z, j));
    let $s = !1,
      bi = !1,
      Fr = !1;
    const _t = bn.getUniforms(),
      Mn = Oe.uniforms;
    if (
      (pe.useProgram(bn.program) && (($s = !0), (bi = !0), (Fr = !0)),
      N.id !== S && ((S = N.id), (bi = !0)),
      $s || y !== w)
    ) {
      if (
        (_t.setValue(Y, 'projectionMatrix', w.projectionMatrix),
        ye.logarithmicDepthBuffer &&
          _t.setValue(Y, 'logDepthBufFC', 2 / (Math.log(w.far + 1) / Math.LN2)),
        y !== w && ((y = w), (bi = !0), (Fr = !0)),
        N.isShaderMaterial ||
          N.isMeshPhongMaterial ||
          N.isMeshToonMaterial ||
          N.isMeshStandardMaterial ||
          N.envMap)
      ) {
        const Tt = _t.map.cameraPosition;
        Tt !== void 0 &&
          Tt.setValue(Y, te.setFromMatrixPosition(w.matrixWorld));
      }
      (N.isMeshPhongMaterial ||
        N.isMeshToonMaterial ||
        N.isMeshLambertMaterial ||
        N.isMeshBasicMaterial ||
        N.isMeshStandardMaterial ||
        N.isShaderMaterial) &&
        _t.setValue(Y, 'isOrthographic', w.isOrthographicCamera === !0),
        (N.isMeshPhongMaterial ||
          N.isMeshToonMaterial ||
          N.isMeshLambertMaterial ||
          N.isMeshBasicMaterial ||
          N.isMeshStandardMaterial ||
          N.isShaderMaterial ||
          N.isShadowMaterial ||
          j.isSkinnedMesh) &&
          _t.setValue(Y, 'viewMatrix', w.matrixWorldInverse);
    }
    if (j.isSkinnedMesh) {
      _t.setOptional(Y, j, 'bindMatrix'),
        _t.setOptional(Y, j, 'bindMatrixInverse');
      const Tt = j.skeleton;
      Tt &&
        (ye.floatVertexTextures
          ? (Tt.boneTexture === null && Tt.computeBoneTexture(),
            _t.setValue(Y, 'boneTexture', Tt.boneTexture, be),
            _t.setValue(Y, 'boneTextureSize', Tt.boneTextureSize))
          : console.warn(
              'THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.',
            ));
    }
    const Nr = X.morphAttributes;
    if (
      ((Nr.position !== void 0 ||
        Nr.normal !== void 0 ||
        (Nr.color !== void 0 && ye.isWebGL2 === !0)) &&
        se.update(j, X, N, bn),
      (bi || Oe.receiveShadow !== j.receiveShadow) &&
        ((Oe.receiveShadow = j.receiveShadow),
        _t.setValue(Y, 'receiveShadow', j.receiveShadow)),
      N.isMeshGouraudMaterial &&
        N.envMap !== null &&
        ((Mn.envMap.value = Ce),
        (Mn.flipEnvMap.value =
          Ce.isCubeTexture && Ce.isRenderTargetTexture === !1 ? -1 : 1)),
      bi &&
        (_t.setValue(Y, 'toneMappingExposure', p.toneMappingExposure),
        Oe.needsLights && Sl(Mn, Fr),
        ve && N.fog === !0 && Rt.refreshFogUniforms(Mn, ve),
        Rt.refreshMaterialUniforms(Mn, N, G, P, ee),
        Sr.upload(Y, Oe.uniformsList, Mn, be)),
      N.isShaderMaterial &&
        N.uniformsNeedUpdate === !0 &&
        (Sr.upload(Y, Oe.uniformsList, Mn, be), (N.uniformsNeedUpdate = !1)),
      N.isSpriteMaterial && _t.setValue(Y, 'center', j.center),
      _t.setValue(Y, 'modelViewMatrix', j.modelViewMatrix),
      _t.setValue(Y, 'normalMatrix', j.normalMatrix),
      _t.setValue(Y, 'modelMatrix', j.matrixWorld),
      N.isShaderMaterial || N.isRawShaderMaterial)
    ) {
      const Tt = N.uniformsGroups;
      for (let zr = 0, El = Tt.length; zr < El; zr++)
        if (ye.isWebGL2) {
          const Ks = Tt[zr];
          he.update(Ks, bn), he.bind(Ks, bn);
        } else
          console.warn(
            'THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.',
          );
    }
    return bn;
  }
  function Sl(w, z) {
    (w.ambientLightColor.needsUpdate = z),
      (w.lightProbe.needsUpdate = z),
      (w.directionalLights.needsUpdate = z),
      (w.directionalLightShadows.needsUpdate = z),
      (w.pointLights.needsUpdate = z),
      (w.pointLightShadows.needsUpdate = z),
      (w.spotLights.needsUpdate = z),
      (w.spotLightShadows.needsUpdate = z),
      (w.rectAreaLights.needsUpdate = z),
      (w.hemisphereLights.needsUpdate = z);
  }
  function wl(w) {
    return (
      w.isMeshLambertMaterial ||
      w.isMeshToonMaterial ||
      w.isMeshPhongMaterial ||
      w.isMeshStandardMaterial ||
      w.isShadowMaterial ||
      (w.isShaderMaterial && w.lights === !0)
    );
  }
  (this.getActiveCubeFace = function () {
    return x;
  }),
    (this.getActiveMipmapLevel = function () {
      return b;
    }),
    (this.getRenderTarget = function () {
      return v;
    }),
    (this.setRenderTargetTextures = function (w, z, X) {
      (Ee.get(w.texture).__webglTexture = z),
        (Ee.get(w.depthTexture).__webglTexture = X);
      const N = Ee.get(w);
      (N.__hasExternalTextures = !0),
        N.__hasExternalTextures &&
          ((N.__autoAllocateDepthBuffer = X === void 0),
          N.__autoAllocateDepthBuffer ||
            (me.has('WEBGL_multisampled_render_to_texture') === !0 &&
              (console.warn(
                'THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided',
              ),
              (N.__useRenderToTexture = !1))));
    }),
    (this.setRenderTargetFramebuffer = function (w, z) {
      const X = Ee.get(w);
      (X.__webglFramebuffer = z), (X.__useDefaultFramebuffer = z === void 0);
    }),
    (this.setRenderTarget = function (w, z = 0, X = 0) {
      (v = w), (x = z), (b = X);
      let N = !0,
        j = null,
        ve = !1,
        Se = !1;
      if (w) {
        const Ce = Ee.get(w);
        Ce.__useDefaultFramebuffer !== void 0
          ? (pe.bindFramebuffer(36160, null), (N = !1))
          : Ce.__webglFramebuffer === void 0
          ? be.setupRenderTarget(w)
          : Ce.__hasExternalTextures &&
            be.rebindTextures(
              w,
              Ee.get(w.texture).__webglTexture,
              Ee.get(w.depthTexture).__webglTexture,
            );
        const Fe = w.texture;
        (Fe.isData3DTexture ||
          Fe.isDataArrayTexture ||
          Fe.isCompressedArrayTexture) &&
          (Se = !0);
        const Re = Ee.get(w).__webglFramebuffer;
        w.isWebGLCubeRenderTarget
          ? ((j = Re[z]), (ve = !0))
          : ye.isWebGL2 && w.samples > 0 && be.useMultisampledRTT(w) === !1
          ? (j = Ee.get(w).__webglMultisampledFramebuffer)
          : (j = Re),
          C.copy(w.viewport),
          I.copy(w.scissor),
          (g = w.scissorTest);
      } else
        C.copy(R).multiplyScalar(G).floor(),
          I.copy(B).multiplyScalar(G).floor(),
          (g = Q);
      if (
        (pe.bindFramebuffer(36160, j) &&
          ye.drawBuffers &&
          N &&
          pe.drawBuffers(w, j),
        pe.viewport(C),
        pe.scissor(I),
        pe.setScissorTest(g),
        ve)
      ) {
        const Ce = Ee.get(w.texture);
        Y.framebufferTexture2D(36160, 36064, 34069 + z, Ce.__webglTexture, X);
      } else if (Se) {
        const Ce = Ee.get(w.texture),
          Fe = z || 0;
        Y.framebufferTextureLayer(36160, 36064, Ce.__webglTexture, X || 0, Fe);
      }
      S = -1;
    }),
    (this.readRenderTargetPixels = function (w, z, X, N, j, ve, Se) {
      if (!(w && w.isWebGLRenderTarget)) {
        console.error(
          'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.',
        );
        return;
      }
      let Ae = Ee.get(w).__webglFramebuffer;
      if ((w.isWebGLCubeRenderTarget && Se !== void 0 && (Ae = Ae[Se]), Ae)) {
        pe.bindFramebuffer(36160, Ae);
        try {
          const Ce = w.texture,
            Fe = Ce.format,
            Re = Ce.type;
          if (Fe !== Vt && A.convert(Fe) !== Y.getParameter(35739)) {
            console.error(
              'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.',
            );
            return;
          }
          const Ie =
            Re === Gi &&
            (me.has('EXT_color_buffer_half_float') ||
              (ye.isWebGL2 && me.has('EXT_color_buffer_float')));
          if (
            Re !== zn &&
            A.convert(Re) !== Y.getParameter(35738) &&
            !(
              Re === Rn &&
              (ye.isWebGL2 ||
                me.has('OES_texture_float') ||
                me.has('WEBGL_color_buffer_float'))
            ) &&
            !Ie
          ) {
            console.error(
              'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.',
            );
            return;
          }
          z >= 0 &&
            z <= w.width - N &&
            X >= 0 &&
            X <= w.height - j &&
            Y.readPixels(z, X, N, j, A.convert(Fe), A.convert(Re), ve);
        } finally {
          const Ce = v !== null ? Ee.get(v).__webglFramebuffer : null;
          pe.bindFramebuffer(36160, Ce);
        }
      }
    }),
    (this.copyFramebufferToTexture = function (w, z, X = 0) {
      const N = Math.pow(2, -X),
        j = Math.floor(z.image.width * N),
        ve = Math.floor(z.image.height * N);
      be.setTexture2D(z, 0),
        Y.copyTexSubImage2D(3553, X, 0, 0, w.x, w.y, j, ve),
        pe.unbindTexture();
    }),
    (this.copyTextureToTexture = function (w, z, X, N = 0) {
      const j = z.image.width,
        ve = z.image.height,
        Se = A.convert(X.format),
        Ae = A.convert(X.type);
      be.setTexture2D(X, 0),
        Y.pixelStorei(37440, X.flipY),
        Y.pixelStorei(37441, X.premultiplyAlpha),
        Y.pixelStorei(3317, X.unpackAlignment),
        z.isDataTexture
          ? Y.texSubImage2D(3553, N, w.x, w.y, j, ve, Se, Ae, z.image.data)
          : z.isCompressedTexture
          ? Y.compressedTexSubImage2D(
              3553,
              N,
              w.x,
              w.y,
              z.mipmaps[0].width,
              z.mipmaps[0].height,
              Se,
              z.mipmaps[0].data,
            )
          : Y.texSubImage2D(3553, N, w.x, w.y, Se, Ae, z.image),
        N === 0 && X.generateMipmaps && Y.generateMipmap(3553),
        pe.unbindTexture();
    }),
    (this.copyTextureToTexture3D = function (w, z, X, N, j = 0) {
      if (p.isWebGL1Renderer) {
        console.warn(
          'THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.',
        );
        return;
      }
      const ve = w.max.x - w.min.x + 1,
        Se = w.max.y - w.min.y + 1,
        Ae = w.max.z - w.min.z + 1,
        Ce = A.convert(N.format),
        Fe = A.convert(N.type);
      let Re;
      if (N.isData3DTexture) be.setTexture3D(N, 0), (Re = 32879);
      else if (N.isDataArrayTexture) be.setTexture2DArray(N, 0), (Re = 35866);
      else {
        console.warn(
          'THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.',
        );
        return;
      }
      Y.pixelStorei(37440, N.flipY),
        Y.pixelStorei(37441, N.premultiplyAlpha),
        Y.pixelStorei(3317, N.unpackAlignment);
      const Ie = Y.getParameter(3314),
        je = Y.getParameter(32878),
        Et = Y.getParameter(3316),
        Kt = Y.getParameter(3315),
        yn = Y.getParameter(32877),
        Ze = X.isCompressedTexture ? X.mipmaps[0] : X.image;
      Y.pixelStorei(3314, Ze.width),
        Y.pixelStorei(32878, Ze.height),
        Y.pixelStorei(3316, w.min.x),
        Y.pixelStorei(3315, w.min.y),
        Y.pixelStorei(32877, w.min.z),
        X.isDataTexture || X.isData3DTexture
          ? Y.texSubImage3D(Re, j, z.x, z.y, z.z, ve, Se, Ae, Ce, Fe, Ze.data)
          : X.isCompressedArrayTexture
          ? (console.warn(
              'THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture.',
            ),
            Y.compressedTexSubImage3D(
              Re,
              j,
              z.x,
              z.y,
              z.z,
              ve,
              Se,
              Ae,
              Ce,
              Ze.data,
            ))
          : Y.texSubImage3D(Re, j, z.x, z.y, z.z, ve, Se, Ae, Ce, Fe, Ze),
        Y.pixelStorei(3314, Ie),
        Y.pixelStorei(32878, je),
        Y.pixelStorei(3316, Et),
        Y.pixelStorei(3315, Kt),
        Y.pixelStorei(32877, yn),
        j === 0 && N.generateMipmaps && Y.generateMipmap(Re),
        pe.unbindTexture();
    }),
    (this.initTexture = function (w) {
      w.isCubeTexture
        ? be.setTextureCube(w, 0)
        : w.isData3DTexture
        ? be.setTexture3D(w, 0)
        : w.isDataArrayTexture || w.isCompressedArrayTexture
        ? be.setTexture2DArray(w, 0)
        : be.setTexture2D(w, 0),
        pe.unbindTexture();
    }),
    (this.resetState = function () {
      (x = 0), (b = 0), (v = null), pe.reset(), F.reset();
    }),
    typeof __THREE_DEVTOOLS__ < 'u' &&
      __THREE_DEVTOOLS__.dispatchEvent(
        new CustomEvent('observe', { detail: this }),
      );
}
class Mp extends ol {}
Mp.prototype.isWebGL1Renderer = !0;
class Sp extends lt {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = 'Scene'),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < 'u' &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent('observe', { detail: this }),
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (t.backgroundIntensity = this.backgroundIntensity),
      t
    );
  }
  get autoUpdate() {
    return (
      console.warn(
        'THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144.',
      ),
      this.matrixWorldAutoUpdate
    );
  }
  set autoUpdate(e) {
    console.warn(
      'THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144.',
    ),
      (this.matrixWorldAutoUpdate = e);
  }
}
class Gs extends vi {
  constructor(e) {
    super(),
      (this.isLineBasicMaterial = !0),
      (this.type = 'LineBasicMaterial'),
      (this.color = new Be(16777215)),
      (this.linewidth = 1),
      (this.linecap = 'round'),
      (this.linejoin = 'round'),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.linewidth = e.linewidth),
      (this.linecap = e.linecap),
      (this.linejoin = e.linejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const lo = new L(),
  co = new L(),
  uo = new Qe(),
  gs = new Us(),
  gr = new Cr();
class rn extends lt {
  constructor(e = new yt(), t = new Gs()) {
    super(),
      (this.isLine = !0),
      (this.type = 'Line'),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [0];
      for (let i = 1, s = t.count; i < s; i++)
        lo.fromBufferAttribute(t, i - 1),
          co.fromBufferAttribute(t, i),
          (n[i] = n[i - 1]),
          (n[i] += lo.distanceTo(co));
      e.setAttribute('lineDistance', new We(n, 1));
    } else
      console.warn(
        'THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.',
      );
    return this;
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.matrixWorld,
      s = e.params.Line.threshold,
      a = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      gr.copy(n.boundingSphere),
      gr.applyMatrix4(i),
      (gr.radius += s),
      e.ray.intersectsSphere(gr) === !1)
    )
      return;
    uo.copy(i).invert(), gs.copy(e.ray).applyMatrix4(uo);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      l = o * o,
      c = new L(),
      u = new L(),
      h = new L(),
      d = new L(),
      m = this.isLineSegments ? 2 : 1,
      _ = n.index,
      f = n.attributes.position;
    if (_ !== null) {
      const x = Math.max(0, a.start),
        b = Math.min(_.count, a.start + a.count);
      for (let v = x, S = b - 1; v < S; v += m) {
        const y = _.getX(v),
          C = _.getX(v + 1);
        if (
          (c.fromBufferAttribute(f, y),
          u.fromBufferAttribute(f, C),
          gs.distanceSqToSegment(c, u, d, h) > l)
        )
          continue;
        d.applyMatrix4(this.matrixWorld);
        const g = e.ray.origin.distanceTo(d);
        g < e.near ||
          g > e.far ||
          t.push({
            distance: g,
            point: h.clone().applyMatrix4(this.matrixWorld),
            index: v,
            face: null,
            faceIndex: null,
            object: this,
          });
      }
    } else {
      const x = Math.max(0, a.start),
        b = Math.min(f.count, a.start + a.count);
      for (let v = x, S = b - 1; v < S; v += m) {
        if (
          (c.fromBufferAttribute(f, v),
          u.fromBufferAttribute(f, v + 1),
          gs.distanceSqToSegment(c, u, d, h) > l)
        )
          continue;
        d.applyMatrix4(this.matrixWorld);
        const C = e.ray.origin.distanceTo(d);
        C < e.near ||
          C > e.far ||
          t.push({
            distance: C,
            point: h.clone().applyMatrix4(this.matrixWorld),
            index: v,
            face: null,
            faceIndex: null,
            object: this,
          });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = s);
        }
      }
    }
  }
}
const ho = new L(),
  fo = new L();
class wp extends rn {
  constructor(e, t) {
    super(e, t), (this.isLineSegments = !0), (this.type = 'LineSegments');
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [];
      for (let i = 0, s = t.count; i < s; i += 2)
        ho.fromBufferAttribute(t, i),
          fo.fromBufferAttribute(t, i + 1),
          (n[i] = i === 0 ? 0 : n[i - 1]),
          (n[i + 1] = n[i] + ho.distanceTo(fo));
      e.setAttribute('lineDistance', new We(n, 1));
    } else
      console.warn(
        'THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.',
      );
    return this;
  }
}
class pt extends yt {
  constructor(
    e = 1,
    t = 1,
    n = 1,
    i = 32,
    s = 1,
    a = !1,
    o = 0,
    l = Math.PI * 2,
  ) {
    super(),
      (this.type = 'CylinderGeometry'),
      (this.parameters = {
        radiusTop: e,
        radiusBottom: t,
        height: n,
        radialSegments: i,
        heightSegments: s,
        openEnded: a,
        thetaStart: o,
        thetaLength: l,
      });
    const c = this;
    (i = Math.floor(i)), (s = Math.floor(s));
    const u = [],
      h = [],
      d = [],
      m = [];
    let _ = 0;
    const p = [],
      f = n / 2;
    let x = 0;
    b(),
      a === !1 && (e > 0 && v(!0), t > 0 && v(!1)),
      this.setIndex(u),
      this.setAttribute('position', new We(h, 3)),
      this.setAttribute('normal', new We(d, 3)),
      this.setAttribute('uv', new We(m, 2));
    function b() {
      const S = new L(),
        y = new L();
      let C = 0;
      const I = (t - e) / n;
      for (let g = 0; g <= s; g++) {
        const T = [],
          P = g / s,
          G = P * (t - e) + e;
        for (let $ = 0; $ <= i; $++) {
          const O = $ / i,
            R = O * l + o,
            B = Math.sin(R),
            Q = Math.cos(R);
          (y.x = G * B),
            (y.y = -P * n + f),
            (y.z = G * Q),
            h.push(y.x, y.y, y.z),
            S.set(B, I, Q).normalize(),
            d.push(S.x, S.y, S.z),
            m.push(O, 1 - P),
            T.push(_++);
        }
        p.push(T);
      }
      for (let g = 0; g < i; g++)
        for (let T = 0; T < s; T++) {
          const P = p[T][g],
            G = p[T + 1][g],
            $ = p[T + 1][g + 1],
            O = p[T][g + 1];
          u.push(P, G, O), u.push(G, $, O), (C += 6);
        }
      c.addGroup(x, C, 0), (x += C);
    }
    function v(S) {
      const y = _,
        C = new we(),
        I = new L();
      let g = 0;
      const T = S === !0 ? e : t,
        P = S === !0 ? 1 : -1;
      for (let $ = 1; $ <= i; $++)
        h.push(0, f * P, 0), d.push(0, P, 0), m.push(0.5, 0.5), _++;
      const G = _;
      for (let $ = 0; $ <= i; $++) {
        const R = ($ / i) * l + o,
          B = Math.cos(R),
          Q = Math.sin(R);
        (I.x = T * Q),
          (I.y = f * P),
          (I.z = T * B),
          h.push(I.x, I.y, I.z),
          d.push(0, P, 0),
          (C.x = B * 0.5 + 0.5),
          (C.y = Q * 0.5 * P + 0.5),
          m.push(C.x, C.y),
          _++;
      }
      for (let $ = 0; $ < i; $++) {
        const O = y + $,
          R = G + $;
        S === !0 ? u.push(R, R + 1, O) : u.push(R + 1, R, O), (g += 3);
      }
      c.addGroup(x, g, S === !0 ? 1 : 2), (x += g);
    }
  }
  static fromJSON(e) {
    return new pt(
      e.radiusTop,
      e.radiusBottom,
      e.height,
      e.radialSegments,
      e.heightSegments,
      e.openEnded,
      e.thetaStart,
      e.thetaLength,
    );
  }
}
class Hs extends yt {
  constructor(e = [], t = [], n = 1, i = 0) {
    super(),
      (this.type = 'PolyhedronGeometry'),
      (this.parameters = { vertices: e, indices: t, radius: n, detail: i });
    const s = [],
      a = [];
    o(i),
      c(n),
      u(),
      this.setAttribute('position', new We(s, 3)),
      this.setAttribute('normal', new We(s.slice(), 3)),
      this.setAttribute('uv', new We(a, 2)),
      i === 0 ? this.computeVertexNormals() : this.normalizeNormals();
    function o(b) {
      const v = new L(),
        S = new L(),
        y = new L();
      for (let C = 0; C < t.length; C += 3)
        m(t[C + 0], v), m(t[C + 1], S), m(t[C + 2], y), l(v, S, y, b);
    }
    function l(b, v, S, y) {
      const C = y + 1,
        I = [];
      for (let g = 0; g <= C; g++) {
        I[g] = [];
        const T = b.clone().lerp(S, g / C),
          P = v.clone().lerp(S, g / C),
          G = C - g;
        for (let $ = 0; $ <= G; $++)
          $ === 0 && g === C
            ? (I[g][$] = T)
            : (I[g][$] = T.clone().lerp(P, $ / G));
      }
      for (let g = 0; g < C; g++)
        for (let T = 0; T < 2 * (C - g) - 1; T++) {
          const P = Math.floor(T / 2);
          T % 2 === 0
            ? (d(I[g][P + 1]), d(I[g + 1][P]), d(I[g][P]))
            : (d(I[g][P + 1]), d(I[g + 1][P + 1]), d(I[g + 1][P]));
        }
    }
    function c(b) {
      const v = new L();
      for (let S = 0; S < s.length; S += 3)
        (v.x = s[S + 0]),
          (v.y = s[S + 1]),
          (v.z = s[S + 2]),
          v.normalize().multiplyScalar(b),
          (s[S + 0] = v.x),
          (s[S + 1] = v.y),
          (s[S + 2] = v.z);
    }
    function u() {
      const b = new L();
      for (let v = 0; v < s.length; v += 3) {
        (b.x = s[v + 0]), (b.y = s[v + 1]), (b.z = s[v + 2]);
        const S = f(b) / 2 / Math.PI + 0.5,
          y = x(b) / Math.PI + 0.5;
        a.push(S, 1 - y);
      }
      _(), h();
    }
    function h() {
      for (let b = 0; b < a.length; b += 6) {
        const v = a[b + 0],
          S = a[b + 2],
          y = a[b + 4],
          C = Math.max(v, S, y),
          I = Math.min(v, S, y);
        C > 0.9 &&
          I < 0.1 &&
          (v < 0.2 && (a[b + 0] += 1),
          S < 0.2 && (a[b + 2] += 1),
          y < 0.2 && (a[b + 4] += 1));
      }
    }
    function d(b) {
      s.push(b.x, b.y, b.z);
    }
    function m(b, v) {
      const S = b * 3;
      (v.x = e[S + 0]), (v.y = e[S + 1]), (v.z = e[S + 2]);
    }
    function _() {
      const b = new L(),
        v = new L(),
        S = new L(),
        y = new L(),
        C = new we(),
        I = new we(),
        g = new we();
      for (let T = 0, P = 0; T < s.length; T += 9, P += 6) {
        b.set(s[T + 0], s[T + 1], s[T + 2]),
          v.set(s[T + 3], s[T + 4], s[T + 5]),
          S.set(s[T + 6], s[T + 7], s[T + 8]),
          C.set(a[P + 0], a[P + 1]),
          I.set(a[P + 2], a[P + 3]),
          g.set(a[P + 4], a[P + 5]),
          y.copy(b).add(v).add(S).divideScalar(3);
        const G = f(y);
        p(C, P + 0, b, G), p(I, P + 2, v, G), p(g, P + 4, S, G);
      }
    }
    function p(b, v, S, y) {
      y < 0 && b.x === 1 && (a[v] = b.x - 1),
        S.x === 0 && S.z === 0 && (a[v] = y / 2 / Math.PI + 0.5);
    }
    function f(b) {
      return Math.atan2(b.z, -b.x);
    }
    function x(b) {
      return Math.atan2(-b.y, Math.sqrt(b.x * b.x + b.z * b.z));
    }
  }
  static fromJSON(e) {
    return new Hs(e.vertices, e.indices, e.radius, e.details);
  }
}
class ci extends Hs {
  constructor(e = 1, t = 0) {
    const n = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
      i = [
        0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2,
      ];
    super(n, i, e, t),
      (this.type = 'OctahedronGeometry'),
      (this.parameters = { radius: e, detail: t });
  }
  static fromJSON(e) {
    return new ci(e.radius, e.detail);
  }
}
class Dr extends yt {
  constructor(
    e = 1,
    t = 32,
    n = 16,
    i = 0,
    s = Math.PI * 2,
    a = 0,
    o = Math.PI,
  ) {
    super(),
      (this.type = 'SphereGeometry'),
      (this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: n,
        phiStart: i,
        phiLength: s,
        thetaStart: a,
        thetaLength: o,
      }),
      (t = Math.max(3, Math.floor(t))),
      (n = Math.max(2, Math.floor(n)));
    const l = Math.min(a + o, Math.PI);
    let c = 0;
    const u = [],
      h = new L(),
      d = new L(),
      m = [],
      _ = [],
      p = [],
      f = [];
    for (let x = 0; x <= n; x++) {
      const b = [],
        v = x / n;
      let S = 0;
      x == 0 && a == 0
        ? (S = 0.5 / t)
        : x == n && l == Math.PI && (S = -0.5 / t);
      for (let y = 0; y <= t; y++) {
        const C = y / t;
        (h.x = -e * Math.cos(i + C * s) * Math.sin(a + v * o)),
          (h.y = e * Math.cos(a + v * o)),
          (h.z = e * Math.sin(i + C * s) * Math.sin(a + v * o)),
          _.push(h.x, h.y, h.z),
          d.copy(h).normalize(),
          p.push(d.x, d.y, d.z),
          f.push(C + S, 1 - v),
          b.push(c++);
      }
      u.push(b);
    }
    for (let x = 0; x < n; x++)
      for (let b = 0; b < t; b++) {
        const v = u[x][b + 1],
          S = u[x][b],
          y = u[x + 1][b],
          C = u[x + 1][b + 1];
        (x !== 0 || a > 0) && m.push(v, S, C),
          (x !== n - 1 || l < Math.PI) && m.push(S, y, C);
      }
    this.setIndex(m),
      this.setAttribute('position', new We(_, 3)),
      this.setAttribute('normal', new We(p, 3)),
      this.setAttribute('uv', new We(f, 2));
  }
  static fromJSON(e) {
    return new Dr(
      e.radius,
      e.widthSegments,
      e.heightSegments,
      e.phiStart,
      e.phiLength,
      e.thetaStart,
      e.thetaLength,
    );
  }
}
class fn extends yt {
  constructor(e = 1, t = 0.4, n = 12, i = 48, s = Math.PI * 2) {
    super(),
      (this.type = 'TorusGeometry'),
      (this.parameters = {
        radius: e,
        tube: t,
        radialSegments: n,
        tubularSegments: i,
        arc: s,
      }),
      (n = Math.floor(n)),
      (i = Math.floor(i));
    const a = [],
      o = [],
      l = [],
      c = [],
      u = new L(),
      h = new L(),
      d = new L();
    for (let m = 0; m <= n; m++)
      for (let _ = 0; _ <= i; _++) {
        const p = (_ / i) * s,
          f = (m / n) * Math.PI * 2;
        (h.x = (e + t * Math.cos(f)) * Math.cos(p)),
          (h.y = (e + t * Math.cos(f)) * Math.sin(p)),
          (h.z = t * Math.sin(f)),
          o.push(h.x, h.y, h.z),
          (u.x = e * Math.cos(p)),
          (u.y = e * Math.sin(p)),
          d.subVectors(h, u).normalize(),
          l.push(d.x, d.y, d.z),
          c.push(_ / i),
          c.push(m / n);
      }
    for (let m = 1; m <= n; m++)
      for (let _ = 1; _ <= i; _++) {
        const p = (i + 1) * m + _ - 1,
          f = (i + 1) * (m - 1) + _ - 1,
          x = (i + 1) * (m - 1) + _,
          b = (i + 1) * m + _;
        a.push(p, f, b), a.push(f, x, b);
      }
    this.setIndex(a),
      this.setAttribute('position', new We(o, 3)),
      this.setAttribute('normal', new We(l, 3)),
      this.setAttribute('uv', new We(c, 2));
  }
  static fromJSON(e) {
    return new fn(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc);
  }
}
class Vs extends vi {
  constructor(e) {
    super(),
      (this.isMeshStandardMaterial = !0),
      (this.defines = { STANDARD: '' }),
      (this.type = 'MeshStandardMaterial'),
      (this.color = new Be(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Be(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = Wo),
      (this.normalScale = new we(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = 'round'),
      (this.wireframeLinejoin = 'round'),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: '' }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.envMapIntensity = e.envMapIntensity),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
const po = {
  enabled: !1,
  files: {},
  add: function (r, e) {
    this.enabled !== !1 && (this.files[r] = e);
  },
  get: function (r) {
    if (this.enabled !== !1) return this.files[r];
  },
  remove: function (r) {
    delete this.files[r];
  },
  clear: function () {
    this.files = {};
  },
};
class ll {
  constructor(e, t, n) {
    const i = this;
    let s = !1,
      a = 0,
      o = 0,
      l;
    const c = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this.itemStart = function (u) {
        o++, s === !1 && i.onStart !== void 0 && i.onStart(u, a, o), (s = !0);
      }),
      (this.itemEnd = function (u) {
        a++,
          i.onProgress !== void 0 && i.onProgress(u, a, o),
          a === o && ((s = !1), i.onLoad !== void 0 && i.onLoad());
      }),
      (this.itemError = function (u) {
        i.onError !== void 0 && i.onError(u);
      }),
      (this.resolveURL = function (u) {
        return l ? l(u) : u;
      }),
      (this.setURLModifier = function (u) {
        return (l = u), this;
      }),
      (this.addHandler = function (u, h) {
        return c.push(u, h), this;
      }),
      (this.removeHandler = function (u) {
        const h = c.indexOf(u);
        return h !== -1 && c.splice(h, 2), this;
      }),
      (this.getHandler = function (u) {
        for (let h = 0, d = c.length; h < d; h += 2) {
          const m = c[h],
            _ = c[h + 1];
          if ((m.global && (m.lastIndex = 0), m.test(u))) return _;
        }
        return null;
      });
  }
}
const Ep = new ll();
class cl {
  constructor(e) {
    (this.manager = e !== void 0 ? e : Ep),
      (this.crossOrigin = 'anonymous'),
      (this.withCredentials = !1),
      (this.path = ''),
      (this.resourcePath = ''),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (i, s) {
      n.load(e, i, t, s);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
class Tp extends cl {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const s = this,
      a = po.get(e);
    if (a !== void 0)
      return (
        s.manager.itemStart(e),
        setTimeout(function () {
          t && t(a), s.manager.itemEnd(e);
        }, 0),
        a
      );
    const o = Vi('img');
    function l() {
      u(), po.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function c(h) {
      u(), i && i(h), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function u() {
      o.removeEventListener('load', l, !1),
        o.removeEventListener('error', c, !1);
    }
    return (
      o.addEventListener('load', l, !1),
      o.addEventListener('error', c, !1),
      e.slice(0, 5) !== 'data:' &&
        this.crossOrigin !== void 0 &&
        (o.crossOrigin = this.crossOrigin),
      s.manager.itemStart(e),
      (o.src = e),
      o
    );
  }
}
class Ap extends cl {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new wt(),
      a = new Tp(this.manager);
    return (
      a.setCrossOrigin(this.crossOrigin),
      a.setPath(this.path),
      a.load(
        e,
        function (o) {
          (s.image = o), (s.needsUpdate = !0), t !== void 0 && t(s);
        },
        n,
        i,
      ),
      s
    );
  }
}
class Cp extends lt {
  constructor(e, t = 1) {
    super(),
      (this.isLight = !0),
      (this.type = 'Light'),
      (this.color = new Be(e)),
      (this.intensity = t);
  }
  dispose() {}
  copy(e, t) {
    return (
      super.copy(e, t),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (t.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (t.object.distance = this.distance),
      this.angle !== void 0 && (t.object.angle = this.angle),
      this.decay !== void 0 && (t.object.decay = this.decay),
      this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
      t
    );
  }
}
class Lp extends Cp {
  constructor(e, t) {
    super(e, t), (this.isAmbientLight = !0), (this.type = 'AmbientLight');
  }
}
class ul {
  constructor(e, t, n = 0, i = 1 / 0) {
    (this.ray = new Us(e, t)),
      (this.near = n),
      (this.far = i),
      (this.camera = null),
      (this.layers = new Bs()),
      (this.params = {
        Mesh: {},
        Line: { threshold: 1 },
        LOD: {},
        Points: { threshold: 1 },
        Sprite: {},
      });
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera
      ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld),
        this.ray.direction
          .set(e.x, e.y, 0.5)
          .unproject(t)
          .sub(this.ray.origin)
          .normalize(),
        (this.camera = t))
      : t.isOrthographicCamera
      ? (this.ray.origin
          .set(e.x, e.y, (t.near + t.far) / (t.near - t.far))
          .unproject(t),
        this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld),
        (this.camera = t))
      : console.error('THREE.Raycaster: Unsupported camera type: ' + t.type);
  }
  intersectObject(e, t = !0, n = []) {
    return Ls(e, this, n, t), n.sort(mo), n;
  }
  intersectObjects(e, t = !0, n = []) {
    for (let i = 0, s = e.length; i < s; i++) Ls(e[i], this, n, t);
    return n.sort(mo), n;
  }
}
function mo(r, e) {
  return r.distance - e.distance;
}
function Ls(r, e, t, n) {
  if ((r.layers.test(e.layers) && r.raycast(e, t), n === !0)) {
    const i = r.children;
    for (let s = 0, a = i.length; s < a; s++) Ls(i[s], e, t, !0);
  }
}
class go {
  constructor(e = 1, t = 0, n = 0) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  set(e, t, n) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  copy(e) {
    return (
      (this.radius = e.radius), (this.phi = e.phi), (this.theta = e.theta), this
    );
  }
  makeSafe() {
    return (
      (this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))), this
    );
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return (
      (this.radius = Math.sqrt(e * e + t * t + n * n)),
      this.radius === 0
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(e, n)),
          (this.phi = Math.acos(St(t / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Pp extends wp {
  constructor(e = 10, t = 10, n = 4473924, i = 8947848) {
    (n = new Be(n)), (i = new Be(i));
    const s = t / 2,
      a = e / t,
      o = e / 2,
      l = [],
      c = [];
    for (let d = 0, m = 0, _ = -o; d <= t; d++, _ += a) {
      l.push(-o, 0, _, o, 0, _), l.push(_, 0, -o, _, 0, o);
      const p = d === s ? n : i;
      p.toArray(c, m),
        (m += 3),
        p.toArray(c, m),
        (m += 3),
        p.toArray(c, m),
        (m += 3),
        p.toArray(c, m),
        (m += 3);
    }
    const u = new yt();
    u.setAttribute('position', new We(l, 3)),
      u.setAttribute('color', new We(c, 3));
    const h = new Gs({ vertexColors: !0, toneMapped: !1 });
    super(u, h), (this.type = 'GridHelper');
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
typeof __THREE_DEVTOOLS__ < 'u' &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent('register', { detail: { revision: zs } }),
  );
typeof window < 'u' &&
  (window.__THREE__
    ? console.warn('WARNING: Multiple instances of Three.js being imported.')
    : (window.__THREE__ = zs));
const _o = { type: 'change' },
  _s = { type: 'start' },
  xo = { type: 'end' };
class Dp extends Gn {
  constructor(e, t) {
    super(),
      (this.object = e),
      (this.domElement = t),
      (this.domElement.style.touchAction = 'none'),
      (this.enabled = !0),
      (this.target = new L()),
      (this.minDistance = 0),
      (this.maxDistance = 1 / 0),
      (this.minZoom = 0),
      (this.maxZoom = 1 / 0),
      (this.minPolarAngle = 0),
      (this.maxPolarAngle = Math.PI),
      (this.minAzimuthAngle = -1 / 0),
      (this.maxAzimuthAngle = 1 / 0),
      (this.enableDamping = !1),
      (this.dampingFactor = 0.05),
      (this.enableZoom = !0),
      (this.zoomSpeed = 1),
      (this.enableRotate = !0),
      (this.rotateSpeed = 1),
      (this.enablePan = !0),
      (this.panSpeed = 1),
      (this.screenSpacePanning = !0),
      (this.keyPanSpeed = 7),
      (this.autoRotate = !1),
      (this.autoRotateSpeed = 2),
      (this.keys = {
        LEFT: 'ArrowLeft',
        UP: 'ArrowUp',
        RIGHT: 'ArrowRight',
        BOTTOM: 'ArrowDown',
      }),
      (this.mouseButtons = {
        LEFT: Vn.ROTATE,
        MIDDLE: Vn.DOLLY,
        RIGHT: Vn.PAN,
      }),
      (this.touches = { ONE: Wn.ROTATE, TWO: Wn.DOLLY_PAN }),
      (this.target0 = this.target.clone()),
      (this.position0 = this.object.position.clone()),
      (this.zoom0 = this.object.zoom),
      (this._domElementKeyEvents = null),
      (this.getPolarAngle = function () {
        return o.phi;
      }),
      (this.getAzimuthalAngle = function () {
        return o.theta;
      }),
      (this.getDistance = function () {
        return this.object.position.distanceTo(this.target);
      }),
      (this.listenToKeyEvents = function (A) {
        A.addEventListener('keydown', bt), (this._domElementKeyEvents = A);
      }),
      (this.saveState = function () {
        n.target0.copy(n.target),
          n.position0.copy(n.object.position),
          (n.zoom0 = n.object.zoom);
      }),
      (this.reset = function () {
        n.target.copy(n.target0),
          n.object.position.copy(n.position0),
          (n.object.zoom = n.zoom0),
          n.object.updateProjectionMatrix(),
          n.dispatchEvent(_o),
          n.update(),
          (s = i.NONE);
      }),
      (this.update = (function () {
        const A = new L(),
          F = new ut().setFromUnitVectors(e.up, new L(0, 1, 0)),
          he = F.clone().invert(),
          fe = new L(),
          ue = new ut(),
          _e = 2 * Math.PI;
        return function () {
          const Pe = n.object.position;
          A.copy(Pe).sub(n.target),
            A.applyQuaternion(F),
            o.setFromVector3(A),
            n.autoRotate && s === i.NONE && T(I()),
            n.enableDamping
              ? ((o.theta += l.theta * n.dampingFactor),
                (o.phi += l.phi * n.dampingFactor))
              : ((o.theta += l.theta), (o.phi += l.phi));
          let De = n.minAzimuthAngle,
            ke = n.maxAzimuthAngle;
          return (
            isFinite(De) &&
              isFinite(ke) &&
              (De < -Math.PI ? (De += _e) : De > Math.PI && (De -= _e),
              ke < -Math.PI ? (ke += _e) : ke > Math.PI && (ke -= _e),
              De <= ke
                ? (o.theta = Math.max(De, Math.min(ke, o.theta)))
                : (o.theta =
                    o.theta > (De + ke) / 2
                      ? Math.max(De, o.theta)
                      : Math.min(ke, o.theta))),
            (o.phi = Math.max(
              n.minPolarAngle,
              Math.min(n.maxPolarAngle, o.phi),
            )),
            o.makeSafe(),
            (o.radius *= c),
            (o.radius = Math.max(
              n.minDistance,
              Math.min(n.maxDistance, o.radius),
            )),
            n.enableDamping === !0
              ? n.target.addScaledVector(u, n.dampingFactor)
              : n.target.add(u),
            A.setFromSpherical(o),
            A.applyQuaternion(he),
            Pe.copy(n.target).add(A),
            n.object.lookAt(n.target),
            n.enableDamping === !0
              ? ((l.theta *= 1 - n.dampingFactor),
                (l.phi *= 1 - n.dampingFactor),
                u.multiplyScalar(1 - n.dampingFactor))
              : (l.set(0, 0, 0), u.set(0, 0, 0)),
            (c = 1),
            h ||
            fe.distanceToSquared(n.object.position) > a ||
            8 * (1 - ue.dot(n.object.quaternion)) > a
              ? (n.dispatchEvent(_o),
                fe.copy(n.object.position),
                ue.copy(n.object.quaternion),
                (h = !1),
                !0)
              : !1
          );
        };
      })()),
      (this.dispose = function () {
        n.domElement.removeEventListener('contextmenu', V),
          n.domElement.removeEventListener('pointerdown', rt),
          n.domElement.removeEventListener('pointercancel', gt),
          n.domElement.removeEventListener('wheel', Rt),
          n.domElement.removeEventListener('pointermove', Je),
          n.domElement.removeEventListener('pointerup', et),
          n._domElementKeyEvents !== null &&
            n._domElementKeyEvents.removeEventListener('keydown', bt);
      });
    const n = this,
      i = {
        NONE: -1,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_PAN: 4,
        TOUCH_DOLLY_PAN: 5,
        TOUCH_DOLLY_ROTATE: 6,
      };
    let s = i.NONE;
    const a = 1e-6,
      o = new go(),
      l = new go();
    let c = 1;
    const u = new L();
    let h = !1;
    const d = new we(),
      m = new we(),
      _ = new we(),
      p = new we(),
      f = new we(),
      x = new we(),
      b = new we(),
      v = new we(),
      S = new we(),
      y = [],
      C = {};
    function I() {
      return ((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed;
    }
    function g() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function T(A) {
      l.theta -= A;
    }
    function P(A) {
      l.phi -= A;
    }
    const G = (function () {
        const A = new L();
        return function (he, fe) {
          A.setFromMatrixColumn(fe, 0), A.multiplyScalar(-he), u.add(A);
        };
      })(),
      $ = (function () {
        const A = new L();
        return function (he, fe) {
          n.screenSpacePanning === !0
            ? A.setFromMatrixColumn(fe, 1)
            : (A.setFromMatrixColumn(fe, 0), A.crossVectors(n.object.up, A)),
            A.multiplyScalar(he),
            u.add(A);
        };
      })(),
      O = (function () {
        const A = new L();
        return function (he, fe) {
          const ue = n.domElement;
          if (n.object.isPerspectiveCamera) {
            const _e = n.object.position;
            A.copy(_e).sub(n.target);
            let ge = A.length();
            (ge *= Math.tan(((n.object.fov / 2) * Math.PI) / 180)),
              G((2 * he * ge) / ue.clientHeight, n.object.matrix),
              $((2 * fe * ge) / ue.clientHeight, n.object.matrix);
          } else
            n.object.isOrthographicCamera
              ? (G(
                  (he * (n.object.right - n.object.left)) /
                    n.object.zoom /
                    ue.clientWidth,
                  n.object.matrix,
                ),
                $(
                  (fe * (n.object.top - n.object.bottom)) /
                    n.object.zoom /
                    ue.clientHeight,
                  n.object.matrix,
                ))
              : (console.warn(
                  'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.',
                ),
                (n.enablePan = !1));
        };
      })();
    function R(A) {
      n.object.isPerspectiveCamera
        ? (c /= A)
        : n.object.isOrthographicCamera
        ? ((n.object.zoom = Math.max(
            n.minZoom,
            Math.min(n.maxZoom, n.object.zoom * A),
          )),
          n.object.updateProjectionMatrix(),
          (h = !0))
        : (console.warn(
            'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.',
          ),
          (n.enableZoom = !1));
    }
    function B(A) {
      n.object.isPerspectiveCamera
        ? (c *= A)
        : n.object.isOrthographicCamera
        ? ((n.object.zoom = Math.max(
            n.minZoom,
            Math.min(n.maxZoom, n.object.zoom / A),
          )),
          n.object.updateProjectionMatrix(),
          (h = !0))
        : (console.warn(
            'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.',
          ),
          (n.enableZoom = !1));
    }
    function Q(A) {
      d.set(A.clientX, A.clientY);
    }
    function K(A) {
      b.set(A.clientX, A.clientY);
    }
    function q(A) {
      p.set(A.clientX, A.clientY);
    }
    function J(A) {
      m.set(A.clientX, A.clientY),
        _.subVectors(m, d).multiplyScalar(n.rotateSpeed);
      const F = n.domElement;
      T((2 * Math.PI * _.x) / F.clientHeight),
        P((2 * Math.PI * _.y) / F.clientHeight),
        d.copy(m),
        n.update();
    }
    function ee(A) {
      v.set(A.clientX, A.clientY),
        S.subVectors(v, b),
        S.y > 0 ? R(g()) : S.y < 0 && B(g()),
        b.copy(v),
        n.update();
    }
    function k(A) {
      f.set(A.clientX, A.clientY),
        x.subVectors(f, p).multiplyScalar(n.panSpeed),
        O(x.x, x.y),
        p.copy(f),
        n.update();
    }
    function H(A) {
      A.deltaY < 0 ? B(g()) : A.deltaY > 0 && R(g()), n.update();
    }
    function te(A) {
      let F = !1;
      switch (A.code) {
        case n.keys.UP:
          A.ctrlKey || A.metaKey || A.shiftKey
            ? P((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : O(0, n.keyPanSpeed),
            (F = !0);
          break;
        case n.keys.BOTTOM:
          A.ctrlKey || A.metaKey || A.shiftKey
            ? P((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : O(0, -n.keyPanSpeed),
            (F = !0);
          break;
        case n.keys.LEFT:
          A.ctrlKey || A.metaKey || A.shiftKey
            ? T((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : O(n.keyPanSpeed, 0),
            (F = !0);
          break;
        case n.keys.RIGHT:
          A.ctrlKey || A.metaKey || A.shiftKey
            ? T((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : O(-n.keyPanSpeed, 0),
            (F = !0);
          break;
      }
      F && (A.preventDefault(), n.update());
    }
    function re() {
      if (y.length === 1) d.set(y[0].pageX, y[0].pageY);
      else {
        const A = 0.5 * (y[0].pageX + y[1].pageX),
          F = 0.5 * (y[0].pageY + y[1].pageY);
        d.set(A, F);
      }
    }
    function oe() {
      if (y.length === 1) p.set(y[0].pageX, y[0].pageY);
      else {
        const A = 0.5 * (y[0].pageX + y[1].pageX),
          F = 0.5 * (y[0].pageY + y[1].pageY);
        p.set(A, F);
      }
    }
    function Y() {
      const A = y[0].pageX - y[1].pageX,
        F = y[0].pageY - y[1].pageY,
        he = Math.sqrt(A * A + F * F);
      b.set(0, he);
    }
    function Le() {
      n.enableZoom && Y(), n.enablePan && oe();
    }
    function me() {
      n.enableZoom && Y(), n.enableRotate && re();
    }
    function ye(A) {
      if (y.length == 1) m.set(A.pageX, A.pageY);
      else {
        const he = Me(A),
          fe = 0.5 * (A.pageX + he.x),
          ue = 0.5 * (A.pageY + he.y);
        m.set(fe, ue);
      }
      _.subVectors(m, d).multiplyScalar(n.rotateSpeed);
      const F = n.domElement;
      T((2 * Math.PI * _.x) / F.clientHeight),
        P((2 * Math.PI * _.y) / F.clientHeight),
        d.copy(m);
    }
    function pe(A) {
      if (y.length === 1) f.set(A.pageX, A.pageY);
      else {
        const F = Me(A),
          he = 0.5 * (A.pageX + F.x),
          fe = 0.5 * (A.pageY + F.y);
        f.set(he, fe);
      }
      x.subVectors(f, p).multiplyScalar(n.panSpeed), O(x.x, x.y), p.copy(f);
    }
    function Ne(A) {
      const F = Me(A),
        he = A.pageX - F.x,
        fe = A.pageY - F.y,
        ue = Math.sqrt(he * he + fe * fe);
      v.set(0, ue),
        S.set(0, Math.pow(v.y / b.y, n.zoomSpeed)),
        R(S.y),
        b.copy(v);
    }
    function Ee(A) {
      n.enableZoom && Ne(A), n.enablePan && pe(A);
    }
    function be(A) {
      n.enableZoom && Ne(A), n.enableRotate && ye(A);
    }
    function rt(A) {
      n.enabled !== !1 &&
        (y.length === 0 &&
          (n.domElement.setPointerCapture(A.pointerId),
          n.domElement.addEventListener('pointermove', Je),
          n.domElement.addEventListener('pointerup', et)),
        ie(A),
        A.pointerType === 'touch' ? E(A) : Ye(A));
    }
    function Je(A) {
      n.enabled !== !1 && (A.pointerType === 'touch' ? M(A) : Ue(A));
    }
    function et(A) {
      se(A),
        y.length === 0 &&
          (n.domElement.releasePointerCapture(A.pointerId),
          n.domElement.removeEventListener('pointermove', Je),
          n.domElement.removeEventListener('pointerup', et)),
        n.dispatchEvent(xo),
        (s = i.NONE);
    }
    function gt(A) {
      se(A);
    }
    function Ye(A) {
      let F;
      switch (A.button) {
        case 0:
          F = n.mouseButtons.LEFT;
          break;
        case 1:
          F = n.mouseButtons.MIDDLE;
          break;
        case 2:
          F = n.mouseButtons.RIGHT;
          break;
        default:
          F = -1;
      }
      switch (F) {
        case Vn.DOLLY:
          if (n.enableZoom === !1) return;
          K(A), (s = i.DOLLY);
          break;
        case Vn.ROTATE:
          if (A.ctrlKey || A.metaKey || A.shiftKey) {
            if (n.enablePan === !1) return;
            q(A), (s = i.PAN);
          } else {
            if (n.enableRotate === !1) return;
            Q(A), (s = i.ROTATE);
          }
          break;
        case Vn.PAN:
          if (A.ctrlKey || A.metaKey || A.shiftKey) {
            if (n.enableRotate === !1) return;
            Q(A), (s = i.ROTATE);
          } else {
            if (n.enablePan === !1) return;
            q(A), (s = i.PAN);
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(_s);
    }
    function Ue(A) {
      switch (s) {
        case i.ROTATE:
          if (n.enableRotate === !1) return;
          J(A);
          break;
        case i.DOLLY:
          if (n.enableZoom === !1) return;
          ee(A);
          break;
        case i.PAN:
          if (n.enablePan === !1) return;
          k(A);
          break;
      }
    }
    function Rt(A) {
      n.enabled === !1 ||
        n.enableZoom === !1 ||
        s !== i.NONE ||
        (A.preventDefault(), n.dispatchEvent(_s), H(A), n.dispatchEvent(xo));
    }
    function bt(A) {
      n.enabled === !1 || n.enablePan === !1 || te(A);
    }
    function E(A) {
      switch ((le(A), y.length)) {
        case 1:
          switch (n.touches.ONE) {
            case Wn.ROTATE:
              if (n.enableRotate === !1) return;
              re(), (s = i.TOUCH_ROTATE);
              break;
            case Wn.PAN:
              if (n.enablePan === !1) return;
              oe(), (s = i.TOUCH_PAN);
              break;
            default:
              s = i.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case Wn.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              Le(), (s = i.TOUCH_DOLLY_PAN);
              break;
            case Wn.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              me(), (s = i.TOUCH_DOLLY_ROTATE);
              break;
            default:
              s = i.NONE;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(_s);
    }
    function M(A) {
      switch ((le(A), s)) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          ye(A), n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === !1) return;
          pe(A), n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          Ee(A), n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          be(A), n.update();
          break;
        default:
          s = i.NONE;
      }
    }
    function V(A) {
      n.enabled !== !1 && A.preventDefault();
    }
    function ie(A) {
      y.push(A);
    }
    function se(A) {
      delete C[A.pointerId];
      for (let F = 0; F < y.length; F++)
        if (y[F].pointerId == A.pointerId) {
          y.splice(F, 1);
          return;
        }
    }
    function le(A) {
      let F = C[A.pointerId];
      F === void 0 && ((F = new we()), (C[A.pointerId] = F)),
        F.set(A.pageX, A.pageY);
    }
    function Me(A) {
      const F = A.pointerId === y[0].pointerId ? y[1] : y[0];
      return C[F.pointerId];
    }
    n.domElement.addEventListener('contextmenu', V),
      n.domElement.addEventListener('pointerdown', rt),
      n.domElement.addEventListener('pointercancel', gt),
      n.domElement.addEventListener('wheel', Rt, { passive: !1 }),
      this.update();
  }
}
const Tn = new ul(),
  Mt = new L(),
  hn = new L(),
  qe = new ut(),
  vo = { X: new L(1, 0, 0), Y: new L(0, 1, 0), Z: new L(0, 0, 1) },
  xs = { type: 'change' },
  yo = { type: 'mouseDown' },
  bo = { type: 'mouseUp', mode: null },
  Mo = { type: 'objectChange' };
class Rp extends lt {
  constructor(e, t) {
    super(),
      t === void 0 &&
        (console.warn(
          'THREE.TransformControls: The second parameter "domElement" is now mandatory.',
        ),
        (t = document)),
      (this.isTransformControls = !0),
      (this.visible = !1),
      (this.domElement = t),
      (this.domElement.style.touchAction = 'none');
    const n = new Up();
    (this._gizmo = n), this.add(n);
    const i = new Bp();
    (this._plane = i), this.add(i);
    const s = this;
    function a(b, v) {
      let S = v;
      Object.defineProperty(s, b, {
        get: function () {
          return S !== void 0 ? S : v;
        },
        set: function (y) {
          S !== y &&
            ((S = y),
            (i[b] = y),
            (n[b] = y),
            s.dispatchEvent({ type: b + '-changed', value: y }),
            s.dispatchEvent(xs));
        },
      }),
        (s[b] = v),
        (i[b] = v),
        (n[b] = v);
    }
    a('camera', e),
      a('object', void 0),
      a('enabled', !0),
      a('axis', null),
      a('mode', 'translate'),
      a('translationSnap', null),
      a('rotationSnap', null),
      a('scaleSnap', null),
      a('space', 'world'),
      a('size', 1),
      a('dragging', !1),
      a('showX', !0),
      a('showY', !0),
      a('showZ', !0);
    const o = new L(),
      l = new L(),
      c = new ut(),
      u = new ut(),
      h = new L(),
      d = new ut(),
      m = new L(),
      _ = new L(),
      p = new L(),
      f = 0,
      x = new L();
    a('worldPosition', o),
      a('worldPositionStart', l),
      a('worldQuaternion', c),
      a('worldQuaternionStart', u),
      a('cameraPosition', h),
      a('cameraQuaternion', d),
      a('pointStart', m),
      a('pointEnd', _),
      a('rotationAxis', p),
      a('rotationAngle', f),
      a('eye', x),
      (this._offset = new L()),
      (this._startNorm = new L()),
      (this._endNorm = new L()),
      (this._cameraScale = new L()),
      (this._parentPosition = new L()),
      (this._parentQuaternion = new ut()),
      (this._parentQuaternionInv = new ut()),
      (this._parentScale = new L()),
      (this._worldScaleStart = new L()),
      (this._worldQuaternionInv = new ut()),
      (this._worldScale = new L()),
      (this._positionStart = new L()),
      (this._quaternionStart = new ut()),
      (this._scaleStart = new L()),
      (this._getPointer = Ip.bind(this)),
      (this._onPointerDown = Fp.bind(this)),
      (this._onPointerHover = Op.bind(this)),
      (this._onPointerMove = Np.bind(this)),
      (this._onPointerUp = zp.bind(this)),
      this.domElement.addEventListener('pointerdown', this._onPointerDown),
      this.domElement.addEventListener('pointermove', this._onPointerHover),
      this.domElement.addEventListener('pointerup', this._onPointerUp);
  }
  updateMatrixWorld() {
    this.object !== void 0 &&
      (this.object.updateMatrixWorld(),
      this.object.parent === null
        ? console.error(
            'TransformControls: The attached 3D object must be a part of the scene graph.',
          )
        : this.object.parent.matrixWorld.decompose(
            this._parentPosition,
            this._parentQuaternion,
            this._parentScale,
          ),
      this.object.matrixWorld.decompose(
        this.worldPosition,
        this.worldQuaternion,
        this._worldScale,
      ),
      this._parentQuaternionInv.copy(this._parentQuaternion).invert(),
      this._worldQuaternionInv.copy(this.worldQuaternion).invert()),
      this.camera.updateMatrixWorld(),
      this.camera.matrixWorld.decompose(
        this.cameraPosition,
        this.cameraQuaternion,
        this._cameraScale,
      ),
      this.camera.isOrthographicCamera
        ? this.camera.getWorldDirection(this.eye).negate()
        : this.eye
            .copy(this.cameraPosition)
            .sub(this.worldPosition)
            .normalize(),
      super.updateMatrixWorld(this);
  }
  pointerHover(e) {
    if (this.object === void 0 || this.dragging === !0) return;
    Tn.setFromCamera(e, this.camera);
    const t = vs(this._gizmo.picker[this.mode], Tn);
    t ? (this.axis = t.object.name) : (this.axis = null);
  }
  pointerDown(e) {
    if (
      !(this.object === void 0 || this.dragging === !0 || e.button !== 0) &&
      this.axis !== null
    ) {
      Tn.setFromCamera(e, this.camera);
      const t = vs(this._plane, Tn, !0);
      t &&
        (this.object.updateMatrixWorld(),
        this.object.parent.updateMatrixWorld(),
        this._positionStart.copy(this.object.position),
        this._quaternionStart.copy(this.object.quaternion),
        this._scaleStart.copy(this.object.scale),
        this.object.matrixWorld.decompose(
          this.worldPositionStart,
          this.worldQuaternionStart,
          this._worldScaleStart,
        ),
        this.pointStart.copy(t.point).sub(this.worldPositionStart)),
        (this.dragging = !0),
        (yo.mode = this.mode),
        this.dispatchEvent(yo);
    }
  }
  pointerMove(e) {
    const t = this.axis,
      n = this.mode,
      i = this.object;
    let s = this.space;
    if (
      (n === 'scale'
        ? (s = 'local')
        : (t === 'E' || t === 'XYZE' || t === 'XYZ') && (s = 'world'),
      i === void 0 || t === null || this.dragging === !1 || e.button !== -1)
    )
      return;
    Tn.setFromCamera(e, this.camera);
    const a = vs(this._plane, Tn, !0);
    if (a) {
      if (
        (this.pointEnd.copy(a.point).sub(this.worldPositionStart),
        n === 'translate')
      )
        this._offset.copy(this.pointEnd).sub(this.pointStart),
          s === 'local' &&
            t !== 'XYZ' &&
            this._offset.applyQuaternion(this._worldQuaternionInv),
          t.indexOf('X') === -1 && (this._offset.x = 0),
          t.indexOf('Y') === -1 && (this._offset.y = 0),
          t.indexOf('Z') === -1 && (this._offset.z = 0),
          s === 'local' && t !== 'XYZ'
            ? this._offset
                .applyQuaternion(this._quaternionStart)
                .divide(this._parentScale)
            : this._offset
                .applyQuaternion(this._parentQuaternionInv)
                .divide(this._parentScale),
          i.position.copy(this._offset).add(this._positionStart),
          this.translationSnap &&
            (s === 'local' &&
              (i.position.applyQuaternion(
                qe.copy(this._quaternionStart).invert(),
              ),
              t.search('X') !== -1 &&
                (i.position.x =
                  Math.round(i.position.x / this.translationSnap) *
                  this.translationSnap),
              t.search('Y') !== -1 &&
                (i.position.y =
                  Math.round(i.position.y / this.translationSnap) *
                  this.translationSnap),
              t.search('Z') !== -1 &&
                (i.position.z =
                  Math.round(i.position.z / this.translationSnap) *
                  this.translationSnap),
              i.position.applyQuaternion(this._quaternionStart)),
            s === 'world' &&
              (i.parent &&
                i.position.add(Mt.setFromMatrixPosition(i.parent.matrixWorld)),
              t.search('X') !== -1 &&
                (i.position.x =
                  Math.round(i.position.x / this.translationSnap) *
                  this.translationSnap),
              t.search('Y') !== -1 &&
                (i.position.y =
                  Math.round(i.position.y / this.translationSnap) *
                  this.translationSnap),
              t.search('Z') !== -1 &&
                (i.position.z =
                  Math.round(i.position.z / this.translationSnap) *
                  this.translationSnap),
              i.parent &&
                i.position.sub(
                  Mt.setFromMatrixPosition(i.parent.matrixWorld),
                )));
      else if (n === 'scale') {
        if (t.search('XYZ') !== -1) {
          let o = this.pointEnd.length() / this.pointStart.length();
          this.pointEnd.dot(this.pointStart) < 0 && (o *= -1), hn.set(o, o, o);
        } else
          Mt.copy(this.pointStart),
            hn.copy(this.pointEnd),
            Mt.applyQuaternion(this._worldQuaternionInv),
            hn.applyQuaternion(this._worldQuaternionInv),
            hn.divide(Mt),
            t.search('X') === -1 && (hn.x = 1),
            t.search('Y') === -1 && (hn.y = 1),
            t.search('Z') === -1 && (hn.z = 1);
        i.scale.copy(this._scaleStart).multiply(hn),
          this.scaleSnap &&
            (t.search('X') !== -1 &&
              (i.scale.x =
                Math.round(i.scale.x / this.scaleSnap) * this.scaleSnap ||
                this.scaleSnap),
            t.search('Y') !== -1 &&
              (i.scale.y =
                Math.round(i.scale.y / this.scaleSnap) * this.scaleSnap ||
                this.scaleSnap),
            t.search('Z') !== -1 &&
              (i.scale.z =
                Math.round(i.scale.z / this.scaleSnap) * this.scaleSnap ||
                this.scaleSnap));
      } else if (n === 'rotate') {
        this._offset.copy(this.pointEnd).sub(this.pointStart);
        const o =
          20 /
          this.worldPosition.distanceTo(
            Mt.setFromMatrixPosition(this.camera.matrixWorld),
          );
        t === 'E'
          ? (this.rotationAxis.copy(this.eye),
            (this.rotationAngle = this.pointEnd.angleTo(this.pointStart)),
            this._startNorm.copy(this.pointStart).normalize(),
            this._endNorm.copy(this.pointEnd).normalize(),
            (this.rotationAngle *=
              this._endNorm.cross(this._startNorm).dot(this.eye) < 0 ? 1 : -1))
          : t === 'XYZE'
          ? (this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),
            (this.rotationAngle =
              this._offset.dot(Mt.copy(this.rotationAxis).cross(this.eye)) * o))
          : (t === 'X' || t === 'Y' || t === 'Z') &&
            (this.rotationAxis.copy(vo[t]),
            Mt.copy(vo[t]),
            s === 'local' && Mt.applyQuaternion(this.worldQuaternion),
            (this.rotationAngle =
              this._offset.dot(Mt.cross(this.eye).normalize()) * o)),
          this.rotationSnap &&
            (this.rotationAngle =
              Math.round(this.rotationAngle / this.rotationSnap) *
              this.rotationSnap),
          s === 'local' && t !== 'E' && t !== 'XYZE'
            ? (i.quaternion.copy(this._quaternionStart),
              i.quaternion
                .multiply(
                  qe.setFromAxisAngle(this.rotationAxis, this.rotationAngle),
                )
                .normalize())
            : (this.rotationAxis.applyQuaternion(this._parentQuaternionInv),
              i.quaternion.copy(
                qe.setFromAxisAngle(this.rotationAxis, this.rotationAngle),
              ),
              i.quaternion.multiply(this._quaternionStart).normalize());
      }
      this.dispatchEvent(xs), this.dispatchEvent(Mo);
    }
  }
  pointerUp(e) {
    e.button === 0 &&
      (this.dragging &&
        this.axis !== null &&
        ((bo.mode = this.mode), this.dispatchEvent(bo)),
      (this.dragging = !1),
      (this.axis = null));
  }
  dispose() {
    this.domElement.removeEventListener('pointerdown', this._onPointerDown),
      this.domElement.removeEventListener('pointermove', this._onPointerHover),
      this.domElement.removeEventListener('pointermove', this._onPointerMove),
      this.domElement.removeEventListener('pointerup', this._onPointerUp),
      this.traverse(function (e) {
        e.geometry && e.geometry.dispose(), e.material && e.material.dispose();
      });
  }
  attach(e) {
    return (this.object = e), (this.visible = !0), this;
  }
  detach() {
    return (
      (this.object = void 0), (this.visible = !1), (this.axis = null), this
    );
  }
  reset() {
    this.enabled &&
      this.dragging &&
      (this.object.position.copy(this._positionStart),
      this.object.quaternion.copy(this._quaternionStart),
      this.object.scale.copy(this._scaleStart),
      this.dispatchEvent(xs),
      this.dispatchEvent(Mo),
      this.pointStart.copy(this.pointEnd));
  }
  getRaycaster() {
    return Tn;
  }
  getMode() {
    return this.mode;
  }
  setMode(e) {
    this.mode = e;
  }
  setTranslationSnap(e) {
    this.translationSnap = e;
  }
  setRotationSnap(e) {
    this.rotationSnap = e;
  }
  setScaleSnap(e) {
    this.scaleSnap = e;
  }
  setSize(e) {
    this.size = e;
  }
  setSpace(e) {
    this.space = e;
  }
}
function Ip(r) {
  if (this.domElement.ownerDocument.pointerLockElement)
    return { x: 0, y: 0, button: r.button };
  {
    const e = this.domElement.getBoundingClientRect();
    return {
      x: ((r.clientX - e.left) / e.width) * 2 - 1,
      y: (-(r.clientY - e.top) / e.height) * 2 + 1,
      button: r.button,
    };
  }
}
function Op(r) {
  if (this.enabled)
    switch (r.pointerType) {
      case 'mouse':
      case 'pen':
        this.pointerHover(this._getPointer(r));
        break;
    }
}
function Fp(r) {
  this.enabled &&
    (document.pointerLockElement ||
      this.domElement.setPointerCapture(r.pointerId),
    this.domElement.addEventListener('pointermove', this._onPointerMove),
    this.pointerHover(this._getPointer(r)),
    this.pointerDown(this._getPointer(r)));
}
function Np(r) {
  this.enabled && this.pointerMove(this._getPointer(r));
}
function zp(r) {
  this.enabled &&
    (this.domElement.releasePointerCapture(r.pointerId),
    this.domElement.removeEventListener('pointermove', this._onPointerMove),
    this.pointerUp(this._getPointer(r)));
}
function vs(r, e, t) {
  const n = e.intersectObject(r, !0);
  for (let i = 0; i < n.length; i++) if (n[i].object.visible || t) return n[i];
  return !1;
}
const _r = new xi(),
  Ge = new L(0, 1, 0),
  So = new L(0, 0, 0),
  wo = new Qe(),
  xr = new ut(),
  wr = new ut(),
  qt = new L(),
  Eo = new Qe(),
  Fi = new L(1, 0, 0),
  Ln = new L(0, 1, 0),
  Ni = new L(0, 0, 1),
  vr = new L(),
  Li = new L(),
  Pi = new L();
class Up extends lt {
  constructor() {
    super(),
      (this.isTransformControlsGizmo = !0),
      (this.type = 'TransformControlsGizmo');
    const e = new Lr({
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        toneMapped: !1,
        transparent: !0,
      }),
      t = new Gs({
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        toneMapped: !1,
        transparent: !0,
      }),
      n = e.clone();
    n.opacity = 0.15;
    const i = t.clone();
    i.opacity = 0.5;
    const s = e.clone();
    s.color.setHex(16711680);
    const a = e.clone();
    a.color.setHex(65280);
    const o = e.clone();
    o.color.setHex(255);
    const l = e.clone();
    l.color.setHex(16711680), (l.opacity = 0.5);
    const c = e.clone();
    c.color.setHex(65280), (c.opacity = 0.5);
    const u = e.clone();
    u.color.setHex(255), (u.opacity = 0.5);
    const h = e.clone();
    h.opacity = 0.25;
    const d = e.clone();
    d.color.setHex(16776960),
      (d.opacity = 0.25),
      e.clone().color.setHex(16776960);
    const _ = e.clone();
    _.color.setHex(7895160);
    const p = new pt(0, 0.04, 0.1, 12);
    p.translate(0, 0.05, 0);
    const f = new Ke(0.08, 0.08, 0.08);
    f.translate(0, 0.04, 0);
    const x = new yt();
    x.setAttribute('position', new We([0, 0, 0, 1, 0, 0], 3));
    const b = new pt(0.0075, 0.0075, 0.5, 3);
    b.translate(0, 0.25, 0);
    function v(B, Q) {
      const K = new fn(B, 0.0075, 3, 64, Q * Math.PI * 2);
      return K.rotateY(Math.PI / 2), K.rotateX(Math.PI / 2), K;
    }
    function S() {
      const B = new yt();
      return B.setAttribute('position', new We([0, 0, 0, 1, 1, 1], 3)), B;
    }
    const y = {
        X: [
          [new ce(p, s), [0.5, 0, 0], [0, 0, -Math.PI / 2]],
          [new ce(p, s), [-0.5, 0, 0], [0, 0, Math.PI / 2]],
          [new ce(b, s), [0, 0, 0], [0, 0, -Math.PI / 2]],
        ],
        Y: [
          [new ce(p, a), [0, 0.5, 0]],
          [new ce(p, a), [0, -0.5, 0], [Math.PI, 0, 0]],
          [new ce(b, a)],
        ],
        Z: [
          [new ce(p, o), [0, 0, 0.5], [Math.PI / 2, 0, 0]],
          [new ce(p, o), [0, 0, -0.5], [-Math.PI / 2, 0, 0]],
          [new ce(b, o), null, [Math.PI / 2, 0, 0]],
        ],
        XYZ: [[new ce(new ci(0.1, 0), h.clone()), [0, 0, 0]]],
        XY: [[new ce(new Ke(0.15, 0.15, 0.01), u.clone()), [0.15, 0.15, 0]]],
        YZ: [
          [
            new ce(new Ke(0.15, 0.15, 0.01), l.clone()),
            [0, 0.15, 0.15],
            [0, Math.PI / 2, 0],
          ],
        ],
        XZ: [
          [
            new ce(new Ke(0.15, 0.15, 0.01), c.clone()),
            [0.15, 0, 0.15],
            [-Math.PI / 2, 0, 0],
          ],
        ],
      },
      C = {
        X: [
          [
            new ce(new pt(0.2, 0, 0.6, 4), n),
            [0.3, 0, 0],
            [0, 0, -Math.PI / 2],
          ],
          [
            new ce(new pt(0.2, 0, 0.6, 4), n),
            [-0.3, 0, 0],
            [0, 0, Math.PI / 2],
          ],
        ],
        Y: [
          [new ce(new pt(0.2, 0, 0.6, 4), n), [0, 0.3, 0]],
          [new ce(new pt(0.2, 0, 0.6, 4), n), [0, -0.3, 0], [0, 0, Math.PI]],
        ],
        Z: [
          [new ce(new pt(0.2, 0, 0.6, 4), n), [0, 0, 0.3], [Math.PI / 2, 0, 0]],
          [
            new ce(new pt(0.2, 0, 0.6, 4), n),
            [0, 0, -0.3],
            [-Math.PI / 2, 0, 0],
          ],
        ],
        XYZ: [[new ce(new ci(0.2, 0), n)]],
        XY: [[new ce(new Ke(0.2, 0.2, 0.01), n), [0.15, 0.15, 0]]],
        YZ: [
          [
            new ce(new Ke(0.2, 0.2, 0.01), n),
            [0, 0.15, 0.15],
            [0, Math.PI / 2, 0],
          ],
        ],
        XZ: [
          [
            new ce(new Ke(0.2, 0.2, 0.01), n),
            [0.15, 0, 0.15],
            [-Math.PI / 2, 0, 0],
          ],
        ],
      },
      I = {
        START: [[new ce(new ci(0.01, 2), i), null, null, null, 'helper']],
        END: [[new ce(new ci(0.01, 2), i), null, null, null, 'helper']],
        DELTA: [[new rn(S(), i), null, null, null, 'helper']],
        X: [[new rn(x, i.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], 'helper']],
        Y: [
          [
            new rn(x, i.clone()),
            [0, -1e3, 0],
            [0, 0, Math.PI / 2],
            [1e6, 1, 1],
            'helper',
          ],
        ],
        Z: [
          [
            new rn(x, i.clone()),
            [0, 0, -1e3],
            [0, -Math.PI / 2, 0],
            [1e6, 1, 1],
            'helper',
          ],
        ],
      },
      g = {
        XYZE: [[new ce(v(0.5, 1), _), null, [0, Math.PI / 2, 0]]],
        X: [[new ce(v(0.5, 0.5), s)]],
        Y: [[new ce(v(0.5, 0.5), a), null, [0, 0, -Math.PI / 2]]],
        Z: [[new ce(v(0.5, 0.5), o), null, [0, Math.PI / 2, 0]]],
        E: [[new ce(v(0.75, 1), d), null, [0, Math.PI / 2, 0]]],
      },
      T = {
        AXIS: [
          [new rn(x, i.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], 'helper'],
        ],
      },
      P = {
        XYZE: [[new ce(new Dr(0.25, 10, 8), n)]],
        X: [
          [
            new ce(new fn(0.5, 0.1, 4, 24), n),
            [0, 0, 0],
            [0, -Math.PI / 2, -Math.PI / 2],
          ],
        ],
        Y: [
          [new ce(new fn(0.5, 0.1, 4, 24), n), [0, 0, 0], [Math.PI / 2, 0, 0]],
        ],
        Z: [
          [new ce(new fn(0.5, 0.1, 4, 24), n), [0, 0, 0], [0, 0, -Math.PI / 2]],
        ],
        E: [[new ce(new fn(0.75, 0.1, 2, 24), n)]],
      },
      G = {
        X: [
          [new ce(f, s), [0.5, 0, 0], [0, 0, -Math.PI / 2]],
          [new ce(b, s), [0, 0, 0], [0, 0, -Math.PI / 2]],
          [new ce(f, s), [-0.5, 0, 0], [0, 0, Math.PI / 2]],
        ],
        Y: [
          [new ce(f, a), [0, 0.5, 0]],
          [new ce(b, a)],
          [new ce(f, a), [0, -0.5, 0], [0, 0, Math.PI]],
        ],
        Z: [
          [new ce(f, o), [0, 0, 0.5], [Math.PI / 2, 0, 0]],
          [new ce(b, o), [0, 0, 0], [Math.PI / 2, 0, 0]],
          [new ce(f, o), [0, 0, -0.5], [-Math.PI / 2, 0, 0]],
        ],
        XY: [[new ce(new Ke(0.15, 0.15, 0.01), u), [0.15, 0.15, 0]]],
        YZ: [
          [
            new ce(new Ke(0.15, 0.15, 0.01), l),
            [0, 0.15, 0.15],
            [0, Math.PI / 2, 0],
          ],
        ],
        XZ: [
          [
            new ce(new Ke(0.15, 0.15, 0.01), c),
            [0.15, 0, 0.15],
            [-Math.PI / 2, 0, 0],
          ],
        ],
        XYZ: [[new ce(new Ke(0.1, 0.1, 0.1), h.clone())]],
      },
      $ = {
        X: [
          [
            new ce(new pt(0.2, 0, 0.6, 4), n),
            [0.3, 0, 0],
            [0, 0, -Math.PI / 2],
          ],
          [
            new ce(new pt(0.2, 0, 0.6, 4), n),
            [-0.3, 0, 0],
            [0, 0, Math.PI / 2],
          ],
        ],
        Y: [
          [new ce(new pt(0.2, 0, 0.6, 4), n), [0, 0.3, 0]],
          [new ce(new pt(0.2, 0, 0.6, 4), n), [0, -0.3, 0], [0, 0, Math.PI]],
        ],
        Z: [
          [new ce(new pt(0.2, 0, 0.6, 4), n), [0, 0, 0.3], [Math.PI / 2, 0, 0]],
          [
            new ce(new pt(0.2, 0, 0.6, 4), n),
            [0, 0, -0.3],
            [-Math.PI / 2, 0, 0],
          ],
        ],
        XY: [[new ce(new Ke(0.2, 0.2, 0.01), n), [0.15, 0.15, 0]]],
        YZ: [
          [
            new ce(new Ke(0.2, 0.2, 0.01), n),
            [0, 0.15, 0.15],
            [0, Math.PI / 2, 0],
          ],
        ],
        XZ: [
          [
            new ce(new Ke(0.2, 0.2, 0.01), n),
            [0.15, 0, 0.15],
            [-Math.PI / 2, 0, 0],
          ],
        ],
        XYZ: [[new ce(new Ke(0.2, 0.2, 0.2), n), [0, 0, 0]]],
      },
      O = {
        X: [[new rn(x, i.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], 'helper']],
        Y: [
          [
            new rn(x, i.clone()),
            [0, -1e3, 0],
            [0, 0, Math.PI / 2],
            [1e6, 1, 1],
            'helper',
          ],
        ],
        Z: [
          [
            new rn(x, i.clone()),
            [0, 0, -1e3],
            [0, -Math.PI / 2, 0],
            [1e6, 1, 1],
            'helper',
          ],
        ],
      };
    function R(B) {
      const Q = new lt();
      for (const K in B)
        for (let q = B[K].length; q--; ) {
          const J = B[K][q][0].clone(),
            ee = B[K][q][1],
            k = B[K][q][2],
            H = B[K][q][3],
            te = B[K][q][4];
          (J.name = K),
            (J.tag = te),
            ee && J.position.set(ee[0], ee[1], ee[2]),
            k && J.rotation.set(k[0], k[1], k[2]),
            H && J.scale.set(H[0], H[1], H[2]),
            J.updateMatrix();
          const re = J.geometry.clone();
          re.applyMatrix4(J.matrix),
            (J.geometry = re),
            (J.renderOrder = 1 / 0),
            J.position.set(0, 0, 0),
            J.rotation.set(0, 0, 0),
            J.scale.set(1, 1, 1),
            Q.add(J);
        }
      return Q;
    }
    (this.gizmo = {}),
      (this.picker = {}),
      (this.helper = {}),
      this.add((this.gizmo.translate = R(y))),
      this.add((this.gizmo.rotate = R(g))),
      this.add((this.gizmo.scale = R(G))),
      this.add((this.picker.translate = R(C))),
      this.add((this.picker.rotate = R(P))),
      this.add((this.picker.scale = R($))),
      this.add((this.helper.translate = R(I))),
      this.add((this.helper.rotate = R(T))),
      this.add((this.helper.scale = R(O))),
      (this.picker.translate.visible = !1),
      (this.picker.rotate.visible = !1),
      (this.picker.scale.visible = !1);
  }
  updateMatrixWorld(e) {
    const n =
      (this.mode === 'scale' ? 'local' : this.space) === 'local'
        ? this.worldQuaternion
        : wr;
    (this.gizmo.translate.visible = this.mode === 'translate'),
      (this.gizmo.rotate.visible = this.mode === 'rotate'),
      (this.gizmo.scale.visible = this.mode === 'scale'),
      (this.helper.translate.visible = this.mode === 'translate'),
      (this.helper.rotate.visible = this.mode === 'rotate'),
      (this.helper.scale.visible = this.mode === 'scale');
    let i = [];
    (i = i.concat(this.picker[this.mode].children)),
      (i = i.concat(this.gizmo[this.mode].children)),
      (i = i.concat(this.helper[this.mode].children));
    for (let s = 0; s < i.length; s++) {
      const a = i[s];
      (a.visible = !0),
        a.rotation.set(0, 0, 0),
        a.position.copy(this.worldPosition);
      let o;
      if (
        (this.camera.isOrthographicCamera
          ? (o = (this.camera.top - this.camera.bottom) / this.camera.zoom)
          : (o =
              this.worldPosition.distanceTo(this.cameraPosition) *
              Math.min(
                (1.9 * Math.tan((Math.PI * this.camera.fov) / 360)) /
                  this.camera.zoom,
                7,
              )),
        a.scale.set(1, 1, 1).multiplyScalar((o * this.size) / 4),
        a.tag === 'helper')
      ) {
        (a.visible = !1),
          a.name === 'AXIS'
            ? ((a.visible = !!this.axis),
              this.axis === 'X' &&
                (qe.setFromEuler(_r.set(0, 0, 0)),
                a.quaternion.copy(n).multiply(qe),
                Math.abs(Ge.copy(Fi).applyQuaternion(n).dot(this.eye)) > 0.9 &&
                  (a.visible = !1)),
              this.axis === 'Y' &&
                (qe.setFromEuler(_r.set(0, 0, Math.PI / 2)),
                a.quaternion.copy(n).multiply(qe),
                Math.abs(Ge.copy(Ln).applyQuaternion(n).dot(this.eye)) > 0.9 &&
                  (a.visible = !1)),
              this.axis === 'Z' &&
                (qe.setFromEuler(_r.set(0, Math.PI / 2, 0)),
                a.quaternion.copy(n).multiply(qe),
                Math.abs(Ge.copy(Ni).applyQuaternion(n).dot(this.eye)) > 0.9 &&
                  (a.visible = !1)),
              this.axis === 'XYZE' &&
                (qe.setFromEuler(_r.set(0, Math.PI / 2, 0)),
                Ge.copy(this.rotationAxis),
                a.quaternion.setFromRotationMatrix(wo.lookAt(So, Ge, Ln)),
                a.quaternion.multiply(qe),
                (a.visible = this.dragging)),
              this.axis === 'E' && (a.visible = !1))
            : a.name === 'START'
            ? (a.position.copy(this.worldPositionStart),
              (a.visible = this.dragging))
            : a.name === 'END'
            ? (a.position.copy(this.worldPosition), (a.visible = this.dragging))
            : a.name === 'DELTA'
            ? (a.position.copy(this.worldPositionStart),
              a.quaternion.copy(this.worldQuaternionStart),
              Mt.set(1e-10, 1e-10, 1e-10)
                .add(this.worldPositionStart)
                .sub(this.worldPosition)
                .multiplyScalar(-1),
              Mt.applyQuaternion(this.worldQuaternionStart.clone().invert()),
              a.scale.copy(Mt),
              (a.visible = this.dragging))
            : (a.quaternion.copy(n),
              this.dragging
                ? a.position.copy(this.worldPositionStart)
                : a.position.copy(this.worldPosition),
              this.axis && (a.visible = this.axis.search(a.name) !== -1));
        continue;
      }
      a.quaternion.copy(n),
        this.mode === 'translate' || this.mode === 'scale'
          ? (a.name === 'X' &&
              Math.abs(Ge.copy(Fi).applyQuaternion(n).dot(this.eye)) > 0.99 &&
              (a.scale.set(1e-10, 1e-10, 1e-10), (a.visible = !1)),
            a.name === 'Y' &&
              Math.abs(Ge.copy(Ln).applyQuaternion(n).dot(this.eye)) > 0.99 &&
              (a.scale.set(1e-10, 1e-10, 1e-10), (a.visible = !1)),
            a.name === 'Z' &&
              Math.abs(Ge.copy(Ni).applyQuaternion(n).dot(this.eye)) > 0.99 &&
              (a.scale.set(1e-10, 1e-10, 1e-10), (a.visible = !1)),
            a.name === 'XY' &&
              Math.abs(Ge.copy(Ni).applyQuaternion(n).dot(this.eye)) < 0.2 &&
              (a.scale.set(1e-10, 1e-10, 1e-10), (a.visible = !1)),
            a.name === 'YZ' &&
              Math.abs(Ge.copy(Fi).applyQuaternion(n).dot(this.eye)) < 0.2 &&
              (a.scale.set(1e-10, 1e-10, 1e-10), (a.visible = !1)),
            a.name === 'XZ' &&
              Math.abs(Ge.copy(Ln).applyQuaternion(n).dot(this.eye)) < 0.2 &&
              (a.scale.set(1e-10, 1e-10, 1e-10), (a.visible = !1)))
          : this.mode === 'rotate' &&
            (xr.copy(n),
            Ge.copy(this.eye).applyQuaternion(qe.copy(n).invert()),
            a.name.search('E') !== -1 &&
              a.quaternion.setFromRotationMatrix(wo.lookAt(this.eye, So, Ln)),
            a.name === 'X' &&
              (qe.setFromAxisAngle(Fi, Math.atan2(-Ge.y, Ge.z)),
              qe.multiplyQuaternions(xr, qe),
              a.quaternion.copy(qe)),
            a.name === 'Y' &&
              (qe.setFromAxisAngle(Ln, Math.atan2(Ge.x, Ge.z)),
              qe.multiplyQuaternions(xr, qe),
              a.quaternion.copy(qe)),
            a.name === 'Z' &&
              (qe.setFromAxisAngle(Ni, Math.atan2(Ge.y, Ge.x)),
              qe.multiplyQuaternions(xr, qe),
              a.quaternion.copy(qe))),
        (a.visible = a.visible && (a.name.indexOf('X') === -1 || this.showX)),
        (a.visible = a.visible && (a.name.indexOf('Y') === -1 || this.showY)),
        (a.visible = a.visible && (a.name.indexOf('Z') === -1 || this.showZ)),
        (a.visible =
          a.visible &&
          (a.name.indexOf('E') === -1 ||
            (this.showX && this.showY && this.showZ))),
        (a.material._color = a.material._color || a.material.color.clone()),
        (a.material._opacity = a.material._opacity || a.material.opacity),
        a.material.color.copy(a.material._color),
        (a.material.opacity = a.material._opacity),
        this.enabled &&
          this.axis &&
          (a.name === this.axis ||
            this.axis.split('').some(function (l) {
              return a.name === l;
            })) &&
          (a.material.color.setHex(16776960), (a.material.opacity = 1));
    }
    super.updateMatrixWorld(e);
  }
}
class Bp extends ce {
  constructor() {
    super(
      new ji(1e5, 1e5, 2, 2),
      new Lr({
        visible: !1,
        wireframe: !0,
        side: _i,
        transparent: !0,
        opacity: 0.1,
        toneMapped: !1,
      }),
    ),
      (this.isTransformControlsPlane = !0),
      (this.type = 'TransformControlsPlane');
  }
  updateMatrixWorld(e) {
    let t = this.space;
    switch (
      (this.position.copy(this.worldPosition),
      this.mode === 'scale' && (t = 'local'),
      vr.copy(Fi).applyQuaternion(t === 'local' ? this.worldQuaternion : wr),
      Li.copy(Ln).applyQuaternion(t === 'local' ? this.worldQuaternion : wr),
      Pi.copy(Ni).applyQuaternion(t === 'local' ? this.worldQuaternion : wr),
      Ge.copy(Li),
      this.mode)
    ) {
      case 'translate':
      case 'scale':
        switch (this.axis) {
          case 'X':
            Ge.copy(this.eye).cross(vr), qt.copy(vr).cross(Ge);
            break;
          case 'Y':
            Ge.copy(this.eye).cross(Li), qt.copy(Li).cross(Ge);
            break;
          case 'Z':
            Ge.copy(this.eye).cross(Pi), qt.copy(Pi).cross(Ge);
            break;
          case 'XY':
            qt.copy(Pi);
            break;
          case 'YZ':
            qt.copy(vr);
            break;
          case 'XZ':
            Ge.copy(Pi), qt.copy(Li);
            break;
          case 'XYZ':
          case 'E':
            qt.set(0, 0, 0);
            break;
        }
        break;
      case 'rotate':
      default:
        qt.set(0, 0, 0);
    }
    qt.length() === 0
      ? this.quaternion.copy(this.cameraQuaternion)
      : (Eo.lookAt(Mt.set(0, 0, 0), qt, Ge),
        this.quaternion.setFromRotationMatrix(Eo)),
      super.updateMatrixWorld(e);
  }
}
function kp(r) {
  if (r && !(typeof window > 'u')) {
    var e = document.createElement('style');
    return (
      e.setAttribute('type', 'text/css'),
      (e.innerHTML = r),
      document.head.appendChild(e),
      r
    );
  }
}
function ui(r, e) {
  var t = r.__state.conversionName.toString(),
    n = Math.round(r.r),
    i = Math.round(r.g),
    s = Math.round(r.b),
    a = r.a,
    o = Math.round(r.h),
    l = r.s.toFixed(1),
    c = r.v.toFixed(1);
  if (e || t === 'THREE_CHAR_HEX' || t === 'SIX_CHAR_HEX') {
    for (var u = r.hex.toString(16); u.length < 6; ) u = '0' + u;
    return '#' + u;
  } else {
    if (t === 'CSS_RGB') return 'rgb(' + n + ',' + i + ',' + s + ')';
    if (t === 'CSS_RGBA')
      return 'rgba(' + n + ',' + i + ',' + s + ',' + a + ')';
    if (t === 'HEX') return '0x' + r.hex.toString(16);
    if (t === 'RGB_ARRAY') return '[' + n + ',' + i + ',' + s + ']';
    if (t === 'RGBA_ARRAY') return '[' + n + ',' + i + ',' + s + ',' + a + ']';
    if (t === 'RGB_OBJ') return '{r:' + n + ',g:' + i + ',b:' + s + '}';
    if (t === 'RGBA_OBJ')
      return '{r:' + n + ',g:' + i + ',b:' + s + ',a:' + a + '}';
    if (t === 'HSV_OBJ') return '{h:' + o + ',s:' + l + ',v:' + c + '}';
    if (t === 'HSVA_OBJ')
      return '{h:' + o + ',s:' + l + ',v:' + c + ',a:' + a + '}';
  }
  return 'unknown format';
}
var To = Array.prototype.forEach,
  Di = Array.prototype.slice,
  Z = {
    BREAK: {},
    extend: function (e) {
      return (
        this.each(
          Di.call(arguments, 1),
          function (t) {
            var n = this.isObject(t) ? Object.keys(t) : [];
            n.forEach(
              function (i) {
                this.isUndefined(t[i]) || (e[i] = t[i]);
              }.bind(this),
            );
          },
          this,
        ),
        e
      );
    },
    defaults: function (e) {
      return (
        this.each(
          Di.call(arguments, 1),
          function (t) {
            var n = this.isObject(t) ? Object.keys(t) : [];
            n.forEach(
              function (i) {
                this.isUndefined(e[i]) && (e[i] = t[i]);
              }.bind(this),
            );
          },
          this,
        ),
        e
      );
    },
    compose: function () {
      var e = Di.call(arguments);
      return function () {
        for (var t = Di.call(arguments), n = e.length - 1; n >= 0; n--)
          t = [e[n].apply(this, t)];
        return t[0];
      };
    },
    each: function (e, t, n) {
      if (e) {
        if (To && e.forEach && e.forEach === To) e.forEach(t, n);
        else if (e.length === e.length + 0) {
          var i = void 0,
            s = void 0;
          for (i = 0, s = e.length; i < s; i++)
            if (i in e && t.call(n, e[i], i) === this.BREAK) return;
        } else for (var a in e) if (t.call(n, e[a], a) === this.BREAK) return;
      }
    },
    defer: function (e) {
      setTimeout(e, 0);
    },
    debounce: function (e, t, n) {
      var i = void 0;
      return function () {
        var s = this,
          a = arguments;
        function o() {
          (i = null), n || e.apply(s, a);
        }
        var l = n || !i;
        clearTimeout(i), (i = setTimeout(o, t)), l && e.apply(s, a);
      };
    },
    toArray: function (e) {
      return e.toArray ? e.toArray() : Di.call(e);
    },
    isUndefined: function (e) {
      return e === void 0;
    },
    isNull: function (e) {
      return e === null;
    },
    isNaN: (function (r) {
      function e(t) {
        return r.apply(this, arguments);
      }
      return (
        (e.toString = function () {
          return r.toString();
        }),
        e
      );
    })(function (r) {
      return isNaN(r);
    }),
    isArray:
      Array.isArray ||
      function (r) {
        return r.constructor === Array;
      },
    isObject: function (e) {
      return e === Object(e);
    },
    isNumber: function (e) {
      return e === e + 0;
    },
    isString: function (e) {
      return e === e + '';
    },
    isBoolean: function (e) {
      return e === !1 || e === !0;
    },
    isFunction: function (e) {
      return e instanceof Function;
    },
  },
  Gp = [
    {
      litmus: Z.isString,
      conversions: {
        THREE_CHAR_HEX: {
          read: function (e) {
            var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
            return t === null
              ? !1
              : {
                  space: 'HEX',
                  hex: parseInt(
                    '0x' +
                      t[1].toString() +
                      t[1].toString() +
                      t[2].toString() +
                      t[2].toString() +
                      t[3].toString() +
                      t[3].toString(),
                    0,
                  ),
                };
          },
          write: ui,
        },
        SIX_CHAR_HEX: {
          read: function (e) {
            var t = e.match(/^#([A-F0-9]{6})$/i);
            return t === null
              ? !1
              : { space: 'HEX', hex: parseInt('0x' + t[1].toString(), 0) };
          },
          write: ui,
        },
        CSS_RGB: {
          read: function (e) {
            var t = e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
            return t === null
              ? !1
              : {
                  space: 'RGB',
                  r: parseFloat(t[1]),
                  g: parseFloat(t[2]),
                  b: parseFloat(t[3]),
                };
          },
          write: ui,
        },
        CSS_RGBA: {
          read: function (e) {
            var t = e.match(
              /^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/,
            );
            return t === null
              ? !1
              : {
                  space: 'RGB',
                  r: parseFloat(t[1]),
                  g: parseFloat(t[2]),
                  b: parseFloat(t[3]),
                  a: parseFloat(t[4]),
                };
          },
          write: ui,
        },
      },
    },
    {
      litmus: Z.isNumber,
      conversions: {
        HEX: {
          read: function (e) {
            return { space: 'HEX', hex: e, conversionName: 'HEX' };
          },
          write: function (e) {
            return e.hex;
          },
        },
      },
    },
    {
      litmus: Z.isArray,
      conversions: {
        RGB_ARRAY: {
          read: function (e) {
            return e.length !== 3
              ? !1
              : { space: 'RGB', r: e[0], g: e[1], b: e[2] };
          },
          write: function (e) {
            return [e.r, e.g, e.b];
          },
        },
        RGBA_ARRAY: {
          read: function (e) {
            return e.length !== 4
              ? !1
              : { space: 'RGB', r: e[0], g: e[1], b: e[2], a: e[3] };
          },
          write: function (e) {
            return [e.r, e.g, e.b, e.a];
          },
        },
      },
    },
    {
      litmus: Z.isObject,
      conversions: {
        RGBA_OBJ: {
          read: function (e) {
            return Z.isNumber(e.r) &&
              Z.isNumber(e.g) &&
              Z.isNumber(e.b) &&
              Z.isNumber(e.a)
              ? { space: 'RGB', r: e.r, g: e.g, b: e.b, a: e.a }
              : !1;
          },
          write: function (e) {
            return { r: e.r, g: e.g, b: e.b, a: e.a };
          },
        },
        RGB_OBJ: {
          read: function (e) {
            return Z.isNumber(e.r) && Z.isNumber(e.g) && Z.isNumber(e.b)
              ? { space: 'RGB', r: e.r, g: e.g, b: e.b }
              : !1;
          },
          write: function (e) {
            return { r: e.r, g: e.g, b: e.b };
          },
        },
        HSVA_OBJ: {
          read: function (e) {
            return Z.isNumber(e.h) &&
              Z.isNumber(e.s) &&
              Z.isNumber(e.v) &&
              Z.isNumber(e.a)
              ? { space: 'HSV', h: e.h, s: e.s, v: e.v, a: e.a }
              : !1;
          },
          write: function (e) {
            return { h: e.h, s: e.s, v: e.v, a: e.a };
          },
        },
        HSV_OBJ: {
          read: function (e) {
            return Z.isNumber(e.h) && Z.isNumber(e.s) && Z.isNumber(e.v)
              ? { space: 'HSV', h: e.h, s: e.s, v: e.v }
              : !1;
          },
          write: function (e) {
            return { h: e.h, s: e.s, v: e.v };
          },
        },
      },
    },
  ],
  Ri = void 0,
  yr = void 0,
  Ps = function () {
    yr = !1;
    var e = arguments.length > 1 ? Z.toArray(arguments) : arguments[0];
    return (
      Z.each(Gp, function (t) {
        if (t.litmus(e))
          return (
            Z.each(t.conversions, function (n, i) {
              if (((Ri = n.read(e)), yr === !1 && Ri !== !1))
                return (
                  (yr = Ri),
                  (Ri.conversionName = i),
                  (Ri.conversion = n),
                  Z.BREAK
                );
            }),
            Z.BREAK
          );
      }),
      yr
    );
  },
  Ao = void 0,
  Er = {
    hsv_to_rgb: function (e, t, n) {
      var i = Math.floor(e / 60) % 6,
        s = e / 60 - Math.floor(e / 60),
        a = n * (1 - t),
        o = n * (1 - s * t),
        l = n * (1 - (1 - s) * t),
        c = [
          [n, l, a],
          [o, n, a],
          [a, n, l],
          [a, o, n],
          [l, a, n],
          [n, a, o],
        ][i];
      return { r: c[0] * 255, g: c[1] * 255, b: c[2] * 255 };
    },
    rgb_to_hsv: function (e, t, n) {
      var i = Math.min(e, t, n),
        s = Math.max(e, t, n),
        a = s - i,
        o = void 0,
        l = void 0;
      if (s !== 0) l = a / s;
      else return { h: NaN, s: 0, v: 0 };
      return (
        e === s
          ? (o = (t - n) / a)
          : t === s
          ? (o = 2 + (n - e) / a)
          : (o = 4 + (e - t) / a),
        (o /= 6),
        o < 0 && (o += 1),
        { h: o * 360, s: l, v: s / 255 }
      );
    },
    rgb_to_hex: function (e, t, n) {
      var i = this.hex_with_component(0, 2, e);
      return (
        (i = this.hex_with_component(i, 1, t)),
        (i = this.hex_with_component(i, 0, n)),
        i
      );
    },
    component_from_hex: function (e, t) {
      return (e >> (t * 8)) & 255;
    },
    hex_with_component: function (e, t, n) {
      return (n << (Ao = t * 8)) | (e & ~(255 << Ao));
    },
  },
  Hp =
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? function (r) {
          return typeof r;
        }
      : function (r) {
          return r &&
            typeof Symbol == 'function' &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? 'symbol'
            : typeof r;
        },
  Wt = function (r, e) {
    if (!(r instanceof e))
      throw new TypeError('Cannot call a class as a function');
  },
  Xt = (function () {
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    return function (e, t, n) {
      return t && r(e.prototype, t), n && r(e, n), e;
    };
  })(),
  mn = function r(e, t, n) {
    e === null && (e = Function.prototype);
    var i = Object.getOwnPropertyDescriptor(e, t);
    if (i === void 0) {
      var s = Object.getPrototypeOf(e);
      return s === null ? void 0 : r(s, t, n);
    } else {
      if ('value' in i) return i.value;
      var a = i.get;
      return a === void 0 ? void 0 : a.call(n);
    }
  },
  gn = function (r, e) {
    if (typeof e != 'function' && e !== null)
      throw new TypeError(
        'Super expression must either be null or a function, not ' + typeof e,
      );
    (r.prototype = Object.create(e && e.prototype, {
      constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 },
    })),
      e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(r, e)
          : (r.__proto__ = e));
  },
  _n = function (r, e) {
    if (!r)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return e && (typeof e == 'object' || typeof e == 'function') ? e : r;
  },
  ct = (function () {
    function r() {
      if (
        (Wt(this, r),
        (this.__state = Ps.apply(this, arguments)),
        this.__state === !1)
      )
        throw new Error('Failed to interpret color arguments');
      this.__state.a = this.__state.a || 1;
    }
    return (
      Xt(r, [
        {
          key: 'toString',
          value: function () {
            return ui(this);
          },
        },
        {
          key: 'toHexString',
          value: function () {
            return ui(this, !0);
          },
        },
        {
          key: 'toOriginal',
          value: function () {
            return this.__state.conversion.write(this);
          },
        },
      ]),
      r
    );
  })();
function Ws(r, e, t) {
  Object.defineProperty(r, e, {
    get: function () {
      return this.__state.space === 'RGB'
        ? this.__state[e]
        : (ct.recalculateRGB(this, e, t), this.__state[e]);
    },
    set: function (i) {
      this.__state.space !== 'RGB' &&
        (ct.recalculateRGB(this, e, t), (this.__state.space = 'RGB')),
        (this.__state[e] = i);
    },
  });
}
function Xs(r, e) {
  Object.defineProperty(r, e, {
    get: function () {
      return this.__state.space === 'HSV'
        ? this.__state[e]
        : (ct.recalculateHSV(this), this.__state[e]);
    },
    set: function (n) {
      this.__state.space !== 'HSV' &&
        (ct.recalculateHSV(this), (this.__state.space = 'HSV')),
        (this.__state[e] = n);
    },
  });
}
ct.recalculateRGB = function (r, e, t) {
  if (r.__state.space === 'HEX')
    r.__state[e] = Er.component_from_hex(r.__state.hex, t);
  else if (r.__state.space === 'HSV')
    Z.extend(r.__state, Er.hsv_to_rgb(r.__state.h, r.__state.s, r.__state.v));
  else throw new Error('Corrupted color state');
};
ct.recalculateHSV = function (r) {
  var e = Er.rgb_to_hsv(r.r, r.g, r.b);
  Z.extend(r.__state, { s: e.s, v: e.v }),
    Z.isNaN(e.h)
      ? Z.isUndefined(r.__state.h) && (r.__state.h = 0)
      : (r.__state.h = e.h);
};
ct.COMPONENTS = ['r', 'g', 'b', 'h', 's', 'v', 'hex', 'a'];
Ws(ct.prototype, 'r', 2);
Ws(ct.prototype, 'g', 1);
Ws(ct.prototype, 'b', 0);
Xs(ct.prototype, 'h');
Xs(ct.prototype, 's');
Xs(ct.prototype, 'v');
Object.defineProperty(ct.prototype, 'a', {
  get: function () {
    return this.__state.a;
  },
  set: function (e) {
    this.__state.a = e;
  },
});
Object.defineProperty(ct.prototype, 'hex', {
  get: function () {
    return (
      this.__state.space !== 'HEX' &&
        ((this.__state.hex = Er.rgb_to_hex(this.r, this.g, this.b)),
        (this.__state.space = 'HEX')),
      this.__state.hex
    );
  },
  set: function (e) {
    (this.__state.space = 'HEX'), (this.__state.hex = e);
  },
});
var Hn = (function () {
    function r(e, t) {
      Wt(this, r),
        (this.initialValue = e[t]),
        (this.domElement = document.createElement('div')),
        (this.object = e),
        (this.property = t),
        (this.__onChange = void 0),
        (this.__onFinishChange = void 0);
    }
    return (
      Xt(r, [
        {
          key: 'onChange',
          value: function (t) {
            return (this.__onChange = t), this;
          },
        },
        {
          key: 'onFinishChange',
          value: function (t) {
            return (this.__onFinishChange = t), this;
          },
        },
        {
          key: 'setValue',
          value: function (t) {
            return (
              (this.object[this.property] = t),
              this.__onChange && this.__onChange.call(this, t),
              this.updateDisplay(),
              this
            );
          },
        },
        {
          key: 'getValue',
          value: function () {
            return this.object[this.property];
          },
        },
        {
          key: 'updateDisplay',
          value: function () {
            return this;
          },
        },
        {
          key: 'isModified',
          value: function () {
            return this.initialValue !== this.getValue();
          },
        },
      ]),
      r
    );
  })(),
  Vp = {
    HTMLEvents: ['change'],
    MouseEvents: ['click', 'mousemove', 'mousedown', 'mouseup', 'mouseover'],
    KeyboardEvents: ['keydown'],
  },
  hl = {};
Z.each(Vp, function (r, e) {
  Z.each(r, function (t) {
    hl[t] = e;
  });
});
var Wp = /(\d+(\.\d+)?)px/;
function Yt(r) {
  if (r === '0' || Z.isUndefined(r)) return 0;
  var e = r.match(Wp);
  return Z.isNull(e) ? 0 : parseFloat(e[1]);
}
var U = {
    makeSelectable: function (e, t) {
      e === void 0 ||
        e.style === void 0 ||
        ((e.onselectstart = t
          ? function () {
              return !1;
            }
          : function () {}),
        (e.style.MozUserSelect = t ? 'auto' : 'none'),
        (e.style.KhtmlUserSelect = t ? 'auto' : 'none'),
        (e.unselectable = t ? 'on' : 'off'));
    },
    makeFullscreen: function (e, t, n) {
      var i = n,
        s = t;
      Z.isUndefined(s) && (s = !0),
        Z.isUndefined(i) && (i = !0),
        (e.style.position = 'absolute'),
        s && ((e.style.left = 0), (e.style.right = 0)),
        i && ((e.style.top = 0), (e.style.bottom = 0));
    },
    fakeEvent: function (e, t, n, i) {
      var s = n || {},
        a = hl[t];
      if (!a) throw new Error('Event type ' + t + ' not supported.');
      var o = document.createEvent(a);
      switch (a) {
        case 'MouseEvents': {
          var l = s.x || s.clientX || 0,
            c = s.y || s.clientY || 0;
          o.initMouseEvent(
            t,
            s.bubbles || !1,
            s.cancelable || !0,
            window,
            s.clickCount || 1,
            0,
            0,
            l,
            c,
            !1,
            !1,
            !1,
            !1,
            0,
            null,
          );
          break;
        }
        case 'KeyboardEvents': {
          var u = o.initKeyboardEvent || o.initKeyEvent;
          Z.defaults(s, {
            cancelable: !0,
            ctrlKey: !1,
            altKey: !1,
            shiftKey: !1,
            metaKey: !1,
            keyCode: void 0,
            charCode: void 0,
          }),
            u(
              t,
              s.bubbles || !1,
              s.cancelable,
              window,
              s.ctrlKey,
              s.altKey,
              s.shiftKey,
              s.metaKey,
              s.keyCode,
              s.charCode,
            );
          break;
        }
        default: {
          o.initEvent(t, s.bubbles || !1, s.cancelable || !0);
          break;
        }
      }
      Z.defaults(o, i), e.dispatchEvent(o);
    },
    bind: function (e, t, n, i) {
      var s = i || !1;
      return (
        e.addEventListener
          ? e.addEventListener(t, n, s)
          : e.attachEvent && e.attachEvent('on' + t, n),
        U
      );
    },
    unbind: function (e, t, n, i) {
      var s = i || !1;
      return (
        e.removeEventListener
          ? e.removeEventListener(t, n, s)
          : e.detachEvent && e.detachEvent('on' + t, n),
        U
      );
    },
    addClass: function (e, t) {
      if (e.className === void 0) e.className = t;
      else if (e.className !== t) {
        var n = e.className.split(/ +/);
        n.indexOf(t) === -1 &&
          (n.push(t),
          (e.className = n.join(' ').replace(/^\s+/, '').replace(/\s+$/, '')));
      }
      return U;
    },
    removeClass: function (e, t) {
      if (t)
        if (e.className === t) e.removeAttribute('class');
        else {
          var n = e.className.split(/ +/),
            i = n.indexOf(t);
          i !== -1 && (n.splice(i, 1), (e.className = n.join(' ')));
        }
      else e.className = void 0;
      return U;
    },
    hasClass: function (e, t) {
      return (
        new RegExp('(?:^|\\s+)' + t + '(?:\\s+|$)').test(e.className) || !1
      );
    },
    getWidth: function (e) {
      var t = getComputedStyle(e);
      return (
        Yt(t['border-left-width']) +
        Yt(t['border-right-width']) +
        Yt(t['padding-left']) +
        Yt(t['padding-right']) +
        Yt(t.width)
      );
    },
    getHeight: function (e) {
      var t = getComputedStyle(e);
      return (
        Yt(t['border-top-width']) +
        Yt(t['border-bottom-width']) +
        Yt(t['padding-top']) +
        Yt(t['padding-bottom']) +
        Yt(t.height)
      );
    },
    getOffset: function (e) {
      var t = e,
        n = { left: 0, top: 0 };
      if (t.offsetParent)
        do
          (n.left += t.offsetLeft),
            (n.top += t.offsetTop),
            (t = t.offsetParent);
        while (t);
      return n;
    },
    isActive: function (e) {
      return e === document.activeElement && (e.type || e.href);
    },
  },
  dl = (function (r) {
    gn(e, r);
    function e(t, n) {
      Wt(this, e);
      var i = _n(
          this,
          (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n),
        ),
        s = i;
      (i.__prev = i.getValue()),
        (i.__checkbox = document.createElement('input')),
        i.__checkbox.setAttribute('type', 'checkbox');
      function a() {
        s.setValue(!s.__prev);
      }
      return (
        U.bind(i.__checkbox, 'change', a, !1),
        i.domElement.appendChild(i.__checkbox),
        i.updateDisplay(),
        i
      );
    }
    return (
      Xt(e, [
        {
          key: 'setValue',
          value: function (n) {
            var i = mn(
              e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
              'setValue',
              this,
            ).call(this, n);
            return (
              this.__onFinishChange &&
                this.__onFinishChange.call(this, this.getValue()),
              (this.__prev = this.getValue()),
              i
            );
          },
        },
        {
          key: 'updateDisplay',
          value: function () {
            return (
              this.getValue() === !0
                ? (this.__checkbox.setAttribute('checked', 'checked'),
                  (this.__checkbox.checked = !0),
                  (this.__prev = !0))
                : ((this.__checkbox.checked = !1), (this.__prev = !1)),
              mn(
                e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                'updateDisplay',
                this,
              ).call(this)
            );
          },
        },
      ]),
      e
    );
  })(Hn),
  Xp = (function (r) {
    gn(e, r);
    function e(t, n, i) {
      Wt(this, e);
      var s = _n(
          this,
          (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n),
        ),
        a = i,
        o = s;
      if (((s.__select = document.createElement('select')), Z.isArray(a))) {
        var l = {};
        Z.each(a, function (c) {
          l[c] = c;
        }),
          (a = l);
      }
      return (
        Z.each(a, function (c, u) {
          var h = document.createElement('option');
          (h.innerHTML = u),
            h.setAttribute('value', c),
            o.__select.appendChild(h);
        }),
        s.updateDisplay(),
        U.bind(s.__select, 'change', function () {
          var c = this.options[this.selectedIndex].value;
          o.setValue(c);
        }),
        s.domElement.appendChild(s.__select),
        s
      );
    }
    return (
      Xt(e, [
        {
          key: 'setValue',
          value: function (n) {
            var i = mn(
              e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
              'setValue',
              this,
            ).call(this, n);
            return (
              this.__onFinishChange &&
                this.__onFinishChange.call(this, this.getValue()),
              i
            );
          },
        },
        {
          key: 'updateDisplay',
          value: function () {
            return U.isActive(this.__select)
              ? this
              : ((this.__select.value = this.getValue()),
                mn(
                  e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                  'updateDisplay',
                  this,
                ).call(this));
          },
        },
      ]),
      e
    );
  })(Hn),
  qp = (function (r) {
    gn(e, r);
    function e(t, n) {
      Wt(this, e);
      var i = _n(
          this,
          (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n),
        ),
        s = i;
      function a() {
        s.setValue(s.__input.value);
      }
      function o() {
        s.__onFinishChange && s.__onFinishChange.call(s, s.getValue());
      }
      return (
        (i.__input = document.createElement('input')),
        i.__input.setAttribute('type', 'text'),
        U.bind(i.__input, 'keyup', a),
        U.bind(i.__input, 'change', a),
        U.bind(i.__input, 'blur', o),
        U.bind(i.__input, 'keydown', function (l) {
          l.keyCode === 13 && this.blur();
        }),
        i.updateDisplay(),
        i.domElement.appendChild(i.__input),
        i
      );
    }
    return (
      Xt(e, [
        {
          key: 'updateDisplay',
          value: function () {
            return (
              U.isActive(this.__input) ||
                (this.__input.value = this.getValue()),
              mn(
                e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                'updateDisplay',
                this,
              ).call(this)
            );
          },
        },
      ]),
      e
    );
  })(Hn);
function Co(r) {
  var e = r.toString();
  return e.indexOf('.') > -1 ? e.length - e.indexOf('.') - 1 : 0;
}
var fl = (function (r) {
  gn(e, r);
  function e(t, n, i) {
    Wt(this, e);
    var s = _n(
        this,
        (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n),
      ),
      a = i || {};
    return (
      (s.__min = a.min),
      (s.__max = a.max),
      (s.__step = a.step),
      Z.isUndefined(s.__step)
        ? s.initialValue === 0
          ? (s.__impliedStep = 1)
          : (s.__impliedStep =
              Math.pow(
                10,
                Math.floor(Math.log(Math.abs(s.initialValue)) / Math.LN10),
              ) / 10)
        : (s.__impliedStep = s.__step),
      (s.__precision = Co(s.__impliedStep)),
      s
    );
  }
  return (
    Xt(e, [
      {
        key: 'setValue',
        value: function (n) {
          var i = n;
          return (
            this.__min !== void 0 && i < this.__min
              ? (i = this.__min)
              : this.__max !== void 0 && i > this.__max && (i = this.__max),
            this.__step !== void 0 &&
              i % this.__step !== 0 &&
              (i = Math.round(i / this.__step) * this.__step),
            mn(
              e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
              'setValue',
              this,
            ).call(this, i)
          );
        },
      },
      {
        key: 'min',
        value: function (n) {
          return (this.__min = n), this;
        },
      },
      {
        key: 'max',
        value: function (n) {
          return (this.__max = n), this;
        },
      },
      {
        key: 'step',
        value: function (n) {
          return (
            (this.__step = n),
            (this.__impliedStep = n),
            (this.__precision = Co(n)),
            this
          );
        },
      },
    ]),
    e
  );
})(Hn);
function Yp(r, e) {
  var t = Math.pow(10, e);
  return Math.round(r * t) / t;
}
var Tr = (function (r) {
  gn(e, r);
  function e(t, n, i) {
    Wt(this, e);
    var s = _n(
      this,
      (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n, i),
    );
    s.__truncationSuspended = !1;
    var a = s,
      o = void 0;
    function l() {
      var _ = parseFloat(a.__input.value);
      Z.isNaN(_) || a.setValue(_);
    }
    function c() {
      a.__onFinishChange && a.__onFinishChange.call(a, a.getValue());
    }
    function u() {
      c();
    }
    function h(_) {
      var p = o - _.clientY;
      a.setValue(a.getValue() + p * a.__impliedStep), (o = _.clientY);
    }
    function d() {
      U.unbind(window, 'mousemove', h), U.unbind(window, 'mouseup', d), c();
    }
    function m(_) {
      U.bind(window, 'mousemove', h),
        U.bind(window, 'mouseup', d),
        (o = _.clientY);
    }
    return (
      (s.__input = document.createElement('input')),
      s.__input.setAttribute('type', 'text'),
      U.bind(s.__input, 'change', l),
      U.bind(s.__input, 'blur', u),
      U.bind(s.__input, 'mousedown', m),
      U.bind(s.__input, 'keydown', function (_) {
        _.keyCode === 13 &&
          ((a.__truncationSuspended = !0),
          this.blur(),
          (a.__truncationSuspended = !1),
          c());
      }),
      s.updateDisplay(),
      s.domElement.appendChild(s.__input),
      s
    );
  }
  return (
    Xt(e, [
      {
        key: 'updateDisplay',
        value: function () {
          return (
            (this.__input.value = this.__truncationSuspended
              ? this.getValue()
              : Yp(this.getValue(), this.__precision)),
            mn(
              e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
              'updateDisplay',
              this,
            ).call(this)
          );
        },
      },
    ]),
    e
  );
})(fl);
function Lo(r, e, t, n, i) {
  return n + (i - n) * ((r - e) / (t - e));
}
var Ds = (function (r) {
    gn(e, r);
    function e(t, n, i, s, a) {
      Wt(this, e);
      var o = _n(
          this,
          (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n, {
            min: i,
            max: s,
            step: a,
          }),
        ),
        l = o;
      (o.__background = document.createElement('div')),
        (o.__foreground = document.createElement('div')),
        U.bind(o.__background, 'mousedown', c),
        U.bind(o.__background, 'touchstart', d),
        U.addClass(o.__background, 'slider'),
        U.addClass(o.__foreground, 'slider-fg');
      function c(p) {
        document.activeElement.blur(),
          U.bind(window, 'mousemove', u),
          U.bind(window, 'mouseup', h),
          u(p);
      }
      function u(p) {
        p.preventDefault();
        var f = l.__background.getBoundingClientRect();
        return l.setValue(Lo(p.clientX, f.left, f.right, l.__min, l.__max)), !1;
      }
      function h() {
        U.unbind(window, 'mousemove', u),
          U.unbind(window, 'mouseup', h),
          l.__onFinishChange && l.__onFinishChange.call(l, l.getValue());
      }
      function d(p) {
        p.touches.length === 1 &&
          (U.bind(window, 'touchmove', m), U.bind(window, 'touchend', _), m(p));
      }
      function m(p) {
        var f = p.touches[0].clientX,
          x = l.__background.getBoundingClientRect();
        l.setValue(Lo(f, x.left, x.right, l.__min, l.__max));
      }
      function _() {
        U.unbind(window, 'touchmove', m),
          U.unbind(window, 'touchend', _),
          l.__onFinishChange && l.__onFinishChange.call(l, l.getValue());
      }
      return (
        o.updateDisplay(),
        o.__background.appendChild(o.__foreground),
        o.domElement.appendChild(o.__background),
        o
      );
    }
    return (
      Xt(e, [
        {
          key: 'updateDisplay',
          value: function () {
            var n = (this.getValue() - this.__min) / (this.__max - this.__min);
            return (
              (this.__foreground.style.width = n * 100 + '%'),
              mn(
                e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                'updateDisplay',
                this,
              ).call(this)
            );
          },
        },
      ]),
      e
    );
  })(fl),
  pl = (function (r) {
    gn(e, r);
    function e(t, n, i) {
      Wt(this, e);
      var s = _n(
          this,
          (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n),
        ),
        a = s;
      return (
        (s.__button = document.createElement('div')),
        (s.__button.innerHTML = i === void 0 ? 'Fire' : i),
        U.bind(s.__button, 'click', function (o) {
          return o.preventDefault(), a.fire(), !1;
        }),
        U.addClass(s.__button, 'button'),
        s.domElement.appendChild(s.__button),
        s
      );
    }
    return (
      Xt(e, [
        {
          key: 'fire',
          value: function () {
            this.__onChange && this.__onChange.call(this),
              this.getValue().call(this.object),
              this.__onFinishChange &&
                this.__onFinishChange.call(this, this.getValue());
          },
        },
      ]),
      e
    );
  })(Hn),
  Rs = (function (r) {
    gn(e, r);
    function e(t, n) {
      Wt(this, e);
      var i = _n(
        this,
        (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n),
      );
      (i.__color = new ct(i.getValue())), (i.__temp = new ct(0));
      var s = i;
      (i.domElement = document.createElement('div')),
        U.makeSelectable(i.domElement, !1),
        (i.__selector = document.createElement('div')),
        (i.__selector.className = 'selector'),
        (i.__saturation_field = document.createElement('div')),
        (i.__saturation_field.className = 'saturation-field'),
        (i.__field_knob = document.createElement('div')),
        (i.__field_knob.className = 'field-knob'),
        (i.__field_knob_border = '2px solid '),
        (i.__hue_knob = document.createElement('div')),
        (i.__hue_knob.className = 'hue-knob'),
        (i.__hue_field = document.createElement('div')),
        (i.__hue_field.className = 'hue-field'),
        (i.__input = document.createElement('input')),
        (i.__input.type = 'text'),
        (i.__input_textShadow = '0 1px 1px '),
        U.bind(i.__input, 'keydown', function (p) {
          p.keyCode === 13 && h.call(this);
        }),
        U.bind(i.__input, 'blur', h),
        U.bind(i.__selector, 'mousedown', function () {
          U.addClass(this, 'drag').bind(window, 'mouseup', function () {
            U.removeClass(s.__selector, 'drag');
          });
        }),
        U.bind(i.__selector, 'touchstart', function () {
          U.addClass(this, 'drag').bind(window, 'touchend', function () {
            U.removeClass(s.__selector, 'drag');
          });
        });
      var a = document.createElement('div');
      Z.extend(i.__selector.style, {
        width: '122px',
        height: '102px',
        padding: '3px',
        backgroundColor: '#222',
        boxShadow: '0px 1px 3px rgba(0,0,0,0.3)',
      }),
        Z.extend(i.__field_knob.style, {
          position: 'absolute',
          width: '12px',
          height: '12px',
          border: i.__field_knob_border + (i.__color.v < 0.5 ? '#fff' : '#000'),
          boxShadow: '0px 1px 3px rgba(0,0,0,0.5)',
          borderRadius: '12px',
          zIndex: 1,
        }),
        Z.extend(i.__hue_knob.style, {
          position: 'absolute',
          width: '15px',
          height: '2px',
          borderRight: '4px solid #fff',
          zIndex: 1,
        }),
        Z.extend(i.__saturation_field.style, {
          width: '100px',
          height: '100px',
          border: '1px solid #555',
          marginRight: '3px',
          display: 'inline-block',
          cursor: 'pointer',
        }),
        Z.extend(a.style, {
          width: '100%',
          height: '100%',
          background: 'none',
        }),
        Po(a, 'top', 'rgba(0,0,0,0)', '#000'),
        Z.extend(i.__hue_field.style, {
          width: '15px',
          height: '100px',
          border: '1px solid #555',
          cursor: 'ns-resize',
          position: 'absolute',
          top: '3px',
          right: '3px',
        }),
        Zp(i.__hue_field),
        Z.extend(i.__input.style, {
          outline: 'none',
          textAlign: 'center',
          color: '#fff',
          border: 0,
          fontWeight: 'bold',
          textShadow: i.__input_textShadow + 'rgba(0,0,0,0.7)',
        }),
        U.bind(i.__saturation_field, 'mousedown', o),
        U.bind(i.__saturation_field, 'touchstart', o),
        U.bind(i.__field_knob, 'mousedown', o),
        U.bind(i.__field_knob, 'touchstart', o),
        U.bind(i.__hue_field, 'mousedown', l),
        U.bind(i.__hue_field, 'touchstart', l);
      function o(p) {
        m(p),
          U.bind(window, 'mousemove', m),
          U.bind(window, 'touchmove', m),
          U.bind(window, 'mouseup', c),
          U.bind(window, 'touchend', c);
      }
      function l(p) {
        _(p),
          U.bind(window, 'mousemove', _),
          U.bind(window, 'touchmove', _),
          U.bind(window, 'mouseup', u),
          U.bind(window, 'touchend', u);
      }
      function c() {
        U.unbind(window, 'mousemove', m),
          U.unbind(window, 'touchmove', m),
          U.unbind(window, 'mouseup', c),
          U.unbind(window, 'touchend', c),
          d();
      }
      function u() {
        U.unbind(window, 'mousemove', _),
          U.unbind(window, 'touchmove', _),
          U.unbind(window, 'mouseup', u),
          U.unbind(window, 'touchend', u),
          d();
      }
      function h() {
        var p = Ps(this.value);
        p !== !1
          ? ((s.__color.__state = p), s.setValue(s.__color.toOriginal()))
          : (this.value = s.__color.toString());
      }
      function d() {
        s.__onFinishChange &&
          s.__onFinishChange.call(s, s.__color.toOriginal());
      }
      i.__saturation_field.appendChild(a),
        i.__selector.appendChild(i.__field_knob),
        i.__selector.appendChild(i.__saturation_field),
        i.__selector.appendChild(i.__hue_field),
        i.__hue_field.appendChild(i.__hue_knob),
        i.domElement.appendChild(i.__input),
        i.domElement.appendChild(i.__selector),
        i.updateDisplay();
      function m(p) {
        p.type.indexOf('touch') === -1 && p.preventDefault();
        var f = s.__saturation_field.getBoundingClientRect(),
          x = (p.touches && p.touches[0]) || p,
          b = x.clientX,
          v = x.clientY,
          S = (b - f.left) / (f.right - f.left),
          y = 1 - (v - f.top) / (f.bottom - f.top);
        return (
          y > 1 ? (y = 1) : y < 0 && (y = 0),
          S > 1 ? (S = 1) : S < 0 && (S = 0),
          (s.__color.v = y),
          (s.__color.s = S),
          s.setValue(s.__color.toOriginal()),
          !1
        );
      }
      function _(p) {
        p.type.indexOf('touch') === -1 && p.preventDefault();
        var f = s.__hue_field.getBoundingClientRect(),
          x = (p.touches && p.touches[0]) || p,
          b = x.clientY,
          v = 1 - (b - f.top) / (f.bottom - f.top);
        return (
          v > 1 ? (v = 1) : v < 0 && (v = 0),
          (s.__color.h = v * 360),
          s.setValue(s.__color.toOriginal()),
          !1
        );
      }
      return i;
    }
    return (
      Xt(e, [
        {
          key: 'updateDisplay',
          value: function () {
            var n = Ps(this.getValue());
            if (n !== !1) {
              var i = !1;
              Z.each(
                ct.COMPONENTS,
                function (o) {
                  if (
                    !Z.isUndefined(n[o]) &&
                    !Z.isUndefined(this.__color.__state[o]) &&
                    n[o] !== this.__color.__state[o]
                  )
                    return (i = !0), {};
                },
                this,
              ),
                i && Z.extend(this.__color.__state, n);
            }
            Z.extend(this.__temp.__state, this.__color.__state),
              (this.__temp.a = 1);
            var s = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0,
              a = 255 - s;
            Z.extend(this.__field_knob.style, {
              marginLeft: 100 * this.__color.s - 7 + 'px',
              marginTop: 100 * (1 - this.__color.v) - 7 + 'px',
              backgroundColor: this.__temp.toHexString(),
              border:
                this.__field_knob_border + 'rgb(' + s + ',' + s + ',' + s + ')',
            }),
              (this.__hue_knob.style.marginTop =
                (1 - this.__color.h / 360) * 100 + 'px'),
              (this.__temp.s = 1),
              (this.__temp.v = 1),
              Po(
                this.__saturation_field,
                'left',
                '#fff',
                this.__temp.toHexString(),
              ),
              (this.__input.value = this.__color.toString()),
              Z.extend(this.__input.style, {
                backgroundColor: this.__color.toHexString(),
                color: 'rgb(' + s + ',' + s + ',' + s + ')',
                textShadow:
                  this.__input_textShadow +
                  'rgba(' +
                  a +
                  ',' +
                  a +
                  ',' +
                  a +
                  ',.7)',
              });
          },
        },
      ]),
      e
    );
  })(Hn),
  jp = ['-moz-', '-o-', '-webkit-', '-ms-', ''];
function Po(r, e, t, n) {
  (r.style.background = ''),
    Z.each(jp, function (i) {
      r.style.cssText +=
        'background: ' +
        i +
        'linear-gradient(' +
        e +
        ', ' +
        t +
        ' 0%, ' +
        n +
        ' 100%); ';
    });
}
function Zp(r) {
  (r.style.background = ''),
    (r.style.cssText +=
      'background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);'),
    (r.style.cssText +=
      'background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'),
    (r.style.cssText +=
      'background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'),
    (r.style.cssText +=
      'background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'),
    (r.style.cssText +=
      'background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);');
}
var $p = {
    load: function (e, t) {
      var n = t || document,
        i = n.createElement('link');
      (i.type = 'text/css'),
        (i.rel = 'stylesheet'),
        (i.href = e),
        n.getElementsByTagName('head')[0].appendChild(i);
    },
    inject: function (e, t) {
      var n = t || document,
        i = document.createElement('style');
      (i.type = 'text/css'), (i.innerHTML = e);
      var s = n.getElementsByTagName('head')[0];
      try {
        s.appendChild(i);
      } catch {}
    },
  },
  Kp = `<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,
  Qp = function (e, t) {
    var n = e[t];
    return Z.isArray(arguments[2]) || Z.isObject(arguments[2])
      ? new Xp(e, t, arguments[2])
      : Z.isNumber(n)
      ? Z.isNumber(arguments[2]) && Z.isNumber(arguments[3])
        ? Z.isNumber(arguments[4])
          ? new Ds(e, t, arguments[2], arguments[3], arguments[4])
          : new Ds(e, t, arguments[2], arguments[3])
        : Z.isNumber(arguments[4])
        ? new Tr(e, t, {
            min: arguments[2],
            max: arguments[3],
            step: arguments[4],
          })
        : new Tr(e, t, { min: arguments[2], max: arguments[3] })
      : Z.isString(n)
      ? new qp(e, t)
      : Z.isFunction(n)
      ? new pl(e, t, '')
      : Z.isBoolean(n)
      ? new dl(e, t)
      : null;
  };
function Jp(r) {
  setTimeout(r, 1e3 / 60);
}
var em =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    Jp,
  tm = (function () {
    function r() {
      Wt(this, r),
        (this.backgroundElement = document.createElement('div')),
        Z.extend(this.backgroundElement.style, {
          backgroundColor: 'rgba(0,0,0,0.8)',
          top: 0,
          left: 0,
          display: 'none',
          zIndex: '1000',
          opacity: 0,
          WebkitTransition: 'opacity 0.2s linear',
          transition: 'opacity 0.2s linear',
        }),
        U.makeFullscreen(this.backgroundElement),
        (this.backgroundElement.style.position = 'fixed'),
        (this.domElement = document.createElement('div')),
        Z.extend(this.domElement.style, {
          position: 'fixed',
          display: 'none',
          zIndex: '1001',
          opacity: 0,
          WebkitTransition:
            '-webkit-transform 0.2s ease-out, opacity 0.2s linear',
          transition: 'transform 0.2s ease-out, opacity 0.2s linear',
        }),
        document.body.appendChild(this.backgroundElement),
        document.body.appendChild(this.domElement);
      var e = this;
      U.bind(this.backgroundElement, 'click', function () {
        e.hide();
      });
    }
    return (
      Xt(r, [
        {
          key: 'show',
          value: function () {
            var t = this;
            (this.backgroundElement.style.display = 'block'),
              (this.domElement.style.display = 'block'),
              (this.domElement.style.opacity = 0),
              (this.domElement.style.webkitTransform = 'scale(1.1)'),
              this.layout(),
              Z.defer(function () {
                (t.backgroundElement.style.opacity = 1),
                  (t.domElement.style.opacity = 1),
                  (t.domElement.style.webkitTransform = 'scale(1)');
              });
          },
        },
        {
          key: 'hide',
          value: function () {
            var t = this,
              n = function i() {
                (t.domElement.style.display = 'none'),
                  (t.backgroundElement.style.display = 'none'),
                  U.unbind(t.domElement, 'webkitTransitionEnd', i),
                  U.unbind(t.domElement, 'transitionend', i),
                  U.unbind(t.domElement, 'oTransitionEnd', i);
              };
            U.bind(this.domElement, 'webkitTransitionEnd', n),
              U.bind(this.domElement, 'transitionend', n),
              U.bind(this.domElement, 'oTransitionEnd', n),
              (this.backgroundElement.style.opacity = 0),
              (this.domElement.style.opacity = 0),
              (this.domElement.style.webkitTransform = 'scale(1.1)');
          },
        },
        {
          key: 'layout',
          value: function () {
            (this.domElement.style.left =
              window.innerWidth / 2 - U.getWidth(this.domElement) / 2 + 'px'),
              (this.domElement.style.top =
                window.innerHeight / 2 -
                U.getHeight(this.domElement) / 2 +
                'px');
          },
        },
      ]),
      r
    );
  })(),
  nm =
    kp(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);
$p.inject(nm);
var Do = 'dg',
  Ro = 72,
  Io = 20,
  Wi = 'Default',
  zi = (function () {
    try {
      return !!window.localStorage;
    } catch {
      return !1;
    }
  })(),
  Ui = void 0,
  Oo = !0,
  ai = void 0,
  ys = !1,
  ml = [],
  He = function r(e) {
    var t = this,
      n = e || {};
    (this.domElement = document.createElement('div')),
      (this.__ul = document.createElement('ul')),
      this.domElement.appendChild(this.__ul),
      U.addClass(this.domElement, Do),
      (this.__folders = {}),
      (this.__controllers = []),
      (this.__rememberedObjects = []),
      (this.__rememberedObjectIndecesToControllers = []),
      (this.__listening = []),
      (n = Z.defaults(n, {
        closeOnTop: !1,
        autoPlace: !0,
        width: r.DEFAULT_WIDTH,
      })),
      (n = Z.defaults(n, { resizable: n.autoPlace, hideable: n.autoPlace })),
      Z.isUndefined(n.load)
        ? (n.load = { preset: Wi })
        : n.preset && (n.load.preset = n.preset),
      Z.isUndefined(n.parent) && n.hideable && ml.push(this),
      (n.resizable = Z.isUndefined(n.parent) && n.resizable),
      n.autoPlace && Z.isUndefined(n.scrollable) && (n.scrollable = !0);
    var i = zi && localStorage.getItem(oi(this, 'isLocal')) === 'true',
      s = void 0,
      a = void 0;
    if (
      (Object.defineProperties(this, {
        parent: {
          get: function () {
            return n.parent;
          },
        },
        scrollable: {
          get: function () {
            return n.scrollable;
          },
        },
        autoPlace: {
          get: function () {
            return n.autoPlace;
          },
        },
        closeOnTop: {
          get: function () {
            return n.closeOnTop;
          },
        },
        preset: {
          get: function () {
            return t.parent ? t.getRoot().preset : n.load.preset;
          },
          set: function (d) {
            t.parent ? (t.getRoot().preset = d) : (n.load.preset = d),
              am(this),
              t.revert();
          },
        },
        width: {
          get: function () {
            return n.width;
          },
          set: function (d) {
            (n.width = d), Fs(t, d);
          },
        },
        name: {
          get: function () {
            return n.name;
          },
          set: function (d) {
            (n.name = d), a && (a.innerHTML = n.name);
          },
        },
        closed: {
          get: function () {
            return n.closed;
          },
          set: function (d) {
            (n.closed = d),
              n.closed
                ? U.addClass(t.__ul, r.CLASS_CLOSED)
                : U.removeClass(t.__ul, r.CLASS_CLOSED),
              this.onResize(),
              t.__closeButton &&
                (t.__closeButton.innerHTML = d ? r.TEXT_OPEN : r.TEXT_CLOSED);
          },
        },
        load: {
          get: function () {
            return n.load;
          },
        },
        useLocalStorage: {
          get: function () {
            return i;
          },
          set: function (d) {
            zi &&
              ((i = d),
              d ? U.bind(window, 'unload', s) : U.unbind(window, 'unload', s),
              localStorage.setItem(oi(t, 'isLocal'), d));
          },
        },
      }),
      Z.isUndefined(n.parent))
    ) {
      if (
        ((this.closed = n.closed || !1),
        U.addClass(this.domElement, r.CLASS_MAIN),
        U.makeSelectable(this.domElement, !1),
        zi && i)
      ) {
        t.useLocalStorage = !0;
        var o = localStorage.getItem(oi(this, 'gui'));
        o && (n.load = JSON.parse(o));
      }
      (this.__closeButton = document.createElement('div')),
        (this.__closeButton.innerHTML = r.TEXT_CLOSED),
        U.addClass(this.__closeButton, r.CLASS_CLOSE_BUTTON),
        n.closeOnTop
          ? (U.addClass(this.__closeButton, r.CLASS_CLOSE_TOP),
            this.domElement.insertBefore(
              this.__closeButton,
              this.domElement.childNodes[0],
            ))
          : (U.addClass(this.__closeButton, r.CLASS_CLOSE_BOTTOM),
            this.domElement.appendChild(this.__closeButton)),
        U.bind(this.__closeButton, 'click', function () {
          t.closed = !t.closed;
        });
    } else {
      n.closed === void 0 && (n.closed = !0);
      var l = document.createTextNode(n.name);
      U.addClass(l, 'controller-name'), (a = qs(t, l));
      var c = function (d) {
        return d.preventDefault(), (t.closed = !t.closed), !1;
      };
      U.addClass(this.__ul, r.CLASS_CLOSED),
        U.addClass(a, 'title'),
        U.bind(a, 'click', c),
        n.closed || (this.closed = !1);
    }
    n.autoPlace &&
      (Z.isUndefined(n.parent) &&
        (Oo &&
          ((ai = document.createElement('div')),
          U.addClass(ai, Do),
          U.addClass(ai, r.CLASS_AUTO_PLACE_CONTAINER),
          document.body.appendChild(ai),
          (Oo = !1)),
        ai.appendChild(this.domElement),
        U.addClass(this.domElement, r.CLASS_AUTO_PLACE)),
      this.parent || Fs(t, n.width)),
      (this.__resizeHandler = function () {
        t.onResizeDebounced();
      }),
      U.bind(window, 'resize', this.__resizeHandler),
      U.bind(this.__ul, 'webkitTransitionEnd', this.__resizeHandler),
      U.bind(this.__ul, 'transitionend', this.__resizeHandler),
      U.bind(this.__ul, 'oTransitionEnd', this.__resizeHandler),
      this.onResize(),
      n.resizable && sm(this),
      (s = function () {
        zi &&
          localStorage.getItem(oi(t, 'isLocal')) === 'true' &&
          localStorage.setItem(oi(t, 'gui'), JSON.stringify(t.getSaveObject()));
      }),
      (this.saveToLocalStorageIfPossible = s);
    function u() {
      var h = t.getRoot();
      (h.width += 1),
        Z.defer(function () {
          h.width -= 1;
        });
    }
    n.parent || u();
  };
He.toggleHide = function () {
  (ys = !ys),
    Z.each(ml, function (r) {
      r.domElement.style.display = ys ? 'none' : '';
    });
};
He.CLASS_AUTO_PLACE = 'a';
He.CLASS_AUTO_PLACE_CONTAINER = 'ac';
He.CLASS_MAIN = 'main';
He.CLASS_CONTROLLER_ROW = 'cr';
He.CLASS_TOO_TALL = 'taller-than-window';
He.CLASS_CLOSED = 'closed';
He.CLASS_CLOSE_BUTTON = 'close-button';
He.CLASS_CLOSE_TOP = 'close-top';
He.CLASS_CLOSE_BOTTOM = 'close-bottom';
He.CLASS_DRAG = 'drag';
He.DEFAULT_WIDTH = 245;
He.TEXT_CLOSED = 'Close Controls';
He.TEXT_OPEN = 'Open Controls';
He._keydownHandler = function (r) {
  document.activeElement.type !== 'text' &&
    (r.which === Ro || r.keyCode === Ro) &&
    He.toggleHide();
};
U.bind(window, 'keydown', He._keydownHandler, !1);
Z.extend(He.prototype, {
  add: function (e, t) {
    return Bi(this, e, t, {
      factoryArgs: Array.prototype.slice.call(arguments, 2),
    });
  },
  addColor: function (e, t) {
    return Bi(this, e, t, { color: !0 });
  },
  remove: function (e) {
    this.__ul.removeChild(e.__li),
      this.__controllers.splice(this.__controllers.indexOf(e), 1);
    var t = this;
    Z.defer(function () {
      t.onResize();
    });
  },
  destroy: function () {
    if (this.parent)
      throw new Error(
        'Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.',
      );
    this.autoPlace && ai.removeChild(this.domElement);
    var e = this;
    Z.each(this.__folders, function (t) {
      e.removeFolder(t);
    }),
      U.unbind(window, 'keydown', He._keydownHandler, !1),
      Fo(this);
  },
  addFolder: function (e) {
    if (this.__folders[e] !== void 0)
      throw new Error(
        'You already have a folder in this GUI by the name "' + e + '"',
      );
    var t = { name: e, parent: this };
    (t.autoPlace = this.autoPlace),
      this.load &&
        this.load.folders &&
        this.load.folders[e] &&
        ((t.closed = this.load.folders[e].closed),
        (t.load = this.load.folders[e]));
    var n = new He(t);
    this.__folders[e] = n;
    var i = qs(this, n.domElement);
    return U.addClass(i, 'folder'), n;
  },
  removeFolder: function (e) {
    this.__ul.removeChild(e.domElement.parentElement),
      delete this.__folders[e.name],
      this.load &&
        this.load.folders &&
        this.load.folders[e.name] &&
        delete this.load.folders[e.name],
      Fo(e);
    var t = this;
    Z.each(e.__folders, function (n) {
      e.removeFolder(n);
    }),
      Z.defer(function () {
        t.onResize();
      });
  },
  open: function () {
    this.closed = !1;
  },
  close: function () {
    this.closed = !0;
  },
  hide: function () {
    this.domElement.style.display = 'none';
  },
  show: function () {
    this.domElement.style.display = '';
  },
  onResize: function () {
    var e = this.getRoot();
    if (e.scrollable) {
      var t = U.getOffset(e.__ul).top,
        n = 0;
      Z.each(e.__ul.childNodes, function (i) {
        (e.autoPlace && i === e.__save_row) || (n += U.getHeight(i));
      }),
        window.innerHeight - t - Io < n
          ? (U.addClass(e.domElement, He.CLASS_TOO_TALL),
            (e.__ul.style.height = window.innerHeight - t - Io + 'px'))
          : (U.removeClass(e.domElement, He.CLASS_TOO_TALL),
            (e.__ul.style.height = 'auto'));
    }
    e.__resize_handle &&
      Z.defer(function () {
        e.__resize_handle.style.height = e.__ul.offsetHeight + 'px';
      }),
      e.__closeButton && (e.__closeButton.style.width = e.width + 'px');
  },
  onResizeDebounced: Z.debounce(function () {
    this.onResize();
  }, 50),
  remember: function () {
    if (
      (Z.isUndefined(Ui) && ((Ui = new tm()), (Ui.domElement.innerHTML = Kp)),
      this.parent)
    )
      throw new Error('You can only call remember on a top level GUI.');
    var e = this;
    Z.each(Array.prototype.slice.call(arguments), function (t) {
      e.__rememberedObjects.length === 0 && rm(e),
        e.__rememberedObjects.indexOf(t) === -1 &&
          e.__rememberedObjects.push(t);
    }),
      this.autoPlace && Fs(this, this.width);
  },
  getRoot: function () {
    for (var e = this; e.parent; ) e = e.parent;
    return e;
  },
  getSaveObject: function () {
    var e = this.load;
    return (
      (e.closed = this.closed),
      this.__rememberedObjects.length > 0 &&
        ((e.preset = this.preset),
        e.remembered || (e.remembered = {}),
        (e.remembered[this.preset] = br(this))),
      (e.folders = {}),
      Z.each(this.__folders, function (t, n) {
        e.folders[n] = t.getSaveObject();
      }),
      e
    );
  },
  save: function () {
    this.load.remembered || (this.load.remembered = {}),
      (this.load.remembered[this.preset] = br(this)),
      Is(this, !1),
      this.saveToLocalStorageIfPossible();
  },
  saveAs: function (e) {
    this.load.remembered ||
      ((this.load.remembered = {}), (this.load.remembered[Wi] = br(this, !0))),
      (this.load.remembered[e] = br(this)),
      (this.preset = e),
      Os(this, e, !0),
      this.saveToLocalStorageIfPossible();
  },
  revert: function (e) {
    Z.each(
      this.__controllers,
      function (t) {
        this.getRoot().load.remembered
          ? gl(e || this.getRoot(), t)
          : t.setValue(t.initialValue),
          t.__onFinishChange && t.__onFinishChange.call(t, t.getValue());
      },
      this,
    ),
      Z.each(this.__folders, function (t) {
        t.revert(t);
      }),
      e || Is(this.getRoot(), !1);
  },
  listen: function (e) {
    var t = this.__listening.length === 0;
    this.__listening.push(e), t && _l(this.__listening);
  },
  updateDisplay: function () {
    Z.each(this.__controllers, function (e) {
      e.updateDisplay();
    }),
      Z.each(this.__folders, function (e) {
        e.updateDisplay();
      });
  },
});
function qs(r, e, t) {
  var n = document.createElement('li');
  return (
    e && n.appendChild(e),
    t ? r.__ul.insertBefore(n, t) : r.__ul.appendChild(n),
    r.onResize(),
    n
  );
}
function Fo(r) {
  U.unbind(window, 'resize', r.__resizeHandler),
    r.saveToLocalStorageIfPossible &&
      U.unbind(window, 'unload', r.saveToLocalStorageIfPossible);
}
function Is(r, e) {
  var t = r.__preset_select[r.__preset_select.selectedIndex];
  e ? (t.innerHTML = t.value + '*') : (t.innerHTML = t.value);
}
function im(r, e, t) {
  if (
    ((t.__li = e),
    (t.__gui = r),
    Z.extend(t, {
      options: function (a) {
        if (arguments.length > 1) {
          var o = t.__li.nextElementSibling;
          return (
            t.remove(),
            Bi(r, t.object, t.property, {
              before: o,
              factoryArgs: [Z.toArray(arguments)],
            })
          );
        }
        if (Z.isArray(a) || Z.isObject(a)) {
          var l = t.__li.nextElementSibling;
          return (
            t.remove(),
            Bi(r, t.object, t.property, { before: l, factoryArgs: [a] })
          );
        }
      },
      name: function (a) {
        return (t.__li.firstElementChild.firstElementChild.innerHTML = a), t;
      },
      listen: function () {
        return t.__gui.listen(t), t;
      },
      remove: function () {
        return t.__gui.remove(t), t;
      },
    }),
    t instanceof Ds)
  ) {
    var n = new Tr(t.object, t.property, {
      min: t.__min,
      max: t.__max,
      step: t.__step,
    });
    Z.each(
      ['updateDisplay', 'onChange', 'onFinishChange', 'step', 'min', 'max'],
      function (s) {
        var a = t[s],
          o = n[s];
        t[s] = n[s] = function () {
          var l = Array.prototype.slice.call(arguments);
          return o.apply(n, l), a.apply(t, l);
        };
      },
    ),
      U.addClass(e, 'has-slider'),
      t.domElement.insertBefore(n.domElement, t.domElement.firstElementChild);
  } else if (t instanceof Tr) {
    var i = function (a) {
      if (Z.isNumber(t.__min) && Z.isNumber(t.__max)) {
        var o = t.__li.firstElementChild.firstElementChild.innerHTML,
          l = t.__gui.__listening.indexOf(t) > -1;
        t.remove();
        var c = Bi(r, t.object, t.property, {
          before: t.__li.nextElementSibling,
          factoryArgs: [t.__min, t.__max, t.__step],
        });
        return c.name(o), l && c.listen(), c;
      }
      return a;
    };
    (t.min = Z.compose(i, t.min)), (t.max = Z.compose(i, t.max));
  } else
    t instanceof dl
      ? (U.bind(e, 'click', function () {
          U.fakeEvent(t.__checkbox, 'click');
        }),
        U.bind(t.__checkbox, 'click', function (s) {
          s.stopPropagation();
        }))
      : t instanceof pl
      ? (U.bind(e, 'click', function () {
          U.fakeEvent(t.__button, 'click');
        }),
        U.bind(e, 'mouseover', function () {
          U.addClass(t.__button, 'hover');
        }),
        U.bind(e, 'mouseout', function () {
          U.removeClass(t.__button, 'hover');
        }))
      : t instanceof Rs &&
        (U.addClass(e, 'color'),
        (t.updateDisplay = Z.compose(function (s) {
          return (e.style.borderLeftColor = t.__color.toString()), s;
        }, t.updateDisplay)),
        t.updateDisplay());
  t.setValue = Z.compose(function (s) {
    return (
      r.getRoot().__preset_select && t.isModified() && Is(r.getRoot(), !0), s
    );
  }, t.setValue);
}
function gl(r, e) {
  var t = r.getRoot(),
    n = t.__rememberedObjects.indexOf(e.object);
  if (n !== -1) {
    var i = t.__rememberedObjectIndecesToControllers[n];
    if (
      (i === void 0 &&
        ((i = {}), (t.__rememberedObjectIndecesToControllers[n] = i)),
      (i[e.property] = e),
      t.load && t.load.remembered)
    ) {
      var s = t.load.remembered,
        a = void 0;
      if (s[r.preset]) a = s[r.preset];
      else if (s[Wi]) a = s[Wi];
      else return;
      if (a[n] && a[n][e.property] !== void 0) {
        var o = a[n][e.property];
        (e.initialValue = o), e.setValue(o);
      }
    }
  }
}
function Bi(r, e, t, n) {
  if (e[t] === void 0)
    throw new Error('Object "' + e + '" has no property "' + t + '"');
  var i = void 0;
  if (n.color) i = new Rs(e, t);
  else {
    var s = [e, t].concat(n.factoryArgs);
    i = Qp.apply(r, s);
  }
  n.before instanceof Hn && (n.before = n.before.__li),
    gl(r, i),
    U.addClass(i.domElement, 'c');
  var a = document.createElement('span');
  U.addClass(a, 'property-name'), (a.innerHTML = i.property);
  var o = document.createElement('div');
  o.appendChild(a), o.appendChild(i.domElement);
  var l = qs(r, o, n.before);
  return (
    U.addClass(l, He.CLASS_CONTROLLER_ROW),
    i instanceof Rs ? U.addClass(l, 'color') : U.addClass(l, Hp(i.getValue())),
    im(r, l, i),
    r.__controllers.push(i),
    i
  );
}
function oi(r, e) {
  return document.location.href + '.' + e;
}
function Os(r, e, t) {
  var n = document.createElement('option');
  (n.innerHTML = e),
    (n.value = e),
    r.__preset_select.appendChild(n),
    t && (r.__preset_select.selectedIndex = r.__preset_select.length - 1);
}
function No(r, e) {
  e.style.display = r.useLocalStorage ? 'block' : 'none';
}
function rm(r) {
  var e = (r.__save_row = document.createElement('li'));
  U.addClass(r.domElement, 'has-save'),
    r.__ul.insertBefore(e, r.__ul.firstChild),
    U.addClass(e, 'save-row');
  var t = document.createElement('span');
  (t.innerHTML = '&nbsp;'), U.addClass(t, 'button gears');
  var n = document.createElement('span');
  (n.innerHTML = 'Save'), U.addClass(n, 'button'), U.addClass(n, 'save');
  var i = document.createElement('span');
  (i.innerHTML = 'New'), U.addClass(i, 'button'), U.addClass(i, 'save-as');
  var s = document.createElement('span');
  (s.innerHTML = 'Revert'), U.addClass(s, 'button'), U.addClass(s, 'revert');
  var a = (r.__preset_select = document.createElement('select'));
  if (
    (r.load && r.load.remembered
      ? Z.each(r.load.remembered, function (h, d) {
          Os(r, d, d === r.preset);
        })
      : Os(r, Wi, !1),
    U.bind(a, 'change', function () {
      for (var h = 0; h < r.__preset_select.length; h++)
        r.__preset_select[h].innerHTML = r.__preset_select[h].value;
      r.preset = this.value;
    }),
    e.appendChild(a),
    e.appendChild(t),
    e.appendChild(n),
    e.appendChild(i),
    e.appendChild(s),
    zi)
  ) {
    var o = document.getElementById('dg-local-explain'),
      l = document.getElementById('dg-local-storage'),
      c = document.getElementById('dg-save-locally');
    (c.style.display = 'block'),
      localStorage.getItem(oi(r, 'isLocal')) === 'true' &&
        l.setAttribute('checked', 'checked'),
      No(r, o),
      U.bind(l, 'change', function () {
        (r.useLocalStorage = !r.useLocalStorage), No(r, o);
      });
  }
  var u = document.getElementById('dg-new-constructor');
  U.bind(u, 'keydown', function (h) {
    h.metaKey && (h.which === 67 || h.keyCode === 67) && Ui.hide();
  }),
    U.bind(t, 'click', function () {
      (u.innerHTML = JSON.stringify(r.getSaveObject(), void 0, 2)),
        Ui.show(),
        u.focus(),
        u.select();
    }),
    U.bind(n, 'click', function () {
      r.save();
    }),
    U.bind(i, 'click', function () {
      var h = prompt('Enter a new preset name.');
      h && r.saveAs(h);
    }),
    U.bind(s, 'click', function () {
      r.revert();
    });
}
function sm(r) {
  var e = void 0;
  (r.__resize_handle = document.createElement('div')),
    Z.extend(r.__resize_handle.style, {
      width: '6px',
      marginLeft: '-3px',
      height: '200px',
      cursor: 'ew-resize',
      position: 'absolute',
    });
  function t(s) {
    return (
      s.preventDefault(),
      (r.width += e - s.clientX),
      r.onResize(),
      (e = s.clientX),
      !1
    );
  }
  function n() {
    U.removeClass(r.__closeButton, He.CLASS_DRAG),
      U.unbind(window, 'mousemove', t),
      U.unbind(window, 'mouseup', n);
  }
  function i(s) {
    return (
      s.preventDefault(),
      (e = s.clientX),
      U.addClass(r.__closeButton, He.CLASS_DRAG),
      U.bind(window, 'mousemove', t),
      U.bind(window, 'mouseup', n),
      !1
    );
  }
  U.bind(r.__resize_handle, 'mousedown', i),
    U.bind(r.__closeButton, 'mousedown', i),
    r.domElement.insertBefore(
      r.__resize_handle,
      r.domElement.firstElementChild,
    );
}
function Fs(r, e) {
  (r.domElement.style.width = e + 'px'),
    r.__save_row && r.autoPlace && (r.__save_row.style.width = e + 'px'),
    r.__closeButton && (r.__closeButton.style.width = e + 'px');
}
function br(r, e) {
  var t = {};
  return (
    Z.each(r.__rememberedObjects, function (n, i) {
      var s = {},
        a = r.__rememberedObjectIndecesToControllers[i];
      Z.each(a, function (o, l) {
        s[l] = e ? o.initialValue : o.getValue();
      }),
        (t[i] = s);
    }),
    t
  );
}
function am(r) {
  for (var e = 0; e < r.__preset_select.length; e++)
    r.__preset_select[e].value === r.preset &&
      (r.__preset_select.selectedIndex = e);
}
function _l(r) {
  r.length !== 0 &&
    em.call(window, function () {
      _l(r);
    }),
    Z.each(r, function (e) {
      e.updateDisplay();
    });
}
var om = He;
const Xi = new Sp(),
  Dt = new Nt(45, window.innerWidth / window.innerHeight, 0.1, 1e3),
  lm = new Lp(16777215, 1);
Xi.add(lm);
const xn = new ol({ canvas: document.querySelector('#bg') });
xn.shadowMap.enabled = !1;
xn.setPixelRatio(window.devicePixelRatio);
const Rr = new Dp(Dt, xn.domElement);
Dt.position.set(1e-5, 1e-5, 1e-5);
Rr.minDistance = 1e-5;
Rr.maxDistance = 1e-5;
Rr.update();
xn.setSize(window.innerWidth, window.innerHeight);
const In = new Rp(Dt, xn.domElement);
In.addEventListener('dragging-changed', function (r) {
  Rr.enabled = !r.value;
});
Xi.add(In);
const cm = new fn(5, 3, 20, 100),
  um = new Vs({ color: 7611, wireframe: !1 }),
  hm = new Dr(6, 102, 102),
  dm = new Vs({ side: _i }),
  Ys = new ce(hm, dm),
  xl = new ll(),
  fm = new Ap(xl);
Dt.zoom = 0.5;
Dt.updateProjectionMatrix();
function pm() {
  var r = window.location.search.substring(1).split('&'),
    e = {},
    t,
    n;
  for (n in r)
    r[n] !== '' &&
      ((t = r[n].split('=')),
      (e[decodeURIComponent(t[0])] = decodeURIComponent(t[1])));
  return e;
}
const mm = pm();
fm.load(
  mm.img ||
    window.location.origin +
      window.location.pathname.replace('index.html', '') +
      'room.jpg',
  function (r) {
    (r.colorSpace = Gt),
      (r.minFilter = mt),
      (r.generateMipmaps = !1),
      (Ys.material.map = r);
  },
);
xl.onLoad = function () {
  Xi.add(Ys);
};
const Ir = new ce(cm, um);
Ir.castShadow = !0;
Ir.position.y = 15;
Ir.position.x = 30;
const gm = new ji(60, 60),
  _m = new Vs({ color: 16777215, side: _i }),
  vl = new ce(gm, _m);
new Pp(60);
vl.receiveShadow = !0;
vl.rotation.x = 0.5 * Math.PI;
const yl = { torusColor: 7611, wireFrame: !1, zoom: 0.5 },
  js = new om();
js.add(yl, 'zoom', 0.01, 3, 0.01).onChange(r => {
  (Dt.zoom = r), Dt.updateProjectionMatrix();
});
js.add(yl, 'wireFrame').onChange(r => {
  Ys.material.wireframe = r;
});
js.open();
const xm = Ir.uuid,
  Ns = new we();
let dn = 0.5;
function vm(r) {
  r.preventDefault(),
    3 >= dn && dn >= 0.01 && (dn += r.deltaY * -4e-4),
    dn > 3 && (dn = 3),
    dn < 0.01 && (dn = 0.01),
    (Dt.zoom = Math.min(Math.max(0.05, dn), 4).toFixed(2)),
    Dt.updateProjectionMatrix();
}
xn.domElement.onwheel = vm;
window.addEventListener('mousemove', r => {
  (Ns.x = (r.clientX / window.innerWidth) * 2 - 1),
    (Ns.y = -(r.clientY / window.innerHeight) * 2 + 1);
});
window.addEventListener('keydown', r => {
  switch (r.key) {
    case 'ư':
      In.setMode('translate');
      break;
    case 'w':
      In.setMode('translate');
      break;
    case 'e':
      In.setMode('rotate');
      break;
    case 'r':
      In.setMode('scale');
      break;
  }
});
const zo = new ul();
window.addEventListener('resize', () => {
  const r = window.innerWidth,
    e = window.innerHeight,
    t = r / e;
  (Dt.aspect = t), Dt.updateProjectionMatrix(), xn.setSize(r, e);
});
function bl() {
  requestAnimationFrame(bl), zo.setFromCamera(Ns, Dt);
  const r = zo.intersectObjects(Xi.children);
  for (let e in r)
    r[e].object.uuid === xm &&
      window.addEventListener('click', t => {
        In.attach(r[e].object);
      });
  xn.render(Xi, Dt);
}
bl();
