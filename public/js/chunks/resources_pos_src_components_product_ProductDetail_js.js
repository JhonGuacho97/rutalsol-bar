(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_pos_src_components_product_ProductDetail_js"],{

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

/***/ "./resources/pos/src/components/header/HeaderTitle.js"
/*!************************************************************!*\
  !*** ./resources/pos/src/components/header/HeaderTitle.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var HeaderTitle = function HeaderTitle(props) {
  var title = props.title,
    to = props.to,
    editLink = props.editLink;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "d-md-flex align-items-center justify-content-between mb-5",
    children: [title ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
      className: "mb-0",
      children: title
    }) : '', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "text-end mt-4 mt-md-0",
      children: [editLink ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
        to: editLink,
        className: "btn btn-outline-primary me-2",
        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('globally.edit-btn')
      }) : null, to ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
        to: to,
        className: "btn btn-outline-primary",
        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('globally.back-btn')
      }) : null]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderTitle);

/***/ },

/***/ "./resources/pos/src/components/product/CreateSubProductModal.js"
/*!***********************************************************************!*\
  !*** ./resources/pos/src/components/product/CreateSubProductModal.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap-v5 */ "./node_modules/react-bootstrap-v5/lib/esm/InputGroup.js");
/* harmony import */ var react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap-v5 */ "./node_modules/react-bootstrap-v5/lib/esm/Modal.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var _shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/select/reactSelect */ "./resources/pos/src/shared/select/reactSelect.js");
/* harmony import */ var _store_action_productAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/action/productAction */ "./resources/pos/src/store/action/productAction.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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











var CreateSubProductModal = function CreateSubProductModal(props) {
  var _product$variation;
  var show = props.show,
    setShow = props.setShow,
    commonData = props.commonData;
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
      return state;
    }),
    frontSetting = _useSelector.frontSetting;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    product = _useState2[0],
    setProduct = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      product_price: "",
      product_cost: "",
      order_tax: "",
      stock_alert: "",
      tax_type: ""
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    formInput = _useState4[0],
    setFormInput = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    errors = _useState6[0],
    setErrors = _useState6[1];
  var taxTypeFilterOptions = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedOptions)(_constants__WEBPACK_IMPORTED_MODULE_5__.taxMethodOptions);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  var navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (show) {
      setProduct(_objectSpread(_objectSpread({}, commonData), {}, {
        variationTypes: commonData.variationTypes.map(function (variationType) {
          return {
            value: variationType.id,
            label: variationType.name
          };
        })
      }));
    } else {
      setProduct({});
      setFormInput({
        product_price: "",
        product_cost: "",
        order_tax: "",
        stock_alert: "",
        tax_type: ""
      });
      setErrors({});
    }
  }, [show]);
  var onProductDataChange = function onProductDataChange(e) {
    setFormInput(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, e.target.name, e.target.value));
    });
    setErrors({});
  };
  var onTaxTypeChange = function onTaxTypeChange(obj) {
    setFormInput(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        tax_type: obj
      });
    });
    setErrors({});
  };
  var onVariationTypeChange = function onVariationTypeChange(obj) {
    setFormInput(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        variation_type: obj
      });
    });
    setErrors({});
  };
  var handleValidation = function handleValidation() {
    var validationErrors = {};
    var isValid = false;
    if (!formInput["variation_type"]) {
      validationErrors["variation_type"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)("variation.type.select.validate.error.message");
    } else if (!formInput['product_cost'].trim()) {
      validationErrors['product_cost'] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)('product.input.product-cost.validate.label');
    } else if (!formInput['product_price'].trim()) {
      validationErrors['product_price'] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)('product.input.product-price.validate.label');
    } else if (formInput['order_tax'] > 100) {
      validationErrors["order_tax"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)('product.input.order-tax.valid.validate.label');
    } else if (!formInput['tax_type']) {
      validationErrors["tax_type"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)('product.input.tax-type.validate.label');
    } else {
      isValid = true;
    }
    setErrors(validationErrors);
    return isValid;
  };
  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    var valid = handleValidation();
    if (valid) {
      dispatch((0,_store_action_productAction__WEBPACK_IMPORTED_MODULE_8__.addProduct)(prepareFormData(commonData, formInput), navigate));
      setShow(false);
    }
  };
  var prepareFormData = function prepareFormData(commonData, formInput) {
    var formData = new FormData();
    formData.append('name', commonData.name);
    formData.append('product_code', commonData.product_code);
    formData.append('product_category_id', commonData.product_category_id);
    formData.append('brand_id', commonData.brand_id);
    formData.append('barcode_symbol', commonData.barcode_symbol);
    formData.append('product_unit', commonData.product_unit);
    formData.append('sale_unit', commonData.sale_unit);
    formData.append('purchase_unit', commonData.purchase_unit);
    formData.append('quantity_limit', commonData.quantity_limit);
    formData.append('notes', commonData.notes);
    formData.append('variation_id', commonData.variation.id);
    formData.append('main_product_id', commonData.main_product_id);
    formData.append('code', commonData.product_code + '-' + (0,lodash__WEBPACK_IMPORTED_MODULE_10__.upperCase)(formInput.variation_type.label));
    formData.append('product_price', formInput.product_price);
    formData.append('product_cost', formInput.product_cost);
    formData.append('order_tax', formInput.order_tax);
    formData.append('stock_alert', formInput.stock_alert);
    formData.append('variation_type', formInput.variation_type.value);
    formData.append('tax_type', formInput.tax_type.value ? formInput.tax_type.value : 1);
    return formData;
  };
  var defaultTaxType = {
    value: 1,
    label: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)("tax-type.filter.exclusive.label")
  };
  var clearField = function clearField() {
    setShow(false);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__["default"], {
    show: show,
    size: "xl",
    onHide: clearField,
    keyboard: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__["default"].Header, {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__["default"].Title, {
        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)('product.create.title')
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__["default"].Body, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "mt-2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                className: "col-md-6 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)("variations.title"), ":", " "]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("input", {
                  type: "text",
                  className: "form-control",
                  value: product === null || product === void 0 || (_product$variation = product.variation) === null || _product$variation === void 0 ? void 0 : _product$variation.name,
                  disabled: true
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                className: "col-md-6 mb-3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)("variation.variation_types"),
                  data: product.variationTypes,
                  onChange: function onChange(data) {
                    return onVariationTypeChange(data);
                  },
                  errors: errors["variation_type"],
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.placeholderText)("variation.type.input.name.placeholder.label")
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                className: "col-md-3 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)("product.input.product-cost.label"), ":", " "]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                  className: "required"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__["default"], {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("input", {
                    type: "text",
                    name: "product_cost",
                    min: 0,
                    className: "form-control",
                    placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.placeholderText)("product.input.product-cost.placeholder.label"),
                    onKeyPress: function onKeyPress(event) {
                      return (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.decimalValidate)(event);
                    },
                    onChange: function onChange(e) {
                      return onProductDataChange(e);
                    },
                    value: formInput.product_cost
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__["default"].Text, {
                    children: frontSetting.value && frontSetting.value.currency_symbol
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                  className: "text-danger d-block fw-400 fs-small mt-2",
                  children: errors["product_cost"] ? errors["product_cost"] : null
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                className: "col-md-3 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)("product.input.product-price.label"), ":", " "]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                  className: "required"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__["default"], {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("input", {
                    type: "text",
                    name: "product_price",
                    min: 0,
                    className: "form-control",
                    placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.placeholderText)("product.input.product-price.placeholder.label"),
                    onKeyPress: function onKeyPress(event) {
                      return (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.decimalValidate)(event);
                    },
                    onChange: function onChange(e) {
                      return onProductDataChange(e);
                    },
                    value: formInput.product_price
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__["default"].Text, {
                    children: frontSetting.value && frontSetting.value.currency_symbol
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                  className: "text-danger d-block fw-400 fs-small mt-2",
                  children: errors["product_price"] ? errors["product_price"] : null
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                className: "col-md-3 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)("product.input.stock-alert.label"), ":", " "]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("input", {
                  type: "number",
                  name: "stock_alert",
                  className: "form-control",
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.placeholderText)("product.input.stock-alert.placeholder.label"),
                  onKeyPress: function onKeyPress(event) {
                    return (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.decimalValidate)(event);
                  },
                  onChange: function onChange(e) {
                    return onProductDataChange(e);
                  },
                  value: formInput.stock_alert,
                  min: 0
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                className: "col-md-3 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)("product.input.order-tax.label"), ":", " "]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__["default"], {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("input", {
                    type: "text",
                    name: "order_tax",
                    className: "form-control",
                    placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.placeholderText)("product.input.order-tax.placeholder.label"),
                    onKeyPress: function onKeyPress(event) {
                      return (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.decimalValidate)(event);
                    },
                    onChange: function onChange(e) {
                      return onProductDataChange(e);
                    },
                    min: 0,
                    pattern: "[0-9]*",
                    value: formInput.order_tax
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__["default"].Text, {
                    children: "%"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                  className: "text-danger d-block fw-400 fs-small mt-2",
                  children: errors["order_tax"] ? errors["order_tax"] : null
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                className: "col-md-3 mb-3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)("product.input.tax-type.label"),
                  multiLanguageOption: taxTypeFilterOptions,
                  onChange: function onChange(data) {
                    return onTaxTypeChange(data);
                  },
                  errors: errors["tax_type"],
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.placeholderText)("product.input.tax-type.placeholder.label")
                })
              })]
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__["default"].Footer, _defineProperty({
        children: "justify-content-start",
        className: "pt-0"
      }, "children", [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("button", {
        type: "button",
        className: "btn btn-primary m-0",
        onClick: function onClick(event) {
          return onSubmit(event);
        },
        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.placeholderText)('globally.save-btn')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("button", {
        type: "button",
        className: "btn btn-secondary my-0 ms-5 me-0",
        "data-bs-dismiss": "modal",
        onClick: clearField,
        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)('globally.cancel-btn')
      })]))]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateSubProductModal);

/***/ },

/***/ "./resources/pos/src/components/product/DeleteProduct.js"
/*!***************************************************************!*\
  !*** ./resources/pos/src/components/product/DeleteProduct.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_action_productAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/action/productAction */ "./resources/pos/src/store/action/productAction.js");
/* harmony import */ var _shared_action_buttons_DeleteModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/action-buttons/DeleteModel */ "./resources/pos/src/shared/action-buttons/DeleteModel.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var DeleteProduct = function DeleteProduct(props) {
  var deleteProduct = props.deleteProduct,
    onDelete = props.onDelete,
    deleteModel = props.deleteModel,
    onClickDeleteModel = props.onClickDeleteModel;
  var deleteUserClick = function deleteUserClick() {
    deleteProduct(onDelete.id, onDelete.main_product_id);
    onClickDeleteModel(false);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    children: deleteModel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_shared_action_buttons_DeleteModel__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onClickDeleteModel: onClickDeleteModel,
      deleteModel: deleteModel,
      deleteUserClick: deleteUserClick,
      name: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__.getFormattedMessage)('product.title')
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, {
  deleteProduct: _store_action_productAction__WEBPACK_IMPORTED_MODULE_2__.deleteProduct
})(DeleteProduct));

/***/ },

/***/ "./resources/pos/src/components/product/EditSubProductModal.js"
/*!*********************************************************************!*\
  !*** ./resources/pos/src/components/product/EditSubProductModal.js ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap-v5 */ "./node_modules/react-bootstrap-v5/lib/esm/InputGroup.js");
/* harmony import */ var react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap-v5 */ "./node_modules/react-bootstrap-v5/lib/esm/Modal.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var _shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/select/reactSelect */ "./resources/pos/src/shared/select/reactSelect.js");
/* harmony import */ var _store_action_productAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/action/productAction */ "./resources/pos/src/store/action/productAction.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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










var EditSubProductModal = function EditSubProductModal(props) {
  var show = props.show,
    productData = props.productData,
    setShow = props.setShow;
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
      return state;
    }),
    frontSetting = _useSelector.frontSetting;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    product = _useState2[0],
    setProduct = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      product_price: "",
      product_cost: "",
      order_tax: "",
      stock_alert: "",
      tax_type: ""
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    formInput = _useState4[0],
    setFormInput = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    errors = _useState6[0],
    setErrors = _useState6[1];
  var taxTypeFilterOptions = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedOptions)(_constants__WEBPACK_IMPORTED_MODULE_5__.taxMethodOptions);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  var navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (show) {
      setProduct(productData);
      setFormInput(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          product_price: productData.product_price,
          product_cost: productData.product_cost,
          order_tax: productData.order_tax ? productData.order_tax : "",
          stock_alert: productData.stock_alert,
          tax_type: productData.tax_type
        });
      });
    } else {
      setProduct({});
      setFormInput({
        product_price: "",
        product_cost: "",
        order_tax: "",
        stock_alert: "",
        tax_type: ""
      });
      setErrors({});
    }
  }, [show]);
  var onProductDataChange = function onProductDataChange(e) {
    setFormInput(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, e.target.name, e.target.value));
    });
    setErrors({});
  };
  var onTaxTypeChange = function onTaxTypeChange(obj) {
    setFormInput(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        tax_type: obj
      });
    });
    setErrors({});
  };
  var handleValidation = function handleValidation() {
    var validationErrors = {};
    var isValid = false;
    if (formInput['product_cost'] == '') {
      validationErrors['product_cost'] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)('product.input.product-cost.validate.label');
    } else if (formInput['product_price'] == '') {
      validationErrors['product_price'] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)('product.input.product-price.validate.label');
    } else if (formInput['order_tax'] > 100) {
      validationErrors["order_tax"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)('product.input.order-tax.valid.validate.label');
    } else {
      isValid = true;
    }
    setErrors(validationErrors);
    return isValid;
  };
  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    var valid = handleValidation();
    if (valid) {
      setShow(false);
      dispatch((0,_store_action_productAction__WEBPACK_IMPORTED_MODULE_8__.editProduct)(product.id, prepareFormData(product, formInput), navigate));
    }
  };
  var prepareFormData = function prepareFormData(commonData, formInput) {
    var formData = new FormData();
    formData.append('name', commonData.name);
    formData.append('code', commonData.code);
    formData.append('product_code', commonData.product_code);
    formData.append('product_category_id', commonData.product_category_id);
    formData.append('brand_id', commonData.brand_id);
    formData.append('barcode_symbol', commonData.barcode_symbol);
    formData.append('product_unit', commonData.product_unit);
    formData.append('sale_unit', commonData.sale_unit);
    formData.append('purchase_unit', commonData.purchase_unit);
    formData.append('quantity_limit', commonData.quantity_limit);
    formData.append('main_product_id', commonData.main_product_id);
    formData.append('notes', commonData.notes);
    formData.append('product_price', formInput.product_price);
    formData.append('product_cost', formInput.product_cost);
    formData.append('order_tax', formInput.order_tax);
    formData.append('stock_alert', formInput.stock_alert);
    if (formInput.tax_type[0]) {
      formData.append('tax_type', formInput.tax_type[0].value ? formInput.tax_type[0].value : 1);
    } else {
      formData.append('tax_type', formInput.tax_type.value ? formInput.tax_type.value : 1);
    }
    return formData;
  };
  var defaultTaxType = productData ? productData.tax_type === "1" ? {
    value: 1,
    label: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)("tax-type.filter.exclusive.label")
  } : {
    value: 2,
    label: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)("tax-type.filter.inclusive.label")
  } || productData.tax_type === "2" ? {
    value: 2,
    label: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)("tax-type.filter.inclusive.label")
  } : {
    value: 1,
    label: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)("tax-type.filter.exclusive.label")
  } : {
    value: 1,
    label: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)("tax-type.filter.exclusive.label")
  };
  var clearField = function clearField() {
    setShow(false);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__["default"], {
    show: show,
    size: "xl",
    onHide: clearField,
    keyboard: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__["default"].Header, {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__["default"].Title, {
        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)("product.edit.title")
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__["default"].Body, {
        children: product && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "mt-2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                className: "col-md-3 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)("product.input.product-cost.label"), ":", " "]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                  className: "required"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__["default"], {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
                    type: "text",
                    name: "product_cost",
                    min: 0,
                    className: "form-control",
                    placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.placeholderText)("product.input.product-cost.placeholder.label"),
                    onKeyPress: function onKeyPress(event) {
                      return (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.decimalValidate)(event);
                    },
                    onChange: function onChange(e) {
                      return onProductDataChange(e);
                    },
                    value: formInput.product_cost
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__["default"].Text, {
                    children: frontSetting.value && frontSetting.value.currency_symbol
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                  className: "text-danger d-block fw-400 fs-small mt-2",
                  children: errors["product_cost"] ? errors["product_cost"] : null
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                className: "col-md-3 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)("product.input.product-price.label"), ":", " "]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                  className: "required"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__["default"], {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
                    type: "text",
                    name: "product_price",
                    min: 0,
                    className: "form-control",
                    placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.placeholderText)("product.input.product-price.placeholder.label"),
                    onKeyPress: function onKeyPress(event) {
                      return (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.decimalValidate)(event);
                    },
                    onChange: function onChange(e) {
                      return onProductDataChange(e);
                    },
                    value: formInput.product_price
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__["default"].Text, {
                    children: frontSetting.value && frontSetting.value.currency_symbol
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                  className: "text-danger d-block fw-400 fs-small mt-2",
                  children: errors["product_price"] ? errors["product_price"] : null
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                className: "col-md-3 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)("product.input.stock-alert.label"), ":", " "]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
                  type: "number",
                  name: "stock_alert",
                  className: "form-control",
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.placeholderText)("product.input.stock-alert.placeholder.label"),
                  onKeyPress: function onKeyPress(event) {
                    return (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.decimalValidate)(event);
                  },
                  onChange: function onChange(e) {
                    return onProductDataChange(e);
                  },
                  value: formInput.stock_alert,
                  min: 0
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                className: "col-md-3 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)("product.input.order-tax.label"), ":", " "]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__["default"], {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
                    type: "text",
                    name: "order_tax",
                    className: "form-control",
                    placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.placeholderText)("product.input.order-tax.placeholder.label"),
                    onKeyPress: function onKeyPress(event) {
                      return (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.decimalValidate)(event);
                    },
                    onChange: function onChange(e) {
                      return onProductDataChange(e);
                    },
                    min: 0,
                    pattern: "[0-9]*",
                    value: formInput.order_tax
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__["default"].Text, {
                    children: "%"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                  className: "text-danger d-block fw-400 fs-small mt-2",
                  children: errors["order_tax"] ? errors["order_tax"] : null
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                className: "col-md-3 mb-3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)("product.input.tax-type.label"),
                  multiLanguageOption: taxTypeFilterOptions,
                  onChange: function onChange(data) {
                    return onTaxTypeChange(data);
                  },
                  errors: errors["tax_type"],
                  defaultValue: defaultTaxType,
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.placeholderText)("product.input.tax-type.placeholder.label")
                })
              })]
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__["default"].Footer, _defineProperty({
        children: "justify-content-start",
        className: "pt-0"
      }, "children", [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
        type: "button",
        className: "btn btn-primary m-0",
        onClick: function onClick(event) {
          return onSubmit(event);
        },
        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.placeholderText)('globally.save-btn')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
        type: "button",
        className: "btn btn-secondary my-0 ms-5 me-0",
        "data-bs-dismiss": "modal",
        onClick: clearField,
        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)('globally.cancel-btn')
      })]))]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditSubProductModal);

/***/ },

/***/ "./resources/pos/src/components/product/ProductDetail.js"
/*!***************************************************************!*\
  !*** ./resources/pos/src/components/product/ProductDetail.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap-v5 */ "./node_modules/react-bootstrap-v5/lib/esm/Button.js");
/* harmony import */ var react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap-v5 */ "./node_modules/react-bootstrap-v5/lib/esm/Image.js");
/* harmony import */ var react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap-v5 */ "./node_modules/react-bootstrap-v5/lib/esm/Table.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-elastic-carousel */ "./node_modules/react-elastic-carousel/dist/index.es.js");
/* harmony import */ var _MasterLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../MasterLayout */ "./resources/pos/src/components/MasterLayout.js");
/* harmony import */ var _shared_tab_title_TabTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/tab-title/TabTitle */ "./resources/pos/src/shared/tab-title/TabTitle.js");
/* harmony import */ var _store_action_productAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/action/productAction */ "./resources/pos/src/store/action/productAction.js");
/* harmony import */ var _header_HeaderTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../header/HeaderTitle */ "./resources/pos/src/components/header/HeaderTitle.js");
/* harmony import */ var _assets_images_brand_logo_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/images/brand_logo.png */ "./resources/pos/src/assets/images/brand_logo.png");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _shared_components_loaders_Spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/components/loaders/Spinner */ "./resources/pos/src/shared/components/loaders/Spinner.js");
/* harmony import */ var _shared_components_loaders_TopProgressBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/components/loaders/TopProgressBar */ "./resources/pos/src/shared/components/loaders/TopProgressBar.js");
/* harmony import */ var _WareHouseDetailsModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./WareHouseDetailsModal */ "./resources/pos/src/components/product/WareHouseDetailsModal.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var _EditSubProductModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./EditSubProductModal */ "./resources/pos/src/components/product/EditSubProductModal.js");
/* harmony import */ var _DeleteProduct__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./DeleteProduct */ "./resources/pos/src/components/product/DeleteProduct.js");
/* harmony import */ var _CreateSubProductModal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./CreateSubProductModal */ "./resources/pos/src/components/product/CreateSubProductModal.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




















var ProductDetail = function ProductDetail(props) {
  var _product$attributes, _product$attributes2, _allProducts$0$produc;
  var products = props.products,
    fetchMainProduct = props.fetchMainProduct,
    clearMainProduct = props.clearMainProduct,
    isLoading = props.isLoading,
    frontSetting = props.frontSetting,
    allConfigData = props.allConfigData;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)(),
    id = _useParams.id;
  var result = products && products.length > 0 ? products.reduce(function (obj, cur) {
    return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, cur.type, cur));
  }, {}) : {};
  var product = result.products || null;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showWarehouseModal = _useState2[0],
    setShowWarehouseModal = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showEditSubProductModal = _useState4[0],
    setShowEditSubProductModal = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showCreateSubProductModal = _useState6[0],
    setShowCreateSubProductModal = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    productData = _useState8[0],
    setProductData = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    deleteModel = _useState0[0],
    setDeleteModel = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState10 = _slicedToArray(_useState1, 2),
    isDelete = _useState10[0],
    setIsDelete = _useState10[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    clearMainProduct();
    fetchMainProduct(id);
    return function () {
      clearMainProduct();
    };
  }, []);
  var sliderImage = product && product.attributes && product.attributes.images.imageUrls && product.attributes.images.imageUrls.map(function (img) {
    return img;
  });
  var allProducts = product && product.attributes && product.attributes.products && product.attributes.products.map(function (item) {
    return item;
  });
  var commonDataForNewProduct = {
    name: allProducts && allProducts[0].name,
    product_code: allProducts && allProducts[0].product_code,
    product_type: allProducts && product.attributes.product_type,
    barcode_symbol: allProducts && allProducts[0].barcode_symbol,
    product_category_id: allProducts && allProducts[0].product_category_id,
    brand_id: allProducts && allProducts[0].brand_id,
    product_unit: allProducts && allProducts[0].product_unit,
    sale_unit: allProducts && allProducts[0].sale_unit,
    purchase_unit: allProducts && allProducts[0].purchase_unit,
    quantity_limit: allProducts && allProducts[0].quantity_limit,
    notes: allProducts && allProducts[0].notes,
    main_product_id: product && product.id,
    variation: product && (product === null || product === void 0 || (_product$attributes = product.attributes) === null || _product$attributes === void 0 ? void 0 : _product$attributes.variation),
    variationTypes: product && (product === null || product === void 0 || (_product$attributes2 = product.attributes) === null || _product$attributes2 === void 0 || (_product$attributes2 = _product$attributes2.variation) === null || _product$attributes2 === void 0 ? void 0 : _product$attributes2.variation_types.filter(function (variationType) {
      var _product$attributes3;
      return !(product !== null && product !== void 0 && (_product$attributes3 = product.attributes) !== null && _product$attributes3 !== void 0 && _product$attributes3.variation_types.some(function (productVariationType) {
        return variationType.id === productVariationType.id && variationType.name === productVariationType.name;
      }));
    }))
  };
  var openWareHouseDetailModal = function openWareHouseDetailModal(data) {
    setShowWarehouseModal(true);
    setProductData(data);
  };
  var onClickDeleteModel = function onClickDeleteModel() {
    var isDelete = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    setDeleteModel(!deleteModel);
    setIsDelete(isDelete);
  };
  var openEditSubProductModal = function openEditSubProductModal(data) {
    setProductData(data);
    setShowEditSubProductModal(true);
  };
  var openCreateSubProductModal = function openCreateSubProductModal() {
    setProductData(commonDataForNewProduct);
    setShowCreateSubProductModal(true);
  };
  // Guard temprano — si no hay producto aún, mostrar solo spinner
  if (!product) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_MasterLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_shared_components_loaders_TopProgressBar__WEBPACK_IMPORTED_MODULE_14__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_header_HeaderTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.product-details.title"),
        to: "/app/products"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_shared_components_loaders_Spinner__WEBPACK_IMPORTED_MODULE_13__["default"], {})]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_MasterLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_shared_components_loaders_TopProgressBar__WEBPACK_IMPORTED_MODULE_14__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_header_HeaderTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
      title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.product-details.title"),
      to: "/app/products"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_shared_tab_title_TabTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
      title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.placeholderText)("product.product-details.title")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
      className: "card card-body",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
            className: "col-xxl-7",
            children: isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_shared_components_loaders_Spinner__WEBPACK_IMPORTED_MODULE_13__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("table", {
              className: "table table-responsive gy-7 main-product-details",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("tbody", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("th", {
                    className: "py-4",
                    scope: "row",
                    children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.product-details.code-product.label")
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("td", {
                    className: "py-4",
                    children: product && product.attributes && product.attributes.code
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("th", {
                    className: "py-4",
                    scope: "row",
                    children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.title")
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("td", {
                    className: "py-4",
                    children: product && product.attributes && product.attributes.name
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("th", {
                    className: "py-4",
                    scope: "row",
                    children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.type.label")
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("td", {
                    className: "py-4",
                    children: product && product.attributes && product.attributes.product_type == 1 ? (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)('products.type.single-type.label') : (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)('variation.title')
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("th", {
                    children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.product-details.category.label")
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("td", {
                    className: "py-4",
                    children: allProducts && allProducts[0].product_category_name
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("th", {
                    children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.brand.label")
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("td", {
                    className: "py-4",
                    children: allProducts && allProducts[0].brand_name
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("th", {
                    children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.product-details.unit.label")
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("td", {
                    className: "py-4",
                    children: allProducts && allProducts[0].product_unit_name && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("span", {
                      className: "badge bg-light-success",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("span", {
                        children: allProducts && ((_allProducts$0$produc = allProducts[0].product_unit_name) === null || _allProducts$0$produc === void 0 ? void 0 : _allProducts$0$produc.name)
                      })
                    })
                  })]
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
            className: "col-xxl-5 d-flex justify-content-center m-auto",
            children: !isLoading && (sliderImage && sliderImage.length !== 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_6__["default"], {
              children: sliderImage.map(function (img, i) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    src: img,
                    width: "413px"
                  })
                }, i);
              })
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_3__["default"], {
              src: _assets_images_brand_logo_png__WEBPACK_IMPORTED_MODULE_11__["default"],
              width: "413px"
            }))
          })]
        })
      })
    }), allProducts && allProducts.length !== 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
      className: "card card-body mt-2",
      children: [product.attributes.product_type == 2 && commonDataForNewProduct.variationTypes.length !== 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        className: "text-end mb-2 ",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__["default"], {
          type: "button",
          variant: "primary",
          onClick: openCreateSubProductModal,
          className: "btn-light-primary",
          children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.create.title")
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_4__["default"], {
          responsive: "md",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("tr", {
              children: [product.attributes.product_type == 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("th", {
                children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("variations.title")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("th", {
                children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.product-details.cost.label")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("th", {
                children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.table.price.column.label")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("th", {
                children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.product-details.tax.label")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("th", {
                children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.stock-alert.label")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("th", {
                className: "text-center",
                children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("react-data-table.action.column.label")
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("tbody", {
            children: allProducts && allProducts.map(function (data, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("tr", {
                children: [product.attributes.product_type == 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("td", {
                  className: "py-4",
                  children: "".concat(data.variation_product.variation_name, "(").concat(data.variation_product.variation_type_name, ")")
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("td", {
                  className: "py-4",
                  children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.currencySymbolHandling)(allConfigData, frontSetting.value && frontSetting.value.currency_symbol, data.product_cost)
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("td", {
                  className: "py-4",
                  children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.currencySymbolHandling)(allConfigData, frontSetting.value && frontSetting.value.currency_symbol, data.product_price)
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("td", {
                  className: "py-4",
                  children: [data.order_tax ? data.order_tax : 0, "%"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("td", {
                  className: "py-4",
                  children: data.stock_alert
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("td", {
                  className: "py-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                    className: "text-center",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("button", {
                      title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.placeholderText)('globally.view.tooltip.label'),
                      className: "btn text-success px-2 fs-3 ps-0 border-0",
                      onClick: function onClick(e) {
                        e.stopPropagation();
                        openWareHouseDetailModal(data);
                      },
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__.faEye
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("button", {
                      title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.placeholderText)('globally.view.tooltip.label'),
                      className: "btn text-primary px-2 fs-3 ps-0 border-0",
                      onClick: function onClick(e) {
                        e.stopPropagation();
                        openEditSubProductModal(data);
                      },
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__.faEdit
                      })
                    }), product.attributes.product_type == 2 && allProducts.length > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("button", {
                      title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.placeholderText)('globally.delete.tooltip.label'),
                      className: "btn text-danger px-2 fs-3 ps-0 border-0",
                      onClick: function onClick(e) {
                        e.stopPropagation();
                        onClickDeleteModel(data);
                      },
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__.faTrash
                      })
                    })]
                  })
                })]
              }, index);
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_DeleteProduct__WEBPACK_IMPORTED_MODULE_19__["default"], {
          onClickDeleteModel: onClickDeleteModel,
          deleteModel: deleteModel,
          onDelete: isDelete
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_CreateSubProductModal__WEBPACK_IMPORTED_MODULE_20__["default"], {
          show: showCreateSubProductModal,
          setShow: setShowCreateSubProductModal,
          commonData: commonDataForNewProduct
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_EditSubProductModal__WEBPACK_IMPORTED_MODULE_18__["default"], {
          show: showEditSubProductModal,
          setShow: setShowEditSubProductModal,
          productData: productData
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_WareHouseDetailsModal__WEBPACK_IMPORTED_MODULE_15__["default"], {
          show: showWarehouseModal,
          productData: productData,
          setShow: setShowWarehouseModal
        })]
      })]
    })]
  });
};
var mapStateToProps = function mapStateToProps(state) {
  var products = state.products,
    isLoading = state.isLoading,
    frontSetting = state.frontSetting,
    allConfigData = state.allConfigData;
  return {
    products: products,
    isLoading: isLoading,
    frontSetting: frontSetting,
    allConfigData: allConfigData
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchMainProduct: _store_action_productAction__WEBPACK_IMPORTED_MODULE_9__.fetchMainProduct,
  clearMainProduct: _store_action_productAction__WEBPACK_IMPORTED_MODULE_9__.clearMainProduct
})(ProductDetail));

/***/ },

/***/ "./resources/pos/src/components/product/WareHouseDetailsModal.js"
/*!***********************************************************************!*\
  !*** ./resources/pos/src/components/product/WareHouseDetailsModal.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap-v5 */ "./node_modules/react-bootstrap-v5/lib/esm/Image.js");
/* harmony import */ var react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap-v5 */ "./node_modules/react-bootstrap-v5/lib/esm/Modal.js");
/* harmony import */ var react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap-v5 */ "./node_modules/react-bootstrap-v5/lib/esm/Table.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var WareHouseDetailsModal = function WareHouseDetailsModal(props) {
  var show = props.show,
    productData = props.productData,
    setShow = props.setShow;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    warehouse = _useState2[0],
    setWarehouse = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    product = _useState4[0],
    setProduct = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (show) {
      var _warehouse = productData && productData.warehouse && productData.warehouse.map(function (item) {
        return item;
      });
      setWarehouse(_warehouse);
      setProduct(productData);
    }
  }, [show]);
  var clearField = function clearField() {
    setShow(false);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__["default"], {
    show: show,
    size: "xl",
    onHide: clearField,
    keyboard: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__["default"].Header, {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__["default"].Title, {
        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__.getFormattedMessage)("products.warehouse.title")
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__["default"].Body, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "col-md-12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "text-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__["default"], {
            src: product && product.barcode_url,
            alt: product && product.name,
            className: "product_brcode"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "mt-3",
            children: product && product.code
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "mt-2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_3__["default"], {
            responsive: "md",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("thead", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                  children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__.getFormattedMessage)("dashboard.stockAlert.warehouse.label")
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                  children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__.getFormattedMessage)("dashboard.stockAlert.quantity.label")
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("tbody", {
              children: warehouse && warehouse.length ? warehouse.map(function (item, index) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                    className: "py-4",
                    children: item.name
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                    className: "py-4",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "badge bg-light-info me-2",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                          children: item.total_quantity
                        })
                      }), product.product_unit === "1" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                        className: "badge bg-light-success me-2",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                          children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__.getFormattedMessage)("unit.filter.piece.label")
                        })
                      }) || product.product_unit === "2" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                        className: "badge bg-light-primary me-2",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                          children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__.getFormattedMessage)("unit.filter.meter.label")
                        })
                      }) || product.product_unit === "3" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                        className: "badge bg-light-warning me-2",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                          children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__.getFormattedMessage)("unit.filter.kilogram.label")
                        })
                      })]
                    })
                  })]
                }, index);
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("tr", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                  colSpan: "2",
                  className: "text-center",
                  children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__.getFormattedMessage)("react-data-table.no-record-found.label")
                })
              })
            })]
          })
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WareHouseDetailsModal);

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

/***/ "./resources/pos/src/shared/action-buttons/DeleteModel.js"
/*!****************************************************************!*\
  !*** ./resources/pos/src/shared/action-buttons/DeleteModel.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap-sweetalert */ "./node_modules/react-bootstrap-sweetalert/dist/index.js");
/* harmony import */ var react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sharedMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _assets_images_remove_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/remove.png */ "./resources/pos/src/assets/images/remove.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var DeleteModel = function DeleteModel(props) {
  var onClickDeleteModel = props.onClickDeleteModel,
    deleteUserClick = props.deleteUserClick,
    name = props.name;
  var escFunction = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    if (event.keyCode === 27) {
      // User for Close the model on Escape
      onClickDeleteModel(false);
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.addEventListener('keydown', escFunction, false);
    return function () {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_1___default()), {
    custom: true,
    confirmBtnBsStyle: "danger mb-3 fs-5 rounded",
    cancelBtnBsStyle: "secondary mb-3 fs-5 rounded text-white",
    confirmBtnText: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('delete-modal.yes-btn'),
    cancelBtnText: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('delete-modal.no-btn'),
    title: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('delete-modal.title'),
    onConfirm: deleteUserClick,
    onCancel: onClickDeleteModel,
    showCancel: true,
    focusCancelBtn: true,
    customIcon: _assets_images_remove_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
      className: "sweet-text",
      children: [(0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('delete-modal.msg'), " '", name, "' ?"]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteModel);

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

/***/ "./resources/pos/src/shared/components/loaders/Spinner.js"
/*!****************************************************************!*\
  !*** ./resources/pos/src/shared/components/loaders/Spinner.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var Spinner = function Spinner() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "d-flex justify-content-center custom-loading",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "spinner-border",
      role: "status",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "visually-hidden",
        children: "Loading..."
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);

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

/***/ "./resources/pos/src/assets/images/brand_logo.png"
/*!********************************************************!*\
  !*** ./resources/pos/src/assets/images/brand_logo.png ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/brand_logo.png?c77aff19bcd1d22cef86b3eb70e74e96");

/***/ },

/***/ "./resources/pos/src/assets/images/remove.png"
/*!****************************************************!*\
  !*** ./resources/pos/src/assets/images/remove.png ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/remove.png?d93067c2bb07624239ab66c3f8381579");

/***/ },

/***/ "./node_modules/react-bootstrap-sweetalert/dist/components/Buttons.js"
/*!****************************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/components/Buttons.js ***!
  \****************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var styles = __importStar(__webpack_require__(/*! ../styles/SweetAlertStyles */ "./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js"));
var SweetAlertStyles_1 = __webpack_require__(/*! ../styles/SweetAlertStyles */ "./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js");
var Buttons = /** @class */ (function (_super) {
    __extends(Buttons, _super);
    function Buttons() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buttonStyles = {};
        _this.confirmButtonElement = null;
        _this.cancelButtonElement = null;
        _this.setConfirmButtonElementRef = function (element) {
            _this.confirmButtonElement = element;
        };
        _this.setCancelButtonElementRef = function (element) {
            _this.cancelButtonElement = element;
        };
        _this.getButtonStyle = function (bsStyle) {
            if (bsStyle === 'error')
                bsStyle = 'danger';
            if (_this.buttonStyles[bsStyle] == null) {
                var style = Buttons.styles[bsStyle] || Buttons.styles.default;
                _this.buttonStyles[bsStyle] = {
                    borderColor: "" + style.borderColor,
                    boxShadow: "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px " + style.shadowColor,
                };
            }
            return _this.buttonStyles[bsStyle];
        };
        return _this;
    }
    Buttons.prototype.componentDidMount = function () {
        this.focusButton();
    };
    Buttons.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        // when displaying back to back alerts React will treat this
        // as an update to the same alert. this causes componentDidMount
        // to not be called for the subsequent alerts. i hope to find a better
        // way to handle this in the future, but for now i'm checking if the
        // title, type, or button text has changed
        if (prevProps.type !== this.props.type ||
            prevProps.confirmBtnText !== this.props.confirmBtnText ||
            prevProps.title !== this.props.title) {
            setTimeout(function () { return _this.focusButton(); }, 0);
        }
    };
    Buttons.prototype.focusButton = function () {
        if (this.props.focusCancelBtn && this.cancelButtonElement) {
            try {
                this.cancelButtonElement.focus();
            }
            catch (e) {
                // whoops
            }
        }
        else if (this.props.focusConfirmBtn && this.confirmButtonElement) {
            try {
                this.confirmButtonElement.focus();
            }
            catch (e) {
                // whoops
            }
        }
    };
    Buttons.prototype.confirmButtonRender = function () {
        var _this = this;
        if (!this.props.showConfirm)
            return false;
        var confirmBtnBsStyle = this.props.confirmBtnBsStyle === 'error' ? 'danger' : this.props.confirmBtnBsStyle;
        var confirmButtonStyle = Object.assign({}, styles.button, this.getButtonStyle(confirmBtnBsStyle), this.props.confirmBtnStyle || {});
        /**
         * These buttons are <a> anchor tags because for some reason React is triggering click events on <button>
         * elements when an enter key event is fired from an input field in the alert.
         * Please do not change this back to any other type of element.
         */
        return (react_1.default.createElement("a", { ref: this.setConfirmButtonElementRef, href: '#', style: confirmButtonStyle, className: "btn btn-" + this.props.btnSize + " btn-" + confirmBtnBsStyle + " " + this.props.confirmBtnCssClass + " " + (this.props.disabled ? 'disabled' : ''), onClick: function (e) {
                e.stopPropagation();
                e.preventDefault();
                if (!_this.props.disabled) {
                    _this.props.onConfirm();
                }
            } }, this.props.confirmBtnText));
    };
    Buttons.prototype.cancelButtonRender = function () {
        var _this = this;
        if (!this.props.showCancel)
            return false;
        var cancelBtnBsStyle = this.props.cancelBtnBsStyle === 'error' ? 'danger' : this.props.cancelBtnBsStyle;
        var cancelButtonStyle = Object.assign({}, styles.button, this.props.cancelBtnStyle || {});
        /**
         * These buttons are <a> anchor tags because for some reason React is triggering click events on <button>
         * elements when an enter key event is fired from an input field in the alert.
         * Please do not change this back to any other type of element.
         */
        return (react_1.default.createElement("a", { ref: this.setCancelButtonElementRef, href: '#', style: cancelButtonStyle, className: "btn btn-" + this.props.btnSize + " btn-" + cancelBtnBsStyle + " " + this.props.cancelBtnCssClass, onClick: function (e) {
                e.stopPropagation();
                e.preventDefault();
                _this.props.onCancel();
            } }, this.props.cancelBtnText));
    };
    Buttons.prototype.render = function () {
        if (!this.props.showConfirm && !this.props.showCancel) {
            return false;
        }
        return (react_1.default.createElement("p", { style: SweetAlertStyles_1.actions }, this.props.customButtons ? (this.props.customButtons) : (react_1.default.createElement(react_1.default.Fragment, null, !this.props.reverseButtons ? (react_1.default.createElement(react_1.default.Fragment, null,
            this.cancelButtonRender(),
            this.confirmButtonRender())) : (react_1.default.createElement(react_1.default.Fragment, null,
            this.confirmButtonRender(),
            this.cancelButtonRender()))))));
    };
    Buttons.defaultProps = {
        confirmBtnText: 'OK',
        confirmBtnBsStyle: 'primary',
        confirmBtnCssClass: '',
        confirmBtnStyle: {},
        cancelBtnText: 'Cancel',
        cancelBtnBsStyle: 'link',
        cancelBtnCssClass: '',
        cancelBtnStyle: {},
        focusConfirmBtn: true,
        focusCancelBtn: false,
        showConfirm: true,
        showCancel: false,
        reverseButtons: false,
        btnSize: 'lg',
    };
    Buttons.styles = {
        primary: {
            borderColor: '#286090',
            shadowColor: 'rgb(165, 202, 234)'
        },
        success: {
            borderColor: '#4cae4c',
            shadowColor: 'rgba(76, 174, 76, 0.6)'
        },
        info: {
            borderColor: '#46b8da',
            shadowColor: 'rgba(70, 184, 218, 0.6)'
        },
        danger: {
            borderColor: '#d43f3a',
            shadowColor: 'rgba(212, 63, 58, 0.6)'
        },
        warning: {
            borderColor: '#eea236',
            shadowColor: 'rgba(238, 162, 54, 0.6)'
        },
        default: {
            borderColor: '#cccccc',
            shadowColor: 'rgba(204, 204, 204, 0.6)'
        },
        secondary: {
            borderColor: '#cccccc',
            shadowColor: 'rgba(204, 204, 204, 0.6)'
        }
    };
    return Buttons;
}(react_1.default.Component));
exports["default"] = Buttons;
//# sourceMappingURL=Buttons.js.map

/***/ },

/***/ "./node_modules/react-bootstrap-sweetalert/dist/components/Content.js"
/*!****************************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/components/Content.js ***!
  \****************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var SweetAlertStyles_1 = __webpack_require__(/*! ../styles/SweetAlertStyles */ "./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js");
var Content = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement("div", { style: SweetAlertStyles_1.contentContainer }, children));
};
exports["default"] = Content;
//# sourceMappingURL=Content.js.map

/***/ },

/***/ "./node_modules/react-bootstrap-sweetalert/dist/components/CustomIcon.js"
/*!*******************************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/components/CustomIcon.js ***!
  \*******************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var styles = __importStar(__webpack_require__(/*! ../styles/SweetAlertStyles */ "./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js"));
var defaultStyle = Object.assign({}, styles.icon, styles.iconCustom);
var CustomIcon = function (_a) {
    var iconUrl = _a.iconUrl;
    var backgroundImage = "url(" + iconUrl;
    var style = Object.assign({}, defaultStyle, { backgroundImage: backgroundImage });
    return react_1.default.createElement("div", { style: style });
};
exports["default"] = CustomIcon;
//# sourceMappingURL=CustomIcon.js.map

/***/ },

/***/ "./node_modules/react-bootstrap-sweetalert/dist/components/ErrorIcon.js"
/*!******************************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/components/ErrorIcon.js ***!
  \******************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var styles = __importStar(__webpack_require__(/*! ../styles/SweetAlertStyles */ "./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js"));
var ErrorIcon = function () { return (react_1.default.createElement("div", { style: Object.assign({}, styles.icon, styles.iconError) },
    react_1.default.createElement("span", { style: styles.iconErrorX },
        react_1.default.createElement("span", { style: Object.assign({}, styles.iconErrorLine, styles.iconErrorLineLeft) }),
        react_1.default.createElement("span", { style: Object.assign({}, styles.iconErrorLine, styles.iconErrorLineRight) })))); };
exports["default"] = ErrorIcon;
//# sourceMappingURL=ErrorIcon.js.map

/***/ },

/***/ "./node_modules/react-bootstrap-sweetalert/dist/components/InfoIcon.js"
/*!*****************************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/components/InfoIcon.js ***!
  \*****************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var styles = __importStar(__webpack_require__(/*! ../styles/SweetAlertStyles */ "./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js"));
var InfoIcon = function () { return (react_1.default.createElement("div", { style: Object.assign({}, styles.icon, styles.iconInfo) },
    react_1.default.createElement("div", { style: styles.iconInfoBefore }),
    react_1.default.createElement("div", { style: styles.iconInfoAfter }))); };
exports["default"] = InfoIcon;
//# sourceMappingURL=InfoIcon.js.map

/***/ },

/***/ "./node_modules/react-bootstrap-sweetalert/dist/components/Input.js"
/*!**************************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/components/Input.js ***!
  \**************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var styles = __importStar(__webpack_require__(/*! ../styles/SweetAlertStyles */ "./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js"));
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputElement = null;
        _this.setInputElementRef = function (element) {
            _this.inputElement = element;
        };
        return _this;
    }
    Input.prototype.componentDidMount = function () {
        if (this.props.type === 'input') {
            try {
                this.inputElement.focus();
            }
            catch (e) {
                // whoops
            }
        }
    };
    Input.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement("div", { style: { position: 'relative' } },
            this.props.inputType === 'textarea' ? (react_1.default.createElement("textarea", { ref: this.setInputElementRef, rows: 4, className: "form-control", value: this.props.inputValue || '', onChange: function (e) { return _this.props.onChangeInput(e); }, onKeyDown: function (e) { return _this.props.onInputKeyDown(e); }, placeholder: this.props.placeholder })) : (react_1.default.createElement("input", { type: this.props.inputType, ref: this.setInputElementRef, className: "form-control", value: this.props.inputValue || '', onChange: function (e) { return _this.props.onChangeInput(e); }, onKeyDown: function (e) { return _this.props.onInputKeyDown(e); }, placeholder: this.props.placeholder })),
            this.props.showValidationMessage && (react_1.default.createElement("div", { style: styles.inputErrorIcon },
                react_1.default.createElement("div", { style: Object.assign({}, styles.inputErrorIconBeforeAfter, styles.inputErrorIconBefore) }),
                react_1.default.createElement("div", { style: Object.assign({}, styles.inputErrorIconBeforeAfter, styles.inputErrorIconAfter) })))));
    };
    return Input;
}(react_1.default.Component));
exports["default"] = Input;
//# sourceMappingURL=Input.js.map

/***/ },

/***/ "./node_modules/react-bootstrap-sweetalert/dist/components/Overlay.js"
/*!****************************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/components/Overlay.js ***!
  \****************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var SweetAlertStyles_1 = __webpack_require__(/*! ../styles/SweetAlertStyles */ "./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js");
var Overlay = /** @class */ (function (_super) {
    __extends(Overlay, _super);
    function Overlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overlayElement = null;
        _this.setOverlayElementRef = function (element) {
            _this.overlayElement = element;
        };
        return _this;
    }
    Overlay.prototype.componentDidMount = function () {
        if (this.overlayElement) {
            this.overlayElement.scrollTop = 0;
        }
    };
    Overlay.prototype.render = function () {
        var _a = this.props, show = _a.show, onClick = _a.onClick, onKeyDown = _a.onKeyDown, children = _a.children;
        return show ? (react_1.default.createElement("div", { ref: this.setOverlayElementRef, style: __assign(__assign({}, SweetAlertStyles_1.overlay), SweetAlertStyles_1.sweetAlertContainer), onClick: function (e) { return onClick(e); }, tabIndex: 0, onKeyDown: function (e) { return onKeyDown(e); } }, children)) : (react_1.default.createElement("div", { style: SweetAlertStyles_1.sweetAlertContainer, tabIndex: 0, onKeyDown: function (e) { return onKeyDown(e); } }, children));
    };
    return Overlay;
}(react_1.default.Component));
exports["default"] = Overlay;
//# sourceMappingURL=Overlay.js.map

/***/ },

/***/ "./node_modules/react-bootstrap-sweetalert/dist/components/SuccessIcon.js"
/*!********************************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/components/SuccessIcon.js ***!
  \********************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var styles = __importStar(__webpack_require__(/*! ../styles/SweetAlertStyles */ "./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js"));
var SuccessIcon = function () { return (react_1.default.createElement("div", { style: Object.assign({}, styles.icon, styles.iconSuccess) },
    react_1.default.createElement("div", { style: Object.assign({}, styles.iconSuccessBeforeAfter, styles.iconSuccessBefore) }),
    react_1.default.createElement("span", { style: Object.assign({}, styles.iconSuccessLine, styles.iconSuccessLineTip) }),
    react_1.default.createElement("span", { style: Object.assign({}, styles.iconSuccessLine, styles.iconSuccessLineLong) }),
    react_1.default.createElement("div", { style: styles.iconSuccessPlaceholder }),
    react_1.default.createElement("div", { style: styles.iconSuccessFix }),
    react_1.default.createElement("div", { style: Object.assign({}, styles.iconSuccessBeforeAfter, styles.iconSuccessAfter) }))); };
exports["default"] = SuccessIcon;
//# sourceMappingURL=SuccessIcon.js.map

/***/ },

/***/ "./node_modules/react-bootstrap-sweetalert/dist/components/SweetAlert.js"
/*!*******************************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/components/SweetAlert.js ***!
  \*******************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
// third-party
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
// components
var SuccessIcon_1 = __importDefault(__webpack_require__(/*! ./SuccessIcon */ "./node_modules/react-bootstrap-sweetalert/dist/components/SuccessIcon.js"));
var ErrorIcon_1 = __importDefault(__webpack_require__(/*! ./ErrorIcon */ "./node_modules/react-bootstrap-sweetalert/dist/components/ErrorIcon.js"));
var InfoIcon_1 = __importDefault(__webpack_require__(/*! ./InfoIcon */ "./node_modules/react-bootstrap-sweetalert/dist/components/InfoIcon.js"));
var WarningIcon_1 = __importDefault(__webpack_require__(/*! ./WarningIcon */ "./node_modules/react-bootstrap-sweetalert/dist/components/WarningIcon.js"));
var CustomIcon_1 = __importDefault(__webpack_require__(/*! ./CustomIcon */ "./node_modules/react-bootstrap-sweetalert/dist/components/CustomIcon.js"));
var Buttons_1 = __importDefault(__webpack_require__(/*! ./Buttons */ "./node_modules/react-bootstrap-sweetalert/dist/components/Buttons.js"));
var Input_1 = __importDefault(__webpack_require__(/*! ./Input */ "./node_modules/react-bootstrap-sweetalert/dist/components/Input.js"));
var ValidationMessage_1 = __importDefault(__webpack_require__(/*! ./ValidationMessage */ "./node_modules/react-bootstrap-sweetalert/dist/components/ValidationMessage.js"));
var Title_1 = __importDefault(__webpack_require__(/*! ./Title */ "./node_modules/react-bootstrap-sweetalert/dist/components/Title.js"));
var Content_1 = __importDefault(__webpack_require__(/*! ./Content */ "./node_modules/react-bootstrap-sweetalert/dist/components/Content.js"));
var Overlay_1 = __importDefault(__webpack_require__(/*! ./Overlay */ "./node_modules/react-bootstrap-sweetalert/dist/components/Overlay.js"));
// other
var styles = __importStar(__webpack_require__(/*! ../styles/SweetAlertStyles */ "./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js"));
var Patterns = __importStar(__webpack_require__(/*! ../constants/patterns */ "./node_modules/react-bootstrap-sweetalert/dist/constants/patterns.js"));
var prop_types_1 = __webpack_require__(/*! ../prop-types */ "./node_modules/react-bootstrap-sweetalert/dist/prop-types.js");
var default_props_1 = __webpack_require__(/*! ../default-props */ "./node_modules/react-bootstrap-sweetalert/dist/default-props.js");
var SWEET_ALERT_DEFAULT_STYLES = styles.sweetAlert;
var _resetting = {};
var debugLogger = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // uncomment the next line to get some debugging logs.
    // console.log(...args);
};
var SweetAlert = /** @class */ (function (_super) {
    __extends(SweetAlert, _super);
    function SweetAlert(props) {
        var _this = _super.call(this, props) || this;
        _this.inputElement = null;
        _this.unsupportedProp = function (oldProp, message) {
            try {
                console.warn("react-bootstrap-sweetalert: Unsupported prop '" + oldProp + "'. Please " + message);
            }
            catch (e) {
                // do nothing
            }
        };
        _this.focusInput = function () {
            debugLogger('inputElement', _this.inputElement);
            if (_this.inputElement) {
                debugLogger('inputElement trying to focus', _this.inputElement);
                try {
                    _this.inputElement.focus();
                }
                catch (e) {
                    debugLogger('inputElement focus error', e);
                    // whoops
                }
            }
        };
        _this.getIcon = function () {
            switch (_this.state.type) {
                case 'danger':
                case 'error':
                    return react_1.default.createElement(ErrorIcon_1.default, null);
                case 'warning':
                    return react_1.default.createElement(WarningIcon_1.default, null);
                case 'info':
                    return react_1.default.createElement(InfoIcon_1.default, null);
                case 'success':
                    return react_1.default.createElement(SuccessIcon_1.default, null);
                case 'custom':
                    if (_this.props.customIcon) {
                        if (typeof _this.props.customIcon == 'string') {
                            return react_1.default.createElement(CustomIcon_1.default, { iconUrl: _this.props.customIcon });
                        }
                        return _this.props.customIcon;
                    }
                    return null;
                default:
                    return null;
            }
        };
        _this.onChangeInput = function (e) {
            var target = e.target;
            _this.setState({
                inputValue: target.value,
                showValidationMessage: false
            });
        };
        _this.isValidInput = function () {
            if (!_this.props.required) {
                return true;
            }
            var regex = _this.props.validationRegex || (_this.props.inputType === 'email' ? Patterns.emailRegex : Patterns.defaultRegex);
            return regex.test(_this.state.inputValue);
        };
        _this.isDisabled = function () {
            return _this.props.onCancel && _this.props.disabled;
        };
        _this.onAlertClose = function (callback) {
            _resetting[_this.state.id] = true;
            debugLogger('onAlertClose resetting state');
            _this.setState(__assign(__assign({}, SweetAlert.getDefaultState()), { id: _this.state.id }), function () {
                _resetting[_this.state.id] = false;
                callback();
            });
        };
        _this.beforeCloseAlert = function (closingAction, callback) {
            debugLogger('in beforeCloseAlert: setting show to false');
            _this.setState({ show: false, closingAction: closingAction }, function () {
                debugLogger('state updated', _this.state.show);
                if (!_this.state.show) {
                    debugLogger('invoking callback');
                    callback();
                }
            });
        };
        _this.onConfirm = function (handleCloseAnimations) {
            if (handleCloseAnimations === void 0) { handleCloseAnimations = true; }
            if (_this.isDisabled()) {
                return;
            }
            // if this is an input alert, then we will send the input value to the props.onConfirm function
            var isInput = _this.state.type === 'input';
            var inputValue = _this.state.inputValue;
            // if this is a controlled alert, then we will send the dependencies value to the props.onConfirm function
            var isControlled = _this.state.type === 'controlled';
            var dependencies = __spreadArrays(_this.state.dependencies);
            if (isInput && !_this.isValidInput()) {
                _this.setState({
                    showValidationMessage: true
                });
                return;
            }
            var confirm = function () {
                debugLogger('in confirm callback');
                if (isInput) {
                    _this.onAlertClose(function () {
                        _this.props.onConfirm(inputValue);
                    });
                }
                else if (isControlled) {
                    _this.onAlertClose(function () {
                        _this.props.onConfirm(dependencies);
                    });
                }
                else {
                    _this.onAlertClose(function () { return _this.props.onConfirm(); });
                }
            };
            if (handleCloseAnimations) {
                debugLogger('calling beforeCloseAlert');
                _this.beforeCloseAlert('confirm', function () { return confirm(); });
            }
            else {
                confirm();
            }
        };
        _this.onCancel = function (handleCloseAnimations) {
            if (handleCloseAnimations === void 0) { handleCloseAnimations = true; }
            var cancel = function () {
                _this.onAlertClose(function () {
                    if (_this.props.onCancel) {
                        _this.props.onCancel();
                    }
                });
            };
            if (handleCloseAnimations) {
                _this.beforeCloseAlert('cancel', function () { return cancel(); });
            }
            else {
                cancel();
            }
        };
        _this.onInputKeyDown = function (e) {
            if (e.keyCode == 13) {
                e.stopPropagation();
                _this.onConfirm();
            }
        };
        _this.onKeyDown = function (e) {
            if (e.keyCode == 27) {
                if (_this.props.allowEscape && _this.props.onCancel) {
                    e.stopPropagation();
                    _this.onCancel();
                }
            }
        };
        _this.onClickInside = function (e) {
            e.stopPropagation();
        };
        _this.onClickOutside = function () {
            if (_this.props.closeOnClickOutside && _this.props.onCancel) {
                _this.onCancel();
            }
        };
        _this.setAutoFocusInputRef = function (element) {
            _this.inputElement = element;
        };
        _this.getComposedStyle = function () {
            return Object.assign({}, SWEET_ALERT_DEFAULT_STYLES, _this.props.style, { animation: _this.state.animation });
        };
        _this.getAlertContent = function () {
            // Support for render props for content of alert
            if (typeof _this.props.children === 'function') {
                var renderProps = {
                    onEnterKeyDownConfirm: function (event) {
                        if (event.key === 'Enter') {
                            event.preventDefault();
                            event.stopPropagation();
                            _this.onConfirm();
                        }
                    },
                    confirm: function () { return _this.onConfirm(); },
                    cancel: function () { return _this.onCancel(); },
                    setAutoFocusInputRef: _this.setAutoFocusInputRef.bind(_this),
                };
                return _this.props.children(renderProps);
            }
            return _this.props.children;
        };
        _this.getCloseButton = function () {
            if (!_this.props.showCloseButton || !_this.props.onCancel) {
                return null;
            }
            return (react_1.default.createElement("span", { className: 'btn', style: Object.assign({}, styles.closeButton, _this.props.closeBtnStyle), onClick: function () { return _this.onCancel(); } }, "x"));
        };
        _this.getInputField = function () {
            if (_this.state.type !== 'input') {
                return null;
            }
            return (react_1.default.createElement(Input_1.default, __assign({}, _this.props, _this.state, { type: _this.state.type, onInputKeyDown: _this.onInputKeyDown, onChangeInput: _this.onChangeInput })));
        };
        _this.getValidationMessage = function () {
            if (!_this.state.showValidationMessage) {
                return null;
            }
            return react_1.default.createElement(ValidationMessage_1.default, __assign({}, _this.props));
        };
        _this.getButtons = function () {
            return (react_1.default.createElement(Buttons_1.default, __assign({}, _this.props, { type: _this.state.type, onConfirm: _this.onConfirm, onCancel: _this.onCancel, focusConfirmBtn: _this.state.focusConfirmBtn, focusCancelBtn: _this.state.focusCancelBtn, disabled: _this.isDisabled() })));
        };
        _this.getInjectedStyles = function () {
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("style", { type: "text/css", dangerouslySetInnerHTML: {
                        __html: "\n                body.sweetalert-overflow-hidden {\n                  overflow: hidden;\n                }\n                body .sweet-alert button {\n                  outline: none !important;\n                }\n              "
                    } }),
                react_1.default.createElement("style", { type: "text/css" }, "@-webkit-keyframes showSweetAlert {  0% {    transform: scale(0.7);    -webkit-transform: scale(0.7);  }  45% {    transform: scale(1.05);    -webkit-transform: scale(1.05);  }  80% {    transform: scale(0.95);    -webkit-tranform: scale(0.95);  }  100% {    transform: scale(1);    -webkit-transform: scale(1);  }}@keyframes showSweetAlert {  0% {    transform: scale(0.7);    -webkit-transform: scale(0.7);  }  45% {    transform: scale(1.05);    -webkit-transform: scale(1.05);  }  80% {    transform: scale(0.95);    -webkit-tranform: scale(0.95);  }  100% {    transform: scale(1);    -webkit-transform: scale(1);  }}@-webkit-keyframes hideSweetAlert {  0% {    transform: scale(1);    -webkit-transform: scale(1);  }  100% {    transform: scale(0.4);    -webkit-transform: scale(0.4);  }}@keyframes hideSweetAlert {  0% {    transform: scale(1);    -webkit-transform: scale(1);  }  100% {    transform: scale(0.4);    -webkit-transform: scale(0.4);  }}@-webkit-keyframes animateSuccessTip {  0% {    width: 0;    left: 1px;    top: 19px;  }  54% {    width: 0;    left: 1px;    top: 19px;  }  70% {    width: 50px;    left: -8px;    top: 37px;  }  84% {    width: 17px;    left: 21px;    top: 48px;  }  100% {    width: 25px;    left: 14px;    top: 45px;  }}@keyframes animateSuccessTip {  0% {    width: 0;    left: 1px;    top: 19px;  }  54% {    width: 0;    left: 1px;    top: 19px;  }  70% {    width: 50px;    left: -8px;    top: 37px;  }  84% {    width: 17px;    left: 21px;    top: 48px;  }  100% {    width: 25px;    left: 14px;    top: 45px;  }}@-webkit-keyframes animateSuccessLong {  0% {    width: 0;    right: 46px;    top: 54px;  }  65% {    width: 0;    right: 46px;    top: 54px;  }  84% {    width: 55px;    right: 0px;    top: 35px;  }  100% {    width: 47px;    right: 8px;    top: 38px;  }}@keyframes animateSuccessLong {  0% {    width: 0;    right: 46px;    top: 54px;  }  65% {    width: 0;    right: 46px;    top: 54px;  }  84% {    width: 55px;    right: 0px;    top: 35px;  }  100% {    width: 47px;    right: 8px;    top: 38px;  }}@-webkit-keyframes rotatePlaceholder {  0% {    transform: rotate(-45deg);    -webkit-transform: rotate(-45deg);  }  5% {    transform: rotate(-45deg);    -webkit-transform: rotate(-45deg);  }  12% {    transform: rotate(-405deg);    -webkit-transform: rotate(-405deg);  }  100% {    transform: rotate(-405deg);    -webkit-transform: rotate(-405deg);  }}@keyframes rotatePlaceholder {  0% {    transform: rotate(-45deg);    -webkit-transform: rotate(-45deg);  }  5% {    transform: rotate(-45deg);    -webkit-transform: rotate(-45deg);  }  12% {    transform: rotate(-405deg);    -webkit-transform: rotate(-405deg);  }  100% {    transform: rotate(-405deg);    -webkit-transform: rotate(-405deg);  }}@-webkit-keyframes animateErrorIcon {  0% {    transform: rotateX(100deg);    -webkit-transform: rotateX(100deg);    opacity: 0;  }  100% {    transform: rotateX(0deg);    -webkit-transform: rotateX(0deg);    opacity: 1;  }}@keyframes animateErrorIcon {  0% {    transform: rotateX(100deg);    -webkit-transform: rotateX(100deg);    opacity: 0;  }  100% {    transform: rotateX(0deg);    -webkit-transform: rotateX(0deg);    opacity: 1;  }}@-webkit-keyframes animateXMark {  0% {    transform: scale(0.4);    -webkit-transform: scale(0.4);    margin-top: 26px;    opacity: 0;  }  50% {    transform: scale(0.4);    -webkit-transform: scale(0.4);    margin-top: 26px;    opacity: 0;  }  80% {    transform: scale(1.15);    -webkit-transform: scale(1.15);    margin-top: -6px;  }  100% {    transform: scale(1);    -webkit-transform: scale(1);    margin-top: 0;    opacity: 1;  }}@keyframes animateXMark {  0% {    transform: scale(0.4);    -webkit-transform: scale(0.4);    margin-top: 26px;    opacity: 0;  }  50% {    transform: scale(0.4);    -webkit-transform: scale(0.4);    margin-top: 26px;    opacity: 0;  }  80% {    transform: scale(1.15);    -webkit-transform: scale(1.15);    margin-top: -6px;  }  100% {    transform: scale(1);    -webkit-transform: scale(1);    margin-top: 0;    opacity: 1;  }}@-webkit-keyframes pulseWarning {  0% {    border-color: #F8D486;  }  100% {    border-color: #F8BB86;  }}@keyframes pulseWarning {  0% {    border-color: #F8D486;  }  100% {    border-color: #F8BB86;  }}@-webkit-keyframes pulseWarningIns {  0% {    background-color: #F8D486;  }  100% {    background-color: #F8BB86;  }}@keyframes pulseWarningIns {  0% {    background-color: #F8D486;  }  100% {    background-color: #F8BB86;  }}")));
        };
        if (_this.props.beforeUpdate) {
            _this.unsupportedProp('beforeUpdate', 'use props.afterUpdate');
        }
        var newState = Object.assign(SweetAlert.getDefaultState(), {
            hideTimeoutHandlerFunc: _this.hideTimeoutHandler.bind(_this)
        });
        if (_this.props.defaultValue != null) {
            newState.inputValue = _this.props.defaultValue;
        }
        _this.state = newState;
        _this.props.beforeMount();
        return _this;
    }
    SweetAlert.prototype.componentDidMount = function () {
        document.body.classList.add('sweetalert-overflow-hidden');
        this.focusInput();
        if (this.props.afterMount) {
            this.props.afterMount();
        }
    };
    SweetAlert.generateId = function () {
        return '' + Date.now() + Math.ceil(Math.random() * 10000000000) + Math.ceil(Math.random() * 10000000000);
    };
    SweetAlert.getDefaultState = function () {
        return {
            id: SweetAlert.generateId(),
            show: true,
            focusConfirmBtn: true,
            focusCancelBtn: false,
            inputValue: '',
            showValidationMessage: false,
            timer: null,
            animation: "",
            prevTimeout: 0,
            closingAction: null,
            dependencies: [],
        };
    };
    SweetAlert.getDerivedStateFromProps = function (nextProps, nextState) {
        if (_resetting[nextState.id]) {
            return {};
        }
        var newState = {};
        var typeChanged = nextState.type !== SweetAlert.getTypeFromProps(nextProps);
        var dependenciesChanged = nextState.dependencies !== nextProps.dependencies;
        var timeoutChanged = nextState.prevTimeout !== nextProps.timeout;
        // if the type of the alert changed, or the dependencies changed, then update the state from props
        if (typeChanged || dependenciesChanged) {
            newState = __assign(__assign({}, newState), SweetAlert.getStateFromProps(nextProps));
        }
        // if the state is changing, or the timeout changed, then reset the timeout timer
        if (JSON.stringify(newState) !== '{}' || timeoutChanged) {
            newState = __assign(__assign({}, newState), SweetAlert.handleTimeout(nextProps, nextState.timer));
        }
        // return the partially updated state
        return __assign(__assign({}, newState), SweetAlert.handleAnimState(nextProps, nextState, nextState.hideTimeoutHandlerFunc));
    };
    SweetAlert.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (this.props.beforeUpdate) {
            this.props.beforeUpdate(prevProps, prevState);
        }
        if (!prevState.show && this.state.show) {
            this.focusInput();
        }
        this.props.afterUpdate(this.props, this.state);
    };
    SweetAlert.prototype.componentWillUnmount = function () {
        document.body.classList.remove('sweetalert-overflow-hidden');
        if (this.state.timer) {
            clearTimeout(this.state.timer);
        }
        if (this.props.beforeUnmount) {
            this.props.beforeUnmount();
        }
    };
    SweetAlert.prototype.hideTimeoutHandler = function (time) {
        var _this = this;
        setTimeout(function () {
            var closingAction = _this.state.closingAction;
            /**
             * Removing the closing action (shouldn't trigger another animation timeout)
             */
            _this.setState({ show: false, closingAction: null }, function () {
                // handle the action that was started before the closing animation was started
                switch (closingAction) {
                    case 'confirm':
                        _this.onConfirm(false);
                        break;
                    case 'cancel':
                        _this.onCancel(false);
                        break;
                    default:
                        break;
                }
            });
        }, time);
    };
    ;
    SweetAlert.handleTimeout = function (props, currentTimer) {
        if (currentTimer) {
            clearTimeout(currentTimer);
        }
        if (props.timeout && props.timeout > 0) {
            var timer = setTimeout(function () { return props.onConfirm(); }, props.timeout);
            return { timer: timer, prevTimeout: props.timeout };
        }
        return null;
    };
    SweetAlert.isAnimation = function (animProp) {
        return animProp && typeof animProp !== 'boolean';
    };
    SweetAlert.animationFromProp = function (animProp) {
        return animProp.name + ' ' + animProp.duration + 'ms';
    };
    SweetAlert.handleAnimState = function (props, state, hideTimeout) {
        var userDefinedShow = typeof props.show === 'boolean';
        var show = (userDefinedShow && !state.closingAction) ? props.show : state.show;
        var animation = '';
        if (show) {
            if (props.openAnim) {
                if (SweetAlert.isAnimation(props.openAnim)) {
                    animation = SweetAlert.animationFromProp(props.openAnim);
                }
                else if (SweetAlert.isAnimation(SweetAlert.defaultProps.openAnim)) {
                    animation = SweetAlert.animationFromProp(SweetAlert.defaultProps.openAnim);
                }
            }
        }
        else if (state.closingAction && props.closeAnim) {
            var animProp = void 0;
            if (SweetAlert.isAnimation(props.closeAnim)) {
                animProp = props.closeAnim;
            }
            else if (SweetAlert.isAnimation(SweetAlert.defaultProps.closeAnim)) {
                animProp = SweetAlert.defaultProps.closeAnim;
            }
            if (animProp) {
                animation = SweetAlert.animationFromProp(animProp);
                hideTimeout(animProp.duration);
                show = true;
            }
        }
        return { show: show, animation: animation };
    };
    ;
    SweetAlert.prototype.render = function () {
        if (!this.state.show) {
            return null;
        }
        return (react_1.default.createElement("div", null,
            this.getInjectedStyles(),
            react_1.default.createElement(Overlay_1.default, { show: !this.props.hideOverlay, onClick: this.onClickOutside, onKeyDown: this.onKeyDown },
                react_1.default.createElement("div", { style: this.getComposedStyle(), tabIndex: 0, onKeyDown: this.onKeyDown, onClick: this.onClickInside, className: 'sweet-alert ' + this.props.customClass },
                    this.getCloseButton(),
                    this.getIcon(),
                    react_1.default.createElement(Title_1.default, null, this.props.title),
                    react_1.default.createElement(Content_1.default, null, this.getAlertContent()),
                    this.getInputField(),
                    this.getValidationMessage(),
                    this.getButtons()))));
    };
    SweetAlert.propTypes = prop_types_1.SWEET_ALERT_PROP_TYPES;
    SweetAlert.defaultProps = default_props_1.SWEET_ALERT_DEFAULT_PROPS;
    SweetAlert.SuccessIcon = SuccessIcon_1.default;
    SweetAlert.ErrorIcon = ErrorIcon_1.default;
    SweetAlert.InfoIcon = InfoIcon_1.default;
    SweetAlert.WarningIcon = WarningIcon_1.default;
    SweetAlert.CustomIcon = CustomIcon_1.default;
    SweetAlert.Buttons = Buttons_1.default;
    SweetAlert.Input = Input_1.default;
    SweetAlert.ValidationMessage = ValidationMessage_1.default;
    SweetAlert.Title = Title_1.default;
    SweetAlert.Content = Content_1.default;
    SweetAlert.getStateFromProps = function (props) {
        var type = SweetAlert.getTypeFromProps(props);
        return {
            type: type,
            focusConfirmBtn: props.focusConfirmBtn && type !== 'input',
            focusCancelBtn: props.focusCancelBtn && type !== 'input',
            dependencies: props.dependencies,
        };
    };
    SweetAlert.getTypeFromProps = function (props) {
        if (props.type)
            return props.type;
        if (props.secondary)
            return 'secondary';
        if (props.info)
            return 'info';
        if (props.success)
            return 'success';
        if (props.warning)
            return 'warning';
        if (props.danger || props.error)
            return 'danger';
        if (props.input)
            return 'input';
        if (props.custom)
            return 'custom';
        return 'default';
    };
    return SweetAlert;
}(react_1.default.Component));
exports["default"] = SweetAlert;
//# sourceMappingURL=SweetAlert.js.map

/***/ },

/***/ "./node_modules/react-bootstrap-sweetalert/dist/components/Title.js"
/*!**************************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/components/Title.js ***!
  \**************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var SweetAlertStyles_1 = __webpack_require__(/*! ../styles/SweetAlertStyles */ "./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js");
var Title = function (_a) {
    var children = _a.children;
    return react_1.default.createElement("h2", { style: SweetAlertStyles_1.title }, children);
};
exports["default"] = Title;
//# sourceMappingURL=Title.js.map

/***/ },

/***/ "./node_modules/react-bootstrap-sweetalert/dist/components/ValidationMessage.js"
/*!**************************************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/components/ValidationMessage.js ***!
  \**************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var styles = __importStar(__webpack_require__(/*! ../styles/SweetAlertStyles */ "./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js"));
var defaultMessage = 'Please enter a response!';
var emailMessage = 'Please enter a valid email!';
var ValidationMessage = function (_a) {
    var validationMsg = _a.validationMsg, inputType = _a.inputType;
    var message = validationMsg || (inputType === 'email' ? emailMessage : defaultMessage);
    return (react_1.default.createElement("div", { style: styles.validationMessage },
        react_1.default.createElement("div", { style: styles.exclamationIcon }, "!"),
        message));
};
exports["default"] = ValidationMessage;
//# sourceMappingURL=ValidationMessage.js.map

/***/ },

/***/ "./node_modules/react-bootstrap-sweetalert/dist/components/WarningIcon.js"
/*!********************************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/components/WarningIcon.js ***!
  \********************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var styles = __importStar(__webpack_require__(/*! ../styles/SweetAlertStyles */ "./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js"));
exports["default"] = (function () { return (react_1.default.createElement("div", { style: Object.assign({}, styles.icon, styles.iconWarning) },
    react_1.default.createElement("span", { style: styles.iconWarningBody }),
    react_1.default.createElement("span", { style: styles.iconWarningDot }))); });
//# sourceMappingURL=WarningIcon.js.map

/***/ },

/***/ "./node_modules/react-bootstrap-sweetalert/dist/constants/patterns.js"
/*!****************************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/constants/patterns.js ***!
  \****************************************************************************/
(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.emailRegex = exports.defaultRegex = void 0;
exports.defaultRegex = /^.+$/;
// tslint:disable-next-line:max-line-length
exports.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//# sourceMappingURL=patterns.js.map

/***/ },

/***/ "./node_modules/react-bootstrap-sweetalert/dist/default-props.js"
/*!***********************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/default-props.js ***!
  \***********************************************************************/
(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SWEET_ALERT_DEFAULT_PROPS = void 0;
exports.SWEET_ALERT_DEFAULT_PROPS = {
    allowEscape: true,
    closeOnClickOutside: true,
    inputType: "text",
    customClass: "",
    validationMsg: null,
    validationRegex: null,
    hideOverlay: false,
    required: true,
    disabled: false,
    focusConfirmBtn: true,
    focusCancelBtn: false,
    showCloseButton: false,
    confirmBtnBsStyle: "primary",
    cancelBtnBsStyle: "link",
    beforeMount: function () { },
    afterMount: function () { },
    beforeUpdate: null,
    afterUpdate: function () { },
    beforeUnmount: function () { },
    style: {},
    closeBtnStyle: {},
    timeout: 0,
    openAnim: { name: "showSweetAlert", duration: 300 },
    closeAnim: false,
    reverseButtons: false,
    dependencies: [],
};
//# sourceMappingURL=default-props.js.map

/***/ },

/***/ "./node_modules/react-bootstrap-sweetalert/dist/index.js"
/*!***************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/index.js ***!
  \***************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var SweetAlert_1 = __importDefault(__webpack_require__(/*! ./components/SweetAlert */ "./node_modules/react-bootstrap-sweetalert/dist/components/SweetAlert.js"));
exports["default"] = SweetAlert_1.default;
//# sourceMappingURL=index.js.map

/***/ },

/***/ "./node_modules/react-bootstrap-sweetalert/dist/prop-types.js"
/*!********************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/prop-types.js ***!
  \********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SWEET_ALERT_PROP_TYPES = void 0;
var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
exports.SWEET_ALERT_PROP_TYPES = {
    type: prop_types_1.default.oneOf(["default", "info", "success", "warning", "danger", "error", "input", "custom", "controlled"]),
    // shortcut props for type
    info: prop_types_1.default.bool,
    success: prop_types_1.default.bool,
    warning: prop_types_1.default.bool,
    danger: prop_types_1.default.bool,
    error: prop_types_1.default.bool,
    input: prop_types_1.default.bool,
    custom: prop_types_1.default.bool,
    controlled: prop_types_1.default.bool,
    title: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.string]).isRequired,
    onCancel: prop_types_1.default.func,
    onConfirm: prop_types_1.default.func.isRequired,
    confirmBtnText: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.string]),
    confirmBtnBsStyle: prop_types_1.default.string,
    confirmBtnCssClass: prop_types_1.default.string,
    confirmBtnStyle: prop_types_1.default.object,
    cancelBtnText: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.string]),
    cancelBtnBsStyle: prop_types_1.default.string,
    cancelBtnCssClass: prop_types_1.default.string,
    cancelBtnStyle: prop_types_1.default.object,
    btnSize: prop_types_1.default.string,
    customIcon: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.string]),
    show: prop_types_1.default.bool,
    required: prop_types_1.default.bool,
    placeholder: prop_types_1.default.string,
    validationMsg: prop_types_1.default.string,
    validationRegex: prop_types_1.default.object,
    defaultValue: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]),
    inputType: prop_types_1.default.string,
    style: prop_types_1.default.object,
    closeBtnStyle: prop_types_1.default.object,
    customClass: prop_types_1.default.string,
    showConfirm: prop_types_1.default.bool,
    showCancel: prop_types_1.default.bool,
    showCloseButton: prop_types_1.default.bool,
    allowEscape: prop_types_1.default.bool,
    closeOnClickOutside: prop_types_1.default.bool,
    hideOverlay: prop_types_1.default.bool,
    disabled: prop_types_1.default.bool,
    focusConfirmBtn: prop_types_1.default.bool,
    focusCancelBtn: prop_types_1.default.bool,
    beforeMount: prop_types_1.default.func,
    afterMount: prop_types_1.default.func,
    beforeUpdate: prop_types_1.default.func,
    afterUpdate: prop_types_1.default.func,
    beforeUnmount: prop_types_1.default.func,
    timeout: prop_types_1.default.number,
    openAnim: prop_types_1.default.any,
    closeAnim: prop_types_1.default.any,
    reverseButtons: prop_types_1.default.bool,
    customButtons: prop_types_1.default.node,
    dependencies: prop_types_1.default.arrayOf(prop_types_1.default.any),
};
//# sourceMappingURL=prop-types.js.map

/***/ },

/***/ "./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js ***!
  \*********************************************************************************/
(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.closeButton = exports.inputErrorIconAfter = exports.inputErrorIconBefore = exports.inputErrorIconBeforeAfter = exports.inputErrorIcon = exports.exclamationIcon = exports.validationMessage = exports.button = exports.iconCustom = exports.iconSuccessLineLong = exports.iconSuccessLineTip = exports.iconSuccessLine = exports.iconSuccessFix = exports.iconSuccessPlaceholder = exports.iconSuccessAfter = exports.iconSuccessBefore = exports.iconSuccessBeforeAfter = exports.iconSuccess = exports.iconInfoAfter = exports.iconInfoBefore = exports.iconInfo = exports.iconWarningDot = exports.iconWarningBody = exports.iconWarning = exports.iconErrorLineRight = exports.iconErrorLineLeft = exports.iconErrorLine = exports.iconErrorX = exports.iconError = exports.icon = exports.actions = exports.contentContainer = exports.title = exports.sweetAlert = exports.sweetAlertContainer = exports.overlay = void 0;
exports.overlay = {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 5000
};
exports.sweetAlertContainer = {
    display: "flex",
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: ".625em",
    overflowX: "hidden",
    overflowY: "auto",
    zIndex: 5400
};
exports.sweetAlert = {
    display: "flex",
    overflow: "hidden",
    backgroundColor: "#fff",
    outline: "none",
    width: "32em",
    padding: "1.25rem",
    margin: "auto",
    borderRadius: ".3125em",
    textAlign: "center",
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "100%",
    zIndex: 5600
};
exports.title = {
    position: "relative",
    maxWidth: "100%",
    margin: "0 0 .4em",
    padding: 0,
    fontSize: "1.875em",
    fontWeight: 600,
    textAlign: "center",
    textTransform: "none",
    wordWrap: "break-word"
};
exports.contentContainer = {
    zIndex: 1,
    justifyContent: "center",
    margin: 0,
    padding: 0,
    fontSize: "1.125em",
    fontWeight: 300,
    lineHeight: "normal",
    textAlign: "center",
    wordWrap: "break-word"
};
exports.actions = {
    display: "flex",
    zIndex: 1,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    margin: "1.25em auto 0"
};
exports.icon = {
    width: 80,
    height: 80,
    borderWidth: 4,
    borderStyle: "solid",
    borderColor: "gray",
    borderRadius: "50%",
    margin: "20px auto",
    position: "relative",
    boxSizing: "content-box"
};
exports.iconError = {
    borderColor: "#d43f3a",
    animation: "animateErrorIcon 0.5s"
};
exports.iconErrorX = {
    position: "relative",
    display: "block",
    animation: "animateXMark 0.5s"
};
exports.iconErrorLine = {
    position: "absolute",
    height: 5,
    width: 47,
    backgroundColor: "#d9534f",
    display: "block",
    top: 37,
    borderRadius: 2
};
exports.iconErrorLineLeft = {
    transform: "rotate(45deg)",
    left: 17
};
exports.iconErrorLineRight = {
    transform: "rotate(-45deg)",
    right: 16
};
exports.iconWarning = {
    borderColor: "#eea236",
    animation: "pulseWarning 0.75s infinite alternate"
};
exports.iconWarningBody = {
    position: "absolute",
    width: 5,
    height: 47,
    left: "50%",
    top: 10,
    borderRadius: 2,
    marginLeft: -2,
    backgroundColor: "#f0ad4e",
    animation: "pulseWarningIns 0.75s infinite alternate"
};
exports.iconWarningDot = {
    position: "absolute",
    width: 7,
    height: 7,
    borderRadius: "50%",
    marginLeft: -3,
    left: "50%",
    bottom: 10,
    backgroundColor: "#f0ad4e",
    animation: "pulseWarningIns 0.75s infinite alternate"
};
exports.iconInfo = {
    borderColor: "#46b8da"
};
exports.iconInfoBefore = {
    content: "",
    position: "absolute",
    width: 5,
    height: 29,
    left: "50%",
    bottom: 17,
    borderRadius: 2,
    marginLeft: -2,
    backgroundColor: "#5bc0de"
};
exports.iconInfoAfter = {
    content: "",
    position: "absolute",
    width: 7,
    height: 7,
    borderRadius: "50%",
    marginLeft: -3,
    left: "50%",
    top: 19,
    backgroundColor: "#5bc0de"
};
exports.iconSuccess = {
    borderColor: "#4cae4c"
};
exports.iconSuccessBeforeAfter = {
    content: "",
    borderRadius: "50%",
    position: "absolute",
    width: 60,
    height: 120,
    background: "white",
    transform: "rotate(45deg)"
};
exports.iconSuccessBefore = {
    borderRadius: "120px 0 0 120px",
    height: 100,
    top: -7,
    left: -33,
    transform: "rotate(-45deg)",
    transformOrigin: "60px 60px"
};
exports.iconSuccessAfter = {
    borderRadius: "0 120px 120px 0",
    top: -11,
    left: 30,
    transform: "rotate(-45deg)",
    transformOrigin: "0px 60px",
    animation: "rotatePlaceholder 4.25s ease-in"
};
exports.iconSuccessPlaceholder = {
    width: 80,
    height: 80,
    border: "4px solid rgba(92, 184, 92, 0.2)",
    borderRadius: "50%",
    boxSizing: "content-box",
    position: "absolute",
    left: -4,
    top: -4,
    zIndex: 2
};
exports.iconSuccessFix = {
    width: 5,
    height: 90,
    backgroundColor: "#fff",
    position: "absolute",
    left: 28,
    top: 8,
    zIndex: 1,
    transform: "rotate(-45deg)"
};
exports.iconSuccessLine = {
    height: 5,
    backgroundColor: "#5cb85c",
    display: "block",
    borderRadius: 2,
    position: "absolute",
    zIndex: 2
};
exports.iconSuccessLineTip = {
    width: 25,
    left: 14,
    top: 46,
    transform: "rotate(45deg)",
    animation: "animateSuccessTip 0.75s"
};
exports.iconSuccessLineLong = {
    width: 47,
    right: 8,
    top: 38,
    transform: "rotate(-45deg)",
    animation: "animateSuccessLong 0.75s"
};
exports.iconCustom = {
    backgroundSize: "contain",
    borderRadius: 0,
    border: "none",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat"
};
exports.button = {
    marginRight: 8,
};
exports.validationMessage = {
    display: "block",
    backgroundColor: "#f1f1f1",
    marginLeft: "-1.25rem",
    marginRight: "-1.25rem",
    marginTop: 20,
    overflow: "hidden",
    padding: 10,
    maxHeight: 100,
    transition: "padding 0.25s, max-height 0.25s",
    color: "#797979",
    fontSize: 16,
    textAlign: "center",
    fontWeight: 300
};
exports.exclamationIcon = {
    display: "inline-block",
    width: 24,
    height: 24,
    borderRadius: "50%",
    backgroundColor: "#ea7d7d",
    color: "white",
    lineHeight: "24px",
    textAlign: "center",
    marginRight: 5
};
exports.inputErrorIcon = {
    position: "absolute",
    top: 8,
    right: 8,
    width: 20,
    height: 20,
    transformOrigin: "50% 50%",
    transition: "all 0.1s",
    opacity: 1,
    transform: "scale(1)"
};
exports.inputErrorIconBeforeAfter = {
    content: "",
    width: 20,
    height: 6,
    backgroundColor: "#f06e57",
    borderRadius: 3,
    position: "absolute",
    top: "50%",
    marginTop: -4,
    left: "50%",
    marginLeft: -9
};
exports.inputErrorIconBefore = {
    transform: "rotate(-45deg)"
};
exports.inputErrorIconAfter = {
    transform: "rotate(45deg)"
};
exports.closeButton = {
    position: "absolute",
    right: 4,
    top: -2,
    fontSize: 25,
    fontWeight: 900,
    color: "rgb(113, 113, 113)",
    zIndex: 1,
    cursor: "pointer"
};
//# sourceMappingURL=SweetAlertStyles.js.map

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

/***/ "./node_modules/react-bootstrap-v5/lib/esm/InputGroup.js"
/*!***************************************************************!*\
  !*** ./node_modules/react-bootstrap-v5/lib/esm/InputGroup.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap-v5/lib/esm/createWithBsPrefix.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap-v5/lib/esm/ThemeProvider.js");
/* harmony import */ var _FormCheckInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormCheckInput */ "./node_modules/react-bootstrap-v5/lib/esm/FormCheckInput.js");







var InputGroupText = (0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__["default"])('input-group-text', {
  Component: 'span'
});

var InputGroupCheckbox = function InputGroupCheckbox(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(InputGroupText, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_FormCheckInput__WEBPACK_IMPORTED_MODULE_6__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    type: "checkbox"
  }, props)));
};

var InputGroupRadio = function InputGroupRadio(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(InputGroupText, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_FormCheckInput__WEBPACK_IMPORTED_MODULE_6__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    type: "radio"
  }, props)));
};

/**
 *
 * @property {InputGroupText} Text
 * @property {InputGroupRadio} Radio
 * @property {InputGroupCheckbox} Checkbox
 */
var InputGroup = react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      size = _ref.size,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["bsPrefix", "size", "className", "as"]);

  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__.useBootstrapPrefix)(bsPrefix, 'input-group');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix, size && bsPrefix + "-" + size)
  }));
});
InputGroup.displayName = 'InputGroup';

var InputGroupWithExtras = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, InputGroup, {
  Text: InputGroupText,
  Radio: InputGroupRadio,
  Checkbox: InputGroupCheckbox
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputGroupWithExtras);

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

/***/ "./node_modules/react-bootstrap/esm/ElementChildren.js"
/*!*************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/ElementChildren.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   forEach: () => (/* binding */ forEach),
/* harmony export */   hasChildOfType: () => (/* binding */ hasChildOfType),
/* harmony export */   map: () => (/* binding */ map)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid elements".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 */
function map(children, func) {
  let index = 0;
  return react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children, child => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child) ? func(child, index++) : child);
}

/**
 * Iterates through children that are "valid elements".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */
function forEach(children, func) {
  let index = 0;
  react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children, child => {
    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)) func(child, index++);
  });
}

/**
 * Finds whether a component's `children` prop includes a React element of the
 * specified type.
 */
function hasChildOfType(children, type) {
  return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).some(child => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child) && child.type === type);
}


/***/ },

/***/ "./node_modules/react-bootstrap/esm/Feedback.js"
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Feedback.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




const propTypes = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  /** Display feedback as a tooltip. */
  tooltip: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  as: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().elementType)
};
const Feedback = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(
// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  as: Component = 'div',
  className,
  type = 'valid',
  tooltip = false,
  ...props
}, ref) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Component, {
  ...props,
  ref: ref,
  className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, `${type}-${tooltip ? 'tooltip' : 'feedback'}`)
}));
Feedback.displayName = 'Feedback';
Feedback.propTypes = propTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feedback);

/***/ },

/***/ "./node_modules/react-bootstrap/esm/FloatingLabel.js"
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FloatingLabel.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _FormGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormGroup */ "./node_modules/react-bootstrap/esm/FormGroup.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";







const FloatingLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  className,
  children,
  controlId,
  label,
  ...props
}, ref) => {
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'form-floating');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_FormGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix),
    controlId: controlId,
    ...props,
    children: [children, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
      htmlFor: controlId,
      children: label
    })]
  });
});
FloatingLabel.displayName = 'FloatingLabel';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FloatingLabel);

/***/ },

/***/ "./node_modules/react-bootstrap/esm/Form.js"
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Form.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _FormCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormCheck */ "./node_modules/react-bootstrap/esm/FormCheck.js");
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormControl */ "./node_modules/react-bootstrap/esm/FormControl.js");
/* harmony import */ var _FormFloating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormFloating */ "./node_modules/react-bootstrap/esm/FormFloating.js");
/* harmony import */ var _FormGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormGroup */ "./node_modules/react-bootstrap/esm/FormGroup.js");
/* harmony import */ var _FormLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormLabel */ "./node_modules/react-bootstrap/esm/FormLabel.js");
/* harmony import */ var _FormRange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormRange */ "./node_modules/react-bootstrap/esm/FormRange.js");
/* harmony import */ var _FormSelect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormSelect */ "./node_modules/react-bootstrap/esm/FormSelect.js");
/* harmony import */ var _FormText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormText */ "./node_modules/react-bootstrap/esm/FormText.js");
/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Switch */ "./node_modules/react-bootstrap/esm/Switch.js");
/* harmony import */ var _FloatingLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FloatingLabel */ "./node_modules/react-bootstrap/esm/FloatingLabel.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");














const propTypes = {
  /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  _ref: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  validated: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  as: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().elementType)
};
const Form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(({
  className,
  validated,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'form',
  ...props
}, ref) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(Component, {
  ...props,
  ref: ref,
  className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, validated && 'was-validated')
}));
Form.displayName = 'Form';
Form.propTypes = propTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(Form, {
  Group: _FormGroup__WEBPACK_IMPORTED_MODULE_6__["default"],
  Control: _FormControl__WEBPACK_IMPORTED_MODULE_4__["default"],
  Floating: _FormFloating__WEBPACK_IMPORTED_MODULE_5__["default"],
  Check: _FormCheck__WEBPACK_IMPORTED_MODULE_3__["default"],
  Switch: _Switch__WEBPACK_IMPORTED_MODULE_11__["default"],
  Label: _FormLabel__WEBPACK_IMPORTED_MODULE_7__["default"],
  Text: _FormText__WEBPACK_IMPORTED_MODULE_10__["default"],
  Range: _FormRange__WEBPACK_IMPORTED_MODULE_8__["default"],
  Select: _FormSelect__WEBPACK_IMPORTED_MODULE_9__["default"],
  FloatingLabel: _FloatingLabel__WEBPACK_IMPORTED_MODULE_12__["default"]
}));

/***/ },

/***/ "./node_modules/react-bootstrap/esm/FormCheck.js"
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormCheck.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Feedback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Feedback */ "./node_modules/react-bootstrap/esm/Feedback.js");
/* harmony import */ var _FormCheckInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormCheckInput */ "./node_modules/react-bootstrap/esm/FormCheckInput.js");
/* harmony import */ var _FormCheckLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormCheckLabel */ "./node_modules/react-bootstrap/esm/FormCheckLabel.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/esm/FormContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _ElementChildren__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ElementChildren */ "./node_modules/react-bootstrap/esm/ElementChildren.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";













const FormCheck = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  id,
  bsPrefix,
  bsSwitchPrefix,
  inline = false,
  reverse = false,
  disabled = false,
  isValid = false,
  isInvalid = false,
  feedbackTooltip = false,
  feedback,
  feedbackType,
  className,
  style,
  title = '',
  type = 'checkbox',
  label,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as = 'input',
  ...props
}, ref) => {
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__.useBootstrapPrefix)(bsPrefix, 'form-check');
  bsSwitchPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__.useBootstrapPrefix)(bsSwitchPrefix, 'form-switch');
  const {
    controlId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_FormContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const innerFormContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    controlId: id || controlId
  }), [controlId, id]);
  const hasLabel = !children && label != null && label !== false || (0,_ElementChildren__WEBPACK_IMPORTED_MODULE_7__.hasChildOfType)(children, _FormCheckLabel__WEBPACK_IMPORTED_MODULE_4__["default"]);
  const input = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FormCheckInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ...props,
    type: type === 'switch' ? 'checkbox' : type,
    ref: ref,
    isValid: isValid,
    isInvalid: isInvalid,
    disabled: disabled,
    as: as
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FormContext__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
    value: innerFormContext,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      style: style,
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, reverse && `${bsPrefix}-reverse`, type === 'switch' && bsSwitchPrefix),
      children: children || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [input, hasLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FormCheckLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: title,
          children: label
        }), feedback && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Feedback__WEBPACK_IMPORTED_MODULE_2__["default"], {
          type: feedbackType,
          tooltip: feedbackTooltip,
          children: feedback
        })]
      })
    })
  });
});
FormCheck.displayName = 'FormCheck';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(FormCheck, {
  Input: _FormCheckInput__WEBPACK_IMPORTED_MODULE_3__["default"],
  Label: _FormCheckLabel__WEBPACK_IMPORTED_MODULE_4__["default"]
}));

/***/ },

/***/ "./node_modules/react-bootstrap/esm/FormCheckInput.js"
/*!************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormCheckInput.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/esm/FormContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";







const FormCheckInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  id,
  bsPrefix,
  className,
  type = 'checkbox',
  isValid = false,
  isInvalid = false,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'input',
  ...props
}, ref) => {
  const {
    controlId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_FormContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'form-check-input');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Component, {
    ...props,
    ref: ref,
    type: type,
    id: id || controlId,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix, isValid && 'is-valid', isInvalid && 'is-invalid')
  });
});
FormCheckInput.displayName = 'FormCheckInput';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormCheckInput);

/***/ },

/***/ "./node_modules/react-bootstrap/esm/FormCheckLabel.js"
/*!************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormCheckLabel.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/esm/FormContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";







const FormCheckLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_FormContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'form-check-label');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
    ...props,
    ref: ref,
    htmlFor: htmlFor || controlId,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix)
  });
});
FormCheckLabel.displayName = 'FormCheckLabel';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormCheckLabel);

/***/ },

/***/ "./node_modules/react-bootstrap/esm/FormContext.js"
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormContext.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
"use client";



// TODO

const FormContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormContext);

/***/ },

/***/ "./node_modules/react-bootstrap/esm/FormControl.js"
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormControl.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Feedback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Feedback */ "./node_modules/react-bootstrap/esm/Feedback.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/esm/FormContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";









const FormControl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  type,
  size,
  htmlSize,
  id,
  className,
  isValid = false,
  isInvalid = false,
  plaintext,
  readOnly,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'input',
  ...props
}, ref) => {
  const {
    controlId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_FormContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__.useBootstrapPrefix)(bsPrefix, 'form-control');
   true ? warning__WEBPACK_IMPORTED_MODULE_2___default()(controlId == null || !id, '`controlId` is ignored on `<FormControl>` when `id` is specified.') : 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Component, {
    ...props,
    type: type,
    size: htmlSize,
    ref: ref,
    readOnly: readOnly,
    id: id || controlId,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, plaintext ? `${bsPrefix}-plaintext` : bsPrefix, size && `${bsPrefix}-${size}`, type === 'color' && `${bsPrefix}-color`, isValid && 'is-valid', isInvalid && 'is-invalid')
  });
});
FormControl.displayName = 'FormControl';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(FormControl, {
  Feedback: _Feedback__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ },

/***/ "./node_modules/react-bootstrap/esm/FormFloating.js"
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormFloating.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";





const FormFloating = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(({
  className,
  bsPrefix,
  as: Component = 'div',
  ...props
}, ref) => {
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.useBootstrapPrefix)(bsPrefix, 'form-floating');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Component, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, bsPrefix),
    ...props
  });
});
FormFloating.displayName = 'FormFloating';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormFloating);

/***/ },

/***/ "./node_modules/react-bootstrap/esm/FormGroup.js"
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormGroup.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/esm/FormContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




const FormGroup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(({
  controlId,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    controlId
  }), [controlId]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FormContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: context,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
      ...props,
      ref: ref
    })
  });
});
FormGroup.displayName = 'FormGroup';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormGroup);

/***/ },

/***/ "./node_modules/react-bootstrap/esm/FormLabel.js"
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormLabel.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/esm/FormContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";









const FormLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'label',
  bsPrefix,
  column = false,
  visuallyHidden = false,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_FormContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__.useBootstrapPrefix)(bsPrefix, 'form-label');
  let columnClass = 'col-form-label';
  if (typeof column === 'string') columnClass = `${columnClass} ${columnClass}-${column}`;
  const classes = classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix, visuallyHidden && 'visually-hidden', column && columnClass);
   true ? warning__WEBPACK_IMPORTED_MODULE_2___default()(controlId == null || !htmlFor, '`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.') : 0;
  htmlFor = htmlFor || controlId;
  if (column) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ref: ref,
    as: "label",
    className: classes,
    htmlFor: htmlFor,
    ...props
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Component, {
    ref: ref,
    className: classes,
    htmlFor: htmlFor,
    ...props
  });
});
FormLabel.displayName = 'FormLabel';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormLabel);

/***/ },

/***/ "./node_modules/react-bootstrap/esm/FormRange.js"
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormRange.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/esm/FormContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";







const FormRange = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  className,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_FormContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.useBootstrapPrefix)(bsPrefix, 'form-range');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
    ...props,
    type: "range",
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix),
    id: id || controlId
  });
});
FormRange.displayName = 'FormRange';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormRange);

/***/ },

/***/ "./node_modules/react-bootstrap/esm/FormSelect.js"
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormSelect.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/esm/FormContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";







const FormSelect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  size,
  htmlSize,
  className,
  isValid = false,
  isInvalid = false,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_FormContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.useBootstrapPrefix)(bsPrefix, 'form-select');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("select", {
    ...props,
    size: htmlSize,
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix, size && `${bsPrefix}-${size}`, isValid && `is-valid`, isInvalid && `is-invalid`),
    id: id || controlId
  });
});
FormSelect.displayName = 'FormSelect';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormSelect);

/***/ },

/***/ "./node_modules/react-bootstrap/esm/FormText.js"
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormText.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";





const FormText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(
// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  bsPrefix,
  className,
  as: Component = 'small',
  muted,
  ...props
}, ref) => {
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.useBootstrapPrefix)(bsPrefix, 'form-text');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Component, {
    ...props,
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix, muted && 'text-muted')
  });
});
FormText.displayName = 'FormText';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormText);

/***/ },

/***/ "./node_modules/react-bootstrap/esm/Switch.js"
/*!****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Switch.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _FormCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormCheck */ "./node_modules/react-bootstrap/esm/FormCheck.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



const Switch = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FormCheck__WEBPACK_IMPORTED_MODULE_1__["default"], {
  ...props,
  ref: ref,
  type: "switch"
}));
Switch.displayName = 'Switch';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(Switch, {
  Input: _FormCheck__WEBPACK_IMPORTED_MODULE_1__["default"].Input,
  Label: _FormCheck__WEBPACK_IMPORTED_MODULE_1__["default"].Label
}));

/***/ },

/***/ "./node_modules/react-elastic-carousel/dist/index.es.js"
/*!**************************************************************!*\
  !*** ./node_modules/react-elastic-carousel/dist/index.es.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   consts: () => (/* binding */ consts),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-swipeable */ "./node_modules/react-elastic-carousel/node_modules/react-swipeable/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
/* harmony import */ var react_only_when__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-only-when */ "./node_modules/react-elastic-carousel/node_modules/react-only-when/dist/index.es.js");








function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var noop = function noop() {};
var numberToArray = function numberToArray(n) {
  return _toConsumableArray(Array(n).keys());
};
var cssPrefix = function cssPrefix() {
  var prefix = "rec";
  var space = " ";
  var result = "".concat(prefix); // initial it with global prefix;
  // in case of an array we add the class prefix per item;

  for (var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++) {
    classNames[_key] = arguments[_key];
  }

  var chainedClasses = classNames.reduce(function (acc, current) {
    if (current) {
      acc += "".concat(space).concat(prefix, "-").concat(current); // we must keep spaces between class names
    }

    return acc;
  }, "");
  result += chainedClasses;
  return result;
};
var pipe = function pipe() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return function (x) {
    return fns.reduce(function (v, f) {
      return f(v);
    }, x);
  };
};

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  transition: all 0.3s ease;\n  font-size: 1.6em;\n  background-color: rgba(103, 58, 183, 0.1);\n  color: ", ";\n  box-shadow: 0 0 2px 0px #333;\n  border-radius: 50%;\n  border: none;\n  padding: 0;\n  width: 50px;\n  height: 50px;\n  min-width: 50px;\n  line-height: 50px;\n  align-self: center;\n  cursor: pointer;\n  outline: none;\n  &:hover:enabled,\n  &:focus:enabled {\n    color: #fff;\n    background-color: rgba(103, 58, 183, 1);\n    box-shadow: 0 0 2px 0 #333;\n  }\n  &:disabled {\n    cursor: not-allowed;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Button = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.attrs(function (_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "button" : _ref$type;
  return {
    type: type
  };
})(_templateObject(), function (props) {
  return props.disabled ? "#999" : "#333";
});

var consts = {
  PREV: "PREV",
  NEXT: "NEXT",
  START: "flex-start",
  CENTER: "center",
  END: "flex-end"
};

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  overflow: hidden;\n  user-select: none;\n  justify-content: ", ";\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var ItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.attrs(function (_ref) {
  var style = _ref.style;
  return {
    style: style,
    className: cssPrefix("item-wrapper")
  };
})(_templateObject$1(), function (_ref2) {
  var itemPosition = _ref2.itemPosition;
  return itemPosition;
});
ItemWrapper.defaultProps = {
  style: {},
  itemPosition: consts.CENTER
};
ItemWrapper.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element).isRequired,
  style: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  itemPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([consts.START, consts.CENTER, consts.END])
};

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  margin: 0 10px;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var SliderContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject$2());

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  display: flex;\n  flex-direction: ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}

var calcLeft = function calcLeft(_ref) {
  var isRTL = _ref.isRTL,
      verticalMode = _ref.verticalMode,
      isSwiping = _ref.isSwiping,
      swipedSliderPosition = _ref.swipedSliderPosition,
      sliderPosition = _ref.sliderPosition;

  if (verticalMode || isRTL) {
    return "auto";
  } else {
    return "".concat(isSwiping ? swipedSliderPosition : sliderPosition, "px");
  }
};

var calcRight = function calcRight(_ref2) {
  var isRTL = _ref2.isRTL,
      verticalMode = _ref2.verticalMode,
      isSwiping = _ref2.isSwiping,
      swipedSliderPosition = _ref2.swipedSliderPosition,
      sliderPosition = _ref2.sliderPosition;

  if (!verticalMode && isRTL) {
    return "".concat(isSwiping ? swipedSliderPosition : sliderPosition, "px");
  } else {
    return "auto";
  }
};

var calcTop = function calcTop(_ref3) {
  var verticalMode = _ref3.verticalMode,
      isSwiping = _ref3.isSwiping,
      swipedSliderPosition = _ref3.swipedSliderPosition,
      sliderPosition = _ref3.sliderPosition;

  if (!verticalMode) {
    return "auto";
  } else {
    return "".concat(isSwiping ? swipedSliderPosition : sliderPosition, "px");
  }
};

var calcTransition = function calcTransition(_ref4) {
  var isSwiping = _ref4.isSwiping,
      transitionMs = _ref4.transitionMs,
      easing = _ref4.easing,
      tiltEasing = _ref4.tiltEasing;
  var duration = isSwiping ? 0 : transitionMs;
  var effectiveEasing = isSwiping ? tiltEasing : easing;
  return "all ".concat(duration, "ms ").concat(effectiveEasing);
}; // We use attributes (style) to bypass multiple creation of classes (dynamic styling)


var Slider = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.attrs(function (props) {
  return {
    style: {
      transition: calcTransition(props),
      left: calcLeft(props),
      right: calcRight(props),
      top: calcTop(props)
    }
  };
})(_templateObject$3(), function (_ref5) {
  var verticalMode = _ref5.verticalMode;
  return verticalMode ? "column" : "row";
}, function (_ref6) {
  var verticalMode = _ref6.verticalMode;
  return verticalMode ? "min-height: 100%;" : "";
}, function (_ref7) {
  var verticalMode = _ref7.verticalMode,
      outerSpacing = _ref7.outerSpacing;
  return verticalMode ? "" : "margin: 0 ".concat(outerSpacing, "px;");
});

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledCarousel = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.attrs(function (props) {
  return {
    style: {
      height: props.size.height
    }
  };
})(_templateObject$4());

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  direction: ", ";\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var CarouselWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject$5(), function (_ref) {
  var isRTL = _ref.isRTL;
  return isRTL ? "rtl" : "ltr";
});

var ItemWrapperContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(ItemWrapperContainer, _React$Component);

  var _super = _createSuper(ItemWrapperContainer);

  function ItemWrapperContainer() {
    var _this;

    _classCallCheck(this, ItemWrapperContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onClick", function () {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          id = _this$props.id;
      onClick(id);
    });

    return _this;
  }

  _createClass(ItemWrapperContainer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ItemWrapper, _extends({}, this.props, {
        onClick: this.onClick
      }));
    }
  }]);

  return ItemWrapperContainer;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);

ItemWrapperContainer.defaultProps = {
  onClick: noop
};
ItemWrapperContainer.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)]),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};

var Track = function Track(_ref) {
  var children = _ref.children,
      childWidth = _ref.childWidth,
      autoTabIndexVisibleItems = _ref.autoTabIndexVisibleItems,
      enableSwipe = _ref.enableSwipe,
      enableMouseSwipe = _ref.enableMouseSwipe,
      preventDefaultTouchmoveEvent = _ref.preventDefaultTouchmoveEvent,
      itemsToShow = _ref.itemsToShow,
      itemsToScroll = _ref.itemsToScroll,
      currentItem = _ref.currentItem,
      itemPosition = _ref.itemPosition,
      itemPadding = _ref.itemPadding,
      onSwiped = _ref.onSwiped,
      onSwiping = _ref.onSwiping,
      verticalMode = _ref.verticalMode,
      onItemClick = _ref.onItemClick;
  var width = "".concat(childWidth, "px");
  var paddingStyle = "".concat(itemPadding.join("px "), "px");
  var minVisibleItem = currentItem;
  var maxVisibleItem = currentItem + itemsToShow;
  var prevItem = minVisibleItem - itemsToScroll;
  var nextItem = maxVisibleItem + itemsToScroll;
  var originalChildren = react__WEBPACK_IMPORTED_MODULE_2__.Children.map(children, function (child, idx) {
    var isVisible = idx >= minVisibleItem && idx < maxVisibleItem;
    var isPrevItem = !isVisible && idx >= prevItem && idx < currentItem;
    var isNextItem = !isVisible && idx < nextItem && idx > currentItem;
    var itemClass = "carousel-item";
    var childToRender = autoTabIndexVisibleItems ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(child, {
      tabIndex: isVisible ? 0 : -1
    }) : child;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: cssPrefix(itemClass, "".concat(itemClass, "-").concat(idx), "".concat(itemClass, "-").concat(isVisible ? "visible" : "hidden"), isPrevItem && "".concat(itemClass, "-prev"), isNextItem && "".concat(itemClass, "-next"))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ItemWrapperContainer, {
      id: idx,
      itemPosition: itemPosition,
      style: {
        width: width,
        padding: paddingStyle
      },
      key: idx,
      onClick: onItemClick
    }, childToRender));
  });
  var toRender = enableSwipe ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_swipeable__WEBPACK_IMPORTED_MODULE_3__.Swipeable, {
    style: {
      display: "flex",
      flexDirection: verticalMode ? "column" : "row"
    },
    stopPropagation: true,
    preventDefaultTouchmoveEvent: preventDefaultTouchmoveEvent,
    trackMouse: enableMouseSwipe,
    onSwiped: onSwiped,
    onSwiping: onSwiping,
    className: cssPrefix("swipable")
  }, originalChildren) : originalChildren;
  return toRender;
};

Track.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
  itemsToShow: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  noAutoTabbedItems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  currentItem: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  itemPosition: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  itemPadding: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  childWidth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  verticalMode: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  enableSwipe: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  enableMouseSwipe: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  preventDefaultTouchmoveEvent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  onSwiped: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onSwiping: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onItemClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};

var directionIcons = {
  left: "❮",
  right: "❯",
  up: "❮",
  down: "❯"
};
var arrowClassname = cssPrefix("arrow");

var rotateStyle = function rotateStyle(direction) {
  var rotate = {};

  if (direction === Arrow.up || direction === Arrow.down) {
    rotate.transform = "rotate(90deg)";
  }

  return rotate;
};

var Arrow = function Arrow(_ref) {
  var direction = _ref.direction,
      onClick = _ref.onClick,
      icons = _ref.icons,
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, ["direction", "onClick", "icons", "style"]);

  var arrows = _objectSpread2(_objectSpread2({}, directionIcons), icons);

  var styleObj = _objectSpread2(_objectSpread2({}, rotateStyle(direction)), style);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Button, _extends({
    tabIndex: 0,
    onClick: onClick,
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(arrowClassname, "".concat(arrowClassname, "-").concat(direction)),
    style: styleObj
  }, rest), arrows[direction]);
};

Arrow.left = "left";
Arrow.right = "right";
Arrow.up = "up";
Arrow.down = "down";
Arrow.propTypes = {
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["left", "right", "up", "down"]).isRequired,
  icons: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  style: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};

var NEXT_ITEM = "NEXT_ITEM";
var PREV_ITEM = "PREV_ITEM";

var activeIndexReducer = function activeIndexReducer(state, action) {
  var limit = action.limit,
      itemsToScroll = action.itemsToScroll,
      type = action.type;

  switch (type) {
    case NEXT_ITEM:
      {
        var optimisticNextItem = state + itemsToScroll;
        var nextItem = limit >= optimisticNextItem ? optimisticNextItem : limit;
        return nextItem;
      }

    case PREV_ITEM:
      {
        var optimisticPrevItem = state - itemsToScroll;
        var prevItem = optimisticPrevItem >= limit ? optimisticPrevItem : limit;
        return prevItem;
      }

    default:
      return state;
  }
};

var nextItemAction = function nextItemAction(limit, itemsToScroll) {
  return {
    type: NEXT_ITEM,
    limit: limit,
    itemsToScroll: itemsToScroll
  };
};
var prevItemAction = function prevItemAction(limit, itemsToScroll) {
  return {
    type: PREV_ITEM,
    limit: limit,
    itemsToScroll: itemsToScroll
  };
};

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  padding: 0;\n  transition: all 250ms ease;\n  border: none;\n  margin: 5px;\n  background-color: ", ";\n  font-size: 1.3em;\n  content: \"\";\n  height: 10px;\n  width: 10px;\n  box-shadow: ", ";\n  border-radius: 50%;\n  outline: none;\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    box-shadow: ", ";\n  }\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var boxShadow = "0 0 1px 2px rgba(0, 0, 0, 0.5)";
var activeBoxShadow = "0 0 1px 3px rgba(103,58,183,1)";
var hoveredBoxShadow = "0 0 1px 3px rgba(103,58,183,.5)";
var Dot = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.attrs(function (_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "button" : _ref$type;
  return {
    type: type
  };
})(_templateObject$6(), function (_ref2) {
  var active = _ref2.active;
  return active ? "rgba(103,58,183,.5)" : "transparent";
}, function (_ref3) {
  var active = _ref3.active;
  return active ? activeBoxShadow : boxShadow;
}, function (_ref4) {
  var active = _ref4.active;
  return active ? activeBoxShadow : hoveredBoxShadow;
});

var DotContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(DotContainer, _React$Component);

  var _super = _createSuper(DotContainer);

  function DotContainer() {
    var _this;

    _classCallCheck(this, DotContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onClick", function () {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          id = _this$props.id;
      onClick(id);
    });

    return _this;
  }

  _createClass(DotContainer, [{
    key: "render",
    value: function render() {
      var active = this.props.active;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Dot, {
        tabIndex: active ? -1 : 0,
        onClick: this.onClick,
        active: active,
        className: "".concat(cssPrefix("dot"), " ").concat(active ? cssPrefix("dot_active") : "")
      });
    }
  }]);

  return DotContainer;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);

DotContainer.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)]),
  active: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 15px;\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var Indicators = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject$7());

var Pagination = /*#__PURE__*/function (_React$Component) {
  _inherits(Pagination, _React$Component);

  var _super = _createSuper(Pagination);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _super.apply(this, arguments);
  }

  _createClass(Pagination, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          numOfPages = _this$props.numOfPages,
          activePage = _this$props.activePage,
          onClick = _this$props.onClick;
      var pages = numberToArray(numOfPages);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Indicators, {
        className: cssPrefix("pagination")
      }, pages.map(function (item, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(DotContainer, {
          key: i,
          id: i,
          active: i === activePage,
          onClick: onClick
        });
      }));
    }
  }]);

  return Pagination;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);

Pagination.defaultProps = {
  onClick: noop
};
Pagination.propTypes = {
  numOfPages: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  activePage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};

var Carousel = /*#__PURE__*/function (_React$Component) {
  _inherits(Carousel, _React$Component);

  var _super = _createSuper(Carousel);

  function Carousel() {
    var _this;

    _classCallCheck(this, Carousel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "isComponentMounted", false);

    _defineProperty(_assertThisInitialized(_this), "state", {
      rootHeight: 0,
      childHeight: 0,
      sliderPosition: 0,
      swipedSliderPosition: 0,
      isSwiping: false,
      transitioning: false,
      transitionMs: _this.props.transitionMs,
      activeIndex: _this.props.initialActiveIndex || _this.props.initialFirstItem,
      // support deprecated  initialFirstItem
      pages: [],
      activePage: 0,
      sliderContainerWidth: 0
    });

    _defineProperty(_assertThisInitialized(_this), "setRef", function (name) {
      return function (ref) {
        return _this[name] = ref;
      };
    });

    _defineProperty(_assertThisInitialized(_this), "initResizeObserver", function () {
      _this.ro = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_5__["default"](function (entries, observer) {
        var _iterator = _createForOfIteratorHelper(entries),
            _step;

        try {
          var _loop = function _loop() {
            var entry = _step.value;

            if (entry.target === _this.sliderContainer) {
              // we are using rAF because it fixes the infinite refresh with gatsby (ssr?).
              // TBH, I'm not sure i fully understand why.
              // see https://github.com/sag1v/react-elastic-carousel/issues/107
              window.requestAnimationFrame(function () {
                _this.onContainerResize(entry);
              });
            }

            if (entry.target === _this.slider) {
              // we are using rAF because it fixes the infinite refresh with gatsby (ssr?).
              // TBH, I'm not sure i fully understand why
              // see https://github.com/sag1v/react-elastic-carousel/issues/107
              window.requestAnimationFrame(function () {
                _this.onSliderResize(entry);
              });
            }
          };

          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });

      _this.ro.observe(_this.sliderContainer);

      _this.ro.observe(_this.slider);
    });

    _defineProperty(_assertThisInitialized(_this), "unSubscribeObserver", function () {
      return _this.ro.disconnect();
    });

    _defineProperty(_assertThisInitialized(_this), "setAutoPlay", function () {
      var _this$getDerivedProps = _this.getDerivedPropsFromBreakPoint(),
          autoPlaySpeed = _this$getDerivedProps.autoPlaySpeed;

      _this.autoPlayIntervalId = setInterval(function () {
        if (_this.isComponentMounted) {
          var transitioning = _this.state.transitioning;

          if (!transitioning) {
            _this.slideNext();
          }
        }
      }, autoPlaySpeed);
    });

    _defineProperty(_assertThisInitialized(_this), "removeAutoPlay", function () {
      if (_this.autoPlayIntervalId) {
        clearInterval(_this.autoPlayIntervalId);
        _this.autoPlayIntervalId = null;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setPages", function () {
      var numOfPages = _this.getNumOfPages();

      var pages = numberToArray(numOfPages);

      _this.setState({
        pages: pages
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSliderTransitionEnd", function (fn) {
      _this.slider.addEventListener("transitionend", fn);
    });

    _defineProperty(_assertThisInitialized(_this), "removeSliderTransitionHook", function (fn) {
      _this.slider.removeEventListener("transitionend", fn);
    });

    _defineProperty(_assertThisInitialized(_this), "getDerivedPropsFromBreakPoint", function () {
      var _this$props = _this.props,
          breakPoints = _this$props.breakPoints,
          restOfProps = _objectWithoutProperties(_this$props, ["breakPoints"]);

      var sliderContainerWidth = _this.state.sliderContainerWidth; // default breakpoint from individual props

      var currentBreakPoint; // if breakpoints were added as props override the individual props

      if (breakPoints && breakPoints.length > 0) {
        currentBreakPoint = breakPoints.slice() // no mutations
        .reverse() // so we can find last match
        .find(function (bp) {
          return bp.width <= sliderContainerWidth;
        });

        if (!currentBreakPoint) {
          /* in case we don't have a lower width than sliderContainerWidth
           * this mostly happens in initilization when sliderContainerWidth is 0
           */
          currentBreakPoint = breakPoints[0];
        }
      } // merge direct props with current breakpoint Props


      return _objectSpread2(_objectSpread2({}, restOfProps), currentBreakPoint);
    });

    _defineProperty(_assertThisInitialized(_this), "updateSliderPosition", function () {
      _this.setState(function (state) {
        var _this$getDerivedProps2 = _this.getDerivedPropsFromBreakPoint(),
            children = _this$getDerivedProps2.children,
            verticalMode = _this$getDerivedProps2.verticalMode,
            itemsToShow = _this$getDerivedProps2.itemsToShow,
            transitionMs = _this$getDerivedProps2.transitionMs;

        var childHeight = state.childHeight,
            activeIndex = state.activeIndex;

        var childWidth = _this.calculateChildWidth();

        var totalItems = react__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(children).length;
        var hiddenSlots = totalItems - itemsToShow;
        var moveBy = activeIndex * -1;
        var emptySlots = itemsToShow - (totalItems - activeIndex);

        if (emptySlots > 0 && hiddenSlots > 0) {
          moveBy = emptySlots + activeIndex * -1;
        }

        var sliderPosition = (verticalMode ? childHeight : childWidth) * moveBy;
        var newActiveIndex = emptySlots > 0 ? activeIndex - emptySlots : activeIndex; // go back from 0ms to whatever set by the user
        // We were at 0ms because we wanted to disable animation on resize
        // see https://github.com/sag1v/react-elastic-carousel/issues/94

        window.requestAnimationFrame(function () {
          if (_this.isComponentMounted) {
            _this.setState({
              transitionMs: transitionMs
            });
          }
        });
        return {
          sliderPosition: sliderPosition,
          activeIndex: newActiveIndex < 0 ? 0 : newActiveIndex
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSliderResize", function (sliderNode) {
      if (!_this.isComponentMounted) {
        return;
      }

      var _this$getDerivedProps3 = _this.getDerivedPropsFromBreakPoint(),
          verticalMode = _this$getDerivedProps3.verticalMode,
          children = _this$getDerivedProps3.children,
          itemsToShow = _this$getDerivedProps3.itemsToShow;

      var sliderHeight = sliderNode.contentRect.height;
      var nextState = {};
      var childrenLength = react__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(children).length;

      if (verticalMode) {
        var childHeight = sliderHeight / childrenLength; // We use Math.min because we don't want to make the child smaller
        // if the number of children is smaller than itemsToShow.
        // (Because we do not want "empty slots")

        nextState.rootHeight = childHeight * Math.min(childrenLength, itemsToShow);
        nextState.childHeight = childHeight;
      } else {
        nextState.rootHeight = sliderHeight;
      }

      _this.setState(nextState);
    });

    _defineProperty(_assertThisInitialized(_this), "calculateChildWidth", function () {
      var sliderContainerWidth = _this.state.sliderContainerWidth;

      var _this$getDerivedProps4 = _this.getDerivedPropsFromBreakPoint(),
          verticalMode = _this$getDerivedProps4.verticalMode,
          itemsToShow = _this$getDerivedProps4.itemsToShow,
          showEmptySlots = _this$getDerivedProps4.showEmptySlots,
          children = _this$getDerivedProps4.children;
      /* based on slider container's width, get num of items to show
          * and calculate child's width (and update it in state)
          */


      var childrenLength = react__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(children).length || 1;
      var childWidth = 0;

      if (verticalMode) {
        childWidth = sliderContainerWidth;
      } else {
        // When "showEmptySlots" is false
        // We use Math.min because we don't want to make the child smaller
        // if the number of children is smaller than itemsToShow.
        // (Because we do not want "empty slots")
        childWidth = sliderContainerWidth / (showEmptySlots ? itemsToShow : Math.min(childrenLength, itemsToShow));
      }

      return childWidth;
    });

    _defineProperty(_assertThisInitialized(_this), "onContainerResize", function (sliderContainerNode) {
      var newSliderContainerWidth = sliderContainerNode.contentRect.width; // update slider container width
      // disable animation on resize see https://github.com/sag1v/react-elastic-carousel/issues/94

      var _this$getDerivedProps5 = _this.getDerivedPropsFromBreakPoint(),
          outerSpacing = _this$getDerivedProps5.outerSpacing,
          initialVerticalMode = _this$getDerivedProps5.verticalMode;

      var containerWidth = newSliderContainerWidth - (initialVerticalMode ? 0 : outerSpacing * 2);

      if (!_this.isComponentMounted || _this.state.sliderContainerWidth === newSliderContainerWidth) {
        // prevent infinite loop
        return;
      }

      _this.setState({
        sliderContainerWidth: containerWidth,
        transitionMs: 0
      }, function () {
        // we must get these props inside setState (get future props because its async)
        var _this$getDerivedProps6 = _this.getDerivedPropsFromBreakPoint(),
            onResize = _this$getDerivedProps6.onResize,
            itemsToShow = _this$getDerivedProps6.itemsToShow,
            children = _this$getDerivedProps6.children;

        var childrenLength = react__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(children).length || 1;

        _this.setState(function (currentState) {
          // We might need to change the selected index when the size of the container changes
          // we are making sure the selected index is not out of boundaries and respecting itemsToShow
          // This usually happens with breakpoints. see https://github.com/sag1v/react-elastic-carousel/issues/122
          var activeIndex = currentState.activeIndex; // we take the lowest, in case itemsToShow is greater than childrenLength

          var maxItemsToShow = Math.min(childrenLength, itemsToShow);
          var endLimit = childrenLength - maxItemsToShow;

          if (activeIndex > endLimit) {
            activeIndex = endLimit;
          }

          return {
            activeIndex: activeIndex
          };
        }, function () {
          /* Based on all of the above new data:
          * update slider position
          * get the new current breakpoint
          * pass the current breakpoint to the consumer's callback
          */
          _this.updateSliderPosition();

          var currentBreakPoint = _this.getDerivedPropsFromBreakPoint();

          onResize(currentBreakPoint);
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "tiltMovement", function (position) {
      var distance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
      var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 150;

      _this.setState(function (state) {
        return {
          isSwiping: true,
          swipedSliderPosition: position - distance
        };
      });

      setTimeout(function () {
        _this.setState({
          isSwiping: false,
          swipedSliderPosition: 0
        });
      }, duration);
    });

    _defineProperty(_assertThisInitialized(_this), "convertChildToCbObj", function (index) {
      var _this$getDerivedProps7 = _this.getDerivedPropsFromBreakPoint(),
          children = _this$getDerivedProps7.children; // support decimal itemsToShow


      var roundedIdx = Math.round(index);
      var child = react__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(children)[roundedIdx];
      return {
        item: child.props,
        index: roundedIdx
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getNextItemIndex", function (currentIndex, getPrev) {
      var _this$getDerivedProps8 = _this.getDerivedPropsFromBreakPoint(),
          children = _this$getDerivedProps8.children,
          itemsToShow = _this$getDerivedProps8.itemsToShow,
          itemsToScroll = _this$getDerivedProps8.itemsToScroll;

      var childrenLength = react__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(children).length || 1;
      var notEnoughItemsToShow = itemsToShow > childrenLength;
      var limit = getPrev ? 0 : childrenLength - itemsToShow;

      if (notEnoughItemsToShow) {
        limit = 0; // basically don't move
      }

      var nextAction = getPrev ? prevItemAction(0, itemsToScroll) : nextItemAction(limit, itemsToScroll);
      var nextItem = activeIndexReducer(currentIndex, nextAction);
      return nextItem;
    });

    _defineProperty(_assertThisInitialized(_this), "getNextItemObj", function (getPrev) {
      var _this$getDerivedProps9 = _this.getDerivedPropsFromBreakPoint(),
          children = _this$getDerivedProps9.children;

      var activeIndex = _this.state.activeIndex;

      var nextItemIndex = _this.getNextItemIndex(activeIndex, getPrev); // support decimal itemsToShow


      var roundedIdx = Math.round(nextItemIndex);
      var asElement = react__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(children)[roundedIdx];
      var asObj = {
        item: asElement.props,
        index: roundedIdx
      };
      return asObj;
    });

    _defineProperty(_assertThisInitialized(_this), "resetSwipe", function () {
      _this.setState({
        swipedSliderPosition: 0,
        transitioning: false,
        isSwiping: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSwiping", function (data) {
      var deltaX = data.deltaX,
          absX = data.absX,
          deltaY = data.deltaY,
          absY = data.absY,
          dir = data.dir;

      _this.setState(function (state) {
        var childHeight = state.childHeight,
            activeIndex = state.activeIndex,
            sliderPosition = state.sliderPosition;

        var _this$getDerivedProps10 = _this.getDerivedPropsFromBreakPoint(),
            itemsToShow = _this$getDerivedProps10.itemsToShow,
            verticalMode = _this$getDerivedProps10.verticalMode,
            children = _this$getDerivedProps10.children,
            isRTL = _this$getDerivedProps10.isRTL;

        var childWidth = _this.calculateChildWidth(); // determine how far can user swipe


        var childrenLength = react__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(children).length || 1;
        var goingNext = !verticalMode && dir === "Left" && !isRTL || !verticalMode && dir === "Right" && isRTL || verticalMode && dir === "Up";
        var goingBack = !verticalMode && dir === "Right" && !isRTL || !verticalMode && dir === "Left" && isRTL || verticalMode && dir === "Down";
        var horizontalSwipe = dir === "Left" || dir === "Right";
        var verticalSwipe = dir === "Up" || dir === "Down";
        var horizontalMode = !verticalMode;
        var distanceSwipe = 0;
        var horizontalEdgeStoppage = childWidth / 2;
        var verticalEdgeStoppage = childHeight / 2;

        if (verticalMode) {
          if (verticalSwipe) {
            var trackSize = childrenLength * childHeight;

            if (goingNext) {
              distanceSwipe = trackSize - childHeight * activeIndex - itemsToShow * childHeight + verticalEdgeStoppage;
            } else if (goingBack) {
              distanceSwipe = childHeight * activeIndex + verticalEdgeStoppage;
            }
          }
        } else {
          if (horizontalSwipe) {
            var _trackSize = childrenLength * childWidth;

            if (goingNext) {
              distanceSwipe = _trackSize - childWidth * activeIndex - itemsToShow * childWidth + horizontalEdgeStoppage;
            } else if (goingBack) {
              distanceSwipe = childWidth * activeIndex + horizontalEdgeStoppage;
            }
          }
        }

        var shouldHorizontalSkipUpdate = horizontalMode && verticalSwipe || horizontalMode && horizontalSwipe && absX > distanceSwipe;
        var shouldVerticalSkipUpdate = verticalMode && horizontalSwipe || verticalMode && verticalSwipe && absY > distanceSwipe;

        if (shouldHorizontalSkipUpdate || shouldVerticalSkipUpdate) {
          // bail out of state update
          return;
        }

        var swipedSliderPosition;

        if (horizontalSwipe) {
          if (isRTL) {
            swipedSliderPosition = sliderPosition + deltaX;
          } else {
            swipedSliderPosition = sliderPosition - deltaX;
          }
        } else {
          swipedSliderPosition = sliderPosition - deltaY;
        }

        return {
          swipedSliderPosition: swipedSliderPosition,
          isSwiping: true,
          transitioning: true
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSwiped", function (data) {
      // we need to handle all scenarios:
      // 1. Horizontal mode - swipe left or right
      // 2. Horizontal mode with RTL - swipe left or right
      // 3. vertical mode - swipe up or down
      var absX = data.absX,
          absY = data.absY,
          dir = data.dir;
      var _this$state = _this.state,
          childHeight = _this$state.childHeight,
          activeIndex = _this$state.activeIndex;

      var _this$getDerivedProps11 = _this.getDerivedPropsFromBreakPoint(),
          verticalMode = _this$getDerivedProps11.verticalMode,
          isRTL = _this$getDerivedProps11.isRTL,
          itemsToScroll = _this$getDerivedProps11.itemsToScroll;

      var childWidth = _this.calculateChildWidth();

      var func = _this.resetSwipe;
      var minSwipeDistanceHorizontal = childWidth / 5;
      var minSwipeDistanceVertical = childHeight / 5;
      var swipedLeft = dir === "Left";
      var swipedRight = dir === "Right";
      var swipedUp = dir === "Up";
      var swipedDown = dir === "Down";
      var verticalGoSwipe = verticalMode && (swipedUp || swipedDown) && absY > minSwipeDistanceVertical;
      var horizontalGoSwipe = !verticalMode && (swipedRight || swipedLeft) && absX > minSwipeDistanceHorizontal;
      var goodToGo = false;

      if (verticalGoSwipe || horizontalGoSwipe) {
        goodToGo = true;
      }

      if (goodToGo) {
        // we should go to a different item
        // determine what method we need to invoke
        if (verticalMode) {
          // get number of slides from user's swiping
          var numberOfSlidesViaSwipe = Math.ceil((absY - minSwipeDistanceVertical) / childHeight); // if user swipes more than itemsToScroll then we want to bypass itemsToScroll for a smoother scroll

          var numberOfSlidesTogo = Math.max(itemsToScroll, numberOfSlidesViaSwipe);
          var backSlidesToGo = activeIndex - numberOfSlidesTogo;
          var forwardSlideTtoGo = activeIndex + numberOfSlidesTogo; // up or down

          if (swipedDown) {
            // func = this.onPrevStart;
            func = function func() {
              return _this.goTo(backSlidesToGo);
            };
          }

          if (swipedUp) {
            // func = this.onNextStart;
            func = function func() {
              return _this.goTo(forwardSlideTtoGo);
            };
          }
        } else {
          // get number of slides from user's swiping
          var _numberOfSlidesViaSwipe = Math.ceil((absX - minSwipeDistanceHorizontal) / childWidth); // if user swipes more than itemsToScroll then we want to bypass itemsToScroll for a smoother scroll


          var _numberOfSlidesTogo = Math.max(itemsToScroll, _numberOfSlidesViaSwipe);

          var _backSlidesToGo = activeIndex - _numberOfSlidesTogo;

          var _forwardSlideTtoGo = activeIndex + _numberOfSlidesTogo; // horizontal mode


          if (isRTL) {
            // flip sides
            if (swipedLeft) {
              // func = this.onPrevStart;
              func = function func() {
                return _this.goTo(_backSlidesToGo);
              };
            }

            if (swipedRight) {
              // func = this.onNextStart;
              func = function func() {
                return _this.goTo(_forwardSlideTtoGo);
              };
            }
          } else {
            // normal behavior
            if (swipedLeft) {
              // func = this.onNextStart;
              func = function func() {
                return _this.goTo(_forwardSlideTtoGo);
              };
            }

            if (swipedRight) {
              // func = this.onPrevStart;
              func = function func() {
                return _this.goTo(_backSlidesToGo);
              };
            }
          }
        }
      } // we are not "tilting" on edges, so we need to reset isSwiping and transitioning.
      // otherwise we wont slide back to edge


      _this.setState({
        isSwiping: false,
        transitioning: false
      });

      func({
        skipTilt: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onNextStart", function (options) {
      var _this$getDerivedProps12 = _this.getDerivedPropsFromBreakPoint(),
          onNextStart = _this$getDerivedProps12.onNextStart;

      var activeIndex = _this.state.activeIndex;

      var nextItemObj = _this.getNextItemObj();

      var prevItemObj = _this.convertChildToCbObj(activeIndex);

      onNextStart(prevItemObj, nextItemObj);

      _this.slideNext(options);
    });

    _defineProperty(_assertThisInitialized(_this), "onPrevStart", function (options) {
      var _this$getDerivedProps13 = _this.getDerivedPropsFromBreakPoint(),
          onPrevStart = _this$getDerivedProps13.onPrevStart;

      var activeIndex = _this.state.activeIndex;

      var nextItemObj = _this.getNextItemObj(true);

      var prevItemObj = _this.convertChildToCbObj(activeIndex);

      onPrevStart(prevItemObj, nextItemObj);

      _this.slidePrev(options);
    });

    _defineProperty(_assertThisInitialized(_this), "slideNext", function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var skipTilt = options.skipTilt;

      var _this$getDerivedProps14 = _this.getDerivedPropsFromBreakPoint(),
          enableTilt = _this$getDerivedProps14.enableTilt;

      var _this$state2 = _this.state,
          activeIndex = _this$state2.activeIndex,
          sliderPosition = _this$state2.sliderPosition;

      var nextItem = _this.getNextItemIndex(activeIndex, false);

      if (activeIndex !== nextItem) {
        _this.goTo(nextItem);
      } else if (enableTilt && !skipTilt) {
        _this.tiltMovement(sliderPosition, 20, 150);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "slidePrev", function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var skipTilt = options.skipTilt;
      var activeIndex = _this.state.activeIndex;

      var _this$getDerivedProps15 = _this.getDerivedPropsFromBreakPoint(),
          enableTilt = _this$getDerivedProps15.enableTilt;

      var prevItem = _this.getNextItemIndex(activeIndex, true);

      if (activeIndex !== prevItem) {
        _this.goTo(prevItem);
      } else if (enableTilt && !skipTilt) {
        _this.tiltMovement(0, -20, 150);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onNextEnd", function () {
      var _this$getDerivedProps16 = _this.getDerivedPropsFromBreakPoint(),
          onNextEnd = _this$getDerivedProps16.onNextEnd,
          onChange = _this$getDerivedProps16.onChange;

      var _this$state3 = _this.state,
          activeIndex = _this$state3.activeIndex,
          activePage = _this$state3.activePage;

      var nextItemObj = _this.convertChildToCbObj(activeIndex);

      _this.removeSliderTransitionHook(_this.onNextEnd);

      _this.setState({
        transitioning: false
      });

      onChange && onChange(nextItemObj, activePage);
      onNextEnd(nextItemObj, activePage);
    });

    _defineProperty(_assertThisInitialized(_this), "onPrevEnd", function () {
      var _this$getDerivedProps17 = _this.getDerivedPropsFromBreakPoint(),
          onPrevEnd = _this$getDerivedProps17.onPrevEnd,
          onChange = _this$getDerivedProps17.onChange;

      var _this$state4 = _this.state,
          activeIndex = _this$state4.activeIndex,
          activePage = _this$state4.activePage;

      var nextItemObj = _this.convertChildToCbObj(activeIndex);

      _this.removeSliderTransitionHook(_this.onPrevEnd);

      _this.setState({
        transitioning: false
      });

      onChange && onChange(nextItemObj, activePage);
      onPrevEnd(nextItemObj, activePage);
    });

    _defineProperty(_assertThisInitialized(_this), "generatePositionUpdater", function (direction, nextItemId, verticalMode, rest) {
      return function (state) {
        var sliderPosition = state.sliderPosition,
            childHeight = state.childHeight,
            activeIndex = state.activeIndex;

        var childWidth = _this.calculateChildWidth();

        var newSliderPosition = 0;
        var childSize = verticalMode ? childHeight : childWidth;

        if (direction === consts.NEXT) {
          newSliderPosition = sliderPosition - childSize * (nextItemId - activeIndex);
        } else {
          newSliderPosition = sliderPosition + childSize * (activeIndex - nextItemId);
        }

        return _objectSpread2({
          sliderPosition: newSliderPosition,
          activeIndex: nextItemId,
          swipedSliderPosition: 0,
          isSwiping: false
        }, rest);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "goTo", function (nextItemId) {
      var _this$getDerivedProps18 = _this.getDerivedPropsFromBreakPoint(),
          children = _this$getDerivedProps18.children,
          verticalMode = _this$getDerivedProps18.verticalMode,
          itemsToShow = _this$getDerivedProps18.itemsToShow;

      var activeIndex = _this.state.activeIndex;
      var childrenLength = react__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(children).length;
      var safeNextItemId = Math.max(0, nextItemId); // don't allow negative numbers

      var isPrev = activeIndex > safeNextItemId;

      var nextAvailableItem = _this.getNextItemIndex(activeIndex, isPrev);

      var noChange = nextAvailableItem === activeIndex;
      var outOfBoundary = safeNextItemId + itemsToShow >= childrenLength;

      if (noChange) {
        return;
      }

      if (outOfBoundary) {
        // Either go to last index (respect itemsToShow) or 0 index if we can't fill the slider
        safeNextItemId = Math.max(0, childrenLength - itemsToShow);
      }

      var direction = consts.NEXT;
      var positionEndCb = _this.onNextEnd;

      if (isPrev) {
        direction = consts.PREV;
        positionEndCb = _this.onPrevEnd;
      }

      var stateUpdater = _this.generatePositionUpdater(direction, safeNextItemId, verticalMode, {
        transitioning: true
      });

      _this.setState(stateUpdater, function () {
        // callback
        pipe(_this.updateActivePage(), _this.onSliderTransitionEnd(positionEndCb));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getNumOfPages", function () {
      var _this$getDerivedProps19 = _this.getDerivedPropsFromBreakPoint(),
          children = _this$getDerivedProps19.children,
          itemsToShow = _this$getDerivedProps19.itemsToShow;

      var childrenLength = react__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(children).length;
      var safeItemsToShow = Math.max(itemsToShow, 1);
      var numOfPages = Math.ceil(childrenLength / safeItemsToShow);
      return numOfPages || 1;
    });

    _defineProperty(_assertThisInitialized(_this), "updateActivePage", function () {
      _this.setState(function (state) {
        var _this$getDerivedProps20 = _this.getDerivedPropsFromBreakPoint(),
            itemsToShow = _this$getDerivedProps20.itemsToShow,
            children = _this$getDerivedProps20.children;

        var activeIndex = state.activeIndex,
            activePage = state.activePage;

        var numOfPages = _this.getNumOfPages();

        var childrenLength = react__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(children).length;
        var inRangeItemsToShow = Math.min(childrenLength, itemsToShow); // watch out from 0 (so we wont divide by zero)

        var safeItemsToShow = Math.max(inRangeItemsToShow, 1);
        var newActivePage = Math.ceil(activeIndex / safeItemsToShow);
        var inRangeActivePageIndex = Math.min(numOfPages - 1, newActivePage);

        if (activePage !== inRangeActivePageIndex) {
          return {
            activePage: inRangeActivePageIndex
          };
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onIndicatorClick", function (indicatorId) {
      var _this$getDerivedProps21 = _this.getDerivedPropsFromBreakPoint(),
          itemsToShow = _this$getDerivedProps21.itemsToShow;

      var gotoIndex = indicatorId * itemsToShow;

      _this.setState({
        activePage: indicatorId
      });

      _this.goTo(gotoIndex);
    });

    return _this;
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.isComponentMounted = true;
      this.initResizeObserver();
      this.updateActivePage();
      this.setPages();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props2 = this.props,
          enableAutoPlay = _this$props2.enableAutoPlay,
          children = _this$props2.children,
          itemsToShow = _this$props2.itemsToShow,
          itemsToScroll = _this$props2.itemsToScroll,
          breakPoints = _this$props2.breakPoints;
      var _this$state5 = this.state,
          activeIndex = _this$state5.activeIndex,
          sliderContainerWidth = _this$state5.sliderContainerWidth;
      var nextItem = this.getNextItemIndex(activeIndex, false);
      var currentChildrenLength = react__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(children).length;
      var prevChildrenLength = react__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(prevProps.children).length; // update pages (for pagination)

      if (prevChildrenLength !== currentChildrenLength || prevProps.itemsToShow !== itemsToShow || prevProps.itemsToScroll !== itemsToScroll || prevProps.breakPoints !== breakPoints || sliderContainerWidth !== prevState.sliderContainerWidth) {
        // we mimic a container resize to recalculate item width when itemsToShow are updated
        this.onContainerResize({
          contentRect: {
            width: sliderContainerWidth
          }
        });
        this.setPages();
        this.updateActivePage();
      } // autoplay update


      if (activeIndex === nextItem) {
        this.removeAutoPlay();
      } else if (enableAutoPlay && !this.autoPlayIntervalId) {
        this.setAutoPlay();
      } else if (!enableAutoPlay && this.autoPlayIntervalId) {
        this.removeAutoPlay();
      }

      if (prevChildrenLength !== currentChildrenLength) {
        var _this$getDerivedProps22 = this.getDerivedPropsFromBreakPoint(),
            calculatedItemsToShow = _this$getDerivedProps22.itemsToShow; // number of items is reduced (we don't care if number of items is increased)
        // we need to check if our current index is not out of boundaries
        // we need to include itemsToShow so we can fill up the slots


        var lastIndex = currentChildrenLength - 1;
        var isOutOfRange = activeIndex + calculatedItemsToShow > lastIndex;

        if (isOutOfRange) {
          // we are out of boundaries, go "back" to last item of the list (respect itemsToShow)
          this.goTo(Math.max(0, currentChildrenLength - calculatedItemsToShow));
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isComponentMounted = false;
      this.removeAutoPlay();
      this.unSubscribeObserver();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state6 = this.state,
          activePage = _this$state6.activePage,
          isSwiping = _this$state6.isSwiping,
          sliderPosition = _this$state6.sliderPosition,
          swipedSliderPosition = _this$state6.swipedSliderPosition,
          rootHeight = _this$state6.rootHeight,
          pages = _this$state6.pages,
          activeIndex = _this$state6.activeIndex,
          transitionMs = _this$state6.transitionMs;

      var _this$getDerivedProps23 = this.getDerivedPropsFromBreakPoint(),
          className = _this$getDerivedProps23.className,
          style = _this$getDerivedProps23.style,
          itemsToShow = _this$getDerivedProps23.itemsToShow,
          itemsToScroll = _this$getDerivedProps23.itemsToScroll,
          verticalMode = _this$getDerivedProps23.verticalMode,
          isRTL = _this$getDerivedProps23.isRTL,
          easing = _this$getDerivedProps23.easing,
          tiltEasing = _this$getDerivedProps23.tiltEasing,
          children = _this$getDerivedProps23.children,
          focusOnSelect = _this$getDerivedProps23.focusOnSelect,
          autoTabIndexVisibleItems = _this$getDerivedProps23.autoTabIndexVisibleItems,
          itemPosition = _this$getDerivedProps23.itemPosition,
          itemPadding = _this$getDerivedProps23.itemPadding,
          outerSpacing = _this$getDerivedProps23.outerSpacing,
          enableSwipe = _this$getDerivedProps23.enableSwipe,
          enableMouseSwipe = _this$getDerivedProps23.enableMouseSwipe,
          pagination = _this$getDerivedProps23.pagination,
          showArrows = _this$getDerivedProps23.showArrows,
          disableArrowsOnEnd = _this$getDerivedProps23.disableArrowsOnEnd,
          preventDefaultTouchmoveEvent = _this$getDerivedProps23.preventDefaultTouchmoveEvent,
          renderArrow = _this$getDerivedProps23.renderArrow,
          renderPagination = _this$getDerivedProps23.renderPagination;

      var childWidth = this.calculateChildWidth();
      var numOfPages = this.getNumOfPages();
      /** Determine if arrows should be disabled */

      var canSlidePrev = activeIndex !== this.getNextItemIndex(activeIndex, true);
      var canSlideNext = activeIndex !== this.getNextItemIndex(activeIndex, false);
      var disabledPrevArrow = !canSlidePrev && disableArrowsOnEnd;
      var disabledNextArrow = !canSlideNext && disableArrowsOnEnd;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(CarouselWrapper, {
        isRTL: isRTL,
        className: "".concat(cssPrefix("carousel-wrapper"), " ").concat(className),
        style: style
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(StyledCarousel, {
        className: cssPrefix("carousel"),
        size: {
          height: rootHeight
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_only_when__WEBPACK_IMPORTED_MODULE_6__["default"], {
        when: showArrows
      }, renderArrow ? renderArrow({
        type: consts.PREV,
        onClick: this.onPrevStart,
        isEdge: !canSlidePrev
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Arrow, {
        onClick: this.onPrevStart,
        direction: verticalMode ? Arrow.up : Arrow.left,
        disabled: disabledPrevArrow
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(SliderContainer, {
        className: cssPrefix("slider-container"),
        ref: this.setRef("sliderContainer")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Slider, {
        verticalMode: verticalMode,
        isRTL: isRTL,
        easing: easing,
        sliderPosition: sliderPosition,
        swipedSliderPosition: swipedSliderPosition,
        isSwiping: isSwiping,
        transitionMs: transitionMs,
        tiltEasing: tiltEasing,
        className: cssPrefix("slider"),
        ref: this.setRef("slider"),
        outerSpacing: outerSpacing
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Track, {
        verticalMode: verticalMode,
        children: react__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(children),
        childWidth: childWidth,
        currentItem: activeIndex,
        autoTabIndexVisibleItems: autoTabIndexVisibleItems,
        itemsToShow: itemsToShow,
        itemsToScroll: itemsToScroll,
        itemPosition: itemPosition,
        itemPadding: itemPadding,
        enableSwipe: enableSwipe,
        enableMouseSwipe: enableMouseSwipe,
        preventDefaultTouchmoveEvent: preventDefaultTouchmoveEvent,
        onSwiped: this.onSwiped,
        onSwiping: this.onSwiping,
        onItemClick: focusOnSelect ? this.goTo : undefined
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_only_when__WEBPACK_IMPORTED_MODULE_6__["default"], {
        when: showArrows
      }, renderArrow ? renderArrow({
        type: consts.NEXT,
        onClick: this.onNextStart,
        isEdge: !canSlideNext
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Arrow, {
        onClick: this.onNextStart,
        direction: verticalMode ? Arrow.down : Arrow.right,
        disabled: disabledNextArrow
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_only_when__WEBPACK_IMPORTED_MODULE_6__["default"], {
        when: pagination
      }, renderPagination ? renderPagination({
        pages: pages,
        activePage: activePage,
        onClick: this.onIndicatorClick
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Pagination, {
        numOfPages: numOfPages,
        activePage: activePage,
        onClick: this.onIndicatorClick
      })));
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);

Carousel.defaultProps = {
  className: "",
  style: {},
  verticalMode: false,
  isRTL: false,
  initialFirstItem: 0,
  initialActiveIndex: 0,
  showArrows: true,
  showEmptySlots: false,
  disableArrowsOnEnd: true,
  pagination: true,
  easing: "ease",
  tiltEasing: "ease",
  transitionMs: 500,
  enableTilt: true,
  enableSwipe: true,
  enableMouseSwipe: true,
  preventDefaultTouchmoveEvent: false,
  focusOnSelect: false,
  autoTabIndexVisibleItems: true,
  itemsToShow: 1,
  itemsToScroll: 1,
  itemPosition: consts.CENTER,
  itemPadding: [0, 0, 0, 0],
  outerSpacing: 0,
  enableAutoPlay: false,
  autoPlaySpeed: 2000,
  // callbacks
  onChange: noop,
  onNextEnd: noop,
  onPrevEnd: noop,
  onNextStart: noop,
  onPrevStart: noop,
  onResize: noop
};
Carousel.propTypes = {
  /** Items to render */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,

  /** The css class for the root element */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),

  /** The style object for the root element */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),

  /** Display the Carousel in a vertical layout */
  verticalMode: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /** Flip right to left */
  isRTL: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /** Show dots for paging */
  pagination: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /** Animation speed */
  transitionMs: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),

  /** transition easing pattern */
  easing: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),

  /** transition easing pattern for the tilt */
  tiltEasing: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),

  /** The "bump" animation when reaching the last item */
  enableTilt: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /** Number of visible items  */
  itemsToShow: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),

  /** Number of items to scroll */
  itemsToScroll: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),

  /** Collection of objects with a width, itemsToShow and itemsToScroll  */
  breakPoints: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
    itemsToShow: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    itemsToScroll: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
  })),

  /** The initial active index when the component mounts */
  initialActiveIndex: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),

  /** **DEPRECATED - use initialActiveIndex instead** The first items when the component mounts */
  initialFirstItem: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),

  /** Show the arrow buttons */
  showArrows: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /** Show empty slots when children.length < itemsToShow (not compatible with verticalMode yet !) */
  showEmptySlots: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /** Disables the arrow button when there are no more items */
  disableArrowsOnEnd: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /** Go to item on click */
  focusOnSelect: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /** Automatically inject `tabIndex:0` to visible items */
  autoTabIndexVisibleItems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /** A render prop for the arrow component
   * - ({type, onClick}) => <div onClick={onClick}>{type === 'prev' ? '<-' : '->'}</div>
   */
  renderArrow: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /** A render prop for the pagination component
   * - ({ pages, activePage, onClick }) =>  <YourComponent/>
   */
  renderPagination: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /** Position the element relative to it's wrapper (use the consts object) - consts.START | consts.CENTER | consts.END */
  itemPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([consts.START, consts.CENTER, consts.END]),

  /** A padding for each element  */
  itemPadding: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),

  /** A margin at the beginning and at the end of the carousel (not compatible with verticalMode yet !) */
  outerSpacing: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  // swipe

  /** Enable or disable swipe */
  enableSwipe: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /** Enable or disable mouse swipe */
  enableMouseSwipe: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /** Prevent page scroll on touchmove.
   * Use this to stop the browser from scrolling while a user swipes.
   * More details: https://github.com/FormidableLabs/react-swipeable#preventdefaulttouchmoveevent-details
   */
  preventDefaultTouchmoveEvent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  // auto play

  /** Enable or disable auto play */
  enableAutoPlay: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /** Set auto play speed (ms) */
  autoPlaySpeed: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  // callbacks

  /** A callback for the change of an item
   * - onChange(currentItemObject, currentPageIndex) => {} */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /** A callback for the beginning of the next transition
   * - onNextStart(prevItemObject, nextItemObject) => {} */
  onNextStart: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /** A callback for the beginning of the prev transition
   * - onPrevStart(prevItemObject, nextItemObject) => {} */
  onPrevStart: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /** A callback for the end of the next transition
   * - onNextEnd(nextItemObject, currentPageIndex) => {} */
  onNextEnd: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /** A callback for the end of the prev transition
   * - onPrevEnd(nextItemObject, currentPageIndex) => {} */
  onPrevEnd: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /** A callback for the "slider-container" resize
   * - onResize(currentBreakPoint) => {} */
  onResize: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carousel);

//# sourceMappingURL=index.es.js.map


/***/ },

/***/ "./node_modules/react-elastic-carousel/node_modules/react-only-when/dist/index.es.js"
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-elastic-carousel/node_modules/react-only-when/dist/index.es.js ***!
  \*******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Only = function (_Component) {
  inherits(Only, _Component);

  function Only() {
    classCallCheck(this, Only);
    return possibleConstructorReturn(this, (Only.__proto__ || Object.getPrototypeOf(Only)).apply(this, arguments));
  }

  createClass(Only, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          when = _props.when,
          hiddenMode = _props.hiddenMode,
          className = _props.className;

      var singleChild = react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children);
      var _singleChild$props = singleChild.props,
          style = _singleChild$props.style,
          restOfChildProps = objectWithoutProperties(_singleChild$props, ['style']);

      var extendedProps = _extends({}, restOfChildProps);

      var keepNode = hiddenMode && hiddenMode !== "withNull";

      if (keepNode) {
        if (hiddenMode === "withCss") {
          extendedProps.className = extendedProps.className + ' ' + className;
        } else {
          extendedProps.style = _extends({}, style, hiddenMode === "withDisplay" && { display: "none" }, hiddenMode === "withVisibility" && { visibility: "hidden" });
        }
      }
      var cloned = react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(singleChild, extendedProps);
      var toHide = keepNode ? cloned : null;

      return when ? singleChild : toHide;
    }
  }]);
  return Only;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

Only.defaultProps = {
  hiddenMode: "withNull",
  className: "r-o_hidden"
};
Only.propTypes = {
  /** A single child element */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element).isRequired,

  /** When true, children will rendered as is  */
  when: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,

  /** Determines how "react-only-when" should hide the child element 
   * "withNull": Will not render the child
   * "withDisplay": Will render the child with display:none  
   * "withVisibility": Will render the child with visibility:hidden
   * "withCss": Will render the child with a CSS class (you can pass it a custom className prop)
  */
  hiddenMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["withNull", "withDisplay", "withVisibility", "withCss"]),
  /** This is working in combination with hiddenMode={"withCss"}   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Only);
//# sourceMappingURL=index.es.js.map


/***/ },

/***/ "./node_modules/react-elastic-carousel/node_modules/react-swipeable/es/index.js"
/*!**************************************************************************************!*\
  !*** ./node_modules/react-elastic-carousel/node_modules/react-swipeable/es/index.js ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOWN: () => (/* binding */ DOWN),
/* harmony export */   LEFT: () => (/* binding */ LEFT),
/* harmony export */   RIGHT: () => (/* binding */ RIGHT),
/* harmony export */   Swipeable: () => (/* binding */ Swipeable),
/* harmony export */   UP: () => (/* binding */ UP),
/* harmony export */   useSwipeable: () => (/* binding */ useSwipeable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var defaultProps = {
  preventDefaultTouchmoveEvent: false,
  delta: 10,
  rotationAngle: 0,
  trackMouse: false,
  trackTouch: true
};
var initialState = {
  xy: [0, 0],
  swiping: false,
  eventData: undefined,
  start: undefined
};
var LEFT = 'Left';
var RIGHT = 'Right';
var UP = 'Up';
var DOWN = 'Down';
var touchStart = 'touchstart';
var touchMove = 'touchmove';
var touchEnd = 'touchend';
var mouseMove = 'mousemove';
var mouseUp = 'mouseup';

function getDirection(absX, absY, deltaX, deltaY) {
  if (absX > absY) {
    if (deltaX > 0) {
      return LEFT;
    }

    return RIGHT;
  } else if (deltaY > 0) {
    return UP;
  }

  return DOWN;
}

function rotateXYByAngle(pos, angle) {
  if (angle === 0) return pos;
  var angleInRadians = Math.PI / 180 * angle;
  var x = pos[0] * Math.cos(angleInRadians) + pos[1] * Math.sin(angleInRadians);
  var y = pos[1] * Math.cos(angleInRadians) - pos[0] * Math.sin(angleInRadians);
  return [x, y];
}

function getHandlers(set, handlerProps) {
  var onStart = function onStart(event) {
    // if more than a single touch don't track, for now...
    if (event.touches && event.touches.length > 1) return;
    set(function (state, props) {
      // setup mouse listeners on document to track swipe since swipe can leave container
      if (props.trackMouse) {
        document.addEventListener(mouseMove, onMove);
        document.addEventListener(mouseUp, onUp);
      }

      var _ref = event.touches ? event.touches[0] : event,
          clientX = _ref.clientX,
          clientY = _ref.clientY;

      var xy = rotateXYByAngle([clientX, clientY], props.rotationAngle);
      return _extends({}, state, initialState, {
        eventData: {
          initial: [].concat(xy),
          first: true
        },
        xy: xy,
        start: event.timeStamp || 0
      });
    });
  };

  var onMove = function onMove(event) {
    set(function (state, props) {
      if (!state.xy[0] || !state.xy[1] || event.touches && event.touches.length > 1) {
        return state;
      }

      var _ref2 = event.touches ? event.touches[0] : event,
          clientX = _ref2.clientX,
          clientY = _ref2.clientY;

      var _rotateXYByAngle = rotateXYByAngle([clientX, clientY], props.rotationAngle),
          x = _rotateXYByAngle[0],
          y = _rotateXYByAngle[1];

      var deltaX = state.xy[0] - x;
      var deltaY = state.xy[1] - y;
      var absX = Math.abs(deltaX);
      var absY = Math.abs(deltaY);
      var time = (event.timeStamp || 0) - state.start;
      var velocity = Math.sqrt(absX * absX + absY * absY) / (time || 1); // if swipe is under delta and we have not started to track a swipe: skip update

      if (absX < props.delta && absY < props.delta && !state.swiping) return state;
      var dir = getDirection(absX, absY, deltaX, deltaY);

      var eventData = _extends({}, state.eventData, {
        event: event,
        absX: absX,
        absY: absY,
        deltaX: deltaX,
        deltaY: deltaY,
        velocity: velocity,
        dir: dir
      });

      props.onSwiping && props.onSwiping(eventData); // track if a swipe is cancelable(handler for swiping or swiped(dir) exists)
      // so we can call preventDefault if needed

      var cancelablePageSwipe = false;

      if (props.onSwiping || props.onSwiped || props["onSwiped" + dir]) {
        cancelablePageSwipe = true;
      }

      if (cancelablePageSwipe && props.preventDefaultTouchmoveEvent && props.trackTouch && event.cancelable) event.preventDefault(); // first is now always false

      return _extends({}, state, {
        eventData: _extends({}, eventData, {
          first: false
        }),
        swiping: true
      });
    });
  };

  var onEnd = function onEnd(event) {
    set(function (state, props) {
      var eventData;

      if (state.swiping) {
        eventData = _extends({}, state.eventData, {
          event: event
        });
        props.onSwiped && props.onSwiped(eventData);
        props["onSwiped" + eventData.dir] && props["onSwiped" + eventData.dir](eventData);
      }

      return _extends({}, state, initialState, {
        eventData: eventData
      });
    });
  };

  var cleanUpMouse = function cleanUpMouse() {
    // safe to just call removeEventListener
    document.removeEventListener(mouseMove, onMove);
    document.removeEventListener(mouseUp, onUp);
  };

  var onUp = function onUp(e) {
    cleanUpMouse();
    onEnd(e);
  };

  var attachTouch = function attachTouch(el) {
    if (el && el.addEventListener) {
      // attach touch event listeners and handlers
      var tls = [[touchStart, onStart], [touchMove, onMove], [touchEnd, onEnd]];
      tls.forEach(function (_ref3) {
        var e = _ref3[0],
            h = _ref3[1];
        return el.addEventListener(e, h);
      }); // return properly scoped cleanup method for removing listeners

      return function () {
        return tls.forEach(function (_ref4) {
          var e = _ref4[0],
              h = _ref4[1];
          return el.removeEventListener(e, h);
        });
      };
    }
  };

  var onRef = function onRef(el) {
    // "inline" ref functions are called twice on render, once with null then again with DOM element
    // ignore null here
    if (el === null) return;
    set(function (state, props) {
      // if the same DOM el as previous just return state
      if (state.el === el) return state;
      var addState = {}; // if new DOM el clean up old DOM and reset cleanUpTouch

      if (state.el && state.el !== el && state.cleanUpTouch) {
        state.cleanUpTouch();
        addState.cleanUpTouch = null;
      } // only attach if we want to track touch


      if (props.trackTouch && el) {
        addState.cleanUpTouch = attachTouch(el);
      } // store event attached DOM el for comparison, clean up, and re-attachment


      return _extends({}, state, {
        el: el
      }, addState);
    });
  }; // set ref callback to attach touch event listeners


  var output = {
    ref: onRef // if track mouse attach mouse down listener

  };

  if (handlerProps.trackMouse) {
    output.onMouseDown = onStart;
  }

  return [output, attachTouch];
}

function updateTransientState(state, props, attachTouch) {
  var addState = {}; // clean up touch handlers if no longer tracking touches

  if (!props.trackTouch && state.cleanUpTouch) {
    state.cleanUpTouch();
    addState.cleanUpTouch = null;
  } else if (props.trackTouch && !state.cleanUpTouch) {
    // attach/re-attach touch handlers
    if (state.el) {
      addState.cleanUpTouch = attachTouch(state.el);
    }
  }

  return _extends({}, state, addState);
}

function useSwipeable(props) {
  var trackMouse = props.trackMouse;
  var transientState = react__WEBPACK_IMPORTED_MODULE_0__.useRef(_extends({}, initialState, {
    type: 'hook'
  }));
  var transientProps = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  transientProps.current = _extends({}, defaultProps, props);

  var _React$useMemo = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return getHandlers(function (cb) {
      return transientState.current = cb(transientState.current, transientProps.current);
    }, {
      trackMouse: trackMouse
    });
  }, [trackMouse]),
      handlers = _React$useMemo[0],
      attachTouch = _React$useMemo[1];

  transientState.current = updateTransientState(transientState.current, transientProps.current, attachTouch);
  return handlers;
}
var Swipeable =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Swipeable, _React$PureComponent);

  function Swipeable(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;

    _this._set = function (cb) {
      _this.transientState = cb(_this.transientState, _this.props);
    };

    _this.transientState = _extends({}, initialState, {
      type: 'class'
    });
    return _this;
  }

  var _proto = Swipeable.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        style = _this$props.style,
        _this$props$nodeName = _this$props.nodeName,
        nodeName = _this$props$nodeName === void 0 ? 'div' : _this$props$nodeName,
        innerRef = _this$props.innerRef,
        children = _this$props.children,
        trackMouse = _this$props.trackMouse;

    var _getHandlers = getHandlers(this._set, {
      trackMouse: trackMouse
    }),
        handlers = _getHandlers[0],
        attachTouch = _getHandlers[1];

    this.transientState = updateTransientState(this.transientState, this.props, attachTouch);
    var ref = innerRef ? function (el) {
      return innerRef(el), handlers.ref(el);
    } : handlers.ref;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(nodeName, _extends({}, handlers, {
      className: className,
      style: style,
      ref: ref
    }), children);
  };

  return Swipeable;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
Swipeable.propTypes = {
  onSwiped: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onSwiping: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onSwipedUp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onSwipedRight: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onSwipedDown: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onSwipedLeft: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  delta: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  preventDefaultTouchmoveEvent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  nodeName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  trackMouse: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  trackTouch: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  innerRef: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  rotationAngle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
Swipeable.defaultProps = defaultProps;




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

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js"
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }

    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;

        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;

                return true;
            }

            return false;
        });

        return result;
    }

    return (function () {
        function anonymous() {
            this.__entries__ = [];
        }

        var prototypeAccessors = { size: { configurable: true } };

        /**
         * @returns {boolean}
         */
        prototypeAccessors.size.get = function () {
            return this.__entries__.length;
        };

        /**
         * @param {*} key
         * @returns {*}
         */
        anonymous.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];

            return entry && entry[1];
        };

        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        anonymous.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);

            if (~index) {
                this.__entries__[index][1] = value;
            } else {
                this.__entries__.push([key, value]);
            }
        };

        /**
         * @param {*} key
         * @returns {void}
         */
        anonymous.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);

            if (~index) {
                entries.splice(index, 1);
            }
        };

        /**
         * @param {*} key
         * @returns {void}
         */
        anonymous.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };

        /**
         * @returns {void}
         */
        anonymous.prototype.clear = function () {
            this.__entries__.splice(0);
        };

        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        anonymous.prototype.forEach = function (callback, ctx) {
            var this$1 = this;
            if ( ctx === void 0 ) ctx = null;

            for (var i = 0, list = this$1.__entries__; i < list.length; i += 1) {
                var entry = list[i];

                callback.call(ctx, entry[1], entry[0]);
            }
        };

        Object.defineProperties( anonymous.prototype, prototypeAccessors );

        return anonymous;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g.Math === Math) {
        return __webpack_require__.g;
    }

    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }

    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }

    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }

    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;

/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
var throttle = function (callback, delay) {
    var leadingCall = false,
        trailingCall = false,
        lastCallTime = 0;

    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;

            callback();
        }

        if (trailingCall) {
            proxy();
        }
    }

    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }

    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();

        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }

            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        } else {
            leadingCall = true;
            trailingCall = false;

            setTimeout(timeoutCallback, delay);
        }

        lastCallTime = timeStamp;
    }

    return proxy;
};

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;

// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];

// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';

/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = function() {
    this.connected_ = false;
    this.mutationEventsAdded_ = false;
    this.mutationsObserver_ = null;
    this.observers_ = [];

    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
};

/**
 * Adds observer to observers list.
 *
 * @param {ResizeObserverSPI} observer - Observer to be added.
 * @returns {void}
 */


/**
 * Holds reference to the controller's instance.
 *
 * @private {ResizeObserverController}
 */


/**
 * Keeps reference to the instance of MutationObserver.
 *
 * @private {MutationObserver}
 */

/**
 * Indicates whether DOM listeners have been added.
 *
 * @private {boolean}
 */
ResizeObserverController.prototype.addObserver = function (observer) {
    if (!~this.observers_.indexOf(observer)) {
        this.observers_.push(observer);
    }

    // Add listeners if they haven't been added yet.
    if (!this.connected_) {
        this.connect_();
    }
};

/**
 * Removes observer from observers list.
 *
 * @param {ResizeObserverSPI} observer - Observer to be removed.
 * @returns {void}
 */
ResizeObserverController.prototype.removeObserver = function (observer) {
    var observers = this.observers_;
    var index = observers.indexOf(observer);

    // Remove observer if it's present in registry.
    if (~index) {
        observers.splice(index, 1);
    }

    // Remove listeners if controller has no connected observers.
    if (!observers.length && this.connected_) {
        this.disconnect_();
    }
};

/**
 * Invokes the update of observers. It will continue running updates insofar
 * it detects changes.
 *
 * @returns {void}
 */
ResizeObserverController.prototype.refresh = function () {
    var changesDetected = this.updateObservers_();

    // Continue running updates if changes have been detected as there might
    // be future ones caused by CSS transitions.
    if (changesDetected) {
        this.refresh();
    }
};

/**
 * Updates every observer from observers list and notifies them of queued
 * entries.
 *
 * @private
 * @returns {boolean} Returns "true" if any observer has detected changes in
 *  dimensions of it's elements.
 */
ResizeObserverController.prototype.updateObservers_ = function () {
    // Collect observers that have active observations.
    var activeObservers = this.observers_.filter(function (observer) {
        return observer.gatherActive(), observer.hasActive();
    });

    // Deliver notifications in a separate cycle in order to avoid any
    // collisions between observers, e.g. when multiple instances of
    // ResizeObserver are tracking the same element and the callback of one
    // of them changes content dimensions of the observed target. Sometimes
    // this may result in notifications being blocked for the rest of observers.
    activeObservers.forEach(function (observer) { return observer.broadcastActive(); });

    return activeObservers.length > 0;
};

/**
 * Initializes DOM listeners.
 *
 * @private
 * @returns {void}
 */
ResizeObserverController.prototype.connect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already added.
    if (!isBrowser || this.connected_) {
        return;
    }

    // Subscription to the "Transitionend" event is used as a workaround for
    // delayed transitions. This way it's possible to capture at least the
    // final state of an element.
    document.addEventListener('transitionend', this.onTransitionEnd_);

    window.addEventListener('resize', this.refresh);

    if (mutationObserverSupported) {
        this.mutationsObserver_ = new MutationObserver(this.refresh);

        this.mutationsObserver_.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        });
    } else {
        document.addEventListener('DOMSubtreeModified', this.refresh);

        this.mutationEventsAdded_ = true;
    }

    this.connected_ = true;
};

/**
 * Removes DOM listeners.
 *
 * @private
 * @returns {void}
 */
ResizeObserverController.prototype.disconnect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already removed.
    if (!isBrowser || !this.connected_) {
        return;
    }

    document.removeEventListener('transitionend', this.onTransitionEnd_);
    window.removeEventListener('resize', this.refresh);

    if (this.mutationsObserver_) {
        this.mutationsObserver_.disconnect();
    }

    if (this.mutationEventsAdded_) {
        document.removeEventListener('DOMSubtreeModified', this.refresh);
    }

    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
};

/**
 * "Transitionend" event handler.
 *
 * @private
 * @param {TransitionEvent} event
 * @returns {void}
 */
ResizeObserverController.prototype.onTransitionEnd_ = function (ref) {
        var propertyName = ref.propertyName; if ( propertyName === void 0 ) propertyName = '';

    // Detect whether transition may affect dimensions of an element.
    var isReflowProperty = transitionKeys.some(function (key) {
        return !!~propertyName.indexOf(key);
    });

    if (isReflowProperty) {
        this.refresh();
    }
};

/**
 * Returns instance of the ResizeObserverController.
 *
 * @returns {ResizeObserverController}
 */
ResizeObserverController.getInstance = function () {
    if (!this.instance_) {
        this.instance_ = new ResizeObserverController();
    }

    return this.instance_;
};

ResizeObserverController.instance_ = null;

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var i = 0, list = Object.keys(props); i < list.length; i += 1) {
        var key = list[i];

        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }

    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;

    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);

/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}

/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [], len = arguments.length - 1;
    while ( len-- > 0 ) positions[ len ] = arguments[ len + 1 ];

    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];

        return size + toFloat(value);
    }, 0);
}

/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};

    for (var i = 0, list = positions; i < list.length; i += 1) {
        var position = list[i];

        var value = styles['padding-' + position];

        paddings[position] = toFloat(value);
    }

    return paddings;
}

/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();

    return createRectInit(0, 0, bbox.width, bbox.height);
}

/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth;
    var clientHeight = target.clientHeight;

    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }

    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;

    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width),
        height = toFloat(styles.height);

    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }

        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }

    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;

        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }

        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }

    return createRectInit(paddings.left, paddings.top, width, height);
}

/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }

    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function'; };
})();

/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}

/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }

    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }

    return getHTMLElementContentRect(target);
}

/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(ref) {
    var x = ref.x;
    var y = ref.y;
    var width = ref.width;
    var height = ref.height;

    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);

    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });

    return rect;
}

/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = function(target) {
    this.broadcastWidth = 0;
    this.broadcastHeight = 0;
    this.contentRect_ = createRectInit(0, 0, 0, 0);

    this.target = target;
};

/**
 * Updates content rectangle and tells whether it's width or height properties
 * have changed since the last broadcast.
 *
 * @returns {boolean}
 */


/**
 * Reference to the last observed content rectangle.
 *
 * @private {DOMRectInit}
 */


/**
 * Broadcasted width of content rectangle.
 *
 * @type {number}
 */
ResizeObservation.prototype.isActive = function () {
    var rect = getContentRect(this.target);

    this.contentRect_ = rect;

    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
};

/**
 * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
 * from the corresponding properties of the last observed content rectangle.
 *
 * @returns {DOMRectInit} Last observed content rectangle.
 */
ResizeObservation.prototype.broadcastRect = function () {
    var rect = this.contentRect_;

    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;

    return rect;
};

var ResizeObserverEntry = function(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit);

    // According to the specification following properties are not writable
    // and are also not enumerable in the native implementation.
    //
    // Property accessors are not being used as they'd require to define a
    // private WeakMap storage which may cause memory leaks in browsers that
    // don't support this type of collections.
    defineConfigurable(this, { target: target, contentRect: contentRect });
};

var ResizeObserverSPI = function(callback, controller, callbackCtx) {
    this.activeObservations_ = [];
    this.observations_ = new MapShim();

    if (typeof callback !== 'function') {
        throw new TypeError('The callback provided as parameter 1 is not a function.');
    }

    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
};

/**
 * Starts observing provided element.
 *
 * @param {Element} target - Element to be observed.
 * @returns {void}
 */


/**
 * Registry of the ResizeObservation instances.
 *
 * @private {Map<Element, ResizeObservation>}
 */


/**
 * Public ResizeObserver instance which will be passed to the callback
 * function and used as a value of it's "this" binding.
 *
 * @private {ResizeObserver}
 */

/**
 * Collection of resize observations that have detected changes in dimensions
 * of elements.
 *
 * @private {Array<ResizeObservation>}
 */
ResizeObserverSPI.prototype.observe = function (target) {
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_;

    // Do nothing if element is already being observed.
    if (observations.has(target)) {
        return;
    }

    observations.set(target, new ResizeObservation(target));

    this.controller_.addObserver(this);

    // Force the update of observations.
    this.controller_.refresh();
};

/**
 * Stops observing provided element.
 *
 * @param {Element} target - Element to stop observing.
 * @returns {void}
 */
ResizeObserverSPI.prototype.unobserve = function (target) {
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_;

    // Do nothing if element is not being observed.
    if (!observations.has(target)) {
        return;
    }

    observations.delete(target);

    if (!observations.size) {
        this.controller_.removeObserver(this);
    }
};

/**
 * Stops observing all elements.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.disconnect = function () {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
};

/**
 * Collects observation instances the associated element of which has changed
 * it's content rectangle.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.gatherActive = function () {
        var this$1 = this;

    this.clearActive();

    this.observations_.forEach(function (observation) {
        if (observation.isActive()) {
            this$1.activeObservations_.push(observation);
        }
    });
};

/**
 * Invokes initial callback function with a list of ResizeObserverEntry
 * instances collected from active resize observations.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.broadcastActive = function () {
    // Do nothing if observer doesn't have active observations.
    if (!this.hasActive()) {
        return;
    }

    var ctx = this.callbackCtx_;

    // Create ResizeObserverEntry instance for every active observation.
    var entries = this.activeObservations_.map(function (observation) {
        return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });

    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
};

/**
 * Clears the collection of active observations.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.clearActive = function () {
    this.activeObservations_.splice(0);
};

/**
 * Tells whether observer has active observations.
 *
 * @returns {boolean}
 */
ResizeObserverSPI.prototype.hasActive = function () {
    return this.activeObservations_.length > 0;
};

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();

/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = function(callback) {
    if (!(this instanceof ResizeObserver)) {
        throw new TypeError('Cannot call a class as a function.');
    }
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);

    observers.set(this, observer);
};

// Expose public methods of ResizeObserver.
['observe', 'unobserve', 'disconnect'].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        return (ref = observers.get(this))[method].apply(ref, arguments);
        // removed by dead control flow
 var ref; 
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }

    return ResizeObserver;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


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


/***/ }

}]);