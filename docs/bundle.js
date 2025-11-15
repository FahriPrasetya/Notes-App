(() => {
  var t = {
      7: () => {
        function t(e) {
          return (
            (t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var o = 0; o < e.length; o++) {
            var r = e[o];
            ((r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(t, n(r.key), r));
          }
        }
        function n(e) {
          var n = (function (e) {
            if ('object' != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var o = n.call(e, 'string');
              if ('object' != t(o)) return o;
              throw new TypeError('@@toPrimitive must return a primitive value.');
            }
            return String(e);
          })(e);
          return 'symbol' == t(n) ? n : n + '';
        }
        function o(t) {
          var e = 'function' == typeof Map ? new Map() : void 0;
          return (
            (o = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return -1 !== Function.toString.call(t).indexOf('[native code]');
                  } catch (e) {
                    return 'function' == typeof t;
                  }
                })(t)
              )
                return t;
              if ('function' != typeof t) throw new TypeError('Super expression must either be null or a function');
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var o = [null];
                  o.push.apply(o, e);
                  var a = new (t.bind.apply(t, o))();
                  return (n && i(a, n.prototype), a);
                })(t, arguments, a(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(n, t)
              );
            }),
            o(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function i(t, e) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return ((t.__proto__ = e), t);
                }),
            i(t, e)
          );
        }
        function a(t) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            a(t)
          );
        }
        var c = (function (n) {
          function o() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, o),
              ((e = (function (e, n, o) {
                return (
                  (n = a(n)),
                  (function (e, n) {
                    if (n && ('object' == t(n) || 'function' == typeof n)) return n;
                    if (void 0 !== n) throw new TypeError('Derived constructors may only return object or undefined');
                    return (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                    })(e);
                  })(e, r() ? Reflect.construct(n, o || [], a(e).constructor) : n.apply(e, o))
                );
              })(this, o))._shadowRoot = e.attachShadow({ mode: 'open' })),
              (e._style = document.createElement('style')),
              e
            );
          }
          return (
            (function (t, e) {
              if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
              ((t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && i(t, e));
            })(o, n),
            (c = o),
            (s = [
              {
                key: 'observedAttributes',
                get: function () {
                  return ['title'];
                },
              },
            ]),
            (u = [
              {
                key: 'connectedCallback',
                value: function () {
                  this.render();
                },
              },
              {
                key: 'attributeChangedCallback',
                value: function (t, e, n) {
                  'title' === t && this.render();
                },
              },
              {
                key: 'updateStyle',
                value: function () {
                  this._style.textContent =
                    "\n            * {\n                margin: 0;\n                padding: 0;\n                box-sizing: border-box;\n            }\n            footer {\n                background-color: #E5E7EB;\n                padding: 16px 0;\n                margin-top: 30px;\n                font-size:0.8rem;\n            }\n            h1 {\n                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n                color: #111827;\n                text-align: center;\n            }\n        ";
                },
              },
              {
                key: 'render',
                value: function () {
                  (this.updateStyle(),
                    (this._shadowRoot.innerHTML = '\n        <style>'
                      .concat(this._style.textContent, '</style>\n        <footer>\n            <h1>')
                      .concat(this.getAttribute('title') || 'Thanks for visiting! – Fahri Prasetya', '</h1>\n        </footer>\n        ')));
                },
              },
            ]) && e(c.prototype, u),
            s && e(c, s),
            Object.defineProperty(c, 'prototype', { writable: !1 }),
            c
          );
          var c, u, s;
        })(o(HTMLElement));
        customElements.define('app-footer', c);
      },
      17: () => {
        function t(e) {
          return (
            (t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var o = 0; o < e.length; o++) {
            var r = e[o];
            ((r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(t, n(r.key), r));
          }
        }
        function n(e) {
          var n = (function (e) {
            if ('object' != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var o = n.call(e, 'string');
              if ('object' != t(o)) return o;
              throw new TypeError('@@toPrimitive must return a primitive value.');
            }
            return String(e);
          })(e);
          return 'symbol' == t(n) ? n : n + '';
        }
        function o(t) {
          var e = 'function' == typeof Map ? new Map() : void 0;
          return (
            (o = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return -1 !== Function.toString.call(t).indexOf('[native code]');
                  } catch (e) {
                    return 'function' == typeof t;
                  }
                })(t)
              )
                return t;
              if ('function' != typeof t) throw new TypeError('Super expression must either be null or a function');
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var o = [null];
                  o.push.apply(o, e);
                  var a = new (t.bind.apply(t, o))();
                  return (n && i(a, n.prototype), a);
                })(t, arguments, a(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(n, t)
              );
            }),
            o(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function i(t, e) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return ((t.__proto__ = e), t);
                }),
            i(t, e)
          );
        }
        function a(t) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            a(t)
          );
        }
        var c = (function (n) {
          function o() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, o),
              ((e = (function (e, n, o) {
                return (
                  (n = a(n)),
                  (function (e, n) {
                    if (n && ('object' == t(n) || 'function' == typeof n)) return n;
                    if (void 0 !== n) throw new TypeError('Derived constructors may only return object or undefined');
                    return (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                    })(e);
                  })(e, r() ? Reflect.construct(n, o || [], a(e).constructor) : n.apply(e, o))
                );
              })(this, o))._shadowRoot = e.attachShadow({ mode: 'open' })),
              (e._style = document.createElement('style')),
              e
            );
          }
          return (
            (function (t, e) {
              if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
              ((t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && i(t, e));
            })(o, n),
            (c = o),
            (u = [
              {
                key: 'connectedCallback',
                value: function () {
                  this.render();
                },
              },
              {
                key: 'updateStyle',
                value: function () {
                  this._style.textContent =
                    "\n            * {\n                margin: 0;\n                padding: 0;\n                box-sizing: border-box;\n            }\n\n            .center-section {\n                background-color: #ffffff;\n                width: 60%;\n                margin: 0 auto;\n                box-shadow: 0px 0px 11px 9px #E5E7EB;\n                padding: 24px 28px;\n                border-radius: 12px;\n                min-height: 400px;\n                margin-top: -100px;\n            }\n\n            #section-note-form h2 {\n                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n                color: #9ea2a9;\n                font-size: 2rem;\n            }\n\n            .form-group label {\n                font-family: Arial, Helvetica, sans-serif;\n                display: block;\n                margin-bottom: 6px;\n                margin-top: 16px;\n                font-size: 1.2rem;\n            }\n\n            .form-group input {\n                height: 48px;\n            }\n\n            .form-group textarea {\n                height: 102px;\n            }\n\n            .form-group input, .form-group textarea {\n                width: 100%;\n                border-radius: 8px;\n                padding: 4px 8px;\n                border: 3px solid #9ea2a9;\n                font-size:1rem;\n            }\n\n            .form-group textarea {\n            }\n\n            .validation-message {\n                color: red;\n            }\n\n            .form-group button {\n                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n                padding: 7px 20px;\n                background-color: #E5E7EB;\n                border-radius: 10px;\n                font-size: 1.2rem;\n                color: #111827;\n                font-weight: 600;\n                margin-top: 20px;\n                transition: all .3s ease-in-out;\n            }\n\n            .form-group button:hover {\n                cursor: pointer;\n                background-color: #c8cbd0;\n            }\n\n            @media screen and (max-width:600px) {\n                .center-section {\n                width: 80%\n                }\n            }\n        ";
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this;
                  (this.updateStyle(),
                    (this._shadowRoot.innerHTML = '\n        <style>'.concat(
                      this._style.textContent,
                      '</style>\n            <div class="center-section">\n                <h2>Create New Note</h2>\n                <form id="note-form">\n                    <div class="form-group">\n                        <label for="note-title">Note Title</label>\n                        <input type="text" id="note-title" name="note-title" placeholder="Input Note Title" minlength="5" maxlength="50" aria-describedby="note-title-validation" required>\n                        <p id="note-title-validation" class="validation-message" aria-live="polite"></p>\n                    </div>\n                    <div class="form-group">\n                        <label for="note-body">Note Body</label>\n                        <textarea name="note-body" id="note-body" name="note-body" placeholder="Input Note Body" minlength="10" maxlength="500" aria-describedby="note-body-validation" required></textarea>\n                        <p id="note-body-validation" class="validation-message" aria-live="polite"></p>\n                    </div>\n                    <div class="form-group">\n                        <button type="submit">Submit</button>\n                    </div>\n                </form>\n            </div>\n        '
                    )));
                  var e = this._shadowRoot.getElementById('note-form'),
                    n = this._shadowRoot.getElementById('note-title'),
                    o = this._shadowRoot.getElementById('note-body');
                  e.addEventListener('submit', function (n) {
                    n.preventDefault();
                    var o = t._shadowRoot.getElementById('note-title').value,
                      r = t._shadowRoot.getElementById('note-body').value;
                    (t.dispatchEvent(
                      new CustomEvent('note-submitted', {
                        detail: { title: o, body: r },
                        bubbles: !0,
                      })
                    ),
                      e.reset());
                  });
                  var r = function (t) {
                      (t.target.setCustomValidity(''),
                        t.target.validity.valueMissing
                          ? t.target.setCustomValidity('Note title input field is required')
                          : t.target.validity.tooShort
                            ? t.target.setCustomValidity('Note title must be at least 5 characters')
                            : t.target.validity.tooLong && t.target.setCustomValidity('Maximum note title length is 50 characters'));
                    },
                    i = function (t) {
                      (t.target.setCustomValidity(''),
                        t.target.validity.valueMissing
                          ? t.target.setCustomValidity('Note body input field is required')
                          : t.target.validity.tooShort
                            ? t.target.setCustomValidity('Note body must be at least 10 characters')
                            : t.target.validity.tooLong && t.target.setCustomValidity('Maximum note body length is 500 characters'));
                    };
                  (n.addEventListener('change', r),
                    n.addEventListener('invalid', r),
                    o.addEventListener('change', i),
                    o.addEventListener('invalid', i),
                    n.addEventListener('blur', function (e) {
                      var n = e.target.validity.valid,
                        o = e.target.validationMessage,
                        r = e.target.getAttribute('aria-describedby'),
                        i = r ? t._shadowRoot.getElementById(r) : null;
                      i.innerText = i && o && !n ? o : '';
                    }),
                    o.addEventListener('blur', function (e) {
                      var n = e.target.validity.valid,
                        o = e.target.validationMessage,
                        r = e.target.getAttribute('aria-describedby'),
                        i = r ? t._shadowRoot.getElementById(r) : null;
                      i.innerText = i && o && !n ? o : '';
                    }));
                },
              },
            ]),
            u && e(c.prototype, u),
            Object.defineProperty(c, 'prototype', { writable: !1 }),
            c
          );
          var c, u;
        })(o(HTMLElement));
        customElements.define('note-form', c);
      },
      56: (t, e, n) => {
        'use strict';
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute('nonce', e);
        };
      },
      72: (t) => {
        'use strict';
        var e = [];
        function n(t) {
          for (var n = -1, o = 0; o < e.length; o++)
            if (e[o].identifier === t) {
              n = o;
              break;
            }
          return n;
        }
        function o(t, o) {
          for (var i = {}, a = [], c = 0; c < t.length; c++) {
            var u = t[c],
              s = o.base ? u[0] + o.base : u[0],
              l = i[s] || 0,
              d = ''.concat(s, ' ').concat(l);
            i[s] = l + 1;
            var f = n(d),
              p = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== f) (e[f].references++, e[f].updater(p));
            else {
              var y = r(p, o);
              ((o.byIndex = c), e.splice(c, 0, { identifier: d, updater: y, references: 1 }));
            }
            a.push(d);
          }
          return a;
        }
        function r(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap && e.supports === t.supports && e.layer === t.layer) return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, r) {
          var i = o((t = t || []), (r = r || {}));
          return function (t) {
            t = t || [];
            for (var a = 0; a < i.length; a++) {
              var c = n(i[a]);
              e[c].references--;
            }
            for (var u = o(t, r), s = 0; s < i.length; s++) {
              var l = n(i[s]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            i = u;
          };
        };
      },
      106: (t, e, n) => {
        'use strict';
        n.d(e, { A: () => c });
        var o = n(978),
          r = n.n(o),
          i = n(267),
          a = n.n(i)()(r());
        a.push([
          t.id,
          "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: #F9FAFB;\n}\n\nmain {}\n\n#section-note-form {\n    min-height: calc(100vh - 80px);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n#section-user-notes {\n    padding: 24px 3rem;\n}\n\n#section-user-notes h2 {\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    font-size: 2rem;\n    text-align: center;\n    margin-bottom: 24px;\n}\n\n.cards-note-wrapper {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    max-width: 1300px;\n    gap: 1.25rem;\n    margin: 0 auto;\n}\n\n@media screen and (max-width: 600px) {\n    .cards-note-wrapper {\n        grid-template-columns: repeat(1,1fr);\n    }\n}",
          '',
        ]);
        const c = a;
      },
      113: (t) => {
        'use strict';
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
      133: () => {
        function t(e) {
          return (
            (t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var o = 0; o < e.length; o++) {
            var r = e[o];
            ((r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(t, n(r.key), r));
          }
        }
        function n(e) {
          var n = (function (e) {
            if ('object' != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var o = n.call(e, 'string');
              if ('object' != t(o)) return o;
              throw new TypeError('@@toPrimitive must return a primitive value.');
            }
            return String(e);
          })(e);
          return 'symbol' == t(n) ? n : n + '';
        }
        function o(t) {
          var e = 'function' == typeof Map ? new Map() : void 0;
          return (
            (o = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return -1 !== Function.toString.call(t).indexOf('[native code]');
                  } catch (e) {
                    return 'function' == typeof t;
                  }
                })(t)
              )
                return t;
              if ('function' != typeof t) throw new TypeError('Super expression must either be null or a function');
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var o = [null];
                  o.push.apply(o, e);
                  var a = new (t.bind.apply(t, o))();
                  return (n && i(a, n.prototype), a);
                })(t, arguments, a(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(n, t)
              );
            }),
            o(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function i(t, e) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return ((t.__proto__ = e), t);
                }),
            i(t, e)
          );
        }
        function a(t) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            a(t)
          );
        }
        var c = (function (n) {
          function o() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, o),
              ((e = (function (e, n, o) {
                return (
                  (n = a(n)),
                  (function (e, n) {
                    if (n && ('object' == t(n) || 'function' == typeof n)) return n;
                    if (void 0 !== n) throw new TypeError('Derived constructors may only return object or undefined');
                    return (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                    })(e);
                  })(e, r() ? Reflect.construct(n, o || [], a(e).constructor) : n.apply(e, o))
                );
              })(this, o))._shadowRoot = e.attachShadow({ mode: 'open' })),
              (e._style = document.createElement('style')),
              e
            );
          }
          return (
            (function (t, e) {
              if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
              ((t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && i(t, e));
            })(o, n),
            (c = o),
            (s = [
              {
                key: 'observedAttributes',
                get: function () {
                  return ['title'];
                },
              },
            ]),
            (u = [
              {
                key: 'connectedCallback',
                value: function () {
                  this.render();
                },
              },
              {
                key: 'attributeChangedCallback',
                value: function (t, e, n) {
                  'title' === t && this.render();
                },
              },
              {
                key: 'updateStyle',
                value: function () {
                  this._style.textContent =
                    "\n            * {\n                margin: 0;\n                padding: 0;\n                box-sizing: border-box;\n            }\n            header {\n                background-color: #E5E7EB;\n                padding: 16px 0;\n                margin-bottom: 30px;\n            }\n            h1 {\n                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n                color: #111827;\n                text-align: center;\n            }\n        ";
                },
              },
              {
                key: 'render',
                value: function () {
                  (this.updateStyle(),
                    (this._shadowRoot.innerHTML = '\n        <style>'
                      .concat(this._style.textContent, '</style>\n        <header>\n            <h1>')
                      .concat(this.getAttribute('title') || 'Notes App', '</h1>\n        </header>\n        ')));
                },
              },
            ]) && e(c.prototype, u),
            s && e(c, s),
            Object.defineProperty(c, 'prototype', { writable: !1 }),
            c
          );
          var c, u, s;
        })(o(HTMLElement));
        customElements.define('app-header', c);
      },
      236: () => {
        function t(e) {
          return (
            (t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var o = 0; o < e.length; o++) {
            var r = e[o];
            ((r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(t, n(r.key), r));
          }
        }
        function n(e) {
          var n = (function (e) {
            if ('object' != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var o = n.call(e, 'string');
              if ('object' != t(o)) return o;
              throw new TypeError('@@toPrimitive must return a primitive value.');
            }
            return String(e);
          })(e);
          return 'symbol' == t(n) ? n : n + '';
        }
        function o(t) {
          var e = 'function' == typeof Map ? new Map() : void 0;
          return (
            (o = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return -1 !== Function.toString.call(t).indexOf('[native code]');
                  } catch (e) {
                    return 'function' == typeof t;
                  }
                })(t)
              )
                return t;
              if ('function' != typeof t) throw new TypeError('Super expression must either be null or a function');
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var o = [null];
                  o.push.apply(o, e);
                  var a = new (t.bind.apply(t, o))();
                  return (n && i(a, n.prototype), a);
                })(t, arguments, a(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(n, t)
              );
            }),
            o(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function i(t, e) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return ((t.__proto__ = e), t);
                }),
            i(t, e)
          );
        }
        function a(t) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            a(t)
          );
        }
        var c = (function (n) {
          function o() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, o),
              ((e = (function (e, n, o) {
                return (
                  (n = a(n)),
                  (function (e, n) {
                    if (n && ('object' == t(n) || 'function' == typeof n)) return n;
                    if (void 0 !== n) throw new TypeError('Derived constructors may only return object or undefined');
                    return (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                    })(e);
                  })(e, r() ? Reflect.construct(n, o || [], a(e).constructor) : n.apply(e, o))
                );
              })(this, o))._shadowRoot = e.attachShadow({ mode: 'open' })),
              (e._style = document.createElement('style')),
              (e._data = {}),
              e
            );
          }
          return (
            (function (t, e) {
              if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
              ((t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && i(t, e));
            })(o, n),
            (c = o),
            (u = [
              {
                key: 'connectedCallback',
                value: function () {
                  this.render();
                },
              },
              {
                key: 'data',
                set: function (t) {
                  ((this._data = t), this.render());
                },
              },
              {
                key: 'updateStyle',
                value: function () {
                  this._style.textContent =
                    "\n            * {\n            margin:0;\n            padding:0;\n            box-sizing:border-box;\n            }\n            \n            :host {\n                background-color: #ffffff;\n                border-radius: 8px;\n                box-shadow: 0px 0px 11px 9px #E5E7EB;\n                position: relative;\n                transition: all .25s ease-in-out;\n            }\n\n            .card-note {\n                padding: 16px;\n            }\n\n            .card-note h3 {\n                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n                font-size: 1.5rem;\n                margin-bottom: 8px;\n            }\n\n            .card-note p {\n                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n                font-size: 1.1rem;\n                margin-bottom: 24px;\n            }\n\n            .card-note span {\n                position: absolute;\n                bottom: 12px;\n                right: 20px\n            }\n\n            .delete-note-button {\n                position: absolute;\n                top: 12px;\n                right: 20px;\n                padding: 4px 10px;\n                border-radius: 4px;\n                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n                background-color: #E5E7EB;\n                color: #111827;\n                transition: .2s all ease-in-out;\n            }\n\n            .delete-note-button:hover {\n                cursor: pointer;\n                background-color: #c8cbd0;\n            }\n        ";
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this,
                    e = new Date(this._data.createdAt),
                    n = e.toLocaleDateString('id-ID', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    }),
                    o = e.toLocaleTimeString('id-ID', {
                      hour: '2-digit',
                      minute: '2-digit',
                    }),
                    r = ''.concat(n, ' ').concat(o);
                  (this.updateStyle(),
                    (this._shadowRoot.innerHTML = '\n        <style>'
                      .concat(this._style.textContent, '</style>\n        <div class="card-note" data-noteid="')
                      .concat(this._data.id, '">\n            <h3><slot name="title">')
                      .concat(this._data.title, '</slot></h3>\n            <p><slot name="body">')
                      .concat(this._data.body, '</slot></p>\n            <span>')
                      .concat(r, '</span>\n            <button class="delete-note-button">X</button>\n        </div>\n        ')));
                  var i = this._shadowRoot.querySelector('.delete-note-button');
                  i &&
                    i.addEventListener('click', function () {
                      t.dispatchEvent(
                        new CustomEvent('delete-note', {
                          detail: { id: t._data.id },
                          bubbles: !0,
                          composed: !0,
                        })
                      );
                    });
                },
              },
            ]) && e(c.prototype, u),
            Object.defineProperty(c, 'prototype', { writable: !1 }),
            c
          );
          var c, u;
        })(o(HTMLElement));
        customElements.define('note-item', c);
      },
      267: (t) => {
        'use strict';
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = '',
                  o = void 0 !== e[5];
                return (
                  e[4] && (n += '@supports ('.concat(e[4], ') {')),
                  e[2] && (n += '@media '.concat(e[2], ' {')),
                  o && (n += '@layer'.concat(e[5].length > 0 ? ' '.concat(e[5]) : '', ' {')),
                  (n += t(e)),
                  o && (n += '}'),
                  e[2] && (n += '}'),
                  e[4] && (n += '}'),
                  n
                );
              }).join('');
            }),
            (e.i = function (t, n, o, r, i) {
              'string' == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (o)
                for (var c = 0; c < this.length; c++) {
                  var u = this[c][0];
                  null != u && (a[u] = !0);
                }
              for (var s = 0; s < t.length; s++) {
                var l = [].concat(t[s]);
                (o && a[l[0]]) ||
                  (void 0 !== i && (void 0 === l[5] || (l[1] = '@layer'.concat(l[5].length > 0 ? ' '.concat(l[5]) : '', ' {').concat(l[1], '}')), (l[5] = i)),
                  n && (l[2] ? ((l[1] = '@media '.concat(l[2], ' {').concat(l[1], '}')), (l[2] = n)) : (l[2] = n)),
                  r && (l[4] ? ((l[1] = '@supports ('.concat(l[4], ') {').concat(l[1], '}')), (l[4] = r)) : (l[4] = ''.concat(r))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      540: (t) => {
        'use strict';
        t.exports = function (t) {
          var e = document.createElement('style');
          return (t.setAttributes(e, t.attributes), t.insert(e, t.options), e);
        };
      },
      659: (t) => {
        'use strict';
        var e = {};
        t.exports = function (t, n) {
          var o = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          o.appendChild(n);
        };
      },
      825: (t) => {
        'use strict';
        t.exports = function (t) {
          if ('undefined' == typeof document) return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var o = '';
                (n.supports && (o += '@supports ('.concat(n.supports, ') {')), n.media && (o += '@media '.concat(n.media, ' {')));
                var r = void 0 !== n.layer;
                (r && (o += '@layer'.concat(n.layer.length > 0 ? ' '.concat(n.layer) : '', ' {')), (o += n.css), r && (o += '}'), n.media && (o += '}'), n.supports && (o += '}'));
                var i = n.sourceMap;
                (i && 'undefined' != typeof btoa && (o += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), ' */')),
                  e.styleTagTransform(o, t, e.options));
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      978: (t) => {
        'use strict';
        t.exports = function (t) {
          return t[1];
        };
      },
    },
    e = {};
  function n(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var i = (e[o] = { id: o, exports: {} });
    return (t[o](i, i.exports, n), i.exports);
  }
  ((n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return (n.d(e, { a: e }), e);
  }),
    (n.d = (t, e) => {
      for (var o in e) n.o(e, o) && !n.o(t, o) && Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.nc = void 0),
    (() => {
      'use strict';
      var t = [
          {
            id: 'notes-jT-jjsyz61J8XKiI',
            title: 'Welcome to Notes, Dimas!',
            body: 'Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.',
            createdAt: '2022-07-28T10:03:12.594Z',
            archived: !1,
          },
          {
            id: 'notes-aB-cdefg12345',
            title: 'Meeting Agenda',
            body: 'Discuss project updates and assign tasks for the upcoming week.',
            createdAt: '2022-08-05T15:30:00.000Z',
            archived: !1,
          },
          {
            id: 'notes-XyZ-789012345',
            title: 'Shopping List',
            body: 'Milk, eggs, bread, fruits, and vegetables.',
            createdAt: '2022-08-10T08:45:23.120Z',
            archived: !1,
          },
          {
            id: 'notes-1a-2b3c4d5e6f',
            title: 'Personal Goals',
            body: 'Read two books per month, exercise three times a week, learn a new language.',
            createdAt: '2022-08-15T18:12:55.789Z',
            archived: !1,
          },
          {
            id: 'notes-LMN-456789',
            title: 'Recipe: Spaghetti Bolognese',
            body: 'Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...',
            createdAt: '2022-08-20T12:30:40.200Z',
            archived: !1,
          },
          {
            id: 'notes-QwErTyUiOp',
            title: 'Workout Routine',
            body: 'Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.',
            createdAt: '2022-08-25T09:15:17.890Z',
            archived: !1,
          },
          {
            id: 'notes-abcdef-987654',
            title: 'Book Recommendations',
            body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
            createdAt: '2022-09-01T14:20:05.321Z',
            archived: !1,
          },
          {
            id: 'notes-zyxwv-54321',
            title: 'Daily Reflections',
            body: 'Write down three positive things that happened today and one thing to improve tomorrow.',
            createdAt: '2022-09-07T20:40:30.150Z',
            archived: !1,
          },
          {
            id: 'notes-poiuyt-987654',
            title: 'Travel Bucket List',
            body: '1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA',
            createdAt: '2022-09-15T11:55:44.678Z',
            archived: !1,
          },
          {
            id: 'notes-asdfgh-123456',
            title: 'Coding Projects',
            body: '1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project',
            createdAt: '2022-09-20T17:10:12.987Z',
            archived: !1,
          },
          {
            id: 'notes-5678-abcd-efgh',
            title: 'Project Deadline',
            body: 'Complete project tasks by the deadline on October 1st.',
            createdAt: '2022-09-28T14:00:00.000Z',
            archived: !1,
          },
          {
            id: 'notes-9876-wxyz-1234',
            title: 'Health Checkup',
            body: 'Schedule a routine health checkup with the doctor.',
            createdAt: '2022-10-05T09:30:45.600Z',
            archived: !1,
          },
          {
            id: 'notes-qwerty-8765-4321',
            title: 'Financial Goals',
            body: '1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.',
            createdAt: '2022-10-12T12:15:30.890Z',
            archived: !1,
          },
          {
            id: 'notes-98765-54321-12345',
            title: 'Holiday Plans',
            body: 'Research and plan for the upcoming holiday destination.',
            createdAt: '2022-10-20T16:45:00.000Z',
            archived: !1,
          },
          {
            id: 'notes-1234-abcd-5678',
            title: 'Language Learning',
            body: 'Practice Spanish vocabulary for 30 minutes every day.',
            createdAt: '2022-10-28T08:00:20.120Z',
            archived: !1,
          },
        ],
        e = (n(133), n(236), n(17), n(7), n(72)),
        o = n.n(e),
        r = n(825),
        i = n.n(r),
        a = n(659),
        c = n.n(a),
        u = n(56),
        s = n.n(u),
        l = n(540),
        d = n.n(l),
        f = n(113),
        p = n.n(f),
        y = n(106),
        b = {};
      function h() {
        var e = document.querySelector('.cards-note-wrapper');
        ((e.innerHTML = ''),
          t.forEach(function (n) {
            var o = document.createElement('note-item');
            ((o.data = n),
              o.addEventListener('delete-note', function (e) {
                var n, o;
                ((n = e.detail.id),
                  (o = t.findIndex(function (t) {
                    return t.id === n;
                  })),
                  -1 !== o && t.splice(o, 1),
                  h());
              }),
              e.append(o));
          }),
          console.log(t));
      }
      ((b.styleTagTransform = p()),
        (b.setAttributes = s()),
        (b.insert = c().bind(null, 'head')),
        (b.domAPI = i()),
        (b.insertStyleElement = d()),
        o()(y.A, b),
        y.A && y.A.locals && y.A.locals,
        h(),
        document.querySelector('note-form').addEventListener('note-submitted', function (e) {
          var n,
            o,
            r,
            i,
            a,
            c,
            u = e.detail.title,
            s = e.detail.body,
            l = (function (e) {
              var n = t.some(function (t) {
                return t.title.toLowerCase() === e.toLowerCase();
              });
              return n ? (alert('Note title is alredy exist, You may already have notes on this.'), !0) : n;
            })(u);
          l ||
            ((n = u),
            (o = s),
            (c = {
              id:
                ((r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'),
                (i = Array.from({ length: 3 }, function () {
                  return r.charAt(Math.floor(26 * Math.random()));
                }).join('')),
                (a = Math.floor(1e5 + 9e5 * Math.random())),
                'notes-'.concat(i, '-').concat(a)),
              title: n,
              body: o,
              createdAt: new Date().toISOString(),
              archived: !1,
            }),
            t.push(c),
            alert('New note has been added'),
            h());
        }));
    })());
})();
