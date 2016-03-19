!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1"], [], function($__System) {

!function(){var t=$__System;if("undefined"!=typeof window&&"undefined"!=typeof document&&window.location)var s=location.protocol+"//"+location.hostname+(location.port?":"+location.port:"");t.set("@@cjs-helpers",t.newModule({getPathVars:function(t){var n,o=t.lastIndexOf("!");n=-1!=o?t.substr(0,o):t;var e=n.split("/");return e.pop(),e=e.join("/"),"file:///"==n.substr(0,8)?(n=n.substr(7),e=e.substr(7),isWindows&&(n=n.substr(1),e=e.substr(1))):s&&n.substr(0,s.length)===s&&(n=n.substr(s.length),e=e.substr(s.length)),{filename:n,dirname:e}}}))}();
$__System.registerDynamic("2", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var dat = module.exports = dat || {};
  dat.gui = dat.gui || {};
  dat.utils = dat.utils || {};
  dat.controllers = dat.controllers || {};
  dat.dom = dat.dom || {};
  dat.color = dat.color || {};
  dat.utils.css = (function() {
    return {
      load: function(url, doc) {
        doc = doc || document;
        var link = doc.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = url;
        doc.getElementsByTagName('head')[0].appendChild(link);
      },
      inject: function(css, doc) {
        doc = doc || document;
        var injected = document.createElement('style');
        injected.type = 'text/css';
        injected.innerHTML = css;
        doc.getElementsByTagName('head')[0].appendChild(injected);
      }
    };
  })();
  dat.utils.common = (function() {
    var ARR_EACH = Array.prototype.forEach;
    var ARR_SLICE = Array.prototype.slice;
    return {
      BREAK: {},
      extend: function(target) {
        this.each(ARR_SLICE.call(arguments, 1), function(obj) {
          for (var key in obj)
            if (!this.isUndefined(obj[key]))
              target[key] = obj[key];
        }, this);
        return target;
      },
      defaults: function(target) {
        this.each(ARR_SLICE.call(arguments, 1), function(obj) {
          for (var key in obj)
            if (this.isUndefined(target[key]))
              target[key] = obj[key];
        }, this);
        return target;
      },
      compose: function() {
        var toCall = ARR_SLICE.call(arguments);
        return function() {
          var args = ARR_SLICE.call(arguments);
          for (var i = toCall.length - 1; i >= 0; i--) {
            args = [toCall[i].apply(this, args)];
          }
          return args[0];
        };
      },
      each: function(obj, itr, scope) {
        if (ARR_EACH && obj.forEach === ARR_EACH) {
          obj.forEach(itr, scope);
        } else if (obj.length === obj.length + 0) {
          for (var key = 0,
              l = obj.length; key < l; key++)
            if (key in obj && itr.call(scope, obj[key], key) === this.BREAK)
              return;
        } else {
          for (var key in obj)
            if (itr.call(scope, obj[key], key) === this.BREAK)
              return;
        }
      },
      defer: function(fnc) {
        setTimeout(fnc, 0);
      },
      toArray: function(obj) {
        if (obj.toArray)
          return obj.toArray();
        return ARR_SLICE.call(obj);
      },
      isUndefined: function(obj) {
        return obj === undefined;
      },
      isNull: function(obj) {
        return obj === null;
      },
      isNaN: function(obj) {
        return obj !== obj;
      },
      isArray: Array.isArray || function(obj) {
        return obj.constructor === Array;
      },
      isObject: function(obj) {
        return obj === Object(obj);
      },
      isNumber: function(obj) {
        return obj === obj + 0;
      },
      isString: function(obj) {
        return obj === obj + '';
      },
      isBoolean: function(obj) {
        return obj === false || obj === true;
      },
      isFunction: function(obj) {
        return Object.prototype.toString.call(obj) === '[object Function]';
      }
    };
  })();
  dat.controllers.Controller = (function(common) {
    var Controller = function(object, property) {
      this.initialValue = object[property];
      this.domElement = document.createElement('div');
      this.object = object;
      this.property = property;
      this.__onChange = undefined;
      this.__onFinishChange = undefined;
    };
    common.extend(Controller.prototype, {
      onChange: function(fnc) {
        this.__onChange = fnc;
        return this;
      },
      onFinishChange: function(fnc) {
        this.__onFinishChange = fnc;
        return this;
      },
      setValue: function(newValue) {
        this.object[this.property] = newValue;
        if (this.__onChange) {
          this.__onChange.call(this, newValue);
        }
        this.updateDisplay();
        return this;
      },
      getValue: function() {
        return this.object[this.property];
      },
      updateDisplay: function() {
        return this;
      },
      isModified: function() {
        return this.initialValue !== this.getValue();
      }
    });
    return Controller;
  })(dat.utils.common);
  dat.dom.dom = (function(common) {
    var EVENT_MAP = {
      'HTMLEvents': ['change'],
      'MouseEvents': ['click', 'mousemove', 'mousedown', 'mouseup', 'mouseover'],
      'KeyboardEvents': ['keydown']
    };
    var EVENT_MAP_INV = {};
    common.each(EVENT_MAP, function(v, k) {
      common.each(v, function(e) {
        EVENT_MAP_INV[e] = k;
      });
    });
    var CSS_VALUE_PIXELS = /(\d+(\.\d+)?)px/;
    function cssValueToPixels(val) {
      if (val === '0' || common.isUndefined(val))
        return 0;
      var match = val.match(CSS_VALUE_PIXELS);
      if (!common.isNull(match)) {
        return parseFloat(match[1]);
      }
      return 0;
    }
    var dom = {
      makeSelectable: function(elem, selectable) {
        if (elem === undefined || elem.style === undefined)
          return;
        elem.onselectstart = selectable ? function() {
          return false;
        } : function() {};
        elem.style.MozUserSelect = selectable ? 'auto' : 'none';
        elem.style.KhtmlUserSelect = selectable ? 'auto' : 'none';
        elem.unselectable = selectable ? 'on' : 'off';
      },
      makeFullscreen: function(elem, horizontal, vertical) {
        if (common.isUndefined(horizontal))
          horizontal = true;
        if (common.isUndefined(vertical))
          vertical = true;
        elem.style.position = 'absolute';
        if (horizontal) {
          elem.style.left = 0;
          elem.style.right = 0;
        }
        if (vertical) {
          elem.style.top = 0;
          elem.style.bottom = 0;
        }
      },
      fakeEvent: function(elem, eventType, params, aux) {
        params = params || {};
        var className = EVENT_MAP_INV[eventType];
        if (!className) {
          throw new Error('Event type ' + eventType + ' not supported.');
        }
        var evt = document.createEvent(className);
        switch (className) {
          case 'MouseEvents':
            var clientX = params.x || params.clientX || 0;
            var clientY = params.y || params.clientY || 0;
            evt.initMouseEvent(eventType, params.bubbles || false, params.cancelable || true, window, params.clickCount || 1, 0, 0, clientX, clientY, false, false, false, false, 0, null);
            break;
          case 'KeyboardEvents':
            var init = evt.initKeyboardEvent || evt.initKeyEvent;
            common.defaults(params, {
              cancelable: true,
              ctrlKey: false,
              altKey: false,
              shiftKey: false,
              metaKey: false,
              keyCode: undefined,
              charCode: undefined
            });
            init(eventType, params.bubbles || false, params.cancelable, window, params.ctrlKey, params.altKey, params.shiftKey, params.metaKey, params.keyCode, params.charCode);
            break;
          default:
            evt.initEvent(eventType, params.bubbles || false, params.cancelable || true);
            break;
        }
        common.defaults(evt, aux);
        elem.dispatchEvent(evt);
      },
      bind: function(elem, event, func, bool) {
        bool = bool || false;
        if (elem.addEventListener)
          elem.addEventListener(event, func, bool);
        else if (elem.attachEvent)
          elem.attachEvent('on' + event, func);
        return dom;
      },
      unbind: function(elem, event, func, bool) {
        bool = bool || false;
        if (elem.removeEventListener)
          elem.removeEventListener(event, func, bool);
        else if (elem.detachEvent)
          elem.detachEvent('on' + event, func);
        return dom;
      },
      addClass: function(elem, className) {
        if (elem.className === undefined) {
          elem.className = className;
        } else if (elem.className !== className) {
          var classes = elem.className.split(/ +/);
          if (classes.indexOf(className) == -1) {
            classes.push(className);
            elem.className = classes.join(' ').replace(/^\s+/, '').replace(/\s+$/, '');
          }
        }
        return dom;
      },
      removeClass: function(elem, className) {
        if (className) {
          if (elem.className === undefined) {} else if (elem.className === className) {
            elem.removeAttribute('class');
          } else {
            var classes = elem.className.split(/ +/);
            var index = classes.indexOf(className);
            if (index != -1) {
              classes.splice(index, 1);
              elem.className = classes.join(' ');
            }
          }
        } else {
          elem.className = undefined;
        }
        return dom;
      },
      hasClass: function(elem, className) {
        return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(elem.className) || false;
      },
      getWidth: function(elem) {
        var style = getComputedStyle(elem);
        return cssValueToPixels(style['border-left-width']) + cssValueToPixels(style['border-right-width']) + cssValueToPixels(style['padding-left']) + cssValueToPixels(style['padding-right']) + cssValueToPixels(style['width']);
      },
      getHeight: function(elem) {
        var style = getComputedStyle(elem);
        return cssValueToPixels(style['border-top-width']) + cssValueToPixels(style['border-bottom-width']) + cssValueToPixels(style['padding-top']) + cssValueToPixels(style['padding-bottom']) + cssValueToPixels(style['height']);
      },
      getOffset: function(elem) {
        var offset = {
          left: 0,
          top: 0
        };
        if (elem.offsetParent) {
          do {
            offset.left += elem.offsetLeft;
            offset.top += elem.offsetTop;
          } while (elem = elem.offsetParent);
        }
        return offset;
      },
      isActive: function(elem) {
        return elem === document.activeElement && (elem.type || elem.href);
      }
    };
    return dom;
  })(dat.utils.common);
  dat.controllers.OptionController = (function(Controller, dom, common) {
    var OptionController = function(object, property, options) {
      OptionController.superclass.call(this, object, property);
      var _this = this;
      this.__select = document.createElement('select');
      if (common.isArray(options)) {
        var map = {};
        common.each(options, function(element) {
          map[element] = element;
        });
        options = map;
      }
      common.each(options, function(value, key) {
        var opt = document.createElement('option');
        opt.innerHTML = key;
        opt.setAttribute('value', value);
        _this.__select.appendChild(opt);
      });
      this.updateDisplay();
      dom.bind(this.__select, 'change', function() {
        var desiredValue = this.options[this.selectedIndex].value;
        _this.setValue(desiredValue);
      });
      this.domElement.appendChild(this.__select);
    };
    OptionController.superclass = Controller;
    common.extend(OptionController.prototype, Controller.prototype, {
      setValue: function(v) {
        var toReturn = OptionController.superclass.prototype.setValue.call(this, v);
        if (this.__onFinishChange) {
          this.__onFinishChange.call(this, this.getValue());
        }
        return toReturn;
      },
      updateDisplay: function() {
        this.__select.value = this.getValue();
        return OptionController.superclass.prototype.updateDisplay.call(this);
      }
    });
    return OptionController;
  })(dat.controllers.Controller, dat.dom.dom, dat.utils.common);
  dat.controllers.NumberController = (function(Controller, common) {
    var NumberController = function(object, property, params) {
      NumberController.superclass.call(this, object, property);
      params = params || {};
      this.__min = params.min;
      this.__max = params.max;
      this.__step = params.step;
      if (common.isUndefined(this.__step)) {
        if (this.initialValue == 0) {
          this.__impliedStep = 1;
        } else {
          this.__impliedStep = Math.pow(10, Math.floor(Math.log(this.initialValue) / Math.LN10)) / 10;
        }
      } else {
        this.__impliedStep = this.__step;
      }
      this.__precision = numDecimals(this.__impliedStep);
    };
    NumberController.superclass = Controller;
    common.extend(NumberController.prototype, Controller.prototype, {
      setValue: function(v) {
        if (this.__min !== undefined && v < this.__min) {
          v = this.__min;
        } else if (this.__max !== undefined && v > this.__max) {
          v = this.__max;
        }
        if (this.__step !== undefined && v % this.__step != 0) {
          v = Math.round(v / this.__step) * this.__step;
        }
        return NumberController.superclass.prototype.setValue.call(this, v);
      },
      min: function(v) {
        this.__min = v;
        return this;
      },
      max: function(v) {
        this.__max = v;
        return this;
      },
      step: function(v) {
        this.__step = v;
        return this;
      }
    });
    function numDecimals(x) {
      x = x.toString();
      if (x.indexOf('.') > -1) {
        return x.length - x.indexOf('.') - 1;
      } else {
        return 0;
      }
    }
    return NumberController;
  })(dat.controllers.Controller, dat.utils.common);
  dat.controllers.NumberControllerBox = (function(NumberController, dom, common) {
    var NumberControllerBox = function(object, property, params) {
      this.__truncationSuspended = false;
      NumberControllerBox.superclass.call(this, object, property, params);
      var _this = this;
      var prev_y;
      this.__input = document.createElement('input');
      this.__input.setAttribute('type', 'text');
      dom.bind(this.__input, 'change', onChange);
      dom.bind(this.__input, 'blur', onBlur);
      dom.bind(this.__input, 'mousedown', onMouseDown);
      dom.bind(this.__input, 'keydown', function(e) {
        if (e.keyCode === 13) {
          _this.__truncationSuspended = true;
          this.blur();
          _this.__truncationSuspended = false;
        }
      });
      function onChange() {
        var attempted = parseFloat(_this.__input.value);
        if (!common.isNaN(attempted))
          _this.setValue(attempted);
      }
      function onBlur() {
        onChange();
        if (_this.__onFinishChange) {
          _this.__onFinishChange.call(_this, _this.getValue());
        }
      }
      function onMouseDown(e) {
        dom.bind(window, 'mousemove', onMouseDrag);
        dom.bind(window, 'mouseup', onMouseUp);
        prev_y = e.clientY;
      }
      function onMouseDrag(e) {
        var diff = prev_y - e.clientY;
        _this.setValue(_this.getValue() + diff * _this.__impliedStep);
        prev_y = e.clientY;
      }
      function onMouseUp() {
        dom.unbind(window, 'mousemove', onMouseDrag);
        dom.unbind(window, 'mouseup', onMouseUp);
      }
      this.updateDisplay();
      this.domElement.appendChild(this.__input);
    };
    NumberControllerBox.superclass = NumberController;
    common.extend(NumberControllerBox.prototype, NumberController.prototype, {updateDisplay: function() {
        this.__input.value = this.__truncationSuspended ? this.getValue() : roundToDecimal(this.getValue(), this.__precision);
        return NumberControllerBox.superclass.prototype.updateDisplay.call(this);
      }});
    function roundToDecimal(value, decimals) {
      var tenTo = Math.pow(10, decimals);
      return Math.round(value * tenTo) / tenTo;
    }
    return NumberControllerBox;
  })(dat.controllers.NumberController, dat.dom.dom, dat.utils.common);
  dat.controllers.NumberControllerSlider = (function(NumberController, dom, css, common, styleSheet) {
    var NumberControllerSlider = function(object, property, min, max, step) {
      NumberControllerSlider.superclass.call(this, object, property, {
        min: min,
        max: max,
        step: step
      });
      var _this = this;
      this.__background = document.createElement('div');
      this.__foreground = document.createElement('div');
      dom.bind(this.__background, 'mousedown', onMouseDown);
      dom.addClass(this.__background, 'slider');
      dom.addClass(this.__foreground, 'slider-fg');
      function onMouseDown(e) {
        dom.bind(window, 'mousemove', onMouseDrag);
        dom.bind(window, 'mouseup', onMouseUp);
        onMouseDrag(e);
      }
      function onMouseDrag(e) {
        e.preventDefault();
        var offset = dom.getOffset(_this.__background);
        var width = dom.getWidth(_this.__background);
        _this.setValue(map(e.clientX, offset.left, offset.left + width, _this.__min, _this.__max));
        return false;
      }
      function onMouseUp() {
        dom.unbind(window, 'mousemove', onMouseDrag);
        dom.unbind(window, 'mouseup', onMouseUp);
        if (_this.__onFinishChange) {
          _this.__onFinishChange.call(_this, _this.getValue());
        }
      }
      this.updateDisplay();
      this.__background.appendChild(this.__foreground);
      this.domElement.appendChild(this.__background);
    };
    NumberControllerSlider.superclass = NumberController;
    NumberControllerSlider.useDefaultStyles = function() {
      css.inject(styleSheet);
    };
    common.extend(NumberControllerSlider.prototype, NumberController.prototype, {updateDisplay: function() {
        var pct = (this.getValue() - this.__min) / (this.__max - this.__min);
        this.__foreground.style.width = pct * 100 + '%';
        return NumberControllerSlider.superclass.prototype.updateDisplay.call(this);
      }});
    function map(v, i1, i2, o1, o2) {
      return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
    }
    return NumberControllerSlider;
  })(dat.controllers.NumberController, dat.dom.dom, dat.utils.css, dat.utils.common, ".slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}");
  dat.controllers.FunctionController = (function(Controller, dom, common) {
    var FunctionController = function(object, property, text) {
      FunctionController.superclass.call(this, object, property);
      var _this = this;
      this.__button = document.createElement('div');
      this.__button.innerHTML = text === undefined ? 'Fire' : text;
      dom.bind(this.__button, 'click', function(e) {
        e.preventDefault();
        _this.fire();
        return false;
      });
      dom.addClass(this.__button, 'button');
      this.domElement.appendChild(this.__button);
    };
    FunctionController.superclass = Controller;
    common.extend(FunctionController.prototype, Controller.prototype, {fire: function() {
        if (this.__onChange) {
          this.__onChange.call(this);
        }
        if (this.__onFinishChange) {
          this.__onFinishChange.call(this, this.getValue());
        }
        this.getValue().call(this.object);
      }});
    return FunctionController;
  })(dat.controllers.Controller, dat.dom.dom, dat.utils.common);
  dat.controllers.BooleanController = (function(Controller, dom, common) {
    var BooleanController = function(object, property) {
      BooleanController.superclass.call(this, object, property);
      var _this = this;
      this.__prev = this.getValue();
      this.__checkbox = document.createElement('input');
      this.__checkbox.setAttribute('type', 'checkbox');
      dom.bind(this.__checkbox, 'change', onChange, false);
      this.domElement.appendChild(this.__checkbox);
      this.updateDisplay();
      function onChange() {
        _this.setValue(!_this.__prev);
      }
    };
    BooleanController.superclass = Controller;
    common.extend(BooleanController.prototype, Controller.prototype, {
      setValue: function(v) {
        var toReturn = BooleanController.superclass.prototype.setValue.call(this, v);
        if (this.__onFinishChange) {
          this.__onFinishChange.call(this, this.getValue());
        }
        this.__prev = this.getValue();
        return toReturn;
      },
      updateDisplay: function() {
        if (this.getValue() === true) {
          this.__checkbox.setAttribute('checked', 'checked');
          this.__checkbox.checked = true;
        } else {
          this.__checkbox.checked = false;
        }
        return BooleanController.superclass.prototype.updateDisplay.call(this);
      }
    });
    return BooleanController;
  })(dat.controllers.Controller, dat.dom.dom, dat.utils.common);
  dat.color.toString = (function(common) {
    return function(color) {
      if (color.a == 1 || common.isUndefined(color.a)) {
        var s = color.hex.toString(16);
        while (s.length < 6) {
          s = '0' + s;
        }
        return '#' + s;
      } else {
        return 'rgba(' + Math.round(color.r) + ',' + Math.round(color.g) + ',' + Math.round(color.b) + ',' + color.a + ')';
      }
    };
  })(dat.utils.common);
  dat.color.interpret = (function(toString, common) {
    var result,
        toReturn;
    var interpret = function() {
      toReturn = false;
      var original = arguments.length > 1 ? common.toArray(arguments) : arguments[0];
      common.each(INTERPRETATIONS, function(family) {
        if (family.litmus(original)) {
          common.each(family.conversions, function(conversion, conversionName) {
            result = conversion.read(original);
            if (toReturn === false && result !== false) {
              toReturn = result;
              result.conversionName = conversionName;
              result.conversion = conversion;
              return common.BREAK;
            }
          });
          return common.BREAK;
        }
      });
      return toReturn;
    };
    var INTERPRETATIONS = [{
      litmus: common.isString,
      conversions: {
        THREE_CHAR_HEX: {
          read: function(original) {
            var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
            if (test === null)
              return false;
            return {
              space: 'HEX',
              hex: parseInt('0x' + test[1].toString() + test[1].toString() + test[2].toString() + test[2].toString() + test[3].toString() + test[3].toString())
            };
          },
          write: toString
        },
        SIX_CHAR_HEX: {
          read: function(original) {
            var test = original.match(/^#([A-F0-9]{6})$/i);
            if (test === null)
              return false;
            return {
              space: 'HEX',
              hex: parseInt('0x' + test[1].toString())
            };
          },
          write: toString
        },
        CSS_RGB: {
          read: function(original) {
            var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
            if (test === null)
              return false;
            return {
              space: 'RGB',
              r: parseFloat(test[1]),
              g: parseFloat(test[2]),
              b: parseFloat(test[3])
            };
          },
          write: toString
        },
        CSS_RGBA: {
          read: function(original) {
            var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
            if (test === null)
              return false;
            return {
              space: 'RGB',
              r: parseFloat(test[1]),
              g: parseFloat(test[2]),
              b: parseFloat(test[3]),
              a: parseFloat(test[4])
            };
          },
          write: toString
        }
      }
    }, {
      litmus: common.isNumber,
      conversions: {HEX: {
          read: function(original) {
            return {
              space: 'HEX',
              hex: original,
              conversionName: 'HEX'
            };
          },
          write: function(color) {
            return color.hex;
          }
        }}
    }, {
      litmus: common.isArray,
      conversions: {
        RGB_ARRAY: {
          read: function(original) {
            if (original.length != 3)
              return false;
            return {
              space: 'RGB',
              r: original[0],
              g: original[1],
              b: original[2]
            };
          },
          write: function(color) {
            return [color.r, color.g, color.b];
          }
        },
        RGBA_ARRAY: {
          read: function(original) {
            if (original.length != 4)
              return false;
            return {
              space: 'RGB',
              r: original[0],
              g: original[1],
              b: original[2],
              a: original[3]
            };
          },
          write: function(color) {
            return [color.r, color.g, color.b, color.a];
          }
        }
      }
    }, {
      litmus: common.isObject,
      conversions: {
        RGBA_OBJ: {
          read: function(original) {
            if (common.isNumber(original.r) && common.isNumber(original.g) && common.isNumber(original.b) && common.isNumber(original.a)) {
              return {
                space: 'RGB',
                r: original.r,
                g: original.g,
                b: original.b,
                a: original.a
              };
            }
            return false;
          },
          write: function(color) {
            return {
              r: color.r,
              g: color.g,
              b: color.b,
              a: color.a
            };
          }
        },
        RGB_OBJ: {
          read: function(original) {
            if (common.isNumber(original.r) && common.isNumber(original.g) && common.isNumber(original.b)) {
              return {
                space: 'RGB',
                r: original.r,
                g: original.g,
                b: original.b
              };
            }
            return false;
          },
          write: function(color) {
            return {
              r: color.r,
              g: color.g,
              b: color.b
            };
          }
        },
        HSVA_OBJ: {
          read: function(original) {
            if (common.isNumber(original.h) && common.isNumber(original.s) && common.isNumber(original.v) && common.isNumber(original.a)) {
              return {
                space: 'HSV',
                h: original.h,
                s: original.s,
                v: original.v,
                a: original.a
              };
            }
            return false;
          },
          write: function(color) {
            return {
              h: color.h,
              s: color.s,
              v: color.v,
              a: color.a
            };
          }
        },
        HSV_OBJ: {
          read: function(original) {
            if (common.isNumber(original.h) && common.isNumber(original.s) && common.isNumber(original.v)) {
              return {
                space: 'HSV',
                h: original.h,
                s: original.s,
                v: original.v
              };
            }
            return false;
          },
          write: function(color) {
            return {
              h: color.h,
              s: color.s,
              v: color.v
            };
          }
        }
      }
    }];
    return interpret;
  })(dat.color.toString, dat.utils.common);
  dat.GUI = dat.gui.GUI = (function(css, saveDialogueContents, styleSheet, controllerFactory, Controller, BooleanController, FunctionController, NumberControllerBox, NumberControllerSlider, OptionController, ColorController, requestAnimationFrame, CenteredDiv, dom, common) {
    css.inject(styleSheet);
    var CSS_NAMESPACE = 'dg';
    var HIDE_KEY_CODE = 72;
    var CLOSE_BUTTON_HEIGHT = 20;
    var DEFAULT_DEFAULT_PRESET_NAME = 'Default';
    var SUPPORTS_LOCAL_STORAGE = (function() {
      try {
        return 'localStorage' in window && window['localStorage'] !== null;
      } catch (e) {
        return false;
      }
    })();
    var SAVE_DIALOGUE;
    var auto_place_virgin = true;
    var auto_place_container;
    var hide = false;
    var hideable_guis = [];
    var GUI = function(params) {
      var _this = this;
      this.domElement = document.createElement('div');
      this.__ul = document.createElement('ul');
      this.domElement.appendChild(this.__ul);
      dom.addClass(this.domElement, CSS_NAMESPACE);
      this.__folders = {};
      this.__controllers = [];
      this.__rememberedObjects = [];
      this.__rememberedObjectIndecesToControllers = [];
      this.__listening = [];
      params = params || {};
      params = common.defaults(params, {
        autoPlace: true,
        width: GUI.DEFAULT_WIDTH
      });
      params = common.defaults(params, {
        resizable: params.autoPlace,
        hideable: params.autoPlace
      });
      if (!common.isUndefined(params.load)) {
        if (params.preset)
          params.load.preset = params.preset;
      } else {
        params.load = {preset: DEFAULT_DEFAULT_PRESET_NAME};
      }
      if (common.isUndefined(params.parent) && params.hideable) {
        hideable_guis.push(this);
      }
      params.resizable = common.isUndefined(params.parent) && params.resizable;
      if (params.autoPlace && common.isUndefined(params.scrollable)) {
        params.scrollable = true;
      }
      var use_local_storage = SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(this, 'isLocal')) === 'true';
      Object.defineProperties(this, {
        parent: {get: function() {
            return params.parent;
          }},
        scrollable: {get: function() {
            return params.scrollable;
          }},
        autoPlace: {get: function() {
            return params.autoPlace;
          }},
        preset: {
          get: function() {
            if (_this.parent) {
              return _this.getRoot().preset;
            } else {
              return params.load.preset;
            }
          },
          set: function(v) {
            if (_this.parent) {
              _this.getRoot().preset = v;
            } else {
              params.load.preset = v;
            }
            setPresetSelectIndex(this);
            _this.revert();
          }
        },
        width: {
          get: function() {
            return params.width;
          },
          set: function(v) {
            params.width = v;
            setWidth(_this, v);
          }
        },
        name: {
          get: function() {
            return params.name;
          },
          set: function(v) {
            params.name = v;
            if (title_row_name) {
              title_row_name.innerHTML = params.name;
            }
          }
        },
        closed: {
          get: function() {
            return params.closed;
          },
          set: function(v) {
            params.closed = v;
            if (params.closed) {
              dom.addClass(_this.__ul, GUI.CLASS_CLOSED);
            } else {
              dom.removeClass(_this.__ul, GUI.CLASS_CLOSED);
            }
            this.onResize();
            if (_this.__closeButton) {
              _this.__closeButton.innerHTML = v ? GUI.TEXT_OPEN : GUI.TEXT_CLOSED;
            }
          }
        },
        load: {get: function() {
            return params.load;
          }},
        useLocalStorage: {
          get: function() {
            return use_local_storage;
          },
          set: function(bool) {
            if (SUPPORTS_LOCAL_STORAGE) {
              use_local_storage = bool;
              if (bool) {
                dom.bind(window, 'unload', saveToLocalStorage);
              } else {
                dom.unbind(window, 'unload', saveToLocalStorage);
              }
              localStorage.setItem(getLocalStorageHash(_this, 'isLocal'), bool);
            }
          }
        }
      });
      if (common.isUndefined(params.parent)) {
        params.closed = false;
        dom.addClass(this.domElement, GUI.CLASS_MAIN);
        dom.makeSelectable(this.domElement, false);
        if (SUPPORTS_LOCAL_STORAGE) {
          if (use_local_storage) {
            _this.useLocalStorage = true;
            var saved_gui = localStorage.getItem(getLocalStorageHash(this, 'gui'));
            if (saved_gui) {
              params.load = JSON.parse(saved_gui);
            }
          }
        }
        this.__closeButton = document.createElement('div');
        this.__closeButton.innerHTML = GUI.TEXT_CLOSED;
        dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BUTTON);
        this.domElement.appendChild(this.__closeButton);
        dom.bind(this.__closeButton, 'click', function() {
          _this.closed = !_this.closed;
        });
      } else {
        if (params.closed === undefined) {
          params.closed = true;
        }
        var title_row_name = document.createTextNode(params.name);
        dom.addClass(title_row_name, 'controller-name');
        var title_row = addRow(_this, title_row_name);
        var on_click_title = function(e) {
          e.preventDefault();
          _this.closed = !_this.closed;
          return false;
        };
        dom.addClass(this.__ul, GUI.CLASS_CLOSED);
        dom.addClass(title_row, 'title');
        dom.bind(title_row, 'click', on_click_title);
        if (!params.closed) {
          this.closed = false;
        }
      }
      if (params.autoPlace) {
        if (common.isUndefined(params.parent)) {
          if (auto_place_virgin) {
            auto_place_container = document.createElement('div');
            dom.addClass(auto_place_container, CSS_NAMESPACE);
            dom.addClass(auto_place_container, GUI.CLASS_AUTO_PLACE_CONTAINER);
            document.body.appendChild(auto_place_container);
            auto_place_virgin = false;
          }
          auto_place_container.appendChild(this.domElement);
          dom.addClass(this.domElement, GUI.CLASS_AUTO_PLACE);
        }
        if (!this.parent)
          setWidth(_this, params.width);
      }
      dom.bind(window, 'resize', function() {
        _this.onResize();
      });
      dom.bind(this.__ul, 'webkitTransitionEnd', function() {
        _this.onResize();
      });
      dom.bind(this.__ul, 'transitionend', function() {
        _this.onResize();
      });
      dom.bind(this.__ul, 'oTransitionEnd', function() {
        _this.onResize();
      });
      this.onResize();
      if (params.resizable) {
        addResizeHandle(this);
      }
      function saveToLocalStorage() {
        localStorage.setItem(getLocalStorageHash(_this, 'gui'), JSON.stringify(_this.getSaveObject()));
      }
      var root = _this.getRoot();
      function resetWidth() {
        var root = _this.getRoot();
        root.width += 1;
        common.defer(function() {
          root.width -= 1;
        });
      }
      if (!params.parent) {
        resetWidth();
      }
    };
    GUI.toggleHide = function() {
      hide = !hide;
      common.each(hideable_guis, function(gui) {
        gui.domElement.style.zIndex = hide ? -999 : 999;
        gui.domElement.style.opacity = hide ? 0 : 1;
      });
    };
    GUI.CLASS_AUTO_PLACE = 'a';
    GUI.CLASS_AUTO_PLACE_CONTAINER = 'ac';
    GUI.CLASS_MAIN = 'main';
    GUI.CLASS_CONTROLLER_ROW = 'cr';
    GUI.CLASS_TOO_TALL = 'taller-than-window';
    GUI.CLASS_CLOSED = 'closed';
    GUI.CLASS_CLOSE_BUTTON = 'close-button';
    GUI.CLASS_DRAG = 'drag';
    GUI.DEFAULT_WIDTH = 245;
    GUI.TEXT_CLOSED = 'Close Controls';
    GUI.TEXT_OPEN = 'Open Controls';
    dom.bind(window, 'keydown', function(e) {
      if (document.activeElement.type !== 'text' && (e.which === HIDE_KEY_CODE || e.keyCode == HIDE_KEY_CODE)) {
        GUI.toggleHide();
      }
    }, false);
    common.extend(GUI.prototype, {
      add: function(object, property) {
        return add(this, object, property, {factoryArgs: Array.prototype.slice.call(arguments, 2)});
      },
      addColor: function(object, property) {
        return add(this, object, property, {color: true});
      },
      remove: function(controller) {
        this.__ul.removeChild(controller.__li);
        this.__controllers.slice(this.__controllers.indexOf(controller), 1);
        var _this = this;
        common.defer(function() {
          _this.onResize();
        });
      },
      destroy: function() {
        if (this.autoPlace) {
          auto_place_container.removeChild(this.domElement);
        }
      },
      addFolder: function(name) {
        if (this.__folders[name] !== undefined) {
          throw new Error('You already have a folder in this GUI by the' + ' name "' + name + '"');
        }
        var new_gui_params = {
          name: name,
          parent: this
        };
        new_gui_params.autoPlace = this.autoPlace;
        if (this.load && this.load.folders && this.load.folders[name]) {
          new_gui_params.closed = this.load.folders[name].closed;
          new_gui_params.load = this.load.folders[name];
        }
        var gui = new GUI(new_gui_params);
        this.__folders[name] = gui;
        var li = addRow(this, gui.domElement);
        dom.addClass(li, 'folder');
        return gui;
      },
      open: function() {
        this.closed = false;
      },
      close: function() {
        this.closed = true;
      },
      onResize: function() {
        var root = this.getRoot();
        if (root.scrollable) {
          var top = dom.getOffset(root.__ul).top;
          var h = 0;
          common.each(root.__ul.childNodes, function(node) {
            if (!(root.autoPlace && node === root.__save_row))
              h += dom.getHeight(node);
          });
          if (window.innerHeight - top - CLOSE_BUTTON_HEIGHT < h) {
            dom.addClass(root.domElement, GUI.CLASS_TOO_TALL);
            root.__ul.style.height = window.innerHeight - top - CLOSE_BUTTON_HEIGHT + 'px';
          } else {
            dom.removeClass(root.domElement, GUI.CLASS_TOO_TALL);
            root.__ul.style.height = 'auto';
          }
        }
        if (root.__resize_handle) {
          common.defer(function() {
            root.__resize_handle.style.height = root.__ul.offsetHeight + 'px';
          });
        }
        if (root.__closeButton) {
          root.__closeButton.style.width = root.width + 'px';
        }
      },
      remember: function() {
        if (common.isUndefined(SAVE_DIALOGUE)) {
          SAVE_DIALOGUE = new CenteredDiv();
          SAVE_DIALOGUE.domElement.innerHTML = saveDialogueContents;
        }
        if (this.parent) {
          throw new Error("You can only call remember on a top level GUI.");
        }
        var _this = this;
        common.each(Array.prototype.slice.call(arguments), function(object) {
          if (_this.__rememberedObjects.length == 0) {
            addSaveMenu(_this);
          }
          if (_this.__rememberedObjects.indexOf(object) == -1) {
            _this.__rememberedObjects.push(object);
          }
        });
        if (this.autoPlace) {
          setWidth(this, this.width);
        }
      },
      getRoot: function() {
        var gui = this;
        while (gui.parent) {
          gui = gui.parent;
        }
        return gui;
      },
      getSaveObject: function() {
        var toReturn = this.load;
        toReturn.closed = this.closed;
        if (this.__rememberedObjects.length > 0) {
          toReturn.preset = this.preset;
          if (!toReturn.remembered) {
            toReturn.remembered = {};
          }
          toReturn.remembered[this.preset] = getCurrentPreset(this);
        }
        toReturn.folders = {};
        common.each(this.__folders, function(element, key) {
          toReturn.folders[key] = element.getSaveObject();
        });
        return toReturn;
      },
      save: function() {
        if (!this.load.remembered) {
          this.load.remembered = {};
        }
        this.load.remembered[this.preset] = getCurrentPreset(this);
        markPresetModified(this, false);
      },
      saveAs: function(presetName) {
        if (!this.load.remembered) {
          this.load.remembered = {};
          this.load.remembered[DEFAULT_DEFAULT_PRESET_NAME] = getCurrentPreset(this, true);
        }
        this.load.remembered[presetName] = getCurrentPreset(this);
        this.preset = presetName;
        addPresetOption(this, presetName, true);
      },
      revert: function(gui) {
        common.each(this.__controllers, function(controller) {
          if (!this.getRoot().load.remembered) {
            controller.setValue(controller.initialValue);
          } else {
            recallSavedValue(gui || this.getRoot(), controller);
          }
        }, this);
        common.each(this.__folders, function(folder) {
          folder.revert(folder);
        });
        if (!gui) {
          markPresetModified(this.getRoot(), false);
        }
      },
      listen: function(controller) {
        var init = this.__listening.length == 0;
        this.__listening.push(controller);
        if (init)
          updateDisplays(this.__listening);
      }
    });
    function add(gui, object, property, params) {
      if (object[property] === undefined) {
        throw new Error("Object " + object + " has no property \"" + property + "\"");
      }
      var controller;
      if (params.color) {
        controller = new ColorController(object, property);
      } else {
        var factoryArgs = [object, property].concat(params.factoryArgs);
        controller = controllerFactory.apply(gui, factoryArgs);
      }
      if (params.before instanceof Controller) {
        params.before = params.before.__li;
      }
      recallSavedValue(gui, controller);
      dom.addClass(controller.domElement, 'c');
      var name = document.createElement('span');
      dom.addClass(name, 'property-name');
      name.innerHTML = controller.property;
      var container = document.createElement('div');
      container.appendChild(name);
      container.appendChild(controller.domElement);
      var li = addRow(gui, container, params.before);
      dom.addClass(li, GUI.CLASS_CONTROLLER_ROW);
      dom.addClass(li, typeof controller.getValue());
      augmentController(gui, li, controller);
      gui.__controllers.push(controller);
      return controller;
    }
    function addRow(gui, dom, liBefore) {
      var li = document.createElement('li');
      if (dom)
        li.appendChild(dom);
      if (liBefore) {
        gui.__ul.insertBefore(li, params.before);
      } else {
        gui.__ul.appendChild(li);
      }
      gui.onResize();
      return li;
    }
    function augmentController(gui, li, controller) {
      controller.__li = li;
      controller.__gui = gui;
      common.extend(controller, {
        options: function(options) {
          if (arguments.length > 1) {
            controller.remove();
            return add(gui, controller.object, controller.property, {
              before: controller.__li.nextElementSibling,
              factoryArgs: [common.toArray(arguments)]
            });
          }
          if (common.isArray(options) || common.isObject(options)) {
            controller.remove();
            return add(gui, controller.object, controller.property, {
              before: controller.__li.nextElementSibling,
              factoryArgs: [options]
            });
          }
        },
        name: function(v) {
          controller.__li.firstElementChild.firstElementChild.innerHTML = v;
          return controller;
        },
        listen: function() {
          controller.__gui.listen(controller);
          return controller;
        },
        remove: function() {
          controller.__gui.remove(controller);
          return controller;
        }
      });
      if (controller instanceof NumberControllerSlider) {
        var box = new NumberControllerBox(controller.object, controller.property, {
          min: controller.__min,
          max: controller.__max,
          step: controller.__step
        });
        common.each(['updateDisplay', 'onChange', 'onFinishChange'], function(method) {
          var pc = controller[method];
          var pb = box[method];
          controller[method] = box[method] = function() {
            var args = Array.prototype.slice.call(arguments);
            pc.apply(controller, args);
            return pb.apply(box, args);
          };
        });
        dom.addClass(li, 'has-slider');
        controller.domElement.insertBefore(box.domElement, controller.domElement.firstElementChild);
      } else if (controller instanceof NumberControllerBox) {
        var r = function(returned) {
          if (common.isNumber(controller.__min) && common.isNumber(controller.__max)) {
            controller.remove();
            return add(gui, controller.object, controller.property, {
              before: controller.__li.nextElementSibling,
              factoryArgs: [controller.__min, controller.__max, controller.__step]
            });
          }
          return returned;
        };
        controller.min = common.compose(r, controller.min);
        controller.max = common.compose(r, controller.max);
      } else if (controller instanceof BooleanController) {
        dom.bind(li, 'click', function() {
          dom.fakeEvent(controller.__checkbox, 'click');
        });
        dom.bind(controller.__checkbox, 'click', function(e) {
          e.stopPropagation();
        });
      } else if (controller instanceof FunctionController) {
        dom.bind(li, 'click', function() {
          dom.fakeEvent(controller.__button, 'click');
        });
        dom.bind(li, 'mouseover', function() {
          dom.addClass(controller.__button, 'hover');
        });
        dom.bind(li, 'mouseout', function() {
          dom.removeClass(controller.__button, 'hover');
        });
      } else if (controller instanceof ColorController) {
        dom.addClass(li, 'color');
        controller.updateDisplay = common.compose(function(r) {
          li.style.borderLeftColor = controller.__color.toString();
          return r;
        }, controller.updateDisplay);
        controller.updateDisplay();
      }
      controller.setValue = common.compose(function(r) {
        if (gui.getRoot().__preset_select && controller.isModified()) {
          markPresetModified(gui.getRoot(), true);
        }
        return r;
      }, controller.setValue);
    }
    function recallSavedValue(gui, controller) {
      var root = gui.getRoot();
      var matched_index = root.__rememberedObjects.indexOf(controller.object);
      if (matched_index != -1) {
        var controller_map = root.__rememberedObjectIndecesToControllers[matched_index];
        if (controller_map === undefined) {
          controller_map = {};
          root.__rememberedObjectIndecesToControllers[matched_index] = controller_map;
        }
        controller_map[controller.property] = controller;
        if (root.load && root.load.remembered) {
          var preset_map = root.load.remembered;
          var preset;
          if (preset_map[gui.preset]) {
            preset = preset_map[gui.preset];
          } else if (preset_map[DEFAULT_DEFAULT_PRESET_NAME]) {
            preset = preset_map[DEFAULT_DEFAULT_PRESET_NAME];
          } else {
            return;
          }
          if (preset[matched_index] && preset[matched_index][controller.property] !== undefined) {
            var value = preset[matched_index][controller.property];
            controller.initialValue = value;
            controller.setValue(value);
          }
        }
      }
    }
    function getLocalStorageHash(gui, key) {
      return document.location.href + '.' + key;
    }
    function addSaveMenu(gui) {
      var div = gui.__save_row = document.createElement('li');
      dom.addClass(gui.domElement, 'has-save');
      gui.__ul.insertBefore(div, gui.__ul.firstChild);
      dom.addClass(div, 'save-row');
      var gears = document.createElement('span');
      gears.innerHTML = '&nbsp;';
      dom.addClass(gears, 'button gears');
      var button = document.createElement('span');
      button.innerHTML = 'Save';
      dom.addClass(button, 'button');
      dom.addClass(button, 'save');
      var button2 = document.createElement('span');
      button2.innerHTML = 'New';
      dom.addClass(button2, 'button');
      dom.addClass(button2, 'save-as');
      var button3 = document.createElement('span');
      button3.innerHTML = 'Revert';
      dom.addClass(button3, 'button');
      dom.addClass(button3, 'revert');
      var select = gui.__preset_select = document.createElement('select');
      if (gui.load && gui.load.remembered) {
        common.each(gui.load.remembered, function(value, key) {
          addPresetOption(gui, key, key == gui.preset);
        });
      } else {
        addPresetOption(gui, DEFAULT_DEFAULT_PRESET_NAME, false);
      }
      dom.bind(select, 'change', function() {
        for (var index = 0; index < gui.__preset_select.length; index++) {
          gui.__preset_select[index].innerHTML = gui.__preset_select[index].value;
        }
        gui.preset = this.value;
      });
      div.appendChild(select);
      div.appendChild(gears);
      div.appendChild(button);
      div.appendChild(button2);
      div.appendChild(button3);
      if (SUPPORTS_LOCAL_STORAGE) {
        var saveLocally = document.getElementById('dg-save-locally');
        var explain = document.getElementById('dg-local-explain');
        saveLocally.style.display = 'block';
        var localStorageCheckBox = document.getElementById('dg-local-storage');
        if (localStorage.getItem(getLocalStorageHash(gui, 'isLocal')) === 'true') {
          localStorageCheckBox.setAttribute('checked', 'checked');
        }
        function showHideExplain() {
          explain.style.display = gui.useLocalStorage ? 'block' : 'none';
        }
        showHideExplain();
        dom.bind(localStorageCheckBox, 'change', function() {
          gui.useLocalStorage = !gui.useLocalStorage;
          showHideExplain();
        });
      }
      var newConstructorTextArea = document.getElementById('dg-new-constructor');
      dom.bind(newConstructorTextArea, 'keydown', function(e) {
        if (e.metaKey && (e.which === 67 || e.keyCode == 67)) {
          SAVE_DIALOGUE.hide();
        }
      });
      dom.bind(gears, 'click', function() {
        newConstructorTextArea.innerHTML = JSON.stringify(gui.getSaveObject(), undefined, 2);
        SAVE_DIALOGUE.show();
        newConstructorTextArea.focus();
        newConstructorTextArea.select();
      });
      dom.bind(button, 'click', function() {
        gui.save();
      });
      dom.bind(button2, 'click', function() {
        var presetName = prompt('Enter a new preset name.');
        if (presetName)
          gui.saveAs(presetName);
      });
      dom.bind(button3, 'click', function() {
        gui.revert();
      });
    }
    function addResizeHandle(gui) {
      gui.__resize_handle = document.createElement('div');
      common.extend(gui.__resize_handle.style, {
        width: '6px',
        marginLeft: '-3px',
        height: '200px',
        cursor: 'ew-resize',
        position: 'absolute'
      });
      var pmouseX;
      dom.bind(gui.__resize_handle, 'mousedown', dragStart);
      dom.bind(gui.__closeButton, 'mousedown', dragStart);
      gui.domElement.insertBefore(gui.__resize_handle, gui.domElement.firstElementChild);
      function dragStart(e) {
        e.preventDefault();
        pmouseX = e.clientX;
        dom.addClass(gui.__closeButton, GUI.CLASS_DRAG);
        dom.bind(window, 'mousemove', drag);
        dom.bind(window, 'mouseup', dragStop);
        return false;
      }
      function drag(e) {
        e.preventDefault();
        gui.width += pmouseX - e.clientX;
        gui.onResize();
        pmouseX = e.clientX;
        return false;
      }
      function dragStop() {
        dom.removeClass(gui.__closeButton, GUI.CLASS_DRAG);
        dom.unbind(window, 'mousemove', drag);
        dom.unbind(window, 'mouseup', dragStop);
      }
    }
    function setWidth(gui, w) {
      gui.domElement.style.width = w + 'px';
      if (gui.__save_row && gui.autoPlace) {
        gui.__save_row.style.width = w + 'px';
      }
      if (gui.__closeButton) {
        gui.__closeButton.style.width = w + 'px';
      }
    }
    function getCurrentPreset(gui, useInitialValues) {
      var toReturn = {};
      common.each(gui.__rememberedObjects, function(val, index) {
        var saved_values = {};
        var controller_map = gui.__rememberedObjectIndecesToControllers[index];
        common.each(controller_map, function(controller, property) {
          saved_values[property] = useInitialValues ? controller.initialValue : controller.getValue();
        });
        toReturn[index] = saved_values;
      });
      return toReturn;
    }
    function addPresetOption(gui, name, setSelected) {
      var opt = document.createElement('option');
      opt.innerHTML = name;
      opt.value = name;
      gui.__preset_select.appendChild(opt);
      if (setSelected) {
        gui.__preset_select.selectedIndex = gui.__preset_select.length - 1;
      }
    }
    function setPresetSelectIndex(gui) {
      for (var index = 0; index < gui.__preset_select.length; index++) {
        if (gui.__preset_select[index].value == gui.preset) {
          gui.__preset_select.selectedIndex = index;
        }
      }
    }
    function markPresetModified(gui, modified) {
      var opt = gui.__preset_select[gui.__preset_select.selectedIndex];
      if (modified) {
        opt.innerHTML = opt.value + "*";
      } else {
        opt.innerHTML = opt.value;
      }
    }
    function updateDisplays(controllerArray) {
      if (controllerArray.length != 0) {
        requestAnimationFrame(function() {
          updateDisplays(controllerArray);
        });
      }
      common.each(controllerArray, function(c) {
        c.updateDisplay();
      });
    }
    return GUI;
  })(dat.utils.css, "<div id=\"dg-save\" class=\"dg dialogue\">\n\n  Here's the new load parameter for your <code>GUI</code>'s constructor:\n\n  <textarea id=\"dg-new-constructor\"></textarea>\n\n  <div id=\"dg-save-locally\">\n\n    <input id=\"dg-local-storage\" type=\"checkbox\"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id=\"dg-local-explain\">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>", ".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save ul{margin-top:27px}.dg.a.has-save ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height 0.1s ease-out;-o-transition:height 0.1s ease-out;-moz-transition:height 0.1s ease-out;transition:height 0.1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li > *{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n", dat.controllers.factory = (function(OptionController, NumberControllerBox, NumberControllerSlider, StringController, FunctionController, BooleanController, common) {
    return function(object, property) {
      var initialValue = object[property];
      if (common.isArray(arguments[2]) || common.isObject(arguments[2])) {
        return new OptionController(object, property, arguments[2]);
      }
      if (common.isNumber(initialValue)) {
        if (common.isNumber(arguments[2]) && common.isNumber(arguments[3])) {
          return new NumberControllerSlider(object, property, arguments[2], arguments[3]);
        } else {
          return new NumberControllerBox(object, property, {
            min: arguments[2],
            max: arguments[3]
          });
        }
      }
      if (common.isString(initialValue)) {
        return new StringController(object, property);
      }
      if (common.isFunction(initialValue)) {
        return new FunctionController(object, property, '');
      }
      if (common.isBoolean(initialValue)) {
        return new BooleanController(object, property);
      }
    };
  })(dat.controllers.OptionController, dat.controllers.NumberControllerBox, dat.controllers.NumberControllerSlider, dat.controllers.StringController = (function(Controller, dom, common) {
    var StringController = function(object, property) {
      StringController.superclass.call(this, object, property);
      var _this = this;
      this.__input = document.createElement('input');
      this.__input.setAttribute('type', 'text');
      dom.bind(this.__input, 'keyup', onChange);
      dom.bind(this.__input, 'change', onChange);
      dom.bind(this.__input, 'blur', onBlur);
      dom.bind(this.__input, 'keydown', function(e) {
        if (e.keyCode === 13) {
          this.blur();
        }
      });
      function onChange() {
        _this.setValue(_this.__input.value);
      }
      function onBlur() {
        if (_this.__onFinishChange) {
          _this.__onFinishChange.call(_this, _this.getValue());
        }
      }
      this.updateDisplay();
      this.domElement.appendChild(this.__input);
    };
    StringController.superclass = Controller;
    common.extend(StringController.prototype, Controller.prototype, {updateDisplay: function() {
        if (!dom.isActive(this.__input)) {
          this.__input.value = this.getValue();
        }
        return StringController.superclass.prototype.updateDisplay.call(this);
      }});
    return StringController;
  })(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.controllers.FunctionController, dat.controllers.BooleanController, dat.utils.common), dat.controllers.Controller, dat.controllers.BooleanController, dat.controllers.FunctionController, dat.controllers.NumberControllerBox, dat.controllers.NumberControllerSlider, dat.controllers.OptionController, dat.controllers.ColorController = (function(Controller, dom, Color, interpret, common) {
    var ColorController = function(object, property) {
      ColorController.superclass.call(this, object, property);
      this.__color = new Color(this.getValue());
      this.__temp = new Color(0);
      var _this = this;
      this.domElement = document.createElement('div');
      dom.makeSelectable(this.domElement, false);
      this.__selector = document.createElement('div');
      this.__selector.className = 'selector';
      this.__saturation_field = document.createElement('div');
      this.__saturation_field.className = 'saturation-field';
      this.__field_knob = document.createElement('div');
      this.__field_knob.className = 'field-knob';
      this.__field_knob_border = '2px solid ';
      this.__hue_knob = document.createElement('div');
      this.__hue_knob.className = 'hue-knob';
      this.__hue_field = document.createElement('div');
      this.__hue_field.className = 'hue-field';
      this.__input = document.createElement('input');
      this.__input.type = 'text';
      this.__input_textShadow = '0 1px 1px ';
      dom.bind(this.__input, 'keydown', function(e) {
        if (e.keyCode === 13) {
          onBlur.call(this);
        }
      });
      dom.bind(this.__input, 'blur', onBlur);
      dom.bind(this.__selector, 'mousedown', function(e) {
        dom.addClass(this, 'drag').bind(window, 'mouseup', function(e) {
          dom.removeClass(_this.__selector, 'drag');
        });
      });
      var value_field = document.createElement('div');
      common.extend(this.__selector.style, {
        width: '122px',
        height: '102px',
        padding: '3px',
        backgroundColor: '#222',
        boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
      });
      common.extend(this.__field_knob.style, {
        position: 'absolute',
        width: '12px',
        height: '12px',
        border: this.__field_knob_border + (this.__color.v < .5 ? '#fff' : '#000'),
        boxShadow: '0px 1px 3px rgba(0,0,0,0.5)',
        borderRadius: '12px',
        zIndex: 1
      });
      common.extend(this.__hue_knob.style, {
        position: 'absolute',
        width: '15px',
        height: '2px',
        borderRight: '4px solid #fff',
        zIndex: 1
      });
      common.extend(this.__saturation_field.style, {
        width: '100px',
        height: '100px',
        border: '1px solid #555',
        marginRight: '3px',
        display: 'inline-block',
        cursor: 'pointer'
      });
      common.extend(value_field.style, {
        width: '100%',
        height: '100%',
        background: 'none'
      });
      linearGradient(value_field, 'top', 'rgba(0,0,0,0)', '#000');
      common.extend(this.__hue_field.style, {
        width: '15px',
        height: '100px',
        display: 'inline-block',
        border: '1px solid #555',
        cursor: 'ns-resize'
      });
      hueGradient(this.__hue_field);
      common.extend(this.__input.style, {
        outline: 'none',
        textAlign: 'center',
        color: '#fff',
        border: 0,
        fontWeight: 'bold',
        textShadow: this.__input_textShadow + 'rgba(0,0,0,0.7)'
      });
      dom.bind(this.__saturation_field, 'mousedown', fieldDown);
      dom.bind(this.__field_knob, 'mousedown', fieldDown);
      dom.bind(this.__hue_field, 'mousedown', function(e) {
        setH(e);
        dom.bind(window, 'mousemove', setH);
        dom.bind(window, 'mouseup', unbindH);
      });
      function fieldDown(e) {
        setSV(e);
        dom.bind(window, 'mousemove', setSV);
        dom.bind(window, 'mouseup', unbindSV);
      }
      function unbindSV() {
        dom.unbind(window, 'mousemove', setSV);
        dom.unbind(window, 'mouseup', unbindSV);
      }
      function onBlur() {
        var i = interpret(this.value);
        if (i !== false) {
          _this.__color.__state = i;
          _this.setValue(_this.__color.toOriginal());
        } else {
          this.value = _this.__color.toString();
        }
      }
      function unbindH() {
        dom.unbind(window, 'mousemove', setH);
        dom.unbind(window, 'mouseup', unbindH);
      }
      this.__saturation_field.appendChild(value_field);
      this.__selector.appendChild(this.__field_knob);
      this.__selector.appendChild(this.__saturation_field);
      this.__selector.appendChild(this.__hue_field);
      this.__hue_field.appendChild(this.__hue_knob);
      this.domElement.appendChild(this.__input);
      this.domElement.appendChild(this.__selector);
      this.updateDisplay();
      function setSV(e) {
        e.preventDefault();
        var w = dom.getWidth(_this.__saturation_field);
        var o = dom.getOffset(_this.__saturation_field);
        var s = (e.clientX - o.left + document.body.scrollLeft) / w;
        var v = 1 - (e.clientY - o.top + document.body.scrollTop) / w;
        if (v > 1)
          v = 1;
        else if (v < 0)
          v = 0;
        if (s > 1)
          s = 1;
        else if (s < 0)
          s = 0;
        _this.__color.v = v;
        _this.__color.s = s;
        _this.setValue(_this.__color.toOriginal());
        return false;
      }
      function setH(e) {
        e.preventDefault();
        var s = dom.getHeight(_this.__hue_field);
        var o = dom.getOffset(_this.__hue_field);
        var h = 1 - (e.clientY - o.top + document.body.scrollTop) / s;
        if (h > 1)
          h = 1;
        else if (h < 0)
          h = 0;
        _this.__color.h = h * 360;
        _this.setValue(_this.__color.toOriginal());
        return false;
      }
    };
    ColorController.superclass = Controller;
    common.extend(ColorController.prototype, Controller.prototype, {updateDisplay: function() {
        var i = interpret(this.getValue());
        if (i !== false) {
          var mismatch = false;
          common.each(Color.COMPONENTS, function(component) {
            if (!common.isUndefined(i[component]) && !common.isUndefined(this.__color.__state[component]) && i[component] !== this.__color.__state[component]) {
              mismatch = true;
              return {};
            }
          }, this);
          if (mismatch) {
            common.extend(this.__color.__state, i);
          }
        }
        common.extend(this.__temp.__state, this.__color.__state);
        this.__temp.a = 1;
        var flip = (this.__color.v < .5 || this.__color.s > .5) ? 255 : 0;
        var _flip = 255 - flip;
        common.extend(this.__field_knob.style, {
          marginLeft: 100 * this.__color.s - 7 + 'px',
          marginTop: 100 * (1 - this.__color.v) - 7 + 'px',
          backgroundColor: this.__temp.toString(),
          border: this.__field_knob_border + 'rgb(' + flip + ',' + flip + ',' + flip + ')'
        });
        this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + 'px';
        this.__temp.s = 1;
        this.__temp.v = 1;
        linearGradient(this.__saturation_field, 'left', '#fff', this.__temp.toString());
        common.extend(this.__input.style, {
          backgroundColor: this.__input.value = this.__color.toString(),
          color: 'rgb(' + flip + ',' + flip + ',' + flip + ')',
          textShadow: this.__input_textShadow + 'rgba(' + _flip + ',' + _flip + ',' + _flip + ',.7)'
        });
      }});
    var vendors = ['-moz-', '-o-', '-webkit-', '-ms-', ''];
    function linearGradient(elem, x, a, b) {
      elem.style.background = '';
      common.each(vendors, function(vendor) {
        elem.style.cssText += 'background: ' + vendor + 'linear-gradient(' + x + ', ' + a + ' 0%, ' + b + ' 100%); ';
      });
    }
    function hueGradient(elem) {
      elem.style.background = '';
      elem.style.cssText += 'background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);';
      elem.style.cssText += 'background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
      elem.style.cssText += 'background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
      elem.style.cssText += 'background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
      elem.style.cssText += 'background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
    }
    return ColorController;
  })(dat.controllers.Controller, dat.dom.dom, dat.color.Color = (function(interpret, math, toString, common) {
    var Color = function() {
      this.__state = interpret.apply(this, arguments);
      if (this.__state === false) {
        throw 'Failed to interpret color arguments';
      }
      this.__state.a = this.__state.a || 1;
    };
    Color.COMPONENTS = ['r', 'g', 'b', 'h', 's', 'v', 'hex', 'a'];
    common.extend(Color.prototype, {
      toString: function() {
        return toString(this);
      },
      toOriginal: function() {
        return this.__state.conversion.write(this);
      }
    });
    defineRGBComponent(Color.prototype, 'r', 2);
    defineRGBComponent(Color.prototype, 'g', 1);
    defineRGBComponent(Color.prototype, 'b', 0);
    defineHSVComponent(Color.prototype, 'h');
    defineHSVComponent(Color.prototype, 's');
    defineHSVComponent(Color.prototype, 'v');
    Object.defineProperty(Color.prototype, 'a', {
      get: function() {
        return this.__state.a;
      },
      set: function(v) {
        this.__state.a = v;
      }
    });
    Object.defineProperty(Color.prototype, 'hex', {
      get: function() {
        if (!this.__state.space !== 'HEX') {
          this.__state.hex = math.rgb_to_hex(this.r, this.g, this.b);
        }
        return this.__state.hex;
      },
      set: function(v) {
        this.__state.space = 'HEX';
        this.__state.hex = v;
      }
    });
    function defineRGBComponent(target, component, componentHexIndex) {
      Object.defineProperty(target, component, {
        get: function() {
          if (this.__state.space === 'RGB') {
            return this.__state[component];
          }
          recalculateRGB(this, component, componentHexIndex);
          return this.__state[component];
        },
        set: function(v) {
          if (this.__state.space !== 'RGB') {
            recalculateRGB(this, component, componentHexIndex);
            this.__state.space = 'RGB';
          }
          this.__state[component] = v;
        }
      });
    }
    function defineHSVComponent(target, component) {
      Object.defineProperty(target, component, {
        get: function() {
          if (this.__state.space === 'HSV')
            return this.__state[component];
          recalculateHSV(this);
          return this.__state[component];
        },
        set: function(v) {
          if (this.__state.space !== 'HSV') {
            recalculateHSV(this);
            this.__state.space = 'HSV';
          }
          this.__state[component] = v;
        }
      });
    }
    function recalculateRGB(color, component, componentHexIndex) {
      if (color.__state.space === 'HEX') {
        color.__state[component] = math.component_from_hex(color.__state.hex, componentHexIndex);
      } else if (color.__state.space === 'HSV') {
        common.extend(color.__state, math.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));
      } else {
        throw 'Corrupted color state';
      }
    }
    function recalculateHSV(color) {
      var result = math.rgb_to_hsv(color.r, color.g, color.b);
      common.extend(color.__state, {
        s: result.s,
        v: result.v
      });
      if (!common.isNaN(result.h)) {
        color.__state.h = result.h;
      } else if (common.isUndefined(color.__state.h)) {
        color.__state.h = 0;
      }
    }
    return Color;
  })(dat.color.interpret, dat.color.math = (function() {
    var tmpComponent;
    return {
      hsv_to_rgb: function(h, s, v) {
        var hi = Math.floor(h / 60) % 6;
        var f = h / 60 - Math.floor(h / 60);
        var p = v * (1.0 - s);
        var q = v * (1.0 - (f * s));
        var t = v * (1.0 - ((1.0 - f) * s));
        var c = [[v, t, p], [q, v, p], [p, v, t], [p, q, v], [t, p, v], [v, p, q]][hi];
        return {
          r: c[0] * 255,
          g: c[1] * 255,
          b: c[2] * 255
        };
      },
      rgb_to_hsv: function(r, g, b) {
        var min = Math.min(r, g, b),
            max = Math.max(r, g, b),
            delta = max - min,
            h,
            s;
        if (max != 0) {
          s = delta / max;
        } else {
          return {
            h: NaN,
            s: 0,
            v: 0
          };
        }
        if (r == max) {
          h = (g - b) / delta;
        } else if (g == max) {
          h = 2 + (b - r) / delta;
        } else {
          h = 4 + (r - g) / delta;
        }
        h /= 6;
        if (h < 0) {
          h += 1;
        }
        return {
          h: h * 360,
          s: s,
          v: max / 255
        };
      },
      rgb_to_hex: function(r, g, b) {
        var hex = this.hex_with_component(0, 2, r);
        hex = this.hex_with_component(hex, 1, g);
        hex = this.hex_with_component(hex, 0, b);
        return hex;
      },
      component_from_hex: function(hex, componentIndex) {
        return (hex >> (componentIndex * 8)) & 0xFF;
      },
      hex_with_component: function(hex, componentIndex, value) {
        return value << (tmpComponent = componentIndex * 8) | (hex & ~(0xFF << tmpComponent));
      }
    };
  })(), dat.color.toString, dat.utils.common), dat.color.interpret, dat.utils.common), dat.utils.requestAnimationFrame = (function() {
    return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback, element) {
      window.setTimeout(callback, 1000 / 60);
    };
  })(), dat.dom.CenteredDiv = (function(dom, common) {
    var CenteredDiv = function() {
      this.backgroundElement = document.createElement('div');
      common.extend(this.backgroundElement.style, {
        backgroundColor: 'rgba(0,0,0,0.8)',
        top: 0,
        left: 0,
        display: 'none',
        zIndex: '1000',
        opacity: 0,
        WebkitTransition: 'opacity 0.2s linear'
      });
      dom.makeFullscreen(this.backgroundElement);
      this.backgroundElement.style.position = 'fixed';
      this.domElement = document.createElement('div');
      common.extend(this.domElement.style, {
        position: 'fixed',
        display: 'none',
        zIndex: '1001',
        opacity: 0,
        WebkitTransition: '-webkit-transform 0.2s ease-out, opacity 0.2s linear'
      });
      document.body.appendChild(this.backgroundElement);
      document.body.appendChild(this.domElement);
      var _this = this;
      dom.bind(this.backgroundElement, 'click', function() {
        _this.hide();
      });
    };
    CenteredDiv.prototype.show = function() {
      var _this = this;
      this.backgroundElement.style.display = 'block';
      this.domElement.style.display = 'block';
      this.domElement.style.opacity = 0;
      this.domElement.style.webkitTransform = 'scale(1.1)';
      this.layout();
      common.defer(function() {
        _this.backgroundElement.style.opacity = 1;
        _this.domElement.style.opacity = 1;
        _this.domElement.style.webkitTransform = 'scale(1)';
      });
    };
    CenteredDiv.prototype.hide = function() {
      var _this = this;
      var hide = function() {
        _this.domElement.style.display = 'none';
        _this.backgroundElement.style.display = 'none';
        dom.unbind(_this.domElement, 'webkitTransitionEnd', hide);
        dom.unbind(_this.domElement, 'transitionend', hide);
        dom.unbind(_this.domElement, 'oTransitionEnd', hide);
      };
      dom.bind(this.domElement, 'webkitTransitionEnd', hide);
      dom.bind(this.domElement, 'transitionend', hide);
      dom.bind(this.domElement, 'oTransitionEnd', hide);
      this.backgroundElement.style.opacity = 0;
      this.domElement.style.opacity = 0;
      this.domElement.style.webkitTransform = 'scale(1.1)';
    };
    CenteredDiv.prototype.layout = function() {
      this.domElement.style.left = window.innerWidth / 2 - dom.getWidth(this.domElement) / 2 + 'px';
      this.domElement.style.top = window.innerHeight / 2 - dom.getHeight(this.domElement) / 2 + 'px';
    };
    function lockScroll(e) {
      console.log(e);
    }
    return CenteredDiv;
  })(dat.dom.dom, dat.utils.common), dat.dom.dom, dat.utils.common);
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var dat = module.exports = dat || {};
  dat.color = dat.color || {};
  dat.utils = dat.utils || {};
  dat.utils.common = (function() {
    var ARR_EACH = Array.prototype.forEach;
    var ARR_SLICE = Array.prototype.slice;
    return {
      BREAK: {},
      extend: function(target) {
        this.each(ARR_SLICE.call(arguments, 1), function(obj) {
          for (var key in obj)
            if (!this.isUndefined(obj[key]))
              target[key] = obj[key];
        }, this);
        return target;
      },
      defaults: function(target) {
        this.each(ARR_SLICE.call(arguments, 1), function(obj) {
          for (var key in obj)
            if (this.isUndefined(target[key]))
              target[key] = obj[key];
        }, this);
        return target;
      },
      compose: function() {
        var toCall = ARR_SLICE.call(arguments);
        return function() {
          var args = ARR_SLICE.call(arguments);
          for (var i = toCall.length - 1; i >= 0; i--) {
            args = [toCall[i].apply(this, args)];
          }
          return args[0];
        };
      },
      each: function(obj, itr, scope) {
        if (ARR_EACH && obj.forEach === ARR_EACH) {
          obj.forEach(itr, scope);
        } else if (obj.length === obj.length + 0) {
          for (var key = 0,
              l = obj.length; key < l; key++)
            if (key in obj && itr.call(scope, obj[key], key) === this.BREAK)
              return;
        } else {
          for (var key in obj)
            if (itr.call(scope, obj[key], key) === this.BREAK)
              return;
        }
      },
      defer: function(fnc) {
        setTimeout(fnc, 0);
      },
      toArray: function(obj) {
        if (obj.toArray)
          return obj.toArray();
        return ARR_SLICE.call(obj);
      },
      isUndefined: function(obj) {
        return obj === undefined;
      },
      isNull: function(obj) {
        return obj === null;
      },
      isNaN: function(obj) {
        return obj !== obj;
      },
      isArray: Array.isArray || function(obj) {
        return obj.constructor === Array;
      },
      isObject: function(obj) {
        return obj === Object(obj);
      },
      isNumber: function(obj) {
        return obj === obj + 0;
      },
      isString: function(obj) {
        return obj === obj + '';
      },
      isBoolean: function(obj) {
        return obj === false || obj === true;
      },
      isFunction: function(obj) {
        return Object.prototype.toString.call(obj) === '[object Function]';
      }
    };
  })();
  dat.color.toString = (function(common) {
    return function(color) {
      if (color.a == 1 || common.isUndefined(color.a)) {
        var s = color.hex.toString(16);
        while (s.length < 6) {
          s = '0' + s;
        }
        return '#' + s;
      } else {
        return 'rgba(' + Math.round(color.r) + ',' + Math.round(color.g) + ',' + Math.round(color.b) + ',' + color.a + ')';
      }
    };
  })(dat.utils.common);
  dat.Color = dat.color.Color = (function(interpret, math, toString, common) {
    var Color = function() {
      this.__state = interpret.apply(this, arguments);
      if (this.__state === false) {
        throw 'Failed to interpret color arguments';
      }
      this.__state.a = this.__state.a || 1;
    };
    Color.COMPONENTS = ['r', 'g', 'b', 'h', 's', 'v', 'hex', 'a'];
    common.extend(Color.prototype, {
      toString: function() {
        return toString(this);
      },
      toOriginal: function() {
        return this.__state.conversion.write(this);
      }
    });
    defineRGBComponent(Color.prototype, 'r', 2);
    defineRGBComponent(Color.prototype, 'g', 1);
    defineRGBComponent(Color.prototype, 'b', 0);
    defineHSVComponent(Color.prototype, 'h');
    defineHSVComponent(Color.prototype, 's');
    defineHSVComponent(Color.prototype, 'v');
    Object.defineProperty(Color.prototype, 'a', {
      get: function() {
        return this.__state.a;
      },
      set: function(v) {
        this.__state.a = v;
      }
    });
    Object.defineProperty(Color.prototype, 'hex', {
      get: function() {
        if (!this.__state.space !== 'HEX') {
          this.__state.hex = math.rgb_to_hex(this.r, this.g, this.b);
        }
        return this.__state.hex;
      },
      set: function(v) {
        this.__state.space = 'HEX';
        this.__state.hex = v;
      }
    });
    function defineRGBComponent(target, component, componentHexIndex) {
      Object.defineProperty(target, component, {
        get: function() {
          if (this.__state.space === 'RGB') {
            return this.__state[component];
          }
          recalculateRGB(this, component, componentHexIndex);
          return this.__state[component];
        },
        set: function(v) {
          if (this.__state.space !== 'RGB') {
            recalculateRGB(this, component, componentHexIndex);
            this.__state.space = 'RGB';
          }
          this.__state[component] = v;
        }
      });
    }
    function defineHSVComponent(target, component) {
      Object.defineProperty(target, component, {
        get: function() {
          if (this.__state.space === 'HSV')
            return this.__state[component];
          recalculateHSV(this);
          return this.__state[component];
        },
        set: function(v) {
          if (this.__state.space !== 'HSV') {
            recalculateHSV(this);
            this.__state.space = 'HSV';
          }
          this.__state[component] = v;
        }
      });
    }
    function recalculateRGB(color, component, componentHexIndex) {
      if (color.__state.space === 'HEX') {
        color.__state[component] = math.component_from_hex(color.__state.hex, componentHexIndex);
      } else if (color.__state.space === 'HSV') {
        common.extend(color.__state, math.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));
      } else {
        throw 'Corrupted color state';
      }
    }
    function recalculateHSV(color) {
      var result = math.rgb_to_hsv(color.r, color.g, color.b);
      common.extend(color.__state, {
        s: result.s,
        v: result.v
      });
      if (!common.isNaN(result.h)) {
        color.__state.h = result.h;
      } else if (common.isUndefined(color.__state.h)) {
        color.__state.h = 0;
      }
    }
    return Color;
  })(dat.color.interpret = (function(toString, common) {
    var result,
        toReturn;
    var interpret = function() {
      toReturn = false;
      var original = arguments.length > 1 ? common.toArray(arguments) : arguments[0];
      common.each(INTERPRETATIONS, function(family) {
        if (family.litmus(original)) {
          common.each(family.conversions, function(conversion, conversionName) {
            result = conversion.read(original);
            if (toReturn === false && result !== false) {
              toReturn = result;
              result.conversionName = conversionName;
              result.conversion = conversion;
              return common.BREAK;
            }
          });
          return common.BREAK;
        }
      });
      return toReturn;
    };
    var INTERPRETATIONS = [{
      litmus: common.isString,
      conversions: {
        THREE_CHAR_HEX: {
          read: function(original) {
            var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
            if (test === null)
              return false;
            return {
              space: 'HEX',
              hex: parseInt('0x' + test[1].toString() + test[1].toString() + test[2].toString() + test[2].toString() + test[3].toString() + test[3].toString())
            };
          },
          write: toString
        },
        SIX_CHAR_HEX: {
          read: function(original) {
            var test = original.match(/^#([A-F0-9]{6})$/i);
            if (test === null)
              return false;
            return {
              space: 'HEX',
              hex: parseInt('0x' + test[1].toString())
            };
          },
          write: toString
        },
        CSS_RGB: {
          read: function(original) {
            var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
            if (test === null)
              return false;
            return {
              space: 'RGB',
              r: parseFloat(test[1]),
              g: parseFloat(test[2]),
              b: parseFloat(test[3])
            };
          },
          write: toString
        },
        CSS_RGBA: {
          read: function(original) {
            var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
            if (test === null)
              return false;
            return {
              space: 'RGB',
              r: parseFloat(test[1]),
              g: parseFloat(test[2]),
              b: parseFloat(test[3]),
              a: parseFloat(test[4])
            };
          },
          write: toString
        }
      }
    }, {
      litmus: common.isNumber,
      conversions: {HEX: {
          read: function(original) {
            return {
              space: 'HEX',
              hex: original,
              conversionName: 'HEX'
            };
          },
          write: function(color) {
            return color.hex;
          }
        }}
    }, {
      litmus: common.isArray,
      conversions: {
        RGB_ARRAY: {
          read: function(original) {
            if (original.length != 3)
              return false;
            return {
              space: 'RGB',
              r: original[0],
              g: original[1],
              b: original[2]
            };
          },
          write: function(color) {
            return [color.r, color.g, color.b];
          }
        },
        RGBA_ARRAY: {
          read: function(original) {
            if (original.length != 4)
              return false;
            return {
              space: 'RGB',
              r: original[0],
              g: original[1],
              b: original[2],
              a: original[3]
            };
          },
          write: function(color) {
            return [color.r, color.g, color.b, color.a];
          }
        }
      }
    }, {
      litmus: common.isObject,
      conversions: {
        RGBA_OBJ: {
          read: function(original) {
            if (common.isNumber(original.r) && common.isNumber(original.g) && common.isNumber(original.b) && common.isNumber(original.a)) {
              return {
                space: 'RGB',
                r: original.r,
                g: original.g,
                b: original.b,
                a: original.a
              };
            }
            return false;
          },
          write: function(color) {
            return {
              r: color.r,
              g: color.g,
              b: color.b,
              a: color.a
            };
          }
        },
        RGB_OBJ: {
          read: function(original) {
            if (common.isNumber(original.r) && common.isNumber(original.g) && common.isNumber(original.b)) {
              return {
                space: 'RGB',
                r: original.r,
                g: original.g,
                b: original.b
              };
            }
            return false;
          },
          write: function(color) {
            return {
              r: color.r,
              g: color.g,
              b: color.b
            };
          }
        },
        HSVA_OBJ: {
          read: function(original) {
            if (common.isNumber(original.h) && common.isNumber(original.s) && common.isNumber(original.v) && common.isNumber(original.a)) {
              return {
                space: 'HSV',
                h: original.h,
                s: original.s,
                v: original.v,
                a: original.a
              };
            }
            return false;
          },
          write: function(color) {
            return {
              h: color.h,
              s: color.s,
              v: color.v,
              a: color.a
            };
          }
        },
        HSV_OBJ: {
          read: function(original) {
            if (common.isNumber(original.h) && common.isNumber(original.s) && common.isNumber(original.v)) {
              return {
                space: 'HSV',
                h: original.h,
                s: original.s,
                v: original.v
              };
            }
            return false;
          },
          write: function(color) {
            return {
              h: color.h,
              s: color.s,
              v: color.v
            };
          }
        }
      }
    }];
    return interpret;
  })(dat.color.toString, dat.utils.common), dat.color.math = (function() {
    var tmpComponent;
    return {
      hsv_to_rgb: function(h, s, v) {
        var hi = Math.floor(h / 60) % 6;
        var f = h / 60 - Math.floor(h / 60);
        var p = v * (1.0 - s);
        var q = v * (1.0 - (f * s));
        var t = v * (1.0 - ((1.0 - f) * s));
        var c = [[v, t, p], [q, v, p], [p, v, t], [p, q, v], [t, p, v], [v, p, q]][hi];
        return {
          r: c[0] * 255,
          g: c[1] * 255,
          b: c[2] * 255
        };
      },
      rgb_to_hsv: function(r, g, b) {
        var min = Math.min(r, g, b),
            max = Math.max(r, g, b),
            delta = max - min,
            h,
            s;
        if (max != 0) {
          s = delta / max;
        } else {
          return {
            h: NaN,
            s: 0,
            v: 0
          };
        }
        if (r == max) {
          h = (g - b) / delta;
        } else if (g == max) {
          h = 2 + (b - r) / delta;
        } else {
          h = 4 + (r - g) / delta;
        }
        h /= 6;
        if (h < 0) {
          h += 1;
        }
        return {
          h: h * 360,
          s: s,
          v: max / 255
        };
      },
      rgb_to_hex: function(r, g, b) {
        var hex = this.hex_with_component(0, 2, r);
        hex = this.hex_with_component(hex, 1, g);
        hex = this.hex_with_component(hex, 0, b);
        return hex;
      },
      component_from_hex: function(hex, componentIndex) {
        return (hex >> (componentIndex * 8)) & 0xFF;
      },
      hex_with_component: function(hex, componentIndex, value) {
        return value << (tmpComponent = componentIndex * 8) | (hex & ~(0xFF << tmpComponent));
      }
    };
  })(), dat.color.toString, dat.utils.common);
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4", ["2", "3"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('2');
  module.exports.color = $__require('3');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5", ["4"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('4');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("6", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  class Connector {
    constructor() {
      this.onconnect = () => {};
      this.onerror = () => {};
      let _this = this;
      this.callbacks = {
        connect(ws, token) {
          _this.onconnect(ws, token);
        },
        error() {
          _this.onerror();
        }
      };
    }
    findFfa(region) {
      findByRegion(region, this.callbacks);
    }
    findParty(region) {
      this.findFfa(region + ':party');
    }
    connectParty(token) {
      findByPartyToken(token, this.callbacks);
    }
    directConnect(ws, token) {
      this.callbacks.connect({
        ws,
        token
      });
    }
  }
  function findByRegion(region, callbacks) {
    let req = new XMLHttpRequest();
    req.open('POST', 'http://m.agar.io');
    req.send(region);
    req.addEventListener('load', () => {
      if (req.status == 200) {
        let s = req.responseText.split('\n');
        if (s[0] === '0.0.0.0:0')
          callbacks.error();
        else
          callbacks.connect(s[0], s[1]);
      } else
        callbacks.error();
    });
  }
  function findByPartyToken(partyToken, callbacks) {
    let req = new XMLHttpRequest();
    req.open('POST', 'http://m.agar.io/getToken');
    req.send(partyToken);
    req.addEventListener('load', () => {
      if (req.status === 200)
        callbacks.connect(req.responseText.split('\n')[0], partyToken);
      else
        callbacks.error();
    });
  }
  module.exports = Connector;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("7", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {DEFAULT_NICKNAME: 'snsa.github.io'};
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("8", ["9"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('9');
  module.exports = function defineProperties(T, D) {
    return $.setDescs(T, D);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a", ["8"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('8'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

$__System.register('b', ['d', 'e', 'c'], function (_export) {
  var _createClass, _classCallCheck, Buffer, Packet;

  return {
    setters: [function (_d) {
      _createClass = _d['default'];
    }, function (_e) {
      _classCallCheck = _e['default'];
    }, function (_c) {
      Buffer = _c.Buffer;
    }],
    execute: function () {
      'use strict';

      Packet = (function () {
        function Packet(e) {
          _classCallCheck(this, Packet);

          if (e instanceof Buffer) {
            this.data = e;
            this.length = this.data.length;
          } else if (typeof Buffer != 'undefined' && e.data instanceof Buffer) {
            this.data = e.data;
            this.length = this.data.length;
          } else {
            this.data = new DataView(e.data);
            this.length = this.data.byteLength;
          }

          this.offset = 0;
        }

        _createClass(Packet, [{
          key: 'readUInt8',
          value: function readUInt8(p) {
            var offset = typeof p == 'number' ? p : this.offset;
            var ret;
            if (this.data.getUint8) {
              ret = this.data.getUint8(offset);
            } else {
              ret = this.data.readUInt8(offset);
            }
            if (p === undefined) this.offset += 1;

            return ret;
          }
        }, {
          key: 'readUInt16BE',
          value: function readUInt16BE(p) {
            var offset = typeof p == 'number' ? p : this.offset;
            var ret;
            if (this.data.getUint16) {
              ret = this.data.getUint16(offset, false);
            } else {
              ret = this.data.readUInt16BE(offset);
            }
            if (p === undefined) this.offset += 2;

            return ret;
          }
        }, {
          key: 'readUInt16LE',
          value: function readUInt16LE(p) {
            var offset = typeof p == 'number' ? p : this.offset;
            var ret;
            if (this.data.getUint16) {
              ret = this.data.getUint16(offset, true);
            } else {
              ret = this.data.readUInt16LE(offset);
            }
            if (p === undefined) this.offset += 2;

            return ret;
          }
        }, {
          key: 'readSInt16LE',
          value: function readSInt16LE(p) {
            var offset = typeof p == 'number' ? p : this.offset;
            var ret;
            if (this.data.getInt16) {
              ret = this.data.getInt16(offset, true);
            } else {
              ret = this.data.readInt16LE(offset);
            }
            if (p === undefined) this.offset += 2;

            return ret;
          }
        }, {
          key: 'readUInt32LE',
          value: function readUInt32LE(p) {
            var offset = typeof p == 'number' ? p : this.offset;
            var ret;
            if (this.data.getUint32) {
              ret = this.data.getUint32(offset, true);
            } else {
              ret = this.data.readUInt32LE(offset);
            }
            if (p === undefined) this.offset += 4;

            return ret;
          }
        }, {
          key: 'readUInt32BE',
          value: function readUInt32BE(p) {
            var offset = typeof p == 'number' ? p : this.offset;
            var ret;
            if (this.data.getUint32) {
              ret = this.data.getUint32(offset, false);
            } else {
              ret = this.data.readUInt32BE(offset);
            }
            if (p === undefined) this.offset += 4;

            return ret;
          }
        }, {
          key: 'readSInt32LE',
          value: function readSInt32LE(p) {
            var offset = typeof p == 'number' ? p : this.offset;
            var ret;
            if (this.data.getInt32) {
              ret = this.data.getInt32(offset, true);
            } else {
              ret = this.data.readInt32LE(offset);
            }
            if (p === undefined) this.offset += 4;

            return ret;
          }
        }, {
          key: 'readSInt32BE',
          value: function readSInt32BE(p) {
            var offset = typeof p == 'number' ? p : this.offset;
            var ret;
            if (this.data.getInt32) {
              ret = this.data.getInt32(offset, false);
            } else {
              ret = this.data.readInt32BE(offset);
            }
            if (p === undefined) this.offset += 4;

            return ret;
          }
        }, {
          key: 'readFloat32LE',
          value: function readFloat32LE(p) {
            var offset = typeof p == 'number' ? p : this.offset;
            var ret;
            if (this.data.getFloat32) {
              ret = this.data.getFloat32(offset, true);
            } else {
              ret = this.data.readFloatLE(offset);
            }
            if (p === undefined) this.offset += 4;

            return ret;
          }
        }, {
          key: 'readFloat32BE',
          value: function readFloat32BE(p) {
            var offset = typeof p == 'number' ? p : this.offset;
            var ret;
            if (this.data.getFloat32) {
              ret = this.data.getFloat32(offset, false);
            } else {
              ret = this.data.readFloatBE(offset);
            }
            if (p === undefined) this.offset += 4;

            return ret;
          }
        }, {
          key: 'readFloat64LE',
          value: function readFloat64LE(p) {
            var offset = typeof p == 'number' ? p : this.offset;
            var ret;
            if (this.data.getFloat64) {
              ret = this.data.getFloat64(offset, true);
            } else {
              ret = this.data.readDoubleLE(offset);
            }
            if (p === undefined) this.offset += 8;

            return ret;
          }
        }, {
          key: 'readFloat64BE',
          value: function readFloat64BE(p) {
            var offset = typeof p == 'number' ? p : this.offset;
            var ret;
            if (this.data.getFloat64) {
              ret = this.data.getFloat64(offset, false);
            } else {
              ret = this.data.readDoubleBE(offset);
            }
            if (p === undefined) this.offset += 8;

            return ret;
          }
        }, {
          key: 'toString',
          value: function toString() {
            var out = '';
            for (var i = 0; i < this.length; i++) {
              if (out) out += ' ';
              var char = this.readUInt8(i).toString(16);
              if (char.length == 1) out += '0';
              out += char;
            }

            return out;
          }
        }]);

        return Packet;
      })();

      _export('default', Packet);
    }
  };
});
$__System.register('f', ['10'], function (_export) {
  'use strict';

  var http, servers;
  return {
    setters: [function (_) {
      http = _;
    }],
    execute: function () {
      servers = {
        init_key: 2200049715, //used in initial packet id 255 and POST requests, hardcoded in client

        resolveDomainName: function resolveDomainName(domain, post_opt, cb) {
          return cb({
            error: 'LOOKUP_FAIL',
            error_source: 'not support'
          });
        },

        postRequest: function postRequest(opt, cb) {
          var ret = {
            error: null,
            error_source: null,
            res: null,
            data: null,
            server: null,
            key: null
          };

          var options = {
            host: opt.ip || 'm.agar.io',
            port: 80,
            path: opt.url || '/',
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Content-Length': opt.data.length,
              Origin: 'http://agar.io',
              Referer: 'http://agar.io/',
              Host: 'm.agar.io'
            }
          };
          if (opt.agent) options.agent = opt.agent;
          if (opt.local_address) options.localAddress = opt.local_address;

          var req = http.request(options, function (res) {
            var server = '';

            res.setEncoding('utf8');
            res.on('data', function (chunk) {
              server += chunk;
            });
            res.on('end', function () {
              var data = server.split('\n');

              if (res.statusCode != 200) {
                ret.error = 'WRONG_HTTP_CODE';
                ret.res = res;
                ret.data = server;
              } else if (!data[opt.res_data_index === undefined ? 1 : opt.res_data_index]) {
                ret.error = 'WRONG_DATA_FORMAT';
                ret.res = res;
                ret.data = server;
              } else {
                ret.res = res;
                ret.data = server;
                ret.server = data[0];
                ret.key = data[1];
              }

              cb(ret);
            });
          });

          req.on('error', function (e) {
            ret.error = 'REQUEST_ERROR';
            ret.error_source = e;
            return cb(ret);
          });

          req.write(opt.data);
          req.end();
        },

        getFFAServer: function getFFAServer(opt, cb) {
          if (!opt) opt = {};
          var region = opt.region || 'EU-London';
          var post_opt = {
            data: region + '\n' + servers.init_key,
            agent: opt.agent,
            ip: opt.ip,
            resolve: opt.resolve
          };

          servers.postRequest(post_opt, cb);
        },

        getTeamsServer: function getTeamsServer(opt, cb) {
          if (!opt) opt = {};
          var region = opt.region || 'EU-London';
          var post_opt = {
            data: region + ':teams\n' + servers.init_key,
            agent: opt.agent,
            ip: opt.ip,
            resolve: opt.resolve
          };
          servers.postRequest(post_opt, cb);
        },

        getExperimentalServer: function getExperimentalServer(opt, cb) {
          if (!opt) opt = {};
          var region = opt.region || 'EU-London';
          var post_opt = {
            data: region + ':experimental\n' + servers.init_key,
            agent: opt.agent,
            ip: opt.ip,
            resolve: opt.resolve
          };
          if (!opt.ip && opt.resolve) {
            servers.resolveDomainName('m.agar.io', post_opt, cb);
          } else {
            servers.postRequest(post_opt, cb);
          }
        },

        createParty: function createParty(opt, cb) {
          if (!opt) opt = {};
          var region = opt.region || 'EU-London';
          var post_opt = {
            data: region + ':party\n' + servers.init_key,
            agent: opt.agent,
            ip: opt.ip,
            resolve: opt.resolve
          };
          if (!opt.ip && opt.resolve) {
            servers.resolveDomainName('m.agar.io', post_opt, cb);
          } else {
            servers.postRequest(post_opt, cb);
          }
        },

        getPartyServer: function getPartyServer(opt, cb) {
          if (!opt.party_key) throw new Error('getPartyServer wants opt.party_key');
          var party_key = opt.party_key.indexOf('#') >= 0 ? opt.party_key.substr(opt.party_key.indexOf('#') + 1) : opt.party_key;
          var post_opt = {
            url: '/getToken',
            data: party_key,
            res_data_index: 0,
            agent: opt.agent,
            ip: opt.ip,
            resolve: opt.resolve
          };
          servers.postRequest(post_opt, function (res) {
            if (!res.server) return cb(res);
            res.key = party_key;
            cb(res);
          });
        }
      };

      _export('default', servers);
    }
  };
});
$__System.registerDynamic("11", ["12", "17", "13", "14", "15", "16"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports = module.exports = $__require('12');
  exports.Stream = $__require('17');
  exports.Readable = exports;
  exports.Writable = $__require('13');
  exports.Duplex = $__require('14');
  exports.Transform = $__require('15');
  exports.PassThrough = $__require('16');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("18", ["13"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('13');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("19", ["14"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('14');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1a", ["15"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('15');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1b", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = Array.isArray || function(arr) {
    return Object.prototype.toString.call(arr) == '[object Array]';
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1c", ["1b"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('1b');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1d", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function EventEmitter() {
    this._events = this._events || {};
    this._maxListeners = this._maxListeners || undefined;
  }
  module.exports = EventEmitter;
  EventEmitter.EventEmitter = EventEmitter;
  EventEmitter.prototype._events = undefined;
  EventEmitter.prototype._maxListeners = undefined;
  EventEmitter.defaultMaxListeners = 10;
  EventEmitter.prototype.setMaxListeners = function(n) {
    if (!isNumber(n) || n < 0 || isNaN(n))
      throw TypeError('n must be a positive number');
    this._maxListeners = n;
    return this;
  };
  EventEmitter.prototype.emit = function(type) {
    var er,
        handler,
        len,
        args,
        i,
        listeners;
    if (!this._events)
      this._events = {};
    if (type === 'error') {
      if (!this._events.error || (isObject(this._events.error) && !this._events.error.length)) {
        er = arguments[1];
        if (er instanceof Error) {
          throw er;
        }
        throw TypeError('Uncaught, unspecified "error" event.');
      }
    }
    handler = this._events[type];
    if (isUndefined(handler))
      return false;
    if (isFunction(handler)) {
      switch (arguments.length) {
        case 1:
          handler.call(this);
          break;
        case 2:
          handler.call(this, arguments[1]);
          break;
        case 3:
          handler.call(this, arguments[1], arguments[2]);
          break;
        default:
          len = arguments.length;
          args = new Array(len - 1);
          for (i = 1; i < len; i++)
            args[i - 1] = arguments[i];
          handler.apply(this, args);
      }
    } else if (isObject(handler)) {
      len = arguments.length;
      args = new Array(len - 1);
      for (i = 1; i < len; i++)
        args[i - 1] = arguments[i];
      listeners = handler.slice();
      len = listeners.length;
      for (i = 0; i < len; i++)
        listeners[i].apply(this, args);
    }
    return true;
  };
  EventEmitter.prototype.addListener = function(type, listener) {
    var m;
    if (!isFunction(listener))
      throw TypeError('listener must be a function');
    if (!this._events)
      this._events = {};
    if (this._events.newListener)
      this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
    if (!this._events[type])
      this._events[type] = listener;
    else if (isObject(this._events[type]))
      this._events[type].push(listener);
    else
      this._events[type] = [this._events[type], listener];
    if (isObject(this._events[type]) && !this._events[type].warned) {
      var m;
      if (!isUndefined(this._maxListeners)) {
        m = this._maxListeners;
      } else {
        m = EventEmitter.defaultMaxListeners;
      }
      if (m && m > 0 && this._events[type].length > m) {
        this._events[type].warned = true;
        console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
        if (typeof console.trace === 'function') {
          console.trace();
        }
      }
    }
    return this;
  };
  EventEmitter.prototype.on = EventEmitter.prototype.addListener;
  EventEmitter.prototype.once = function(type, listener) {
    if (!isFunction(listener))
      throw TypeError('listener must be a function');
    var fired = false;
    function g() {
      this.removeListener(type, g);
      if (!fired) {
        fired = true;
        listener.apply(this, arguments);
      }
    }
    g.listener = listener;
    this.on(type, g);
    return this;
  };
  EventEmitter.prototype.removeListener = function(type, listener) {
    var list,
        position,
        length,
        i;
    if (!isFunction(listener))
      throw TypeError('listener must be a function');
    if (!this._events || !this._events[type])
      return this;
    list = this._events[type];
    length = list.length;
    position = -1;
    if (list === listener || (isFunction(list.listener) && list.listener === listener)) {
      delete this._events[type];
      if (this._events.removeListener)
        this.emit('removeListener', type, listener);
    } else if (isObject(list)) {
      for (i = length; i-- > 0; ) {
        if (list[i] === listener || (list[i].listener && list[i].listener === listener)) {
          position = i;
          break;
        }
      }
      if (position < 0)
        return this;
      if (list.length === 1) {
        list.length = 0;
        delete this._events[type];
      } else {
        list.splice(position, 1);
      }
      if (this._events.removeListener)
        this.emit('removeListener', type, listener);
    }
    return this;
  };
  EventEmitter.prototype.removeAllListeners = function(type) {
    var key,
        listeners;
    if (!this._events)
      return this;
    if (!this._events.removeListener) {
      if (arguments.length === 0)
        this._events = {};
      else if (this._events[type])
        delete this._events[type];
      return this;
    }
    if (arguments.length === 0) {
      for (key in this._events) {
        if (key === 'removeListener')
          continue;
        this.removeAllListeners(key);
      }
      this.removeAllListeners('removeListener');
      this._events = {};
      return this;
    }
    listeners = this._events[type];
    if (isFunction(listeners)) {
      this.removeListener(type, listeners);
    } else {
      while (listeners.length)
        this.removeListener(type, listeners[listeners.length - 1]);
    }
    delete this._events[type];
    return this;
  };
  EventEmitter.prototype.listeners = function(type) {
    var ret;
    if (!this._events || !this._events[type])
      ret = [];
    else if (isFunction(this._events[type]))
      ret = [this._events[type]];
    else
      ret = this._events[type].slice();
    return ret;
  };
  EventEmitter.listenerCount = function(emitter, type) {
    var ret;
    if (!emitter._events || !emitter._events[type])
      ret = 0;
    else if (isFunction(emitter._events[type]))
      ret = 1;
    else
      ret = emitter._events[type].length;
    return ret;
  };
  function isFunction(arg) {
    return typeof arg === 'function';
  }
  function isNumber(arg) {
    return typeof arg === 'number';
  }
  function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  }
  function isUndefined(arg) {
    return arg === void 0;
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1e", ["1d"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('1d');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1f", ["1e"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__System._nodeRequire ? $__System._nodeRequire('events') : $__require('1e');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("20", ["1f"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('1f');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("21", ["c"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(Buffer) {
    var Buffer = $__require('c').Buffer;
    var isBufferEncoding = Buffer.isEncoding || function(encoding) {
      switch (encoding && encoding.toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
        case 'raw':
          return true;
        default:
          return false;
      }
    };
    function assertEncoding(encoding) {
      if (encoding && !isBufferEncoding(encoding)) {
        throw new Error('Unknown encoding: ' + encoding);
      }
    }
    var StringDecoder = exports.StringDecoder = function(encoding) {
      this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
      assertEncoding(encoding);
      switch (this.encoding) {
        case 'utf8':
          this.surrogateSize = 3;
          break;
        case 'ucs2':
        case 'utf16le':
          this.surrogateSize = 2;
          this.detectIncompleteChar = utf16DetectIncompleteChar;
          break;
        case 'base64':
          this.surrogateSize = 3;
          this.detectIncompleteChar = base64DetectIncompleteChar;
          break;
        default:
          this.write = passThroughWrite;
          return;
      }
      this.charBuffer = new Buffer(6);
      this.charReceived = 0;
      this.charLength = 0;
    };
    StringDecoder.prototype.write = function(buffer) {
      var charStr = '';
      while (this.charLength) {
        var available = (buffer.length >= this.charLength - this.charReceived) ? this.charLength - this.charReceived : buffer.length;
        buffer.copy(this.charBuffer, this.charReceived, 0, available);
        this.charReceived += available;
        if (this.charReceived < this.charLength) {
          return '';
        }
        buffer = buffer.slice(available, buffer.length);
        charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
        var charCode = charStr.charCodeAt(charStr.length - 1);
        if (charCode >= 0xD800 && charCode <= 0xDBFF) {
          this.charLength += this.surrogateSize;
          charStr = '';
          continue;
        }
        this.charReceived = this.charLength = 0;
        if (buffer.length === 0) {
          return charStr;
        }
        break;
      }
      this.detectIncompleteChar(buffer);
      var end = buffer.length;
      if (this.charLength) {
        buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
        end -= this.charReceived;
      }
      charStr += buffer.toString(this.encoding, 0, end);
      var end = charStr.length - 1;
      var charCode = charStr.charCodeAt(end);
      if (charCode >= 0xD800 && charCode <= 0xDBFF) {
        var size = this.surrogateSize;
        this.charLength += size;
        this.charReceived += size;
        this.charBuffer.copy(this.charBuffer, size, 0, size);
        buffer.copy(this.charBuffer, 0, 0, size);
        return charStr.substring(0, end);
      }
      return charStr;
    };
    StringDecoder.prototype.detectIncompleteChar = function(buffer) {
      var i = (buffer.length >= 3) ? 3 : buffer.length;
      for (; i > 0; i--) {
        var c = buffer[buffer.length - i];
        if (i == 1 && c >> 5 == 0x06) {
          this.charLength = 2;
          break;
        }
        if (i <= 2 && c >> 4 == 0x0E) {
          this.charLength = 3;
          break;
        }
        if (i <= 3 && c >> 3 == 0x1E) {
          this.charLength = 4;
          break;
        }
      }
      this.charReceived = i;
    };
    StringDecoder.prototype.end = function(buffer) {
      var res = '';
      if (buffer && buffer.length)
        res = this.write(buffer);
      if (this.charReceived) {
        var cr = this.charReceived;
        var buf = this.charBuffer;
        var enc = this.encoding;
        res += buf.slice(0, cr).toString(enc);
      }
      return res;
    };
    function passThroughWrite(buffer) {
      return buffer.toString(this.encoding);
    }
    function utf16DetectIncompleteChar(buffer) {
      this.charReceived = buffer.length % 2;
      this.charLength = this.charReceived ? 2 : 0;
    }
    function base64DetectIncompleteChar(buffer) {
      this.charReceived = buffer.length % 3;
      this.charLength = this.charReceived ? 3 : 0;
    }
  })($__require('c').Buffer);
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("22", ["21"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('21');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("12", ["1c", "c", "20", "17", "23", "24", "@empty", "14", "22", "25"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(Buffer, process) {
    module.exports = Readable;
    var isArray = $__require('1c');
    var Buffer = $__require('c').Buffer;
    Readable.ReadableState = ReadableState;
    var EE = $__require('20').EventEmitter;
    if (!EE.listenerCount)
      EE.listenerCount = function(emitter, type) {
        return emitter.listeners(type).length;
      };
    var Stream = $__require('17');
    var util = $__require('23');
    util.inherits = $__require('24');
    var StringDecoder;
    var debug = $__require('@empty');
    if (debug && debug.debuglog) {
      debug = debug.debuglog('stream');
    } else {
      debug = function() {};
    }
    util.inherits(Readable, Stream);
    function ReadableState(options, stream) {
      var Duplex = $__require('14');
      options = options || {};
      var hwm = options.highWaterMark;
      var defaultHwm = options.objectMode ? 16 : 16 * 1024;
      this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;
      this.highWaterMark = ~~this.highWaterMark;
      this.buffer = [];
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;
      this.sync = true;
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.objectMode = !!options.objectMode;
      if (stream instanceof Duplex)
        this.objectMode = this.objectMode || !!options.readableObjectMode;
      this.defaultEncoding = options.defaultEncoding || 'utf8';
      this.ranOut = false;
      this.awaitDrain = 0;
      this.readingMore = false;
      this.decoder = null;
      this.encoding = null;
      if (options.encoding) {
        if (!StringDecoder)
          StringDecoder = $__require('22').StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
      }
    }
    function Readable(options) {
      var Duplex = $__require('14');
      if (!(this instanceof Readable))
        return new Readable(options);
      this._readableState = new ReadableState(options, this);
      this.readable = true;
      Stream.call(this);
    }
    Readable.prototype.push = function(chunk, encoding) {
      var state = this._readableState;
      if (util.isString(chunk) && !state.objectMode) {
        encoding = encoding || state.defaultEncoding;
        if (encoding !== state.encoding) {
          chunk = new Buffer(chunk, encoding);
          encoding = '';
        }
      }
      return readableAddChunk(this, state, chunk, encoding, false);
    };
    Readable.prototype.unshift = function(chunk) {
      var state = this._readableState;
      return readableAddChunk(this, state, chunk, '', true);
    };
    function readableAddChunk(stream, state, chunk, encoding, addToFront) {
      var er = chunkInvalid(state, chunk);
      if (er) {
        stream.emit('error', er);
      } else if (util.isNullOrUndefined(chunk)) {
        state.reading = false;
        if (!state.ended)
          onEofChunk(stream, state);
      } else if (state.objectMode || chunk && chunk.length > 0) {
        if (state.ended && !addToFront) {
          var e = new Error('stream.push() after EOF');
          stream.emit('error', e);
        } else if (state.endEmitted && addToFront) {
          var e = new Error('stream.unshift() after end event');
          stream.emit('error', e);
        } else {
          if (state.decoder && !addToFront && !encoding)
            chunk = state.decoder.write(chunk);
          if (!addToFront)
            state.reading = false;
          if (state.flowing && state.length === 0 && !state.sync) {
            stream.emit('data', chunk);
            stream.read(0);
          } else {
            state.length += state.objectMode ? 1 : chunk.length;
            if (addToFront)
              state.buffer.unshift(chunk);
            else
              state.buffer.push(chunk);
            if (state.needReadable)
              emitReadable(stream);
          }
          maybeReadMore(stream, state);
        }
      } else if (!addToFront) {
        state.reading = false;
      }
      return needMoreData(state);
    }
    function needMoreData(state) {
      return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
    }
    Readable.prototype.setEncoding = function(enc) {
      if (!StringDecoder)
        StringDecoder = $__require('22').StringDecoder;
      this._readableState.decoder = new StringDecoder(enc);
      this._readableState.encoding = enc;
      return this;
    };
    var MAX_HWM = 0x800000;
    function roundUpToNextPowerOf2(n) {
      if (n >= MAX_HWM) {
        n = MAX_HWM;
      } else {
        n--;
        for (var p = 1; p < 32; p <<= 1)
          n |= n >> p;
        n++;
      }
      return n;
    }
    function howMuchToRead(n, state) {
      if (state.length === 0 && state.ended)
        return 0;
      if (state.objectMode)
        return n === 0 ? 0 : 1;
      if (isNaN(n) || util.isNull(n)) {
        if (state.flowing && state.buffer.length)
          return state.buffer[0].length;
        else
          return state.length;
      }
      if (n <= 0)
        return 0;
      if (n > state.highWaterMark)
        state.highWaterMark = roundUpToNextPowerOf2(n);
      if (n > state.length) {
        if (!state.ended) {
          state.needReadable = true;
          return 0;
        } else
          return state.length;
      }
      return n;
    }
    Readable.prototype.read = function(n) {
      debug('read', n);
      var state = this._readableState;
      var nOrig = n;
      if (!util.isNumber(n) || n > 0)
        state.emittedReadable = false;
      if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
        debug('read: emitReadable', state.length, state.ended);
        if (state.length === 0 && state.ended)
          endReadable(this);
        else
          emitReadable(this);
        return null;
      }
      n = howMuchToRead(n, state);
      if (n === 0 && state.ended) {
        if (state.length === 0)
          endReadable(this);
        return null;
      }
      var doRead = state.needReadable;
      debug('need readable', doRead);
      if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug('length less than watermark', doRead);
      }
      if (state.ended || state.reading) {
        doRead = false;
        debug('reading or ended', doRead);
      }
      if (doRead) {
        debug('do read');
        state.reading = true;
        state.sync = true;
        if (state.length === 0)
          state.needReadable = true;
        this._read(state.highWaterMark);
        state.sync = false;
      }
      if (doRead && !state.reading)
        n = howMuchToRead(nOrig, state);
      var ret;
      if (n > 0)
        ret = fromList(n, state);
      else
        ret = null;
      if (util.isNull(ret)) {
        state.needReadable = true;
        n = 0;
      }
      state.length -= n;
      if (state.length === 0 && !state.ended)
        state.needReadable = true;
      if (nOrig !== n && state.ended && state.length === 0)
        endReadable(this);
      if (!util.isNull(ret))
        this.emit('data', ret);
      return ret;
    };
    function chunkInvalid(state, chunk) {
      var er = null;
      if (!util.isBuffer(chunk) && !util.isString(chunk) && !util.isNullOrUndefined(chunk) && !state.objectMode) {
        er = new TypeError('Invalid non-string/buffer chunk');
      }
      return er;
    }
    function onEofChunk(stream, state) {
      if (state.decoder && !state.ended) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
          state.buffer.push(chunk);
          state.length += state.objectMode ? 1 : chunk.length;
        }
      }
      state.ended = true;
      emitReadable(stream);
    }
    function emitReadable(stream) {
      var state = stream._readableState;
      state.needReadable = false;
      if (!state.emittedReadable) {
        debug('emitReadable', state.flowing);
        state.emittedReadable = true;
        if (state.sync)
          process.nextTick(function() {
            emitReadable_(stream);
          });
        else
          emitReadable_(stream);
      }
    }
    function emitReadable_(stream) {
      debug('emit readable');
      stream.emit('readable');
      flow(stream);
    }
    function maybeReadMore(stream, state) {
      if (!state.readingMore) {
        state.readingMore = true;
        process.nextTick(function() {
          maybeReadMore_(stream, state);
        });
      }
    }
    function maybeReadMore_(stream, state) {
      var len = state.length;
      while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
        debug('maybeReadMore read 0');
        stream.read(0);
        if (len === state.length)
          break;
        else
          len = state.length;
      }
      state.readingMore = false;
    }
    Readable.prototype._read = function(n) {
      this.emit('error', new Error('not implemented'));
    };
    Readable.prototype.pipe = function(dest, pipeOpts) {
      var src = this;
      var state = this._readableState;
      switch (state.pipesCount) {
        case 0:
          state.pipes = dest;
          break;
        case 1:
          state.pipes = [state.pipes, dest];
          break;
        default:
          state.pipes.push(dest);
          break;
      }
      state.pipesCount += 1;
      debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
      var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
      var endFn = doEnd ? onend : cleanup;
      if (state.endEmitted)
        process.nextTick(endFn);
      else
        src.once('end', endFn);
      dest.on('unpipe', onunpipe);
      function onunpipe(readable) {
        debug('onunpipe');
        if (readable === src) {
          cleanup();
        }
      }
      function onend() {
        debug('onend');
        dest.end();
      }
      var ondrain = pipeOnDrain(src);
      dest.on('drain', ondrain);
      function cleanup() {
        debug('cleanup');
        dest.removeListener('close', onclose);
        dest.removeListener('finish', onfinish);
        dest.removeListener('drain', ondrain);
        dest.removeListener('error', onerror);
        dest.removeListener('unpipe', onunpipe);
        src.removeListener('end', onend);
        src.removeListener('end', cleanup);
        src.removeListener('data', ondata);
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
          ondrain();
      }
      src.on('data', ondata);
      function ondata(chunk) {
        debug('ondata');
        var ret = dest.write(chunk);
        if (false === ret) {
          debug('false write response, pause', src._readableState.awaitDrain);
          src._readableState.awaitDrain++;
          src.pause();
        }
      }
      function onerror(er) {
        debug('onerror', er);
        unpipe();
        dest.removeListener('error', onerror);
        if (EE.listenerCount(dest, 'error') === 0)
          dest.emit('error', er);
      }
      if (!dest._events || !dest._events.error)
        dest.on('error', onerror);
      else if (isArray(dest._events.error))
        dest._events.error.unshift(onerror);
      else
        dest._events.error = [onerror, dest._events.error];
      function onclose() {
        dest.removeListener('finish', onfinish);
        unpipe();
      }
      dest.once('close', onclose);
      function onfinish() {
        debug('onfinish');
        dest.removeListener('close', onclose);
        unpipe();
      }
      dest.once('finish', onfinish);
      function unpipe() {
        debug('unpipe');
        src.unpipe(dest);
      }
      dest.emit('pipe', src);
      if (!state.flowing) {
        debug('pipe resume');
        src.resume();
      }
      return dest;
    };
    function pipeOnDrain(src) {
      return function() {
        var state = src._readableState;
        debug('pipeOnDrain', state.awaitDrain);
        if (state.awaitDrain)
          state.awaitDrain--;
        if (state.awaitDrain === 0 && EE.listenerCount(src, 'data')) {
          state.flowing = true;
          flow(src);
        }
      };
    }
    Readable.prototype.unpipe = function(dest) {
      var state = this._readableState;
      if (state.pipesCount === 0)
        return this;
      if (state.pipesCount === 1) {
        if (dest && dest !== state.pipes)
          return this;
        if (!dest)
          dest = state.pipes;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest)
          dest.emit('unpipe', this);
        return this;
      }
      if (!dest) {
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for (var i = 0; i < len; i++)
          dests[i].emit('unpipe', this);
        return this;
      }
      var i = indexOf(state.pipes, dest);
      if (i === -1)
        return this;
      state.pipes.splice(i, 1);
      state.pipesCount -= 1;
      if (state.pipesCount === 1)
        state.pipes = state.pipes[0];
      dest.emit('unpipe', this);
      return this;
    };
    Readable.prototype.on = function(ev, fn) {
      var res = Stream.prototype.on.call(this, ev, fn);
      if (ev === 'data' && false !== this._readableState.flowing) {
        this.resume();
      }
      if (ev === 'readable' && this.readable) {
        var state = this._readableState;
        if (!state.readableListening) {
          state.readableListening = true;
          state.emittedReadable = false;
          state.needReadable = true;
          if (!state.reading) {
            var self = this;
            process.nextTick(function() {
              debug('readable nexttick read 0');
              self.read(0);
            });
          } else if (state.length) {
            emitReadable(this, state);
          }
        }
      }
      return res;
    };
    Readable.prototype.addListener = Readable.prototype.on;
    Readable.prototype.resume = function() {
      var state = this._readableState;
      if (!state.flowing) {
        debug('resume');
        state.flowing = true;
        if (!state.reading) {
          debug('resume read 0');
          this.read(0);
        }
        resume(this, state);
      }
      return this;
    };
    function resume(stream, state) {
      if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        process.nextTick(function() {
          resume_(stream, state);
        });
      }
    }
    function resume_(stream, state) {
      state.resumeScheduled = false;
      stream.emit('resume');
      flow(stream);
      if (state.flowing && !state.reading)
        stream.read(0);
    }
    Readable.prototype.pause = function() {
      debug('call pause flowing=%j', this._readableState.flowing);
      if (false !== this._readableState.flowing) {
        debug('pause');
        this._readableState.flowing = false;
        this.emit('pause');
      }
      return this;
    };
    function flow(stream) {
      var state = stream._readableState;
      debug('flow', state.flowing);
      if (state.flowing) {
        do {
          var chunk = stream.read();
        } while (null !== chunk && state.flowing);
      }
    }
    Readable.prototype.wrap = function(stream) {
      var state = this._readableState;
      var paused = false;
      var self = this;
      stream.on('end', function() {
        debug('wrapped end');
        if (state.decoder && !state.ended) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length)
            self.push(chunk);
        }
        self.push(null);
      });
      stream.on('data', function(chunk) {
        debug('wrapped data');
        if (state.decoder)
          chunk = state.decoder.write(chunk);
        if (!chunk || !state.objectMode && !chunk.length)
          return;
        var ret = self.push(chunk);
        if (!ret) {
          paused = true;
          stream.pause();
        }
      });
      for (var i in stream) {
        if (util.isFunction(stream[i]) && util.isUndefined(this[i])) {
          this[i] = function(method) {
            return function() {
              return stream[method].apply(stream, arguments);
            };
          }(i);
        }
      }
      var events = ['error', 'close', 'destroy', 'pause', 'resume'];
      forEach(events, function(ev) {
        stream.on(ev, self.emit.bind(self, ev));
      });
      self._read = function(n) {
        debug('wrapped _read', n);
        if (paused) {
          paused = false;
          stream.resume();
        }
      };
      return self;
    };
    Readable._fromList = fromList;
    function fromList(n, state) {
      var list = state.buffer;
      var length = state.length;
      var stringMode = !!state.decoder;
      var objectMode = !!state.objectMode;
      var ret;
      if (list.length === 0)
        return null;
      if (length === 0)
        ret = null;
      else if (objectMode)
        ret = list.shift();
      else if (!n || n >= length) {
        if (stringMode)
          ret = list.join('');
        else
          ret = Buffer.concat(list, length);
        list.length = 0;
      } else {
        if (n < list[0].length) {
          var buf = list[0];
          ret = buf.slice(0, n);
          list[0] = buf.slice(n);
        } else if (n === list[0].length) {
          ret = list.shift();
        } else {
          if (stringMode)
            ret = '';
          else
            ret = new Buffer(n);
          var c = 0;
          for (var i = 0,
              l = list.length; i < l && c < n; i++) {
            var buf = list[0];
            var cpy = Math.min(n - c, buf.length);
            if (stringMode)
              ret += buf.slice(0, cpy);
            else
              buf.copy(ret, c, 0, cpy);
            if (cpy < buf.length)
              list[0] = buf.slice(cpy);
            else
              list.shift();
            c += cpy;
          }
        }
      }
      return ret;
    }
    function endReadable(stream) {
      var state = stream._readableState;
      if (state.length > 0)
        throw new Error('endReadable called on non-empty stream');
      if (!state.endEmitted) {
        state.ended = true;
        process.nextTick(function() {
          if (!state.endEmitted && state.length === 0) {
            state.endEmitted = true;
            stream.readable = false;
            stream.emit('end');
          }
        });
      }
    }
    function forEach(xs, f) {
      for (var i = 0,
          l = xs.length; i < l; i++) {
        f(xs[i], i);
      }
    }
    function indexOf(xs, x) {
      for (var i = 0,
          l = xs.length; i < l; i++) {
        if (xs[i] === x)
          return i;
      }
      return -1;
    }
  })($__require('c').Buffer, $__require('25'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("13", ["c", "23", "24", "17", "14", "25"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(Buffer, process) {
    module.exports = Writable;
    var Buffer = $__require('c').Buffer;
    Writable.WritableState = WritableState;
    var util = $__require('23');
    util.inherits = $__require('24');
    var Stream = $__require('17');
    util.inherits(Writable, Stream);
    function WriteReq(chunk, encoding, cb) {
      this.chunk = chunk;
      this.encoding = encoding;
      this.callback = cb;
    }
    function WritableState(options, stream) {
      var Duplex = $__require('14');
      options = options || {};
      var hwm = options.highWaterMark;
      var defaultHwm = options.objectMode ? 16 : 16 * 1024;
      this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;
      this.objectMode = !!options.objectMode;
      if (stream instanceof Duplex)
        this.objectMode = this.objectMode || !!options.writableObjectMode;
      this.highWaterMark = ~~this.highWaterMark;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      var noDecode = options.decodeStrings === false;
      this.decodeStrings = !noDecode;
      this.defaultEncoding = options.defaultEncoding || 'utf8';
      this.length = 0;
      this.writing = false;
      this.corked = 0;
      this.sync = true;
      this.bufferProcessing = false;
      this.onwrite = function(er) {
        onwrite(stream, er);
      };
      this.writecb = null;
      this.writelen = 0;
      this.buffer = [];
      this.pendingcb = 0;
      this.prefinished = false;
      this.errorEmitted = false;
    }
    function Writable(options) {
      var Duplex = $__require('14');
      if (!(this instanceof Writable) && !(this instanceof Duplex))
        return new Writable(options);
      this._writableState = new WritableState(options, this);
      this.writable = true;
      Stream.call(this);
    }
    Writable.prototype.pipe = function() {
      this.emit('error', new Error('Cannot pipe. Not readable.'));
    };
    function writeAfterEnd(stream, state, cb) {
      var er = new Error('write after end');
      stream.emit('error', er);
      process.nextTick(function() {
        cb(er);
      });
    }
    function validChunk(stream, state, chunk, cb) {
      var valid = true;
      if (!util.isBuffer(chunk) && !util.isString(chunk) && !util.isNullOrUndefined(chunk) && !state.objectMode) {
        var er = new TypeError('Invalid non-string/buffer chunk');
        stream.emit('error', er);
        process.nextTick(function() {
          cb(er);
        });
        valid = false;
      }
      return valid;
    }
    Writable.prototype.write = function(chunk, encoding, cb) {
      var state = this._writableState;
      var ret = false;
      if (util.isFunction(encoding)) {
        cb = encoding;
        encoding = null;
      }
      if (util.isBuffer(chunk))
        encoding = 'buffer';
      else if (!encoding)
        encoding = state.defaultEncoding;
      if (!util.isFunction(cb))
        cb = function() {};
      if (state.ended)
        writeAfterEnd(this, state, cb);
      else if (validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, chunk, encoding, cb);
      }
      return ret;
    };
    Writable.prototype.cork = function() {
      var state = this._writableState;
      state.corked++;
    };
    Writable.prototype.uncork = function() {
      var state = this._writableState;
      if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.buffer.length)
          clearBuffer(this, state);
      }
    };
    function decodeChunk(state, chunk, encoding) {
      if (!state.objectMode && state.decodeStrings !== false && util.isString(chunk)) {
        chunk = new Buffer(chunk, encoding);
      }
      return chunk;
    }
    function writeOrBuffer(stream, state, chunk, encoding, cb) {
      chunk = decodeChunk(state, chunk, encoding);
      if (util.isBuffer(chunk))
        encoding = 'buffer';
      var len = state.objectMode ? 1 : chunk.length;
      state.length += len;
      var ret = state.length < state.highWaterMark;
      if (!ret)
        state.needDrain = true;
      if (state.writing || state.corked)
        state.buffer.push(new WriteReq(chunk, encoding, cb));
      else
        doWrite(stream, state, false, len, chunk, encoding, cb);
      return ret;
    }
    function doWrite(stream, state, writev, len, chunk, encoding, cb) {
      state.writelen = len;
      state.writecb = cb;
      state.writing = true;
      state.sync = true;
      if (writev)
        stream._writev(chunk, state.onwrite);
      else
        stream._write(chunk, encoding, state.onwrite);
      state.sync = false;
    }
    function onwriteError(stream, state, sync, er, cb) {
      if (sync)
        process.nextTick(function() {
          state.pendingcb--;
          cb(er);
        });
      else {
        state.pendingcb--;
        cb(er);
      }
      stream._writableState.errorEmitted = true;
      stream.emit('error', er);
    }
    function onwriteStateUpdate(state) {
      state.writing = false;
      state.writecb = null;
      state.length -= state.writelen;
      state.writelen = 0;
    }
    function onwrite(stream, er) {
      var state = stream._writableState;
      var sync = state.sync;
      var cb = state.writecb;
      onwriteStateUpdate(state);
      if (er)
        onwriteError(stream, state, sync, er, cb);
      else {
        var finished = needFinish(stream, state);
        if (!finished && !state.corked && !state.bufferProcessing && state.buffer.length) {
          clearBuffer(stream, state);
        }
        if (sync) {
          process.nextTick(function() {
            afterWrite(stream, state, finished, cb);
          });
        } else {
          afterWrite(stream, state, finished, cb);
        }
      }
    }
    function afterWrite(stream, state, finished, cb) {
      if (!finished)
        onwriteDrain(stream, state);
      state.pendingcb--;
      cb();
      finishMaybe(stream, state);
    }
    function onwriteDrain(stream, state) {
      if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit('drain');
      }
    }
    function clearBuffer(stream, state) {
      state.bufferProcessing = true;
      if (stream._writev && state.buffer.length > 1) {
        var cbs = [];
        for (var c = 0; c < state.buffer.length; c++)
          cbs.push(state.buffer[c].callback);
        state.pendingcb++;
        doWrite(stream, state, true, state.length, state.buffer, '', function(err) {
          for (var i = 0; i < cbs.length; i++) {
            state.pendingcb--;
            cbs[i](err);
          }
        });
        state.buffer = [];
      } else {
        for (var c = 0; c < state.buffer.length; c++) {
          var entry = state.buffer[c];
          var chunk = entry.chunk;
          var encoding = entry.encoding;
          var cb = entry.callback;
          var len = state.objectMode ? 1 : chunk.length;
          doWrite(stream, state, false, len, chunk, encoding, cb);
          if (state.writing) {
            c++;
            break;
          }
        }
        if (c < state.buffer.length)
          state.buffer = state.buffer.slice(c);
        else
          state.buffer.length = 0;
      }
      state.bufferProcessing = false;
    }
    Writable.prototype._write = function(chunk, encoding, cb) {
      cb(new Error('not implemented'));
    };
    Writable.prototype._writev = null;
    Writable.prototype.end = function(chunk, encoding, cb) {
      var state = this._writableState;
      if (util.isFunction(chunk)) {
        cb = chunk;
        chunk = null;
        encoding = null;
      } else if (util.isFunction(encoding)) {
        cb = encoding;
        encoding = null;
      }
      if (!util.isNullOrUndefined(chunk))
        this.write(chunk, encoding);
      if (state.corked) {
        state.corked = 1;
        this.uncork();
      }
      if (!state.ending && !state.finished)
        endWritable(this, state, cb);
    };
    function needFinish(stream, state) {
      return (state.ending && state.length === 0 && !state.finished && !state.writing);
    }
    function prefinish(stream, state) {
      if (!state.prefinished) {
        state.prefinished = true;
        stream.emit('prefinish');
      }
    }
    function finishMaybe(stream, state) {
      var need = needFinish(stream, state);
      if (need) {
        if (state.pendingcb === 0) {
          prefinish(stream, state);
          state.finished = true;
          stream.emit('finish');
        } else
          prefinish(stream, state);
      }
      return need;
    }
    function endWritable(stream, state, cb) {
      state.ending = true;
      finishMaybe(stream, state);
      if (cb) {
        if (state.finished)
          process.nextTick(cb);
        else
          stream.once('finish', cb);
      }
      state.ended = true;
    }
  })($__require('c').Buffer, $__require('25'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("14", ["23", "24", "12", "13", "25"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    module.exports = Duplex;
    var objectKeys = Object.keys || function(obj) {
      var keys = [];
      for (var key in obj)
        keys.push(key);
      return keys;
    };
    var util = $__require('23');
    util.inherits = $__require('24');
    var Readable = $__require('12');
    var Writable = $__require('13');
    util.inherits(Duplex, Readable);
    forEach(objectKeys(Writable.prototype), function(method) {
      if (!Duplex.prototype[method])
        Duplex.prototype[method] = Writable.prototype[method];
    });
    function Duplex(options) {
      if (!(this instanceof Duplex))
        return new Duplex(options);
      Readable.call(this, options);
      Writable.call(this, options);
      if (options && options.readable === false)
        this.readable = false;
      if (options && options.writable === false)
        this.writable = false;
      this.allowHalfOpen = true;
      if (options && options.allowHalfOpen === false)
        this.allowHalfOpen = false;
      this.once('end', onend);
    }
    function onend() {
      if (this.allowHalfOpen || this._writableState.ended)
        return;
      process.nextTick(this.end.bind(this));
    }
    function forEach(xs, f) {
      for (var i = 0,
          l = xs.length; i < l; i++) {
        f(xs[i], i);
      }
    }
  })($__require('25'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("15", ["14", "23", "24", "25"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    module.exports = Transform;
    var Duplex = $__require('14');
    var util = $__require('23');
    util.inherits = $__require('24');
    util.inherits(Transform, Duplex);
    function TransformState(options, stream) {
      this.afterTransform = function(er, data) {
        return afterTransform(stream, er, data);
      };
      this.needTransform = false;
      this.transforming = false;
      this.writecb = null;
      this.writechunk = null;
    }
    function afterTransform(stream, er, data) {
      var ts = stream._transformState;
      ts.transforming = false;
      var cb = ts.writecb;
      if (!cb)
        return stream.emit('error', new Error('no writecb in Transform class'));
      ts.writechunk = null;
      ts.writecb = null;
      if (!util.isNullOrUndefined(data))
        stream.push(data);
      if (cb)
        cb(er);
      var rs = stream._readableState;
      rs.reading = false;
      if (rs.needReadable || rs.length < rs.highWaterMark) {
        stream._read(rs.highWaterMark);
      }
    }
    function Transform(options) {
      if (!(this instanceof Transform))
        return new Transform(options);
      Duplex.call(this, options);
      this._transformState = new TransformState(options, this);
      var stream = this;
      this._readableState.needReadable = true;
      this._readableState.sync = false;
      this.once('prefinish', function() {
        if (util.isFunction(this._flush))
          this._flush(function(er) {
            done(stream, er);
          });
        else
          done(stream);
      });
    }
    Transform.prototype.push = function(chunk, encoding) {
      this._transformState.needTransform = false;
      return Duplex.prototype.push.call(this, chunk, encoding);
    };
    Transform.prototype._transform = function(chunk, encoding, cb) {
      throw new Error('not implemented');
    };
    Transform.prototype._write = function(chunk, encoding, cb) {
      var ts = this._transformState;
      ts.writecb = cb;
      ts.writechunk = chunk;
      ts.writeencoding = encoding;
      if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
          this._read(rs.highWaterMark);
      }
    };
    Transform.prototype._read = function(n) {
      var ts = this._transformState;
      if (!util.isNull(ts.writechunk) && ts.writecb && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
      } else {
        ts.needTransform = true;
      }
    };
    function done(stream, er) {
      if (er)
        return stream.emit('error', er);
      var ws = stream._writableState;
      var ts = stream._transformState;
      if (ws.length)
        throw new Error('calling transform done when ws.length != 0');
      if (ts.transforming)
        throw new Error('calling transform done when still transforming');
      return stream.push(null);
    }
  })($__require('25'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("26", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  ;
  (function(exports) {
    'use strict';
    var Arr = (typeof Uint8Array !== 'undefined') ? Uint8Array : Array;
    var PLUS = '+'.charCodeAt(0);
    var SLASH = '/'.charCodeAt(0);
    var NUMBER = '0'.charCodeAt(0);
    var LOWER = 'a'.charCodeAt(0);
    var UPPER = 'A'.charCodeAt(0);
    var PLUS_URL_SAFE = '-'.charCodeAt(0);
    var SLASH_URL_SAFE = '_'.charCodeAt(0);
    function decode(elt) {
      var code = elt.charCodeAt(0);
      if (code === PLUS || code === PLUS_URL_SAFE)
        return 62;
      if (code === SLASH || code === SLASH_URL_SAFE)
        return 63;
      if (code < NUMBER)
        return -1;
      if (code < NUMBER + 10)
        return code - NUMBER + 26 + 26;
      if (code < UPPER + 26)
        return code - UPPER;
      if (code < LOWER + 26)
        return code - LOWER + 26;
    }
    function b64ToByteArray(b64) {
      var i,
          j,
          l,
          tmp,
          placeHolders,
          arr;
      if (b64.length % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4');
      }
      var len = b64.length;
      placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0;
      arr = new Arr(b64.length * 3 / 4 - placeHolders);
      l = placeHolders > 0 ? b64.length - 4 : b64.length;
      var L = 0;
      function push(v) {
        arr[L++] = v;
      }
      for (i = 0, j = 0; i < l; i += 4, j += 3) {
        tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3));
        push((tmp & 0xFF0000) >> 16);
        push((tmp & 0xFF00) >> 8);
        push(tmp & 0xFF);
      }
      if (placeHolders === 2) {
        tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4);
        push(tmp & 0xFF);
      } else if (placeHolders === 1) {
        tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2);
        push((tmp >> 8) & 0xFF);
        push(tmp & 0xFF);
      }
      return arr;
    }
    function uint8ToBase64(uint8) {
      var i,
          extraBytes = uint8.length % 3,
          output = "",
          temp,
          length;
      function encode(num) {
        return lookup.charAt(num);
      }
      function tripletToBase64(num) {
        return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F);
      }
      for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
        temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
        output += tripletToBase64(temp);
      }
      switch (extraBytes) {
        case 1:
          temp = uint8[uint8.length - 1];
          output += encode(temp >> 2);
          output += encode((temp << 4) & 0x3F);
          output += '==';
          break;
        case 2:
          temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1]);
          output += encode(temp >> 10);
          output += encode((temp >> 4) & 0x3F);
          output += encode((temp << 2) & 0x3F);
          output += '=';
          break;
      }
      return output;
    }
    exports.toByteArray = b64ToByteArray;
    exports.fromByteArray = uint8ToBase64;
  }(typeof exports === 'undefined' ? (this.base64js = {}) : exports));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("27", ["26"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('26');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("28", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e,
        m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? (nBytes - 1) : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & ((1 << (-nBits)) - 1);
    s >>= (-nBits);
    nBits += eLen;
    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
    m = e & ((1 << (-nBits)) - 1);
    e >>= (-nBits);
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : ((s ? -1 : 1) * Infinity);
    } else {
      m = m + Math.pow(2, mLen);
      e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
  };
  exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e,
        m,
        c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
    var i = isLE ? 0 : (nBytes - 1);
    var d = isLE ? 1 : -1;
    var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0;
      e = eMax;
    } else {
      e = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c = Math.pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }
      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * Math.pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e = 0;
      }
    }
    for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
    e = (e << mLen) | m;
    eLen += mLen;
    for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
    buffer[offset + i - d] |= s * 128;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("29", ["28"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('28');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2a", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toString = {}.toString;
  module.exports = Array.isArray || function(arr) {
    return toString.call(arr) == '[object Array]';
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2b", ["2a"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('2a');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2c", ["27", "29", "2b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var base64 = $__require('27');
  var ieee754 = $__require('29');
  var isArray = $__require('2b');
  exports.Buffer = Buffer;
  exports.SlowBuffer = SlowBuffer;
  exports.INSPECT_MAX_BYTES = 50;
  Buffer.poolSize = 8192;
  var rootParent = {};
  Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
  function typedArraySupport() {
    function Bar() {}
    try {
      var arr = new Uint8Array(1);
      arr.foo = function() {
        return 42;
      };
      arr.constructor = Bar;
      return arr.foo() === 42 && arr.constructor === Bar && typeof arr.subarray === 'function' && arr.subarray(1, 1).byteLength === 0;
    } catch (e) {
      return false;
    }
  }
  function kMaxLength() {
    return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
  }
  function Buffer(arg) {
    if (!(this instanceof Buffer)) {
      if (arguments.length > 1)
        return new Buffer(arg, arguments[1]);
      return new Buffer(arg);
    }
    if (!Buffer.TYPED_ARRAY_SUPPORT) {
      this.length = 0;
      this.parent = undefined;
    }
    if (typeof arg === 'number') {
      return fromNumber(this, arg);
    }
    if (typeof arg === 'string') {
      return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8');
    }
    return fromObject(this, arg);
  }
  function fromNumber(that, length) {
    that = allocate(that, length < 0 ? 0 : checked(length) | 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT) {
      for (var i = 0; i < length; i++) {
        that[i] = 0;
      }
    }
    return that;
  }
  function fromString(that, string, encoding) {
    if (typeof encoding !== 'string' || encoding === '')
      encoding = 'utf8';
    var length = byteLength(string, encoding) | 0;
    that = allocate(that, length);
    that.write(string, encoding);
    return that;
  }
  function fromObject(that, object) {
    if (Buffer.isBuffer(object))
      return fromBuffer(that, object);
    if (isArray(object))
      return fromArray(that, object);
    if (object == null) {
      throw new TypeError('must start with number, buffer, array or string');
    }
    if (typeof ArrayBuffer !== 'undefined') {
      if (object.buffer instanceof ArrayBuffer) {
        return fromTypedArray(that, object);
      }
      if (object instanceof ArrayBuffer) {
        return fromArrayBuffer(that, object);
      }
    }
    if (object.length)
      return fromArrayLike(that, object);
    return fromJsonObject(that, object);
  }
  function fromBuffer(that, buffer) {
    var length = checked(buffer.length) | 0;
    that = allocate(that, length);
    buffer.copy(that, 0, 0, length);
    return that;
  }
  function fromArray(that, array) {
    var length = checked(array.length) | 0;
    that = allocate(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }
  function fromTypedArray(that, array) {
    var length = checked(array.length) | 0;
    that = allocate(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }
  function fromArrayBuffer(that, array) {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      array.byteLength;
      that = Buffer._augment(new Uint8Array(array));
    } else {
      that = fromTypedArray(that, new Uint8Array(array));
    }
    return that;
  }
  function fromArrayLike(that, array) {
    var length = checked(array.length) | 0;
    that = allocate(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }
  function fromJsonObject(that, object) {
    var array;
    var length = 0;
    if (object.type === 'Buffer' && isArray(object.data)) {
      array = object.data;
      length = checked(array.length) | 0;
    }
    that = allocate(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    Buffer.prototype.__proto__ = Uint8Array.prototype;
    Buffer.__proto__ = Uint8Array;
  } else {
    Buffer.prototype.length = undefined;
    Buffer.prototype.parent = undefined;
  }
  function allocate(that, length) {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      that = Buffer._augment(new Uint8Array(length));
      that.__proto__ = Buffer.prototype;
    } else {
      that.length = length;
      that._isBuffer = true;
    }
    var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1;
    if (fromPool)
      that.parent = rootParent;
    return that;
  }
  function checked(length) {
    if (length >= kMaxLength()) {
      throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
    }
    return length | 0;
  }
  function SlowBuffer(subject, encoding) {
    if (!(this instanceof SlowBuffer))
      return new SlowBuffer(subject, encoding);
    var buf = new Buffer(subject, encoding);
    delete buf.parent;
    return buf;
  }
  Buffer.isBuffer = function isBuffer(b) {
    return !!(b != null && b._isBuffer);
  };
  Buffer.compare = function compare(a, b) {
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
      throw new TypeError('Arguments must be Buffers');
    }
    if (a === b)
      return 0;
    var x = a.length;
    var y = b.length;
    var i = 0;
    var len = Math.min(x, y);
    while (i < len) {
      if (a[i] !== b[i])
        break;
      ++i;
    }
    if (i !== len) {
      x = a[i];
      y = b[i];
    }
    if (x < y)
      return -1;
    if (y < x)
      return 1;
    return 0;
  };
  Buffer.isEncoding = function isEncoding(encoding) {
    switch (String(encoding).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'binary':
      case 'base64':
      case 'raw':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return true;
      default:
        return false;
    }
  };
  Buffer.concat = function concat(list, length) {
    if (!isArray(list))
      throw new TypeError('list argument must be an Array of Buffers.');
    if (list.length === 0) {
      return new Buffer(0);
    }
    var i;
    if (length === undefined) {
      length = 0;
      for (i = 0; i < list.length; i++) {
        length += list[i].length;
      }
    }
    var buf = new Buffer(length);
    var pos = 0;
    for (i = 0; i < list.length; i++) {
      var item = list[i];
      item.copy(buf, pos);
      pos += item.length;
    }
    return buf;
  };
  function byteLength(string, encoding) {
    if (typeof string !== 'string')
      string = '' + string;
    var len = string.length;
    if (len === 0)
      return 0;
    var loweredCase = false;
    for (; ; ) {
      switch (encoding) {
        case 'ascii':
        case 'binary':
        case 'raw':
        case 'raws':
          return len;
        case 'utf8':
        case 'utf-8':
          return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return len * 2;
        case 'hex':
          return len >>> 1;
        case 'base64':
          return base64ToBytes(string).length;
        default:
          if (loweredCase)
            return utf8ToBytes(string).length;
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer.byteLength = byteLength;
  function slowToString(encoding, start, end) {
    var loweredCase = false;
    start = start | 0;
    end = end === undefined || end === Infinity ? this.length : end | 0;
    if (!encoding)
      encoding = 'utf8';
    if (start < 0)
      start = 0;
    if (end > this.length)
      end = this.length;
    if (end <= start)
      return '';
    while (true) {
      switch (encoding) {
        case 'hex':
          return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
          return utf8Slice(this, start, end);
        case 'ascii':
          return asciiSlice(this, start, end);
        case 'binary':
          return binarySlice(this, start, end);
        case 'base64':
          return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return utf16leSlice(this, start, end);
        default:
          if (loweredCase)
            throw new TypeError('Unknown encoding: ' + encoding);
          encoding = (encoding + '').toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer.prototype.toString = function toString() {
    var length = this.length | 0;
    if (length === 0)
      return '';
    if (arguments.length === 0)
      return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
  };
  Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b))
      throw new TypeError('Argument must be a Buffer');
    if (this === b)
      return true;
    return Buffer.compare(this, b) === 0;
  };
  Buffer.prototype.inspect = function inspect() {
    var str = '';
    var max = exports.INSPECT_MAX_BYTES;
    if (this.length > 0) {
      str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
      if (this.length > max)
        str += ' ... ';
    }
    return '<Buffer ' + str + '>';
  };
  Buffer.prototype.compare = function compare(b) {
    if (!Buffer.isBuffer(b))
      throw new TypeError('Argument must be a Buffer');
    if (this === b)
      return 0;
    return Buffer.compare(this, b);
  };
  Buffer.prototype.indexOf = function indexOf(val, byteOffset) {
    if (byteOffset > 0x7fffffff)
      byteOffset = 0x7fffffff;
    else if (byteOffset < -0x80000000)
      byteOffset = -0x80000000;
    byteOffset >>= 0;
    if (this.length === 0)
      return -1;
    if (byteOffset >= this.length)
      return -1;
    if (byteOffset < 0)
      byteOffset = Math.max(this.length + byteOffset, 0);
    if (typeof val === 'string') {
      if (val.length === 0)
        return -1;
      return String.prototype.indexOf.call(this, val, byteOffset);
    }
    if (Buffer.isBuffer(val)) {
      return arrayIndexOf(this, val, byteOffset);
    }
    if (typeof val === 'number') {
      if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
        return Uint8Array.prototype.indexOf.call(this, val, byteOffset);
      }
      return arrayIndexOf(this, [val], byteOffset);
    }
    function arrayIndexOf(arr, val, byteOffset) {
      var foundIndex = -1;
      for (var i = 0; byteOffset + i < arr.length; i++) {
        if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
          if (foundIndex === -1)
            foundIndex = i;
          if (i - foundIndex + 1 === val.length)
            return byteOffset + foundIndex;
        } else {
          foundIndex = -1;
        }
      }
      return -1;
    }
    throw new TypeError('val must be string, number or Buffer');
  };
  Buffer.prototype.get = function get(offset) {
    console.log('.get() is deprecated. Access using array indexes instead.');
    return this.readUInt8(offset);
  };
  Buffer.prototype.set = function set(v, offset) {
    console.log('.set() is deprecated. Access using array indexes instead.');
    return this.writeUInt8(v, offset);
  };
  function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) {
      length = remaining;
    } else {
      length = Number(length);
      if (length > remaining) {
        length = remaining;
      }
    }
    var strLen = string.length;
    if (strLen % 2 !== 0)
      throw new Error('Invalid hex string');
    if (length > strLen / 2) {
      length = strLen / 2;
    }
    for (var i = 0; i < length; i++) {
      var parsed = parseInt(string.substr(i * 2, 2), 16);
      if (isNaN(parsed))
        throw new Error('Invalid hex string');
      buf[offset + i] = parsed;
    }
    return i;
  }
  function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
  }
  function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
  }
  function binaryWrite(buf, string, offset, length) {
    return asciiWrite(buf, string, offset, length);
  }
  function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
  }
  function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
  }
  Buffer.prototype.write = function write(string, offset, length, encoding) {
    if (offset === undefined) {
      encoding = 'utf8';
      length = this.length;
      offset = 0;
    } else if (length === undefined && typeof offset === 'string') {
      encoding = offset;
      length = this.length;
      offset = 0;
    } else if (isFinite(offset)) {
      offset = offset | 0;
      if (isFinite(length)) {
        length = length | 0;
        if (encoding === undefined)
          encoding = 'utf8';
      } else {
        encoding = length;
        length = undefined;
      }
    } else {
      var swap = encoding;
      encoding = offset;
      offset = length | 0;
      length = swap;
    }
    var remaining = this.length - offset;
    if (length === undefined || length > remaining)
      length = remaining;
    if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
      throw new RangeError('attempt to write outside buffer bounds');
    }
    if (!encoding)
      encoding = 'utf8';
    var loweredCase = false;
    for (; ; ) {
      switch (encoding) {
        case 'hex':
          return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
          return utf8Write(this, string, offset, length);
        case 'ascii':
          return asciiWrite(this, string, offset, length);
        case 'binary':
          return binaryWrite(this, string, offset, length);
        case 'base64':
          return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return ucs2Write(this, string, offset, length);
        default:
          if (loweredCase)
            throw new TypeError('Unknown encoding: ' + encoding);
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  };
  Buffer.prototype.toJSON = function toJSON() {
    return {
      type: 'Buffer',
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) {
      return base64.fromByteArray(buf);
    } else {
      return base64.fromByteArray(buf.slice(start, end));
    }
  }
  function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while (i < end) {
      var firstByte = buf[i];
      var codePoint = null;
      var bytesPerSequence = (firstByte > 0xEF) ? 4 : (firstByte > 0xDF) ? 3 : (firstByte > 0xBF) ? 2 : 1;
      if (i + bytesPerSequence <= end) {
        var secondByte,
            thirdByte,
            fourthByte,
            tempCodePoint;
        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 0x80) {
              codePoint = firstByte;
            }
            break;
          case 2:
            secondByte = buf[i + 1];
            if ((secondByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
              if (tempCodePoint > 0x7F) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 3:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
              if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 4:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            fourthByte = buf[i + 3];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
              if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                codePoint = tempCodePoint;
              }
            }
        }
      }
      if (codePoint === null) {
        codePoint = 0xFFFD;
        bytesPerSequence = 1;
      } else if (codePoint > 0xFFFF) {
        codePoint -= 0x10000;
        res.push(codePoint >>> 10 & 0x3FF | 0xD800);
        codePoint = 0xDC00 | codePoint & 0x3FF;
      }
      res.push(codePoint);
      i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
  }
  var MAX_ARGUMENTS_LENGTH = 0x1000;
  function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints);
    }
    var res = '';
    var i = 0;
    while (i < len) {
      res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    }
    return res;
  }
  function asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for (var i = start; i < end; i++) {
      ret += String.fromCharCode(buf[i] & 0x7F);
    }
    return ret;
  }
  function binarySlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for (var i = start; i < end; i++) {
      ret += String.fromCharCode(buf[i]);
    }
    return ret;
  }
  function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0)
      start = 0;
    if (!end || end < 0 || end > len)
      end = len;
    var out = '';
    for (var i = start; i < end; i++) {
      out += toHex(buf[i]);
    }
    return out;
  }
  function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    for (var i = 0; i < bytes.length; i += 2) {
      res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }
    return res;
  }
  Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
      start += len;
      if (start < 0)
        start = 0;
    } else if (start > len) {
      start = len;
    }
    if (end < 0) {
      end += len;
      if (end < 0)
        end = 0;
    } else if (end > len) {
      end = len;
    }
    if (end < start)
      end = start;
    var newBuf;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      newBuf = Buffer._augment(this.subarray(start, end));
    } else {
      var sliceLen = end - start;
      newBuf = new Buffer(sliceLen, undefined);
      for (var i = 0; i < sliceLen; i++) {
        newBuf[i] = this[i + start];
      }
    }
    if (newBuf.length)
      newBuf.parent = this.parent || this;
    return newBuf;
  };
  function checkOffset(offset, ext, length) {
    if ((offset % 1) !== 0 || offset < 0)
      throw new RangeError('offset is not uint');
    if (offset + ext > length)
      throw new RangeError('Trying to access beyond buffer length');
  }
  Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert)
      checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }
    return val;
  };
  Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
      checkOffset(offset, byteLength, this.length);
    }
    var val = this[offset + --byteLength];
    var mul = 1;
    while (byteLength > 0 && (mul *= 0x100)) {
      val += this[offset + --byteLength] * mul;
    }
    return val;
  };
  Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 1, this.length);
    return this[offset];
  };
  Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    return this[offset] | (this[offset + 1] << 8);
  };
  Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    return (this[offset] << 8) | this[offset + 1];
  };
  Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return ((this[offset]) | (this[offset + 1] << 8) | (this[offset + 2] << 16)) + (this[offset + 3] * 0x1000000);
  };
  Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return (this[offset] * 0x1000000) + ((this[offset + 1] << 16) | (this[offset + 2] << 8) | this[offset + 3]);
  };
  Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert)
      checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }
    mul *= 0x80;
    if (val >= mul)
      val -= Math.pow(2, 8 * byteLength);
    return val;
  };
  Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert)
      checkOffset(offset, byteLength, this.length);
    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while (i > 0 && (mul *= 0x100)) {
      val += this[offset + --i] * mul;
    }
    mul *= 0x80;
    if (val >= mul)
      val -= Math.pow(2, 8 * byteLength);
    return val;
  };
  Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80))
      return (this[offset]);
    return ((0xff - this[offset] + 1) * -1);
  };
  Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    var val = this[offset] | (this[offset + 1] << 8);
    return (val & 0x8000) ? val | 0xFFFF0000 : val;
  };
  Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | (this[offset] << 8);
    return (val & 0x8000) ? val | 0xFFFF0000 : val;
  };
  Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return (this[offset]) | (this[offset + 1] << 8) | (this[offset + 2] << 16) | (this[offset + 3] << 24);
  };
  Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return (this[offset] << 24) | (this[offset + 1] << 16) | (this[offset + 2] << 8) | (this[offset + 3]);
  };
  Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
  };
  Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
  };
  Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
  };
  Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
  };
  function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf))
      throw new TypeError('buffer must be a Buffer instance');
    if (value > max || value < min)
      throw new RangeError('value is out of bounds');
    if (offset + ext > buf.length)
      throw new RangeError('index out of range');
  }
  Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert)
      checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0);
    var mul = 1;
    var i = 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = (value / mul) & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert)
      checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0);
    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = (value / mul) & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 1, 0xff, 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT)
      value = Math.floor(value);
    this[offset] = (value & 0xff);
    return offset + 1;
  };
  function objectWriteUInt16(buf, value, offset, littleEndian) {
    if (value < 0)
      value = 0xffff + value + 1;
    for (var i = 0,
        j = Math.min(buf.length - offset, 2); i < j; i++) {
      buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>> (littleEndian ? i : 1 - i) * 8;
    }
  }
  Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 0xffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
    } else {
      objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2;
  };
  Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 0xffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 8);
      this[offset + 1] = (value & 0xff);
    } else {
      objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2;
  };
  function objectWriteUInt32(buf, value, offset, littleEndian) {
    if (value < 0)
      value = 0xffffffff + value + 1;
    for (var i = 0,
        j = Math.min(buf.length - offset, 4); i < j; i++) {
      buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
    }
  }
  Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset + 3] = (value >>> 24);
      this[offset + 2] = (value >>> 16);
      this[offset + 1] = (value >>> 8);
      this[offset] = (value & 0xff);
    } else {
      objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4;
  };
  Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 24);
      this[offset + 1] = (value >>> 16);
      this[offset + 2] = (value >>> 8);
      this[offset + 3] = (value & 0xff);
    } else {
      objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4;
  };
  Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);
      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = value < 0 ? 1 : 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);
      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = byteLength - 1;
    var mul = 1;
    var sub = value < 0 ? 1 : 0;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 1, 0x7f, -0x80);
    if (!Buffer.TYPED_ARRAY_SUPPORT)
      value = Math.floor(value);
    if (value < 0)
      value = 0xff + value + 1;
    this[offset] = (value & 0xff);
    return offset + 1;
  };
  Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
    } else {
      objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2;
  };
  Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 8);
      this[offset + 1] = (value & 0xff);
    } else {
      objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2;
  };
  Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
      this[offset + 2] = (value >>> 16);
      this[offset + 3] = (value >>> 24);
    } else {
      objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4;
  };
  Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (value < 0)
      value = 0xffffffff + value + 1;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 24);
      this[offset + 1] = (value >>> 16);
      this[offset + 2] = (value >>> 8);
      this[offset + 3] = (value & 0xff);
    } else {
      objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4;
  };
  function checkIEEE754(buf, value, offset, ext, max, min) {
    if (value > max || value < min)
      throw new RangeError('value is out of bounds');
    if (offset + ext > buf.length)
      throw new RangeError('index out of range');
    if (offset < 0)
      throw new RangeError('index out of range');
  }
  function writeFloat(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
    }
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
  }
  Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
  };
  Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
  };
  function writeDouble(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
    }
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
  }
  Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
  };
  Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
  };
  Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!start)
      start = 0;
    if (!end && end !== 0)
      end = this.length;
    if (targetStart >= target.length)
      targetStart = target.length;
    if (!targetStart)
      targetStart = 0;
    if (end > 0 && end < start)
      end = start;
    if (end === start)
      return 0;
    if (target.length === 0 || this.length === 0)
      return 0;
    if (targetStart < 0) {
      throw new RangeError('targetStart out of bounds');
    }
    if (start < 0 || start >= this.length)
      throw new RangeError('sourceStart out of bounds');
    if (end < 0)
      throw new RangeError('sourceEnd out of bounds');
    if (end > this.length)
      end = this.length;
    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start;
    }
    var len = end - start;
    var i;
    if (this === target && start < targetStart && targetStart < end) {
      for (i = len - 1; i >= 0; i--) {
        target[i + targetStart] = this[i + start];
      }
    } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
      for (i = 0; i < len; i++) {
        target[i + targetStart] = this[i + start];
      }
    } else {
      target._set(this.subarray(start, start + len), targetStart);
    }
    return len;
  };
  Buffer.prototype.fill = function fill(value, start, end) {
    if (!value)
      value = 0;
    if (!start)
      start = 0;
    if (!end)
      end = this.length;
    if (end < start)
      throw new RangeError('end < start');
    if (end === start)
      return;
    if (this.length === 0)
      return;
    if (start < 0 || start >= this.length)
      throw new RangeError('start out of bounds');
    if (end < 0 || end > this.length)
      throw new RangeError('end out of bounds');
    var i;
    if (typeof value === 'number') {
      for (i = start; i < end; i++) {
        this[i] = value;
      }
    } else {
      var bytes = utf8ToBytes(value.toString());
      var len = bytes.length;
      for (i = start; i < end; i++) {
        this[i] = bytes[i % len];
      }
    }
    return this;
  };
  Buffer.prototype.toArrayBuffer = function toArrayBuffer() {
    if (typeof Uint8Array !== 'undefined') {
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        return (new Buffer(this)).buffer;
      } else {
        var buf = new Uint8Array(this.length);
        for (var i = 0,
            len = buf.length; i < len; i += 1) {
          buf[i] = this[i];
        }
        return buf.buffer;
      }
    } else {
      throw new TypeError('Buffer.toArrayBuffer not supported in this browser');
    }
  };
  var BP = Buffer.prototype;
  Buffer._augment = function _augment(arr) {
    arr.constructor = Buffer;
    arr._isBuffer = true;
    arr._set = arr.set;
    arr.get = BP.get;
    arr.set = BP.set;
    arr.write = BP.write;
    arr.toString = BP.toString;
    arr.toLocaleString = BP.toString;
    arr.toJSON = BP.toJSON;
    arr.equals = BP.equals;
    arr.compare = BP.compare;
    arr.indexOf = BP.indexOf;
    arr.copy = BP.copy;
    arr.slice = BP.slice;
    arr.readUIntLE = BP.readUIntLE;
    arr.readUIntBE = BP.readUIntBE;
    arr.readUInt8 = BP.readUInt8;
    arr.readUInt16LE = BP.readUInt16LE;
    arr.readUInt16BE = BP.readUInt16BE;
    arr.readUInt32LE = BP.readUInt32LE;
    arr.readUInt32BE = BP.readUInt32BE;
    arr.readIntLE = BP.readIntLE;
    arr.readIntBE = BP.readIntBE;
    arr.readInt8 = BP.readInt8;
    arr.readInt16LE = BP.readInt16LE;
    arr.readInt16BE = BP.readInt16BE;
    arr.readInt32LE = BP.readInt32LE;
    arr.readInt32BE = BP.readInt32BE;
    arr.readFloatLE = BP.readFloatLE;
    arr.readFloatBE = BP.readFloatBE;
    arr.readDoubleLE = BP.readDoubleLE;
    arr.readDoubleBE = BP.readDoubleBE;
    arr.writeUInt8 = BP.writeUInt8;
    arr.writeUIntLE = BP.writeUIntLE;
    arr.writeUIntBE = BP.writeUIntBE;
    arr.writeUInt16LE = BP.writeUInt16LE;
    arr.writeUInt16BE = BP.writeUInt16BE;
    arr.writeUInt32LE = BP.writeUInt32LE;
    arr.writeUInt32BE = BP.writeUInt32BE;
    arr.writeIntLE = BP.writeIntLE;
    arr.writeIntBE = BP.writeIntBE;
    arr.writeInt8 = BP.writeInt8;
    arr.writeInt16LE = BP.writeInt16LE;
    arr.writeInt16BE = BP.writeInt16BE;
    arr.writeInt32LE = BP.writeInt32LE;
    arr.writeInt32BE = BP.writeInt32BE;
    arr.writeFloatLE = BP.writeFloatLE;
    arr.writeFloatBE = BP.writeFloatBE;
    arr.writeDoubleLE = BP.writeDoubleLE;
    arr.writeDoubleBE = BP.writeDoubleBE;
    arr.fill = BP.fill;
    arr.inspect = BP.inspect;
    arr.toArrayBuffer = BP.toArrayBuffer;
    return arr;
  };
  var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
  function base64clean(str) {
    str = stringtrim(str).replace(INVALID_BASE64_RE, '');
    if (str.length < 2)
      return '';
    while (str.length % 4 !== 0) {
      str = str + '=';
    }
    return str;
  }
  function stringtrim(str) {
    if (str.trim)
      return str.trim();
    return str.replace(/^\s+|\s+$/g, '');
  }
  function toHex(n) {
    if (n < 16)
      return '0' + n.toString(16);
    return n.toString(16);
  }
  function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for (var i = 0; i < length; i++) {
      codePoint = string.charCodeAt(i);
      if (codePoint > 0xD7FF && codePoint < 0xE000) {
        if (!leadSurrogate) {
          if (codePoint > 0xDBFF) {
            if ((units -= 3) > -1)
              bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          } else if (i + 1 === length) {
            if ((units -= 3) > -1)
              bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          }
          leadSurrogate = codePoint;
          continue;
        }
        if (codePoint < 0xDC00) {
          if ((units -= 3) > -1)
            bytes.push(0xEF, 0xBF, 0xBD);
          leadSurrogate = codePoint;
          continue;
        }
        codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
      } else if (leadSurrogate) {
        if ((units -= 3) > -1)
          bytes.push(0xEF, 0xBF, 0xBD);
      }
      leadSurrogate = null;
      if (codePoint < 0x80) {
        if ((units -= 1) < 0)
          break;
        bytes.push(codePoint);
      } else if (codePoint < 0x800) {
        if ((units -= 2) < 0)
          break;
        bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x10000) {
        if ((units -= 3) < 0)
          break;
        bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x110000) {
        if ((units -= 4) < 0)
          break;
        bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else {
        throw new Error('Invalid code point');
      }
    }
    return bytes;
  }
  function asciiToBytes(str) {
    var byteArray = [];
    for (var i = 0; i < str.length; i++) {
      byteArray.push(str.charCodeAt(i) & 0xFF);
    }
    return byteArray;
  }
  function utf16leToBytes(str, units) {
    var c,
        hi,
        lo;
    var byteArray = [];
    for (var i = 0; i < str.length; i++) {
      if ((units -= 2) < 0)
        break;
      c = str.charCodeAt(i);
      hi = c >> 8;
      lo = c % 256;
      byteArray.push(lo);
      byteArray.push(hi);
    }
    return byteArray;
  }
  function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
  }
  function blitBuffer(src, dst, offset, length) {
    for (var i = 0; i < length; i++) {
      if ((i + offset >= dst.length) || (i >= src.length))
        break;
      dst[i + offset] = src[i];
    }
    return i;
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2d", ["2c"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('2c');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2e", ["2d"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__System._nodeRequire ? $__System._nodeRequire('buffer') : $__require('2d');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("c", ["2e"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('2e');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2f", ["c"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(Buffer) {
    function isArray(arg) {
      if (Array.isArray) {
        return Array.isArray(arg);
      }
      return objectToString(arg) === '[object Array]';
    }
    exports.isArray = isArray;
    function isBoolean(arg) {
      return typeof arg === 'boolean';
    }
    exports.isBoolean = isBoolean;
    function isNull(arg) {
      return arg === null;
    }
    exports.isNull = isNull;
    function isNullOrUndefined(arg) {
      return arg == null;
    }
    exports.isNullOrUndefined = isNullOrUndefined;
    function isNumber(arg) {
      return typeof arg === 'number';
    }
    exports.isNumber = isNumber;
    function isString(arg) {
      return typeof arg === 'string';
    }
    exports.isString = isString;
    function isSymbol(arg) {
      return typeof arg === 'symbol';
    }
    exports.isSymbol = isSymbol;
    function isUndefined(arg) {
      return arg === void 0;
    }
    exports.isUndefined = isUndefined;
    function isRegExp(re) {
      return objectToString(re) === '[object RegExp]';
    }
    exports.isRegExp = isRegExp;
    function isObject(arg) {
      return typeof arg === 'object' && arg !== null;
    }
    exports.isObject = isObject;
    function isDate(d) {
      return objectToString(d) === '[object Date]';
    }
    exports.isDate = isDate;
    function isError(e) {
      return (objectToString(e) === '[object Error]' || e instanceof Error);
    }
    exports.isError = isError;
    function isFunction(arg) {
      return typeof arg === 'function';
    }
    exports.isFunction = isFunction;
    function isPrimitive(arg) {
      return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || typeof arg === 'undefined';
    }
    exports.isPrimitive = isPrimitive;
    exports.isBuffer = Buffer.isBuffer;
    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }
  })($__require('c').Buffer);
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("23", ["2f"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('2f');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("16", ["15", "23", "24"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = PassThrough;
  var Transform = $__require('15');
  var util = $__require('23');
  util.inherits = $__require('24');
  util.inherits(PassThrough, Transform);
  function PassThrough(options) {
    if (!(this instanceof PassThrough))
      return new PassThrough(options);
    Transform.call(this, options);
  }
  PassThrough.prototype._transform = function(chunk, encoding, cb) {
    cb(null, chunk);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("30", ["16"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('16');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("17", ["20", "24", "11", "18", "19", "1a", "30"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = Stream;
  var EE = $__require('20').EventEmitter;
  var inherits = $__require('24');
  inherits(Stream, EE);
  Stream.Readable = $__require('11');
  Stream.Writable = $__require('18');
  Stream.Duplex = $__require('19');
  Stream.Transform = $__require('1a');
  Stream.PassThrough = $__require('30');
  Stream.Stream = Stream;
  function Stream() {
    EE.call(this);
  }
  Stream.prototype.pipe = function(dest, options) {
    var source = this;
    function ondata(chunk) {
      if (dest.writable) {
        if (false === dest.write(chunk) && source.pause) {
          source.pause();
        }
      }
    }
    source.on('data', ondata);
    function ondrain() {
      if (source.readable && source.resume) {
        source.resume();
      }
    }
    dest.on('drain', ondrain);
    if (!dest._isStdio && (!options || options.end !== false)) {
      source.on('end', onend);
      source.on('close', onclose);
    }
    var didOnEnd = false;
    function onend() {
      if (didOnEnd)
        return;
      didOnEnd = true;
      dest.end();
    }
    function onclose() {
      if (didOnEnd)
        return;
      didOnEnd = true;
      if (typeof dest.destroy === 'function')
        dest.destroy();
    }
    function onerror(er) {
      cleanup();
      if (EE.listenerCount(this, 'error') === 0) {
        throw er;
      }
    }
    source.on('error', onerror);
    dest.on('error', onerror);
    function cleanup() {
      source.removeListener('data', ondata);
      dest.removeListener('drain', ondrain);
      source.removeListener('end', onend);
      source.removeListener('close', onclose);
      source.removeListener('error', onerror);
      dest.removeListener('error', onerror);
      source.removeListener('end', cleanup);
      source.removeListener('close', cleanup);
      dest.removeListener('close', cleanup);
    }
    source.on('end', cleanup);
    source.on('close', cleanup);
    dest.on('close', cleanup);
    dest.emit('pipe', source);
    return dest;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("31", ["17"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('17');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("32", ["31"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__System._nodeRequire ? $__System._nodeRequire('stream') : $__require('31');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("33", ["32"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('32');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("34", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function isBuffer(arg) {
    return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("35", ["34", "24", "25"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var formatRegExp = /%[sdj%]/g;
    exports.format = function(f) {
      if (!isString(f)) {
        var objects = [];
        for (var i = 0; i < arguments.length; i++) {
          objects.push(inspect(arguments[i]));
        }
        return objects.join(' ');
      }
      var i = 1;
      var args = arguments;
      var len = args.length;
      var str = String(f).replace(formatRegExp, function(x) {
        if (x === '%%')
          return '%';
        if (i >= len)
          return x;
        switch (x) {
          case '%s':
            return String(args[i++]);
          case '%d':
            return Number(args[i++]);
          case '%j':
            try {
              return JSON.stringify(args[i++]);
            } catch (_) {
              return '[Circular]';
            }
          default:
            return x;
        }
      });
      for (var x = args[i]; i < len; x = args[++i]) {
        if (isNull(x) || !isObject(x)) {
          str += ' ' + x;
        } else {
          str += ' ' + inspect(x);
        }
      }
      return str;
    };
    exports.deprecate = function(fn, msg) {
      if (isUndefined(global.process)) {
        return function() {
          return exports.deprecate(fn, msg).apply(this, arguments);
        };
      }
      if (process.noDeprecation === true) {
        return fn;
      }
      var warned = false;
      function deprecated() {
        if (!warned) {
          if (process.throwDeprecation) {
            throw new Error(msg);
          } else if (process.traceDeprecation) {
            console.trace(msg);
          } else {
            console.error(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }
      return deprecated;
    };
    var debugs = {};
    var debugEnviron;
    exports.debuglog = function(set) {
      if (isUndefined(debugEnviron))
        debugEnviron = process.env.NODE_DEBUG || '';
      set = set.toUpperCase();
      if (!debugs[set]) {
        if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
          var pid = process.pid;
          debugs[set] = function() {
            var msg = exports.format.apply(exports, arguments);
            console.error('%s %d: %s', set, pid, msg);
          };
        } else {
          debugs[set] = function() {};
        }
      }
      return debugs[set];
    };
    function inspect(obj, opts) {
      var ctx = {
        seen: [],
        stylize: stylizeNoColor
      };
      if (arguments.length >= 3)
        ctx.depth = arguments[2];
      if (arguments.length >= 4)
        ctx.colors = arguments[3];
      if (isBoolean(opts)) {
        ctx.showHidden = opts;
      } else if (opts) {
        exports._extend(ctx, opts);
      }
      if (isUndefined(ctx.showHidden))
        ctx.showHidden = false;
      if (isUndefined(ctx.depth))
        ctx.depth = 2;
      if (isUndefined(ctx.colors))
        ctx.colors = false;
      if (isUndefined(ctx.customInspect))
        ctx.customInspect = true;
      if (ctx.colors)
        ctx.stylize = stylizeWithColor;
      return formatValue(ctx, obj, ctx.depth);
    }
    exports.inspect = inspect;
    inspect.colors = {
      'bold': [1, 22],
      'italic': [3, 23],
      'underline': [4, 24],
      'inverse': [7, 27],
      'white': [37, 39],
      'grey': [90, 39],
      'black': [30, 39],
      'blue': [34, 39],
      'cyan': [36, 39],
      'green': [32, 39],
      'magenta': [35, 39],
      'red': [31, 39],
      'yellow': [33, 39]
    };
    inspect.styles = {
      'special': 'cyan',
      'number': 'yellow',
      'boolean': 'yellow',
      'undefined': 'grey',
      'null': 'bold',
      'string': 'green',
      'date': 'magenta',
      'regexp': 'red'
    };
    function stylizeWithColor(str, styleType) {
      var style = inspect.styles[styleType];
      if (style) {
        return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
      } else {
        return str;
      }
    }
    function stylizeNoColor(str, styleType) {
      return str;
    }
    function arrayToHash(array) {
      var hash = {};
      array.forEach(function(val, idx) {
        hash[val] = true;
      });
      return hash;
    }
    function formatValue(ctx, value, recurseTimes) {
      if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString(ret)) {
          ret = formatValue(ctx, ret, recurseTimes);
        }
        return ret;
      }
      var primitive = formatPrimitive(ctx, value);
      if (primitive) {
        return primitive;
      }
      var keys = Object.keys(value);
      var visibleKeys = arrayToHash(keys);
      if (ctx.showHidden) {
        keys = Object.getOwnPropertyNames(value);
      }
      if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
        return formatError(value);
      }
      if (keys.length === 0) {
        if (isFunction(value)) {
          var name = value.name ? ': ' + value.name : '';
          return ctx.stylize('[Function' + name + ']', 'special');
        }
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        }
        if (isDate(value)) {
          return ctx.stylize(Date.prototype.toString.call(value), 'date');
        }
        if (isError(value)) {
          return formatError(value);
        }
      }
      var base = '',
          array = false,
          braces = ['{', '}'];
      if (isArray(value)) {
        array = true;
        braces = ['[', ']'];
      }
      if (isFunction(value)) {
        var n = value.name ? ': ' + value.name : '';
        base = ' [Function' + n + ']';
      }
      if (isRegExp(value)) {
        base = ' ' + RegExp.prototype.toString.call(value);
      }
      if (isDate(value)) {
        base = ' ' + Date.prototype.toUTCString.call(value);
      }
      if (isError(value)) {
        base = ' ' + formatError(value);
      }
      if (keys.length === 0 && (!array || value.length == 0)) {
        return braces[0] + base + braces[1];
      }
      if (recurseTimes < 0) {
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        } else {
          return ctx.stylize('[Object]', 'special');
        }
      }
      ctx.seen.push(value);
      var output;
      if (array) {
        output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
      } else {
        output = keys.map(function(key) {
          return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
        });
      }
      ctx.seen.pop();
      return reduceToSingleString(output, base, braces);
    }
    function formatPrimitive(ctx, value) {
      if (isUndefined(value))
        return ctx.stylize('undefined', 'undefined');
      if (isString(value)) {
        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
        return ctx.stylize(simple, 'string');
      }
      if (isNumber(value))
        return ctx.stylize('' + value, 'number');
      if (isBoolean(value))
        return ctx.stylize('' + value, 'boolean');
      if (isNull(value))
        return ctx.stylize('null', 'null');
    }
    function formatError(value) {
      return '[' + Error.prototype.toString.call(value) + ']';
    }
    function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
      var output = [];
      for (var i = 0,
          l = value.length; i < l; ++i) {
        if (hasOwnProperty(value, String(i))) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
        } else {
          output.push('');
        }
      }
      keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
        }
      });
      return output;
    }
    function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
      var name,
          str,
          desc;
      desc = Object.getOwnPropertyDescriptor(value, key) || {value: value[key]};
      if (desc.get) {
        if (desc.set) {
          str = ctx.stylize('[Getter/Setter]', 'special');
        } else {
          str = ctx.stylize('[Getter]', 'special');
        }
      } else {
        if (desc.set) {
          str = ctx.stylize('[Setter]', 'special');
        }
      }
      if (!hasOwnProperty(visibleKeys, key)) {
        name = '[' + key + ']';
      }
      if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
          if (isNull(recurseTimes)) {
            str = formatValue(ctx, desc.value, null);
          } else {
            str = formatValue(ctx, desc.value, recurseTimes - 1);
          }
          if (str.indexOf('\n') > -1) {
            if (array) {
              str = str.split('\n').map(function(line) {
                return '  ' + line;
              }).join('\n').substr(2);
            } else {
              str = '\n' + str.split('\n').map(function(line) {
                return '   ' + line;
              }).join('\n');
            }
          }
        } else {
          str = ctx.stylize('[Circular]', 'special');
        }
      }
      if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) {
          return str;
        }
        name = JSON.stringify('' + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
          name = name.substr(1, name.length - 2);
          name = ctx.stylize(name, 'name');
        } else {
          name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
          name = ctx.stylize(name, 'string');
        }
      }
      return name + ': ' + str;
    }
    function reduceToSingleString(output, base, braces) {
      var numLinesEst = 0;
      var length = output.reduce(function(prev, cur) {
        numLinesEst++;
        if (cur.indexOf('\n') >= 0)
          numLinesEst++;
        return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
      }, 0);
      if (length > 60) {
        return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
      }
      return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
    }
    function isArray(ar) {
      return Array.isArray(ar);
    }
    exports.isArray = isArray;
    function isBoolean(arg) {
      return typeof arg === 'boolean';
    }
    exports.isBoolean = isBoolean;
    function isNull(arg) {
      return arg === null;
    }
    exports.isNull = isNull;
    function isNullOrUndefined(arg) {
      return arg == null;
    }
    exports.isNullOrUndefined = isNullOrUndefined;
    function isNumber(arg) {
      return typeof arg === 'number';
    }
    exports.isNumber = isNumber;
    function isString(arg) {
      return typeof arg === 'string';
    }
    exports.isString = isString;
    function isSymbol(arg) {
      return typeof arg === 'symbol';
    }
    exports.isSymbol = isSymbol;
    function isUndefined(arg) {
      return arg === void 0;
    }
    exports.isUndefined = isUndefined;
    function isRegExp(re) {
      return isObject(re) && objectToString(re) === '[object RegExp]';
    }
    exports.isRegExp = isRegExp;
    function isObject(arg) {
      return typeof arg === 'object' && arg !== null;
    }
    exports.isObject = isObject;
    function isDate(d) {
      return isObject(d) && objectToString(d) === '[object Date]';
    }
    exports.isDate = isDate;
    function isError(e) {
      return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
    }
    exports.isError = isError;
    function isFunction(arg) {
      return typeof arg === 'function';
    }
    exports.isFunction = isFunction;
    function isPrimitive(arg) {
      return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || typeof arg === 'undefined';
    }
    exports.isPrimitive = isPrimitive;
    exports.isBuffer = $__require('34');
    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }
    function pad(n) {
      return n < 10 ? '0' + n.toString(10) : n.toString(10);
    }
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    function timestamp() {
      var d = new Date();
      var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
      return [d.getDate(), months[d.getMonth()], time].join(' ');
    }
    exports.log = function() {
      console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
    };
    exports.inherits = $__require('24');
    exports._extend = function(origin, add) {
      if (!add || !isObject(add))
        return origin;
      var keys = Object.keys(add);
      var i = keys.length;
      while (i--) {
        origin[keys[i]] = add[keys[i]];
      }
      return origin;
    };
    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
  })($__require('25'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("36", ["35"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('35');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("37", ["36"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__System._nodeRequire ? $__System._nodeRequire('util') : $__require('36');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("38", ["37"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('37');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("39", ["33", "38"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Stream = $__require('33');
  var util = $__require('38');
  var Response = module.exports = function(res) {
    this.offset = 0;
    this.readable = true;
  };
  util.inherits(Response, Stream);
  var capable = {
    streaming: true,
    status2: true
  };
  function parseHeaders(res) {
    var lines = res.getAllResponseHeaders().split(/\r?\n/);
    var headers = {};
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (line === '')
        continue;
      var m = line.match(/^([^:]+):\s*(.*)/);
      if (m) {
        var key = m[1].toLowerCase(),
            value = m[2];
        if (headers[key] !== undefined) {
          if (isArray(headers[key])) {
            headers[key].push(value);
          } else {
            headers[key] = [headers[key], value];
          }
        } else {
          headers[key] = value;
        }
      } else {
        headers[line] = true;
      }
    }
    return headers;
  }
  Response.prototype.getResponse = function(xhr) {
    var respType = String(xhr.responseType).toLowerCase();
    if (respType === 'blob')
      return xhr.responseBlob || xhr.response;
    if (respType === 'arraybuffer')
      return xhr.response;
    return xhr.responseText;
  };
  Response.prototype.getHeader = function(key) {
    return this.headers[key.toLowerCase()];
  };
  Response.prototype.handle = function(res) {
    if (res.readyState === 2 && capable.status2) {
      try {
        this.statusCode = res.status;
        this.headers = parseHeaders(res);
      } catch (err) {
        capable.status2 = false;
      }
      if (capable.status2) {
        this.emit('ready');
      }
    } else if (capable.streaming && res.readyState === 3) {
      try {
        if (!this.statusCode) {
          this.statusCode = res.status;
          this.headers = parseHeaders(res);
          this.emit('ready');
        }
      } catch (err) {}
      try {
        this._emitData(res);
      } catch (err) {
        capable.streaming = false;
      }
    } else if (res.readyState === 4) {
      if (!this.statusCode) {
        this.statusCode = res.status;
        this.emit('ready');
      }
      this._emitData(res);
      if (res.error) {
        this.emit('error', this.getResponse(res));
      } else
        this.emit('end');
      this.emit('close');
    }
  };
  Response.prototype._emitData = function(res) {
    var respBody = this.getResponse(res);
    if (respBody.toString().match(/ArrayBuffer/)) {
      this.emit('data', new Uint8Array(respBody, this.offset));
      this.offset = respBody.byteLength;
      return;
    }
    if (respBody.length > this.offset) {
      this.emit('data', respBody.slice(this.offset));
      this.offset = respBody.length;
    }
  };
  var isArray = Array.isArray || function(xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3a", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  ;
  (function() {
    var object = typeof exports != 'undefined' ? exports : this;
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    function InvalidCharacterError(message) {
      this.message = message;
    }
    InvalidCharacterError.prototype = new Error;
    InvalidCharacterError.prototype.name = 'InvalidCharacterError';
    object.btoa || (object.btoa = function(input) {
      for (var block,
          charCode,
          idx = 0,
          map = chars,
          output = ''; input.charAt(idx | 0) || (map = '=', idx % 1); output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
        charCode = input.charCodeAt(idx += 3 / 4);
        if (charCode > 0xFF) {
          throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
        }
        block = block << 8 | charCode;
      }
      return output;
    });
    object.atob || (object.atob = function(input) {
      input = input.replace(/=+$/, '');
      if (input.length % 4 == 1) {
        throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
      }
      for (var bc = 0,
          bs,
          buffer,
          idx = 0,
          output = ''; buffer = input.charAt(idx++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
        buffer = chars.indexOf(buffer);
      }
      return output;
    });
  }());
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3b", ["3a"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('3a');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3c", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  if (typeof Object.create === 'function') {
    module.exports = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }});
    };
  } else {
    module.exports = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function() {};
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    };
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("24", ["3c"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('3c');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3d", ["33", "39", "3b", "24"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Stream = $__require('33');
  var Response = $__require('39');
  var Base64 = $__require('3b');
  var inherits = $__require('24');
  var Request = module.exports = function(xhr, params) {
    var self = this;
    self.writable = true;
    self.xhr = xhr;
    self.body = [];
    self.uri = (params.protocol || 'http:') + '//' + params.host + (params.port ? ':' + params.port : '') + (params.path || '/');
    ;
    if (typeof params.withCredentials === 'undefined') {
      params.withCredentials = true;
    }
    try {
      xhr.withCredentials = params.withCredentials;
    } catch (e) {}
    if (params.responseType)
      try {
        xhr.responseType = params.responseType;
      } catch (e) {}
    xhr.open(params.method || 'GET', self.uri, true);
    xhr.onerror = function(event) {
      self.emit('error', new Error('Network error'));
    };
    self._headers = {};
    if (params.headers) {
      var keys = objectKeys(params.headers);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!self.isSafeRequestHeader(key))
          continue;
        var value = params.headers[key];
        self.setHeader(key, value);
      }
    }
    if (params.auth) {
      this.setHeader('Authorization', 'Basic ' + Base64.btoa(params.auth));
    }
    var res = new Response;
    res.on('close', function() {
      self.emit('close');
    });
    res.on('ready', function() {
      self.emit('response', res);
    });
    res.on('error', function(err) {
      self.emit('error', err);
    });
    xhr.onreadystatechange = function() {
      if (xhr.__aborted)
        return;
      res.handle(xhr);
    };
  };
  inherits(Request, Stream);
  Request.prototype.setHeader = function(key, value) {
    this._headers[key.toLowerCase()] = value;
  };
  Request.prototype.getHeader = function(key) {
    return this._headers[key.toLowerCase()];
  };
  Request.prototype.removeHeader = function(key) {
    delete this._headers[key.toLowerCase()];
  };
  Request.prototype.write = function(s) {
    this.body.push(s);
  };
  Request.prototype.destroy = function(s) {
    this.xhr.__aborted = true;
    this.xhr.abort();
    this.emit('close');
  };
  Request.prototype.end = function(s) {
    if (s !== undefined)
      this.body.push(s);
    var keys = objectKeys(this._headers);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = this._headers[key];
      if (isArray(value)) {
        for (var j = 0; j < value.length; j++) {
          this.xhr.setRequestHeader(key, value[j]);
        }
      } else
        this.xhr.setRequestHeader(key, value);
    }
    if (this.body.length === 0) {
      this.xhr.send('');
    } else if (typeof this.body[0] === 'string') {
      this.xhr.send(this.body.join(''));
    } else if (isArray(this.body[0])) {
      var body = [];
      for (var i = 0; i < this.body.length; i++) {
        body.push.apply(body, this.body[i]);
      }
      this.xhr.send(body);
    } else if (/Array/.test(Object.prototype.toString.call(this.body[0]))) {
      var len = 0;
      for (var i = 0; i < this.body.length; i++) {
        len += this.body[i].length;
      }
      var body = new (this.body[0].constructor)(len);
      var k = 0;
      for (var i = 0; i < this.body.length; i++) {
        var b = this.body[i];
        for (var j = 0; j < b.length; j++) {
          body[k++] = b[j];
        }
      }
      this.xhr.send(body);
    } else if (isXHR2Compatible(this.body[0])) {
      this.xhr.send(this.body[0]);
    } else {
      var body = '';
      for (var i = 0; i < this.body.length; i++) {
        body += this.body[i].toString();
      }
      this.xhr.send(body);
    }
  };
  Request.unsafeHeaders = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "content-transfer-encoding", "date", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "user-agent", "via"];
  Request.prototype.isSafeRequestHeader = function(headerName) {
    if (!headerName)
      return false;
    return indexOf(Request.unsafeHeaders, headerName.toLowerCase()) === -1;
  };
  var objectKeys = Object.keys || function(obj) {
    var keys = [];
    for (var key in obj)
      keys.push(key);
    return keys;
  };
  var isArray = Array.isArray || function(xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
  };
  var indexOf = function(xs, x) {
    if (xs.indexOf)
      return xs.indexOf(x);
    for (var i = 0; i < xs.length; i++) {
      if (xs[i] === x)
        return i;
    }
    return -1;
  };
  var isXHR2Compatible = function(obj) {
    if (typeof Blob !== 'undefined' && obj instanceof Blob)
      return true;
    if (typeof ArrayBuffer !== 'undefined' && obj instanceof ArrayBuffer)
      return true;
    if (typeof FormData !== 'undefined' && obj instanceof FormData)
      return true;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3e", ["20", "3d", "3f"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  if ($__System._nodeRequire) {
    module.exports = $__System._nodeRequire('http');
  } else {
    var http = module.exports;
    var EventEmitter = $__require('20').EventEmitter;
    var Request = $__require('3d');
    var url = $__require('3f');
    http.request = function(params, cb) {
      if (typeof params === 'string') {
        params = url.parse(params);
      }
      if (!params)
        params = {};
      if (!params.host && !params.port) {
        params.port = parseInt(window.location.port, 10);
      }
      if (!params.host && params.hostname) {
        params.host = params.hostname;
      }
      if (!params.protocol) {
        if (params.scheme) {
          params.protocol = params.scheme + ':';
        } else {
          params.protocol = window.location.protocol;
        }
      }
      if (!params.host) {
        params.host = window.location.hostname || window.location.host;
      }
      if (/:/.test(params.host)) {
        if (!params.port) {
          params.port = params.host.split(':')[1];
        }
        params.host = params.host.split(':')[0];
      }
      if (!params.port)
        params.port = params.protocol == 'https:' ? 443 : 80;
      var req = new Request(new xhrHttp, params);
      if (cb)
        req.on('response', cb);
      return req;
    };
    http.get = function(params, cb) {
      params.method = 'GET';
      var req = http.request(params, cb);
      req.end();
      return req;
    };
    http.Agent = function() {};
    http.Agent.defaultMaxSockets = 4;
    var xhrHttp = (function() {
      if (typeof window === 'undefined') {
        throw new Error('no window object present');
      } else if (window.XMLHttpRequest) {
        return window.XMLHttpRequest;
      } else if (window.ActiveXObject) {
        var axs = ['Msxml2.XMLHTTP.6.0', 'Msxml2.XMLHTTP.3.0', 'Microsoft.XMLHTTP'];
        for (var i = 0; i < axs.length; i++) {
          try {
            var ax = new (window.ActiveXObject)(axs[i]);
            return function() {
              if (ax) {
                var ax_ = ax;
                ax = null;
                return ax_;
              } else {
                return new (window.ActiveXObject)(axs[i]);
              }
            };
          } catch (e) {}
        }
        throw new Error('ajax not supported in this browser');
      } else {
        throw new Error('ajax not supported in this browser');
      }
    })();
    http.STATUS_CODES = {
      100: 'Continue',
      101: 'Switching Protocols',
      102: 'Processing',
      200: 'OK',
      201: 'Created',
      202: 'Accepted',
      203: 'Non-Authoritative Information',
      204: 'No Content',
      205: 'Reset Content',
      206: 'Partial Content',
      207: 'Multi-Status',
      300: 'Multiple Choices',
      301: 'Moved Permanently',
      302: 'Moved Temporarily',
      303: 'See Other',
      304: 'Not Modified',
      305: 'Use Proxy',
      307: 'Temporary Redirect',
      400: 'Bad Request',
      401: 'Unauthorized',
      402: 'Payment Required',
      403: 'Forbidden',
      404: 'Not Found',
      405: 'Method Not Allowed',
      406: 'Not Acceptable',
      407: 'Proxy Authentication Required',
      408: 'Request Time-out',
      409: 'Conflict',
      410: 'Gone',
      411: 'Length Required',
      412: 'Precondition Failed',
      413: 'Request Entity Too Large',
      414: 'Request-URI Too Large',
      415: 'Unsupported Media Type',
      416: 'Requested Range Not Satisfiable',
      417: 'Expectation Failed',
      418: 'I\'m a teapot',
      422: 'Unprocessable Entity',
      423: 'Locked',
      424: 'Failed Dependency',
      425: 'Unordered Collection',
      426: 'Upgrade Required',
      428: 'Precondition Required',
      429: 'Too Many Requests',
      431: 'Request Header Fields Too Large',
      500: 'Internal Server Error',
      501: 'Not Implemented',
      502: 'Bad Gateway',
      503: 'Service Unavailable',
      504: 'Gateway Time-out',
      505: 'HTTP Version Not Supported',
      506: 'Variant Also Negotiates',
      507: 'Insufficient Storage',
      509: 'Bandwidth Limit Exceeded',
      510: 'Not Extended',
      511: 'Network Authentication Required'
    };
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("10", ["3e"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('3e');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("40", ["10"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var http = $__require('10');
  var https = module.exports;
  for (var key in http) {
    if (http.hasOwnProperty(key))
      https[key] = http[key];
  }
  ;
  https.request = function(params, cb) {
    if (!params)
      params = {};
    params.scheme = 'https';
    return http.request.call(this, params, cb);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("41", ["40"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('40');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("42", ["41"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__System._nodeRequire ? $__System._nodeRequire('https') : $__require('41');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("43", ["42"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('42');
  global.define = __define;
  return module.exports;
});

$__System.register('44', ['43', '45', 'd', 'e'], function (_export) {
  var https, EventEmitter, _createClass, _classCallCheck, agarClientId, Account;

  return {
    setters: [function (_2) {
      https = _2['default'];
    }, function (_3) {
      EventEmitter = _3['default'];
    }, function (_d) {
      _createClass = _d['default'];
    }, function (_e) {
      _classCallCheck = _e['default'];
    }],
    execute: function () {
      'use strict';

      agarClientId = '677505792353827';
      //hardcoded in client

      Account = (function () {
        function Account(name) {
          _classCallCheck(this, Account);

          //todo doc vars
          this.name = name; //debug name
          this.token = null; //token after requestFBToken()
          this.token_expire = 0; //timestamp after requestFBToken()
          this.token_provider = 1; //provider ID after requester
          this.c_user = null; //cookie from www.facebook.com
          this.datr = null; //cookie from www.facebook.com
          this.xs = null; //cookie from www.facebook.com
          this.agent = null; //connection agent
          this.debug = 1;
          this.server = 'wss://web-live-v3-0.agario.miniclippt.com/ws'; //todo doc

          this.ws = null;
        }

        _createClass(Account, [{
          key: 'log',
          value: function log(text) {
            if (this.name) {
              console.log('Account(' + this.name + '): ' + text);
            } else {
              console.log('Account: ' + text);
            }
          }
        }, {
          key: 'requestFBToken',
          value: function requestFBToken(cb) {
            var account = this;

            if (this.debug >= 1) {
              if (!this.c_user) this.log('[warning] You did not specified Account.c_user');
              if (!this.datr) this.log('[warning] You did not specified Account.datr');
              if (!this.xs) this.log('[warning] You did not specified Account.xs');
            }

            var ret = {
              error: null,
              res: null,
              data: null
            };

            var cUser = this.c_user;
            var datr = this.datr;
            var xs = this.xs;

            //Some users don't decode their cookies, so let's try do it here
            if (cUser && cUser.indexOf('%')) cUser = decodeURIComponent(cUser);
            if (datr && datr.indexOf('%')) datr = decodeURIComponent(datr);
            if (xs && xs.indexOf('%')) xs = decodeURIComponent(xs);

            var cookies = 'c_user=' + encodeURIComponent(cUser) + ';' + 'datr=' + encodeURIComponent(datr) + ';' + 'xs=' + encodeURIComponent(xs) + ';';

            var options = {
              host: 'www.facebook.com',
              path: '/dialog/oauth?client_id=' + agarClientId + '&redirect_uri=https://agar.io&scope=public_profile,%20email&response_type=token',
              method: 'GET',
              headers: {
                'User-Agent': 'Mozilla/5.0',
                Cookie: cookies
              },
              agent: this.agent || null
            };

            var req = https.request(options, function (res) {
              var data = '';
              ret.res = res;

              res.setEncoding('utf8');
              res.on('data', function (chunk) {
                data += chunk;
              });
              res.on('end', function () {
                ret.data = data;

                if (res && res.headers && res.headers.location) {
                  res.headers.location.replace(/access_token=([a-zA-Z0-9-_]*)&/, function (_, parsed_token) {
                    if (parsed_token) {
                      account.token = parsed_token;
                      account.token_provider = 1;
                    }
                  });
                  res.headers.location.replace(/expires_in=([0-9]*)/, function (_, expire) {
                    if (expire) {
                      account.token_expire = Date.now() + expire * 1000;
                    }
                  });
                }

                if (cb) cb(account.token, ret);
              });
            });

            req.on('error', function (e) {
              ret.error = e;
              if (cb) cb(null, ret);
            });

            req.end();
          }
        }]);

        return Account;
      })();

      _export('default', Account);
    }
  };
});
$__System.registerDynamic("9", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("46", ["9"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('9');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("47", ["46"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('46'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("d", ["47"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _Object$defineProperty = $__require('47')["default"];
  exports["default"] = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("e", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports["default"] = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

$__System.register('48', ['d', 'e'], function (_export) {
  var _createClass, _classCallCheck, Ball;

  return {
    setters: [function (_d) {
      _createClass = _d['default'];
    }, function (_e) {
      _classCallCheck = _e['default'];
    }],
    execute: function () {
      'use strict';

      Ball = (function () {
        function Ball(client, id) {
          _classCallCheck(this, Ball);

          if (client.balls[id]) return client.balls[id];

          this.id = id;
          this.name = null;
          this.x = 0;
          this.y = 0;
          this.size = 0;
          this.mass = 0;
          this.virus = false;
          this.mine = false;

          this.client = client;
          this.destroyed = false;
          this.visible = false;
          this.last_update = Date.now();
          this.update_tick = 0;

          client.balls[id] = this;
          return this;
        }

        _createClass(Ball, [{
          key: 'destroy',
          value: function destroy(reason) {
            this.destroyed = reason;
            delete this.client.balls[this.id];
            var mine_ball_index = this.client.my_balls.indexOf(this.id);
            if (mine_ball_index > -1) {
              this.client.my_balls.splice(mine_ball_index, 1);
              this.client.emitEvent('mineBallDestroy', this.id, reason);
              if (!this.client.my_balls.length) this.client.emitEvent('lostMyBalls');
            }

            this.emitEvent('destroy', reason);
            this.client.emitEvent('ballDestroy', this.id, reason);
          }
        }, {
          key: 'setCords',
          value: function setCords(new_x, new_y) {
            if (this.x == new_x && this.y == new_y) return;
            var old_x = this.x;
            var old_y = this.y;
            this.x = new_x;
            this.y = new_y;

            if (!old_x && !old_y) return;
            this.emitEvent('move', old_x, old_y, new_x, new_y);
            this.client.emitEvent('ballMove', this.id, old_x, old_y, new_x, new_y);
          }
        }, {
          key: 'setSize',
          value: function setSize(new_size) {
            if (this.size == new_size) return;
            var old_size = this.size;
            this.size = new_size;
            this.mass = parseInt(Math.pow(new_size / 10, 2));

            if (!old_size) return;
            this.emitEvent('resize', old_size, new_size);
            this.client.emitEvent('ballResize', this.id, old_size, new_size);
            if (this.mine) this.client.updateScore();
          }
        }, {
          key: 'setName',
          value: function setName(name) {
            if (this.name == name) return;
            var old_name = this.name;
            this.name = name;

            this.emitEvent('rename', old_name, name);
            this.client.emitEvent('ballRename', this.id, old_name, name);
          }
        }, {
          key: 'update',
          value: function update() {
            var old_time = this.last_update;
            this.last_update = Date.now();

            this.emitEvent('update', old_time, this.last_update);
            this.client.emitEvent('ballUpdate', this.id, old_time, this.last_update);
          }
        }, {
          key: 'appear',
          value: function appear() {
            if (this.visible) return;
            this.visible = true;
            this.emitEvent('appear');
            this.client.emitEvent('ballAppear', this.id);

            if (this.mine) this.client.updateScore();
          }
        }, {
          key: 'disappear',
          value: function disappear() {
            if (!this.visible) return;
            this.visible = false;
            this.emitEvent('disappear');
            this.client.emitEvent('ballDisppear', this.id);
          }
        }, {
          key: 'toString',
          value: function toString() {
            if (this.name) return this.id + '(' + this.name + ')';
            return this.id.toString();
          }

          // Fix https://github.com/pulviscriptor/agario-client/issues/95
        }, {
          key: 'emitEvent',
          value: function emitEvent() {
            var args = [];
            for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
            try {
              this.emit.apply(this, args);
            } catch (e) {
              process.nextTick(function () {
                throw e;
              });
            }
          }
        }]);

        return Ball;
      })();

      _export('default', Ball);
    }
  };
});
$__System.register('49', ['44', '45', '48', 'a', 'c', 'b', 'f'], function (_export) {
  var Account, EventEmitter, Ball, _Object$defineProperties, Buffer, Packet, servers, key;

  function Client(client_name) {
    //you can change this values
    this.client_name = client_name; //name used for log
    this.debug = 1; //debug level, 0-5 (5 will output extremely lot of data)
    this.inactive_destroy = 5 * 60 * 1000; //time in ms when to destroy inactive balls
    this.inactive_check = 10 * 1000; //time in ms when to search inactive balls
    this.spawn_interval = 200; //time in ms for respawn interval. 0 to disable (if your custom server don't have spawn problems)
    this.spawn_attempts = 25; //how much attempts to spawn before give up (official servers do have unstable spawn problems)
    this.agent = null; //agent for connection. Check additional info in readme
    this.local_address = null; //local interface to bind to for network connections (IP address of interface)
    this.headers = { //headers for WebSocket connection.
      Origin: 'http://agar.io'
    };

    //don't change things below if you don't understand what you're doing

    this.tick_counter = 0; //number of ticks (packet ID 16 counter)
    this.inactive_interval = 0; //ID of setInterval()
    this.balls = {}; //all balls
    this.my_balls = []; //IDs of my balls
    this.score = 0; //my score
    this.leaders = []; //IDs of leaders in FFA mode
    this.teams_scores = []; //scores of teams in Teams mode
    this.auth_token = ''; //auth token. Check README.md how to get it
    this.auth_provider = 1; //auth provider. 1 = facebook, 2 = google
    this.spawn_attempt = 0; //attempt to spawn
    this.spawn_interval_id = 0; //ID of setInterval()
  }

  return {
    setters: [function (_3) {
      Account = _3['default'];
    }, function (_2) {
      EventEmitter = _2['default'];
    }, function (_4) {
      Ball = _4['default'];
    }, function (_a) {
      _Object$defineProperties = _a['default'];
    }, function (_c) {
      Buffer = _c.Buffer;
    }, function (_b) {
      Packet = _b['default'];
    }, function (_f) {
      servers = _f['default'];
    }],
    execute: function () {
      'use strict';

      Client.prototype = _Object$defineProperties({
        connect: function connect(server, key) {
          var opt = {
            headers: this.headers
          };
          if (this.agent) opt.agent = this.agent;
          if (this.local_address) opt.localAddress = this.local_address;

          this.ws = new WebSocket(server);
          this.ws.binaryType = 'arraybuffer';
          this.ws.onopen = this.onConnect.bind(this);
          this.ws.onmessage = this.onMessage.bind(this);
          this.ws.onclose = this.onDisconnect.bind(this);
          this.ws.onerror = this.onError.bind(this);
          this.server = server;
          this.key = key;

          if (this.debug >= 1) {
            if (!key) this.log('[warning] You did not specified "key" for Client.connect(server, key)\n' + '          If server will not accept you, this may be the problem');
            this.log('connecting...');
          }

          this.emitEvent('connecting');
        },

        disconnect: function disconnect() {
          if (this.debug >= 1) this.log('disconnect() called');

          if (!this.ws) {
            if (this.debug >= 1) this.log('[warning] disconnect() called before connect(), ignoring this call');
            return false;
          }

          this.ws.close();
          return true;
        },

        onConnect: function onConnect() {
          var client = this;

          if (this.debug >= 1) this.log('connected to server');

          this.inactive_interval = setInterval(this.detsroyInactive.bind(this), this.inactive_check);

          var buf = new Buffer(5);
          buf.writeUInt8(254, 0);
          buf.writeUInt32LE(5, 1);

          if (this.ws.readyState !== WebSocket.OPEN) {
            //`ws` bug https://github.com/websockets/ws/issues/669 `Crash 2`
            this.onPacketError(new Packet(buf), new Error('ws bug #669:crash2 detected, `onopen` called with not established connection'));
            return;
          }

          this.send(buf);

          buf = new Buffer(5);
          buf.writeUInt8(255, 0);
          buf.writeUInt32LE(154669603, 1);
          this.send(buf);

          var i;
          if (this.key) {
            buf = new Buffer(1 + this.key.length);
            buf.writeUInt8(80, 0);
            for (i = 1; i <= this.key.length; ++i) {
              buf.writeUInt8(this.key.charCodeAt(i - 1), i);
            }
            this.send(buf);
          }
          if (this.auth_token) {
            buf = new Buffer(2 + this.auth_token.length);
            buf.writeUInt8(82, 0);
            buf.writeUInt8(this.auth_provider, 1);
            for (i = 1; i <= this.auth_token.length; ++i) {
              buf.writeUInt8(this.auth_token.charCodeAt(i - 1), i + 1);
            }
            this.send(buf);
          }

          client.emitEvent('connected');
        },

        onError: function onError(e) {
          if (this.debug >= 1) this.log('connection error: ' + e);

          this.emitEvent('connectionError', e);
          this.reset();
        },

        onDisconnect: function onDisconnect() {
          if (this.debug >= 1) this.log('disconnected');

          this.emitEvent('disconnect');
          this.reset();
        },

        onMessage: function onMessage(e) {
          var packet = new Packet(e);
          if (!packet.length) {
            return this.onPacketError(packet, new Error('Empty packet received'));
          }
          var packet_id = packet.readUInt8();
          var processor = this.processors[packet_id];
          if (!processor) return this.log('[warning] unknown packet ID(' + packet_id + '): ' + packet.toString());

          if (this.debug >= 4) this.log('RECV packet ID=' + packet_id + ' LEN=' + packet.length);
          if (this.debug >= 5) this.log('dump: ' + packet.toString());

          this.emitEvent('message', packet);

          try {
            processor.call(this, this, packet);
          } catch (err) {
            this.onPacketError(packet, err);
          }
        },

        // Had to do this because sometimes somehow packets get moving by 1 byte
        // https://github.com/pulviscriptor/agario-client/issues/46#issuecomment-169764771
        onPacketError: function onPacketError(packet, err) {
          var crash = true;

          this.emitEvent('packetError', packet, err, function () {
            crash = false;
          });

          if (crash) {
            if (this.debug >= 1) this.log('Packet error detected! Check packetError event in README.md');
            throw err;
          }
        },

        send: function send(buf) {
          if (this.debug >= 4) this.log('SEND packet ID=' + buf.readUInt8(0) + ' LEN=' + buf.length);

          if (this.debug >= 5) this.log('dump: ' + new Packet(buf).toString());

          this.ws.send(buf);
        },

        reset: function reset() {
          if (this.debug >= 3) this.log('reset()');

          clearInterval(this.inactive_interval);
          clearInterval(this.spawn_interval_id);
          this.spawn_interval_id = 0;
          this.leaders = [];
          this.teams_scores = [];
          this.my_balls = [];
          this.spawn_attempt = 0;

          for (var k in this.balls) if (this.balls.hasOwnProperty(k)) this.balls[k].destroy({ reason: 'reset' });
          this.emitEvent('reset');
        },

        detsroyInactive: function detsroyInactive() {
          var time = Date.now();

          if (this.debug >= 3) this.log('destroying inactive balls');

          for (var k in this.balls) {
            if (!this.balls.hasOwnProperty(k)) continue;
            var ball = this.balls[k];
            if (time - ball.last_update < this.inactive_destroy) continue;
            if (ball.visible) continue;

            if (this.debug >= 3) this.log('destroying inactive ' + ball);

            ball.destroy({ reason: 'inactive' });
          }
        },

        processors: {
          //tick
          16: function _(client, packet) {
            var eaters_count = packet.readUInt16LE();
            var ball_id;
            var ball;

            client.tick_counter++;

            //reading eat events
            for (var i = 0; i < eaters_count; i++) {
              var eater_id = packet.readUInt32LE();
              var eaten_id = packet.readUInt32LE();

              if (client.debug >= 4) client.log(eater_id + ' ate ' + eaten_id + ' (' + client.balls[eater_id] + '>' + client.balls[eaten_id] + ')');

              if (!client.balls[eater_id]) new Ball(client, eater_id);
              client.balls[eater_id].update();
              if (client.balls[eaten_id]) client.balls[eaten_id].destroy({ reason: 'eaten', by: eater_id });

              client.emitEvent('somebodyAteSomething', eater_id, eaten_id);
            }

            //reading actions of balls
            while (1) {
              var is_virus = false;
              var coordinate_x;
              var coordinate_y;
              var size;
              var color;
              var nick = null;

              ball_id = packet.readUInt32LE();
              if (ball_id === 0) break;
              coordinate_x = packet.readSInt32LE();
              coordinate_y = packet.readSInt32LE();
              size = packet.readSInt16LE();

              var color_R = packet.readUInt8();
              var color_G = packet.readUInt8();
              var color_B = packet.readUInt8();

              color = (color_R << 16 | color_G << 8 | color_B).toString(16);
              color = '#' + ('000000' + color).substr(-6);

              var opt = packet.readUInt8();
              is_virus = !!(opt & 1);
              var something_1 = !!(opt & 16); //todo what is this?

              //reserved for future use?
              if (opt & 2) {
                packet.offset += packet.readUInt32LE();
              }
              var char;
              if (opt & 4) {
                var something_2 = ''; //todo something related to premium skins
                while (1) {
                  char = packet.readUInt8();
                  if (char === 0) break;
                  if (!something_2) something_2 = '';
                  something_2 += String.fromCharCode(char);
                }
              }

              while (1) {
                char = packet.readUInt16LE();
                if (char === 0) break;
                if (!nick) nick = '';
                nick += String.fromCharCode(char);
              }

              ball = client.balls[ball_id] || new Ball(client, ball_id);
              ball.color = color;
              ball.virus = is_virus;
              ball.setCords(coordinate_x, coordinate_y);
              ball.setSize(size);
              if (nick) ball.setName(nick);
              ball.update_tick = client.tick_counter;
              ball.appear();
              ball.update();

              if (client.debug >= 5) client.log('action: ball_id=' + ball_id + ' coordinate_x=' + coordinate_x + ' coordinate_y=' + coordinate_y + ' size=' + size + ' is_virus=' + is_virus + ' nick=' + nick);

              client.emitEvent('ballAction', ball_id, coordinate_x, coordinate_y, size, is_virus, nick);
            }

            var balls_on_screen_count = packet.readUInt32LE();

            //disappear events
            for (i = 0; i < balls_on_screen_count; i++) {
              ball_id = packet.readUInt32LE();

              ball = client.balls[ball_id] || new Ball(client, ball_id);
              ball.update_tick = client.tick_counter;
              ball.update();
              if (ball.mine) {
                ball.destroy({ reason: 'merge' });
                client.emitEvent('merge', ball.id);
              } else {
                ball.disappear();
              }
            }
          },

          //update spectating coordinates in "spectate" mode
          17: function _(client, packet) {
            var x = packet.readFloat32LE();
            var y = packet.readFloat32LE();
            var zoom = packet.readFloat32LE();

            if (client.debug >= 4) client.log('spectate FOV update: x=' + x + ' y=' + y + ' zoom=' + zoom);

            client.emitEvent('spectateFieldUpdate', x, y, zoom);
          },

          18: function _() {
            for (var k in this.balls) if (this.balls.hasOwnProperty(k)) this.balls[k].destroy({ reason: 'server-forced' });
          },

          20: function _() {
            //i dont know what this is
            //in original code it clears our balls array, but i never saw this packet
          },

          //debug line drawn from the player to the specified point
          21: function _(client, packet) {
            var line_x = packet.readSInt16LE();
            var line_y = packet.readSInt16LE();

            if (client.debug >= 4) client.log('debug line drawn from x=' + line_x + ' y=' + line_y);
            client.emitEvent('debugLine', line_x, line_y);
          },

          //new ID of your ball (when you join or press space)
          32: function _(client, packet) {
            var ball_id = packet.readUInt32LE();
            var ball = client.balls[ball_id] || new Ball(client, ball_id);
            ball.mine = true;
            if (!client.my_balls.length) client.score = 0;
            client.my_balls.push(ball_id);

            if (client.debug >= 2) client.log('my new ball: ' + ball_id);

            if (client.spawn_interval_id) {
              if (client.debug >= 4) client.log('detected new ball, disabling spawn() interval');
              client.spawn_attempt = 0;
              clearInterval(client.spawn_interval_id);
              client.spawn_interval_id = 0;
            }

            client.emitEvent('myNewBall', ball_id);
          },

          //leaderboard update in FFA mode
          49: function _(client, packet) {
            var users = [];
            var count = packet.readUInt32LE();

            for (var i = 0; i < count; i++) {
              var id = packet.readUInt32LE();

              var name = '';
              while (1) {
                var char = packet.readUInt16LE();
                if (char === 0) break;
                name += String.fromCharCode(char);
              }

              users.push(id);
              var ball = client.balls[id] || new Ball(client, id);
              if (name) ball.setName(name);
              ball.update();
            }

            if (JSON.stringify(client.leaders) == JSON.stringify(users)) return;
            var old_leaders = client.leaders;
            client.leaders = users;

            if (client.debug >= 3) client.log('leaders update: ' + JSON.stringify(users));

            client.emitEvent('leaderBoardUpdate', old_leaders, users);
          },

          //teams scored update in teams mode
          50: function _(client, packet) {
            var teams_count = packet.readUInt32LE();
            var teams_scores = [];

            for (var i = 0; i < teams_count; ++i) {
              teams_scores.push(packet.readFloat32LE());
            }

            if (JSON.stringify(client.teams_scores) == JSON.stringify(teams_scores)) return;
            var old_scores = client.teams_scores;

            if (client.debug >= 3) client.log('teams scores update: ' + JSON.stringify(teams_scores));

            client.teams_scores = teams_scores;

            client.emitEvent('teamsScoresUpdate', old_scores, teams_scores);
          },

          //map size load
          64: function _(client, packet) {
            var min_x = packet.readFloat64LE();
            var min_y = packet.readFloat64LE();
            var max_x = packet.readFloat64LE();
            var max_y = packet.readFloat64LE();

            if (client.debug >= 2) client.log('map size: ' + [min_x, min_y, max_x, max_y].join(','));

            client.emitEvent('mapSizeLoad', min_x, min_y, max_x, max_y);
          },

          //another unknown backet
          72: function _() {
            //packet is sent by server but not used in original code
          },

          81: function _(client, packet) {
            var level = packet.readUInt32LE();
            var curernt_exp = packet.readUInt32LE();
            var need_exp = packet.readUInt32LE();

            if (client.debug >= 2) client.log('experience update: ' + [level, curernt_exp, need_exp].join(','));

            client.emitEvent('experienceUpdate', level, curernt_exp, need_exp);
          },

          102: function _() {
            // This packet used for some shop server wss://web-live-v3-0.agario.miniclippt.com/ws
            // There is some "reserved" code for it in "account.js" you can check that. But it is not used since this server is useless for client
            // If you need that server support, you may create issue https://github.com/pulviscriptor/agario-client/issues
          },

          103: function _() {
            // Processor for that packet is missing in official client but @SzAmmi reporting that he receives it
            // https://github.com/pulviscriptor/agario-client/issues/94
          },

          240: function _(client, packet) {
            packet.offset += 4;
            var packet_id = packet.readUInt8();
            var processor = client.processors[packet_id];
            if (!processor) return client.log('[warning] unknown packet ID(240->' + packet_id + '): ' + packet.toString());
            processor(client, packet);
          },

          //somebody won, end of the game (server restart)
          254: function _(client) {
            if (client.debug >= 1) client.log(client.balls[client.leaders[0]] + ' WON THE GAME! Server going for restart');

            client.emitEvent('winner', client.leaders[0]);
          }
        },

        updateScore: function updateScore() {
          var potential_score = 0;
          for (var i = 0; i < this.my_balls.length; i++) {
            var ball_id = this.my_balls[i];
            var ball = this.balls[ball_id];
            potential_score += Math.pow(ball.size, 2);
          }
          var old_score = this.score;
          var new_score = Math.max(this.score, Math.floor(potential_score / 100));

          if (this.score == new_score) return;
          this.score = new_score;
          this.emitEvent('scoreUpdate', old_score, new_score);

          if (this.debug >= 2) this.log('score: ' + new_score);
        },

        log: function log(msg) {
          console.log(this.client_name + ': ' + msg);
        },

        // Fix https://github.com/pulviscriptor/agario-client/issues/95
        emitEvent: function emitEvent() {
          var args = [];
          for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
          try {
            this.emit.apply(this, args);
          } catch (e) {
            throw e;
          }
        },

        //functions that you can call to control your balls

        //spawn ball
        spawn: function spawn(name) {
          if (this.debug >= 3) this.log('spawn() called, name=' + name);

          if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
            if (this.debug >= 1) this.log('[warning] spawn() was called when connection was not established, packet will be dropped');
            return false;
          }

          var buf = new Buffer(1 + 2 * name.length);
          buf.writeUInt8(0, 0);
          for (var i = 0; i < name.length; i++) {
            buf.writeUInt16LE(name.charCodeAt(i), 1 + i * 2);
          }
          this.send(buf);

          //fix for unstable spawn on official servers
          if (!this.spawn_attempt && this.spawn_interval) {
            if (this.debug >= 4) this.log('Starting spawn() interval');

            var that = this;
            this.spawn_attempt = 1;
            this.spawn_interval_id = setInterval(function () {
              if (that.debug >= 4) that.log('spawn() interval tick, attempt ' + that.spawn_attempt + '/' + that.spawn_attempts);

              if (that.spawn_attempt >= that.spawn_attempts) {
                if (that.debug >= 1) that.log('[warning] spawn() interval gave up! Disconnecting from server!');
                that.spawn_attempt = 0;
                clearInterval(that.spawn_interval_id);
                that.spawn_interval_id = 0;
                that.disconnect();
                return;
              }
              that.spawn_attempt++;
              that.spawn(name);
            }, that.spawn_interval);
          }

          return true;
        },

        //activate spectate mode
        spectate: function spectate() {
          if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
            if (this.debug >= 1) this.log('[warning] spectate() was called when connection was not established, packet will be dropped');
            return false;
          }

          var buf = new Buffer([1]);
          this.send(buf);

          return true;
        },

        //switch spectate mode (toggle between free look view and leader view)
        spectateModeToggle: function spectateModeToggle() {
          if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
            if (this.debug >= 1) this.log('[warning] spectateModeToggle() was called when connection was not established, packet will be dropped');
            return false;
          }

          var buf = new Buffer([18]);
          this.send(buf);
          buf = new Buffer([19]);
          this.send(buf);

          return true;
        },

        moveTo: function moveTo(x, y) {
          if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
            if (this.debug >= 1) this.log('[warning] moveTo() was called when connection was not established, packet will be dropped');
            return false;
          }
          var buf = new Buffer(13);
          buf.writeUInt8(16, 0);
          buf.writeInt32LE(Math.round(x), 1);
          buf.writeInt32LE(Math.round(y), 5);
          buf.writeUInt32LE(0, 9);
          this.send(buf);

          return true;
        },

        //split your balls
        //they will split in direction that you have set with moveTo()
        split: function split() {
          if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
            if (this.debug >= 1) this.log('[warning] split() was called when connection was not established, packet will be dropped');
            return false;
          }
          var buf = new Buffer([17]);
          this.send(buf);

          return true;
        },

        //eject some mass
        //mass will eject in direction that you have set with moveTo()
        eject: function eject() {
          if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
            if (this.debug >= 1) this.log('[warning] eject() was called when connection was not established, packet will be dropped');
            return false;
          }
          var buf = new Buffer([21]);
          this.send(buf);

          return true;
        }

      }, {
        facebook_key: { //deprecated
          /* jshint ignore:start */

          set: function set(_) {
            console.trace('Property "facebook_key" is deprecated. Please check in README.md how new authorization works');
          },
          configurable: true,
          enumerable: true
        }
      });

      // Inherit from EventEmitter

      /* jshint ignore:end */
      for (key in EventEmitter.prototype) {
        if (!EventEmitter.prototype.hasOwnProperty(key)) continue;
        Client.prototype[key] = Ball.prototype[key] = EventEmitter.prototype[key];
      }

      Client.servers = servers;
      Client.Packet = Packet;
      Client.Account = Account;
      Client.Ball = Ball;

      _export('default', Client);
    }
  };
});
$__System.register('4a', ['5', '6', '7', '49', 'd', 'e'], function (_export) {
  var Dat, Connector, constants, AgarioClient, _createClass, _classCallCheck, Controller;

  return {
    setters: [function (_) {
      Dat = _['default'];
    }, function (_2) {
      Connector = _2['default'];
    }, function (_3) {
      constants = _3['default'];
    }, function (_4) {
      AgarioClient = _4['default'];
    }, function (_d) {
      _createClass = _d['default'];
    }, function (_e) {
      _classCallCheck = _e['default'];
    }],
    execute: function () {
      'use strict';

      Controller = (function () {
        function Controller(client) {
          var _this = this;

          _classCallCheck(this, Controller);

          this.client = client;
          this.connector = new Connector();

          this.server = {
            region: 'EU-London',
            ws: '127.0.0.1:9158',
            token: ''
          };
          this.nick = constants.DEFAULT_NICKNAME;
          this.autoRespawn = false;

          this.gui = new Dat.GUI();

          this.servgui = this.gui.addFolder('Server');

          this.servgui.add(this.server, 'region', ['US-Fremont', 'US-Atlanta', 'BR-Brazil', 'EU-London', 'RU-Russia', 'JP-Tokyo', 'CN-China', 'SG-Singapore', 'TK-Turkey']);
          this.servgui.add(this, 'findFfa');
          this.servgui.add(this, 'findParty');

          this.servgui.add(this.server, 'token');
          this.servgui.add(this, 'connectParty');

          this.servgui.add(this.server, 'ws');
          this.servgui.add(this, 'directConnect');

          this.servgui.add(this, 'disconnect');

          this.servgui.open();

          this.cellgui = this.gui.addFolder('Cell');
          this.cellgui.add(this, 'nick');
          this.cellgui.add(this, 'spawn');
          this.cellgui.add(this, 'autoRespawn');
          var scoreGui = this.cellgui.add(this.client, 'score').listen();
          this.client.on('scoreUpdate', function () {
            scoreGui.updateDisplay();
          });

          this.leadergui = this.gui.addFolder('Leaderboard');
          this.leaders = {};
          this.resetLeader();
          for (var i = 1; i <= 10; i++) {
            this.leadergui.add(this.leaders, i);
          }

          client.on('connected', function () {
            _this.servgui.close();
            _this.cellgui.open();
            _this.leadergui.open();
            if (_this.autoRespawn) {
              _this.spawn();
            }
          });
          client.on('reset', function () {
            _this.servgui.open();
            _this.cellgui.close();
            _this.leadergui.close();
            _this.resetLeader();
          });
          client.on('lostMyBalls', function () {
            if (_this.autoRespawn) {
              _this.spawn();
            }
          });
          client.on('leaderBoardUpdate', function (old, leaders) {
            for (var i in leaders) {
              var rank = parseInt(i) + 1;
              _this.leaders[rank] = client.balls[leaders[i]].name || 'An unnamed cell';
              for (var j in _this.leadergui.__controllers) {
                _this.leadergui.__controllers[j].updateDisplay();
              }
            }
          });
          this.connector.onconnect = function () {
            return _this.connect.apply(_this, arguments);
          };
        }

        _createClass(Controller, [{
          key: 'findFfa',
          value: function findFfa() {
            this.connector.findFfa(this.server.region);
          }
        }, {
          key: 'findParty',
          value: function findParty() {
            this.connector.findParty(this.server.region);
          }
        }, {
          key: 'connectParty',
          value: function connectParty() {
            this.connector.connectParty(this.server.token);
          }
        }, {
          key: 'directConnect',
          value: function directConnect() {
            this.connector.directConnect(this.server.ws, this.server.token);
          }
        }, {
          key: 'disconnect',
          value: function disconnect() {
            this.client.disconnect();
          }
        }, {
          key: 'connect',
          value: function connect(ws, token) {
            this.server.ws = ws;
            this.server.token = token;
            for (var i in this.servgui.__controllers) {
              this.servgui.__controllers[i].updateDisplay();
            }this.client.connect('ws://' + ws, token);
          }
        }, {
          key: 'spawn',
          value: function spawn() {
            this.client.spawn(this.nick);
          }
        }, {
          key: 'resetLeader',
          value: function resetLeader() {
            for (var i = 1; i <= 10; i++) {
              this.leaders[i] = '---';
            }
          }
        }]);

        return Controller;
      })();

      _export('default', Controller);
    }
  };
});
$__System.registerDynamic("4b", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  class MapSize {
    constructor(minX, minY, maxX, maxY) {
      this.minX = minX;
      this.maxX = maxX;
      this.minY = minY;
      this.maxY = maxY;
    }
    centerX() {
      return (this.minX + this.maxX) / 2;
    }
    centerY() {
      return (this.minY + this.maxY) / 2;
    }
    width() {
      return this.maxX - this.minX;
    }
    height() {
      return this.maxY - this.minY;
    }
    static default() {
      const dim = -1000;
      return new MapSize(-dim, dim, -dim, dim);
    }
  }
  module.exports = MapSize;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4c", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
  }
  module.exports = Object.assign || function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }
      if (Object.getOwnPropertySymbols) {
        symbols = Object.getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }
    return to;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4d", ["4c"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('4c');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4e", ["4d"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  if (!Object.assign) {
    Object.assign = $__require('4d');
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4f", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  if (!(Date.now && Date.prototype.getTime)) {
    Date.now = function now() {
      return new Date().getTime();
    };
  }
  if (!(global.performance && global.performance.now)) {
    var startTime = Date.now();
    if (!global.performance) {
      global.performance = {};
    }
    global.performance.now = function() {
      return Date.now() - startTime;
    };
  }
  var lastTime = Date.now();
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for (var x = 0; x < vendors.length && !global.requestAnimationFrame; ++x) {
    global.requestAnimationFrame = global[vendors[x] + 'RequestAnimationFrame'];
    global.cancelAnimationFrame = global[vendors[x] + 'CancelAnimationFrame'] || global[vendors[x] + 'CancelRequestAnimationFrame'];
  }
  if (!global.requestAnimationFrame) {
    global.requestAnimationFrame = function(callback) {
      if (typeof callback !== 'function') {
        throw new TypeError(callback + 'is not a function');
      }
      var currentTime = Date.now(),
          delay = 16 + lastTime - currentTime;
      if (delay < 0) {
        delay = 0;
      }
      lastTime = currentTime;
      return setTimeout(function() {
        lastTime = Date.now();
        callback(performance.now());
      }, delay);
    };
  }
  if (!global.cancelAnimationFrame) {
    global.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("50", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  if (!Math.sign) {
    Math.sign = function(x) {
      x = +x;
      if (x === 0 || isNaN(x)) {
        return x;
      }
      return x > 0 ? 1 : -1;
    };
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("51", ["4e", "4f", "50"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('4e');
  $__require('4f');
  $__require('50');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("52", ["53"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = $__require('53');
  function InteractionData() {
    this.global = new core.Point();
    this.target = null;
    this.originalEvent = null;
  }
  InteractionData.prototype.constructor = InteractionData;
  module.exports = InteractionData;
  InteractionData.prototype.getLocalPosition = function(displayObject, point, globalPos) {
    return displayObject.worldTransform.applyInverse(globalPos || this.global, point);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("54", ["53", "52", "55"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = $__require('53'),
      InteractionData = $__require('52');
  Object.assign(core.DisplayObject.prototype, $__require('55'));
  function InteractionManager(renderer, options) {
    options = options || {};
    this.renderer = renderer;
    this.autoPreventDefault = options.autoPreventDefault !== undefined ? options.autoPreventDefault : true;
    this.interactionFrequency = options.interactionFrequency || 10;
    this.mouse = new InteractionData();
    this.eventData = {
      stopped: false,
      target: null,
      type: null,
      data: this.mouse,
      stopPropagation: function() {
        this.stopped = true;
      }
    };
    this.interactiveDataPool = [];
    this.interactionDOMElement = null;
    this.eventsAdded = false;
    this.onMouseUp = this.onMouseUp.bind(this);
    this.processMouseUp = this.processMouseUp.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.processMouseDown = this.processMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.processMouseMove = this.processMouseMove.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.processMouseOverOut = this.processMouseOverOut.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.processTouchStart = this.processTouchStart.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.processTouchEnd = this.processTouchEnd.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.processTouchMove = this.processTouchMove.bind(this);
    this.last = 0;
    this.currentCursorStyle = 'inherit';
    this._tempPoint = new core.Point();
    this.resolution = 1;
    this.setTargetElement(this.renderer.view, this.renderer.resolution);
  }
  InteractionManager.prototype.constructor = InteractionManager;
  module.exports = InteractionManager;
  InteractionManager.prototype.setTargetElement = function(element, resolution) {
    this.removeEvents();
    this.interactionDOMElement = element;
    this.resolution = resolution || 1;
    this.addEvents();
  };
  InteractionManager.prototype.addEvents = function() {
    if (!this.interactionDOMElement) {
      return;
    }
    core.ticker.shared.add(this.update, this);
    if (window.navigator.msPointerEnabled) {
      this.interactionDOMElement.style['-ms-content-zooming'] = 'none';
      this.interactionDOMElement.style['-ms-touch-action'] = 'none';
    }
    window.document.addEventListener('mousemove', this.onMouseMove, true);
    this.interactionDOMElement.addEventListener('mousedown', this.onMouseDown, true);
    this.interactionDOMElement.addEventListener('mouseout', this.onMouseOut, true);
    this.interactionDOMElement.addEventListener('touchstart', this.onTouchStart, true);
    this.interactionDOMElement.addEventListener('touchend', this.onTouchEnd, true);
    this.interactionDOMElement.addEventListener('touchmove', this.onTouchMove, true);
    window.addEventListener('mouseup', this.onMouseUp, true);
    this.eventsAdded = true;
  };
  InteractionManager.prototype.removeEvents = function() {
    if (!this.interactionDOMElement) {
      return;
    }
    core.ticker.shared.remove(this.update);
    if (window.navigator.msPointerEnabled) {
      this.interactionDOMElement.style['-ms-content-zooming'] = '';
      this.interactionDOMElement.style['-ms-touch-action'] = '';
    }
    window.document.removeEventListener('mousemove', this.onMouseMove, true);
    this.interactionDOMElement.removeEventListener('mousedown', this.onMouseDown, true);
    this.interactionDOMElement.removeEventListener('mouseout', this.onMouseOut, true);
    this.interactionDOMElement.removeEventListener('touchstart', this.onTouchStart, true);
    this.interactionDOMElement.removeEventListener('touchend', this.onTouchEnd, true);
    this.interactionDOMElement.removeEventListener('touchmove', this.onTouchMove, true);
    this.interactionDOMElement = null;
    window.removeEventListener('mouseup', this.onMouseUp, true);
    this.eventsAdded = false;
  };
  InteractionManager.prototype.update = function(deltaTime) {
    this._deltaTime += deltaTime;
    if (this._deltaTime < this.interactionFrequency) {
      return;
    }
    this._deltaTime = 0;
    if (!this.interactionDOMElement) {
      return;
    }
    if (this.didMove) {
      this.didMove = false;
      return;
    }
    this.cursor = 'inherit';
    this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseOverOut, true);
    if (this.currentCursorStyle !== this.cursor) {
      this.currentCursorStyle = this.cursor;
      this.interactionDOMElement.style.cursor = this.cursor;
    }
  };
  InteractionManager.prototype.dispatchEvent = function(displayObject, eventString, eventData) {
    if (!eventData.stopped) {
      eventData.target = displayObject;
      eventData.type = eventString;
      displayObject.emit(eventString, eventData);
      if (displayObject[eventString]) {
        displayObject[eventString](eventData);
      }
    }
  };
  InteractionManager.prototype.mapPositionToPoint = function(point, x, y) {
    var rect = this.interactionDOMElement.getBoundingClientRect();
    point.x = ((x - rect.left) * (this.interactionDOMElement.width / rect.width)) / this.resolution;
    point.y = ((y - rect.top) * (this.interactionDOMElement.height / rect.height)) / this.resolution;
  };
  InteractionManager.prototype.processInteractive = function(point, displayObject, func, hitTest, interactive) {
    if (!displayObject || !displayObject.visible) {
      return false;
    }
    var hit = false,
        interactiveParent = interactive = displayObject.interactive || interactive;
    if (displayObject.hitArea) {
      interactiveParent = false;
    }
    if (displayObject.interactiveChildren) {
      var children = displayObject.children;
      for (var i = children.length - 1; i >= 0; i--) {
        if (this.processInteractive(point, children[i], func, hitTest, interactiveParent)) {
          hit = true;
          interactiveParent = false;
          if (children[i].interactive) {
            hitTest = false;
          }
        }
      }
    }
    if (interactive) {
      if (hitTest && !hit) {
        if (displayObject.hitArea) {
          displayObject.worldTransform.applyInverse(point, this._tempPoint);
          hit = displayObject.hitArea.contains(this._tempPoint.x, this._tempPoint.y);
        } else if (displayObject.containsPoint) {
          hit = displayObject.containsPoint(point);
        }
      }
      if (displayObject.interactive) {
        func(displayObject, hit);
      }
    }
    return hit;
  };
  InteractionManager.prototype.onMouseDown = function(event) {
    this.mouse.originalEvent = event;
    this.eventData.data = this.mouse;
    this.eventData.stopped = false;
    this.mapPositionToPoint(this.mouse.global, event.clientX, event.clientY);
    if (this.autoPreventDefault) {
      this.mouse.originalEvent.preventDefault();
    }
    this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseDown, true);
  };
  InteractionManager.prototype.processMouseDown = function(displayObject, hit) {
    var e = this.mouse.originalEvent;
    var isRightButton = e.button === 2 || e.which === 3;
    if (hit) {
      displayObject[isRightButton ? '_isRightDown' : '_isLeftDown'] = true;
      this.dispatchEvent(displayObject, isRightButton ? 'rightdown' : 'mousedown', this.eventData);
    }
  };
  InteractionManager.prototype.onMouseUp = function(event) {
    this.mouse.originalEvent = event;
    this.eventData.data = this.mouse;
    this.eventData.stopped = false;
    this.mapPositionToPoint(this.mouse.global, event.clientX, event.clientY);
    this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseUp, true);
  };
  InteractionManager.prototype.processMouseUp = function(displayObject, hit) {
    var e = this.mouse.originalEvent;
    var isRightButton = e.button === 2 || e.which === 3;
    var isDown = isRightButton ? '_isRightDown' : '_isLeftDown';
    if (hit) {
      this.dispatchEvent(displayObject, isRightButton ? 'rightup' : 'mouseup', this.eventData);
      if (displayObject[isDown]) {
        displayObject[isDown] = false;
        this.dispatchEvent(displayObject, isRightButton ? 'rightclick' : 'click', this.eventData);
      }
    } else {
      if (displayObject[isDown]) {
        displayObject[isDown] = false;
        this.dispatchEvent(displayObject, isRightButton ? 'rightupoutside' : 'mouseupoutside', this.eventData);
      }
    }
  };
  InteractionManager.prototype.onMouseMove = function(event) {
    this.mouse.originalEvent = event;
    this.eventData.data = this.mouse;
    this.eventData.stopped = false;
    this.mapPositionToPoint(this.mouse.global, event.clientX, event.clientY);
    this.didMove = true;
    this.cursor = 'inherit';
    this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseMove, true);
    if (this.currentCursorStyle !== this.cursor) {
      this.currentCursorStyle = this.cursor;
      this.interactionDOMElement.style.cursor = this.cursor;
    }
  };
  InteractionManager.prototype.processMouseMove = function(displayObject, hit) {
    this.dispatchEvent(displayObject, 'mousemove', this.eventData);
    this.processMouseOverOut(displayObject, hit);
  };
  InteractionManager.prototype.onMouseOut = function(event) {
    this.mouse.originalEvent = event;
    this.eventData.stopped = false;
    this.mapPositionToPoint(this.mouse.global, event.clientX, event.clientY);
    this.interactionDOMElement.style.cursor = 'inherit';
    this.mapPositionToPoint(this.mouse.global, event.clientX, event.clientY);
    this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseOverOut, false);
  };
  InteractionManager.prototype.processMouseOverOut = function(displayObject, hit) {
    if (hit) {
      if (!displayObject._over) {
        displayObject._over = true;
        this.dispatchEvent(displayObject, 'mouseover', this.eventData);
      }
      if (displayObject.buttonMode) {
        this.cursor = displayObject.defaultCursor;
      }
    } else {
      if (displayObject._over) {
        displayObject._over = false;
        this.dispatchEvent(displayObject, 'mouseout', this.eventData);
      }
    }
  };
  InteractionManager.prototype.onTouchStart = function(event) {
    if (this.autoPreventDefault) {
      event.preventDefault();
    }
    var changedTouches = event.changedTouches;
    var cLength = changedTouches.length;
    for (var i = 0; i < cLength; i++) {
      var touchEvent = changedTouches[i];
      var touchData = this.getTouchData(touchEvent);
      touchData.originalEvent = event;
      this.eventData.data = touchData;
      this.eventData.stopped = false;
      this.processInteractive(touchData.global, this.renderer._lastObjectRendered, this.processTouchStart, true);
      this.returnTouchData(touchData);
    }
  };
  InteractionManager.prototype.processTouchStart = function(displayObject, hit) {
    if (hit) {
      displayObject._touchDown = true;
      this.dispatchEvent(displayObject, 'touchstart', this.eventData);
    }
  };
  InteractionManager.prototype.onTouchEnd = function(event) {
    if (this.autoPreventDefault) {
      event.preventDefault();
    }
    var changedTouches = event.changedTouches;
    var cLength = changedTouches.length;
    for (var i = 0; i < cLength; i++) {
      var touchEvent = changedTouches[i];
      var touchData = this.getTouchData(touchEvent);
      touchData.originalEvent = event;
      this.eventData.data = touchData;
      this.eventData.stopped = false;
      this.processInteractive(touchData.global, this.renderer._lastObjectRendered, this.processTouchEnd, true);
      this.returnTouchData(touchData);
    }
  };
  InteractionManager.prototype.processTouchEnd = function(displayObject, hit) {
    if (hit) {
      this.dispatchEvent(displayObject, 'touchend', this.eventData);
      if (displayObject._touchDown) {
        displayObject._touchDown = false;
        this.dispatchEvent(displayObject, 'tap', this.eventData);
      }
    } else {
      if (displayObject._touchDown) {
        displayObject._touchDown = false;
        this.dispatchEvent(displayObject, 'touchendoutside', this.eventData);
      }
    }
  };
  InteractionManager.prototype.onTouchMove = function(event) {
    if (this.autoPreventDefault) {
      event.preventDefault();
    }
    var changedTouches = event.changedTouches;
    var cLength = changedTouches.length;
    for (var i = 0; i < cLength; i++) {
      var touchEvent = changedTouches[i];
      var touchData = this.getTouchData(touchEvent);
      touchData.originalEvent = event;
      this.eventData.data = touchData;
      this.eventData.stopped = false;
      this.processInteractive(touchData.global, this.renderer._lastObjectRendered, this.processTouchMove, true);
      this.returnTouchData(touchData);
    }
  };
  InteractionManager.prototype.processTouchMove = function(displayObject, hit) {
    hit = hit;
    this.dispatchEvent(displayObject, 'touchmove', this.eventData);
  };
  InteractionManager.prototype.getTouchData = function(touchEvent) {
    var touchData = this.interactiveDataPool.pop();
    if (!touchData) {
      touchData = new InteractionData();
    }
    touchData.identifier = touchEvent.identifier;
    this.mapPositionToPoint(touchData.global, touchEvent.clientX, touchEvent.clientY);
    if (navigator.isCocoonJS) {
      touchData.global.x = touchData.global.x / this.resolution;
      touchData.global.y = touchData.global.y / this.resolution;
    }
    touchEvent.globalX = touchData.global.x;
    touchEvent.globalY = touchData.global.y;
    return touchData;
  };
  InteractionManager.prototype.returnTouchData = function(touchData) {
    this.interactiveDataPool.push(touchData);
  };
  InteractionManager.prototype.destroy = function() {
    this.removeEvents();
    this.renderer = null;
    this.mouse = null;
    this.eventData = null;
    this.interactiveDataPool = null;
    this.interactionDOMElement = null;
    this.onMouseUp = null;
    this.processMouseUp = null;
    this.onMouseDown = null;
    this.processMouseDown = null;
    this.onMouseMove = null;
    this.processMouseMove = null;
    this.onMouseOut = null;
    this.processMouseOverOut = null;
    this.onTouchStart = null;
    this.processTouchStart = null;
    this.onTouchEnd = null;
    this.processTouchEnd = null;
    this.onTouchMove = null;
    this.processTouchMove = null;
    this._tempPoint = null;
  };
  core.WebGLRenderer.registerPlugin('interaction', InteractionManager);
  core.CanvasRenderer.registerPlugin('interaction', InteractionManager);
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("55", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var interactiveTarget = {
    interactive: false,
    buttonMode: false,
    interactiveChildren: true,
    defaultCursor: 'pointer',
    _over: false,
    _touchDown: false
  };
  module.exports = interactiveTarget;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("56", ["52", "54", "55"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    InteractionData: $__require('52'),
    InteractionManager: $__require('54'),
    interactiveTarget: $__require('55')
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("57", ["5b", "58", "59", "5a"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ResourceLoader = $__require('5b'),
      textureParser = $__require('58'),
      spritesheetParser = $__require('59'),
      bitmapFontParser = $__require('5a');
  function Loader(baseUrl, concurrency) {
    ResourceLoader.call(this, baseUrl, concurrency);
    for (var i = 0; i < Loader._pixiMiddleware.length; ++i) {
      this.use(Loader._pixiMiddleware[i]());
    }
  }
  Loader.prototype = Object.create(ResourceLoader.prototype);
  Loader.prototype.constructor = Loader;
  module.exports = Loader;
  Loader._pixiMiddleware = [ResourceLoader.middleware.parsing.blob, textureParser, spritesheetParser, bitmapFontParser];
  Loader.addPixiMiddleware = function(fn) {
    Loader._pixiMiddleware.push(fn);
  };
  var Resource = ResourceLoader.Resource;
  Resource.setExtensionXhrType('fnt', Resource.XHR_RESPONSE_TYPE.DOCUMENT);
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5a", ["5b", "53", "5c", "5d"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Resource = $__require('5b').Resource,
      core = $__require('53'),
      extras = $__require('5c'),
      path = $__require('5d');
  function parse(resource, texture) {
    var data = {};
    var info = resource.data.getElementsByTagName('info')[0];
    var common = resource.data.getElementsByTagName('common')[0];
    data.font = info.getAttribute('face');
    data.size = parseInt(info.getAttribute('size'), 10);
    data.lineHeight = parseInt(common.getAttribute('lineHeight'), 10);
    data.chars = {};
    var letters = resource.data.getElementsByTagName('char');
    for (var i = 0; i < letters.length; i++) {
      var charCode = parseInt(letters[i].getAttribute('id'), 10);
      var textureRect = new core.Rectangle(parseInt(letters[i].getAttribute('x'), 10) + texture.frame.x, parseInt(letters[i].getAttribute('y'), 10) + texture.frame.y, parseInt(letters[i].getAttribute('width'), 10), parseInt(letters[i].getAttribute('height'), 10));
      data.chars[charCode] = {
        xOffset: parseInt(letters[i].getAttribute('xoffset'), 10),
        yOffset: parseInt(letters[i].getAttribute('yoffset'), 10),
        xAdvance: parseInt(letters[i].getAttribute('xadvance'), 10),
        kerning: {},
        texture: new core.Texture(texture.baseTexture, textureRect)
      };
    }
    var kernings = resource.data.getElementsByTagName('kerning');
    for (i = 0; i < kernings.length; i++) {
      var first = parseInt(kernings[i].getAttribute('first'), 10);
      var second = parseInt(kernings[i].getAttribute('second'), 10);
      var amount = parseInt(kernings[i].getAttribute('amount'), 10);
      data.chars[second].kerning[first] = amount;
    }
    resource.bitmapFont = data;
    extras.BitmapText.fonts[data.font] = data;
  }
  module.exports = function() {
    return function(resource, next) {
      if (!resource.data || !resource.isXml) {
        return next();
      }
      if (resource.data.getElementsByTagName('page').length === 0 || resource.data.getElementsByTagName('info').length === 0 || resource.data.getElementsByTagName('info')[0].getAttribute('face') === null) {
        return next();
      }
      var xmlUrl = path.dirname(resource.url);
      if (xmlUrl === '.') {
        xmlUrl = '';
      }
      if (this.baseUrl && xmlUrl) {
        if (this.baseUrl.charAt(this.baseUrl.length - 1) === '/') {
          xmlUrl += '/';
        }
        xmlUrl = xmlUrl.replace(this.baseUrl, '');
      }
      if (xmlUrl && xmlUrl.charAt(xmlUrl.length - 1) !== '/') {
        xmlUrl += '/';
      }
      var textureUrl = xmlUrl + resource.data.getElementsByTagName('page')[0].getAttribute('file');
      if (core.utils.TextureCache[textureUrl]) {
        parse(resource, core.utils.TextureCache[textureUrl]);
        next();
      } else {
        var loadOptions = {
          crossOrigin: resource.crossOrigin,
          loadType: Resource.LOAD_TYPE.IMAGE,
          metadata: resource.metadata.imageMetadata
        };
        this.add(resource.name + '_image', textureUrl, loadOptions, function(res) {
          parse(resource, res.texture);
          next();
        });
      }
    };
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5e", ["25"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    function normalizeArray(parts, allowAboveRoot) {
      var up = 0;
      for (var i = parts.length - 1; i >= 0; i--) {
        var last = parts[i];
        if (last === '.') {
          parts.splice(i, 1);
        } else if (last === '..') {
          parts.splice(i, 1);
          up++;
        } else if (up) {
          parts.splice(i, 1);
          up--;
        }
      }
      if (allowAboveRoot) {
        for (; up--; up) {
          parts.unshift('..');
        }
      }
      return parts;
    }
    var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
    var splitPath = function(filename) {
      return splitPathRe.exec(filename).slice(1);
    };
    exports.resolve = function() {
      var resolvedPath = '',
          resolvedAbsolute = false;
      for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
        var path = (i >= 0) ? arguments[i] : process.cwd();
        if (typeof path !== 'string') {
          throw new TypeError('Arguments to path.resolve must be strings');
        } else if (!path) {
          continue;
        }
        resolvedPath = path + '/' + resolvedPath;
        resolvedAbsolute = path.charAt(0) === '/';
      }
      resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
        return !!p;
      }), !resolvedAbsolute).join('/');
      return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
    };
    exports.normalize = function(path) {
      var isAbsolute = exports.isAbsolute(path),
          trailingSlash = substr(path, -1) === '/';
      path = normalizeArray(filter(path.split('/'), function(p) {
        return !!p;
      }), !isAbsolute).join('/');
      if (!path && !isAbsolute) {
        path = '.';
      }
      if (path && trailingSlash) {
        path += '/';
      }
      return (isAbsolute ? '/' : '') + path;
    };
    exports.isAbsolute = function(path) {
      return path.charAt(0) === '/';
    };
    exports.join = function() {
      var paths = Array.prototype.slice.call(arguments, 0);
      return exports.normalize(filter(paths, function(p, index) {
        if (typeof p !== 'string') {
          throw new TypeError('Arguments to path.join must be strings');
        }
        return p;
      }).join('/'));
    };
    exports.relative = function(from, to) {
      from = exports.resolve(from).substr(1);
      to = exports.resolve(to).substr(1);
      function trim(arr) {
        var start = 0;
        for (; start < arr.length; start++) {
          if (arr[start] !== '')
            break;
        }
        var end = arr.length - 1;
        for (; end >= 0; end--) {
          if (arr[end] !== '')
            break;
        }
        if (start > end)
          return [];
        return arr.slice(start, end - start + 1);
      }
      var fromParts = trim(from.split('/'));
      var toParts = trim(to.split('/'));
      var length = Math.min(fromParts.length, toParts.length);
      var samePartsLength = length;
      for (var i = 0; i < length; i++) {
        if (fromParts[i] !== toParts[i]) {
          samePartsLength = i;
          break;
        }
      }
      var outputParts = [];
      for (var i = samePartsLength; i < fromParts.length; i++) {
        outputParts.push('..');
      }
      outputParts = outputParts.concat(toParts.slice(samePartsLength));
      return outputParts.join('/');
    };
    exports.sep = '/';
    exports.delimiter = ':';
    exports.dirname = function(path) {
      var result = splitPath(path),
          root = result[0],
          dir = result[1];
      if (!root && !dir) {
        return '.';
      }
      if (dir) {
        dir = dir.substr(0, dir.length - 1);
      }
      return root + dir;
    };
    exports.basename = function(path, ext) {
      var f = splitPath(path)[2];
      if (ext && f.substr(-1 * ext.length) === ext) {
        f = f.substr(0, f.length - ext.length);
      }
      return f;
    };
    exports.extname = function(path) {
      return splitPath(path)[3];
    };
    function filter(xs, f) {
      if (xs.filter)
        return xs.filter(f);
      var res = [];
      for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs))
          res.push(xs[i]);
      }
      return res;
    }
    var substr = 'ab'.substr(-1) === 'b' ? function(str, start, len) {
      return str.substr(start, len);
    } : function(str, start, len) {
      if (start < 0)
        start = str.length + start;
      return str.substr(start, len);
    };
    ;
  })($__require('25'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5f", ["5e"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('5e');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("60", ["5f"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__System._nodeRequire ? $__System._nodeRequire('path') : $__require('5f');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5d", ["60"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('60');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("59", ["5b", "5d", "53"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Resource = $__require('5b').Resource,
      path = $__require('5d'),
      core = $__require('53');
  module.exports = function() {
    return function(resource, next) {
      if (!resource.data || !resource.isJson || !resource.data.frames) {
        return next();
      }
      var loadOptions = {
        crossOrigin: resource.crossOrigin,
        loadType: Resource.LOAD_TYPE.IMAGE,
        metadata: resource.metadata.imageMetadata
      };
      var route = path.dirname(resource.url.replace(this.baseUrl, ''));
      var resolution = core.utils.getResolutionOfUrl(resource.url);
      this.add(resource.name + '_image', route + '/' + resource.data.meta.image, loadOptions, function(res) {
        resource.textures = {};
        var frames = resource.data.frames;
        for (var i in frames) {
          var rect = frames[i].frame;
          if (rect) {
            var size = null;
            var trim = null;
            if (frames[i].rotated) {
              size = new core.Rectangle(rect.x, rect.y, rect.h, rect.w);
            } else {
              size = new core.Rectangle(rect.x, rect.y, rect.w, rect.h);
            }
            if (frames[i].trimmed) {
              trim = new core.Rectangle(frames[i].spriteSourceSize.x / resolution, frames[i].spriteSourceSize.y / resolution, frames[i].sourceSize.w / resolution, frames[i].sourceSize.h / resolution);
            }
            if (frames[i].rotated) {
              var temp = size.width;
              size.width = size.height;
              size.height = temp;
            }
            size.x /= resolution;
            size.y /= resolution;
            size.width /= resolution;
            size.height /= resolution;
            resource.textures[i] = new core.Texture(res.texture.baseTexture, size, size.clone(), trim, frames[i].rotated);
            core.utils.TextureCache[i] = resource.textures[i];
          }
        }
        next();
      });
    };
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("58", ["53"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = $__require('53');
  module.exports = function() {
    return function(resource, next) {
      if (resource.data && resource.isImage) {
        var baseTexture = new core.BaseTexture(resource.data, null, core.utils.getResolutionOfUrl(resource.url));
        baseTexture.imageUrl = resource.url;
        resource.texture = new core.Texture(baseTexture);
        core.utils.BaseTextureCache[resource.url] = baseTexture;
        core.utils.TextureCache[resource.url] = resource.texture;
      }
      next();
    };
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("61", ["25"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  (function(process) {
    (function() {
      var async = {};
      var root,
          previous_async;
      root = this;
      if (root != null) {
        previous_async = root.async;
      }
      async.noConflict = function() {
        root.async = previous_async;
        return async;
      };
      function only_once(fn) {
        var called = false;
        return function() {
          if (called)
            throw new Error("Callback was already called.");
          called = true;
          fn.apply(root, arguments);
        };
      }
      var _toString = Object.prototype.toString;
      var _isArray = Array.isArray || function(obj) {
        return _toString.call(obj) === '[object Array]';
      };
      var _each = function(arr, iterator) {
        for (var i = 0; i < arr.length; i += 1) {
          iterator(arr[i], i, arr);
        }
      };
      var _map = function(arr, iterator) {
        if (arr.map) {
          return arr.map(iterator);
        }
        var results = [];
        _each(arr, function(x, i, a) {
          results.push(iterator(x, i, a));
        });
        return results;
      };
      var _reduce = function(arr, iterator, memo) {
        if (arr.reduce) {
          return arr.reduce(iterator, memo);
        }
        _each(arr, function(x, i, a) {
          memo = iterator(memo, x, i, a);
        });
        return memo;
      };
      var _keys = function(obj) {
        if (Object.keys) {
          return Object.keys(obj);
        }
        var keys = [];
        for (var k in obj) {
          if (obj.hasOwnProperty(k)) {
            keys.push(k);
          }
        }
        return keys;
      };
      if (typeof process === 'undefined' || !(process.nextTick)) {
        if (typeof setImmediate === 'function') {
          async.nextTick = function(fn) {
            setImmediate(fn);
          };
          async.setImmediate = async.nextTick;
        } else {
          async.nextTick = function(fn) {
            setTimeout(fn, 0);
          };
          async.setImmediate = async.nextTick;
        }
      } else {
        async.nextTick = process.nextTick;
        if (typeof setImmediate !== 'undefined') {
          async.setImmediate = function(fn) {
            setImmediate(fn);
          };
        } else {
          async.setImmediate = async.nextTick;
        }
      }
      async.each = function(arr, iterator, callback) {
        callback = callback || function() {};
        if (!arr.length) {
          return callback();
        }
        var completed = 0;
        _each(arr, function(x) {
          iterator(x, only_once(done));
        });
        function done(err) {
          if (err) {
            callback(err);
            callback = function() {};
          } else {
            completed += 1;
            if (completed >= arr.length) {
              callback();
            }
          }
        }
      };
      async.forEach = async.each;
      async.eachSeries = function(arr, iterator, callback) {
        callback = callback || function() {};
        if (!arr.length) {
          return callback();
        }
        var completed = 0;
        var iterate = function() {
          iterator(arr[completed], function(err) {
            if (err) {
              callback(err);
              callback = function() {};
            } else {
              completed += 1;
              if (completed >= arr.length) {
                callback();
              } else {
                iterate();
              }
            }
          });
        };
        iterate();
      };
      async.forEachSeries = async.eachSeries;
      async.eachLimit = function(arr, limit, iterator, callback) {
        var fn = _eachLimit(limit);
        fn.apply(null, [arr, iterator, callback]);
      };
      async.forEachLimit = async.eachLimit;
      var _eachLimit = function(limit) {
        return function(arr, iterator, callback) {
          callback = callback || function() {};
          if (!arr.length || limit <= 0) {
            return callback();
          }
          var completed = 0;
          var started = 0;
          var running = 0;
          (function replenish() {
            if (completed >= arr.length) {
              return callback();
            }
            while (running < limit && started < arr.length) {
              started += 1;
              running += 1;
              iterator(arr[started - 1], function(err) {
                if (err) {
                  callback(err);
                  callback = function() {};
                } else {
                  completed += 1;
                  running -= 1;
                  if (completed >= arr.length) {
                    callback();
                  } else {
                    replenish();
                  }
                }
              });
            }
          })();
        };
      };
      var doParallel = function(fn) {
        return function() {
          var args = Array.prototype.slice.call(arguments);
          return fn.apply(null, [async.each].concat(args));
        };
      };
      var doParallelLimit = function(limit, fn) {
        return function() {
          var args = Array.prototype.slice.call(arguments);
          return fn.apply(null, [_eachLimit(limit)].concat(args));
        };
      };
      var doSeries = function(fn) {
        return function() {
          var args = Array.prototype.slice.call(arguments);
          return fn.apply(null, [async.eachSeries].concat(args));
        };
      };
      var _asyncMap = function(eachfn, arr, iterator, callback) {
        arr = _map(arr, function(x, i) {
          return {
            index: i,
            value: x
          };
        });
        if (!callback) {
          eachfn(arr, function(x, callback) {
            iterator(x.value, function(err) {
              callback(err);
            });
          });
        } else {
          var results = [];
          eachfn(arr, function(x, callback) {
            iterator(x.value, function(err, v) {
              results[x.index] = v;
              callback(err);
            });
          }, function(err) {
            callback(err, results);
          });
        }
      };
      async.map = doParallel(_asyncMap);
      async.mapSeries = doSeries(_asyncMap);
      async.mapLimit = function(arr, limit, iterator, callback) {
        return _mapLimit(limit)(arr, iterator, callback);
      };
      var _mapLimit = function(limit) {
        return doParallelLimit(limit, _asyncMap);
      };
      async.reduce = function(arr, memo, iterator, callback) {
        async.eachSeries(arr, function(x, callback) {
          iterator(memo, x, function(err, v) {
            memo = v;
            callback(err);
          });
        }, function(err) {
          callback(err, memo);
        });
      };
      async.inject = async.reduce;
      async.foldl = async.reduce;
      async.reduceRight = function(arr, memo, iterator, callback) {
        var reversed = _map(arr, function(x) {
          return x;
        }).reverse();
        async.reduce(reversed, memo, iterator, callback);
      };
      async.foldr = async.reduceRight;
      var _filter = function(eachfn, arr, iterator, callback) {
        var results = [];
        arr = _map(arr, function(x, i) {
          return {
            index: i,
            value: x
          };
        });
        eachfn(arr, function(x, callback) {
          iterator(x.value, function(v) {
            if (v) {
              results.push(x);
            }
            callback();
          });
        }, function(err) {
          callback(_map(results.sort(function(a, b) {
            return a.index - b.index;
          }), function(x) {
            return x.value;
          }));
        });
      };
      async.filter = doParallel(_filter);
      async.filterSeries = doSeries(_filter);
      async.select = async.filter;
      async.selectSeries = async.filterSeries;
      var _reject = function(eachfn, arr, iterator, callback) {
        var results = [];
        arr = _map(arr, function(x, i) {
          return {
            index: i,
            value: x
          };
        });
        eachfn(arr, function(x, callback) {
          iterator(x.value, function(v) {
            if (!v) {
              results.push(x);
            }
            callback();
          });
        }, function(err) {
          callback(_map(results.sort(function(a, b) {
            return a.index - b.index;
          }), function(x) {
            return x.value;
          }));
        });
      };
      async.reject = doParallel(_reject);
      async.rejectSeries = doSeries(_reject);
      var _detect = function(eachfn, arr, iterator, main_callback) {
        eachfn(arr, function(x, callback) {
          iterator(x, function(result) {
            if (result) {
              main_callback(x);
              main_callback = function() {};
            } else {
              callback();
            }
          });
        }, function(err) {
          main_callback();
        });
      };
      async.detect = doParallel(_detect);
      async.detectSeries = doSeries(_detect);
      async.some = function(arr, iterator, main_callback) {
        async.each(arr, function(x, callback) {
          iterator(x, function(v) {
            if (v) {
              main_callback(true);
              main_callback = function() {};
            }
            callback();
          });
        }, function(err) {
          main_callback(false);
        });
      };
      async.any = async.some;
      async.every = function(arr, iterator, main_callback) {
        async.each(arr, function(x, callback) {
          iterator(x, function(v) {
            if (!v) {
              main_callback(false);
              main_callback = function() {};
            }
            callback();
          });
        }, function(err) {
          main_callback(true);
        });
      };
      async.all = async.every;
      async.sortBy = function(arr, iterator, callback) {
        async.map(arr, function(x, callback) {
          iterator(x, function(err, criteria) {
            if (err) {
              callback(err);
            } else {
              callback(null, {
                value: x,
                criteria: criteria
              });
            }
          });
        }, function(err, results) {
          if (err) {
            return callback(err);
          } else {
            var fn = function(left, right) {
              var a = left.criteria,
                  b = right.criteria;
              return a < b ? -1 : a > b ? 1 : 0;
            };
            callback(null, _map(results.sort(fn), function(x) {
              return x.value;
            }));
          }
        });
      };
      async.auto = function(tasks, callback) {
        callback = callback || function() {};
        var keys = _keys(tasks);
        var remainingTasks = keys.length;
        if (!remainingTasks) {
          return callback();
        }
        var results = {};
        var listeners = [];
        var addListener = function(fn) {
          listeners.unshift(fn);
        };
        var removeListener = function(fn) {
          for (var i = 0; i < listeners.length; i += 1) {
            if (listeners[i] === fn) {
              listeners.splice(i, 1);
              return;
            }
          }
        };
        var taskComplete = function() {
          remainingTasks--;
          _each(listeners.slice(0), function(fn) {
            fn();
          });
        };
        addListener(function() {
          if (!remainingTasks) {
            var theCallback = callback;
            callback = function() {};
            theCallback(null, results);
          }
        });
        _each(keys, function(k) {
          var task = _isArray(tasks[k]) ? tasks[k] : [tasks[k]];
          var taskCallback = function(err) {
            var args = Array.prototype.slice.call(arguments, 1);
            if (args.length <= 1) {
              args = args[0];
            }
            if (err) {
              var safeResults = {};
              _each(_keys(results), function(rkey) {
                safeResults[rkey] = results[rkey];
              });
              safeResults[k] = args;
              callback(err, safeResults);
              callback = function() {};
            } else {
              results[k] = args;
              async.setImmediate(taskComplete);
            }
          };
          var requires = task.slice(0, Math.abs(task.length - 1)) || [];
          var ready = function() {
            return _reduce(requires, function(a, x) {
              return (a && results.hasOwnProperty(x));
            }, true) && !results.hasOwnProperty(k);
          };
          if (ready()) {
            task[task.length - 1](taskCallback, results);
          } else {
            var listener = function() {
              if (ready()) {
                removeListener(listener);
                task[task.length - 1](taskCallback, results);
              }
            };
            addListener(listener);
          }
        });
      };
      async.retry = function(times, task, callback) {
        var DEFAULT_TIMES = 5;
        var attempts = [];
        if (typeof times === 'function') {
          callback = task;
          task = times;
          times = DEFAULT_TIMES;
        }
        times = parseInt(times, 10) || DEFAULT_TIMES;
        var wrappedTask = function(wrappedCallback, wrappedResults) {
          var retryAttempt = function(task, finalAttempt) {
            return function(seriesCallback) {
              task(function(err, result) {
                seriesCallback(!err || finalAttempt, {
                  err: err,
                  result: result
                });
              }, wrappedResults);
            };
          };
          while (times) {
            attempts.push(retryAttempt(task, !(times -= 1)));
          }
          async.series(attempts, function(done, data) {
            data = data[data.length - 1];
            (wrappedCallback || callback)(data.err, data.result);
          });
        };
        return callback ? wrappedTask() : wrappedTask;
      };
      async.waterfall = function(tasks, callback) {
        callback = callback || function() {};
        if (!_isArray(tasks)) {
          var err = new Error('First argument to waterfall must be an array of functions');
          return callback(err);
        }
        if (!tasks.length) {
          return callback();
        }
        var wrapIterator = function(iterator) {
          return function(err) {
            if (err) {
              callback.apply(null, arguments);
              callback = function() {};
            } else {
              var args = Array.prototype.slice.call(arguments, 1);
              var next = iterator.next();
              if (next) {
                args.push(wrapIterator(next));
              } else {
                args.push(callback);
              }
              async.setImmediate(function() {
                iterator.apply(null, args);
              });
            }
          };
        };
        wrapIterator(async.iterator(tasks))();
      };
      var _parallel = function(eachfn, tasks, callback) {
        callback = callback || function() {};
        if (_isArray(tasks)) {
          eachfn.map(tasks, function(fn, callback) {
            if (fn) {
              fn(function(err) {
                var args = Array.prototype.slice.call(arguments, 1);
                if (args.length <= 1) {
                  args = args[0];
                }
                callback.call(null, err, args);
              });
            }
          }, callback);
        } else {
          var results = {};
          eachfn.each(_keys(tasks), function(k, callback) {
            tasks[k](function(err) {
              var args = Array.prototype.slice.call(arguments, 1);
              if (args.length <= 1) {
                args = args[0];
              }
              results[k] = args;
              callback(err);
            });
          }, function(err) {
            callback(err, results);
          });
        }
      };
      async.parallel = function(tasks, callback) {
        _parallel({
          map: async.map,
          each: async.each
        }, tasks, callback);
      };
      async.parallelLimit = function(tasks, limit, callback) {
        _parallel({
          map: _mapLimit(limit),
          each: _eachLimit(limit)
        }, tasks, callback);
      };
      async.series = function(tasks, callback) {
        callback = callback || function() {};
        if (_isArray(tasks)) {
          async.mapSeries(tasks, function(fn, callback) {
            if (fn) {
              fn(function(err) {
                var args = Array.prototype.slice.call(arguments, 1);
                if (args.length <= 1) {
                  args = args[0];
                }
                callback.call(null, err, args);
              });
            }
          }, callback);
        } else {
          var results = {};
          async.eachSeries(_keys(tasks), function(k, callback) {
            tasks[k](function(err) {
              var args = Array.prototype.slice.call(arguments, 1);
              if (args.length <= 1) {
                args = args[0];
              }
              results[k] = args;
              callback(err);
            });
          }, function(err) {
            callback(err, results);
          });
        }
      };
      async.iterator = function(tasks) {
        var makeCallback = function(index) {
          var fn = function() {
            if (tasks.length) {
              tasks[index].apply(null, arguments);
            }
            return fn.next();
          };
          fn.next = function() {
            return (index < tasks.length - 1) ? makeCallback(index + 1) : null;
          };
          return fn;
        };
        return makeCallback(0);
      };
      async.apply = function(fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function() {
          return fn.apply(null, args.concat(Array.prototype.slice.call(arguments)));
        };
      };
      var _concat = function(eachfn, arr, fn, callback) {
        var r = [];
        eachfn(arr, function(x, cb) {
          fn(x, function(err, y) {
            r = r.concat(y || []);
            cb(err);
          });
        }, function(err) {
          callback(err, r);
        });
      };
      async.concat = doParallel(_concat);
      async.concatSeries = doSeries(_concat);
      async.whilst = function(test, iterator, callback) {
        if (test()) {
          iterator(function(err) {
            if (err) {
              return callback(err);
            }
            async.whilst(test, iterator, callback);
          });
        } else {
          callback();
        }
      };
      async.doWhilst = function(iterator, test, callback) {
        iterator(function(err) {
          if (err) {
            return callback(err);
          }
          var args = Array.prototype.slice.call(arguments, 1);
          if (test.apply(null, args)) {
            async.doWhilst(iterator, test, callback);
          } else {
            callback();
          }
        });
      };
      async.until = function(test, iterator, callback) {
        if (!test()) {
          iterator(function(err) {
            if (err) {
              return callback(err);
            }
            async.until(test, iterator, callback);
          });
        } else {
          callback();
        }
      };
      async.doUntil = function(iterator, test, callback) {
        iterator(function(err) {
          if (err) {
            return callback(err);
          }
          var args = Array.prototype.slice.call(arguments, 1);
          if (!test.apply(null, args)) {
            async.doUntil(iterator, test, callback);
          } else {
            callback();
          }
        });
      };
      async.queue = function(worker, concurrency) {
        if (concurrency === undefined) {
          concurrency = 1;
        }
        function _insert(q, data, pos, callback) {
          if (!q.started) {
            q.started = true;
          }
          if (!_isArray(data)) {
            data = [data];
          }
          if (data.length == 0) {
            return async.setImmediate(function() {
              if (q.drain) {
                q.drain();
              }
            });
          }
          _each(data, function(task) {
            var item = {
              data: task,
              callback: typeof callback === 'function' ? callback : null
            };
            if (pos) {
              q.tasks.unshift(item);
            } else {
              q.tasks.push(item);
            }
            if (q.saturated && q.tasks.length === q.concurrency) {
              q.saturated();
            }
            async.setImmediate(q.process);
          });
        }
        var workers = 0;
        var q = {
          tasks: [],
          concurrency: concurrency,
          saturated: null,
          empty: null,
          drain: null,
          started: false,
          paused: false,
          push: function(data, callback) {
            _insert(q, data, false, callback);
          },
          kill: function() {
            q.drain = null;
            q.tasks = [];
          },
          unshift: function(data, callback) {
            _insert(q, data, true, callback);
          },
          process: function() {
            if (!q.paused && workers < q.concurrency && q.tasks.length) {
              var task = q.tasks.shift();
              if (q.empty && q.tasks.length === 0) {
                q.empty();
              }
              workers += 1;
              var next = function() {
                workers -= 1;
                if (task.callback) {
                  task.callback.apply(task, arguments);
                }
                if (q.drain && q.tasks.length + workers === 0) {
                  q.drain();
                }
                q.process();
              };
              var cb = only_once(next);
              worker(task.data, cb);
            }
          },
          length: function() {
            return q.tasks.length;
          },
          running: function() {
            return workers;
          },
          idle: function() {
            return q.tasks.length + workers === 0;
          },
          pause: function() {
            if (q.paused === true) {
              return;
            }
            q.paused = true;
          },
          resume: function() {
            if (q.paused === false) {
              return;
            }
            q.paused = false;
            for (var w = 1; w <= q.concurrency; w++) {
              async.setImmediate(q.process);
            }
          }
        };
        return q;
      };
      async.priorityQueue = function(worker, concurrency) {
        function _compareTasks(a, b) {
          return a.priority - b.priority;
        }
        ;
        function _binarySearch(sequence, item, compare) {
          var beg = -1,
              end = sequence.length - 1;
          while (beg < end) {
            var mid = beg + ((end - beg + 1) >>> 1);
            if (compare(item, sequence[mid]) >= 0) {
              beg = mid;
            } else {
              end = mid - 1;
            }
          }
          return beg;
        }
        function _insert(q, data, priority, callback) {
          if (!q.started) {
            q.started = true;
          }
          if (!_isArray(data)) {
            data = [data];
          }
          if (data.length == 0) {
            return async.setImmediate(function() {
              if (q.drain) {
                q.drain();
              }
            });
          }
          _each(data, function(task) {
            var item = {
              data: task,
              priority: priority,
              callback: typeof callback === 'function' ? callback : null
            };
            q.tasks.splice(_binarySearch(q.tasks, item, _compareTasks) + 1, 0, item);
            if (q.saturated && q.tasks.length === q.concurrency) {
              q.saturated();
            }
            async.setImmediate(q.process);
          });
        }
        var q = async.queue(worker, concurrency);
        q.push = function(data, priority, callback) {
          _insert(q, data, priority, callback);
        };
        delete q.unshift;
        return q;
      };
      async.cargo = function(worker, payload) {
        var working = false,
            tasks = [];
        var cargo = {
          tasks: tasks,
          payload: payload,
          saturated: null,
          empty: null,
          drain: null,
          drained: true,
          push: function(data, callback) {
            if (!_isArray(data)) {
              data = [data];
            }
            _each(data, function(task) {
              tasks.push({
                data: task,
                callback: typeof callback === 'function' ? callback : null
              });
              cargo.drained = false;
              if (cargo.saturated && tasks.length === payload) {
                cargo.saturated();
              }
            });
            async.setImmediate(cargo.process);
          },
          process: function process() {
            if (working)
              return;
            if (tasks.length === 0) {
              if (cargo.drain && !cargo.drained)
                cargo.drain();
              cargo.drained = true;
              return;
            }
            var ts = typeof payload === 'number' ? tasks.splice(0, payload) : tasks.splice(0, tasks.length);
            var ds = _map(ts, function(task) {
              return task.data;
            });
            if (cargo.empty)
              cargo.empty();
            working = true;
            worker(ds, function() {
              working = false;
              var args = arguments;
              _each(ts, function(data) {
                if (data.callback) {
                  data.callback.apply(null, args);
                }
              });
              process();
            });
          },
          length: function() {
            return tasks.length;
          },
          running: function() {
            return working;
          }
        };
        return cargo;
      };
      var _console_fn = function(name) {
        return function(fn) {
          var args = Array.prototype.slice.call(arguments, 1);
          fn.apply(null, args.concat([function(err) {
            var args = Array.prototype.slice.call(arguments, 1);
            if (typeof console !== 'undefined') {
              if (err) {
                if (console.error) {
                  console.error(err);
                }
              } else if (console[name]) {
                _each(args, function(x) {
                  console[name](x);
                });
              }
            }
          }]));
        };
      };
      async.log = _console_fn('log');
      async.dir = _console_fn('dir');
      async.memoize = function(fn, hasher) {
        var memo = {};
        var queues = {};
        hasher = hasher || function(x) {
          return x;
        };
        var memoized = function() {
          var args = Array.prototype.slice.call(arguments);
          var callback = args.pop();
          var key = hasher.apply(null, args);
          if (key in memo) {
            async.nextTick(function() {
              callback.apply(null, memo[key]);
            });
          } else if (key in queues) {
            queues[key].push(callback);
          } else {
            queues[key] = [callback];
            fn.apply(null, args.concat([function() {
              memo[key] = arguments;
              var q = queues[key];
              delete queues[key];
              for (var i = 0,
                  l = q.length; i < l; i++) {
                q[i].apply(null, arguments);
              }
            }]));
          }
        };
        memoized.memo = memo;
        memoized.unmemoized = fn;
        return memoized;
      };
      async.unmemoize = function(fn) {
        return function() {
          return (fn.unmemoized || fn).apply(null, arguments);
        };
      };
      async.times = function(count, iterator, callback) {
        var counter = [];
        for (var i = 0; i < count; i++) {
          counter.push(i);
        }
        return async.map(counter, iterator, callback);
      };
      async.timesSeries = function(count, iterator, callback) {
        var counter = [];
        for (var i = 0; i < count; i++) {
          counter.push(i);
        }
        return async.mapSeries(counter, iterator, callback);
      };
      async.seq = function() {
        var fns = arguments;
        return function() {
          var that = this;
          var args = Array.prototype.slice.call(arguments);
          var callback = args.pop();
          async.reduce(fns, args, function(newargs, fn, cb) {
            fn.apply(that, newargs.concat([function() {
              var err = arguments[0];
              var nextargs = Array.prototype.slice.call(arguments, 1);
              cb(err, nextargs);
            }]));
          }, function(err, results) {
            callback.apply(that, [err].concat(results));
          });
        };
      };
      async.compose = function() {
        return async.seq.apply(null, Array.prototype.reverse.call(arguments));
      };
      var _applyEach = function(eachfn, fns) {
        var go = function() {
          var that = this;
          var args = Array.prototype.slice.call(arguments);
          var callback = args.pop();
          return eachfn(fns, function(fn, cb) {
            fn.apply(that, args.concat([cb]));
          }, callback);
        };
        if (arguments.length > 2) {
          var args = Array.prototype.slice.call(arguments, 2);
          return go.apply(this, args);
        } else {
          return go;
        }
      };
      async.applyEach = doParallel(_applyEach);
      async.applyEachSeries = doSeries(_applyEach);
      async.forever = function(fn, callback) {
        function next(err) {
          if (err) {
            if (callback) {
              return callback(err);
            }
            throw err;
          }
          fn(next);
        }
        next();
      };
      if (typeof module !== 'undefined' && module.exports) {
        module.exports = async;
      } else if (typeof define !== 'undefined' && define.amd) {
        define([], function() {
          return async;
        });
      } else {
        root.async = async;
      }
    }());
  })($__require('25'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("62", ["61"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('61');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("63", ["62", "3f", "64", "65", "25"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var async = $__require('62'),
        urlParser = $__require('3f'),
        Resource = $__require('64'),
        EventEmitter = $__require('65');
    function Loader(baseUrl, concurrency) {
      EventEmitter.call(this);
      concurrency = concurrency || 10;
      this.baseUrl = baseUrl || '';
      this.progress = 0;
      this.loading = false;
      this._progressChunk = 0;
      this._beforeMiddleware = [];
      this._afterMiddleware = [];
      this._boundLoadResource = this._loadResource.bind(this);
      this._boundOnLoad = this._onLoad.bind(this);
      this._buffer = [];
      this._numToLoad = 0;
      this._queue = async.queue(this._boundLoadResource, concurrency);
      this.resources = {};
    }
    Loader.prototype = Object.create(EventEmitter.prototype);
    Loader.prototype.constructor = Loader;
    module.exports = Loader;
    Loader.prototype.add = Loader.prototype.enqueue = function(name, url, options, cb) {
      if (Array.isArray(name)) {
        for (var i = 0; i < name.length; ++i) {
          this.add(name[i]);
        }
        return this;
      }
      if (typeof name === 'object') {
        cb = url || name.callback || name.onComplete;
        options = name;
        url = name.url;
        name = name.name || name.key || name.url;
      }
      if (typeof url !== 'string') {
        cb = options;
        options = url;
        url = name;
      }
      if (typeof url !== 'string') {
        throw new Error('No url passed to add resource to loader.');
      }
      if (typeof options === 'function') {
        cb = options;
        options = null;
      }
      if (this.resources[name]) {
        throw new Error('Resource with name "' + name + '" already exists.');
      }
      url = this._handleBaseUrl(url);
      this.resources[name] = new Resource(name, url, options);
      if (typeof cb === 'function') {
        this.resources[name].once('afterMiddleware', cb);
      }
      this._numToLoad++;
      if (this._queue.started) {
        this._queue.push(this.resources[name]);
        this._progressChunk = (100 - this.progress) / (this._queue.length() + this._queue.running());
      } else {
        this._buffer.push(this.resources[name]);
        this._progressChunk = 100 / this._buffer.length;
      }
      return this;
    };
    Loader.prototype._handleBaseUrl = function(url) {
      var parsedUrl = urlParser.parse(url);
      if (parsedUrl.protocol || parsedUrl.pathname.indexOf('//') === 0) {
        return url;
      }
      if (this.baseUrl.length && this.baseUrl.lastIndexOf('/') !== this.baseUrl.length - 1 && url.charAt(0) !== '/') {
        return this.baseUrl + '/' + url;
      } else {
        return this.baseUrl + url;
      }
    };
    Loader.prototype.before = Loader.prototype.pre = function(fn) {
      this._beforeMiddleware.push(fn);
      return this;
    };
    Loader.prototype.after = Loader.prototype.use = function(fn) {
      this._afterMiddleware.push(fn);
      return this;
    };
    Loader.prototype.reset = function() {
      this.progress = 0;
      this.loading = false;
      this._progressChunk = 0;
      this._buffer.length = 0;
      this._numToLoad = 0;
      this._queue.kill();
      this._queue.started = false;
      this.resources = {};
    };
    Loader.prototype.load = function(cb) {
      if (typeof cb === 'function') {
        this.once('complete', cb);
      }
      if (this._queue.started) {
        return this;
      }
      this.emit('start', this);
      for (var i = 0; i < this._buffer.length; ++i) {
        this._queue.push(this._buffer[i]);
      }
      this._buffer.length = 0;
      return this;
    };
    Loader.prototype._loadResource = function(resource, dequeue) {
      var self = this;
      resource._dequeue = dequeue;
      this._runMiddleware(resource, this._beforeMiddleware, function() {
        resource.load(self._boundOnLoad);
      });
    };
    Loader.prototype._onComplete = function() {
      this.emit('complete', this, this.resources);
    };
    Loader.prototype._onLoad = function(resource) {
      this.progress += this._progressChunk;
      this.emit('progress', this, resource);
      this._runMiddleware(resource, this._afterMiddleware, function() {
        resource.emit('afterMiddleware', resource);
        this._numToLoad--;
        if (this._numToLoad === 0) {
          this.progress = 100;
          this._onComplete();
        }
        if (resource.error) {
          this.emit('error', resource.error, this, resource);
        } else {
          this.emit('load', this, resource);
        }
      });
      resource._dequeue();
    };
    Loader.prototype._runMiddleware = function(resource, fns, cb) {
      var self = this;
      async.eachSeries(fns, function(fn, next) {
        fn.call(self, resource, next);
      }, cb.bind(this, resource));
    };
    Loader.LOAD_TYPE = Resource.LOAD_TYPE;
    Loader.XHR_READY_STATE = Resource.XHR_READY_STATE;
    Loader.XHR_RESPONSE_TYPE = Resource.XHR_RESPONSE_TYPE;
  })($__require('25'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("66", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var cache = {};
  module.exports = function() {
    return function(resource, next) {
      if (cache[resource.url]) {
        resource.data = cache[resource.url];
        resource.complete();
      } else {
        resource.once('complete', function() {
          cache[this.url] = this.data;
        });
      }
      next();
    };
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("67", ["25"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  (function(process) {
    ;
    (function(root) {
      var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
      var freeModule = typeof module == 'object' && module && !module.nodeType && module;
      var freeGlobal = typeof global == 'object' && global;
      if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
        root = freeGlobal;
      }
      var punycode,
          maxInt = 2147483647,
          base = 36,
          tMin = 1,
          tMax = 26,
          skew = 38,
          damp = 700,
          initialBias = 72,
          initialN = 128,
          delimiter = '-',
          regexPunycode = /^xn--/,
          regexNonASCII = /[^\x20-\x7E]/,
          regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g,
          errors = {
            'overflow': 'Overflow: input needs wider integers to process',
            'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
            'invalid-input': 'Invalid input'
          },
          baseMinusTMin = base - tMin,
          floor = Math.floor,
          stringFromCharCode = String.fromCharCode,
          key;
      function error(type) {
        throw RangeError(errors[type]);
      }
      function map(array, fn) {
        var length = array.length;
        var result = [];
        while (length--) {
          result[length] = fn(array[length]);
        }
        return result;
      }
      function mapDomain(string, fn) {
        var parts = string.split('@');
        var result = '';
        if (parts.length > 1) {
          result = parts[0] + '@';
          string = parts[1];
        }
        string = string.replace(regexSeparators, '\x2E');
        var labels = string.split('.');
        var encoded = map(labels, fn).join('.');
        return result + encoded;
      }
      function ucs2decode(string) {
        var output = [],
            counter = 0,
            length = string.length,
            value,
            extra;
        while (counter < length) {
          value = string.charCodeAt(counter++);
          if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
            extra = string.charCodeAt(counter++);
            if ((extra & 0xFC00) == 0xDC00) {
              output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
            } else {
              output.push(value);
              counter--;
            }
          } else {
            output.push(value);
          }
        }
        return output;
      }
      function ucs2encode(array) {
        return map(array, function(value) {
          var output = '';
          if (value > 0xFFFF) {
            value -= 0x10000;
            output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
            value = 0xDC00 | value & 0x3FF;
          }
          output += stringFromCharCode(value);
          return output;
        }).join('');
      }
      function basicToDigit(codePoint) {
        if (codePoint - 48 < 10) {
          return codePoint - 22;
        }
        if (codePoint - 65 < 26) {
          return codePoint - 65;
        }
        if (codePoint - 97 < 26) {
          return codePoint - 97;
        }
        return base;
      }
      function digitToBasic(digit, flag) {
        return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
      }
      function adapt(delta, numPoints, firstTime) {
        var k = 0;
        delta = firstTime ? floor(delta / damp) : delta >> 1;
        delta += floor(delta / numPoints);
        for (; delta > baseMinusTMin * tMax >> 1; k += base) {
          delta = floor(delta / baseMinusTMin);
        }
        return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
      }
      function decode(input) {
        var output = [],
            inputLength = input.length,
            out,
            i = 0,
            n = initialN,
            bias = initialBias,
            basic,
            j,
            index,
            oldi,
            w,
            k,
            digit,
            t,
            baseMinusT;
        basic = input.lastIndexOf(delimiter);
        if (basic < 0) {
          basic = 0;
        }
        for (j = 0; j < basic; ++j) {
          if (input.charCodeAt(j) >= 0x80) {
            error('not-basic');
          }
          output.push(input.charCodeAt(j));
        }
        for (index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
          for (oldi = i, w = 1, k = base; ; k += base) {
            if (index >= inputLength) {
              error('invalid-input');
            }
            digit = basicToDigit(input.charCodeAt(index++));
            if (digit >= base || digit > floor((maxInt - i) / w)) {
              error('overflow');
            }
            i += digit * w;
            t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
            if (digit < t) {
              break;
            }
            baseMinusT = base - t;
            if (w > floor(maxInt / baseMinusT)) {
              error('overflow');
            }
            w *= baseMinusT;
          }
          out = output.length + 1;
          bias = adapt(i - oldi, out, oldi == 0);
          if (floor(i / out) > maxInt - n) {
            error('overflow');
          }
          n += floor(i / out);
          i %= out;
          output.splice(i++, 0, n);
        }
        return ucs2encode(output);
      }
      function encode(input) {
        var n,
            delta,
            handledCPCount,
            basicLength,
            bias,
            j,
            m,
            q,
            k,
            t,
            currentValue,
            output = [],
            inputLength,
            handledCPCountPlusOne,
            baseMinusT,
            qMinusT;
        input = ucs2decode(input);
        inputLength = input.length;
        n = initialN;
        delta = 0;
        bias = initialBias;
        for (j = 0; j < inputLength; ++j) {
          currentValue = input[j];
          if (currentValue < 0x80) {
            output.push(stringFromCharCode(currentValue));
          }
        }
        handledCPCount = basicLength = output.length;
        if (basicLength) {
          output.push(delimiter);
        }
        while (handledCPCount < inputLength) {
          for (m = maxInt, j = 0; j < inputLength; ++j) {
            currentValue = input[j];
            if (currentValue >= n && currentValue < m) {
              m = currentValue;
            }
          }
          handledCPCountPlusOne = handledCPCount + 1;
          if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
            error('overflow');
          }
          delta += (m - n) * handledCPCountPlusOne;
          n = m;
          for (j = 0; j < inputLength; ++j) {
            currentValue = input[j];
            if (currentValue < n && ++delta > maxInt) {
              error('overflow');
            }
            if (currentValue == n) {
              for (q = delta, k = base; ; k += base) {
                t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
                if (q < t) {
                  break;
                }
                qMinusT = q - t;
                baseMinusT = base - t;
                output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                q = floor(qMinusT / baseMinusT);
              }
              output.push(stringFromCharCode(digitToBasic(q, 0)));
              bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
              delta = 0;
              ++handledCPCount;
            }
          }
          ++delta;
          ++n;
        }
        return output.join('');
      }
      function toUnicode(input) {
        return mapDomain(input, function(string) {
          return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
        });
      }
      function toASCII(input) {
        return mapDomain(input, function(string) {
          return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
        });
      }
      punycode = {
        'version': '1.3.2',
        'ucs2': {
          'decode': ucs2decode,
          'encode': ucs2encode
        },
        'decode': decode,
        'encode': encode,
        'toASCII': toASCII,
        'toUnicode': toUnicode
      };
      if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
        define('punycode', function() {
          return punycode;
        });
      } else if (freeExports && freeModule) {
        if (module.exports == freeExports) {
          freeModule.exports = punycode;
        } else {
          for (key in punycode) {
            punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
          }
        }
      } else {
        root.punycode = punycode;
      }
    }(this));
  })($__require('25'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("68", ["67"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('67');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("69", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  module.exports = function(qs, sep, eq, options) {
    sep = sep || '&';
    eq = eq || '=';
    var obj = {};
    if (typeof qs !== 'string' || qs.length === 0) {
      return obj;
    }
    var regexp = /\+/g;
    qs = qs.split(sep);
    var maxKeys = 1000;
    if (options && typeof options.maxKeys === 'number') {
      maxKeys = options.maxKeys;
    }
    var len = qs.length;
    if (maxKeys > 0 && len > maxKeys) {
      len = maxKeys;
    }
    for (var i = 0; i < len; ++i) {
      var x = qs[i].replace(regexp, '%20'),
          idx = x.indexOf(eq),
          kstr,
          vstr,
          k,
          v;
      if (idx >= 0) {
        kstr = x.substr(0, idx);
        vstr = x.substr(idx + 1);
      } else {
        kstr = x;
        vstr = '';
      }
      k = decodeURIComponent(kstr);
      v = decodeURIComponent(vstr);
      if (!hasOwnProperty(obj, k)) {
        obj[k] = v;
      } else if (Array.isArray(obj[k])) {
        obj[k].push(v);
      } else {
        obj[k] = [obj[k], v];
      }
    }
    return obj;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("6a", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var stringifyPrimitive = function(v) {
    switch (typeof v) {
      case 'string':
        return v;
      case 'boolean':
        return v ? 'true' : 'false';
      case 'number':
        return isFinite(v) ? v : '';
      default:
        return '';
    }
  };
  module.exports = function(obj, sep, eq, name) {
    sep = sep || '&';
    eq = eq || '=';
    if (obj === null) {
      obj = undefined;
    }
    if (typeof obj === 'object') {
      return Object.keys(obj).map(function(k) {
        var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
        if (Array.isArray(obj[k])) {
          return obj[k].map(function(v) {
            return ks + encodeURIComponent(stringifyPrimitive(v));
          }).join(sep);
        } else {
          return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
        }
      }).join(sep);
    }
    if (!name)
      return '';
    return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("6b", ["69", "6a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports.decode = exports.parse = $__require('69');
  exports.encode = exports.stringify = $__require('6a');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("6c", ["6b"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('6b');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("6d", ["68", "6c"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var punycode = $__require('68');
  exports.parse = urlParse;
  exports.resolve = urlResolve;
  exports.resolveObject = urlResolveObject;
  exports.format = urlFormat;
  exports.Url = Url;
  function Url() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.host = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.query = null;
    this.pathname = null;
    this.path = null;
    this.href = null;
  }
  var protocolPattern = /^([a-z0-9.+-]+:)/i,
      portPattern = /:[0-9]*$/,
      delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
      unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),
      autoEscape = ['\''].concat(unwise),
      nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
      hostEndingChars = ['/', '?', '#'],
      hostnameMaxLen = 255,
      hostnamePartPattern = /^[a-z0-9A-Z_-]{0,63}$/,
      hostnamePartStart = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
      unsafeProtocol = {
        'javascript': true,
        'javascript:': true
      },
      hostlessProtocol = {
        'javascript': true,
        'javascript:': true
      },
      slashedProtocol = {
        'http': true,
        'https': true,
        'ftp': true,
        'gopher': true,
        'file': true,
        'http:': true,
        'https:': true,
        'ftp:': true,
        'gopher:': true,
        'file:': true
      },
      querystring = $__require('6c');
  function urlParse(url, parseQueryString, slashesDenoteHost) {
    if (url && isObject(url) && url instanceof Url)
      return url;
    var u = new Url;
    u.parse(url, parseQueryString, slashesDenoteHost);
    return u;
  }
  Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
    if (!isString(url)) {
      throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
    }
    var rest = url;
    rest = rest.trim();
    var proto = protocolPattern.exec(rest);
    if (proto) {
      proto = proto[0];
      var lowerProto = proto.toLowerCase();
      this.protocol = lowerProto;
      rest = rest.substr(proto.length);
    }
    if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      var slashes = rest.substr(0, 2) === '//';
      if (slashes && !(proto && hostlessProtocol[proto])) {
        rest = rest.substr(2);
        this.slashes = true;
      }
    }
    if (!hostlessProtocol[proto] && (slashes || (proto && !slashedProtocol[proto]))) {
      var hostEnd = -1;
      for (var i = 0; i < hostEndingChars.length; i++) {
        var hec = rest.indexOf(hostEndingChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
          hostEnd = hec;
      }
      var auth,
          atSign;
      if (hostEnd === -1) {
        atSign = rest.lastIndexOf('@');
      } else {
        atSign = rest.lastIndexOf('@', hostEnd);
      }
      if (atSign !== -1) {
        auth = rest.slice(0, atSign);
        rest = rest.slice(atSign + 1);
        this.auth = decodeURIComponent(auth);
      }
      hostEnd = -1;
      for (var i = 0; i < nonHostChars.length; i++) {
        var hec = rest.indexOf(nonHostChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
          hostEnd = hec;
      }
      if (hostEnd === -1)
        hostEnd = rest.length;
      this.host = rest.slice(0, hostEnd);
      rest = rest.slice(hostEnd);
      this.parseHost();
      this.hostname = this.hostname || '';
      var ipv6Hostname = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']';
      if (!ipv6Hostname) {
        var hostparts = this.hostname.split(/\./);
        for (var i = 0,
            l = hostparts.length; i < l; i++) {
          var part = hostparts[i];
          if (!part)
            continue;
          if (!part.match(hostnamePartPattern)) {
            var newpart = '';
            for (var j = 0,
                k = part.length; j < k; j++) {
              if (part.charCodeAt(j) > 127) {
                newpart += 'x';
              } else {
                newpart += part[j];
              }
            }
            if (!newpart.match(hostnamePartPattern)) {
              var validParts = hostparts.slice(0, i);
              var notHost = hostparts.slice(i + 1);
              var bit = part.match(hostnamePartStart);
              if (bit) {
                validParts.push(bit[1]);
                notHost.unshift(bit[2]);
              }
              if (notHost.length) {
                rest = '/' + notHost.join('.') + rest;
              }
              this.hostname = validParts.join('.');
              break;
            }
          }
        }
      }
      if (this.hostname.length > hostnameMaxLen) {
        this.hostname = '';
      } else {
        this.hostname = this.hostname.toLowerCase();
      }
      if (!ipv6Hostname) {
        var domainArray = this.hostname.split('.');
        var newOut = [];
        for (var i = 0; i < domainArray.length; ++i) {
          var s = domainArray[i];
          newOut.push(s.match(/[^A-Za-z0-9_-]/) ? 'xn--' + punycode.encode(s) : s);
        }
        this.hostname = newOut.join('.');
      }
      var p = this.port ? ':' + this.port : '';
      var h = this.hostname || '';
      this.host = h + p;
      this.href += this.host;
      if (ipv6Hostname) {
        this.hostname = this.hostname.substr(1, this.hostname.length - 2);
        if (rest[0] !== '/') {
          rest = '/' + rest;
        }
      }
    }
    if (!unsafeProtocol[lowerProto]) {
      for (var i = 0,
          l = autoEscape.length; i < l; i++) {
        var ae = autoEscape[i];
        var esc = encodeURIComponent(ae);
        if (esc === ae) {
          esc = escape(ae);
        }
        rest = rest.split(ae).join(esc);
      }
    }
    var hash = rest.indexOf('#');
    if (hash !== -1) {
      this.hash = rest.substr(hash);
      rest = rest.slice(0, hash);
    }
    var qm = rest.indexOf('?');
    if (qm !== -1) {
      this.search = rest.substr(qm);
      this.query = rest.substr(qm + 1);
      if (parseQueryString) {
        this.query = querystring.parse(this.query);
      }
      rest = rest.slice(0, qm);
    } else if (parseQueryString) {
      this.search = '';
      this.query = {};
    }
    if (rest)
      this.pathname = rest;
    if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
      this.pathname = '/';
    }
    if (this.pathname || this.search) {
      var p = this.pathname || '';
      var s = this.search || '';
      this.path = p + s;
    }
    this.href = this.format();
    return this;
  };
  function urlFormat(obj) {
    if (isString(obj))
      obj = urlParse(obj);
    if (!(obj instanceof Url))
      return Url.prototype.format.call(obj);
    return obj.format();
  }
  Url.prototype.format = function() {
    var auth = this.auth || '';
    if (auth) {
      auth = encodeURIComponent(auth);
      auth = auth.replace(/%3A/i, ':');
      auth += '@';
    }
    var protocol = this.protocol || '',
        pathname = this.pathname || '',
        hash = this.hash || '',
        host = false,
        query = '';
    if (this.host) {
      host = auth + this.host;
    } else if (this.hostname) {
      host = auth + (this.hostname.indexOf(':') === -1 ? this.hostname : '[' + this.hostname + ']');
      if (this.port) {
        host += ':' + this.port;
      }
    }
    if (this.query && isObject(this.query) && Object.keys(this.query).length) {
      query = querystring.stringify(this.query);
    }
    var search = this.search || (query && ('?' + query)) || '';
    if (protocol && protocol.substr(-1) !== ':')
      protocol += ':';
    if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
      host = '//' + (host || '');
      if (pathname && pathname.charAt(0) !== '/')
        pathname = '/' + pathname;
    } else if (!host) {
      host = '';
    }
    if (hash && hash.charAt(0) !== '#')
      hash = '#' + hash;
    if (search && search.charAt(0) !== '?')
      search = '?' + search;
    pathname = pathname.replace(/[?#]/g, function(match) {
      return encodeURIComponent(match);
    });
    search = search.replace('#', '%23');
    return protocol + host + pathname + search + hash;
  };
  function urlResolve(source, relative) {
    return urlParse(source, false, true).resolve(relative);
  }
  Url.prototype.resolve = function(relative) {
    return this.resolveObject(urlParse(relative, false, true)).format();
  };
  function urlResolveObject(source, relative) {
    if (!source)
      return relative;
    return urlParse(source, false, true).resolveObject(relative);
  }
  Url.prototype.resolveObject = function(relative) {
    if (isString(relative)) {
      var rel = new Url();
      rel.parse(relative, false, true);
      relative = rel;
    }
    var result = new Url();
    Object.keys(this).forEach(function(k) {
      result[k] = this[k];
    }, this);
    result.hash = relative.hash;
    if (relative.href === '') {
      result.href = result.format();
      return result;
    }
    if (relative.slashes && !relative.protocol) {
      Object.keys(relative).forEach(function(k) {
        if (k !== 'protocol')
          result[k] = relative[k];
      });
      if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
        result.path = result.pathname = '/';
      }
      result.href = result.format();
      return result;
    }
    if (relative.protocol && relative.protocol !== result.protocol) {
      if (!slashedProtocol[relative.protocol]) {
        Object.keys(relative).forEach(function(k) {
          result[k] = relative[k];
        });
        result.href = result.format();
        return result;
      }
      result.protocol = relative.protocol;
      if (!relative.host && !hostlessProtocol[relative.protocol]) {
        var relPath = (relative.pathname || '').split('/');
        while (relPath.length && !(relative.host = relPath.shift()))
          ;
        if (!relative.host)
          relative.host = '';
        if (!relative.hostname)
          relative.hostname = '';
        if (relPath[0] !== '')
          relPath.unshift('');
        if (relPath.length < 2)
          relPath.unshift('');
        result.pathname = relPath.join('/');
      } else {
        result.pathname = relative.pathname;
      }
      result.search = relative.search;
      result.query = relative.query;
      result.host = relative.host || '';
      result.auth = relative.auth;
      result.hostname = relative.hostname || relative.host;
      result.port = relative.port;
      if (result.pathname || result.search) {
        var p = result.pathname || '';
        var s = result.search || '';
        result.path = p + s;
      }
      result.slashes = result.slashes || relative.slashes;
      result.href = result.format();
      return result;
    }
    var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
        isRelAbs = (relative.host || relative.pathname && relative.pathname.charAt(0) === '/'),
        mustEndAbs = (isRelAbs || isSourceAbs || (result.host && relative.pathname)),
        removeAllDots = mustEndAbs,
        srcPath = result.pathname && result.pathname.split('/') || [],
        relPath = relative.pathname && relative.pathname.split('/') || [],
        psychotic = result.protocol && !slashedProtocol[result.protocol];
    if (psychotic) {
      result.hostname = '';
      result.port = null;
      if (result.host) {
        if (srcPath[0] === '')
          srcPath[0] = result.host;
        else
          srcPath.unshift(result.host);
      }
      result.host = '';
      if (relative.protocol) {
        relative.hostname = null;
        relative.port = null;
        if (relative.host) {
          if (relPath[0] === '')
            relPath[0] = relative.host;
          else
            relPath.unshift(relative.host);
        }
        relative.host = null;
      }
      mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
    }
    if (isRelAbs) {
      result.host = (relative.host || relative.host === '') ? relative.host : result.host;
      result.hostname = (relative.hostname || relative.hostname === '') ? relative.hostname : result.hostname;
      result.search = relative.search;
      result.query = relative.query;
      srcPath = relPath;
    } else if (relPath.length) {
      if (!srcPath)
        srcPath = [];
      srcPath.pop();
      srcPath = srcPath.concat(relPath);
      result.search = relative.search;
      result.query = relative.query;
    } else if (!isNullOrUndefined(relative.search)) {
      if (psychotic) {
        result.hostname = result.host = srcPath.shift();
        var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
        if (authInHost) {
          result.auth = authInHost.shift();
          result.host = result.hostname = authInHost.shift();
        }
      }
      result.search = relative.search;
      result.query = relative.query;
      if (!isNull(result.pathname) || !isNull(result.search)) {
        result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
      }
      result.href = result.format();
      return result;
    }
    if (!srcPath.length) {
      result.pathname = null;
      if (result.search) {
        result.path = '/' + result.search;
      } else {
        result.path = null;
      }
      result.href = result.format();
      return result;
    }
    var last = srcPath.slice(-1)[0];
    var hasTrailingSlash = ((result.host || relative.host) && (last === '.' || last === '..') || last === '');
    var up = 0;
    for (var i = srcPath.length; i >= 0; i--) {
      last = srcPath[i];
      if (last == '.') {
        srcPath.splice(i, 1);
      } else if (last === '..') {
        srcPath.splice(i, 1);
        up++;
      } else if (up) {
        srcPath.splice(i, 1);
        up--;
      }
    }
    if (!mustEndAbs && !removeAllDots) {
      for (; up--; up) {
        srcPath.unshift('..');
      }
    }
    if (mustEndAbs && srcPath[0] !== '' && (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
      srcPath.unshift('');
    }
    if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
      srcPath.push('');
    }
    var isAbsolute = srcPath[0] === '' || (srcPath[0] && srcPath[0].charAt(0) === '/');
    if (psychotic) {
      result.hostname = result.host = isAbsolute ? '' : srcPath.length ? srcPath.shift() : '';
      var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    mustEndAbs = mustEndAbs || (result.host && srcPath.length);
    if (mustEndAbs && !isAbsolute) {
      srcPath.unshift('');
    }
    if (!srcPath.length) {
      result.pathname = null;
      result.path = null;
    } else {
      result.pathname = srcPath.join('/');
    }
    if (!isNull(result.pathname) || !isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
    }
    result.auth = relative.auth || result.auth;
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  };
  Url.prototype.parseHost = function() {
    var host = this.host;
    var port = portPattern.exec(host);
    if (port) {
      port = port[0];
      if (port !== ':') {
        this.port = port.substr(1);
      }
      host = host.substr(0, host.length - port.length);
    }
    if (host)
      this.hostname = host;
  };
  function isString(arg) {
    return typeof arg === "string";
  }
  function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  }
  function isNull(arg) {
    return arg === null;
  }
  function isNullOrUndefined(arg) {
    return arg == null;
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("6e", ["6d"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('6d');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("6f", ["6e"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__System._nodeRequire ? $__System._nodeRequire('url') : $__require('6e');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3f", ["6f"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('6f');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("64", ["65", "3f"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var EventEmitter = $__require('65'),
      _url = $__require('3f'),
      useXdr = !!(window.XDomainRequest && !('withCredentials' in (new XMLHttpRequest()))),
      tempAnchor = null;
  function Resource(name, url, options) {
    EventEmitter.call(this);
    options = options || {};
    if (typeof name !== 'string' || typeof url !== 'string') {
      throw new Error('Both name and url are required for constructing a resource.');
    }
    this.name = name;
    this.url = url;
    this.isDataUrl = this.url.indexOf('data:') === 0;
    this.data = null;
    this.crossOrigin = options.crossOrigin === true ? 'anonymous' : options.crossOrigin;
    this.loadType = options.loadType || this._determineLoadType();
    this.xhrType = options.xhrType;
    this.metadata = options.metadata || {};
    this.error = null;
    this.xhr = null;
    this.isJson = false;
    this.isXml = false;
    this.isImage = false;
    this.isAudio = false;
    this.isVideo = false;
    this._dequeue = null;
    this._boundComplete = this.complete.bind(this);
    this._boundOnError = this._onError.bind(this);
    this._boundOnProgress = this._onProgress.bind(this);
    this._boundXhrOnError = this._xhrOnError.bind(this);
    this._boundXhrOnAbort = this._xhrOnAbort.bind(this);
    this._boundXhrOnLoad = this._xhrOnLoad.bind(this);
    this._boundXdrOnTimeout = this._xdrOnTimeout.bind(this);
  }
  Resource.prototype = Object.create(EventEmitter.prototype);
  Resource.prototype.constructor = Resource;
  module.exports = Resource;
  Resource.prototype.complete = function() {
    if (this.data && this.data.removeEventListener) {
      this.data.removeEventListener('error', this._boundOnError);
      this.data.removeEventListener('load', this._boundComplete);
      this.data.removeEventListener('progress', this._boundOnProgress);
      this.data.removeEventListener('canplaythrough', this._boundComplete);
    }
    if (this.xhr) {
      if (this.xhr.removeEventListener) {
        this.xhr.removeEventListener('error', this._boundXhrOnError);
        this.xhr.removeEventListener('abort', this._boundXhrOnAbort);
        this.xhr.removeEventListener('progress', this._boundOnProgress);
        this.xhr.removeEventListener('load', this._boundXhrOnLoad);
      } else {
        this.xhr.onerror = null;
        this.xhr.ontimeout = null;
        this.xhr.onprogress = null;
        this.xhr.onload = null;
      }
    }
    this.emit('complete', this);
  };
  Resource.prototype.load = function(cb) {
    this.emit('start', this);
    if (cb) {
      this.once('complete', cb);
    }
    if (this.crossOrigin === false || typeof this.crossOrigin !== 'string') {
      this.crossOrigin = this._determineCrossOrigin(this.url);
    }
    switch (this.loadType) {
      case Resource.LOAD_TYPE.IMAGE:
        this._loadImage();
        break;
      case Resource.LOAD_TYPE.AUDIO:
        this._loadElement('audio');
        break;
      case Resource.LOAD_TYPE.VIDEO:
        this._loadElement('video');
        break;
      case Resource.LOAD_TYPE.XHR:
      default:
        if (useXdr && this.crossOrigin) {
          this._loadXdr();
        } else {
          this._loadXhr();
        }
        break;
    }
  };
  Resource.prototype._loadImage = function() {
    this.data = new Image();
    if (this.crossOrigin) {
      this.data.crossOrigin = this.crossOrigin;
    }
    this.data.src = this.url;
    this.isImage = true;
    this.data.addEventListener('error', this._boundOnError, false);
    this.data.addEventListener('load', this._boundComplete, false);
    this.data.addEventListener('progress', this._boundOnProgress, false);
  };
  Resource.prototype._loadElement = function(type) {
    if (type === 'audio' && typeof Audio !== 'undefined') {
      this.data = new Audio();
    } else {
      this.data = document.createElement(type);
    }
    if (this.data === null) {
      this.error = new Error('Unsupported element ' + type);
      this.complete();
      return;
    }
    if (navigator.isCocoonJS) {
      this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
    } else {
      if (Array.isArray(this.url)) {
        for (var i = 0; i < this.url.length; ++i) {
          this.data.appendChild(this._createSource(type, this.url[i]));
        }
      } else {
        this.data.appendChild(this._createSource(type, this.url));
      }
    }
    this['is' + type[0].toUpperCase() + type.substring(1)] = true;
    this.data.addEventListener('error', this._boundOnError, false);
    this.data.addEventListener('load', this._boundComplete, false);
    this.data.addEventListener('progress', this._boundOnProgress, false);
    this.data.addEventListener('canplaythrough', this._boundComplete, false);
    this.data.load();
  };
  Resource.prototype._loadXhr = function() {
    if (typeof this.xhrType !== 'string') {
      this.xhrType = this._determineXhrType();
    }
    var xhr = this.xhr = new XMLHttpRequest();
    xhr.open('GET', this.url, true);
    if (this.xhrType === Resource.XHR_RESPONSE_TYPE.JSON || this.xhrType === Resource.XHR_RESPONSE_TYPE.DOCUMENT) {
      xhr.responseType = Resource.XHR_RESPONSE_TYPE.TEXT;
    } else {
      xhr.responseType = this.xhrType;
    }
    xhr.addEventListener('error', this._boundXhrOnError, false);
    xhr.addEventListener('abort', this._boundXhrOnAbort, false);
    xhr.addEventListener('progress', this._boundOnProgress, false);
    xhr.addEventListener('load', this._boundXhrOnLoad, false);
    xhr.send();
  };
  Resource.prototype._loadXdr = function() {
    if (typeof this.xhrType !== 'string') {
      this.xhrType = this._determineXhrType();
    }
    var xdr = this.xhr = new XDomainRequest();
    xdr.timeout = 5000;
    xdr.onerror = this._boundXhrOnError;
    xdr.ontimeout = this._boundXdrOnTimeout;
    xdr.onprogress = this._boundOnProgress;
    xdr.onload = this._boundXhrOnLoad;
    xdr.open('GET', this.url, true);
    setTimeout(function() {
      xdr.send();
    }, 0);
  };
  Resource.prototype._createSource = function(type, url, mime) {
    if (!mime) {
      mime = type + '/' + url.substr(url.lastIndexOf('.') + 1);
    }
    var source = document.createElement('source');
    source.src = url;
    source.type = mime;
    return source;
  };
  Resource.prototype._onError = function(event) {
    this.error = new Error('Failed to load element using ' + event.target.nodeName);
    this.complete();
  };
  Resource.prototype._onProgress = function(event) {
    if (event && event.lengthComputable) {
      this.emit('progress', this, event.loaded / event.total);
    }
  };
  Resource.prototype._xhrOnError = function() {
    this.error = new Error(reqType(this.xhr) + ' Request failed. ' + 'Status: ' + this.xhr.status + ', text: "' + this.xhr.statusText + '"');
    this.complete();
  };
  Resource.prototype._xhrOnAbort = function() {
    this.error = new Error(reqType(this.xhr) + ' Request was aborted by the user.');
    this.complete();
  };
  Resource.prototype._xdrOnTimeout = function() {
    this.error = new Error(reqType(this.xhr) + ' Request timed out.');
    this.complete();
  };
  Resource.prototype._xhrOnLoad = function() {
    var xhr = this.xhr,
        status = xhr.status !== undefined ? xhr.status : 200;
    if (status === 200 || status === 204 || (status === 0 && xhr.responseText.length > 0)) {
      if (this.xhrType === Resource.XHR_RESPONSE_TYPE.TEXT) {
        this.data = xhr.responseText;
      } else if (this.xhrType === Resource.XHR_RESPONSE_TYPE.JSON) {
        try {
          this.data = JSON.parse(xhr.responseText);
          this.isJson = true;
        } catch (e) {
          this.error = new Error('Error trying to parse loaded json:', e);
        }
      } else if (this.xhrType === Resource.XHR_RESPONSE_TYPE.DOCUMENT) {
        try {
          if (window.DOMParser) {
            var domparser = new DOMParser();
            this.data = domparser.parseFromString(xhr.responseText, 'text/xml');
          } else {
            var div = document.createElement('div');
            div.innerHTML = xhr.responseText;
            this.data = div;
          }
          this.isXml = true;
        } catch (e) {
          this.error = new Error('Error trying to parse loaded xml:', e);
        }
      } else {
        this.data = xhr.response || xhr.responseText;
      }
    } else {
      this.error = new Error('[' + xhr.status + ']' + xhr.statusText + ':' + xhr.responseURL);
    }
    this.complete();
  };
  function reqType(xhr) {
    return xhr.toString().replace('object ', '');
  }
  Resource.prototype._determineCrossOrigin = function(url, loc) {
    if (url.indexOf('data:') === 0) {
      return '';
    }
    loc = loc || window.location;
    if (!tempAnchor) {
      tempAnchor = document.createElement('a');
    }
    tempAnchor.href = url;
    url = _url.parse(tempAnchor.href);
    var samePort = (!url.port && loc.port === '') || (url.port === loc.port);
    if (url.hostname !== loc.hostname || !samePort || url.protocol !== loc.protocol) {
      return 'anonymous';
    }
    return '';
  };
  Resource.prototype._determineXhrType = function() {
    return Resource._xhrTypeMap[this._getExtension()] || Resource.XHR_RESPONSE_TYPE.TEXT;
  };
  Resource.prototype._determineLoadType = function() {
    return Resource._loadTypeMap[this._getExtension()] || Resource.LOAD_TYPE.XHR;
  };
  Resource.prototype._getExtension = function() {
    var url = this.url,
        ext;
    if (this.isDataUrl) {
      var slashIndex = url.indexOf('/');
      ext = url.substring(slashIndex + 1, url.indexOf(';', slashIndex));
    } else {
      var queryStart = url.indexOf('?');
      if (queryStart !== -1) {
        url = url.substring(0, queryStart);
      }
      ext = url.substring(url.lastIndexOf('.') + 1);
    }
    return ext;
  };
  Resource.prototype._getMimeFromXhrType = function(type) {
    switch (type) {
      case Resource.XHR_RESPONSE_TYPE.BUFFER:
        return 'application/octet-binary';
      case Resource.XHR_RESPONSE_TYPE.BLOB:
        return 'application/blob';
      case Resource.XHR_RESPONSE_TYPE.DOCUMENT:
        return 'application/xml';
      case Resource.XHR_RESPONSE_TYPE.JSON:
        return 'application/json';
      case Resource.XHR_RESPONSE_TYPE.DEFAULT:
      case Resource.XHR_RESPONSE_TYPE.TEXT:
      default:
        return 'text/plain';
    }
  };
  Resource.LOAD_TYPE = {
    XHR: 1,
    IMAGE: 2,
    AUDIO: 3,
    VIDEO: 4
  };
  Resource.XHR_READY_STATE = {
    UNSENT: 0,
    OPENED: 1,
    HEADERS_RECEIVED: 2,
    LOADING: 3,
    DONE: 4
  };
  Resource.XHR_RESPONSE_TYPE = {
    DEFAULT: 'text',
    BUFFER: 'arraybuffer',
    BLOB: 'blob',
    DOCUMENT: 'document',
    JSON: 'json',
    TEXT: 'text'
  };
  Resource._loadTypeMap = {
    'gif': Resource.LOAD_TYPE.IMAGE,
    'png': Resource.LOAD_TYPE.IMAGE,
    'bmp': Resource.LOAD_TYPE.IMAGE,
    'jpg': Resource.LOAD_TYPE.IMAGE,
    'jpeg': Resource.LOAD_TYPE.IMAGE,
    'tif': Resource.LOAD_TYPE.IMAGE,
    'tiff': Resource.LOAD_TYPE.IMAGE,
    'webp': Resource.LOAD_TYPE.IMAGE,
    'tga': Resource.LOAD_TYPE.IMAGE
  };
  Resource._xhrTypeMap = {
    'xhtml': Resource.XHR_RESPONSE_TYPE.DOCUMENT,
    'html': Resource.XHR_RESPONSE_TYPE.DOCUMENT,
    'htm': Resource.XHR_RESPONSE_TYPE.DOCUMENT,
    'xml': Resource.XHR_RESPONSE_TYPE.DOCUMENT,
    'tmx': Resource.XHR_RESPONSE_TYPE.DOCUMENT,
    'tsx': Resource.XHR_RESPONSE_TYPE.DOCUMENT,
    'svg': Resource.XHR_RESPONSE_TYPE.DOCUMENT,
    'gif': Resource.XHR_RESPONSE_TYPE.BLOB,
    'png': Resource.XHR_RESPONSE_TYPE.BLOB,
    'bmp': Resource.XHR_RESPONSE_TYPE.BLOB,
    'jpg': Resource.XHR_RESPONSE_TYPE.BLOB,
    'jpeg': Resource.XHR_RESPONSE_TYPE.BLOB,
    'tif': Resource.XHR_RESPONSE_TYPE.BLOB,
    'tiff': Resource.XHR_RESPONSE_TYPE.BLOB,
    'webp': Resource.XHR_RESPONSE_TYPE.BLOB,
    'tga': Resource.XHR_RESPONSE_TYPE.BLOB,
    'json': Resource.XHR_RESPONSE_TYPE.JSON,
    'text': Resource.XHR_RESPONSE_TYPE.TEXT,
    'txt': Resource.XHR_RESPONSE_TYPE.TEXT
  };
  Resource.setExtensionLoadType = function(extname, loadType) {
    setExtMap(Resource._loadTypeMap, extname, loadType);
  };
  Resource.setExtensionXhrType = function(extname, xhrType) {
    setExtMap(Resource._xhrTypeMap, extname, xhrType);
  };
  function setExtMap(map, extname, val) {
    if (extname && extname.indexOf('.') === 0) {
      extname = extname.substring(1);
    }
    if (!extname) {
      return;
    }
    map[extname] = val;
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("70", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encodeBinary: function(input) {
      var output = "";
      var bytebuffer;
      var encodedCharIndexes = new Array(4);
      var inx = 0;
      var jnx = 0;
      var paddingBytes = 0;
      while (inx < input.length) {
        bytebuffer = new Array(3);
        for (jnx = 0; jnx < bytebuffer.length; jnx++) {
          if (inx < input.length) {
            bytebuffer[jnx] = input.charCodeAt(inx++) & 0xff;
          } else {
            bytebuffer[jnx] = 0;
          }
        }
        encodedCharIndexes[0] = bytebuffer[0] >> 2;
        encodedCharIndexes[1] = ((bytebuffer[0] & 0x3) << 4) | (bytebuffer[1] >> 4);
        encodedCharIndexes[2] = ((bytebuffer[1] & 0x0f) << 2) | (bytebuffer[2] >> 6);
        encodedCharIndexes[3] = bytebuffer[2] & 0x3f;
        paddingBytes = inx - (input.length - 1);
        switch (paddingBytes) {
          case 2:
            encodedCharIndexes[3] = 64;
            encodedCharIndexes[2] = 64;
            break;
          case 1:
            encodedCharIndexes[3] = 64;
            break;
          default:
            break;
        }
        for (jnx = 0; jnx < encodedCharIndexes.length; jnx++) {
          output += this._keyStr.charAt(encodedCharIndexes[jnx]);
        }
      }
      return output;
    }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("71", ["64", "70"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Resource = $__require('64'),
      b64 = $__require('70');
  window.URL = window.URL || window.webkitURL;
  module.exports = function() {
    return function(resource, next) {
      if (!resource.data) {
        return next();
      }
      if (resource.xhr && resource.xhrType === Resource.XHR_RESPONSE_TYPE.BLOB) {
        if (!window.Blob || typeof resource.data === 'string') {
          var type = resource.xhr.getResponseHeader('content-type');
          if (type && type.indexOf('image') === 0) {
            resource.data = new Image();
            resource.data.src = 'data:' + type + ';base64,' + b64.encodeBinary(resource.xhr.responseText);
            resource.isImage = true;
            resource.data.onload = function() {
              resource.data.onload = null;
              next();
            };
          }
        } else if (resource.data.type.indexOf('image') === 0) {
          var src = URL.createObjectURL(resource.data);
          resource.blob = resource.data;
          resource.data = new Image();
          resource.data.src = src;
          resource.isImage = true;
          resource.data.onload = function() {
            URL.revokeObjectURL(src);
            resource.data.onload = null;
            next();
          };
        }
      } else {
        next();
      }
    };
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("72", ["63", "64", "66", "71"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('63');
  module.exports.Resource = $__require('64');
  module.exports.middleware = {
    caching: {memory: $__require('66')},
    parsing: {blob: $__require('71')}
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5b", ["72"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('72');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("73", ["57", "5a", "59", "58", "5b"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    Loader: $__require('57'),
    bitmapFontParser: $__require('5a'),
    spritesheetParser: $__require('59'),
    textureParser: $__require('58'),
    Resource: $__require('5b').Resource
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("74", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var accessibleTarget = {
    accessible: false,
    accessibleTitle: null,
    tabIndex: 0,
    _accessibleActive: false,
    _accessibleDiv: false
  };
  module.exports = accessibleTarget;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("75", ["53", "74"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = $__require('53');
  Object.assign(core.DisplayObject.prototype, $__require('74'));
  function AccessibilityManager(renderer) {
    var div = document.createElement('div');
    div.style.width = 100 + 'px';
    div.style.height = 100 + 'px';
    div.style.position = 'absolute';
    div.style.top = 0;
    div.style.left = 0;
    div.style.zIndex = 2;
    this.div = div;
    this.pool = [];
    this.renderId = 0;
    this.debug = false;
    this.renderer = renderer;
    this.children = [];
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onMouseMove = this._onMouseMove.bind(this);
    this.isActive = false;
    window.addEventListener('keydown', this._onKeyDown, false);
  }
  AccessibilityManager.prototype.constructor = AccessibilityManager;
  module.exports = AccessibilityManager;
  AccessibilityManager.prototype.activate = function() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    window.document.addEventListener('mousemove', this._onMouseMove, true);
    window.removeEventListener('keydown', this._onKeyDown, false);
    this.renderer.on('postrender', this.update, this);
    this.renderer.view.parentNode.appendChild(this.div);
  };
  AccessibilityManager.prototype.deactivate = function() {
    if (!this.isActive) {
      return;
    }
    this.isActive = false;
    window.document.removeEventListener('mousemove', this._onMouseMove);
    window.addEventListener('keydown', this._onKeyDown, false);
    this.renderer.off('postrender', this.update);
    this.div.parentNode.removeChild(this.div);
  };
  AccessibilityManager.prototype.updateAccessibleObjects = function(displayObject) {
    if (!displayObject.visible) {
      return;
    }
    if (displayObject.accessible && displayObject.interactive) {
      if (!displayObject._accessibleActive) {
        this.addChild(displayObject);
      }
      displayObject.renderId = this.renderId;
    }
    var children = displayObject.children;
    for (var i = children.length - 1; i >= 0; i--) {
      this.updateAccessibleObjects(children[i]);
    }
  };
  AccessibilityManager.prototype.update = function() {
    this.updateAccessibleObjects(this.renderer._lastObjectRendered);
    var rect = this.renderer.view.getBoundingClientRect();
    var sx = rect.width / this.renderer.width;
    var sy = rect.height / this.renderer.height;
    var div = this.div;
    div.style.left = rect.left + 'px';
    div.style.top = rect.top + 'px';
    div.style.width = this.renderer.width + 'px';
    div.style.height = this.renderer.height + 'px';
    for (var i = 0; i < this.children.length; i++) {
      var child = this.children[i];
      if (child.renderId !== this.renderId) {
        child._accessibleActive = false;
        core.utils.removeItems(this.children, i, 1);
        this.div.removeChild(child._accessibleDiv);
        this.pool.push(child._accessibleDiv);
        child._accessibleDiv = null;
        i--;
        if (this.children.length === 0) {
          this.deactivate();
        }
      } else {
        div = child._accessibleDiv;
        var hitArea = child.hitArea;
        var wt = child.worldTransform;
        if (child.hitArea) {
          div.style.left = ((wt.tx + (hitArea.x * wt.a)) * sx) + 'px';
          div.style.top = ((wt.ty + (hitArea.y * wt.d)) * sy) + 'px';
          div.style.width = (hitArea.width * wt.a * sx) + 'px';
          div.style.height = (hitArea.height * wt.d * sy) + 'px';
        } else {
          hitArea = child.getBounds();
          this.capHitArea(hitArea);
          div.style.left = (hitArea.x * sx) + 'px';
          div.style.top = (hitArea.y * sy) + 'px';
          div.style.width = (hitArea.width * sx) + 'px';
          div.style.height = (hitArea.height * sy) + 'px';
        }
      }
    }
    this.renderId++;
  };
  AccessibilityManager.prototype.capHitArea = function(hitArea) {
    if (hitArea.x < 0) {
      hitArea.width += hitArea.x;
      hitArea.x = 0;
    }
    if (hitArea.y < 0) {
      hitArea.height += hitArea.y;
      hitArea.y = 0;
    }
    if (hitArea.x + hitArea.width > this.renderer.width) {
      hitArea.width = this.renderer.width - hitArea.x;
    }
    if (hitArea.y + hitArea.height > this.renderer.height) {
      hitArea.height = this.renderer.height - hitArea.y;
    }
  };
  AccessibilityManager.prototype.addChild = function(displayObject) {
    var div = this.pool.pop();
    if (!div) {
      div = document.createElement('button');
      div.style.width = 100 + 'px';
      div.style.height = 100 + 'px';
      div.style.backgroundColor = this.debug ? 'rgba(255,0,0,0.5)' : 'transparent';
      div.style.position = 'absolute';
      div.style.zIndex = 2;
      div.style.borderStyle = 'none';
      div.addEventListener('click', this._onClick.bind(this));
      div.addEventListener('focus', this._onFocus.bind(this));
      div.addEventListener('focusout', this._onFocusOut.bind(this));
    }
    div.title = displayObject.accessibleTitle || 'displayObject ' + this.tabIndex;
    displayObject._accessibleActive = true;
    displayObject._accessibleDiv = div;
    div.displayObject = displayObject;
    this.children.push(displayObject);
    this.div.appendChild(displayObject._accessibleDiv);
    displayObject._accessibleDiv.tabIndex = displayObject.tabIndex;
  };
  AccessibilityManager.prototype._onClick = function(e) {
    var interactionManager = this.renderer.plugins.interaction;
    interactionManager.dispatchEvent(e.target.displayObject, 'click', interactionManager.eventData);
  };
  AccessibilityManager.prototype._onFocus = function(e) {
    var interactionManager = this.renderer.plugins.interaction;
    interactionManager.dispatchEvent(e.target.displayObject, 'mouseover', interactionManager.eventData);
  };
  AccessibilityManager.prototype._onFocusOut = function(e) {
    var interactionManager = this.renderer.plugins.interaction;
    interactionManager.dispatchEvent(e.target.displayObject, 'mouseout', interactionManager.eventData);
  };
  AccessibilityManager.prototype._onKeyDown = function(e) {
    if (e.keyCode !== 9) {
      return;
    }
    this.activate();
  };
  AccessibilityManager.prototype._onMouseMove = function() {
    this.deactivate();
  };
  AccessibilityManager.prototype.destroy = function() {
    this.div = null;
    for (var i = 0; i < this.children.length; i++) {
      this.children[i].div = null;
    }
    window.document.removeEventListener('mousemove', this._onMouseMove);
    window.removeEventListener('keydown', this._onKeyDown);
    this.pool = null;
    this.children = null;
    this.renderer = null;
  };
  core.WebGLRenderer.registerPlugin('accessibility', AccessibilityManager);
  core.CanvasRenderer.registerPlugin('accessibility', AccessibilityManager);
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("76", ["74", "75"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    accessibleTarget: $__require('74'),
    AccessibilityManager: $__require('75')
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("77", ["78"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Mesh = $__require('78');
  function Plane(texture, segmentsX, segmentsY) {
    Mesh.call(this, texture);
    this._ready = true;
    this.segmentsX = segmentsX || 10;
    this.segmentsY = segmentsY || 10;
    this.drawMode = Mesh.DRAW_MODES.TRIANGLES;
    this.refresh();
  }
  Plane.prototype = Object.create(Mesh.prototype);
  Plane.prototype.constructor = Plane;
  module.exports = Plane;
  Plane.prototype.refresh = function() {
    var total = this.segmentsX * this.segmentsY;
    var verts = [];
    var colors = [];
    var uvs = [];
    var indices = [];
    var texture = this.texture;
    var segmentsXSub = this.segmentsX - 1;
    var segmentsYSub = this.segmentsY - 1;
    var i = 0;
    var sizeX = texture.width / segmentsXSub;
    var sizeY = texture.height / segmentsYSub;
    for (i = 0; i < total; i++) {
      var x = (i % this.segmentsX);
      var y = ((i / this.segmentsX) | 0);
      verts.push((x * sizeX), (y * sizeY));
      uvs.push(x / (this.segmentsX - 1), y / (this.segmentsY - 1));
    }
    var totalSub = segmentsXSub * segmentsYSub;
    for (i = 0; i < totalSub; i++) {
      var xpos = i % segmentsXSub;
      var ypos = (i / segmentsXSub) | 0;
      var value = (ypos * this.segmentsX) + xpos;
      var value2 = (ypos * this.segmentsX) + xpos + 1;
      var value3 = ((ypos + 1) * this.segmentsX) + xpos;
      var value4 = ((ypos + 1) * this.segmentsX) + xpos + 1;
      indices.push(value, value2, value3);
      indices.push(value2, value4, value3);
    }
    this.vertices = new Float32Array(verts);
    this.uvs = new Float32Array(uvs);
    this.colors = new Float32Array(colors);
    this.indices = new Uint16Array(indices);
  };
  Plane.prototype._onTextureUpdate = function() {
    Mesh.prototype._onTextureUpdate.call(this);
    if (this._ready) {
      this.refresh();
    }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("79", ["78", "53"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Mesh = $__require('78');
  var core = $__require('53');
  function Rope(texture, points) {
    Mesh.call(this, texture);
    this.points = points;
    this.vertices = new Float32Array(points.length * 4);
    this.uvs = new Float32Array(points.length * 4);
    this.colors = new Float32Array(points.length * 2);
    this.indices = new Uint16Array(points.length * 2);
    this._ready = true;
    this.refresh();
  }
  Rope.prototype = Object.create(Mesh.prototype);
  Rope.prototype.constructor = Rope;
  module.exports = Rope;
  Rope.prototype.refresh = function() {
    var points = this.points;
    if (points.length < 1 || !this._texture._uvs) {
      return;
    }
    var uvs = this.uvs;
    var indices = this.indices;
    var colors = this.colors;
    var textureUvs = this._texture._uvs;
    var offset = new core.Point(textureUvs.x0, textureUvs.y0);
    var factor = new core.Point(textureUvs.x2 - textureUvs.x0, textureUvs.y2 - textureUvs.y0);
    uvs[0] = 0 + offset.x;
    uvs[1] = 0 + offset.y;
    uvs[2] = 0 + offset.x;
    uvs[3] = 1 * factor.y + offset.y;
    colors[0] = 1;
    colors[1] = 1;
    indices[0] = 0;
    indices[1] = 1;
    var total = points.length,
        point,
        index,
        amount;
    for (var i = 1; i < total; i++) {
      point = points[i];
      index = i * 4;
      amount = i / (total - 1);
      uvs[index] = amount * factor.x + offset.x;
      uvs[index + 1] = 0 + offset.y;
      uvs[index + 2] = amount * factor.x + offset.x;
      uvs[index + 3] = 1 * factor.y + offset.y;
      index = i * 2;
      colors[index] = 1;
      colors[index + 1] = 1;
      index = i * 2;
      indices[index] = index;
      indices[index + 1] = index + 1;
    }
    this.dirty = true;
  };
  Rope.prototype._onTextureUpdate = function() {
    Mesh.prototype._onTextureUpdate.call(this);
    if (this._ready) {
      this.refresh();
    }
  };
  Rope.prototype.updateTransform = function() {
    var points = this.points;
    if (points.length < 1) {
      return;
    }
    var lastPoint = points[0];
    var nextPoint;
    var perpX = 0;
    var perpY = 0;
    var vertices = this.vertices;
    var total = points.length,
        point,
        index,
        ratio,
        perpLength,
        num;
    for (var i = 0; i < total; i++) {
      point = points[i];
      index = i * 4;
      if (i < points.length - 1) {
        nextPoint = points[i + 1];
      } else {
        nextPoint = point;
      }
      perpY = -(nextPoint.x - lastPoint.x);
      perpX = nextPoint.y - lastPoint.y;
      ratio = (1 - (i / (total - 1))) * 10;
      if (ratio > 1) {
        ratio = 1;
      }
      perpLength = Math.sqrt(perpX * perpX + perpY * perpY);
      num = this._texture.height / 2;
      perpX /= perpLength;
      perpY /= perpLength;
      perpX *= num;
      perpY *= num;
      vertices[index] = point.x + perpX;
      vertices[index + 1] = point.y + perpY;
      vertices[index + 2] = point.x - perpX;
      vertices[index + 3] = point.y - perpY;
      lastPoint = point;
    }
    this.containerUpdateTransform();
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("78", ["53"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = $__require('53'),
      tempPoint = new core.Point(),
      tempPolygon = new core.Polygon();
  function Mesh(texture, vertices, uvs, indices, drawMode) {
    core.Container.call(this);
    this._texture = null;
    this.uvs = uvs || new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]);
    this.vertices = vertices || new Float32Array([0, 0, 100, 0, 100, 100, 0, 100]);
    this.indices = indices || new Uint16Array([0, 1, 3, 2]);
    this.dirty = true;
    this.blendMode = core.BLEND_MODES.NORMAL;
    this.canvasPadding = 0;
    this.drawMode = drawMode || Mesh.DRAW_MODES.TRIANGLE_MESH;
    this.texture = texture;
    this.shader = null;
  }
  Mesh.prototype = Object.create(core.Container.prototype);
  Mesh.prototype.constructor = Mesh;
  module.exports = Mesh;
  Object.defineProperties(Mesh.prototype, {texture: {
      get: function() {
        return this._texture;
      },
      set: function(value) {
        if (this._texture === value) {
          return;
        }
        this._texture = value;
        if (value) {
          if (value.baseTexture.hasLoaded) {
            this._onTextureUpdate();
          } else {
            value.once('update', this._onTextureUpdate, this);
          }
        }
      }
    }});
  Mesh.prototype._renderWebGL = function(renderer) {
    renderer.setObjectRenderer(renderer.plugins.mesh);
    renderer.plugins.mesh.render(this);
  };
  Mesh.prototype._renderCanvas = function(renderer) {
    var context = renderer.context;
    var transform = this.worldTransform;
    if (renderer.roundPixels) {
      context.setTransform(transform.a, transform.b, transform.c, transform.d, transform.tx | 0, transform.ty | 0);
    } else {
      context.setTransform(transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
    }
    if (this.drawMode === Mesh.DRAW_MODES.TRIANGLE_MESH) {
      this._renderCanvasTriangleMesh(context);
    } else {
      this._renderCanvasTriangles(context);
    }
  };
  Mesh.prototype._renderCanvasTriangleMesh = function(context) {
    var vertices = this.vertices;
    var uvs = this.uvs;
    var length = vertices.length / 2;
    for (var i = 0; i < length - 2; i++) {
      var index = i * 2;
      this._renderCanvasDrawTriangle(context, vertices, uvs, index, (index + 2), (index + 4));
    }
  };
  Mesh.prototype._renderCanvasTriangles = function(context) {
    var vertices = this.vertices;
    var uvs = this.uvs;
    var indices = this.indices;
    var length = indices.length;
    for (var i = 0; i < length; i += 3) {
      var index0 = indices[i] * 2,
          index1 = indices[i + 1] * 2,
          index2 = indices[i + 2] * 2;
      this._renderCanvasDrawTriangle(context, vertices, uvs, index0, index1, index2);
    }
  };
  Mesh.prototype._renderCanvasDrawTriangle = function(context, vertices, uvs, index0, index1, index2) {
    var textureSource = this._texture.baseTexture.source;
    var textureWidth = this._texture.baseTexture.width;
    var textureHeight = this._texture.baseTexture.height;
    var x0 = vertices[index0],
        x1 = vertices[index1],
        x2 = vertices[index2];
    var y0 = vertices[index0 + 1],
        y1 = vertices[index1 + 1],
        y2 = vertices[index2 + 1];
    var u0 = uvs[index0] * textureWidth,
        u1 = uvs[index1] * textureWidth,
        u2 = uvs[index2] * textureWidth;
    var v0 = uvs[index0 + 1] * textureHeight,
        v1 = uvs[index1 + 1] * textureHeight,
        v2 = uvs[index2 + 1] * textureHeight;
    if (this.canvasPadding > 0) {
      var paddingX = this.canvasPadding / this.worldTransform.a;
      var paddingY = this.canvasPadding / this.worldTransform.d;
      var centerX = (x0 + x1 + x2) / 3;
      var centerY = (y0 + y1 + y2) / 3;
      var normX = x0 - centerX;
      var normY = y0 - centerY;
      var dist = Math.sqrt(normX * normX + normY * normY);
      x0 = centerX + (normX / dist) * (dist + paddingX);
      y0 = centerY + (normY / dist) * (dist + paddingY);
      normX = x1 - centerX;
      normY = y1 - centerY;
      dist = Math.sqrt(normX * normX + normY * normY);
      x1 = centerX + (normX / dist) * (dist + paddingX);
      y1 = centerY + (normY / dist) * (dist + paddingY);
      normX = x2 - centerX;
      normY = y2 - centerY;
      dist = Math.sqrt(normX * normX + normY * normY);
      x2 = centerX + (normX / dist) * (dist + paddingX);
      y2 = centerY + (normY / dist) * (dist + paddingY);
    }
    context.save();
    context.beginPath();
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.closePath();
    context.clip();
    var delta = (u0 * v1) + (v0 * u2) + (u1 * v2) - (v1 * u2) - (v0 * u1) - (u0 * v2);
    var deltaA = (x0 * v1) + (v0 * x2) + (x1 * v2) - (v1 * x2) - (v0 * x1) - (x0 * v2);
    var deltaB = (u0 * x1) + (x0 * u2) + (u1 * x2) - (x1 * u2) - (x0 * u1) - (u0 * x2);
    var deltaC = (u0 * v1 * x2) + (v0 * x1 * u2) + (x0 * u1 * v2) - (x0 * v1 * u2) - (v0 * u1 * x2) - (u0 * x1 * v2);
    var deltaD = (y0 * v1) + (v0 * y2) + (y1 * v2) - (v1 * y2) - (v0 * y1) - (y0 * v2);
    var deltaE = (u0 * y1) + (y0 * u2) + (u1 * y2) - (y1 * u2) - (y0 * u1) - (u0 * y2);
    var deltaF = (u0 * v1 * y2) + (v0 * y1 * u2) + (y0 * u1 * v2) - (y0 * v1 * u2) - (v0 * u1 * y2) - (u0 * y1 * v2);
    context.transform(deltaA / delta, deltaD / delta, deltaB / delta, deltaE / delta, deltaC / delta, deltaF / delta);
    context.drawImage(textureSource, 0, 0);
    context.restore();
  };
  Mesh.prototype.renderMeshFlat = function(Mesh) {
    var context = this.context;
    var vertices = Mesh.vertices;
    var length = vertices.length / 2;
    context.beginPath();
    for (var i = 1; i < length - 2; i++) {
      var index = i * 2;
      var x0 = vertices[index],
          x1 = vertices[index + 2],
          x2 = vertices[index + 4];
      var y0 = vertices[index + 1],
          y1 = vertices[index + 3],
          y2 = vertices[index + 5];
      context.moveTo(x0, y0);
      context.lineTo(x1, y1);
      context.lineTo(x2, y2);
    }
    context.fillStyle = '#FF0000';
    context.fill();
    context.closePath();
  };
  Mesh.prototype._onTextureUpdate = function() {
    this.updateFrame = true;
  };
  Mesh.prototype.getBounds = function(matrix) {
    if (!this._currentBounds) {
      var worldTransform = matrix || this.worldTransform;
      var a = worldTransform.a;
      var b = worldTransform.b;
      var c = worldTransform.c;
      var d = worldTransform.d;
      var tx = worldTransform.tx;
      var ty = worldTransform.ty;
      var maxX = -Infinity;
      var maxY = -Infinity;
      var minX = Infinity;
      var minY = Infinity;
      var vertices = this.vertices;
      for (var i = 0,
          n = vertices.length; i < n; i += 2) {
        var rawX = vertices[i],
            rawY = vertices[i + 1];
        var x = (a * rawX) + (c * rawY) + tx;
        var y = (d * rawY) + (b * rawX) + ty;
        minX = x < minX ? x : minX;
        minY = y < minY ? y : minY;
        maxX = x > maxX ? x : maxX;
        maxY = y > maxY ? y : maxY;
      }
      if (minX === -Infinity || maxY === Infinity) {
        return core.Rectangle.EMPTY;
      }
      var bounds = this._bounds;
      bounds.x = minX;
      bounds.width = maxX - minX;
      bounds.y = minY;
      bounds.height = maxY - minY;
      this._currentBounds = bounds;
    }
    return this._currentBounds;
  };
  Mesh.prototype.containsPoint = function(point) {
    if (!this.getBounds().contains(point.x, point.y)) {
      return false;
    }
    this.worldTransform.applyInverse(point, tempPoint);
    var vertices = this.vertices;
    var points = tempPolygon.points;
    var i,
        len;
    if (this.drawMode === Mesh.DRAW_MODES.TRIANGLES) {
      var indices = this.indices;
      len = this.indices.length;
      for (i = 0; i < len; i += 3) {
        var ind0 = indices[i] * 2,
            ind1 = indices[i + 1] * 2,
            ind2 = indices[i + 2] * 2;
        points[0] = vertices[ind0];
        points[1] = vertices[ind0 + 1];
        points[2] = vertices[ind1];
        points[3] = vertices[ind1 + 1];
        points[4] = vertices[ind2];
        points[5] = vertices[ind2 + 1];
        if (tempPolygon.contains(tempPoint.x, tempPoint.y)) {
          return true;
        }
      }
    } else {
      len = vertices.length;
      for (i = 0; i < len; i += 6) {
        points[0] = vertices[i];
        points[1] = vertices[i + 1];
        points[2] = vertices[i + 2];
        points[3] = vertices[i + 3];
        points[4] = vertices[i + 4];
        points[5] = vertices[i + 5];
        if (tempPolygon.contains(tempPoint.x, tempPoint.y)) {
          return true;
        }
      }
    }
    return false;
  };
  Mesh.DRAW_MODES = {
    TRIANGLE_MESH: 0,
    TRIANGLES: 1
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("7a", ["53", "78"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = $__require('53'),
      Mesh = $__require('78');
  function MeshRenderer(renderer) {
    core.ObjectRenderer.call(this, renderer);
    this.indices = new Uint16Array(15000);
    for (var i = 0,
        j = 0; i < 15000; i += 6, j += 4) {
      this.indices[i + 0] = j + 0;
      this.indices[i + 1] = j + 1;
      this.indices[i + 2] = j + 2;
      this.indices[i + 3] = j + 0;
      this.indices[i + 4] = j + 2;
      this.indices[i + 5] = j + 3;
    }
    this.currentShader = null;
  }
  MeshRenderer.prototype = Object.create(core.ObjectRenderer.prototype);
  MeshRenderer.prototype.constructor = MeshRenderer;
  module.exports = MeshRenderer;
  core.WebGLRenderer.registerPlugin('mesh', MeshRenderer);
  MeshRenderer.prototype.onContextChange = function() {};
  MeshRenderer.prototype.render = function(mesh) {
    if (!mesh._vertexBuffer) {
      this._initWebGL(mesh);
    }
    var renderer = this.renderer,
        gl = renderer.gl,
        texture = mesh._texture.baseTexture,
        shader = mesh.shader;
    var drawMode = mesh.drawMode === Mesh.DRAW_MODES.TRIANGLE_MESH ? gl.TRIANGLE_STRIP : gl.TRIANGLES;
    renderer.blendModeManager.setBlendMode(mesh.blendMode);
    if (!shader) {
      shader = renderer.shaderManager.plugins.meshShader;
    } else {
      shader = shader.shaders[gl.id] || shader.getShader(renderer);
    }
    this.renderer.shaderManager.setShader(shader);
    shader.uniforms.translationMatrix.value = mesh.worldTransform.toArray(true);
    shader.uniforms.projectionMatrix.value = renderer.currentRenderTarget.projectionMatrix.toArray(true);
    shader.uniforms.alpha.value = mesh.worldAlpha;
    shader.syncUniforms();
    if (!mesh.dirty) {
      gl.bindBuffer(gl.ARRAY_BUFFER, mesh._vertexBuffer);
      gl.bufferSubData(gl.ARRAY_BUFFER, 0, mesh.vertices);
      gl.vertexAttribPointer(shader.attributes.aVertexPosition, 2, gl.FLOAT, false, 0, 0);
      gl.bindBuffer(gl.ARRAY_BUFFER, mesh._uvBuffer);
      gl.vertexAttribPointer(shader.attributes.aTextureCoord, 2, gl.FLOAT, false, 0, 0);
      gl.activeTexture(gl.TEXTURE0);
      if (!texture._glTextures[gl.id]) {
        this.renderer.updateTexture(texture);
      } else {
        gl.bindTexture(gl.TEXTURE_2D, texture._glTextures[gl.id]);
      }
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, mesh._indexBuffer);
      gl.bufferSubData(gl.ELEMENT_ARRAY_BUFFER, 0, mesh.indices);
    } else {
      mesh.dirty = false;
      gl.bindBuffer(gl.ARRAY_BUFFER, mesh._vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, mesh.vertices, gl.STATIC_DRAW);
      gl.vertexAttribPointer(shader.attributes.aVertexPosition, 2, gl.FLOAT, false, 0, 0);
      gl.bindBuffer(gl.ARRAY_BUFFER, mesh._uvBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, mesh.uvs, gl.STATIC_DRAW);
      gl.vertexAttribPointer(shader.attributes.aTextureCoord, 2, gl.FLOAT, false, 0, 0);
      gl.activeTexture(gl.TEXTURE0);
      if (!texture._glTextures[gl.id]) {
        this.renderer.updateTexture(texture);
      } else {
        gl.bindTexture(gl.TEXTURE_2D, texture._glTextures[gl.id]);
      }
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, mesh._indexBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, mesh.indices, gl.STATIC_DRAW);
    }
    gl.drawElements(drawMode, mesh.indices.length, gl.UNSIGNED_SHORT, 0);
  };
  MeshRenderer.prototype._initWebGL = function(mesh) {
    var gl = this.renderer.gl;
    mesh._vertexBuffer = gl.createBuffer();
    mesh._indexBuffer = gl.createBuffer();
    mesh._uvBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, mesh._vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, mesh.vertices, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, mesh._uvBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, mesh.uvs, gl.STATIC_DRAW);
    if (mesh.colors) {
      mesh._colorBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, mesh._colorBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, mesh.colors, gl.STATIC_DRAW);
    }
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, mesh._indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, mesh.indices, gl.STATIC_DRAW);
  };
  MeshRenderer.prototype.flush = function() {};
  MeshRenderer.prototype.start = function() {
    this.currentShader = null;
  };
  MeshRenderer.prototype.destroy = function() {
    core.ObjectRenderer.prototype.destroy.call(this);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("7b", ["53"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = $__require('53');
  function MeshShader(shaderManager) {
    core.Shader.call(this, shaderManager, ['precision lowp float;', 'attribute vec2 aVertexPosition;', 'attribute vec2 aTextureCoord;', 'uniform mat3 translationMatrix;', 'uniform mat3 projectionMatrix;', 'varying vec2 vTextureCoord;', 'void main(void){', '   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);', '   vTextureCoord = aTextureCoord;', '}'].join('\n'), ['precision lowp float;', 'varying vec2 vTextureCoord;', 'uniform float alpha;', 'uniform sampler2D uSampler;', 'void main(void){', '   gl_FragColor = texture2D(uSampler, vTextureCoord) * alpha ;', '}'].join('\n'), {
      alpha: {
        type: '1f',
        value: 0
      },
      translationMatrix: {
        type: 'mat3',
        value: new Float32Array(9)
      },
      projectionMatrix: {
        type: 'mat3',
        value: new Float32Array(9)
      }
    }, {
      aVertexPosition: 0,
      aTextureCoord: 0
    });
  }
  MeshShader.prototype = Object.create(core.Shader.prototype);
  MeshShader.prototype.constructor = MeshShader;
  module.exports = MeshShader;
  core.ShaderManager.registerPlugin('meshShader', MeshShader);
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("7c", ["78", "77", "79", "7a", "7b"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    Mesh: $__require('78'),
    Plane: $__require('77'),
    Rope: $__require('79'),
    MeshRenderer: $__require('7a'),
    MeshShader: $__require('7b')
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("7d", ["53"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = $__require('53'),
      DisplayObject = core.DisplayObject,
      _tempMatrix = new core.Matrix();
  DisplayObject.prototype._cacheAsBitmap = false;
  DisplayObject.prototype._originalRenderWebGL = null;
  DisplayObject.prototype._originalRenderCanvas = null;
  DisplayObject.prototype._originalUpdateTransform = null;
  DisplayObject.prototype._originalHitTest = null;
  DisplayObject.prototype._originalDestroy = null;
  DisplayObject.prototype._cachedSprite = null;
  Object.defineProperties(DisplayObject.prototype, {cacheAsBitmap: {
      get: function() {
        return this._cacheAsBitmap;
      },
      set: function(value) {
        if (this._cacheAsBitmap === value) {
          return;
        }
        this._cacheAsBitmap = value;
        if (value) {
          this._originalRenderWebGL = this.renderWebGL;
          this._originalRenderCanvas = this.renderCanvas;
          this._originalUpdateTransform = this.updateTransform;
          this._originalGetBounds = this.getBounds;
          this._originalDestroy = this.destroy;
          this._originalContainsPoint = this.containsPoint;
          this.renderWebGL = this._renderCachedWebGL;
          this.renderCanvas = this._renderCachedCanvas;
          this.destroy = this._cacheAsBitmapDestroy;
        } else {
          if (this._cachedSprite) {
            this._destroyCachedDisplayObject();
          }
          this.renderWebGL = this._originalRenderWebGL;
          this.renderCanvas = this._originalRenderCanvas;
          this.getBounds = this._originalGetBounds;
          this.destroy = this._originalDestroy;
          this.updateTransform = this._originalUpdateTransform;
          this.containsPoint = this._originalContainsPoint;
        }
      }
    }});
  DisplayObject.prototype._renderCachedWebGL = function(renderer) {
    if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
      return;
    }
    this._initCachedDisplayObject(renderer);
    this._cachedSprite.worldAlpha = this.worldAlpha;
    renderer.setObjectRenderer(renderer.plugins.sprite);
    renderer.plugins.sprite.render(this._cachedSprite);
  };
  DisplayObject.prototype._initCachedDisplayObject = function(renderer) {
    if (this._cachedSprite) {
      return;
    }
    renderer.currentRenderer.flush();
    var bounds = this.getLocalBounds().clone();
    if (this._filters) {
      var padding = this._filters[0].padding;
      bounds.x -= padding;
      bounds.y -= padding;
      bounds.width += padding * 2;
      bounds.height += padding * 2;
    }
    var cachedRenderTarget = renderer.currentRenderTarget;
    var stack = renderer.filterManager.filterStack;
    var renderTexture = new core.RenderTexture(renderer, bounds.width | 0, bounds.height | 0);
    var m = _tempMatrix;
    m.tx = -bounds.x;
    m.ty = -bounds.y;
    this.renderWebGL = this._originalRenderWebGL;
    renderTexture.render(this, m, true, true);
    renderer.setRenderTarget(cachedRenderTarget);
    renderer.filterManager.filterStack = stack;
    this.renderWebGL = this._renderCachedWebGL;
    this.updateTransform = this.displayObjectUpdateTransform;
    this.getBounds = this._getCachedBounds;
    this._cachedSprite = new core.Sprite(renderTexture);
    this._cachedSprite.worldTransform = this.worldTransform;
    this._cachedSprite.anchor.x = -(bounds.x / bounds.width);
    this._cachedSprite.anchor.y = -(bounds.y / bounds.height);
    this.updateTransform();
    this.containsPoint = this._cachedSprite.containsPoint.bind(this._cachedSprite);
  };
  DisplayObject.prototype._renderCachedCanvas = function(renderer) {
    if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
      return;
    }
    this._initCachedDisplayObjectCanvas(renderer);
    this._cachedSprite.worldAlpha = this.worldAlpha;
    this._cachedSprite.renderCanvas(renderer);
  };
  DisplayObject.prototype._initCachedDisplayObjectCanvas = function(renderer) {
    if (this._cachedSprite) {
      return;
    }
    var bounds = this.getLocalBounds();
    var cachedRenderTarget = renderer.context;
    var renderTexture = new core.RenderTexture(renderer, bounds.width | 0, bounds.height | 0);
    var m = _tempMatrix;
    m.tx = -bounds.x;
    m.ty = -bounds.y;
    this.renderCanvas = this._originalRenderCanvas;
    renderTexture.render(this, m, true);
    renderer.context = cachedRenderTarget;
    this.renderCanvas = this._renderCachedCanvas;
    this.updateTransform = this.displayObjectUpdateTransform;
    this.getBounds = this._getCachedBounds;
    this._cachedSprite = new core.Sprite(renderTexture);
    this._cachedSprite.worldTransform = this.worldTransform;
    this._cachedSprite.anchor.x = -(bounds.x / bounds.width);
    this._cachedSprite.anchor.y = -(bounds.y / bounds.height);
    this.updateTransform();
    this.containsPoint = this._cachedSprite.containsPoint.bind(this._cachedSprite);
  };
  DisplayObject.prototype._getCachedBounds = function() {
    this._cachedSprite._currentBounds = null;
    return this._cachedSprite.getBounds();
  };
  DisplayObject.prototype._destroyCachedDisplayObject = function() {
    this._cachedSprite._texture.destroy();
    this._cachedSprite = null;
  };
  DisplayObject.prototype._cacheAsBitmapDestroy = function() {
    this.cacheAsBitmap = false;
    this._originalDestroy();
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("7e", ["53"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = $__require('53');
  core.DisplayObject.prototype.name = null;
  core.Container.prototype.getChildByName = function(name) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].name === name) {
        return this.children[i];
      }
    }
    return null;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("7f", ["53"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = $__require('53');
  core.DisplayObject.prototype.getGlobalPosition = function(point) {
    point = point || new core.Point();
    if (this.parent) {
      this.displayObjectUpdateTransform();
      point.x = this.worldTransform.tx;
      point.y = this.worldTransform.ty;
    } else {
      point.x = this.position.x;
      point.y = this.position.y;
    }
    return point;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("80", ["53"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = $__require('53');
  function MovieClip(textures) {
    core.Sprite.call(this, textures[0] instanceof core.Texture ? textures[0] : textures[0].texture);
    this._textures = null;
    this._durations = null;
    this.textures = textures;
    this.animationSpeed = 1;
    this.loop = true;
    this.onComplete = null;
    this._currentTime = 0;
    this.playing = false;
  }
  MovieClip.prototype = Object.create(core.Sprite.prototype);
  MovieClip.prototype.constructor = MovieClip;
  module.exports = MovieClip;
  Object.defineProperties(MovieClip.prototype, {
    totalFrames: {get: function() {
        return this._textures.length;
      }},
    textures: {
      get: function() {
        return this._textures;
      },
      set: function(value) {
        if (value[0] instanceof core.Texture) {
          this._textures = value;
          this._durations = null;
        } else {
          this._textures = [];
          this._durations = [];
          for (var i = 0; i < value.length; i++) {
            this._textures.push(value[i].texture);
            this._durations.push(value[i].time);
          }
        }
      }
    },
    currentFrame: {get: function() {
        var currentFrame = Math.floor(this._currentTime) % this._textures.length;
        if (currentFrame < 0) {
          currentFrame += this._textures.length;
        }
        return currentFrame;
      }}
  });
  MovieClip.prototype.stop = function() {
    if (!this.playing) {
      return;
    }
    this.playing = false;
    core.ticker.shared.remove(this.update, this);
  };
  MovieClip.prototype.play = function() {
    if (this.playing) {
      return;
    }
    this.playing = true;
    core.ticker.shared.add(this.update, this);
  };
  MovieClip.prototype.gotoAndStop = function(frameNumber) {
    this.stop();
    this._currentTime = frameNumber;
    this._texture = this._textures[this.currentFrame];
  };
  MovieClip.prototype.gotoAndPlay = function(frameNumber) {
    this._currentTime = frameNumber;
    this.play();
  };
  MovieClip.prototype.update = function(deltaTime) {
    var elapsed = this.animationSpeed * deltaTime;
    if (this._durations !== null) {
      var lag = this._currentTime % 1 * this._durations[this.currentFrame];
      lag += elapsed / 60 * 1000;
      while (lag < 0) {
        this._currentTime--;
        lag += this._durations[this.currentFrame];
      }
      var sign = Math.sign(this.animationSpeed * deltaTime);
      this._currentTime = Math.floor(this._currentTime);
      while (lag >= this._durations[this.currentFrame]) {
        lag -= this._durations[this.currentFrame] * sign;
        this._currentTime += sign;
      }
      this._currentTime += lag / this._durations[this.currentFrame];
    } else {
      this._currentTime += elapsed;
    }
    if (this._currentTime < 0 && !this.loop) {
      this.gotoAndStop(0);
      if (this.onComplete) {
        this.onComplete();
      }
    } else if (this._currentTime >= this._textures.length && !this.loop) {
      this.gotoAndStop(this._textures.length - 1);
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this._texture = this._textures[this.currentFrame];
    }
  };
  MovieClip.prototype.destroy = function() {
    this.stop();
    core.Sprite.prototype.destroy.call(this);
  };
  MovieClip.fromFrames = function(frames) {
    var textures = [];
    for (var i = 0; i < frames.length; ++i) {
      textures.push(new core.Texture.fromFrame(frames[i]));
    }
    return new MovieClip(textures);
  };
  MovieClip.fromImages = function(images) {
    var textures = [];
    for (var i = 0; i < images.length; ++i) {
      textures.push(new core.Texture.fromImage(images[i]));
    }
    return new MovieClip(textures);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("81", ["53", "82"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = $__require('53'),
      tempPoint = new core.Point(),
      CanvasTinter = $__require('82');
  function TilingSprite(texture, width, height) {
    core.Sprite.call(this, texture);
    this.tileScale = new core.Point(1, 1);
    this.tilePosition = new core.Point(0, 0);
    this._width = width || 100;
    this._height = height || 100;
    this._uvs = new core.TextureUvs();
    this._canvasPattern = null;
    this.shader = new core.AbstractFilter(['precision lowp float;', 'attribute vec2 aVertexPosition;', 'attribute vec2 aTextureCoord;', 'attribute vec4 aColor;', 'uniform mat3 projectionMatrix;', 'uniform vec4 uFrame;', 'uniform vec4 uTransform;', 'varying vec2 vTextureCoord;', 'varying vec4 vColor;', 'void main(void){', '   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);', '   vec2 coord = aTextureCoord;', '   coord -= uTransform.xy;', '   coord /= uTransform.zw;', '   vTextureCoord = coord;', '   vColor = vec4(aColor.rgb * aColor.a, aColor.a);', '}'].join('\n'), ['precision lowp float;', 'varying vec2 vTextureCoord;', 'varying vec4 vColor;', 'uniform sampler2D uSampler;', 'uniform vec4 uFrame;', 'uniform vec2 uPixelSize;', 'void main(void){', '   vec2 coord = mod(vTextureCoord, uFrame.zw);', '   coord = clamp(coord, uPixelSize, uFrame.zw - uPixelSize);', '   coord += uFrame.xy;', '   gl_FragColor =  texture2D(uSampler, coord) * vColor ;', '}'].join('\n'), {
      uFrame: {
        type: '4fv',
        value: [0, 0, 1, 1]
      },
      uTransform: {
        type: '4fv',
        value: [0, 0, 1, 1]
      },
      uPixelSize: {
        type: '2fv',
        value: [1, 1]
      }
    });
  }
  TilingSprite.prototype = Object.create(core.Sprite.prototype);
  TilingSprite.prototype.constructor = TilingSprite;
  module.exports = TilingSprite;
  Object.defineProperties(TilingSprite.prototype, {
    width: {
      get: function() {
        return this._width;
      },
      set: function(value) {
        this._width = value;
      }
    },
    height: {
      get: function() {
        return this._height;
      },
      set: function(value) {
        this._height = value;
      }
    }
  });
  TilingSprite.prototype._onTextureUpdate = function() {
    return;
  };
  TilingSprite.prototype._renderWebGL = function(renderer) {
    var texture = this._texture;
    if (!texture || !texture._uvs) {
      return;
    }
    var tempUvs = texture._uvs,
        tempWidth = texture._frame.width,
        tempHeight = texture._frame.height,
        tw = texture.baseTexture.width,
        th = texture.baseTexture.height;
    texture._uvs = this._uvs;
    texture._frame.width = this.width;
    texture._frame.height = this.height;
    this.shader.uniforms.uPixelSize.value[0] = 1.0 / tw;
    this.shader.uniforms.uPixelSize.value[1] = 1.0 / th;
    this.shader.uniforms.uFrame.value[0] = tempUvs.x0;
    this.shader.uniforms.uFrame.value[1] = tempUvs.y0;
    this.shader.uniforms.uFrame.value[2] = tempUvs.x1 - tempUvs.x0;
    this.shader.uniforms.uFrame.value[3] = tempUvs.y2 - tempUvs.y0;
    this.shader.uniforms.uTransform.value[0] = (this.tilePosition.x % (tempWidth * this.tileScale.x)) / this._width;
    this.shader.uniforms.uTransform.value[1] = (this.tilePosition.y % (tempHeight * this.tileScale.y)) / this._height;
    this.shader.uniforms.uTransform.value[2] = (tw / this._width) * this.tileScale.x;
    this.shader.uniforms.uTransform.value[3] = (th / this._height) * this.tileScale.y;
    renderer.setObjectRenderer(renderer.plugins.sprite);
    renderer.plugins.sprite.render(this);
    texture._uvs = tempUvs;
    texture._frame.width = tempWidth;
    texture._frame.height = tempHeight;
  };
  TilingSprite.prototype._renderCanvas = function(renderer) {
    var texture = this._texture;
    if (!texture.baseTexture.hasLoaded) {
      return;
    }
    var context = renderer.context,
        transform = this.worldTransform,
        resolution = renderer.resolution,
        baseTexture = texture.baseTexture,
        modX = (this.tilePosition.x / this.tileScale.x) % texture._frame.width,
        modY = (this.tilePosition.y / this.tileScale.y) % texture._frame.height;
    if (!this._canvasPattern) {
      var tempCanvas = new core.CanvasBuffer(texture._frame.width, texture._frame.height);
      if (this.tint !== 0xFFFFFF) {
        if (this.cachedTint !== this.tint) {
          this.cachedTint = this.tint;
          this.tintedTexture = CanvasTinter.getTintedTexture(this, this.tint);
        }
        tempCanvas.context.drawImage(this.tintedTexture, 0, 0);
      } else {
        tempCanvas.context.drawImage(baseTexture.source, -texture._frame.x, -texture._frame.y);
      }
      this._canvasPattern = tempCanvas.context.createPattern(tempCanvas.canvas, 'repeat');
    }
    context.globalAlpha = this.worldAlpha;
    context.setTransform(transform.a * resolution, transform.b * resolution, transform.c * resolution, transform.d * resolution, transform.tx * resolution, transform.ty * resolution);
    context.scale(this.tileScale.x, this.tileScale.y);
    context.translate(modX + (this.anchor.x * -this._width), modY + (this.anchor.y * -this._height));
    var compositeOperation = renderer.blendModes[this.blendMode];
    if (compositeOperation !== renderer.context.globalCompositeOperation) {
      context.globalCompositeOperation = compositeOperation;
    }
    context.fillStyle = this._canvasPattern;
    context.fillRect(-modX, -modY, this._width / this.tileScale.x, this._height / this.tileScale.y);
  };
  TilingSprite.prototype.getBounds = function() {
    var width = this._width;
    var height = this._height;
    var w0 = width * (1 - this.anchor.x);
    var w1 = width * -this.anchor.x;
    var h0 = height * (1 - this.anchor.y);
    var h1 = height * -this.anchor.y;
    var worldTransform = this.worldTransform;
    var a = worldTransform.a;
    var b = worldTransform.b;
    var c = worldTransform.c;
    var d = worldTransform.d;
    var tx = worldTransform.tx;
    var ty = worldTransform.ty;
    var x1 = a * w1 + c * h1 + tx;
    var y1 = d * h1 + b * w1 + ty;
    var x2 = a * w0 + c * h1 + tx;
    var y2 = d * h1 + b * w0 + ty;
    var x3 = a * w0 + c * h0 + tx;
    var y3 = d * h0 + b * w0 + ty;
    var x4 = a * w1 + c * h0 + tx;
    var y4 = d * h0 + b * w1 + ty;
    var minX,
        maxX,
        minY,
        maxY;
    minX = x1;
    minX = x2 < minX ? x2 : minX;
    minX = x3 < minX ? x3 : minX;
    minX = x4 < minX ? x4 : minX;
    minY = y1;
    minY = y2 < minY ? y2 : minY;
    minY = y3 < minY ? y3 : minY;
    minY = y4 < minY ? y4 : minY;
    maxX = x1;
    maxX = x2 > maxX ? x2 : maxX;
    maxX = x3 > maxX ? x3 : maxX;
    maxX = x4 > maxX ? x4 : maxX;
    maxY = y1;
    maxY = y2 > maxY ? y2 : maxY;
    maxY = y3 > maxY ? y3 : maxY;
    maxY = y4 > maxY ? y4 : maxY;
    var bounds = this._bounds;
    bounds.x = minX;
    bounds.width = maxX - minX;
    bounds.y = minY;
    bounds.height = maxY - minY;
    this._currentBounds = bounds;
    return bounds;
  };
  TilingSprite.prototype.containsPoint = function(point) {
    this.worldTransform.applyInverse(point, tempPoint);
    var width = this._width;
    var height = this._height;
    var x1 = -width * this.anchor.x;
    var y1;
    if (tempPoint.x > x1 && tempPoint.x < x1 + width) {
      y1 = -height * this.anchor.y;
      if (tempPoint.y > y1 && tempPoint.y < y1 + height) {
        return true;
      }
    }
    return false;
  };
  TilingSprite.prototype.destroy = function() {
    core.Sprite.prototype.destroy.call(this);
    this.tileScale = null;
    this._tileScaleOffset = null;
    this.tilePosition = null;
    this._uvs = null;
  };
  TilingSprite.fromFrame = function(frameId, width, height) {
    var texture = core.utils.TextureCache[frameId];
    if (!texture) {
      throw new Error('The frameId "' + frameId + '" does not exist in the texture cache ' + this);
    }
    return new TilingSprite(texture, width, height);
  };
  TilingSprite.fromImage = function(imageId, width, height, crossorigin, scaleMode) {
    return new TilingSprite(core.Texture.fromImage(imageId, crossorigin, scaleMode), width, height);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("83", ["53"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = $__require('53');
  function BitmapText(text, style) {
    core.Container.call(this);
    style = style || {};
    this.textWidth = 0;
    this.textHeight = 0;
    this._glyphs = [];
    this._font = {
      tint: style.tint !== undefined ? style.tint : 0xFFFFFF,
      align: style.align || 'left',
      name: null,
      size: 0
    };
    this.font = style.font;
    this._text = text;
    this.maxWidth = 0;
    this.maxLineHeight = 0;
    this.dirty = false;
    this.updateText();
  }
  BitmapText.prototype = Object.create(core.Container.prototype);
  BitmapText.prototype.constructor = BitmapText;
  module.exports = BitmapText;
  Object.defineProperties(BitmapText.prototype, {
    tint: {
      get: function() {
        return this._font.tint;
      },
      set: function(value) {
        this._font.tint = (typeof value === 'number' && value >= 0) ? value : 0xFFFFFF;
        this.dirty = true;
      }
    },
    align: {
      get: function() {
        return this._font.align;
      },
      set: function(value) {
        this._font.align = value || 'left';
        this.dirty = true;
      }
    },
    font: {
      get: function() {
        return this._font;
      },
      set: function(value) {
        if (!value) {
          return;
        }
        if (typeof value === 'string') {
          value = value.split(' ');
          this._font.name = value.length === 1 ? value[0] : value.slice(1).join(' ');
          this._font.size = value.length >= 2 ? parseInt(value[0], 10) : BitmapText.fonts[this._font.name].size;
        } else {
          this._font.name = value.name;
          this._font.size = typeof value.size === 'number' ? value.size : parseInt(value.size, 10);
        }
        this.dirty = true;
      }
    },
    text: {
      get: function() {
        return this._text;
      },
      set: function(value) {
        value = value.toString() || ' ';
        if (this._text === value) {
          return;
        }
        this._text = value;
        this.dirty = true;
      }
    }
  });
  BitmapText.prototype.updateText = function() {
    var data = BitmapText.fonts[this._font.name];
    var pos = new core.Point();
    var prevCharCode = null;
    var chars = [];
    var lastLineWidth = 0;
    var maxLineWidth = 0;
    var lineWidths = [];
    var line = 0;
    var scale = this._font.size / data.size;
    var lastSpace = -1;
    var maxLineHeight = 0;
    for (var i = 0; i < this.text.length; i++) {
      var charCode = this.text.charCodeAt(i);
      lastSpace = /(\s)/.test(this.text.charAt(i)) ? i : lastSpace;
      if (/(?:\r\n|\r|\n)/.test(this.text.charAt(i))) {
        lineWidths.push(lastLineWidth);
        maxLineWidth = Math.max(maxLineWidth, lastLineWidth);
        line++;
        pos.x = 0;
        pos.y += data.lineHeight;
        prevCharCode = null;
        continue;
      }
      if (lastSpace !== -1 && this.maxWidth > 0 && pos.x * scale > this.maxWidth) {
        core.utils.removeItems(chars, lastSpace, i - lastSpace);
        i = lastSpace;
        lastSpace = -1;
        lineWidths.push(lastLineWidth);
        maxLineWidth = Math.max(maxLineWidth, lastLineWidth);
        line++;
        pos.x = 0;
        pos.y += data.lineHeight;
        prevCharCode = null;
        continue;
      }
      var charData = data.chars[charCode];
      if (!charData) {
        continue;
      }
      if (prevCharCode && charData.kerning[prevCharCode]) {
        pos.x += charData.kerning[prevCharCode];
      }
      chars.push({
        texture: charData.texture,
        line: line,
        charCode: charCode,
        position: new core.Point(pos.x + charData.xOffset, pos.y + charData.yOffset)
      });
      lastLineWidth = pos.x + (charData.texture.width + charData.xOffset);
      pos.x += charData.xAdvance;
      maxLineHeight = Math.max(maxLineHeight, (charData.yOffset + charData.texture.height));
      prevCharCode = charCode;
    }
    lineWidths.push(lastLineWidth);
    maxLineWidth = Math.max(maxLineWidth, lastLineWidth);
    var lineAlignOffsets = [];
    for (i = 0; i <= line; i++) {
      var alignOffset = 0;
      if (this._font.align === 'right') {
        alignOffset = maxLineWidth - lineWidths[i];
      } else if (this._font.align === 'center') {
        alignOffset = (maxLineWidth - lineWidths[i]) / 2;
      }
      lineAlignOffsets.push(alignOffset);
    }
    var lenChars = chars.length;
    var tint = this.tint;
    for (i = 0; i < lenChars; i++) {
      var c = this._glyphs[i];
      if (c) {
        c.texture = chars[i].texture;
      } else {
        c = new core.Sprite(chars[i].texture);
        this._glyphs.push(c);
      }
      c.position.x = (chars[i].position.x + lineAlignOffsets[chars[i].line]) * scale;
      c.position.y = chars[i].position.y * scale;
      c.scale.x = c.scale.y = scale;
      c.tint = tint;
      if (!c.parent) {
        this.addChild(c);
      }
    }
    for (i = lenChars; i < this._glyphs.length; ++i) {
      this.removeChild(this._glyphs[i]);
    }
    this.textWidth = maxLineWidth * scale;
    this.textHeight = (pos.y + data.lineHeight) * scale;
    this.maxLineHeight = maxLineHeight * scale;
  };
  BitmapText.prototype.updateTransform = function() {
    this.validate();
    this.containerUpdateTransform();
  };
  BitmapText.prototype.getLocalBounds = function() {
    this.validate();
    return core.Container.prototype.getLocalBounds.call(this);
  };
  BitmapText.prototype.validate = function() {
    if (this.dirty) {
      this.updateText();
      this.dirty = false;
    }
  };
  BitmapText.fonts = {};
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5c", ["7d", "7e", "7f", "80", "81", "83"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('7d');
  $__require('7e');
  $__require('7f');
  module.exports = {
    MovieClip: $__require('80'),
    TilingSprite: $__require('81'),
    BitmapText: $__require('83')
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("84", ["53", "85"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  var core = $__require('53');
  var fs = $__require('85');
  function AsciiFilter() {
    core.AbstractFilter.call(this, null, fs.readFileSync(__dirname + '/ascii.frag', 'utf8'), {
      dimensions: {
        type: '4fv',
        value: new Float32Array([0, 0, 0, 0])
      },
      pixelSize: {
        type: '1f',
        value: 8
      }
    });
  }
  AsciiFilter.prototype = Object.create(core.AbstractFilter.prototype);
  AsciiFilter.prototype.constructor = AsciiFilter;
  module.exports = AsciiFilter;
  Object.defineProperties(AsciiFilter.prototype, {size: {
      get: function() {
        return this.uniforms.pixelSize.value;
      },
      set: function(value) {
        this.uniforms.pixelSize.value = value;
      }
    }});
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("86", ["53", "87", "88"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = $__require('53'),
      BlurXFilter = $__require('87'),
      BlurYFilter = $__require('88');
  function BloomFilter() {
    core.AbstractFilter.call(this);
    this.blurXFilter = new BlurXFilter();
    this.blurYFilter = new BlurYFilter();
    this.defaultFilter = new core.AbstractFilter();
  }
  BloomFilter.prototype = Object.create(core.AbstractFilter.prototype);
  BloomFilter.prototype.constructor = BloomFilter;
  module.exports = BloomFilter;
  BloomFilter.prototype.applyFilter = function(renderer, input, output) {
    var renderTarget = renderer.filterManager.getRenderTarget(true);
    this.defaultFilter.applyFilter(renderer, input, output);
    this.blurXFilter.applyFilter(renderer, input, renderTarget);
    renderer.blendModeManager.setBlendMode(core.BLEND_MODES.SCREEN);
    this.blurYFilter.applyFilter(renderer, renderTarget, output);
    renderer.blendModeManager.setBlendMode(core.BLEND_MODES.NORMAL);
    renderer.filterManager.returnRenderTarget(renderTarget);
  };
  Object.defineProperties(BloomFilter.prototype, {
    blur: {
      get: function() {
        return this.blurXFilter.blur;
      },
      set: function(value) {
        this.blurXFilter.blur = this.blurYFilter.blur = value;
      }
    },
    blurX: {
      get: function() {
        return this.blurXFilter.blur;
      },
      set: function(value) {
        this.blurXFilter.blur = value;
      }
    },
    blurY: {
      get: function() {
        return this.blurYFilter.blur;
      },
      set: function(value) {
        this.blurYFilter.blur = value;
      }
    }
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("89", ["53", "87", "88"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = $__require('53'),
      BlurXFilter = $__require('87'),
      BlurYFilter = $__require('88');
  function BlurFilter() {
    core.AbstractFilter.call(this);
    this.blurXFilter = new BlurXFilter();
    this.blurYFilter = new BlurYFilter();
  }
  BlurFilter.prototype = Object.create(core.AbstractFilter.prototype);
  BlurFilter.prototype.constructor = BlurFilter;
  module.exports = BlurFilter;
  BlurFilter.prototype.applyFilter = function(renderer, input, output) {
    var renderTarget = renderer.filterManager.getRenderTarget(true);
    this.blurXFilter.applyFilter(renderer, input, renderTarget);
    this.blurYFilter.applyFilter(renderer, renderTarget, output);
    renderer.filterManager.returnRenderTarget(renderTarget);
  };
  Object.defineProperties(BlurFilter.prototype, {
    blur: {
      get: function() {
        return this.blurXFilter.blur;
      },
      set: function(value) {
        this.padding = Math.abs(value) * 0.5;
        this.blurXFilter.blur = this.blurYFilter.blur = value;
      }
    },
    passes: {
      get: function() {
        return this.blurXFilter.passes;
      },
      set: function(value) {
        this.blurXFilter.passes = this.blurYFilter.passes = value;
      }
    },
    blurX: {
      get: function() {
        return this.blurXFilter.blur;
      },
      set: function(value) {
        this.blurXFilter.blur = value;
      }
    },
    blurY: {
      get: function() {
        return this.blurYFilter.blur;
      },
      set: function(value) {
        this.blurYFilter.blur = value;
      }
    }
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("88", ["53", "85"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  var core = $__require('53');
  var fs = $__require('85');
  function BlurYFilter() {
    core.AbstractFilter.call(this, fs.readFileSync(__dirname + '/blurY.vert', 'utf8'), fs.readFileSync(__dirname + '/blur.frag', 'utf8'), {strength: {
        type: '1f',
        value: 1
      }});
    this.passes = 1;
    this.strength = 4;
  }
  BlurYFilter.prototype = Object.create(core.AbstractFilter.prototype);
  BlurYFilter.prototype.constructor = BlurYFilter;
  module.exports = BlurYFilter;
  BlurYFilter.prototype.applyFilter = function(renderer, input, output, clear) {
    var shader = this.getShader(renderer);
    this.uniforms.strength.value = Math.abs(this.strength) / 4 / this.passes * (input.frame.height / input.size.height);
    if (this.passes === 1) {
      renderer.filterManager.applyFilter(shader, input, output, clear);
    } else {
      var renderTarget = renderer.filterManager.getRenderTarget(true);
      var flip = input;
      var flop = renderTarget;
      for (var i = 0; i < this.passes - 1; i++) {
        renderer.filterManager.applyFilter(shader, flip, flop, true);
        var temp = flop;
        flop = flip;
        flip = temp;
      }
      renderer.filterManager.applyFilter(shader, flip, output, clear);
      renderer.filterManager.returnRenderTarget(renderTarget);
    }
  };
  Object.defineProperties(BlurYFilter.prototype, {blur: {
      get: function() {
        return this.strength;
      },
      set: function(value) {
        this.padding = Math.abs(value) * 0.5;
        this.strength = value;
      }
    }});
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("8a", ["53", "85"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  var core = $__require('53');
  var fs = $__require('85');
  function BlurDirFilter(dirX, dirY) {
    core.AbstractFilter.call(this, fs.readFileSync(__dirname + '/blurDir.vert', 'utf8'), fs.readFileSync(__dirname + '/blurDir.frag', 'utf8'), {
      strength: {
        type: '1f',
        value: 1
      },
      dirX: {
        type: '1f',
        value: dirX || 0
      },
      dirY: {
        type: '1f',
        value: dirY || 0
      }
    });
    this.defaultFilter = new core.AbstractFilter();
    this.passes = 1;
    this.dirX = dirX || 0;
    this.dirY = dirY || 0;
    this.strength = 4;
  }
  BlurDirFilter.prototype = Object.create(core.AbstractFilter.prototype);
  BlurDirFilter.prototype.constructor = BlurDirFilter;
  module.exports = BlurDirFilter;
  BlurDirFilter.prototype.applyFilter = function(renderer, input, output, clear) {
    var shader = this.getShader(renderer);
    this.uniforms.strength.value = this.strength / 4 / this.passes * (input.frame.width / input.size.width);
    if (this.passes === 1) {
      renderer.filterManager.applyFilter(shader, input, output, clear);
    } else {
      var renderTarget = renderer.filterManager.getRenderTarget(true);
      renderer.filterManager.applyFilter(shader, input, renderTarget, clear);
      for (var i = 0; i < this.passes - 2; i++) {
        renderer.filterManager.applyFilter(shader, renderTarget, renderTarget, clear);
      }
      renderer.filterManager.applyFilter(shader, renderTarget, output, clear);
      renderer.filterManager.returnRenderTarget(renderTarget);
    }
  };
  Object.defineProperties(BlurDirFilter.prototype, {
    blur: {
      get: function() {
        return this.strength;
      },
      set: function(value) {
        this.padding = value * 0.5;
        this.strength = value;
      }
    },
    dirX: {
      get: function() {
        return this.dirX;
      },
      set: function(value) {
        this.uniforms.dirX.value = value;
      }
    },
    dirY: {
      get: function() {
        return this.dirY;
      },
      set: function(value) {
        this.uniforms.dirY.value = value;
      }
    }
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("8b", ["53", "85", "25"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  (function(process) {
    var core = $__require('53');
    var fs = $__require('85');
    function ColorMatrixFilter() {
      core.AbstractFilter.call(this, null, fs.readFileSync(__dirname + '/colorMatrix.frag', 'utf8'), {m: {
          type: '1fv',
          value: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
        }});
    }
    ColorMatrixFilter.prototype = Object.create(core.AbstractFilter.prototype);
    ColorMatrixFilter.prototype.constructor = ColorMatrixFilter;
    module.exports = ColorMatrixFilter;
    ColorMatrixFilter.prototype._loadMatrix = function(matrix, multiply) {
      multiply = !!multiply;
      var newMatrix = matrix;
      if (multiply) {
        this._multiply(newMatrix, this.uniforms.m.value, matrix);
        newMatrix = this._colorMatrix(newMatrix);
      }
      this.uniforms.m.value = newMatrix;
    };
    ColorMatrixFilter.prototype._multiply = function(out, a, b) {
      out[0] = (a[0] * b[0]) + (a[1] * b[5]) + (a[2] * b[10]) + (a[3] * b[15]);
      out[1] = (a[0] * b[1]) + (a[1] * b[6]) + (a[2] * b[11]) + (a[3] * b[16]);
      out[2] = (a[0] * b[2]) + (a[1] * b[7]) + (a[2] * b[12]) + (a[3] * b[17]);
      out[3] = (a[0] * b[3]) + (a[1] * b[8]) + (a[2] * b[13]) + (a[3] * b[18]);
      out[4] = (a[0] * b[4]) + (a[1] * b[9]) + (a[2] * b[14]) + (a[3] * b[19]);
      out[5] = (a[5] * b[0]) + (a[6] * b[5]) + (a[7] * b[10]) + (a[8] * b[15]);
      out[6] = (a[5] * b[1]) + (a[6] * b[6]) + (a[7] * b[11]) + (a[8] * b[16]);
      out[7] = (a[5] * b[2]) + (a[6] * b[7]) + (a[7] * b[12]) + (a[8] * b[17]);
      out[8] = (a[5] * b[3]) + (a[6] * b[8]) + (a[7] * b[13]) + (a[8] * b[18]);
      out[9] = (a[5] * b[4]) + (a[6] * b[9]) + (a[7] * b[14]) + (a[8] * b[19]);
      out[10] = (a[10] * b[0]) + (a[11] * b[5]) + (a[12] * b[10]) + (a[13] * b[15]);
      out[11] = (a[10] * b[1]) + (a[11] * b[6]) + (a[12] * b[11]) + (a[13] * b[16]);
      out[12] = (a[10] * b[2]) + (a[11] * b[7]) + (a[12] * b[12]) + (a[13] * b[17]);
      out[13] = (a[10] * b[3]) + (a[11] * b[8]) + (a[12] * b[13]) + (a[13] * b[18]);
      out[14] = (a[10] * b[4]) + (a[11] * b[9]) + (a[12] * b[14]) + (a[13] * b[19]);
      out[15] = (a[15] * b[0]) + (a[16] * b[5]) + (a[17] * b[10]) + (a[18] * b[15]);
      out[16] = (a[15] * b[1]) + (a[16] * b[6]) + (a[17] * b[11]) + (a[18] * b[16]);
      out[17] = (a[15] * b[2]) + (a[16] * b[7]) + (a[17] * b[12]) + (a[18] * b[17]);
      out[18] = (a[15] * b[3]) + (a[16] * b[8]) + (a[17] * b[13]) + (a[18] * b[18]);
      out[19] = (a[15] * b[4]) + (a[16] * b[9]) + (a[17] * b[14]) + (a[18] * b[19]);
      return out;
    };
    ColorMatrixFilter.prototype._colorMatrix = function(matrix) {
      var m = new Float32Array(matrix);
      m[4] /= 255;
      m[9] /= 255;
      m[14] /= 255;
      m[19] /= 255;
      return m;
    };
    ColorMatrixFilter.prototype.brightness = function(b, multiply) {
      var matrix = [b, 0, 0, 0, 0, 0, b, 0, 0, 0, 0, 0, b, 0, 0, 0, 0, 0, 1, 0];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter.prototype.greyscale = function(scale, multiply) {
      var matrix = [scale, scale, scale, 0, 0, scale, scale, scale, 0, 0, scale, scale, scale, 0, 0, 0, 0, 0, 1, 0];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter.prototype.grayscale = ColorMatrixFilter.prototype.greyscale;
    ColorMatrixFilter.prototype.blackAndWhite = function(multiply) {
      var matrix = [0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0, 0, 0, 1, 0];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter.prototype.hue = function(rotation, multiply) {
      rotation = (rotation || 0) / 180 * Math.PI;
      var cos = Math.cos(rotation),
          sin = Math.sin(rotation);
      var lumR = 0.213,
          lumG = 0.715,
          lumB = 0.072;
      var matrix = [lumR + cos * (1 - lumR) + sin * (-lumR), lumG + cos * (-lumG) + sin * (-lumG), lumB + cos * (-lumB) + sin * (1 - lumB), 0, 0, lumR + cos * (-lumR) + sin * (0.143), lumG + cos * (1 - lumG) + sin * (0.140), lumB + cos * (-lumB) + sin * (-0.283), 0, 0, lumR + cos * (-lumR) + sin * (-(1 - lumR)), lumG + cos * (-lumG) + sin * (lumG), lumB + cos * (1 - lumB) + sin * (lumB), 0, 0, 0, 0, 0, 1, 0];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter.prototype.contrast = function(amount, multiply) {
      var v = (amount || 0) + 1;
      var o = -128 * (v - 1);
      var matrix = [v, 0, 0, 0, o, 0, v, 0, 0, o, 0, 0, v, 0, o, 0, 0, 0, 1, 0];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter.prototype.saturate = function(amount, multiply) {
      var x = (amount || 0) * 2 / 3 + 1;
      var y = ((x - 1) * -0.5);
      var matrix = [x, y, y, 0, 0, y, x, y, 0, 0, y, y, x, 0, 0, 0, 0, 0, 1, 0];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter.prototype.desaturate = function(multiply) {
      this.saturate(-1);
    };
    ColorMatrixFilter.prototype.negative = function(multiply) {
      var matrix = [0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter.prototype.sepia = function(multiply) {
      var matrix = [0.393, 0.7689999, 0.18899999, 0, 0, 0.349, 0.6859999, 0.16799999, 0, 0, 0.272, 0.5339999, 0.13099999, 0, 0, 0, 0, 0, 1, 0];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter.prototype.technicolor = function(multiply) {
      var matrix = [1.9125277891456083, -0.8545344976951645, -0.09155508482755585, 0, 11.793603434377337, -0.3087833385928097, 1.7658908555458428, -0.10601743074722245, 0, -70.35205161461398, -0.231103377548616, -0.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter.prototype.polaroid = function(multiply) {
      var matrix = [1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0, -0.016, -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter.prototype.toBGR = function(multiply) {
      var matrix = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter.prototype.kodachrome = function(multiply) {
      var matrix = [1.1285582396593525, -0.3967382283601348, -0.03992559172921793, 0, 63.72958762196502, -0.16404339962244616, 1.0835251566291304, -0.05498805115633132, 0, 24.732407896706203, -0.16786010706155763, -0.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter.prototype.browni = function(multiply) {
      var matrix = [0.5997023498159715, 0.34553243048391263, -0.2708298674538042, 0, 47.43192855600873, -0.037703249837783157, 0.8609577587992641, 0.15059552388459913, 0, -36.96841498319127, 0.24113635128153335, -0.07441037908422492, 0.44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter.prototype.vintage = function(multiply) {
      var matrix = [0.6279345635605994, 0.3202183420819367, -0.03965408211312453, 0, 9.651285835294123, 0.02578397704808868, 0.6441188644374771, 0.03259127616149294, 0, 7.462829176470591, 0.0466055556782719, -0.0851232987247891, 0.5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter.prototype.colorTone = function(desaturation, toned, lightColor, darkColor, multiply) {
      desaturation = desaturation || 0.2;
      toned = toned || 0.15;
      lightColor = lightColor || 0xFFE580;
      darkColor = darkColor || 0x338000;
      var lR = ((lightColor >> 16) & 0xFF) / 255;
      var lG = ((lightColor >> 8) & 0xFF) / 255;
      var lB = (lightColor & 0xFF) / 255;
      var dR = ((darkColor >> 16) & 0xFF) / 255;
      var dG = ((darkColor >> 8) & 0xFF) / 255;
      var dB = (darkColor & 0xFF) / 255;
      var matrix = [0.3, 0.59, 0.11, 0, 0, lR, lG, lB, desaturation, 0, dR, dG, dB, toned, 0, lR - dR, lG - dG, lB - dB, 0, 0];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter.prototype.night = function(intensity, multiply) {
      intensity = intensity || 0.1;
      var matrix = [intensity * (-2.0), -intensity, 0, 0, 0, -intensity, 0, intensity, 0, 0, 0, intensity, intensity * 2.0, 0, 0, 0, 0, 0, 1, 0];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter.prototype.predator = function(amount, multiply) {
      var matrix = [11.224130630493164 * amount, -4.794486999511719 * amount, -2.8746118545532227 * amount, 0 * amount, 0.40342438220977783 * amount, -3.6330697536468506 * amount, 9.193157196044922 * amount, -2.951810836791992 * amount, 0 * amount, -1.316135048866272 * amount, -3.2184197902679443 * amount, -4.2375030517578125 * amount, 7.476448059082031 * amount, 0 * amount, 0.8044459223747253 * amount, 0, 0, 0, 1, 0];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter.prototype.lsd = function(multiply) {
      var matrix = [2, -0.4, 0.5, 0, 0, -0.5, 2, -0.4, 0, 0, -0.4, -0.5, 3, 0, 0, 0, 0, 0, 1, 0];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter.prototype.reset = function() {
      var matrix = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
      this._loadMatrix(matrix, false);
    };
    Object.defineProperties(ColorMatrixFilter.prototype, {matrix: {
        get: function() {
          return this.uniforms.m.value;
        },
        set: function(value) {
          this.uniforms.m.value = value;
        }
      }});
  })($__require('25'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("8c", ["53", "85"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  var core = $__require('53');
  var fs = $__require('85');
  function ColorStepFilter() {
    core.AbstractFilter.call(this, null, fs.readFileSync(__dirname + '/colorStep.frag', 'utf8'), {step: {
        type: '1f',
        value: 5
      }});
  }
  ColorStepFilter.prototype = Object.create(core.AbstractFilter.prototype);
  ColorStepFilter.prototype.constructor = ColorStepFilter;
  module.exports = ColorStepFilter;
  Object.defineProperties(ColorStepFilter.prototype, {step: {
      get: function() {
        return this.uniforms.step.value;
      },
      set: function(value) {
        this.uniforms.step.value = value;
      }
    }});
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("8d", ["53", "85"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  var core = $__require('53');
  var fs = $__require('85');
  function ConvolutionFilter(matrix, width, height) {
    core.AbstractFilter.call(this, null, fs.readFileSync(__dirname + '/convolution.frag', 'utf8'), {
      matrix: {
        type: '1fv',
        value: new Float32Array(matrix)
      },
      texelSize: {
        type: 'v2',
        value: {
          x: 1 / width,
          y: 1 / height
        }
      }
    });
  }
  ConvolutionFilter.prototype = Object.create(core.AbstractFilter.prototype);
  ConvolutionFilter.prototype.constructor = ConvolutionFilter;
  module.exports = ConvolutionFilter;
  Object.defineProperties(ConvolutionFilter.prototype, {
    matrix: {
      get: function() {
        return this.uniforms.matrix.value;
      },
      set: function(value) {
        this.uniforms.matrix.value = new Float32Array(value);
      }
    },
    width: {
      get: function() {
        return 1 / this.uniforms.texelSize.value.x;
      },
      set: function(value) {
        this.uniforms.texelSize.value.x = 1 / value;
      }
    },
    height: {
      get: function() {
        return 1 / this.uniforms.texelSize.value.y;
      },
      set: function(value) {
        this.uniforms.texelSize.value.y = 1 / value;
      }
    }
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("8e", ["53", "85"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  var core = $__require('53');
  var fs = $__require('85');
  function CrossHatchFilter() {
    core.AbstractFilter.call(this, null, fs.readFileSync(__dirname + '/crosshatch.frag', 'utf8'));
  }
  CrossHatchFilter.prototype = Object.create(core.AbstractFilter.prototype);
  CrossHatchFilter.prototype.constructor = CrossHatchFilter;
  module.exports = CrossHatchFilter;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("8f", ["53", "85"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  var core = $__require('53');
  var fs = $__require('85');
  function DisplacementFilter(sprite, scale) {
    var maskMatrix = new core.Matrix();
    sprite.renderable = false;
    core.AbstractFilter.call(this, fs.readFileSync(__dirname + '/displacement.vert', 'utf8'), fs.readFileSync(__dirname + '/displacement.frag', 'utf8'), {
      mapSampler: {
        type: 'sampler2D',
        value: sprite.texture
      },
      otherMatrix: {
        type: 'mat3',
        value: maskMatrix.toArray(true)
      },
      scale: {
        type: 'v2',
        value: {
          x: 1,
          y: 1
        }
      }
    });
    this.maskSprite = sprite;
    this.maskMatrix = maskMatrix;
    if (scale === null || scale === undefined) {
      scale = 20;
    }
    this.scale = new core.Point(scale, scale);
  }
  DisplacementFilter.prototype = Object.create(core.AbstractFilter.prototype);
  DisplacementFilter.prototype.constructor = DisplacementFilter;
  module.exports = DisplacementFilter;
  DisplacementFilter.prototype.applyFilter = function(renderer, input, output) {
    var filterManager = renderer.filterManager;
    filterManager.calculateMappedMatrix(input.frame, this.maskSprite, this.maskMatrix);
    this.uniforms.otherMatrix.value = this.maskMatrix.toArray(true);
    this.uniforms.scale.value.x = this.scale.x * (1 / input.frame.width);
    this.uniforms.scale.value.y = this.scale.y * (1 / input.frame.height);
    var shader = this.getShader(renderer);
    filterManager.applyFilter(shader, input, output);
  };
  Object.defineProperties(DisplacementFilter.prototype, {map: {
      get: function() {
        return this.uniforms.mapSampler.value;
      },
      set: function(value) {
        this.uniforms.mapSampler.value = value;
      }
    }});
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("90", ["53", "85"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  var core = $__require('53');
  var fs = $__require('85');
  function DotScreenFilter() {
    core.AbstractFilter.call(this, null, fs.readFileSync(__dirname + '/dotScreen.frag', 'utf8'), {
      scale: {
        type: '1f',
        value: 1
      },
      angle: {
        type: '1f',
        value: 5
      },
      dimensions: {
        type: '4fv',
        value: [0, 0, 0, 0]
      }
    });
  }
  DotScreenFilter.prototype = Object.create(core.AbstractFilter.prototype);
  DotScreenFilter.prototype.constructor = DotScreenFilter;
  module.exports = DotScreenFilter;
  Object.defineProperties(DotScreenFilter.prototype, {
    scale: {
      get: function() {
        return this.uniforms.scale.value;
      },
      set: function(value) {
        this.uniforms.scale.value = value;
      }
    },
    angle: {
      get: function() {
        return this.uniforms.angle.value;
      },
      set: function(value) {
        this.uniforms.angle.value = value;
      }
    }
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("91", ["53", "85"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  var core = $__require('53');
  var fs = $__require('85');
  function GrayFilter() {
    core.AbstractFilter.call(this, null, fs.readFileSync(__dirname + '/gray.frag', 'utf8'), {gray: {
        type: '1f',
        value: 1
      }});
  }
  GrayFilter.prototype = Object.create(core.AbstractFilter.prototype);
  GrayFilter.prototype.constructor = GrayFilter;
  module.exports = GrayFilter;
  Object.defineProperties(GrayFilter.prototype, {gray: {
      get: function() {
        return this.uniforms.gray.value;
      },
      set: function(value) {
        this.uniforms.gray.value = value;
      }
    }});
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("87", ["53", "85"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  var core = $__require('53');
  var fs = $__require('85');
  function BlurXFilter() {
    core.AbstractFilter.call(this, fs.readFileSync(__dirname + '/blurX.vert', 'utf8'), fs.readFileSync(__dirname + '/blur.frag', 'utf8'), {strength: {
        type: '1f',
        value: 1
      }});
    this.passes = 1;
    this.strength = 4;
  }
  BlurXFilter.prototype = Object.create(core.AbstractFilter.prototype);
  BlurXFilter.prototype.constructor = BlurXFilter;
  module.exports = BlurXFilter;
  BlurXFilter.prototype.applyFilter = function(renderer, input, output, clear) {
    var shader = this.getShader(renderer);
    this.uniforms.strength.value = this.strength / 4 / this.passes * (input.frame.width / input.size.width);
    if (this.passes === 1) {
      renderer.filterManager.applyFilter(shader, input, output, clear);
    } else {
      var renderTarget = renderer.filterManager.getRenderTarget(true);
      var flip = input;
      var flop = renderTarget;
      for (var i = 0; i < this.passes - 1; i++) {
        renderer.filterManager.applyFilter(shader, flip, flop, true);
        var temp = flop;
        flop = flip;
        flip = temp;
      }
      renderer.filterManager.applyFilter(shader, flip, output, clear);
      renderer.filterManager.returnRenderTarget(renderTarget);
    }
  };
  Object.defineProperties(BlurXFilter.prototype, {blur: {
      get: function() {
        return this.strength;
      },
      set: function(value) {
        this.padding = Math.abs(value) * 0.5;
        this.strength = value;
      }
    }});
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("92", ["53", "85"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  var core = $__require('53');
  var fs = $__require('85');
  function BlurYTintFilter() {
    core.AbstractFilter.call(this, fs.readFileSync(__dirname + '/blurYTint.vert', 'utf8'), fs.readFileSync(__dirname + '/blurYTint.frag', 'utf8'), {
      blur: {
        type: '1f',
        value: 1 / 512
      },
      color: {
        type: 'c',
        value: [0, 0, 0]
      },
      alpha: {
        type: '1f',
        value: 0.7
      },
      offset: {
        type: '2f',
        value: [5, 5]
      },
      strength: {
        type: '1f',
        value: 1
      }
    });
    this.passes = 1;
    this.strength = 4;
  }
  BlurYTintFilter.prototype = Object.create(core.AbstractFilter.prototype);
  BlurYTintFilter.prototype.constructor = BlurYTintFilter;
  module.exports = BlurYTintFilter;
  BlurYTintFilter.prototype.applyFilter = function(renderer, input, output, clear) {
    var shader = this.getShader(renderer);
    this.uniforms.strength.value = this.strength / 4 / this.passes * (input.frame.height / input.size.height);
    if (this.passes === 1) {
      renderer.filterManager.applyFilter(shader, input, output, clear);
    } else {
      var renderTarget = renderer.filterManager.getRenderTarget(true);
      var flip = input;
      var flop = renderTarget;
      for (var i = 0; i < this.passes - 1; i++) {
        renderer.filterManager.applyFilter(shader, flip, flop, clear);
        var temp = flop;
        flop = flip;
        flip = temp;
      }
      renderer.filterManager.applyFilter(shader, flip, output, clear);
      renderer.filterManager.returnRenderTarget(renderTarget);
    }
  };
  Object.defineProperties(BlurYTintFilter.prototype, {blur: {
      get: function() {
        return this.strength;
      },
      set: function(value) {
        this.padding = value * 0.5;
        this.strength = value;
      }
    }});
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("93", ["53", "87", "92"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = $__require('53'),
      BlurXFilter = $__require('87'),
      BlurYTintFilter = $__require('92');
  function DropShadowFilter() {
    core.AbstractFilter.call(this);
    this.blurXFilter = new BlurXFilter();
    this.blurYTintFilter = new BlurYTintFilter();
    this.defaultFilter = new core.AbstractFilter();
    this.padding = 30;
    this._dirtyPosition = true;
    this._angle = 45 * Math.PI / 180;
    this._distance = 10;
    this.alpha = 0.75;
    this.hideObject = false;
    this.blendMode = core.BLEND_MODES.MULTIPLY;
  }
  DropShadowFilter.prototype = Object.create(core.AbstractFilter.prototype);
  DropShadowFilter.prototype.constructor = DropShadowFilter;
  module.exports = DropShadowFilter;
  DropShadowFilter.prototype.applyFilter = function(renderer, input, output) {
    var renderTarget = renderer.filterManager.getRenderTarget(true);
    if (this._dirtyPosition) {
      this._dirtyPosition = false;
      this.blurYTintFilter.uniforms.offset.value[0] = Math.sin(this._angle) * this._distance;
      this.blurYTintFilter.uniforms.offset.value[1] = Math.cos(this._angle) * this._distance;
    }
    this.blurXFilter.applyFilter(renderer, input, renderTarget);
    renderer.blendModeManager.setBlendMode(this.blendMode);
    this.blurYTintFilter.applyFilter(renderer, renderTarget, output);
    renderer.blendModeManager.setBlendMode(core.BLEND_MODES.NORMAL);
    if (!this.hideObject) {
      this.defaultFilter.applyFilter(renderer, input, output);
    }
    renderer.filterManager.returnRenderTarget(renderTarget);
  };
  Object.defineProperties(DropShadowFilter.prototype, {
    blur: {
      get: function() {
        return this.blurXFilter.blur;
      },
      set: function(value) {
        this.blurXFilter.blur = this.blurYTintFilter.blur = value;
      }
    },
    blurX: {
      get: function() {
        return this.blurXFilter.blur;
      },
      set: function(value) {
        this.blurXFilter.blur = value;
      }
    },
    blurY: {
      get: function() {
        return this.blurYTintFilter.blur;
      },
      set: function(value) {
        this.blurYTintFilter.blur = value;
      }
    },
    color: {
      get: function() {
        return core.utils.rgb2hex(this.blurYTintFilter.uniforms.color.value);
      },
      set: function(value) {
        this.blurYTintFilter.uniforms.color.value = core.utils.hex2rgb(value);
      }
    },
    alpha: {
      get: function() {
        return this.blurYTintFilter.uniforms.alpha.value;
      },
      set: function(value) {
        this.blurYTintFilter.uniforms.alpha.value = value;
      }
    },
    distance: {
      get: function() {
        return this._distance;
      },
      set: function(value) {
        this._dirtyPosition = true;
        this._distance = value;
      }
    },
    angle: {
      get: function() {
        return this._angle;
      },
      set: function(value) {
        this._dirtyPosition = true;
        this._angle = value;
      }
    }
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("94", ["53", "85"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  var core = $__require('53');
  var fs = $__require('85');
  function InvertFilter() {
    core.AbstractFilter.call(this, null, fs.readFileSync(__dirname + '/invert.frag', 'utf8'), {invert: {
        type: '1f',
        value: 1
      }});
  }
  InvertFilter.prototype = Object.create(core.AbstractFilter.prototype);
  InvertFilter.prototype.constructor = InvertFilter;
  module.exports = InvertFilter;
  Object.defineProperties(InvertFilter.prototype, {invert: {
      get: function() {
        return this.uniforms.invert.value;
      },
      set: function(value) {
        this.uniforms.invert.value = value;
      }
    }});
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("95", ["53", "85"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  var core = $__require('53');
  var fs = $__require('85');
  function NoiseFilter() {
    core.AbstractFilter.call(this, null, fs.readFileSync(__dirname + '/noise.frag', 'utf8'), {noise: {
        type: '1f',
        value: 0.5
      }});
  }
  NoiseFilter.prototype = Object.create(core.AbstractFilter.prototype);
  NoiseFilter.prototype.constructor = NoiseFilter;
  module.exports = NoiseFilter;
  Object.defineProperties(NoiseFilter.prototype, {noise: {
      get: function() {
        return this.uniforms.noise.value;
      },
      set: function(value) {
        this.uniforms.noise.value = value;
      }
    }});
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("96", ["53", "85"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  var core = $__require('53');
  var fs = $__require('85');
  function PixelateFilter() {
    core.AbstractFilter.call(this, null, fs.readFileSync(__dirname + '/pixelate.frag', 'utf8'), {
      dimensions: {
        type: '4fv',
        value: new Float32Array([0, 0, 0, 0])
      },
      pixelSize: {
        type: 'v2',
        value: {
          x: 10,
          y: 10
        }
      }
    });
  }
  PixelateFilter.prototype = Object.create(core.AbstractFilter.prototype);
  PixelateFilter.prototype.constructor = PixelateFilter;
  module.exports = PixelateFilter;
  Object.defineProperties(PixelateFilter.prototype, {size: {
      get: function() {
        return this.uniforms.pixelSize.value;
      },
      set: function(value) {
        this.uniforms.pixelSize.value = value;
      }
    }});
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("97", ["53", "85"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  var core = $__require('53');
  var fs = $__require('85');
  function RGBSplitFilter() {
    core.AbstractFilter.call(this, null, fs.readFileSync(__dirname + '/rgbSplit.frag', 'utf8'), {
      red: {
        type: 'v2',
        value: {
          x: 20,
          y: 20
        }
      },
      green: {
        type: 'v2',
        value: {
          x: -20,
          y: 20
        }
      },
      blue: {
        type: 'v2',
        value: {
          x: 20,
          y: -20
        }
      },
      dimensions: {
        type: '4fv',
        value: [0, 0, 0, 0]
      }
    });
  }
  RGBSplitFilter.prototype = Object.create(core.AbstractFilter.prototype);
  RGBSplitFilter.prototype.constructor = RGBSplitFilter;
  module.exports = RGBSplitFilter;
  Object.defineProperties(RGBSplitFilter.prototype, {
    red: {
      get: function() {
        return this.uniforms.red.value;
      },
      set: function(value) {
        this.uniforms.red.value = value;
      }
    },
    green: {
      get: function() {
        return this.uniforms.green.value;
      },
      set: function(value) {
        this.uniforms.green.value = value;
      }
    },
    blue: {
      get: function() {
        return this.uniforms.blue.value;
      },
      set: function(value) {
        this.uniforms.blue.value = value;
      }
    }
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("98", ["53", "85"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  var core = $__require('53');
  var fs = $__require('85');
  function ShockwaveFilter() {
    core.AbstractFilter.call(this, null, fs.readFileSync(__dirname + '/shockwave.frag', 'utf8'), {
      center: {
        type: 'v2',
        value: {
          x: 0.5,
          y: 0.5
        }
      },
      params: {
        type: 'v3',
        value: {
          x: 10,
          y: 0.8,
          z: 0.1
        }
      },
      time: {
        type: '1f',
        value: 0
      }
    });
  }
  ShockwaveFilter.prototype = Object.create(core.AbstractFilter.prototype);
  ShockwaveFilter.prototype.constructor = ShockwaveFilter;
  module.exports = ShockwaveFilter;
  Object.defineProperties(ShockwaveFilter.prototype, {
    center: {
      get: function() {
        return this.uniforms.center.value;
      },
      set: function(value) {
        this.uniforms.center.value = value;
      }
    },
    params: {
      get: function() {
        return this.uniforms.params.value;
      },
      set: function(value) {
        this.uniforms.params.value = value;
      }
    },
    time: {
      get: function() {
        return this.uniforms.time.value;
      },
      set: function(value) {
        this.uniforms.time.value = value;
      }
    }
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("99", ["53", "85"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  var core = $__require('53');
  var fs = $__require('85');
  function SepiaFilter() {
    core.AbstractFilter.call(this, null, fs.readFileSync(__dirname + '/sepia.frag', 'utf8'), {sepia: {
        type: '1f',
        value: 1
      }});
  }
  SepiaFilter.prototype = Object.create(core.AbstractFilter.prototype);
  SepiaFilter.prototype.constructor = SepiaFilter;
  module.exports = SepiaFilter;
  Object.defineProperties(SepiaFilter.prototype, {sepia: {
      get: function() {
        return this.uniforms.sepia.value;
      },
      set: function(value) {
        this.uniforms.sepia.value = value;
      }
    }});
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("9a", ["53", "85"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  var core = $__require('53');
  var fs = $__require('85');
  function SmartBlurFilter() {
    core.AbstractFilter.call(this, null, fs.readFileSync(__dirname + '/smartBlur.frag', 'utf8'), {delta: {
        type: 'v2',
        value: {
          x: 0.1,
          y: 0.0
        }
      }});
  }
  SmartBlurFilter.prototype = Object.create(core.AbstractFilter.prototype);
  SmartBlurFilter.prototype.constructor = SmartBlurFilter;
  module.exports = SmartBlurFilter;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("9b", ["53", "9c", "9d"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = $__require('53'),
      TiltShiftXFilter = $__require('9c'),
      TiltShiftYFilter = $__require('9d');
  function TiltShiftFilter() {
    core.AbstractFilter.call(this);
    this.tiltShiftXFilter = new TiltShiftXFilter();
    this.tiltShiftYFilter = new TiltShiftYFilter();
  }
  TiltShiftFilter.prototype = Object.create(core.AbstractFilter.prototype);
  TiltShiftFilter.prototype.constructor = TiltShiftFilter;
  module.exports = TiltShiftFilter;
  TiltShiftFilter.prototype.applyFilter = function(renderer, input, output) {
    var renderTarget = renderer.filterManager.getRenderTarget(true);
    this.tiltShiftXFilter.applyFilter(renderer, input, renderTarget);
    this.tiltShiftYFilter.applyFilter(renderer, renderTarget, output);
    renderer.filterManager.returnRenderTarget(renderTarget);
  };
  Object.defineProperties(TiltShiftFilter.prototype, {
    blur: {
      get: function() {
        return this.tiltShiftXFilter.blur;
      },
      set: function(value) {
        this.tiltShiftXFilter.blur = this.tiltShiftYFilter.blur = value;
      }
    },
    gradientBlur: {
      get: function() {
        return this.tiltShiftXFilter.gradientBlur;
      },
      set: function(value) {
        this.tiltShiftXFilter.gradientBlur = this.tiltShiftYFilter.gradientBlur = value;
      }
    },
    start: {
      get: function() {
        return this.tiltShiftXFilter.start;
      },
      set: function(value) {
        this.tiltShiftXFilter.start = this.tiltShiftYFilter.start = value;
      }
    },
    end: {
      get: function() {
        return this.tiltShiftXFilter.end;
      },
      set: function(value) {
        this.tiltShiftXFilter.end = this.tiltShiftYFilter.end = value;
      }
    }
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("9c", ["9e"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var TiltShiftAxisFilter = $__require('9e');
  function TiltShiftXFilter() {
    TiltShiftAxisFilter.call(this);
  }
  TiltShiftXFilter.prototype = Object.create(TiltShiftAxisFilter.prototype);
  TiltShiftXFilter.prototype.constructor = TiltShiftXFilter;
  module.exports = TiltShiftXFilter;
  TiltShiftXFilter.prototype.updateDelta = function() {
    var dx = this.uniforms.end.value.x - this.uniforms.start.value.x;
    var dy = this.uniforms.end.value.y - this.uniforms.start.value.y;
    var d = Math.sqrt(dx * dx + dy * dy);
    this.uniforms.delta.value.x = dx / d;
    this.uniforms.delta.value.y = dy / d;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("9e", ["53", "85"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  var core = $__require('53');
  var fs = $__require('85');
  function TiltShiftAxisFilter() {
    core.AbstractFilter.call(this, null, fs.readFileSync(__dirname + '/tiltShift.frag', 'utf8'), {
      blur: {
        type: '1f',
        value: 100
      },
      gradientBlur: {
        type: '1f',
        value: 600
      },
      start: {
        type: 'v2',
        value: {
          x: 0,
          y: window.innerHeight / 2
        }
      },
      end: {
        type: 'v2',
        value: {
          x: 600,
          y: window.innerHeight / 2
        }
      },
      delta: {
        type: 'v2',
        value: {
          x: 30,
          y: 30
        }
      },
      texSize: {
        type: 'v2',
        value: {
          x: window.innerWidth,
          y: window.innerHeight
        }
      }
    });
    this.updateDelta();
  }
  TiltShiftAxisFilter.prototype = Object.create(core.AbstractFilter.prototype);
  TiltShiftAxisFilter.prototype.constructor = TiltShiftAxisFilter;
  module.exports = TiltShiftAxisFilter;
  TiltShiftAxisFilter.prototype.updateDelta = function() {
    this.uniforms.delta.value.x = 0;
    this.uniforms.delta.value.y = 0;
  };
  Object.defineProperties(TiltShiftAxisFilter.prototype, {
    blur: {
      get: function() {
        return this.uniforms.blur.value;
      },
      set: function(value) {
        this.uniforms.blur.value = value;
      }
    },
    gradientBlur: {
      get: function() {
        return this.uniforms.gradientBlur.value;
      },
      set: function(value) {
        this.uniforms.gradientBlur.value = value;
      }
    },
    start: {
      get: function() {
        return this.uniforms.start.value;
      },
      set: function(value) {
        this.uniforms.start.value = value;
        this.updateDelta();
      }
    },
    end: {
      get: function() {
        return this.uniforms.end.value;
      },
      set: function(value) {
        this.uniforms.end.value = value;
        this.updateDelta();
      }
    }
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("9d", ["9e"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var TiltShiftAxisFilter = $__require('9e');
  function TiltShiftYFilter() {
    TiltShiftAxisFilter.call(this);
  }
  TiltShiftYFilter.prototype = Object.create(TiltShiftAxisFilter.prototype);
  TiltShiftYFilter.prototype.constructor = TiltShiftYFilter;
  module.exports = TiltShiftYFilter;
  TiltShiftYFilter.prototype.updateDelta = function() {
    var dx = this.uniforms.end.value.x - this.uniforms.start.value.x;
    var dy = this.uniforms.end.value.y - this.uniforms.start.value.y;
    var d = Math.sqrt(dx * dx + dy * dy);
    this.uniforms.delta.value.x = -dy / d;
    this.uniforms.delta.value.y = dx / d;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("9f", ["a0", "65"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var CONST = $__require('a0'),
      EventEmitter = $__require('65'),
      TICK = 'tick';
  function Ticker() {
    var _this = this;
    this._tick = function _tick(time) {
      _this._requestId = null;
      if (_this.started) {
        _this.update(time);
        if (_this.started && _this._requestId === null && _this._emitter.listeners(TICK, true)) {
          _this._requestId = requestAnimationFrame(_this._tick);
        }
      }
    };
    this._emitter = new EventEmitter();
    this._requestId = null;
    this._maxElapsedMS = 100;
    this.autoStart = false;
    this.deltaTime = 1;
    this.elapsedMS = 1 / CONST.TARGET_FPMS;
    this.lastTime = 0;
    this.speed = 1;
    this.started = false;
  }
  Object.defineProperties(Ticker.prototype, {
    FPS: {get: function() {
        return 1000 / this.elapsedMS;
      }},
    minFPS: {
      get: function() {
        return 1000 / this._maxElapsedMS;
      },
      set: function(fps) {
        var minFPMS = Math.min(Math.max(0, fps) / 1000, CONST.TARGET_FPMS);
        this._maxElapsedMS = 1 / minFPMS;
      }
    }
  });
  Ticker.prototype._requestIfNeeded = function _requestIfNeeded() {
    if (this._requestId === null && this._emitter.listeners(TICK, true)) {
      this.lastTime = performance.now();
      this._requestId = requestAnimationFrame(this._tick);
    }
  };
  Ticker.prototype._cancelIfNeeded = function _cancelIfNeeded() {
    if (this._requestId !== null) {
      cancelAnimationFrame(this._requestId);
      this._requestId = null;
    }
  };
  Ticker.prototype._startIfPossible = function _startIfPossible() {
    if (this.started) {
      this._requestIfNeeded();
    } else if (this.autoStart) {
      this.start();
    }
  };
  Ticker.prototype.add = function add(fn, context) {
    this._emitter.on(TICK, fn, context);
    this._startIfPossible();
    return this;
  };
  Ticker.prototype.addOnce = function addOnce(fn, context) {
    this._emitter.once(TICK, fn, context);
    this._startIfPossible();
    return this;
  };
  Ticker.prototype.remove = function remove(fn, context) {
    this._emitter.off(TICK, fn, context);
    if (!this._emitter.listeners(TICK, true)) {
      this._cancelIfNeeded();
    }
    return this;
  };
  Ticker.prototype.start = function start() {
    if (!this.started) {
      this.started = true;
      this._requestIfNeeded();
    }
  };
  Ticker.prototype.stop = function stop() {
    if (this.started) {
      this.started = false;
      this._cancelIfNeeded();
    }
  };
  Ticker.prototype.update = function update(currentTime) {
    var elapsedMS;
    currentTime = currentTime || performance.now();
    elapsedMS = this.elapsedMS = currentTime - this.lastTime;
    if (elapsedMS > this._maxElapsedMS) {
      elapsedMS = this._maxElapsedMS;
    }
    this.deltaTime = elapsedMS * CONST.TARGET_FPMS * this.speed;
    this._emitter.emit(TICK, this.deltaTime);
    this.lastTime = currentTime;
  };
  module.exports = Ticker;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a1", ["9f"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Ticker = $__require('9f');
  var shared = new Ticker();
  shared.autoStart = true;
  module.exports = {
    shared: shared,
    Ticker: Ticker
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a2", ["a3", "a0"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Container = $__require('a3'),
      CONST = $__require('a0');
  function ParticleContainer(maxSize, properties, batchSize) {
    Container.call(this);
    batchSize = batchSize || 15000;
    maxSize = maxSize || 15000;
    var maxBatchSize = 16384;
    if (batchSize > maxBatchSize) {
      batchSize = maxBatchSize;
    }
    if (batchSize > maxSize) {
      batchSize = maxSize;
    }
    this._properties = [false, true, false, false, false];
    this._maxSize = maxSize;
    this._batchSize = batchSize;
    this._buffers = null;
    this._bufferToUpdate = 0;
    this.interactiveChildren = false;
    this.blendMode = CONST.BLEND_MODES.NORMAL;
    this.roundPixels = true;
    this.setProperties(properties);
  }
  ParticleContainer.prototype = Object.create(Container.prototype);
  ParticleContainer.prototype.constructor = ParticleContainer;
  module.exports = ParticleContainer;
  ParticleContainer.prototype.setProperties = function(properties) {
    if (properties) {
      this._properties[0] = 'scale' in properties ? !!properties.scale : this._properties[0];
      this._properties[1] = 'position' in properties ? !!properties.position : this._properties[1];
      this._properties[2] = 'rotation' in properties ? !!properties.rotation : this._properties[2];
      this._properties[3] = 'uvs' in properties ? !!properties.uvs : this._properties[3];
      this._properties[4] = 'alpha' in properties ? !!properties.alpha : this._properties[4];
    }
  };
  ParticleContainer.prototype.updateTransform = function() {
    this.displayObjectUpdateTransform();
  };
  ParticleContainer.prototype.renderWebGL = function(renderer) {
    if (!this.visible || this.worldAlpha <= 0 || !this.children.length || !this.renderable) {
      return;
    }
    renderer.setObjectRenderer(renderer.plugins.particle);
    renderer.plugins.particle.render(this);
  };
  ParticleContainer.prototype.onChildrenChange = function(smallestChildIndex) {
    var bufferIndex = Math.floor(smallestChildIndex / this._batchSize);
    if (bufferIndex < this._bufferToUpdate) {
      this._bufferToUpdate = bufferIndex;
    }
  };
  ParticleContainer.prototype.renderCanvas = function(renderer) {
    if (!this.visible || this.worldAlpha <= 0 || !this.children.length || !this.renderable) {
      return;
    }
    var context = renderer.context;
    var transform = this.worldTransform;
    var isRotated = true;
    var positionX = 0;
    var positionY = 0;
    var finalWidth = 0;
    var finalHeight = 0;
    var compositeOperation = renderer.blendModes[this.blendMode];
    if (compositeOperation !== context.globalCompositeOperation) {
      context.globalCompositeOperation = compositeOperation;
    }
    context.globalAlpha = this.worldAlpha;
    this.displayObjectUpdateTransform();
    for (var i = 0; i < this.children.length; ++i) {
      var child = this.children[i];
      if (!child.visible) {
        continue;
      }
      var frame = child.texture.frame;
      context.globalAlpha = this.worldAlpha * child.alpha;
      if (child.rotation % (Math.PI * 2) === 0) {
        if (isRotated) {
          context.setTransform(transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
          isRotated = false;
        }
        positionX = ((child.anchor.x) * (-frame.width * child.scale.x) + child.position.x + 0.5);
        positionY = ((child.anchor.y) * (-frame.height * child.scale.y) + child.position.y + 0.5);
        finalWidth = frame.width * child.scale.x;
        finalHeight = frame.height * child.scale.y;
      } else {
        if (!isRotated) {
          isRotated = true;
        }
        child.displayObjectUpdateTransform();
        var childTransform = child.worldTransform;
        if (renderer.roundPixels) {
          context.setTransform(childTransform.a, childTransform.b, childTransform.c, childTransform.d, childTransform.tx | 0, childTransform.ty | 0);
        } else {
          context.setTransform(childTransform.a, childTransform.b, childTransform.c, childTransform.d, childTransform.tx, childTransform.ty);
        }
        positionX = ((child.anchor.x) * (-frame.width) + 0.5);
        positionY = ((child.anchor.y) * (-frame.height) + 0.5);
        finalWidth = frame.width;
        finalHeight = frame.height;
      }
      context.drawImage(child.texture.baseTexture.source, frame.x, frame.y, frame.width, frame.height, positionX, positionY, finalWidth, finalHeight);
    }
  };
  ParticleContainer.prototype.destroy = function() {
    Container.prototype.destroy.apply(this, arguments);
    if (this._buffers) {
      for (var i = 0; i < this._buffers.length; ++i) {
        this._buffers[i].destroy();
      }
    }
    this._properties = null;
    this._buffers = null;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a4", ["a5", "a6", "a0"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ObjectRenderer = $__require('a5'),
      WebGLRenderer = $__require('a6'),
      CONST = $__require('a0');
  function SpriteRenderer(renderer) {
    ObjectRenderer.call(this, renderer);
    this.vertSize = 5;
    this.vertByteSize = this.vertSize * 4;
    this.size = CONST.SPRITE_BATCH_SIZE;
    var numVerts = (this.size * 4) * this.vertByteSize;
    var numIndices = this.size * 6;
    this.vertices = new ArrayBuffer(numVerts);
    this.positions = new Float32Array(this.vertices);
    this.colors = new Uint32Array(this.vertices);
    this.indices = new Uint16Array(numIndices);
    for (var i = 0,
        j = 0; i < numIndices; i += 6, j += 4) {
      this.indices[i + 0] = j + 0;
      this.indices[i + 1] = j + 1;
      this.indices[i + 2] = j + 2;
      this.indices[i + 3] = j + 0;
      this.indices[i + 4] = j + 2;
      this.indices[i + 5] = j + 3;
    }
    this.currentBatchSize = 0;
    this.sprites = [];
    this.shader = null;
  }
  SpriteRenderer.prototype = Object.create(ObjectRenderer.prototype);
  SpriteRenderer.prototype.constructor = SpriteRenderer;
  module.exports = SpriteRenderer;
  WebGLRenderer.registerPlugin('sprite', SpriteRenderer);
  SpriteRenderer.prototype.onContextChange = function() {
    var gl = this.renderer.gl;
    this.shader = this.renderer.shaderManager.defaultShader;
    this.vertexBuffer = gl.createBuffer();
    this.indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.DYNAMIC_DRAW);
    this.currentBlendMode = 99999;
  };
  SpriteRenderer.prototype.render = function(sprite) {
    var texture = sprite._texture;
    if (this.currentBatchSize >= this.size) {
      this.flush();
    }
    var uvs = texture._uvs;
    if (!uvs) {
      return;
    }
    var aX = sprite.anchor.x;
    var aY = sprite.anchor.y;
    var w0,
        w1,
        h0,
        h1;
    if (texture.trim && sprite.tileScale === undefined) {
      var trim = texture.trim;
      w1 = trim.x - aX * trim.width;
      w0 = w1 + texture.crop.width;
      h1 = trim.y - aY * trim.height;
      h0 = h1 + texture.crop.height;
    } else {
      w0 = (texture._frame.width) * (1 - aX);
      w1 = (texture._frame.width) * -aX;
      h0 = texture._frame.height * (1 - aY);
      h1 = texture._frame.height * -aY;
    }
    var index = this.currentBatchSize * this.vertByteSize;
    var worldTransform = sprite.worldTransform;
    var a = worldTransform.a;
    var b = worldTransform.b;
    var c = worldTransform.c;
    var d = worldTransform.d;
    var tx = worldTransform.tx;
    var ty = worldTransform.ty;
    var colors = this.colors;
    var positions = this.positions;
    if (this.renderer.roundPixels) {
      var resolution = this.renderer.resolution;
      positions[index] = (((a * w1 + c * h1 + tx) * resolution) | 0) / resolution;
      positions[index + 1] = (((d * h1 + b * w1 + ty) * resolution) | 0) / resolution;
      positions[index + 5] = (((a * w0 + c * h1 + tx) * resolution) | 0) / resolution;
      positions[index + 6] = (((d * h1 + b * w0 + ty) * resolution) | 0) / resolution;
      positions[index + 10] = (((a * w0 + c * h0 + tx) * resolution) | 0) / resolution;
      positions[index + 11] = (((d * h0 + b * w0 + ty) * resolution) | 0) / resolution;
      positions[index + 15] = (((a * w1 + c * h0 + tx) * resolution) | 0) / resolution;
      positions[index + 16] = (((d * h0 + b * w1 + ty) * resolution) | 0) / resolution;
    } else {
      positions[index] = a * w1 + c * h1 + tx;
      positions[index + 1] = d * h1 + b * w1 + ty;
      positions[index + 5] = a * w0 + c * h1 + tx;
      positions[index + 6] = d * h1 + b * w0 + ty;
      positions[index + 10] = a * w0 + c * h0 + tx;
      positions[index + 11] = d * h0 + b * w0 + ty;
      positions[index + 15] = a * w1 + c * h0 + tx;
      positions[index + 16] = d * h0 + b * w1 + ty;
    }
    positions[index + 2] = uvs.x0;
    positions[index + 3] = uvs.y0;
    positions[index + 7] = uvs.x1;
    positions[index + 8] = uvs.y1;
    positions[index + 12] = uvs.x2;
    positions[index + 13] = uvs.y2;
    positions[index + 17] = uvs.x3;
    positions[index + 18] = uvs.y3;
    var tint = sprite.tint;
    colors[index + 4] = colors[index + 9] = colors[index + 14] = colors[index + 19] = (tint >> 16) + (tint & 0xff00) + ((tint & 0xff) << 16) + (sprite.worldAlpha * 255 << 24);
    this.sprites[this.currentBatchSize++] = sprite;
  };
  SpriteRenderer.prototype.flush = function() {
    if (this.currentBatchSize === 0) {
      return;
    }
    var gl = this.renderer.gl;
    var shader;
    if (this.currentBatchSize > (this.size * 0.5)) {
      gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.vertices);
    } else {
      var view = this.positions.subarray(0, this.currentBatchSize * this.vertByteSize);
      gl.bufferSubData(gl.ARRAY_BUFFER, 0, view);
    }
    var nextTexture,
        nextBlendMode,
        nextShader;
    var batchSize = 0;
    var start = 0;
    var currentBaseTexture = null;
    var currentBlendMode = this.renderer.blendModeManager.currentBlendMode;
    var currentShader = null;
    var blendSwap = false;
    var shaderSwap = false;
    var sprite;
    for (var i = 0,
        j = this.currentBatchSize; i < j; i++) {
      sprite = this.sprites[i];
      nextTexture = sprite._texture.baseTexture;
      nextBlendMode = sprite.blendMode;
      nextShader = sprite.shader || this.shader;
      blendSwap = currentBlendMode !== nextBlendMode;
      shaderSwap = currentShader !== nextShader;
      if (currentBaseTexture !== nextTexture || blendSwap || shaderSwap) {
        this.renderBatch(currentBaseTexture, batchSize, start);
        start = i;
        batchSize = 0;
        currentBaseTexture = nextTexture;
        if (blendSwap) {
          currentBlendMode = nextBlendMode;
          this.renderer.blendModeManager.setBlendMode(currentBlendMode);
        }
        if (shaderSwap) {
          currentShader = nextShader;
          shader = currentShader.shaders ? currentShader.shaders[gl.id] : currentShader;
          if (!shader) {
            shader = currentShader.getShader(this.renderer);
          }
          this.renderer.shaderManager.setShader(shader);
          shader.uniforms.projectionMatrix.value = this.renderer.currentRenderTarget.projectionMatrix.toArray(true);
          shader.syncUniforms();
          gl.activeTexture(gl.TEXTURE0);
        }
      }
      batchSize++;
    }
    this.renderBatch(currentBaseTexture, batchSize, start);
    this.currentBatchSize = 0;
  };
  SpriteRenderer.prototype.renderBatch = function(texture, size, startIndex) {
    if (size === 0) {
      return;
    }
    var gl = this.renderer.gl;
    if (!texture._glTextures[gl.id]) {
      this.renderer.updateTexture(texture);
    } else {
      gl.bindTexture(gl.TEXTURE_2D, texture._glTextures[gl.id]);
    }
    gl.drawElements(gl.TRIANGLES, size * 6, gl.UNSIGNED_SHORT, startIndex * 6 * 2);
    this.renderer.drawCount++;
  };
  SpriteRenderer.prototype.start = function() {
    var gl = this.renderer.gl;
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    var stride = this.vertByteSize;
    gl.vertexAttribPointer(this.shader.attributes.aVertexPosition, 2, gl.FLOAT, false, stride, 0);
    gl.vertexAttribPointer(this.shader.attributes.aTextureCoord, 2, gl.FLOAT, false, stride, 2 * 4);
    gl.vertexAttribPointer(this.shader.attributes.aColor, 4, gl.UNSIGNED_BYTE, true, stride, 4 * 4);
  };
  SpriteRenderer.prototype.destroy = function() {
    this.renderer.gl.deleteBuffer(this.vertexBuffer);
    this.renderer.gl.deleteBuffer(this.indexBuffer);
    ObjectRenderer.prototype.destroy.call(this);
    this.shader.destroy();
    this.renderer = null;
    this.vertices = null;
    this.positions = null;
    this.colors = null;
    this.indices = null;
    this.vertexBuffer = null;
    this.indexBuffer = null;
    this.sprites = null;
    this.shader = null;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a7", ["a8"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var TextureShader = $__require('a8');
  function ParticleShader(shaderManager) {
    TextureShader.call(this, shaderManager, ['attribute vec2 aVertexPosition;', 'attribute vec2 aTextureCoord;', 'attribute float aColor;', 'attribute vec2 aPositionCoord;', 'attribute vec2 aScale;', 'attribute float aRotation;', 'uniform mat3 projectionMatrix;', 'varying vec2 vTextureCoord;', 'varying float vColor;', 'void main(void){', '   vec2 v = aVertexPosition;', '   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);', '   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);', '   v = v + aPositionCoord;', '   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);', '   vTextureCoord = aTextureCoord;', '   vColor = aColor;', '}'].join('\n'), ['precision lowp float;', 'varying vec2 vTextureCoord;', 'varying float vColor;', 'uniform sampler2D uSampler;', 'uniform float uAlpha;', 'void main(void){', '  vec4 color = texture2D(uSampler, vTextureCoord) * vColor * uAlpha;', '  if (color.a == 0.0) discard;', '  gl_FragColor = color;', '}'].join('\n'), {uAlpha: {
        type: '1f',
        value: 1
      }}, {
      aPositionCoord: 0,
      aRotation: 0
    });
  }
  ParticleShader.prototype = Object.create(TextureShader.prototype);
  ParticleShader.prototype.constructor = ParticleShader;
  module.exports = ParticleShader;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a9", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function ParticleBuffer(gl, properties, dynamicPropertyFlags, size) {
    this.gl = gl;
    this.vertSize = 2;
    this.vertByteSize = this.vertSize * 4;
    this.size = size;
    this.dynamicProperties = [];
    this.staticProperties = [];
    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];
      if (dynamicPropertyFlags[i]) {
        this.dynamicProperties.push(property);
      } else {
        this.staticProperties.push(property);
      }
    }
    this.staticStride = 0;
    this.staticBuffer = null;
    this.staticData = null;
    this.dynamicStride = 0;
    this.dynamicBuffer = null;
    this.dynamicData = null;
    this.initBuffers();
  }
  ParticleBuffer.prototype.constructor = ParticleBuffer;
  module.exports = ParticleBuffer;
  ParticleBuffer.prototype.initBuffers = function() {
    var gl = this.gl;
    var i;
    var property;
    var dynamicOffset = 0;
    this.dynamicStride = 0;
    for (i = 0; i < this.dynamicProperties.length; i++) {
      property = this.dynamicProperties[i];
      property.offset = dynamicOffset;
      dynamicOffset += property.size;
      this.dynamicStride += property.size;
    }
    this.dynamicData = new Float32Array(this.size * this.dynamicStride * 4);
    this.dynamicBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.dynamicBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.dynamicData, gl.DYNAMIC_DRAW);
    var staticOffset = 0;
    this.staticStride = 0;
    for (i = 0; i < this.staticProperties.length; i++) {
      property = this.staticProperties[i];
      property.offset = staticOffset;
      staticOffset += property.size;
      this.staticStride += property.size;
    }
    this.staticData = new Float32Array(this.size * this.staticStride * 4);
    this.staticBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.staticBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.staticData, gl.DYNAMIC_DRAW);
  };
  ParticleBuffer.prototype.uploadDynamic = function(children, startIndex, amount) {
    var gl = this.gl;
    for (var i = 0; i < this.dynamicProperties.length; i++) {
      var property = this.dynamicProperties[i];
      property.uploadFunction(children, startIndex, amount, this.dynamicData, this.dynamicStride, property.offset);
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, this.dynamicBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.dynamicData);
  };
  ParticleBuffer.prototype.uploadStatic = function(children, startIndex, amount) {
    var gl = this.gl;
    for (var i = 0; i < this.staticProperties.length; i++) {
      var property = this.staticProperties[i];
      property.uploadFunction(children, startIndex, amount, this.staticData, this.staticStride, property.offset);
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, this.staticBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.staticData);
  };
  ParticleBuffer.prototype.bind = function() {
    var gl = this.gl;
    var i,
        property;
    gl.bindBuffer(gl.ARRAY_BUFFER, this.dynamicBuffer);
    for (i = 0; i < this.dynamicProperties.length; i++) {
      property = this.dynamicProperties[i];
      gl.vertexAttribPointer(property.attribute, property.size, gl.FLOAT, false, this.dynamicStride * 4, property.offset * 4);
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, this.staticBuffer);
    for (i = 0; i < this.staticProperties.length; i++) {
      property = this.staticProperties[i];
      gl.vertexAttribPointer(property.attribute, property.size, gl.FLOAT, false, this.staticStride * 4, property.offset * 4);
    }
  };
  ParticleBuffer.prototype.destroy = function() {
    this.dynamicProperties = null;
    this.dynamicData = null;
    this.gl.deleteBuffer(this.dynamicBuffer);
    this.staticProperties = null;
    this.staticData = null;
    this.gl.deleteBuffer(this.staticBuffer);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("aa", ["a5", "a6", "a7", "a9", "ab"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ObjectRenderer = $__require('a5'),
      WebGLRenderer = $__require('a6'),
      ParticleShader = $__require('a7'),
      ParticleBuffer = $__require('a9'),
      math = $__require('ab');
  function ParticleRenderer(renderer) {
    ObjectRenderer.call(this, renderer);
    var numIndices = 98304;
    this.indices = new Uint16Array(numIndices);
    for (var i = 0,
        j = 0; i < numIndices; i += 6, j += 4) {
      this.indices[i + 0] = j + 0;
      this.indices[i + 1] = j + 1;
      this.indices[i + 2] = j + 2;
      this.indices[i + 3] = j + 0;
      this.indices[i + 4] = j + 2;
      this.indices[i + 5] = j + 3;
    }
    this.shader = null;
    this.indexBuffer = null;
    this.properties = null;
    this.tempMatrix = new math.Matrix();
  }
  ParticleRenderer.prototype = Object.create(ObjectRenderer.prototype);
  ParticleRenderer.prototype.constructor = ParticleRenderer;
  module.exports = ParticleRenderer;
  WebGLRenderer.registerPlugin('particle', ParticleRenderer);
  ParticleRenderer.prototype.onContextChange = function() {
    var gl = this.renderer.gl;
    this.shader = new ParticleShader(this.renderer.shaderManager);
    this.indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);
    this.properties = [{
      attribute: this.shader.attributes.aVertexPosition,
      size: 2,
      uploadFunction: this.uploadVertices,
      offset: 0
    }, {
      attribute: this.shader.attributes.aPositionCoord,
      size: 2,
      uploadFunction: this.uploadPosition,
      offset: 0
    }, {
      attribute: this.shader.attributes.aRotation,
      size: 1,
      uploadFunction: this.uploadRotation,
      offset: 0
    }, {
      attribute: this.shader.attributes.aTextureCoord,
      size: 2,
      uploadFunction: this.uploadUvs,
      offset: 0
    }, {
      attribute: this.shader.attributes.aColor,
      size: 1,
      uploadFunction: this.uploadAlpha,
      offset: 0
    }];
  };
  ParticleRenderer.prototype.start = function() {
    var gl = this.renderer.gl;
    gl.activeTexture(gl.TEXTURE0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    var shader = this.shader;
    this.renderer.shaderManager.setShader(shader);
  };
  ParticleRenderer.prototype.render = function(container) {
    var children = container.children,
        totalChildren = children.length,
        maxSize = container._maxSize,
        batchSize = container._batchSize;
    if (totalChildren === 0) {
      return;
    } else if (totalChildren > maxSize) {
      totalChildren = maxSize;
    }
    if (!container._buffers) {
      container._buffers = this.generateBuffers(container);
    }
    this.renderer.blendModeManager.setBlendMode(container.blendMode);
    var gl = this.renderer.gl;
    var m = container.worldTransform.copy(this.tempMatrix);
    m.prepend(this.renderer.currentRenderTarget.projectionMatrix);
    gl.uniformMatrix3fv(this.shader.uniforms.projectionMatrix._location, false, m.toArray(true));
    gl.uniform1f(this.shader.uniforms.uAlpha._location, container.worldAlpha);
    var baseTexture = children[0]._texture.baseTexture;
    if (!baseTexture._glTextures[gl.id]) {
      if (!this.renderer.updateTexture(baseTexture)) {
        return;
      }
      if (!container._properties[0] || !container._properties[3]) {
        container._bufferToUpdate = 0;
      }
    } else {
      gl.bindTexture(gl.TEXTURE_2D, baseTexture._glTextures[gl.id]);
    }
    for (var i = 0,
        j = 0; i < totalChildren; i += batchSize, j += 1) {
      var amount = (totalChildren - i);
      if (amount > batchSize) {
        amount = batchSize;
      }
      var buffer = container._buffers[j];
      buffer.uploadDynamic(children, i, amount);
      if (container._bufferToUpdate === j) {
        buffer.uploadStatic(children, i, amount);
        container._bufferToUpdate = j + 1;
      }
      buffer.bind(this.shader);
      gl.drawElements(gl.TRIANGLES, amount * 6, gl.UNSIGNED_SHORT, 0);
      this.renderer.drawCount++;
    }
  };
  ParticleRenderer.prototype.generateBuffers = function(container) {
    var gl = this.renderer.gl,
        buffers = [],
        size = container._maxSize,
        batchSize = container._batchSize,
        dynamicPropertyFlags = container._properties,
        i;
    for (i = 0; i < size; i += batchSize) {
      buffers.push(new ParticleBuffer(gl, this.properties, dynamicPropertyFlags, batchSize));
    }
    return buffers;
  };
  ParticleRenderer.prototype.uploadVertices = function(children, startIndex, amount, array, stride, offset) {
    var sprite,
        texture,
        trim,
        sx,
        sy,
        w0,
        w1,
        h0,
        h1;
    for (var i = 0; i < amount; i++) {
      sprite = children[startIndex + i];
      texture = sprite._texture;
      sx = sprite.scale.x;
      sy = sprite.scale.y;
      if (texture.trim) {
        trim = texture.trim;
        w1 = trim.x - sprite.anchor.x * trim.width;
        w0 = w1 + texture.crop.width;
        h1 = trim.y - sprite.anchor.y * trim.height;
        h0 = h1 + texture.crop.height;
      } else {
        w0 = (texture._frame.width) * (1 - sprite.anchor.x);
        w1 = (texture._frame.width) * -sprite.anchor.x;
        h0 = texture._frame.height * (1 - sprite.anchor.y);
        h1 = texture._frame.height * -sprite.anchor.y;
      }
      array[offset] = w1 * sx;
      array[offset + 1] = h1 * sy;
      array[offset + stride] = w0 * sx;
      array[offset + stride + 1] = h1 * sy;
      array[offset + stride * 2] = w0 * sx;
      array[offset + stride * 2 + 1] = h0 * sy;
      array[offset + stride * 3] = w1 * sx;
      array[offset + stride * 3 + 1] = h0 * sy;
      offset += stride * 4;
    }
  };
  ParticleRenderer.prototype.uploadPosition = function(children, startIndex, amount, array, stride, offset) {
    for (var i = 0; i < amount; i++) {
      var spritePosition = children[startIndex + i].position;
      array[offset] = spritePosition.x;
      array[offset + 1] = spritePosition.y;
      array[offset + stride] = spritePosition.x;
      array[offset + stride + 1] = spritePosition.y;
      array[offset + stride * 2] = spritePosition.x;
      array[offset + stride * 2 + 1] = spritePosition.y;
      array[offset + stride * 3] = spritePosition.x;
      array[offset + stride * 3 + 1] = spritePosition.y;
      offset += stride * 4;
    }
  };
  ParticleRenderer.prototype.uploadRotation = function(children, startIndex, amount, array, stride, offset) {
    for (var i = 0; i < amount; i++) {
      var spriteRotation = children[startIndex + i].rotation;
      array[offset] = spriteRotation;
      array[offset + stride] = spriteRotation;
      array[offset + stride * 2] = spriteRotation;
      array[offset + stride * 3] = spriteRotation;
      offset += stride * 4;
    }
  };
  ParticleRenderer.prototype.uploadUvs = function(children, startIndex, amount, array, stride, offset) {
    for (var i = 0; i < amount; i++) {
      var textureUvs = children[startIndex + i]._texture._uvs;
      if (textureUvs) {
        array[offset] = textureUvs.x0;
        array[offset + 1] = textureUvs.y0;
        array[offset + stride] = textureUvs.x1;
        array[offset + stride + 1] = textureUvs.y1;
        array[offset + stride * 2] = textureUvs.x2;
        array[offset + stride * 2 + 1] = textureUvs.y2;
        array[offset + stride * 3] = textureUvs.x3;
        array[offset + stride * 3 + 1] = textureUvs.y3;
        offset += stride * 4;
      } else {
        array[offset] = 0;
        array[offset + 1] = 0;
        array[offset + stride] = 0;
        array[offset + stride + 1] = 0;
        array[offset + stride * 2] = 0;
        array[offset + stride * 2 + 1] = 0;
        array[offset + stride * 3] = 0;
        array[offset + stride * 3 + 1] = 0;
        offset += stride * 4;
      }
    }
  };
  ParticleRenderer.prototype.uploadAlpha = function(children, startIndex, amount, array, stride, offset) {
    for (var i = 0; i < amount; i++) {
      var spriteAlpha = children[startIndex + i].alpha;
      array[offset] = spriteAlpha;
      array[offset + stride] = spriteAlpha;
      array[offset + stride * 2] = spriteAlpha;
      array[offset + stride * 3] = spriteAlpha;
      offset += stride * 4;
    }
  };
  ParticleRenderer.prototype.destroy = function() {
    if (this.renderer.gl) {
      this.renderer.gl.deleteBuffer(this.indexBuffer);
    }
    ObjectRenderer.prototype.destroy.apply(this, arguments);
    this.shader.destroy();
    this.indices = null;
    this.tempMatrix = null;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("82", ["ac"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var utils = $__require('ac');
  var CanvasTinter = {};
  module.exports = CanvasTinter;
  CanvasTinter.getTintedTexture = function(sprite, color) {
    var texture = sprite.texture;
    color = CanvasTinter.roundColor(color);
    var stringColor = '#' + ('00000' + (color | 0).toString(16)).substr(-6);
    texture.tintCache = texture.tintCache || {};
    if (texture.tintCache[stringColor]) {
      return texture.tintCache[stringColor];
    }
    var canvas = CanvasTinter.canvas || document.createElement('canvas');
    CanvasTinter.tintMethod(texture, color, canvas);
    if (CanvasTinter.convertTintToImage) {
      var tintImage = new Image();
      tintImage.src = canvas.toDataURL();
      texture.tintCache[stringColor] = tintImage;
    } else {
      texture.tintCache[stringColor] = canvas;
      CanvasTinter.canvas = null;
    }
    return canvas;
  };
  CanvasTinter.tintWithMultiply = function(texture, color, canvas) {
    var context = canvas.getContext('2d');
    var resolution = texture.baseTexture.resolution;
    var crop = texture.crop.clone();
    crop.x *= resolution;
    crop.y *= resolution;
    crop.width *= resolution;
    crop.height *= resolution;
    canvas.width = crop.width;
    canvas.height = crop.height;
    context.fillStyle = '#' + ('00000' + (color | 0).toString(16)).substr(-6);
    context.fillRect(0, 0, crop.width, crop.height);
    context.globalCompositeOperation = 'multiply';
    context.drawImage(texture.baseTexture.source, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height);
    context.globalCompositeOperation = 'destination-atop';
    context.drawImage(texture.baseTexture.source, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height);
  };
  CanvasTinter.tintWithOverlay = function(texture, color, canvas) {
    var context = canvas.getContext('2d');
    var resolution = texture.baseTexture.resolution;
    var crop = texture.crop.clone();
    crop.x *= resolution;
    crop.y *= resolution;
    crop.width *= resolution;
    crop.height *= resolution;
    canvas.width = crop.width;
    canvas.height = crop.height;
    context.globalCompositeOperation = 'copy';
    context.fillStyle = '#' + ('00000' + (color | 0).toString(16)).substr(-6);
    context.fillRect(0, 0, crop.width, crop.height);
    context.globalCompositeOperation = 'destination-atop';
    context.drawImage(texture.baseTexture.source, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height);
  };
  CanvasTinter.tintWithPerPixel = function(texture, color, canvas) {
    var context = canvas.getContext('2d');
    var resolution = texture.baseTexture.resolution;
    var crop = texture.crop.clone();
    crop.x *= resolution;
    crop.y *= resolution;
    crop.width *= resolution;
    crop.height *= resolution;
    canvas.width = crop.width;
    canvas.height = crop.height;
    context.globalCompositeOperation = 'copy';
    context.drawImage(texture.baseTexture.source, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height);
    var rgbValues = utils.hex2rgb(color);
    var r = rgbValues[0],
        g = rgbValues[1],
        b = rgbValues[2];
    var pixelData = context.getImageData(0, 0, crop.width, crop.height);
    var pixels = pixelData.data;
    for (var i = 0; i < pixels.length; i += 4) {
      pixels[i + 0] *= r;
      pixels[i + 1] *= g;
      pixels[i + 2] *= b;
    }
    context.putImageData(pixelData, 0, 0);
  };
  CanvasTinter.roundColor = function(color) {
    var step = CanvasTinter.cacheStepsPerColorChannel;
    var rgbValues = utils.hex2rgb(color);
    rgbValues[0] = Math.min(255, (rgbValues[0] / step) * step);
    rgbValues[1] = Math.min(255, (rgbValues[1] / step) * step);
    rgbValues[2] = Math.min(255, (rgbValues[2] / step) * step);
    return utils.rgb2hex(rgbValues);
  };
  CanvasTinter.cacheStepsPerColorChannel = 8;
  CanvasTinter.convertTintToImage = false;
  CanvasTinter.canUseMultiply = utils.canUseNewCanvasBlendModes();
  CanvasTinter.tintMethod = CanvasTinter.canUseMultiply ? CanvasTinter.tintWithMultiply : CanvasTinter.tintWithPerPixel;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("ad", ["ab", "ae", "a3", "82", "ac", "a0"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var math = $__require('ab'),
      Texture = $__require('ae'),
      Container = $__require('a3'),
      CanvasTinter = $__require('82'),
      utils = $__require('ac'),
      CONST = $__require('a0'),
      tempPoint = new math.Point();
  function Sprite(texture) {
    Container.call(this);
    this.anchor = new math.Point();
    this._texture = null;
    this._width = 0;
    this._height = 0;
    this.tint = 0xFFFFFF;
    this.blendMode = CONST.BLEND_MODES.NORMAL;
    this.shader = null;
    this.cachedTint = 0xFFFFFF;
    this.texture = texture || Texture.EMPTY;
  }
  Sprite.prototype = Object.create(Container.prototype);
  Sprite.prototype.constructor = Sprite;
  module.exports = Sprite;
  Object.defineProperties(Sprite.prototype, {
    width: {
      get: function() {
        return Math.abs(this.scale.x) * this.texture._frame.width;
      },
      set: function(value) {
        var sign = utils.sign(this.scale.x) || 1;
        this.scale.x = sign * value / this.texture._frame.width;
        this._width = value;
      }
    },
    height: {
      get: function() {
        return Math.abs(this.scale.y) * this.texture._frame.height;
      },
      set: function(value) {
        var sign = utils.sign(this.scale.y) || 1;
        this.scale.y = sign * value / this.texture._frame.height;
        this._height = value;
      }
    },
    texture: {
      get: function() {
        return this._texture;
      },
      set: function(value) {
        if (this._texture === value) {
          return;
        }
        this._texture = value;
        this.cachedTint = 0xFFFFFF;
        if (value) {
          if (value.baseTexture.hasLoaded) {
            this._onTextureUpdate();
          } else {
            value.once('update', this._onTextureUpdate, this);
          }
        }
      }
    }
  });
  Sprite.prototype._onTextureUpdate = function() {
    if (this._width) {
      this.scale.x = utils.sign(this.scale.x) * this._width / this.texture.frame.width;
    }
    if (this._height) {
      this.scale.y = utils.sign(this.scale.y) * this._height / this.texture.frame.height;
    }
  };
  Sprite.prototype._renderWebGL = function(renderer) {
    renderer.setObjectRenderer(renderer.plugins.sprite);
    renderer.plugins.sprite.render(this);
  };
  Sprite.prototype.getBounds = function(matrix) {
    if (!this._currentBounds) {
      var width = this._texture._frame.width;
      var height = this._texture._frame.height;
      var w0 = width * (1 - this.anchor.x);
      var w1 = width * -this.anchor.x;
      var h0 = height * (1 - this.anchor.y);
      var h1 = height * -this.anchor.y;
      var worldTransform = matrix || this.worldTransform;
      var a = worldTransform.a;
      var b = worldTransform.b;
      var c = worldTransform.c;
      var d = worldTransform.d;
      var tx = worldTransform.tx;
      var ty = worldTransform.ty;
      var minX,
          maxX,
          minY,
          maxY;
      var x1 = a * w1 + c * h1 + tx;
      var y1 = d * h1 + b * w1 + ty;
      var x2 = a * w0 + c * h1 + tx;
      var y2 = d * h1 + b * w0 + ty;
      var x3 = a * w0 + c * h0 + tx;
      var y3 = d * h0 + b * w0 + ty;
      var x4 = a * w1 + c * h0 + tx;
      var y4 = d * h0 + b * w1 + ty;
      minX = x1;
      minX = x2 < minX ? x2 : minX;
      minX = x3 < minX ? x3 : minX;
      minX = x4 < minX ? x4 : minX;
      minY = y1;
      minY = y2 < minY ? y2 : minY;
      minY = y3 < minY ? y3 : minY;
      minY = y4 < minY ? y4 : minY;
      maxX = x1;
      maxX = x2 > maxX ? x2 : maxX;
      maxX = x3 > maxX ? x3 : maxX;
      maxX = x4 > maxX ? x4 : maxX;
      maxY = y1;
      maxY = y2 > maxY ? y2 : maxY;
      maxY = y3 > maxY ? y3 : maxY;
      maxY = y4 > maxY ? y4 : maxY;
      if (this.children.length) {
        var childBounds = this.containerGetBounds();
        w0 = childBounds.x;
        w1 = childBounds.x + childBounds.width;
        h0 = childBounds.y;
        h1 = childBounds.y + childBounds.height;
        minX = (minX < w0) ? minX : w0;
        minY = (minY < h0) ? minY : h0;
        maxX = (maxX > w1) ? maxX : w1;
        maxY = (maxY > h1) ? maxY : h1;
      }
      var bounds = this._bounds;
      bounds.x = minX;
      bounds.width = maxX - minX;
      bounds.y = minY;
      bounds.height = maxY - minY;
      this._currentBounds = bounds;
    }
    return this._currentBounds;
  };
  Sprite.prototype.getLocalBounds = function() {
    this._bounds.x = -this._texture._frame.width * this.anchor.x;
    this._bounds.y = -this._texture._frame.height * this.anchor.y;
    this._bounds.width = this._texture._frame.width;
    this._bounds.height = this._texture._frame.height;
    return this._bounds;
  };
  Sprite.prototype.containsPoint = function(point) {
    this.worldTransform.applyInverse(point, tempPoint);
    var width = this._texture._frame.width;
    var height = this._texture._frame.height;
    var x1 = -width * this.anchor.x;
    var y1;
    if (tempPoint.x > x1 && tempPoint.x < x1 + width) {
      y1 = -height * this.anchor.y;
      if (tempPoint.y > y1 && tempPoint.y < y1 + height) {
        return true;
      }
    }
    return false;
  };
  Sprite.prototype._renderCanvas = function(renderer) {
    if (this.texture.crop.width <= 0 || this.texture.crop.height <= 0) {
      return;
    }
    var compositeOperation = renderer.blendModes[this.blendMode];
    if (compositeOperation !== renderer.context.globalCompositeOperation) {
      renderer.context.globalCompositeOperation = compositeOperation;
    }
    if (this.texture.valid) {
      var texture = this._texture,
          wt = this.worldTransform,
          dx,
          dy,
          width,
          height;
      renderer.context.globalAlpha = this.worldAlpha;
      var smoothingEnabled = texture.baseTexture.scaleMode === CONST.SCALE_MODES.LINEAR;
      if (renderer.smoothProperty && renderer.context[renderer.smoothProperty] !== smoothingEnabled) {
        renderer.context[renderer.smoothProperty] = smoothingEnabled;
      }
      if (texture.rotate) {
        width = texture.crop.height;
        height = texture.crop.width;
        dx = (texture.trim) ? texture.trim.y - this.anchor.y * texture.trim.height : this.anchor.y * -texture._frame.height;
        dy = (texture.trim) ? texture.trim.x - this.anchor.x * texture.trim.width : this.anchor.x * -texture._frame.width;
        dx += width;
        wt.tx = dy * wt.a + dx * wt.c + wt.tx;
        wt.ty = dy * wt.b + dx * wt.d + wt.ty;
        var temp = wt.a;
        wt.a = -wt.c;
        wt.c = temp;
        temp = wt.b;
        wt.b = -wt.d;
        wt.d = temp;
        dx = 0;
        dy = 0;
      } else {
        width = texture.crop.width;
        height = texture.crop.height;
        dx = (texture.trim) ? texture.trim.x - this.anchor.x * texture.trim.width : this.anchor.x * -texture._frame.width;
        dy = (texture.trim) ? texture.trim.y - this.anchor.y * texture.trim.height : this.anchor.y * -texture._frame.height;
      }
      if (renderer.roundPixels) {
        renderer.context.setTransform(wt.a, wt.b, wt.c, wt.d, (wt.tx * renderer.resolution) | 0, (wt.ty * renderer.resolution) | 0);
        dx = dx | 0;
        dy = dy | 0;
      } else {
        renderer.context.setTransform(wt.a, wt.b, wt.c, wt.d, wt.tx * renderer.resolution, wt.ty * renderer.resolution);
      }
      var resolution = texture.baseTexture.resolution;
      if (this.tint !== 0xFFFFFF) {
        if (this.cachedTint !== this.tint) {
          this.cachedTint = this.tint;
          this.tintedTexture = CanvasTinter.getTintedTexture(this, this.tint);
        }
        renderer.context.drawImage(this.tintedTexture, 0, 0, width * resolution, height * resolution, dx * renderer.resolution, dy * renderer.resolution, width * renderer.resolution, height * renderer.resolution);
      } else {
        renderer.context.drawImage(texture.baseTexture.source, texture.crop.x * resolution, texture.crop.y * resolution, width * resolution, height * resolution, dx * renderer.resolution, dy * renderer.resolution, width * renderer.resolution, height * renderer.resolution);
      }
    }
  };
  Sprite.prototype.destroy = function(destroyTexture, destroyBaseTexture) {
    Container.prototype.destroy.call(this);
    this.anchor = null;
    if (destroyTexture) {
      this._texture.destroy(destroyBaseTexture);
    }
    this._texture = null;
    this.shader = null;
  };
  Sprite.fromFrame = function(frameId) {
    var texture = utils.TextureCache[frameId];
    if (!texture) {
      throw new Error('The frameId "' + frameId + '" does not exist in the texture cache');
    }
    return new Sprite(texture);
  };
  Sprite.fromImage = function(imageId, crossorigin, scaleMode) {
    return new Sprite(Texture.fromImage(imageId, crossorigin, scaleMode));
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("af", ["ad", "ae", "ab", "ac", "a0"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Sprite = $__require('ad'),
      Texture = $__require('ae'),
      math = $__require('ab'),
      utils = $__require('ac'),
      CONST = $__require('a0');
  function Text(text, style, resolution) {
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.resolution = resolution || CONST.RESOLUTION;
    this._text = null;
    this._style = null;
    var texture = Texture.fromCanvas(this.canvas);
    texture.trim = new math.Rectangle();
    Sprite.call(this, texture);
    this.text = text;
    this.style = style;
  }
  Text.prototype = Object.create(Sprite.prototype);
  Text.prototype.constructor = Text;
  module.exports = Text;
  Text.fontPropertiesCache = {};
  Text.fontPropertiesCanvas = document.createElement('canvas');
  Text.fontPropertiesContext = Text.fontPropertiesCanvas.getContext('2d');
  Object.defineProperties(Text.prototype, {
    width: {
      get: function() {
        if (this.dirty) {
          this.updateText();
        }
        return this.scale.x * this._texture._frame.width;
      },
      set: function(value) {
        this.scale.x = value / this._texture._frame.width;
        this._width = value;
      }
    },
    height: {
      get: function() {
        if (this.dirty) {
          this.updateText();
        }
        return this.scale.y * this._texture._frame.height;
      },
      set: function(value) {
        this.scale.y = value / this._texture._frame.height;
        this._height = value;
      }
    },
    style: {
      get: function() {
        return this._style;
      },
      set: function(style) {
        style = style || {};
        if (typeof style.fill === 'number') {
          style.fill = utils.hex2string(style.fill);
        }
        if (typeof style.stroke === 'number') {
          style.stroke = utils.hex2string(style.stroke);
        }
        if (typeof style.dropShadowColor === 'number') {
          style.dropShadowColor = utils.hex2string(style.dropShadowColor);
        }
        style.font = style.font || 'bold 20pt Arial';
        style.fill = style.fill || 'black';
        style.align = style.align || 'left';
        style.stroke = style.stroke || 'black';
        style.strokeThickness = style.strokeThickness || 0;
        style.wordWrap = style.wordWrap || false;
        style.wordWrapWidth = style.wordWrapWidth || 100;
        style.dropShadow = style.dropShadow || false;
        style.dropShadowColor = style.dropShadowColor || '#000000';
        style.dropShadowAngle = style.dropShadowAngle !== undefined ? style.dropShadowAngle : Math.PI / 6;
        style.dropShadowDistance = style.dropShadowDistance !== undefined ? style.dropShadowDistance : 5;
        style.dropShadowBlur = style.dropShadowBlur !== undefined ? style.dropShadowBlur : 0;
        style.padding = style.padding || 0;
        style.textBaseline = style.textBaseline || 'alphabetic';
        style.lineJoin = style.lineJoin || 'miter';
        style.miterLimit = style.miterLimit || 10;
        this._style = style;
        this.dirty = true;
      }
    },
    text: {
      get: function() {
        return this._text;
      },
      set: function(text) {
        text = text.toString() || ' ';
        if (this._text === text) {
          return;
        }
        this._text = text;
        this.dirty = true;
      }
    }
  });
  Text.prototype.updateText = function() {
    var style = this._style;
    this.context.font = style.font;
    var outputText = style.wordWrap ? this.wordWrap(this._text) : this._text;
    var lines = outputText.split(/(?:\r\n|\r|\n)/);
    var lineWidths = new Array(lines.length);
    var maxLineWidth = 0;
    var fontProperties = this.determineFontProperties(style.font);
    for (var i = 0; i < lines.length; i++) {
      var lineWidth = this.context.measureText(lines[i]).width;
      lineWidths[i] = lineWidth;
      maxLineWidth = Math.max(maxLineWidth, lineWidth);
    }
    var width = maxLineWidth + style.strokeThickness;
    if (style.dropShadow) {
      width += style.dropShadowDistance;
    }
    this.canvas.width = (width + this.context.lineWidth) * this.resolution;
    var lineHeight = this.style.lineHeight || fontProperties.fontSize + style.strokeThickness;
    var height = lineHeight * lines.length;
    if (style.dropShadow) {
      height += style.dropShadowDistance;
    }
    this.canvas.height = (height + this._style.padding * 2) * this.resolution;
    this.context.scale(this.resolution, this.resolution);
    if (navigator.isCocoonJS) {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    this.context.font = style.font;
    this.context.strokeStyle = style.stroke;
    this.context.lineWidth = style.strokeThickness;
    this.context.textBaseline = style.textBaseline;
    this.context.lineJoin = style.lineJoin;
    this.context.miterLimit = style.miterLimit;
    var linePositionX;
    var linePositionY;
    if (style.dropShadow) {
      if (style.dropShadowBlur > 0) {
        this.context.shadowColor = style.dropShadowColor;
        this.context.shadowBlur = style.dropShadowBlur;
      } else {
        this.context.fillStyle = style.dropShadowColor;
      }
      var xShadowOffset = Math.cos(style.dropShadowAngle) * style.dropShadowDistance;
      var yShadowOffset = Math.sin(style.dropShadowAngle) * style.dropShadowDistance;
      for (i = 0; i < lines.length; i++) {
        linePositionX = style.strokeThickness / 2;
        linePositionY = (style.strokeThickness / 2 + i * lineHeight) + fontProperties.ascent;
        if (style.align === 'right') {
          linePositionX += maxLineWidth - lineWidths[i];
        } else if (style.align === 'center') {
          linePositionX += (maxLineWidth - lineWidths[i]) / 2;
        }
        if (style.fill) {
          this.context.fillText(lines[i], linePositionX + xShadowOffset, linePositionY + yShadowOffset + this._style.padding);
        }
      }
    }
    this.context.fillStyle = style.fill;
    for (i = 0; i < lines.length; i++) {
      linePositionX = style.strokeThickness / 2;
      linePositionY = (style.strokeThickness / 2 + i * lineHeight) + fontProperties.ascent;
      if (style.align === 'right') {
        linePositionX += maxLineWidth - lineWidths[i];
      } else if (style.align === 'center') {
        linePositionX += (maxLineWidth - lineWidths[i]) / 2;
      }
      if (style.stroke && style.strokeThickness) {
        this.context.strokeText(lines[i], linePositionX, linePositionY + this._style.padding);
      }
      if (style.fill) {
        this.context.fillText(lines[i], linePositionX, linePositionY + this._style.padding);
      }
    }
    this.updateTexture();
  };
  Text.prototype.updateTexture = function() {
    var texture = this._texture;
    texture.baseTexture.hasLoaded = true;
    texture.baseTexture.resolution = this.resolution;
    texture.baseTexture.width = this.canvas.width / this.resolution;
    texture.baseTexture.height = this.canvas.height / this.resolution;
    texture.crop.width = texture._frame.width = this.canvas.width / this.resolution;
    texture.crop.height = texture._frame.height = this.canvas.height / this.resolution;
    texture.trim.x = 0;
    texture.trim.y = -this._style.padding;
    texture.trim.width = texture._frame.width;
    texture.trim.height = texture._frame.height - this._style.padding * 2;
    this._width = this.canvas.width / this.resolution;
    this._height = this.canvas.height / this.resolution;
    texture.baseTexture.emit('update', texture.baseTexture);
    this.dirty = false;
  };
  Text.prototype.renderWebGL = function(renderer) {
    if (this.dirty) {
      this.updateText();
    }
    Sprite.prototype.renderWebGL.call(this, renderer);
  };
  Text.prototype._renderCanvas = function(renderer) {
    if (this.dirty) {
      this.updateText();
    }
    Sprite.prototype._renderCanvas.call(this, renderer);
  };
  Text.prototype.determineFontProperties = function(fontStyle) {
    var properties = Text.fontPropertiesCache[fontStyle];
    if (!properties) {
      properties = {};
      var canvas = Text.fontPropertiesCanvas;
      var context = Text.fontPropertiesContext;
      context.font = fontStyle;
      var width = Math.ceil(context.measureText('|MÉq').width);
      var baseline = Math.ceil(context.measureText('M').width);
      var height = 2 * baseline;
      baseline = baseline * 1.4 | 0;
      canvas.width = width;
      canvas.height = height;
      context.fillStyle = '#f00';
      context.fillRect(0, 0, width, height);
      context.font = fontStyle;
      context.textBaseline = 'alphabetic';
      context.fillStyle = '#000';
      context.fillText('|MÉq', 0, baseline);
      var imagedata = context.getImageData(0, 0, width, height).data;
      var pixels = imagedata.length;
      var line = width * 4;
      var i,
          j;
      var idx = 0;
      var stop = false;
      for (i = 0; i < baseline; i++) {
        for (j = 0; j < line; j += 4) {
          if (imagedata[idx + j] !== 255) {
            stop = true;
            break;
          }
        }
        if (!stop) {
          idx += line;
        } else {
          break;
        }
      }
      properties.ascent = baseline - i;
      idx = pixels - line;
      stop = false;
      for (i = height; i > baseline; i--) {
        for (j = 0; j < line; j += 4) {
          if (imagedata[idx + j] !== 255) {
            stop = true;
            break;
          }
        }
        if (!stop) {
          idx -= line;
        } else {
          break;
        }
      }
      properties.descent = i - baseline;
      properties.fontSize = properties.ascent + properties.descent;
      Text.fontPropertiesCache[fontStyle] = properties;
    }
    return properties;
  };
  Text.prototype.wordWrap = function(text) {
    var result = '';
    var lines = text.split('\n');
    var wordWrapWidth = this._style.wordWrapWidth;
    for (var i = 0; i < lines.length; i++) {
      var spaceLeft = wordWrapWidth;
      var words = lines[i].split(' ');
      for (var j = 0; j < words.length; j++) {
        var wordWidth = this.context.measureText(words[j]).width;
        var wordWidthWithSpace = wordWidth + this.context.measureText(' ').width;
        if (j === 0 || wordWidthWithSpace > spaceLeft) {
          if (j > 0) {
            result += '\n';
          }
          result += words[j];
          spaceLeft = wordWrapWidth - wordWidth;
        } else {
          spaceLeft -= wordWidthWithSpace;
          result += ' ' + words[j];
        }
      }
      if (i < lines.length - 1) {
        result += '\n';
      }
    }
    return result;
  };
  Text.prototype.getBounds = function(matrix) {
    if (this.dirty) {
      this.updateText();
    }
    return Sprite.prototype.getBounds.call(this, matrix);
  };
  Text.prototype.destroy = function(destroyBaseTexture) {
    this.context = null;
    this.canvas = null;
    this._style = null;
    this._texture.destroy(destroyBaseTexture === undefined ? true : destroyBaseTexture);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b0", ["ab", "b1", "65", "a0", "25"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var math = $__require('ab'),
        RenderTexture = $__require('b1'),
        EventEmitter = $__require('65'),
        CONST = $__require('a0'),
        _tempMatrix = new math.Matrix(),
        _tempDisplayObjectParent = {
          worldTransform: new math.Matrix(),
          worldAlpha: 1,
          children: []
        };
    function DisplayObject() {
      EventEmitter.call(this);
      this.position = new math.Point();
      this.scale = new math.Point(1, 1);
      this.pivot = new math.Point(0, 0);
      this.skew = new math.Point(0, 0);
      this.rotation = 0;
      this.alpha = 1;
      this.visible = true;
      this.renderable = true;
      this.parent = null;
      this.worldAlpha = 1;
      this.worldTransform = new math.Matrix();
      this.filterArea = null;
      this._sr = 0;
      this._cr = 1;
      this._bounds = new math.Rectangle(0, 0, 1, 1);
      this._currentBounds = null;
      this._mask = null;
    }
    DisplayObject.prototype = Object.create(EventEmitter.prototype);
    DisplayObject.prototype.constructor = DisplayObject;
    module.exports = DisplayObject;
    Object.defineProperties(DisplayObject.prototype, {
      x: {
        get: function() {
          return this.position.x;
        },
        set: function(value) {
          this.position.x = value;
        }
      },
      y: {
        get: function() {
          return this.position.y;
        },
        set: function(value) {
          this.position.y = value;
        }
      },
      worldVisible: {get: function() {
          var item = this;
          do {
            if (!item.visible) {
              return false;
            }
            item = item.parent;
          } while (item);
          return true;
        }},
      mask: {
        get: function() {
          return this._mask;
        },
        set: function(value) {
          if (this._mask) {
            this._mask.renderable = true;
          }
          this._mask = value;
          if (this._mask) {
            this._mask.renderable = false;
          }
        }
      },
      filters: {
        get: function() {
          return this._filters && this._filters.slice();
        },
        set: function(value) {
          this._filters = value && value.slice();
        }
      }
    });
    DisplayObject.prototype.updateTransform = function() {
      var pt = this.parent.worldTransform;
      var wt = this.worldTransform;
      var a,
          b,
          c,
          d,
          tx,
          ty;
      if (this.skew.x || this.skew.y) {
        _tempMatrix.setTransform(this.position.x, this.position.y, this.pivot.x, this.pivot.y, this.scale.x, this.scale.y, this.rotation, this.skew.x, this.skew.y);
        wt.a = _tempMatrix.a * pt.a + _tempMatrix.b * pt.c;
        wt.b = _tempMatrix.a * pt.b + _tempMatrix.b * pt.d;
        wt.c = _tempMatrix.c * pt.a + _tempMatrix.d * pt.c;
        wt.d = _tempMatrix.c * pt.b + _tempMatrix.d * pt.d;
        wt.tx = _tempMatrix.tx * pt.a + _tempMatrix.ty * pt.c + pt.tx;
        wt.ty = _tempMatrix.tx * pt.b + _tempMatrix.ty * pt.d + pt.ty;
      } else {
        if (this.rotation % CONST.PI_2) {
          if (this.rotation !== this.rotationCache) {
            this.rotationCache = this.rotation;
            this._sr = Math.sin(this.rotation);
            this._cr = Math.cos(this.rotation);
          }
          a = this._cr * this.scale.x;
          b = this._sr * this.scale.x;
          c = -this._sr * this.scale.y;
          d = this._cr * this.scale.y;
          tx = this.position.x;
          ty = this.position.y;
          if (this.pivot.x || this.pivot.y) {
            tx -= this.pivot.x * a + this.pivot.y * c;
            ty -= this.pivot.x * b + this.pivot.y * d;
          }
          wt.a = a * pt.a + b * pt.c;
          wt.b = a * pt.b + b * pt.d;
          wt.c = c * pt.a + d * pt.c;
          wt.d = c * pt.b + d * pt.d;
          wt.tx = tx * pt.a + ty * pt.c + pt.tx;
          wt.ty = tx * pt.b + ty * pt.d + pt.ty;
        } else {
          a = this.scale.x;
          d = this.scale.y;
          tx = this.position.x - this.pivot.x * a;
          ty = this.position.y - this.pivot.y * d;
          wt.a = a * pt.a;
          wt.b = a * pt.b;
          wt.c = d * pt.c;
          wt.d = d * pt.d;
          wt.tx = tx * pt.a + ty * pt.c + pt.tx;
          wt.ty = tx * pt.b + ty * pt.d + pt.ty;
        }
      }
      this.worldAlpha = this.alpha * this.parent.worldAlpha;
      this._currentBounds = null;
    };
    DisplayObject.prototype.displayObjectUpdateTransform = DisplayObject.prototype.updateTransform;
    DisplayObject.prototype.getBounds = function(matrix) {
      return math.Rectangle.EMPTY;
    };
    DisplayObject.prototype.getLocalBounds = function() {
      return this.getBounds(math.Matrix.IDENTITY);
    };
    DisplayObject.prototype.toGlobal = function(position) {
      if (!this.parent) {
        this.parent = _tempDisplayObjectParent;
        this.displayObjectUpdateTransform();
        this.parent = null;
      } else {
        this.displayObjectUpdateTransform();
      }
      return this.worldTransform.apply(position);
    };
    DisplayObject.prototype.toLocal = function(position, from, point) {
      if (from) {
        position = from.toGlobal(position);
      }
      if (!this.parent) {
        this.parent = _tempDisplayObjectParent;
        this.displayObjectUpdateTransform();
        this.parent = null;
      } else {
        this.displayObjectUpdateTransform();
      }
      return this.worldTransform.applyInverse(position, point);
    };
    DisplayObject.prototype.renderWebGL = function(renderer) {};
    DisplayObject.prototype.renderCanvas = function(renderer) {};
    DisplayObject.prototype.generateTexture = function(renderer, scaleMode, resolution) {
      var bounds = this.getLocalBounds();
      var renderTexture = new RenderTexture(renderer, bounds.width | 0, bounds.height | 0, scaleMode, resolution);
      _tempMatrix.tx = -bounds.x;
      _tempMatrix.ty = -bounds.y;
      renderTexture.render(this, _tempMatrix);
      return renderTexture;
    };
    DisplayObject.prototype.setParent = function(container) {
      if (!container || !container.addChild) {
        throw new Error('setParent: Argument must be a Container');
      }
      container.addChild(this);
      return container;
    };
    DisplayObject.prototype.setTransform = function(x, y, scaleX, scaleY, rotation, skewX, skewY, pivotX, pivotY) {
      this.position.x = x || 0;
      this.position.y = y || 0;
      this.scale.x = !scaleX ? 1 : scaleX;
      this.scale.y = !scaleY ? 1 : scaleY;
      this.rotation = rotation || 0;
      this.skew.x = skewX || 0;
      this.skew.y = skewY || 0;
      this.pivot.x = pivotX || 0;
      this.pivot.y = pivotY || 0;
      return this;
    };
    DisplayObject.prototype.destroy = function() {
      this.position = null;
      this.scale = null;
      this.pivot = null;
      this.skew = null;
      this.parent = null;
      this._bounds = null;
      this._currentBounds = null;
      this._mask = null;
      this.worldTransform = null;
      this.filterArea = null;
    };
  })($__require('25'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a3", ["ab", "ac", "b0", "b1"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var math = $__require('ab'),
      utils = $__require('ac'),
      DisplayObject = $__require('b0'),
      RenderTexture = $__require('b1'),
      _tempMatrix = new math.Matrix();
  function Container() {
    DisplayObject.call(this);
    this.children = [];
  }
  Container.prototype = Object.create(DisplayObject.prototype);
  Container.prototype.constructor = Container;
  module.exports = Container;
  Object.defineProperties(Container.prototype, {
    width: {
      get: function() {
        return this.scale.x * this.getLocalBounds().width;
      },
      set: function(value) {
        var width = this.getLocalBounds().width;
        if (width !== 0) {
          this.scale.x = value / width;
        } else {
          this.scale.x = 1;
        }
        this._width = value;
      }
    },
    height: {
      get: function() {
        return this.scale.y * this.getLocalBounds().height;
      },
      set: function(value) {
        var height = this.getLocalBounds().height;
        if (height !== 0) {
          this.scale.y = value / height;
        } else {
          this.scale.y = 1;
        }
        this._height = value;
      }
    }
  });
  Container.prototype.onChildrenChange = function() {};
  Container.prototype.addChild = function(child) {
    var argumentsLength = arguments.length;
    if (argumentsLength > 1) {
      for (var i = 0; i < argumentsLength; i++) {
        this.addChild(arguments[i]);
      }
    } else {
      if (child.parent) {
        child.parent.removeChild(child);
      }
      child.parent = this;
      this.children.push(child);
      this.onChildrenChange(this.children.length - 1);
      child.emit('added', this);
    }
    return child;
  };
  Container.prototype.addChildAt = function(child, index) {
    if (index >= 0 && index <= this.children.length) {
      if (child.parent) {
        child.parent.removeChild(child);
      }
      child.parent = this;
      this.children.splice(index, 0, child);
      this.onChildrenChange(index);
      child.emit('added', this);
      return child;
    } else {
      throw new Error(child + 'addChildAt: The index ' + index + ' supplied is out of bounds ' + this.children.length);
    }
  };
  Container.prototype.swapChildren = function(child, child2) {
    if (child === child2) {
      return;
    }
    var index1 = this.getChildIndex(child);
    var index2 = this.getChildIndex(child2);
    if (index1 < 0 || index2 < 0) {
      throw new Error('swapChildren: Both the supplied DisplayObjects must be children of the caller.');
    }
    this.children[index1] = child2;
    this.children[index2] = child;
    this.onChildrenChange(index1 < index2 ? index1 : index2);
  };
  Container.prototype.getChildIndex = function(child) {
    var index = this.children.indexOf(child);
    if (index === -1) {
      throw new Error('The supplied DisplayObject must be a child of the caller');
    }
    return index;
  };
  Container.prototype.setChildIndex = function(child, index) {
    if (index < 0 || index >= this.children.length) {
      throw new Error('The supplied index is out of bounds');
    }
    var currentIndex = this.getChildIndex(child);
    utils.removeItems(this.children, currentIndex, 1);
    this.children.splice(index, 0, child);
    this.onChildrenChange(index);
  };
  Container.prototype.getChildAt = function(index) {
    if (index < 0 || index >= this.children.length) {
      throw new Error('getChildAt: Supplied index ' + index + ' does not exist in the child list, or the supplied DisplayObject is not a child of the caller');
    }
    return this.children[index];
  };
  Container.prototype.removeChild = function(child) {
    var argumentsLength = arguments.length;
    if (argumentsLength > 1) {
      for (var i = 0; i < argumentsLength; i++) {
        this.removeChild(arguments[i]);
      }
    } else {
      var index = this.children.indexOf(child);
      if (index === -1) {
        return;
      }
      child.parent = null;
      utils.removeItems(this.children, index, 1);
      this.onChildrenChange(index);
      child.emit('removed', this);
    }
    return child;
  };
  Container.prototype.removeChildAt = function(index) {
    var child = this.getChildAt(index);
    child.parent = null;
    utils.removeItems(this.children, index, 1);
    this.onChildrenChange(index);
    child.emit('removed', this);
    return child;
  };
  Container.prototype.removeChildren = function(beginIndex, endIndex) {
    var begin = beginIndex || 0;
    var end = typeof endIndex === 'number' ? endIndex : this.children.length;
    var range = end - begin;
    var removed,
        i;
    if (range > 0 && range <= end) {
      removed = this.children.splice(begin, range);
      for (i = 0; i < removed.length; ++i) {
        removed[i].parent = null;
      }
      this.onChildrenChange(beginIndex);
      for (i = 0; i < removed.length; ++i) {
        removed[i].emit('removed', this);
      }
      return removed;
    } else if (range === 0 && this.children.length === 0) {
      return [];
    } else {
      throw new RangeError('removeChildren: numeric values are outside the acceptable range.');
    }
  };
  Container.prototype.generateTexture = function(renderer, resolution, scaleMode) {
    var bounds = this.getLocalBounds();
    var renderTexture = new RenderTexture(renderer, bounds.width | 0, bounds.height | 0, scaleMode, resolution);
    _tempMatrix.tx = -bounds.x;
    _tempMatrix.ty = -bounds.y;
    renderTexture.render(this, _tempMatrix);
    return renderTexture;
  };
  Container.prototype.updateTransform = function() {
    if (!this.visible) {
      return;
    }
    this.displayObjectUpdateTransform();
    for (var i = 0,
        j = this.children.length; i < j; ++i) {
      this.children[i].updateTransform();
    }
  };
  Container.prototype.containerUpdateTransform = Container.prototype.updateTransform;
  Container.prototype.getBounds = function() {
    if (!this._currentBounds) {
      if (this.children.length === 0) {
        return math.Rectangle.EMPTY;
      }
      var minX = Infinity;
      var minY = Infinity;
      var maxX = -Infinity;
      var maxY = -Infinity;
      var childBounds;
      var childMaxX;
      var childMaxY;
      var childVisible = false;
      for (var i = 0,
          j = this.children.length; i < j; ++i) {
        var child = this.children[i];
        if (!child.visible) {
          continue;
        }
        childVisible = true;
        childBounds = this.children[i].getBounds();
        minX = minX < childBounds.x ? minX : childBounds.x;
        minY = minY < childBounds.y ? minY : childBounds.y;
        childMaxX = childBounds.width + childBounds.x;
        childMaxY = childBounds.height + childBounds.y;
        maxX = maxX > childMaxX ? maxX : childMaxX;
        maxY = maxY > childMaxY ? maxY : childMaxY;
      }
      if (!childVisible) {
        return math.Rectangle.EMPTY;
      }
      var bounds = this._bounds;
      bounds.x = minX;
      bounds.y = minY;
      bounds.width = maxX - minX;
      bounds.height = maxY - minY;
      this._currentBounds = bounds;
    }
    return this._currentBounds;
  };
  Container.prototype.containerGetBounds = Container.prototype.getBounds;
  Container.prototype.getLocalBounds = function() {
    var matrixCache = this.worldTransform;
    this.worldTransform = math.Matrix.IDENTITY;
    for (var i = 0,
        j = this.children.length; i < j; ++i) {
      this.children[i].updateTransform();
    }
    this.worldTransform = matrixCache;
    this._currentBounds = null;
    return this.getBounds(math.Matrix.IDENTITY);
  };
  Container.prototype.renderWebGL = function(renderer) {
    if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
      return;
    }
    var i,
        j;
    if (this._mask || this._filters) {
      renderer.currentRenderer.flush();
      if (this._filters && this._filters.length) {
        renderer.filterManager.pushFilter(this, this._filters);
      }
      if (this._mask) {
        renderer.maskManager.pushMask(this, this._mask);
      }
      renderer.currentRenderer.start();
      this._renderWebGL(renderer);
      for (i = 0, j = this.children.length; i < j; i++) {
        this.children[i].renderWebGL(renderer);
      }
      renderer.currentRenderer.flush();
      if (this._mask) {
        renderer.maskManager.popMask(this, this._mask);
      }
      if (this._filters) {
        renderer.filterManager.popFilter();
      }
      renderer.currentRenderer.start();
    } else {
      this._renderWebGL(renderer);
      for (i = 0, j = this.children.length; i < j; ++i) {
        this.children[i].renderWebGL(renderer);
      }
    }
  };
  Container.prototype._renderWebGL = function(renderer) {};
  Container.prototype._renderCanvas = function(renderer) {};
  Container.prototype.renderCanvas = function(renderer) {
    if (!this.visible || this.alpha <= 0 || !this.renderable) {
      return;
    }
    if (this._mask) {
      renderer.maskManager.pushMask(this._mask, renderer);
    }
    this._renderCanvas(renderer);
    for (var i = 0,
        j = this.children.length; i < j; ++i) {
      this.children[i].renderCanvas(renderer);
    }
    if (this._mask) {
      renderer.maskManager.popMask(renderer);
    }
  };
  Container.prototype.destroy = function(destroyChildren) {
    DisplayObject.prototype.destroy.call(this);
    if (destroyChildren) {
      for (var i = 0,
          j = this.children.length; i < j; ++i) {
        this.children[i].destroy(destroyChildren);
      }
    }
    this.removeChildren();
    this.children = null;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b2", ["a3", "ae", "b3", "b4", "b5", "ab", "a0"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Container = $__require('a3'),
      Texture = $__require('ae'),
      CanvasBuffer = $__require('b3'),
      CanvasGraphics = $__require('b4'),
      GraphicsData = $__require('b5'),
      math = $__require('ab'),
      CONST = $__require('a0'),
      tempPoint = new math.Point();
  function Graphics() {
    Container.call(this);
    this.fillAlpha = 1;
    this.lineWidth = 0;
    this.lineColor = 0;
    this.graphicsData = [];
    this.tint = 0xFFFFFF;
    this._prevTint = 0xFFFFFF;
    this.blendMode = CONST.BLEND_MODES.NORMAL;
    this.currentPath = null;
    this._webGL = {};
    this.isMask = false;
    this.boundsPadding = 0;
    this._localBounds = new math.Rectangle(0, 0, 1, 1);
    this.dirty = true;
    this.glDirty = false;
    this.boundsDirty = true;
    this.cachedSpriteDirty = false;
  }
  Graphics.prototype = Object.create(Container.prototype);
  Graphics.prototype.constructor = Graphics;
  module.exports = Graphics;
  Graphics.prototype.clone = function() {
    var clone = new Graphics();
    clone.renderable = this.renderable;
    clone.fillAlpha = this.fillAlpha;
    clone.lineWidth = this.lineWidth;
    clone.lineColor = this.lineColor;
    clone.tint = this.tint;
    clone.blendMode = this.blendMode;
    clone.isMask = this.isMask;
    clone.boundsPadding = this.boundsPadding;
    clone.dirty = true;
    clone.glDirty = true;
    clone.cachedSpriteDirty = this.cachedSpriteDirty;
    for (var i = 0; i < this.graphicsData.length; ++i) {
      clone.graphicsData.push(this.graphicsData[i].clone());
    }
    clone.currentPath = clone.graphicsData[clone.graphicsData.length - 1];
    clone.updateLocalBounds();
    return clone;
  };
  Graphics.prototype.lineStyle = function(lineWidth, color, alpha) {
    this.lineWidth = lineWidth || 0;
    this.lineColor = color || 0;
    this.lineAlpha = (alpha === undefined) ? 1 : alpha;
    if (this.currentPath) {
      if (this.currentPath.shape.points.length) {
        var shape = new math.Polygon(this.currentPath.shape.points.slice(-2));
        shape.closed = false;
        this.drawShape(shape);
      } else {
        this.currentPath.lineWidth = this.lineWidth;
        this.currentPath.lineColor = this.lineColor;
        this.currentPath.lineAlpha = this.lineAlpha;
      }
    }
    return this;
  };
  Graphics.prototype.moveTo = function(x, y) {
    var shape = new math.Polygon([x, y]);
    shape.closed = false;
    this.drawShape(shape);
    return this;
  };
  Graphics.prototype.lineTo = function(x, y) {
    this.currentPath.shape.points.push(x, y);
    this.dirty = true;
    return this;
  };
  Graphics.prototype.quadraticCurveTo = function(cpX, cpY, toX, toY) {
    if (this.currentPath) {
      if (this.currentPath.shape.points.length === 0) {
        this.currentPath.shape.points = [0, 0];
      }
    } else {
      this.moveTo(0, 0);
    }
    var xa,
        ya,
        n = 20,
        points = this.currentPath.shape.points;
    if (points.length === 0) {
      this.moveTo(0, 0);
    }
    var fromX = points[points.length - 2];
    var fromY = points[points.length - 1];
    var j = 0;
    for (var i = 1; i <= n; ++i) {
      j = i / n;
      xa = fromX + ((cpX - fromX) * j);
      ya = fromY + ((cpY - fromY) * j);
      points.push(xa + (((cpX + ((toX - cpX) * j)) - xa) * j), ya + (((cpY + ((toY - cpY) * j)) - ya) * j));
    }
    this.dirty = this.boundsDirty = true;
    return this;
  };
  Graphics.prototype.bezierCurveTo = function(cpX, cpY, cpX2, cpY2, toX, toY) {
    if (this.currentPath) {
      if (this.currentPath.shape.points.length === 0) {
        this.currentPath.shape.points = [0, 0];
      }
    } else {
      this.moveTo(0, 0);
    }
    var n = 20,
        dt,
        dt2,
        dt3,
        t2,
        t3,
        points = this.currentPath.shape.points;
    var fromX = points[points.length - 2];
    var fromY = points[points.length - 1];
    var j = 0;
    for (var i = 1; i <= n; ++i) {
      j = i / n;
      dt = (1 - j);
      dt2 = dt * dt;
      dt3 = dt2 * dt;
      t2 = j * j;
      t3 = t2 * j;
      points.push(dt3 * fromX + 3 * dt2 * j * cpX + 3 * dt * t2 * cpX2 + t3 * toX, dt3 * fromY + 3 * dt2 * j * cpY + 3 * dt * t2 * cpY2 + t3 * toY);
    }
    this.dirty = this.boundsDirty = true;
    return this;
  };
  Graphics.prototype.arcTo = function(x1, y1, x2, y2, radius) {
    if (this.currentPath) {
      if (this.currentPath.shape.points.length === 0) {
        this.currentPath.shape.points.push(x1, y1);
      }
    } else {
      this.moveTo(x1, y1);
    }
    var points = this.currentPath.shape.points,
        fromX = points[points.length - 2],
        fromY = points[points.length - 1],
        a1 = fromY - y1,
        b1 = fromX - x1,
        a2 = y2 - y1,
        b2 = x2 - x1,
        mm = Math.abs(a1 * b2 - b1 * a2);
    if (mm < 1.0e-8 || radius === 0) {
      if (points[points.length - 2] !== x1 || points[points.length - 1] !== y1) {
        points.push(x1, y1);
      }
    } else {
      var dd = a1 * a1 + b1 * b1,
          cc = a2 * a2 + b2 * b2,
          tt = a1 * a2 + b1 * b2,
          k1 = radius * Math.sqrt(dd) / mm,
          k2 = radius * Math.sqrt(cc) / mm,
          j1 = k1 * tt / dd,
          j2 = k2 * tt / cc,
          cx = k1 * b2 + k2 * b1,
          cy = k1 * a2 + k2 * a1,
          px = b1 * (k2 + j1),
          py = a1 * (k2 + j1),
          qx = b2 * (k1 + j2),
          qy = a2 * (k1 + j2),
          startAngle = Math.atan2(py - cy, px - cx),
          endAngle = Math.atan2(qy - cy, qx - cx);
      this.arc(cx + x1, cy + y1, radius, startAngle, endAngle, b1 * a2 > b2 * a1);
    }
    this.dirty = this.boundsDirty = true;
    return this;
  };
  Graphics.prototype.arc = function(cx, cy, radius, startAngle, endAngle, anticlockwise) {
    anticlockwise = anticlockwise || false;
    if (startAngle === endAngle) {
      return this;
    }
    if (!anticlockwise && endAngle <= startAngle) {
      endAngle += Math.PI * 2;
    } else if (anticlockwise && startAngle <= endAngle) {
      startAngle += Math.PI * 2;
    }
    var sweep = anticlockwise ? (startAngle - endAngle) * -1 : (endAngle - startAngle);
    var segs = Math.ceil(Math.abs(sweep) / (Math.PI * 2)) * 40;
    if (sweep === 0) {
      return this;
    }
    var startX = cx + Math.cos(startAngle) * radius;
    var startY = cy + Math.sin(startAngle) * radius;
    if (this.currentPath) {
      this.currentPath.shape.points.push(startX, startY);
    } else {
      this.moveTo(startX, startY);
    }
    var points = this.currentPath.shape.points;
    var theta = sweep / (segs * 2);
    var theta2 = theta * 2;
    var cTheta = Math.cos(theta);
    var sTheta = Math.sin(theta);
    var segMinus = segs - 1;
    var remainder = (segMinus % 1) / segMinus;
    for (var i = 0; i <= segMinus; i++) {
      var real = i + remainder * i;
      var angle = ((theta) + startAngle + (theta2 * real));
      var c = Math.cos(angle);
      var s = -Math.sin(angle);
      points.push(((cTheta * c) + (sTheta * s)) * radius + cx, ((cTheta * -s) + (sTheta * c)) * radius + cy);
    }
    this.dirty = this.boundsDirty = true;
    return this;
  };
  Graphics.prototype.beginFill = function(color, alpha) {
    this.filling = true;
    this.fillColor = color || 0;
    this.fillAlpha = (alpha === undefined) ? 1 : alpha;
    if (this.currentPath) {
      if (this.currentPath.shape.points.length <= 2) {
        this.currentPath.fill = this.filling;
        this.currentPath.fillColor = this.fillColor;
        this.currentPath.fillAlpha = this.fillAlpha;
      }
    }
    return this;
  };
  Graphics.prototype.endFill = function() {
    this.filling = false;
    this.fillColor = null;
    this.fillAlpha = 1;
    return this;
  };
  Graphics.prototype.drawRect = function(x, y, width, height) {
    this.drawShape(new math.Rectangle(x, y, width, height));
    return this;
  };
  Graphics.prototype.drawRoundedRect = function(x, y, width, height, radius) {
    this.drawShape(new math.RoundedRectangle(x, y, width, height, radius));
    return this;
  };
  Graphics.prototype.drawCircle = function(x, y, radius) {
    this.drawShape(new math.Circle(x, y, radius));
    return this;
  };
  Graphics.prototype.drawEllipse = function(x, y, width, height) {
    this.drawShape(new math.Ellipse(x, y, width, height));
    return this;
  };
  Graphics.prototype.drawPolygon = function(path) {
    var points = path;
    var closed = true;
    if (points instanceof math.Polygon) {
      closed = points.closed;
      points = points.points;
    }
    if (!Array.isArray(points)) {
      points = new Array(arguments.length);
      for (var i = 0; i < points.length; ++i) {
        points[i] = arguments[i];
      }
    }
    var shape = new math.Polygon(points);
    shape.closed = closed;
    this.drawShape(shape);
    return this;
  };
  Graphics.prototype.clear = function() {
    this.lineWidth = 0;
    this.filling = false;
    this.dirty = true;
    this.clearDirty = true;
    this.graphicsData = [];
    return this;
  };
  Graphics.prototype.generateTexture = function(renderer, resolution, scaleMode) {
    resolution = resolution || 1;
    var bounds = this.getLocalBounds();
    var canvasBuffer = new CanvasBuffer(bounds.width * resolution, bounds.height * resolution);
    var texture = Texture.fromCanvas(canvasBuffer.canvas, scaleMode);
    texture.baseTexture.resolution = resolution;
    canvasBuffer.context.scale(resolution, resolution);
    canvasBuffer.context.translate(-bounds.x, -bounds.y);
    CanvasGraphics.renderGraphics(this, canvasBuffer.context);
    return texture;
  };
  Graphics.prototype._renderWebGL = function(renderer) {
    if (this.glDirty) {
      this.dirty = true;
      this.glDirty = false;
    }
    renderer.setObjectRenderer(renderer.plugins.graphics);
    renderer.plugins.graphics.render(this);
  };
  Graphics.prototype._renderCanvas = function(renderer) {
    if (this.isMask === true) {
      return;
    }
    if (this._prevTint !== this.tint) {
      this.dirty = true;
    }
    var context = renderer.context;
    var transform = this.worldTransform;
    var compositeOperation = renderer.blendModes[this.blendMode];
    if (compositeOperation !== context.globalCompositeOperation) {
      context.globalCompositeOperation = compositeOperation;
    }
    var resolution = renderer.resolution;
    context.setTransform(transform.a * resolution, transform.b * resolution, transform.c * resolution, transform.d * resolution, transform.tx * resolution, transform.ty * resolution);
    CanvasGraphics.renderGraphics(this, context);
  };
  Graphics.prototype.getBounds = function(matrix) {
    if (!this._currentBounds) {
      if (!this.renderable) {
        return math.Rectangle.EMPTY;
      }
      if (this.boundsDirty) {
        this.updateLocalBounds();
        this.glDirty = true;
        this.cachedSpriteDirty = true;
        this.boundsDirty = false;
      }
      var bounds = this._localBounds;
      var w0 = bounds.x;
      var w1 = bounds.width + bounds.x;
      var h0 = bounds.y;
      var h1 = bounds.height + bounds.y;
      var worldTransform = matrix || this.worldTransform;
      var a = worldTransform.a;
      var b = worldTransform.b;
      var c = worldTransform.c;
      var d = worldTransform.d;
      var tx = worldTransform.tx;
      var ty = worldTransform.ty;
      var x1 = a * w1 + c * h1 + tx;
      var y1 = d * h1 + b * w1 + ty;
      var x2 = a * w0 + c * h1 + tx;
      var y2 = d * h1 + b * w0 + ty;
      var x3 = a * w0 + c * h0 + tx;
      var y3 = d * h0 + b * w0 + ty;
      var x4 = a * w1 + c * h0 + tx;
      var y4 = d * h0 + b * w1 + ty;
      var maxX = x1;
      var maxY = y1;
      var minX = x1;
      var minY = y1;
      minX = x2 < minX ? x2 : minX;
      minX = x3 < minX ? x3 : minX;
      minX = x4 < minX ? x4 : minX;
      minY = y2 < minY ? y2 : minY;
      minY = y3 < minY ? y3 : minY;
      minY = y4 < minY ? y4 : minY;
      maxX = x2 > maxX ? x2 : maxX;
      maxX = x3 > maxX ? x3 : maxX;
      maxX = x4 > maxX ? x4 : maxX;
      maxY = y2 > maxY ? y2 : maxY;
      maxY = y3 > maxY ? y3 : maxY;
      maxY = y4 > maxY ? y4 : maxY;
      this._bounds.x = minX;
      this._bounds.width = maxX - minX;
      this._bounds.y = minY;
      this._bounds.height = maxY - minY;
      this._currentBounds = this._bounds;
    }
    return this._currentBounds;
  };
  Graphics.prototype.containsPoint = function(point) {
    this.worldTransform.applyInverse(point, tempPoint);
    var graphicsData = this.graphicsData;
    for (var i = 0; i < graphicsData.length; i++) {
      var data = graphicsData[i];
      if (!data.fill) {
        continue;
      }
      if (data.shape) {
        if (data.shape.contains(tempPoint.x, tempPoint.y)) {
          return true;
        }
      }
    }
    return false;
  };
  Graphics.prototype.updateLocalBounds = function() {
    var minX = Infinity;
    var maxX = -Infinity;
    var minY = Infinity;
    var maxY = -Infinity;
    if (this.graphicsData.length) {
      var shape,
          points,
          x,
          y,
          w,
          h;
      for (var i = 0; i < this.graphicsData.length; i++) {
        var data = this.graphicsData[i];
        var type = data.type;
        var lineWidth = data.lineWidth;
        shape = data.shape;
        if (type === CONST.SHAPES.RECT || type === CONST.SHAPES.RREC) {
          x = shape.x - lineWidth / 2;
          y = shape.y - lineWidth / 2;
          w = shape.width + lineWidth;
          h = shape.height + lineWidth;
          minX = x < minX ? x : minX;
          maxX = x + w > maxX ? x + w : maxX;
          minY = y < minY ? y : minY;
          maxY = y + h > maxY ? y + h : maxY;
        } else if (type === CONST.SHAPES.CIRC) {
          x = shape.x;
          y = shape.y;
          w = shape.radius + lineWidth / 2;
          h = shape.radius + lineWidth / 2;
          minX = x - w < minX ? x - w : minX;
          maxX = x + w > maxX ? x + w : maxX;
          minY = y - h < minY ? y - h : minY;
          maxY = y + h > maxY ? y + h : maxY;
        } else if (type === CONST.SHAPES.ELIP) {
          x = shape.x;
          y = shape.y;
          w = shape.width + lineWidth / 2;
          h = shape.height + lineWidth / 2;
          minX = x - w < minX ? x - w : minX;
          maxX = x + w > maxX ? x + w : maxX;
          minY = y - h < minY ? y - h : minY;
          maxY = y + h > maxY ? y + h : maxY;
        } else {
          points = shape.points;
          for (var j = 0; j < points.length; j += 2) {
            x = points[j];
            y = points[j + 1];
            minX = x - lineWidth < minX ? x - lineWidth : minX;
            maxX = x + lineWidth > maxX ? x + lineWidth : maxX;
            minY = y - lineWidth < minY ? y - lineWidth : minY;
            maxY = y + lineWidth > maxY ? y + lineWidth : maxY;
          }
        }
      }
    } else {
      minX = 0;
      maxX = 0;
      minY = 0;
      maxY = 0;
    }
    var padding = this.boundsPadding;
    this._localBounds.x = minX - padding;
    this._localBounds.width = (maxX - minX) + padding * 2;
    this._localBounds.y = minY - padding;
    this._localBounds.height = (maxY - minY) + padding * 2;
  };
  Graphics.prototype.drawShape = function(shape) {
    if (this.currentPath) {
      if (this.currentPath.shape.points.length <= 2) {
        this.graphicsData.pop();
      }
    }
    this.currentPath = null;
    var data = new GraphicsData(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, shape);
    this.graphicsData.push(data);
    if (data.type === CONST.SHAPES.POLY) {
      data.shape.closed = data.shape.closed || this.filling;
      this.currentPath = data;
    }
    this.dirty = this.boundsDirty = true;
    return data;
  };
  Graphics.prototype.destroy = function() {
    Container.prototype.destroy.apply(this, arguments);
    for (var i = 0; i < this.graphicsData.length; ++i) {
      this.graphicsData[i].destroy();
    }
    for (var id in this._webgl) {
      for (var j = 0; j < this._webgl[id].data.length; ++j) {
        this._webgl[id].data[j].destroy();
      }
    }
    this.graphicsData = null;
    this.currentPath = null;
    this._webgl = null;
    this._localBounds = null;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b5", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function GraphicsData(lineWidth, lineColor, lineAlpha, fillColor, fillAlpha, fill, shape) {
    this.lineWidth = lineWidth;
    this.lineColor = lineColor;
    this.lineAlpha = lineAlpha;
    this._lineTint = lineColor;
    this.fillColor = fillColor;
    this.fillAlpha = fillAlpha;
    this._fillTint = fillColor;
    this.fill = fill;
    this.shape = shape;
    this.type = shape.type;
  }
  GraphicsData.prototype.constructor = GraphicsData;
  module.exports = GraphicsData;
  GraphicsData.prototype.clone = function() {
    return new GraphicsData(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.fill, this.shape);
  };
  GraphicsData.prototype.destroy = function() {
    this.shape = null;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b6", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function WebGLGraphicsData(gl) {
    this.gl = gl;
    this.color = [0, 0, 0];
    this.points = [];
    this.indices = [];
    this.buffer = gl.createBuffer();
    this.indexBuffer = gl.createBuffer();
    this.mode = 1;
    this.alpha = 1;
    this.dirty = true;
    this.glPoints = null;
    this.glIndices = null;
  }
  WebGLGraphicsData.prototype.constructor = WebGLGraphicsData;
  module.exports = WebGLGraphicsData;
  WebGLGraphicsData.prototype.reset = function() {
    this.points.length = 0;
    this.indices.length = 0;
  };
  WebGLGraphicsData.prototype.upload = function() {
    var gl = this.gl;
    this.glPoints = new Float32Array(this.points);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.glPoints, gl.STATIC_DRAW);
    this.glIndices = new Uint16Array(this.indices);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.glIndices, gl.STATIC_DRAW);
    this.dirty = false;
  };
  WebGLGraphicsData.prototype.destroy = function() {
    this.color = null;
    this.points = null;
    this.indices = null;
    this.gl.deleteBuffer(this.buffer);
    this.gl.deleteBuffer(this.indexBuffer);
    this.gl = null;
    this.buffer = null;
    this.indexBuffer = null;
    this.glPoints = null;
    this.glIndices = null;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b7", ["25"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    module.exports = earcut;
    function earcut(data, holeIndices, dim) {
      dim = dim || 2;
      var hasHoles = holeIndices && holeIndices.length,
          outerLen = hasHoles ? holeIndices[0] * dim : data.length,
          outerNode = linkedList(data, 0, outerLen, dim, true),
          triangles = [];
      if (!outerNode)
        return triangles;
      var minX,
          minY,
          maxX,
          maxY,
          x,
          y,
          size;
      if (hasHoles)
        outerNode = eliminateHoles(data, holeIndices, outerNode, dim);
      if (data.length > 80 * dim) {
        minX = maxX = data[0];
        minY = maxY = data[1];
        for (var i = dim; i < outerLen; i += dim) {
          x = data[i];
          y = data[i + 1];
          if (x < minX)
            minX = x;
          if (y < minY)
            minY = y;
          if (x > maxX)
            maxX = x;
          if (y > maxY)
            maxY = y;
        }
        size = Math.max(maxX - minX, maxY - minY);
      }
      earcutLinked(outerNode, triangles, dim, minX, minY, size);
      return triangles;
    }
    function linkedList(data, start, end, dim, clockwise) {
      var sum = 0,
          i,
          j,
          last;
      for (i = start, j = end - dim; i < end; i += dim) {
        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
        j = i;
      }
      if (clockwise === (sum > 0)) {
        for (i = start; i < end; i += dim)
          last = insertNode(i, data[i], data[i + 1], last);
      } else {
        for (i = end - dim; i >= start; i -= dim)
          last = insertNode(i, data[i], data[i + 1], last);
      }
      return last;
    }
    function filterPoints(start, end) {
      if (!start)
        return start;
      if (!end)
        end = start;
      var p = start,
          again;
      do {
        again = false;
        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
          removeNode(p);
          p = end = p.prev;
          if (p === p.next)
            return null;
          again = true;
        } else {
          p = p.next;
        }
      } while (again || p !== end);
      return end;
    }
    function earcutLinked(ear, triangles, dim, minX, minY, size, pass) {
      if (!ear)
        return;
      if (!pass && size)
        indexCurve(ear, minX, minY, size);
      var stop = ear,
          prev,
          next;
      while (ear.prev !== ear.next) {
        prev = ear.prev;
        next = ear.next;
        if (size ? isEarHashed(ear, minX, minY, size) : isEar(ear)) {
          triangles.push(prev.i / dim);
          triangles.push(ear.i / dim);
          triangles.push(next.i / dim);
          removeNode(ear);
          ear = next.next;
          stop = next.next;
          continue;
        }
        ear = next;
        if (ear === stop) {
          if (!pass) {
            earcutLinked(filterPoints(ear), triangles, dim, minX, minY, size, 1);
          } else if (pass === 1) {
            ear = cureLocalIntersections(ear, triangles, dim);
            earcutLinked(ear, triangles, dim, minX, minY, size, 2);
          } else if (pass === 2) {
            splitEarcut(ear, triangles, dim, minX, minY, size);
          }
          break;
        }
      }
    }
    function isEar(ear) {
      var a = ear.prev,
          b = ear,
          c = ear.next;
      if (area(a, b, c) >= 0)
        return false;
      var p = ear.next.next;
      while (p !== ear.prev) {
        if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0)
          return false;
        p = p.next;
      }
      return true;
    }
    function isEarHashed(ear, minX, minY, size) {
      var a = ear.prev,
          b = ear,
          c = ear.next;
      if (area(a, b, c) >= 0)
        return false;
      var minTX = a.x < b.x ? (a.x < c.x ? a.x : c.x) : (b.x < c.x ? b.x : c.x),
          minTY = a.y < b.y ? (a.y < c.y ? a.y : c.y) : (b.y < c.y ? b.y : c.y),
          maxTX = a.x > b.x ? (a.x > c.x ? a.x : c.x) : (b.x > c.x ? b.x : c.x),
          maxTY = a.y > b.y ? (a.y > c.y ? a.y : c.y) : (b.y > c.y ? b.y : c.y);
      var minZ = zOrder(minTX, minTY, minX, minY, size),
          maxZ = zOrder(maxTX, maxTY, minX, minY, size);
      var p = ear.nextZ;
      while (p && p.z <= maxZ) {
        if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0)
          return false;
        p = p.nextZ;
      }
      p = ear.prevZ;
      while (p && p.z >= minZ) {
        if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0)
          return false;
        p = p.prevZ;
      }
      return true;
    }
    function cureLocalIntersections(start, triangles, dim) {
      var p = start;
      do {
        var a = p.prev,
            b = p.next.next;
        if (intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {
          triangles.push(a.i / dim);
          triangles.push(p.i / dim);
          triangles.push(b.i / dim);
          removeNode(p);
          removeNode(p.next);
          p = start = b;
        }
        p = p.next;
      } while (p !== start);
      return p;
    }
    function splitEarcut(start, triangles, dim, minX, minY, size) {
      var a = start;
      do {
        var b = a.next.next;
        while (b !== a.prev) {
          if (a.i !== b.i && isValidDiagonal(a, b)) {
            var c = splitPolygon(a, b);
            a = filterPoints(a, a.next);
            c = filterPoints(c, c.next);
            earcutLinked(a, triangles, dim, minX, minY, size);
            earcutLinked(c, triangles, dim, minX, minY, size);
            return;
          }
          b = b.next;
        }
        a = a.next;
      } while (a !== start);
    }
    function eliminateHoles(data, holeIndices, outerNode, dim) {
      var queue = [],
          i,
          len,
          start,
          end,
          list;
      for (i = 0, len = holeIndices.length; i < len; i++) {
        start = holeIndices[i] * dim;
        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        list = linkedList(data, start, end, dim, false);
        if (list === list.next)
          list.steiner = true;
        queue.push(getLeftmost(list));
      }
      queue.sort(compareX);
      for (i = 0; i < queue.length; i++) {
        eliminateHole(queue[i], outerNode);
        outerNode = filterPoints(outerNode, outerNode.next);
      }
      return outerNode;
    }
    function compareX(a, b) {
      return a.x - b.x;
    }
    function eliminateHole(hole, outerNode) {
      outerNode = findHoleBridge(hole, outerNode);
      if (outerNode) {
        var b = splitPolygon(outerNode, hole);
        filterPoints(b, b.next);
      }
    }
    function findHoleBridge(hole, outerNode) {
      var p = outerNode,
          hx = hole.x,
          hy = hole.y,
          qx = -Infinity,
          m;
      do {
        if (hy <= p.y && hy >= p.next.y) {
          var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
          if (x <= hx && x > qx) {
            qx = x;
            m = p.x < p.next.x ? p : p.next;
          }
        }
        p = p.next;
      } while (p !== outerNode);
      if (!m)
        return null;
      if (hole.x === m.x)
        return m.prev;
      var stop = m,
          tanMin = Infinity,
          tan;
      p = m.next;
      while (p !== stop) {
        if (hx >= p.x && p.x >= m.x && pointInTriangle(hy < m.y ? hx : qx, hy, m.x, m.y, hy < m.y ? qx : hx, hy, p.x, p.y)) {
          tan = Math.abs(hy - p.y) / (hx - p.x);
          if ((tan < tanMin || (tan === tanMin && p.x > m.x)) && locallyInside(p, hole)) {
            m = p;
            tanMin = tan;
          }
        }
        p = p.next;
      }
      return m;
    }
    function indexCurve(start, minX, minY, size) {
      var p = start;
      do {
        if (p.z === null)
          p.z = zOrder(p.x, p.y, minX, minY, size);
        p.prevZ = p.prev;
        p.nextZ = p.next;
        p = p.next;
      } while (p !== start);
      p.prevZ.nextZ = null;
      p.prevZ = null;
      sortLinked(p);
    }
    function sortLinked(list) {
      var i,
          p,
          q,
          e,
          tail,
          numMerges,
          pSize,
          qSize,
          inSize = 1;
      do {
        p = list;
        list = null;
        tail = null;
        numMerges = 0;
        while (p) {
          numMerges++;
          q = p;
          pSize = 0;
          for (i = 0; i < inSize; i++) {
            pSize++;
            q = q.nextZ;
            if (!q)
              break;
          }
          qSize = inSize;
          while (pSize > 0 || (qSize > 0 && q)) {
            if (pSize === 0) {
              e = q;
              q = q.nextZ;
              qSize--;
            } else if (qSize === 0 || !q) {
              e = p;
              p = p.nextZ;
              pSize--;
            } else if (p.z <= q.z) {
              e = p;
              p = p.nextZ;
              pSize--;
            } else {
              e = q;
              q = q.nextZ;
              qSize--;
            }
            if (tail)
              tail.nextZ = e;
            else
              list = e;
            e.prevZ = tail;
            tail = e;
          }
          p = q;
        }
        tail.nextZ = null;
        inSize *= 2;
      } while (numMerges > 1);
      return list;
    }
    function zOrder(x, y, minX, minY, size) {
      x = 32767 * (x - minX) / size;
      y = 32767 * (y - minY) / size;
      x = (x | (x << 8)) & 0x00FF00FF;
      x = (x | (x << 4)) & 0x0F0F0F0F;
      x = (x | (x << 2)) & 0x33333333;
      x = (x | (x << 1)) & 0x55555555;
      y = (y | (y << 8)) & 0x00FF00FF;
      y = (y | (y << 4)) & 0x0F0F0F0F;
      y = (y | (y << 2)) & 0x33333333;
      y = (y | (y << 1)) & 0x55555555;
      return x | (y << 1);
    }
    function getLeftmost(start) {
      var p = start,
          leftmost = start;
      do {
        if (p.x < leftmost.x)
          leftmost = p;
        p = p.next;
      } while (p !== start);
      return leftmost;
    }
    function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
      return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 && (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 && (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
    }
    function isValidDiagonal(a, b) {
      return equals(a, b) || a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b);
    }
    function area(p, q, r) {
      return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
    }
    function equals(p1, p2) {
      return p1.x === p2.x && p1.y === p2.y;
    }
    function intersects(p1, q1, p2, q2) {
      return area(p1, q1, p2) > 0 !== area(p1, q1, q2) > 0 && area(p2, q2, p1) > 0 !== area(p2, q2, q1) > 0;
    }
    function intersectsPolygon(a, b) {
      var p = a;
      do {
        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i && intersects(p, p.next, a, b))
          return true;
        p = p.next;
      } while (p !== a);
      return false;
    }
    function locallyInside(a, b) {
      return area(a.prev, a, a.next) < 0 ? area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 : area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
    }
    function middleInside(a, b) {
      var p = a,
          inside = false,
          px = (a.x + b.x) / 2,
          py = (a.y + b.y) / 2;
      do {
        if (((p.y > py) !== (p.next.y > py)) && (px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x))
          inside = !inside;
        p = p.next;
      } while (p !== a);
      return inside;
    }
    function splitPolygon(a, b) {
      var a2 = new Node(a.i, a.x, a.y),
          b2 = new Node(b.i, b.x, b.y),
          an = a.next,
          bp = b.prev;
      a.next = b;
      b.prev = a;
      a2.next = an;
      an.prev = a2;
      b2.next = a2;
      a2.prev = b2;
      bp.next = b2;
      b2.prev = bp;
      return b2;
    }
    function insertNode(i, x, y, last) {
      var p = new Node(i, x, y);
      if (!last) {
        p.prev = p;
        p.next = p;
      } else {
        p.next = last.next;
        p.prev = last;
        last.next.prev = p;
        last.next = p;
      }
      return p;
    }
    function removeNode(p) {
      p.next.prev = p.prev;
      p.prev.next = p.next;
      if (p.prevZ)
        p.prevZ.nextZ = p.nextZ;
      if (p.nextZ)
        p.nextZ.prevZ = p.prevZ;
    }
    function Node(i, x, y) {
      this.i = i;
      this.x = x;
      this.y = y;
      this.prev = null;
      this.next = null;
      this.z = null;
      this.prevZ = null;
      this.nextZ = null;
      this.steiner = false;
    }
  })($__require('25'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b8", ["b7"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('b7');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b9", ["ac", "ab", "a0", "a5", "a6", "b6", "b8"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var utils = $__require('ac'),
      math = $__require('ab'),
      CONST = $__require('a0'),
      ObjectRenderer = $__require('a5'),
      WebGLRenderer = $__require('a6'),
      WebGLGraphicsData = $__require('b6'),
      earcut = $__require('b8');
  function GraphicsRenderer(renderer) {
    ObjectRenderer.call(this, renderer);
    this.graphicsDataPool = [];
    this.primitiveShader = null;
    this.complexPrimitiveShader = null;
    this.maximumSimplePolySize = 200;
  }
  GraphicsRenderer.prototype = Object.create(ObjectRenderer.prototype);
  GraphicsRenderer.prototype.constructor = GraphicsRenderer;
  module.exports = GraphicsRenderer;
  WebGLRenderer.registerPlugin('graphics', GraphicsRenderer);
  GraphicsRenderer.prototype.onContextChange = function() {};
  GraphicsRenderer.prototype.destroy = function() {
    ObjectRenderer.prototype.destroy.call(this);
    for (var i = 0; i < this.graphicsDataPool.length; ++i) {
      this.graphicsDataPool[i].destroy();
    }
    this.graphicsDataPool = null;
  };
  GraphicsRenderer.prototype.render = function(graphics) {
    var renderer = this.renderer;
    var gl = renderer.gl;
    var shader = renderer.shaderManager.plugins.primitiveShader,
        webGLData;
    if (graphics.dirty || !graphics._webGL[gl.id]) {
      this.updateGraphics(graphics);
    }
    var webGL = graphics._webGL[gl.id];
    renderer.blendModeManager.setBlendMode(graphics.blendMode);
    for (var i = 0,
        n = webGL.data.length; i < n; i++) {
      webGLData = webGL.data[i];
      if (webGL.data[i].mode === 1) {
        renderer.stencilManager.pushStencil(graphics, webGLData);
        gl.uniform1f(renderer.shaderManager.complexPrimitiveShader.uniforms.alpha._location, graphics.worldAlpha * webGLData.alpha);
        gl.drawElements(gl.TRIANGLE_FAN, 4, gl.UNSIGNED_SHORT, (webGLData.indices.length - 4) * 2);
        renderer.stencilManager.popStencil(graphics, webGLData);
      } else {
        shader = renderer.shaderManager.primitiveShader;
        renderer.shaderManager.setShader(shader);
        gl.uniformMatrix3fv(shader.uniforms.translationMatrix._location, false, graphics.worldTransform.toArray(true));
        gl.uniformMatrix3fv(shader.uniforms.projectionMatrix._location, false, renderer.currentRenderTarget.projectionMatrix.toArray(true));
        gl.uniform3fv(shader.uniforms.tint._location, utils.hex2rgb(graphics.tint));
        gl.uniform1f(shader.uniforms.alpha._location, graphics.worldAlpha);
        gl.bindBuffer(gl.ARRAY_BUFFER, webGLData.buffer);
        gl.vertexAttribPointer(shader.attributes.aVertexPosition, 2, gl.FLOAT, false, 4 * 6, 0);
        gl.vertexAttribPointer(shader.attributes.aColor, 4, gl.FLOAT, false, 4 * 6, 2 * 4);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, webGLData.indexBuffer);
        gl.drawElements(gl.TRIANGLE_STRIP, webGLData.indices.length, gl.UNSIGNED_SHORT, 0);
      }
      renderer.drawCount++;
    }
  };
  GraphicsRenderer.prototype.updateGraphics = function(graphics) {
    var gl = this.renderer.gl;
    var webGL = graphics._webGL[gl.id];
    if (!webGL) {
      webGL = graphics._webGL[gl.id] = {
        lastIndex: 0,
        data: [],
        gl: gl
      };
    }
    graphics.dirty = false;
    var i;
    if (graphics.clearDirty) {
      graphics.clearDirty = false;
      for (i = 0; i < webGL.data.length; i++) {
        var graphicsData = webGL.data[i];
        graphicsData.reset();
        this.graphicsDataPool.push(graphicsData);
      }
      webGL.data = [];
      webGL.lastIndex = 0;
    }
    var webGLData;
    for (i = webGL.lastIndex; i < graphics.graphicsData.length; i++) {
      var data = graphics.graphicsData[i];
      if (data.type === CONST.SHAPES.POLY) {
        data.points = data.shape.points.slice();
        if (data.shape.closed) {
          if (data.points[0] !== data.points[data.points.length - 2] || data.points[1] !== data.points[data.points.length - 1]) {
            data.points.push(data.points[0], data.points[1]);
          }
        }
        if (data.fill) {
          if (data.points.length >= 6) {
            if (data.points.length < this.maximumSimplePolySize * 2) {
              webGLData = this.switchMode(webGL, 0);
              var canDrawUsingSimple = this.buildPoly(data, webGLData);
              if (!canDrawUsingSimple) {
                webGLData = this.switchMode(webGL, 1);
                this.buildComplexPoly(data, webGLData);
              }
            } else {
              webGLData = this.switchMode(webGL, 1);
              this.buildComplexPoly(data, webGLData);
            }
          }
        }
        if (data.lineWidth > 0) {
          webGLData = this.switchMode(webGL, 0);
          this.buildLine(data, webGLData);
        }
      } else {
        webGLData = this.switchMode(webGL, 0);
        if (data.type === CONST.SHAPES.RECT) {
          this.buildRectangle(data, webGLData);
        } else if (data.type === CONST.SHAPES.CIRC || data.type === CONST.SHAPES.ELIP) {
          this.buildCircle(data, webGLData);
        } else if (data.type === CONST.SHAPES.RREC) {
          this.buildRoundedRectangle(data, webGLData);
        }
      }
      webGL.lastIndex++;
    }
    for (i = 0; i < webGL.data.length; i++) {
      webGLData = webGL.data[i];
      if (webGLData.dirty) {
        webGLData.upload();
      }
    }
  };
  GraphicsRenderer.prototype.switchMode = function(webGL, type) {
    var webGLData;
    if (!webGL.data.length) {
      webGLData = this.graphicsDataPool.pop() || new WebGLGraphicsData(webGL.gl);
      webGLData.mode = type;
      webGL.data.push(webGLData);
    } else {
      webGLData = webGL.data[webGL.data.length - 1];
      if ((webGLData.points.length > 320000) || webGLData.mode !== type || type === 1) {
        webGLData = this.graphicsDataPool.pop() || new WebGLGraphicsData(webGL.gl);
        webGLData.mode = type;
        webGL.data.push(webGLData);
      }
    }
    webGLData.dirty = true;
    return webGLData;
  };
  GraphicsRenderer.prototype.buildRectangle = function(graphicsData, webGLData) {
    var rectData = graphicsData.shape;
    var x = rectData.x;
    var y = rectData.y;
    var width = rectData.width;
    var height = rectData.height;
    if (graphicsData.fill) {
      var color = utils.hex2rgb(graphicsData.fillColor);
      var alpha = graphicsData.fillAlpha;
      var r = color[0] * alpha;
      var g = color[1] * alpha;
      var b = color[2] * alpha;
      var verts = webGLData.points;
      var indices = webGLData.indices;
      var vertPos = verts.length / 6;
      verts.push(x, y);
      verts.push(r, g, b, alpha);
      verts.push(x + width, y);
      verts.push(r, g, b, alpha);
      verts.push(x, y + height);
      verts.push(r, g, b, alpha);
      verts.push(x + width, y + height);
      verts.push(r, g, b, alpha);
      indices.push(vertPos, vertPos, vertPos + 1, vertPos + 2, vertPos + 3, vertPos + 3);
    }
    if (graphicsData.lineWidth) {
      var tempPoints = graphicsData.points;
      graphicsData.points = [x, y, x + width, y, x + width, y + height, x, y + height, x, y];
      this.buildLine(graphicsData, webGLData);
      graphicsData.points = tempPoints;
    }
  };
  GraphicsRenderer.prototype.buildRoundedRectangle = function(graphicsData, webGLData) {
    var rrectData = graphicsData.shape;
    var x = rrectData.x;
    var y = rrectData.y;
    var width = rrectData.width;
    var height = rrectData.height;
    var radius = rrectData.radius;
    var recPoints = [];
    recPoints.push(x, y + radius);
    this.quadraticBezierCurve(x, y + height - radius, x, y + height, x + radius, y + height, recPoints);
    this.quadraticBezierCurve(x + width - radius, y + height, x + width, y + height, x + width, y + height - radius, recPoints);
    this.quadraticBezierCurve(x + width, y + radius, x + width, y, x + width - radius, y, recPoints);
    this.quadraticBezierCurve(x + radius, y, x, y, x, y + radius + 0.0000000001, recPoints);
    if (graphicsData.fill) {
      var color = utils.hex2rgb(graphicsData.fillColor);
      var alpha = graphicsData.fillAlpha;
      var r = color[0] * alpha;
      var g = color[1] * alpha;
      var b = color[2] * alpha;
      var verts = webGLData.points;
      var indices = webGLData.indices;
      var vecPos = verts.length / 6;
      var triangles = earcut(recPoints, null, 2);
      var i = 0;
      for (i = 0; i < triangles.length; i += 3) {
        indices.push(triangles[i] + vecPos);
        indices.push(triangles[i] + vecPos);
        indices.push(triangles[i + 1] + vecPos);
        indices.push(triangles[i + 2] + vecPos);
        indices.push(triangles[i + 2] + vecPos);
      }
      for (i = 0; i < recPoints.length; i++) {
        verts.push(recPoints[i], recPoints[++i], r, g, b, alpha);
      }
    }
    if (graphicsData.lineWidth) {
      var tempPoints = graphicsData.points;
      graphicsData.points = recPoints;
      this.buildLine(graphicsData, webGLData);
      graphicsData.points = tempPoints;
    }
  };
  GraphicsRenderer.prototype.quadraticBezierCurve = function(fromX, fromY, cpX, cpY, toX, toY, out) {
    var xa,
        ya,
        xb,
        yb,
        x,
        y,
        n = 20,
        points = out || [];
    function getPt(n1, n2, perc) {
      var diff = n2 - n1;
      return n1 + (diff * perc);
    }
    var j = 0;
    for (var i = 0; i <= n; i++) {
      j = i / n;
      xa = getPt(fromX, cpX, j);
      ya = getPt(fromY, cpY, j);
      xb = getPt(cpX, toX, j);
      yb = getPt(cpY, toY, j);
      x = getPt(xa, xb, j);
      y = getPt(ya, yb, j);
      points.push(x, y);
    }
    return points;
  };
  GraphicsRenderer.prototype.buildCircle = function(graphicsData, webGLData) {
    var circleData = graphicsData.shape;
    var x = circleData.x;
    var y = circleData.y;
    var width;
    var height;
    if (graphicsData.type === CONST.SHAPES.CIRC) {
      width = circleData.radius;
      height = circleData.radius;
    } else {
      width = circleData.width;
      height = circleData.height;
    }
    var totalSegs = Math.floor(30 * Math.sqrt(circleData.radius)) || Math.floor(15 * Math.sqrt(circleData.width + circleData.height));
    var seg = (Math.PI * 2) / totalSegs;
    var i = 0;
    if (graphicsData.fill) {
      var color = utils.hex2rgb(graphicsData.fillColor);
      var alpha = graphicsData.fillAlpha;
      var r = color[0] * alpha;
      var g = color[1] * alpha;
      var b = color[2] * alpha;
      var verts = webGLData.points;
      var indices = webGLData.indices;
      var vecPos = verts.length / 6;
      indices.push(vecPos);
      for (i = 0; i < totalSegs + 1; i++) {
        verts.push(x, y, r, g, b, alpha);
        verts.push(x + Math.sin(seg * i) * width, y + Math.cos(seg * i) * height, r, g, b, alpha);
        indices.push(vecPos++, vecPos++);
      }
      indices.push(vecPos - 1);
    }
    if (graphicsData.lineWidth) {
      var tempPoints = graphicsData.points;
      graphicsData.points = [];
      for (i = 0; i < totalSegs + 1; i++) {
        graphicsData.points.push(x + Math.sin(seg * i) * width, y + Math.cos(seg * i) * height);
      }
      this.buildLine(graphicsData, webGLData);
      graphicsData.points = tempPoints;
    }
  };
  GraphicsRenderer.prototype.buildLine = function(graphicsData, webGLData) {
    var i = 0;
    var points = graphicsData.points;
    if (points.length === 0) {
      return;
    }
    var firstPoint = new math.Point(points[0], points[1]);
    var lastPoint = new math.Point(points[points.length - 2], points[points.length - 1]);
    if (firstPoint.x === lastPoint.x && firstPoint.y === lastPoint.y) {
      points = points.slice();
      points.pop();
      points.pop();
      lastPoint = new math.Point(points[points.length - 2], points[points.length - 1]);
      var midPointX = lastPoint.x + (firstPoint.x - lastPoint.x) * 0.5;
      var midPointY = lastPoint.y + (firstPoint.y - lastPoint.y) * 0.5;
      points.unshift(midPointX, midPointY);
      points.push(midPointX, midPointY);
    }
    var verts = webGLData.points;
    var indices = webGLData.indices;
    var length = points.length / 2;
    var indexCount = points.length;
    var indexStart = verts.length / 6;
    var width = graphicsData.lineWidth / 2;
    var color = utils.hex2rgb(graphicsData.lineColor);
    var alpha = graphicsData.lineAlpha;
    var r = color[0] * alpha;
    var g = color[1] * alpha;
    var b = color[2] * alpha;
    var px,
        py,
        p1x,
        p1y,
        p2x,
        p2y,
        p3x,
        p3y;
    var perpx,
        perpy,
        perp2x,
        perp2y,
        perp3x,
        perp3y;
    var a1,
        b1,
        c1,
        a2,
        b2,
        c2;
    var denom,
        pdist,
        dist;
    p1x = points[0];
    p1y = points[1];
    p2x = points[2];
    p2y = points[3];
    perpx = -(p1y - p2y);
    perpy = p1x - p2x;
    dist = Math.sqrt(perpx * perpx + perpy * perpy);
    perpx /= dist;
    perpy /= dist;
    perpx *= width;
    perpy *= width;
    verts.push(p1x - perpx, p1y - perpy, r, g, b, alpha);
    verts.push(p1x + perpx, p1y + perpy, r, g, b, alpha);
    for (i = 1; i < length - 1; i++) {
      p1x = points[(i - 1) * 2];
      p1y = points[(i - 1) * 2 + 1];
      p2x = points[(i) * 2];
      p2y = points[(i) * 2 + 1];
      p3x = points[(i + 1) * 2];
      p3y = points[(i + 1) * 2 + 1];
      perpx = -(p1y - p2y);
      perpy = p1x - p2x;
      dist = Math.sqrt(perpx * perpx + perpy * perpy);
      perpx /= dist;
      perpy /= dist;
      perpx *= width;
      perpy *= width;
      perp2x = -(p2y - p3y);
      perp2y = p2x - p3x;
      dist = Math.sqrt(perp2x * perp2x + perp2y * perp2y);
      perp2x /= dist;
      perp2y /= dist;
      perp2x *= width;
      perp2y *= width;
      a1 = (-perpy + p1y) - (-perpy + p2y);
      b1 = (-perpx + p2x) - (-perpx + p1x);
      c1 = (-perpx + p1x) * (-perpy + p2y) - (-perpx + p2x) * (-perpy + p1y);
      a2 = (-perp2y + p3y) - (-perp2y + p2y);
      b2 = (-perp2x + p2x) - (-perp2x + p3x);
      c2 = (-perp2x + p3x) * (-perp2y + p2y) - (-perp2x + p2x) * (-perp2y + p3y);
      denom = a1 * b2 - a2 * b1;
      if (Math.abs(denom) < 0.1) {
        denom += 10.1;
        verts.push(p2x - perpx, p2y - perpy, r, g, b, alpha);
        verts.push(p2x + perpx, p2y + perpy, r, g, b, alpha);
        continue;
      }
      px = (b1 * c2 - b2 * c1) / denom;
      py = (a2 * c1 - a1 * c2) / denom;
      pdist = (px - p2x) * (px - p2x) + (py - p2y) * (py - p2y);
      if (pdist > 140 * 140) {
        perp3x = perpx - perp2x;
        perp3y = perpy - perp2y;
        dist = Math.sqrt(perp3x * perp3x + perp3y * perp3y);
        perp3x /= dist;
        perp3y /= dist;
        perp3x *= width;
        perp3y *= width;
        verts.push(p2x - perp3x, p2y - perp3y);
        verts.push(r, g, b, alpha);
        verts.push(p2x + perp3x, p2y + perp3y);
        verts.push(r, g, b, alpha);
        verts.push(p2x - perp3x, p2y - perp3y);
        verts.push(r, g, b, alpha);
        indexCount++;
      } else {
        verts.push(px, py);
        verts.push(r, g, b, alpha);
        verts.push(p2x - (px - p2x), p2y - (py - p2y));
        verts.push(r, g, b, alpha);
      }
    }
    p1x = points[(length - 2) * 2];
    p1y = points[(length - 2) * 2 + 1];
    p2x = points[(length - 1) * 2];
    p2y = points[(length - 1) * 2 + 1];
    perpx = -(p1y - p2y);
    perpy = p1x - p2x;
    dist = Math.sqrt(perpx * perpx + perpy * perpy);
    perpx /= dist;
    perpy /= dist;
    perpx *= width;
    perpy *= width;
    verts.push(p2x - perpx, p2y - perpy);
    verts.push(r, g, b, alpha);
    verts.push(p2x + perpx, p2y + perpy);
    verts.push(r, g, b, alpha);
    indices.push(indexStart);
    for (i = 0; i < indexCount; i++) {
      indices.push(indexStart++);
    }
    indices.push(indexStart - 1);
  };
  GraphicsRenderer.prototype.buildComplexPoly = function(graphicsData, webGLData) {
    var points = graphicsData.points.slice();
    if (points.length < 6) {
      return;
    }
    var indices = webGLData.indices;
    webGLData.points = points;
    webGLData.alpha = graphicsData.fillAlpha;
    webGLData.color = utils.hex2rgb(graphicsData.fillColor);
    var minX = Infinity;
    var maxX = -Infinity;
    var minY = Infinity;
    var maxY = -Infinity;
    var x,
        y;
    for (var i = 0; i < points.length; i += 2) {
      x = points[i];
      y = points[i + 1];
      minX = x < minX ? x : minX;
      maxX = x > maxX ? x : maxX;
      minY = y < minY ? y : minY;
      maxY = y > maxY ? y : maxY;
    }
    points.push(minX, minY, maxX, minY, maxX, maxY, minX, maxY);
    var length = points.length / 2;
    for (i = 0; i < length; i++) {
      indices.push(i);
    }
  };
  GraphicsRenderer.prototype.buildPoly = function(graphicsData, webGLData) {
    var points = graphicsData.points;
    if (points.length < 6) {
      return;
    }
    var verts = webGLData.points;
    var indices = webGLData.indices;
    var length = points.length / 2;
    var color = utils.hex2rgb(graphicsData.fillColor);
    var alpha = graphicsData.fillAlpha;
    var r = color[0] * alpha;
    var g = color[1] * alpha;
    var b = color[2] * alpha;
    var triangles = earcut(points, null, 2);
    if (!triangles) {
      return false;
    }
    var vertPos = verts.length / 6;
    var i = 0;
    for (i = 0; i < triangles.length; i += 3) {
      indices.push(triangles[i] + vertPos);
      indices.push(triangles[i] + vertPos);
      indices.push(triangles[i + 1] + vertPos);
      indices.push(triangles[i + 2] + vertPos);
      indices.push(triangles[i + 2] + vertPos);
    }
    for (i = 0; i < length; i++) {
      verts.push(points[i * 2], points[i * 2 + 1], r, g, b, alpha);
    }
    return true;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("ae", ["ba", "bb", "bc", "65", "ab", "ac"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var BaseTexture = $__require('ba'),
      VideoBaseTexture = $__require('bb'),
      TextureUvs = $__require('bc'),
      EventEmitter = $__require('65'),
      math = $__require('ab'),
      utils = $__require('ac');
  function Texture(baseTexture, frame, crop, trim, rotate) {
    EventEmitter.call(this);
    this.noFrame = false;
    if (!frame) {
      this.noFrame = true;
      frame = new math.Rectangle(0, 0, 1, 1);
    }
    if (baseTexture instanceof Texture) {
      baseTexture = baseTexture.baseTexture;
    }
    this.baseTexture = baseTexture;
    this._frame = frame;
    this.trim = trim;
    this.valid = false;
    this.requiresUpdate = false;
    this._uvs = null;
    this.width = 0;
    this.height = 0;
    this.crop = crop || frame;
    this.rotate = !!rotate;
    if (baseTexture.hasLoaded) {
      if (this.noFrame) {
        frame = new math.Rectangle(0, 0, baseTexture.width, baseTexture.height);
        baseTexture.on('update', this.onBaseTextureUpdated, this);
      }
      this.frame = frame;
    } else {
      baseTexture.once('loaded', this.onBaseTextureLoaded, this);
    }
  }
  Texture.prototype = Object.create(EventEmitter.prototype);
  Texture.prototype.constructor = Texture;
  module.exports = Texture;
  Object.defineProperties(Texture.prototype, {frame: {
      get: function() {
        return this._frame;
      },
      set: function(frame) {
        this._frame = frame;
        this.noFrame = false;
        this.width = frame.width;
        this.height = frame.height;
        if (!this.trim && !this.rotate && (frame.x + frame.width > this.baseTexture.width || frame.y + frame.height > this.baseTexture.height)) {
          throw new Error('Texture Error: frame does not fit inside the base Texture dimensions ' + this);
        }
        this.valid = frame && frame.width && frame.height && this.baseTexture.hasLoaded;
        if (this.trim) {
          this.width = this.trim.width;
          this.height = this.trim.height;
          this._frame.width = this.trim.width;
          this._frame.height = this.trim.height;
        } else {
          this.crop = frame;
        }
        if (this.valid) {
          this._updateUvs();
        }
      }
    }});
  Texture.prototype.update = function() {
    this.baseTexture.update();
  };
  Texture.prototype.onBaseTextureLoaded = function(baseTexture) {
    if (this.noFrame) {
      this.frame = new math.Rectangle(0, 0, baseTexture.width, baseTexture.height);
    } else {
      this.frame = this._frame;
    }
    this.emit('update', this);
  };
  Texture.prototype.onBaseTextureUpdated = function(baseTexture) {
    this._frame.width = baseTexture.width;
    this._frame.height = baseTexture.height;
    this.emit('update', this);
  };
  Texture.prototype.destroy = function(destroyBase) {
    if (this.baseTexture) {
      if (destroyBase) {
        this.baseTexture.destroy();
      }
      this.baseTexture.off('update', this.onBaseTextureUpdated, this);
      this.baseTexture.off('loaded', this.onBaseTextureLoaded, this);
      this.baseTexture = null;
    }
    this._frame = null;
    this._uvs = null;
    this.trim = null;
    this.crop = null;
    this.valid = false;
    this.off('dispose', this.dispose, this);
    this.off('update', this.update, this);
  };
  Texture.prototype.clone = function() {
    return new Texture(this.baseTexture, this.frame, this.crop, this.trim, this.rotate);
  };
  Texture.prototype._updateUvs = function() {
    if (!this._uvs) {
      this._uvs = new TextureUvs();
    }
    this._uvs.set(this.crop, this.baseTexture, this.rotate);
  };
  Texture.fromImage = function(imageUrl, crossorigin, scaleMode) {
    var texture = utils.TextureCache[imageUrl];
    if (!texture) {
      texture = new Texture(BaseTexture.fromImage(imageUrl, crossorigin, scaleMode));
      utils.TextureCache[imageUrl] = texture;
    }
    return texture;
  };
  Texture.fromFrame = function(frameId) {
    var texture = utils.TextureCache[frameId];
    if (!texture) {
      throw new Error('The frameId "' + frameId + '" does not exist in the texture cache');
    }
    return texture;
  };
  Texture.fromCanvas = function(canvas, scaleMode) {
    return new Texture(BaseTexture.fromCanvas(canvas, scaleMode));
  };
  Texture.fromVideo = function(video, scaleMode) {
    if (typeof video === 'string') {
      return Texture.fromVideoUrl(video, scaleMode);
    } else {
      return new Texture(VideoBaseTexture.fromVideo(video, scaleMode));
    }
  };
  Texture.fromVideoUrl = function(videoUrl, scaleMode) {
    return new Texture(VideoBaseTexture.fromUrl(videoUrl, scaleMode));
  };
  Texture.addTextureToCache = function(texture, id) {
    utils.TextureCache[id] = texture;
  };
  Texture.removeTextureFromCache = function(id) {
    var texture = utils.TextureCache[id];
    delete utils.TextureCache[id];
    delete utils.BaseTextureCache[id];
    return texture;
  };
  Texture.EMPTY = new Texture(new BaseTexture());
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b1", ["ba", "ae", "bd", "be", "b3", "ab", "a0"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var BaseTexture = $__require('ba'),
      Texture = $__require('ae'),
      RenderTarget = $__require('bd'),
      FilterManager = $__require('be'),
      CanvasBuffer = $__require('b3'),
      math = $__require('ab'),
      CONST = $__require('a0'),
      tempMatrix = new math.Matrix();
  function RenderTexture(renderer, width, height, scaleMode, resolution) {
    if (!renderer) {
      throw new Error('Unable to create RenderTexture, you must pass a renderer into the constructor.');
    }
    width = width || 100;
    height = height || 100;
    resolution = resolution || CONST.RESOLUTION;
    var baseTexture = new BaseTexture();
    baseTexture.width = width;
    baseTexture.height = height;
    baseTexture.resolution = resolution;
    baseTexture.scaleMode = scaleMode || CONST.SCALE_MODES.DEFAULT;
    baseTexture.hasLoaded = true;
    Texture.call(this, baseTexture, new math.Rectangle(0, 0, width, height));
    this.width = width;
    this.height = height;
    this.resolution = resolution;
    this.render = null;
    this.renderer = renderer;
    if (this.renderer.type === CONST.RENDERER_TYPE.WEBGL) {
      var gl = this.renderer.gl;
      this.textureBuffer = new RenderTarget(gl, this.width, this.height, baseTexture.scaleMode, this.resolution);
      this.baseTexture._glTextures[gl.id] = this.textureBuffer.texture;
      this.filterManager = new FilterManager(this.renderer);
      this.filterManager.onContextChange();
      this.filterManager.resize(width, height);
      this.render = this.renderWebGL;
      this.renderer.currentRenderer.start();
      this.renderer.currentRenderTarget.activate();
    } else {
      this.render = this.renderCanvas;
      this.textureBuffer = new CanvasBuffer(this.width * this.resolution, this.height * this.resolution);
      this.baseTexture.source = this.textureBuffer.canvas;
    }
    this.valid = true;
    this._updateUvs();
  }
  RenderTexture.prototype = Object.create(Texture.prototype);
  RenderTexture.prototype.constructor = RenderTexture;
  module.exports = RenderTexture;
  RenderTexture.prototype.resize = function(width, height, updateBase) {
    if (width === this.width && height === this.height) {
      return;
    }
    this.valid = (width > 0 && height > 0);
    this.width = this._frame.width = this.crop.width = width;
    this.height = this._frame.height = this.crop.height = height;
    if (updateBase) {
      this.baseTexture.width = this.width;
      this.baseTexture.height = this.height;
    }
    if (!this.valid) {
      return;
    }
    this.textureBuffer.resize(this.width, this.height);
    if (this.filterManager) {
      this.filterManager.resize(this.width, this.height);
    }
  };
  RenderTexture.prototype.clear = function() {
    if (!this.valid) {
      return;
    }
    if (this.renderer.type === CONST.RENDERER_TYPE.WEBGL) {
      this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER, this.textureBuffer.frameBuffer);
    }
    this.textureBuffer.clear();
  };
  RenderTexture.prototype.renderWebGL = function(displayObject, matrix, clear, updateTransform) {
    if (!this.valid) {
      return;
    }
    updateTransform = (updateTransform !== undefined) ? updateTransform : true;
    this.textureBuffer.transform = matrix;
    this.textureBuffer.activate();
    displayObject.worldAlpha = 1;
    if (updateTransform) {
      displayObject.worldTransform.identity();
      displayObject.currentBounds = null;
      var children = displayObject.children;
      var i,
          j;
      for (i = 0, j = children.length; i < j; ++i) {
        children[i].updateTransform();
      }
    }
    var temp = this.renderer.filterManager;
    this.renderer.filterManager = this.filterManager;
    this.renderer.renderDisplayObject(displayObject, this.textureBuffer, clear);
    this.renderer.filterManager = temp;
  };
  RenderTexture.prototype.renderCanvas = function(displayObject, matrix, clear, updateTransform) {
    if (!this.valid) {
      return;
    }
    updateTransform = !!updateTransform;
    var wt = tempMatrix;
    wt.identity();
    if (matrix) {
      wt.append(matrix);
    }
    var cachedWt = displayObject.worldTransform;
    displayObject.worldTransform = wt;
    displayObject.worldAlpha = 1;
    var children = displayObject.children;
    var i,
        j;
    for (i = 0, j = children.length; i < j; ++i) {
      children[i].updateTransform();
    }
    if (clear) {
      this.textureBuffer.clear();
    }
    var context = this.textureBuffer.context;
    var realResolution = this.renderer.resolution;
    this.renderer.resolution = this.resolution;
    this.renderer.renderDisplayObject(displayObject, context);
    this.renderer.resolution = realResolution;
    if (displayObject.worldTransform === wt) {
      displayObject.worldTransform = cachedWt;
    }
  };
  RenderTexture.prototype.destroy = function() {
    Texture.prototype.destroy.call(this, true);
    this.textureBuffer.destroy();
    if (this.filterManager) {
      this.filterManager.destroy();
    }
    this.renderer = null;
  };
  RenderTexture.prototype.getImage = function() {
    var image = new Image();
    image.src = this.getBase64();
    return image;
  };
  RenderTexture.prototype.getBase64 = function() {
    return this.getCanvas().toDataURL();
  };
  RenderTexture.prototype.getCanvas = function() {
    if (this.renderer.type === CONST.RENDERER_TYPE.WEBGL) {
      var gl = this.renderer.gl;
      var width = this.textureBuffer.size.width;
      var height = this.textureBuffer.size.height;
      var webGLPixels = new Uint8Array(4 * width * height);
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.textureBuffer.frameBuffer);
      gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, webGLPixels);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      var tempCanvas = new CanvasBuffer(width, height);
      var canvasData = tempCanvas.context.getImageData(0, 0, width, height);
      canvasData.data.set(webGLPixels);
      tempCanvas.context.putImageData(canvasData, 0, 0);
      return tempCanvas.canvas;
    } else {
      return this.textureBuffer.canvas;
    }
  };
  RenderTexture.prototype.getPixels = function() {
    var width,
        height;
    if (this.renderer.type === CONST.RENDERER_TYPE.WEBGL) {
      var gl = this.renderer.gl;
      width = this.textureBuffer.size.width;
      height = this.textureBuffer.size.height;
      var webGLPixels = new Uint8Array(4 * width * height);
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.textureBuffer.frameBuffer);
      gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, webGLPixels);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      return webGLPixels;
    } else {
      width = this.textureBuffer.canvas.width;
      height = this.textureBuffer.canvas.height;
      return this.textureBuffer.canvas.getContext('2d').getImageData(0, 0, width, height).data;
    }
  };
  RenderTexture.prototype.getPixel = function(x, y) {
    if (this.renderer.type === CONST.RENDERER_TYPE.WEBGL) {
      var gl = this.renderer.gl;
      var webGLPixels = new Uint8Array(4);
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.textureBuffer.frameBuffer);
      gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, webGLPixels);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      return webGLPixels;
    } else {
      return this.textureBuffer.canvas.getContext('2d').getImageData(x, y, 1, 1).data;
    }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("ba", ["ac", "a0", "65"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var utils = $__require('ac'),
      CONST = $__require('a0'),
      EventEmitter = $__require('65');
  function BaseTexture(source, scaleMode, resolution) {
    EventEmitter.call(this);
    this.uid = utils.uid();
    this.resolution = resolution || 1;
    this.width = 100;
    this.height = 100;
    this.realWidth = 100;
    this.realHeight = 100;
    this.scaleMode = scaleMode || CONST.SCALE_MODES.DEFAULT;
    this.hasLoaded = false;
    this.isLoading = false;
    this.source = null;
    this.premultipliedAlpha = true;
    this.imageUrl = null;
    this.isPowerOfTwo = false;
    this.mipmap = false;
    this._glTextures = {};
    if (source) {
      this.loadSource(source);
    }
  }
  BaseTexture.prototype = Object.create(EventEmitter.prototype);
  BaseTexture.prototype.constructor = BaseTexture;
  module.exports = BaseTexture;
  BaseTexture.prototype.update = function() {
    this.realWidth = this.source.naturalWidth || this.source.width;
    this.realHeight = this.source.naturalHeight || this.source.height;
    this.width = this.realWidth / this.resolution;
    this.height = this.realHeight / this.resolution;
    this.isPowerOfTwo = utils.isPowerOfTwo(this.realWidth, this.realHeight);
    this.emit('update', this);
  };
  BaseTexture.prototype.loadSource = function(source) {
    var wasLoading = this.isLoading;
    this.hasLoaded = false;
    this.isLoading = false;
    if (wasLoading && this.source) {
      this.source.onload = null;
      this.source.onerror = null;
    }
    this.source = source;
    if ((this.source.complete || this.source.getContext) && this.source.width && this.source.height) {
      this._sourceLoaded();
    } else if (!source.getContext) {
      this.isLoading = true;
      var scope = this;
      source.onload = function() {
        source.onload = null;
        source.onerror = null;
        if (!scope.isLoading) {
          return;
        }
        scope.isLoading = false;
        scope._sourceLoaded();
        scope.emit('loaded', scope);
      };
      source.onerror = function() {
        source.onload = null;
        source.onerror = null;
        if (!scope.isLoading) {
          return;
        }
        scope.isLoading = false;
        scope.emit('error', scope);
      };
      if (source.complete && source.src) {
        this.isLoading = false;
        source.onload = null;
        source.onerror = null;
        if (source.width && source.height) {
          this._sourceLoaded();
          if (wasLoading) {
            this.emit('loaded', this);
          }
        } else {
          if (wasLoading) {
            this.emit('error', this);
          }
        }
      }
    }
  };
  BaseTexture.prototype._sourceLoaded = function() {
    this.hasLoaded = true;
    this.update();
  };
  BaseTexture.prototype.destroy = function() {
    if (this.imageUrl) {
      delete utils.BaseTextureCache[this.imageUrl];
      delete utils.TextureCache[this.imageUrl];
      this.imageUrl = null;
      if (!navigator.isCocoonJS) {
        this.source.src = '';
      }
    } else if (this.source && this.source._pixiId) {
      delete utils.BaseTextureCache[this.source._pixiId];
    }
    this.source = null;
    this.dispose();
  };
  BaseTexture.prototype.dispose = function() {
    this.emit('dispose', this);
  };
  BaseTexture.prototype.updateSourceImage = function(newSrc) {
    this.source.src = newSrc;
    this.loadSource(this.source);
  };
  BaseTexture.fromImage = function(imageUrl, crossorigin, scaleMode) {
    var baseTexture = utils.BaseTextureCache[imageUrl];
    if (crossorigin === undefined && imageUrl.indexOf('data:') !== 0) {
      crossorigin = true;
    }
    if (!baseTexture) {
      var image = new Image();
      if (crossorigin) {
        image.crossOrigin = '';
      }
      baseTexture = new BaseTexture(image, scaleMode);
      baseTexture.imageUrl = imageUrl;
      image.src = imageUrl;
      utils.BaseTextureCache[imageUrl] = baseTexture;
      baseTexture.resolution = utils.getResolutionOfUrl(imageUrl);
    }
    return baseTexture;
  };
  BaseTexture.fromCanvas = function(canvas, scaleMode) {
    if (!canvas._pixiId) {
      canvas._pixiId = 'canvas_' + utils.uid();
    }
    var baseTexture = utils.BaseTextureCache[canvas._pixiId];
    if (!baseTexture) {
      baseTexture = new BaseTexture(canvas, scaleMode);
      utils.BaseTextureCache[canvas._pixiId] = baseTexture;
    }
    return baseTexture;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("bb", ["ba", "ac", "25"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var BaseTexture = $__require('ba'),
        utils = $__require('ac');
    function VideoBaseTexture(source, scaleMode) {
      if (!source) {
        throw new Error('No video source element specified.');
      }
      if ((source.readyState === source.HAVE_ENOUGH_DATA || source.readyState === source.HAVE_FUTURE_DATA) && source.width && source.height) {
        source.complete = true;
      }
      BaseTexture.call(this, source, scaleMode);
      this.autoUpdate = false;
      this._onUpdate = this._onUpdate.bind(this);
      this._onCanPlay = this._onCanPlay.bind(this);
      if (!source.complete) {
        source.addEventListener('canplay', this._onCanPlay);
        source.addEventListener('canplaythrough', this._onCanPlay);
        source.addEventListener('play', this._onPlayStart.bind(this));
        source.addEventListener('pause', this._onPlayStop.bind(this));
      }
      this.__loaded = false;
    }
    VideoBaseTexture.prototype = Object.create(BaseTexture.prototype);
    VideoBaseTexture.prototype.constructor = VideoBaseTexture;
    module.exports = VideoBaseTexture;
    VideoBaseTexture.prototype._onUpdate = function() {
      if (this.autoUpdate) {
        window.requestAnimationFrame(this._onUpdate);
        this.update();
      }
    };
    VideoBaseTexture.prototype._onPlayStart = function() {
      if (!this.autoUpdate) {
        window.requestAnimationFrame(this._onUpdate);
        this.autoUpdate = true;
      }
    };
    VideoBaseTexture.prototype._onPlayStop = function() {
      this.autoUpdate = false;
    };
    VideoBaseTexture.prototype._onCanPlay = function() {
      this.hasLoaded = true;
      if (this.source) {
        this.source.removeEventListener('canplay', this._onCanPlay);
        this.source.removeEventListener('canplaythrough', this._onCanPlay);
        this.width = this.source.videoWidth;
        this.height = this.source.videoHeight;
        this.source.play();
        if (!this.__loaded) {
          this.__loaded = true;
          this.emit('loaded', this);
        }
      }
    };
    VideoBaseTexture.prototype.destroy = function() {
      if (this.source && this.source._pixiId) {
        delete utils.BaseTextureCache[this.source._pixiId];
        delete this.source._pixiId;
      }
      BaseTexture.prototype.destroy.call(this);
    };
    VideoBaseTexture.fromVideo = function(video, scaleMode) {
      if (!video._pixiId) {
        video._pixiId = 'video_' + utils.uid();
      }
      var baseTexture = utils.BaseTextureCache[video._pixiId];
      if (!baseTexture) {
        baseTexture = new VideoBaseTexture(video, scaleMode);
        utils.BaseTextureCache[video._pixiId] = baseTexture;
      }
      return baseTexture;
    };
    VideoBaseTexture.fromUrl = function(videoSrc, scaleMode) {
      var video = document.createElement('video');
      if (Array.isArray(videoSrc)) {
        for (var i = 0; i < videoSrc.length; ++i) {
          video.appendChild(createSource(videoSrc[i].src || videoSrc[i], videoSrc[i].mime));
        }
      } else {
        video.appendChild(createSource(videoSrc.src || videoSrc, videoSrc.mime));
      }
      video.load();
      video.play();
      return VideoBaseTexture.fromVideo(video, scaleMode);
    };
    VideoBaseTexture.fromUrls = VideoBaseTexture.fromUrl;
    function createSource(path, type) {
      if (!type) {
        type = 'video/' + path.substr(path.lastIndexOf('.') + 1);
      }
      var source = document.createElement('source');
      source.src = path;
      source.type = type;
      return source;
    }
  })($__require('25'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("bc", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function TextureUvs() {
    this.x0 = 0;
    this.y0 = 0;
    this.x1 = 1;
    this.y1 = 0;
    this.x2 = 1;
    this.y2 = 1;
    this.x3 = 0;
    this.y3 = 1;
  }
  module.exports = TextureUvs;
  TextureUvs.prototype.set = function(frame, baseFrame, rotate) {
    var tw = baseFrame.width;
    var th = baseFrame.height;
    if (rotate) {
      this.x0 = (frame.x + frame.height) / tw;
      this.y0 = frame.y / th;
      this.x1 = (frame.x + frame.height) / tw;
      this.y1 = (frame.y + frame.width) / th;
      this.x2 = frame.x / tw;
      this.y2 = (frame.y + frame.width) / th;
      this.x3 = frame.x / tw;
      this.y3 = frame.y / th;
    } else {
      this.x0 = frame.x / tw;
      this.y0 = frame.y / th;
      this.x1 = (frame.x + frame.width) / tw;
      this.y1 = frame.y / th;
      this.x2 = (frame.x + frame.width) / tw;
      this.y2 = (frame.y + frame.height) / th;
      this.x3 = frame.x / tw;
      this.y3 = (frame.y + frame.height) / th;
    }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("bf", ["b4"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var CanvasGraphics = $__require('b4');
  function CanvasMaskManager() {}
  CanvasMaskManager.prototype.constructor = CanvasMaskManager;
  module.exports = CanvasMaskManager;
  CanvasMaskManager.prototype.pushMask = function(maskData, renderer) {
    renderer.context.save();
    var cacheAlpha = maskData.alpha;
    var transform = maskData.worldTransform;
    var resolution = renderer.resolution;
    renderer.context.setTransform(transform.a * resolution, transform.b * resolution, transform.c * resolution, transform.d * resolution, transform.tx * resolution, transform.ty * resolution);
    if (!maskData.texture) {
      CanvasGraphics.renderGraphicsMask(maskData, renderer.context);
      renderer.context.clip();
    }
    maskData.worldAlpha = cacheAlpha;
  };
  CanvasMaskManager.prototype.popMask = function(renderer) {
    renderer.context.restore();
  };
  CanvasMaskManager.prototype.destroy = function() {};
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("c0", ["c1", "bf", "ac", "ab", "a0"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var SystemRenderer = $__require('c1'),
      CanvasMaskManager = $__require('bf'),
      utils = $__require('ac'),
      math = $__require('ab'),
      CONST = $__require('a0');
  function CanvasRenderer(width, height, options) {
    options = options || {};
    SystemRenderer.call(this, 'Canvas', width, height, options);
    this.type = CONST.RENDERER_TYPE.CANVAS;
    this.context = this.view.getContext('2d', {alpha: this.transparent});
    this.refresh = true;
    this.maskManager = new CanvasMaskManager();
    this.smoothProperty = 'imageSmoothingEnabled';
    if (!this.context.imageSmoothingEnabled) {
      if (this.context.webkitImageSmoothingEnabled) {
        this.smoothProperty = 'webkitImageSmoothingEnabled';
      } else if (this.context.mozImageSmoothingEnabled) {
        this.smoothProperty = 'mozImageSmoothingEnabled';
      } else if (this.context.oImageSmoothingEnabled) {
        this.smoothProperty = 'oImageSmoothingEnabled';
      } else if (this.context.msImageSmoothingEnabled) {
        this.smoothProperty = 'msImageSmoothingEnabled';
      }
    }
    this.initPlugins();
    this._mapBlendModes();
    this._tempDisplayObjectParent = {
      worldTransform: new math.Matrix(),
      worldAlpha: 1
    };
    this.resize(width, height);
  }
  CanvasRenderer.prototype = Object.create(SystemRenderer.prototype);
  CanvasRenderer.prototype.constructor = CanvasRenderer;
  module.exports = CanvasRenderer;
  utils.pluginTarget.mixin(CanvasRenderer);
  CanvasRenderer.prototype.render = function(object) {
    this.emit('prerender');
    var cacheParent = object.parent;
    this._lastObjectRendered = object;
    object.parent = this._tempDisplayObjectParent;
    object.updateTransform();
    object.parent = cacheParent;
    this.context.setTransform(1, 0, 0, 1, 0, 0);
    this.context.globalAlpha = 1;
    this.context.globalCompositeOperation = this.blendModes[CONST.BLEND_MODES.NORMAL];
    if (navigator.isCocoonJS && this.view.screencanvas) {
      this.context.fillStyle = 'black';
      this.context.clear();
    }
    if (this.clearBeforeRender) {
      if (this.transparent) {
        this.context.clearRect(0, 0, this.width, this.height);
      } else {
        this.context.fillStyle = this._backgroundColorString;
        this.context.fillRect(0, 0, this.width, this.height);
      }
    }
    this.renderDisplayObject(object, this.context);
    this.emit('postrender');
  };
  CanvasRenderer.prototype.destroy = function(removeView) {
    this.destroyPlugins();
    SystemRenderer.prototype.destroy.call(this, removeView);
    this.context = null;
    this.refresh = true;
    this.maskManager.destroy();
    this.maskManager = null;
    this.smoothProperty = null;
  };
  CanvasRenderer.prototype.renderDisplayObject = function(displayObject, context) {
    var tempContext = this.context;
    this.context = context;
    displayObject.renderCanvas(this);
    this.context = tempContext;
  };
  CanvasRenderer.prototype.resize = function(w, h) {
    SystemRenderer.prototype.resize.call(this, w, h);
    if (this.smoothProperty) {
      this.context[this.smoothProperty] = (CONST.SCALE_MODES.DEFAULT === CONST.SCALE_MODES.LINEAR);
    }
  };
  CanvasRenderer.prototype._mapBlendModes = function() {
    if (!this.blendModes) {
      this.blendModes = {};
      if (utils.canUseNewCanvasBlendModes()) {
        this.blendModes[CONST.BLEND_MODES.NORMAL] = 'source-over';
        this.blendModes[CONST.BLEND_MODES.ADD] = 'lighter';
        this.blendModes[CONST.BLEND_MODES.MULTIPLY] = 'multiply';
        this.blendModes[CONST.BLEND_MODES.SCREEN] = 'screen';
        this.blendModes[CONST.BLEND_MODES.OVERLAY] = 'overlay';
        this.blendModes[CONST.BLEND_MODES.DARKEN] = 'darken';
        this.blendModes[CONST.BLEND_MODES.LIGHTEN] = 'lighten';
        this.blendModes[CONST.BLEND_MODES.COLOR_DODGE] = 'color-dodge';
        this.blendModes[CONST.BLEND_MODES.COLOR_BURN] = 'color-burn';
        this.blendModes[CONST.BLEND_MODES.HARD_LIGHT] = 'hard-light';
        this.blendModes[CONST.BLEND_MODES.SOFT_LIGHT] = 'soft-light';
        this.blendModes[CONST.BLEND_MODES.DIFFERENCE] = 'difference';
        this.blendModes[CONST.BLEND_MODES.EXCLUSION] = 'exclusion';
        this.blendModes[CONST.BLEND_MODES.HUE] = 'hue';
        this.blendModes[CONST.BLEND_MODES.SATURATION] = 'saturate';
        this.blendModes[CONST.BLEND_MODES.COLOR] = 'color';
        this.blendModes[CONST.BLEND_MODES.LUMINOSITY] = 'luminosity';
      } else {
        this.blendModes[CONST.BLEND_MODES.NORMAL] = 'source-over';
        this.blendModes[CONST.BLEND_MODES.ADD] = 'lighter';
        this.blendModes[CONST.BLEND_MODES.MULTIPLY] = 'source-over';
        this.blendModes[CONST.BLEND_MODES.SCREEN] = 'source-over';
        this.blendModes[CONST.BLEND_MODES.OVERLAY] = 'source-over';
        this.blendModes[CONST.BLEND_MODES.DARKEN] = 'source-over';
        this.blendModes[CONST.BLEND_MODES.LIGHTEN] = 'source-over';
        this.blendModes[CONST.BLEND_MODES.COLOR_DODGE] = 'source-over';
        this.blendModes[CONST.BLEND_MODES.COLOR_BURN] = 'source-over';
        this.blendModes[CONST.BLEND_MODES.HARD_LIGHT] = 'source-over';
        this.blendModes[CONST.BLEND_MODES.SOFT_LIGHT] = 'source-over';
        this.blendModes[CONST.BLEND_MODES.DIFFERENCE] = 'source-over';
        this.blendModes[CONST.BLEND_MODES.EXCLUSION] = 'source-over';
        this.blendModes[CONST.BLEND_MODES.HUE] = 'source-over';
        this.blendModes[CONST.BLEND_MODES.SATURATION] = 'source-over';
        this.blendModes[CONST.BLEND_MODES.COLOR] = 'source-over';
        this.blendModes[CONST.BLEND_MODES.LUMINOSITY] = 'source-over';
      }
    }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b4", ["a0"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var CONST = $__require('a0');
  var CanvasGraphics = {};
  module.exports = CanvasGraphics;
  CanvasGraphics.renderGraphics = function(graphics, context) {
    var worldAlpha = graphics.worldAlpha;
    if (graphics.dirty) {
      this.updateGraphicsTint(graphics);
      graphics.dirty = false;
    }
    for (var i = 0; i < graphics.graphicsData.length; i++) {
      var data = graphics.graphicsData[i];
      var shape = data.shape;
      var fillColor = data._fillTint;
      var lineColor = data._lineTint;
      context.lineWidth = data.lineWidth;
      if (data.type === CONST.SHAPES.POLY) {
        context.beginPath();
        var points = shape.points;
        context.moveTo(points[0], points[1]);
        for (var j = 1; j < points.length / 2; j++) {
          context.lineTo(points[j * 2], points[j * 2 + 1]);
        }
        if (shape.closed) {
          context.lineTo(points[0], points[1]);
        }
        if (points[0] === points[points.length - 2] && points[1] === points[points.length - 1]) {
          context.closePath();
        }
        if (data.fill) {
          context.globalAlpha = data.fillAlpha * worldAlpha;
          context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
          context.fill();
        }
        if (data.lineWidth) {
          context.globalAlpha = data.lineAlpha * worldAlpha;
          context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
          context.stroke();
        }
      } else if (data.type === CONST.SHAPES.RECT) {
        if (data.fillColor || data.fillColor === 0) {
          context.globalAlpha = data.fillAlpha * worldAlpha;
          context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
          context.fillRect(shape.x, shape.y, shape.width, shape.height);
        }
        if (data.lineWidth) {
          context.globalAlpha = data.lineAlpha * worldAlpha;
          context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
          context.strokeRect(shape.x, shape.y, shape.width, shape.height);
        }
      } else if (data.type === CONST.SHAPES.CIRC) {
        context.beginPath();
        context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
        context.closePath();
        if (data.fill) {
          context.globalAlpha = data.fillAlpha * worldAlpha;
          context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
          context.fill();
        }
        if (data.lineWidth) {
          context.globalAlpha = data.lineAlpha * worldAlpha;
          context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
          context.stroke();
        }
      } else if (data.type === CONST.SHAPES.ELIP) {
        var w = shape.width * 2;
        var h = shape.height * 2;
        var x = shape.x - w / 2;
        var y = shape.y - h / 2;
        context.beginPath();
        var kappa = 0.5522848,
            ox = (w / 2) * kappa,
            oy = (h / 2) * kappa,
            xe = x + w,
            ye = y + h,
            xm = x + w / 2,
            ym = y + h / 2;
        context.moveTo(x, ym);
        context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
        context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
        context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
        context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
        context.closePath();
        if (data.fill) {
          context.globalAlpha = data.fillAlpha * worldAlpha;
          context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
          context.fill();
        }
        if (data.lineWidth) {
          context.globalAlpha = data.lineAlpha * worldAlpha;
          context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
          context.stroke();
        }
      } else if (data.type === CONST.SHAPES.RREC) {
        var rx = shape.x;
        var ry = shape.y;
        var width = shape.width;
        var height = shape.height;
        var radius = shape.radius;
        var maxRadius = Math.min(width, height) / 2 | 0;
        radius = radius > maxRadius ? maxRadius : radius;
        context.beginPath();
        context.moveTo(rx, ry + radius);
        context.lineTo(rx, ry + height - radius);
        context.quadraticCurveTo(rx, ry + height, rx + radius, ry + height);
        context.lineTo(rx + width - radius, ry + height);
        context.quadraticCurveTo(rx + width, ry + height, rx + width, ry + height - radius);
        context.lineTo(rx + width, ry + radius);
        context.quadraticCurveTo(rx + width, ry, rx + width - radius, ry);
        context.lineTo(rx + radius, ry);
        context.quadraticCurveTo(rx, ry, rx, ry + radius);
        context.closePath();
        if (data.fillColor || data.fillColor === 0) {
          context.globalAlpha = data.fillAlpha * worldAlpha;
          context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
          context.fill();
        }
        if (data.lineWidth) {
          context.globalAlpha = data.lineAlpha * worldAlpha;
          context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
          context.stroke();
        }
      }
    }
  };
  CanvasGraphics.renderGraphicsMask = function(graphics, context) {
    var len = graphics.graphicsData.length;
    if (len === 0) {
      return;
    }
    context.beginPath();
    for (var i = 0; i < len; i++) {
      var data = graphics.graphicsData[i];
      var shape = data.shape;
      if (data.type === CONST.SHAPES.POLY) {
        var points = shape.points;
        context.moveTo(points[0], points[1]);
        for (var j = 1; j < points.length / 2; j++) {
          context.lineTo(points[j * 2], points[j * 2 + 1]);
        }
        if (points[0] === points[points.length - 2] && points[1] === points[points.length - 1]) {
          context.closePath();
        }
      } else if (data.type === CONST.SHAPES.RECT) {
        context.rect(shape.x, shape.y, shape.width, shape.height);
        context.closePath();
      } else if (data.type === CONST.SHAPES.CIRC) {
        context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
        context.closePath();
      } else if (data.type === CONST.SHAPES.ELIP) {
        var w = shape.width * 2;
        var h = shape.height * 2;
        var x = shape.x - w / 2;
        var y = shape.y - h / 2;
        var kappa = 0.5522848,
            ox = (w / 2) * kappa,
            oy = (h / 2) * kappa,
            xe = x + w,
            ye = y + h,
            xm = x + w / 2,
            ym = y + h / 2;
        context.moveTo(x, ym);
        context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
        context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
        context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
        context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
        context.closePath();
      } else if (data.type === CONST.SHAPES.RREC) {
        var rx = shape.x;
        var ry = shape.y;
        var width = shape.width;
        var height = shape.height;
        var radius = shape.radius;
        var maxRadius = Math.min(width, height) / 2 | 0;
        radius = radius > maxRadius ? maxRadius : radius;
        context.moveTo(rx, ry + radius);
        context.lineTo(rx, ry + height - radius);
        context.quadraticCurveTo(rx, ry + height, rx + radius, ry + height);
        context.lineTo(rx + width - radius, ry + height);
        context.quadraticCurveTo(rx + width, ry + height, rx + width, ry + height - radius);
        context.lineTo(rx + width, ry + radius);
        context.quadraticCurveTo(rx + width, ry, rx + width - radius, ry);
        context.lineTo(rx + radius, ry);
        context.quadraticCurveTo(rx, ry, rx, ry + radius);
        context.closePath();
      }
    }
  };
  CanvasGraphics.updateGraphicsTint = function(graphics) {
    if (graphics.tint === 0xFFFFFF && graphics._prevTint === graphics.tint) {
      return;
    }
    graphics._prevTint = graphics.tint;
    var tintR = (graphics.tint >> 16 & 0xFF) / 255;
    var tintG = (graphics.tint >> 8 & 0xFF) / 255;
    var tintB = (graphics.tint & 0xFF) / 255;
    for (var i = 0; i < graphics.graphicsData.length; i++) {
      var data = graphics.graphicsData[i];
      var fillColor = data.fillColor | 0;
      var lineColor = data.lineColor | 0;
      data._fillTint = (((fillColor >> 16 & 0xFF) / 255 * tintR * 255 << 16) + ((fillColor >> 8 & 0xFF) / 255 * tintG * 255 << 8) + (fillColor & 0xFF) / 255 * tintB * 255);
      data._lineTint = (((lineColor >> 16 & 0xFF) / 255 * tintR * 255 << 16) + ((lineColor >> 8 & 0xFF) / 255 * tintG * 255 << 8) + (lineColor & 0xFF) / 255 * tintB * 255);
    }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b3", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function CanvasBuffer(width, height) {
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.canvas.width = width;
    this.canvas.height = height;
  }
  CanvasBuffer.prototype.constructor = CanvasBuffer;
  module.exports = CanvasBuffer;
  Object.defineProperties(CanvasBuffer.prototype, {
    width: {
      get: function() {
        return this.canvas.width;
      },
      set: function(val) {
        this.canvas.width = val;
      }
    },
    height: {
      get: function() {
        return this.canvas.height;
      },
      set: function(val) {
        this.canvas.height = val;
      }
    }
  });
  CanvasBuffer.prototype.clear = function() {
    this.context.setTransform(1, 0, 0, 1, 0, 0);
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };
  CanvasBuffer.prototype.resize = function(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
  };
  CanvasBuffer.prototype.destroy = function() {
    this.context = null;
    this.canvas = null;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("c1", ["ac", "ab", "a0", "65"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var utils = $__require('ac'),
      math = $__require('ab'),
      CONST = $__require('a0'),
      EventEmitter = $__require('65');
  function SystemRenderer(system, width, height, options) {
    EventEmitter.call(this);
    utils.sayHello(system);
    if (options) {
      for (var i in CONST.DEFAULT_RENDER_OPTIONS) {
        if (typeof options[i] === 'undefined') {
          options[i] = CONST.DEFAULT_RENDER_OPTIONS[i];
        }
      }
    } else {
      options = CONST.DEFAULT_RENDER_OPTIONS;
    }
    this.type = CONST.RENDERER_TYPE.UNKNOWN;
    this.width = width || 800;
    this.height = height || 600;
    this.view = options.view || document.createElement('canvas');
    this.resolution = options.resolution;
    this.transparent = options.transparent;
    this.autoResize = options.autoResize || false;
    this.blendModes = null;
    this.preserveDrawingBuffer = options.preserveDrawingBuffer;
    this.clearBeforeRender = options.clearBeforeRender;
    this.roundPixels = options.roundPixels;
    this._backgroundColor = 0x000000;
    this._backgroundColorRgb = [0, 0, 0];
    this._backgroundColorString = '#000000';
    this.backgroundColor = options.backgroundColor || this._backgroundColor;
    this._tempDisplayObjectParent = {
      worldTransform: new math.Matrix(),
      worldAlpha: 1,
      children: []
    };
    this._lastObjectRendered = this._tempDisplayObjectParent;
  }
  SystemRenderer.prototype = Object.create(EventEmitter.prototype);
  SystemRenderer.prototype.constructor = SystemRenderer;
  module.exports = SystemRenderer;
  Object.defineProperties(SystemRenderer.prototype, {backgroundColor: {
      get: function() {
        return this._backgroundColor;
      },
      set: function(val) {
        this._backgroundColor = val;
        this._backgroundColorString = utils.hex2string(val);
        utils.hex2rgb(val, this._backgroundColorRgb);
      }
    }});
  SystemRenderer.prototype.resize = function(width, height) {
    this.width = width * this.resolution;
    this.height = height * this.resolution;
    this.view.width = this.width;
    this.view.height = this.height;
    if (this.autoResize) {
      this.view.style.width = this.width / this.resolution + 'px';
      this.view.style.height = this.height / this.resolution + 'px';
    }
  };
  SystemRenderer.prototype.destroy = function(removeView) {
    if (removeView && this.view.parentNode) {
      this.view.parentNode.removeChild(this.view);
    }
    this.type = CONST.RENDERER_TYPE.UNKNOWN;
    this.width = 0;
    this.height = 0;
    this.view = null;
    this.resolution = 0;
    this.transparent = false;
    this.autoResize = false;
    this.blendModes = null;
    this.preserveDrawingBuffer = false;
    this.clearBeforeRender = false;
    this.roundPixels = false;
    this._backgroundColor = 0;
    this._backgroundColorRgb = null;
    this._backgroundColorString = null;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("c2", ["c3", "c4"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var WebGLManager = $__require('c3'),
      AlphaMaskFilter = $__require('c4');
  function MaskManager(renderer) {
    WebGLManager.call(this, renderer);
    this.stencilStack = [];
    this.reverse = true;
    this.count = 0;
    this.alphaMaskPool = [];
  }
  MaskManager.prototype = Object.create(WebGLManager.prototype);
  MaskManager.prototype.constructor = MaskManager;
  module.exports = MaskManager;
  MaskManager.prototype.pushMask = function(target, maskData) {
    if (maskData.texture) {
      this.pushSpriteMask(target, maskData);
    } else {
      this.pushStencilMask(target, maskData);
    }
  };
  MaskManager.prototype.popMask = function(target, maskData) {
    if (maskData.texture) {
      this.popSpriteMask(target, maskData);
    } else {
      this.popStencilMask(target, maskData);
    }
  };
  MaskManager.prototype.pushSpriteMask = function(target, maskData) {
    var alphaMaskFilter = this.alphaMaskPool.pop();
    if (!alphaMaskFilter) {
      alphaMaskFilter = [new AlphaMaskFilter(maskData)];
    }
    alphaMaskFilter[0].maskSprite = maskData;
    this.renderer.filterManager.pushFilter(target, alphaMaskFilter);
  };
  MaskManager.prototype.popSpriteMask = function() {
    var filters = this.renderer.filterManager.popFilter();
    this.alphaMaskPool.push(filters);
  };
  MaskManager.prototype.pushStencilMask = function(target, maskData) {
    this.renderer.stencilManager.pushMask(maskData);
  };
  MaskManager.prototype.popStencilMask = function(target, maskData) {
    this.renderer.stencilManager.popMask(maskData);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("c5", ["c3", "ac"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var WebGLManager = $__require('c3'),
      utils = $__require('ac');
  function WebGLMaskManager(renderer) {
    WebGLManager.call(this, renderer);
    this.stencilMaskStack = null;
  }
  WebGLMaskManager.prototype = Object.create(WebGLManager.prototype);
  WebGLMaskManager.prototype.constructor = WebGLMaskManager;
  module.exports = WebGLMaskManager;
  WebGLMaskManager.prototype.setMaskStack = function(stencilMaskStack) {
    this.stencilMaskStack = stencilMaskStack;
    var gl = this.renderer.gl;
    if (stencilMaskStack.stencilStack.length === 0) {
      gl.disable(gl.STENCIL_TEST);
    } else {
      gl.enable(gl.STENCIL_TEST);
    }
  };
  WebGLMaskManager.prototype.pushStencil = function(graphics, webGLData) {
    this.renderer.currentRenderTarget.attachStencilBuffer();
    var gl = this.renderer.gl,
        sms = this.stencilMaskStack;
    this.bindGraphics(graphics, webGLData);
    if (sms.stencilStack.length === 0) {
      gl.enable(gl.STENCIL_TEST);
      gl.clear(gl.STENCIL_BUFFER_BIT);
      sms.reverse = true;
      sms.count = 0;
    }
    sms.stencilStack.push(webGLData);
    var level = sms.count;
    gl.colorMask(false, false, false, false);
    gl.stencilFunc(gl.ALWAYS, 0, 0xFF);
    gl.stencilOp(gl.KEEP, gl.KEEP, gl.INVERT);
    if (webGLData.mode === 1) {
      gl.drawElements(gl.TRIANGLE_FAN, webGLData.indices.length - 4, gl.UNSIGNED_SHORT, 0);
      if (sms.reverse) {
        gl.stencilFunc(gl.EQUAL, 0xFF - level, 0xFF);
        gl.stencilOp(gl.KEEP, gl.KEEP, gl.DECR);
      } else {
        gl.stencilFunc(gl.EQUAL, level, 0xFF);
        gl.stencilOp(gl.KEEP, gl.KEEP, gl.INCR);
      }
      gl.drawElements(gl.TRIANGLE_FAN, 4, gl.UNSIGNED_SHORT, (webGLData.indices.length - 4) * 2);
      if (sms.reverse) {
        gl.stencilFunc(gl.EQUAL, 0xFF - (level + 1), 0xFF);
      } else {
        gl.stencilFunc(gl.EQUAL, level + 1, 0xFF);
      }
      sms.reverse = !sms.reverse;
    } else {
      if (!sms.reverse) {
        gl.stencilFunc(gl.EQUAL, 0xFF - level, 0xFF);
        gl.stencilOp(gl.KEEP, gl.KEEP, gl.DECR);
      } else {
        gl.stencilFunc(gl.EQUAL, level, 0xFF);
        gl.stencilOp(gl.KEEP, gl.KEEP, gl.INCR);
      }
      gl.drawElements(gl.TRIANGLE_STRIP, webGLData.indices.length, gl.UNSIGNED_SHORT, 0);
      if (!sms.reverse) {
        gl.stencilFunc(gl.EQUAL, 0xFF - (level + 1), 0xFF);
      } else {
        gl.stencilFunc(gl.EQUAL, level + 1, 0xFF);
      }
    }
    gl.colorMask(true, true, true, true);
    gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
    sms.count++;
  };
  WebGLMaskManager.prototype.bindGraphics = function(graphics, webGLData) {
    var gl = this.renderer.gl;
    var shader;
    if (webGLData.mode === 1) {
      shader = this.renderer.shaderManager.complexPrimitiveShader;
      this.renderer.shaderManager.setShader(shader);
      gl.uniformMatrix3fv(shader.uniforms.translationMatrix._location, false, graphics.worldTransform.toArray(true));
      gl.uniformMatrix3fv(shader.uniforms.projectionMatrix._location, false, this.renderer.currentRenderTarget.projectionMatrix.toArray(true));
      gl.uniform3fv(shader.uniforms.tint._location, utils.hex2rgb(graphics.tint));
      gl.uniform3fv(shader.uniforms.color._location, webGLData.color);
      gl.uniform1f(shader.uniforms.alpha._location, graphics.worldAlpha);
      gl.bindBuffer(gl.ARRAY_BUFFER, webGLData.buffer);
      gl.vertexAttribPointer(shader.attributes.aVertexPosition, 2, gl.FLOAT, false, 4 * 2, 0);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, webGLData.indexBuffer);
    } else {
      shader = this.renderer.shaderManager.primitiveShader;
      this.renderer.shaderManager.setShader(shader);
      gl.uniformMatrix3fv(shader.uniforms.translationMatrix._location, false, graphics.worldTransform.toArray(true));
      gl.uniformMatrix3fv(shader.uniforms.projectionMatrix._location, false, this.renderer.currentRenderTarget.projectionMatrix.toArray(true));
      gl.uniform3fv(shader.uniforms.tint._location, utils.hex2rgb(graphics.tint));
      gl.uniform1f(shader.uniforms.alpha._location, graphics.worldAlpha);
      gl.bindBuffer(gl.ARRAY_BUFFER, webGLData.buffer);
      gl.vertexAttribPointer(shader.attributes.aVertexPosition, 2, gl.FLOAT, false, 4 * 6, 0);
      gl.vertexAttribPointer(shader.attributes.aColor, 4, gl.FLOAT, false, 4 * 6, 2 * 4);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, webGLData.indexBuffer);
    }
  };
  WebGLMaskManager.prototype.popStencil = function(graphics, webGLData) {
    var gl = this.renderer.gl,
        sms = this.stencilMaskStack;
    sms.stencilStack.pop();
    sms.count--;
    if (sms.stencilStack.length === 0) {
      gl.disable(gl.STENCIL_TEST);
    } else {
      var level = sms.count;
      this.bindGraphics(graphics, webGLData);
      gl.colorMask(false, false, false, false);
      if (webGLData.mode === 1) {
        sms.reverse = !sms.reverse;
        if (sms.reverse) {
          gl.stencilFunc(gl.EQUAL, 0xFF - (level + 1), 0xFF);
          gl.stencilOp(gl.KEEP, gl.KEEP, gl.INCR);
        } else {
          gl.stencilFunc(gl.EQUAL, level + 1, 0xFF);
          gl.stencilOp(gl.KEEP, gl.KEEP, gl.DECR);
        }
        gl.drawElements(gl.TRIANGLE_FAN, 4, gl.UNSIGNED_SHORT, (webGLData.indices.length - 4) * 2);
        gl.stencilFunc(gl.ALWAYS, 0, 0xFF);
        gl.stencilOp(gl.KEEP, gl.KEEP, gl.INVERT);
        gl.drawElements(gl.TRIANGLE_FAN, webGLData.indices.length - 4, gl.UNSIGNED_SHORT, 0);
        this.renderer.drawCount += 2;
        if (!sms.reverse) {
          gl.stencilFunc(gl.EQUAL, 0xFF - (level), 0xFF);
        } else {
          gl.stencilFunc(gl.EQUAL, level, 0xFF);
        }
      } else {
        if (!sms.reverse) {
          gl.stencilFunc(gl.EQUAL, 0xFF - (level + 1), 0xFF);
          gl.stencilOp(gl.KEEP, gl.KEEP, gl.INCR);
        } else {
          gl.stencilFunc(gl.EQUAL, level + 1, 0xFF);
          gl.stencilOp(gl.KEEP, gl.KEEP, gl.DECR);
        }
        gl.drawElements(gl.TRIANGLE_STRIP, webGLData.indices.length, gl.UNSIGNED_SHORT, 0);
        this.renderer.drawCount++;
        if (!sms.reverse) {
          gl.stencilFunc(gl.EQUAL, 0xFF - (level), 0xFF);
        } else {
          gl.stencilFunc(gl.EQUAL, level, 0xFF);
        }
      }
      gl.colorMask(true, true, true, true);
      gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
    }
  };
  WebGLMaskManager.prototype.destroy = function() {
    WebGLManager.prototype.destroy.call(this);
    this.stencilMaskStack.stencilStack = null;
  };
  WebGLMaskManager.prototype.pushMask = function(maskData) {
    this.renderer.setObjectRenderer(this.renderer.plugins.graphics);
    if (maskData.dirty) {
      this.renderer.plugins.graphics.updateGraphics(maskData, this.renderer.gl);
    }
    if (!maskData._webGL[this.renderer.gl.id].data.length) {
      return;
    }
    this.pushStencil(maskData, maskData._webGL[this.renderer.gl.id].data[0]);
  };
  WebGLMaskManager.prototype.popMask = function(maskData) {
    this.renderer.setObjectRenderer(this.renderer.plugins.graphics);
    this.popStencil(maskData, maskData._webGL[this.renderer.gl.id].data[0]);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("c6", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function Quad(gl) {
    this.gl = gl;
    this.vertices = new Float32Array([0, 0, 200, 0, 200, 200, 0, 200]);
    this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]);
    this.colors = new Float32Array([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    this.indices = new Uint16Array([0, 1, 2, 0, 3, 2]);
    this.vertexBuffer = gl.createBuffer();
    this.indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, (8 + 8 + 16) * 4, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);
    this.upload();
  }
  Quad.prototype.constructor = Quad;
  Quad.prototype.map = function(rect, rect2) {
    var x = 0;
    var y = 0;
    this.uvs[0] = x;
    this.uvs[1] = y;
    this.uvs[2] = x + rect2.width / rect.width;
    this.uvs[3] = y;
    this.uvs[4] = x + rect2.width / rect.width;
    this.uvs[5] = y + rect2.height / rect.height;
    this.uvs[6] = x;
    this.uvs[7] = y + rect2.height / rect.height;
    x = rect2.x;
    y = rect2.y;
    this.vertices[0] = x;
    this.vertices[1] = y;
    this.vertices[2] = x + rect2.width;
    this.vertices[3] = y;
    this.vertices[4] = x + rect2.width;
    this.vertices[5] = y + rect2.height;
    this.vertices[6] = x;
    this.vertices[7] = y + rect2.height;
    this.upload();
  };
  Quad.prototype.upload = function() {
    var gl = this.gl;
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.vertices);
    gl.bufferSubData(gl.ARRAY_BUFFER, 8 * 4, this.uvs);
    gl.bufferSubData(gl.ARRAY_BUFFER, (8 + 8) * 4, this.colors);
  };
  Quad.prototype.destroy = function() {
    var gl = this.gl;
    gl.deleteBuffer(this.vertexBuffer);
    gl.deleteBuffer(this.indexBuffer);
  };
  module.exports = Quad;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("be", ["c3", "bd", "a0", "c6", "ab"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var WebGLManager = $__require('c3'),
      RenderTarget = $__require('bd'),
      CONST = $__require('a0'),
      Quad = $__require('c6'),
      math = $__require('ab');
  function FilterManager(renderer) {
    WebGLManager.call(this, renderer);
    this.filterStack = [];
    this.filterStack.push({
      renderTarget: renderer.currentRenderTarget,
      filter: [],
      bounds: null
    });
    this.texturePool = [];
    this.textureSize = new math.Rectangle(0, 0, renderer.width, renderer.height);
    this.currentFrame = null;
  }
  FilterManager.prototype = Object.create(WebGLManager.prototype);
  FilterManager.prototype.constructor = FilterManager;
  module.exports = FilterManager;
  FilterManager.prototype.onContextChange = function() {
    this.texturePool.length = 0;
    var gl = this.renderer.gl;
    this.quad = new Quad(gl);
  };
  FilterManager.prototype.setFilterStack = function(filterStack) {
    this.filterStack = filterStack;
  };
  FilterManager.prototype.pushFilter = function(target, filters) {
    var bounds = target.filterArea ? target.filterArea.clone() : target.getBounds();
    bounds.x = bounds.x | 0;
    bounds.y = bounds.y | 0;
    bounds.width = bounds.width | 0;
    bounds.height = bounds.height | 0;
    var padding = filters[0].padding | 0;
    bounds.x -= padding;
    bounds.y -= padding;
    bounds.width += padding * 2;
    bounds.height += padding * 2;
    if (this.renderer.currentRenderTarget.transform) {
      var transform = this.renderer.currentRenderTarget.transform;
      bounds.x += transform.tx;
      bounds.y += transform.ty;
      this.capFilterArea(bounds);
      bounds.x -= transform.tx;
      bounds.y -= transform.ty;
    } else {
      this.capFilterArea(bounds);
    }
    if (bounds.width > 0 && bounds.height > 0) {
      this.currentFrame = bounds;
      var texture = this.getRenderTarget();
      this.renderer.setRenderTarget(texture);
      texture.clear();
      this.filterStack.push({
        renderTarget: texture,
        filter: filters
      });
    } else {
      this.filterStack.push({
        renderTarget: null,
        filter: filters
      });
    }
  };
  FilterManager.prototype.popFilter = function() {
    var filterData = this.filterStack.pop();
    var previousFilterData = this.filterStack[this.filterStack.length - 1];
    var input = filterData.renderTarget;
    if (!filterData.renderTarget) {
      return;
    }
    var output = previousFilterData.renderTarget;
    var gl = this.renderer.gl;
    this.currentFrame = input.frame;
    this.quad.map(this.textureSize, input.frame);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.quad.vertexBuffer);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.quad.indexBuffer);
    var filters = filterData.filter;
    gl.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aVertexPosition, 2, gl.FLOAT, false, 0, 0);
    gl.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aTextureCoord, 2, gl.FLOAT, false, 0, 2 * 4 * 4);
    gl.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aColor, 4, gl.FLOAT, false, 0, 4 * 4 * 4);
    this.renderer.blendModeManager.setBlendMode(CONST.BLEND_MODES.NORMAL);
    if (filters.length === 1) {
      if (filters[0].uniforms.dimensions) {
        filters[0].uniforms.dimensions.value[0] = this.renderer.width;
        filters[0].uniforms.dimensions.value[1] = this.renderer.height;
        filters[0].uniforms.dimensions.value[2] = this.quad.vertices[0];
        filters[0].uniforms.dimensions.value[3] = this.quad.vertices[5];
      }
      filters[0].applyFilter(this.renderer, input, output);
      this.returnRenderTarget(input);
    } else {
      var flipTexture = input;
      var flopTexture = this.getRenderTarget(true);
      for (var i = 0; i < filters.length - 1; i++) {
        var filter = filters[i];
        if (filter.uniforms.dimensions) {
          filter.uniforms.dimensions.value[0] = this.renderer.width;
          filter.uniforms.dimensions.value[1] = this.renderer.height;
          filter.uniforms.dimensions.value[2] = this.quad.vertices[0];
          filter.uniforms.dimensions.value[3] = this.quad.vertices[5];
        }
        filter.applyFilter(this.renderer, flipTexture, flopTexture);
        var temp = flipTexture;
        flipTexture = flopTexture;
        flopTexture = temp;
      }
      filters[filters.length - 1].applyFilter(this.renderer, flipTexture, output);
      this.returnRenderTarget(flipTexture);
      this.returnRenderTarget(flopTexture);
    }
    return filterData.filter;
  };
  FilterManager.prototype.getRenderTarget = function(clear) {
    var renderTarget = this.texturePool.pop() || new RenderTarget(this.renderer.gl, this.textureSize.width, this.textureSize.height, CONST.SCALE_MODES.LINEAR, this.renderer.resolution * CONST.FILTER_RESOLUTION);
    renderTarget.frame = this.currentFrame;
    if (clear) {
      renderTarget.clear(true);
    }
    return renderTarget;
  };
  FilterManager.prototype.returnRenderTarget = function(renderTarget) {
    this.texturePool.push(renderTarget);
  };
  FilterManager.prototype.applyFilter = function(shader, inputTarget, outputTarget, clear) {
    var gl = this.renderer.gl;
    this.renderer.setRenderTarget(outputTarget);
    if (clear) {
      outputTarget.clear();
    }
    this.renderer.shaderManager.setShader(shader);
    shader.uniforms.projectionMatrix.value = this.renderer.currentRenderTarget.projectionMatrix.toArray(true);
    shader.syncUniforms();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, inputTarget.texture);
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
    this.renderer.drawCount++;
  };
  FilterManager.prototype.calculateMappedMatrix = function(filterArea, sprite, outputMatrix) {
    var worldTransform = sprite.worldTransform.copy(math.Matrix.TEMP_MATRIX),
        texture = sprite._texture.baseTexture;
    var mappedMatrix = outputMatrix.identity();
    var ratio = this.textureSize.height / this.textureSize.width;
    mappedMatrix.translate(filterArea.x / this.textureSize.width, filterArea.y / this.textureSize.height);
    mappedMatrix.scale(1, ratio);
    var translateScaleX = (this.textureSize.width / texture.width);
    var translateScaleY = (this.textureSize.height / texture.height);
    worldTransform.tx /= texture.width * translateScaleX;
    worldTransform.ty /= texture.width * translateScaleX;
    worldTransform.invert();
    mappedMatrix.prepend(worldTransform);
    mappedMatrix.scale(1, 1 / ratio);
    mappedMatrix.scale(translateScaleX, translateScaleY);
    mappedMatrix.translate(sprite.anchor.x, sprite.anchor.y);
    return mappedMatrix;
  };
  FilterManager.prototype.capFilterArea = function(filterArea) {
    if (filterArea.x < 0) {
      filterArea.width += filterArea.x;
      filterArea.x = 0;
    }
    if (filterArea.y < 0) {
      filterArea.height += filterArea.y;
      filterArea.y = 0;
    }
    if (filterArea.x + filterArea.width > this.textureSize.width) {
      filterArea.width = this.textureSize.width - filterArea.x;
    }
    if (filterArea.y + filterArea.height > this.textureSize.height) {
      filterArea.height = this.textureSize.height - filterArea.y;
    }
  };
  FilterManager.prototype.resize = function(width, height) {
    this.textureSize.width = width;
    this.textureSize.height = height;
    for (var i = 0; i < this.texturePool.length; i++) {
      this.texturePool[i].resize(width, height);
    }
  };
  FilterManager.prototype.destroy = function() {
    this.quad.destroy();
    WebGLManager.prototype.destroy.call(this);
    this.filterStack = null;
    this.offsetY = 0;
    for (var i = 0; i < this.texturePool.length; i++) {
      this.texturePool[i].destroy();
    }
    this.texturePool = null;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("c7", ["c3"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var WebGLManager = $__require('c3');
  function BlendModeManager(renderer) {
    WebGLManager.call(this, renderer);
    this.currentBlendMode = 99999;
  }
  BlendModeManager.prototype = Object.create(WebGLManager.prototype);
  BlendModeManager.prototype.constructor = BlendModeManager;
  module.exports = BlendModeManager;
  BlendModeManager.prototype.setBlendMode = function(blendMode) {
    if (this.currentBlendMode === blendMode) {
      return false;
    }
    this.currentBlendMode = blendMode;
    var mode = this.renderer.blendModes[this.currentBlendMode];
    this.renderer.gl.blendFunc(mode[0], mode[1]);
    return true;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a6", ["c1", "c8", "c2", "c5", "be", "c7", "bd", "a5", "c9", "ac", "a0"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var SystemRenderer = $__require('c1'),
      ShaderManager = $__require('c8'),
      MaskManager = $__require('c2'),
      StencilManager = $__require('c5'),
      FilterManager = $__require('be'),
      BlendModeManager = $__require('c7'),
      RenderTarget = $__require('bd'),
      ObjectRenderer = $__require('a5'),
      FXAAFilter = $__require('c9'),
      utils = $__require('ac'),
      CONST = $__require('a0');
  function WebGLRenderer(width, height, options) {
    options = options || {};
    SystemRenderer.call(this, 'WebGL', width, height, options);
    this.type = CONST.RENDERER_TYPE.WEBGL;
    this.handleContextLost = this.handleContextLost.bind(this);
    this.handleContextRestored = this.handleContextRestored.bind(this);
    this.view.addEventListener('webglcontextlost', this.handleContextLost, false);
    this.view.addEventListener('webglcontextrestored', this.handleContextRestored, false);
    this._useFXAA = !!options.forceFXAA && options.antialias;
    this._FXAAFilter = null;
    this._contextOptions = {
      alpha: this.transparent,
      antialias: options.antialias,
      premultipliedAlpha: this.transparent && this.transparent !== 'notMultiplied',
      stencil: true,
      preserveDrawingBuffer: options.preserveDrawingBuffer
    };
    this.drawCount = 0;
    this.shaderManager = new ShaderManager(this);
    this.maskManager = new MaskManager(this);
    this.stencilManager = new StencilManager(this);
    this.filterManager = new FilterManager(this);
    this.blendModeManager = new BlendModeManager(this);
    this.currentRenderTarget = null;
    this.currentRenderer = new ObjectRenderer(this);
    this.initPlugins();
    this._createContext();
    this._initContext();
    this._mapGlModes();
    this._managedTextures = [];
    this._renderTargetStack = [];
  }
  WebGLRenderer.prototype = Object.create(SystemRenderer.prototype);
  WebGLRenderer.prototype.constructor = WebGLRenderer;
  module.exports = WebGLRenderer;
  utils.pluginTarget.mixin(WebGLRenderer);
  WebGLRenderer.glContextId = 0;
  WebGLRenderer.prototype._createContext = function() {
    var gl = this.view.getContext('webgl', this._contextOptions) || this.view.getContext('experimental-webgl', this._contextOptions);
    this.gl = gl;
    if (!gl) {
      throw new Error('This browser does not support webGL. Try using the canvas renderer');
    }
    this.glContextId = WebGLRenderer.glContextId++;
    gl.id = this.glContextId;
    gl.renderer = this;
  };
  WebGLRenderer.prototype._initContext = function() {
    var gl = this.gl;
    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.CULL_FACE);
    gl.enable(gl.BLEND);
    this.renderTarget = new RenderTarget(gl, this.width, this.height, null, this.resolution, true);
    this.setRenderTarget(this.renderTarget);
    this.emit('context', gl);
    this.resize(this.width, this.height);
    if (!this._useFXAA) {
      this._useFXAA = (this._contextOptions.antialias && !gl.getContextAttributes().antialias);
    }
    if (this._useFXAA) {
      window.console.warn('FXAA antialiasing being used instead of native antialiasing');
      this._FXAAFilter = [new FXAAFilter()];
    }
  };
  WebGLRenderer.prototype.render = function(object) {
    this.emit('prerender');
    if (this.gl.isContextLost()) {
      return;
    }
    this.drawCount = 0;
    this._lastObjectRendered = object;
    if (this._useFXAA) {
      this._FXAAFilter[0].uniforms.resolution.value.x = this.width;
      this._FXAAFilter[0].uniforms.resolution.value.y = this.height;
      object.filterArea = this.renderTarget.size;
      object.filters = this._FXAAFilter;
    }
    var cacheParent = object.parent;
    object.parent = this._tempDisplayObjectParent;
    object.updateTransform();
    object.parent = cacheParent;
    var gl = this.gl;
    this.setRenderTarget(this.renderTarget);
    if (this.clearBeforeRender) {
      if (this.transparent) {
        gl.clearColor(0, 0, 0, 0);
      } else {
        gl.clearColor(this._backgroundColorRgb[0], this._backgroundColorRgb[1], this._backgroundColorRgb[2], 1);
      }
      gl.clear(gl.COLOR_BUFFER_BIT);
    }
    this.renderDisplayObject(object, this.renderTarget);
    this.emit('postrender');
  };
  WebGLRenderer.prototype.renderDisplayObject = function(displayObject, renderTarget, clear) {
    this.setRenderTarget(renderTarget);
    if (clear) {
      renderTarget.clear();
    }
    this.filterManager.setFilterStack(renderTarget.filterStack);
    displayObject.renderWebGL(this);
    this.currentRenderer.flush();
  };
  WebGLRenderer.prototype.setObjectRenderer = function(objectRenderer) {
    if (this.currentRenderer === objectRenderer) {
      return;
    }
    this.currentRenderer.stop();
    this.currentRenderer = objectRenderer;
    this.currentRenderer.start();
  };
  WebGLRenderer.prototype.setRenderTarget = function(renderTarget) {
    if (this.currentRenderTarget === renderTarget) {
      return;
    }
    this.currentRenderTarget = renderTarget;
    this.currentRenderTarget.activate();
    this.stencilManager.setMaskStack(renderTarget.stencilMaskStack);
  };
  WebGLRenderer.prototype.resize = function(width, height) {
    SystemRenderer.prototype.resize.call(this, width, height);
    this.filterManager.resize(width, height);
    this.renderTarget.resize(width, height);
    if (this.currentRenderTarget === this.renderTarget) {
      this.renderTarget.activate();
      this.gl.viewport(0, 0, this.width, this.height);
    }
  };
  WebGLRenderer.prototype.updateTexture = function(texture) {
    texture = texture.baseTexture || texture;
    if (!texture.hasLoaded) {
      return;
    }
    var gl = this.gl;
    if (!texture._glTextures[gl.id]) {
      texture._glTextures[gl.id] = gl.createTexture();
      texture.on('update', this.updateTexture, this);
      texture.on('dispose', this.destroyTexture, this);
      this._managedTextures.push(texture);
    }
    gl.bindTexture(gl.TEXTURE_2D, texture._glTextures[gl.id]);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, texture.premultipliedAlpha);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.source);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, texture.scaleMode === CONST.SCALE_MODES.LINEAR ? gl.LINEAR : gl.NEAREST);
    if (texture.mipmap && texture.isPowerOfTwo) {
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, texture.scaleMode === CONST.SCALE_MODES.LINEAR ? gl.LINEAR_MIPMAP_LINEAR : gl.NEAREST_MIPMAP_NEAREST);
      gl.generateMipmap(gl.TEXTURE_2D);
    } else {
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, texture.scaleMode === CONST.SCALE_MODES.LINEAR ? gl.LINEAR : gl.NEAREST);
    }
    if (!texture.isPowerOfTwo) {
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    } else {
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    }
    return texture._glTextures[gl.id];
  };
  WebGLRenderer.prototype.destroyTexture = function(texture, _skipRemove) {
    texture = texture.baseTexture || texture;
    if (!texture.hasLoaded) {
      return;
    }
    if (texture._glTextures[this.gl.id]) {
      this.gl.deleteTexture(texture._glTextures[this.gl.id]);
      delete texture._glTextures[this.gl.id];
      if (!_skipRemove) {
        var i = this._managedTextures.indexOf(texture);
        if (i !== -1) {
          utils.removeItems(this._managedTextures, i, 1);
        }
      }
    }
  };
  WebGLRenderer.prototype.handleContextLost = function(event) {
    event.preventDefault();
  };
  WebGLRenderer.prototype.handleContextRestored = function() {
    this._initContext();
    for (var i = 0; i < this._managedTextures.length; ++i) {
      var texture = this._managedTextures[i];
      if (texture._glTextures[this.gl.id]) {
        delete texture._glTextures[this.gl.id];
      }
    }
  };
  WebGLRenderer.prototype.destroy = function(removeView) {
    this.destroyPlugins();
    this.view.removeEventListener('webglcontextlost', this.handleContextLost);
    this.view.removeEventListener('webglcontextrestored', this.handleContextRestored);
    for (var i = 0; i < this._managedTextures.length; ++i) {
      var texture = this._managedTextures[i];
      this.destroyTexture(texture, true);
      texture.off('update', this.updateTexture, this);
      texture.off('dispose', this.destroyTexture, this);
    }
    SystemRenderer.prototype.destroy.call(this, removeView);
    this.uid = 0;
    this.shaderManager.destroy();
    this.maskManager.destroy();
    this.stencilManager.destroy();
    this.filterManager.destroy();
    this.blendModeManager.destroy();
    this.shaderManager = null;
    this.maskManager = null;
    this.filterManager = null;
    this.blendModeManager = null;
    this.currentRenderer = null;
    this.handleContextLost = null;
    this.handleContextRestored = null;
    this._contextOptions = null;
    this._managedTextures = null;
    this.drawCount = 0;
    this.gl.useProgram(null);
    this.gl = null;
  };
  WebGLRenderer.prototype._mapGlModes = function() {
    var gl = this.gl;
    if (!this.blendModes) {
      this.blendModes = {};
      this.blendModes[CONST.BLEND_MODES.NORMAL] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
      this.blendModes[CONST.BLEND_MODES.ADD] = [gl.SRC_ALPHA, gl.DST_ALPHA];
      this.blendModes[CONST.BLEND_MODES.MULTIPLY] = [gl.DST_COLOR, gl.ONE_MINUS_SRC_ALPHA];
      this.blendModes[CONST.BLEND_MODES.SCREEN] = [gl.SRC_ALPHA, gl.ONE];
      this.blendModes[CONST.BLEND_MODES.OVERLAY] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
      this.blendModes[CONST.BLEND_MODES.DARKEN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
      this.blendModes[CONST.BLEND_MODES.LIGHTEN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
      this.blendModes[CONST.BLEND_MODES.COLOR_DODGE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
      this.blendModes[CONST.BLEND_MODES.COLOR_BURN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
      this.blendModes[CONST.BLEND_MODES.HARD_LIGHT] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
      this.blendModes[CONST.BLEND_MODES.SOFT_LIGHT] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
      this.blendModes[CONST.BLEND_MODES.DIFFERENCE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
      this.blendModes[CONST.BLEND_MODES.EXCLUSION] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
      this.blendModes[CONST.BLEND_MODES.HUE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
      this.blendModes[CONST.BLEND_MODES.SATURATION] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
      this.blendModes[CONST.BLEND_MODES.COLOR] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
      this.blendModes[CONST.BLEND_MODES.LUMINOSITY] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    }
    if (!this.drawModes) {
      this.drawModes = {};
      this.drawModes[CONST.DRAW_MODES.POINTS] = gl.POINTS;
      this.drawModes[CONST.DRAW_MODES.LINES] = gl.LINES;
      this.drawModes[CONST.DRAW_MODES.LINE_LOOP] = gl.LINE_LOOP;
      this.drawModes[CONST.DRAW_MODES.LINE_STRIP] = gl.LINE_STRIP;
      this.drawModes[CONST.DRAW_MODES.TRIANGLES] = gl.TRIANGLES;
      this.drawModes[CONST.DRAW_MODES.TRIANGLE_STRIP] = gl.TRIANGLE_STRIP;
      this.drawModes[CONST.DRAW_MODES.TRIANGLE_FAN] = gl.TRIANGLE_FAN;
    }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("ca", ["cb"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Shader = $__require('cb');
  function ComplexPrimitiveShader(shaderManager) {
    Shader.call(this, shaderManager, ['attribute vec2 aVertexPosition;', 'uniform mat3 translationMatrix;', 'uniform mat3 projectionMatrix;', 'uniform vec3 tint;', 'uniform float alpha;', 'uniform vec3 color;', 'varying vec4 vColor;', 'void main(void){', '   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);', '   vColor = vec4(color * alpha * tint, alpha);', '}'].join('\n'), ['precision mediump float;', 'varying vec4 vColor;', 'void main(void){', '   gl_FragColor = vColor;', '}'].join('\n'), {
      tint: {
        type: '3f',
        value: [0, 0, 0]
      },
      alpha: {
        type: '1f',
        value: 0
      },
      color: {
        type: '3f',
        value: [0, 0, 0]
      },
      translationMatrix: {
        type: 'mat3',
        value: new Float32Array(9)
      },
      projectionMatrix: {
        type: 'mat3',
        value: new Float32Array(9)
      }
    }, {aVertexPosition: 0});
  }
  ComplexPrimitiveShader.prototype = Object.create(Shader.prototype);
  ComplexPrimitiveShader.prototype.constructor = ComplexPrimitiveShader;
  module.exports = ComplexPrimitiveShader;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("cc", ["cb"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Shader = $__require('cb');
  function PrimitiveShader(shaderManager) {
    Shader.call(this, shaderManager, ['attribute vec2 aVertexPosition;', 'attribute vec4 aColor;', 'uniform mat3 translationMatrix;', 'uniform mat3 projectionMatrix;', 'uniform float alpha;', 'uniform float flipY;', 'uniform vec3 tint;', 'varying vec4 vColor;', 'void main(void){', '   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);', '   vColor = aColor * vec4(tint * alpha, alpha);', '}'].join('\n'), ['precision mediump float;', 'varying vec4 vColor;', 'void main(void){', '   gl_FragColor = vColor;', '}'].join('\n'), {
      tint: {
        type: '3f',
        value: [0, 0, 0]
      },
      alpha: {
        type: '1f',
        value: 0
      },
      translationMatrix: {
        type: 'mat3',
        value: new Float32Array(9)
      },
      projectionMatrix: {
        type: 'mat3',
        value: new Float32Array(9)
      }
    }, {
      aVertexPosition: 0,
      aColor: 0
    });
  }
  PrimitiveShader.prototype = Object.create(Shader.prototype);
  PrimitiveShader.prototype.constructor = PrimitiveShader;
  module.exports = PrimitiveShader;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("c8", ["c3", "a8", "ca", "cc", "ac"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var WebGLManager = $__require('c3'),
      TextureShader = $__require('a8'),
      ComplexPrimitiveShader = $__require('ca'),
      PrimitiveShader = $__require('cc'),
      utils = $__require('ac');
  function ShaderManager(renderer) {
    WebGLManager.call(this, renderer);
    this.maxAttibs = 10;
    this.attribState = [];
    this.tempAttribState = [];
    for (var i = 0; i < this.maxAttibs; i++) {
      this.attribState[i] = false;
    }
    this.stack = [];
    this._currentId = -1;
    this.currentShader = null;
  }
  ShaderManager.prototype = Object.create(WebGLManager.prototype);
  ShaderManager.prototype.constructor = ShaderManager;
  utils.pluginTarget.mixin(ShaderManager);
  module.exports = ShaderManager;
  ShaderManager.prototype.onContextChange = function() {
    this.initPlugins();
    var gl = this.renderer.gl;
    this.maxAttibs = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
    this.attribState = [];
    for (var i = 0; i < this.maxAttibs; i++) {
      this.attribState[i] = false;
    }
    this.defaultShader = new TextureShader(this);
    this.primitiveShader = new PrimitiveShader(this);
    this.complexPrimitiveShader = new ComplexPrimitiveShader(this);
  };
  ShaderManager.prototype.setAttribs = function(attribs) {
    var i;
    for (i = 0; i < this.tempAttribState.length; i++) {
      this.tempAttribState[i] = false;
    }
    for (var a in attribs) {
      this.tempAttribState[attribs[a]] = true;
    }
    var gl = this.renderer.gl;
    for (i = 0; i < this.attribState.length; i++) {
      if (this.attribState[i] !== this.tempAttribState[i]) {
        this.attribState[i] = this.tempAttribState[i];
        if (this.attribState[i]) {
          gl.enableVertexAttribArray(i);
        } else {
          gl.disableVertexAttribArray(i);
        }
      }
    }
  };
  ShaderManager.prototype.setShader = function(shader) {
    if (this._currentId === shader.uid) {
      return false;
    }
    this._currentId = shader.uid;
    this.currentShader = shader;
    this.renderer.gl.useProgram(shader.program);
    this.setAttribs(shader.attributes);
    return true;
  };
  ShaderManager.prototype.destroy = function() {
    this.primitiveShader.destroy();
    this.complexPrimitiveShader.destroy();
    WebGLManager.prototype.destroy.call(this);
    this.destroyPlugins();
    this.attribState = null;
    this.tempAttribState = null;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("c3", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function WebGLManager(renderer) {
    this.renderer = renderer;
    this.renderer.on('context', this.onContextChange, this);
  }
  WebGLManager.prototype.constructor = WebGLManager;
  module.exports = WebGLManager;
  WebGLManager.prototype.onContextChange = function() {};
  WebGLManager.prototype.destroy = function() {
    this.renderer.off('context', this.onContextChange, this);
    this.renderer = null;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a5", ["c3"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var WebGLManager = $__require('c3');
  function ObjectRenderer(renderer) {
    WebGLManager.call(this, renderer);
  }
  ObjectRenderer.prototype = Object.create(WebGLManager.prototype);
  ObjectRenderer.prototype.constructor = ObjectRenderer;
  module.exports = ObjectRenderer;
  ObjectRenderer.prototype.start = function() {};
  ObjectRenderer.prototype.stop = function() {
    this.flush();
  };
  ObjectRenderer.prototype.flush = function() {};
  ObjectRenderer.prototype.render = function(object) {};
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("cd", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function StencilMaskStack() {
    this.stencilStack = [];
    this.reverse = true;
    this.count = 0;
  }
  StencilMaskStack.prototype.constructor = StencilMaskStack;
  module.exports = StencilMaskStack;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("bd", ["ab", "ac", "a0", "cd"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var math = $__require('ab'),
      utils = $__require('ac'),
      CONST = $__require('a0'),
      StencilMaskStack = $__require('cd');
  var RenderTarget = function(gl, width, height, scaleMode, resolution, root) {
    this.gl = gl;
    this.frameBuffer = null;
    this.texture = null;
    this.size = new math.Rectangle(0, 0, 1, 1);
    this.resolution = resolution || CONST.RESOLUTION;
    this.projectionMatrix = new math.Matrix();
    this.transform = null;
    this.frame = null;
    this.stencilBuffer = null;
    this.stencilMaskStack = new StencilMaskStack();
    this.filterStack = [{
      renderTarget: this,
      filter: [],
      bounds: this.size
    }];
    this.scaleMode = scaleMode || CONST.SCALE_MODES.DEFAULT;
    this.root = root;
    if (!this.root) {
      this.frameBuffer = gl.createFramebuffer();
      this.texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, this.texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, scaleMode === CONST.SCALE_MODES.LINEAR ? gl.LINEAR : gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, scaleMode === CONST.SCALE_MODES.LINEAR ? gl.LINEAR : gl.NEAREST);
      var isPowerOfTwo = utils.isPowerOfTwo(width, height);
      if (!isPowerOfTwo) {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      } else {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
      }
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);
    }
    this.resize(width, height);
  };
  RenderTarget.prototype.constructor = RenderTarget;
  module.exports = RenderTarget;
  RenderTarget.prototype.clear = function(bind) {
    var gl = this.gl;
    if (bind) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
    }
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
  };
  RenderTarget.prototype.attachStencilBuffer = function() {
    if (this.stencilBuffer) {
      return;
    }
    if (!this.root) {
      var gl = this.gl;
      this.stencilBuffer = gl.createRenderbuffer();
      gl.bindRenderbuffer(gl.RENDERBUFFER, this.stencilBuffer);
      gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, this.stencilBuffer);
      gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, this.size.width * this.resolution, this.size.height * this.resolution);
    }
  };
  RenderTarget.prototype.activate = function() {
    var gl = this.gl;
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
    var projectionFrame = this.frame || this.size;
    this.calculateProjection(projectionFrame);
    if (this.transform) {
      this.projectionMatrix.append(this.transform);
    }
    gl.viewport(0, 0, projectionFrame.width * this.resolution, projectionFrame.height * this.resolution);
  };
  RenderTarget.prototype.calculateProjection = function(projectionFrame) {
    var pm = this.projectionMatrix;
    pm.identity();
    if (!this.root) {
      pm.a = 1 / projectionFrame.width * 2;
      pm.d = 1 / projectionFrame.height * 2;
      pm.tx = -1 - projectionFrame.x * pm.a;
      pm.ty = -1 - projectionFrame.y * pm.d;
    } else {
      pm.a = 1 / projectionFrame.width * 2;
      pm.d = -1 / projectionFrame.height * 2;
      pm.tx = -1 - projectionFrame.x * pm.a;
      pm.ty = 1 - projectionFrame.y * pm.d;
    }
  };
  RenderTarget.prototype.resize = function(width, height) {
    width = width | 0;
    height = height | 0;
    if (this.size.width === width && this.size.height === height) {
      return;
    }
    this.size.width = width;
    this.size.height = height;
    if (!this.root) {
      var gl = this.gl;
      gl.bindTexture(gl.TEXTURE_2D, this.texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width * this.resolution, height * this.resolution, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      if (this.stencilBuffer) {
        gl.bindRenderbuffer(gl.RENDERBUFFER, this.stencilBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, width * this.resolution, height * this.resolution);
      }
    }
    var projectionFrame = this.frame || this.size;
    this.calculateProjection(projectionFrame);
  };
  RenderTarget.prototype.destroy = function() {
    var gl = this.gl;
    gl.deleteRenderbuffer(this.stencilBuffer);
    gl.deleteFramebuffer(this.frameBuffer);
    gl.deleteTexture(this.texture);
    this.frameBuffer = null;
    this.texture = null;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("c9", ["ce", "85"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  var AbstractFilter = $__require('ce');
  var fs = $__require('85');
  function FXAAFilter() {
    AbstractFilter.call(this, fs.readFileSync(__dirname + '/FXAA.vert', 'utf8'), fs.readFileSync(__dirname + '/FXAA.frag', 'utf8'), {resolution: {
        type: 'v2',
        value: {
          x: 1,
          y: 1
        }
      }});
  }
  FXAAFilter.prototype = Object.create(AbstractFilter.prototype);
  FXAAFilter.prototype.constructor = FXAAFilter;
  module.exports = FXAAFilter;
  FXAAFilter.prototype.applyFilter = function(renderer, input, output) {
    var filterManager = renderer.filterManager;
    var shader = this.getShader(renderer);
    filterManager.applyFilter(shader, input, output);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("cf", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var prefix = typeof Object.create !== 'function' ? '~' : false;
  function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
  }
  function EventEmitter() {}
  EventEmitter.prototype._events = undefined;
  EventEmitter.prototype.listeners = function listeners(event, exists) {
    var evt = prefix ? prefix + event : event,
        available = this._events && this._events[evt];
    if (exists)
      return !!available;
    if (!available)
      return [];
    if (available.fn)
      return [available.fn];
    for (var i = 0,
        l = available.length,
        ee = new Array(l); i < l; i++) {
      ee[i] = available[i].fn;
    }
    return ee;
  };
  EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;
    if (!this._events || !this._events[evt])
      return false;
    var listeners = this._events[evt],
        len = arguments.length,
        args,
        i;
    if ('function' === typeof listeners.fn) {
      if (listeners.once)
        this.removeListener(event, listeners.fn, undefined, true);
      switch (len) {
        case 1:
          return listeners.fn.call(listeners.context), true;
        case 2:
          return listeners.fn.call(listeners.context, a1), true;
        case 3:
          return listeners.fn.call(listeners.context, a1, a2), true;
        case 4:
          return listeners.fn.call(listeners.context, a1, a2, a3), true;
        case 5:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
        case 6:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
      }
      for (i = 1, args = new Array(len - 1); i < len; i++) {
        args[i - 1] = arguments[i];
      }
      listeners.fn.apply(listeners.context, args);
    } else {
      var length = listeners.length,
          j;
      for (i = 0; i < length; i++) {
        if (listeners[i].once)
          this.removeListener(event, listeners[i].fn, undefined, true);
        switch (len) {
          case 1:
            listeners[i].fn.call(listeners[i].context);
            break;
          case 2:
            listeners[i].fn.call(listeners[i].context, a1);
            break;
          case 3:
            listeners[i].fn.call(listeners[i].context, a1, a2);
            break;
          default:
            if (!args)
              for (j = 1, args = new Array(len - 1); j < len; j++) {
                args[j - 1] = arguments[j];
              }
            listeners[i].fn.apply(listeners[i].context, args);
        }
      }
    }
    return true;
  };
  EventEmitter.prototype.on = function on(event, fn, context) {
    var listener = new EE(fn, context || this),
        evt = prefix ? prefix + event : event;
    if (!this._events)
      this._events = prefix ? {} : Object.create(null);
    if (!this._events[evt])
      this._events[evt] = listener;
    else {
      if (!this._events[evt].fn)
        this._events[evt].push(listener);
      else
        this._events[evt] = [this._events[evt], listener];
    }
    return this;
  };
  EventEmitter.prototype.once = function once(event, fn, context) {
    var listener = new EE(fn, context || this, true),
        evt = prefix ? prefix + event : event;
    if (!this._events)
      this._events = prefix ? {} : Object.create(null);
    if (!this._events[evt])
      this._events[evt] = listener;
    else {
      if (!this._events[evt].fn)
        this._events[evt].push(listener);
      else
        this._events[evt] = [this._events[evt], listener];
    }
    return this;
  };
  EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;
    if (!this._events || !this._events[evt])
      return this;
    var listeners = this._events[evt],
        events = [];
    if (fn) {
      if (listeners.fn) {
        if (listeners.fn !== fn || (once && !listeners.once) || (context && listeners.context !== context)) {
          events.push(listeners);
        }
      } else {
        for (var i = 0,
            length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || (once && !listeners[i].once) || (context && listeners[i].context !== context)) {
            events.push(listeners[i]);
          }
        }
      }
    }
    if (events.length) {
      this._events[evt] = events.length === 1 ? events[0] : events;
    } else {
      delete this._events[evt];
    }
    return this;
  };
  EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    if (!this._events)
      return this;
    if (event)
      delete this._events[prefix ? prefix + event : event];
    else
      this._events = prefix ? {} : Object.create(null);
    return this;
  };
  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  EventEmitter.prototype.addListener = EventEmitter.prototype.on;
  EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
    return this;
  };
  EventEmitter.prefixed = prefix;
  if ('undefined' !== typeof module) {
    module.exports = EventEmitter;
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("65", ["cf"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('cf');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("d0", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function pluginTarget(obj) {
    obj.__plugins = {};
    obj.registerPlugin = function(pluginName, ctor) {
      obj.__plugins[pluginName] = ctor;
    };
    obj.prototype.initPlugins = function() {
      this.plugins = this.plugins || {};
      for (var o in obj.__plugins) {
        this.plugins[o] = new (obj.__plugins[o])(this);
      }
    };
    obj.prototype.destroyPlugins = function() {
      for (var o in this.plugins) {
        this.plugins[o].destroy();
        this.plugins[o] = null;
      }
      this.plugins = null;
    };
  }
  module.exports = {mixin: function mixin(obj) {
      pluginTarget(obj);
    }};
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("d1", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      setTimeout(drainQueue, 0);
    }
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("d2", ["d1"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('d1');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("d3", ["d2"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__System._nodeRequire ? process : $__require('d2');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("25", ["d3"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('d3');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("d4", ["25"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  (function(process) {
    (function() {
      var async = {};
      function noop() {}
      function identity(v) {
        return v;
      }
      function toBool(v) {
        return !!v;
      }
      function notId(v) {
        return !v;
      }
      var previous_async;
      var root = typeof self === 'object' && self.self === self && self || typeof global === 'object' && global.global === global && global || this;
      if (root != null) {
        previous_async = root.async;
      }
      async.noConflict = function() {
        root.async = previous_async;
        return async;
      };
      function only_once(fn) {
        return function() {
          if (fn === null)
            throw new Error("Callback was already called.");
          fn.apply(this, arguments);
          fn = null;
        };
      }
      function _once(fn) {
        return function() {
          if (fn === null)
            return;
          fn.apply(this, arguments);
          fn = null;
        };
      }
      var _toString = Object.prototype.toString;
      var _isArray = Array.isArray || function(obj) {
        return _toString.call(obj) === '[object Array]';
      };
      var _isObject = function(obj) {
        var type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
      };
      function _isArrayLike(arr) {
        return _isArray(arr) || (typeof arr.length === "number" && arr.length >= 0 && arr.length % 1 === 0);
      }
      function _arrayEach(arr, iterator) {
        var index = -1,
            length = arr.length;
        while (++index < length) {
          iterator(arr[index], index, arr);
        }
      }
      function _map(arr, iterator) {
        var index = -1,
            length = arr.length,
            result = Array(length);
        while (++index < length) {
          result[index] = iterator(arr[index], index, arr);
        }
        return result;
      }
      function _range(count) {
        return _map(Array(count), function(v, i) {
          return i;
        });
      }
      function _reduce(arr, iterator, memo) {
        _arrayEach(arr, function(x, i, a) {
          memo = iterator(memo, x, i, a);
        });
        return memo;
      }
      function _forEachOf(object, iterator) {
        _arrayEach(_keys(object), function(key) {
          iterator(object[key], key);
        });
      }
      function _indexOf(arr, item) {
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] === item)
            return i;
        }
        return -1;
      }
      var _keys = Object.keys || function(obj) {
        var keys = [];
        for (var k in obj) {
          if (obj.hasOwnProperty(k)) {
            keys.push(k);
          }
        }
        return keys;
      };
      function _keyIterator(coll) {
        var i = -1;
        var len;
        var keys;
        if (_isArrayLike(coll)) {
          len = coll.length;
          return function next() {
            i++;
            return i < len ? i : null;
          };
        } else {
          keys = _keys(coll);
          len = keys.length;
          return function next() {
            i++;
            return i < len ? keys[i] : null;
          };
        }
      }
      function _restParam(func, startIndex) {
        startIndex = startIndex == null ? func.length - 1 : +startIndex;
        return function() {
          var length = Math.max(arguments.length - startIndex, 0);
          var rest = Array(length);
          for (var index = 0; index < length; index++) {
            rest[index] = arguments[index + startIndex];
          }
          switch (startIndex) {
            case 0:
              return func.call(this, rest);
            case 1:
              return func.call(this, arguments[0], rest);
          }
        };
      }
      function _withoutIndex(iterator) {
        return function(value, index, callback) {
          return iterator(value, callback);
        };
      }
      var _setImmediate = typeof setImmediate === 'function' && setImmediate;
      var _delay = _setImmediate ? function(fn) {
        _setImmediate(fn);
      } : function(fn) {
        setTimeout(fn, 0);
      };
      if (typeof process === 'object' && typeof process.nextTick === 'function') {
        async.nextTick = process.nextTick;
      } else {
        async.nextTick = _delay;
      }
      async.setImmediate = _setImmediate ? _delay : async.nextTick;
      async.forEach = async.each = function(arr, iterator, callback) {
        return async.eachOf(arr, _withoutIndex(iterator), callback);
      };
      async.forEachSeries = async.eachSeries = function(arr, iterator, callback) {
        return async.eachOfSeries(arr, _withoutIndex(iterator), callback);
      };
      async.forEachLimit = async.eachLimit = function(arr, limit, iterator, callback) {
        return _eachOfLimit(limit)(arr, _withoutIndex(iterator), callback);
      };
      async.forEachOf = async.eachOf = function(object, iterator, callback) {
        callback = _once(callback || noop);
        object = object || [];
        var iter = _keyIterator(object);
        var key,
            completed = 0;
        while ((key = iter()) != null) {
          completed += 1;
          iterator(object[key], key, only_once(done));
        }
        if (completed === 0)
          callback(null);
        function done(err) {
          completed--;
          if (err) {
            callback(err);
          } else if (key === null && completed <= 0) {
            callback(null);
          }
        }
      };
      async.forEachOfSeries = async.eachOfSeries = function(obj, iterator, callback) {
        callback = _once(callback || noop);
        obj = obj || [];
        var nextKey = _keyIterator(obj);
        var key = nextKey();
        function iterate() {
          var sync = true;
          if (key === null) {
            return callback(null);
          }
          iterator(obj[key], key, only_once(function(err) {
            if (err) {
              callback(err);
            } else {
              key = nextKey();
              if (key === null) {
                return callback(null);
              } else {
                if (sync) {
                  async.setImmediate(iterate);
                } else {
                  iterate();
                }
              }
            }
          }));
          sync = false;
        }
        iterate();
      };
      async.forEachOfLimit = async.eachOfLimit = function(obj, limit, iterator, callback) {
        _eachOfLimit(limit)(obj, iterator, callback);
      };
      function _eachOfLimit(limit) {
        return function(obj, iterator, callback) {
          callback = _once(callback || noop);
          obj = obj || [];
          var nextKey = _keyIterator(obj);
          if (limit <= 0) {
            return callback(null);
          }
          var done = false;
          var running = 0;
          var errored = false;
          (function replenish() {
            if (done && running <= 0) {
              return callback(null);
            }
            while (running < limit && !errored) {
              var key = nextKey();
              if (key === null) {
                done = true;
                if (running <= 0) {
                  callback(null);
                }
                return;
              }
              running += 1;
              iterator(obj[key], key, only_once(function(err) {
                running -= 1;
                if (err) {
                  callback(err);
                  errored = true;
                } else {
                  replenish();
                }
              }));
            }
          })();
        };
      }
      function doParallel(fn) {
        return function(obj, iterator, callback) {
          return fn(async.eachOf, obj, iterator, callback);
        };
      }
      function doParallelLimit(fn) {
        return function(obj, limit, iterator, callback) {
          return fn(_eachOfLimit(limit), obj, iterator, callback);
        };
      }
      function doSeries(fn) {
        return function(obj, iterator, callback) {
          return fn(async.eachOfSeries, obj, iterator, callback);
        };
      }
      function _asyncMap(eachfn, arr, iterator, callback) {
        callback = _once(callback || noop);
        arr = arr || [];
        var results = _isArrayLike(arr) ? [] : {};
        eachfn(arr, function(value, index, callback) {
          iterator(value, function(err, v) {
            results[index] = v;
            callback(err);
          });
        }, function(err) {
          callback(err, results);
        });
      }
      async.map = doParallel(_asyncMap);
      async.mapSeries = doSeries(_asyncMap);
      async.mapLimit = doParallelLimit(_asyncMap);
      async.inject = async.foldl = async.reduce = function(arr, memo, iterator, callback) {
        async.eachOfSeries(arr, function(x, i, callback) {
          iterator(memo, x, function(err, v) {
            memo = v;
            callback(err);
          });
        }, function(err) {
          callback(err, memo);
        });
      };
      async.foldr = async.reduceRight = function(arr, memo, iterator, callback) {
        var reversed = _map(arr, identity).reverse();
        async.reduce(reversed, memo, iterator, callback);
      };
      async.transform = function(arr, memo, iterator, callback) {
        if (arguments.length === 3) {
          callback = iterator;
          iterator = memo;
          memo = _isArray(arr) ? [] : {};
        }
        async.eachOf(arr, function(v, k, cb) {
          iterator(memo, v, k, cb);
        }, function(err) {
          callback(err, memo);
        });
      };
      function _filter(eachfn, arr, iterator, callback) {
        var results = [];
        eachfn(arr, function(x, index, callback) {
          iterator(x, function(v) {
            if (v) {
              results.push({
                index: index,
                value: x
              });
            }
            callback();
          });
        }, function() {
          callback(_map(results.sort(function(a, b) {
            return a.index - b.index;
          }), function(x) {
            return x.value;
          }));
        });
      }
      async.select = async.filter = doParallel(_filter);
      async.selectLimit = async.filterLimit = doParallelLimit(_filter);
      async.selectSeries = async.filterSeries = doSeries(_filter);
      function _reject(eachfn, arr, iterator, callback) {
        _filter(eachfn, arr, function(value, cb) {
          iterator(value, function(v) {
            cb(!v);
          });
        }, callback);
      }
      async.reject = doParallel(_reject);
      async.rejectLimit = doParallelLimit(_reject);
      async.rejectSeries = doSeries(_reject);
      function _createTester(eachfn, check, getResult) {
        return function(arr, limit, iterator, cb) {
          function done() {
            if (cb)
              cb(getResult(false, void 0));
          }
          function iteratee(x, _, callback) {
            if (!cb)
              return callback();
            iterator(x, function(v) {
              if (cb && check(v)) {
                cb(getResult(true, x));
                cb = iterator = false;
              }
              callback();
            });
          }
          if (arguments.length > 3) {
            eachfn(arr, limit, iteratee, done);
          } else {
            cb = iterator;
            iterator = limit;
            eachfn(arr, iteratee, done);
          }
        };
      }
      async.any = async.some = _createTester(async.eachOf, toBool, identity);
      async.someLimit = _createTester(async.eachOfLimit, toBool, identity);
      async.all = async.every = _createTester(async.eachOf, notId, notId);
      async.everyLimit = _createTester(async.eachOfLimit, notId, notId);
      function _findGetResult(v, x) {
        return x;
      }
      async.detect = _createTester(async.eachOf, identity, _findGetResult);
      async.detectSeries = _createTester(async.eachOfSeries, identity, _findGetResult);
      async.detectLimit = _createTester(async.eachOfLimit, identity, _findGetResult);
      async.sortBy = function(arr, iterator, callback) {
        async.map(arr, function(x, callback) {
          iterator(x, function(err, criteria) {
            if (err) {
              callback(err);
            } else {
              callback(null, {
                value: x,
                criteria: criteria
              });
            }
          });
        }, function(err, results) {
          if (err) {
            return callback(err);
          } else {
            callback(null, _map(results.sort(comparator), function(x) {
              return x.value;
            }));
          }
        });
        function comparator(left, right) {
          var a = left.criteria,
              b = right.criteria;
          return a < b ? -1 : a > b ? 1 : 0;
        }
      };
      async.auto = function(tasks, concurrency, callback) {
        if (typeof arguments[1] === 'function') {
          callback = concurrency;
          concurrency = null;
        }
        callback = _once(callback || noop);
        var keys = _keys(tasks);
        var remainingTasks = keys.length;
        if (!remainingTasks) {
          return callback(null);
        }
        if (!concurrency) {
          concurrency = remainingTasks;
        }
        var results = {};
        var runningTasks = 0;
        var hasError = false;
        var listeners = [];
        function addListener(fn) {
          listeners.unshift(fn);
        }
        function removeListener(fn) {
          var idx = _indexOf(listeners, fn);
          if (idx >= 0)
            listeners.splice(idx, 1);
        }
        function taskComplete() {
          remainingTasks--;
          _arrayEach(listeners.slice(0), function(fn) {
            fn();
          });
        }
        addListener(function() {
          if (!remainingTasks) {
            callback(null, results);
          }
        });
        _arrayEach(keys, function(k) {
          if (hasError)
            return;
          var task = _isArray(tasks[k]) ? tasks[k] : [tasks[k]];
          var taskCallback = _restParam(function(err, args) {
            runningTasks--;
            if (args.length <= 1) {
              args = args[0];
            }
            if (err) {
              var safeResults = {};
              _forEachOf(results, function(val, rkey) {
                safeResults[rkey] = val;
              });
              safeResults[k] = args;
              hasError = true;
              callback(err, safeResults);
            } else {
              results[k] = args;
              async.setImmediate(taskComplete);
            }
          });
          var requires = task.slice(0, task.length - 1);
          var len = requires.length;
          var dep;
          while (len--) {
            if (!(dep = tasks[requires[len]])) {
              throw new Error('Has nonexistent dependency in ' + requires.join(', '));
            }
            if (_isArray(dep) && _indexOf(dep, k) >= 0) {
              throw new Error('Has cyclic dependencies');
            }
          }
          function ready() {
            return runningTasks < concurrency && _reduce(requires, function(a, x) {
              return (a && results.hasOwnProperty(x));
            }, true) && !results.hasOwnProperty(k);
          }
          if (ready()) {
            runningTasks++;
            task[task.length - 1](taskCallback, results);
          } else {
            addListener(listener);
          }
          function listener() {
            if (ready()) {
              runningTasks++;
              removeListener(listener);
              task[task.length - 1](taskCallback, results);
            }
          }
        });
      };
      async.retry = function(times, task, callback) {
        var DEFAULT_TIMES = 5;
        var DEFAULT_INTERVAL = 0;
        var attempts = [];
        var opts = {
          times: DEFAULT_TIMES,
          interval: DEFAULT_INTERVAL
        };
        function parseTimes(acc, t) {
          if (typeof t === 'number') {
            acc.times = parseInt(t, 10) || DEFAULT_TIMES;
          } else if (typeof t === 'object') {
            acc.times = parseInt(t.times, 10) || DEFAULT_TIMES;
            acc.interval = parseInt(t.interval, 10) || DEFAULT_INTERVAL;
          } else {
            throw new Error('Unsupported argument type for \'times\': ' + typeof t);
          }
        }
        var length = arguments.length;
        if (length < 1 || length > 3) {
          throw new Error('Invalid arguments - must be either (task), (task, callback), (times, task) or (times, task, callback)');
        } else if (length <= 2 && typeof times === 'function') {
          callback = task;
          task = times;
        }
        if (typeof times !== 'function') {
          parseTimes(opts, times);
        }
        opts.callback = callback;
        opts.task = task;
        function wrappedTask(wrappedCallback, wrappedResults) {
          function retryAttempt(task, finalAttempt) {
            return function(seriesCallback) {
              task(function(err, result) {
                seriesCallback(!err || finalAttempt, {
                  err: err,
                  result: result
                });
              }, wrappedResults);
            };
          }
          function retryInterval(interval) {
            return function(seriesCallback) {
              setTimeout(function() {
                seriesCallback(null);
              }, interval);
            };
          }
          while (opts.times) {
            var finalAttempt = !(opts.times -= 1);
            attempts.push(retryAttempt(opts.task, finalAttempt));
            if (!finalAttempt && opts.interval > 0) {
              attempts.push(retryInterval(opts.interval));
            }
          }
          async.series(attempts, function(done, data) {
            data = data[data.length - 1];
            (wrappedCallback || opts.callback)(data.err, data.result);
          });
        }
        return opts.callback ? wrappedTask() : wrappedTask;
      };
      async.waterfall = function(tasks, callback) {
        callback = _once(callback || noop);
        if (!_isArray(tasks)) {
          var err = new Error('First argument to waterfall must be an array of functions');
          return callback(err);
        }
        if (!tasks.length) {
          return callback();
        }
        function wrapIterator(iterator) {
          return _restParam(function(err, args) {
            if (err) {
              callback.apply(null, [err].concat(args));
            } else {
              var next = iterator.next();
              if (next) {
                args.push(wrapIterator(next));
              } else {
                args.push(callback);
              }
              ensureAsync(iterator).apply(null, args);
            }
          });
        }
        wrapIterator(async.iterator(tasks))();
      };
      function _parallel(eachfn, tasks, callback) {
        callback = callback || noop;
        var results = _isArrayLike(tasks) ? [] : {};
        eachfn(tasks, function(task, key, callback) {
          task(_restParam(function(err, args) {
            if (args.length <= 1) {
              args = args[0];
            }
            results[key] = args;
            callback(err);
          }));
        }, function(err) {
          callback(err, results);
        });
      }
      async.parallel = function(tasks, callback) {
        _parallel(async.eachOf, tasks, callback);
      };
      async.parallelLimit = function(tasks, limit, callback) {
        _parallel(_eachOfLimit(limit), tasks, callback);
      };
      async.series = function(tasks, callback) {
        _parallel(async.eachOfSeries, tasks, callback);
      };
      async.iterator = function(tasks) {
        function makeCallback(index) {
          function fn() {
            if (tasks.length) {
              tasks[index].apply(null, arguments);
            }
            return fn.next();
          }
          fn.next = function() {
            return (index < tasks.length - 1) ? makeCallback(index + 1) : null;
          };
          return fn;
        }
        return makeCallback(0);
      };
      async.apply = _restParam(function(fn, args) {
        return _restParam(function(callArgs) {
          return fn.apply(null, args.concat(callArgs));
        });
      });
      function _concat(eachfn, arr, fn, callback) {
        var result = [];
        eachfn(arr, function(x, index, cb) {
          fn(x, function(err, y) {
            result = result.concat(y || []);
            cb(err);
          });
        }, function(err) {
          callback(err, result);
        });
      }
      async.concat = doParallel(_concat);
      async.concatSeries = doSeries(_concat);
      async.whilst = function(test, iterator, callback) {
        callback = callback || noop;
        if (test()) {
          var next = _restParam(function(err, args) {
            if (err) {
              callback(err);
            } else if (test.apply(this, args)) {
              iterator(next);
            } else {
              callback.apply(null, [null].concat(args));
            }
          });
          iterator(next);
        } else {
          callback(null);
        }
      };
      async.doWhilst = function(iterator, test, callback) {
        var calls = 0;
        return async.whilst(function() {
          return ++calls <= 1 || test.apply(this, arguments);
        }, iterator, callback);
      };
      async.until = function(test, iterator, callback) {
        return async.whilst(function() {
          return !test.apply(this, arguments);
        }, iterator, callback);
      };
      async.doUntil = function(iterator, test, callback) {
        return async.doWhilst(iterator, function() {
          return !test.apply(this, arguments);
        }, callback);
      };
      async.during = function(test, iterator, callback) {
        callback = callback || noop;
        var next = _restParam(function(err, args) {
          if (err) {
            callback(err);
          } else {
            args.push(check);
            test.apply(this, args);
          }
        });
        var check = function(err, truth) {
          if (err) {
            callback(err);
          } else if (truth) {
            iterator(next);
          } else {
            callback(null);
          }
        };
        test(check);
      };
      async.doDuring = function(iterator, test, callback) {
        var calls = 0;
        async.during(function(next) {
          if (calls++ < 1) {
            next(null, true);
          } else {
            test.apply(this, arguments);
          }
        }, iterator, callback);
      };
      function _queue(worker, concurrency, payload) {
        if (concurrency == null) {
          concurrency = 1;
        } else if (concurrency === 0) {
          throw new Error('Concurrency must not be zero');
        }
        function _insert(q, data, pos, callback) {
          if (callback != null && typeof callback !== "function") {
            throw new Error("task callback must be a function");
          }
          q.started = true;
          if (!_isArray(data)) {
            data = [data];
          }
          if (data.length === 0 && q.idle()) {
            return async.setImmediate(function() {
              q.drain();
            });
          }
          _arrayEach(data, function(task) {
            var item = {
              data: task,
              callback: callback || noop
            };
            if (pos) {
              q.tasks.unshift(item);
            } else {
              q.tasks.push(item);
            }
            if (q.tasks.length === q.concurrency) {
              q.saturated();
            }
          });
          async.setImmediate(q.process);
        }
        function _next(q, tasks) {
          return function() {
            workers -= 1;
            var removed = false;
            var args = arguments;
            _arrayEach(tasks, function(task) {
              _arrayEach(workersList, function(worker, index) {
                if (worker === task && !removed) {
                  workersList.splice(index, 1);
                  removed = true;
                }
              });
              task.callback.apply(task, args);
            });
            if (q.tasks.length + workers === 0) {
              q.drain();
            }
            q.process();
          };
        }
        var workers = 0;
        var workersList = [];
        var q = {
          tasks: [],
          concurrency: concurrency,
          payload: payload,
          saturated: noop,
          empty: noop,
          drain: noop,
          started: false,
          paused: false,
          push: function(data, callback) {
            _insert(q, data, false, callback);
          },
          kill: function() {
            q.drain = noop;
            q.tasks = [];
          },
          unshift: function(data, callback) {
            _insert(q, data, true, callback);
          },
          process: function() {
            while (!q.paused && workers < q.concurrency && q.tasks.length) {
              var tasks = q.payload ? q.tasks.splice(0, q.payload) : q.tasks.splice(0, q.tasks.length);
              var data = _map(tasks, function(task) {
                return task.data;
              });
              if (q.tasks.length === 0) {
                q.empty();
              }
              workers += 1;
              workersList.push(tasks[0]);
              var cb = only_once(_next(q, tasks));
              worker(data, cb);
            }
          },
          length: function() {
            return q.tasks.length;
          },
          running: function() {
            return workers;
          },
          workersList: function() {
            return workersList;
          },
          idle: function() {
            return q.tasks.length + workers === 0;
          },
          pause: function() {
            q.paused = true;
          },
          resume: function() {
            if (q.paused === false) {
              return;
            }
            q.paused = false;
            var resumeCount = Math.min(q.concurrency, q.tasks.length);
            for (var w = 1; w <= resumeCount; w++) {
              async.setImmediate(q.process);
            }
          }
        };
        return q;
      }
      async.queue = function(worker, concurrency) {
        var q = _queue(function(items, cb) {
          worker(items[0], cb);
        }, concurrency, 1);
        return q;
      };
      async.priorityQueue = function(worker, concurrency) {
        function _compareTasks(a, b) {
          return a.priority - b.priority;
        }
        function _binarySearch(sequence, item, compare) {
          var beg = -1,
              end = sequence.length - 1;
          while (beg < end) {
            var mid = beg + ((end - beg + 1) >>> 1);
            if (compare(item, sequence[mid]) >= 0) {
              beg = mid;
            } else {
              end = mid - 1;
            }
          }
          return beg;
        }
        function _insert(q, data, priority, callback) {
          if (callback != null && typeof callback !== "function") {
            throw new Error("task callback must be a function");
          }
          q.started = true;
          if (!_isArray(data)) {
            data = [data];
          }
          if (data.length === 0) {
            return async.setImmediate(function() {
              q.drain();
            });
          }
          _arrayEach(data, function(task) {
            var item = {
              data: task,
              priority: priority,
              callback: typeof callback === 'function' ? callback : noop
            };
            q.tasks.splice(_binarySearch(q.tasks, item, _compareTasks) + 1, 0, item);
            if (q.tasks.length === q.concurrency) {
              q.saturated();
            }
            async.setImmediate(q.process);
          });
        }
        var q = async.queue(worker, concurrency);
        q.push = function(data, priority, callback) {
          _insert(q, data, priority, callback);
        };
        delete q.unshift;
        return q;
      };
      async.cargo = function(worker, payload) {
        return _queue(worker, 1, payload);
      };
      function _console_fn(name) {
        return _restParam(function(fn, args) {
          fn.apply(null, args.concat([_restParam(function(err, args) {
            if (typeof console === 'object') {
              if (err) {
                if (console.error) {
                  console.error(err);
                }
              } else if (console[name]) {
                _arrayEach(args, function(x) {
                  console[name](x);
                });
              }
            }
          })]));
        });
      }
      async.log = _console_fn('log');
      async.dir = _console_fn('dir');
      async.memoize = function(fn, hasher) {
        var memo = {};
        var queues = {};
        var has = Object.prototype.hasOwnProperty;
        hasher = hasher || identity;
        var memoized = _restParam(function memoized(args) {
          var callback = args.pop();
          var key = hasher.apply(null, args);
          if (has.call(memo, key)) {
            async.setImmediate(function() {
              callback.apply(null, memo[key]);
            });
          } else if (has.call(queues, key)) {
            queues[key].push(callback);
          } else {
            queues[key] = [callback];
            fn.apply(null, args.concat([_restParam(function(args) {
              memo[key] = args;
              var q = queues[key];
              delete queues[key];
              for (var i = 0,
                  l = q.length; i < l; i++) {
                q[i].apply(null, args);
              }
            })]));
          }
        });
        memoized.memo = memo;
        memoized.unmemoized = fn;
        return memoized;
      };
      async.unmemoize = function(fn) {
        return function() {
          return (fn.unmemoized || fn).apply(null, arguments);
        };
      };
      function _times(mapper) {
        return function(count, iterator, callback) {
          mapper(_range(count), iterator, callback);
        };
      }
      async.times = _times(async.map);
      async.timesSeries = _times(async.mapSeries);
      async.timesLimit = function(count, limit, iterator, callback) {
        return async.mapLimit(_range(count), limit, iterator, callback);
      };
      async.seq = function() {
        var fns = arguments;
        return _restParam(function(args) {
          var that = this;
          var callback = args[args.length - 1];
          if (typeof callback == 'function') {
            args.pop();
          } else {
            callback = noop;
          }
          async.reduce(fns, args, function(newargs, fn, cb) {
            fn.apply(that, newargs.concat([_restParam(function(err, nextargs) {
              cb(err, nextargs);
            })]));
          }, function(err, results) {
            callback.apply(that, [err].concat(results));
          });
        });
      };
      async.compose = function() {
        return async.seq.apply(null, Array.prototype.reverse.call(arguments));
      };
      function _applyEach(eachfn) {
        return _restParam(function(fns, args) {
          var go = _restParam(function(args) {
            var that = this;
            var callback = args.pop();
            return eachfn(fns, function(fn, _, cb) {
              fn.apply(that, args.concat([cb]));
            }, callback);
          });
          if (args.length) {
            return go.apply(this, args);
          } else {
            return go;
          }
        });
      }
      async.applyEach = _applyEach(async.eachOf);
      async.applyEachSeries = _applyEach(async.eachOfSeries);
      async.forever = function(fn, callback) {
        var done = only_once(callback || noop);
        var task = ensureAsync(fn);
        function next(err) {
          if (err) {
            return done(err);
          }
          task(next);
        }
        next();
      };
      function ensureAsync(fn) {
        return _restParam(function(args) {
          var callback = args.pop();
          args.push(function() {
            var innerArgs = arguments;
            if (sync) {
              async.setImmediate(function() {
                callback.apply(null, innerArgs);
              });
            } else {
              callback.apply(null, innerArgs);
            }
          });
          var sync = true;
          fn.apply(this, args);
          sync = false;
        });
      }
      async.ensureAsync = ensureAsync;
      async.constant = _restParam(function(values) {
        var args = [null].concat(values);
        return function(callback) {
          return callback.apply(this, args);
        };
      });
      async.wrapSync = async.asyncify = function asyncify(func) {
        return _restParam(function(args) {
          var callback = args.pop();
          var result;
          try {
            result = func.apply(this, args);
          } catch (e) {
            return callback(e);
          }
          if (_isObject(result) && typeof result.then === "function") {
            result.then(function(value) {
              callback(null, value);
            })["catch"](function(err) {
              callback(err.message ? err : new Error(err));
            });
          } else {
            callback(null, result);
          }
        });
      };
      if (typeof module === 'object' && module.exports) {
        module.exports = async;
      } else if (typeof define === 'function' && define.amd) {
        define([], function() {
          return async;
        });
      } else {
        root.async = async;
      }
    }());
  })($__require('25'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("d5", ["d4"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('d4');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("ac", ["a0", "65", "d0", "d5"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var CONST = $__require('a0');
  var utils = module.exports = {
    _uid: 0,
    _saidHello: false,
    EventEmitter: $__require('65'),
    pluginTarget: $__require('d0'),
    async: $__require('d5'),
    uid: function() {
      return ++utils._uid;
    },
    hex2rgb: function(hex, out) {
      out = out || [];
      out[0] = (hex >> 16 & 0xFF) / 255;
      out[1] = (hex >> 8 & 0xFF) / 255;
      out[2] = (hex & 0xFF) / 255;
      return out;
    },
    hex2string: function(hex) {
      hex = hex.toString(16);
      hex = '000000'.substr(0, 6 - hex.length) + hex;
      return '#' + hex;
    },
    rgb2hex: function(rgb) {
      return ((rgb[0] * 255 << 16) + (rgb[1] * 255 << 8) + rgb[2] * 255);
    },
    canUseNewCanvasBlendModes: function() {
      if (typeof document === 'undefined') {
        return false;
      }
      var pngHead = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABAQMAAADD8p2OAAAAA1BMVEX/';
      var pngEnd = 'AAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==';
      var magenta = new Image();
      magenta.src = pngHead + 'AP804Oa6' + pngEnd;
      var yellow = new Image();
      yellow.src = pngHead + '/wCKxvRF' + pngEnd;
      var canvas = document.createElement('canvas');
      canvas.width = 6;
      canvas.height = 1;
      var context = canvas.getContext('2d');
      context.globalCompositeOperation = 'multiply';
      context.drawImage(magenta, 0, 0);
      context.drawImage(yellow, 2, 0);
      var data = context.getImageData(2, 0, 1, 1).data;
      return (data[0] === 255 && data[1] === 0 && data[2] === 0);
    },
    getNextPowerOfTwo: function(number) {
      if (number > 0 && (number & (number - 1)) === 0) {
        return number;
      } else {
        var result = 1;
        while (result < number) {
          result <<= 1;
        }
        return result;
      }
    },
    isPowerOfTwo: function(width, height) {
      return (width > 0 && (width & (width - 1)) === 0 && height > 0 && (height & (height - 1)) === 0);
    },
    getResolutionOfUrl: function(url) {
      var resolution = CONST.RETINA_PREFIX.exec(url);
      if (resolution) {
        return parseFloat(resolution[1]);
      }
      return 1;
    },
    sayHello: function(type) {
      if (utils._saidHello) {
        return;
      }
      if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
        var args = ['\n %c %c %c Pixi.js ' + CONST.VERSION + ' - ✰ ' + type + ' ✰  %c ' + ' %c ' + ' http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n', 'background: #ff66a5; padding:5px 0;', 'background: #ff66a5; padding:5px 0;', 'color: #ff66a5; background: #030307; padding:5px 0;', 'background: #ff66a5; padding:5px 0;', 'background: #ffc3dc; padding:5px 0;', 'background: #ff66a5; padding:5px 0;', 'color: #ff2424; background: #fff; padding:5px 0;', 'color: #ff2424; background: #fff; padding:5px 0;', 'color: #ff2424; background: #fff; padding:5px 0;'];
        window.console.log.apply(console, args);
      } else if (window.console) {
        window.console.log('Pixi.js ' + CONST.VERSION + ' - ' + type + ' - http://www.pixijs.com/');
      }
      utils._saidHello = true;
    },
    isWebGLSupported: function() {
      var contextOptions = {stencil: true};
      try {
        if (!window.WebGLRenderingContext) {
          return false;
        }
        var canvas = document.createElement('canvas'),
            gl = canvas.getContext('webgl', contextOptions) || canvas.getContext('experimental-webgl', contextOptions);
        return !!(gl && gl.getContextAttributes().stencil);
      } catch (e) {
        return false;
      }
    },
    sign: function(n) {
      return n ? (n < 0 ? -1 : 1) : 0;
    },
    removeItems: function(arr, startIdx, removeCount) {
      var length = arr.length;
      if (startIdx >= length || removeCount === 0) {
        return;
      }
      removeCount = (startIdx + removeCount > length ? length - startIdx : removeCount);
      for (var i = startIdx,
          len = length - removeCount; i < len; ++i) {
        arr[i] = arr[i + removeCount];
      }
      arr.length = len;
    },
    TextureCache: {},
    BaseTextureCache: {}
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("cb", ["ac"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var utils = $__require('ac');
  function Shader(shaderManager, vertexSrc, fragmentSrc, uniforms, attributes) {
    if (!vertexSrc || !fragmentSrc) {
      throw new Error('Pixi.js Error. Shader requires vertexSrc and fragmentSrc');
    }
    this.uid = utils.uid();
    this.gl = shaderManager.renderer.gl;
    this.shaderManager = shaderManager;
    this.program = null;
    this.uniforms = uniforms || {};
    this.attributes = attributes || {};
    this.textureCount = 1;
    this.vertexSrc = vertexSrc;
    this.fragmentSrc = fragmentSrc;
    this.init();
  }
  Shader.prototype.constructor = Shader;
  module.exports = Shader;
  Shader.prototype.init = function() {
    this.compile();
    this.gl.useProgram(this.program);
    this.cacheUniformLocations(Object.keys(this.uniforms));
    this.cacheAttributeLocations(Object.keys(this.attributes));
  };
  Shader.prototype.cacheUniformLocations = function(keys) {
    for (var i = 0; i < keys.length; ++i) {
      this.uniforms[keys[i]]._location = this.gl.getUniformLocation(this.program, keys[i]);
    }
  };
  Shader.prototype.cacheAttributeLocations = function(keys) {
    for (var i = 0; i < keys.length; ++i) {
      this.attributes[keys[i]] = this.gl.getAttribLocation(this.program, keys[i]);
    }
  };
  Shader.prototype.compile = function() {
    var gl = this.gl;
    var glVertShader = this._glCompile(gl.VERTEX_SHADER, this.vertexSrc);
    var glFragShader = this._glCompile(gl.FRAGMENT_SHADER, this.fragmentSrc);
    var program = gl.createProgram();
    gl.attachShader(program, glVertShader);
    gl.attachShader(program, glFragShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Pixi.js Error: Could not initialize shader.');
      console.error('gl.VALIDATE_STATUS', gl.getProgramParameter(program, gl.VALIDATE_STATUS));
      console.error('gl.getError()', gl.getError());
      if (gl.getProgramInfoLog(program) !== '') {
        console.warn('Pixi.js Warning: gl.getProgramInfoLog()', gl.getProgramInfoLog(program));
      }
      gl.deleteProgram(program);
      program = null;
    }
    gl.deleteShader(glVertShader);
    gl.deleteShader(glFragShader);
    return (this.program = program);
  };
  Shader.prototype.syncUniform = function(uniform) {
    var location = uniform._location,
        value = uniform.value,
        gl = this.gl,
        i,
        il;
    switch (uniform.type) {
      case 'b':
      case 'bool':
      case 'boolean':
        gl.uniform1i(location, value ? 1 : 0);
        break;
      case 'i':
      case '1i':
        gl.uniform1i(location, value);
        break;
      case 'f':
      case '1f':
        gl.uniform1f(location, value);
        break;
      case '2f':
        gl.uniform2f(location, value[0], value[1]);
        break;
      case '3f':
        gl.uniform3f(location, value[0], value[1], value[2]);
        break;
      case '4f':
        gl.uniform4f(location, value[0], value[1], value[2], value[3]);
        break;
      case 'v2':
        gl.uniform2f(location, value.x, value.y);
        break;
      case 'v3':
        gl.uniform3f(location, value.x, value.y, value.z);
        break;
      case 'v4':
        gl.uniform4f(location, value.x, value.y, value.z, value.w);
        break;
      case '1iv':
        gl.uniform1iv(location, value);
        break;
      case '2iv':
        gl.uniform2iv(location, value);
        break;
      case '3iv':
        gl.uniform3iv(location, value);
        break;
      case '4iv':
        gl.uniform4iv(location, value);
        break;
      case '1fv':
        gl.uniform1fv(location, value);
        break;
      case '2fv':
        gl.uniform2fv(location, value);
        break;
      case '3fv':
        gl.uniform3fv(location, value);
        break;
      case '4fv':
        gl.uniform4fv(location, value);
        break;
      case 'm2':
      case 'mat2':
      case 'Matrix2fv':
        gl.uniformMatrix2fv(location, uniform.transpose, value);
        break;
      case 'm3':
      case 'mat3':
      case 'Matrix3fv':
        gl.uniformMatrix3fv(location, uniform.transpose, value);
        break;
      case 'm4':
      case 'mat4':
      case 'Matrix4fv':
        gl.uniformMatrix4fv(location, uniform.transpose, value);
        break;
      case 'c':
        if (typeof value === 'number') {
          value = utils.hex2rgb(value);
        }
        gl.uniform3f(location, value[0], value[1], value[2]);
        break;
      case 'iv1':
        gl.uniform1iv(location, value);
        break;
      case 'iv':
        gl.uniform3iv(location, value);
        break;
      case 'fv1':
        gl.uniform1fv(location, value);
        break;
      case 'fv':
        gl.uniform3fv(location, value);
        break;
      case 'v2v':
        if (!uniform._array) {
          uniform._array = new Float32Array(2 * value.length);
        }
        for (i = 0, il = value.length; i < il; ++i) {
          uniform._array[i * 2] = value[i].x;
          uniform._array[i * 2 + 1] = value[i].y;
        }
        gl.uniform2fv(location, uniform._array);
        break;
      case 'v3v':
        if (!uniform._array) {
          uniform._array = new Float32Array(3 * value.length);
        }
        for (i = 0, il = value.length; i < il; ++i) {
          uniform._array[i * 3] = value[i].x;
          uniform._array[i * 3 + 1] = value[i].y;
          uniform._array[i * 3 + 2] = value[i].z;
        }
        gl.uniform3fv(location, uniform._array);
        break;
      case 'v4v':
        if (!uniform._array) {
          uniform._array = new Float32Array(4 * value.length);
        }
        for (i = 0, il = value.length; i < il; ++i) {
          uniform._array[i * 4] = value[i].x;
          uniform._array[i * 4 + 1] = value[i].y;
          uniform._array[i * 4 + 2] = value[i].z;
          uniform._array[i * 4 + 3] = value[i].w;
        }
        gl.uniform4fv(location, uniform._array);
        break;
      case 't':
      case 'sampler2D':
        if (!uniform.value || !uniform.value.baseTexture.hasLoaded) {
          break;
        }
        gl.activeTexture(gl['TEXTURE' + this.textureCount]);
        var texture = uniform.value.baseTexture._glTextures[gl.id];
        if (!texture) {
          this.initSampler2D(uniform);
          texture = uniform.value.baseTexture._glTextures[gl.id];
        }
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.uniform1i(uniform._location, this.textureCount);
        this.textureCount++;
        break;
      default:
        console.warn('Pixi.js Shader Warning: Unknown uniform type: ' + uniform.type);
    }
  };
  Shader.prototype.syncUniforms = function() {
    this.textureCount = 1;
    for (var key in this.uniforms) {
      this.syncUniform(this.uniforms[key]);
    }
  };
  Shader.prototype.initSampler2D = function(uniform) {
    var gl = this.gl;
    var texture = uniform.value.baseTexture;
    if (!texture.hasLoaded) {
      return;
    }
    if (uniform.textureData) {
      var data = uniform.textureData;
      texture._glTextures[gl.id] = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture._glTextures[gl.id]);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, texture.premultipliedAlpha);
      gl.texImage2D(gl.TEXTURE_2D, 0, data.luminance ? gl.LUMINANCE : gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.source);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, data.magFilter ? data.magFilter : gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, data.wrapS ? data.wrapS : gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, data.wrapS ? data.wrapS : gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, data.wrapT ? data.wrapT : gl.CLAMP_TO_EDGE);
    } else {
      this.shaderManager.renderer.updateTexture(texture);
    }
  };
  Shader.prototype.destroy = function() {
    this.gl.deleteProgram(this.program);
    this.gl = null;
    this.uniforms = null;
    this.attributes = null;
    this.vertexSrc = null;
    this.fragmentSrc = null;
  };
  Shader.prototype._glCompile = function(type, src) {
    var shader = this.gl.createShader(type);
    this.gl.shaderSource(shader, src);
    this.gl.compileShader(shader);
    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      console.log(this.gl.getShaderInfoLog(shader));
      return null;
    }
    return shader;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a8", ["cb"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Shader = $__require('cb');
  function TextureShader(shaderManager, vertexSrc, fragmentSrc, customUniforms, customAttributes) {
    var uniforms = {
      uSampler: {
        type: 'sampler2D',
        value: 0
      },
      projectionMatrix: {
        type: 'mat3',
        value: new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1])
      }
    };
    if (customUniforms) {
      for (var u in customUniforms) {
        uniforms[u] = customUniforms[u];
      }
    }
    var attributes = {
      aVertexPosition: 0,
      aTextureCoord: 0,
      aColor: 0
    };
    if (customAttributes) {
      for (var a in customAttributes) {
        attributes[a] = customAttributes[a];
      }
    }
    vertexSrc = vertexSrc || TextureShader.defaultVertexSrc;
    fragmentSrc = fragmentSrc || TextureShader.defaultFragmentSrc;
    Shader.call(this, shaderManager, vertexSrc, fragmentSrc, uniforms, attributes);
  }
  TextureShader.prototype = Object.create(Shader.prototype);
  TextureShader.prototype.constructor = TextureShader;
  module.exports = TextureShader;
  TextureShader.defaultVertexSrc = ['precision lowp float;', 'attribute vec2 aVertexPosition;', 'attribute vec2 aTextureCoord;', 'attribute vec4 aColor;', 'uniform mat3 projectionMatrix;', 'varying vec2 vTextureCoord;', 'varying vec4 vColor;', 'void main(void){', '   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);', '   vTextureCoord = aTextureCoord;', '   vColor = vec4(aColor.rgb * aColor.a, aColor.a);', '}'].join('\n');
  TextureShader.defaultFragmentSrc = ['precision lowp float;', 'varying vec2 vTextureCoord;', 'varying vec4 vColor;', 'uniform sampler2D uSampler;', 'void main(void){', '   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;', '}'].join('\n');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("ce", ["a8"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var DefaultShader = $__require('a8');
  function AbstractFilter(vertexSrc, fragmentSrc, uniforms) {
    this.shaders = [];
    this.padding = 0;
    this.uniforms = uniforms || {};
    this.vertexSrc = vertexSrc || DefaultShader.defaultVertexSrc;
    this.fragmentSrc = fragmentSrc || DefaultShader.defaultFragmentSrc;
  }
  AbstractFilter.prototype.constructor = AbstractFilter;
  module.exports = AbstractFilter;
  AbstractFilter.prototype.getShader = function(renderer) {
    var gl = renderer.gl;
    var shader = this.shaders[gl.id];
    if (!shader) {
      shader = new DefaultShader(renderer.shaderManager, this.vertexSrc, this.fragmentSrc, this.uniforms, this.attributes);
      this.shaders[gl.id] = shader;
    }
    return shader;
  };
  AbstractFilter.prototype.applyFilter = function(renderer, input, output, clear) {
    var shader = this.getShader(renderer);
    renderer.filterManager.applyFilter(shader, input, output, clear);
  };
  AbstractFilter.prototype.syncUniform = function(uniform) {
    for (var i = 0,
        j = this.shaders.length; i < j; ++i) {
      this.shaders[i].syncUniform(uniform);
    }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("d6", ["d7"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Point = $__require('d7');
  function Matrix() {
    this.a = 1;
    this.b = 0;
    this.c = 0;
    this.d = 1;
    this.tx = 0;
    this.ty = 0;
  }
  Matrix.prototype.constructor = Matrix;
  module.exports = Matrix;
  Matrix.prototype.fromArray = function(array) {
    this.a = array[0];
    this.b = array[1];
    this.c = array[3];
    this.d = array[4];
    this.tx = array[2];
    this.ty = array[5];
  };
  Matrix.prototype.set = function(a, b, c, d, tx, ty) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.tx = tx;
    this.ty = ty;
    return this;
  };
  Matrix.prototype.toArray = function(transpose, out) {
    if (!this.array) {
      this.array = new Float32Array(9);
    }
    var array = out || this.array;
    if (transpose) {
      array[0] = this.a;
      array[1] = this.b;
      array[2] = 0;
      array[3] = this.c;
      array[4] = this.d;
      array[5] = 0;
      array[6] = this.tx;
      array[7] = this.ty;
      array[8] = 1;
    } else {
      array[0] = this.a;
      array[1] = this.c;
      array[2] = this.tx;
      array[3] = this.b;
      array[4] = this.d;
      array[5] = this.ty;
      array[6] = 0;
      array[7] = 0;
      array[8] = 1;
    }
    return array;
  };
  Matrix.prototype.apply = function(pos, newPos) {
    newPos = newPos || new Point();
    var x = pos.x;
    var y = pos.y;
    newPos.x = this.a * x + this.c * y + this.tx;
    newPos.y = this.b * x + this.d * y + this.ty;
    return newPos;
  };
  Matrix.prototype.applyInverse = function(pos, newPos) {
    newPos = newPos || new Point();
    var id = 1 / (this.a * this.d + this.c * -this.b);
    var x = pos.x;
    var y = pos.y;
    newPos.x = this.d * id * x + -this.c * id * y + (this.ty * this.c - this.tx * this.d) * id;
    newPos.y = this.a * id * y + -this.b * id * x + (-this.ty * this.a + this.tx * this.b) * id;
    return newPos;
  };
  Matrix.prototype.translate = function(x, y) {
    this.tx += x;
    this.ty += y;
    return this;
  };
  Matrix.prototype.scale = function(x, y) {
    this.a *= x;
    this.d *= y;
    this.c *= x;
    this.b *= y;
    this.tx *= x;
    this.ty *= y;
    return this;
  };
  Matrix.prototype.rotate = function(angle) {
    var cos = Math.cos(angle);
    var sin = Math.sin(angle);
    var a1 = this.a;
    var c1 = this.c;
    var tx1 = this.tx;
    this.a = a1 * cos - this.b * sin;
    this.b = a1 * sin + this.b * cos;
    this.c = c1 * cos - this.d * sin;
    this.d = c1 * sin + this.d * cos;
    this.tx = tx1 * cos - this.ty * sin;
    this.ty = tx1 * sin + this.ty * cos;
    return this;
  };
  Matrix.prototype.append = function(matrix) {
    var a1 = this.a;
    var b1 = this.b;
    var c1 = this.c;
    var d1 = this.d;
    this.a = matrix.a * a1 + matrix.b * c1;
    this.b = matrix.a * b1 + matrix.b * d1;
    this.c = matrix.c * a1 + matrix.d * c1;
    this.d = matrix.c * b1 + matrix.d * d1;
    this.tx = matrix.tx * a1 + matrix.ty * c1 + this.tx;
    this.ty = matrix.tx * b1 + matrix.ty * d1 + this.ty;
    return this;
  };
  Matrix.prototype.setTransform = function(x, y, pivotX, pivotY, scaleX, scaleY, rotation, skewX, skewY) {
    var a,
        b,
        c,
        d,
        sr,
        cr,
        cy,
        sy,
        nsx,
        cx;
    sr = Math.sin(rotation);
    cr = Math.cos(rotation);
    cy = Math.cos(skewY);
    sy = Math.sin(skewY);
    nsx = -Math.sin(skewX);
    cx = Math.cos(skewX);
    a = cr * scaleX;
    b = sr * scaleX;
    c = -sr * scaleY;
    d = cr * scaleY;
    this.a = cy * a + sy * c;
    this.b = cy * b + sy * d;
    this.c = nsx * a + cx * c;
    this.d = nsx * b + cx * d;
    this.tx = x + (pivotX * a + pivotY * c);
    this.ty = y + (pivotX * b + pivotY * d);
    return this;
  };
  Matrix.prototype.prepend = function(matrix) {
    var tx1 = this.tx;
    if (matrix.a !== 1 || matrix.b !== 0 || matrix.c !== 0 || matrix.d !== 1) {
      var a1 = this.a;
      var c1 = this.c;
      this.a = a1 * matrix.a + this.b * matrix.c;
      this.b = a1 * matrix.b + this.b * matrix.d;
      this.c = c1 * matrix.a + this.d * matrix.c;
      this.d = c1 * matrix.b + this.d * matrix.d;
    }
    this.tx = tx1 * matrix.a + this.ty * matrix.c + matrix.tx;
    this.ty = tx1 * matrix.b + this.ty * matrix.d + matrix.ty;
    return this;
  };
  Matrix.prototype.invert = function() {
    var a1 = this.a;
    var b1 = this.b;
    var c1 = this.c;
    var d1 = this.d;
    var tx1 = this.tx;
    var n = a1 * d1 - b1 * c1;
    this.a = d1 / n;
    this.b = -b1 / n;
    this.c = -c1 / n;
    this.d = a1 / n;
    this.tx = (c1 * this.ty - d1 * tx1) / n;
    this.ty = -(a1 * this.ty - b1 * tx1) / n;
    return this;
  };
  Matrix.prototype.identity = function() {
    this.a = 1;
    this.b = 0;
    this.c = 0;
    this.d = 1;
    this.tx = 0;
    this.ty = 0;
    return this;
  };
  Matrix.prototype.clone = function() {
    var matrix = new Matrix();
    matrix.a = this.a;
    matrix.b = this.b;
    matrix.c = this.c;
    matrix.d = this.d;
    matrix.tx = this.tx;
    matrix.ty = this.ty;
    return matrix;
  };
  Matrix.prototype.copy = function(matrix) {
    matrix.a = this.a;
    matrix.b = this.b;
    matrix.c = this.c;
    matrix.d = this.d;
    matrix.tx = this.tx;
    matrix.ty = this.ty;
    return matrix;
  };
  Matrix.IDENTITY = new Matrix();
  Matrix.TEMP_MATRIX = new Matrix();
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("d8", ["d9", "a0"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Rectangle = $__require('d9'),
      CONST = $__require('a0');
  function Circle(x, y, radius) {
    this.x = x || 0;
    this.y = y || 0;
    this.radius = radius || 0;
    this.type = CONST.SHAPES.CIRC;
  }
  Circle.prototype.constructor = Circle;
  module.exports = Circle;
  Circle.prototype.clone = function() {
    return new Circle(this.x, this.y, this.radius);
  };
  Circle.prototype.contains = function(x, y) {
    if (this.radius <= 0) {
      return false;
    }
    var dx = (this.x - x),
        dy = (this.y - y),
        r2 = this.radius * this.radius;
    dx *= dx;
    dy *= dy;
    return (dx + dy <= r2);
  };
  Circle.prototype.getBounds = function() {
    return new Rectangle(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("da", ["d9", "a0"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Rectangle = $__require('d9'),
      CONST = $__require('a0');
  function Ellipse(x, y, width, height) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 0;
    this.height = height || 0;
    this.type = CONST.SHAPES.ELIP;
  }
  Ellipse.prototype.constructor = Ellipse;
  module.exports = Ellipse;
  Ellipse.prototype.clone = function() {
    return new Ellipse(this.x, this.y, this.width, this.height);
  };
  Ellipse.prototype.contains = function(x, y) {
    if (this.width <= 0 || this.height <= 0) {
      return false;
    }
    var normx = ((x - this.x) / this.width),
        normy = ((y - this.y) / this.height);
    normx *= normx;
    normy *= normy;
    return (normx + normy <= 1);
  };
  Ellipse.prototype.getBounds = function() {
    return new Rectangle(this.x - this.width, this.y - this.height, this.width, this.height);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("d7", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function Point(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }
  Point.prototype.constructor = Point;
  module.exports = Point;
  Point.prototype.clone = function() {
    return new Point(this.x, this.y);
  };
  Point.prototype.copy = function(p) {
    this.set(p.x, p.y);
  };
  Point.prototype.equals = function(p) {
    return (p.x === this.x) && (p.y === this.y);
  };
  Point.prototype.set = function(x, y) {
    this.x = x || 0;
    this.y = y || ((y !== 0) ? this.x : 0);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("db", ["d7", "a0"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Point = $__require('d7'),
      CONST = $__require('a0');
  function Polygon(points_) {
    var points = points_;
    if (!Array.isArray(points)) {
      points = new Array(arguments.length);
      for (var a = 0; a < points.length; ++a) {
        points[a] = arguments[a];
      }
    }
    if (points[0] instanceof Point) {
      var p = [];
      for (var i = 0,
          il = points.length; i < il; i++) {
        p.push(points[i].x, points[i].y);
      }
      points = p;
    }
    this.closed = true;
    this.points = points;
    this.type = CONST.SHAPES.POLY;
  }
  Polygon.prototype.constructor = Polygon;
  module.exports = Polygon;
  Polygon.prototype.clone = function() {
    return new Polygon(this.points.slice());
  };
  Polygon.prototype.contains = function(x, y) {
    var inside = false;
    var length = this.points.length / 2;
    for (var i = 0,
        j = length - 1; i < length; j = i++) {
      var xi = this.points[i * 2],
          yi = this.points[i * 2 + 1],
          xj = this.points[j * 2],
          yj = this.points[j * 2 + 1],
          intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) {
        inside = !inside;
      }
    }
    return inside;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("d9", ["a0"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var CONST = $__require('a0');
  function Rectangle(x, y, width, height) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 0;
    this.height = height || 0;
    this.type = CONST.SHAPES.RECT;
  }
  Rectangle.prototype.constructor = Rectangle;
  module.exports = Rectangle;
  Rectangle.EMPTY = new Rectangle(0, 0, 0, 0);
  Rectangle.prototype.clone = function() {
    return new Rectangle(this.x, this.y, this.width, this.height);
  };
  Rectangle.prototype.contains = function(x, y) {
    if (this.width <= 0 || this.height <= 0) {
      return false;
    }
    if (x >= this.x && x < this.x + this.width) {
      if (y >= this.y && y < this.y + this.height) {
        return true;
      }
    }
    return false;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("dc", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "name": "pixi.js",
    "version": "3.0.9",
    "description": "Pixi.js is a fast lightweight 2D library that works across all devices.",
    "author": "Mat Groves",
    "contributors": ["Chad Engler <chad@pantherdev.com>", "Richard Davey <rdavey@gmail.com>"],
    "main": "./src/index.js",
    "homepage": "http://goodboydigital.com/",
    "bugs": "https://github.com/pixijs/pixi.js/issues",
    "license": "MIT",
    "repository": {
      "type": "git",
      "url": "https://github.com/pixijs/pixi.js.git"
    },
    "scripts": {
      "start": "gulp && gulp watch",
      "test": "gulp && testem ci",
      "build": "gulp",
      "docs": "jsdoc -c ./gulp/util/jsdoc.conf.json -R README.md"
    },
    "files": ["bin/", "src/", "CONTRIBUTING.md", "LICENSE", "package.json", "README.md"],
    "dependencies": {
      "async": "^1.5.0",
      "brfs": "^1.4.1",
      "earcut": "^2.0.7",
      "eventemitter3": "^1.1.1",
      "object-assign": "^4.0.1",
      "resource-loader": "^1.6.4"
    },
    "devDependencies": {
      "browserify": "^11.1.0",
      "chai": "^3.2.0",
      "del": "^2.0.2",
      "gulp": "^3.9.0",
      "gulp-cached": "^1.1.0",
      "gulp-concat": "^2.6.0",
      "gulp-debug": "^2.1.0",
      "gulp-header": "^1.7.1",
      "gulp-jshint": "^1.11.2",
      "gulp-mirror": "^0.4.0",
      "gulp-plumber": "^1.0.1",
      "gulp-rename": "^1.2.2",
      "gulp-sourcemaps": "^1.5.2",
      "gulp-uglify": "^1.4.1",
      "gulp-util": "^3.0.6",
      "jaguarjs-jsdoc": "git+https://github.com/davidshimjs/jaguarjs-jsdoc.git",
      "jsdoc": "^3.3.2",
      "jshint-summary": "^0.4.0",
      "minimist": "^1.2.0",
      "mocha": "^2.3.2",
      "require-dir": "^0.3.0",
      "run-sequence": "^1.1.2",
      "testem": "^0.9.4",
      "vinyl-buffer": "^1.0.0",
      "vinyl-source-stream": "^1.1.0",
      "watchify": "^3.4.0"
    },
    "browserify": {"transform": ["brfs"]}
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a0", ["dc"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var CONST = {
    VERSION: $__require('dc').version,
    PI_2: Math.PI * 2,
    RAD_TO_DEG: 180 / Math.PI,
    DEG_TO_RAD: Math.PI / 180,
    TARGET_FPMS: 0.06,
    RENDERER_TYPE: {
      UNKNOWN: 0,
      WEBGL: 1,
      CANVAS: 2
    },
    BLEND_MODES: {
      NORMAL: 0,
      ADD: 1,
      MULTIPLY: 2,
      SCREEN: 3,
      OVERLAY: 4,
      DARKEN: 5,
      LIGHTEN: 6,
      COLOR_DODGE: 7,
      COLOR_BURN: 8,
      HARD_LIGHT: 9,
      SOFT_LIGHT: 10,
      DIFFERENCE: 11,
      EXCLUSION: 12,
      HUE: 13,
      SATURATION: 14,
      COLOR: 15,
      LUMINOSITY: 16
    },
    DRAW_MODES: {
      POINTS: 0,
      LINES: 1,
      LINE_LOOP: 2,
      LINE_STRIP: 3,
      TRIANGLES: 4,
      TRIANGLE_STRIP: 5,
      TRIANGLE_FAN: 6
    },
    SCALE_MODES: {
      DEFAULT: 0,
      LINEAR: 0,
      NEAREST: 1
    },
    RETINA_PREFIX: /@(.+)x/,
    RESOLUTION: 1,
    FILTER_RESOLUTION: 1,
    DEFAULT_RENDER_OPTIONS: {
      view: null,
      resolution: 1,
      antialias: false,
      forceFXAA: false,
      autoResize: false,
      transparent: false,
      backgroundColor: 0x000000,
      clearBeforeRender: true,
      preserveDrawingBuffer: false,
      roundPixels: false
    },
    SHAPES: {
      POLY: 0,
      RECT: 1,
      CIRC: 2,
      ELIP: 3,
      RREC: 4
    },
    SPRITE_BATCH_SIZE: 2000
  };
  module.exports = CONST;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("dd", ["a0"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var CONST = $__require('a0');
  function RoundedRectangle(x, y, width, height, radius) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 0;
    this.height = height || 0;
    this.radius = radius || 20;
    this.type = CONST.SHAPES.RREC;
  }
  RoundedRectangle.prototype.constructor = RoundedRectangle;
  module.exports = RoundedRectangle;
  RoundedRectangle.prototype.clone = function() {
    return new RoundedRectangle(this.x, this.y, this.width, this.height, this.radius);
  };
  RoundedRectangle.prototype.contains = function(x, y) {
    if (this.width <= 0 || this.height <= 0) {
      return false;
    }
    if (x >= this.x && x <= this.x + this.width) {
      if (y >= this.y && y <= this.y + this.height) {
        return true;
      }
    }
    return false;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("ab", ["d7", "d6", "d8", "da", "db", "d9", "dd"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    Point: $__require('d7'),
    Matrix: $__require('d6'),
    Circle: $__require('d8'),
    Ellipse: $__require('da'),
    Polygon: $__require('db'),
    Rectangle: $__require('d9'),
    RoundedRectangle: $__require('dd')
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("c4", ["ce", "ab", "85"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  var AbstractFilter = $__require('ce'),
      math = $__require('ab');
  var fs = $__require('85');
  function SpriteMaskFilter(sprite) {
    var maskMatrix = new math.Matrix();
    AbstractFilter.call(this, fs.readFileSync(__dirname + '/spriteMaskFilter.vert', 'utf8'), fs.readFileSync(__dirname + '/spriteMaskFilter.frag', 'utf8'), {
      mask: {
        type: 'sampler2D',
        value: sprite._texture
      },
      alpha: {
        type: 'f',
        value: 1
      },
      otherMatrix: {
        type: 'mat3',
        value: maskMatrix.toArray(true)
      }
    });
    this.maskSprite = sprite;
    this.maskMatrix = maskMatrix;
  }
  SpriteMaskFilter.prototype = Object.create(AbstractFilter.prototype);
  SpriteMaskFilter.prototype.constructor = SpriteMaskFilter;
  module.exports = SpriteMaskFilter;
  SpriteMaskFilter.prototype.applyFilter = function(renderer, input, output) {
    var filterManager = renderer.filterManager;
    this.uniforms.mask.value = this.maskSprite._texture;
    filterManager.calculateMappedMatrix(input.frame, this.maskSprite, this.maskMatrix);
    this.uniforms.otherMatrix.value = this.maskMatrix.toArray(true);
    this.uniforms.alpha.value = this.maskSprite.worldAlpha;
    var shader = this.getShader(renderer);
    filterManager.applyFilter(shader, input, output);
  };
  Object.defineProperties(SpriteMaskFilter.prototype, {
    map: {
      get: function() {
        return this.uniforms.mask.value;
      },
      set: function(value) {
        this.uniforms.mask.value = value;
      }
    },
    offset: {
      get: function() {
        return this.uniforms.offset.value;
      },
      set: function(value) {
        this.uniforms.offset.value = value;
      }
    }
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("53", ["a0", "ab", "ac", "a1", "b0", "a3", "ad", "a2", "a4", "aa", "af", "b2", "b5", "b9", "ae", "ba", "b1", "bb", "bc", "c0", "b4", "b3", "a6", "c3", "c8", "cb", "a5", "bd", "ce", "c9", "c4"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = module.exports = Object.assign($__require('a0'), $__require('ab'), {
    utils: $__require('ac'),
    ticker: $__require('a1'),
    DisplayObject: $__require('b0'),
    Container: $__require('a3'),
    Sprite: $__require('ad'),
    ParticleContainer: $__require('a2'),
    SpriteRenderer: $__require('a4'),
    ParticleRenderer: $__require('aa'),
    Text: $__require('af'),
    Graphics: $__require('b2'),
    GraphicsData: $__require('b5'),
    GraphicsRenderer: $__require('b9'),
    Texture: $__require('ae'),
    BaseTexture: $__require('ba'),
    RenderTexture: $__require('b1'),
    VideoBaseTexture: $__require('bb'),
    TextureUvs: $__require('bc'),
    CanvasRenderer: $__require('c0'),
    CanvasGraphics: $__require('b4'),
    CanvasBuffer: $__require('b3'),
    WebGLRenderer: $__require('a6'),
    WebGLManager: $__require('c3'),
    ShaderManager: $__require('c8'),
    Shader: $__require('cb'),
    ObjectRenderer: $__require('a5'),
    RenderTarget: $__require('bd'),
    AbstractFilter: $__require('ce'),
    FXAAFilter: $__require('c9'),
    SpriteMaskFilter: $__require('c4'),
    autoDetectRenderer: function(width, height, options, noWebGL) {
      width = width || 800;
      height = height || 600;
      if (!noWebGL && core.utils.isWebGLSupported()) {
        return new core.WebGLRenderer(width, height, options);
      }
      return new core.CanvasRenderer(width, height, options);
    }
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("de", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  if ($__System._nodeRequire) {
    module.exports = $__System._nodeRequire('fs');
  } else {
    exports.readFileSync = function(address) {
      var output;
      var xhr = new XMLHttpRequest();
      xhr.open('GET', address, false);
      xhr.onreadystatechange = function(e) {
        if (xhr.readyState == 4) {
          var status = xhr.status;
          if ((status > 399 && status < 600) || status == 400) {
            throw 'File read error on ' + address;
          } else
            output = xhr.responseText;
        }
      };
      xhr.send(null);
      return output;
    };
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("85", ["de"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('de');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("df", ["53", "85"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  var core = $__require('53');
  var fs = $__require('85');
  function TwistFilter() {
    core.AbstractFilter.call(this, null, fs.readFileSync(__dirname + '/twist.frag', 'utf8'), {
      radius: {
        type: '1f',
        value: 0.5
      },
      angle: {
        type: '1f',
        value: 5
      },
      offset: {
        type: 'v2',
        value: {
          x: 0.5,
          y: 0.5
        }
      }
    });
  }
  TwistFilter.prototype = Object.create(core.AbstractFilter.prototype);
  TwistFilter.prototype.constructor = TwistFilter;
  module.exports = TwistFilter;
  Object.defineProperties(TwistFilter.prototype, {
    offset: {
      get: function() {
        return this.uniforms.offset.value;
      },
      set: function(value) {
        this.uniforms.offset.value = value;
      }
    },
    radius: {
      get: function() {
        return this.uniforms.radius.value;
      },
      set: function(value) {
        this.uniforms.radius.value = value;
      }
    },
    angle: {
      get: function() {
        return this.uniforms.angle.value;
      },
      set: function(value) {
        this.uniforms.angle.value = value;
      }
    }
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("e0", ["84", "86", "89", "87", "88", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "df"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    AsciiFilter: $__require('84'),
    BloomFilter: $__require('86'),
    BlurFilter: $__require('89'),
    BlurXFilter: $__require('87'),
    BlurYFilter: $__require('88'),
    BlurDirFilter: $__require('8a'),
    ColorMatrixFilter: $__require('8b'),
    ColorStepFilter: $__require('8c'),
    ConvolutionFilter: $__require('8d'),
    CrossHatchFilter: $__require('8e'),
    DisplacementFilter: $__require('8f'),
    DotScreenFilter: $__require('90'),
    GrayFilter: $__require('91'),
    DropShadowFilter: $__require('93'),
    InvertFilter: $__require('94'),
    NoiseFilter: $__require('95'),
    PixelateFilter: $__require('96'),
    RGBSplitFilter: $__require('97'),
    ShockwaveFilter: $__require('98'),
    SepiaFilter: $__require('99'),
    SmartBlurFilter: $__require('9a'),
    TiltShiftFilter: $__require('9b'),
    TiltShiftXFilter: $__require('9c'),
    TiltShiftYFilter: $__require('9d'),
    TwistFilter: $__require('df')
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("e1", ["53", "7c", "5c", "e0"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = $__require('53'),
      mesh = $__require('7c'),
      extras = $__require('5c'),
      filters = $__require('e0');
  core.SpriteBatch = function() {
    throw new ReferenceError('SpriteBatch does not exist any more, please use the new ParticleContainer instead.');
  };
  core.AssetLoader = function() {
    throw new ReferenceError('The loader system was overhauled in pixi v3, please see the new PIXI.loaders.Loader class.');
  };
  Object.defineProperties(core, {
    Stage: {get: function() {
        console.warn('You do not need to use a PIXI Stage any more, you can simply render any container.');
        return core.Container;
      }},
    DisplayObjectContainer: {get: function() {
        console.warn('DisplayObjectContainer has been shortened to Container, please use Container from now on.');
        return core.Container;
      }},
    Strip: {get: function() {
        console.warn('The Strip class has been renamed to Mesh and moved to mesh.Mesh, please use mesh.Mesh from now on.');
        return mesh.Mesh;
      }},
    Rope: {get: function() {
        console.warn('The Rope class has been moved to mesh.Rope, please use mesh.Rope from now on.');
        return mesh.Rope;
      }},
    MovieClip: {get: function() {
        console.warn('The MovieClip class has been moved to extras.MovieClip, please use extras.MovieClip from now on.');
        return extras.MovieClip;
      }},
    TilingSprite: {get: function() {
        console.warn('The TilingSprite class has been moved to extras.TilingSprite, please use extras.TilingSprite from now on.');
        return extras.TilingSprite;
      }},
    BitmapText: {get: function() {
        console.warn('The BitmapText class has been moved to extras.BitmapText, please use extras.BitmapText from now on.');
        return extras.BitmapText;
      }},
    blendModes: {get: function() {
        console.warn('The blendModes has been moved to BLEND_MODES, please use BLEND_MODES from now on.');
        return core.BLEND_MODES;
      }},
    scaleModes: {get: function() {
        console.warn('The scaleModes has been moved to SCALE_MODES, please use SCALE_MODES from now on.');
        return core.SCALE_MODES;
      }},
    BaseTextureCache: {get: function() {
        console.warn('The BaseTextureCache class has been moved to utils.BaseTextureCache, please use utils.BaseTextureCache from now on.');
        return core.utils.BaseTextureCache;
      }},
    TextureCache: {get: function() {
        console.warn('The TextureCache class has been moved to utils.TextureCache, please use utils.TextureCache from now on.');
        return core.utils.TextureCache;
      }},
    math: {get: function() {
        console.warn('The math namespace is deprecated, please access members already accessible on PIXI.');
        return core;
      }}
  });
  core.Sprite.prototype.setTexture = function(texture) {
    this.texture = texture;
    console.warn('setTexture is now deprecated, please use the texture property, e.g : sprite.texture = texture;');
  };
  extras.BitmapText.prototype.setText = function(text) {
    this.text = text;
    console.warn('setText is now deprecated, please use the text property, e.g : myBitmapText.text = \'my text\';');
  };
  core.Text.prototype.setText = function(text) {
    this.text = text;
    console.warn('setText is now deprecated, please use the text property, e.g : myText.text = \'my text\';');
  };
  core.Text.prototype.setStyle = function(style) {
    this.style = style;
    console.warn('setStyle is now deprecated, please use the style property, e.g : myText.style = style;');
  };
  core.Texture.prototype.setFrame = function(frame) {
    this.frame = frame;
    console.warn('setFrame is now deprecated, please use the frame property, e.g : myTexture.frame = frame;');
  };
  Object.defineProperties(filters, {
    AbstractFilter: {get: function() {
        console.warn('filters.AbstractFilter is an undocumented alias, please use AbstractFilter from now on.');
        return core.AbstractFilter;
      }},
    FXAAFilter: {get: function() {
        console.warn('filters.FXAAFilter is an undocumented alias, please use FXAAFilter from now on.');
        return core.FXAAFilter;
      }},
    SpriteMaskFilter: {get: function() {
        console.warn('filters.SpriteMaskFilter is an undocumented alias, please use SpriteMaskFilter from now on.');
        return core.SpriteMaskFilter;
      }}
  });
  core.utils.uuid = function() {
    console.warn('utils.uuid() is deprecated, please use utils.uid() from now on.');
    return core.utils.uid();
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("e2", ["51", "53", "5c", "e0", "56", "73", "7c", "76", "e1"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('51');
  var core = module.exports = $__require('53');
  core.extras = $__require('5c');
  core.filters = $__require('e0');
  core.interaction = $__require('56');
  core.loaders = $__require('73');
  core.mesh = $__require('7c');
  core.accessibility = $__require('76');
  core.loader = new core.loaders.Loader();
  Object.assign(core, $__require('e1'));
  global.PIXI = core;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("e3", ["e2"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('e2');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("e4", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  class AnimatedValue {
    constructor(value) {
      this.write(value);
    }
    get() {
      if (this.timeout) {
        const now = Date.now();
        const end = this.frTime + this.timeout;
        if (now >= end) {
          this.timeout = 0;
          return this.toVal;
        } else {
          if (this.following) {
            this.toVal = this.following();
          }
          return this.toVal - (this.toVal - this.frVal) * (end - now) / this.timeout;
        }
      } else {
        return this.toVal;
      }
    }
    set(value, timeout) {
      if (value != this.toVal) {
        this.frVal = this.get();
        this.toVal = value;
        this.timeout = timeout;
        this.following = undefined;
        this.frTime = Date.now();
      }
    }
    follow(following, timeout) {
      this.frVal = this.get();
      this.following = following;
      this.timeout = timeout;
      this.frTime = Date.now();
    }
    write(value) {
      this.frVal = value;
      this.toVal = value;
      this.timeout = 0;
      this.frTime = Date.now();
    }
  }
  module.exports = AnimatedValue;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("e5", ["e3", "e4"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  const PIXI = $__require('e3');
  const AnimatedValue = $__require('e4');
  class BallView {
    constructor(main, ball) {
      this.main = main;
      this.ball = ball;
      this.container = new PIXI.Container();
      this.graphic = new PIXI.Graphics();
      this.container.addChild(this.graphic);
      this.x = new AnimatedValue(0);
      this.y = new AnimatedValue(0);
      this.s = new AnimatedValue(0);
      this.appear();
      this.ball.on('appear', () => this.appear());
      this.ball.on('destroy', (reason) => {
        if (reason.reason == 'eaten') {
          const eater = this.main.balls[reason.by];
          if (eater && eater.ball.id != this.ball.id) {
            this.x.follow(() => eater.x.get(), 100);
            this.y.follow(() => eater.y.get(), 100);
            setTimeout(() => this.disappear(), 50);
          } else {
            this.disappear();
          }
        } else {
          this.disappear();
        }
      });
      this.ball.on('disappear', () => this.disappear());
      this.ball.on('move', (oldX, oldY, newX, newY) => {
        this.x.set(newX, 100);
        this.y.set(newY, 100);
      });
      this.ball.on('resize', (oldSize, newSize) => {
        this.s.set(newSize, 100);
        this.main.zSort(newSize);
      });
    }
    appear() {
      this.x.write(this.ball.x);
      this.y.write(this.ball.y);
      this.s.set(this.ball.size, 100);
      this.shape();
      this.setName();
      this.setMass();
      this.main.zSort(this.ball.size);
      this.main.stage.addChild(this.container);
    }
    disappear() {
      this.s.set(0, 100);
      setTimeout(() => this.main.stage.removeChild(this.container), 100);
    }
    shape() {
      this.graphic.clear();
      this.graphic.beginFill(this.ball.virus ? 0x005500 : this.ball.color.replace('#', '0x'), 1);
      this.graphic.drawCircle(0, 0, 1);
      this.graphic.endFill();
    }
    setName() {
      if (this.ball.name) {
        if (!this.name) {
          this.name = new PIXI.Text(this.ball.name, {
            font: 'bold 20pt Arial',
            fill: 0xFFFFFF,
            stroke: 0x000000,
            strokeThickness: 5
          });
          this.ball.on('rename', () => this.updateName());
        }
        this.updateName();
        this.container.addChild(this.name);
      } else {
        if (this.name) {
          this.container.removeChild(this.text);
          this.ball.removeAllListener('rename');
          delete this.text;
        }
      }
    }
    updateName() {
      this.name.resolution = 10;
      this.name.scale.x = this.name.scale.y *= 2 * 0.9 / this.name.width;
      this.name.position.x = -this.name.width / 2;
      this.name.position.y = -this.name.height / 2;
    }
    setMass() {
      if (this.ball.mine) {
        if (!this.mass) {
          this.mass = new PIXI.Text(this.ball.size, {
            font: 'bold 20pt Arial',
            fill: 0xFFFFFF,
            stroke: 0x000000,
            strokeThickness: 5
          });
          this.ball.on('resize', () => {
            this.updateMass();
          });
        }
        this.updateMass();
        this.container.addChild(this.mass);
      } else {
        if (this.mass) {
          this.container.removeChild(this.mass);
          this.ball.removeAllListeners('rename');
          delete this.mass;
        }
      }
    }
    updateMass() {
      this.mass.text = this.ball.size;
      this.mass.resolution = 10;
      this.mass.scale.x = this.mass.scale.y *= 0.5 / this.mass.width;
      this.mass.position.x = -this.mass.width / 2;
      this.mass.position.y = this.name ? this.name.height / 2 : 0;
    }
    render() {
      this.container.position.x = this.x.get();
      this.container.position.y = this.y.get();
      this.container.scale.x = this.container.scale.y = this.s.get();
    }
  }
  module.exports = BallView;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("e6", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports.ensureRange = function(value, min, max) {
    return Math.min(Math.max(value, min), max);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("e7", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Stats = function() {
    var now = (self.performance && self.performance.now) ? self.performance.now.bind(performance) : Date.now;
    var startTime = now(),
        prevTime = startTime;
    var frames = 0,
        mode = 0;
    function createElement(tag, id, css) {
      var element = document.createElement(tag);
      element.id = id;
      element.style.cssText = css;
      return element;
    }
    function createPanel(id, fg, bg) {
      var div = createElement('div', id, 'padding:0 0 3px 3px;text-align:left;background:' + bg);
      var text = createElement('div', id + 'Text', 'font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px;color:' + fg);
      text.innerHTML = id.toUpperCase();
      div.appendChild(text);
      var graph = createElement('div', id + 'Graph', 'width:74px;height:30px;background:' + fg);
      div.appendChild(graph);
      for (var i = 0; i < 74; i++) {
        graph.appendChild(createElement('span', '', 'width:1px;height:30px;float:left;opacity:0.9;background:' + bg));
      }
      return div;
    }
    function setMode(value) {
      var children = container.children;
      for (var i = 0; i < children.length; i++) {
        children[i].style.display = i === value ? 'block' : 'none';
      }
      mode = value;
    }
    function updateGraph(dom, value) {
      var child = dom.appendChild(dom.firstChild);
      child.style.height = Math.min(30, 30 - value * 30) + 'px';
    }
    var container = createElement('div', 'stats', 'width:80px;opacity:0.9;cursor:pointer');
    container.addEventListener('mousedown', function(event) {
      event.preventDefault();
      setMode(++mode % container.children.length);
    }, false);
    var fps = 0,
        fpsMin = Infinity,
        fpsMax = 0;
    var fpsDiv = createPanel('fps', '#0ff', '#002');
    var fpsText = fpsDiv.children[0];
    var fpsGraph = fpsDiv.children[1];
    container.appendChild(fpsDiv);
    var ms = 0,
        msMin = Infinity,
        msMax = 0;
    var msDiv = createPanel('ms', '#0f0', '#020');
    var msText = msDiv.children[0];
    var msGraph = msDiv.children[1];
    container.appendChild(msDiv);
    if (self.performance && self.performance.memory) {
      var mem = 0,
          memMin = Infinity,
          memMax = 0;
      var memDiv = createPanel('mb', '#f08', '#201');
      var memText = memDiv.children[0];
      var memGraph = memDiv.children[1];
      container.appendChild(memDiv);
    }
    setMode(mode);
    return {
      REVISION: 14,
      domElement: container,
      setMode: setMode,
      begin: function() {
        startTime = now();
      },
      end: function() {
        var time = now();
        ms = time - startTime;
        msMin = Math.min(msMin, ms);
        msMax = Math.max(msMax, ms);
        msText.textContent = (ms | 0) + ' MS (' + (msMin | 0) + '-' + (msMax | 0) + ')';
        updateGraph(msGraph, ms / 200);
        frames++;
        if (time > prevTime + 1000) {
          fps = Math.round((frames * 1000) / (time - prevTime));
          fpsMin = Math.min(fpsMin, fps);
          fpsMax = Math.max(fpsMax, fps);
          fpsText.textContent = fps + ' FPS (' + fpsMin + '-' + fpsMax + ')';
          updateGraph(fpsGraph, fps / 100);
          prevTime = time;
          frames = 0;
          if (mem !== undefined) {
            var heapSize = performance.memory.usedJSHeapSize;
            var heapSizeLimit = performance.memory.jsHeapSizeLimit;
            mem = Math.round(heapSize * 0.000000954);
            memMin = Math.min(memMin, mem);
            memMax = Math.max(memMax, mem);
            memText.textContent = mem + ' MB (' + memMin + '-' + memMax + ')';
            updateGraph(memGraph, heapSize / heapSizeLimit);
          }
        }
        return time;
      },
      update: function() {
        startTime = this.end();
      }
    };
  };
  if (typeof module === 'object') {
    module.exports = Stats;
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("e8", ["e7"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('e7');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("e9", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function EventEmitter() {
    this._events = this._events || {};
    this._maxListeners = this._maxListeners || undefined;
  }
  module.exports = EventEmitter;
  EventEmitter.EventEmitter = EventEmitter;
  EventEmitter.prototype._events = undefined;
  EventEmitter.prototype._maxListeners = undefined;
  EventEmitter.defaultMaxListeners = 10;
  EventEmitter.prototype.setMaxListeners = function(n) {
    if (!isNumber(n) || n < 0 || isNaN(n))
      throw TypeError('n must be a positive number');
    this._maxListeners = n;
    return this;
  };
  EventEmitter.prototype.emit = function(type) {
    var er,
        handler,
        len,
        args,
        i,
        listeners;
    if (!this._events)
      this._events = {};
    if (type === 'error') {
      if (!this._events.error || (isObject(this._events.error) && !this._events.error.length)) {
        er = arguments[1];
        if (er instanceof Error) {
          throw er;
        }
        throw TypeError('Uncaught, unspecified "error" event.');
      }
    }
    handler = this._events[type];
    if (isUndefined(handler))
      return false;
    if (isFunction(handler)) {
      switch (arguments.length) {
        case 1:
          handler.call(this);
          break;
        case 2:
          handler.call(this, arguments[1]);
          break;
        case 3:
          handler.call(this, arguments[1], arguments[2]);
          break;
        default:
          args = Array.prototype.slice.call(arguments, 1);
          handler.apply(this, args);
      }
    } else if (isObject(handler)) {
      args = Array.prototype.slice.call(arguments, 1);
      listeners = handler.slice();
      len = listeners.length;
      for (i = 0; i < len; i++)
        listeners[i].apply(this, args);
    }
    return true;
  };
  EventEmitter.prototype.addListener = function(type, listener) {
    var m;
    if (!isFunction(listener))
      throw TypeError('listener must be a function');
    if (!this._events)
      this._events = {};
    if (this._events.newListener)
      this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
    if (!this._events[type])
      this._events[type] = listener;
    else if (isObject(this._events[type]))
      this._events[type].push(listener);
    else
      this._events[type] = [this._events[type], listener];
    if (isObject(this._events[type]) && !this._events[type].warned) {
      if (!isUndefined(this._maxListeners)) {
        m = this._maxListeners;
      } else {
        m = EventEmitter.defaultMaxListeners;
      }
      if (m && m > 0 && this._events[type].length > m) {
        this._events[type].warned = true;
        console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
        if (typeof console.trace === 'function') {
          console.trace();
        }
      }
    }
    return this;
  };
  EventEmitter.prototype.on = EventEmitter.prototype.addListener;
  EventEmitter.prototype.once = function(type, listener) {
    if (!isFunction(listener))
      throw TypeError('listener must be a function');
    var fired = false;
    function g() {
      this.removeListener(type, g);
      if (!fired) {
        fired = true;
        listener.apply(this, arguments);
      }
    }
    g.listener = listener;
    this.on(type, g);
    return this;
  };
  EventEmitter.prototype.removeListener = function(type, listener) {
    var list,
        position,
        length,
        i;
    if (!isFunction(listener))
      throw TypeError('listener must be a function');
    if (!this._events || !this._events[type])
      return this;
    list = this._events[type];
    length = list.length;
    position = -1;
    if (list === listener || (isFunction(list.listener) && list.listener === listener)) {
      delete this._events[type];
      if (this._events.removeListener)
        this.emit('removeListener', type, listener);
    } else if (isObject(list)) {
      for (i = length; i-- > 0; ) {
        if (list[i] === listener || (list[i].listener && list[i].listener === listener)) {
          position = i;
          break;
        }
      }
      if (position < 0)
        return this;
      if (list.length === 1) {
        list.length = 0;
        delete this._events[type];
      } else {
        list.splice(position, 1);
      }
      if (this._events.removeListener)
        this.emit('removeListener', type, listener);
    }
    return this;
  };
  EventEmitter.prototype.removeAllListeners = function(type) {
    var key,
        listeners;
    if (!this._events)
      return this;
    if (!this._events.removeListener) {
      if (arguments.length === 0)
        this._events = {};
      else if (this._events[type])
        delete this._events[type];
      return this;
    }
    if (arguments.length === 0) {
      for (key in this._events) {
        if (key === 'removeListener')
          continue;
        this.removeAllListeners(key);
      }
      this.removeAllListeners('removeListener');
      this._events = {};
      return this;
    }
    listeners = this._events[type];
    if (isFunction(listeners)) {
      this.removeListener(type, listeners);
    } else if (listeners) {
      while (listeners.length)
        this.removeListener(type, listeners[listeners.length - 1]);
    }
    delete this._events[type];
    return this;
  };
  EventEmitter.prototype.listeners = function(type) {
    var ret;
    if (!this._events || !this._events[type])
      ret = [];
    else if (isFunction(this._events[type]))
      ret = [this._events[type]];
    else
      ret = this._events[type].slice();
    return ret;
  };
  EventEmitter.prototype.listenerCount = function(type) {
    if (this._events) {
      var evlistener = this._events[type];
      if (isFunction(evlistener))
        return 1;
      else if (evlistener)
        return evlistener.length;
    }
    return 0;
  };
  EventEmitter.listenerCount = function(emitter, type) {
    return emitter.listenerCount(type);
  };
  function isFunction(arg) {
    return typeof arg === 'function';
  }
  function isNumber(arg) {
    return typeof arg === 'number';
  }
  function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  }
  function isUndefined(arg) {
    return arg === void 0;
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("45", ["e9"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('e9');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("ea", ["4b", "e3", "e4", "e5", "e6", "e8", "45"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  const MapSize = $__require('4b');
  const PIXI = $__require('e3');
  const AnimatedValue = $__require('e4');
  const BallView = $__require('e5');
  const Misc = $__require('e6');
  const Stats = $__require('e8');
  const EventEmitter = $__require('45').EventEmitter;
  class Viewer extends EventEmitter {
    constructor(client, container) {
      super();
      this.client = client;
      this.container = container;
      this.balls = {};
      this.addRenderer();
      this.addStats();
      this.mapSize = MapSize.default();
      client.once('mapSizeLoad', (minX, minY, maxX, maxY) => {
        this.mapSize = new MapSize(minX, minY, maxX, maxY);
        this.gameWidth = maxX;
        this.gameHeight = maxY;
        this.zoom = 0;
        this.initStage();
        this.addListners();
        this.addBorders();
        this.animate();
        this.homeview = true;
        client.once('myNewBall', () => this.homeview = false);
        this.emit('launched');
      });
      window.addEventListener('resize', () => this.updateSize());
      window.addEventListener('wheel', (e) => this.modifyZoom(e.deltaY));
    }
    getSize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    }
    addRenderer() {
      this.getSize();
      this.renderer = PIXI.autoDetectRenderer(this.width, this.height, {antialias: true});
      this.container.appendChild(this.renderer.view);
    }
    updateSize() {
      this.getSize();
      this.renderer.resize(this.width, this.height);
    }
    defaultScale() {
      return Math.max(this.width / 1920, this.height / 1080);
    }
    modifyZoom(amount) {
      this.zoom -= Math.sign(amount) * 0.25;
      this.zoom = Misc.ensureRange(this.zoom, -5, 1.5);
    }
    initStage() {
      this.stage = new PIXI.Container();
      this.cam = {
        x: new AnimatedValue(this.mapSize.centerX()),
        y: new AnimatedValue(this.mapSize.centerY()),
        s: new AnimatedValue(this.defaultScale()),
        z: new AnimatedValue(this.zoom)
      };
      this.d = {};
      this.dg = new PIXI.Graphics();
      this.stage.addChild(this.dg);
    }
    addListners() {
      this.client.on('ballAppear', (id) => {
        if (!this.balls[id]) {
          this.balls[id] = new BallView(this, this.client.balls[id]);
        }
      });
      this.client.on('ballDestroy', (id) => delete this.client.balls[id]);
    }
    addBorders() {
      this.borders = new PIXI.Graphics();
      this.borders.lineStyle(5, 0xFF3300, 1);
      const s = this.mapSize;
      this.borders.drawRect(s.minX, s.minY, s.width(), s.height());
      this.stage.addChild(this.borders);
    }
    addStats() {
      this.stats = new Stats();
      this.stats.setMode(1);
      this.stats.domElement.style.position = 'absolute';
      this.stats.domElement.style.left = '0px';
      this.stats.domElement.style.top = '0px';
      document.body.appendChild(this.stats.domElement);
    }
    zSort(at) {
      if (!at) {
        at = 0;
      }
      const keys = Object.keys(this.balls);
      keys.sort((a, b) => this.balls[a].ball.size - this.balls[b].ball.size);
      for (const keyOffset in keys) {
        const ball = this.balls[keys[keyOffset]];
        if (ball.ball.size >= at) {
          ball.container.bringToFront();
        }
      }
    }
    posCamera() {
      let x,
          y,
          p;
      x = y = p = 0;
      for (const ballId in this.client.my_balls) {
        const ball = this.client.balls[this.client.my_balls[ballId]];
        if (!ball.visible)
          continue;
        x += ball.x * ball.size;
        y += ball.y * ball.size;
        p += ball.size;
      }
      if (p > 0) {
        this.cam.x.set(x / p, 100);
        this.cam.y.set(y / p, 100);
        this.cam.s.set(Math.pow(Math.min(64 / p, 1), 0.4) * this.defaultScale(), 500);
      } else if (this.homeview) {
        this.cam.s.write(this.defaultScale());
      }
      this.cam.z.set(this.zoom, 100);
    }
    render() {
      for (const ballId in this.client.balls) {
        const ball = this.balls[ballId];
        if (ball) {
          ball.render();
        }
      }
    }
    animate() {
      this.stats.begin();
      this.render();
      this.posCamera();
      this.stage.scale.x = this.stage.scale.y = this.cam.s.get() * Math.pow(2, this.cam.z.get());
      this.stage.position.x = -this.cam.x.get() * this.stage.scale.x + this.width / 2;
      this.stage.position.y = -this.cam.y.get() * this.stage.scale.y + this.height / 2;
      this.renderer.render(this.stage);
      this.stats.end();
      this.emit('animate');
      requestAnimationFrame(() => this.animate());
    }
  }
  module.exports = Viewer;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("eb", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  class Pointer {
    constructor(viewer) {
      this.viewer = viewer;
      this.client = this.viewer.client;
      this.dest = {
        x: 0,
        y: 0
      };
      this.viewer.once('launched', () => {
        this.viewer.stage.interactive = true;
        this.viewer.stage.on('mousemove', (e) => this.pointermove(e));
        this.viewer.stage.on('touchmove', (e) => this.pointermove(e));
        this.viewer.on('animate', (e) => this.move());
      });
      window.addEventListener('keydown', (e) => {
        if (e.keyCode == 87) {
          this.client.eject();
        } else if (e.keyCode == 32) {
          this.client.split();
        }
      });
    }
    move() {
      this.client.moveTo(this.viewer.cam.x.get() + this.dest.x, this.viewer.cam.y.get() + this.dest.y);
    }
    pointermove(e) {
      const gamePos = e.data.getLocalPosition(this.viewer.stage);
      this.dest = {
        x: gamePos.x - this.viewer.cam.x.get(),
        y: gamePos.y - this.viewer.cam.y.get()
      };
      if (Math.abs(this.dest.x) < 10 && Math.abs(this.dest.y) < 10) {
        this.dest = {
          x: 0,
          y: 0
        };
      }
      this.move();
    }
  }
  module.exports = Pointer;
  global.define = __define;
  return module.exports;
});

$__System.register('1', ['49', 'e3', '4a', 'ea', 'eb'], function (_export) {

  /* global performance: false */

  'use strict';var Client, PIXI, Controller, Viewer, Pointer, d;
  return {
    setters: [function (_) {
      Client = _['default'];
    }, function (_e3) {
      PIXI = _e3['default'];
    }, function (_a) {
      Controller = _a['default'];
    }, function (_ea) {
      Viewer = _ea['default'];
    }, function (_eb) {
      Pointer = _eb['default'];
    }],
    execute: function () {

      PIXI.Container.prototype.bringToFront = function () {
        if (this.parent) {
          var parent = this.parent;
          parent.removeChild(this);
          parent.addChild(this);
        }
      };

      d = {};
      // DEBUG Allow access from console
      window.onload = function () {
        d.client = new Client('worker');
        d.viewer = new Viewer(d.client, document.getElementById('viewer'));
        d.controller = new Controller(d.client);
        d.pointer = new Pointer(d.viewer);
      };
    }
  };
});
})
(function(factory) {
  factory();
});
//# sourceMappingURL=main.bundle.js.map
