import { reactive, computed, ref, onMounted, toRefs } from "vue";
var gocaptcha = "";
const defaultConfig$4 = () => ({
  width: 300,
  height: 240,
  thumbWidth: 150,
  thumbHeight: 40,
  verticalPadding: 16,
  horizontalPadding: 12,
  showTheme: true
});
const __sfc_main$c = {};
__sfc_main$c.setup = (__props, __ctx) => {
  const emit = __ctx.emit;
  function emitClickEvent(e) {
    emit("click", e);
  }
  return {
    emitClickEvent
  };
};
var render$c = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", _vm._b({ attrs: { "xmlns": "http://www.w3.org/2000/svg", "viewBox": "0 0 200 200", "width": "20", "height": "20" }, on: { "click": _vm.emitClickEvent } }, "svg", _vm.$attrs, false), [_c("path", { attrs: { "d": "M100.1,189.9C100.1,189.9,100,189.9,100.1,189.9c-49.7,0-90-40.4-90-89.9c0-49.6,40.4-89.9,89.9-89.9\n		c49.6,0,89.9,40.4,89.9,89.9c0,18.2-5.4,35.7-15.6,50.7c-1.5,2.1-3.6,3.4-6.1,3.9c-2.5,0.4-5-0.1-7-1.6c-4.2-3-5.3-8.6-2.4-12.9\n		c8.1-11.9,12.4-25.7,12.4-40.1c0-39.2-31.9-71.1-71.1-71.1c-39.2,0-71.1,31.9-71.1,71.1c0,39.2,31.9,71.1,71.1,71.1\n		c7.7,0,15.3-1.2,22.6-3.6c2.4-0.8,4.9-0.6,7.2,0.5c2.2,1.1,3.9,3.1,4.7,5.5c1.6,4.9-1,10.2-5.9,11.9\n		C119.3,188.4,109.8,189.9,100.1,189.9z M73,136.4C73,136.4,73,136.4,73,136.4c-2.5,0-4.9-1-6.7-2.8c-3.7-3.7-3.7-9.6,0-13.3\n		L86.7,100L66.4,79.7c-3.7-3.7-3.7-9.6,0-13.3c3.7-3.7,9.6-3.7,13.3,0L100,86.7l20.3-20.3c1.8-1.8,4.1-2.8,6.7-2.8c0,0,0,0,0,0\n		c2.5,0,4.9,1,6.7,2.8c1.8,1.8,2.8,4.1,2.8,6.7c0,2.5-1,4.9-2.8,6.7L113.3,100l20.3,20.3c3.7,3.7,3.7,9.6,0,13.3\n		c-3.7,3.7-9.6,3.7-13.3,0L100,113.3l-20.3,20.3C77.9,135.4,75.5,136.4,73,136.4z" } })]);
};
var staticRenderFns$c = [];
var closeIcon_vue_vue_type_style_index_0_scoped_true_lang = "";
function normalizeComponent(scriptExports, render2, staticRenderFns2, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render2) {
    options.render = render2;
    options.staticRenderFns = staticRenderFns2;
    options._compiled = true;
  }
  if (functionalTemplate) {
    options.functional = true;
  }
  if (scopeId) {
    options._scopeId = "data-v-" + scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode ? function() {
      injectStyles.call(
        this,
        (options.functional ? this.parent : this).$root.$options.shadowRoot
      );
    } : injectStyles;
  }
  if (hook) {
    if (options.functional) {
      options._injectStyles = hook;
      var originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options
  };
}
const __cssModules$c = {};
var __component__$c = /* @__PURE__ */ normalizeComponent(
  __sfc_main$c,
  render$c,
  staticRenderFns$c,
  false,
  __vue2_injectStyles$c,
  "3972774c",
  null,
  null
);
function __vue2_injectStyles$c(context) {
  for (let o in __cssModules$c) {
    this[o] = __cssModules$c[o];
  }
}
var CloseIcon = /* @__PURE__ */ function() {
  return __component__$c.exports;
}();
const __sfc_main$b = {};
__sfc_main$b.setup = (__props, __ctx) => {
  const emit = __ctx.emit;
  function emitClickEvent(e) {
    emit("click", e);
  }
  return {
    emitClickEvent
  };
};
var render$b = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", _vm._b({ attrs: { "xmlns": "http://www.w3.org/2000/svg", "viewBox": "0 0 200 200", "width": "20", "height": "20" }, on: { "click": _vm.emitClickEvent } }, "svg", _vm.$attrs, false), [_c("path", { attrs: { "d": "M135,149.9c-10.7,7.6-23.2,11.4-36,11.2c-1.7,0-3.4-0.1-5-0.3c-0.7-0.1-1.4-0.2-2-0.3c-1.3-0.2-2.6-0.4-3.9-0.6\n	c-0.8-0.2-1.6-0.4-2.3-0.5c-1.2-0.3-2.5-0.6-3.7-1c-0.6-0.2-1.2-0.4-1.7-0.6c-1.4-0.5-2.8-1-4.2-1.5c-0.3-0.1-0.6-0.3-0.9-0.4\n	c-1.6-0.7-3.2-1.4-4.7-2.3c-0.1,0-0.1-0.1-0.2-0.1c-5.1-2.9-9.8-6.4-14-10.6c-0.1-0.1-0.1-0.1-0.2-0.2c-1.3-1.3-2.5-2.7-3.7-4.1\n	c-0.2-0.3-0.5-0.6-0.7-0.9c-8.4-10.6-13.5-24.1-13.5-38.8h14.3c0.4,0,0.7-0.2,0.9-0.5c0.2-0.3,0.2-0.8,0-1.1L29.5,60.9\n	c-0.2-0.3-0.5-0.5-0.9-0.5c-0.4,0-0.7,0.2-0.9,0.5L3.8,97.3c-0.2,0.3-0.2,0.7,0,1.1c0.2,0.3,0.5,0.5,0.9,0.5h14.3\n	c0,17.2,5.3,33.2,14.3,46.4c0.1,0.2,0.2,0.4,0.3,0.6c0.9,1.4,2,2.6,3,3.9c0.4,0.5,0.7,1,1.1,1.5c1.5,1.8,3,3.5,4.6,5.2\n	c0.2,0.2,0.3,0.3,0.5,0.5c5.4,5.5,11.5,10.1,18.2,13.8c0.2,0.1,0.3,0.2,0.5,0.3c1.9,1,3.9,2,5.9,2.9c0.5,0.2,1,0.5,1.5,0.7\n	c1.7,0.7,3.5,1.3,5.2,1.9c0.8,0.3,1.7,0.6,2.5,0.8c1.5,0.5,3.1,0.8,4.7,1.2c1.1,0.2,2.1,0.5,3.2,0.7c0.4,0.1,0.9,0.2,1.3,0.3\n	c1.5,0.3,3,0.4,4.5,0.6c0.5,0.1,1.1,0.2,1.6,0.2c2.7,0.3,5.4,0.4,8.1,0.4c16.4,0,32.5-5.1,46.2-14.8c4.4-3.1,5.5-9.2,2.4-13.7\n	C145.5,147.8,139.4,146.7,135,149.9 M180.6,98.9c0-17.2-5.3-33.1-14.2-46.3c-0.1-0.2-0.2-0.5-0.4-0.7c-1.1-1.6-2.3-3.1-3.5-4.6\n	c-0.1-0.2-0.3-0.4-0.4-0.6c-8.2-10.1-18.5-17.9-30.2-23c-0.3-0.1-0.6-0.3-1-0.4c-1.9-0.8-3.8-1.5-5.7-2.1c-0.7-0.2-1.4-0.5-2.1-0.7\n	c-1.7-0.5-3.4-0.9-5.1-1.3c-0.9-0.2-1.9-0.5-2.8-0.7c-0.5-0.1-0.9-0.2-1.4-0.3c-1.3-0.2-2.6-0.3-3.8-0.5c-0.9-0.1-1.8-0.3-2.6-0.3\n	c-2.1-0.2-4.3-0.3-6.4-0.3c-0.4,0-0.8-0.1-1.2-0.1c-0.1,0-0.1,0-0.2,0c-16.4,0-32.4,5-46.2,14.8C49,35,48,41.1,51,45.6\n	c3.1,4.4,9.1,5.5,13.5,2.4c10.6-7.5,23-11.3,35.7-11.2c1.8,0,3.6,0.1,5.4,0.3c0.6,0.1,1.1,0.1,1.6,0.2c1.5,0.2,2.9,0.4,4.3,0.7\n	c0.6,0.1,1.3,0.3,1.9,0.4c1.4,0.3,2.8,0.7,4.2,1.1c0.4,0.1,0.9,0.3,1.3,0.4c1.6,0.5,3.1,1.1,4.6,1.7c0.2,0.1,0.3,0.1,0.5,0.2\n	c9,3.9,17,10,23.2,17.6c0,0,0.1,0.1,0.1,0.2c8.7,10.7,14,24.5,14,39.4H147c-0.4,0-0.7,0.2-0.9,0.5c-0.2,0.3-0.2,0.8,0,1.1l24,36.4\n	c0.2,0.3,0.5,0.5,0.9,0.5c0.4,0,0.7-0.2,0.9-0.5l23.9-36.4c0.2-0.3,0.2-0.7,0-1.1c-0.2-0.3-0.5-0.5-0.9-0.5L180.6,98.9L180.6,98.9\n	L180.6,98.9z" } })]);
};
var staticRenderFns$b = [];
var refreshIcon_vue_vue_type_style_index_0_scoped_true_lang = "";
const __cssModules$b = {};
var __component__$b = /* @__PURE__ */ normalizeComponent(
  __sfc_main$b,
  render$b,
  staticRenderFns$b,
  false,
  __vue2_injectStyles$b,
  "1120f0d2",
  null,
  null
);
function __vue2_injectStyles$b(context) {
  for (let o in __cssModules$b) {
    this[o] = __cssModules$b[o];
  }
}
var RefreshIcon = /* @__PURE__ */ function() {
  return __component__$b.exports;
}();
const __sfc_main$a = {};
__sfc_main$a.setup = (__props, __ctx) => {
  const emit = __ctx.emit;
  function emitClickEvent(e) {
    emit("click", e);
  }
  return {
    emitClickEvent
  };
};
var render$a = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", _vm._b({ attrs: { "xmlns": "http://www.w3.org/2000/svg", "viewBox": "0 0 100 100", "preserveAspectRatio": "xMidYMid", "width": "84", "height": "84" }, on: { "click": _vm.emitClickEvent } }, "svg", _vm.$attrs, false), [_c("circle", { attrs: { "cx": "50", "cy": "36.8101", "r": "10", "fill": "#3e7cff" } }, [_c("animate", { attrs: { "attributeName": "cy", "dur": "1s", "repeatCount": "indefinite", "calcMode": "spline", "keySplines": "0.45 0 0.9 0.55;0 0.45 0.55 0.9", "keyTimes": "0;0.5;1", "values": "23;77;23" } })])]);
};
var staticRenderFns$a = [];
var loadingIcon_vue_vue_type_style_index_0_scoped_true_lang = "";
const __cssModules$a = {};
var __component__$a = /* @__PURE__ */ normalizeComponent(
  __sfc_main$a,
  render$a,
  staticRenderFns$a,
  false,
  __vue2_injectStyles$a,
  "93a01640",
  null,
  null
);
function __vue2_injectStyles$a(context) {
  for (let o in __cssModules$a) {
    this[o] = __cssModules$a[o];
  }
}
var LoadingIcon = /* @__PURE__ */ function() {
  return __component__$a.exports;
}();
function getDomXY(dom) {
  let x = 0;
  let y = 0;
  if (dom.getBoundingClientRect) {
    const box = dom.getBoundingClientRect();
    const D = document.documentElement;
    x = box.left + Math.max(D.scrollLeft, document.body.scrollLeft) - D.clientLeft;
    y = box.top + Math.max(D.scrollTop, document.body.scrollTop) - D.clientTop;
  } else {
    while (dom !== document.body) {
      x += dom.offsetLeft;
      y += dom.offsetTop;
      dom = dom.offsetParent;
    }
  }
  return {
    domX: x,
    domY: y
  };
}
function checkTargetFather(that, e) {
  let parent = e.relatedTarget;
  try {
    while (parent && parent !== that) {
      parent = parent.parentNode;
    }
  } catch (e2) {
    console.warn(e2);
  }
  return parent !== that;
}
function useHandler$3(_data, event) {
  const dots = reactive({ list: [] });
  const clickEvent = (e) => {
    const dom = e.currentTarget;
    const xy = getDomXY(dom);
    const mouseX = e.pageX || e.clientX;
    const mouseY = e.pageY || e.clientY;
    const domX = xy.domX;
    const domY = xy.domY;
    const xPos = mouseX - domX;
    const yPos = mouseY - domY;
    const xx = parseInt(xPos.toString());
    const yy = parseInt(yPos.toString());
    const date = new Date();
    const index2 = dots.list.length;
    dots.list.push({ key: date.getTime(), index: index2 + 1, x: xx, y: yy });
    event.click && event.click(xx, yy);
    e.cancelBubble = true;
    e.preventDefault();
    return false;
  };
  const confirmEvent = (e) => {
    event.confirm && event.confirm(dots.list, () => {
      dots.list = [];
    });
    e.cancelBubble = true;
    e.preventDefault();
    return false;
  };
  const closeEvent = (e) => {
    event.close && event.close();
    dots.list = [];
    e.cancelBubble = true;
    e.preventDefault();
    return false;
  };
  const refreshEvent = (e) => {
    event.refresh && event.refresh();
    dots.list = [];
    e.cancelBubble = true;
    e.preventDefault();
    return false;
  };
  return {
    dots,
    clickEvent,
    confirmEvent,
    closeEvent,
    refreshEvent
  };
}
const __sfc_main$9 = {};
__sfc_main$9.props = {
  config: {
    key: "config",
    required: false,
    type: null,
    default: defaultConfig$4
  },
  events: {
    key: "events",
    required: false,
    type: null,
    default: () => ({})
  },
  data: {
    key: "data",
    required: false,
    type: null,
    default: () => ({})
  }
};
__sfc_main$9.setup = (__props, __ctx) => {
  const props = __props;
  const {
    config,
    data,
    events
  } = props;
  const handler = useHandler$3(data, events);
  const hPadding = config.horizontalPadding || 0;
  const vPadding = config.verticalPadding || 0;
  const width = (config.width || 0) + vPadding * 2;
  const dots = handler.dots;
  const wrapperStyles = computed(() => {
    return {
      width: width + "px",
      paddingLeft: vPadding + "px",
      paddingRight: vPadding + "px",
      paddingTop: hPadding + "px",
      paddingBottom: hPadding + "px"
    };
  });
  const thumbStyles = computed(() => {
    return {
      width: config.thumbWidth + "px",
      height: config.thumbHeight + "px"
    };
  });
  const imageStyles = computed(() => {
    return {
      width: config.width + "px",
      height: config.height + "px"
    };
  });
  return {
    config,
    data,
    handler,
    dots,
    wrapperStyles,
    thumbStyles,
    imageStyles
  };
};
__sfc_main$9.components = Object.assign({
  LoadingIcon,
  CloseIcon,
  RefreshIcon
}, __sfc_main$9.components);
var render$9 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: "wrapper " + (_vm.config.showTheme && "theme"), style: _vm.wrapperStyles }, [_c("div", { staticClass: "header" }, [_vm._m(0), _c("img", { style: _vm.thumbStyles, attrs: { "src": _vm.data.thumb, "alt": "..." } })]), _c("div", { staticClass: "body" }, [_c("div", { staticClass: "loading" }, [_c("loading-icon")], 1), _c("img", { staticClass: "picture", style: _vm.imageStyles, attrs: { "src": _vm.data.image, "alt": "..." }, on: { "click": _vm.handler.clickEvent } }), _c("div", { staticClass: "dots" }, _vm._l(_vm.dots.list, function(dot) {
    return _c("div", { key: dot.key + "-" + dot.index, staticClass: "dot", style: {
      top: dot.y - 11 + "px",
      left: dot.x - 11 + "px"
    } }, [_vm._v(_vm._s(dot.index))]);
  }), 0)]), _c("div", { staticClass: "footer" }, [_c("div", { staticClass: "iconBlock iconBlock2" }, [_c("close-icon", { attrs: { "width": 22, "height": 22 }, on: { "click": _vm.handler.closeEvent } }), _c("refresh-icon", { attrs: { "width": 22, "height": 22 }, on: { "click": _vm.handler.refreshEvent } })], 1), _c("div", { staticClass: "buttonBlock" }, [_c("button", { on: { "click": _vm.handler.confirmEvent } }, [_vm._v("\u786E\u8BA4")])])])]);
};
var staticRenderFns$9 = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", [_vm._v("\u8BF7\u5728\u4E0B\u56FE"), _c("em", [_vm._v("\u4F9D\u6B21")]), _vm._v("\u70B9\u51FB\uFF1A")]);
}];
var index_vue_vue_type_style_index_0_scoped_true_lang$4 = "";
const __cssModules$9 = {};
var __component__$9 = /* @__PURE__ */ normalizeComponent(
  __sfc_main$9,
  render$9,
  staticRenderFns$9,
  false,
  __vue2_injectStyles$9,
  "bbb869ee",
  null,
  null
);
function __vue2_injectStyles$9(context) {
  for (let o in __cssModules$9) {
    this[o] = __cssModules$9[o];
  }
}
var capt$4 = /* @__PURE__ */ function() {
  return __component__$9.exports;
}();
capt$4.name = "goCaptchaClick";
capt$4.install = function(Vue) {
  Vue.component("gocaptcha-click", capt$4);
};
const defaultConfig$3 = () => ({
  width: 300,
  height: 240,
  thumbWidth: 150,
  thumbHeight: 40,
  verticalPadding: 16,
  horizontalPadding: 12,
  showTheme: true
});
const __sfc_main$8 = {};
__sfc_main$8.setup = (__props, __ctx) => {
  const emit = __ctx.emit;
  function emitClickEvent(e) {
    emit("click", e);
  }
  return {
    emitClickEvent
  };
};
var render$8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", _vm._b({ attrs: { "xmlns": "http://www.w3.org/2000/svg", "viewBox": "0 0 200 200", "width": "20", "height": "20" }, on: { "click": _vm.emitClickEvent } }, "svg", _vm.$attrs, false), [_c("path", { attrs: { "d": "M131.6,116.3c0,0-75.6,0-109.7,0c-9.1,0-16.2-7.4-16.2-16.2c0-9.1,7.4-16.2,16.2-16.2c28.7,0,109.7,0,109.7,0\n	s-5.4-5.4-30.4-30.7c-6.4-6.4-6.4-16.7,0-23.1s16.7-6.4,23.1,0l58.4,58.4c6.4,6.4,6.4,16.7,0,23.1c0,0-32.9,32.9-57.9,57.9\n	c-6.4,6.4-16.7,6.4-23.1,0c-6.4-6.4-6.4-16.7,0-23.1C121.8,126.2,131.6,116.3,131.6,116.3z" } })]);
};
var staticRenderFns$8 = [];
var arrowsIcon_vue_vue_type_style_index_0_scoped_true_lang = "";
const __cssModules$8 = {};
var __component__$8 = /* @__PURE__ */ normalizeComponent(
  __sfc_main$8,
  render$8,
  staticRenderFns$8,
  false,
  __vue2_injectStyles$8,
  "30853052",
  null,
  null
);
function __vue2_injectStyles$8(context) {
  for (let o in __cssModules$8) {
    this[o] = __cssModules$8[o];
  }
}
var ArrowsIcon = /* @__PURE__ */ function() {
  return __component__$8.exports;
}();
function useHandler$2(data, event, containerRef, tileRef, dragBlockRef, dragBarRef) {
  const state = reactive({ dragLeft: 0, thumbLeft: data.thumbX || 0 });
  const clear = () => {
    state.dragLeft = 0;
    state.thumbLeft = 0;
  };
  const dragEvent = (e) => {
    const touch = e.touches && e.touches[0];
    const offsetLeft = dragBlockRef.value.offsetLeft;
    const width = containerRef.value.offsetWidth;
    const blockWidth = dragBlockRef.value.offsetWidth;
    const maxWidth = width - blockWidth;
    const thumbX = data.thumbX || 0;
    const tileWith = tileRef.value.offsetWidth;
    const ad = blockWidth - tileWith;
    const ratio = (maxWidth - thumbX + ad) / maxWidth;
    let isMoving = false;
    let startX = 0;
    let currentThumbX = 0;
    if (touch) {
      startX = touch.pageX - offsetLeft;
    } else {
      startX = e.clientX - offsetLeft;
    }
    const moveEvent = (e2) => {
      isMoving = true;
      const mTouche = e2.touches && e2.touches[0];
      let left = 0;
      if (mTouche) {
        left = mTouche.pageX - startX;
      } else {
        left = e2.clientX - startX;
      }
      if (left >= maxWidth) {
        state.dragLeft = maxWidth;
        return;
      }
      if (left <= 0) {
        state.dragLeft = 0;
        return;
      }
      state.dragLeft = left;
      currentThumbX = thumbX + left * ratio;
      state.thumbLeft = currentThumbX;
      event.move && event.move(currentThumbX, data.thumbY || 0);
      e2.cancelBubble = true;
      e2.preventDefault();
    };
    const upEvent = (e2) => {
      if (!checkTargetFather(dragBarRef.value, e2)) {
        return;
      }
      if (!isMoving) {
        return;
      }
      dragBarRef.value.removeEventListener("mousemove", moveEvent, false);
      dragBarRef.value.removeEventListener("touchmove", moveEvent, { passive: false });
      dragBarRef.value.removeEventListener("mouseup", upEvent, false);
      dragBarRef.value.removeEventListener("mouseout", upEvent, false);
      dragBarRef.value.removeEventListener("touchend", upEvent, false);
      isMoving = false;
      event.confirm && event.confirm({ x: parseInt(currentThumbX.toString()), y: data.thumbY || 0 }, () => {
        clear();
      });
      e2.cancelBubble = true;
      e2.preventDefault();
    };
    dragBarRef.value.addEventListener("mousemove", moveEvent, false);
    dragBarRef.value.addEventListener("touchmove", moveEvent, { passive: false });
    dragBarRef.value.addEventListener("mouseup", upEvent, false);
    dragBarRef.value.addEventListener("mouseout", upEvent, false);
    dragBarRef.value.addEventListener("touchend", upEvent, false);
  };
  const closeEvent = (e) => {
    event && event.close && event.close();
    clear();
    e.cancelBubble = true;
    e.preventDefault();
    return false;
  };
  const refreshEvent = (e) => {
    event && event.refresh && event.refresh();
    clear();
    e.cancelBubble = true;
    e.preventDefault();
    return false;
  };
  return {
    state,
    dragEvent,
    closeEvent,
    refreshEvent
  };
}
const __sfc_main$7 = {};
__sfc_main$7.props = {
  config: {
    key: "config",
    required: false,
    type: null,
    default: defaultConfig$3
  },
  events: {
    key: "events",
    required: false,
    type: null,
    default: () => ({})
  },
  data: {
    key: "data",
    required: false,
    type: null,
    default: () => ({})
  }
};
__sfc_main$7.setup = (__props, __ctx) => {
  const props = __props;
  const {
    config,
    data,
    events
  } = props;
  const dragBarRef = ref(null);
  const containerRef = ref(null);
  const dragBlockRef = ref(null);
  const tileRef = ref(null);
  const handler = useHandler$2(data, events, containerRef, tileRef, dragBlockRef, dragBarRef);
  const hPadding = config.horizontalPadding || 0;
  const vPadding = config.verticalPadding || 0;
  const width = (config.width || 0) + vPadding * 2;
  const wrapperStyles = computed(() => {
    return {
      width: width + "px",
      paddingLeft: vPadding + "px",
      paddingRight: vPadding + "px",
      paddingTop: hPadding + "px",
      paddingBottom: hPadding + "px"
    };
  });
  const thumbStyles = computed(() => {
    return {
      width: data.thumbWidth + "px",
      height: data.thumbHeight + "px",
      top: data.thumbY + "px",
      left: handler.state.thumbLeft + "px"
    };
  });
  const imageStyles = computed(() => {
    return {
      width: config.width + "px",
      height: config.height + "px"
    };
  });
  return {
    config,
    data,
    dragBarRef,
    containerRef,
    dragBlockRef,
    tileRef,
    handler,
    wrapperStyles,
    thumbStyles,
    imageStyles
  };
};
__sfc_main$7.components = Object.assign({
  CloseIcon,
  RefreshIcon,
  LoadingIcon,
  ArrowsIcon
}, __sfc_main$7.components);
var render$7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: "wrapper " + (_vm.config.showTheme && "theme"), style: _vm.wrapperStyles }, [_c("div", { staticClass: "header" }, [_c("span", [_vm._v("\u8BF7\u62D6\u52A8\u6ED1\u5757\u5B8C\u6210\u62FC\u56FE")]), _c("div", { staticClass: "iconBlock" }, [_c("close-icon", { attrs: { "width": 22, "height": 22 }, on: { "click": _vm.handler.closeEvent } }), _c("refresh-icon", { attrs: { "width": 22, "height": 22 }, on: { "click": _vm.handler.refreshEvent } })], 1)]), _c("div", { ref: "containerRef", staticClass: "body" }, [_c("div", { staticClass: "loading" }, [_c("loading-icon")], 1), _c("img", { staticClass: "picture", style: _vm.imageStyles, attrs: { "src": _vm.data.image, "alt": "..." } }), _c("div", { ref: "tileRef", staticClass: "tile", style: _vm.thumbStyles }, [_c("img", { attrs: { "src": _vm.data.thumb, "alt": "..." } })])]), _c("div", { staticClass: "footer" }, [_c("div", { ref: "dragBarRef", staticClass: "dragSlideBar", on: { "mousedown": _vm.handler.dragEvent } }, [_c("div", { staticClass: "dragLine" }), _c("div", { ref: "dragBlockRef", staticClass: "dragBlock", style: { left: _vm.handler.state.dragLeft + "px" }, on: { "touchstart": _vm.handler.dragEvent } }, [_c("arrows-icon")], 1)])])]);
};
var staticRenderFns$7 = [];
var index_vue_vue_type_style_index_0_scoped_true_lang$3 = "";
const __cssModules$7 = {};
var __component__$7 = /* @__PURE__ */ normalizeComponent(
  __sfc_main$7,
  render$7,
  staticRenderFns$7,
  false,
  __vue2_injectStyles$7,
  "22e2084a",
  null,
  null
);
function __vue2_injectStyles$7(context) {
  for (let o in __cssModules$7) {
    this[o] = __cssModules$7[o];
  }
}
var capt$3 = /* @__PURE__ */ function() {
  return __component__$7.exports;
}();
capt$3.name = "goCaptchaSlide";
capt$3.install = function(Vue) {
  Vue.component("gocaptcha-slide", capt$3);
};
const defaultConfig$2 = () => ({
  width: 300,
  height: 240,
  verticalPadding: 16,
  horizontalPadding: 12,
  showTheme: true
});
function useHandler$1(data, event, containerRef, tileRef) {
  const state = reactive({ x: data.thumbX || 0, y: data.thumbY || 0 });
  const clear = () => {
    state.x = data.thumbX || 0;
    state.y = data.thumbY || 0;
  };
  const dragEvent = (e) => {
    const touch = e.touches && e.touches[0];
    const offsetLeft = tileRef.value.offsetLeft;
    const offsetTop = tileRef.value.offsetTop;
    const width = containerRef.value.offsetWidth;
    const height = containerRef.value.offsetHeight;
    const tileWidth = tileRef.value.offsetWidth;
    const tileHeight = tileRef.value.offsetHeight;
    const maxWidth = width - tileWidth;
    const maxHeight = height - tileHeight;
    let isMoving = false;
    let startX = 0;
    let startY = 0;
    let tileLeft = 0;
    let tileTop = 0;
    if (touch) {
      startX = touch.pageX - offsetLeft;
      startY = touch.pageY - offsetTop;
    } else {
      startX = e.clientX - offsetLeft;
      startY = e.clientY - offsetTop;
    }
    const moveEvent = (e2) => {
      isMoving = true;
      const mTouche = e2.touches && e2.touches[0];
      let left = 0;
      let top = 0;
      if (mTouche) {
        left = mTouche.pageX - startX;
        top = mTouche.pageY - startY;
      } else {
        left = e2.clientX - startX;
        top = e2.clientY - startY;
      }
      if (left <= 0) {
        left = 0;
      }
      if (top <= 0) {
        top = 0;
      }
      if (left >= maxWidth) {
        left = maxWidth;
      }
      if (top >= maxHeight) {
        top = maxHeight;
      }
      state.x = left;
      state.y = top;
      tileLeft = left;
      tileTop = top;
      event.move && event.move(left, top);
      e2.cancelBubble = true;
      e2.preventDefault();
    };
    const upEvent = (e2) => {
      if (!checkTargetFather(containerRef.value, e2)) {
        return;
      }
      if (!isMoving) {
        return;
      }
      isMoving = false;
      containerRef.value.removeEventListener("mousemove", moveEvent, false);
      containerRef.value.removeEventListener("touchmove", moveEvent, { passive: false });
      containerRef.value.removeEventListener("mouseup", upEvent, false);
      containerRef.value.removeEventListener("mouseout", upEvent, false);
      containerRef.value.removeEventListener("touchend", upEvent, false);
      event.confirm && event.confirm({ x: tileLeft, y: tileTop }, () => {
        clear();
      });
      e2.cancelBubble = true;
      e2.preventDefault();
    };
    containerRef.value.addEventListener("mousemove", moveEvent, false);
    containerRef.value.addEventListener("touchmove", moveEvent, { passive: false });
    containerRef.value.addEventListener("mouseup", upEvent, false);
    containerRef.value.addEventListener("mouseout", upEvent, false);
    containerRef.value.addEventListener("touchend", upEvent, false);
  };
  const closeEvent = (e) => {
    event && event.close && event.close();
    clear();
    e.cancelBubble = true;
    e.preventDefault();
    return false;
  };
  const refreshEvent = (e) => {
    event && event.refresh && event.refresh();
    clear();
    e.cancelBubble = true;
    e.preventDefault();
    return false;
  };
  return {
    state,
    dragEvent,
    closeEvent,
    refreshEvent
  };
}
const __sfc_main$6 = {};
__sfc_main$6.props = {
  config: {
    key: "config",
    required: false,
    type: null,
    default: defaultConfig$2
  },
  events: {
    key: "events",
    required: false,
    type: null,
    default: () => ({})
  },
  data: {
    key: "data",
    required: false,
    type: null,
    default: () => ({})
  }
};
__sfc_main$6.setup = (__props, __ctx) => {
  const props = __props;
  const {
    config,
    data,
    events
  } = props;
  const containerRef = ref(null);
  const tileRef = ref(null);
  const handler = useHandler$1(data, events, containerRef, tileRef);
  const hPadding = config.horizontalPadding || 0;
  const vPadding = config.verticalPadding || 0;
  const width = (config.width || 0) + vPadding * 2;
  onMounted(() => {
    tileRef.value.addEventListener("dragstart", (event) => event.preventDefault());
  });
  const wrapperStyles = computed(() => {
    return {
      width: width + "px",
      paddingLeft: vPadding + "px",
      paddingRight: vPadding + "px",
      paddingTop: hPadding + "px",
      paddingBottom: hPadding + "px"
    };
  });
  const thumbStyles = computed(() => {
    return {
      width: data.thumbWidth + "px",
      height: data.thumbHeight + "px",
      top: handler.state.y + "px",
      left: handler.state.x + "px"
    };
  });
  const imageStyles = computed(() => {
    return {
      width: config.width + "px",
      height: config.height + "px"
    };
  });
  return {
    config,
    data,
    containerRef,
    tileRef,
    handler,
    wrapperStyles,
    thumbStyles,
    imageStyles
  };
};
__sfc_main$6.components = Object.assign({
  LoadingIcon,
  CloseIcon,
  RefreshIcon
}, __sfc_main$6.components);
var render$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: "wrapper " + (_vm.config.showTheme && "theme"), style: _vm.wrapperStyles }, [_vm._m(0), _c("div", { ref: "containerRef", staticClass: "body" }, [_c("div", { staticClass: "loading" }, [_c("loading-icon")], 1), _c("img", { staticClass: "picture", style: _vm.imageStyles, attrs: { "src": _vm.data.image, "alt": "..." } }), _c("div", { ref: "tileRef", staticClass: "tile", style: _vm.thumbStyles, on: { "mousedown": _vm.handler.dragEvent, "touchstart": _vm.handler.dragEvent } }, [_c("img", { attrs: { "src": _vm.data.thumb, "alt": "..." } })])]), _c("div", { staticClass: "footer" }, [_c("div", { staticClass: "iconBlock" }, [_c("close-icon", { attrs: { "width": 22, "height": 22 }, on: { "click": _vm.handler.closeEvent } }), _c("refresh-icon", { attrs: { "width": 22, "height": 22 }, on: { "click": _vm.handler.refreshEvent } })], 1)])]);
};
var staticRenderFns$6 = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "header" }, [_c("span", [_vm._v("\u8BF7\u62D6\u52A8\u6ED1\u5757\u5B8C\u6210\u62FC\u56FE")])]);
}];
var index_vue_vue_type_style_index_0_scoped_true_lang$2 = "";
const __cssModules$6 = {};
var __component__$6 = /* @__PURE__ */ normalizeComponent(
  __sfc_main$6,
  render$6,
  staticRenderFns$6,
  false,
  __vue2_injectStyles$6,
  "ae8e1660",
  null,
  null
);
function __vue2_injectStyles$6(context) {
  for (let o in __cssModules$6) {
    this[o] = __cssModules$6[o];
  }
}
var capt$2 = /* @__PURE__ */ function() {
  return __component__$6.exports;
}();
capt$2.name = "goCaptchaSlideRegion";
capt$2.install = function(Vue) {
  Vue.component("gocaptcha-slide-region", capt$2);
};
const defaultConfig$1 = () => ({
  width: 300,
  height: 240,
  size: 240,
  verticalPadding: 16,
  horizontalPadding: 12,
  showTheme: true
});
function useHandler(data, event, dragBlockRef, dragBarRef) {
  const state = reactive({ dragLeft: 0, thumbAngle: data.angle || 0 });
  const clear = () => {
    state.dragLeft = 0;
    state.thumbAngle = 0;
  };
  const dragEvent = (e) => {
    const touch = e.touches && e.touches[0];
    const offsetLeft = dragBlockRef.value.offsetLeft;
    const width = dragBarRef.value.offsetWidth;
    const blockWidth = dragBlockRef.value.offsetWidth;
    const maxWidth = width - blockWidth;
    const p = 360 / maxWidth;
    let angle = 0;
    let isMoving = false;
    let startX = 0;
    if (touch) {
      startX = touch.pageX - offsetLeft;
    } else {
      startX = e.clientX - offsetLeft;
    }
    const moveEvent = (e2) => {
      isMoving = true;
      const mTouche = e2.touches && e2.touches[0];
      let left = 0;
      if (mTouche) {
        left = mTouche.pageX - startX;
      } else {
        left = e2.clientX - startX;
      }
      if (left >= maxWidth) {
        state.dragLeft = maxWidth;
        return;
      }
      if (left <= 0) {
        state.dragLeft = 0;
        return;
      }
      state.dragLeft = left;
      angle = left * p;
      state.thumbAngle = angle;
      event.rotate && event.rotate(angle);
      e2.cancelBubble = true;
      e2.preventDefault();
    };
    const upEvent = (e2) => {
      if (!checkTargetFather(dragBarRef.value, e2)) {
        return;
      }
      if (!isMoving) {
        return;
      }
      dragBarRef.value.removeEventListener("mousemove", moveEvent, false);
      dragBarRef.value.removeEventListener("touchmove", moveEvent, { passive: false });
      dragBarRef.value.removeEventListener("mouseup", upEvent, false);
      dragBarRef.value.removeEventListener("mouseout", upEvent, false);
      dragBarRef.value.removeEventListener("touchend", upEvent, false);
      isMoving = false;
      event.confirm && event.confirm(parseInt(angle.toString()), () => {
        clear();
      });
      e2.cancelBubble = true;
      e2.preventDefault();
    };
    dragBarRef.value.addEventListener("mousemove", moveEvent, false);
    dragBarRef.value.addEventListener("touchmove", moveEvent, { passive: false });
    dragBarRef.value.addEventListener("mouseup", upEvent, false);
    dragBarRef.value.addEventListener("mouseout", upEvent, false);
    dragBarRef.value.addEventListener("touchend", upEvent, false);
  };
  const closeEvent = (e) => {
    event && event.close && event.close();
    clear();
    e.cancelBubble = true;
    e.preventDefault();
    return false;
  };
  const refreshEvent = (e) => {
    event && event.refresh && event.refresh();
    clear();
    e.cancelBubble = true;
    e.preventDefault();
    return false;
  };
  return {
    state,
    dragEvent,
    closeEvent,
    refreshEvent
  };
}
const __sfc_main$5 = {};
__sfc_main$5.props = {
  config: {
    key: "config",
    required: false,
    type: null,
    default: defaultConfig$1
  },
  events: {
    key: "events",
    required: false,
    type: null,
    default: () => ({})
  },
  data: {
    key: "data",
    required: false,
    type: null,
    default: () => ({})
  }
};
__sfc_main$5.setup = (__props, __ctx) => {
  const props = __props;
  const {
    config,
    data,
    events
  } = props;
  console.log(props);
  const dragBarRef = ref(null);
  const dragBlockRef = ref(null);
  const handler = useHandler(data, events, dragBlockRef, dragBarRef);
  const wrapperStyles = computed(() => {
    const hPadding = config.horizontalPadding || 0;
    const vPadding = config.verticalPadding || 0;
    const width = (config.width || 0) + vPadding * 2;
    return {
      width: width + "px",
      paddingLeft: vPadding + "px",
      paddingRight: vPadding + "px",
      paddingTop: hPadding + "px",
      paddingBottom: hPadding + "px"
    };
  });
  const thumbStyles = computed(() => {
    return {
      transform: `rotate(${handler.state.thumbAngle}deg)`
    };
  });
  const imageStyles = computed(() => {
    return {
      width: config.size + "px",
      height: config.size + "px"
    };
  });
  return {
    config,
    data,
    dragBarRef,
    dragBlockRef,
    handler,
    wrapperStyles,
    thumbStyles,
    imageStyles
  };
};
__sfc_main$5.components = Object.assign({
  CloseIcon,
  RefreshIcon,
  LoadingIcon,
  ArrowsIcon
}, __sfc_main$5.components);
var render$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: "wrapper " + (_vm.config.showTheme && "theme"), style: _vm.wrapperStyles }, [_c("div", { staticClass: "header" }, [_c("span", [_vm._v("\u8BF7\u62D6\u52A8\u6ED1\u5757\u5B8C\u6210\u62FC\u56FE")]), _c("div", { staticClass: "iconBlock" }, [_c("close-icon", { attrs: { "width": 22, "height": 22 }, on: { "click": _vm.handler.closeEvent } }), _c("refresh-icon", { attrs: { "width": 22, "height": 22 }, on: { "click": _vm.handler.refreshEvent } })], 1)]), _c("div", { ref: "containerRef", staticClass: "body body2" }, [_c("div", { staticClass: "loading" }, [_c("loading-icon")], 1), _c("div", { staticClass: "picture", style: _vm.imageStyles }, [_c("img", { attrs: { "src": _vm.data.image, "alt": "..." } }), _c("div", { staticClass: "round" })]), _c("div", { staticClass: "thumb" }, [_c("div", { staticClass: "thumbBlock", style: _vm.thumbStyles }, [_c("img", { attrs: { "src": _vm.data.thumb, "alt": "..." } })])])]), _c("div", { staticClass: "footer" }, [_c("div", { ref: "dragBarRef", staticClass: "dragSlideBar", on: { "mousedown": _vm.handler.dragEvent } }, [_c("div", { staticClass: "dragLine" }), _c("div", { ref: "dragBlockRef", staticClass: "dragBlock", style: { left: _vm.handler.state.dragLeft + "px" }, on: { "touchstart": _vm.handler.dragEvent } }, [_c("arrows-icon")], 1)])])]);
};
var staticRenderFns$5 = [];
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
const __cssModules$5 = {};
var __component__$5 = /* @__PURE__ */ normalizeComponent(
  __sfc_main$5,
  render$5,
  staticRenderFns$5,
  false,
  __vue2_injectStyles$5,
  "25e72324",
  null,
  null
);
function __vue2_injectStyles$5(context) {
  for (let o in __cssModules$5) {
    this[o] = __cssModules$5[o];
  }
}
var capt$1 = /* @__PURE__ */ function() {
  return __component__$5.exports;
}();
capt$1.name = "goCaptchaRotate";
capt$1.install = function(Vue) {
  Vue.component("gocaptcha-rotate", capt$1);
};
const __sfc_main$4 = {};
__sfc_main$4.setup = (__props, __ctx) => {
  const emit = __ctx.emit;
  function emitClickEvent(e) {
    emit("click", e);
  }
  return {
    emitClickEvent
  };
};
var render$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", _vm._b({ attrs: { "xmlns": "http://www.w3.org/2000/svg", "viewBox": "0 0 200 200", "width": "20", "height": "20" }, on: { "click": _vm.emitClickEvent } }, "svg", _vm.$attrs, false), [_c("circle", { attrs: { "fill": "#3E7CFF", "cx": "100", "cy": "100", "r": "96.3" } }), _c("path", { attrs: { "fill": "#FFFFFF", "d": "M140.8,64.4l-39.6-11.9h-2.4L59.2,64.4c-1.6,0.8-2.8,2.4-2.8,4v24.1c0,25.3,15.8,45.9,42.3,54.6\n	c0.4,0,0.8,0.4,1.2,0.4c0.4,0,0.8,0,1.2-0.4c26.5-8.7,42.3-28.9,42.3-54.6V68.3C143.5,66.8,142.3,65.2,140.8,64.4z" } })]);
};
var staticRenderFns$4 = [];
var btnDefaultIcon_vue_vue_type_style_index_0_scoped_true_lang = "";
const __cssModules$4 = {};
var __component__$4 = /* @__PURE__ */ normalizeComponent(
  __sfc_main$4,
  render$4,
  staticRenderFns$4,
  false,
  __vue2_injectStyles$4,
  "5511614f",
  null,
  null
);
function __vue2_injectStyles$4(context) {
  for (let o in __cssModules$4) {
    this[o] = __cssModules$4[o];
  }
}
var BtnDefaultIcon = /* @__PURE__ */ function() {
  return __component__$4.exports;
}();
const __sfc_main$3 = {};
__sfc_main$3.setup = (__props, __ctx) => {
  const emit = __ctx.emit;
  function emitClickEvent(e) {
    emit("click", e);
  }
  return {
    emitClickEvent
  };
};
var render$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", _vm._b({ attrs: { "xmlns": "http://www.w3.org/2000/svg", "viewBox": "0 0 200 200", "width": "20", "height": "20" }, on: { "click": _vm.emitClickEvent } }, "svg", _vm.$attrs, false), [_c("path", { attrs: { "fill": "#FFA000", "d": "M184,26.6L102.4,2.1h-4.9L16,26.6c-3.3,1.6-5.7,4.9-5.7,8.2v49.8c0,52.2,32.6,94.7,87.3,112.6\n	c0.8,0,1.6,0.8,2.4,0.8s1.6,0,2.4-0.8c54.7-18,87.3-59.6,87.3-112.6V34.7C189.8,31.5,187.3,28.2,184,26.6z M107.3,109.1\n	c-0.5,5.4-3.9,7.9-7.3,7.9c-2.5,0,0,0,0,0c-3.2-0.6-5.7-2-6.8-7.4l-4.4-50.9c0-5.1,6.2-9.7,11.5-9.7c5.3,0,11,4.7,11,9.9\n	L107.3,109.1z M109.3,133.3c0,5.1-4.2,9.3-9.3,9.3c-5.1,0-9.3-4.2-9.3-9.3c0-5.1,4.2-9.3,9.3-9.3C105.1,124,109.3,128.1,109.3,133.3\n	z" } })]);
};
var staticRenderFns$3 = [];
var btnWarnIcon_vue_vue_type_style_index_0_scoped_true_lang = "";
const __cssModules$3 = {};
var __component__$3 = /* @__PURE__ */ normalizeComponent(
  __sfc_main$3,
  render$3,
  staticRenderFns$3,
  false,
  __vue2_injectStyles$3,
  "3fd7b394",
  null,
  null
);
function __vue2_injectStyles$3(context) {
  for (let o in __cssModules$3) {
    this[o] = __cssModules$3[o];
  }
}
var BtnWarnIcon = /* @__PURE__ */ function() {
  return __component__$3.exports;
}();
const __sfc_main$2 = {};
__sfc_main$2.setup = (__props, __ctx) => {
  const emit = __ctx.emit;
  function emitClickEvent(e) {
    emit("click", e);
  }
  return {
    emitClickEvent
  };
};
var render$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", _vm._b({ attrs: { "xmlns": "http://www.w3.org/2000/svg", "viewBox": "0 0 200 200", "width": "20", "height": "20" }, on: { "click": _vm.emitClickEvent } }, "svg", _vm.$attrs, false), [_c("path", { attrs: { "fill": "#ED4630", "d": "M184,26.6L102.4,2.1h-4.9L16,26.6c-3.3,1.6-5.7,4.9-5.7,8.2v49.8c0,52.2,32.6,94.7,87.3,112.6\n	c0.8,0,1.6,0.8,2.4,0.8s1.6,0,2.4-0.8c54.7-18,87.3-59.6,87.3-112.6V34.7C189.8,31.5,187.3,28.2,184,26.6z M134.5,123.1\n	c3.1,3.1,3.1,8.2,0,11.3c-1.6,1.6-3.6,2.3-5.7,2.3s-4.1-0.8-5.7-2.3L100,111.3l-23.1,23.1c-1.6,1.6-3.6,2.3-5.7,2.3\n	c-2,0-4.1-0.8-5.7-2.3c-3.1-3.1-3.1-8.2,0-11.3L88.7,100L65.5,76.9c-3.1-3.1-3.1-8.2,0-11.3c3.1-3.1,8.2-3.1,11.3,0L100,88.7\n	l23.1-23.1c3.1-3.1,8.2-3.1,11.3,0c3.1,3.1,3.1,8.2,0,11.3L111.3,100L134.5,123.1z" } })]);
};
var staticRenderFns$2 = [];
var btnErrorIcon_vue_vue_type_style_index_0_scoped_true_lang = "";
const __cssModules$2 = {};
var __component__$2 = /* @__PURE__ */ normalizeComponent(
  __sfc_main$2,
  render$2,
  staticRenderFns$2,
  false,
  __vue2_injectStyles$2,
  "6c20e1c2",
  null,
  null
);
function __vue2_injectStyles$2(context) {
  for (let o in __cssModules$2) {
    this[o] = __cssModules$2[o];
  }
}
var BtnErrorIcon = /* @__PURE__ */ function() {
  return __component__$2.exports;
}();
const __sfc_main$1 = {};
__sfc_main$1.setup = (__props, __ctx) => {
  const emit = __ctx.emit;
  function emitClickEvent(e) {
    emit("click", e);
  }
  return {
    emitClickEvent
  };
};
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", _vm._b({ attrs: { "xmlns": "http://www.w3.org/2000/svg", "viewBox": "0 0 200 200", "width": "20", "height": "20" }, on: { "click": _vm.emitClickEvent } }, "svg", _vm.$attrs, false), [_c("path", { attrs: { "fill": "#5EAA2F", "d": "M183.3,27.2L102.4,2.9h-4.9L16.7,27.2C13.4,28.8,11,32,11,35.3v49.4c0,51.8,32.4,93.9,86.6,111.7\n	c0.8,0,1.6,0.8,2.4,0.8c0.8,0,1.6,0,2.4-0.8c54.2-17.8,86.6-59.1,86.6-111.7V35.3C189,32,186.6,28.8,183.3,27.2z M146.1,81.4\n	l-48.5,48.5c-1.6,1.6-3.2,2.4-5.7,2.4c-2.4,0-4-0.8-5.7-2.4L62,105.7c-3.2-3.2-3.2-8.1,0-11.3c3.2-3.2,8.1-3.2,11.3,0l18.6,18.6\n	l42.9-42.9c3.2-3.2,8.1-3.2,11.3,0C149.4,73.3,149.4,78.2,146.1,81.4L146.1,81.4z" } })]);
};
var staticRenderFns$1 = [];
var btnSuccessIcon_vue_vue_type_style_index_0_scoped_true_lang = "";
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  __sfc_main$1,
  render$1,
  staticRenderFns$1,
  false,
  __vue2_injectStyles$1,
  "5a795cd4",
  null,
  null
);
function __vue2_injectStyles$1(context) {
  for (let o in __cssModules$1) {
    this[o] = __cssModules$1[o];
  }
}
var BtnSuccessIcon = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
const defaultConfig = () => ({
  width: 330,
  height: 44,
  verticalPadding: 12,
  horizontalPadding: 16
});
const __sfc_main = {};
__sfc_main.props = {
  config: {
    key: "config",
    required: false,
    type: null,
    default: defaultConfig
  },
  clickEvent: {
    key: "clickEvent",
    required: false,
    type: Function
  },
  disabled: {
    key: "disabled",
    required: false,
    type: Boolean,
    default: false
  },
  type: {
    key: "type",
    required: false,
    type: String,
    default: "default"
  },
  title: {
    key: "title",
    required: false,
    type: String,
    default: "\u70B9\u51FB\u6309\u952E\u8FDB\u884C\u9A8C\u8BC1"
  }
};
__sfc_main.setup = (__props, __ctx) => {
  const props = __props;
  const {
    config
  } = props;
  const {
    type,
    title,
    disabled
  } = toRefs(props);
  const btnClass = computed(() => {
    return ["btnBlock", type.value, disabled.value && "disabled"];
  });
  const btnStyle = computed(() => {
    return {
      width: config.width + "px",
      height: config.height + "px",
      paddingLeft: config.verticalPadding + "px",
      paddingRight: config.verticalPadding + "px",
      paddingTop: config.verticalPadding + "px",
      paddingBottom: config.verticalPadding + "px"
    };
  });
  const emit = __ctx.emit;
  function emitClickEvent(e) {
    emit("click-event", e);
  }
  return {
    type,
    title,
    btnClass,
    btnStyle,
    emitClickEvent
  };
};
__sfc_main.components = Object.assign({
  BtnDefaultIcon,
  BtnWarnIcon,
  BtnErrorIcon,
  BtnSuccessIcon
}, __sfc_main.components);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.btnClass, style: _vm.btnStyle, on: { "click": _vm.emitClickEvent } }, [_c("div", { class: _vm.type === "default" && "ripple" }, [_vm.type === "default" ? _c("btn-default-icon") : _vm.type === "warn" ? _c("btn-warn-icon") : _vm.type === "error" ? _c("btn-error-icon") : _vm.type === "success" ? _c("btn-success-icon") : _vm._e()], 1), _c("span", [_vm._v(_vm._s(_vm.title))])]);
};
var staticRenderFns = [];
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  __sfc_main,
  render,
  staticRenderFns,
  false,
  __vue2_injectStyles,
  "2878e23a",
  null,
  null
);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
var capt = /* @__PURE__ */ function() {
  return __component__.exports;
}();
capt.name = "goCaptchaButton";
capt.install = function(Vue) {
  Vue.component("gocaptcha-button", capt);
};
var index = {
  install(vue) {
    capt$4.install(vue);
    capt$3.install(vue);
    capt$2.install(vue);
    capt$1.install(vue);
    capt.install(vue);
  }
};
export { index as default };
