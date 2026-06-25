(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_pos_src_components_printBarcode_PrintBarcode_js"],{

/***/ "./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js"
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPropValid)
/* harmony export */ });
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");


// eslint-disable-next-line no-undef
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */(0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);




/***/ },

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js"
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stylis_min);


/***/ },

/***/ "./resources/pos/src/components/printBarcode/BarcodeShow.js"
/*!******************************************************************!*\
  !*** ./resources/pos/src/components/printBarcode/BarcodeShow.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap-v5 */ "./node_modules/react-bootstrap-v5/lib/esm/Image.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var BarcodeShow = function BarcodeShow(props) {
  var _frontSetting$value;
  var updateProducts = props.updateProducts,
    paperSize = props.paperSize,
    updated = props.updated,
    frontSetting = props.frontSetting,
    allConfigData = props.allConfigData,
    barcodeOptions = props.barcodeOptions;
  var companyName = frontSetting === null || frontSetting === void 0 || (_frontSetting$value = frontSetting.value) === null || _frontSetting$value === void 0 ? void 0 : _frontSetting$value.company_name;
  var currencySymbol = frontSetting && frontSetting.value && frontSetting.value.currency_symbol;
  var loopBarcode = function loopBarcode(product) {
    var indents = [];
    for (var i = 0; i < product.quantity; i++) {
      indents.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "".concat(paperSize.value === 1 ? "col-md-3" :  false || paperSize.value === 2 ? "col-md-4 barcode-main__box-height2" :  false || paperSize.value === 3 ? "col-md-4 barcode-main__box-height3" :  false || paperSize.value === 4 || paperSize.value === 6 ? "col-md-6 barcode-main__box-height2 px-20" :  false || paperSize.value === 5 ? "col-md-4 barcode-main__box-height3 px-13" :  false || paperSize.value === 7 ? "col-md-4 barcode-main__box-height7 px-20" :  false || paperSize.value === 8 ? "col-md-6 barcode-main__box-height7 px-20" : "", " barcode-main__barcode-item barcode-main__barcode-style"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "fw-bolder lh-1",
          children: barcodeOptions.companyName && companyName
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "text-capitalize",
          children: barcodeOptions.productName && product.name
        }), (barcodeOptions === null || barcodeOptions === void 0 ? void 0 : barcodeOptions.price) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "text-capitalize",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
            className: "fw-bolder",
            children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)("product.table.price.column.label"), ":"]
          }), " ", (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.currencySymbolHandling)(allConfigData, currencySymbol, product.product_price)]
        }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__["default"], {
          src: product && product.barcode_url,
          alt: product && product.name,
          className: "w-100"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "fw-bolder",
          children: product && product.code
        })]
      }, i));
    }
    return indents;
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "col-md-12 d-flex d-wrap justify-content-between flex-column overflow-auto",
      children: updated ? updateProducts ? updateProducts.map(function (product, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "barcode-main",
          id: "demo",
          children: loopBarcode(product)
        }, index);
      }) : "" : ""
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BarcodeShow);

/***/ },

/***/ "./resources/pos/src/components/printBarcode/PrintBarcode.js"
/*!*******************************************************************!*\
  !*** ./resources/pos/src/components/printBarcode/PrintBarcode.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap-v5 */ "./node_modules/react-bootstrap-v5/lib/esm/Button.js");
/* harmony import */ var react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap-v5 */ "./node_modules/react-bootstrap-v5/lib/esm/Row.js");
/* harmony import */ var react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap-v5 */ "./node_modules/react-bootstrap-v5/lib/esm/Table.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-to-print */ "./node_modules/react-to-print/lib/index.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _MasterLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../MasterLayout */ "./resources/pos/src/components/MasterLayout.js");
/* harmony import */ var _shared_tab_title_TabTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/tab-title/TabTitle */ "./resources/pos/src/shared/tab-title/TabTitle.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/select/reactSelect */ "./resources/pos/src/shared/select/reactSelect.js");
/* harmony import */ var _store_action_warehouseAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/action/warehouseAction */ "./resources/pos/src/store/action/warehouseAction.js");
/* harmony import */ var _store_action_productAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/action/productAction */ "./resources/pos/src/store/action/productAction.js");
/* harmony import */ var _shared_prepareArray_preparePurchaseArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/prepareArray/preparePurchaseArray */ "./resources/pos/src/shared/prepareArray/preparePurchaseArray.js");
/* harmony import */ var _PrintTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./PrintTable */ "./resources/pos/src/components/printBarcode/PrintTable.js");
/* harmony import */ var _shared_option_lists_paperSize_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/option-lists/paperSize.json */ "./resources/pos/src/shared/option-lists/paperSize.json");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../store/action/toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _BarcodeShow__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./BarcodeShow */ "./resources/pos/src/components/printBarcode/BarcodeShow.js");
/* harmony import */ var _PrintButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./PrintButton */ "./resources/pos/src/components/printBarcode/PrintButton.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var _shared_components_product_cart_search_ProductSearch__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../shared/components/product-cart/search/ProductSearch */ "./resources/pos/src/shared/components/product-cart/search/ProductSearch.js");
/* harmony import */ var _shared_components_loaders_TopProgressBar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../shared/components/loaders/TopProgressBar */ "./resources/pos/src/shared/components/loaders/TopProgressBar.js");
/* harmony import */ var _store_action_frontSettingAction__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../store/action/frontSettingAction */ "./resources/pos/src/store/action/frontSettingAction.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
























var PrintBarcode = function PrintBarcode() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
      return state;
    }),
    warehouses = _useSelector.warehouses,
    products = _useSelector.products,
    purchaseProducts = _useSelector.purchaseProducts,
    frontSetting = _useSelector.frontSetting,
    allConfigData = _useSelector.allConfigData,
    _useSelector$customPr = _useSelector.customProducts,
    customProducts = _useSelector$customPr === void 0 ? (0,_shared_prepareArray_preparePurchaseArray__WEBPACK_IMPORTED_MODULE_13__.preparePurchaseProductArray)(products, true) : _useSelector$customPr;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      warehouse_id: '',
      paperSizeValue: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    printBarcodeValue = _useState2[0],
    setPrintBarcodeValue = _useState2[1];
  var printBarcodeQuantity = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
    return state.printQuantity;
  });
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    updateProducts = _useState4[0],
    setUpdateProducts = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    print = _useState6[0],
    setPrint = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isPrintShow = _useState8[0],
    setIsPrintShow = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState0 = _slicedToArray(_useState9, 2),
    quantity = _useState0[0],
    setQuantity = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState10 = _slicedToArray(_useState1, 2),
    companyName = _useState10[0],
    setCompanyName = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState12 = _slicedToArray(_useState11, 2),
    productName = _useState12[0],
    setProductName = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState14 = _slicedToArray(_useState13, 2),
    price = _useState14[0],
    setPrice = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      warehouse_id: '',
      paperSizeValue: ''
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    errors = _useState16[0],
    setErrors = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    updated = _useState18[0],
    setUpdated = _useState18[1];
  var componentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_store_action_warehouseAction__WEBPACK_IMPORTED_MODULE_11__.fetchAllWarehouses)());
    dispatch((0,_store_action_productAction__WEBPACK_IMPORTED_MODULE_12__.fetchAllProducts)());
  }, [quantity, purchaseProducts]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_store_action_frontSettingAction__WEBPACK_IMPORTED_MODULE_24__.fetchFrontSetting)());
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (printBarcodeValue) {
      if (updateProducts.length) {
        setPrint(preparePrint);
      }
    }
  }, [updateProducts, printBarcodeValue, printBarcodeQuantity]);
  var onWarehouseChange = function onWarehouseChange(obj) {
    setPrintBarcodeValue(function (inputs) {
      return _objectSpread(_objectSpread({}, inputs), {}, {
        warehouse_id: obj
      });
    });
  };
  var onPaperSizeChange = function onPaperSizeChange(obj) {
    setPrintBarcodeValue(function (inputs) {
      return _objectSpread(_objectSpread({}, inputs), {}, {
        paperSizeValue: obj
      });
    });
    setIsPrintShow(true);
  };
  var updatedQty = function updatedQty(qty) {
    setQuantity(qty);
  };
  var handleValidation = function handleValidation() {
    var errorss = {};
    var isValid = false;
    if (!printBarcodeValue.warehouse_id) {
      errorss['warehouse_id'] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('purchase.select.warehouse.validate.label');
    } else if (updateProducts.length === 0) {
      dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_17__.addToast)({
        text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('purchase.product-list.validate.message'),
        type: _constants__WEBPACK_IMPORTED_MODULE_16__.toastType.ERROR
      }));
    } else if (!printBarcodeValue.paperSizeValue) {
      errorss['paperSizeValue'] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('globally.paper.size.validate.label');
    } else {
      isValid = true;
    }
    setErrors(errorss);
    return isValid;
  };
  var onResetClick = function onResetClick() {
    setUpdateProducts([]);
    setUpdated(false);
    setPrintBarcodeValue({
      warehouse_id: '',
      paperSizeValue: ''
    });
    setErrors({
      warehouse_id: '',
      paperSizeValue: ''
    });
  };
  var printPaymentReceiptPdf = function printPaymentReceiptPdf(event) {
    event.preventDefault();
    var valid = handleValidation();
    if (isPrintShow === true && valid) {
      document.getElementById('printReceipt').click();
    }
  };
  var handlePrint = (0,react_to_print__WEBPACK_IMPORTED_MODULE_6__.useReactToPrint)({
    content: function content() {
      return componentRef.current;
    },
    pageStyle: "\n        @page {\n        size: auto;\n         margin: 0;\n        }\n\n        body {\n        margin:0;\n        padding:0;\n        background: transparent !important;\n        -webkit-print-color-adjust: exact;\n        }\n  "
  });
  var preparePrint = function preparePrint() {
    var formValue = {
      products: updateProducts,
      paperSize: printBarcodeValue.paperSizeValue,
      printBarcodeQuantity: printBarcodeQuantity
    };
    return formValue;
  };

  //on update function
  var onUpdateClick = function onUpdateClick(event) {
    event.preventDefault();
    var valid = handleValidation();
    if (valid) {
      setIsPrintShow(true);
      setUpdated(true);
    }
  };

  // print barcode
  var loadPrintBlock = function loadPrintBlock() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("div", {
      className: "d-none",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("button", {
        id: "printReceipt",
        onClick: handlePrint,
        children: "Print this out!"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_PrintButton__WEBPACK_IMPORTED_MODULE_19__["default"], {
        ref: componentRef,
        frontSetting: frontSetting,
        allConfigData: allConfigData,
        barcodeOptions: barcodeOptions,
        updateProducts: print
      })]
    });
  };
  var handleChangedCompany = function handleChangedCompany(event, targetValue) {
    var checked = event.target.checked;
    if (targetValue === 1) {
      setCompanyName(checked);
    }
    if (targetValue === 2) {
      setProductName(checked);
    }
    if (targetValue === 3) {
      setPrice(checked);
    }
  };
  var barcodeOptions = {
    companyName: companyName,
    productName: productName,
    price: price
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_MasterLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_shared_components_loaders_TopProgressBar__WEBPACK_IMPORTED_MODULE_23__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_shared_tab_title_TabTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
      title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.placeholderText)('print.barcode.title')
    }), print.length !== 0 ? loadPrintBlock() : '', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("div", {
      className: "card card-body",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
        md: 4,
        className: "ml-auto mb-3 col-12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_10__["default"], {
          name: "warehouse_id",
          data: warehouses,
          onChange: onWarehouseChange,
          title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('warehouse.title'),
          errors: errors['warehouse_id'],
          defaultValue: printBarcodeValue.warehouse_id,
          value: printBarcodeValue.warehouse_id,
          placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.placeholderText)('purchase.select.warehouse.placeholder.label')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
        sm: 12,
        className: "mb-10",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("label", {
          className: "form-label",
          children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('dashboard.stockAlert.product.label'), ":"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_shared_components_product_cart_search_ProductSearch__WEBPACK_IMPORTED_MODULE_22__["default"], {
          values: printBarcodeValue,
          products: products,
          isAllProducts: true,
          updateProducts: updateProducts,
          handleValidation: handleValidation,
          setUpdateProducts: setUpdateProducts,
          customProducts: customProducts
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("div", {
        className: "col-12 md-12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_3__["default"], {
          responsive: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("th", {
                children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('dashboard.stockAlert.product.label')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("th", {
                children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('purchase.order-item.table.qty.column.label')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("th", {
                children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('react-data-table.action.column.label')
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_PrintTable__WEBPACK_IMPORTED_MODULE_14__["default"], {
            printBarcodeValue: printBarcodeValue,
            updatedQty: updatedQty,
            updateProducts: updateProducts,
            setUpdateProducts: setUpdateProducts
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: "ml-auto mb-5 col-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_10__["default"], {
            name: "paperSizeValue",
            data: _shared_option_lists_paperSize_json__WEBPACK_IMPORTED_MODULE_15__,
            onChange: onPaperSizeChange,
            title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('paper.size.title'),
            errors: errors['paperSizeValue'],
            defaultValue: printBarcodeValue.paperSizeValue,
            value: printBarcodeValue.paperSizeValue,
            placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.placeholderText)('paper.size.placeholder.label')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: "d-flex col-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("div", {
            className: "mt-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("div", {
              children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)("print-barcode.show-company.label")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("div", {
              className: "d-flex align-items-center mt-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("label", {
                className: "form-check form-switch form-switch-sm",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("input", {
                  type: "checkbox",
                  checked: companyName,
                  name: "Currency_icon_Right_side",
                  onChange: function onChange(event) {
                    return handleChangedCompany(event, 1);
                  },
                  className: "me-3 form-check-input cursor-pointer"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("div", {
                  className: "control__indicator"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("span", {
                className: "switch-slider",
                "data-checked": "\u2713",
                "data-unchecked": "\u2715",
                children: errors['Currency_icon_Right_side'] ? errors['Currency_icon_Right_side'] : null
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("div", {
            className: "mt-3 ms-10 mb-5",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("div", {
              children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)("print-barcode.show-product-name.label")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("div", {
              className: "align-items-center mt-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("label", {
                className: "form-check form-switch form-switch-sm",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("input", {
                  type: "checkbox",
                  checked: productName,
                  name: "Currency_icon_Right_side",
                  onChange: function onChange(event) {
                    return handleChangedCompany(event, 2);
                  },
                  className: "me-3 form-check-input cursor-pointer"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("div", {
                  className: "control__indicator"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("span", {
                className: "switch-slider",
                "data-checked": "\u2713",
                "data-unchecked": "\u2715",
                children: errors['Currency_icon_Right_side'] ? errors['Currency_icon_Right_side'] : null
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("div", {
            className: "mt-3 ms-10",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("div", {
              children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)("print-barcode.show-price.label")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("div", {
              className: "d-flex align-items-center mt-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("label", {
                className: "form-check form-switch form-switch-sm",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("input", {
                  type: "checkbox",
                  checked: price,
                  name: "Currency_icon_Right_side",
                  onChange: function onChange(event) {
                    return handleChangedCompany(event, 3);
                  },
                  className: "me-3 form-check-input cursor-pointer"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("div", {
                  className: "control__indicator"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("span", {
                className: "switch-slider",
                "data-checked": "\u2713",
                "data-unchecked": "\u2715",
                children: errors['Currency_icon_Right_side'] ? errors['Currency_icon_Right_side'] : null
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("div", {
        className: "d-xl-flex align-items-center justify-content-between",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("div", {
          className: "d-xl-flex align-items-center justify-content-between",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("button", {
            type: "button",
            className: "btn btn-success me-5 text-white mb-2",
            onClick: function onClick(event) {
              return onUpdateClick(event);
            },
            children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('preview.title'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_20__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_21__.faMoneyBill,
              className: "ms-2"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("button", {
            type: "button",
            className: "btn btn-danger me-5 mb-2",
            onClick: function onClick() {
              return onResetClick();
            },
            children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('date-picker.filter.reset.label'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_20__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_21__.faCreditCard,
              className: "ms-2"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__["default"], {
            type: "button",
            variant: "primary",
            className: "btn btn-primary me-5 mb-2",
            onClick: function onClick(e) {
              return printPaymentReceiptPdf(e);
            },
            children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('print.title'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_20__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_21__.faWallet,
              className: "ms-2"
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_BarcodeShow__WEBPACK_IMPORTED_MODULE_18__["default"], {
        updateProducts: updateProducts,
        barcodeOptions: barcodeOptions,
        frontSetting: frontSetting,
        paperSize: printBarcodeValue.paperSizeValue,
        updated: updated,
        allConfigData: allConfigData
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrintBarcode);

/***/ },

/***/ "./resources/pos/src/components/printBarcode/PrintButton.js"
/*!******************************************************************!*\
  !*** ./resources/pos/src/components/printBarcode/PrintButton.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap-v5 */ "./node_modules/react-bootstrap-v5/lib/esm/Image.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }




var PrintButton = /*#__PURE__*/function (_React$PureComponent) {
  function PrintButton() {
    _classCallCheck(this, PrintButton);
    return _callSuper(this, PrintButton, arguments);
  }
  _inherits(PrintButton, _React$PureComponent);
  return _createClass(PrintButton, [{
    key: "render",
    value: function render() {
      var _frontSetting$value;
      var print = this.props.updateProducts;
      var paperSize = print.paperSize;
      var frontSetting = this.props.frontSetting;
      var allConfigData = this.props.allConfigData;
      var barcodeOptions = this.props.barcodeOptions;
      var companyName = frontSetting === null || frontSetting === void 0 || (_frontSetting$value = frontSetting.value) === null || _frontSetting$value === void 0 ? void 0 : _frontSetting$value.company_name;
      var currencySymbol = frontSetting && frontSetting.value && frontSetting.value.currency_symbol;
      function printFunction(product, index) {
        var indents = [];
        for (var i = 0; i < product.quantity; i++) {
          indents.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "".concat(paperSize.value === 1 ? "print-main__print1" :  false || paperSize.value === 2 ? "print-main__print2" :  false || paperSize.value === 3 ? "print-main__print3" :  false || paperSize.value === 4 || paperSize.value === 6 ? "print-main__print4" :  false || paperSize.value === 5 ? "print-main__print5" :  false || paperSize.value === 7 ? "print-main__print7" :  false || paperSize.value === 8 ? "print-main__print8" : "", " barcode-main__barcode-item barcode-main__barcode-style"),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "fw-bolder lh-1",
              children: barcodeOptions.companyName && companyName
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-capitalize",
              children: barcodeOptions.productName && product.name
            }), (barcodeOptions === null || barcodeOptions === void 0 ? void 0 : barcodeOptions.price) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "text-capitalize",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                className: "fw-bolder",
                children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)("product.table.price.column.label"), ":"]
              }), " ", (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.currencySymbolHandling)(allConfigData, currencySymbol, product.product_price)]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__["default"], {
              src: product && product.barcode_url,
              alt: product && product.name,
              className: "w-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "fw-bolder",
              children: product && product.code
            })]
          }, i));
        }
        return indents;
      }
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "p-4",
        children: print.products && print.products.map(function (product, index) {
          return printFunction(product, index);
        })
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrintButton);

/***/ },

/***/ "./resources/pos/src/components/printBarcode/PrintTable.js"
/*!*****************************************************************!*\
  !*** ./resources/pos/src/components/printBarcode/PrintTable.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }






var PrintTable = function PrintTable(props) {
  var setUpdateProducts = props.setUpdateProducts,
    updateProducts = props.updateProducts,
    printBarcodeValue = props.printBarcodeValue;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10),
    _useState2 = _slicedToArray(_useState, 2),
    qty = _useState2[0],
    setQty = _useState2[1];
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    productId = _useState4[0],
    setProductId = _useState4[1];
  var handleChange = function handleChange(e, singleProduct) {
    setQty(e.target.value);
    setProductId(singleProduct);
    dispatch({
      type: "UPDATE_PRINT_QTY",
      payload: e.target.value
    });
  };
  var onDeleteCartItem = function onDeleteCartItem(id) {
    setUpdateProducts(function (updateProducts) {
      return updateProducts.filter(function (item) {
        return item.id !== id;
      });
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var findProduct = updateProducts.find(function (items) {
      return items.id === productId;
    });
    setUpdateProducts(function (updateProducts) {
      return updateProducts.map(function (item) {
        return item.id === (findProduct === null || findProduct === void 0 ? void 0 : findProduct.id) ? _objectSpread(_objectSpread({}, item), {}, {
          quantity: Number(qty)
        }) : item;
      });
    });
  }, [qty]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("tbody", {
    children: printBarcodeValue.warehouse_id && updateProducts && updateProducts.length >= 1 ? updateProducts.map(function (singleProduct, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
        className: "align-middle",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
          className: "ps-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
            className: "fs-6 mb-1",
            children: singleProduct.code
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "d-flex align-items-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "badge bg-light-success",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                children: singleProduct.name
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
            "aria-label": "Product Quantity",
            className: "form-control width-320",
            onKeyPress: function onKeyPress(event) {
              return (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_1__.decimalValidate)(event);
            },
            value: singleProduct.quantity,
            onChange: function onChange(e) {
              return handleChange(e, singleProduct.id);
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
          className: "text-start",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            className: "btn px-4 text-danger fs-3",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTrash,
              onClick: function onClick() {
                return onDeleteCartItem(singleProduct.id);
              }
            })
          })
        })]
      }, index);
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("tr", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
        colSpan: 8,
        className: "fs-5 px-3 py-6 custom-text-center",
        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_1__.getFormattedMessage)('sale.product.table.no-data.label')
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrintTable);

/***/ },

/***/ "./resources/pos/src/config/apiConfigWthFormData.js"
/*!**********************************************************!*\
  !*** ./resources/pos/src/config/apiConfigWthFormData.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axiosInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./axiosInterceptor */ "./resources/pos/src/config/axiosInterceptor.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environment */ "./resources/pos/src/config/environment.js");



var wampServer = _environment__WEBPACK_IMPORTED_MODULE_2__.environment.URL + '/api/';
var axiosApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: wampServer
});
_axiosInterceptor__WEBPACK_IMPORTED_MODULE_1__["default"].setupInterceptors(axiosApi, false, true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosApi);

/***/ },

/***/ "./resources/pos/src/shared/apiHelper.js"
/*!***********************************************!*\
  !*** ./resources/pos/src/shared/apiHelper.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   apiRequest: () => (/* binding */ apiRequest)
/* harmony export */ });
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/action/toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./resources/pos/src/constants/index.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


var apiRequest = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(dispatch, requestFn, onSuccess) {
    var errorMsg,
      response,
      _error$response,
      message,
      _args = arguments,
      _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          errorMsg = _args.length > 3 && _args[3] !== undefined ? _args[3] : 'Something went wrong';
          _context.p = 1;
          _context.n = 2;
          return requestFn();
        case 2:
          response = _context.v;
          if (onSuccess) onSuccess(response);
          return _context.a(2, response);
        case 3:
          _context.p = 3;
          _t = _context.v;
          message = (_t === null || _t === void 0 || (_error$response = _t.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || errorMsg;
          dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_0__.addToast)({
            text: message,
            type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
          }));
          return _context.a(2, null);
      }
    }, _callee, null, [[1, 3]]);
  }));
  return function apiRequest(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/***/ },

/***/ "./resources/pos/src/shared/components/product-cart/search/ProductSearch.js"
/*!**********************************************************************************!*\
  !*** ./resources/pos/src/shared/components/product-cart/search/ProductSearch.js ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_search_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-search-autocomplete */ "./node_modules/react-search-autocomplete/dist/index.js");
/* harmony import */ var react_search_autocomplete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_search_autocomplete__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../store/action/toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var _store_action_purchaseProductAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../store/action/purchaseProductAction */ "./resources/pos/src/store/action/purchaseProductAction.js");
/* harmony import */ var _sharedMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }










var ProductSearch = function ProductSearch(props) {
  var values = props.values,
    products = props.products,
    updateProducts = props.updateProducts,
    setUpdateProducts = props.setUpdateProducts,
    customProducts = props.customProducts,
    searchPurchaseProduct = props.searchPurchaseProduct,
    handleValidation = props.handleValidation,
    isAllProducts = props.isAllProducts;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    searchString = _useState2[0],
    setSearchString = _useState2[1];
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var filterProducts = isAllProducts && values.warehouse_id ? products.map(function (item) {
    return {
      name: item.attributes.name,
      code: item.attributes.code,
      id: item.id
    };
  }) : values.warehouse_id && products.filter(function (qty) {
    return qty && qty.attributes && qty.attributes.stock && qty.attributes.stock.quantity > 0;
  }).map(function (item) {
    return {
      name: item.attributes.name,
      code: item.attributes.code,
      id: item.id
    };
  });
  var onProductSearch = function onProductSearch(code) {
    if (!values.warehouse_id) {
      handleValidation();
    } else {
      setSearchString(code);
      var newId = products.filter(function (item) {
        return item.attributes.code === code || item.attributes.code === code.code;
      }).map(function (item) {
        return item.id;
      });
      var finalIdArrays = customProducts.map(function (id) {
        return id.product_id;
      });
      var finalId = finalIdArrays.filter(function (finalIdArray) {
        return finalIdArray === newId[0];
      });
      if (finalId[0] !== undefined) {
        if (updateProducts.find(function (exitId) {
          return exitId.product_id === finalId[0];
        })) {
          dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
            text: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)('globally.product-already-added.validate.message'),
            type: _constants__WEBPACK_IMPORTED_MODULE_4__.toastType.ERROR
          }));
        } else {
          searchPurchaseProduct(newId[0]);
          var pushArray = _toConsumableArray(customProducts);
          if (updateProducts.filter(function (product) {
            return product.code === code || product.code === code.code;
          }).length > 0) {
            setUpdateProducts(function (updateProducts) {
              return updateProducts.map(function (item) {
                return item;
              });
            });
          } else {
            var newProduct = pushArray.find(function (element) {
              return element.product_id === finalId[0];
            });
            setUpdateProducts([].concat(_toConsumableArray(updateProducts), [newProduct]));
          }
        }
        removeSearchClass();
        setSearchString("");
      }
    }
  };
  var handleOnSearch = function handleOnSearch(string) {
    onProductSearch(string);
  };
  var handleOnSelect = function handleOnSelect(result) {
    onProductSearch(result);
  };
  var formatResult = function formatResult(item) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", {
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      children: [item.code, " (", item.name, ")"]
    });
  };
  var removeSearchClass = function removeSearchClass() {
    var html = document.getElementsByClassName("custom-search")[0].firstChild.firstChild.lastChild;
    html.style.display = 'none';
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: "position-relative custom-search",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_search_autocomplete__WEBPACK_IMPORTED_MODULE_2__.ReactSearchAutocomplete, {
      items: filterProducts,
      onSearch: handleOnSearch,
      inputSearchString: searchString,
      fuseOptions: {
        keys: ['code', 'name']
      },
      resultStringKeyName: "code",
      placeholder: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.placeholderText)('globally.search.field.label'),
      onSelect: handleOnSelect,
      formatResult: formatResult,
      showIcon: false,
      showClear: false
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faSearch,
      className: "d-flex align-items-center top-0 bottom-0 react-search-icon my-auto text-gray-600 position-absolute"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, {
  searchPurchaseProduct: _store_action_purchaseProductAction__WEBPACK_IMPORTED_MODULE_5__.searchPurchaseProduct
})(ProductSearch));

/***/ },

/***/ "./resources/pos/src/shared/prepareArray/preparePurchaseArray.js"
/*!***********************************************************************!*\
  !*** ./resources/pos/src/shared/prepareArray/preparePurchaseArray.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   preparePurchaseProductArray: () => (/* binding */ preparePurchaseProductArray)
/* harmony export */ });
var preparePurchaseProductArray = function preparePurchaseProductArray(products, isBarcode) {
  var purchaseProductRowArray = [];
  products.forEach(function (product) {
    var _product$attributes$p;
    purchaseProductRowArray.push({
      name: product.attributes.name,
      code: product.attributes.code,
      barcode_url: product.attributes.barcode_url,
      stock: product.attributes.stock ? product.attributes.stock.quantity : "",
      short_name: (_product$attributes$p = product.attributes.purchase_unit_name) === null || _product$attributes$p === void 0 ? void 0 : _product$attributes$p.short_name,
      product_unit: product.attributes.product_unit,
      product_id: product.id,
      product_cost: product.attributes.product_cost,
      net_unit_cost: product.attributes.product_cost,
      fix_net_unit: product.attributes.product_cost,
      tax_type: product.attributes.tax_type ? product.attributes.tax_type : 1,
      tax_value: product.attributes.order_tax ? product.attributes.order_tax : 0.00,
      tax_amount: 0.00,
      discount_type: '2',
      discount_value: 0.00,
      discount_amount: 0.00,
      purchase_unit: product.attributes.purchase_unit,
      quantity: isBarcode ? 10 : 1,
      sub_total: 0.00,
      id: product.id,
      purchase_item_id: '',
      product_price: product.attributes.product_price
    });
  });
  return purchaseProductRowArray;
};

/***/ },

/***/ "./resources/pos/src/store/action/importProductApiAction.js"
/*!******************************************************************!*\
  !*** ./resources/pos/src/store/action/importProductApiAction.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   callImportProductApi: () => (/* binding */ callImportProductApi)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");

var callImportProductApi = function callImportProductApi(isCall) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.constants.CALL_IMPORT_PRODUCT_API,
    payload: isCall
  };
};

/***/ },

/***/ "./resources/pos/src/store/action/productAction.js"
/*!*********************************************************!*\
  !*** ./resources/pos/src/store/action/productAction.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addImportProduct: () => (/* binding */ addImportProduct),
/* harmony export */   addMainProduct: () => (/* binding */ addMainProduct),
/* harmony export */   addProduct: () => (/* binding */ addProduct),
/* harmony export */   clearMainProduct: () => (/* binding */ clearMainProduct),
/* harmony export */   deleteMainProduct: () => (/* binding */ deleteMainProduct),
/* harmony export */   deleteProduct: () => (/* binding */ deleteProduct),
/* harmony export */   editMainProduct: () => (/* binding */ editMainProduct),
/* harmony export */   editProduct: () => (/* binding */ editProduct),
/* harmony export */   fetchAllMainProducts: () => (/* binding */ fetchAllMainProducts),
/* harmony export */   fetchAllProducts: () => (/* binding */ fetchAllProducts),
/* harmony export */   fetchMainProduct: () => (/* binding */ fetchMainProduct),
/* harmony export */   fetchProduct: () => (/* binding */ fetchProduct),
/* harmony export */   fetchProducts: () => (/* binding */ fetchProducts),
/* harmony export */   fetchProductsByWarehouse: () => (/* binding */ fetchProductsByWarehouse)
/* harmony export */ });
/* harmony import */ var _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/apiConfigWthFormData */ "./resources/pos/src/config/apiConfigWthFormData.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var _shared_apiHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/apiHelper */ "./resources/pos/src/shared/apiHelper.js");
/* harmony import */ var _totalRecordAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./totalRecordAction */ "./resources/pos/src/store/action/totalRecordAction.js");
/* harmony import */ var _shared_requestParam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/requestParam */ "./resources/pos/src/shared/requestParam.js");
/* harmony import */ var _loadingAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadingAction */ "./resources/pos/src/store/action/loadingAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _saveButtonAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./saveButtonAction */ "./resources/pos/src/store/action/saveButtonAction.js");
/* harmony import */ var _importProductApiAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./importProductApiAction */ "./resources/pos/src/store/action/importProductApiAction.js");
/* harmony import */ var _toastAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./toastAction */ "./resources/pos/src/store/action/toastAction.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }










var buildUrl = function buildUrl(baseUrl, filter) {
  if (!_.isEmpty(filter) && (filter.page || filter.pageSize || filter.search || filter.order_By || filter.created_at)) {
    return baseUrl + (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_4__["default"])(filter, null, null, null, baseUrl);
  }
  return baseUrl;
};
var fetchProducts = function fetchProducts() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(dispatch) {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (isLoading) dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(true));
            _context.n = 1;
            return (0,_shared_apiHelper__WEBPACK_IMPORTED_MODULE_2__.apiRequest)(dispatch, function () {
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_0__["default"].get(buildUrl(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.PRODUCTS, filter));
            }, function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.productActionType.FETCH_PRODUCTS,
                payload: response.data.data
              });
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_3__.setTotalRecord)(response.data.meta.total !== undefined && response.data.meta.total >= 0 ? response.data.meta.total : response.data.data.total));
            });
          case 1:
            if (isLoading) dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var fetchProduct = function fetchProduct(productId, singleProduct) {
  var isLoading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(dispatch) {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            if (isLoading) dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(true));
            _context2.n = 1;
            return (0,_shared_apiHelper__WEBPACK_IMPORTED_MODULE_2__.apiRequest)(dispatch, function () {
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_0__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.PRODUCTS + "/" + productId, singleProduct);
            }, function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.productActionType.FETCH_PRODUCT,
                payload: response.data.data
              });
            });
          case 1:
            if (isLoading) dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));
          case 2:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var addProduct = function addProduct(product, navigate) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(dispatch) {
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(true));
            _context3.n = 1;
            return (0,_shared_apiHelper__WEBPACK_IMPORTED_MODULE_2__.apiRequest)(dispatch, function () {
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_0__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.PRODUCTS, product);
            }, function () {
              dispatch(fetchMainProduct(product.get('main_product_id'), false));
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_9__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("product.success.create.message")
              }));
            });
          case 1:
            dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(false));
          case 2:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var editProduct = function editProduct(productId, product, navigate) {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(dispatch) {
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(true));
            _context4.n = 1;
            return (0,_shared_apiHelper__WEBPACK_IMPORTED_MODULE_2__.apiRequest)(dispatch, function () {
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_0__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.PRODUCTS + "/" + productId, product);
            }, function () {
              dispatch(fetchMainProduct(product.get('main_product_id'), false));
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_9__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("product.success.edit.message")
              }));
            });
          case 1:
            dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(false));
          case 2:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};
var deleteProduct = function deleteProduct(productId, mainProductId) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(dispatch) {
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _context5.n = 1;
            return (0,_shared_apiHelper__WEBPACK_IMPORTED_MODULE_2__.apiRequest)(dispatch, function () {
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.PRODUCTS + "/" + productId);
            }, function () {
              dispatch(fetchMainProduct(mainProductId, false));
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_9__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("product.success.delete.message")
              }));
            });
          case 1:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }();
};
var fetchAllProducts = function fetchAllProducts() {
  return /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(dispatch) {
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            _context6.n = 1;
            return (0,_shared_apiHelper__WEBPACK_IMPORTED_MODULE_2__.apiRequest)(dispatch, function () {
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_0__["default"].get("products?page[size]=0");
            }, function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.productActionType.FETCH_ALL_PRODUCTS,
                payload: response.data.data
              });
            });
          case 1:
            return _context6.a(2);
        }
      }, _callee6);
    }));
    return function (_x6) {
      return _ref6.apply(this, arguments);
    };
  }();
};
var fetchProductsByWarehouse = function fetchProductsByWarehouse(id) {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(dispatch) {
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            _context7.n = 1;
            return (0,_shared_apiHelper__WEBPACK_IMPORTED_MODULE_2__.apiRequest)(dispatch, function () {
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_0__["default"].get("products?page[size]=0&warehouse_id=".concat(id));
            }, function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.productActionType.FETCH_PRODUCTS_BY_WAREHOUSE,
                payload: response.data.data
              });
            });
          case 1:
            return _context7.a(2);
        }
      }, _callee7);
    }));
    return function (_x7) {
      return _ref7.apply(this, arguments);
    };
  }();
};
var addImportProduct = function addImportProduct(importProduct) {
  return /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(dispatch) {
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            _context8.n = 1;
            return (0,_shared_apiHelper__WEBPACK_IMPORTED_MODULE_2__.apiRequest)(dispatch, function () {
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_0__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.IMPORT_PRODUCT, importProduct);
            }, function () {
              dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));
              dispatch((0,_importProductApiAction__WEBPACK_IMPORTED_MODULE_8__.callImportProductApi)(true));
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_9__.addToast)({
                text: "Product Import Create Success"
              }));
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_3__.addInToTotalRecord)(1));
            });
          case 1:
            return _context8.a(2);
        }
      }, _callee8);
    }));
    return function (_x8) {
      return _ref8.apply(this, arguments);
    };
  }();
};
var fetchAllMainProducts = function fetchAllMainProducts() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(dispatch) {
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            if (isLoading) dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(true));
            _context9.n = 1;
            return (0,_shared_apiHelper__WEBPACK_IMPORTED_MODULE_2__.apiRequest)(dispatch, function () {
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_0__["default"].get(buildUrl(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.MAIN_PRODUCTS, filter));
            }, function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.productActionType.FETCH_ALL_MAIN_PRODUCTS,
                payload: response.data.data
              });
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_3__.setTotalRecord)(response.data.meta.total !== undefined && response.data.meta.total >= 0 ? response.data.meta.total : response.data.data.total));
            });
          case 1:
            if (isLoading) dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));
          case 2:
            return _context9.a(2);
        }
      }, _callee9);
    }));
    return function (_x9) {
      return _ref9.apply(this, arguments);
    };
  }();
};
var deleteMainProduct = function deleteMainProduct(productId) {
  return /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(dispatch) {
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
          case 0:
            _context0.n = 1;
            return (0,_shared_apiHelper__WEBPACK_IMPORTED_MODULE_2__.apiRequest)(dispatch, function () {
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.MAIN_PRODUCTS + "/" + productId);
            }, function () {
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_3__.removeFromTotalRecord)(1));
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.productActionType.DELETE_MAIN_PRODUCT,
                payload: productId
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_9__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("product.success.delete.message")
              }));
            });
          case 1:
            return _context0.a(2);
        }
      }, _callee0);
    }));
    return function (_x0) {
      return _ref0.apply(this, arguments);
    };
  }();
};
var fetchMainProduct = function fetchMainProduct(productId) {
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(dispatch) {
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.n) {
          case 0:
            if (isLoading) dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(true));
            _context1.n = 1;
            return (0,_shared_apiHelper__WEBPACK_IMPORTED_MODULE_2__.apiRequest)(dispatch, function () {
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_0__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.MAIN_PRODUCTS + "/" + productId);
            }, function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.productActionType.FETCH_MAIN_PRODUCT,
                payload: response.data.data
              });
            });
          case 1:
            if (isLoading) dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));
          case 2:
            return _context1.a(2);
        }
      }, _callee1);
    }));
    return function (_x1) {
      return _ref1.apply(this, arguments);
    };
  }();
};
var clearMainProduct = function clearMainProduct() {
  return function (dispatch) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__.productActionType.CLEAR_MAIN_PRODUCT
    });
  };
};
var addMainProduct = function addMainProduct(product, navigate) {
  return /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(dispatch) {
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.n) {
          case 0:
            dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(true));
            _context10.n = 1;
            return (0,_shared_apiHelper__WEBPACK_IMPORTED_MODULE_2__.apiRequest)(dispatch, function () {
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_0__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.MAIN_PRODUCTS, product);
            }, function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.productActionType.ADD_MAIN_PRODUCT,
                payload: response.data.data
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_9__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("product.success.create.message")
              }));
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_3__.addInToTotalRecord)(1));
              navigate("/app/products");
            });
          case 1:
            dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(false));
          case 2:
            return _context10.a(2);
        }
      }, _callee10);
    }));
    return function (_x10) {
      return _ref10.apply(this, arguments);
    };
  }();
};
var editMainProduct = function editMainProduct(productId, product, navigate) {
  return /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(dispatch) {
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.n) {
          case 0:
            dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(true));
            _context11.n = 1;
            return (0,_shared_apiHelper__WEBPACK_IMPORTED_MODULE_2__.apiRequest)(dispatch, function () {
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_0__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.MAIN_PRODUCTS + "/" + productId, product);
            }, function () {
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_9__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("product.success.edit.message")
              }));
              navigate("/app/products");
            });
          case 1:
            dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(false));
          case 2:
            return _context11.a(2);
        }
      }, _callee11);
    }));
    return function (_x11) {
      return _ref11.apply(this, arguments);
    };
  }();
};

/***/ },

/***/ "./resources/pos/src/store/action/purchaseProductAction.js"
/*!*****************************************************************!*\
  !*** ./resources/pos/src/store/action/purchaseProductAction.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   searchPurchaseProduct: () => (/* binding */ searchPurchaseProduct)
/* harmony export */ });
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/pos/src/config/apiConfig.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var _toastAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toastAction */ "./resources/pos/src/store/action/toastAction.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



var searchPurchaseProduct = function searchPurchaseProduct(productId) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(dispatch) {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.PRODUCTS + '/' + productId).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.purchaseProductActionType.SEARCH_PURCHASE_PRODUCTS,
                payload: response.data.data
              });
            })["catch"](function (error) {
              var _error$response;
              var message = (error === null || error === void 0 || (_error$response = error.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || 'Something went wrong';
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_2__.addToast)({
                text: message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 1:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ },

/***/ "./resources/pos/src/store/action/saveButtonAction.js"
/*!************************************************************!*\
  !*** ./resources/pos/src/store/action/saveButtonAction.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setSavingButton: () => (/* binding */ setSavingButton)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");

var setSavingButton = function setSavingButton(isSaving) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.constants.SET_SAVING,
    payload: isSaving
  };
};

/***/ },

/***/ "./resources/pos/src/store/action/warehouseAction.js"
/*!***********************************************************!*\
  !*** ./resources/pos/src/store/action/warehouseAction.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addWarehouse: () => (/* binding */ addWarehouse),
/* harmony export */   deleteWarehouse: () => (/* binding */ deleteWarehouse),
/* harmony export */   editWarehouse: () => (/* binding */ editWarehouse),
/* harmony export */   fetchAllWarehouses: () => (/* binding */ fetchAllWarehouses),
/* harmony export */   fetchWarehouse: () => (/* binding */ fetchWarehouse),
/* harmony export */   fetchWarehouseDetails: () => (/* binding */ fetchWarehouseDetails),
/* harmony export */   fetchWarehouses: () => (/* binding */ fetchWarehouses)
/* harmony export */ });
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/pos/src/config/apiConfig.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var _shared_requestParam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/requestParam */ "./resources/pos/src/shared/requestParam.js");
/* harmony import */ var _toastAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _totalRecordAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./totalRecordAction */ "./resources/pos/src/store/action/totalRecordAction.js");
/* harmony import */ var _loadingAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadingAction */ "./resources/pos/src/store/action/loadingAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _saveButtonAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./saveButtonAction */ "./resources/pos/src/store/action/saveButtonAction.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }








var fetchWarehouses = function fetchWarehouses() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(dispatch) {
      var url;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (isLoading) {
              dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(true));
            }
            url = _constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.WAREHOUSES;
            if (!_.isEmpty(filter) && (filter.page || filter.pageSize || filter.search || filter.order_By || filter.created_at)) {
              url += (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_2__["default"])(filter, null, null, null, url);
            }
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.warehouseActionType.FETCH_WAREHOUSES,
                payload: response.data.data
              });
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_4__.setTotalRecord)(response.data.meta.total !== undefined && response.data.meta.total >= 0 ? response.data.meta.total : response.data.data.total));
              if (isLoading) {
                dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));
              }
            })["catch"](function (_ref2) {
              var response = _ref2.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 1:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var fetchWarehouse = function fetchWarehouse(warehouseId) {
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(dispatch) {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            if (isLoading) {
              dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(true));
            }
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.WAREHOUSES + "/" + warehouseId).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.warehouseActionType.FETCH_WAREHOUSE,
                payload: response.data.data
              });
              if (isLoading) {
                dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));
              }
            })["catch"](function (_ref4) {
              var response = _ref4.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 1:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var addWarehouse = function addWarehouse(warehouse, navigate) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(dispatch) {
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(true));
            _context3.n = 1;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.WAREHOUSES, warehouse).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.warehouseActionType.ADD_WAREHOUSE,
                payload: response.data.data
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("warehouse.success.create.message")
              }));
              navigate("/app/warehouse");
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_4__.addInToTotalRecord)(1));
              dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(false));
            })["catch"](function (_ref6) {
              var response = _ref6.response;
              dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(false));
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 1:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return function (_x3) {
      return _ref5.apply(this, arguments);
    };
  }();
};
var editWarehouse = function editWarehouse(warehouseId, warehouse, navigate) {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(dispatch) {
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(true));
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].patch(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.WAREHOUSES + "/" + warehouseId, warehouse).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.warehouseActionType.EDIT_WAREHOUSE,
                payload: response.data.data
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("warehouse.success.edit.message")
              }));
              navigate("/app/warehouse");
              dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(false));
            })["catch"](function (_ref8) {
              var response = _ref8.response;
              dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(false));
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 1:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return function (_x4) {
      return _ref7.apply(this, arguments);
    };
  }();
};
var deleteWarehouse = function deleteWarehouse(warehouseId) {
  return /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(dispatch) {
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.WAREHOUSES + "/" + warehouseId).then(function (response) {
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_4__.removeFromTotalRecord)(1));
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.warehouseActionType.DELETE_WAREHOUSE,
                payload: warehouseId
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("warehouse.success.delete.message")
              }));
            })["catch"](function (_ref0) {
              var response = _ref0.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 1:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    return function (_x5) {
      return _ref9.apply(this, arguments);
    };
  }();
};
var fetchAllWarehouses = function fetchAllWarehouses() {
  return /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(dispatch) {
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get("warehouses?page[size]=0").then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.warehouseActionType.FETCH_ALL_WAREHOUSES,
                payload: response.data.data
              });
            })["catch"](function (_ref10) {
              var response = _ref10.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 1:
            return _context6.a(2);
        }
      }, _callee6);
    }));
    return function (_x6) {
      return _ref1.apply(this, arguments);
    };
  }();
};
var fetchWarehouseDetails = function fetchWarehouseDetails(WarehouseId) {
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(dispatch) {
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            if (isLoading) {
              dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(true));
            }
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.WAREHOUSE_DETAILS + "/" + WarehouseId).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.warehouseActionType.FETCH_WAREHOUSE_DETAILS,
                payload: response.data.data
              });
              if (isLoading) {
                dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));
              }
            })["catch"](function (_ref12) {
              var response = _ref12.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 1:
            return _context7.a(2);
        }
      }, _callee7);
    }));
    return function (_x7) {
      return _ref11.apply(this, arguments);
    };
  }();
};

/***/ },

/***/ "./node_modules/fuse.js/dist/fuse.esm.js"
/*!***********************************************!*\
  !*** ./node_modules/fuse.js/dist/fuse.esm.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Fuse)
/* harmony export */ });
/**
 * Fuse.js v6.6.2 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2022 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

function isArray(value) {
  return !Array.isArray
    ? getTag(value) === '[object Array]'
    : Array.isArray(value)
}

// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/baseToString.js
const INFINITY = 1 / 0;
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value
  }
  let result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result
}

function toString(value) {
  return value == null ? '' : baseToString(value)
}

function isString(value) {
  return typeof value === 'string'
}

function isNumber(value) {
  return typeof value === 'number'
}

// Adapted from: https://github.com/lodash/lodash/blob/master/isBoolean.js
function isBoolean(value) {
  return (
    value === true ||
    value === false ||
    (isObjectLike(value) && getTag(value) == '[object Boolean]')
  )
}

function isObject(value) {
  return typeof value === 'object'
}

// Checks if `value` is object-like.
function isObjectLike(value) {
  return isObject(value) && value !== null
}

function isDefined(value) {
  return value !== undefined && value !== null
}

function isBlank(value) {
  return !value.trim().length
}

// Gets the `toStringTag` of `value`.
// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/getTag.js
function getTag(value) {
  return value == null
    ? value === undefined
      ? '[object Undefined]'
      : '[object Null]'
    : Object.prototype.toString.call(value)
}

const EXTENDED_SEARCH_UNAVAILABLE = 'Extended search is not available';

const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";

const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) =>
  `Invalid value for key ${key}`;

const PATTERN_LENGTH_TOO_LARGE = (max) =>
  `Pattern length exceeds max of ${max}.`;

const MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;

const INVALID_KEY_WEIGHT_VALUE = (key) =>
  `Property 'weight' in key '${key}' must be a positive integer`;

const hasOwn = Object.prototype.hasOwnProperty;

class KeyStore {
  constructor(keys) {
    this._keys = [];
    this._keyMap = {};

    let totalWeight = 0;

    keys.forEach((key) => {
      let obj = createKey(key);

      totalWeight += obj.weight;

      this._keys.push(obj);
      this._keyMap[obj.id] = obj;

      totalWeight += obj.weight;
    });

    // Normalize weights so that their sum is equal to 1
    this._keys.forEach((key) => {
      key.weight /= totalWeight;
    });
  }
  get(keyId) {
    return this._keyMap[keyId]
  }
  keys() {
    return this._keys
  }
  toJSON() {
    return JSON.stringify(this._keys)
  }
}

function createKey(key) {
  let path = null;
  let id = null;
  let src = null;
  let weight = 1;
  let getFn = null;

  if (isString(key) || isArray(key)) {
    src = key;
    path = createKeyPath(key);
    id = createKeyId(key);
  } else {
    if (!hasOwn.call(key, 'name')) {
      throw new Error(MISSING_KEY_PROPERTY('name'))
    }

    const name = key.name;
    src = name;

    if (hasOwn.call(key, 'weight')) {
      weight = key.weight;

      if (weight <= 0) {
        throw new Error(INVALID_KEY_WEIGHT_VALUE(name))
      }
    }

    path = createKeyPath(name);
    id = createKeyId(name);
    getFn = key.getFn;
  }

  return { path, id, weight, src, getFn }
}

function createKeyPath(key) {
  return isArray(key) ? key : key.split('.')
}

function createKeyId(key) {
  return isArray(key) ? key.join('.') : key
}

function get(obj, path) {
  let list = [];
  let arr = false;

  const deepGet = (obj, path, index) => {
    if (!isDefined(obj)) {
      return
    }
    if (!path[index]) {
      // If there's no path left, we've arrived at the object we care about.
      list.push(obj);
    } else {
      let key = path[index];

      const value = obj[key];

      if (!isDefined(value)) {
        return
      }

      // If we're at the last value in the path, and if it's a string/number/bool,
      // add it to the list
      if (
        index === path.length - 1 &&
        (isString(value) || isNumber(value) || isBoolean(value))
      ) {
        list.push(toString(value));
      } else if (isArray(value)) {
        arr = true;
        // Search each item in the array.
        for (let i = 0, len = value.length; i < len; i += 1) {
          deepGet(value[i], path, index + 1);
        }
      } else if (path.length) {
        // An object. Recurse further.
        deepGet(value, path, index + 1);
      }
    }
  };

  // Backwards compatibility (since path used to be a string)
  deepGet(obj, isString(path) ? path.split('.') : path, 0);

  return arr ? list : list[0]
}

const MatchOptions = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: false,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: false,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
};

const BasicOptions = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: false,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: false,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: true,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (a, b) =>
    a.score === b.score ? (a.idx < b.idx ? -1 : 1) : a.score < b.score ? -1 : 1
};

const FuzzyOptions = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
};

const AdvancedOptions = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: false,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: get,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: false,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: false,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};

var Config = {
  ...BasicOptions,
  ...MatchOptions,
  ...FuzzyOptions,
  ...AdvancedOptions
};

const SPACE = /[^ ]+/g;

// Field-length norm: the shorter the field, the higher the weight.
// Set to 3 decimals to reduce index size.
function norm(weight = 1, mantissa = 3) {
  const cache = new Map();
  const m = Math.pow(10, mantissa);

  return {
    get(value) {
      const numTokens = value.match(SPACE).length;

      if (cache.has(numTokens)) {
        return cache.get(numTokens)
      }

      // Default function is 1/sqrt(x), weight makes that variable
      const norm = 1 / Math.pow(numTokens, 0.5 * weight);

      // In place of `toFixed(mantissa)`, for faster computation
      const n = parseFloat(Math.round(norm * m) / m);

      cache.set(numTokens, n);

      return n
    },
    clear() {
      cache.clear();
    }
  }
}

class FuseIndex {
  constructor({
    getFn = Config.getFn,
    fieldNormWeight = Config.fieldNormWeight
  } = {}) {
    this.norm = norm(fieldNormWeight, 3);
    this.getFn = getFn;
    this.isCreated = false;

    this.setIndexRecords();
  }
  setSources(docs = []) {
    this.docs = docs;
  }
  setIndexRecords(records = []) {
    this.records = records;
  }
  setKeys(keys = []) {
    this.keys = keys;
    this._keysMap = {};
    keys.forEach((key, idx) => {
      this._keysMap[key.id] = idx;
    });
  }
  create() {
    if (this.isCreated || !this.docs.length) {
      return
    }

    this.isCreated = true;

    // List is Array<String>
    if (isString(this.docs[0])) {
      this.docs.forEach((doc, docIndex) => {
        this._addString(doc, docIndex);
      });
    } else {
      // List is Array<Object>
      this.docs.forEach((doc, docIndex) => {
        this._addObject(doc, docIndex);
      });
    }

    this.norm.clear();
  }
  // Adds a doc to the end of the index
  add(doc) {
    const idx = this.size();

    if (isString(doc)) {
      this._addString(doc, idx);
    } else {
      this._addObject(doc, idx);
    }
  }
  // Removes the doc at the specified index of the index
  removeAt(idx) {
    this.records.splice(idx, 1);

    // Change ref index of every subsquent doc
    for (let i = idx, len = this.size(); i < len; i += 1) {
      this.records[i].i -= 1;
    }
  }
  getValueForItemAtKeyId(item, keyId) {
    return item[this._keysMap[keyId]]
  }
  size() {
    return this.records.length
  }
  _addString(doc, docIndex) {
    if (!isDefined(doc) || isBlank(doc)) {
      return
    }

    let record = {
      v: doc,
      i: docIndex,
      n: this.norm.get(doc)
    };

    this.records.push(record);
  }
  _addObject(doc, docIndex) {
    let record = { i: docIndex, $: {} };

    // Iterate over every key (i.e, path), and fetch the value at that key
    this.keys.forEach((key, keyIndex) => {
      let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);

      if (!isDefined(value)) {
        return
      }

      if (isArray(value)) {
        let subRecords = [];
        const stack = [{ nestedArrIndex: -1, value }];

        while (stack.length) {
          const { nestedArrIndex, value } = stack.pop();

          if (!isDefined(value)) {
            continue
          }

          if (isString(value) && !isBlank(value)) {
            let subRecord = {
              v: value,
              i: nestedArrIndex,
              n: this.norm.get(value)
            };

            subRecords.push(subRecord);
          } else if (isArray(value)) {
            value.forEach((item, k) => {
              stack.push({
                nestedArrIndex: k,
                value: item
              });
            });
          } else ;
        }
        record.$[keyIndex] = subRecords;
      } else if (isString(value) && !isBlank(value)) {
        let subRecord = {
          v: value,
          n: this.norm.get(value)
        };

        record.$[keyIndex] = subRecord;
      }
    });

    this.records.push(record);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    }
  }
}

function createIndex(
  keys,
  docs,
  { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}
) {
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys.map(createKey));
  myIndex.setSources(docs);
  myIndex.create();
  return myIndex
}

function parseIndex(
  data,
  { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}
) {
  const { keys, records } = data;
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys);
  myIndex.setIndexRecords(records);
  return myIndex
}

function computeScore$1(
  pattern,
  {
    errors = 0,
    currentLocation = 0,
    expectedLocation = 0,
    distance = Config.distance,
    ignoreLocation = Config.ignoreLocation
  } = {}
) {
  const accuracy = errors / pattern.length;

  if (ignoreLocation) {
    return accuracy
  }

  const proximity = Math.abs(expectedLocation - currentLocation);

  if (!distance) {
    // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy
  }

  return accuracy + proximity / distance
}

function convertMaskToIndices(
  matchmask = [],
  minMatchCharLength = Config.minMatchCharLength
) {
  let indices = [];
  let start = -1;
  let end = -1;
  let i = 0;

  for (let len = matchmask.length; i < len; i += 1) {
    let match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        indices.push([start, end]);
      }
      start = -1;
    }
  }

  // (i-1 - start) + 1 => i - start
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    indices.push([start, i - 1]);
  }

  return indices
}

// Machine word size
const MAX_BITS = 32;

function search(
  text,
  pattern,
  patternAlphabet,
  {
    location = Config.location,
    distance = Config.distance,
    threshold = Config.threshold,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    includeMatches = Config.includeMatches,
    ignoreLocation = Config.ignoreLocation
  } = {}
) {
  if (pattern.length > MAX_BITS) {
    throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS))
  }

  const patternLen = pattern.length;
  // Set starting location at beginning text and initialize the alphabet.
  const textLen = text.length;
  // Handle the case when location > text.length
  const expectedLocation = Math.max(0, Math.min(location, textLen));
  // Highest score beyond which we give up.
  let currentThreshold = threshold;
  // Is there a nearby exact match? (speedup)
  let bestLocation = expectedLocation;

  // Performance: only computer matches when the minMatchCharLength > 1
  // OR if `includeMatches` is true.
  const computeMatches = minMatchCharLength > 1 || includeMatches;
  // A mask of the matches, used for building the indices
  const matchMask = computeMatches ? Array(textLen) : [];

  let index;

  // Get all exact matches, here for speed up
  while ((index = text.indexOf(pattern, bestLocation)) > -1) {
    let score = computeScore$1(pattern, {
      currentLocation: index,
      expectedLocation,
      distance,
      ignoreLocation
    });

    currentThreshold = Math.min(score, currentThreshold);
    bestLocation = index + patternLen;

    if (computeMatches) {
      let i = 0;
      while (i < patternLen) {
        matchMask[index + i] = 1;
        i += 1;
      }
    }
  }

  // Reset the best location
  bestLocation = -1;

  let lastBitArr = [];
  let finalScore = 1;
  let binMax = patternLen + textLen;

  const mask = 1 << (patternLen - 1);

  for (let i = 0; i < patternLen; i += 1) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from the match location we can stray
    // at this error level.
    let binMin = 0;
    let binMid = binMax;

    while (binMin < binMid) {
      const score = computeScore$1(pattern, {
        errors: i,
        currentLocation: expectedLocation + binMid,
        expectedLocation,
        distance,
        ignoreLocation
      });

      if (score <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }

      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }

    // Use the result from this iteration as the maximum for the next.
    binMax = binMid;

    let start = Math.max(1, expectedLocation - binMid + 1);
    let finish = findAllMatches
      ? textLen
      : Math.min(expectedLocation + binMid, textLen) + patternLen;

    // Initialize the bit array
    let bitArr = Array(finish + 2);

    bitArr[finish + 1] = (1 << i) - 1;

    for (let j = finish; j >= start; j -= 1) {
      let currentLocation = j - 1;
      let charMatch = patternAlphabet[text.charAt(currentLocation)];

      if (computeMatches) {
        // Speed up: quick bool to int conversion (i.e, `charMatch ? 1 : 0`)
        matchMask[currentLocation] = +!!charMatch;
      }

      // First pass: exact match
      bitArr[j] = ((bitArr[j + 1] << 1) | 1) & charMatch;

      // Subsequent passes: fuzzy match
      if (i) {
        bitArr[j] |=
          ((lastBitArr[j + 1] | lastBitArr[j]) << 1) | 1 | lastBitArr[j + 1];
      }

      if (bitArr[j] & mask) {
        finalScore = computeScore$1(pattern, {
          errors: i,
          currentLocation,
          expectedLocation,
          distance,
          ignoreLocation
        });

        // This match will almost certainly be better than any existing match.
        // But check anyway.
        if (finalScore <= currentThreshold) {
          // Indeed it is
          currentThreshold = finalScore;
          bestLocation = currentLocation;

          // Already passed `loc`, downhill from here on in.
          if (bestLocation <= expectedLocation) {
            break
          }

          // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }

    // No hope for a (better) match at greater error levels.
    const score = computeScore$1(pattern, {
      errors: i + 1,
      currentLocation: expectedLocation,
      expectedLocation,
      distance,
      ignoreLocation
    });

    if (score > currentThreshold) {
      break
    }

    lastBitArr = bitArr;
  }

  const result = {
    isMatch: bestLocation >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(0.001, finalScore)
  };

  if (computeMatches) {
    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
    if (!indices.length) {
      result.isMatch = false;
    } else if (includeMatches) {
      result.indices = indices;
    }
  }

  return result
}

function createPatternAlphabet(pattern) {
  let mask = {};

  for (let i = 0, len = pattern.length; i < len; i += 1) {
    const char = pattern.charAt(i);
    mask[char] = (mask[char] || 0) | (1 << (len - i - 1));
  }

  return mask
}

class BitapSearch {
  constructor(
    pattern,
    {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}
  ) {
    this.options = {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    };

    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();

    this.chunks = [];

    if (!this.pattern.length) {
      return
    }

    const addChunk = (pattern, startIndex) => {
      this.chunks.push({
        pattern,
        alphabet: createPatternAlphabet(pattern),
        startIndex
      });
    };

    const len = this.pattern.length;

    if (len > MAX_BITS) {
      let i = 0;
      const remainder = len % MAX_BITS;
      const end = len - remainder;

      while (i < end) {
        addChunk(this.pattern.substr(i, MAX_BITS), i);
        i += MAX_BITS;
      }

      if (remainder) {
        const startIndex = len - MAX_BITS;
        addChunk(this.pattern.substr(startIndex), startIndex);
      }
    } else {
      addChunk(this.pattern, 0);
    }
  }

  searchIn(text) {
    const { isCaseSensitive, includeMatches } = this.options;

    if (!isCaseSensitive) {
      text = text.toLowerCase();
    }

    // Exact match
    if (this.pattern === text) {
      let result = {
        isMatch: true,
        score: 0
      };

      if (includeMatches) {
        result.indices = [[0, text.length - 1]];
      }

      return result
    }

    // Otherwise, use Bitap algorithm
    const {
      location,
      distance,
      threshold,
      findAllMatches,
      minMatchCharLength,
      ignoreLocation
    } = this.options;

    let allIndices = [];
    let totalScore = 0;
    let hasMatches = false;

    this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
      const { isMatch, score, indices } = search(text, pattern, alphabet, {
        location: location + startIndex,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        includeMatches,
        ignoreLocation
      });

      if (isMatch) {
        hasMatches = true;
      }

      totalScore += score;

      if (isMatch && indices) {
        allIndices = [...allIndices, ...indices];
      }
    });

    let result = {
      isMatch: hasMatches,
      score: hasMatches ? totalScore / this.chunks.length : 1
    };

    if (hasMatches && includeMatches) {
      result.indices = allIndices;
    }

    return result
  }
}

class BaseMatch {
  constructor(pattern) {
    this.pattern = pattern;
  }
  static isMultiMatch(pattern) {
    return getMatch(pattern, this.multiRegex)
  }
  static isSingleMatch(pattern) {
    return getMatch(pattern, this.singleRegex)
  }
  search(/*text*/) {}
}

function getMatch(pattern, exp) {
  const matches = pattern.match(exp);
  return matches ? matches[1] : null
}

// Token: 'file

class ExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'exact'
  }
  static get multiRegex() {
    return /^="(.*)"$/
  }
  static get singleRegex() {
    return /^=(.*)$/
  }
  search(text) {
    const isMatch = text === this.pattern;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    }
  }
}

// Token: !fire

class InverseExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-exact'
  }
  static get multiRegex() {
    return /^!"(.*)"$/
  }
  static get singleRegex() {
    return /^!(.*)$/
  }
  search(text) {
    const index = text.indexOf(this.pattern);
    const isMatch = index === -1;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

// Token: ^file

class PrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'prefix-exact'
  }
  static get multiRegex() {
    return /^\^"(.*)"$/
  }
  static get singleRegex() {
    return /^\^(.*)$/
  }
  search(text) {
    const isMatch = text.startsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    }
  }
}

// Token: !^fire

class InversePrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-prefix-exact'
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/
  }
  static get singleRegex() {
    return /^!\^(.*)$/
  }
  search(text) {
    const isMatch = !text.startsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

// Token: .file$

class SuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'suffix-exact'
  }
  static get multiRegex() {
    return /^"(.*)"\$$/
  }
  static get singleRegex() {
    return /^(.*)\$$/
  }
  search(text) {
    const isMatch = text.endsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [text.length - this.pattern.length, text.length - 1]
    }
  }
}

// Token: !.file$

class InverseSuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-suffix-exact'
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/
  }
  static get singleRegex() {
    return /^!(.*)\$$/
  }
  search(text) {
    const isMatch = !text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

class FuzzyMatch extends BaseMatch {
  constructor(
    pattern,
    {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}
  ) {
    super(pattern);
    this._bitapSearch = new BitapSearch(pattern, {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    });
  }
  static get type() {
    return 'fuzzy'
  }
  static get multiRegex() {
    return /^"(.*)"$/
  }
  static get singleRegex() {
    return /^(.*)$/
  }
  search(text) {
    return this._bitapSearch.searchIn(text)
  }
}

// Token: 'file

class IncludeMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'include'
  }
  static get multiRegex() {
    return /^'"(.*)"$/
  }
  static get singleRegex() {
    return /^'(.*)$/
  }
  search(text) {
    let location = 0;
    let index;

    const indices = [];
    const patternLen = this.pattern.length;

    // Get all exact matches
    while ((index = text.indexOf(this.pattern, location)) > -1) {
      location = index + patternLen;
      indices.push([index, location - 1]);
    }

    const isMatch = !!indices.length;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices
    }
  }
}

// ❗Order is important. DO NOT CHANGE.
const searchers = [
  ExactMatch,
  IncludeMatch,
  PrefixExactMatch,
  InversePrefixExactMatch,
  InverseSuffixExactMatch,
  SuffixExactMatch,
  InverseExactMatch,
  FuzzyMatch
];

const searchersLen = searchers.length;

// Regex to split by spaces, but keep anything in quotes together
const SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
const OR_TOKEN = '|';

// Return a 2D array representation of the query, for simpler parsing.
// Example:
// "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]
function parseQuery(pattern, options = {}) {
  return pattern.split(OR_TOKEN).map((item) => {
    let query = item
      .trim()
      .split(SPACE_RE)
      .filter((item) => item && !!item.trim());

    let results = [];
    for (let i = 0, len = query.length; i < len; i += 1) {
      const queryItem = query[i];

      // 1. Handle multiple query match (i.e, once that are quoted, like `"hello world"`)
      let found = false;
      let idx = -1;
      while (!found && ++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isMultiMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          found = true;
        }
      }

      if (found) {
        continue
      }

      // 2. Handle single query matches (i.e, once that are *not* quoted)
      idx = -1;
      while (++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isSingleMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          break
        }
      }
    }

    return results
  })
}

// These extended matchers can return an array of matches, as opposed
// to a singl match
const MultiMatchSet = new Set([FuzzyMatch.type, IncludeMatch.type]);

/**
 * Command-like searching
 * ======================
 *
 * Given multiple search terms delimited by spaces.e.g. `^jscript .python$ ruby !java`,
 * search in a given text.
 *
 * Search syntax:
 *
 * | Token       | Match type                 | Description                            |
 * | ----------- | -------------------------- | -------------------------------------- |
 * | `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`       |
 * | `=scheme`   | exact-match                | Items that are `scheme`                |
 * | `'python`   | include-match              | Items that include `python`            |
 * | `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
 * | `^java`     | prefix-exact-match         | Items that start with `java`           |
 * | `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
 * | `.js$`      | suffix-exact-match         | Items that end with `.js`              |
 * | `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |
 *
 * A single pipe character acts as an OR operator. For example, the following
 * query matches entries that start with `core` and end with either`go`, `rb`,
 * or`py`.
 *
 * ```
 * ^core go$ | rb$ | py$
 * ```
 */
class ExtendedSearch {
  constructor(
    pattern,
    {
      isCaseSensitive = Config.isCaseSensitive,
      includeMatches = Config.includeMatches,
      minMatchCharLength = Config.minMatchCharLength,
      ignoreLocation = Config.ignoreLocation,
      findAllMatches = Config.findAllMatches,
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance
    } = {}
  ) {
    this.query = null;
    this.options = {
      isCaseSensitive,
      includeMatches,
      minMatchCharLength,
      findAllMatches,
      ignoreLocation,
      location,
      threshold,
      distance
    };

    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    this.query = parseQuery(this.pattern, this.options);
  }

  static condition(_, options) {
    return options.useExtendedSearch
  }

  searchIn(text) {
    const query = this.query;

    if (!query) {
      return {
        isMatch: false,
        score: 1
      }
    }

    const { includeMatches, isCaseSensitive } = this.options;

    text = isCaseSensitive ? text : text.toLowerCase();

    let numMatches = 0;
    let allIndices = [];
    let totalScore = 0;

    // ORs
    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
      const searchers = query[i];

      // Reset indices
      allIndices.length = 0;
      numMatches = 0;

      // ANDs
      for (let j = 0, pLen = searchers.length; j < pLen; j += 1) {
        const searcher = searchers[j];
        const { isMatch, indices, score } = searcher.search(text);

        if (isMatch) {
          numMatches += 1;
          totalScore += score;
          if (includeMatches) {
            const type = searcher.constructor.type;
            if (MultiMatchSet.has(type)) {
              allIndices = [...allIndices, ...indices];
            } else {
              allIndices.push(indices);
            }
          }
        } else {
          totalScore = 0;
          numMatches = 0;
          allIndices.length = 0;
          break
        }
      }

      // OR condition, so if TRUE, return
      if (numMatches) {
        let result = {
          isMatch: true,
          score: totalScore / numMatches
        };

        if (includeMatches) {
          result.indices = allIndices;
        }

        return result
      }
    }

    // Nothing was matched
    return {
      isMatch: false,
      score: 1
    }
  }
}

const registeredSearchers = [];

function register(...args) {
  registeredSearchers.push(...args);
}

function createSearcher(pattern, options) {
  for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
    let searcherClass = registeredSearchers[i];
    if (searcherClass.condition(pattern, options)) {
      return new searcherClass(pattern, options)
    }
  }

  return new BitapSearch(pattern, options)
}

const LogicalOperator = {
  AND: '$and',
  OR: '$or'
};

const KeyType = {
  PATH: '$path',
  PATTERN: '$val'
};

const isExpression = (query) =>
  !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);

const isPath = (query) => !!query[KeyType.PATH];

const isLeaf = (query) =>
  !isArray(query) && isObject(query) && !isExpression(query);

const convertToExplicit = (query) => ({
  [LogicalOperator.AND]: Object.keys(query).map((key) => ({
    [key]: query[key]
  }))
});

// When `auto` is `true`, the parse function will infer and initialize and add
// the appropriate `Searcher` instance
function parse(query, options, { auto = true } = {}) {
  const next = (query) => {
    let keys = Object.keys(query);

    const isQueryPath = isPath(query);

    if (!isQueryPath && keys.length > 1 && !isExpression(query)) {
      return next(convertToExplicit(query))
    }

    if (isLeaf(query)) {
      const key = isQueryPath ? query[KeyType.PATH] : keys[0];

      const pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];

      if (!isString(pattern)) {
        throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key))
      }

      const obj = {
        keyId: createKeyId(key),
        pattern
      };

      if (auto) {
        obj.searcher = createSearcher(pattern, options);
      }

      return obj
    }

    let node = {
      children: [],
      operator: keys[0]
    };

    keys.forEach((key) => {
      const value = query[key];

      if (isArray(value)) {
        value.forEach((item) => {
          node.children.push(next(item));
        });
      }
    });

    return node
  };

  if (!isExpression(query)) {
    query = convertToExplicit(query);
  }

  return next(query)
}

// Practical scoring function
function computeScore(
  results,
  { ignoreFieldNorm = Config.ignoreFieldNorm }
) {
  results.forEach((result) => {
    let totalScore = 1;

    result.matches.forEach(({ key, norm, score }) => {
      const weight = key ? key.weight : null;

      totalScore *= Math.pow(
        score === 0 && weight ? Number.EPSILON : score,
        (weight || 1) * (ignoreFieldNorm ? 1 : norm)
      );
    });

    result.score = totalScore;
  });
}

function transformMatches(result, data) {
  const matches = result.matches;
  data.matches = [];

  if (!isDefined(matches)) {
    return
  }

  matches.forEach((match) => {
    if (!isDefined(match.indices) || !match.indices.length) {
      return
    }

    const { indices, value } = match;

    let obj = {
      indices,
      value
    };

    if (match.key) {
      obj.key = match.key.src;
    }

    if (match.idx > -1) {
      obj.refIndex = match.idx;
    }

    data.matches.push(obj);
  });
}

function transformScore(result, data) {
  data.score = result.score;
}

function format(
  results,
  docs,
  {
    includeMatches = Config.includeMatches,
    includeScore = Config.includeScore
  } = {}
) {
  const transformers = [];

  if (includeMatches) transformers.push(transformMatches);
  if (includeScore) transformers.push(transformScore);

  return results.map((result) => {
    const { idx } = result;

    const data = {
      item: docs[idx],
      refIndex: idx
    };

    if (transformers.length) {
      transformers.forEach((transformer) => {
        transformer(result, data);
      });
    }

    return data
  })
}

class Fuse {
  constructor(docs, options = {}, index) {
    this.options = { ...Config, ...options };

    if (
      this.options.useExtendedSearch &&
      !true
    ) // removed by dead control flow
{}

    this._keyStore = new KeyStore(this.options.keys);

    this.setCollection(docs, index);
  }

  setCollection(docs, index) {
    this._docs = docs;

    if (index && !(index instanceof FuseIndex)) {
      throw new Error(INCORRECT_INDEX_TYPE)
    }

    this._myIndex =
      index ||
      createIndex(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight
      });
  }

  add(doc) {
    if (!isDefined(doc)) {
      return
    }

    this._docs.push(doc);
    this._myIndex.add(doc);
  }

  remove(predicate = (/* doc, idx */) => false) {
    const results = [];

    for (let i = 0, len = this._docs.length; i < len; i += 1) {
      const doc = this._docs[i];
      if (predicate(doc, i)) {
        this.removeAt(i);
        i -= 1;
        len -= 1;

        results.push(doc);
      }
    }

    return results
  }

  removeAt(idx) {
    this._docs.splice(idx, 1);
    this._myIndex.removeAt(idx);
  }

  getIndex() {
    return this._myIndex
  }

  search(query, { limit = -1 } = {}) {
    const {
      includeMatches,
      includeScore,
      shouldSort,
      sortFn,
      ignoreFieldNorm
    } = this.options;

    let results = isString(query)
      ? isString(this._docs[0])
        ? this._searchStringList(query)
        : this._searchObjectList(query)
      : this._searchLogical(query);

    computeScore(results, { ignoreFieldNorm });

    if (shouldSort) {
      results.sort(sortFn);
    }

    if (isNumber(limit) && limit > -1) {
      results = results.slice(0, limit);
    }

    return format(results, this._docs, {
      includeMatches,
      includeScore
    })
  }

  _searchStringList(query) {
    const searcher = createSearcher(query, this.options);
    const { records } = this._myIndex;
    const results = [];

    // Iterate over every string in the index
    records.forEach(({ v: text, i: idx, n: norm }) => {
      if (!isDefined(text)) {
        return
      }

      const { isMatch, score, indices } = searcher.searchIn(text);

      if (isMatch) {
        results.push({
          item: text,
          idx,
          matches: [{ score, value: text, norm, indices }]
        });
      }
    });

    return results
  }

  _searchLogical(query) {

    const expression = parse(query, this.options);

    const evaluate = (node, item, idx) => {
      if (!node.children) {
        const { keyId, searcher } = node;

        const matches = this._findMatches({
          key: this._keyStore.get(keyId),
          value: this._myIndex.getValueForItemAtKeyId(item, keyId),
          searcher
        });

        if (matches && matches.length) {
          return [
            {
              idx,
              item,
              matches
            }
          ]
        }

        return []
      }

      const res = [];
      for (let i = 0, len = node.children.length; i < len; i += 1) {
        const child = node.children[i];
        const result = evaluate(child, item, idx);
        if (result.length) {
          res.push(...result);
        } else if (node.operator === LogicalOperator.AND) {
          return []
        }
      }
      return res
    };

    const records = this._myIndex.records;
    const resultMap = {};
    const results = [];

    records.forEach(({ $: item, i: idx }) => {
      if (isDefined(item)) {
        let expResults = evaluate(expression, item, idx);

        if (expResults.length) {
          // Dedupe when adding
          if (!resultMap[idx]) {
            resultMap[idx] = { idx, item, matches: [] };
            results.push(resultMap[idx]);
          }
          expResults.forEach(({ matches }) => {
            resultMap[idx].matches.push(...matches);
          });
        }
      }
    });

    return results
  }

  _searchObjectList(query) {
    const searcher = createSearcher(query, this.options);
    const { keys, records } = this._myIndex;
    const results = [];

    // List is Array<Object>
    records.forEach(({ $: item, i: idx }) => {
      if (!isDefined(item)) {
        return
      }

      let matches = [];

      // Iterate over every key (i.e, path), and fetch the value at that key
      keys.forEach((key, keyIndex) => {
        matches.push(
          ...this._findMatches({
            key,
            value: item[keyIndex],
            searcher
          })
        );
      });

      if (matches.length) {
        results.push({
          idx,
          item,
          matches
        });
      }
    });

    return results
  }
  _findMatches({ key, value, searcher }) {
    if (!isDefined(value)) {
      return []
    }

    let matches = [];

    if (isArray(value)) {
      value.forEach(({ v: text, i: idx, n: norm }) => {
        if (!isDefined(text)) {
          return
        }

        const { isMatch, score, indices } = searcher.searchIn(text);

        if (isMatch) {
          matches.push({
            score,
            key,
            value: text,
            idx,
            norm,
            indices
          });
        }
      });
    } else {
      const { v: text, n: norm } = value;

      const { isMatch, score, indices } = searcher.searchIn(text);

      if (isMatch) {
        matches.push({ score, key, value: text, norm, indices });
      }
    }

    return matches
  }
}

Fuse.version = '6.6.2';
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;

{
  Fuse.parseQuery = parse;
}

{
  register(ExtendedSearch);
}




/***/ },

/***/ "./node_modules/react-bootstrap-v5/lib/esm/Button.js"
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap-v5/lib/esm/Button.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap-v5/lib/esm/ThemeProvider.js");
/* harmony import */ var _SafeAnchor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap-v5/lib/esm/SafeAnchor.js");






var defaultProps = {
  variant: 'primary',
  active: false,
  disabled: false
};
var Button = react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      size = _ref.size,
      active = _ref.active,
      className = _ref.className,
      block = _ref.block,
      type = _ref.type,
      as = _ref.as,
      props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"]);

  var prefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.useBootstrapPrefix)(bsPrefix, 'btn');
  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, prefix, active && 'active', variant && prefix + "-" + variant, block && prefix + "-block", size && prefix + "-" + size);

  if (props.href) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_SafeAnchor__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      as: as,
      ref: ref,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes, props.disabled && 'disabled')
    }));
  }

  if (ref) {
    props.ref = ref;
  }

  if (type) {
    props.type = type;
  } else if (!as) {
    props.type = 'button';
  }

  var Component = as || 'button';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: classes
  }));
});
Button.displayName = 'Button';
Button.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ },

/***/ "./node_modules/react-bootstrap-v5/lib/esm/SafeAnchor.js"
/*!***************************************************************!*\
  !*** ./node_modules/react-bootstrap-v5/lib/esm/SafeAnchor.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _createChainedFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createChainedFunction */ "./node_modules/react-bootstrap-v5/lib/esm/createChainedFunction.js");





function isTrivialHref(href) {
  return !href || href.trim() === '#';
}
/**
 * There are situations due to browser quirks or Bootstrap CSS where
 * an anchor tag is needed, when semantically a button tag is the
 * better choice. SafeAnchor ensures that when an anchor is used like a
 * button its accessible. It also emulates input `disabled` behavior for
 * links, which is usually desirable for Buttons, NavItems, DropdownItems, etc.
 */


var SafeAnchor = react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'a' : _ref$as,
      disabled = _ref.disabled,
      onKeyDown = _ref.onKeyDown,
      props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["as", "disabled", "onKeyDown"]);

  var handleClick = function handleClick(event) {
    var href = props.href,
        onClick = props.onClick;

    if (disabled || isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };

  if (isTrivialHref(props.href)) {
    props.role = props.role || 'button'; // we want to make sure there is a href attribute on the node
    // otherwise, the cursor incorrectly styled (except with role='button')

    props.href = props.href || '#';
  }

  if (disabled) {
    props.tabIndex = -1;
    props['aria-disabled'] = true;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props, {
    onClick: handleClick,
    onKeyDown: (0,_createChainedFunction__WEBPACK_IMPORTED_MODULE_3__["default"])(handleKeyDown, onKeyDown)
  }));
});
SafeAnchor.displayName = 'SafeAnchor';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SafeAnchor);

/***/ },

/***/ "./node_modules/react-bootstrap-v5/lib/esm/Table.js"
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap-v5/lib/esm/Table.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap-v5/lib/esm/ThemeProvider.js");





var Table = react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      striped = _ref.striped,
      bordered = _ref.bordered,
      borderless = _ref.borderless,
      hover = _ref.hover,
      size = _ref.size,
      variant = _ref.variant,
      responsive = _ref.responsive,
      props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "striped", "bordered", "borderless", "hover", "size", "variant", "responsive"]);

  var decoratedBsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.useBootstrapPrefix)(bsPrefix, 'table');
  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, decoratedBsPrefix, variant && decoratedBsPrefix + "-" + variant, size && decoratedBsPrefix + "-" + size, striped && decoratedBsPrefix + "-striped", bordered && decoratedBsPrefix + "-bordered", borderless && decoratedBsPrefix + "-borderless", hover && decoratedBsPrefix + "-hover");
  var table = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("table", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: classes,
    ref: ref
  }));

  if (responsive) {
    var responsiveClass = decoratedBsPrefix + "-responsive";

    if (typeof responsive === 'string') {
      responsiveClass = responsiveClass + "-" + responsive;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      className: responsiveClass
    }, table);
  }

  return table;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);

/***/ },

/***/ "./node_modules/react-is/cjs/react-is.development.js"
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
(__unused_webpack_module, exports) {

"use strict";
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


 true &&
  (function () {
    function typeOf(object) {
      if ("object" === typeof object && null !== object) {
        var $$typeof = object.$$typeof;
        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            switch (((object = object.type), object)) {
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
              case REACT_SUSPENSE_LIST_TYPE:
              case REACT_VIEW_TRANSITION_TYPE:
                return object;
              default:
                switch (((object = object && object.$$typeof), object)) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                    return object;
                  case REACT_CONSUMER_TYPE:
                    return object;
                  default:
                    return $$typeof;
                }
            }
          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }
    }
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
      REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
      REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
      REACT_MEMO_TYPE = Symbol.for("react.memo"),
      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
      REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"),
      REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
    exports.ContextConsumer = REACT_CONSUMER_TYPE;
    exports.ContextProvider = REACT_CONTEXT_TYPE;
    exports.Element = REACT_ELEMENT_TYPE;
    exports.ForwardRef = REACT_FORWARD_REF_TYPE;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Lazy = REACT_LAZY_TYPE;
    exports.Memo = REACT_MEMO_TYPE;
    exports.Portal = REACT_PORTAL_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
    exports.isContextConsumer = function (object) {
      return typeOf(object) === REACT_CONSUMER_TYPE;
    };
    exports.isContextProvider = function (object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    };
    exports.isElement = function (object) {
      return (
        "object" === typeof object &&
        null !== object &&
        object.$$typeof === REACT_ELEMENT_TYPE
      );
    };
    exports.isForwardRef = function (object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    };
    exports.isFragment = function (object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    };
    exports.isLazy = function (object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    };
    exports.isMemo = function (object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    };
    exports.isPortal = function (object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    };
    exports.isProfiler = function (object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    };
    exports.isStrictMode = function (object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    };
    exports.isSuspense = function (object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    };
    exports.isSuspenseList = function (object) {
      return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
    };
    exports.isValidElementType = function (type) {
      return "string" === typeof type ||
        "function" === typeof type ||
        type === REACT_FRAGMENT_TYPE ||
        type === REACT_PROFILER_TYPE ||
        type === REACT_STRICT_MODE_TYPE ||
        type === REACT_SUSPENSE_TYPE ||
        type === REACT_SUSPENSE_LIST_TYPE ||
        ("object" === typeof type &&
          null !== type &&
          (type.$$typeof === REACT_LAZY_TYPE ||
            type.$$typeof === REACT_MEMO_TYPE ||
            type.$$typeof === REACT_CONTEXT_TYPE ||
            type.$$typeof === REACT_CONSUMER_TYPE ||
            type.$$typeof === REACT_FORWARD_REF_TYPE ||
            type.$$typeof === REACT_CLIENT_REFERENCE ||
            void 0 !== type.getModuleId))
        ? !0
        : !1;
    };
    exports.typeOf = typeOf;
  })();


/***/ },

/***/ "./node_modules/react-search-autocomplete/dist/components/ClearIcon.js"
/*!*****************************************************************************!*\
  !*** ./node_modules/react-search-autocomplete/dist/components/ClearIcon.js ***!
  \*****************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClearIcon = void 0;
var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
var ClearIcon = function (_a) {
    var showClear = _a.showClear, setSearchString = _a.setSearchString, searchString = _a.searchString, setFocus = _a.setFocus, onClear = _a.onClear;
    var handleClearSearchString = function () {
        setSearchString({ target: { value: '' } });
        setFocus();
        onClear();
    };
    if (!showClear) {
        return null;
    }
    if (!searchString || (searchString === null || searchString === void 0 ? void 0 : searchString.length) <= 0) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(StyledClearIcon, __assign({ className: "clear-icon", onClick: handleClearSearchString }, { children: (0, jsx_runtime_1.jsx)("svg", __assign({ width: 20, height: 20, focusable: "false", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.58 12 5 17.58 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }) })) })));
};
exports.ClearIcon = ClearIcon;
var StyledClearIcon = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: ", ";\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  > svg {\n    fill: ", ";\n  }\n"], ["\n  margin: ", ";\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  > svg {\n    fill: ", ";\n  }\n"])), function (props) { return props.theme.clearIconMargin; }, function (props) { return props.theme.iconColor; });
var templateObject_1;


/***/ },

/***/ "./node_modules/react-search-autocomplete/dist/components/ReactSearchAutocomplete.js"
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-search-autocomplete/dist/components/ReactSearchAutocomplete.js ***!
  \*******************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MAX_RESULTS = exports.DEFAULT_INPUT_DEBOUNCE = void 0;
var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var fuse_js_1 = __importDefault(__webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.esm.js"));
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var styled_components_1 = __importStar(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
var config_1 = __webpack_require__(/*! ../config/config */ "./node_modules/react-search-autocomplete/dist/config/config.js");
var utils_1 = __webpack_require__(/*! ../utils/utils */ "./node_modules/react-search-autocomplete/dist/utils/utils.js");
var Results_1 = __importDefault(__webpack_require__(/*! ./Results */ "./node_modules/react-search-autocomplete/dist/components/Results.js"));
var SearchInput_1 = __importDefault(__webpack_require__(/*! ./SearchInput */ "./node_modules/react-search-autocomplete/dist/components/SearchInput.js"));
exports.DEFAULT_INPUT_DEBOUNCE = 200;
exports.MAX_RESULTS = 10;
function ReactSearchAutocomplete(_a) {
    var _b = _a.items, items = _b === void 0 ? [] : _b, _c = _a.fuseOptions, fuseOptions = _c === void 0 ? config_1.defaultFuseOptions : _c, _d = _a.inputDebounce, inputDebounce = _d === void 0 ? exports.DEFAULT_INPUT_DEBOUNCE : _d, _e = _a.onSearch, onSearch = _e === void 0 ? function () { } : _e, _f = _a.onHover, onHover = _f === void 0 ? function () { } : _f, _g = _a.onSelect, onSelect = _g === void 0 ? function () { } : _g, _h = _a.onFocus, onFocus = _h === void 0 ? function () { } : _h, _j = _a.onClear, onClear = _j === void 0 ? function () { } : _j, _k = _a.showIcon, showIcon = _k === void 0 ? true : _k, _l = _a.showClear, showClear = _l === void 0 ? true : _l, _m = _a.maxResults, maxResults = _m === void 0 ? exports.MAX_RESULTS : _m, _o = _a.placeholder, placeholder = _o === void 0 ? '' : _o, _p = _a.autoFocus, autoFocus = _p === void 0 ? false : _p, _q = _a.styling, styling = _q === void 0 ? {} : _q, _r = _a.resultStringKeyName, resultStringKeyName = _r === void 0 ? 'name' : _r, _s = _a.inputSearchString, inputSearchString = _s === void 0 ? '' : _s, formatResult = _a.formatResult, _t = _a.showNoResults, showNoResults = _t === void 0 ? true : _t, _u = _a.showNoResultsText, showNoResultsText = _u === void 0 ? 'No results' : _u, _v = _a.showItemsOnFocus, showItemsOnFocus = _v === void 0 ? false : _v;
    var theme = __assign(__assign({}, config_1.defaultTheme), styling);
    var options = __assign(__assign({}, config_1.defaultFuseOptions), fuseOptions);
    var fuse = new fuse_js_1.default(items, options);
    fuse.setCollection(items);
    var _w = (0, react_1.useState)(inputSearchString), searchString = _w[0], setSearchString = _w[1];
    var _x = (0, react_1.useState)([]), results = _x[0], setResults = _x[1];
    var _y = (0, react_1.useState)(0), highlightedItem = _y[0], setHighlightedItem = _y[1];
    var _z = (0, react_1.useState)(false), isSearchComplete = _z[0], setIsSearchComplete = _z[1];
    var _0 = (0, react_1.useState)(false), isTyping = _0[0], setIsTyping = _0[1];
    var _1 = (0, react_1.useState)(false), showNoResultsFlag = _1[0], setShowNoResultsFlag = _1[1];
    var _2 = (0, react_1.useState)(false), hasFocus = _2[0], setHasFocus = _2[1];
    (0, react_1.useEffect)(function () {
        setSearchString(inputSearchString);
    }, [inputSearchString]);
    (0, react_1.useEffect)(function () {
        (searchString === null || searchString === void 0 ? void 0 : searchString.length) > 0 &&
            results &&
            (results === null || results === void 0 ? void 0 : results.length) > 0 &&
            setResults(fuseResults(searchString));
    }, [items]);
    (0, react_1.useEffect)(function () {
        if (showNoResults &&
            searchString.length > 0 &&
            !isTyping &&
            results.length === 0 &&
            !isSearchComplete) {
            setShowNoResultsFlag(true);
        }
        else {
            setShowNoResultsFlag(false);
        }
    }, [isTyping, showNoResults, isSearchComplete, searchString, results]);
    (0, react_1.useEffect)(function () {
        if (showItemsOnFocus && results.length === 0 && searchString.length === 0 && hasFocus) {
            setResults(items.slice(0, maxResults));
        }
    }, [showItemsOnFocus, results, searchString, hasFocus]);
    (0, react_1.useEffect)(function () {
        var handleDocumentClick = function () {
            eraseResults();
            setHasFocus(false);
        };
        document.addEventListener('click', handleDocumentClick);
        return function () { return document.removeEventListener('click', handleDocumentClick); };
    }, []);
    var handleOnFocus = function (event) {
        onFocus(event);
        setHasFocus(true);
    };
    var callOnSearch = function (keyword) {
        var newResults = [];
        (keyword === null || keyword === void 0 ? void 0 : keyword.length) > 0 && (newResults = fuseResults(keyword));
        setResults(newResults);
        onSearch(keyword, newResults);
        setIsTyping(false);
    };
    var handleOnSearch = react_1.default.useCallback(inputDebounce > 0
        ? (0, utils_1.debounce)(function (keyword) { return callOnSearch(keyword); }, inputDebounce)
        : function (keyword) { return callOnSearch(keyword); }, [items]);
    var handleOnClick = function (result) {
        eraseResults();
        onSelect(result);
        setSearchString(result[resultStringKeyName]);
        setHighlightedItem(0);
    };
    var fuseResults = function (keyword) {
        return fuse
            .search(keyword, { limit: maxResults })
            .map(function (result) { return (__assign({}, result.item)); })
            .slice(0, maxResults);
    };
    var handleSetSearchString = function (_a) {
        var target = _a.target;
        var keyword = target.value;
        setSearchString(keyword);
        handleOnSearch(keyword);
        setIsTyping(true);
        if (isSearchComplete) {
            setIsSearchComplete(false);
        }
    };
    var eraseResults = function () {
        setResults([]);
        setIsSearchComplete(true);
    };
    var handleSetHighlightedItem = function (_a) {
        var index = _a.index, event = _a.event;
        var itemIndex = 0;
        var setValues = function (index) {
            setHighlightedItem(index);
            onHover(results[index]);
        };
        if (index !== undefined) {
            setHighlightedItem(index);
            onHover(results[index]);
        }
        else if (event) {
            switch (event.key) {
                case 'Enter':
                    if (results.length > 0) {
                        onSelect(results[highlightedItem]);
                        setSearchString(results[highlightedItem][resultStringKeyName]);
                        setHighlightedItem(0);
                    }
                    eraseResults();
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    itemIndex = highlightedItem > 0 ? highlightedItem - 1 : results.length - 1;
                    setValues(itemIndex);
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    itemIndex = highlightedItem < results.length - 1 ? highlightedItem + 1 : 0;
                    setValues(itemIndex);
                    break;
                default:
                    break;
            }
        }
    };
    return ((0, jsx_runtime_1.jsx)(styled_components_1.ThemeProvider, __assign({ theme: theme }, { children: (0, jsx_runtime_1.jsx)(StyledReactSearchAutocomplete, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "wrapper" }, { children: [(0, jsx_runtime_1.jsx)(SearchInput_1.default, { searchString: searchString, setSearchString: handleSetSearchString, autoFocus: autoFocus, onFocus: handleOnFocus, onClear: onClear, placeholder: placeholder, showIcon: showIcon, showClear: showClear, setHighlightedItem: handleSetHighlightedItem }), (0, jsx_runtime_1.jsx)(Results_1.default, { results: results, onClick: handleOnClick, setSearchString: setSearchString, showIcon: showIcon, maxResults: maxResults, resultStringKeyName: resultStringKeyName, formatResult: formatResult, highlightedItem: highlightedItem, setHighlightedItem: handleSetHighlightedItem, showNoResultsFlag: showNoResultsFlag, showNoResultsText: showNoResultsText })] })) }) })));
}
exports["default"] = ReactSearchAutocomplete;
var StyledReactSearchAutocomplete = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n\n  height: ", ";\n\n  > .wrapper {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n\n    border: ", ";\n    border-radius: ", ";\n\n    background-color: ", ";\n    color: ", ";\n\n    font-size: ", ";\n    font-family: ", ";\n\n    z-index: ", ";\n\n    &:hover {\n      box-shadow: ", ";\n    }\n    &:active {\n      box-shadow: ", ";\n    }\n    &:focus-within {\n      box-shadow: ", ";\n    }\n  }\n"], ["\n  position: relative;\n\n  height: ", ";\n\n  > .wrapper {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n\n    border: ", ";\n    border-radius: ", ";\n\n    background-color: ", ";\n    color: ", ";\n\n    font-size: ", ";\n    font-family: ", ";\n\n    z-index: ", ";\n\n    &:hover {\n      box-shadow: ", ";\n    }\n    &:active {\n      box-shadow: ", ";\n    }\n    &:focus-within {\n      box-shadow: ", ";\n    }\n  }\n"])), function (props) { return parseInt(props.theme.height) + 2 + 'px'; }, function (props) { return props.theme.border; }, function (props) { return props.theme.borderRadius; }, function (props) { return props.theme.backgroundColor; }, function (props) { return props.theme.color; }, function (props) { return props.theme.fontSize; }, function (props) { return props.theme.fontFamily; }, function (props) { return props.theme.zIndex; }, function (props) { return props.theme.boxShadow; }, function (props) { return props.theme.boxShadow; }, function (props) { return props.theme.boxShadow; });
var templateObject_1;


/***/ },

/***/ "./node_modules/react-search-autocomplete/dist/components/Results.js"
/*!***************************************************************************!*\
  !*** ./node_modules/react-search-autocomplete/dist/components/Results.js ***!
  \***************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
var SearchIcon_1 = __webpack_require__(/*! ./SearchIcon */ "./node_modules/react-search-autocomplete/dist/components/SearchIcon.js");
function Results(_a) {
    var _b = _a.results, results = _b === void 0 ? [] : _b, onClick = _a.onClick, setSearchString = _a.setSearchString, showIcon = _a.showIcon, maxResults = _a.maxResults, _c = _a.resultStringKeyName, resultStringKeyName = _c === void 0 ? 'name' : _c, highlightedItem = _a.highlightedItem, setHighlightedItem = _a.setHighlightedItem, formatResult = _a.formatResult, _d = _a.showNoResultsFlag, showNoResultsFlag = _d === void 0 ? true : _d, _e = _a.showNoResultsText, showNoResultsText = _e === void 0 ? 'No results' : _e;
    var formatResultWithKey = formatResult
        ? formatResult
        : function (item) { return item[resultStringKeyName]; };
    var handleClick = function (result) {
        onClick(result);
        setSearchString(result[resultStringKeyName]);
    };
    var handleMouseDown = function (_a) {
        var event = _a.event, result = _a.result;
        if (event.button === 0) {
            event.preventDefault();
            handleClick(result);
        }
    };
    if (showNoResultsFlag) {
        return ((0, jsx_runtime_1.jsx)(ResultsWrapper, { children: (0, jsx_runtime_1.jsxs)("li", __assign({ "data-test": "no-results-message" }, { children: [(0, jsx_runtime_1.jsx)(SearchIcon_1.SearchIcon, { showIcon: showIcon }), (0, jsx_runtime_1.jsx)("div", __assign({ className: "ellipsis" }, { children: showNoResultsText }))] })) }));
    }
    if ((results === null || results === void 0 ? void 0 : results.length) <= 0 && !showNoResultsFlag) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(ResultsWrapper, { children: results.slice(0, maxResults).map(function (result, index) { return ((0, jsx_runtime_1.jsxs)("li", __assign({ className: highlightedItem === index ? 'selected' : '', onMouseEnter: function () { return setHighlightedItem({ index: index }); }, "data-test": "result", onMouseDown: function (event) { return handleMouseDown({ event: event, result: result }); }, onClick: function () { return handleClick(result); } }, { children: [(0, jsx_runtime_1.jsx)(SearchIcon_1.SearchIcon, { showIcon: showIcon }), (0, jsx_runtime_1.jsx)("div", __assign({ className: "ellipsis", title: result[resultStringKeyName] }, { children: formatResultWithKey(result) }))] }), "rsa-result-".concat(result.id))); }) }));
}
exports["default"] = Results;
var ResultsWrapper = function (_a) {
    var children = _a.children;
    return ((0, jsx_runtime_1.jsxs)(StyledResults, { children: [(0, jsx_runtime_1.jsx)("div", { className: "line" }), (0, jsx_runtime_1.jsx)("ul", { children: children })] }));
};
var StyledResults = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  > div.line {\n    border-top-color: ", ";\n    border-top-style: solid;\n    border-top-width: 1px;\n\n    margin-bottom: 0px;\n    margin-left: 14px;\n    margin-right: 20px;\n    margin-top: 0px;\n\n    padding-bottom: 4px;\n  }\n\n  > ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0px 0 16px 0;\n    max-height: ", ";\n\n    > li {\n      display: flex;\n      align-items: center;\n      padding: 4px 0 4px 0;\n\n      > div {\n        margin-left: 13px;\n      }\n    }\n  }\n\n  .ellipsis {\n    text-align: left;\n    width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  .selected {\n    background-color: ", ";\n  }\n"], ["\n  > div.line {\n    border-top-color: ", ";\n    border-top-style: solid;\n    border-top-width: 1px;\n\n    margin-bottom: 0px;\n    margin-left: 14px;\n    margin-right: 20px;\n    margin-top: 0px;\n\n    padding-bottom: 4px;\n  }\n\n  > ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0px 0 16px 0;\n    max-height: ", ";\n\n    > li {\n      display: flex;\n      align-items: center;\n      padding: 4px 0 4px 0;\n\n      > div {\n        margin-left: 13px;\n      }\n    }\n  }\n\n  .ellipsis {\n    text-align: left;\n    width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  .selected {\n    background-color: ", ";\n  }\n"])), function (props) { return props.theme.lineColor; }, function (props) { return props.theme.maxHeight; }, function (props) { return props.theme.hoverBackgroundColor; });
var templateObject_1;


/***/ },

/***/ "./node_modules/react-search-autocomplete/dist/components/SearchIcon.js"
/*!******************************************************************************!*\
  !*** ./node_modules/react-search-autocomplete/dist/components/SearchIcon.js ***!
  \******************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchIcon = void 0;
var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
var SearchIcon = function (_a) {
    var showIcon = _a.showIcon;
    if (!showIcon) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(StyledSearchIcon, __assign({ className: "search-icon", width: 20, height: 20, focusable: "false", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }) })));
};
exports.SearchIcon = SearchIcon;
var StyledSearchIcon = styled_components_1.default.svg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex-shrink: 0;\n  margin: ", ";\n  fill: ", ";\n"], ["\n  flex-shrink: 0;\n  margin: ", ";\n  fill: ", ";\n"])), function (props) { return props.theme.searchIconMargin; }, function (props) { return props.theme.iconColor; });
var templateObject_1;


/***/ },

/***/ "./node_modules/react-search-autocomplete/dist/components/SearchInput.js"
/*!*******************************************************************************!*\
  !*** ./node_modules/react-search-autocomplete/dist/components/SearchInput.js ***!
  \*******************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
var ClearIcon_1 = __webpack_require__(/*! ./ClearIcon */ "./node_modules/react-search-autocomplete/dist/components/ClearIcon.js");
var SearchIcon_1 = __webpack_require__(/*! ./SearchIcon */ "./node_modules/react-search-autocomplete/dist/components/SearchIcon.js");
function SearchInput(_a) {
    var searchString = _a.searchString, setSearchString = _a.setSearchString, setHighlightedItem = _a.setHighlightedItem, autoFocus = _a.autoFocus, onFocus = _a.onFocus, onClear = _a.onClear, placeholder = _a.placeholder, _b = _a.showIcon, showIcon = _b === void 0 ? true : _b, _c = _a.showClear, showClear = _c === void 0 ? true : _c;
    var ref = (0, react_1.useRef)(null);
    var manualFocus = true;
    var setFocus = function () {
        manualFocus = false;
        (ref === null || ref === void 0 ? void 0 : ref.current) && ref.current.focus();
        manualFocus = true;
    };
    var handleOnFocus = function (event) {
        manualFocus && onFocus(event);
    };
    return ((0, jsx_runtime_1.jsxs)(StyledSearchInput, { children: [(0, jsx_runtime_1.jsx)(SearchIcon_1.SearchIcon, { showIcon: showIcon }), (0, jsx_runtime_1.jsx)("input", { ref: ref, spellCheck: false, value: searchString, onChange: setSearchString, onFocus: handleOnFocus, placeholder: placeholder, autoFocus: autoFocus, onKeyDown: function (event) { return setHighlightedItem({ event: event }); }, "data-test": "search-input" }), (0, jsx_runtime_1.jsx)(ClearIcon_1.ClearIcon, { showClear: showClear, setSearchString: setSearchString, searchString: searchString, onClear: onClear, setFocus: setFocus })] }));
}
exports["default"] = SearchInput;
var StyledSearchInput = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-height: ", ";\n  width: 100%;\n\n  display: flex;\n  align-items: center;\n\n  > input {\n    width: 100%;\n\n    padding: 0 0 0 13px;\n\n    border: none;\n    outline: none;\n\n    background-color: rgba(0, 0, 0, 0);\n    font-size: inherit;\n    font-family: inherit;\n\n    color: ", ";\n\n    ::placeholder {\n      color: ", ";\n      opacity: 1;\n\n      :-ms-input-placeholder {\n        color: ", ";\n      }\n\n      ::-ms-input-placeholder {\n        color: ", ";\n      }\n    }\n  }\n"], ["\n  min-height: ", ";\n  width: 100%;\n\n  display: flex;\n  align-items: center;\n\n  > input {\n    width: 100%;\n\n    padding: 0 0 0 13px;\n\n    border: none;\n    outline: none;\n\n    background-color: rgba(0, 0, 0, 0);\n    font-size: inherit;\n    font-family: inherit;\n\n    color: ", ";\n\n    ::placeholder {\n      color: ", ";\n      opacity: 1;\n\n      :-ms-input-placeholder {\n        color: ", ";\n      }\n\n      ::-ms-input-placeholder {\n        color: ", ";\n      }\n    }\n  }\n"])), function (props) { return props.theme.height; }, function (props) { return props.theme.color; }, function (props) { return props.theme.placeholderColor; }, function (props) { return props.theme.placeholderColor; }, function (props) { return props.theme.placeholderColor; });
var templateObject_1;


/***/ },

/***/ "./node_modules/react-search-autocomplete/dist/config/config.js"
/*!**********************************************************************!*\
  !*** ./node_modules/react-search-autocomplete/dist/config/config.js ***!
  \**********************************************************************/
(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultFuseOptions = exports.defaultTheme = void 0;
var defaultTheme = {
    height: '44px',
    border: '1px solid #dfe1e5',
    borderRadius: '24px',
    backgroundColor: 'white',
    boxShadow: 'rgba(32, 33, 36, 0.28) 0px 1px 6px 0px',
    hoverBackgroundColor: '#eee',
    color: '#212121',
    fontSize: '16px',
    fontFamily: 'Arial',
    iconColor: 'grey',
    lineColor: 'rgb(232, 234, 237)',
    placeholderColor: 'grey',
    zIndex: 0,
    clearIconMargin: '3px 14px 0 0',
    searchIconMargin: '0 0 0 16px'
};
exports.defaultTheme = defaultTheme;
var defaultFuseOptions = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    minMatchCharLength: 1,
    keys: ['name']
};
exports.defaultFuseOptions = defaultFuseOptions;


/***/ },

/***/ "./node_modules/react-search-autocomplete/dist/index.js"
/*!**************************************************************!*\
  !*** ./node_modules/react-search-autocomplete/dist/index.js ***!
  \**************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReactSearchAutocomplete = void 0;
var ReactSearchAutocomplete_js_1 = __importDefault(__webpack_require__(/*! ./components/ReactSearchAutocomplete.js */ "./node_modules/react-search-autocomplete/dist/components/ReactSearchAutocomplete.js"));
exports.ReactSearchAutocomplete = ReactSearchAutocomplete_js_1.default;


/***/ },

/***/ "./node_modules/react-search-autocomplete/dist/utils/utils.js"
/*!********************************************************************!*\
  !*** ./node_modules/react-search-autocomplete/dist/utils/utils.js ***!
  \********************************************************************/
(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.debounce = void 0;
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this;
        var args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        };
        if (immediate && !timeout)
            func.apply(context, args);
        timeout && clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
exports.debounce = debounce;


/***/ },

/***/ "./node_modules/react-to-print/lib/index.js"
/*!**************************************************!*\
  !*** ./node_modules/react-to-print/lib/index.js ***!
  \**************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! react */ "./node_modules/react/index.js"),__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js")):0}("undefined"!=typeof self?self:this,(function(e,t){return function(){"use strict";var r={328:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.PrintContextConsumer=t.PrintContext=void 0;var n=r(496),o=Object.prototype.hasOwnProperty.call(n,"createContext");t.PrintContext=o?n.createContext({}):null,t.PrintContextConsumer=t.PrintContext?t.PrintContext.Consumer:function(){return null}},428:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.ReactToPrint=void 0;var n=r(316),o=r(496),i=r(190),a=r(328),c=r(940),s=function(e){function t(){var t=e.apply(this,n.__spreadArray([],n.__read(arguments),!1))||this;return t.startPrint=function(e){var r=t.props,n=r.onAfterPrint,o=r.onPrintError,i=r.print,a=r.documentTitle;setTimeout((function(){var r,c;if(e.contentWindow)if(e.contentWindow.focus(),i)i(e).then((function(){return null==n?void 0:n()})).then((function(){return t.handleRemoveIframe()})).catch((function(e){o?o("print",e):t.logMessages(["An error was thrown by the specified `print` function"])}));else{if(e.contentWindow.print){var s=null!==(c=null===(r=e.contentDocument)||void 0===r?void 0:r.title)&&void 0!==c?c:"",u=e.ownerDocument.title;a&&(e.ownerDocument.title=a,e.contentDocument&&(e.contentDocument.title=a)),e.contentWindow.print(),a&&(e.ownerDocument.title=u,e.contentDocument&&(e.contentDocument.title=s))}else t.logMessages(["Printing for this browser is not currently possible: the browser does not have a `print` method available for iframes."]);null==n||n(),t.handleRemoveIframe()}else t.logMessages(["Printing failed because the `contentWindow` of the print iframe did not load. This is possibly an error with `react-to-print`. Please file an issue: https://github.com/gregnb/react-to-print/issues/"])}),500)},t.triggerPrint=function(e){var r=t.props,n=r.onBeforePrint,o=r.onPrintError;if(n){var i=n();i&&"function"==typeof i.then?i.then((function(){t.startPrint(e)})).catch((function(e){o&&o("onBeforePrint",e)})):t.startPrint(e)}else t.startPrint(e)},t.handlePrint=function(e){var r=t.props,o=r.bodyClass,a=r.content,c=r.copyStyles,s=r.fonts,u=r.pageStyle,l=r.nonce,f="function"==typeof e?e():null;if(f&&"function"==typeof a&&t.logMessages(['"react-to-print" received a `content` prop and a content param passed the callback return by `useReactToPrint. The `content` prop will be ignored.'],"warning"),f||"function"!=typeof a||(f=a()),void 0!==f)if(null!==f){var d=document.createElement("iframe");d.width="".concat(document.documentElement.clientWidth,"px"),d.height="".concat(document.documentElement.clientHeight,"px"),d.style.position="absolute",d.style.top="-".concat(document.documentElement.clientHeight+100,"px"),d.style.left="-".concat(document.documentElement.clientWidth+100,"px"),d.id="printWindow",d.srcdoc="<!DOCTYPE html>";var p=(0,i.findDOMNode)(f);if(p){var h=p.cloneNode(!0),y=h instanceof Text,b=document.querySelectorAll("link[rel~='stylesheet'], link[as='style']"),v=y?[]:h.querySelectorAll("img"),g=y?[]:h.querySelectorAll("video"),m=s?s.length:0;t.numResourcesToLoad=b.length+v.length+g.length+m,t.resourcesLoaded=[],t.resourcesErrored=[];var _=function(e,r){t.resourcesLoaded.includes(e)?t.logMessages(["Tried to mark a resource that has already been handled",e],"debug"):(r?(t.logMessages(n.__spreadArray(['"react-to-print" was unable to load a resource but will continue attempting to print the page'],n.__read(r),!1)),t.resourcesErrored.push(e)):t.resourcesLoaded.push(e),t.resourcesLoaded.length+t.resourcesErrored.length===t.numResourcesToLoad&&t.triggerPrint(d))};d.onload=function(){var e,r,i,a;d.onload=null;var f=d.contentDocument||(null===(r=d.contentWindow)||void 0===r?void 0:r.document);if(f){f.body.appendChild(h),s&&((null===(i=d.contentDocument)||void 0===i?void 0:i.fonts)&&(null===(a=d.contentWindow)||void 0===a?void 0:a.FontFace)?s.forEach((function(e){var t=new FontFace(e.family,e.source,{weight:e.weight,style:e.style});d.contentDocument.fonts.add(t),t.loaded.then((function(){_(t)})).catch((function(e){_(t,["Failed loading the font:",t,"Load error:",e])}))})):(s.forEach((function(e){return _(e)})),t.logMessages(['"react-to-print" is not able to load custom fonts because the browser does not support the FontFace API but will continue attempting to print the page'])));var b="function"==typeof u?u():u;if("string"!=typeof b)t.logMessages(['"react-to-print" expected a "string" from `pageStyle` but received "'.concat(typeof b,'". Styles from `pageStyle` will not be applied.')]);else{var m=f.createElement("style");l&&(m.setAttribute("nonce",l),f.head.setAttribute("nonce",l)),m.appendChild(f.createTextNode(b)),f.head.appendChild(m)}if(o&&(e=f.body.classList).add.apply(e,n.__spreadArray([],n.__read(o.split(" ")),!1)),!y){for(var w=y?[]:p.querySelectorAll("canvas"),P=f.querySelectorAll("canvas"),O=0;O<w.length;++O){var x=w[O],S=P[O].getContext("2d");S&&S.drawImage(x,0,0)}var E=function(e){var t=v[e],r=t.getAttribute("src");if(r){var n=new Image;n.onload=function(){return _(t)},n.onerror=function(e,r,n,o,i){return _(t,["Error loading <img>",t,"Error",i])},n.src=r}else _(t,['Found an <img> tag with an empty "src" attribute. This prevents pre-loading it. The <img> is:',t])};for(O=0;O<v.length;O++)E(O);var T=function(e){var t=g[e];t.preload="auto";var r=t.getAttribute("poster");if(r){var n=new Image;n.onload=function(){return _(t)},n.onerror=function(e,n,o,i,a){return _(t,["Error loading video poster",r,"for video",t,"Error:",a])},n.src=r}else t.readyState>=2?_(t):(t.onloadeddata=function(){return _(t)},t.onerror=function(e,r,n,o,i){return _(t,["Error loading video",t,"Error",i])},t.onstalled=function(){return _(t,["Loading video stalled, skipping",t])})};for(O=0;O<g.length;O++)T(O);var j="input",C=p.querySelectorAll(j),A=f.querySelectorAll(j);for(O=0;O<C.length;O++)A[O].value=C[O].value;var k="input[type=checkbox],input[type=radio]",R=p.querySelectorAll(k),M=f.querySelectorAll(k);for(O=0;O<R.length;O++)M[O].checked=R[O].checked;var D="select",I=p.querySelectorAll(D),q=f.querySelectorAll(D);for(O=0;O<I.length;O++)q[O].value=I[O].value}if(c)for(var F=document.querySelectorAll("style, link[rel~='stylesheet'], link[as='style']"),W=function(e,r){var n=F[e];if("style"===n.tagName.toLowerCase()){var o=f.createElement(n.tagName),i=n.sheet;if(i){var a="";try{for(var c=i.cssRules.length,s=0;s<c;++s)"string"==typeof i.cssRules[s].cssText&&(a+="".concat(i.cssRules[s].cssText,"\r\n"))}catch(e){t.logMessages(["A stylesheet could not be accessed. This is likely due to the stylesheet having cross-origin imports, and many browsers block script access to cross-origin stylesheets. See https://github.com/gregnb/react-to-print/issues/429 for details. You may be able to load the sheet by both marking the stylesheet with the cross `crossorigin` attribute, and setting the `Access-Control-Allow-Origin` header on the server serving the stylesheet. Alternatively, host the stylesheet on your domain to avoid this issue entirely.",n],"warning")}o.setAttribute("id","react-to-print-".concat(e)),l&&o.setAttribute("nonce",l),o.appendChild(f.createTextNode(a)),f.head.appendChild(o)}}else if(n.getAttribute("href"))if(n.hasAttribute("disabled"))t.logMessages(["`react-to-print` encountered a <link> tag with a `disabled` attribute and will ignore it. Note that the `disabled` attribute is deprecated, and some browsers ignore it. You should stop using it. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-disabled. The <link> is:",n],"warning"),_(n);else{for(var u=f.createElement(n.tagName),d=(s=0,n.attributes.length);s<d;++s){var p=n.attributes[s];p&&u.setAttribute(p.nodeName,p.nodeValue||"")}u.onload=function(){return _(u)},u.onerror=function(e,t,r,n,o){return _(u,["Failed to load",u,"Error:",o])},l&&u.setAttribute("nonce",l),f.head.appendChild(u)}else t.logMessages(["`react-to-print` encountered a <link> tag with an empty `href` attribute. In addition to being invalid HTML, this can cause problems in many browsers, and so the <link> was not loaded. The <link> is:",n],"warning"),_(n)},L=(O=0,F.length);O<L;++O)W(O)}0!==t.numResourcesToLoad&&c||t.triggerPrint(d)},t.handleRemoveIframe(!0),document.body.appendChild(d)}else t.logMessages(['"react-to-print" could not locate the DOM node corresponding with the `content` prop'])}else t.logMessages(['There is nothing to print because the "content" prop returned "null". Please ensure "content" is renderable before allowing "react-to-print" to be called.']);else t.logMessages(["To print a functional component ensure it is wrapped with `React.forwardRef`, and ensure the forwarded ref is used. See the README for an example: https://github.com/gregnb/react-to-print#examples"])},t.handleRemoveIframe=function(e){var r=t.props.removeAfterPrint;if(e||r){var n=document.getElementById("printWindow");n&&document.body.removeChild(n)}},t.logMessages=function(e,r){void 0===r&&(r="error"),t.props.suppressErrors||("error"===r?console.error(e):"warning"===r?console.warn(e):"debug"===r&&console.debug(e))},t}return n.__extends(t,e),t.prototype.handleClick=function(e,t){var r=this,n=this.props,o=n.onBeforeGetContent,i=n.onPrintError;if(o){var a=o();a&&"function"==typeof a.then?a.then((function(){return r.handlePrint(t)})).catch((function(e){i&&i("onBeforeGetContent",e)})):this.handlePrint(t)}else this.handlePrint(t)},t.prototype.render=function(){var e=this.props,t=e.children,r=e.trigger;if(r)return o.cloneElement(r(),{onClick:this.handleClick.bind(this)});if(!a.PrintContext)return this.logMessages(['"react-to-print" requires React ^16.3.0 to be able to use "PrintContext"']),null;var n={handlePrint:this.handleClick.bind(this)};return o.createElement(a.PrintContext.Provider,{value:n},t)},t.defaultProps=c.defaultProps,t}(o.Component);t.ReactToPrint=s},940:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultProps=void 0,t.defaultProps={copyStyles:!0,pageStyle:"\n        @page {\n            /* Remove browser default header (title) and footer (url) */\n            margin: 0;\n        }\n        @media print {\n            body {\n                /* Tell browsers to print background colors */\n                -webkit-print-color-adjust: exact; /* Chrome/Safari/Edge/Opera */\n                color-adjust: exact; /* Firefox */\n            }\n        }\n    ",removeAfterPrint:!1,suppressErrors:!1}},892:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.useReactToPrint=void 0;var n=r(316),o=r(496),i=r(428),a=r(940),c=r(860),s=Object.prototype.hasOwnProperty.call(o,"useMemo")&&Object.prototype.hasOwnProperty.call(o,"useCallback");t.useReactToPrint=function(e){if(!s)return e.suppressErrors||console.error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"'),function(){throw new Error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"')};var t=o.useMemo((function(){return new i.ReactToPrint(n.__assign(n.__assign({},a.defaultProps),e))}),[e]);return o.useCallback((function(e,r){return(0,c.wrapCallbackWithArgs)(t,t.handleClick,r)(e)}),[t])}},860:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.wrapCallbackWithArgs=void 0;var n=r(316);t.wrapCallbackWithArgs=function(e,t){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];return function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];return t.apply(e,n.__spreadArray(n.__spreadArray([],n.__read(o),!1),n.__read(r),!1))}}},496:function(t){t.exports=e},190:function(e){e.exports=t},316:function(e,t,r){r.r(t),r.d(t,{__addDisposableResource:function(){return D},__assign:function(){return i},__asyncDelegator:function(){return S},__asyncGenerator:function(){return x},__asyncValues:function(){return E},__await:function(){return O},__awaiter:function(){return h},__classPrivateFieldGet:function(){return k},__classPrivateFieldIn:function(){return M},__classPrivateFieldSet:function(){return R},__createBinding:function(){return b},__decorate:function(){return c},__disposeResources:function(){return q},__esDecorate:function(){return u},__exportStar:function(){return v},__extends:function(){return o},__generator:function(){return y},__importDefault:function(){return A},__importStar:function(){return C},__makeTemplateObject:function(){return T},__metadata:function(){return p},__param:function(){return s},__propKey:function(){return f},__read:function(){return m},__rest:function(){return a},__runInitializers:function(){return l},__setFunctionName:function(){return d},__spread:function(){return _},__spreadArray:function(){return P},__spreadArrays:function(){return w},__values:function(){return g}});var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function c(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a}function s(e,t){return function(r,n){t(r,n,e)}}function u(e,t,r,n,o,i){function a(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var c,s=n.kind,u="getter"===s?"get":"setter"===s?"set":"value",l=!t&&e?n.static?e:e.prototype:null,f=t||(l?Object.getOwnPropertyDescriptor(l,n.name):{}),d=!1,p=r.length-1;p>=0;p--){var h={};for(var y in n)h[y]="access"===y?{}:n[y];for(var y in n.access)h.access[y]=n.access[y];h.addInitializer=function(e){if(d)throw new TypeError("Cannot add initializers after decoration has completed");i.push(a(e||null))};var b=(0,r[p])("accessor"===s?{get:f.get,set:f.set}:f[u],h);if("accessor"===s){if(void 0===b)continue;if(null===b||"object"!=typeof b)throw new TypeError("Object expected");(c=a(b.get))&&(f.get=c),(c=a(b.set))&&(f.set=c),(c=a(b.init))&&o.unshift(c)}else(c=a(b))&&("field"===s?o.unshift(c):f[u]=c)}l&&Object.defineProperty(l,n.name,f),d=!0}function l(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0}function f(e){return"symbol"==typeof e?e:"".concat(e)}function d(e,t,r){return"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})}function p(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function h(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{s(n.next(e))}catch(e){i(e)}}function c(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,c)}s((n=n.apply(e,t||[])).next())}))}function y(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(s){return function(c){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,n=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],n=0}finally{r=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}}var b=Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function v(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||b(t,e,r)}function g(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function m(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function _(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(m(arguments[t]));return e}function w(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],a=0,c=i.length;a<c;a++,o++)n[o]=i[a];return n}function P(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function O(e){return this instanceof O?(this.v=e,this):new O(e)}function x(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){i.push([e,t,r,n])>1||c(e,t)}))})}function c(e,t){try{(r=o[e](t)).value instanceof O?Promise.resolve(r.value.v).then(s,u):l(i[0][2],r)}catch(e){l(i[0][3],e)}var r}function s(e){c("next",e)}function u(e){c("throw",e)}function l(e,t){e(t),i.shift(),i.length&&c(i[0][0],i[0][1])}}function S(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:O(e[n](t)),done:!1}:o?o(t):t}:o}}function E(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=g(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){!function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)}(n,o,(t=e[r](t)).done,t.value)}))}}}function T(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var j=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function C(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&b(t,e,r);return j(t,e),t}function A(e){return e&&e.__esModule?e:{default:e}}function k(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function R(e,t,r,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r}function M(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}function D(e,t,r){if(null!=t){if("object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object expected.");var n;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");n=t[Symbol.asyncDispose]}if(void 0===n){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");n=t[Symbol.dispose]}if("function"!=typeof n)throw new TypeError("Object not disposable.");e.stack.push({value:t,dispose:n,async:r})}else r&&e.stack.push({async:!0});return t}var I="function"==typeof SuppressedError?SuppressedError:function(e,t,r){var n=new Error(r);return n.name="SuppressedError",n.error=e,n.suppressed=t,n};function q(e){function t(t){e.error=e.hasError?new I(t,e.error,"An error was suppressed during disposal."):t,e.hasError=!0}return function r(){for(;e.stack.length;){var n=e.stack.pop();try{var o=n.dispose&&n.dispose.call(n.value);if(n.async)return Promise.resolve(o).then(r,(function(e){return t(e),r()}))}catch(e){t(e)}}if(e.hasError)throw e.error}()}t.default={__extends:o,__assign:i,__rest:a,__decorate:c,__param:s,__metadata:p,__awaiter:h,__generator:y,__createBinding:b,__exportStar:v,__values:g,__read:m,__spread:_,__spreadArrays:w,__spreadArray:P,__await:O,__asyncGenerator:x,__asyncDelegator:S,__asyncValues:E,__makeTemplateObject:T,__importStar:C,__importDefault:A,__classPrivateFieldGet:k,__classPrivateFieldSet:R,__classPrivateFieldIn:M,__addDisposableResource:D,__disposeResources:q}}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={exports:{}};return r[e](i,i.exports,o),i.exports}o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){var e=i;Object.defineProperty(e,"__esModule",{value:!0}),e.useReactToPrint=e.ReactToPrint=e.PrintContextConsumer=void 0;var t=o(328);Object.defineProperty(e,"PrintContextConsumer",{enumerable:!0,get:function(){return t.PrintContextConsumer}});var r=o(428);Object.defineProperty(e,"ReactToPrint",{enumerable:!0,get:function(){return r.ReactToPrint}});var n=o(892);Object.defineProperty(e,"useReactToPrint",{enumerable:!0,get:function(){return n.useReactToPrint}});var a=o(428);e.default=a.ReactToPrint}(),i}()}));

/***/ },

/***/ "./node_modules/shallowequal/index.js"
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
(module) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ },

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js"
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerStyleSheet: () => (/* binding */ Ue),
/* harmony export */   StyleSheetConsumer: () => (/* binding */ ue),
/* harmony export */   StyleSheetContext: () => (/* binding */ ce),
/* harmony export */   StyleSheetManager: () => (/* binding */ me),
/* harmony export */   ThemeConsumer: () => (/* binding */ Ge),
/* harmony export */   ThemeContext: () => (/* binding */ Me),
/* harmony export */   ThemeProvider: () => (/* binding */ Le),
/* harmony export */   __PRIVATE__: () => (/* binding */ Ze),
/* harmony export */   createGlobalStyle: () => (/* binding */ $e),
/* harmony export */   css: () => (/* binding */ Ae),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isStyledComponent: () => (/* binding */ _),
/* harmony export */   keyframes: () => (/* binding */ We),
/* harmony export */   useTheme: () => (/* binding */ Xe),
/* harmony export */   version: () => (/* binding */ A),
/* harmony export */   withTheme: () => (/* binding */ Je)
/* harmony export */ });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/cjs/react-is.development.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/styled-components/node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var v=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},g=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!(0,react_is__WEBPACK_IMPORTED_MODULE_0__.typeOf)(t)},S=Object.freeze([]),w=Object.freeze({});function E(e){return"function"==typeof e}function b(e){return true&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function _(e){return e&&"string"==typeof e.styledComponentId}var N="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",A="5.3.11",C="undefined"!=typeof window&&"HTMLElement"in window,I=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&(void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!=="development")),P={},O= true?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:0;function R(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function D(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw false?0:new Error(R.apply(void 0,[O[e]].concat(n)).trim())}var j=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&D(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),T=new Map,x=new Map,k=1,V=function(e){if(T.has(e))return T.get(e);for(;x.has(k);)k++;var t=k++;return true&&((0|t)<0||t>1<<30)&&D(16,""+t),T.set(e,t),x.set(t,e),t},B=function(e){return x.get(e)},z=function(e,t){t>=k&&(k=t+1),T.set(e,t),x.set(t,e)},M="style["+N+'][data-styled-version="5.3.11"]',G=new RegExp("^"+N+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),L=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r)},F=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(G);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(z(u,c),L(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(i)}}},Y=function(){return true?__webpack_require__.nc:0},q=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(N))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(N,"active"),r.setAttribute("data-styled-version","5.3.11");var i=Y();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},H=function(){function e(e){var t=this.element=q(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}D(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),$=function(){function e(e){var t=this.element=q(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),W=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),U=C,J={isServer:!C,useCSSOMInjection:!I},X=function(){function e(e,t,n){void 0===e&&(e=w),void 0===t&&(t={}),this.options=y({},J,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&C&&U&&(U=!1,function(e){for(var t=document.querySelectorAll(M),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(N)&&(F(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return V(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(y({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new W(o):r?new H(o):new $(o),new j(e)));// removed by dead control flow
 var e, t, n, r, o; },t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(V(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(V(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(V(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=B(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(i&&a&&i.size){var c=N+".g"+o+'[id="'+s+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",")})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),Z=/(a)(d)/gi,K=function(e){return String.fromCharCode(e+(e>25?39:97))};function Q(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=K(t%52)+n;return(K(t%52)+n).replace(Z,"$1-$2")}var ee=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},te=function(e){return ee(5381,e)};function ne(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(E(n)&&!_(n))return!1}return!0}var re=te("5.3.11"),oe=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= false&&0,this.componentId=t,this.baseHash=ee(re,t),this.baseStyle=n,X.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var s=_e(this.rules,e,t,n).join(""),i=Q(ee(this.baseHash,s)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a)}o.push(i),this.staticRulesId=i}else{for(var c=this.rules.length,u=ee(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h, true&&(u=ee(u,h+d));else if(h){var p=_e(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=ee(u,f+d),l+=f}}if(l){var m=Q(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y)}o.push(m)}}return o.join(" ")},e}(),se=/^\s*\/\/.*$/gm,ie=[":","[",".","#"];function ae(e){var t,n,r,o,s=void 0===e?w:e,i=s.options,a=void 0===i?w:i,c=s.plugins,u=void 0===c?S:c,l=new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](a),d=[],p=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),f=function(e,r,s){return 0===r&&-1!==ie.indexOf(s[n.length])||s.match(o)?e:"."+t};function m(e,s,i,a){void 0===a&&(a="&");var c=e.replace(se,""),u=s&&i?i+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(i||!s?"":s,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f))},p,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||D(15),ee(e,t.name)}),5381).toString():"",m}var ce=react__WEBPACK_IMPORTED_MODULE_1__.createContext(),ue=ce.Consumer,le=react__WEBPACK_IMPORTED_MODULE_1__.createContext(),de=(le.Consumer,new X),he=ae();function pe(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ce)||de}function fe(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(le)||he}function me(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(e.stylisPlugins),n=t[0],s=t[1],c=pe(),u=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return ae({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n,e.stylisPlugins)||s(e.stylisPlugins)}),[e.stylisPlugins]),react__WEBPACK_IMPORTED_MODULE_1__.createElement(ce.Provider,{value:u},react__WEBPACK_IMPORTED_MODULE_1__.createElement(le.Provider,{value:l}, true?react__WEBPACK_IMPORTED_MODULE_1__.Children.only(e.children):0))}var ye=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=he);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return D(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=he),this.name+e.hash},e}(),ve=/([A-Z])/,ge=/([A-Z])/g,Se=/^ms-/,we=function(e){return"-"+e.toLowerCase()};function Ee(e){return ve.test(e)?e.replace(ge,we).replace(Se,"-ms-"):e}var be=function(e){return null==e||!1===e||""===e};function _e(e,n,r,o){if(Array.isArray(e)){for(var s,i=[],a=0,c=e.length;a<c;a+=1)""!==(s=_e(e[a],n,r,o))&&(Array.isArray(s)?i.push.apply(i,s):i.push(s));return i}if(be(e))return"";if(_(e))return"."+e.styledComponentId;if(E(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return true&&(0,react_is__WEBPACK_IMPORTED_MODULE_0__.isElement)(u)&&console.warn(b(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),_e(u,n,r,o)}var l;return e instanceof ye?r?(e.inject(r,o),e.getName(o)):e:g(e)?function e(t,n){var r,o,s=[];for(var i in t)t.hasOwnProperty(i)&&!be(t[i])&&(Array.isArray(t[i])&&t[i].isCss||E(t[i])?s.push(Ee(i)+":",t[i],";"):g(t[i])?s.push.apply(s,e(t[i],i)):s.push(Ee(i)+": "+(r=i,null==(o=t[i])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__["default"]||r.startsWith("--")?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}var Ne=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ae(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return E(e)||g(e)?Ne(_e(v(S,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ne(_e(v(e,n)))}var Ce=/invalid hook call/i,Ie=new Set,Pe=function(e,t){if(true){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",r=console.error;try{var o=!0;console.error=function(e){if(Ce.test(e))o=!1,Ie.delete(n);else{for(var t=arguments.length,s=new Array(t>1?t-1:0),i=1;i<t;i++)s[i-1]=arguments[i];r.apply(void 0,[e].concat(s))}},(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),o&&!Ie.has(n)&&(console.warn(n),Ie.add(n))}catch(e){Ce.test(e.message)&&Ie.delete(n)}finally{console.error=r}}},Oe=function(e,t,n){return void 0===n&&(n=w),e.theme!==n.theme&&e.theme||t||n.theme},Re=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,De=/(^-|-$)/g;function je(e){return e.replace(Re,"-").replace(De,"")}var Te=function(e){return Q(te(e)>>>0)};function xe(e){return"string"==typeof e&&( false||e.charAt(0)===e.charAt(0).toLowerCase())}var ke=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Ve=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Be(e,t,n){var r=e[n];ke(t)&&ke(r)?ze(r,t):e[n]=t}function ze(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(ke(i))for(var a in i)Ve(a)&&Be(e,i[a],a)}return e}var Me=react__WEBPACK_IMPORTED_MODULE_1__.createContext(),Ge=Me.Consumer;function Le(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Me),n=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return function(e,t){if(!e)return D(14);if(E(e)){var n=e(t);return false||null!==n&&!Array.isArray(n)&&"object"==typeof n?n:D(7)}return Array.isArray(e)||"object"!=typeof e?D(8):t?y({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?react__WEBPACK_IMPORTED_MODULE_1__.createElement(Me.Provider,{value:n},e.children):null}var Fe={};function Ye(e,t,n){var o=_(e),i=!xe(e),a=t.attrs,c=void 0===a?S:a,l=t.componentId,d=void 0===l?function(e,t){var n="string"!=typeof e?"sc":je(e);Fe[n]=(Fe[n]||0)+1;var r=n+"-"+Te("5.3.11"+n+Fe[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):l,h=t.displayName,p=void 0===h?function(e){return xe(e)?"styled."+e:"Styled("+b(e)+")"}(e):h,v=t.displayName&&t.componentId?je(t.displayName)+"-"+t.componentId:t.componentId||d,g=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,N=t.shouldForwardProp;o&&e.shouldForwardProp&&(N=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var A,C=new oe(n,v,o?e.componentStyle:void 0),I=C.isStatic&&0===c.length,P=function(e,t){return function(e,t,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,l=e.shouldForwardProp,d=e.styledComponentId,h=e.target,p=function(e,t,n){void 0===e&&(e=w);var r=y({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in E(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t]})),[r,o]}(Oe(t,(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Me),a)||w,t,o),m=p[0],v=p[1],g=function(e,t,n,r){var o=pe(),s=fe(),i=t?e.generateAndInjectStyles(w,o,s):e.generateAndInjectStyles(n,o,s);return true&&!t&&r&&r(i),i}(i,r,m, true?e.warnTooManyClasses:0),S=n,b=v.$as||t.$as||v.as||t.as||h,_=xe(b),N=v!==t?y({},t,{},v):t,A={};for(var C in N)"$"!==C[0]&&"as"!==C&&("forwardedAs"===C?A.as=N[C]:(l?l(C,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"],b):!_||(0,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"])(C))&&(A[C]=N[C]));return t.style&&v.style!==t.style&&(A.style=y({},t.style,{},v.style)),A.className=Array.prototype.concat(c,d,g!==d?g:null,t.className,v.className).filter(Boolean).join(" "),A.ref=S,(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(b,A)}(A,e,t,I)};return P.displayName=p,(A=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(P)).attrs=g,A.componentStyle=C,A.displayName=p,A.shouldForwardProp=N,A.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):S,A.styledComponentId=v,A.target=o?e.target:e,A.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=r&&r+"-"+(xe(e)?e:je(b(e)));return Ye(e,y({},o,{attrs:g,componentId:s}),n)},Object.defineProperty(A,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?ze({},e.defaultProps,t):t}}), true&&(Pe(p,v),A.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+s+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={}}}}(p,v)),Object.defineProperty(A,"toString",{value:function(){return"."+A.styledComponentId}}),i&&hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(A,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),A}var qe=function(e){return function e(t,r,o){if(void 0===o&&(o=w),!(0,react_is__WEBPACK_IMPORTED_MODULE_0__.isValidElementType)(r))return D(1,String(r));var s=function(){return t(r,o,Ae.apply(void 0,arguments))};return s.withConfig=function(n){return e(t,r,y({},o,{},n))},s.attrs=function(n){return e(t,r,y({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},s}(Ye,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){qe[e]=qe(e)}));var He=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=ne(e),X.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(_e(this.rules,t,n,r).join(""),""),s=this.componentId+e;n.insertRules(s,s,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&X.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function $e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=Ae.apply(void 0,[e].concat(n)),a="sc-global-"+Te(JSON.stringify(i)),u=new He(i,a);function d(e){var t=pe(),n=fe(),o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Me),d=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(t.allocateGSInstance(a)).current;return true&&react__WEBPACK_IMPORTED_MODULE_1__.Children.count(e.children)&&console.warn("The global style component "+a+" was given child JSX. createGlobalStyle does not render children."), true&&i.some((function(e){return"string"==typeof e&&-1!==e.indexOf("@import")}))&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),t.server&&h(d,e,t,o,n),(0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)((function(){if(!t.server)return h(d,e,t,o,n),function(){return u.removeStyles(d,t)}}),[d,e,t,o,n]),null}function h(e,t,n,r,o){if(u.isStatic)u.renderStyles(e,P,n,o);else{var s=y({},t,{theme:Oe(t,r,d.defaultProps)});u.renderStyles(e,s,n,o)}}return true&&Pe(a),react__WEBPACK_IMPORTED_MODULE_1__.memo(d)}function We(e){ true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Ae.apply(void 0,[e].concat(n)).join(""),s=Te(o);return new ye(s,o)}var Ue=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Y();return"<style "+[n&&'nonce="'+n+'"',N+'="true"','data-styled-version="5.3.11"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?D(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return D(2);var n=((t={})[N]="",t["data-styled-version"]="5.3.11",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=Y();return o&&(n.nonce=o),[react__WEBPACK_IMPORTED_MODULE_1__.createElement("style",y({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new X({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?D(2):react__WEBPACK_IMPORTED_MODULE_1__.createElement(me,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return D(3)},e}(),Je=function(e){var t=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function(t,n){var o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Me),i=e.defaultProps,a=Oe(t,o,i);return true&&void 0===a&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'+b(e)+'"'),react__WEBPACK_IMPORTED_MODULE_1__.createElement(e,y({},t,{theme:a,ref:n}))}));return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(t,e),t.displayName="WithTheme("+b(e)+")",t},Xe=function(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Me)},Ze={StyleSheet:X,masterSheet:de}; true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), true&&"undefined"!=typeof window&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (qe);
//# sourceMappingURL=styled-components.browser.esm.js.map


/***/ },

/***/ "./node_modules/styled-components/node_modules/@emotion/unitless/dist/unitless.browser.esm.js"
/*!****************************************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unitlessKeys);


/***/ },

/***/ "./resources/pos/src/shared/option-lists/paperSize.json"
/*!**************************************************************!*\
  !*** ./resources/pos/src/shared/option-lists/paperSize.json ***!
  \**************************************************************/
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"label":"40 per sheet (a4) (1.799 * 1.003) | printer: A4 (8.27 * 11.69 in)","value":1},{"label":"30 per sheet (2.625 * 1) | printer: A4 (8.27 * 11.69 in)","value":2},{"label":"24 per sheet (a4) (2.48 * 1.334) | printer: A4 (8.27 * 11.69 in)","value":3},{"label":"20 per sheet (4 * 1) | printer: A4 (8.27 * 11.69 in)","value":4},{"label":"18 per sheet (a4) (2.5 * 1.835) | printer: A4 (8.27 * 11.69 in)","value":5},{"label":"14 per sheet (4 * 1.33) | printer: A4 (8.27 * 11.69 in)","value":6},{"label":"12 per sheet (a4) (2.5 * 2.834) | printer: A4 (8.27 * 11.69 in)","value":7},{"label":"10 per sheet (4 * 2) | printer: A4 (8.27 * 11.69 in)","value":8},{"label":"thermal label (58mm roll) | printer: 58mm (2.28 in width)","value":9}]');

/***/ }

}]);