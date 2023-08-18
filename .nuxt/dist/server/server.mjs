import { getCurrentInstance, reactive, toRef, isRef, ref, inject, defineComponent, computed, h, resolveComponent, shallowRef, unref, watchEffect, markRaw, provide, Suspense, Transition, Fragment as Fragment$1, isVNode, Comment, Text, onUpdated, onUnmounted, watch, createVNode, Teleport, TransitionGroup, render, withDirectives, resolveDirective, cloneVNode, nextTick, withModifiers, vShow, createTextVNode, toRefs, toRaw, camelize as camelize$1, renderSlot, effectScope, isReactive, withAsyncContext, mergeProps, withCtx, openBlock, createBlock, renderList, toDisplayString, useSSRContext, createElementBlock, createCommentVNode, defineAsyncComponent, onErrorCaptured, createApp } from "vue";
import { $fetch } from "ohmyfetch";
import { joinURL, hasProtocol, parseURL, isEqual as isEqual$2 } from "ufo";
import { useRuntimeConfig as useRuntimeConfig$1 } from "#internal/nitro";
import { createHooks } from "hookable";
import { getContext, executeAsync } from "unctx";
import { RouterView, createMemoryHistory, createRouter } from "vue-router";
import destr from "destr";
import { createError as createError$1, appendHeader, sendRedirect } from "h3";
import defu, { defuFn } from "defu";
import { isFunction as isFunction$2 } from "@vue/shared";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderSlot, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderSuspense } from "vue/server-renderer";
import { setupDevtoolsPlugin } from "@vue/devtools-api";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2.js";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty.js";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties.js";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray.js";
import _typeof from "@babel/runtime/helpers/esm/typeof.js";
import _extends from "@babel/runtime/helpers/esm/extends.js";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray.js";
import { createTypes } from "vue-types";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator.js";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import CheckCircleOutlined from "@ant-design/icons-vue/es/icons/CheckCircleOutlined.js";
import InfoCircleOutlined from "@ant-design/icons-vue/es/icons/InfoCircleOutlined.js";
import CloseCircleOutlined from "@ant-design/icons-vue/es/icons/CloseCircleOutlined.js";
import ExclamationCircleOutlined from "@ant-design/icons-vue/es/icons/ExclamationCircleOutlined.js";
import CloseOutlined from "@ant-design/icons-vue/es/icons/CloseOutlined.js";
import { TinyColor } from "@ctrl/tinycolor";
import { generate, presetPrimaryColors } from "@ant-design/colors";
import LoadingOutlined from "@ant-design/icons-vue/es/icons/LoadingOutlined.js";
import ExclamationCircleFilled from "@ant-design/icons-vue/es/icons/ExclamationCircleFilled.js";
import CloseCircleFilled from "@ant-design/icons-vue/es/icons/CloseCircleFilled.js";
import CheckCircleFilled from "@ant-design/icons-vue/es/icons/CheckCircleFilled.js";
import InfoCircleFilled from "@ant-design/icons-vue/es/icons/InfoCircleFilled.js";
import ResizeObserver$1 from "resize-observer-polyfill";
import { alignElement, alignPoint } from "dom-align";
import EllipsisOutlined from "@ant-design/icons-vue/es/icons/EllipsisOutlined.js";
import PlusOutlined from "@ant-design/icons-vue/es/icons/PlusOutlined.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay, Pagination as Pagination$1 } from "swiper";
import { CaretRightOutlined, UserOutlined, LoadingOutlined as LoadingOutlined$1 } from "@ant-design/icons-vue";
import CheckOutlined from "@ant-design/icons-vue/es/icons/CheckOutlined.js";
import _createClass from "@babel/runtime/helpers/esm/createClass.js";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck.js";
import PaperClipOutlined from "@ant-design/icons-vue/es/icons/PaperClipOutlined.js";
import PictureTwoTone from "@ant-design/icons-vue/es/icons/PictureTwoTone.js";
import FileTwoTone from "@ant-design/icons-vue/es/icons/FileTwoTone.js";
import EyeOutlined from "@ant-design/icons-vue/es/icons/EyeOutlined.js";
import DeleteOutlined from "@ant-design/icons-vue/es/icons/DeleteOutlined.js";
import DownloadOutlined from "@ant-design/icons-vue/es/icons/DownloadOutlined.js";
import RawAsyncValidator from "async-validator";
import _toArray from "@babel/runtime/helpers/esm/toArray.js";
import scrollIntoView from "scroll-into-view-if-needed";
import LeftOutlined from "@ant-design/icons-vue/es/icons/LeftOutlined.js";
import RightOutlined from "@ant-design/icons-vue/es/icons/RightOutlined.js";
import DoubleLeftOutlined from "@ant-design/icons-vue/es/icons/DoubleLeftOutlined.js";
import DoubleRightOutlined from "@ant-design/icons-vue/es/icons/DoubleRightOutlined.js";
import DownOutlined from "@ant-design/icons-vue/es/icons/DownOutlined.js";
import SearchOutlined from "@ant-design/icons-vue/es/icons/SearchOutlined.js";
import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty.js";
import { io } from "socket.io-client";
import "video.js";
import "vue3-danmaku/dist/vue3-danmaku.esm.js";
import { createNuxtPersistedState } from "pinia-plugin-persistedstate/nuxt";
import { parse, serialize } from "cookie-es";
import { isEqual as isEqual$1 } from "ohash";
const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const buildAssetsDir = () => appConfig.buildAssetsDir;
const buildAssetsURL = (...path) => joinURL(publicAssetsURL(), buildAssetsDir(), ...path);
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
};
globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const nuxtAppCtx = getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    _asyncData: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name2, value) => {
    const $name = "$" + name2;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      var _a;
      if (prop === "public") {
        return target.public;
      }
      return (_a = target[prop]) != null ? _a : target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key2 in provide2) {
      nuxtApp.provide(key2, provide2[key2]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin of plugins2) {
    await applyPlugin(nuxtApp, plugin);
  }
}
function normalizePlugins(_plugins2) {
  const plugins2 = _plugins2.map((plugin) => {
    if (typeof plugin !== "function") {
      return null;
    }
    if (plugin.length > 1) {
      return (nuxtApp) => plugin(nuxtApp, nuxtApp.provide);
    }
    return plugin;
  }).filter(Boolean);
  return plugins2;
}
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
function callWithNuxt(nuxt, setup96, args) {
  const fn = () => args ? setup96(...args) : setup96();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key2, val) {
  Object.defineProperty(obj, key2, { get: () => val });
}
function useState$1(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key2 = "$s" + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key2);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key2] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
const CookieDefaults = {
  path: "/",
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name2, _opts) {
  var _a, _b;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  const cookie = ref((_b = cookies[name2]) != null ? _b : (_a = opts.default) == null ? void 0 : _a.call(opts));
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!isEqual$1(cookie.value, cookies[name2])) {
        writeServerCookie(useRequestEvent(nuxtApp), name2, cookie.value, opts);
      }
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  var _a;
  {
    return parse(((_a = useRequestEvent()) == null ? void 0 : _a.req.headers.cookie) || "", opts);
  }
}
function serializeCookie(name2, value, opts = {}) {
  if (value === null || value === void 0) {
    return serialize(name2, value, { ...opts, maxAge: -1 });
  }
  return serialize(name2, value, opts);
}
function writeServerCookie(event, name2, value, opts = {}) {
  if (event) {
    appendHeader(event, "Set-Cookie", serializeCookie(name2, value, opts));
  }
}
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (getCurrentInstance()) {
    return inject("_route", useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
const defineNuxtRouteMiddleware = (middleware) => middleware;
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : to.path || "/";
  const isExternal = hasProtocol(toPath, true);
  if (isExternal && !(options == null ? void 0 : options.external)) {
    throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");
  }
  if (isExternal && parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => sendRedirect(nuxtApp.ssrContext.event, redirectLocation, (options == null ? void 0 : options.redirectCode) || 302));
    }
  }
  if (isExternal) {
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  return defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props2, { slots }) {
      const router = useRouter();
      const to = computed(() => {
        return props2.to || props2.href || "";
      });
      const isExternal = computed(() => {
        if (props2.external) {
          return true;
        }
        if (props2.target && props2.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, true);
      });
      const prefetched = ref(false);
      return () => {
        var _a, _b, _c;
        if (!isExternal.value) {
          return h(
            resolveComponent("RouterLink"),
            {
              ref: void 0,
              to: to.value,
              ...prefetched.value && !props2.custom ? { class: props2.prefetchedClass || options.prefetchedClass } : {},
              activeClass: props2.activeClass || options.activeClass,
              exactActiveClass: props2.exactActiveClass || options.exactActiveClass,
              replace: props2.replace,
              ariaCurrentValue: props2.ariaCurrentValue,
              custom: props2.custom
            },
            slots.default
          );
        }
        const href = typeof to.value === "object" ? (_b = (_a = router.resolve(to.value)) == null ? void 0 : _a.href) != null ? _b : null : to.value || null;
        const target = props2.target || null;
        const rel = props2.noRel ? null : firstNonUndefined(props2.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props2.replace });
        if (props2.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            route: router.resolve(href),
            rel,
            target,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { href, rel, target }, (_c = slots.default) == null ? void 0 : _c.call(slots));
      };
    }
  });
}
const __nuxt_component_0$5 = defineNuxtLink({ componentName: "NuxtLink" });
const inlineConfig = {};
defuFn(inlineConfig);
function useHead(meta2) {
  const resolvedMeta = isFunction$2(meta2) ? computed(meta2) : meta2;
  useNuxtApp()._useHead(resolvedMeta);
}
const components = {};
const _nuxt_components_plugin_mjs_KR1HBZs4kY = defineNuxtPlugin((nuxtApp) => {
  for (const name2 in components) {
    nuxtApp.vueApp.component(name2, components[name2]);
    nuxtApp.vueApp.component("Lazy" + name2, components[name2]);
  }
});
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];
var BODY_TAG_ATTR_NAME = `data-meta-body`;
var createElement = (tag, attrs, document2) => {
  const el = document2.createElement(tag);
  for (const key2 of Object.keys(attrs)) {
    if (key2 === "body" && attrs.body === true) {
      el.setAttribute(BODY_TAG_ATTR_NAME, "true");
    } else {
      let value = attrs[key2];
      if (key2 === "renderPriority" || key2 === "key" || value === false) {
        continue;
      }
      if (key2 === "children") {
        el.textContent = value;
      } else {
        el.setAttribute(key2, value);
      }
    }
  }
  return el;
};
var stringifyAttrName = (str) => str.replace(/[\s"'><\/=]/g, "").replace(/[^a-zA-Z0-9_-]/g, "");
var stringifyAttrValue = (str) => str.replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes2) => {
  const handledAttributes = [];
  for (let [key2, value] of Object.entries(attributes2)) {
    if (key2 === "children" || key2 === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = stringifyAttrName(key2);
    if (value !== true) {
      attribute += `="${stringifyAttrValue(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}
var tagDedupeKey = (tag) => {
  if (!["meta", "base", "script", "link"].includes(tag.tag)) {
    return false;
  }
  const { props: props2, tag: tagName } = tag;
  if (tagName === "base") {
    return "base";
  }
  if (tagName === "link" && props2.rel === "canonical") {
    return "canonical";
  }
  if (props2.charset) {
    return "charset";
  }
  const name2 = ["key", "id", "name", "property", "http-equiv"];
  for (const n of name2) {
    let value = void 0;
    if (typeof props2.getAttribute === "function" && props2.hasAttribute(n)) {
      value = props2.getAttribute(n);
    } else {
      value = props2[n];
    }
    if (value !== void 0) {
      return `${tagName}-${n}-${value}`;
    }
  }
  return false;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "noscript",
  "htmlAttrs",
  "bodyAttrs"
];
var renderTemplate = (template, title) => {
  if (template == null)
    return "";
  if (typeof template === "string") {
    return template.replace("%s", title != null ? title : "");
  }
  return template(unref(title));
};
var headObjToTags = (obj) => {
  const tags = [];
  const keys2 = Object.keys(obj);
  for (const key2 of keys2) {
    if (obj[key2] == null)
      continue;
    switch (key2) {
      case "title":
        tags.push({ tag: key2, props: { children: obj[key2] } });
        break;
      case "titleTemplate":
        break;
      case "base":
        tags.push({ tag: key2, props: { key: "default", ...obj[key2] } });
        break;
      default:
        if (acceptFields.includes(key2)) {
          const value = obj[key2];
          if (Array.isArray(value)) {
            value.forEach((item) => {
              tags.push({ tag: key2, props: unref(item) });
            });
          } else if (value) {
            tags.push({ tag: key2, props: value });
          }
        }
        break;
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key2 of existingAttrs.split(",")) {
      if (!(key2 in attrs)) {
        el.removeAttribute(key2);
      }
    }
  }
  const keys2 = [];
  for (const key2 in attrs) {
    const value = attrs[key2];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key2);
    } else {
      el.setAttribute(key2, value);
    }
    keys2.push(key2);
  }
  if (keys2.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys2.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document2 = window.document, type, tags) => {
  var _a, _b;
  const head = document2.head;
  const body = document2.body;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  let bodyMetaElements = body.querySelectorAll(`[${BODY_TAG_ATTR_NAME}]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldHeadElements = [];
  const oldBodyElements = [];
  if (bodyMetaElements) {
    for (let i = 0; i < bodyMetaElements.length; i++) {
      if (bodyMetaElements[i] && ((_a = bodyMetaElements[i].tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldBodyElements.push(bodyMetaElements[i]);
      }
    }
  }
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_b = j == null ? void 0 : j.tagName) == null ? void 0 : _b.toLowerCase()) === type) {
        oldHeadElements.push(j);
      }
    }
  } else {
    headCountEl = document2.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => {
    var _a2;
    return {
      element: createElement(tag.tag, tag.props, document2),
      body: (_a2 = tag.props.body) != null ? _a2 : false
    };
  });
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldHeadElements.length; i++) {
      const oldEl = oldHeadElements[i];
      if (isEqualNode(oldEl, newEl.element)) {
        oldHeadElements.splice(i, 1);
        return false;
      }
    }
    for (let i = 0; i < oldBodyElements.length; i++) {
      const oldEl = oldBodyElements[i];
      if (isEqualNode(oldEl, newEl.element)) {
        oldBodyElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldBodyElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  oldHeadElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    if (t.body === true) {
      body.insertAdjacentElement("beforeend", t.element);
    } else {
      head.insertBefore(t.element, headCountEl);
    }
  });
  headCountEl.setAttribute(
    "content",
    "" + (headCount - oldHeadElements.length + newElements.filter((t) => !t.body).length)
  );
};
var createHead = (initHeadObject) => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  if (initHeadObject) {
    allHeadObjs.push(shallowRef(initHeadObject));
  }
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      const deduping = {};
      const titleTemplate = allHeadObjs.map((i) => unref(i).titleTemplate).reverse().find((i) => i != null);
      allHeadObjs.forEach((objs, headObjectIdx) => {
        const tags = headObjToTags(unref(objs));
        tags.forEach((tag, tagIdx) => {
          tag._position = headObjectIdx * 1e4 + tagIdx;
          if (titleTemplate && tag.tag === "title") {
            tag.props.children = renderTemplate(
              titleTemplate,
              tag.props.children
            );
          }
          const dedupeKey = tagDedupeKey(tag);
          if (dedupeKey) {
            deduping[dedupeKey] = tag;
          } else {
            deduped.push(tag);
          }
        });
      });
      deduped.push(...Object.values(deduping));
      return deduped.sort((a, b) => a._position - b._position);
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document2 = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags.sort(sortTags)) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document2.title = title;
      }
      setAttrs(document2.documentElement, htmlAttrs);
      setAttrs(document2.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document2, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var tagToString = (tag) => {
  let isBodyTag = false;
  if (tag.props.body) {
    isBodyTag = true;
    delete tag.props.body;
  }
  if (tag.props.renderPriority) {
    delete tag.props.renderPriority;
  }
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}${isBodyTag ? `  ${BODY_TAG_ATTR_NAME}="true"` : ""}>`;
  }
  return `<${tag.tag}${attrs}${isBodyTag ? ` ${BODY_TAG_ATTR_NAME}="true"` : ""}>${tag.props.children || ""}</${tag.tag}>`;
};
var sortTags = (aTag, bTag) => {
  const tagWeight = (tag) => {
    if (tag.props.renderPriority) {
      return tag.props.renderPriority;
    }
    switch (tag.tag) {
      case "base":
        return -1;
      case "meta":
        if (tag.props.charset) {
          return -2;
        }
        if (tag.props["http-equiv"] === "content-security-policy") {
          return 0;
        }
        return 10;
      default:
        return 10;
    }
  };
  return tagWeight(aTag) - tagWeight(bTag);
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  let bodyTags = [];
  for (const tag of head.headTags.sort(sortTags)) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else if (tag.props.body) {
      bodyTags.push(tagToString(tag));
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs({
        ...htmlAttrs,
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      });
    },
    get bodyAttrs() {
      return stringifyAttrs({
        ...bodyAttrs,
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      });
    },
    get bodyTags() {
      return bodyTags.join("");
    }
  };
};
const node_modules_nuxt_dist_head_runtime_lib_vueuse_head_plugin_mjs_D7WGfuP1A0 = defineNuxtPlugin((nuxtApp) => {
  const head = createHead();
  nuxtApp.vueApp.use(head);
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    watchEffect(() => {
      head.updateDOM();
    });
  });
  nuxtApp._useHead = (_meta) => {
    const meta2 = ref(_meta);
    const headObj = computed(() => {
      const overrides = { meta: [] };
      if (meta2.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta2.value.charset });
      }
      if (meta2.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta2.value.viewport });
      }
      return defu(overrides, meta2.value);
    });
    head.addHeadObjs(headObj);
    {
      return;
    }
  };
  {
    nuxtApp.ssrContext.renderMeta = () => {
      const meta2 = renderHeadToString(head);
      return {
        ...meta2,
        bodyScripts: meta2.bodyTags
      };
    };
  }
});
const removeUndefinedProps = (props2) => Object.fromEntries(Object.entries(props2).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props2, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props2), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = defineComponent({
  name: "Script",
  inheritAttrs: false,
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    fetchpriority: String,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
const NoScript = defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    title: String
  },
  setup: setupForUseMeta((props2, { slots }) => {
    var _a;
    const noscript = { ...props2 };
    const textContent = (((_a = slots.default) == null ? void 0 : _a.call(slots)) || []).filter(({ children }) => children).map(({ children }) => children).join("");
    if (textContent) {
      noscript.children = textContent;
    }
    return {
      noscript: [noscript]
    };
  })
});
const Link = defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
const Base = defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
const Title = defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    const title = ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null;
    return {
      title
    };
  })
});
const Meta$1 = defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((props2) => {
    const meta2 = { ...props2 };
    if (meta2.httpEquiv) {
      meta2["http-equiv"] = meta2.httpEquiv;
      delete meta2.httpEquiv;
    }
    return {
      meta: [meta2]
    };
  })
});
const Style = defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props2, { slots }) => {
    var _a, _b, _c;
    const style = { ...props2 };
    const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
const Head = defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
const Html = defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
const Body = defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const Components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Script,
  NoScript,
  Link,
  Base,
  Title,
  Meta: Meta$1,
  Style,
  Head,
  Html,
  Body
}, Symbol.toStringTag, { value: "Module" }));
const appHead = { "meta": [], "link": [], "style": [], "script": [], "noscript": [], "charset": "utf-8", "viewport": "width=device-width, initial-scale=1" };
const appLayoutTransition = { "name": "layout", "mode": "out-in" };
const appPageTransition = { "name": "page", "mode": "out-in" };
const appKeepalive = false;
const metaMixin = {
  created() {
    const instance = getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = useNuxtApp();
    const source = typeof options.head === "function" ? computed(() => options.head(nuxtApp)) : options.head;
    useHead(source);
  }
};
const node_modules_nuxt_dist_head_runtime_plugin_mjs_1QO0gqa6n2 = defineNuxtPlugin((nuxtApp) => {
  useHead(markRaw({ title: "", ...appHead }));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name2 in Components) {
    nuxtApp.vueApp.component(name2, Components[name2]);
  }
});
const interpolatePath = (route, match2) => {
  return match2.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (override, routeProps) => {
  var _a;
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a2;
    return ((_a2 = m.components) == null ? void 0 : _a2.default) === routeProps.Component.type;
  });
  const source = (_a = override != null ? override : matchedRoute == null ? void 0 : matchedRoute.meta.key) != null ? _a : matchedRoute && interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props2, children) => {
  return { default: () => children };
};
const Fragment = defineComponent({
  setup(_props, { slots }) {
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
const _wrapIf = (component, props2, slots) => {
  return { default: () => props2 ? h(component, props2 === true ? {} : props2, slots) : h(Fragment, {}, slots) };
};
const isNestedKey = Symbol("isNested");
const NuxtPage = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props2, { attrs }) {
    const nuxtApp = useNuxtApp();
    const isNested = inject(isNestedKey, false);
    provide(isNestedKey, true);
    return () => {
      return h(RouterView, { name: props2.name, route: props2.route, ...attrs }, {
        default: (routeProps) => {
          var _a, _b, _c, _d;
          if (!routeProps.Component) {
            return;
          }
          const key2 = generateRouteKey(props2.pageKey, routeProps);
          const transitionProps = (_b = (_a = props2.transition) != null ? _a : routeProps.route.meta.pageTransition) != null ? _b : appPageTransition;
          return _wrapIf(
            Transition,
            transitionProps,
            wrapInKeepAlive(
              (_d = (_c = props2.keepalive) != null ? _c : routeProps.route.meta.keepalive) != null ? _d : appKeepalive,
              isNested && nuxtApp.isHydrating ? h(Component, { key: key2, routeProps, pageKey: key2, hasTransition: !!transitionProps }) : h(Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
              }, { default: () => h(Component, { key: key2, routeProps, pageKey: key2, hasTransition: !!transitionProps }) })
            )
          ).default();
        }
      });
    };
  }
});
const Component = defineComponent({
  props: ["routeProps", "pageKey", "hasTransition"],
  setup(props2) {
    const previousKey = props2.pageKey;
    const previousRoute = props2.routeProps.route;
    const route = {};
    for (const key2 in props2.routeProps.route) {
      route[key2] = computed(() => previousKey === props2.pageKey ? props2.routeProps.route[key2] : previousRoute[key2]);
    }
    provide("_route", reactive(route));
    return () => {
      return h(props2.routeProps.Component);
    };
  }
});
var isFunction$1 = function isFunction(val) {
  return typeof val === "function";
};
var isArray$2 = Array.isArray;
var isString = function isString2(val) {
  return typeof val === "string";
};
var isObject$2 = function isObject(val) {
  return val !== null && _typeof(val) === "object";
};
var onRE = /^on[^a-z]/;
var isOn = function isOn2(key2) {
  return onRE.test(key2);
};
var cacheStringFunction = function cacheStringFunction2(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction(function(str) {
  return str.replace(camelizeRE, function(_, c) {
    return c ? c.toUpperCase() : "";
  });
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction(function(str) {
  return str.replace(hyphenateRE, "-$1").toLowerCase();
});
var hasOwnProperty$d = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn2(val, key2) {
  return hasOwnProperty$d.call(val, key2);
};
function resolvePropValue(options, props2, key2, value) {
  var opt = options[key2];
  if (opt != null) {
    var hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      var defaultValue = opt.default;
      value = opt.type !== Function && isFunction$1(defaultValue) ? defaultValue() : defaultValue;
    }
    if (opt.type === Boolean) {
      if (!hasOwn(props2, key2) && !hasDefault) {
        value = false;
      } else if (value === "") {
        value = true;
      }
    }
  }
  return value;
}
function toPx(val) {
  if (typeof val === "number")
    return "".concat(val, "px");
  return val;
}
function renderHelper(v) {
  var props2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var defaultV = arguments.length > 2 ? arguments[2] : void 0;
  if (typeof v === "function") {
    return v(props2);
  }
  return v !== null && v !== void 0 ? v : defaultV;
}
function classNames() {
  var classes = [];
  for (var i = 0; i < arguments.length; i++) {
    var value = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    if (!value)
      continue;
    if (isString(value)) {
      classes.push(value);
    } else if (isArray$2(value)) {
      for (var _i = 0; _i < value.length; _i++) {
        var inner = classNames(value[_i]);
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (isObject$2(value)) {
      for (var name2 in value) {
        if (value[name2]) {
          classes.push(name2);
        }
      }
    }
  }
  return classes.join(" ");
}
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
const freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
const root$1 = root;
var Symbol$1 = root$1.Symbol;
const Symbol$2 = Symbol$1;
var objectProto$f = Object.prototype;
var hasOwnProperty$c = objectProto$f.hasOwnProperty;
var nativeObjectToString$1 = objectProto$f.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$c.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$e = Object.prototype;
var nativeObjectToString = objectProto$e.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
const getPrototype$1 = getPrototype;
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var objectTag$4 = "[object Object]";
var funcProto$2 = Function.prototype, objectProto$d = Object.prototype;
var funcToString$2 = funcProto$2.toString;
var hasOwnProperty$b = objectProto$d.hasOwnProperty;
var objectCtorString = funcToString$2.call(Object);
function isPlainObject$1(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag$4) {
    return false;
  }
  var proto2 = getPrototype$1(value);
  if (proto2 === null) {
    return true;
  }
  var Ctor = hasOwnProperty$b.call(proto2, "constructor") && proto2.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString$2.call(Ctor) == objectCtorString;
}
var isValid = function isValid2(value) {
  return value !== void 0 && value !== null && value !== "";
};
const isValid$1 = isValid;
var initDefaultProps = function initDefaultProps2(types, defaultProps2) {
  var propTypes2 = _objectSpread({}, types);
  Object.keys(defaultProps2).forEach(function(k) {
    var prop = propTypes2[k];
    if (prop) {
      if (prop.type || prop.default) {
        prop.default = defaultProps2[k];
      } else if (prop.def) {
        prop.def(defaultProps2[k]);
      } else {
        propTypes2[k] = {
          type: prop,
          default: defaultProps2[k]
        };
      }
    } else {
      throw new Error("not have ".concat(k, " prop"));
    }
  });
  return propTypes2;
};
const initDefaultProps$1 = initDefaultProps;
var splitAttrs = function splitAttrs2(attrs) {
  var allAttrs = Object.keys(attrs);
  var eventAttrs = {};
  var onEvents = {};
  var extraAttrs = {};
  for (var i = 0, l = allAttrs.length; i < l; i++) {
    var key2 = allAttrs[i];
    if (isOn(key2)) {
      eventAttrs[key2[2].toLowerCase() + key2.slice(3)] = attrs[key2];
      onEvents[key2] = attrs[key2];
    } else {
      extraAttrs[key2] = attrs[key2];
    }
  }
  return {
    onEvents,
    events: eventAttrs,
    extraAttrs
  };
};
var parseStyleText = function parseStyleText2() {
  var cssText = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  var camel = arguments.length > 1 ? arguments[1] : void 0;
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  if (_typeof(cssText) === "object")
    return cssText;
  cssText.split(listDelimiter).forEach(function(item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      if (tmp.length > 1) {
        var k = camel ? camelize(tmp[0].trim()) : tmp[0].trim();
        res[k] = tmp[1].trim();
      }
    }
  });
  return res;
};
var hasProp = function hasProp2(instance, prop) {
  return instance[prop] !== void 0;
};
var flattenChildren = function flattenChildren2() {
  var children = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var filterEmpty2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  var temp = Array.isArray(children) ? children : [children];
  var res = [];
  temp.forEach(function(child) {
    if (Array.isArray(child)) {
      res.push.apply(res, _toConsumableArray(flattenChildren2(child, filterEmpty2)));
    } else if (child && child.type === Fragment$1) {
      res.push.apply(res, _toConsumableArray(flattenChildren2(child.children, filterEmpty2)));
    } else if (child && isVNode(child)) {
      if (filterEmpty2 && !isEmptyElement(child)) {
        res.push(child);
      } else if (!filterEmpty2) {
        res.push(child);
      }
    } else if (isValid$1(child)) {
      res.push(child);
    }
  });
  return res;
};
var getSlot = function getSlot2(self2) {
  var name2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default";
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (isVNode(self2)) {
    if (self2.type === Fragment$1) {
      return name2 === "default" ? flattenChildren(self2.children) : [];
    } else if (self2.children && self2.children[name2]) {
      return flattenChildren(self2.children[name2](options));
    } else {
      return [];
    }
  } else {
    var res = self2.$slots[name2] && self2.$slots[name2](options);
    return flattenChildren(res);
  }
};
var findDOMNode = function findDOMNode2(instance) {
  var _instance$vnode;
  var node = (instance === null || instance === void 0 ? void 0 : (_instance$vnode = instance.vnode) === null || _instance$vnode === void 0 ? void 0 : _instance$vnode.el) || instance && (instance.$el || instance);
  while (node && !node.tagName) {
    node = node.nextSibling;
  }
  return node;
};
var getOptionProps = function getOptionProps2(instance) {
  var res = {};
  if (instance.$ && instance.$.vnode) {
    var props2 = instance.$.vnode.props || {};
    Object.keys(instance.$props).forEach(function(k) {
      var v = instance.$props[k];
      var hyphenateKey = hyphenate(k);
      if (v !== void 0 || hyphenateKey in props2) {
        res[k] = v;
      }
    });
  } else if (isVNode(instance) && _typeof(instance.type) === "object") {
    var originProps = instance.props || {};
    var _props = {};
    Object.keys(originProps).forEach(function(key2) {
      _props[camelize(key2)] = originProps[key2];
    });
    var options = instance.type.props || {};
    Object.keys(options).forEach(function(k) {
      var v = resolvePropValue(options, _props, k, _props[k]);
      if (v !== void 0 || k in _props) {
        res[k] = v;
      }
    });
  }
  return res;
};
var getComponent = function getComponent2(instance) {
  var prop = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default";
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : instance;
  var execute = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
  var com = void 0;
  if (instance.$) {
    var temp = instance[prop];
    if (temp !== void 0) {
      return typeof temp === "function" && execute ? temp(options) : temp;
    } else {
      com = instance.$slots[prop];
      com = execute && com ? com(options) : com;
    }
  } else if (isVNode(instance)) {
    var _temp = instance.props && instance.props[prop];
    if (_temp !== void 0 && instance.props !== null) {
      return typeof _temp === "function" && execute ? _temp(options) : _temp;
    } else if (instance.type === Fragment$1) {
      com = instance.children;
    } else if (instance.children && instance.children[prop]) {
      com = instance.children[prop];
      com = execute && com ? com(options) : com;
    }
  }
  if (Array.isArray(com)) {
    com = flattenChildren(com);
    com = com.length === 1 ? com[0] : com;
    com = com.length === 0 ? void 0 : com;
  }
  return com;
};
function getEvents() {
  var ele = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var on = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  var props2 = {};
  if (ele.$) {
    props2 = _objectSpread(_objectSpread({}, props2), ele.$attrs);
  } else {
    props2 = _objectSpread(_objectSpread({}, props2), ele.props);
  }
  return splitAttrs(props2)[on ? "onEvents" : "events"];
}
function getStyle(ele, camel) {
  var props2 = (isVNode(ele) ? ele.props : ele.$attrs) || {};
  var style = props2.style || {};
  if (typeof style === "string") {
    style = parseStyleText(style, camel);
  } else if (camel && style) {
    var res = {};
    Object.keys(style).forEach(function(k) {
      return res[camelize(k)] = style[k];
    });
    return res;
  }
  return style;
}
function isEmptyElement(c) {
  return c && (c.type === Comment || c.type === Fragment$1 && c.children.length === 0 || c.type === Text && c.children.trim() === "");
}
function filterEmpty() {
  var children = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var res = [];
  children.forEach(function(child) {
    if (Array.isArray(child)) {
      res.push.apply(res, _toConsumableArray(child));
    } else if ((child === null || child === void 0 ? void 0 : child.type) === Fragment$1) {
      res.push.apply(res, _toConsumableArray(filterEmpty(child.children)));
    } else {
      res.push(child);
    }
  });
  return res.filter(function(c) {
    return !isEmptyElement(c);
  });
}
function filterEmptyWithUndefined(children) {
  if (children) {
    var coms = filterEmpty(children);
    return coms.length ? coms : void 0;
  } else {
    return children;
  }
}
function isValidElement(element) {
  if (Array.isArray(element) && element.length === 1) {
    element = element[0];
  }
  return element && element.__v_isVNode && _typeof(element.type) !== "symbol";
}
function getPropsSlot(slots, props2) {
  var _props$prop, _slots$prop;
  var prop = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "default";
  return (_props$prop = props2[prop]) !== null && _props$prop !== void 0 ? _props$prop : (_slots$prop = slots[prop]) === null || _slots$prop === void 0 ? void 0 : _slots$prop.call(slots);
}
const ResizeObserver = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ResizeObserver",
  props: {
    disabled: Boolean,
    onResize: Function
  },
  emits: ["resize"],
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var state = reactive({
      width: 0,
      height: 0,
      offsetHeight: 0,
      offsetWidth: 0
    });
    var currentElement = null;
    var resizeObserver = null;
    var destroyObserver = function destroyObserver2() {
      if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
      }
    };
    var onResize = function onResize2(entries) {
      var onResize3 = props2.onResize;
      var target = entries[0].target;
      var _target$getBoundingCl = target.getBoundingClientRect(), width = _target$getBoundingCl.width, height = _target$getBoundingCl.height;
      var offsetWidth = target.offsetWidth, offsetHeight = target.offsetHeight;
      var fixedWidth = Math.floor(width);
      var fixedHeight = Math.floor(height);
      if (state.width !== fixedWidth || state.height !== fixedHeight || state.offsetWidth !== offsetWidth || state.offsetHeight !== offsetHeight) {
        var size = {
          width: fixedWidth,
          height: fixedHeight,
          offsetWidth,
          offsetHeight
        };
        _extends(state, size);
        if (onResize3) {
          Promise.resolve().then(function() {
            onResize3(_objectSpread(_objectSpread({}, size), {}, {
              offsetWidth,
              offsetHeight
            }), target);
          });
        }
      }
    };
    var instance = getCurrentInstance();
    var registerObserver = function registerObserver2() {
      var disabled = props2.disabled;
      if (disabled) {
        destroyObserver();
        return;
      }
      var element = findDOMNode(instance);
      var elementChanged = element !== currentElement;
      if (elementChanged) {
        destroyObserver();
        currentElement = element;
      }
      if (!resizeObserver && element) {
        resizeObserver = new ResizeObserver$1(onResize);
        resizeObserver.observe(element);
      }
    };
    onUpdated(function() {
      registerObserver();
    });
    onUnmounted(function() {
      destroyObserver();
    });
    watch(function() {
      return props2.disabled;
    }, function() {
      registerObserver();
    }, {
      flush: "post"
    });
    return function() {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)[0];
    };
  }
});
var raf$1 = function raf(callback) {
  return setTimeout(callback, 16);
};
var caf = function caf2(num) {
  return clearTimeout(num);
};
var rafUUID = 0;
var rafIds = /* @__PURE__ */ new Map();
function cleanup(id) {
  rafIds.delete(id);
}
function wrapperRaf(callback) {
  var times = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  rafUUID += 1;
  var id = rafUUID;
  function callRef(leftTimes) {
    if (leftTimes === 0) {
      cleanup(id);
      callback();
    } else {
      var realId = raf$1(function() {
        callRef(leftTimes - 1);
      });
      rafIds.set(id, realId);
    }
  }
  callRef(times);
  return id;
}
wrapperRaf.cancel = function(id) {
  var realId = rafIds.get(id);
  cleanup(realId);
  return caf(realId);
};
var tuple = function tuple2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args;
};
var withInstall = function withInstall2(comp) {
  var c = comp;
  c.install = function(app) {
    app.component(c.displayName || c.name, comp);
  };
  return comp;
};
var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, "passive", {
    get: function get2() {
      supportsPassive = true;
    }
  });
  window.addEventListener("testPassive", null, opts);
  window.removeEventListener("testPassive", null, opts);
} catch (e) {
}
const supportsPassive$1 = supportsPassive;
function addEventListenerWrap(target, eventType, cb, option) {
  if (target && target.addEventListener) {
    var opt = option;
    if (opt === void 0 && supportsPassive$1 && (eventType === "touchstart" || eventType === "touchmove" || eventType === "wheel")) {
      opt = {
        passive: false
      };
    }
    target.addEventListener(eventType, cb, opt);
  }
  return {
    remove: function remove() {
      if (target && target.removeEventListener) {
        target.removeEventListener(eventType, cb);
      }
    }
  };
}
const enUS$1 = {
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "",
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages"
};
var locale$2 = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "Ok",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: true,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
};
const CalendarLocale = locale$2;
var locale$1 = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
};
const TimePicker = locale$1;
var locale = {
  lang: _objectSpread({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, CalendarLocale),
  timePickerLocale: _objectSpread({}, TimePicker)
};
const enUS = locale;
var typeTemplate$1 = "${label} is not a valid ${type}";
var localeValues = {
  locale: "en",
  Pagination: enUS$1,
  DatePicker: enUS,
  TimePicker,
  Calendar: enUS,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No Data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: typeTemplate$1,
        method: typeTemplate$1,
        array: typeTemplate$1,
        object: typeTemplate$1,
        number: typeTemplate$1,
        date: typeTemplate$1,
        boolean: typeTemplate$1,
        integer: typeTemplate$1,
        float: typeTemplate$1,
        regexp: typeTemplate$1,
        email: typeTemplate$1,
        url: typeTemplate$1,
        hex: typeTemplate$1
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  }
};
const defaultLocale = localeValues;
const LocaleReceiver = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "LocaleReceiver",
  props: {
    componentName: String,
    defaultLocale: {
      type: [Object, Function]
    },
    children: {
      type: Function
    }
  },
  setup: function setup2(props2, _ref) {
    var slots = _ref.slots;
    var localeData = inject("localeData", {});
    var locale2 = computed(function() {
      var _props$componentName = props2.componentName, componentName = _props$componentName === void 0 ? "global" : _props$componentName, defaultLocale$1 = props2.defaultLocale;
      var locale3 = defaultLocale$1 || defaultLocale[componentName || "global"];
      var antLocale = localeData.antLocale;
      var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return _objectSpread(_objectSpread({}, typeof locale3 === "function" ? locale3() : locale3), localeFromContext || {});
    });
    var localeCode = computed(function() {
      var antLocale = localeData.antLocale;
      var localeCode2 = antLocale && antLocale.locale;
      if (antLocale && antLocale.exist && !localeCode2) {
        return defaultLocale.locale;
      }
      return localeCode2;
    });
    return function() {
      var children = props2.children || slots.default;
      var antLocale = localeData.antLocale;
      return children === null || children === void 0 ? void 0 : children(locale2.value, localeCode.value, antLocale);
    };
  }
});
function useLocaleReceiver(componentName, defaultLocale$1, propsLocale) {
  var localeData = inject("localeData", {});
  var componentLocale = computed(function() {
    var antLocale = localeData.antLocale;
    var locale2 = unref(defaultLocale$1) || defaultLocale[componentName || "global"];
    var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
    return _objectSpread(_objectSpread(_objectSpread({}, typeof locale2 === "function" ? locale2() : locale2), localeFromContext || {}), unref(propsLocale) || {});
  });
  return [componentLocale];
}
var Empty$2 = function Empty() {
  var _useConfigInject = useConfigInject("empty", {}), getPrefixCls2 = _useConfigInject.getPrefixCls;
  var prefixCls = getPrefixCls2("empty-img-default");
  return createVNode("svg", {
    "class": prefixCls,
    "width": "184",
    "height": "152",
    "viewBox": "0 0 184 152"
  }, [createVNode("g", {
    "fill": "none",
    "fill-rule": "evenodd"
  }, [createVNode("g", {
    "transform": "translate(24 31.67)"
  }, [createVNode("ellipse", {
    "class": "".concat(prefixCls, "-ellipse"),
    "cx": "67.797",
    "cy": "106.89",
    "rx": "67.797",
    "ry": "12.668"
  }, null), createVNode("path", {
    "class": "".concat(prefixCls, "-path-1"),
    "d": "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
  }, null), createVNode("path", {
    "class": "".concat(prefixCls, "-path-2"),
    "d": "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    "transform": "translate(13.56)"
  }, null), createVNode("path", {
    "class": "".concat(prefixCls, "-path-3"),
    "d": "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
  }, null), createVNode("path", {
    "class": "".concat(prefixCls, "-path-4"),
    "d": "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
  }, null)]), createVNode("path", {
    "class": "".concat(prefixCls, "-path-5"),
    "d": "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
  }, null), createVNode("g", {
    "class": "".concat(prefixCls, "-g"),
    "transform": "translate(149.65 15.383)"
  }, [createVNode("ellipse", {
    "cx": "20.654",
    "cy": "3.167",
    "rx": "2.849",
    "ry": "2.815"
  }, null), createVNode("path", {
    "d": "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }, null)])])]);
};
Empty$2.PRESENTED_IMAGE_DEFAULT = true;
const DefaultEmptyImg = Empty$2;
var Simple = function Simple2() {
  var _useConfigInject = useConfigInject("empty", {}), getPrefixCls2 = _useConfigInject.getPrefixCls;
  var prefixCls = getPrefixCls2("empty-img-simple");
  return createVNode("svg", {
    "class": prefixCls,
    "width": "64",
    "height": "41",
    "viewBox": "0 0 64 41"
  }, [createVNode("g", {
    "transform": "translate(0 1)",
    "fill": "none",
    "fill-rule": "evenodd"
  }, [createVNode("ellipse", {
    "class": "".concat(prefixCls, "-ellipse"),
    "fill": "#F5F5F5",
    "cx": "32",
    "cy": "33",
    "rx": "32",
    "ry": "7"
  }, null), createVNode("g", {
    "class": "".concat(prefixCls, "-g"),
    "fill-rule": "nonzero",
    "stroke": "#D9D9D9"
  }, [createVNode("path", {
    "d": "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }, null), createVNode("path", {
    "d": "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    "fill": "#FAFAFA",
    "class": "".concat(prefixCls, "-path")
  }, null)])])]);
};
Simple.PRESENTED_IMAGE_SIMPLE = true;
const SimpleEmptyImg = Simple;
var PropTypes = createTypes({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
PropTypes.extend([{
  name: "looseBool",
  getter: true,
  type: Boolean,
  default: void 0
}, {
  name: "style",
  getter: true,
  type: [String, Object],
  default: void 0
}, {
  name: "VueNode",
  getter: true,
  type: null
}]);
const PropTypes$1 = PropTypes;
var _excluded$l = ["image", "description", "imageStyle", "class"];
var defaultEmptyImg = createVNode(DefaultEmptyImg, null, null);
var simpleEmptyImg = createVNode(SimpleEmptyImg, null, null);
var Empty2 = function Empty3(props2, _ref) {
  var _slots$description;
  var _ref$slots = _ref.slots, slots = _ref$slots === void 0 ? {} : _ref$slots, attrs = _ref.attrs;
  var _useConfigInject = useConfigInject("empty", props2), direction = _useConfigInject.direction, prefixClsRef = _useConfigInject.prefixCls;
  var prefixCls = prefixClsRef.value;
  var _props$attrs = _objectSpread(_objectSpread({}, props2), attrs), _props$attrs$image = _props$attrs.image, image = _props$attrs$image === void 0 ? defaultEmptyImg : _props$attrs$image, _props$attrs$descript = _props$attrs.description, description = _props$attrs$descript === void 0 ? ((_slots$description = slots.description) === null || _slots$description === void 0 ? void 0 : _slots$description.call(slots)) || void 0 : _props$attrs$descript, imageStyle = _props$attrs.imageStyle, _props$attrs$class = _props$attrs.class, className = _props$attrs$class === void 0 ? "" : _props$attrs$class, restProps = _objectWithoutProperties(_props$attrs, _excluded$l);
  return createVNode(LocaleReceiver, {
    "componentName": "Empty",
    "children": function children(locale2) {
      var _classNames;
      var des = typeof description !== "undefined" ? description : locale2.description;
      var alt = typeof des === "string" ? des : "empty";
      var imageNode = null;
      if (typeof image === "string") {
        imageNode = createVNode("img", {
          "alt": alt,
          "src": image
        }, null);
      } else {
        imageNode = image;
      }
      return createVNode("div", _objectSpread({
        "class": classNames(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-normal"), image === simpleEmptyImg), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction.value === "rtl"), _classNames))
      }, restProps), [createVNode("div", {
        "class": "".concat(prefixCls, "-image"),
        "style": imageStyle
      }, [imageNode]), des && createVNode("p", {
        "class": "".concat(prefixCls, "-description")
      }, [des]), slots.default && createVNode("div", {
        "class": "".concat(prefixCls, "-footer")
      }, [filterEmpty(slots.default())])]);
    }
  }, null);
};
Empty2.displayName = "AEmpty";
Empty2.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty2.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
Empty2.inheritAttrs = false;
Empty2.props = {
  prefixCls: String,
  image: PropTypes$1.any,
  description: PropTypes$1.any,
  imageStyle: {
    type: Object,
    default: void 0
  }
};
const Empty$1 = withInstall(Empty2);
var RenderEmpty = function RenderEmpty2(props2) {
  var _useConfigInject = useConfigInject("empty", props2), prefixCls = _useConfigInject.prefixCls;
  var renderHtml = function renderHtml2(componentName) {
    switch (componentName) {
      case "Table":
      case "List":
        return createVNode(Empty$1, {
          "image": Empty$1.PRESENTED_IMAGE_SIMPLE
        }, null);
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return createVNode(Empty$1, {
          "image": Empty$1.PRESENTED_IMAGE_SIMPLE,
          "class": "".concat(prefixCls.value, "-small")
        }, null);
      default:
        return createVNode(Empty$1, null, null);
    }
  };
  return renderHtml(props2.componentName);
};
function renderEmpty(componentName) {
  return createVNode(RenderEmpty, {
    "componentName": componentName
  }, null);
}
var warned = {};
function warning$1(valid, message2) {
  if (process.env.NODE_ENV !== "production" && !valid && console !== void 0) {
    console.error("Warning: ".concat(message2));
  }
}
function note(valid, message2) {
  if (process.env.NODE_ENV !== "production" && !valid && console !== void 0) {
    console.warn("Note: ".concat(message2));
  }
}
function call(method, valid, message2) {
  if (!valid && !warned[message2]) {
    method(false, message2);
    warned[message2] = true;
  }
}
function warningOnce(valid, message2) {
  call(warning$1, valid, message2);
}
function noteOnce(valid, message2) {
  call(note, valid, message2);
}
const warning = function(valid, component) {
  var message2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  warningOnce(valid, "[antdv: ".concat(component, "] ").concat(message2));
};
var ANT_MARK = "internalMark";
var LocaleProvider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ALocaleProvider",
  props: {
    locale: {
      type: Object
    },
    ANT_MARK__: String
  },
  setup: function setup3(props2, _ref) {
    var slots = _ref.slots;
    warning(props2.ANT_MARK__ === ANT_MARK, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead");
    var state = reactive({
      antLocale: _objectSpread(_objectSpread({}, props2.locale), {}, {
        exist: true
      }),
      ANT_MARK__: ANT_MARK
    });
    provide("localeData", state);
    watch(function() {
      return props2.locale;
    }, function() {
      state.antLocale = _objectSpread(_objectSpread({}, props2.locale), {}, {
        exist: true
      });
    }, {
      immediate: true
    });
    return function() {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});
LocaleProvider.install = function(app) {
  app.component(LocaleProvider.name, LocaleProvider);
  return app;
};
const LocaleProvider$1 = withInstall(LocaleProvider);
tuple("bottomLeft", "bottomRight", "topLeft", "topRight");
var getTransitionProps = function getTransitionProps2(transitionName2) {
  var opt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var transitionProps = transitionName2 ? _objectSpread({
    name: transitionName2,
    appear: true,
    enterFromClass: "".concat(transitionName2, "-enter ").concat(transitionName2, "-enter-prepare"),
    enterActiveClass: "".concat(transitionName2, "-enter ").concat(transitionName2, "-enter-prepare"),
    enterToClass: "".concat(transitionName2, "-enter ").concat(transitionName2, "-enter-active"),
    leaveFromClass: " ".concat(transitionName2, "-leave"),
    leaveActiveClass: "".concat(transitionName2, "-leave ").concat(transitionName2, "-leave-active"),
    leaveToClass: "".concat(transitionName2, "-leave ").concat(transitionName2, "-leave-active")
  }, opt) : _objectSpread({
    css: false
  }, opt);
  return transitionProps;
};
var getTransitionGroupProps = function getTransitionGroupProps2(transitionName2) {
  var opt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var transitionProps = transitionName2 ? _objectSpread({
    name: transitionName2,
    appear: true,
    appearActiveClass: "".concat(transitionName2),
    appearToClass: "".concat(transitionName2, "-appear ").concat(transitionName2, "-appear-active"),
    enterFromClass: "".concat(transitionName2, "-appear ").concat(transitionName2, "-enter ").concat(transitionName2, "-appear-prepare ").concat(transitionName2, "-enter-prepare"),
    enterActiveClass: "".concat(transitionName2),
    enterToClass: "".concat(transitionName2, "-enter ").concat(transitionName2, "-appear ").concat(transitionName2, "-appear-active ").concat(transitionName2, "-enter-active"),
    leaveActiveClass: "".concat(transitionName2, " ").concat(transitionName2, "-leave"),
    leaveToClass: "".concat(transitionName2, "-leave-active")
  }, opt) : _objectSpread({
    css: false
  }, opt);
  return transitionProps;
};
var getTransitionName = function getTransitionName2(rootPrefixCls, motion, transitionName2) {
  if (transitionName2 !== void 0) {
    return transitionName2;
  }
  return "".concat(rootPrefixCls, "-").concat(motion);
};
const Notice = defineComponent({
  name: "Notice",
  inheritAttrs: false,
  props: ["prefixCls", "duration", "updateMark", "noticeKey", "closeIcon", "closable", "props", "onClick", "onClose", "holder", "visible"],
  setup: function setup4(props2, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots;
    var closeTimer;
    var duration = computed(function() {
      return props2.duration === void 0 ? 1.5 : props2.duration;
    });
    var startCloseTimer = function startCloseTimer2() {
      if (duration.value) {
        closeTimer = setTimeout(function() {
          close3();
        }, duration.value * 1e3);
      }
    };
    var clearCloseTimer = function clearCloseTimer2() {
      if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
      }
    };
    var close3 = function close4(e) {
      if (e) {
        e.stopPropagation();
      }
      clearCloseTimer();
      var onClose = props2.onClose, noticeKey = props2.noticeKey;
      if (onClose) {
        onClose(noticeKey);
      }
    };
    var restartCloseTimer = function restartCloseTimer2() {
      clearCloseTimer();
      startCloseTimer();
    };
    onUnmounted(function() {
      clearCloseTimer();
    });
    watch([duration, function() {
      return props2.updateMark;
    }, function() {
      return props2.visible;
    }], function(_ref2, _ref3) {
      var _ref4 = _slicedToArray(_ref2, 3), preDuration = _ref4[0], preUpdateMark = _ref4[1], preVisible = _ref4[2];
      var _ref5 = _slicedToArray(_ref3, 3), newDuration = _ref5[0], newUpdateMark = _ref5[1], newVisible = _ref5[2];
      if (preDuration !== newDuration || preUpdateMark !== newUpdateMark || preVisible !== newVisible && newVisible) {
        restartCloseTimer();
      }
    }, {
      flush: "post"
    });
    return function() {
      var _slots$closeIcon, _slots$default;
      var prefixCls = props2.prefixCls, closable = props2.closable, _props$closeIcon = props2.closeIcon, closeIcon = _props$closeIcon === void 0 ? (_slots$closeIcon = slots.closeIcon) === null || _slots$closeIcon === void 0 ? void 0 : _slots$closeIcon.call(slots) : _props$closeIcon, onClick2 = props2.onClick, holder = props2.holder;
      var className = attrs.class, style = attrs.style;
      var componentClass = "".concat(prefixCls, "-notice");
      var dataOrAriaAttributeProps = Object.keys(attrs).reduce(function(acc, key2) {
        if (key2.substr(0, 5) === "data-" || key2.substr(0, 5) === "aria-" || key2 === "role") {
          acc[key2] = attrs[key2];
        }
        return acc;
      }, {});
      var node = createVNode("div", _objectSpread({
        "class": classNames(componentClass, className, _defineProperty({}, "".concat(componentClass, "-closable"), closable)),
        "style": style,
        "onMouseenter": clearCloseTimer,
        "onMouseleave": startCloseTimer,
        "onClick": onClick2
      }, dataOrAriaAttributeProps), [createVNode("div", {
        "class": "".concat(componentClass, "-content")
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]), closable ? createVNode("a", {
        "tabindex": 0,
        "onClick": close3,
        "class": "".concat(componentClass, "-close")
      }, [closeIcon || createVNode("span", {
        "class": "".concat(componentClass, "-close-x")
      }, null)]) : null]);
      if (holder) {
        return createVNode(Teleport, {
          "to": holder
        }, {
          default: function _default4() {
            return node;
          }
        });
      }
      return node;
    };
  }
});
var _excluded$k = ["name", "getContainer", "appContext", "prefixCls", "rootPrefixCls", "transitionName", "hasTransitionName"];
var seed = 0;
var now$3 = Date.now();
function getUuid() {
  var id = seed;
  seed += 1;
  return "rcNotification_".concat(now$3, "_").concat(id);
}
var Notification = defineComponent({
  name: "Notification",
  inheritAttrs: false,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon"],
  setup: function setup5(props2, _ref) {
    var attrs = _ref.attrs, expose = _ref.expose, slots = _ref.slots;
    var hookRefs = /* @__PURE__ */ new Map();
    var notices = ref([]);
    var transitionProps = computed(function() {
      var prefixCls = props2.prefixCls, _props$animation = props2.animation, animation = _props$animation === void 0 ? "fade" : _props$animation;
      var name2 = props2.transitionName;
      if (!name2 && animation) {
        name2 = "".concat(prefixCls, "-").concat(animation);
      }
      return getTransitionGroupProps(name2);
    });
    var add = function add2(originNotice, holderCallback) {
      var key2 = originNotice.key || getUuid();
      var notice2 = _objectSpread(_objectSpread({}, originNotice), {}, {
        key: key2
      });
      var maxCount2 = props2.maxCount;
      var noticeIndex = notices.value.map(function(v) {
        return v.notice.key;
      }).indexOf(key2);
      var updatedNotices = notices.value.concat();
      if (noticeIndex !== -1) {
        updatedNotices.splice(noticeIndex, 1, {
          notice: notice2,
          holderCallback
        });
      } else {
        if (maxCount2 && notices.value.length >= maxCount2) {
          notice2.key = updatedNotices[0].notice.key;
          notice2.updateMark = getUuid();
          notice2.userPassKey = key2;
          updatedNotices.shift();
        }
        updatedNotices.push({
          notice: notice2,
          holderCallback
        });
      }
      notices.value = updatedNotices;
    };
    var remove = function remove2(removeKey) {
      notices.value = notices.value.filter(function(_ref2) {
        var _ref2$notice = _ref2.notice, key2 = _ref2$notice.key, userPassKey = _ref2$notice.userPassKey;
        var mergedKey = userPassKey || key2;
        return mergedKey !== removeKey;
      });
    };
    expose({
      add,
      remove,
      notices
    });
    return function() {
      var _slots$closeIcon, _className;
      var prefixCls = props2.prefixCls, _props$closeIcon = props2.closeIcon, closeIcon = _props$closeIcon === void 0 ? (_slots$closeIcon = slots.closeIcon) === null || _slots$closeIcon === void 0 ? void 0 : _slots$closeIcon.call(slots, {
        prefixCls
      }) : _props$closeIcon;
      var noticeNodes = notices.value.map(function(_ref3, index2) {
        var notice2 = _ref3.notice, holderCallback = _ref3.holderCallback;
        var updateMark = index2 === notices.value.length - 1 ? notice2.updateMark : void 0;
        var key2 = notice2.key, userPassKey = notice2.userPassKey;
        var content = notice2.content;
        var noticeProps = _objectSpread(_objectSpread(_objectSpread({
          prefixCls,
          closeIcon: typeof closeIcon === "function" ? closeIcon({
            prefixCls
          }) : closeIcon
        }, notice2), notice2.props), {}, {
          key: key2,
          noticeKey: userPassKey || key2,
          updateMark,
          onClose: function onClose(noticeKey) {
            var _notice$onClose;
            remove(noticeKey);
            (_notice$onClose = notice2.onClose) === null || _notice$onClose === void 0 ? void 0 : _notice$onClose.call(notice2);
          },
          onClick: notice2.onClick
        });
        if (holderCallback) {
          return createVNode("div", {
            "key": key2,
            "class": "".concat(prefixCls, "-hook-holder"),
            "ref": function ref2(div) {
              if (typeof key2 === "undefined") {
                return;
              }
              if (div) {
                hookRefs.set(key2, div);
                holderCallback(div, noticeProps);
              } else {
                hookRefs.delete(key2);
              }
            }
          }, null);
        }
        return createVNode(Notice, noticeProps, {
          default: function _default4() {
            return [typeof content === "function" ? content({
              prefixCls
            }) : content];
          }
        });
      });
      var className = (_className = {}, _defineProperty(_className, prefixCls, 1), _defineProperty(_className, attrs.class, !!attrs.class), _className);
      return createVNode("div", {
        "class": className,
        "style": attrs.style || {
          top: "65px",
          left: "50%"
        }
      }, [createVNode(TransitionGroup, _objectSpread({
        "tag": "div"
      }, transitionProps.value), {
        default: function _default4() {
          return [noticeNodes];
        }
      })]);
    };
  }
});
Notification.newInstance = function newNotificationInstance(properties, callback) {
  var _ref4 = properties || {}, _ref4$name = _ref4.name, name2 = _ref4$name === void 0 ? "notification" : _ref4$name, getContainer4 = _ref4.getContainer, appContext = _ref4.appContext, customizePrefixCls = _ref4.prefixCls, customRootPrefixCls = _ref4.rootPrefixCls, customTransitionName = _ref4.transitionName, hasTransitionName2 = _ref4.hasTransitionName, props2 = _objectWithoutProperties(_ref4, _excluded$k);
  var div = document.createElement("div");
  if (getContainer4) {
    var root2 = getContainer4();
    root2.appendChild(div);
  } else {
    document.body.appendChild(div);
  }
  var Wrapper = defineComponent({
    compatConfig: {
      MODE: 3
    },
    name: "NotificationWrapper",
    setup: function setup96(_props, _ref5) {
      var attrs = _ref5.attrs;
      var notiRef = ref();
      return function() {
        var global2 = globalConfigForApi;
        var prefixCls = global2.getPrefixCls(name2, customizePrefixCls);
        var rootPrefixCls = global2.getRootPrefixCls(customRootPrefixCls, prefixCls);
        var transitionName2 = hasTransitionName2 ? customTransitionName : "".concat(rootPrefixCls, "-").concat(customTransitionName);
        return createVNode(ConfigProvider, _objectSpread(_objectSpread({}, global2), {}, {
          "notUpdateGlobalConfig": true,
          "prefixCls": rootPrefixCls
        }), {
          default: function _default4() {
            return [createVNode(Notification, _objectSpread(_objectSpread({
              "ref": notiRef
            }, attrs), {}, {
              "prefixCls": prefixCls,
              "transitionName": transitionName2
            }), null)];
          }
        });
      };
    }
  });
  var vm = createVNode(Wrapper, props2);
  vm.appContext = appContext || vm.appContext;
  render(vm, div);
};
const Notification$1 = Notification;
var defaultDuration$1 = 3;
var defaultTop$1;
var messageInstance;
var key = 1;
var localPrefixCls = "";
var transitionName = "move-up";
var hasTransitionName = false;
var getContainer = function getContainer2() {
  return document.body;
};
var maxCount$1;
var rtl$1 = false;
function getKeyThenIncreaseKey() {
  return key++;
}
function setMessageConfig(options) {
  if (options.top !== void 0) {
    defaultTop$1 = options.top;
    messageInstance = null;
  }
  if (options.duration !== void 0) {
    defaultDuration$1 = options.duration;
  }
  if (options.prefixCls !== void 0) {
    localPrefixCls = options.prefixCls;
  }
  if (options.getContainer !== void 0) {
    getContainer = options.getContainer;
    messageInstance = null;
  }
  if (options.transitionName !== void 0) {
    transitionName = options.transitionName;
    messageInstance = null;
    hasTransitionName = true;
  }
  if (options.maxCount !== void 0) {
    maxCount$1 = options.maxCount;
    messageInstance = null;
  }
  if (options.rtl !== void 0) {
    rtl$1 = options.rtl;
  }
}
function getMessageInstance(args, callback) {
  if (messageInstance) {
    callback(messageInstance);
    return;
  }
  Notification$1.newInstance({
    appContext: args.appContext,
    prefixCls: args.prefixCls || localPrefixCls,
    rootPrefixCls: args.rootPrefixCls,
    transitionName,
    hasTransitionName,
    style: {
      top: defaultTop$1
    },
    getContainer: getContainer || args.getPopupContainer,
    maxCount: maxCount$1,
    name: "message"
  }, function(instance) {
    if (messageInstance) {
      callback(messageInstance);
      return;
    }
    messageInstance = instance;
    callback(instance);
  });
}
var typeToIcon$1 = {
  info: InfoCircleFilled,
  success: CheckCircleFilled,
  error: CloseCircleFilled,
  warning: ExclamationCircleFilled,
  loading: LoadingOutlined
};
function notice$1(args) {
  var duration = args.duration !== void 0 ? args.duration : defaultDuration$1;
  var target = args.key || getKeyThenIncreaseKey();
  var closePromise = new Promise(function(resolve) {
    var callback = function callback2() {
      if (typeof args.onClose === "function") {
        args.onClose();
      }
      return resolve(true);
    };
    getMessageInstance(args, function(instance) {
      instance.notice({
        key: target,
        duration,
        style: args.style || {},
        class: args.class,
        content: function content(_ref) {
          var _classNames;
          var prefixCls = _ref.prefixCls;
          var Icon = typeToIcon$1[args.type];
          var iconNode = Icon ? createVNode(Icon, null, null) : "";
          var messageClass = classNames("".concat(prefixCls, "-custom-content"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(args.type), args.type), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), rtl$1 === true), _classNames));
          return createVNode("div", {
            "class": messageClass
          }, [typeof args.icon === "function" ? args.icon() : args.icon || iconNode, createVNode("span", null, [typeof args.content === "function" ? args.content() : args.content])]);
        },
        onClose: callback,
        onClick: args.onClick
      });
    });
  });
  var result = function result2() {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };
  result.then = function(filled, rejected) {
    return closePromise.then(filled, rejected);
  };
  result.promise = closePromise;
  return result;
}
function isArgsProps(content) {
  return Object.prototype.toString.call(content) === "[object Object]" && !!content.content;
}
var api$1 = {
  open: notice$1,
  config: setMessageConfig,
  destroy: function destroy(messageKey) {
    if (messageInstance) {
      if (messageKey) {
        var _messageInstance = messageInstance, removeNotice = _messageInstance.removeNotice;
        removeNotice(messageKey);
      } else {
        var _messageInstance2 = messageInstance, destroy3 = _messageInstance2.destroy;
        destroy3();
        messageInstance = null;
      }
    }
  }
};
function attachTypeApi(originalApi, type) {
  originalApi[type] = function(content, duration, onClose) {
    if (isArgsProps(content)) {
      return originalApi.open(_objectSpread(_objectSpread({}, content), {}, {
        type
      }));
    }
    if (typeof duration === "function") {
      onClose = duration;
      duration = void 0;
    }
    return originalApi.open({
      content,
      duration,
      type,
      onClose
    });
  };
}
["success", "info", "warning", "error", "loading"].forEach(function(type) {
  return attachTypeApi(api$1, type);
});
api$1.warn = api$1.warning;
const message = api$1;
var notificationInstance = {};
var defaultDuration = 4.5;
var defaultTop = "24px";
var defaultBottom = "24px";
var defaultPrefixCls$1 = "";
var defaultPlacement = "topRight";
var defaultGetContainer = function defaultGetContainer2() {
  return document.body;
};
var defaultCloseIcon = null;
var rtl = false;
var maxCount;
function setNotificationConfig(options) {
  var duration = options.duration, placement = options.placement, bottom = options.bottom, top = options.top, getContainer4 = options.getContainer, closeIcon = options.closeIcon, prefixCls = options.prefixCls;
  if (prefixCls !== void 0) {
    defaultPrefixCls$1 = prefixCls;
  }
  if (duration !== void 0) {
    defaultDuration = duration;
  }
  if (placement !== void 0) {
    defaultPlacement = placement;
  }
  if (bottom !== void 0) {
    defaultBottom = typeof bottom === "number" ? "".concat(bottom, "px") : bottom;
  }
  if (top !== void 0) {
    defaultTop = typeof top === "number" ? "".concat(top, "px") : top;
  }
  if (getContainer4 !== void 0) {
    defaultGetContainer = getContainer4;
  }
  if (closeIcon !== void 0) {
    defaultCloseIcon = closeIcon;
  }
  if (options.rtl !== void 0) {
    rtl = options.rtl;
  }
  if (options.maxCount !== void 0) {
    maxCount = options.maxCount;
  }
}
function getPlacementStyle(placement) {
  var top = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultTop;
  var bottom = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultBottom;
  var style;
  switch (placement) {
    case "topLeft":
      style = {
        left: "0px",
        top,
        bottom: "auto"
      };
      break;
    case "topRight":
      style = {
        right: "0px",
        top,
        bottom: "auto"
      };
      break;
    case "bottomLeft":
      style = {
        left: "0px",
        top: "auto",
        bottom
      };
      break;
    default:
      style = {
        right: "0px",
        top: "auto",
        bottom
      };
      break;
  }
  return style;
}
function getNotificationInstance(_ref, callback) {
  var customizePrefixCls = _ref.prefixCls, _ref$placement = _ref.placement, placement = _ref$placement === void 0 ? defaultPlacement : _ref$placement, _ref$getContainer = _ref.getContainer, getContainer4 = _ref$getContainer === void 0 ? defaultGetContainer : _ref$getContainer, top = _ref.top, bottom = _ref.bottom, _ref$closeIcon = _ref.closeIcon, _closeIcon = _ref$closeIcon === void 0 ? defaultCloseIcon : _ref$closeIcon, appContext = _ref.appContext;
  var _globalConfig = globalConfig(), getPrefixCls2 = _globalConfig.getPrefixCls;
  var prefixCls = getPrefixCls2("notification", customizePrefixCls || defaultPrefixCls$1);
  var cacheKey = "".concat(prefixCls, "-").concat(placement, "-").concat(rtl);
  var cacheInstance = notificationInstance[cacheKey];
  if (cacheInstance) {
    Promise.resolve(cacheInstance).then(function(instance) {
      callback(instance);
    });
    return;
  }
  var notificationClass = classNames("".concat(prefixCls, "-").concat(placement), _defineProperty({}, "".concat(prefixCls, "-rtl"), rtl === true));
  Notification$1.newInstance({
    name: "notification",
    prefixCls: customizePrefixCls || defaultPrefixCls$1,
    class: notificationClass,
    style: getPlacementStyle(placement, top, bottom),
    appContext,
    getContainer: getContainer4,
    closeIcon: function closeIcon(_ref2) {
      var prefixCls2 = _ref2.prefixCls;
      var closeIconToRender = createVNode("span", {
        "class": "".concat(prefixCls2, "-close-x")
      }, [renderHelper(_closeIcon, {}, createVNode(CloseOutlined, {
        "class": "".concat(prefixCls2, "-close-icon")
      }, null))]);
      return closeIconToRender;
    },
    maxCount,
    hasTransitionName: true
  }, function(notification2) {
    notificationInstance[cacheKey] = notification2;
    callback(notification2);
  });
}
var typeToIcon = {
  success: CheckCircleOutlined,
  info: InfoCircleOutlined,
  error: CloseCircleOutlined,
  warning: ExclamationCircleOutlined
};
function notice(args) {
  var icon = args.icon, type = args.type, description = args.description, message2 = args.message, btn = args.btn;
  var duration = args.duration === void 0 ? defaultDuration : args.duration;
  getNotificationInstance(args, function(notification2) {
    notification2.notice({
      content: function content(_ref3) {
        var outerPrefixCls = _ref3.prefixCls;
        var prefixCls = "".concat(outerPrefixCls, "-notice");
        var iconNode = null;
        if (icon) {
          iconNode = function iconNode2() {
            return createVNode("span", {
              "class": "".concat(prefixCls, "-icon")
            }, [renderHelper(icon)]);
          };
        } else if (type) {
          var Icon = typeToIcon[type];
          iconNode = function iconNode2() {
            return createVNode(Icon, {
              "class": "".concat(prefixCls, "-icon ").concat(prefixCls, "-icon-").concat(type)
            }, null);
          };
        }
        return createVNode("div", {
          "class": iconNode ? "".concat(prefixCls, "-with-icon") : ""
        }, [iconNode && iconNode(), createVNode("div", {
          "class": "".concat(prefixCls, "-message")
        }, [!description && iconNode ? createVNode("span", {
          "class": "".concat(prefixCls, "-message-single-line-auto-margin")
        }, null) : null, renderHelper(message2)]), createVNode("div", {
          "class": "".concat(prefixCls, "-description")
        }, [renderHelper(description)]), btn ? createVNode("span", {
          "class": "".concat(prefixCls, "-btn")
        }, [renderHelper(btn)]) : null]);
      },
      duration,
      closable: true,
      onClose: args.onClose,
      onClick: args.onClick,
      key: args.key,
      style: args.style || {},
      class: args.class
    });
  });
}
var api = {
  open: notice,
  close: function close(key2) {
    Object.keys(notificationInstance).forEach(function(cacheKey) {
      return Promise.resolve(notificationInstance[cacheKey]).then(function(instance) {
        instance.removeNotice(key2);
      });
    });
  },
  config: setNotificationConfig,
  destroy: function destroy2() {
    Object.keys(notificationInstance).forEach(function(cacheKey) {
      Promise.resolve(notificationInstance[cacheKey]).then(function(instance) {
        instance.destroy();
      });
      delete notificationInstance[cacheKey];
    });
  }
};
var iconTypes = ["success", "info", "warning", "error"];
iconTypes.forEach(function(type) {
  api[type] = function(args) {
    return api.open(_objectSpread(_objectSpread({}, args), {}, {
      type
    }));
  };
});
api.warn = api.warning;
const notification = api;
function canUseDom() {
  return false;
}
const devWarning = function(valid, component, message2) {
  warningOnce(valid, "[ant-design-vue: ".concat(component, "] ").concat(message2));
};
function registerTheme(globalPrefixCls, theme) {
  var variables = {};
  var formatColor = function formatColor2(color, updater) {
    var clone = color.clone();
    clone = (updater === null || updater === void 0 ? void 0 : updater(clone)) || clone;
    return clone.toRgbString();
  };
  var fillColor = function fillColor2(colorVal, type) {
    var baseColor = new TinyColor(colorVal);
    var colorPalettes = generate(baseColor.toRgbString());
    variables["".concat(type, "-color")] = formatColor(baseColor);
    variables["".concat(type, "-color-disabled")] = colorPalettes[1];
    variables["".concat(type, "-color-hover")] = colorPalettes[4];
    variables["".concat(type, "-color-active")] = colorPalettes[6];
    variables["".concat(type, "-color-outline")] = baseColor.clone().setAlpha(0.2).toRgbString();
    variables["".concat(type, "-color-deprecated-bg")] = colorPalettes[1];
    variables["".concat(type, "-color-deprecated-border")] = colorPalettes[3];
  };
  if (theme.primaryColor) {
    fillColor(theme.primaryColor, "primary");
    var primaryColor = new TinyColor(theme.primaryColor);
    var primaryColors = generate(primaryColor.toRgbString());
    primaryColors.forEach(function(color, index2) {
      variables["primary-".concat(index2 + 1)] = color;
    });
    variables["primary-color-deprecated-l-35"] = formatColor(primaryColor, function(c) {
      return c.lighten(35);
    });
    variables["primary-color-deprecated-l-20"] = formatColor(primaryColor, function(c) {
      return c.lighten(20);
    });
    variables["primary-color-deprecated-t-20"] = formatColor(primaryColor, function(c) {
      return c.tint(20);
    });
    variables["primary-color-deprecated-t-50"] = formatColor(primaryColor, function(c) {
      return c.tint(50);
    });
    variables["primary-color-deprecated-f-12"] = formatColor(primaryColor, function(c) {
      return c.setAlpha(c.getAlpha() * 0.12);
    });
    var primaryActiveColor = new TinyColor(primaryColors[0]);
    variables["primary-color-active-deprecated-f-30"] = formatColor(primaryActiveColor, function(c) {
      return c.setAlpha(c.getAlpha() * 0.3);
    });
    variables["primary-color-active-deprecated-d-02"] = formatColor(primaryActiveColor, function(c) {
      return c.darken(2);
    });
  }
  if (theme.successColor) {
    fillColor(theme.successColor, "success");
  }
  if (theme.warningColor) {
    fillColor(theme.warningColor, "warning");
  }
  if (theme.errorColor) {
    fillColor(theme.errorColor, "error");
  }
  if (theme.infoColor) {
    fillColor(theme.infoColor, "info");
  }
  Object.keys(variables).map(function(key2) {
    return "--".concat(globalPrefixCls, "-").concat(key2, ": ").concat(variables[key2], ";");
  });
  {
    devWarning(false, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
  }
}
var GlobalFormContextKey = Symbol("GlobalFormContextKey");
var useProvideGlobalForm = function useProvideGlobalForm2(state) {
  provide(GlobalFormContextKey, state);
};
var useInjectGlobalForm = function useInjectGlobalForm2() {
  return inject(GlobalFormContextKey, {
    validateMessages: computed(function() {
      return void 0;
    })
  });
};
var configProviderProps = function configProviderProps2() {
  return {
    getTargetContainer: {
      type: Function
    },
    getPopupContainer: {
      type: Function
    },
    prefixCls: String,
    getPrefixCls: {
      type: Function
    },
    renderEmpty: {
      type: Function
    },
    transformCellText: {
      type: Function
    },
    csp: {
      type: Object,
      default: void 0
    },
    input: {
      type: Object
    },
    autoInsertSpaceInButton: {
      type: Boolean,
      default: void 0
    },
    locale: {
      type: Object,
      default: void 0
    },
    pageHeader: {
      type: Object
    },
    componentSize: {
      type: String
    },
    direction: {
      type: String
    },
    space: {
      type: Object
    },
    virtual: {
      type: Boolean,
      default: void 0
    },
    dropdownMatchSelectWidth: {
      type: [Number, Boolean],
      default: true
    },
    form: {
      type: Object,
      default: void 0
    },
    notUpdateGlobalConfig: Boolean
  };
};
var defaultPrefixCls = "ant";
function getGlobalPrefixCls() {
  return globalConfigForApi.prefixCls || defaultPrefixCls;
}
var globalConfigByCom = reactive({});
var globalConfigBySet = reactive({});
var globalConfigForApi = reactive({});
watchEffect(function() {
  _extends(globalConfigForApi, globalConfigByCom, globalConfigBySet);
  globalConfigForApi.prefixCls = getGlobalPrefixCls();
  globalConfigForApi.getPrefixCls = function(suffixCls, customizePrefixCls) {
    if (customizePrefixCls)
      return customizePrefixCls;
    return suffixCls ? "".concat(globalConfigForApi.prefixCls, "-").concat(suffixCls) : globalConfigForApi.prefixCls;
  };
  globalConfigForApi.getRootPrefixCls = function(rootPrefixCls, customizePrefixCls) {
    if (rootPrefixCls) {
      return rootPrefixCls;
    }
    if (globalConfigForApi.prefixCls) {
      return globalConfigForApi.prefixCls;
    }
    if (customizePrefixCls && customizePrefixCls.includes("-")) {
      return customizePrefixCls.replace(/^(.*)-[^-]*$/, "$1");
    }
    return getGlobalPrefixCls();
  };
});
var stopWatchEffect;
var setGlobalConfig = function setGlobalConfig2(params) {
  if (stopWatchEffect) {
    stopWatchEffect();
  }
  stopWatchEffect = watchEffect(function() {
    _extends(globalConfigBySet, reactive(params));
  });
  if (params.theme) {
    registerTheme(getGlobalPrefixCls(), params.theme);
  }
};
var globalConfig = function globalConfig2() {
  return {
    getPrefixCls: function getPrefixCls2(suffixCls, customizePrefixCls) {
      if (customizePrefixCls)
        return customizePrefixCls;
      return suffixCls ? "".concat(getGlobalPrefixCls(), "-").concat(suffixCls) : getGlobalPrefixCls();
    },
    getRootPrefixCls: function getRootPrefixCls(rootPrefixCls, customizePrefixCls) {
      if (rootPrefixCls) {
        return rootPrefixCls;
      }
      if (globalConfigForApi.prefixCls) {
        return globalConfigForApi.prefixCls;
      }
      if (customizePrefixCls && customizePrefixCls.includes("-")) {
        return customizePrefixCls.replace(/^(.*)-[^-]*$/, "$1");
      }
      return getGlobalPrefixCls();
    }
  };
};
var ConfigProvider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AConfigProvider",
  inheritAttrs: false,
  props: configProviderProps(),
  setup: function setup6(props2, _ref) {
    var slots = _ref.slots;
    var getPrefixCls2 = function getPrefixCls3(suffixCls, customizePrefixCls) {
      var _props$prefixCls = props2.prefixCls, prefixCls = _props$prefixCls === void 0 ? "ant" : _props$prefixCls;
      if (customizePrefixCls)
        return customizePrefixCls;
      return suffixCls ? "".concat(prefixCls, "-").concat(suffixCls) : prefixCls;
    };
    var renderEmptyComponent = function renderEmptyComponent2(name2) {
      var renderEmpty$1 = props2.renderEmpty || slots.renderEmpty || renderEmpty;
      return renderEmpty$1(name2);
    };
    var getPrefixClsWrapper = function getPrefixClsWrapper2(suffixCls, customizePrefixCls) {
      var prefixCls = props2.prefixCls;
      if (customizePrefixCls)
        return customizePrefixCls;
      var mergedPrefixCls = prefixCls || getPrefixCls2("");
      return suffixCls ? "".concat(mergedPrefixCls, "-").concat(suffixCls) : mergedPrefixCls;
    };
    var configProvider = reactive(_objectSpread(_objectSpread({}, props2), {}, {
      getPrefixCls: getPrefixClsWrapper,
      renderEmpty: renderEmptyComponent
    }));
    Object.keys(props2).forEach(function(key2) {
      watch(function() {
        return props2[key2];
      }, function() {
        configProvider[key2] = props2[key2];
      });
    });
    if (!props2.notUpdateGlobalConfig) {
      _extends(globalConfigByCom, configProvider);
      watch(configProvider, function() {
        _extends(globalConfigByCom, configProvider);
      });
    }
    var validateMessagesRef = computed(function() {
      var validateMessages = {};
      if (props2.locale) {
        var _props$locale$Form, _defaultLocale$Form;
        validateMessages = ((_props$locale$Form = props2.locale.Form) === null || _props$locale$Form === void 0 ? void 0 : _props$locale$Form.defaultValidateMessages) || ((_defaultLocale$Form = defaultLocale.Form) === null || _defaultLocale$Form === void 0 ? void 0 : _defaultLocale$Form.defaultValidateMessages) || {};
      }
      if (props2.form && props2.form.validateMessages) {
        validateMessages = _objectSpread(_objectSpread({}, validateMessages), props2.form.validateMessages);
      }
      return validateMessages;
    });
    useProvideGlobalForm({
      validateMessages: validateMessagesRef
    });
    provide("configProvider", configProvider);
    var renderProvider = function renderProvider2(legacyLocale) {
      var _slots$default;
      return createVNode(LocaleProvider$1, {
        "locale": props2.locale || legacyLocale,
        "ANT_MARK__": ANT_MARK
      }, {
        default: function _default4() {
          return [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)];
        }
      });
    };
    watchEffect(function() {
      if (props2.direction) {
        message.config({
          rtl: props2.direction === "rtl"
        });
        notification.config({
          rtl: props2.direction === "rtl"
        });
      }
    });
    return function() {
      return createVNode(LocaleReceiver, {
        "children": function children(_, __, legacyLocale) {
          return renderProvider(legacyLocale);
        }
      }, null);
    };
  }
});
var defaultConfigProvider = reactive({
  getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
    if (customizePrefixCls)
      return customizePrefixCls;
    return suffixCls ? "ant-".concat(suffixCls) : "ant";
  },
  renderEmpty,
  direction: "ltr"
});
ConfigProvider.config = setGlobalConfig;
ConfigProvider.install = function(app) {
  app.component(ConfigProvider.name, ConfigProvider);
};
const useConfigInject = function(name2, props2) {
  var configProvider = inject("configProvider", defaultConfigProvider);
  var prefixCls = computed(function() {
    return configProvider.getPrefixCls(name2, props2.prefixCls);
  });
  var direction = computed(function() {
    var _props$direction;
    return (_props$direction = props2.direction) !== null && _props$direction !== void 0 ? _props$direction : configProvider.direction;
  });
  var rootPrefixCls = computed(function() {
    return configProvider.getPrefixCls();
  });
  var autoInsertSpaceInButton = computed(function() {
    return configProvider.autoInsertSpaceInButton;
  });
  var renderEmpty2 = computed(function() {
    return configProvider.renderEmpty;
  });
  var space = computed(function() {
    return configProvider.space;
  });
  var pageHeader = computed(function() {
    return configProvider.pageHeader;
  });
  var form = computed(function() {
    return configProvider.form;
  });
  var getTargetContainer = computed(function() {
    return props2.getTargetContainer || configProvider.getTargetContainer;
  });
  var getPopupContainer = computed(function() {
    return props2.getPopupContainer || configProvider.getPopupContainer;
  });
  var dropdownMatchSelectWidth = computed(function() {
    var _props$dropdownMatchS;
    return (_props$dropdownMatchS = props2.dropdownMatchSelectWidth) !== null && _props$dropdownMatchS !== void 0 ? _props$dropdownMatchS : configProvider.dropdownMatchSelectWidth;
  });
  var virtual = computed(function() {
    return (props2.virtual === void 0 ? configProvider.virtual !== false : props2.virtual !== false) && dropdownMatchSelectWidth.value !== false;
  });
  var size = computed(function() {
    return props2.size || configProvider.componentSize;
  });
  var autocomplete = computed(function() {
    var _configProvider$input;
    return props2.autocomplete || ((_configProvider$input = configProvider.input) === null || _configProvider$input === void 0 ? void 0 : _configProvider$input.autocomplete);
  });
  var csp = computed(function() {
    return configProvider.csp;
  });
  return {
    configProvider,
    prefixCls,
    direction,
    size,
    getTargetContainer,
    getPopupContainer,
    space,
    pageHeader,
    form,
    autoInsertSpaceInButton,
    renderEmpty: renderEmpty2,
    virtual,
    dropdownMatchSelectWidth,
    rootPrefixCls,
    getPrefixCls: configProvider.getPrefixCls,
    autocomplete,
    csp
  };
};
function omit$2(obj, fields) {
  var shallowCopy = _extends({}, obj);
  for (var i = 0; i < fields.length; i += 1) {
    var key2 = fields[i];
    delete shallowCopy[key2];
  }
  return shallowCopy;
}
function getKey(data3, index2) {
  var key2 = data3.key;
  var value;
  if ("value" in data3) {
    value = data3.value;
  }
  if (key2 !== null && key2 !== void 0) {
    return key2;
  }
  if (value !== void 0) {
    return value;
  }
  return "rc-index-key-".concat(index2);
}
function fillFieldNames(fieldNames, childrenAsData) {
  var _ref = fieldNames || {}, label = _ref.label, value = _ref.value, options = _ref.options;
  return {
    label: label || (childrenAsData ? "children" : "label"),
    value: value || "value",
    options: options || "options"
  };
}
function flattenOptions(options) {
  var _ref2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, fieldNames = _ref2.fieldNames, childrenAsData = _ref2.childrenAsData;
  var flattenList = [];
  var _fillFieldNames = fillFieldNames(fieldNames, false), fieldLabel = _fillFieldNames.label, fieldValue = _fillFieldNames.value, fieldOptions = _fillFieldNames.options;
  function dig(list, isGroupOption) {
    list.forEach(function(data3) {
      var label = data3[fieldLabel];
      if (isGroupOption || !(fieldOptions in data3)) {
        var value = data3[fieldValue];
        flattenList.push({
          key: getKey(data3, flattenList.length),
          groupOption: isGroupOption,
          data: data3,
          label,
          value
        });
      } else {
        var grpLabel = label;
        if (grpLabel === void 0 && childrenAsData) {
          grpLabel = data3.label;
        }
        flattenList.push({
          key: getKey(data3, flattenList.length),
          group: true,
          data: data3,
          label: grpLabel
        });
        dig(data3[fieldOptions], true);
      }
    });
  }
  dig(options, false);
  return flattenList;
}
function injectPropsWithOption(option) {
  var newOption = _objectSpread({}, option);
  if (!("props" in newOption)) {
    Object.defineProperty(newOption, "props", {
      get: function get2() {
        warning$1(false, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`.");
        return newOption;
      }
    });
  }
  return newOption;
}
function getSeparatedContent(text, tokens) {
  if (!tokens || !tokens.length) {
    return null;
  }
  var match2 = false;
  function separate(str, _ref3) {
    var _ref4 = _toArray(_ref3), token = _ref4[0], restTokens = _ref4.slice(1);
    if (!token) {
      return [str];
    }
    var list2 = str.split(token);
    match2 = match2 || list2.length > 1;
    return list2.reduce(function(prevList, unitStr) {
      return [].concat(_toConsumableArray(prevList), _toConsumableArray(separate(unitStr, restTokens)));
    }, []).filter(function(unit) {
      return unit;
    });
  }
  var list = separate(text, tokens);
  return match2 ? list : null;
}
function contains(root2, n) {
  if (!root2) {
    return false;
  }
  return root2.contains(n);
}
function getRequestAnimationFrame() {
  {
    return function() {
    };
  }
}
function cancelRequestAnimationFrame(id) {
  {
    return null;
  }
}
var raf2 = getRequestAnimationFrame();
var cancelAnimationTimeout = function cancelAnimationTimeout2(frame) {
  return cancelRequestAnimationFrame(frame.id);
};
var requestAnimationTimeout = function requestAnimationTimeout2(callback) {
  var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var start = Date.now();
  function timeout() {
    if (Date.now() - start >= delay) {
      callback.call();
    } else {
      frame.id = raf2(timeout);
    }
  }
  var frame = {
    id: raf2(timeout)
  };
  return frame;
};
var innerProps = {
  visible: Boolean,
  prefixCls: String,
  zIndex: Number,
  destroyPopupOnHide: Boolean,
  forceRender: Boolean,
  animation: [String, Object],
  transitionName: String,
  stretch: {
    type: String
  },
  align: {
    type: Object
  },
  point: {
    type: Object
  },
  getRootDomNode: {
    type: Function
  },
  getClassNameFromAlign: {
    type: Function
  },
  onMouseenter: {
    type: Function
  },
  onMouseleave: {
    type: Function
  },
  onMousedown: {
    type: Function
  },
  onTouchstart: {
    type: Function
  }
};
var mobileProps = _objectSpread(_objectSpread({}, innerProps), {}, {
  mobile: {
    type: Object
  }
});
var popupProps = _objectSpread(_objectSpread({}, innerProps), {}, {
  mask: Boolean,
  mobile: {
    type: Object
  },
  maskAnimation: String,
  maskTransitionName: String
});
function getMotion(_ref) {
  var prefixCls = _ref.prefixCls, animation = _ref.animation, transitionName2 = _ref.transitionName;
  if (animation) {
    return {
      name: "".concat(prefixCls, "-").concat(animation)
    };
  }
  if (transitionName2) {
    return {
      name: transitionName2
    };
  }
  return {};
}
function Mask$1(props2) {
  var prefixCls = props2.prefixCls, visible = props2.visible, zIndex = props2.zIndex, mask = props2.mask, maskAnimation = props2.maskAnimation, maskTransitionName = props2.maskTransitionName;
  if (!mask) {
    return null;
  }
  var motion = {};
  if (maskTransitionName || maskAnimation) {
    motion = getMotion({
      prefixCls,
      transitionName: maskTransitionName,
      animation: maskAnimation
    });
  }
  return createVNode(Transition, _objectSpread({
    "appear": true
  }, motion), {
    default: function _default4() {
      return [withDirectives(createVNode("div", {
        "style": {
          zIndex
        },
        "class": "".concat(prefixCls, "-mask")
      }, null), [[resolveDirective("if"), visible]])];
    }
  });
}
Mask$1.displayName = "Mask";
const MobilePopupInner = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "MobilePopupInner",
  inheritAttrs: false,
  props: mobileProps,
  emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
  setup: function setup7(props2, _ref) {
    var expose = _ref.expose, slots = _ref.slots;
    var elementRef = ref();
    expose({
      forceAlign: function forceAlign() {
      },
      getElement: function getElement2() {
        return elementRef.value;
      }
    });
    return function() {
      var _slots$default;
      var zIndex = props2.zIndex, visible = props2.visible, prefixCls = props2.prefixCls, _props$mobile = props2.mobile;
      _props$mobile = _props$mobile === void 0 ? {} : _props$mobile;
      var popupClassName = _props$mobile.popupClassName, popupStyle = _props$mobile.popupStyle, _props$mobile$popupMo = _props$mobile.popupMotion, popupMotion = _props$mobile$popupMo === void 0 ? {} : _props$mobile$popupMo, popupRender = _props$mobile.popupRender;
      var mergedStyle = _objectSpread({
        zIndex
      }, popupStyle);
      var childNode = flattenChildren((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      if (childNode.length > 1) {
        childNode = createVNode("div", {
          "class": "".concat(prefixCls, "-content")
        }, [childNode]);
      }
      if (popupRender) {
        childNode = popupRender(childNode);
      }
      var mergedClassName = classNames(prefixCls, popupClassName);
      return createVNode(Transition, _objectSpread({
        "ref": elementRef
      }, popupMotion), {
        default: function _default4() {
          return [visible ? createVNode("div", {
            "class": mergedClassName,
            "style": mergedStyle
          }, [childNode]) : null];
        }
      });
    };
  }
});
const useVisibleStatus = function(visible, doMeasure) {
  var status = ref(null);
  var rafRef = ref();
  var destroyRef = ref(false);
  function setStatus(nextStatus) {
    if (!destroyRef.value) {
      status.value = nextStatus;
    }
  }
  function cancelRaf() {
    wrapperRaf.cancel(rafRef.value);
  }
  function goNextStatus(callback) {
    cancelRaf();
    rafRef.value = wrapperRaf(function() {
      var newStatus = status.value;
      switch (status.value) {
        case "align":
          newStatus = "motion";
          break;
        case "motion":
          newStatus = "stable";
          break;
      }
      setStatus(newStatus);
      callback === null || callback === void 0 ? void 0 : callback();
    });
  }
  watch(visible, function() {
    setStatus("measure");
  }, {
    immediate: true,
    flush: "post"
  });
  return [status, goNextStatus];
};
const useStretchStyle = function(stretch) {
  var targetSize = ref({
    width: 0,
    height: 0
  });
  function measureStretch(element) {
    targetSize.value = {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }
  var style = computed(function() {
    var sizeStyle = {};
    if (stretch.value) {
      var _targetSize$value = targetSize.value, width = _targetSize$value.width, height = _targetSize$value.height;
      if (stretch.value.indexOf("height") !== -1 && height) {
        sizeStyle.height = "".concat(height, "px");
      } else if (stretch.value.indexOf("minHeight") !== -1 && height) {
        sizeStyle.minHeight = "".concat(height, "px");
      }
      if (stretch.value.indexOf("width") !== -1 && width) {
        sizeStyle.width = "".concat(width, "px");
      } else if (stretch.value.indexOf("minWidth") !== -1 && width) {
        sizeStyle.minWidth = "".concat(width, "px");
      }
    }
    return sizeStyle;
  });
  return [style, measureStretch];
};
function cloneElement(vnode) {
  var nodeProps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var override = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  var mergeRef = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  var ele = vnode;
  if (Array.isArray(vnode)) {
    ele = filterEmpty(vnode)[0];
  }
  if (!ele) {
    return null;
  }
  var node = cloneVNode(ele, nodeProps, mergeRef);
  node.props = override ? _objectSpread(_objectSpread({}, node.props), nodeProps) : node.props;
  warning(_typeof(node.props.class) !== "object", "class must be string");
  return node;
}
const isVisible = function(element) {
  if (!element) {
    return false;
  }
  if (element.offsetParent) {
    return true;
  }
  if (element.getBBox) {
    var box = element.getBBox();
    if (box.width || box.height) {
      return true;
    }
  }
  if (element.getBoundingClientRect) {
    var _box = element.getBoundingClientRect();
    if (_box.width || _box.height) {
      return true;
    }
  }
  return false;
};
function isSamePoint(prev2, next2) {
  if (prev2 === next2)
    return true;
  if (!prev2 || !next2)
    return false;
  if ("pageX" in next2 && "pageY" in next2) {
    return prev2.pageX === next2.pageX && prev2.pageY === next2.pageY;
  }
  if ("clientX" in next2 && "clientY" in next2) {
    return prev2.clientX === next2.clientX && prev2.clientY === next2.clientY;
  }
  return false;
}
function restoreFocus(activeElement, container) {
  if (activeElement !== document.activeElement && contains(container, activeElement) && typeof activeElement.focus === "function") {
    activeElement.focus();
  }
}
function monitorResize(element, callback) {
  var prevWidth = null;
  var prevHeight = null;
  function onResize(_ref) {
    var _ref2 = _slicedToArray(_ref, 1), target = _ref2[0].target;
    if (!document.documentElement.contains(target))
      return;
    var _target$getBoundingCl = target.getBoundingClientRect(), width = _target$getBoundingCl.width, height = _target$getBoundingCl.height;
    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);
    if (prevWidth !== fixedWidth || prevHeight !== fixedHeight) {
      Promise.resolve().then(function() {
        callback({
          width: fixedWidth,
          height: fixedHeight
        });
      });
    }
    prevWidth = fixedWidth;
    prevHeight = fixedHeight;
  }
  var resizeObserver = new ResizeObserver$1(onResize);
  if (element) {
    resizeObserver.observe(element);
  }
  return function() {
    resizeObserver.disconnect();
  };
}
const useBuffer = function(callback, buffer) {
  var called = false;
  var timeout = null;
  function cancelTrigger() {
    clearTimeout(timeout);
  }
  function trigger2(force) {
    if (!called || force === true) {
      if (callback() === false) {
        return;
      }
      called = true;
      cancelTrigger();
      timeout = setTimeout(function() {
        called = false;
      }, buffer.value);
    } else {
      cancelTrigger();
      timeout = setTimeout(function() {
        called = false;
        trigger2();
      }, buffer.value);
    }
  }
  return [trigger2, function() {
    called = false;
    cancelTrigger();
  }];
};
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
function assocIndexOf(array, key2) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key2)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key2) {
  var data3 = this.__data__, index2 = assocIndexOf(data3, key2);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data3.length - 1;
  if (index2 == lastIndex) {
    data3.pop();
  } else {
    splice.call(data3, index2, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key2) {
  var data3 = this.__data__, index2 = assocIndexOf(data3, key2);
  return index2 < 0 ? void 0 : data3[index2][1];
}
function listCacheHas(key2) {
  return assocIndexOf(this.__data__, key2) > -1;
}
function listCacheSet(key2, value) {
  var data3 = this.__data__, index2 = assocIndexOf(data3, key2);
  if (index2 < 0) {
    ++this.size;
    data3.push([key2, value]);
  } else {
    data3[index2][1] = value;
  }
  return this;
}
function ListCache(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry2 = entries[index2];
    this.set(entry2[0], entry2[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key2) {
  var data3 = this.__data__, result = data3["delete"](key2);
  this.size = data3.size;
  return result;
}
function stackGet(key2) {
  return this.__data__.get(key2);
}
function stackHas(key2) {
  return this.__data__.has(key2);
}
function isObject$1(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction2(value) {
  if (!isObject$1(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root$1["__core-js_shared__"];
const coreJsData$1 = coreJsData;
var maskSrcKey = function() {
  var uid2 = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
  return uid2 ? "Symbol(src)_1." + uid2 : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$c = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$a = objectProto$c.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString.call(hasOwnProperty$a).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject$1(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction2(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getValue$1(object, key2) {
  return object == null ? void 0 : object[key2];
}
function getNative(object, key2) {
  var value = getValue$1(object, key2);
  return baseIsNative(value) ? value : void 0;
}
var Map$1 = getNative(root$1, "Map");
const Map$2 = Map$1;
var nativeCreate = getNative(Object, "create");
const nativeCreate$1 = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}
function hashDelete(key2) {
  var result = this.has(key2) && delete this.__data__[key2];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$b = Object.prototype;
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
function hashGet(key2) {
  var data3 = this.__data__;
  if (nativeCreate$1) {
    var result = data3[key2];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$9.call(data3, key2) ? data3[key2] : void 0;
}
var objectProto$a = Object.prototype;
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
function hashHas(key2) {
  var data3 = this.__data__;
  return nativeCreate$1 ? data3[key2] !== void 0 : hasOwnProperty$8.call(data3, key2);
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet(key2, value) {
  var data3 = this.__data__;
  this.size += this.has(key2) ? 0 : 1;
  data3[key2] = nativeCreate$1 && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
function Hash(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry2 = entries[index2];
    this.set(entry2[0], entry2[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$2 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map, key2) {
  var data3 = map.__data__;
  return isKeyable(key2) ? data3[typeof key2 == "string" ? "string" : "hash"] : data3.map;
}
function mapCacheDelete(key2) {
  var result = getMapData(this, key2)["delete"](key2);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key2) {
  return getMapData(this, key2).get(key2);
}
function mapCacheHas(key2) {
  return getMapData(this, key2).has(key2);
}
function mapCacheSet(key2, value) {
  var data3 = getMapData(this, key2), size = data3.size;
  data3.set(key2, value);
  this.size += data3.size == size ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry2 = entries[index2];
    this.set(entry2[0], entry2[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var LARGE_ARRAY_SIZE$1 = 200;
function stackSet(key2, value) {
  var data3 = this.__data__;
  if (data3 instanceof ListCache) {
    var pairs = data3.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE$1 - 1) {
      pairs.push([key2, value]);
      this.size = ++data3.size;
      return this;
    }
    data3 = this.__data__ = new MapCache(pairs);
  }
  data3.set(key2, value);
  this.size = data3.size;
  return this;
}
function Stack(entries) {
  var data3 = this.__data__ = new ListCache(entries);
  this.size = data3.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
function SetCache(values) {
  var index2 = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index2 < length) {
    this.add(values[index2]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (predicate(array[index2], index2, array)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache, key2) {
  return cache.has(key2);
}
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index2 < arrLength) {
    var arrValue = array[index2], othValue = other[index2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
var Uint8Array = root$1.Uint8Array;
const Uint8Array$1 = Uint8Array;
function mapToArray(map) {
  var index2 = -1, result = Array(map.size);
  map.forEach(function(value, key2) {
    result[++index2] = [key2, value];
  });
  return result;
}
function setToArray(set2) {
  var index2 = -1, result = Array(set2.size);
  set2.forEach(function(value) {
    result[++index2] = value;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag$3 = "[object Boolean]", dateTag$3 = "[object Date]", errorTag$2 = "[object Error]", mapTag$5 = "[object Map]", numberTag$3 = "[object Number]", regexpTag$3 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$3 = "[object String]", symbolTag$3 = "[object Symbol]";
var arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]";
var symbolProto$2 = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$4:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag$3:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag$3:
    case dateTag$3:
    case numberTag$3:
      return eq(+object, +other);
    case errorTag$2:
      return object.name == other.name && object.message == other.message;
    case regexpTag$3:
    case stringTag$3:
      return object == other + "";
    case mapTag$5:
      var convert = mapToArray;
    case setTag$5:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag$3:
      if (symbolValueOf$1) {
        return symbolValueOf$1.call(object) == symbolValueOf$1.call(other);
      }
  }
  return false;
}
function arrayPush(array, values) {
  var index2 = -1, length = values.length, offset2 = array.length;
  while (++index2 < length) {
    array[offset2 + index2] = values[index2];
  }
  return array;
}
var isArray = Array.isArray;
const isArray$1 = isArray;
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
}
function arrayFilter(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index2 < length) {
    var value = array[index2];
    if (predicate(value, index2, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$9 = Object.prototype;
var propertyIsEnumerable$1 = objectProto$9.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols$1 ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};
const getSymbols$1 = getSymbols;
function baseTimes(n, iteratee) {
  var index2 = -1, result = Array(n);
  while (++index2 < n) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var argsTag$3 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$3;
}
var objectProto$8 = Object.prototype;
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
var propertyIsEnumerable = objectProto$8.propertyIsEnumerable;
var isArguments = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$7.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
const isArguments$1 = isArguments;
function stubFalse() {
  return false;
}
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$1 = moduleExports$2 ? root$1.Buffer : void 0;
var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
const isBuffer$1 = isBuffer;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var argsTag$2 = "[object Arguments]", arrayTag$2 = "[object Array]", boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$1 = "[object Error]", funcTag$1 = "[object Function]", mapTag$4 = "[object Map]", numberTag$2 = "[object Number]", objectTag$3 = "[object Object]", regexpTag$2 = "[object RegExp]", setTag$4 = "[object Set]", stringTag$2 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] = typedArrayTags[arrayBufferTag$2] = typedArrayTags[boolTag$2] = typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$2] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$4] = typedArrayTags[numberTag$2] = typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$2] = typedArrayTags[setTag$4] = typedArrayTags[stringTag$2] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var freeProcess = moduleExports$1 && freeGlobal$1.process;
var nodeUtil = function() {
  try {
    var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
const nodeUtil$1 = nodeUtil;
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
const isTypedArray$1 = isTypedArray;
var objectProto$7 = Object.prototype;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray$1(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key2 in value) {
    if ((inherited || hasOwnProperty$6.call(value, key2)) && !(skipIndexes && (key2 == "length" || isBuff && (key2 == "offset" || key2 == "parent") || isType && (key2 == "buffer" || key2 == "byteLength" || key2 == "byteOffset") || isIndex(key2, length)))) {
      result.push(key2);
    }
  }
  return result;
}
var objectProto$6 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto2 = typeof Ctor == "function" && Ctor.prototype || objectProto$6;
  return value === proto2;
}
var nativeKeys = overArg(Object.keys, Object);
const nativeKeys$1 = nativeKeys;
var objectProto$5 = Object.prototype;
var hasOwnProperty$5 = objectProto$5.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys$1(object);
  }
  var result = [];
  for (var key2 in Object(object)) {
    if (hasOwnProperty$5.call(object, key2) && key2 != "constructor") {
      result.push(key2);
    }
  }
  return result;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction2(value);
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols$1);
}
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$4 = Object.prototype;
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index2 = objLength;
  while (index2--) {
    var key2 = objProps[index2];
    if (!(isPartial ? key2 in other : hasOwnProperty$4.call(other, key2))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index2 < objLength) {
    key2 = objProps[index2];
    var objValue = object[key2], othValue = other[key2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key2, other, object, stack) : customizer(objValue, othValue, key2, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key2 == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var DataView = getNative(root$1, "DataView");
const DataView$1 = DataView;
var Promise$1 = getNative(root$1, "Promise");
const Promise$2 = Promise$1;
var Set$1 = getNative(root$1, "Set");
const Set$2 = Set$1;
var WeakMap = getNative(root$1, "WeakMap");
const WeakMap$1 = WeakMap;
var mapTag$3 = "[object Map]", objectTag$2 = "[object Object]", promiseTag = "[object Promise]", setTag$3 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$2 = "[object DataView]";
var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$2), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$2), weakMapCtorString = toSource(WeakMap$1);
var getTag = baseGetTag;
if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$2 || Map$2 && getTag(new Map$2()) != mapTag$3 || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$2 && getTag(new Set$2()) != setTag$3 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag$1) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$2 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$2;
        case mapCtorString:
          return mapTag$3;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$3;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
const getTag$1 = getTag;
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", objectTag$1 = "[object Object]";
var objectProto$3 = Object.prototype;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$1(object), othIsArr = isArray$1(other), objTag = objIsArr ? arrayTag$1 : getTag$1(object), othTag = othIsArr ? arrayTag$1 : getTag$1(other);
  objTag = objTag == argsTag$1 ? objectTag$1 : objTag;
  othTag = othTag == argsTag$1 ? objectTag$1 : othTag;
  var objIsObj = objTag == objectTag$1, othIsObj = othTag == objectTag$1, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$1(object)) {
    if (!isBuffer$1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray$1(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty$3.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$3.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
function isEqual(value, other) {
  return baseIsEqual(value, other);
}
var alignProps = {
  align: Object,
  target: [Object, Function],
  onAlign: Function,
  monitorBufferTime: Number,
  monitorWindowResize: Boolean,
  disabled: Boolean
};
function getElement(func) {
  if (typeof func !== "function")
    return null;
  return func();
}
function getPoint(point) {
  if (_typeof(point) !== "object" || !point)
    return null;
  return point;
}
const Align = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Align",
  props: alignProps,
  emits: ["align"],
  setup: function setup8(props2, _ref) {
    var expose = _ref.expose, slots = _ref.slots;
    var cacheRef = ref({});
    var nodeRef = ref();
    var _useBuffer = useBuffer(function() {
      var latestDisabled = props2.disabled, latestTarget = props2.target, latestAlign = props2.align, latestOnAlign = props2.onAlign;
      if (!latestDisabled && latestTarget && nodeRef.value) {
        var source = nodeRef.value;
        var result;
        var element = getElement(latestTarget);
        var point = getPoint(latestTarget);
        cacheRef.value.element = element;
        cacheRef.value.point = point;
        cacheRef.value.align = latestAlign;
        var _document = document, activeElement = _document.activeElement;
        if (element && isVisible(element)) {
          result = alignElement(source, element, latestAlign);
        } else if (point) {
          result = alignPoint(source, point, latestAlign);
        }
        restoreFocus(activeElement, source);
        if (latestOnAlign && result) {
          latestOnAlign(source, result);
        }
        return true;
      }
      return false;
    }, computed(function() {
      return props2.monitorBufferTime;
    })), _useBuffer2 = _slicedToArray(_useBuffer, 2), _forceAlign = _useBuffer2[0], cancelForceAlign = _useBuffer2[1];
    var resizeMonitor = ref({
      cancel: function cancel() {
      }
    });
    var sourceResizeMonitor = ref({
      cancel: function cancel() {
      }
    });
    var goAlign = function goAlign2() {
      var target = props2.target;
      var element = getElement(target);
      var point = getPoint(target);
      if (nodeRef.value !== sourceResizeMonitor.value.element) {
        sourceResizeMonitor.value.cancel();
        sourceResizeMonitor.value.element = nodeRef.value;
        sourceResizeMonitor.value.cancel = monitorResize(nodeRef.value, _forceAlign);
      }
      if (cacheRef.value.element !== element || !isSamePoint(cacheRef.value.point, point) || !isEqual(cacheRef.value.align, props2.align)) {
        _forceAlign();
        if (resizeMonitor.value.element !== element) {
          resizeMonitor.value.cancel();
          resizeMonitor.value.element = element;
          resizeMonitor.value.cancel = monitorResize(element, _forceAlign);
        }
      }
    };
    onUpdated(function() {
      nextTick(function() {
        goAlign();
      });
    });
    watch(function() {
      return props2.disabled;
    }, function(disabled) {
      if (!disabled) {
        _forceAlign();
      } else {
        cancelForceAlign();
      }
    }, {
      immediate: true,
      flush: "post"
    });
    var winResizeRef = ref(null);
    watch(function() {
      return props2.monitorWindowResize;
    }, function(monitorWindowResize) {
      if (monitorWindowResize) {
        if (!winResizeRef.value) {
          winResizeRef.value = addEventListenerWrap(window, "resize", _forceAlign);
        }
      } else if (winResizeRef.value) {
        winResizeRef.value.remove();
        winResizeRef.value = null;
      }
    }, {
      flush: "post"
    });
    onUnmounted(function() {
      resizeMonitor.value.cancel();
      sourceResizeMonitor.value.cancel();
      if (winResizeRef.value)
        winResizeRef.value.remove();
      cancelForceAlign();
    });
    expose({
      forceAlign: function forceAlign() {
        return _forceAlign(true);
      }
    });
    return function() {
      var child = slots === null || slots === void 0 ? void 0 : slots.default();
      if (child) {
        return cloneElement(child[0], {
          ref: nodeRef
        }, true, true);
      }
      return null;
    };
  }
});
const PopupInner = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "PopupInner",
  inheritAttrs: false,
  props: innerProps,
  emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
  setup: function setup9(props2, _ref) {
    var expose = _ref.expose, attrs = _ref.attrs, slots = _ref.slots;
    var alignRef = ref();
    var elementRef = ref();
    var alignedClassName = ref();
    var _useStretchStyle = useStretchStyle(toRef(props2, "stretch")), _useStretchStyle2 = _slicedToArray(_useStretchStyle, 2), stretchStyle = _useStretchStyle2[0];
    _useStretchStyle2[1];
    var visible = ref(false);
    var timeoutId;
    watch(function() {
      return props2.visible;
    }, function(val) {
      clearTimeout(timeoutId);
      if (val) {
        timeoutId = setTimeout(function() {
          visible.value = props2.visible;
        });
      } else {
        visible.value = false;
      }
    }, {
      immediate: true
    });
    var _useVisibleStatus = useVisibleStatus(visible), _useVisibleStatus2 = _slicedToArray(_useVisibleStatus, 2), status = _useVisibleStatus2[0], goNextStatus = _useVisibleStatus2[1];
    var prepareResolveRef = ref();
    var getAlignTarget = function getAlignTarget2() {
      if (props2.point) {
        return props2.point;
      }
      return props2.getRootDomNode;
    };
    var forceAlign = function forceAlign2() {
      var _alignRef$value;
      (_alignRef$value = alignRef.value) === null || _alignRef$value === void 0 ? void 0 : _alignRef$value.forceAlign();
    };
    var onInternalAlign = function onInternalAlign2(popupDomNode, matchAlign) {
      var nextAlignedClassName = props2.getClassNameFromAlign(matchAlign);
      var preAlignedClassName = alignedClassName.value;
      if (alignedClassName.value !== nextAlignedClassName) {
        alignedClassName.value = nextAlignedClassName;
      }
      if (status.value === "align") {
        var _props$onAlign;
        if (preAlignedClassName !== nextAlignedClassName) {
          Promise.resolve().then(function() {
            forceAlign();
          });
        } else {
          goNextStatus(function() {
            var _prepareResolveRef$va;
            (_prepareResolveRef$va = prepareResolveRef.value) === null || _prepareResolveRef$va === void 0 ? void 0 : _prepareResolveRef$va.call(prepareResolveRef);
          });
        }
        (_props$onAlign = props2.onAlign) === null || _props$onAlign === void 0 ? void 0 : _props$onAlign.call(props2, popupDomNode, matchAlign);
      }
    };
    var motion = computed(function() {
      var m = _typeof(props2.animation) === "object" ? props2.animation : getMotion(props2);
      ["onAfterEnter", "onAfterLeave"].forEach(function(eventName) {
        var originFn = m[eventName];
        m[eventName] = function(node) {
          goNextStatus();
          status.value = "stable";
          originFn === null || originFn === void 0 ? void 0 : originFn(node);
        };
      });
      return m;
    });
    var onShowPrepare = function onShowPrepare2() {
      return new Promise(function(resolve) {
        prepareResolveRef.value = resolve;
      });
    };
    watch([motion, status], function() {
      if (!motion.value && status.value === "motion") {
        goNextStatus();
      }
    }, {
      immediate: true
    });
    expose({
      forceAlign,
      getElement: function getElement2() {
        return elementRef.value.$el || elementRef.value;
      }
    });
    var alignDisabled = computed(function() {
      var _props$align;
      if ((_props$align = props2.align) !== null && _props$align !== void 0 && _props$align.points && (status.value === "align" || status.value === "stable")) {
        return false;
      }
      return true;
    });
    return function() {
      var _slots$default;
      var zIndex = props2.zIndex, align = props2.align, prefixCls = props2.prefixCls, destroyPopupOnHide = props2.destroyPopupOnHide, onMouseenter2 = props2.onMouseenter, onMouseleave2 = props2.onMouseleave, _props$onTouchstart = props2.onTouchstart, onTouchstart2 = _props$onTouchstart === void 0 ? function() {
      } : _props$onTouchstart, onMousedown2 = props2.onMousedown;
      var statusValue = status.value;
      var mergedStyle = [_objectSpread(_objectSpread({}, stretchStyle.value), {}, {
        zIndex,
        opacity: statusValue === "motion" || statusValue === "stable" || !visible.value ? null : 0,
        pointerEvents: !visible.value && statusValue !== "stable" ? "none" : null
      }), attrs.style];
      var childNode = flattenChildren((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots, {
        visible: props2.visible
      }));
      if (childNode.length > 1) {
        childNode = createVNode("div", {
          "class": "".concat(prefixCls, "-content")
        }, [childNode]);
      }
      var mergedClassName = classNames(prefixCls, attrs.class, alignedClassName.value);
      var hasAnimate = visible.value || !props2.visible;
      var transitionProps = hasAnimate ? getTransitionProps(motion.value.name, motion.value) : {};
      return createVNode(Transition, _objectSpread(_objectSpread({
        "ref": elementRef
      }, transitionProps), {}, {
        "onBeforeEnter": onShowPrepare
      }), {
        default: function _default4() {
          return !destroyPopupOnHide || props2.visible ? withDirectives(createVNode(Align, {
            "target": getAlignTarget(),
            "key": "popup",
            "ref": alignRef,
            "monitorWindowResize": true,
            "disabled": alignDisabled.value,
            "align": align,
            "onAlign": onInternalAlign
          }, {
            default: function _default5() {
              return createVNode("div", _objectSpread(_objectSpread({
                "class": mergedClassName,
                "onMouseenter": onMouseenter2,
                "onMouseleave": onMouseleave2,
                "onMousedown": withModifiers(onMousedown2, ["capture"])
              }, _defineProperty({}, supportsPassive$1 ? "onTouchstartPassive" : "onTouchstart", withModifiers(onTouchstart2, ["capture"]))), {}, {
                "style": mergedStyle
              }), [childNode]);
            }
          }), [[vShow, visible.value]]) : null;
        }
      });
    };
  }
});
const Popup = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Popup",
  inheritAttrs: false,
  props: popupProps,
  setup: function setup10(props2, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots, expose = _ref.expose;
    var innerVisible = ref(false);
    var inMobile = ref(false);
    var popupRef = ref();
    watch([function() {
      return props2.visible;
    }, function() {
      return props2.mobile;
    }], function() {
      innerVisible.value = props2.visible;
      if (props2.visible && props2.mobile) {
        inMobile.value = true;
      }
    }, {
      immediate: true,
      flush: "post"
    });
    expose({
      forceAlign: function forceAlign() {
        var _popupRef$value;
        (_popupRef$value = popupRef.value) === null || _popupRef$value === void 0 ? void 0 : _popupRef$value.forceAlign();
      },
      getElement: function getElement2() {
        var _popupRef$value2;
        return (_popupRef$value2 = popupRef.value) === null || _popupRef$value2 === void 0 ? void 0 : _popupRef$value2.getElement();
      }
    });
    return function() {
      var cloneProps = _objectSpread(_objectSpread(_objectSpread({}, props2), attrs), {}, {
        visible: innerVisible.value
      });
      var popupNode = inMobile.value ? createVNode(MobilePopupInner, _objectSpread(_objectSpread({}, cloneProps), {}, {
        "mobile": props2.mobile,
        "ref": popupRef
      }), {
        default: slots.default
      }) : createVNode(PopupInner, _objectSpread(_objectSpread({}, cloneProps), {}, {
        "ref": popupRef
      }), {
        default: slots.default
      });
      return createVNode("div", null, [createVNode(Mask$1, cloneProps, null), popupNode]);
    };
  }
});
function isPointsEq(a1, a2, isAlignPoint) {
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }
  return a1[0] === a2[0] && a1[1] === a2[1];
}
function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return _objectSpread(_objectSpread({}, baseAlign), align);
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  var placements2 = Object.keys(builtinPlacements);
  for (var i = 0; i < placements2.length; i += 1) {
    var placement = placements2[i];
    if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
      return "".concat(prefixCls, "-placement-").concat(placement);
    }
  }
  return "";
}
const BaseMixin = {
  methods: {
    setState: function setState() {
      var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : void 0;
      var newState = typeof state === "function" ? state(this.$data, this.$props) : state;
      if (this.getDerivedStateFromProps) {
        var s = this.getDerivedStateFromProps(getOptionProps(this), _objectSpread(_objectSpread({}, this.$data), newState));
        if (s === null) {
          return;
        } else {
          newState = _objectSpread(_objectSpread({}, newState), s || {});
        }
      }
      _extends(this.$data, newState);
      if (this._.isMounted) {
        this.$forceUpdate();
      }
      nextTick(function() {
        callback && callback();
      });
    },
    __emit: function __emit() {
      var args = [].slice.call(arguments, 0);
      var eventName = args[0];
      eventName = "on".concat(eventName[0].toUpperCase()).concat(eventName.substring(1));
      var event = this.$props[eventName] || this.$attrs[eventName];
      if (args.length && event) {
        if (Array.isArray(event)) {
          for (var i = 0, l = event.length; i < l; i++) {
            event[i].apply(event, _toConsumableArray(args.slice(1)));
          }
        } else {
          event.apply(void 0, _toConsumableArray(args.slice(1)));
        }
      }
    }
  }
};
var TriggerContextKey = Symbol("TriggerContextKey");
var useInjectTrigger = function useInjectTrigger2() {
  return inject(TriggerContextKey, {
    setPortal: function setPortal() {
    },
    popPortal: false
  });
};
var PortalContextKey = Symbol("PortalContextKey");
var useProvidePortal = function useProvidePortal2(instance) {
  var config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    inTriggerContext: true
  };
  provide(PortalContextKey, {
    inTriggerContext: config.inTriggerContext,
    shouldRender: computed(function() {
      var _ref = instance || {}, sPopupVisible = _ref.sPopupVisible, popupRef = _ref.popupRef, forceRender = _ref.forceRender, autoDestroy = _ref.autoDestroy;
      var shouldRender = false;
      if (sPopupVisible || popupRef || forceRender) {
        shouldRender = true;
      }
      if (!sPopupVisible && autoDestroy) {
        shouldRender = false;
      }
      return shouldRender;
    })
  });
};
var useInjectPortal = function useInjectPortal2() {
  useProvidePortal({}, {
    inTriggerContext: false
  });
  var portalContext = inject(PortalContextKey, {
    shouldRender: computed(function() {
      return false;
    }),
    inTriggerContext: false
  });
  return {
    shouldRender: computed(function() {
      return portalContext.shouldRender.value || portalContext.inTriggerContext === false;
    })
  };
};
const Portal$1 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Portal",
  inheritAttrs: false,
  props: {
    getContainer: PropTypes$1.func.isRequired,
    didUpdate: Function
  },
  setup: function setup11(props2, _ref) {
    var slots = _ref.slots;
    var container;
    var _useInjectPortal = useInjectPortal(), shouldRender = _useInjectPortal.shouldRender;
    var stopWatch = watch(shouldRender, function() {
      if (shouldRender.value && !container) {
        container = props2.getContainer();
      }
      if (container) {
        stopWatch();
      }
    });
    onUpdated(function() {
      nextTick(function() {
        if (shouldRender.value) {
          var _props$didUpdate;
          (_props$didUpdate = props2.didUpdate) === null || _props$didUpdate === void 0 ? void 0 : _props$didUpdate.call(props2, props2);
        }
      });
    });
    return function() {
      if (!shouldRender.value)
        return null;
      {
        var _slots$default;
        return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
      }
    };
  }
});
function noop$3() {
}
function returnEmptyString() {
  return "";
}
function returnDocument(element) {
  if (element) {
    return element.ownerDocument;
  }
  return window.document;
}
var ALL_HANDLERS = ["onClick", "onMousedown", "onTouchstart", "onMouseenter", "onMouseleave", "onFocus", "onBlur", "onContextmenu"];
const Trigger = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Trigger",
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: {
    action: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.arrayOf(PropTypes$1.string)]).def([]),
    showAction: PropTypes$1.any.def([]),
    hideAction: PropTypes$1.any.def([]),
    getPopupClassNameFromAlign: PropTypes$1.any.def(returnEmptyString),
    onPopupVisibleChange: Function,
    afterPopupVisibleChange: PropTypes$1.func.def(noop$3),
    popup: PropTypes$1.any,
    popupStyle: {
      type: Object,
      default: void 0
    },
    prefixCls: PropTypes$1.string.def("rc-trigger-popup"),
    popupClassName: PropTypes$1.string.def(""),
    popupPlacement: String,
    builtinPlacements: PropTypes$1.object,
    popupTransitionName: String,
    popupAnimation: PropTypes$1.any,
    mouseEnterDelay: PropTypes$1.number.def(0),
    mouseLeaveDelay: PropTypes$1.number.def(0.1),
    zIndex: Number,
    focusDelay: PropTypes$1.number.def(0),
    blurDelay: PropTypes$1.number.def(0.15),
    getPopupContainer: Function,
    getDocument: PropTypes$1.func.def(returnDocument),
    forceRender: {
      type: Boolean,
      default: void 0
    },
    destroyPopupOnHide: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Boolean,
      default: false
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    popupAlign: PropTypes$1.object.def(function() {
      return {};
    }),
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: false
    },
    maskTransitionName: String,
    maskAnimation: String,
    stretch: String,
    alignPoint: {
      type: Boolean,
      default: void 0
    },
    autoDestroy: {
      type: Boolean,
      default: false
    },
    mobile: Object,
    getTriggerDOMNode: Function
  },
  setup: function setup12(props2) {
    var align = computed(function() {
      var popupPlacement = props2.popupPlacement, popupAlign = props2.popupAlign, builtinPlacements = props2.builtinPlacements;
      if (popupPlacement && builtinPlacements) {
        return getAlignFromPlacement(builtinPlacements, popupPlacement, popupAlign);
      }
      return popupAlign;
    });
    var _useInjectTrigger = useInjectTrigger(), setPortal = _useInjectTrigger.setPortal, popPortal = _useInjectTrigger.popPortal;
    var popupRef = ref(null);
    var setPopupRef = function setPopupRef2(val) {
      popupRef.value = val;
    };
    return {
      popPortal,
      setPortal,
      vcTriggerContext: inject("vcTriggerContext", {}),
      popupRef,
      setPopupRef,
      triggerRef: ref(null),
      align,
      focusTime: null,
      clickOutsideHandler: null,
      contextmenuOutsideHandler1: null,
      contextmenuOutsideHandler2: null,
      touchOutsideHandler: null,
      attachId: null,
      delayTimer: null,
      hasPopupMouseDown: false,
      preClickTime: null,
      preTouchTime: null,
      mouseDownTimeout: null,
      childOriginEvents: {}
    };
  },
  data: function data() {
    var _this = this, _this$setPortal;
    var props2 = this.$props;
    var popupVisible2;
    if (this.popupVisible !== void 0) {
      popupVisible2 = !!props2.popupVisible;
    } else {
      popupVisible2 = !!props2.defaultPopupVisible;
    }
    ALL_HANDLERS.forEach(function(h2) {
      _this["fire".concat(h2)] = function(e) {
        _this.fireEvents(h2, e);
      };
    });
    (_this$setPortal = this.setPortal) === null || _this$setPortal === void 0 ? void 0 : _this$setPortal.call(this, createVNode(Portal$1, {
      "key": "portal",
      "getContainer": this.getContainer,
      "didUpdate": this.handlePortalUpdate
    }, {
      default: this.getComponent
    }));
    return {
      prevPopupVisible: popupVisible2,
      sPopupVisible: popupVisible2,
      point: null
    };
  },
  watch: {
    popupVisible: function popupVisible(val) {
      if (val !== void 0) {
        this.prevPopupVisible = this.sPopupVisible;
        this.sPopupVisible = val;
      }
    }
  },
  created: function created() {
    provide("vcTriggerContext", {
      onPopupMouseDown: this.onPopupMouseDown
    });
    useProvidePortal(this);
  },
  deactivated: function deactivated() {
    this.setPopupVisible(false);
  },
  mounted: function mounted() {
    var _this2 = this;
    this.$nextTick(function() {
      _this2.updatedCal();
    });
  },
  updated: function updated() {
    var _this3 = this;
    this.$nextTick(function() {
      _this3.updatedCal();
    });
  },
  beforeUnmount: function beforeUnmount() {
    this.clearDelayTimer();
    this.clearOutsideHandler();
    clearTimeout(this.mouseDownTimeout);
    wrapperRaf.cancel(this.attachId);
  },
  methods: {
    updatedCal: function updatedCal() {
      var props2 = this.$props;
      var state = this.$data;
      if (state.sPopupVisible) {
        var currentDocument;
        if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextmenuToShow())) {
          currentDocument = props2.getDocument(this.getRootDomNode());
          this.clickOutsideHandler = addEventListenerWrap(currentDocument, "mousedown", this.onDocumentClick);
        }
        if (!this.touchOutsideHandler) {
          currentDocument = currentDocument || props2.getDocument(this.getRootDomNode());
          this.touchOutsideHandler = addEventListenerWrap(currentDocument, "touchstart", this.onDocumentClick, supportsPassive$1 ? {
            passive: false
          } : false);
        }
        if (!this.contextmenuOutsideHandler1 && this.isContextmenuToShow()) {
          currentDocument = currentDocument || props2.getDocument(this.getRootDomNode());
          this.contextmenuOutsideHandler1 = addEventListenerWrap(currentDocument, "scroll", this.onContextmenuClose);
        }
        if (!this.contextmenuOutsideHandler2 && this.isContextmenuToShow()) {
          this.contextmenuOutsideHandler2 = addEventListenerWrap(window, "blur", this.onContextmenuClose);
        }
      } else {
        this.clearOutsideHandler();
      }
    },
    onMouseenter: function onMouseenter(e) {
      var mouseEnterDelay = this.$props.mouseEnterDelay;
      this.fireEvents("onMouseenter", e);
      this.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
    },
    onMouseMove: function onMouseMove(e) {
      this.fireEvents("onMousemove", e);
      this.setPoint(e);
    },
    onMouseleave: function onMouseleave(e) {
      this.fireEvents("onMouseleave", e);
      this.delaySetPopupVisible(false, this.$props.mouseLeaveDelay);
    },
    onPopupMouseenter: function onPopupMouseenter() {
      this.clearDelayTimer();
    },
    onPopupMouseleave: function onPopupMouseleave(e) {
      var _this$popupRef;
      if (e && e.relatedTarget && !e.relatedTarget.setTimeout && contains((_this$popupRef = this.popupRef) === null || _this$popupRef === void 0 ? void 0 : _this$popupRef.getElement(), e.relatedTarget)) {
        return;
      }
      this.delaySetPopupVisible(false, this.$props.mouseLeaveDelay);
    },
    onFocus: function onFocus(e) {
      this.fireEvents("onFocus", e);
      this.clearDelayTimer();
      if (this.isFocusToShow()) {
        this.focusTime = Date.now();
        this.delaySetPopupVisible(true, this.$props.focusDelay);
      }
    },
    onMousedown: function onMousedown(e) {
      this.fireEvents("onMousedown", e);
      this.preClickTime = Date.now();
    },
    onTouchstart: function onTouchstart(e) {
      this.fireEvents("onTouchstart", e);
      this.preTouchTime = Date.now();
    },
    onBlur: function onBlur(e) {
      if (!contains(e.target, e.relatedTarget || document.activeElement)) {
        this.fireEvents("onBlur", e);
        this.clearDelayTimer();
        if (this.isBlurToHide()) {
          this.delaySetPopupVisible(false, this.$props.blurDelay);
        }
      }
    },
    onContextmenu: function onContextmenu(e) {
      e.preventDefault();
      this.fireEvents("onContextmenu", e);
      this.setPopupVisible(true, e);
    },
    onContextmenuClose: function onContextmenuClose() {
      if (this.isContextmenuToShow()) {
        this.close();
      }
    },
    onClick: function onClick(event) {
      this.fireEvents("onClick", event);
      if (this.focusTime) {
        var preTime;
        if (this.preClickTime && this.preTouchTime) {
          preTime = Math.min(this.preClickTime, this.preTouchTime);
        } else if (this.preClickTime) {
          preTime = this.preClickTime;
        } else if (this.preTouchTime) {
          preTime = this.preTouchTime;
        }
        if (Math.abs(preTime - this.focusTime) < 20) {
          return;
        }
        this.focusTime = 0;
      }
      this.preClickTime = 0;
      this.preTouchTime = 0;
      if (this.isClickToShow() && (this.isClickToHide() || this.isBlurToHide()) && event && event.preventDefault) {
        event.preventDefault();
      }
      if (event && event.domEvent) {
        event.domEvent.preventDefault();
      }
      var nextVisible = !this.$data.sPopupVisible;
      if (this.isClickToHide() && !nextVisible || nextVisible && this.isClickToShow()) {
        this.setPopupVisible(!this.$data.sPopupVisible, event);
      }
    },
    onPopupMouseDown: function onPopupMouseDown() {
      var _this4 = this;
      var _this$vcTriggerContex = this.vcTriggerContext, vcTriggerContext = _this$vcTriggerContex === void 0 ? {} : _this$vcTriggerContex;
      this.hasPopupMouseDown = true;
      clearTimeout(this.mouseDownTimeout);
      this.mouseDownTimeout = setTimeout(function() {
        _this4.hasPopupMouseDown = false;
      }, 0);
      if (vcTriggerContext.onPopupMouseDown) {
        vcTriggerContext.onPopupMouseDown.apply(vcTriggerContext, arguments);
      }
    },
    onDocumentClick: function onDocumentClick(event) {
      if (this.$props.mask && !this.$props.maskClosable) {
        return;
      }
      var target = event.target;
      var root2 = this.getRootDomNode();
      var popupNode = this.getPopupDomNode();
      if ((!contains(root2, target) || this.isContextMenuOnly()) && !contains(popupNode, target) && !this.hasPopupMouseDown) {
        this.delaySetPopupVisible(false, 0.1);
      }
    },
    getPopupDomNode: function getPopupDomNode() {
      var _this$popupRef2;
      return ((_this$popupRef2 = this.popupRef) === null || _this$popupRef2 === void 0 ? void 0 : _this$popupRef2.getElement()) || null;
    },
    getRootDomNode: function getRootDomNode() {
      var getTriggerDOMNode = this.$props.getTriggerDOMNode;
      if (getTriggerDOMNode) {
        var domNode = findDOMNode(this.triggerRef);
        return findDOMNode(getTriggerDOMNode(domNode));
      }
      try {
        var _domNode = findDOMNode(this.triggerRef);
        if (_domNode) {
          return _domNode;
        }
      } catch (err) {
      }
      return findDOMNode(this);
    },
    handleGetPopupClassFromAlign: function handleGetPopupClassFromAlign(align) {
      var className = [];
      var props2 = this.$props;
      var popupPlacement = props2.popupPlacement, builtinPlacements = props2.builtinPlacements, prefixCls = props2.prefixCls, alignPoint2 = props2.alignPoint, getPopupClassNameFromAlign = props2.getPopupClassNameFromAlign;
      if (popupPlacement && builtinPlacements) {
        className.push(getAlignPopupClassName(builtinPlacements, prefixCls, align, alignPoint2));
      }
      if (getPopupClassNameFromAlign) {
        className.push(getPopupClassNameFromAlign(align));
      }
      return className.join(" ");
    },
    getPopupAlign: function getPopupAlign() {
      var props2 = this.$props;
      var popupPlacement = props2.popupPlacement, popupAlign = props2.popupAlign, builtinPlacements = props2.builtinPlacements;
      if (popupPlacement && builtinPlacements) {
        return getAlignFromPlacement(builtinPlacements, popupPlacement, popupAlign);
      }
      return popupAlign;
    },
    getComponent: function getComponent$1() {
      var _this5 = this;
      var mouseProps = {};
      if (this.isMouseEnterToShow()) {
        mouseProps.onMouseenter = this.onPopupMouseenter;
      }
      if (this.isMouseLeaveToHide()) {
        mouseProps.onMouseleave = this.onPopupMouseleave;
      }
      mouseProps.onMousedown = this.onPopupMouseDown;
      mouseProps[supportsPassive$1 ? "onTouchstartPassive" : "onTouchstart"] = this.onPopupMouseDown;
      var handleGetPopupClassFromAlign2 = this.handleGetPopupClassFromAlign, getRootDomNode2 = this.getRootDomNode, getContainer4 = this.getContainer, $attrs = this.$attrs;
      var _this$$props = this.$props, prefixCls = _this$$props.prefixCls, destroyPopupOnHide = _this$$props.destroyPopupOnHide, popupClassName = _this$$props.popupClassName, popupAnimation = _this$$props.popupAnimation, popupTransitionName = _this$$props.popupTransitionName, popupStyle = _this$$props.popupStyle, mask = _this$$props.mask, maskAnimation = _this$$props.maskAnimation, maskTransitionName = _this$$props.maskTransitionName, zIndex = _this$$props.zIndex, stretch = _this$$props.stretch, alignPoint2 = _this$$props.alignPoint, mobile = _this$$props.mobile, forceRender = _this$$props.forceRender;
      var _this$$data = this.$data, sPopupVisible = _this$$data.sPopupVisible, point = _this$$data.point;
      var popupProps2 = _objectSpread(_objectSpread({
        prefixCls,
        destroyPopupOnHide,
        visible: sPopupVisible,
        point: alignPoint2 ? point : null,
        align: this.align,
        animation: popupAnimation,
        getClassNameFromAlign: handleGetPopupClassFromAlign2,
        stretch,
        getRootDomNode: getRootDomNode2,
        mask,
        zIndex,
        transitionName: popupTransitionName,
        maskAnimation,
        maskTransitionName,
        getContainer: getContainer4,
        class: popupClassName,
        style: popupStyle,
        onAlign: $attrs.onPopupAlign || noop$3
      }, mouseProps), {}, {
        ref: this.setPopupRef,
        mobile,
        forceRender
      });
      return createVNode(Popup, popupProps2, {
        default: this.$slots.popup || function() {
          return getComponent(_this5, "popup");
        }
      });
    },
    attachParent: function attachParent(popupContainer) {
      var _this6 = this;
      wrapperRaf.cancel(this.attachId);
      var _this$$props2 = this.$props, getPopupContainer = _this$$props2.getPopupContainer, getDocument = _this$$props2.getDocument;
      var domNode = this.getRootDomNode();
      var mountNode;
      if (!getPopupContainer) {
        mountNode = getDocument(this.getRootDomNode()).body;
      } else if (domNode || getPopupContainer.length === 0) {
        mountNode = getPopupContainer(domNode);
      }
      if (mountNode) {
        mountNode.appendChild(popupContainer);
      } else {
        this.attachId = wrapperRaf(function() {
          _this6.attachParent(popupContainer);
        });
      }
    },
    getContainer: function getContainer3() {
      var props2 = this.$props;
      var getDocument = props2.getDocument;
      var popupContainer = getDocument(this.getRootDomNode()).createElement("div");
      popupContainer.style.position = "absolute";
      popupContainer.style.top = "0";
      popupContainer.style.left = "0";
      popupContainer.style.width = "100%";
      this.attachParent(popupContainer);
      return popupContainer;
    },
    setPopupVisible: function setPopupVisible(sPopupVisible, event) {
      var alignPoint2 = this.alignPoint, prevPopupVisible = this.sPopupVisible, onPopupVisibleChange = this.onPopupVisibleChange;
      this.clearDelayTimer();
      if (prevPopupVisible !== sPopupVisible) {
        if (!hasProp(this, "popupVisible")) {
          this.setState({
            sPopupVisible,
            prevPopupVisible
          });
        }
        onPopupVisibleChange && onPopupVisibleChange(sPopupVisible);
      }
      if (alignPoint2 && event && sPopupVisible) {
        this.setPoint(event);
      }
    },
    setPoint: function setPoint(point) {
      var alignPoint2 = this.$props.alignPoint;
      if (!alignPoint2 || !point)
        return;
      this.setState({
        point: {
          pageX: point.pageX,
          pageY: point.pageY
        }
      });
    },
    handlePortalUpdate: function handlePortalUpdate() {
      if (this.prevPopupVisible !== this.sPopupVisible) {
        this.afterPopupVisibleChange(this.sPopupVisible);
      }
    },
    delaySetPopupVisible: function delaySetPopupVisible(visible, delayS, event) {
      var _this7 = this;
      var delay = delayS * 1e3;
      this.clearDelayTimer();
      if (delay) {
        var point = event ? {
          pageX: event.pageX,
          pageY: event.pageY
        } : null;
        this.delayTimer = requestAnimationTimeout(function() {
          _this7.setPopupVisible(visible, point);
          _this7.clearDelayTimer();
        }, delay);
      } else {
        this.setPopupVisible(visible, event);
      }
    },
    clearDelayTimer: function clearDelayTimer() {
      if (this.delayTimer) {
        cancelAnimationTimeout(this.delayTimer);
        this.delayTimer = null;
      }
    },
    clearOutsideHandler: function clearOutsideHandler() {
      if (this.clickOutsideHandler) {
        this.clickOutsideHandler.remove();
        this.clickOutsideHandler = null;
      }
      if (this.contextmenuOutsideHandler1) {
        this.contextmenuOutsideHandler1.remove();
        this.contextmenuOutsideHandler1 = null;
      }
      if (this.contextmenuOutsideHandler2) {
        this.contextmenuOutsideHandler2.remove();
        this.contextmenuOutsideHandler2 = null;
      }
      if (this.touchOutsideHandler) {
        this.touchOutsideHandler.remove();
        this.touchOutsideHandler = null;
      }
    },
    createTwoChains: function createTwoChains(event) {
      var fn = function fn2() {
      };
      var events = getEvents(this);
      if (this.childOriginEvents[event] && events[event]) {
        return this["fire".concat(event)];
      }
      fn = this.childOriginEvents[event] || events[event] || fn;
      return fn;
    },
    isClickToShow: function isClickToShow() {
      var _this$$props3 = this.$props, action = _this$$props3.action, showAction = _this$$props3.showAction;
      return action.indexOf("click") !== -1 || showAction.indexOf("click") !== -1;
    },
    isContextMenuOnly: function isContextMenuOnly() {
      var action = this.$props.action;
      return action === "contextmenu" || action.length === 1 && action[0] === "contextmenu";
    },
    isContextmenuToShow: function isContextmenuToShow() {
      var _this$$props4 = this.$props, action = _this$$props4.action, showAction = _this$$props4.showAction;
      return action.indexOf("contextmenu") !== -1 || showAction.indexOf("contextmenu") !== -1;
    },
    isClickToHide: function isClickToHide() {
      var _this$$props5 = this.$props, action = _this$$props5.action, hideAction = _this$$props5.hideAction;
      return action.indexOf("click") !== -1 || hideAction.indexOf("click") !== -1;
    },
    isMouseEnterToShow: function isMouseEnterToShow() {
      var _this$$props6 = this.$props, action = _this$$props6.action, showAction = _this$$props6.showAction;
      return action.indexOf("hover") !== -1 || showAction.indexOf("mouseenter") !== -1;
    },
    isMouseLeaveToHide: function isMouseLeaveToHide() {
      var _this$$props7 = this.$props, action = _this$$props7.action, hideAction = _this$$props7.hideAction;
      return action.indexOf("hover") !== -1 || hideAction.indexOf("mouseleave") !== -1;
    },
    isFocusToShow: function isFocusToShow() {
      var _this$$props8 = this.$props, action = _this$$props8.action, showAction = _this$$props8.showAction;
      return action.indexOf("focus") !== -1 || showAction.indexOf("focus") !== -1;
    },
    isBlurToHide: function isBlurToHide() {
      var _this$$props9 = this.$props, action = _this$$props9.action, hideAction = _this$$props9.hideAction;
      return action.indexOf("focus") !== -1 || hideAction.indexOf("blur") !== -1;
    },
    forcePopupAlign: function forcePopupAlign() {
      if (this.$data.sPopupVisible) {
        var _this$popupRef3;
        (_this$popupRef3 = this.popupRef) === null || _this$popupRef3 === void 0 ? void 0 : _this$popupRef3.forceAlign();
      }
    },
    fireEvents: function fireEvents(type, e) {
      if (this.childOriginEvents[type]) {
        this.childOriginEvents[type](e);
      }
      var event = this.$props[type] || this.$attrs[type];
      if (event) {
        event(e);
      }
    },
    close: function close2() {
      this.setPopupVisible(false);
    }
  },
  render: function render2() {
    var _this8 = this;
    var $attrs = this.$attrs;
    var children = filterEmpty(getSlot(this));
    var alignPoint2 = this.$props.alignPoint;
    var child = children[0];
    this.childOriginEvents = getEvents(child);
    var newChildProps = {
      key: "trigger"
    };
    if (this.isContextmenuToShow()) {
      newChildProps.onContextmenu = this.onContextmenu;
    } else {
      newChildProps.onContextmenu = this.createTwoChains("onContextmenu");
    }
    if (this.isClickToHide() || this.isClickToShow()) {
      newChildProps.onClick = this.onClick;
      newChildProps.onMousedown = this.onMousedown;
      newChildProps[supportsPassive$1 ? "onTouchstartPassive" : "onTouchstart"] = this.onTouchstart;
    } else {
      newChildProps.onClick = this.createTwoChains("onClick");
      newChildProps.onMousedown = this.createTwoChains("onMousedown");
      newChildProps[supportsPassive$1 ? "onTouchstartPassive" : "onTouchstart"] = this.createTwoChains("onTouchstart");
    }
    if (this.isMouseEnterToShow()) {
      newChildProps.onMouseenter = this.onMouseenter;
      if (alignPoint2) {
        newChildProps.onMousemove = this.onMouseMove;
      }
    } else {
      newChildProps.onMouseenter = this.createTwoChains("onMouseenter");
    }
    if (this.isMouseLeaveToHide()) {
      newChildProps.onMouseleave = this.onMouseleave;
    } else {
      newChildProps.onMouseleave = this.createTwoChains("onMouseleave");
    }
    if (this.isFocusToShow() || this.isBlurToHide()) {
      newChildProps.onFocus = this.onFocus;
      newChildProps.onBlur = this.onBlur;
    } else {
      newChildProps.onFocus = this.createTwoChains("onFocus");
      newChildProps.onBlur = function(e) {
        if (e && (!e.relatedTarget || !contains(e.target, e.relatedTarget))) {
          _this8.createTwoChains("onBlur")(e);
        }
      };
    }
    var childrenClassName = classNames(child && child.props && child.props.class, $attrs.class);
    if (childrenClassName) {
      newChildProps.class = childrenClassName;
    }
    var trigger2 = cloneElement(child, _objectSpread(_objectSpread({}, newChildProps), {}, {
      ref: "triggerRef"
    }), true, true);
    if (this.popPortal) {
      return trigger2;
    } else {
      var portal = createVNode(Portal$1, {
        "key": "portal",
        "getContainer": this.getContainer,
        "didUpdate": this.handlePortalUpdate
      }, {
        default: this.getComponent
      });
      return createVNode(Fragment$1, null, [portal, trigger2]);
    }
  }
});
var _excluded$j = ["empty"];
var getBuiltInPlacements = function getBuiltInPlacements2(dropdownMatchSelectWidth) {
  var adjustX = dropdownMatchSelectWidth === true ? 0 : 1;
  return {
    bottomLeft: {
      points: ["tl", "bl"],
      offset: [0, 4],
      overflow: {
        adjustX,
        adjustY: 1
      }
    },
    bottomRight: {
      points: ["tr", "br"],
      offset: [0, 4],
      overflow: {
        adjustX,
        adjustY: 1
      }
    },
    topLeft: {
      points: ["bl", "tl"],
      offset: [0, -4],
      overflow: {
        adjustX,
        adjustY: 1
      }
    },
    topRight: {
      points: ["br", "tr"],
      offset: [0, -4],
      overflow: {
        adjustX,
        adjustY: 1
      }
    }
  };
};
var SelectTrigger = defineComponent({
  name: "SelectTrigger",
  inheritAttrs: false,
  props: {
    dropdownAlign: Object,
    visible: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    dropdownClassName: String,
    dropdownStyle: PropTypes$1.object,
    placement: String,
    empty: {
      type: Boolean,
      default: void 0
    },
    prefixCls: String,
    popupClassName: String,
    animation: String,
    transitionName: String,
    getPopupContainer: Function,
    dropdownRender: Function,
    containerWidth: Number,
    dropdownMatchSelectWidth: PropTypes$1.oneOfType([Number, Boolean]).def(true),
    popupElement: PropTypes$1.any,
    direction: String,
    getTriggerDOMNode: Function,
    onPopupVisibleChange: Function,
    onPopupMouseEnter: Function
  },
  setup: function setup13(props2, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs, expose = _ref.expose;
    var builtInPlacements = computed(function() {
      var dropdownMatchSelectWidth = props2.dropdownMatchSelectWidth;
      return getBuiltInPlacements(dropdownMatchSelectWidth);
    });
    var popupRef = ref();
    expose({
      getPopupElement: function getPopupElement() {
        return popupRef.value;
      }
    });
    return function() {
      var _props$attrs = _objectSpread(_objectSpread({}, props2), attrs), _props$attrs$empty = _props$attrs.empty, empty2 = _props$attrs$empty === void 0 ? false : _props$attrs$empty, restProps = _objectWithoutProperties(_props$attrs, _excluded$j);
      var visible = restProps.visible, dropdownAlign = restProps.dropdownAlign, prefixCls = restProps.prefixCls, popupElement = restProps.popupElement, dropdownClassName = restProps.dropdownClassName, dropdownStyle = restProps.dropdownStyle, _restProps$direction = restProps.direction, direction = _restProps$direction === void 0 ? "ltr" : _restProps$direction, placement = restProps.placement, dropdownMatchSelectWidth = restProps.dropdownMatchSelectWidth, containerWidth = restProps.containerWidth, dropdownRender = restProps.dropdownRender, animation = restProps.animation, transitionName2 = restProps.transitionName, getPopupContainer = restProps.getPopupContainer, getTriggerDOMNode = restProps.getTriggerDOMNode, onPopupVisibleChange = restProps.onPopupVisibleChange, onPopupMouseEnter = restProps.onPopupMouseEnter;
      var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");
      var popupNode = popupElement;
      if (dropdownRender) {
        popupNode = dropdownRender({
          menuNode: popupElement,
          props: props2
        });
      }
      var mergedTransitionName = animation ? "".concat(dropdownPrefixCls, "-").concat(animation) : transitionName2;
      var popupStyle = _objectSpread({
        minWidth: "".concat(containerWidth, "px")
      }, dropdownStyle);
      if (typeof dropdownMatchSelectWidth === "number") {
        popupStyle.width = "".concat(dropdownMatchSelectWidth, "px");
      } else if (dropdownMatchSelectWidth) {
        popupStyle.width = "".concat(containerWidth, "px");
      }
      return createVNode(Trigger, _objectSpread(_objectSpread({}, props2), {}, {
        "showAction": onPopupVisibleChange ? ["click"] : [],
        "hideAction": onPopupVisibleChange ? ["click"] : [],
        "popupPlacement": placement || (direction === "rtl" ? "bottomRight" : "bottomLeft"),
        "builtinPlacements": builtInPlacements.value,
        "prefixCls": dropdownPrefixCls,
        "popupTransitionName": mergedTransitionName,
        "popupAlign": dropdownAlign,
        "popupVisible": visible,
        "getPopupContainer": getPopupContainer,
        "popupClassName": classNames(dropdownClassName, _defineProperty({}, "".concat(dropdownPrefixCls, "-empty"), empty2)),
        "popupStyle": popupStyle,
        "getTriggerDOMNode": getTriggerDOMNode,
        "onPopupVisibleChange": onPopupVisibleChange
      }), {
        default: slots.default,
        popup: function popup() {
          return createVNode("div", {
            "ref": popupRef,
            "onMouseenter": onPopupMouseEnter
          }, [popupNode]);
        }
      });
    };
  }
});
const SelectTrigger$1 = SelectTrigger;
var KeyCode = {
  MAC_ENTER: 3,
  BACKSPACE: 8,
  TAB: 9,
  NUM_CENTER: 12,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  PAUSE: 19,
  CAPS_LOCK: 20,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  PRINT_SCREEN: 44,
  INSERT: 45,
  DELETE: 46,
  ZERO: 48,
  ONE: 49,
  TWO: 50,
  THREE: 51,
  FOUR: 52,
  FIVE: 53,
  SIX: 54,
  SEVEN: 55,
  EIGHT: 56,
  NINE: 57,
  QUESTION_MARK: 63,
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,
  META: 91,
  WIN_KEY_RIGHT: 92,
  CONTEXT_MENU: 93,
  NUM_ZERO: 96,
  NUM_ONE: 97,
  NUM_TWO: 98,
  NUM_THREE: 99,
  NUM_FOUR: 100,
  NUM_FIVE: 101,
  NUM_SIX: 102,
  NUM_SEVEN: 103,
  NUM_EIGHT: 104,
  NUM_NINE: 105,
  NUM_MULTIPLY: 106,
  NUM_PLUS: 107,
  NUM_MINUS: 109,
  NUM_PERIOD: 110,
  NUM_DIVISION: 111,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  NUMLOCK: 144,
  SEMICOLON: 186,
  DASH: 189,
  EQUALS: 187,
  COMMA: 188,
  PERIOD: 190,
  SLASH: 191,
  APOSTROPHE: 192,
  SINGLE_QUOTE: 222,
  OPEN_SQUARE_BRACKET: 219,
  BACKSLASH: 220,
  CLOSE_SQUARE_BRACKET: 221,
  WIN_KEY: 224,
  MAC_FF_META: 224,
  WIN_IME: 229,
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;
    if (e.altKey && !e.ctrlKey || e.metaKey || keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    }
    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;
      default:
        return true;
    }
  },
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }
    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }
    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    }
    if (window.navigator.userAgent.indexOf("WebKit") !== -1 && keyCode === 0) {
      return true;
    }
    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;
      default:
        return false;
    }
  }
};
const KeyCode$1 = KeyCode;
var TransBtn = function TransBtn2(props2, _ref) {
  var _slots$default;
  var slots = _ref.slots;
  var className = props2.class, customizeIcon = props2.customizeIcon, customizeIconProps = props2.customizeIconProps, _onMousedown = props2.onMousedown, onClick2 = props2.onClick;
  var icon;
  if (typeof customizeIcon === "function") {
    icon = customizeIcon(customizeIconProps);
  } else {
    icon = customizeIcon;
  }
  return createVNode("span", {
    "class": className,
    "onMousedown": function onMousedown2(event) {
      event.preventDefault();
      if (_onMousedown) {
        _onMousedown(event);
      }
    },
    "style": {
      userSelect: "none",
      WebkitUserSelect: "none"
    },
    "unselectable": "on",
    "onClick": onClick2,
    "aria-hidden": true
  }, [icon !== void 0 ? icon : createVNode("span", {
    "class": className.split(/\s+/).map(function(cls) {
      return "".concat(cls, "-icon");
    })
  }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)])]);
};
TransBtn.inheritAttrs = false;
TransBtn.displayName = "TransBtn";
TransBtn.props = {
  class: String,
  customizeIcon: PropTypes$1.any,
  customizeIconProps: PropTypes$1.any,
  onMousedown: Function,
  onClick: Function
};
const TransBtn$1 = TransBtn;
function onCompositionStart(e) {
  e.target.composing = true;
}
function onCompositionEnd(e) {
  if (!e.target.composing)
    return;
  e.target.composing = false;
  trigger(e.target, "input");
}
function trigger(el, type) {
  var e = document.createEvent("HTMLEvents");
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}
function addEventListener(el, event, handler2, options) {
  el.addEventListener(event, handler2, options);
}
var antInput = {
  created: function created2(el, binding) {
    if (!binding.modifiers || !binding.modifiers.lazy) {
      addEventListener(el, "compositionstart", onCompositionStart);
      addEventListener(el, "compositionend", onCompositionEnd);
      addEventListener(el, "change", onCompositionEnd);
    }
  }
};
const antInputDirective = antInput;
var inputProps = {
  inputRef: PropTypes$1.any,
  prefixCls: String,
  id: String,
  inputElement: PropTypes$1.VueNode,
  disabled: {
    type: Boolean,
    default: void 0
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  autocomplete: String,
  editable: {
    type: Boolean,
    default: void 0
  },
  activeDescendantId: String,
  value: String,
  open: {
    type: Boolean,
    default: void 0
  },
  tabindex: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string]),
  attrs: PropTypes$1.object,
  onKeydown: {
    type: Function
  },
  onMousedown: {
    type: Function
  },
  onChange: {
    type: Function
  },
  onPaste: {
    type: Function
  },
  onCompositionstart: {
    type: Function
  },
  onCompositionend: {
    type: Function
  },
  onFocus: {
    type: Function
  },
  onBlur: {
    type: Function
  }
};
var Input = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Input",
  inheritAttrs: false,
  props: inputProps,
  setup: function setup14(props2) {
    var blurTimeout = null;
    var VCSelectContainerEvent = inject("VCSelectContainerEvent");
    return function() {
      var _inputNode, _inputNode$props;
      var prefixCls = props2.prefixCls, id = props2.id, inputElement = props2.inputElement, disabled = props2.disabled, tabindex = props2.tabindex, autofocus = props2.autofocus, autocomplete = props2.autocomplete, editable = props2.editable, activeDescendantId = props2.activeDescendantId, value = props2.value, _onKeydown = props2.onKeydown, _onMousedown = props2.onMousedown, onChange = props2.onChange, onPaste = props2.onPaste, _onCompositionstart = props2.onCompositionstart, _onCompositionend = props2.onCompositionend, _onFocus = props2.onFocus, _onBlur = props2.onBlur, open2 = props2.open, inputRef = props2.inputRef, attrs = props2.attrs;
      var inputNode = inputElement || withDirectives(createVNode("input", null, null), [[antInputDirective]]);
      var inputProps2 = inputNode.props || {};
      var onOriginKeyDown = inputProps2.onKeydown, onOriginInput = inputProps2.onInput, onOriginFocus = inputProps2.onFocus, onOriginBlur = inputProps2.onBlur, onOriginMouseDown = inputProps2.onMousedown, onOriginCompositionStart = inputProps2.onCompositionstart, onOriginCompositionEnd = inputProps2.onCompositionend, style = inputProps2.style;
      inputNode = cloneElement(inputNode, _extends(_objectSpread(_objectSpread(_objectSpread({
        type: "search"
      }, inputProps2), {}, {
        id,
        ref: inputRef,
        disabled,
        tabindex,
        autocomplete: autocomplete || "off",
        autofocus,
        class: classNames("".concat(prefixCls, "-selection-search-input"), (_inputNode = inputNode) === null || _inputNode === void 0 ? void 0 : (_inputNode$props = _inputNode.props) === null || _inputNode$props === void 0 ? void 0 : _inputNode$props.class),
        role: "combobox",
        "aria-expanded": open2,
        "aria-haspopup": "listbox",
        "aria-owns": "".concat(id, "_list"),
        "aria-autocomplete": "list",
        "aria-controls": "".concat(id, "_list"),
        "aria-activedescendant": activeDescendantId
      }, attrs), {}, {
        value: editable ? value : "",
        readonly: !editable,
        unselectable: !editable ? "on" : null,
        style: _objectSpread(_objectSpread({}, style), {}, {
          opacity: editable ? null : 0
        }),
        onKeydown: function onKeydown(event) {
          _onKeydown(event);
          if (onOriginKeyDown) {
            onOriginKeyDown(event);
          }
        },
        onMousedown: function onMousedown2(event) {
          _onMousedown(event);
          if (onOriginMouseDown) {
            onOriginMouseDown(event);
          }
        },
        onInput: function onInput(event) {
          onChange(event);
          if (onOriginInput) {
            onOriginInput(event);
          }
        },
        onCompositionstart: function onCompositionstart(event) {
          _onCompositionstart(event);
          if (onOriginCompositionStart) {
            onOriginCompositionStart(event);
          }
        },
        onCompositionend: function onCompositionend(event) {
          _onCompositionend(event);
          if (onOriginCompositionEnd) {
            onOriginCompositionEnd(event);
          }
        },
        onPaste,
        onFocus: function onFocus2() {
          clearTimeout(blurTimeout);
          onOriginFocus && onOriginFocus(arguments.length <= 0 ? void 0 : arguments[0]);
          _onFocus && _onFocus(arguments.length <= 0 ? void 0 : arguments[0]);
          VCSelectContainerEvent === null || VCSelectContainerEvent === void 0 ? void 0 : VCSelectContainerEvent.focus(arguments.length <= 0 ? void 0 : arguments[0]);
        },
        onBlur: function onBlur2() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          blurTimeout = setTimeout(function() {
            onOriginBlur && onOriginBlur(args[0]);
            _onBlur && _onBlur(args[0]);
            VCSelectContainerEvent === null || VCSelectContainerEvent === void 0 ? void 0 : VCSelectContainerEvent.blur(args[0]);
          }, 100);
        }
      }), inputNode.type === "textarea" ? {} : {
        type: "search"
      }), true, true);
      return inputNode;
    };
  }
});
const Input$1 = Input;
var attributes = "accept acceptcharset accesskey action allowfullscreen allowtransparency\nalt async autocomplete autofocus autoplay capture cellpadding cellspacing challenge\ncharset checked classid classname colspan cols content contenteditable contextmenu\ncontrols coords crossorigin data datetime default defer dir disabled download draggable\nenctype form formaction formenctype formmethod formnovalidate formtarget frameborder\nheaders height hidden high href hreflang htmlfor for httpequiv icon id inputmode integrity\nis keyparams keytype kind label lang list loop low manifest marginheight marginwidth max maxlength media\nmediagroup method min minlength multiple muted name novalidate nonce open\noptimum pattern placeholder poster preload radiogroup readonly rel required\nreversed role rowspan rows sandbox scope scoped scrolling seamless selected\nshape size sizes span spellcheck src srcdoc srclang srcset start step style\nsummary tabindex target title type usemap value width wmode wrap";
var eventsName = "onCopy onCut onPaste onCompositionend onCompositionstart onCompositionupdate onKeydown\n    onKeypress onKeyup onFocus onBlur onChange onInput onSubmit onClick onContextmenu onDoubleclick onDblclick\n    onDrag onDragend onDragenter onDragexit onDragleave onDragover onDragstart onDrop onMousedown\n    onMouseenter onMouseleave onMousemove onMouseout onMouseover onMouseup onSelect onTouchcancel\n    onTouchend onTouchmove onTouchstart onTouchstartPassive onTouchmovePassive onScroll onWheel onAbort onCanplay onCanplaythrough\n    onDurationchange onEmptied onEncrypted onEnded onError onLoadeddata onLoadedmetadata\n    onLoadstart onPause onPlay onPlaying onProgress onRatechange onSeeked onSeeking onStalled onSuspend onTimeupdate onVolumechange onWaiting onLoad onError";
var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);
var ariaPrefix = "aria-";
var dataPrefix = "data-";
function match(key2, prefix) {
  return key2.indexOf(prefix) === 0;
}
function pickAttrs(props2) {
  var ariaOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var mergedConfig;
  if (ariaOnly === false) {
    mergedConfig = {
      aria: true,
      data: true,
      attr: true
    };
  } else if (ariaOnly === true) {
    mergedConfig = {
      aria: true
    };
  } else {
    mergedConfig = _objectSpread({}, ariaOnly);
  }
  var attrs = {};
  Object.keys(props2).forEach(function(key2) {
    if (mergedConfig.aria && (key2 === "role" || match(key2, ariaPrefix)) || mergedConfig.data && match(key2, dataPrefix) || mergedConfig.attr && (propList.includes(key2) || propList.includes(key2.toLowerCase()))) {
      attrs[key2] = props2[key2];
    }
  });
  return attrs;
}
var OverflowContextProviderKey = Symbol("OverflowContextProviderKey");
var OverflowContextProvider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "OverflowContextProvider",
  inheritAttrs: false,
  props: {
    value: {
      type: Object
    }
  },
  setup: function setup15(props2, _ref) {
    var slots = _ref.slots;
    provide(OverflowContextProviderKey, computed(function() {
      return props2.value;
    }));
    return function() {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});
var useInjectOverflowContext = function useInjectOverflowContext2() {
  return inject(OverflowContextProviderKey, computed(function() {
    return null;
  }));
};
var _excluded$i = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "registerSize", "itemKey", "display", "order", "component"];
var UNDEFINED = void 0;
const Item$2 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Item",
  props: {
    prefixCls: String,
    item: PropTypes$1.any,
    renderItem: Function,
    responsive: Boolean,
    itemKey: {
      type: [String, Number]
    },
    registerSize: Function,
    display: Boolean,
    order: Number,
    component: PropTypes$1.any,
    invalidate: Boolean
  },
  setup: function setup16(props2, _ref) {
    var slots = _ref.slots, expose = _ref.expose;
    var mergedHidden = computed(function() {
      return props2.responsive && !props2.display;
    });
    var itemNodeRef = ref();
    expose({
      itemNodeRef
    });
    function internalRegisterSize(width) {
      props2.registerSize(props2.itemKey, width);
    }
    onUnmounted(function() {
      internalRegisterSize(null);
    });
    return function() {
      var _slots$default;
      var prefixCls = props2.prefixCls, invalidate = props2.invalidate, item = props2.item, renderItem = props2.renderItem, responsive = props2.responsive;
      props2.registerSize;
      props2.itemKey;
      props2.display;
      var order = props2.order, _props$component = props2.component, Component2 = _props$component === void 0 ? "div" : _props$component, restProps = _objectWithoutProperties(props2, _excluded$i);
      var children = (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
      var childNode = renderItem && item !== UNDEFINED ? renderItem(item) : children;
      var overflowStyle;
      if (!invalidate) {
        overflowStyle = {
          opacity: mergedHidden.value ? 0 : 1,
          height: mergedHidden.value ? 0 : UNDEFINED,
          overflowY: mergedHidden.value ? "hidden" : UNDEFINED,
          order: responsive ? order : UNDEFINED,
          pointerEvents: mergedHidden.value ? "none" : UNDEFINED,
          position: mergedHidden.value ? "absolute" : UNDEFINED
        };
      }
      var overflowProps3 = {};
      if (mergedHidden.value) {
        overflowProps3["aria-hidden"] = true;
      }
      return createVNode(ResizeObserver, {
        "disabled": !responsive,
        "onResize": function onResize(_ref2) {
          var offsetWidth = _ref2.offsetWidth;
          internalRegisterSize(offsetWidth);
        }
      }, {
        default: function _default4() {
          return createVNode(Component2, _objectSpread(_objectSpread(_objectSpread({
            "class": classNames(!invalidate && prefixCls),
            "style": overflowStyle
          }, overflowProps3), restProps), {}, {
            "ref": itemNodeRef
          }), {
            default: function _default5() {
              return [childNode];
            }
          });
        }
      });
    };
  }
});
var _excluded$h = ["component"], _excluded2$1 = ["className"], _excluded3 = ["class"];
const RawItem = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "RawItem",
  inheritAttrs: false,
  props: {
    component: PropTypes$1.any,
    title: PropTypes$1.any,
    id: String,
    onMouseenter: {
      type: Function
    },
    onMouseleave: {
      type: Function
    },
    onClick: {
      type: Function
    },
    onKeydown: {
      type: Function
    },
    onFocus: {
      type: Function
    }
  },
  setup: function setup17(props2, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs;
    var context = useInjectOverflowContext();
    return function() {
      if (!context.value) {
        var _slots$default;
        var _props$component = props2.component, Component2 = _props$component === void 0 ? "div" : _props$component, _restProps = _objectWithoutProperties(props2, _excluded$h);
        return createVNode(Component2, _objectSpread(_objectSpread({}, _restProps), attrs), {
          default: function _default4() {
            return [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)];
          }
        });
      }
      var _context$value = context.value, contextClassName = _context$value.className, restContext = _objectWithoutProperties(_context$value, _excluded2$1);
      var className = attrs.class, restProps = _objectWithoutProperties(attrs, _excluded3);
      return createVNode(OverflowContextProvider, {
        "value": null
      }, {
        default: function _default4() {
          return [createVNode(Item$2, _objectSpread(_objectSpread(_objectSpread({
            "class": classNames(contextClassName, className)
          }, restContext), restProps), props2), slots)];
        }
      });
    };
  }
});
var _excluded$g = ["class", "style"];
var RESPONSIVE = "responsive";
var INVALIDATE = "invalidate";
function defaultRenderRest(omittedItems) {
  return "+ ".concat(omittedItems.length, " ...");
}
var overflowProps = function overflowProps2() {
  return {
    id: String,
    prefixCls: String,
    data: Array,
    itemKey: [String, Number, Function],
    itemWidth: {
      type: Number,
      default: 10
    },
    renderItem: Function,
    renderRawItem: Function,
    maxCount: [Number, String],
    renderRest: Function,
    renderRawRest: Function,
    suffix: PropTypes$1.any,
    component: String,
    itemComponent: PropTypes$1.any,
    onVisibleChange: Function,
    ssr: String,
    onMousedown: Function
  };
};
var Overflow = defineComponent({
  name: "Overflow",
  inheritAttrs: false,
  props: overflowProps(),
  emits: ["visibleChange"],
  setup: function setup18(props2, _ref) {
    var attrs = _ref.attrs, emit = _ref.emit, slots = _ref.slots;
    var fullySSR = computed(function() {
      return props2.ssr === "full";
    });
    var containerWidth = ref(null);
    var mergedContainerWidth = computed(function() {
      return containerWidth.value || 0;
    });
    var itemWidths = ref(/* @__PURE__ */ new Map());
    var prevRestWidth = ref(0);
    var restWidth = ref(0);
    var suffixWidth = ref(0);
    var suffixFixedStart = ref(null);
    var displayCount = ref(null);
    var mergedDisplayCount = computed(function() {
      if (displayCount.value === null && fullySSR.value) {
        return Number.MAX_SAFE_INTEGER;
      }
      return displayCount.value || 0;
    });
    var restReady = ref(false);
    var itemPrefixCls = computed(function() {
      return "".concat(props2.prefixCls, "-item");
    });
    var mergedRestWidth = computed(function() {
      return Math.max(prevRestWidth.value, restWidth.value);
    });
    var isResponsive = computed(function() {
      return !!(props2.data.length && props2.maxCount === RESPONSIVE);
    });
    var invalidate = computed(function() {
      return props2.maxCount === INVALIDATE;
    });
    var showRest = computed(function() {
      return isResponsive.value || typeof props2.maxCount === "number" && props2.data.length > props2.maxCount;
    });
    var mergedData = computed(function() {
      var items = props2.data;
      if (isResponsive.value) {
        if (containerWidth.value === null && fullySSR.value) {
          items = props2.data;
        } else {
          items = props2.data.slice(0, Math.min(props2.data.length, mergedContainerWidth.value / props2.itemWidth));
        }
      } else if (typeof props2.maxCount === "number") {
        items = props2.data.slice(0, props2.maxCount);
      }
      return items;
    });
    var omittedItems = computed(function() {
      if (isResponsive.value) {
        return props2.data.slice(mergedDisplayCount.value + 1);
      }
      return props2.data.slice(mergedData.value.length);
    });
    var getKey2 = function getKey3(item, index2) {
      var _ref2;
      if (typeof props2.itemKey === "function") {
        return props2.itemKey(item);
      }
      return (_ref2 = props2.itemKey && (item === null || item === void 0 ? void 0 : item[props2.itemKey])) !== null && _ref2 !== void 0 ? _ref2 : index2;
    };
    var mergedRenderItem = computed(function() {
      return props2.renderItem || function(item) {
        return item;
      };
    });
    var updateDisplayCount = function updateDisplayCount2(count, notReady) {
      displayCount.value = count;
      if (!notReady) {
        restReady.value = count < props2.data.length - 1;
        emit("visibleChange", count);
      }
    };
    var onOverflowResize = function onOverflowResize2(_, element) {
      containerWidth.value = element.clientWidth;
    };
    var registerSize = function registerSize2(key2, width) {
      var clone = new Map(itemWidths.value);
      if (width === null) {
        clone.delete(key2);
      } else {
        clone.set(key2, width);
      }
      itemWidths.value = clone;
    };
    var registerOverflowSize = function registerOverflowSize2(_, width) {
      prevRestWidth.value = restWidth.value;
      restWidth.value = width;
    };
    var registerSuffixSize = function registerSuffixSize2(_, width) {
      suffixWidth.value = width;
    };
    var getItemWidth = function getItemWidth2(index2) {
      return itemWidths.value.get(getKey2(mergedData.value[index2], index2));
    };
    watch([mergedContainerWidth, itemWidths, restWidth, suffixWidth, function() {
      return props2.itemKey;
    }, mergedData], function() {
      if (mergedContainerWidth.value && mergedRestWidth.value && mergedData.value) {
        var totalWidth = suffixWidth.value;
        var len = mergedData.value.length;
        var lastIndex = len - 1;
        if (!len) {
          updateDisplayCount(0);
          suffixFixedStart.value = null;
          return;
        }
        for (var i = 0; i < len; i += 1) {
          var currentItemWidth = getItemWidth(i);
          if (currentItemWidth === void 0) {
            updateDisplayCount(i - 1, true);
            break;
          }
          totalWidth += currentItemWidth;
          if (lastIndex === 0 && totalWidth <= mergedContainerWidth.value || i === lastIndex - 1 && totalWidth + getItemWidth(lastIndex) <= mergedContainerWidth.value) {
            updateDisplayCount(lastIndex);
            suffixFixedStart.value = null;
            break;
          } else if (totalWidth + mergedRestWidth.value > mergedContainerWidth.value) {
            updateDisplayCount(i - 1);
            suffixFixedStart.value = totalWidth - currentItemWidth - suffixWidth.value + restWidth.value;
            break;
          }
        }
        if (props2.suffix && getItemWidth(0) + suffixWidth.value > mergedContainerWidth.value) {
          suffixFixedStart.value = null;
        }
      }
    });
    return function() {
      var displayRest = restReady.value && !!omittedItems.value.length;
      var itemComponent = props2.itemComponent, renderRawItem = props2.renderRawItem, renderRawRest = props2.renderRawRest, renderRest = props2.renderRest, _props$prefixCls = props2.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-overflow" : _props$prefixCls, suffix = props2.suffix, _props$component = props2.component, Component2 = _props$component === void 0 ? "div" : _props$component, id = props2.id, onMousedown2 = props2.onMousedown;
      var className = attrs.class, style = attrs.style, restAttrs = _objectWithoutProperties(attrs, _excluded$g);
      var suffixStyle = {};
      if (suffixFixedStart.value !== null && isResponsive.value) {
        suffixStyle = {
          position: "absolute",
          left: "".concat(suffixFixedStart.value, "px"),
          top: 0
        };
      }
      var itemSharedProps = {
        prefixCls: itemPrefixCls.value,
        responsive: isResponsive.value,
        component: itemComponent,
        invalidate: invalidate.value
      };
      var internalRenderItemNode = renderRawItem ? function(item, index2) {
        var key2 = getKey2(item, index2);
        return createVNode(OverflowContextProvider, {
          "key": key2,
          "value": _objectSpread(_objectSpread({}, itemSharedProps), {}, {
            order: index2,
            item,
            itemKey: key2,
            registerSize,
            display: index2 <= mergedDisplayCount.value
          })
        }, {
          default: function _default4() {
            return [renderRawItem(item, index2)];
          }
        });
      } : function(item, index2) {
        var key2 = getKey2(item, index2);
        return createVNode(Item$2, _objectSpread(_objectSpread({}, itemSharedProps), {}, {
          "order": index2,
          "key": key2,
          "item": item,
          "renderItem": mergedRenderItem.value,
          "itemKey": key2,
          "registerSize": registerSize,
          "display": index2 <= mergedDisplayCount.value
        }), null);
      };
      var restNode = function restNode2() {
        return null;
      };
      var restContextProps = {
        order: displayRest ? mergedDisplayCount.value : Number.MAX_SAFE_INTEGER,
        className: "".concat(itemPrefixCls.value, " ").concat(itemPrefixCls.value, "-rest"),
        registerSize: registerOverflowSize,
        display: displayRest
      };
      if (!renderRawRest) {
        var mergedRenderRest = renderRest || defaultRenderRest;
        restNode = function restNode2() {
          return createVNode(Item$2, _objectSpread(_objectSpread({}, itemSharedProps), restContextProps), {
            default: function _default4() {
              return typeof mergedRenderRest === "function" ? mergedRenderRest(omittedItems.value) : mergedRenderRest;
            }
          });
        };
      } else if (renderRawRest) {
        restNode = function restNode2() {
          return createVNode(OverflowContextProvider, {
            "value": _objectSpread(_objectSpread({}, itemSharedProps), restContextProps)
          }, {
            default: function _default4() {
              return [renderRawRest(omittedItems.value)];
            }
          });
        };
      }
      var overflowNode = function overflowNode2() {
        var _slots$default;
        return createVNode(Component2, _objectSpread({
          "id": id,
          "class": classNames(!invalidate.value && prefixCls, className),
          "style": style,
          "onMousedown": onMousedown2
        }, restAttrs), {
          default: function _default4() {
            return [mergedData.value.map(internalRenderItemNode), showRest.value ? restNode() : null, suffix && createVNode(Item$2, _objectSpread(_objectSpread({}, itemSharedProps), {}, {
              "order": mergedDisplayCount.value,
              "class": "".concat(itemPrefixCls.value, "-suffix"),
              "registerSize": registerSuffixSize,
              "display": true,
              "style": suffixStyle
            }), {
              default: function _default5() {
                return suffix;
              }
            }), (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)];
          }
        });
      };
      return createVNode(ResizeObserver, {
        "disabled": !isResponsive.value,
        "onResize": onOverflowResize
      }, {
        default: overflowNode
      });
    };
  }
});
Overflow.Item = RawItem;
Overflow.RESPONSIVE = RESPONSIVE;
Overflow.INVALIDATE = INVALIDATE;
const Overflow$1 = Overflow;
var TreeSelectLegacyContextPropsKey = Symbol("TreeSelectLegacyContextPropsKey");
function useInjectLegacySelectContext() {
  return inject(TreeSelectLegacyContextPropsKey, {});
}
var props$1 = {
  id: String,
  prefixCls: String,
  values: PropTypes$1.array,
  open: {
    type: Boolean,
    default: void 0
  },
  searchValue: String,
  inputRef: PropTypes$1.any,
  placeholder: PropTypes$1.any,
  disabled: {
    type: Boolean,
    default: void 0
  },
  mode: String,
  showSearch: {
    type: Boolean,
    default: void 0
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  autocomplete: String,
  activeDescendantId: String,
  tabindex: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string]),
  removeIcon: PropTypes$1.any,
  choiceTransitionName: String,
  maxTagCount: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string]),
  maxTagTextLength: Number,
  maxTagPlaceholder: PropTypes$1.any.def(function() {
    return function(omittedValues) {
      return "+ ".concat(omittedValues.length, " ...");
    };
  }),
  tagRender: Function,
  onToggleOpen: {
    type: Function
  },
  onRemove: Function,
  onInputChange: Function,
  onInputPaste: Function,
  onInputKeyDown: Function,
  onInputMouseDown: Function,
  onInputCompositionStart: Function,
  onInputCompositionEnd: Function
};
var onPreventMouseDown = function onPreventMouseDown2(event) {
  event.preventDefault();
  event.stopPropagation();
};
var SelectSelector = defineComponent({
  name: "MultipleSelectSelector",
  inheritAttrs: false,
  props: props$1,
  setup: function setup19(props2) {
    var measureRef = ref();
    var inputWidth = ref(0);
    var focused = ref(false);
    var legacyTreeSelectContext = useInjectLegacySelectContext();
    var selectionPrefixCls = computed(function() {
      return "".concat(props2.prefixCls, "-selection");
    });
    var inputValue = computed(function() {
      return props2.open || props2.mode === "tags" ? props2.searchValue : "";
    });
    var inputEditable = computed(function() {
      return props2.mode === "tags" || props2.showSearch && (props2.open || focused.value);
    });
    function defaultRenderSelector(title, content, itemDisabled, closable, onClose) {
      return createVNode("span", {
        "class": classNames("".concat(selectionPrefixCls.value, "-item"), _defineProperty({}, "".concat(selectionPrefixCls.value, "-item-disabled"), itemDisabled)),
        "title": typeof title === "string" || typeof title === "number" ? title.toString() : void 0
      }, [createVNode("span", {
        "class": "".concat(selectionPrefixCls.value, "-item-content")
      }, [content]), closable && createVNode(TransBtn$1, {
        "class": "".concat(selectionPrefixCls.value, "-item-remove"),
        "onMousedown": onPreventMouseDown,
        "onClick": onClose,
        "customizeIcon": props2.removeIcon
      }, {
        default: function _default4() {
          return [createTextVNode("\xD7")];
        }
      })]);
    }
    function customizeRenderSelector(value, content, itemDisabled, closable, onClose, option) {
      var onMouseDown2 = function onMouseDown3(e) {
        onPreventMouseDown(e);
        props2.onToggleOpen(!open);
      };
      var originData = option;
      if (legacyTreeSelectContext.keyEntities) {
        var _legacyTreeSelectCont;
        originData = ((_legacyTreeSelectCont = legacyTreeSelectContext.keyEntities[value]) === null || _legacyTreeSelectCont === void 0 ? void 0 : _legacyTreeSelectCont.node) || {};
      }
      return createVNode("span", {
        "key": value,
        "onMousedown": onMouseDown2
      }, [props2.tagRender({
        label: content,
        value,
        disabled: itemDisabled,
        closable,
        onClose,
        option: originData
      })]);
    }
    function renderItem(valueItem) {
      var itemDisabled = valueItem.disabled, label = valueItem.label, value = valueItem.value, option = valueItem.option;
      var closable = !props2.disabled && !itemDisabled;
      var displayLabel = label;
      if (typeof props2.maxTagTextLength === "number") {
        if (typeof label === "string" || typeof label === "number") {
          var strLabel = String(displayLabel);
          if (strLabel.length > props2.maxTagTextLength) {
            displayLabel = "".concat(strLabel.slice(0, props2.maxTagTextLength), "...");
          }
        }
      }
      var onClose = function onClose2(event) {
        var _props$onRemove;
        if (event)
          event.stopPropagation();
        (_props$onRemove = props2.onRemove) === null || _props$onRemove === void 0 ? void 0 : _props$onRemove.call(props2, valueItem);
      };
      return typeof props2.tagRender === "function" ? customizeRenderSelector(value, displayLabel, itemDisabled, closable, onClose, option) : defaultRenderSelector(label, displayLabel, itemDisabled, closable, onClose);
    }
    function renderRest(omittedValues) {
      var _props$maxTagPlacehol = props2.maxTagPlaceholder, maxTagPlaceholder = _props$maxTagPlacehol === void 0 ? function(omittedValues2) {
        return "+ ".concat(omittedValues2.length, " ...");
      } : _props$maxTagPlacehol;
      var content = typeof maxTagPlaceholder === "function" ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
      return defaultRenderSelector(content, content, false);
    }
    return function() {
      var id = props2.id, prefixCls = props2.prefixCls, values = props2.values, open2 = props2.open, inputRef = props2.inputRef, placeholder = props2.placeholder, disabled = props2.disabled, autofocus = props2.autofocus, autocomplete = props2.autocomplete, activeDescendantId = props2.activeDescendantId, tabindex = props2.tabindex, onInputChange = props2.onInputChange, onInputPaste = props2.onInputPaste, onInputKeyDown = props2.onInputKeyDown, onInputMouseDown = props2.onInputMouseDown, onInputCompositionStart = props2.onInputCompositionStart, onInputCompositionEnd = props2.onInputCompositionEnd;
      var inputNode = createVNode("div", {
        "class": "".concat(selectionPrefixCls.value, "-search"),
        "style": {
          width: inputWidth.value + "px"
        },
        "key": "input"
      }, [createVNode(Input$1, {
        "inputRef": inputRef,
        "open": open2,
        "prefixCls": prefixCls,
        "id": id,
        "inputElement": null,
        "disabled": disabled,
        "autofocus": autofocus,
        "autocomplete": autocomplete,
        "editable": inputEditable.value,
        "activeDescendantId": activeDescendantId,
        "value": inputValue.value,
        "onKeydown": onInputKeyDown,
        "onMousedown": onInputMouseDown,
        "onChange": onInputChange,
        "onPaste": onInputPaste,
        "onCompositionstart": onInputCompositionStart,
        "onCompositionend": onInputCompositionEnd,
        "tabindex": tabindex,
        "attrs": pickAttrs(props2, true),
        "onFocus": function onFocus2() {
          return focused.value = true;
        },
        "onBlur": function onBlur2() {
          return focused.value = false;
        }
      }, null), createVNode("span", {
        "ref": measureRef,
        "class": "".concat(selectionPrefixCls.value, "-search-mirror"),
        "aria-hidden": true
      }, [inputValue.value, createTextVNode("\xA0")])]);
      var selectionNode = createVNode(Overflow$1, {
        "prefixCls": "".concat(selectionPrefixCls.value, "-overflow"),
        "data": values,
        "renderItem": renderItem,
        "renderRest": renderRest,
        "suffix": inputNode,
        "itemKey": "key",
        "maxCount": props2.maxTagCount,
        "key": "overflow"
      }, null);
      return createVNode(Fragment$1, null, [selectionNode, !values.length && !inputValue.value && createVNode("span", {
        "class": "".concat(selectionPrefixCls.value, "-placeholder")
      }, [placeholder])]);
    };
  }
});
const MultipleSelector = SelectSelector;
var props = {
  inputElement: PropTypes$1.any,
  id: String,
  prefixCls: String,
  values: PropTypes$1.array,
  open: {
    type: Boolean,
    default: void 0
  },
  searchValue: String,
  inputRef: PropTypes$1.any,
  placeholder: PropTypes$1.any,
  disabled: {
    type: Boolean,
    default: void 0
  },
  mode: String,
  showSearch: {
    type: Boolean,
    default: void 0
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  autocomplete: String,
  activeDescendantId: String,
  tabindex: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string]),
  activeValue: String,
  backfill: {
    type: Boolean,
    default: void 0
  },
  optionLabelRender: Function,
  onInputChange: Function,
  onInputPaste: Function,
  onInputKeyDown: Function,
  onInputMouseDown: Function,
  onInputCompositionStart: Function,
  onInputCompositionEnd: Function
};
var SingleSelector = defineComponent({
  name: "SingleSelector",
  setup: function setup20(props2) {
    var inputChanged = ref(false);
    var combobox = computed(function() {
      return props2.mode === "combobox";
    });
    var inputEditable = computed(function() {
      return combobox.value || props2.showSearch;
    });
    var inputValue = computed(function() {
      var inputValue2 = props2.searchValue || "";
      if (combobox.value && props2.activeValue && !inputChanged.value) {
        inputValue2 = props2.activeValue;
      }
      return inputValue2;
    });
    var legacyTreeSelectContext = useInjectLegacySelectContext();
    watch([combobox, function() {
      return props2.activeValue;
    }], function() {
      if (combobox.value) {
        inputChanged.value = false;
      }
    }, {
      immediate: true
    });
    var hasTextInput = computed(function() {
      return props2.mode !== "combobox" && !props2.open && !props2.showSearch ? false : !!inputValue.value;
    });
    var title = computed(function() {
      var item = props2.values[0];
      return item && (typeof item.label === "string" || typeof item.label === "number") ? item.label.toString() : void 0;
    });
    var renderPlaceholder = function renderPlaceholder2() {
      if (props2.values[0]) {
        return null;
      }
      var hiddenStyle = hasTextInput.value ? {
        visibility: "hidden"
      } : void 0;
      return createVNode("span", {
        "class": "".concat(props2.prefixCls, "-selection-placeholder"),
        "style": hiddenStyle
      }, [props2.placeholder]);
    };
    return function() {
      var _item$key2;
      var inputElement = props2.inputElement, prefixCls = props2.prefixCls, id = props2.id, values = props2.values, inputRef = props2.inputRef, disabled = props2.disabled, autofocus = props2.autofocus, autocomplete = props2.autocomplete, activeDescendantId = props2.activeDescendantId, open2 = props2.open, tabindex = props2.tabindex, optionLabelRender = props2.optionLabelRender, onInputKeyDown = props2.onInputKeyDown, onInputMouseDown = props2.onInputMouseDown, onInputChange = props2.onInputChange, onInputPaste = props2.onInputPaste, onInputCompositionStart = props2.onInputCompositionStart, onInputCompositionEnd = props2.onInputCompositionEnd;
      var item = values[0];
      var titleNode = null;
      if (item && legacyTreeSelectContext.customSlots) {
        var _item$key, _legacyTreeSelectCont, _originData$slots;
        var key2 = (_item$key = item.key) !== null && _item$key !== void 0 ? _item$key : item.value;
        var originData = ((_legacyTreeSelectCont = legacyTreeSelectContext.keyEntities[key2]) === null || _legacyTreeSelectCont === void 0 ? void 0 : _legacyTreeSelectCont.node) || {};
        titleNode = legacyTreeSelectContext.customSlots[(_originData$slots = originData.slots) === null || _originData$slots === void 0 ? void 0 : _originData$slots.title] || legacyTreeSelectContext.customSlots.title || item.label;
        if (typeof titleNode === "function") {
          titleNode = titleNode(originData);
        }
      } else {
        titleNode = optionLabelRender && item ? optionLabelRender(item.option) : item === null || item === void 0 ? void 0 : item.label;
      }
      return createVNode(Fragment$1, null, [createVNode("span", {
        "class": "".concat(prefixCls, "-selection-search")
      }, [createVNode(Input$1, {
        "inputRef": inputRef,
        "prefixCls": prefixCls,
        "id": id,
        "open": open2,
        "inputElement": inputElement,
        "disabled": disabled,
        "autofocus": autofocus,
        "autocomplete": autocomplete,
        "editable": inputEditable.value,
        "activeDescendantId": activeDescendantId,
        "value": inputValue.value,
        "onKeydown": onInputKeyDown,
        "onMousedown": onInputMouseDown,
        "onChange": function onChange(e) {
          inputChanged.value = true;
          onInputChange(e);
        },
        "onPaste": onInputPaste,
        "onCompositionstart": onInputCompositionStart,
        "onCompositionend": onInputCompositionEnd,
        "tabindex": tabindex,
        "attrs": pickAttrs(props2, true)
      }, null)]), !combobox.value && item && !hasTextInput.value && createVNode("span", {
        "class": "".concat(prefixCls, "-selection-item"),
        "title": title.value
      }, [createVNode(Fragment$1, {
        "key": (_item$key2 = item.key) !== null && _item$key2 !== void 0 ? _item$key2 : item.value
      }, [titleNode])]), renderPlaceholder()]);
    };
  }
});
SingleSelector.props = props;
SingleSelector.inheritAttrs = false;
const SingleSelector$1 = SingleSelector;
function isValidateOpenKey(currentKeyCode) {
  return ![
    KeyCode$1.ESC,
    KeyCode$1.SHIFT,
    KeyCode$1.BACKSPACE,
    KeyCode$1.TAB,
    KeyCode$1.WIN_KEY,
    KeyCode$1.ALT,
    KeyCode$1.META,
    KeyCode$1.WIN_KEY_RIGHT,
    KeyCode$1.CTRL,
    KeyCode$1.SEMICOLON,
    KeyCode$1.EQUALS,
    KeyCode$1.CAPS_LOCK,
    KeyCode$1.CONTEXT_MENU,
    KeyCode$1.F1,
    KeyCode$1.F2,
    KeyCode$1.F3,
    KeyCode$1.F4,
    KeyCode$1.F5,
    KeyCode$1.F6,
    KeyCode$1.F7,
    KeyCode$1.F8,
    KeyCode$1.F9,
    KeyCode$1.F10,
    KeyCode$1.F11,
    KeyCode$1.F12
  ].includes(currentKeyCode);
}
function useLock() {
  var duration = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250;
  var lock = null;
  var timeout;
  function doLock(locked) {
    if (locked || lock === null) {
      lock = locked;
    }
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      lock = null;
    }, duration);
  }
  return [function() {
    return lock;
  }, doLock];
}
function createRef() {
  var func = function func2(node) {
    func2.current = node;
  };
  return func;
}
var Selector = defineComponent({
  name: "Selector",
  inheritAttrs: false,
  props: {
    id: String,
    prefixCls: String,
    showSearch: {
      type: Boolean,
      default: void 0
    },
    open: {
      type: Boolean,
      default: void 0
    },
    values: PropTypes$1.array,
    multiple: {
      type: Boolean,
      default: void 0
    },
    mode: String,
    searchValue: String,
    activeValue: String,
    inputElement: PropTypes$1.any,
    autofocus: {
      type: Boolean,
      default: void 0
    },
    activeDescendantId: String,
    tabindex: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string]),
    disabled: {
      type: Boolean,
      default: void 0
    },
    placeholder: PropTypes$1.any,
    removeIcon: PropTypes$1.any,
    maxTagCount: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string]),
    maxTagTextLength: Number,
    maxTagPlaceholder: PropTypes$1.any,
    tagRender: Function,
    optionLabelRender: Function,
    tokenWithEnter: {
      type: Boolean,
      default: void 0
    },
    choiceTransitionName: String,
    onToggleOpen: {
      type: Function
    },
    onSearch: Function,
    onSearchSubmit: Function,
    onRemove: Function,
    onInputKeyDown: {
      type: Function
    },
    domRef: Function
  },
  setup: function setup21(props2, _ref) {
    var expose = _ref.expose;
    var inputRef = createRef();
    var compositionStatus = false;
    var _useLock = useLock(0), _useLock2 = _slicedToArray(_useLock, 2), getInputMouseDown = _useLock2[0], setInputMouseDown = _useLock2[1];
    var onInternalInputKeyDown = function onInternalInputKeyDown2(event) {
      var which = event.which;
      if (which === KeyCode$1.UP || which === KeyCode$1.DOWN) {
        event.preventDefault();
      }
      if (props2.onInputKeyDown) {
        props2.onInputKeyDown(event);
      }
      if (which === KeyCode$1.ENTER && props2.mode === "tags" && !compositionStatus && !props2.open) {
        props2.onSearchSubmit(event.target.value);
      }
      if (isValidateOpenKey(which)) {
        props2.onToggleOpen(true);
      }
    };
    var onInternalInputMouseDown = function onInternalInputMouseDown2() {
      setInputMouseDown(true);
    };
    var pastedText = null;
    var triggerOnSearch = function triggerOnSearch2(value) {
      if (props2.onSearch(value, true, compositionStatus) !== false) {
        props2.onToggleOpen(true);
      }
    };
    var onInputCompositionStart = function onInputCompositionStart2() {
      compositionStatus = true;
    };
    var onInputCompositionEnd = function onInputCompositionEnd2(e) {
      compositionStatus = false;
      if (props2.mode !== "combobox") {
        triggerOnSearch(e.target.value);
      }
    };
    var onInputChange = function onInputChange2(event) {
      var value = event.target.value;
      if (props2.tokenWithEnter && pastedText && /[\r\n]/.test(pastedText)) {
        var replacedText = pastedText.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
        value = value.replace(replacedText, pastedText);
      }
      pastedText = null;
      triggerOnSearch(value);
    };
    var onInputPaste = function onInputPaste2(e) {
      var clipboardData = e.clipboardData;
      var value = clipboardData.getData("text");
      pastedText = value;
    };
    var onClick2 = function onClick3(_ref2) {
      var target = _ref2.target;
      if (target !== inputRef.current) {
        var isIE = document.body.style.msTouchAction !== void 0;
        if (isIE) {
          setTimeout(function() {
            inputRef.current.focus();
          });
        } else {
          inputRef.current.focus();
        }
      }
    };
    var onMousedown2 = function onMousedown3(event) {
      var inputMouseDown = getInputMouseDown();
      if (event.target !== inputRef.current && !inputMouseDown) {
        event.preventDefault();
      }
      if (props2.mode !== "combobox" && (!props2.showSearch || !inputMouseDown) || !props2.open) {
        if (props2.open) {
          props2.onSearch("", true, false);
        }
        props2.onToggleOpen();
      }
    };
    expose({
      focus: function focus() {
        inputRef.current.focus();
      },
      blur: function blur() {
        inputRef.current.blur();
      }
    });
    return function() {
      var prefixCls = props2.prefixCls, domRef = props2.domRef, mode = props2.mode;
      var sharedProps = {
        inputRef,
        onInputKeyDown: onInternalInputKeyDown,
        onInputMouseDown: onInternalInputMouseDown,
        onInputChange,
        onInputPaste,
        onInputCompositionStart,
        onInputCompositionEnd
      };
      var selectNode = mode === "multiple" || mode === "tags" ? createVNode(MultipleSelector, _objectSpread(_objectSpread({}, props2), sharedProps), null) : createVNode(SingleSelector$1, _objectSpread(_objectSpread({}, props2), sharedProps), null);
      return createVNode("div", {
        "ref": domRef,
        "class": "".concat(prefixCls, "-selector"),
        "onClick": onClick2,
        "onMousedown": onMousedown2
      }, [selectNode]);
    };
  }
});
const Selector$1 = Selector;
function useDelayReset() {
  var timeout = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;
  var bool = ref(false);
  var delay;
  var cancelLatest = function cancelLatest2() {
    clearTimeout(delay);
  };
  var delaySetBool = function delaySetBool2(value, callback) {
    cancelLatest();
    delay = setTimeout(function() {
      bool.value = value;
      if (callback) {
        callback();
      }
    }, timeout);
  };
  return [bool, delaySetBool, cancelLatest];
}
var BaseSelectContextKey = Symbol("BaseSelectContextKey");
function useProvideBaseSelectProps(props2) {
  return provide(BaseSelectContextKey, props2);
}
function useBaseProps() {
  return inject(BaseSelectContextKey, {});
}
function toReactive(objectRef) {
  if (!isRef(objectRef))
    return reactive(objectRef);
  var proxy = new Proxy({}, {
    get: function get2(_, p, receiver) {
      return Reflect.get(objectRef.value, p, receiver);
    },
    set: function set2(_, p, value) {
      objectRef.value[p] = value;
      return true;
    },
    deleteProperty: function deleteProperty(_, p) {
      return Reflect.deleteProperty(objectRef.value, p);
    },
    has: function has(_, p) {
      return Reflect.has(objectRef.value, p);
    },
    ownKeys: function ownKeys() {
      return Object.keys(objectRef.value);
    },
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  });
  return reactive(proxy);
}
var _excluded$f = ["prefixCls", "id", "open", "defaultOpen", "mode", "showSearch", "searchValue", "onSearch", "allowClear", "clearIcon", "showArrow", "inputIcon", "disabled", "loading", "getInputElement", "getPopupContainer", "placement", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "showAction", "direction", "tokenSeparators", "tagRender", "optionLabelRender", "onPopupScroll", "onDropdownVisibleChange", "onFocus", "onBlur", "onKeyup", "onKeydown", "onMousedown", "onClear", "omitDomProps", "getRawInputElement", "displayValues", "onDisplayValuesChange", "emptyOptions", "activeDescendantId", "activeValue", "OptionList"];
var DEFAULT_OMIT_PROPS = ["value", "onChange", "removeIcon", "placeholder", "autofocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabindex", "OptionList", "notFoundContent"];
var baseSelectPrivateProps = function baseSelectPrivateProps2() {
  return {
    prefixCls: String,
    id: String,
    omitDomProps: Array,
    displayValues: Array,
    onDisplayValuesChange: Function,
    activeValue: String,
    activeDescendantId: String,
    onActiveValueChange: Function,
    searchValue: String,
    onSearch: Function,
    onSearchSplit: Function,
    maxLength: Number,
    OptionList: PropTypes$1.any,
    emptyOptions: Boolean
  };
};
var baseSelectPropsWithoutPrivate = function baseSelectPropsWithoutPrivate2() {
  return {
    showSearch: {
      type: Boolean,
      default: void 0
    },
    tagRender: {
      type: Function
    },
    optionLabelRender: {
      type: Function
    },
    direction: {
      type: String
    },
    tabindex: Number,
    autofocus: Boolean,
    notFoundContent: PropTypes$1.any,
    placeholder: PropTypes$1.any,
    onClear: Function,
    choiceTransitionName: String,
    mode: String,
    disabled: {
      type: Boolean,
      default: void 0
    },
    loading: {
      type: Boolean,
      default: void 0
    },
    open: {
      type: Boolean,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      default: void 0
    },
    onDropdownVisibleChange: {
      type: Function
    },
    getInputElement: {
      type: Function
    },
    getRawInputElement: {
      type: Function
    },
    maxTagTextLength: Number,
    maxTagCount: {
      type: [String, Number]
    },
    maxTagPlaceholder: PropTypes$1.any,
    tokenSeparators: {
      type: Array
    },
    allowClear: {
      type: Boolean,
      default: void 0
    },
    showArrow: {
      type: Boolean,
      default: void 0
    },
    inputIcon: PropTypes$1.any,
    clearIcon: PropTypes$1.any,
    removeIcon: PropTypes$1.any,
    animation: String,
    transitionName: String,
    dropdownStyle: {
      type: Object
    },
    dropdownClassName: String,
    dropdownMatchSelectWidth: {
      type: [Boolean, Number],
      default: void 0
    },
    dropdownRender: {
      type: Function
    },
    dropdownAlign: Object,
    placement: {
      type: String
    },
    getPopupContainer: {
      type: Function
    },
    showAction: {
      type: Array
    },
    onBlur: {
      type: Function
    },
    onFocus: {
      type: Function
    },
    onKeyup: Function,
    onKeydown: Function,
    onMousedown: Function,
    onPopupScroll: Function,
    onInputKeyDown: Function,
    onMouseenter: Function,
    onMouseleave: Function,
    onClick: Function
  };
};
var baseSelectProps = function baseSelectProps2() {
  return _objectSpread(_objectSpread({}, baseSelectPrivateProps()), baseSelectPropsWithoutPrivate());
};
function isMultiple(mode) {
  return mode === "tags" || mode === "multiple";
}
const BaseSelect = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "BaseSelect",
  inheritAttrs: false,
  props: initDefaultProps$1(baseSelectProps(), {
    showAction: [],
    notFoundContent: "Not Found"
  }),
  setup: function setup22(props2, _ref) {
    var attrs = _ref.attrs, expose = _ref.expose, slots = _ref.slots;
    var multiple = computed(function() {
      return isMultiple(props2.mode);
    });
    var mergedShowSearch = computed(function() {
      return props2.showSearch !== void 0 ? props2.showSearch : multiple.value || props2.mode === "combobox";
    });
    var mobile = ref(false);
    var legacyTreeSelectContext = useInjectLegacySelectContext();
    var containerRef = ref(null);
    var selectorDomRef = createRef();
    var triggerRef = ref(null);
    var selectorRef = ref(null);
    var listRef = ref(null);
    var _useDelayReset = useDelayReset(), _useDelayReset2 = _slicedToArray(_useDelayReset, 3), mockFocused = _useDelayReset2[0], setMockFocused = _useDelayReset2[1], cancelSetMockFocused = _useDelayReset2[2];
    var focus = function focus2() {
      var _selectorRef$value;
      (_selectorRef$value = selectorRef.value) === null || _selectorRef$value === void 0 ? void 0 : _selectorRef$value.focus();
    };
    var blur = function blur2() {
      var _selectorRef$value2;
      (_selectorRef$value2 = selectorRef.value) === null || _selectorRef$value2 === void 0 ? void 0 : _selectorRef$value2.blur();
    };
    expose({
      focus,
      blur,
      scrollTo: function scrollTo(arg) {
        var _listRef$value;
        return (_listRef$value = listRef.value) === null || _listRef$value === void 0 ? void 0 : _listRef$value.scrollTo(arg);
      }
    });
    var mergedSearchValue = computed(function() {
      var _props$displayValues$;
      if (props2.mode !== "combobox") {
        return props2.searchValue;
      }
      var val = (_props$displayValues$ = props2.displayValues[0]) === null || _props$displayValues$ === void 0 ? void 0 : _props$displayValues$.value;
      return typeof val === "string" || typeof val === "number" ? String(val) : "";
    });
    var initOpen = props2.open !== void 0 ? props2.open : props2.defaultOpen;
    var innerOpen = ref(initOpen);
    var mergedOpen = ref(initOpen);
    var setInnerOpen = function setInnerOpen2(val) {
      innerOpen.value = props2.open !== void 0 ? props2.open : val;
      mergedOpen.value = innerOpen.value;
    };
    watch(function() {
      return props2.open;
    }, function() {
      setInnerOpen(props2.open);
    });
    var emptyListContent = computed(function() {
      return !props2.notFoundContent && props2.emptyOptions;
    });
    watchEffect(function() {
      mergedOpen.value = innerOpen.value;
      if (props2.disabled || emptyListContent.value && mergedOpen.value && props2.mode === "combobox") {
        mergedOpen.value = false;
      }
    });
    var triggerOpen = computed(function() {
      return emptyListContent.value ? false : mergedOpen.value;
    });
    var onToggleOpen = function onToggleOpen2(newOpen) {
      var nextOpen = newOpen !== void 0 ? newOpen : !mergedOpen.value;
      if (innerOpen.value !== nextOpen && !props2.disabled) {
        setInnerOpen(nextOpen);
        if (props2.onDropdownVisibleChange) {
          props2.onDropdownVisibleChange(nextOpen);
        }
      }
    };
    var tokenWithEnter = computed(function() {
      return (props2.tokenSeparators || []).some(function(tokenSeparator) {
        return ["\n", "\r\n"].includes(tokenSeparator);
      });
    });
    var onInternalSearch = function onInternalSearch2(searchText, fromTyping, isCompositing) {
      var _props$onActiveValueC;
      var ret = true;
      var newSearchText = searchText;
      (_props$onActiveValueC = props2.onActiveValueChange) === null || _props$onActiveValueC === void 0 ? void 0 : _props$onActiveValueC.call(props2, null);
      var patchLabels = isCompositing ? null : getSeparatedContent(searchText, props2.tokenSeparators);
      if (props2.mode !== "combobox" && patchLabels) {
        var _props$onSearchSplit;
        newSearchText = "";
        (_props$onSearchSplit = props2.onSearchSplit) === null || _props$onSearchSplit === void 0 ? void 0 : _props$onSearchSplit.call(props2, patchLabels);
        onToggleOpen(false);
        ret = false;
      }
      if (props2.onSearch && mergedSearchValue.value !== newSearchText) {
        props2.onSearch(newSearchText, {
          source: fromTyping ? "typing" : "effect"
        });
      }
      return ret;
    };
    var onInternalSearchSubmit = function onInternalSearchSubmit2(searchText) {
      var _props$onSearch;
      if (!searchText || !searchText.trim()) {
        return;
      }
      (_props$onSearch = props2.onSearch) === null || _props$onSearch === void 0 ? void 0 : _props$onSearch.call(props2, searchText, {
        source: "submit"
      });
    };
    watch(mergedOpen, function() {
      if (!mergedOpen.value && !multiple.value && props2.mode !== "combobox") {
        onInternalSearch("", false, false);
      }
    }, {
      immediate: true,
      flush: "post"
    });
    watch(function() {
      return props2.disabled;
    }, function() {
      if (innerOpen.value && !!props2.disabled) {
        setInnerOpen(false);
      }
    }, {
      immediate: true
    });
    var _useLock = useLock(), _useLock2 = _slicedToArray(_useLock, 2), getClearLock = _useLock2[0], setClearLock = _useLock2[1];
    var onInternalKeyDown = function onInternalKeyDown2(event) {
      var _props$onKeydown;
      var clearLock = getClearLock();
      var which = event.which;
      if (which === KeyCode$1.ENTER) {
        if (props2.mode !== "combobox") {
          event.preventDefault();
        }
        if (!mergedOpen.value) {
          onToggleOpen(true);
        }
      }
      setClearLock(!!mergedSearchValue.value);
      if (which === KeyCode$1.BACKSPACE && !clearLock && multiple.value && !mergedSearchValue.value && props2.displayValues.length) {
        var cloneDisplayValues = _toConsumableArray(props2.displayValues);
        var removedDisplayValue = null;
        for (var i = cloneDisplayValues.length - 1; i >= 0; i -= 1) {
          var current2 = cloneDisplayValues[i];
          if (!current2.disabled) {
            cloneDisplayValues.splice(i, 1);
            removedDisplayValue = current2;
            break;
          }
        }
        if (removedDisplayValue) {
          props2.onDisplayValuesChange(cloneDisplayValues, {
            type: "remove",
            values: [removedDisplayValue]
          });
        }
      }
      for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }
      if (mergedOpen.value && listRef.value) {
        var _listRef$value2;
        (_listRef$value2 = listRef.value).onKeydown.apply(_listRef$value2, [event].concat(rest));
      }
      (_props$onKeydown = props2.onKeydown) === null || _props$onKeydown === void 0 ? void 0 : _props$onKeydown.call.apply(_props$onKeydown, [props2, event].concat(rest));
    };
    var onInternalKeyUp = function onInternalKeyUp2(event) {
      for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }
      if (mergedOpen.value && listRef.value) {
        var _listRef$value3;
        (_listRef$value3 = listRef.value).onKeyup.apply(_listRef$value3, [event].concat(rest));
      }
      if (props2.onKeyup) {
        props2.onKeyup.apply(props2, [event].concat(rest));
      }
    };
    var onSelectorRemove = function onSelectorRemove2(val) {
      var newValues = props2.displayValues.filter(function(i) {
        return i !== val;
      });
      props2.onDisplayValuesChange(newValues, {
        type: "remove",
        values: [val]
      });
    };
    var focusRef = ref(false);
    var onContainerFocus = function onContainerFocus2() {
      setMockFocused(true);
      if (!props2.disabled) {
        if (props2.onFocus && !focusRef.value) {
          props2.onFocus.apply(props2, arguments);
        }
        if (props2.showAction && props2.showAction.includes("focus")) {
          onToggleOpen(true);
        }
      }
      focusRef.value = true;
    };
    var onContainerBlur = function onContainerBlur2() {
      setMockFocused(false, function() {
        focusRef.value = false;
        onToggleOpen(false);
      });
      if (props2.disabled) {
        return;
      }
      var searchVal = mergedSearchValue.value;
      if (searchVal) {
        if (props2.mode === "tags") {
          props2.onSearch(searchVal, {
            source: "submit"
          });
        } else if (props2.mode === "multiple") {
          props2.onSearch("", {
            source: "blur"
          });
        }
      }
      if (props2.onBlur) {
        props2.onBlur.apply(props2, arguments);
      }
    };
    provide("VCSelectContainerEvent", {
      focus: onContainerFocus,
      blur: onContainerBlur
    });
    var onInternalMouseDown = function onInternalMouseDown2(event) {
      var _triggerRef$value, _props$onMousedown;
      var target = event.target;
      var popupElement = (_triggerRef$value = triggerRef.value) === null || _triggerRef$value === void 0 ? void 0 : _triggerRef$value.getPopupElement();
      if (popupElement && popupElement.contains(target)) {
        setTimeout(function() {
          cancelSetMockFocused();
          if (!mobile.value && !popupElement.contains(document.activeElement)) {
            var _selectorRef$value3;
            (_selectorRef$value3 = selectorRef.value) === null || _selectorRef$value3 === void 0 ? void 0 : _selectorRef$value3.focus();
          }
        });
      }
      for (var _len3 = arguments.length, restArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        restArgs[_key3 - 1] = arguments[_key3];
      }
      (_props$onMousedown = props2.onMousedown) === null || _props$onMousedown === void 0 ? void 0 : _props$onMousedown.call.apply(_props$onMousedown, [props2, event].concat(restArgs));
    };
    var containerWidth = ref(null);
    var instance = getCurrentInstance();
    var onPopupMouseEnter = function onPopupMouseEnter2() {
      instance.update();
    };
    useProvideBaseSelectProps(toReactive(_objectSpread(_objectSpread({}, toRefs(props2)), {}, {
      open: mergedOpen,
      triggerOpen,
      showSearch: mergedShowSearch,
      multiple,
      toggleOpen: onToggleOpen
    })));
    return function() {
      var _classNames2;
      var _props$attrs = _objectSpread(_objectSpread({}, props2), attrs), prefixCls = _props$attrs.prefixCls, id = _props$attrs.id;
      _props$attrs.open;
      _props$attrs.defaultOpen;
      var mode = _props$attrs.mode;
      _props$attrs.showSearch;
      _props$attrs.searchValue;
      _props$attrs.onSearch;
      var allowClear = _props$attrs.allowClear, clearIcon = _props$attrs.clearIcon, showArrow = _props$attrs.showArrow, inputIcon = _props$attrs.inputIcon, disabled = _props$attrs.disabled, loading = _props$attrs.loading, getInputElement = _props$attrs.getInputElement, getPopupContainer = _props$attrs.getPopupContainer, placement = _props$attrs.placement, animation = _props$attrs.animation, transitionName2 = _props$attrs.transitionName, dropdownStyle = _props$attrs.dropdownStyle, dropdownClassName = _props$attrs.dropdownClassName, dropdownMatchSelectWidth = _props$attrs.dropdownMatchSelectWidth, dropdownRender = _props$attrs.dropdownRender, dropdownAlign = _props$attrs.dropdownAlign;
      _props$attrs.showAction;
      var direction = _props$attrs.direction;
      _props$attrs.tokenSeparators;
      var tagRender = _props$attrs.tagRender, optionLabelRender = _props$attrs.optionLabelRender;
      _props$attrs.onPopupScroll;
      _props$attrs.onDropdownVisibleChange;
      _props$attrs.onFocus;
      _props$attrs.onBlur;
      _props$attrs.onKeyup;
      _props$attrs.onKeydown;
      _props$attrs.onMousedown;
      var onClear = _props$attrs.onClear, omitDomProps = _props$attrs.omitDomProps, getRawInputElement = _props$attrs.getRawInputElement, displayValues = _props$attrs.displayValues, onDisplayValuesChange = _props$attrs.onDisplayValuesChange, emptyOptions = _props$attrs.emptyOptions, activeDescendantId = _props$attrs.activeDescendantId, activeValue = _props$attrs.activeValue, OptionList2 = _props$attrs.OptionList, restProps = _objectWithoutProperties(_props$attrs, _excluded$f);
      var customizeInputElement = mode === "combobox" && getInputElement && getInputElement() || null;
      var customizeRawInputElement = typeof getRawInputElement === "function" && getRawInputElement();
      var domProps = _objectSpread({}, restProps);
      var onTriggerVisibleChange;
      if (customizeRawInputElement) {
        onTriggerVisibleChange = function onTriggerVisibleChange2(newOpen) {
          onToggleOpen(newOpen);
        };
      }
      DEFAULT_OMIT_PROPS.forEach(function(propName) {
        delete domProps[propName];
      });
      omitDomProps === null || omitDomProps === void 0 ? void 0 : omitDomProps.forEach(function(propName) {
        delete domProps[propName];
      });
      var mergedShowArrow = showArrow !== void 0 ? showArrow : loading || !multiple.value && mode !== "combobox";
      var arrowNode;
      if (mergedShowArrow) {
        arrowNode = createVNode(TransBtn$1, {
          "class": classNames("".concat(prefixCls, "-arrow"), _defineProperty({}, "".concat(prefixCls, "-arrow-loading"), loading)),
          "customizeIcon": inputIcon,
          "customizeIconProps": {
            loading,
            searchValue: mergedSearchValue.value,
            open: mergedOpen.value,
            focused: mockFocused.value,
            showSearch: mergedShowSearch.value
          }
        }, null);
      }
      var clearNode;
      var onClearMouseDown = function onClearMouseDown2() {
        onClear === null || onClear === void 0 ? void 0 : onClear();
        onDisplayValuesChange([], {
          type: "clear",
          values: displayValues
        });
        onInternalSearch("", false, false);
      };
      if (!disabled && allowClear && (displayValues.length || mergedSearchValue.value)) {
        clearNode = createVNode(TransBtn$1, {
          "class": "".concat(prefixCls, "-clear"),
          "onMousedown": onClearMouseDown,
          "customizeIcon": clearIcon
        }, {
          default: function _default4() {
            return [createTextVNode("\xD7")];
          }
        });
      }
      var optionList = createVNode(OptionList2, {
        "ref": listRef
      }, _objectSpread(_objectSpread({}, legacyTreeSelectContext.customSlots), {}, {
        option: slots.option
      }));
      var mergedClassName = classNames(prefixCls, attrs.class, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-focused"), mockFocused.value), _defineProperty(_classNames2, "".concat(prefixCls, "-multiple"), multiple.value), _defineProperty(_classNames2, "".concat(prefixCls, "-single"), !multiple.value), _defineProperty(_classNames2, "".concat(prefixCls, "-allow-clear"), allowClear), _defineProperty(_classNames2, "".concat(prefixCls, "-show-arrow"), mergedShowArrow), _defineProperty(_classNames2, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames2, "".concat(prefixCls, "-loading"), loading), _defineProperty(_classNames2, "".concat(prefixCls, "-open"), mergedOpen.value), _defineProperty(_classNames2, "".concat(prefixCls, "-customize-input"), customizeInputElement), _defineProperty(_classNames2, "".concat(prefixCls, "-show-search"), mergedShowSearch.value), _classNames2));
      var selectorNode = createVNode(SelectTrigger$1, {
        "ref": triggerRef,
        "disabled": disabled,
        "prefixCls": prefixCls,
        "visible": triggerOpen.value,
        "popupElement": optionList,
        "containerWidth": containerWidth.value,
        "animation": animation,
        "transitionName": transitionName2,
        "dropdownStyle": dropdownStyle,
        "dropdownClassName": dropdownClassName,
        "direction": direction,
        "dropdownMatchSelectWidth": dropdownMatchSelectWidth,
        "dropdownRender": dropdownRender,
        "dropdownAlign": dropdownAlign,
        "placement": placement,
        "getPopupContainer": getPopupContainer,
        "empty": emptyOptions,
        "getTriggerDOMNode": function getTriggerDOMNode() {
          return selectorDomRef.current;
        },
        "onPopupVisibleChange": onTriggerVisibleChange,
        "onPopupMouseEnter": onPopupMouseEnter
      }, {
        default: function _default4() {
          return customizeRawInputElement ? isValidElement(customizeRawInputElement) && cloneElement(customizeRawInputElement, {
            ref: selectorDomRef
          }, false, true) : createVNode(Selector$1, _objectSpread(_objectSpread({}, props2), {}, {
            "domRef": selectorDomRef,
            "prefixCls": prefixCls,
            "inputElement": customizeInputElement,
            "ref": selectorRef,
            "id": id,
            "showSearch": mergedShowSearch.value,
            "mode": mode,
            "activeDescendantId": activeDescendantId,
            "tagRender": tagRender,
            "optionLabelRender": optionLabelRender,
            "values": displayValues,
            "open": mergedOpen.value,
            "onToggleOpen": onToggleOpen,
            "activeValue": activeValue,
            "searchValue": mergedSearchValue.value,
            "onSearch": onInternalSearch,
            "onSearchSubmit": onInternalSearchSubmit,
            "onRemove": onSelectorRemove,
            "tokenWithEnter": tokenWithEnter.value
          }), null);
        }
      });
      var renderNode;
      if (customizeRawInputElement) {
        renderNode = selectorNode;
      } else {
        renderNode = createVNode("div", _objectSpread(_objectSpread({}, domProps), {}, {
          "class": mergedClassName,
          "ref": containerRef,
          "onMousedown": onInternalMouseDown,
          "onKeydown": onInternalKeyDown,
          "onKeyup": onInternalKeyUp
        }), [mockFocused.value && !mergedOpen.value && createVNode("span", {
          "style": {
            width: 0,
            height: 0,
            display: "flex",
            overflow: "hidden",
            opacity: 0
          },
          "aria-live": "polite"
        }, ["".concat(displayValues.map(function(_ref2) {
          var label = _ref2.label, value = _ref2.value;
          return ["number", "string"].includes(_typeof(label)) ? label : value;
        }).join(", "))]), selectorNode, arrowNode, clearNode]);
      }
      return renderNode;
    };
  }
});
var Filter = function Filter2(_ref, _ref2) {
  var _slots$default;
  var height = _ref.height, offset2 = _ref.offset, prefixCls = _ref.prefixCls, onInnerResize = _ref.onInnerResize;
  var slots = _ref2.slots;
  var outerStyle = {};
  var innerStyle = {
    display: "flex",
    flexDirection: "column"
  };
  if (offset2 !== void 0) {
    outerStyle = {
      height: "".concat(height, "px"),
      position: "relative",
      overflow: "hidden"
    };
    innerStyle = _objectSpread(_objectSpread({}, innerStyle), {}, {
      transform: "translateY(".concat(offset2, "px)"),
      position: "absolute",
      left: 0,
      right: 0,
      top: 0
    });
  }
  return createVNode("div", {
    "style": outerStyle
  }, [createVNode(ResizeObserver, {
    "onResize": function onResize(_ref3) {
      var offsetHeight = _ref3.offsetHeight;
      if (offsetHeight && onInnerResize) {
        onInnerResize();
      }
    }
  }, {
    default: function _default4() {
      return [createVNode("div", {
        "style": innerStyle,
        "class": classNames(_defineProperty({}, "".concat(prefixCls, "-holder-inner"), prefixCls))
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)])];
    }
  })]);
};
Filter.displayName = "Filter";
Filter.inheritAttrs = false;
Filter.props = {
  prefixCls: String,
  height: Number,
  offset: Number,
  onInnerResize: Function
};
const Filler = Filter;
var Item = function Item2(_ref, _ref2) {
  var _slots$default;
  var setRef = _ref.setRef;
  var slots = _ref2.slots;
  var children = flattenChildren((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
  return children && children.length ? cloneVNode(children[0], {
    ref: setRef
  }) : children;
};
Item.props = {
  setRef: {
    type: Function,
    default: function _default() {
    }
  }
};
const Item$1 = Item;
var MIN_SIZE = 20;
function getPageY(e) {
  return "touches" in e ? e.touches[0].pageY : e.pageY;
}
const ScrollBar = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ScrollBar",
  inheritAttrs: false,
  props: {
    prefixCls: String,
    scrollTop: Number,
    scrollHeight: Number,
    height: Number,
    count: Number,
    onScroll: {
      type: Function
    },
    onStartMove: {
      type: Function
    },
    onStopMove: {
      type: Function
    }
  },
  setup: function setup23() {
    return {
      moveRaf: null,
      scrollbarRef: createRef(),
      thumbRef: createRef(),
      visibleTimeout: null,
      state: reactive({
        dragging: false,
        pageY: null,
        startTop: null,
        visible: false
      })
    };
  },
  watch: {
    scrollTop: {
      handler: function handler() {
        this.delayHidden();
      },
      flush: "post"
    }
  },
  mounted: function mounted2() {
    var _this$scrollbarRef$cu, _this$thumbRef$curren;
    (_this$scrollbarRef$cu = this.scrollbarRef.current) === null || _this$scrollbarRef$cu === void 0 ? void 0 : _this$scrollbarRef$cu.addEventListener("touchstart", this.onScrollbarTouchStart, supportsPassive$1 ? {
      passive: false
    } : false);
    (_this$thumbRef$curren = this.thumbRef.current) === null || _this$thumbRef$curren === void 0 ? void 0 : _this$thumbRef$curren.addEventListener("touchstart", this.onMouseDown, supportsPassive$1 ? {
      passive: false
    } : false);
  },
  beforeUnmount: function beforeUnmount2() {
    this.removeEvents();
    clearTimeout(this.visibleTimeout);
  },
  methods: {
    delayHidden: function delayHidden() {
      var _this = this;
      clearTimeout(this.visibleTimeout);
      this.state.visible = true;
      this.visibleTimeout = setTimeout(function() {
        _this.state.visible = false;
      }, 2e3);
    },
    onScrollbarTouchStart: function onScrollbarTouchStart(e) {
      e.preventDefault();
    },
    onContainerMouseDown: function onContainerMouseDown(e) {
      e.stopPropagation();
      e.preventDefault();
    },
    patchEvents: function patchEvents() {
      window.addEventListener("mousemove", this.onMouseMove);
      window.addEventListener("mouseup", this.onMouseUp);
      this.thumbRef.current.addEventListener("touchmove", this.onMouseMove, supportsPassive$1 ? {
        passive: false
      } : false);
      this.thumbRef.current.addEventListener("touchend", this.onMouseUp);
    },
    removeEvents: function removeEvents() {
      window.removeEventListener("mousemove", this.onMouseMove);
      window.removeEventListener("mouseup", this.onMouseUp);
      this.scrollbarRef.current.removeEventListener("touchstart", this.onScrollbarTouchStart, supportsPassive$1 ? {
        passive: false
      } : false);
      this.thumbRef.current.removeEventListener("touchstart", this.onMouseDown, supportsPassive$1 ? {
        passive: false
      } : false);
      this.thumbRef.current.removeEventListener("touchmove", this.onMouseMove, supportsPassive$1 ? {
        passive: false
      } : false);
      this.thumbRef.current.removeEventListener("touchend", this.onMouseUp);
      wrapperRaf.cancel(this.moveRaf);
    },
    onMouseDown: function onMouseDown(e) {
      var onStartMove = this.$props.onStartMove;
      _extends(this.state, {
        dragging: true,
        pageY: getPageY(e),
        startTop: this.getTop()
      });
      onStartMove();
      this.patchEvents();
      e.stopPropagation();
      e.preventDefault();
    },
    onMouseMove: function onMouseMove2(e) {
      var _this$state = this.state, dragging = _this$state.dragging, pageY = _this$state.pageY, startTop = _this$state.startTop;
      var onScroll = this.$props.onScroll;
      wrapperRaf.cancel(this.moveRaf);
      if (dragging) {
        var offsetY = getPageY(e) - pageY;
        var newTop = startTop + offsetY;
        var enableScrollRange = this.getEnableScrollRange();
        var enableHeightRange = this.getEnableHeightRange();
        var ptg = enableHeightRange ? newTop / enableHeightRange : 0;
        var newScrollTop = Math.ceil(ptg * enableScrollRange);
        this.moveRaf = wrapperRaf(function() {
          onScroll(newScrollTop);
        });
      }
    },
    onMouseUp: function onMouseUp() {
      var onStopMove = this.$props.onStopMove;
      this.state.dragging = false;
      onStopMove();
      this.removeEvents();
    },
    getSpinHeight: function getSpinHeight() {
      var _this$$props = this.$props, height = _this$$props.height, count = _this$$props.count;
      var baseHeight = height / count * 10;
      baseHeight = Math.max(baseHeight, MIN_SIZE);
      baseHeight = Math.min(baseHeight, height / 2);
      return Math.floor(baseHeight);
    },
    getEnableScrollRange: function getEnableScrollRange() {
      var _this$$props2 = this.$props, scrollHeight = _this$$props2.scrollHeight, height = _this$$props2.height;
      return scrollHeight - height || 0;
    },
    getEnableHeightRange: function getEnableHeightRange() {
      var height = this.$props.height;
      var spinHeight = this.getSpinHeight();
      return height - spinHeight || 0;
    },
    getTop: function getTop() {
      var scrollTop = this.$props.scrollTop;
      var enableScrollRange = this.getEnableScrollRange();
      var enableHeightRange = this.getEnableHeightRange();
      if (scrollTop === 0 || enableScrollRange === 0) {
        return 0;
      }
      var ptg = scrollTop / enableScrollRange;
      return ptg * enableHeightRange;
    },
    showScroll: function showScroll() {
      var _this$$props3 = this.$props, height = _this$$props3.height, scrollHeight = _this$$props3.scrollHeight;
      return scrollHeight > height;
    }
  },
  render: function render3() {
    var _this$state2 = this.state, dragging = _this$state2.dragging, visible = _this$state2.visible;
    var prefixCls = this.$props.prefixCls;
    var spinHeight = this.getSpinHeight() + "px";
    var top = this.getTop() + "px";
    var canScroll = this.showScroll();
    var mergedVisible = canScroll && visible;
    return createVNode("div", {
      "ref": this.scrollbarRef,
      "class": classNames("".concat(prefixCls, "-scrollbar"), _defineProperty({}, "".concat(prefixCls, "-scrollbar-show"), canScroll)),
      "style": {
        width: "8px",
        top: 0,
        bottom: 0,
        right: 0,
        position: "absolute",
        display: mergedVisible ? void 0 : "none"
      },
      "onMousedown": this.onContainerMouseDown,
      "onMousemove": this.delayHidden
    }, [createVNode("div", {
      "ref": this.thumbRef,
      "class": classNames("".concat(prefixCls, "-scrollbar-thumb"), _defineProperty({}, "".concat(prefixCls, "-scrollbar-thumb-moving"), dragging)),
      "style": {
        width: "100%",
        height: spinHeight,
        top,
        left: 0,
        position: "absolute",
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "99px",
        cursor: "pointer",
        userSelect: "none"
      },
      "onMousedown": this.onMouseDown
    }, null)]);
  }
});
function useHeights(mergedData, getKey2, onItemAdd, onItemRemove) {
  var instance = /* @__PURE__ */ new Map();
  var heights = /* @__PURE__ */ new Map();
  var updatedMark = ref(Symbol("update"));
  watch(mergedData, function() {
    updatedMark.value = Symbol("update");
  });
  var heightUpdateId = 0;
  function collectHeight() {
    heightUpdateId += 1;
    var currentId = heightUpdateId;
    Promise.resolve().then(function() {
      if (currentId !== heightUpdateId)
        return;
      instance.forEach(function(element, key2) {
        if (element && element.offsetParent) {
          var offsetHeight = element.offsetHeight;
          if (heights.get(key2) !== offsetHeight) {
            updatedMark.value = Symbol("update");
            heights.set(key2, element.offsetHeight);
          }
        }
      });
    });
  }
  function setInstance(item, ins) {
    var key2 = getKey2(item);
    var origin = instance.get(key2);
    if (ins) {
      instance.set(key2, ins.$el || ins);
      collectHeight();
    } else {
      instance.delete(key2);
    }
    if (!origin !== !ins) {
      if (ins) {
        onItemAdd === null || onItemAdd === void 0 ? void 0 : onItemAdd(item);
      } else {
        onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(item);
      }
    }
  }
  return [setInstance, collectHeight, heights, updatedMark];
}
function useScrollTo(containerRef, mergedData, heights, props2, getKey2, collectHeight, syncScrollTop, triggerFlash) {
  var scroll;
  return function(arg) {
    if (arg === null || arg === void 0) {
      triggerFlash();
      return;
    }
    wrapperRaf.cancel(scroll);
    var data3 = mergedData.value;
    var itemHeight = props2.itemHeight;
    if (typeof arg === "number") {
      syncScrollTop(arg);
    } else if (arg && _typeof(arg) === "object") {
      var index2;
      var align = arg.align;
      if ("index" in arg) {
        index2 = arg.index;
      } else {
        index2 = data3.findIndex(function(item) {
          return getKey2(item) === arg.key;
        });
      }
      var _arg$offset = arg.offset, offset2 = _arg$offset === void 0 ? 0 : _arg$offset;
      var syncScroll = function syncScroll2(times, targetAlign) {
        if (times < 0 || !containerRef.value)
          return;
        var height = containerRef.value.clientHeight;
        var needCollectHeight = false;
        var newTargetAlign = targetAlign;
        if (height) {
          var mergedAlign = targetAlign || align;
          var stackTop = 0;
          var itemTop = 0;
          var itemBottom = 0;
          var maxLen = Math.min(data3.length, index2);
          for (var i = 0; i <= maxLen; i += 1) {
            var key2 = getKey2(data3[i]);
            itemTop = stackTop;
            var cacheHeight = heights.get(key2);
            itemBottom = itemTop + (cacheHeight === void 0 ? itemHeight : cacheHeight);
            stackTop = itemBottom;
            if (i === index2 && cacheHeight === void 0) {
              needCollectHeight = true;
            }
          }
          var scrollTop = containerRef.value.scrollTop;
          var targetTop = null;
          switch (mergedAlign) {
            case "top":
              targetTop = itemTop - offset2;
              break;
            case "bottom":
              targetTop = itemBottom - height + offset2;
              break;
            default: {
              var scrollBottom = scrollTop + height;
              if (itemTop < scrollTop) {
                newTargetAlign = "top";
              } else if (itemBottom > scrollBottom) {
                newTargetAlign = "bottom";
              }
            }
          }
          if (targetTop !== null && targetTop !== scrollTop) {
            syncScrollTop(targetTop);
          }
        }
        scroll = wrapperRaf(function() {
          if (needCollectHeight) {
            collectHeight();
          }
          syncScroll2(times - 1, newTargetAlign);
        });
      };
      syncScroll(5);
    }
  };
}
var isFF = false;
const isFF$1 = isFF;
const useOriginScroll = function(isScrollAtTop, isScrollAtBottom) {
  var lock = false;
  var lockTimeout = null;
  function lockScroll() {
    clearTimeout(lockTimeout);
    lock = true;
    lockTimeout = setTimeout(function() {
      lock = false;
    }, 50);
  }
  return function(deltaY) {
    var smoothOffset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var originScroll = deltaY < 0 && isScrollAtTop.value || deltaY > 0 && isScrollAtBottom.value;
    if (smoothOffset && originScroll) {
      clearTimeout(lockTimeout);
      lock = false;
    } else if (!originScroll || lock) {
      lockScroll();
    }
    return !lock && originScroll;
  };
};
function useFrameWheel(inVirtual, isScrollAtTop, isScrollAtBottom, onWheelDelta) {
  var offsetRef = 0;
  var nextFrame = null;
  var wheelValue = null;
  var isMouseScroll = false;
  var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom);
  function onWheel(event) {
    if (!inVirtual.value)
      return;
    wrapperRaf.cancel(nextFrame);
    var deltaY = event.deltaY;
    offsetRef += deltaY;
    wheelValue = deltaY;
    if (originScroll(deltaY))
      return;
    if (!isFF$1) {
      event.preventDefault();
    }
    nextFrame = wrapperRaf(function() {
      var patchMultiple = isMouseScroll ? 10 : 1;
      onWheelDelta(offsetRef * patchMultiple);
      offsetRef = 0;
    });
  }
  function onFireFoxScroll(event) {
    if (!inVirtual.value)
      return;
    isMouseScroll = event.detail === wheelValue;
  }
  return [onWheel, onFireFoxScroll];
}
var _excluded$e = ["prefixCls", "height", "itemHeight", "fullHeight", "data", "itemKey", "virtual", "component", "onScroll", "children", "style", "class"];
var EMPTY_DATA = [];
var ScrollStyle = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function renderChildren(list, startIndex, endIndex, setNodeRef, renderFunc, _ref) {
  var getKey2 = _ref.getKey;
  return list.slice(startIndex, endIndex + 1).map(function(item, index2) {
    var eleIndex = startIndex + index2;
    var node = renderFunc(item, eleIndex, {});
    var key2 = getKey2(item);
    return createVNode(Item$1, {
      "key": key2,
      "setRef": function setRef(ele) {
        return setNodeRef(item, ele);
      }
    }, {
      default: function _default4() {
        return [node];
      }
    });
  });
}
var List = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "List",
  inheritAttrs: false,
  props: {
    prefixCls: String,
    data: PropTypes$1.array,
    height: Number,
    itemHeight: Number,
    fullHeight: {
      type: Boolean,
      default: void 0
    },
    itemKey: {
      type: [String, Number, Function],
      required: true
    },
    component: {
      type: [String, Object]
    },
    virtual: {
      type: Boolean,
      default: void 0
    },
    children: Function,
    onScroll: Function,
    onMousedown: Function,
    onMouseenter: Function,
    onVisibleChange: Function
  },
  setup: function setup24(props2, _ref2) {
    var expose = _ref2.expose;
    var useVirtual = computed(function() {
      var height = props2.height, itemHeight = props2.itemHeight, virtual = props2.virtual;
      return !!(virtual !== false && height && itemHeight);
    });
    var inVirtual = computed(function() {
      var height = props2.height, itemHeight = props2.itemHeight, data4 = props2.data;
      return useVirtual.value && data4 && itemHeight * data4.length > height;
    });
    var state = reactive({
      scrollTop: 0,
      scrollMoving: false
    });
    var data3 = computed(function() {
      return props2.data || EMPTY_DATA;
    });
    var mergedData = shallowRef([]);
    watch(data3, function() {
      mergedData.value = toRaw(data3.value).slice();
    }, {
      immediate: true
    });
    var itemKey = shallowRef(function(_item) {
      return void 0;
    });
    watch(function() {
      return props2.itemKey;
    }, function(val) {
      if (typeof val === "function") {
        itemKey.value = val;
      } else {
        itemKey.value = function(item) {
          return item === null || item === void 0 ? void 0 : item[val];
        };
      }
    }, {
      immediate: true
    });
    var componentRef = ref();
    var fillerInnerRef = ref();
    var scrollBarRef = ref();
    var getKey2 = function getKey3(item) {
      return itemKey.value(item);
    };
    var sharedConfig = {
      getKey: getKey2
    };
    function syncScrollTop(newTop) {
      var value;
      if (typeof newTop === "function") {
        value = newTop(state.scrollTop);
      } else {
        value = newTop;
      }
      var alignedTop = keepInRange(value);
      if (componentRef.value) {
        componentRef.value.scrollTop = alignedTop;
      }
      state.scrollTop = alignedTop;
    }
    var _useHeights = useHeights(mergedData, getKey2, null, null), _useHeights2 = _slicedToArray(_useHeights, 4), setInstance = _useHeights2[0], collectHeight = _useHeights2[1], heights = _useHeights2[2], updatedMark = _useHeights2[3];
    var calRes = reactive({
      scrollHeight: void 0,
      start: 0,
      end: 0,
      offset: void 0
    });
    var offsetHeight = ref(0);
    onUpdated(function() {
      nextTick(function() {
        var _fillerInnerRef$value2;
        offsetHeight.value = ((_fillerInnerRef$value2 = fillerInnerRef.value) === null || _fillerInnerRef$value2 === void 0 ? void 0 : _fillerInnerRef$value2.offsetHeight) || 0;
      });
    });
    watch([useVirtual, mergedData], function() {
      if (!useVirtual.value) {
        _extends(calRes, {
          scrollHeight: void 0,
          start: 0,
          end: mergedData.value.length - 1,
          offset: void 0
        });
      }
    }, {
      immediate: true
    });
    watch([useVirtual, mergedData, offsetHeight, inVirtual], function() {
      if (useVirtual.value && !inVirtual.value) {
        _extends(calRes, {
          scrollHeight: offsetHeight.value,
          start: 0,
          end: mergedData.value.length - 1,
          offset: void 0
        });
      }
    }, {
      immediate: true
    });
    watch([inVirtual, useVirtual, function() {
      return state.scrollTop;
    }, mergedData, updatedMark, function() {
      return props2.height;
    }, offsetHeight], function() {
      if (!useVirtual.value || !inVirtual.value) {
        return;
      }
      var itemTop = 0;
      var startIndex;
      var startOffset;
      var endIndex;
      var dataLen = mergedData.value.length;
      var data4 = mergedData.value;
      var scrollTop = state.scrollTop;
      var itemHeight = props2.itemHeight, height = props2.height;
      var scrollTopHeight = scrollTop + height;
      for (var i = 0; i < dataLen; i += 1) {
        var item = data4[i];
        var key2 = getKey2(item);
        var cacheHeight = heights.get(key2);
        if (cacheHeight === void 0) {
          cacheHeight = itemHeight;
        }
        var currentItemBottom = itemTop + cacheHeight;
        if (startIndex === void 0 && currentItemBottom >= scrollTop) {
          startIndex = i;
          startOffset = itemTop;
        }
        if (endIndex === void 0 && currentItemBottom > scrollTopHeight) {
          endIndex = i;
        }
        itemTop = currentItemBottom;
      }
      if (startIndex === void 0) {
        startIndex = 0;
        startOffset = 0;
      }
      if (endIndex === void 0) {
        endIndex = dataLen - 1;
      }
      endIndex = Math.min(endIndex + 1, dataLen);
      _extends(calRes, {
        scrollHeight: itemTop,
        start: startIndex,
        end: endIndex,
        offset: startOffset
      });
    }, {
      immediate: true
    });
    var maxScrollHeight = computed(function() {
      return calRes.scrollHeight - props2.height;
    });
    function keepInRange(newScrollTop) {
      var newTop = newScrollTop;
      if (!Number.isNaN(maxScrollHeight.value)) {
        newTop = Math.min(newTop, maxScrollHeight.value);
      }
      newTop = Math.max(newTop, 0);
      return newTop;
    }
    var isScrollAtTop = computed(function() {
      return state.scrollTop <= 0;
    });
    var isScrollAtBottom = computed(function() {
      return state.scrollTop >= maxScrollHeight.value;
    });
    function onScrollBar(newScrollTop) {
      var newTop = newScrollTop;
      syncScrollTop(newTop);
    }
    function onFallbackScroll(e) {
      var _props$onScroll;
      var newScrollTop = e.currentTarget.scrollTop;
      if (Math.abs(newScrollTop - state.scrollTop) >= 1) {
        syncScrollTop(newScrollTop);
      }
      (_props$onScroll = props2.onScroll) === null || _props$onScroll === void 0 ? void 0 : _props$onScroll.call(props2, e);
    }
    var _useFrameWheel = useFrameWheel(useVirtual, isScrollAtTop, isScrollAtBottom, function(offsetY) {
      syncScrollTop(function(top) {
        var newTop = top + offsetY;
        return newTop;
      });
    }), _useFrameWheel2 = _slicedToArray(_useFrameWheel, 2), onRawWheel = _useFrameWheel2[0], onFireFoxScroll = _useFrameWheel2[1];
    function onMozMousePixelScroll(e) {
      if (useVirtual.value) {
        e.preventDefault();
      }
    }
    var removeEventListener = function removeEventListener2() {
      if (componentRef.value) {
        componentRef.value.removeEventListener("wheel", onRawWheel, supportsPassive$1 ? {
          passive: false
        } : false);
        componentRef.value.removeEventListener("DOMMouseScroll", onFireFoxScroll);
        componentRef.value.removeEventListener("MozMousePixelScroll", onMozMousePixelScroll);
      }
    };
    watchEffect(function() {
      nextTick(function() {
        if (componentRef.value) {
          removeEventListener();
          componentRef.value.addEventListener("wheel", onRawWheel, supportsPassive$1 ? {
            passive: false
          } : false);
          componentRef.value.addEventListener("DOMMouseScroll", onFireFoxScroll);
          componentRef.value.addEventListener("MozMousePixelScroll", onMozMousePixelScroll);
        }
      });
    });
    var scrollTo = useScrollTo(componentRef, mergedData, heights, props2, getKey2, collectHeight, syncScrollTop, function() {
      var _scrollBarRef$value;
      (_scrollBarRef$value = scrollBarRef.value) === null || _scrollBarRef$value === void 0 ? void 0 : _scrollBarRef$value.delayHidden();
    });
    expose({
      scrollTo
    });
    var componentStyle = computed(function() {
      var cs = null;
      if (props2.height) {
        cs = _objectSpread(_defineProperty({}, props2.fullHeight ? "height" : "maxHeight", props2.height + "px"), ScrollStyle);
        if (useVirtual.value) {
          cs.overflowY = "hidden";
          if (state.scrollMoving) {
            cs.pointerEvents = "none";
          }
        }
      }
      return cs;
    });
    watch([function() {
      return calRes.start;
    }, function() {
      return calRes.end;
    }, mergedData], function() {
      if (props2.onVisibleChange) {
        var renderList2 = mergedData.value.slice(calRes.start, calRes.end + 1);
        props2.onVisibleChange(renderList2, mergedData.value);
      }
    }, {
      flush: "post"
    });
    return {
      state,
      mergedData,
      componentStyle,
      onFallbackScroll,
      onScrollBar,
      componentRef,
      useVirtual,
      calRes,
      collectHeight,
      setInstance,
      sharedConfig,
      scrollBarRef,
      fillerInnerRef
    };
  },
  render: function render4() {
    var _this = this;
    var _this$$props$this$$at = _objectSpread(_objectSpread({}, this.$props), this.$attrs), _this$$props$this$$at2 = _this$$props$this$$at.prefixCls, prefixCls = _this$$props$this$$at2 === void 0 ? "rc-virtual-list" : _this$$props$this$$at2, height = _this$$props$this$$at.height;
    _this$$props$this$$at.itemHeight;
    _this$$props$this$$at.fullHeight;
    _this$$props$this$$at.data;
    _this$$props$this$$at.itemKey;
    _this$$props$this$$at.virtual;
    var _this$$props$this$$at3 = _this$$props$this$$at.component, Component2 = _this$$props$this$$at3 === void 0 ? "div" : _this$$props$this$$at3;
    _this$$props$this$$at.onScroll;
    var _this$$props$this$$at4 = _this$$props$this$$at.children, children = _this$$props$this$$at4 === void 0 ? this.$slots.default : _this$$props$this$$at4, style = _this$$props$this$$at.style, className = _this$$props$this$$at.class, restProps = _objectWithoutProperties(_this$$props$this$$at, _excluded$e);
    var mergedClassName = classNames(prefixCls, className);
    var scrollTop = this.state.scrollTop;
    var _this$calRes = this.calRes, scrollHeight = _this$calRes.scrollHeight, offset2 = _this$calRes.offset, start = _this$calRes.start, end = _this$calRes.end;
    var componentStyle = this.componentStyle, onFallbackScroll = this.onFallbackScroll, onScrollBar = this.onScrollBar, useVirtual = this.useVirtual, collectHeight = this.collectHeight, sharedConfig = this.sharedConfig, setInstance = this.setInstance, mergedData = this.mergedData;
    return createVNode("div", _objectSpread({
      "style": _objectSpread(_objectSpread({}, style), {}, {
        position: "relative"
      }),
      "class": mergedClassName
    }, restProps), [createVNode(Component2, {
      "class": "".concat(prefixCls, "-holder"),
      "style": componentStyle,
      "ref": "componentRef",
      "onScroll": onFallbackScroll
    }, {
      default: function _default4() {
        return [createVNode(Filler, {
          "prefixCls": prefixCls,
          "height": scrollHeight,
          "offset": offset2,
          "onInnerResize": collectHeight,
          "ref": "fillerInnerRef"
        }, {
          default: function _default5() {
            return renderChildren(mergedData, start, end, setInstance, children, sharedConfig);
          }
        })];
      }
    }), useVirtual && createVNode(ScrollBar, {
      "ref": "scrollBarRef",
      "prefixCls": prefixCls,
      "scrollTop": scrollTop,
      "height": height,
      "scrollHeight": scrollHeight,
      "count": mergedData.length,
      "onScroll": onScrollBar,
      "onStartMove": function onStartMove() {
        _this.state.scrollMoving = true;
      },
      "onStopMove": function onStopMove() {
        _this.state.scrollMoving = false;
      }
    }, null)]);
  }
});
const List$1 = List;
function useMemo(getValue2, condition, shouldUpdate) {
  var cacheRef = ref(getValue2());
  watch(condition, function(next2, pre) {
    if (shouldUpdate) {
      if (shouldUpdate(next2, pre)) {
        cacheRef.value = getValue2();
      }
    } else {
      cacheRef.value = getValue2();
    }
  });
  return cacheRef;
}
function isPlatformMac() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
var SelectContextKey = Symbol("SelectContextKey");
function useProvideSelectProps(props2) {
  return provide(SelectContextKey, props2);
}
function useSelectProps() {
  return inject(SelectContextKey, {});
}
var _excluded$d = ["disabled", "title", "children", "style", "class", "className"];
function isTitleType(content) {
  return typeof content === "string" || typeof content === "number";
}
var OptionList = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "OptionList",
  inheritAttrs: false,
  slots: ["option"],
  setup: function setup25(_, _ref) {
    var expose = _ref.expose, slots = _ref.slots;
    var baseProps = useBaseProps();
    var props2 = useSelectProps();
    var itemPrefixCls = computed(function() {
      return "".concat(baseProps.prefixCls, "-item");
    });
    var memoFlattenOptions = useMemo(function() {
      return props2.flattenOptions;
    }, [function() {
      return baseProps.open;
    }, function() {
      return props2.flattenOptions;
    }], function(next2) {
      return next2[0];
    });
    var listRef = createRef();
    var onListMouseDown = function onListMouseDown2(event) {
      event.preventDefault();
    };
    var scrollIntoView2 = function scrollIntoView3(args) {
      if (listRef.current) {
        listRef.current.scrollTo(typeof args === "number" ? {
          index: args
        } : args);
      }
    };
    var getEnabledActiveIndex = function getEnabledActiveIndex2(index2) {
      var offset2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
      var len = memoFlattenOptions.value.length;
      for (var i = 0; i < len; i += 1) {
        var current2 = (index2 + i * offset2 + len) % len;
        var _memoFlattenOptions$v = memoFlattenOptions.value[current2], group = _memoFlattenOptions$v.group, data3 = _memoFlattenOptions$v.data;
        if (!group && !data3.disabled) {
          return current2;
        }
      }
      return -1;
    };
    var state = reactive({
      activeIndex: getEnabledActiveIndex(0)
    });
    var setActive = function setActive2(index2) {
      var fromKeyboard = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      state.activeIndex = index2;
      var info = {
        source: fromKeyboard ? "keyboard" : "mouse"
      };
      var flattenItem = memoFlattenOptions.value[index2];
      if (!flattenItem) {
        props2.onActiveValue(null, -1, info);
        return;
      }
      props2.onActiveValue(flattenItem.value, index2, info);
    };
    watch([function() {
      return memoFlattenOptions.value.length;
    }, function() {
      return baseProps.searchValue;
    }], function() {
      setActive(props2.defaultActiveFirstOption !== false ? getEnabledActiveIndex(0) : -1);
    }, {
      immediate: true
    });
    var isSelected = function isSelected2(value) {
      return props2.rawValues.has(value) && baseProps.mode !== "combobox";
    };
    watch([function() {
      return baseProps.open;
    }, function() {
      return baseProps.searchValue;
    }], function() {
      if (!baseProps.multiple && baseProps.open && props2.rawValues.size === 1) {
        var value = Array.from(props2.rawValues)[0];
        var index2 = toRaw(memoFlattenOptions.value).findIndex(function(_ref2) {
          var data3 = _ref2.data;
          return data3[props2.fieldNames.value] === value;
        });
        if (index2 !== -1) {
          setActive(index2);
          nextTick(function() {
            scrollIntoView2(index2);
          });
        }
      }
      if (baseProps.open) {
        nextTick(function() {
          var _listRef$current;
          (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo(void 0);
        });
      }
    }, {
      immediate: true,
      flush: "post"
    });
    var onSelectValue = function onSelectValue2(value) {
      if (value !== void 0) {
        props2.onSelect(value, {
          selected: !props2.rawValues.has(value)
        });
      }
      if (!baseProps.multiple) {
        baseProps.toggleOpen(false);
      }
    };
    var getLabel = function getLabel2(item) {
      return typeof item.label === "function" ? item.label() : item.label;
    };
    function renderItem(index2) {
      var item = memoFlattenOptions.value[index2];
      if (!item)
        return null;
      var itemData = item.data || {};
      var value = itemData.value;
      var group = item.group;
      var attrs = pickAttrs(itemData, true);
      var mergedLabel = getLabel(item);
      return item ? createVNode("div", _objectSpread(_objectSpread({
        "aria-label": typeof mergedLabel === "string" && !group ? mergedLabel : null
      }, attrs), {}, {
        "key": index2,
        "role": group ? "presentation" : "option",
        "id": "".concat(baseProps.id, "_list_").concat(index2),
        "aria-selected": isSelected(value)
      }), [value]) : null;
    }
    var onKeydown = function onKeydown2(event) {
      var which = event.which, ctrlKey = event.ctrlKey;
      switch (which) {
        case KeyCode$1.N:
        case KeyCode$1.P:
        case KeyCode$1.UP:
        case KeyCode$1.DOWN: {
          var offset2 = 0;
          if (which === KeyCode$1.UP) {
            offset2 = -1;
          } else if (which === KeyCode$1.DOWN) {
            offset2 = 1;
          } else if (isPlatformMac() && ctrlKey) {
            if (which === KeyCode$1.N) {
              offset2 = 1;
            } else if (which === KeyCode$1.P) {
              offset2 = -1;
            }
          }
          if (offset2 !== 0) {
            var nextActiveIndex = getEnabledActiveIndex(state.activeIndex + offset2, offset2);
            scrollIntoView2(nextActiveIndex);
            setActive(nextActiveIndex, true);
          }
          break;
        }
        case KeyCode$1.ENTER: {
          var item = memoFlattenOptions.value[state.activeIndex];
          if (item && !item.data.disabled) {
            onSelectValue(item.value);
          } else {
            onSelectValue(void 0);
          }
          if (baseProps.open) {
            event.preventDefault();
          }
          break;
        }
        case KeyCode$1.ESC: {
          baseProps.toggleOpen(false);
          if (baseProps.open) {
            event.stopPropagation();
          }
        }
      }
    };
    var onKeyup = function onKeyup2() {
    };
    var scrollTo = function scrollTo2(index2) {
      scrollIntoView2(index2);
    };
    expose({
      onKeydown,
      onKeyup,
      scrollTo
    });
    return function() {
      var id = baseProps.id, notFoundContent = baseProps.notFoundContent, onPopupScroll = baseProps.onPopupScroll;
      var menuItemSelectedIcon = props2.menuItemSelectedIcon, fieldNames = props2.fieldNames, virtual = props2.virtual, listHeight = props2.listHeight, listItemHeight = props2.listItemHeight;
      var renderOption = slots.option;
      var activeIndex = state.activeIndex;
      var omitFieldNameList = Object.keys(fieldNames).map(function(key2) {
        return fieldNames[key2];
      });
      if (memoFlattenOptions.value.length === 0) {
        return createVNode("div", {
          "role": "listbox",
          "id": "".concat(id, "_list"),
          "class": "".concat(itemPrefixCls.value, "-empty"),
          "onMousedown": onListMouseDown
        }, [notFoundContent]);
      }
      return createVNode(Fragment$1, null, [createVNode("div", {
        "role": "listbox",
        "id": "".concat(id, "_list"),
        "style": {
          height: 0,
          width: 0,
          overflow: "hidden"
        }
      }, [renderItem(activeIndex - 1), renderItem(activeIndex), renderItem(activeIndex + 1)]), createVNode(List$1, {
        "itemKey": "key",
        "ref": listRef,
        "data": memoFlattenOptions.value,
        "height": listHeight,
        "itemHeight": listItemHeight,
        "fullHeight": false,
        "onMousedown": onListMouseDown,
        "onScroll": onPopupScroll,
        "virtual": virtual
      }, {
        default: function _default4(item, itemIndex) {
          var _classNames;
          var group = item.group, groupOption = item.groupOption, data3 = item.data, value = item.value;
          var key2 = data3.key;
          var label = typeof item.label === "function" ? item.label() : item.label;
          if (group) {
            var _data$title;
            var groupTitle = (_data$title = data3.title) !== null && _data$title !== void 0 ? _data$title : isTitleType(label) && label;
            return createVNode("div", {
              "class": classNames(itemPrefixCls.value, "".concat(itemPrefixCls.value, "-group")),
              "title": groupTitle
            }, [renderOption ? renderOption(data3) : label !== void 0 ? label : key2]);
          }
          var disabled = data3.disabled, title = data3.title;
          data3.children;
          var style = data3.style, cls = data3.class, className = data3.className, otherProps = _objectWithoutProperties(data3, _excluded$d);
          var passedProps = omit$2(otherProps, omitFieldNameList);
          var selected = isSelected(value);
          var optionPrefixCls = "".concat(itemPrefixCls.value, "-option");
          var optionClassName = classNames(itemPrefixCls.value, optionPrefixCls, cls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(optionPrefixCls, "-grouped"), groupOption), _defineProperty(_classNames, "".concat(optionPrefixCls, "-active"), activeIndex === itemIndex && !disabled), _defineProperty(_classNames, "".concat(optionPrefixCls, "-disabled"), disabled), _defineProperty(_classNames, "".concat(optionPrefixCls, "-selected"), selected), _classNames));
          var mergedLabel = getLabel(item);
          var iconVisible = !menuItemSelectedIcon || typeof menuItemSelectedIcon === "function" || selected;
          var content = typeof mergedLabel === "number" ? mergedLabel : mergedLabel || value;
          var optionTitle = isTitleType(content) ? content.toString() : void 0;
          if (title !== void 0) {
            optionTitle = title;
          }
          return createVNode("div", _objectSpread(_objectSpread({}, passedProps), {}, {
            "aria-selected": selected,
            "class": optionClassName,
            "title": optionTitle,
            "onMousemove": function onMousemove(e) {
              if (otherProps.onMousemove) {
                otherProps.onMousemove(e);
              }
              if (activeIndex === itemIndex || disabled) {
                return;
              }
              setActive(itemIndex);
            },
            "onClick": function onClick2(e) {
              if (!disabled) {
                onSelectValue(value);
              }
              if (otherProps.onClick) {
                otherProps.onClick(e);
              }
            },
            "style": style
          }), [createVNode("div", {
            "class": "".concat(optionPrefixCls, "-content")
          }, [renderOption ? renderOption(data3) : content]), isValidElement(menuItemSelectedIcon) || selected, iconVisible && createVNode(TransBtn$1, {
            "class": "".concat(itemPrefixCls.value, "-option-state"),
            "customizeIcon": menuItemSelectedIcon,
            "customizeIconProps": {
              isSelected: selected
            }
          }, {
            default: function _default5() {
              return [selected ? "\u2713" : null];
            }
          })]);
        }
      })]);
    };
  }
});
const OptionList$1 = OptionList;
var _excluded$c = ["value", "disabled"];
function convertNodeToOption(node) {
  var key2 = node.key, children = node.children, _node$props = node.props, value = _node$props.value, disabled = _node$props.disabled, restProps = _objectWithoutProperties(_node$props, _excluded$c);
  var child = children === null || children === void 0 ? void 0 : children.default;
  return _objectSpread({
    key: key2,
    value: value !== void 0 ? value : key2,
    children: child,
    disabled: disabled || disabled === ""
  }, restProps);
}
function convertChildrenToData(nodes) {
  var optionOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var dd = flattenChildren(nodes).map(function(node, index2) {
    var _children$label;
    if (!isValidElement(node) || !node.type) {
      return null;
    }
    var isSelectOptGroup = node.type.isSelectOptGroup, key2 = node.key, children = node.children, props2 = node.props;
    if (optionOnly || !isSelectOptGroup) {
      return convertNodeToOption(node);
    }
    var child = children && children.default ? children.default() : void 0;
    var label = (props2 === null || props2 === void 0 ? void 0 : props2.label) || ((_children$label = children.label) === null || _children$label === void 0 ? void 0 : _children$label.call(children)) || key2;
    return _objectSpread(_objectSpread({
      key: "__RC_SELECT_GRP__".concat(key2 === null ? index2 : String(key2), "__")
    }, props2), {}, {
      label,
      options: convertChildrenToData(child || [])
    });
  }).filter(function(data3) {
    return data3;
  });
  return dd;
}
function useOptions(options, children, fieldNames) {
  var mergedOptions = shallowRef();
  var valueOptions = shallowRef();
  var labelOptions = shallowRef();
  var tempMergedOptions = shallowRef([]);
  watch([options, children], function() {
    if (options.value) {
      tempMergedOptions.value = toRaw(options.value).slice();
    } else {
      tempMergedOptions.value = convertChildrenToData(children.value);
    }
  }, {
    immediate: true,
    deep: true
  });
  watchEffect(function() {
    var newOptions = tempMergedOptions.value;
    var newValueOptions = /* @__PURE__ */ new Map();
    var newLabelOptions = /* @__PURE__ */ new Map();
    var fieldNamesValue = fieldNames.value;
    function dig(optionList) {
      var isChildren = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      for (var i = 0; i < optionList.length; i += 1) {
        var option = optionList[i];
        if (!option[fieldNamesValue.options] || isChildren) {
          newValueOptions.set(option[fieldNamesValue.value], option);
          newLabelOptions.set(option[fieldNamesValue.label], option);
        } else {
          dig(option[fieldNamesValue.options], true);
        }
      }
    }
    dig(newOptions);
    mergedOptions.value = newOptions;
    valueOptions.value = newValueOptions;
    labelOptions.value = newLabelOptions;
  });
  return {
    options: mergedOptions,
    valueOptions,
    labelOptions
  };
}
var uuid$2 = 0;
var isBrowserClient = process.env.NODE_ENV !== "test" && canUseDom();
function getUUID$1() {
  var retId;
  if (isBrowserClient) {
    retId = uuid$2;
    uuid$2 += 1;
  } else {
    retId = "TEST_OR_SSR";
  }
  return retId;
}
function useId() {
  var id = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ref("");
  var innerId = "rc_select_".concat(getUUID$1());
  return id.value || innerId;
}
function toArray$3(value) {
  if (Array.isArray(value)) {
    return value;
  }
  return value !== void 0 ? [value] : [];
}
var isClient = false;
process.env.NODE_ENV !== "test" && isClient;
function warningProps(props2) {
  var mode = props2.mode, options = props2.options, children = props2.children, backfill = props2.backfill, allowClear = props2.allowClear, placeholder = props2.placeholder, getInputElement = props2.getInputElement, showSearch = props2.showSearch, onSearch = props2.onSearch, defaultOpen = props2.defaultOpen, autofocus = props2.autofocus, labelInValue = props2.labelInValue, value = props2.value, inputValue = props2.inputValue, optionLabelProp = props2.optionLabelProp;
  var multiple = isMultiple(mode);
  var mergedShowSearch = showSearch !== void 0 ? showSearch : multiple || mode === "combobox";
  var mergedOptions = options || convertChildrenToData(children);
  warningOnce(mode !== "tags" || mergedOptions.every(function(opt) {
    return !opt.disabled;
  }), "Please avoid setting option to disabled in tags mode since user can always type text as tag.");
  warningOnce(mode !== "combobox" || !optionLabelProp, "`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly.");
  warningOnce(mode === "combobox" || !backfill, "`backfill` only works with `combobox` mode.");
  warningOnce(mode === "combobox" || !getInputElement, "`getInputElement` only work with `combobox` mode.");
  noteOnce(mode !== "combobox" || !getInputElement || !allowClear || !placeholder, "Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`.");
  if (onSearch && !mergedShowSearch && mode !== "combobox" && mode !== "tags") {
    warningOnce(false, "`onSearch` should work with `showSearch` instead of use alone.");
  }
  noteOnce(!defaultOpen || autofocus, "`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autofocus` if needed.");
  if (value !== void 0 && value !== null) {
    var values = toArray$3(value);
    warningOnce(!labelInValue || values.every(function(val) {
      return _typeof(val) === "object" && ("key" in val || "value" in val);
    }), "`value` should in shape of `{ value: string | number, label?: any }` when you set `labelInValue` to `true`");
    warningOnce(!multiple || Array.isArray(value), "`value` should be array when `mode` is `multiple` or `tags`");
  }
  if (children) {
    var invalidateChildType = null;
    children.some(function(node) {
      if (!isValidElement(node) || !node.type) {
        return false;
      }
      var type = node.type;
      if (type.isSelectOption) {
        return false;
      }
      if (type.isSelectOptGroup) {
        var _node$children;
        var childs = ((_node$children = node.children) === null || _node$children === void 0 ? void 0 : _node$children.default()) || [];
        var allChildrenValid = childs.every(function(subNode) {
          if (!isValidElement(subNode) || !node.type || subNode.type.isSelectOption) {
            return true;
          }
          invalidateChildType = subNode.type;
          return false;
        });
        if (allChildrenValid) {
          return false;
        }
        return true;
      }
      invalidateChildType = type;
      return true;
    });
    if (invalidateChildType) {
      warningOnce(false, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(invalidateChildType.displayName || invalidateChildType.name || invalidateChildType, "`."));
    }
    warningOnce(inputValue === void 0, "`inputValue` is deprecated, please use `searchValue` instead.");
  }
}
function includes(test, search) {
  return toArray$3(test).join("").toUpperCase().includes(search);
}
const useFilterOptions = function(options, fieldNames, searchValue, filterOption, optionFilterProp) {
  return computed(function() {
    var searchValueVal = searchValue.value;
    var optionFilterPropValue = optionFilterProp === null || optionFilterProp === void 0 ? void 0 : optionFilterProp.value;
    var filterOptionValue = filterOption === null || filterOption === void 0 ? void 0 : filterOption.value;
    if (!searchValueVal || filterOptionValue === false) {
      return options.value;
    }
    var _fieldNames$value = fieldNames.value, fieldOptions = _fieldNames$value.options, fieldLabel = _fieldNames$value.label, fieldValue = _fieldNames$value.value;
    var filteredOptions = [];
    var customizeFilter = typeof filterOptionValue === "function";
    var upperSearch = searchValueVal.toUpperCase();
    var filterFunc = customizeFilter ? filterOptionValue : function(_, option) {
      if (optionFilterPropValue) {
        return includes(option[optionFilterPropValue], upperSearch);
      }
      if (option[fieldOptions]) {
        return includes(option[fieldLabel !== "children" ? fieldLabel : "label"], upperSearch);
      }
      return includes(option[fieldValue], upperSearch);
    };
    var wrapOption = customizeFilter ? function(opt) {
      return injectPropsWithOption(opt);
    } : function(opt) {
      return opt;
    };
    options.value.forEach(function(item) {
      if (item[fieldOptions]) {
        var matchGroup = filterFunc(searchValueVal, wrapOption(item));
        if (matchGroup) {
          filteredOptions.push(item);
        } else {
          var subOptions = item[fieldOptions].filter(function(subItem) {
            return filterFunc(searchValueVal, wrapOption(subItem));
          });
          if (subOptions.length) {
            filteredOptions.push(_objectSpread(_objectSpread({}, item), {}, _defineProperty({}, fieldOptions, subOptions)));
          }
        }
        return;
      }
      if (filterFunc(searchValueVal, wrapOption(item))) {
        filteredOptions.push(item);
      }
    });
    return filteredOptions;
  });
};
const useCache = function(labeledValues, valueOptions) {
  var cacheRef = shallowRef({
    values: /* @__PURE__ */ new Map(),
    options: /* @__PURE__ */ new Map()
  });
  var filledLabeledValues = computed(function() {
    var _cacheRef$value = cacheRef.value, prevValueCache = _cacheRef$value.values, prevOptionCache = _cacheRef$value.options;
    var patchedValues = labeledValues.value.map(function(item) {
      if (item.label === void 0) {
        var _prevValueCache$get;
        return _objectSpread(_objectSpread({}, item), {}, {
          label: (_prevValueCache$get = prevValueCache.get(item.value)) === null || _prevValueCache$get === void 0 ? void 0 : _prevValueCache$get.label
        });
      }
      return item;
    });
    var valueCache = /* @__PURE__ */ new Map();
    var optionCache = /* @__PURE__ */ new Map();
    patchedValues.forEach(function(item) {
      valueCache.set(item.value, item);
      optionCache.set(item.value, valueOptions.value.get(item.value) || prevOptionCache.get(item.value));
    });
    cacheRef.value.values = valueCache;
    cacheRef.value.options = optionCache;
    return patchedValues;
  });
  var getOption = function getOption2(val) {
    return valueOptions.value.get(val) || cacheRef.value.options.get(val);
  };
  return [filledLabeledValues, getOption];
};
function useMergedState(defaultStateValue, option) {
  var _ref = option || {}, defaultValue = _ref.defaultValue, _ref$value = _ref.value, value = _ref$value === void 0 ? ref() : _ref$value;
  var initValue = typeof defaultStateValue === "function" ? defaultStateValue() : defaultStateValue;
  if (value.value !== void 0) {
    initValue = unref(value);
  }
  if (defaultValue !== void 0) {
    initValue = typeof defaultValue === "function" ? defaultValue() : defaultValue;
  }
  var innerValue = ref(initValue);
  var mergedValue = ref(initValue);
  watchEffect(function() {
    var val = value.value !== void 0 ? value.value : innerValue.value;
    if (option.postState) {
      val = option.postState(val);
    }
    mergedValue.value = val;
  });
  function triggerChange(newValue) {
    var preVal = mergedValue.value;
    innerValue.value = newValue;
    if (toRaw(mergedValue.value) !== newValue && option.onChange) {
      option.onChange(newValue, preVal);
    }
  }
  watch(value, function() {
    innerValue.value = value.value;
  });
  return [mergedValue, triggerChange];
}
function useState(defaultStateValue) {
  var initValue = typeof defaultStateValue === "function" ? defaultStateValue() : defaultStateValue;
  var innerValue = ref(initValue);
  function triggerChange(newValue) {
    innerValue.value = newValue;
  }
  return [innerValue, triggerChange];
}
var OMIT_DOM_PROPS = ["inputValue"];
function selectProps$1() {
  return _objectSpread(_objectSpread({}, baseSelectPropsWithoutPrivate()), {}, {
    prefixCls: String,
    id: String,
    backfill: {
      type: Boolean,
      default: void 0
    },
    fieldNames: Object,
    inputValue: String,
    searchValue: String,
    onSearch: Function,
    autoClearSearchValue: {
      type: Boolean,
      default: void 0
    },
    onSelect: Function,
    onDeselect: Function,
    filterOption: {
      type: [Boolean, Function],
      default: void 0
    },
    filterSort: Function,
    optionFilterProp: String,
    optionLabelProp: String,
    options: Array,
    defaultActiveFirstOption: {
      type: Boolean,
      default: void 0
    },
    virtual: {
      type: Boolean,
      default: void 0
    },
    listHeight: Number,
    listItemHeight: Number,
    menuItemSelectedIcon: PropTypes$1.any,
    mode: String,
    labelInValue: {
      type: Boolean,
      default: void 0
    },
    value: PropTypes$1.any,
    defaultValue: PropTypes$1.any,
    onChange: Function,
    children: Array
  });
}
function isRawValue(value) {
  return !value || _typeof(value) !== "object";
}
const Select$1 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Select",
  inheritAttrs: false,
  props: initDefaultProps$1(selectProps$1(), {
    prefixCls: "vc-select",
    autoClearSearchValue: true,
    listHeight: 200,
    listItemHeight: 20,
    dropdownMatchSelectWidth: true
  }),
  setup: function setup26(props2, _ref) {
    var expose = _ref.expose, attrs = _ref.attrs, slots = _ref.slots;
    var mergedId = useId(toRef(props2, "id"));
    var multiple = computed(function() {
      return isMultiple(props2.mode);
    });
    var childrenAsData = computed(function() {
      return !!(!props2.options && props2.children);
    });
    var mergedFilterOption = computed(function() {
      if (props2.filterOption === void 0 && props2.mode === "combobox") {
        return false;
      }
      return props2.filterOption;
    });
    var mergedFieldNames = computed(function() {
      return fillFieldNames(props2.fieldNames, childrenAsData.value);
    });
    var _useMergedState = useMergedState("", {
      value: computed(function() {
        return props2.searchValue !== void 0 ? props2.searchValue : props2.inputValue;
      }),
      postState: function postState(search) {
        return search || "";
      }
    }), _useMergedState2 = _slicedToArray(_useMergedState, 2), mergedSearchValue = _useMergedState2[0], setSearchValue = _useMergedState2[1];
    var parsedOptions = useOptions(toRef(props2, "options"), toRef(props2, "children"), mergedFieldNames);
    var valueOptions = parsedOptions.valueOptions, labelOptions = parsedOptions.labelOptions, mergedOptions = parsedOptions.options;
    var convert2LabelValues = function convert2LabelValues2(draftValues) {
      var valueList = toArray$3(draftValues);
      return valueList.map(function(val) {
        var rawValue;
        var rawLabel;
        var rawKey;
        var rawDisabled;
        if (isRawValue(val)) {
          rawValue = val;
        } else {
          var _val$value;
          rawKey = val.key;
          rawLabel = val.label;
          rawValue = (_val$value = val.value) !== null && _val$value !== void 0 ? _val$value : rawKey;
        }
        var option = valueOptions.value.get(rawValue);
        if (option) {
          var _option$key;
          if (rawLabel === void 0)
            rawLabel = option === null || option === void 0 ? void 0 : option[props2.optionLabelProp || mergedFieldNames.value.label];
          if (rawKey === void 0)
            rawKey = (_option$key = option === null || option === void 0 ? void 0 : option.key) !== null && _option$key !== void 0 ? _option$key : rawValue;
          rawDisabled = option === null || option === void 0 ? void 0 : option.disabled;
        }
        return {
          label: rawLabel,
          value: rawValue,
          key: rawKey,
          disabled: rawDisabled,
          option
        };
      });
    };
    var _useMergedState3 = useMergedState(props2.defaultValue, {
      value: toRef(props2, "value")
    }), _useMergedState4 = _slicedToArray(_useMergedState3, 2), internalValue = _useMergedState4[0], setInternalValue = _useMergedState4[1];
    var rawLabeledValues = computed(function() {
      var _values$;
      var values = convert2LabelValues(internalValue.value);
      if (props2.mode === "combobox" && !((_values$ = values[0]) !== null && _values$ !== void 0 && _values$.value)) {
        return [];
      }
      return values;
    });
    var _useCache = useCache(rawLabeledValues, valueOptions), _useCache2 = _slicedToArray(_useCache, 2), mergedValues = _useCache2[0], getMixedOption = _useCache2[1];
    var displayValues = computed(function() {
      if (!props2.mode && mergedValues.value.length === 1) {
        var firstValue = mergedValues.value[0];
        if (firstValue.value === null && (firstValue.label === null || firstValue.label === void 0)) {
          return [];
        }
      }
      return mergedValues.value.map(function(item) {
        var _ref2;
        return _objectSpread(_objectSpread({}, item), {}, {
          label: (_ref2 = typeof item.label === "function" ? item.label() : item.label) !== null && _ref2 !== void 0 ? _ref2 : item.value
        });
      });
    });
    var rawValues = computed(function() {
      return new Set(mergedValues.value.map(function(val) {
        return val.value;
      }));
    });
    watchEffect(function() {
      if (props2.mode === "combobox") {
        var _mergedValues$value$;
        var strValue = (_mergedValues$value$ = mergedValues.value[0]) === null || _mergedValues$value$ === void 0 ? void 0 : _mergedValues$value$.value;
        if (strValue !== void 0 && strValue !== null) {
          setSearchValue(String(strValue));
        }
      }
    }, {
      flush: "post"
    });
    var createTagOption = function createTagOption2(val, label) {
      var _ref3;
      var mergedLabel = label !== null && label !== void 0 ? label : val;
      return _ref3 = {}, _defineProperty(_ref3, mergedFieldNames.value.value, val), _defineProperty(_ref3, mergedFieldNames.value.label, mergedLabel), _ref3;
    };
    var filledTagOptions = shallowRef();
    watchEffect(function() {
      if (props2.mode !== "tags") {
        filledTagOptions.value = mergedOptions.value;
        return;
      }
      var cloneOptions = mergedOptions.value.slice();
      var existOptions = function existOptions2(val) {
        return valueOptions.value.has(val);
      };
      _toConsumableArray(mergedValues.value).sort(function(a, b) {
        return a.value < b.value ? -1 : 1;
      }).forEach(function(item) {
        var val = item.value;
        if (!existOptions(val)) {
          cloneOptions.push(createTagOption(val, item.label));
        }
      });
      filledTagOptions.value = cloneOptions;
    });
    var filteredOptions = useFilterOptions(filledTagOptions, mergedFieldNames, mergedSearchValue, mergedFilterOption, toRef(props2, "optionFilterProp"));
    var filledSearchOptions = computed(function() {
      if (props2.mode !== "tags" || !mergedSearchValue.value || filteredOptions.value.some(function(item) {
        return item[props2.optionFilterProp || "value"] === mergedSearchValue.value;
      })) {
        return filteredOptions.value;
      }
      return [createTagOption(mergedSearchValue.value)].concat(_toConsumableArray(filteredOptions.value));
    });
    var orderedFilteredOptions = computed(function() {
      if (!props2.filterSort) {
        return filledSearchOptions.value;
      }
      return _toConsumableArray(filledSearchOptions.value).sort(function(a, b) {
        return props2.filterSort(a, b);
      });
    });
    var displayOptions = computed(function() {
      return flattenOptions(orderedFilteredOptions.value, {
        fieldNames: mergedFieldNames.value,
        childrenAsData: childrenAsData.value
      });
    });
    var triggerChange = function triggerChange2(values) {
      var labeledValues = convert2LabelValues(values);
      setInternalValue(labeledValues);
      if (props2.onChange && (labeledValues.length !== mergedValues.value.length || labeledValues.some(function(newVal, index2) {
        var _mergedValues$value$i;
        return ((_mergedValues$value$i = mergedValues.value[index2]) === null || _mergedValues$value$i === void 0 ? void 0 : _mergedValues$value$i.value) !== (newVal === null || newVal === void 0 ? void 0 : newVal.value);
      }))) {
        var returnValues = props2.labelInValue ? labeledValues.map(function(v) {
          return _objectSpread(_objectSpread({}, v), {}, {
            originLabel: v.label,
            label: typeof v.label === "function" ? v.label() : v.label
          });
        }) : labeledValues.map(function(v) {
          return v.value;
        });
        var returnOptions = labeledValues.map(function(v) {
          return injectPropsWithOption(getMixedOption(v.value));
        });
        props2.onChange(
          multiple.value ? returnValues : returnValues[0],
          multiple.value ? returnOptions : returnOptions[0]
        );
      }
    };
    var _useState = useState(null), _useState2 = _slicedToArray(_useState, 2), activeValue = _useState2[0], setActiveValue = _useState2[1];
    var _useState3 = useState(0), _useState4 = _slicedToArray(_useState3, 2), accessibilityIndex = _useState4[0], setAccessibilityIndex = _useState4[1];
    var mergedDefaultActiveFirstOption = computed(function() {
      return props2.defaultActiveFirstOption !== void 0 ? props2.defaultActiveFirstOption : props2.mode !== "combobox";
    });
    var onActiveValue = function onActiveValue2(active, index2) {
      var _ref4 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref4$source = _ref4.source, source = _ref4$source === void 0 ? "keyboard" : _ref4$source;
      setAccessibilityIndex(index2);
      if (props2.backfill && props2.mode === "combobox" && active !== null && source === "keyboard") {
        setActiveValue(String(active));
      }
    };
    var triggerSelect = function triggerSelect2(val, selected) {
      var getSelectEnt = function getSelectEnt2() {
        var _option$key2;
        var option2 = getMixedOption(val);
        var originLabel = option2 === null || option2 === void 0 ? void 0 : option2[mergedFieldNames.value.label];
        return [props2.labelInValue ? {
          label: typeof originLabel === "function" ? originLabel() : originLabel,
          originLabel,
          value: val,
          key: (_option$key2 = option2 === null || option2 === void 0 ? void 0 : option2.key) !== null && _option$key2 !== void 0 ? _option$key2 : val
        } : val, injectPropsWithOption(option2)];
      };
      if (selected && props2.onSelect) {
        var _getSelectEnt = getSelectEnt(), _getSelectEnt2 = _slicedToArray(_getSelectEnt, 2), wrappedValue = _getSelectEnt2[0], option = _getSelectEnt2[1];
        props2.onSelect(wrappedValue, option);
      } else if (!selected && props2.onDeselect) {
        var _getSelectEnt3 = getSelectEnt(), _getSelectEnt4 = _slicedToArray(_getSelectEnt3, 2), _wrappedValue = _getSelectEnt4[0], _option = _getSelectEnt4[1];
        props2.onDeselect(_wrappedValue, _option);
      }
    };
    var onInternalSelect = function onInternalSelect2(val, info) {
      var cloneValues;
      var mergedSelect = multiple.value ? info.selected : true;
      if (mergedSelect) {
        cloneValues = multiple.value ? [].concat(_toConsumableArray(mergedValues.value), [val]) : [val];
      } else {
        cloneValues = mergedValues.value.filter(function(v) {
          return v.value !== val;
        });
      }
      triggerChange(cloneValues);
      triggerSelect(val, mergedSelect);
      if (props2.mode === "combobox") {
        setActiveValue("");
      } else if (!multiple.value || props2.autoClearSearchValue) {
        setSearchValue("");
        setActiveValue("");
      }
    };
    var onDisplayValuesChange = function onDisplayValuesChange2(nextValues, info) {
      triggerChange(nextValues);
      if (info.type === "remove" || info.type === "clear") {
        info.values.forEach(function(item) {
          triggerSelect(item.value, false);
        });
      }
    };
    var onInternalSearch = function onInternalSearch2(searchText, info) {
      setSearchValue(searchText);
      setActiveValue(null);
      if (info.source === "submit") {
        var formatted = (searchText || "").trim();
        if (formatted) {
          var newRawValues = Array.from(new Set([].concat(_toConsumableArray(rawValues.value), [formatted])));
          triggerChange(newRawValues);
          triggerSelect(formatted, true);
          setSearchValue("");
        }
        return;
      }
      if (info.source !== "blur") {
        var _props$onSearch;
        if (props2.mode === "combobox") {
          triggerChange(searchText);
        }
        (_props$onSearch = props2.onSearch) === null || _props$onSearch === void 0 ? void 0 : _props$onSearch.call(props2, searchText);
      }
    };
    var onInternalSearchSplit = function onInternalSearchSplit2(words) {
      var patchValues = words;
      if (props2.mode !== "tags") {
        patchValues = words.map(function(word) {
          var opt = labelOptions.value.get(word);
          return opt === null || opt === void 0 ? void 0 : opt.value;
        }).filter(function(val) {
          return val !== void 0;
        });
      }
      var newRawValues = Array.from(new Set([].concat(_toConsumableArray(rawValues.value), _toConsumableArray(patchValues))));
      triggerChange(newRawValues);
      newRawValues.forEach(function(newRawValue) {
        triggerSelect(newRawValue, true);
      });
    };
    var realVirtual = computed(function() {
      return props2.virtual !== false && props2.dropdownMatchSelectWidth !== false;
    });
    useProvideSelectProps(toReactive(_objectSpread(_objectSpread({}, parsedOptions), {}, {
      flattenOptions: displayOptions,
      onActiveValue,
      defaultActiveFirstOption: mergedDefaultActiveFirstOption,
      onSelect: onInternalSelect,
      menuItemSelectedIcon: toRef(props2, "menuItemSelectedIcon"),
      rawValues,
      fieldNames: mergedFieldNames,
      virtual: realVirtual,
      listHeight: toRef(props2, "listHeight"),
      listItemHeight: toRef(props2, "listItemHeight"),
      childrenAsData
    })));
    if (process.env.NODE_ENV !== "production") {
      watchEffect(function() {
        warningProps(props2);
      }, {
        flush: "post"
      });
    }
    var selectRef = ref();
    expose({
      focus: function focus() {
        var _selectRef$value;
        (_selectRef$value = selectRef.value) === null || _selectRef$value === void 0 ? void 0 : _selectRef$value.focus();
      },
      blur: function blur() {
        var _selectRef$value2;
        (_selectRef$value2 = selectRef.value) === null || _selectRef$value2 === void 0 ? void 0 : _selectRef$value2.blur();
      },
      scrollTo: function scrollTo(arg) {
        var _selectRef$value3;
        (_selectRef$value3 = selectRef.value) === null || _selectRef$value3 === void 0 ? void 0 : _selectRef$value3.scrollTo(arg);
      }
    });
    var pickProps = computed(function() {
      return omit$2(props2, [
        "id",
        "mode",
        "prefixCls",
        "backfill",
        "fieldNames",
        "inputValue",
        "searchValue",
        "onSearch",
        "autoClearSearchValue",
        "onSelect",
        "onDeselect",
        "dropdownMatchSelectWidth",
        "filterOption",
        "filterSort",
        "optionFilterProp",
        "optionLabelProp",
        "options",
        "children",
        "defaultActiveFirstOption",
        "menuItemSelectedIcon",
        "virtual",
        "listHeight",
        "listItemHeight",
        "value",
        "defaultValue",
        "labelInValue",
        "onChange"
      ]);
    });
    return function() {
      return createVNode(BaseSelect, _objectSpread(_objectSpread(_objectSpread({}, pickProps.value), attrs), {}, {
        "id": mergedId,
        "prefixCls": props2.prefixCls,
        "ref": selectRef,
        "omitDomProps": OMIT_DOM_PROPS,
        "mode": props2.mode,
        "displayValues": displayValues.value,
        "onDisplayValuesChange": onDisplayValuesChange,
        "searchValue": mergedSearchValue.value,
        "onSearch": onInternalSearch,
        "onSearchSplit": onInternalSearchSplit,
        "dropdownMatchSelectWidth": props2.dropdownMatchSelectWidth,
        "OptionList": OptionList$1,
        "emptyOptions": !displayOptions.value.length,
        "activeValue": activeValue.value,
        "activeDescendantId": "".concat(mergedId, "_list_").concat(accessibilityIndex.value)
      }), slots);
    };
  }
});
var Option = function Option2() {
  return null;
};
Option.isSelectOption = true;
Option.displayName = "ASelectOption";
const Option$1 = Option;
var OptGroup = function OptGroup2() {
  return null;
};
OptGroup.isSelectOptGroup = true;
OptGroup.displayName = "ASelectOptGroup";
const OptGroup$1 = OptGroup;
function getIcons(props2) {
  var slots = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var loading = props2.loading, multiple = props2.multiple, prefixCls = props2.prefixCls;
  var suffixIcon = props2.suffixIcon || slots.suffixIcon && slots.suffixIcon();
  var clearIcon = props2.clearIcon || slots.clearIcon && slots.clearIcon();
  var menuItemSelectedIcon = props2.menuItemSelectedIcon || slots.menuItemSelectedIcon && slots.menuItemSelectedIcon();
  var removeIcon = props2.removeIcon || slots.removeIcon && slots.removeIcon();
  var mergedClearIcon = clearIcon;
  if (!clearIcon) {
    mergedClearIcon = createVNode(CloseCircleFilled, null, null);
  }
  var mergedSuffixIcon = null;
  if (suffixIcon !== void 0) {
    mergedSuffixIcon = suffixIcon;
  } else if (loading) {
    mergedSuffixIcon = createVNode(LoadingOutlined, {
      "spin": true
    }, null);
  } else {
    var iconCls = "".concat(prefixCls, "-suffix");
    mergedSuffixIcon = function mergedSuffixIcon2(_ref) {
      var open2 = _ref.open, showSearch = _ref.showSearch;
      if (open2 && showSearch) {
        return createVNode(SearchOutlined, {
          "class": iconCls
        }, null);
      }
      return createVNode(DownOutlined, {
        "class": iconCls
      }, null);
    };
  }
  var mergedItemIcon = null;
  if (menuItemSelectedIcon !== void 0) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = createVNode(CheckOutlined, null, null);
  } else {
    mergedItemIcon = null;
  }
  var mergedRemoveIcon = null;
  if (removeIcon !== void 0) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = createVNode(CloseOutlined, null, null);
  }
  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon
  };
}
var ContextKey = Symbol("ContextProps");
var InternalContextKey = Symbol("InternalContextProps");
var useProvideFormItemContext = function useProvideFormItemContext2(props2) {
  var useValidation = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : computed(function() {
    return true;
  });
  var formItemFields = ref(/* @__PURE__ */ new Map());
  var addFormItemField2 = function addFormItemField3(key2, type) {
    formItemFields.value.set(key2, type);
    formItemFields.value = new Map(formItemFields.value);
  };
  var removeFormItemField2 = function removeFormItemField3(key2) {
    formItemFields.value.delete(key2);
    formItemFields.value = new Map(formItemFields.value);
  };
  var instance = getCurrentInstance();
  watch([useValidation, formItemFields], function() {
    if (process.env.NODE_ENV !== "production") {
      if (useValidation.value && formItemFields.value.size > 1) {
        devWarning(false, "Form.Item", "FormItem can only collect one field item, you haved set ".concat(_toConsumableArray(formItemFields.value.values()).map(function(v) {
          return "`".concat(v.name, "`");
        }).join(", "), " ").concat(formItemFields.value.size, " field items.\n        You can set not need to be collected fields into `a-form-item-rest`"));
        var cur = instance;
        while (cur.parent) {
          console.warn("at", cur.type);
          cur = cur.parent;
        }
      }
    }
  });
  provide(ContextKey, props2);
  provide(InternalContextKey, {
    addFormItemField: addFormItemField2,
    removeFormItemField: removeFormItemField2
  });
};
var defaultContext = {
  id: computed(function() {
    return void 0;
  }),
  onFieldBlur: function onFieldBlur() {
  },
  onFieldChange: function onFieldChange() {
  },
  clearValidate: function clearValidate() {
  }
};
var defaultInternalContext = {
  addFormItemField: function addFormItemField() {
  },
  removeFormItemField: function removeFormItemField() {
  }
};
var useInjectFormItemContext = function useInjectFormItemContext2() {
  var internalContext = inject(InternalContextKey, defaultInternalContext);
  var formItemFieldKey = Symbol("FormItemFieldKey");
  var instance = getCurrentInstance();
  internalContext.addFormItemField(formItemFieldKey, instance.type);
  provide(InternalContextKey, defaultInternalContext);
  provide(ContextKey, defaultContext);
  return inject(ContextKey, defaultContext);
};
const FormItemRest = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AFormItemRest",
  setup: function setup27(_, _ref) {
    var slots = _ref.slots;
    provide(InternalContextKey, defaultInternalContext);
    provide(ContextKey, defaultContext);
    return function() {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});
var selectProps = function selectProps2() {
  return _objectSpread(_objectSpread({}, omit$2(selectProps$1(), ["inputIcon", "mode", "getInputElement", "getRawInputElement", "backfill"])), {}, {
    value: {
      type: [Array, Object, String, Number]
    },
    defaultValue: {
      type: [Array, Object, String, Number]
    },
    notFoundContent: PropTypes$1.any,
    suffixIcon: PropTypes$1.any,
    itemIcon: PropTypes$1.any,
    size: String,
    mode: String,
    bordered: {
      type: Boolean,
      default: true
    },
    transitionName: String,
    choiceTransitionName: {
      type: String,
      default: ""
    },
    "onUpdate:value": Function
  });
};
var SECRET_COMBOBOX_MODE_DO_NOT_USE = "SECRET_COMBOBOX_MODE_DO_NOT_USE";
var Select = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ASelect",
  Option: Option$1,
  OptGroup: OptGroup$1,
  inheritAttrs: false,
  props: initDefaultProps$1(selectProps(), {
    listHeight: 256,
    listItemHeight: 24
  }),
  SECRET_COMBOBOX_MODE_DO_NOT_USE,
  slots: [
    "notFoundContent",
    "suffixIcon",
    "itemIcon",
    "removeIcon",
    "clearIcon",
    "dropdownRender",
    "option",
    "placeholder",
    "tagRender",
    "maxTagPlaceholder",
    "optionLabel"
  ],
  setup: function setup28(props2, _ref) {
    var attrs = _ref.attrs, emit = _ref.emit, slots = _ref.slots, expose = _ref.expose;
    var selectRef = ref();
    var formItemContext = useInjectFormItemContext();
    var focus = function focus2() {
      var _selectRef$value;
      (_selectRef$value = selectRef.value) === null || _selectRef$value === void 0 ? void 0 : _selectRef$value.focus();
    };
    var blur = function blur2() {
      var _selectRef$value2;
      (_selectRef$value2 = selectRef.value) === null || _selectRef$value2 === void 0 ? void 0 : _selectRef$value2.blur();
    };
    var scrollTo = function scrollTo2(arg) {
      var _selectRef$value3;
      (_selectRef$value3 = selectRef.value) === null || _selectRef$value3 === void 0 ? void 0 : _selectRef$value3.scrollTo(arg);
    };
    var mode = computed(function() {
      var mode2 = props2.mode;
      if (mode2 === "combobox") {
        return void 0;
      }
      if (mode2 === SECRET_COMBOBOX_MODE_DO_NOT_USE) {
        return "combobox";
      }
      return mode2;
    });
    var _useConfigInject = useConfigInject("select", props2), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction, configProvider = _useConfigInject.configProvider, size = _useConfigInject.size, getPrefixCls2 = _useConfigInject.getPrefixCls;
    var rootPrefixCls = computed(function() {
      return getPrefixCls2();
    });
    var transitionName2 = computed(function() {
      return getTransitionName(rootPrefixCls.value, "slide-up", props2.transitionName);
    });
    var mergedClassName = computed(function() {
      var _classNames;
      return classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-lg"), size.value === "large"), _defineProperty(_classNames, "".concat(prefixCls.value, "-sm"), size.value === "small"), _defineProperty(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"), _defineProperty(_classNames, "".concat(prefixCls.value, "-borderless"), !props2.bordered), _classNames));
    });
    var triggerChange = function triggerChange2() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      emit("update:value", args[0]);
      emit.apply(void 0, ["change"].concat(args));
      formItemContext.onFieldChange();
    };
    var handleBlur = function handleBlur2(e) {
      emit("blur", e);
      formItemContext.onFieldBlur();
    };
    expose({
      blur,
      focus,
      scrollTo
    });
    var isMultiple2 = computed(function() {
      return mode.value === "multiple" || mode.value === "tags";
    });
    return function() {
      var _slots$placeholder, _slots$default;
      var notFoundContent = props2.notFoundContent, _props$listHeight = props2.listHeight, listHeight = _props$listHeight === void 0 ? 256 : _props$listHeight, _props$listItemHeight = props2.listItemHeight, listItemHeight = _props$listItemHeight === void 0 ? 24 : _props$listItemHeight, getPopupContainer = props2.getPopupContainer, dropdownClassName = props2.dropdownClassName, virtual = props2.virtual, dropdownMatchSelectWidth = props2.dropdownMatchSelectWidth, _props$id = props2.id, id = _props$id === void 0 ? formItemContext.id.value : _props$id, _props$placeholder = props2.placeholder, placeholder = _props$placeholder === void 0 ? (_slots$placeholder = slots.placeholder) === null || _slots$placeholder === void 0 ? void 0 : _slots$placeholder.call(slots) : _props$placeholder;
      var renderEmpty2 = configProvider.renderEmpty, getContextPopupContainer = configProvider.getPopupContainer;
      var mergedNotFound;
      if (notFoundContent !== void 0) {
        mergedNotFound = notFoundContent;
      } else if (slots.notFoundContent) {
        mergedNotFound = slots.notFoundContent();
      } else if (mode.value === "combobox") {
        mergedNotFound = null;
      } else {
        mergedNotFound = renderEmpty2("Select");
      }
      var _getIcons = getIcons(_objectSpread(_objectSpread({}, props2), {}, {
        multiple: isMultiple2.value,
        prefixCls: prefixCls.value
      }), slots), suffixIcon = _getIcons.suffixIcon, itemIcon = _getIcons.itemIcon, removeIcon = _getIcons.removeIcon, clearIcon = _getIcons.clearIcon;
      var selectProps3 = omit$2(props2, ["prefixCls", "suffixIcon", "itemIcon", "removeIcon", "clearIcon", "size", "bordered"]);
      var rcSelectRtlDropDownClassName = classNames(dropdownClassName, _defineProperty({}, "".concat(prefixCls.value, "-dropdown-").concat(direction.value), direction.value === "rtl"));
      return createVNode(Select$1, _objectSpread(_objectSpread(_objectSpread({
        "ref": selectRef,
        "virtual": virtual,
        "dropdownMatchSelectWidth": dropdownMatchSelectWidth
      }, selectProps3), attrs), {}, {
        "placeholder": placeholder,
        "listHeight": listHeight,
        "listItemHeight": listItemHeight,
        "mode": mode.value,
        "prefixCls": prefixCls.value,
        "direction": direction.value,
        "inputIcon": suffixIcon,
        "menuItemSelectedIcon": itemIcon,
        "removeIcon": removeIcon,
        "clearIcon": clearIcon,
        "notFoundContent": mergedNotFound,
        "class": [mergedClassName.value, attrs.class],
        "getPopupContainer": getPopupContainer || getContextPopupContainer,
        "dropdownClassName": rcSelectRtlDropDownClassName,
        "onChange": triggerChange,
        "onBlur": handleBlur,
        "id": id,
        "dropdownRender": selectProps3.dropdownRender || slots.dropdownRender,
        "transitionName": transitionName2.value,
        "children": (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots),
        "tagRender": props2.tagRender || slots.tagRender,
        "optionLabelRender": slots.optionLabel,
        "maxTagPlaceholder": props2.maxTagPlaceholder || slots.maxTagPlaceholder
      }), {
        option: slots.option
      });
    };
  }
});
Select.install = function(app) {
  app.component(Select.name, Select);
  app.component(Select.Option.displayName, Select.Option);
  app.component(Select.OptGroup.displayName, Select.OptGroup);
  return app;
};
Select.Option;
Select.OptGroup;
const VcSelect = Select;
var responsiveArray = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"];
var responsiveMap = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1600px)",
  xxxl: "(min-width: 2000px)"
};
var subscribers = /* @__PURE__ */ new Map();
var subUid = -1;
var screens = {};
var responsiveObserve = {
  matchHandlers: {},
  dispatch: function dispatch(pointMap) {
    screens = pointMap;
    subscribers.forEach(function(func) {
      return func(screens);
    });
    return subscribers.size >= 1;
  },
  subscribe: function subscribe(func) {
    if (!subscribers.size)
      this.register();
    subUid += 1;
    subscribers.set(subUid, func);
    func(screens);
    return subUid;
  },
  unsubscribe: function unsubscribe(token) {
    subscribers.delete(token);
    if (!subscribers.size)
      this.unregister();
  },
  unregister: function unregister() {
    var _this = this;
    Object.keys(responsiveMap).forEach(function(screen) {
      var matchMediaQuery = responsiveMap[screen];
      var handler2 = _this.matchHandlers[matchMediaQuery];
      handler2 === null || handler2 === void 0 ? void 0 : handler2.mql.removeListener(handler2 === null || handler2 === void 0 ? void 0 : handler2.listener);
    });
    subscribers.clear();
  },
  register: function register() {
    var _this2 = this;
    Object.keys(responsiveMap).forEach(function(screen) {
      var matchMediaQuery = responsiveMap[screen];
      var listener = function listener2(_ref) {
        var matches = _ref.matches;
        _this2.dispatch(_objectSpread(_objectSpread({}, screens), {}, _defineProperty({}, screen, matches)));
      };
      var mql = window.matchMedia(matchMediaQuery);
      mql.addListener(listener);
      _this2.matchHandlers[matchMediaQuery] = {
        mql,
        listener
      };
      listener(mql);
    });
  }
};
const ResponsiveObserve = responsiveObserve;
function useBreakpoint() {
  var screens2 = ref({});
  var token = null;
  onUnmounted(function() {
    ResponsiveObserve.unsubscribe(token);
  });
  return screens2;
}
var sizeProvider = Symbol("SizeProvider");
var useProvideSize = function useProvideSize2(props2) {
  var configProvider = inject("configProvider", defaultConfigProvider);
  var size = computed(function() {
    return props2.size || configProvider.componentSize;
  });
  provide(sizeProvider, size);
  return size;
};
var useInjectSize = function useInjectSize2(props2) {
  var size = props2 ? computed(function() {
    return props2.size;
  }) : inject(sizeProvider, computed(function() {
    return "default";
  }));
  return size;
};
function eagerComputed(fn) {
  var result = shallowRef();
  watchEffect(function() {
    result.value = fn();
  }, {
    flush: "sync"
  });
  return result;
}
var avatarProps = function avatarProps2() {
  return {
    prefixCls: String,
    shape: {
      type: String,
      default: "circle"
    },
    size: {
      type: [Number, String, Object],
      default: function _default4() {
        return "default";
      }
    },
    src: String,
    srcset: String,
    icon: PropTypes$1.any,
    alt: String,
    gap: Number,
    draggable: {
      type: Boolean,
      default: void 0
    },
    crossOrigin: String,
    loadError: {
      type: Function
    }
  };
};
var Avatar$2 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AAvatar",
  inheritAttrs: false,
  props: avatarProps(),
  slots: ["icon"],
  setup: function setup29(props2, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs;
    var isImgExist = ref(true);
    var isMounted = ref(false);
    var scale = ref(1);
    var avatarChildrenRef = ref(null);
    var avatarNodeRef = ref(null);
    var _useConfigInject = useConfigInject("avatar", props2), prefixCls = _useConfigInject.prefixCls;
    var groupSize = useInjectSize();
    var size = computed(function() {
      return props2.size === "default" ? groupSize.value : props2.size;
    });
    var screens2 = useBreakpoint();
    var responsiveSize = eagerComputed(function() {
      if (_typeof(props2.size) !== "object") {
        return void 0;
      }
      var currentBreakpoint = responsiveArray.find(function(screen) {
        return screens2.value[screen];
      });
      var currentSize = props2.size[currentBreakpoint];
      return currentSize;
    });
    var responsiveSizeStyle = function responsiveSizeStyle2(hasIcon) {
      if (responsiveSize.value) {
        return {
          width: "".concat(responsiveSize.value, "px"),
          height: "".concat(responsiveSize.value, "px"),
          lineHeight: "".concat(responsiveSize.value, "px"),
          fontSize: "".concat(hasIcon ? responsiveSize.value / 2 : 18, "px")
        };
      }
      return {};
    };
    var setScaleParam = function setScaleParam2() {
      if (!avatarChildrenRef.value || !avatarNodeRef.value) {
        return;
      }
      var childrenWidth = avatarChildrenRef.value.offsetWidth;
      var nodeWidth = avatarNodeRef.value.offsetWidth;
      if (childrenWidth !== 0 && nodeWidth !== 0) {
        var _props$gap = props2.gap, gap = _props$gap === void 0 ? 4 : _props$gap;
        if (gap * 2 < nodeWidth) {
          scale.value = nodeWidth - gap * 2 < childrenWidth ? (nodeWidth - gap * 2) / childrenWidth : 1;
        }
      }
    };
    var handleImgLoadError = function handleImgLoadError2() {
      var loadError = props2.loadError;
      var errorFlag = loadError === null || loadError === void 0 ? void 0 : loadError();
      if (errorFlag !== false) {
        isImgExist.value = false;
      }
    };
    watch(function() {
      return props2.src;
    }, function() {
      nextTick(function() {
        isImgExist.value = true;
        scale.value = 1;
      });
    });
    watch(function() {
      return props2.gap;
    }, function() {
      nextTick(function() {
        setScaleParam();
      });
    });
    return function() {
      var _classString, _slots$default;
      var shape = props2.shape, src = props2.src, alt = props2.alt, srcset = props2.srcset, draggable = props2.draggable, crossOrigin = props2.crossOrigin;
      var icon = getPropsSlot(slots, props2, "icon");
      var pre = prefixCls.value;
      var classString = (_classString = {}, _defineProperty(_classString, "".concat(attrs.class), !!attrs.class), _defineProperty(_classString, pre, true), _defineProperty(_classString, "".concat(pre, "-lg"), size.value === "large"), _defineProperty(_classString, "".concat(pre, "-sm"), size.value === "small"), _defineProperty(_classString, "".concat(pre, "-").concat(shape), shape), _defineProperty(_classString, "".concat(pre, "-image"), src && isImgExist.value), _defineProperty(_classString, "".concat(pre, "-icon"), icon), _classString);
      var sizeStyle = typeof size.value === "number" ? {
        width: "".concat(size.value, "px"),
        height: "".concat(size.value, "px"),
        lineHeight: "".concat(size.value, "px"),
        fontSize: icon ? "".concat(size.value / 2, "px") : "18px"
      } : {};
      var children = (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
      var childrenToRender;
      if (src && isImgExist.value) {
        childrenToRender = createVNode("img", {
          "draggable": draggable,
          "src": src,
          "srcset": srcset,
          "onError": handleImgLoadError,
          "alt": alt,
          "crossorigin": crossOrigin
        }, null);
      } else if (icon) {
        childrenToRender = icon;
      } else if (isMounted.value || scale.value !== 1) {
        var transformString = "scale(".concat(scale.value, ") translateX(-50%)");
        var childrenStyle = {
          msTransform: transformString,
          WebkitTransform: transformString,
          transform: transformString
        };
        var sizeChildrenStyle = typeof size.value === "number" ? {
          lineHeight: "".concat(size.value, "px")
        } : {};
        childrenToRender = createVNode(ResizeObserver, {
          "onResize": setScaleParam
        }, {
          default: function _default4() {
            return [createVNode("span", {
              "class": "".concat(pre, "-string"),
              "ref": avatarChildrenRef,
              "style": _objectSpread(_objectSpread({}, sizeChildrenStyle), childrenStyle)
            }, [children])];
          }
        });
      } else {
        childrenToRender = createVNode("span", {
          "class": "".concat(pre, "-string"),
          "ref": avatarChildrenRef,
          "style": {
            opacity: 0
          }
        }, [children]);
      }
      return createVNode("span", _objectSpread(_objectSpread({}, attrs), {}, {
        "ref": avatarNodeRef,
        "class": classString,
        "style": [sizeStyle, responsiveSizeStyle(!!icon), attrs.style]
      }), [childrenToRender]);
    };
  }
});
const Avatar$3 = Avatar$2;
var autoAdjustOverflow$2 = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset$2 = [0, 0];
var placements$3 = {
  left: {
    points: ["cr", "cl"],
    overflow: autoAdjustOverflow$2,
    offset: [-4, 0],
    targetOffset: targetOffset$2
  },
  right: {
    points: ["cl", "cr"],
    overflow: autoAdjustOverflow$2,
    offset: [4, 0],
    targetOffset: targetOffset$2
  },
  top: {
    points: ["bc", "tc"],
    overflow: autoAdjustOverflow$2,
    offset: [0, -4],
    targetOffset: targetOffset$2
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: autoAdjustOverflow$2,
    offset: [0, 4],
    targetOffset: targetOffset$2
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: autoAdjustOverflow$2,
    offset: [0, -4],
    targetOffset: targetOffset$2
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: autoAdjustOverflow$2,
    offset: [-4, 0],
    targetOffset: targetOffset$2
  },
  topRight: {
    points: ["br", "tr"],
    overflow: autoAdjustOverflow$2,
    offset: [0, -4],
    targetOffset: targetOffset$2
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: autoAdjustOverflow$2,
    offset: [4, 0],
    targetOffset: targetOffset$2
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: autoAdjustOverflow$2,
    offset: [0, 4],
    targetOffset: targetOffset$2
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: autoAdjustOverflow$2,
    offset: [4, 0],
    targetOffset: targetOffset$2
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: autoAdjustOverflow$2,
    offset: [0, 4],
    targetOffset: targetOffset$2
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: autoAdjustOverflow$2,
    offset: [-4, 0],
    targetOffset: targetOffset$2
  }
};
var tooltipContentProps = {
  prefixCls: String,
  id: String,
  overlayInnerStyle: PropTypes$1.any
};
const Content$1 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Content",
  props: tooltipContentProps,
  slots: ["overlay"],
  setup: function setup30(props2, _ref) {
    var slots = _ref.slots;
    return function() {
      var _slots$overlay;
      return createVNode("div", {
        "class": "".concat(props2.prefixCls, "-inner"),
        "id": props2.id,
        "role": "tooltip",
        "style": props2.overlayInnerStyle
      }, [(_slots$overlay = slots.overlay) === null || _slots$overlay === void 0 ? void 0 : _slots$overlay.call(slots)]);
    };
  }
});
var _excluded$b = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "afterVisibleChange", "transitionName", "animation", "placement", "align", "destroyTooltipOnHide", "defaultVisible"];
function noop$2() {
}
const Tooltip$1 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Tooltip",
  inheritAttrs: false,
  props: {
    trigger: PropTypes$1.any.def(["hover"]),
    defaultVisible: {
      type: Boolean,
      default: void 0
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    placement: PropTypes$1.string.def("right"),
    transitionName: String,
    animation: PropTypes$1.any,
    afterVisibleChange: PropTypes$1.func.def(function() {
    }),
    overlayStyle: {
      type: Object,
      default: void 0
    },
    overlayClassName: String,
    prefixCls: PropTypes$1.string.def("rc-tooltip"),
    mouseEnterDelay: PropTypes$1.number.def(0.1),
    mouseLeaveDelay: PropTypes$1.number.def(0.1),
    getPopupContainer: Function,
    destroyTooltipOnHide: {
      type: Boolean,
      default: false
    },
    align: PropTypes$1.object.def(function() {
      return {};
    }),
    arrowContent: PropTypes$1.any.def(null),
    tipId: String,
    builtinPlacements: PropTypes$1.object,
    overlayInnerStyle: {
      type: Object,
      default: void 0
    },
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    onVisibleChange: Function,
    onPopupAlign: Function
  },
  slots: ["arrowContent", "overlay"],
  setup: function setup31(props2, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs, expose = _ref.expose;
    var triggerDOM = ref();
    var getPopupElement = function getPopupElement2() {
      var prefixCls = props2.prefixCls, tipId = props2.tipId, overlayInnerStyle = props2.overlayInnerStyle;
      return [createVNode("div", {
        "class": "".concat(prefixCls, "-arrow"),
        "key": "arrow"
      }, [getPropsSlot(slots, props2, "arrowContent")]), createVNode(Content$1, {
        "key": "content",
        "prefixCls": prefixCls,
        "id": tipId,
        "overlayInnerStyle": overlayInnerStyle
      }, {
        overlay: slots.overlay
      })];
    };
    var getPopupDomNode2 = function getPopupDomNode3() {
      return triggerDOM.value.getPopupDomNode();
    };
    expose({
      getPopupDomNode: getPopupDomNode2,
      triggerDOM,
      forcePopupAlign: function forcePopupAlign2() {
        var _triggerDOM$value;
        return (_triggerDOM$value = triggerDOM.value) === null || _triggerDOM$value === void 0 ? void 0 : _triggerDOM$value.forcePopupAlign();
      }
    });
    var destroyTooltip = ref(false);
    var autoDestroy = ref(false);
    watchEffect(function() {
      var destroyTooltipOnHide = props2.destroyTooltipOnHide;
      if (typeof destroyTooltipOnHide === "boolean") {
        destroyTooltip.value = destroyTooltipOnHide;
      } else if (destroyTooltipOnHide && _typeof(destroyTooltipOnHide) === "object") {
        var keepParent = destroyTooltipOnHide.keepParent;
        destroyTooltip.value = keepParent === true;
        autoDestroy.value = keepParent === false;
      }
    });
    return function() {
      var overlayClassName = props2.overlayClassName, trigger2 = props2.trigger, mouseEnterDelay = props2.mouseEnterDelay, mouseLeaveDelay = props2.mouseLeaveDelay, overlayStyle = props2.overlayStyle, prefixCls = props2.prefixCls, afterVisibleChange = props2.afterVisibleChange, transitionName2 = props2.transitionName, animation = props2.animation, placement = props2.placement, align = props2.align;
      props2.destroyTooltipOnHide;
      var defaultVisible = props2.defaultVisible, restProps = _objectWithoutProperties(props2, _excluded$b);
      var extraProps = _objectSpread({}, restProps);
      if (props2.visible !== void 0) {
        extraProps.popupVisible = props2.visible;
      }
      var triggerProps = _objectSpread(_objectSpread(_objectSpread({
        popupClassName: overlayClassName,
        prefixCls,
        action: trigger2,
        builtinPlacements: placements$3,
        popupPlacement: placement,
        popupAlign: align,
        afterPopupVisibleChange: afterVisibleChange,
        popupTransitionName: transitionName2,
        popupAnimation: animation,
        defaultPopupVisible: defaultVisible,
        destroyPopupOnHide: destroyTooltip.value,
        autoDestroy: autoDestroy.value,
        mouseLeaveDelay,
        popupStyle: overlayStyle,
        mouseEnterDelay
      }, extraProps), attrs), {}, {
        onPopupVisibleChange: props2.onVisibleChange || noop$2,
        onPopupAlign: props2.onPopupAlign || noop$2,
        ref: triggerDOM,
        popup: getPopupElement()
      });
      return createVNode(Trigger, triggerProps, {
        default: slots.default
      });
    };
  }
});
var PresetStatusColorTypes = tuple("success", "processing", "error", "default", "warning");
var PresetColorTypes = tuple("pink", "red", "yellow", "orange", "cyan", "green", "blue", "purple", "geekblue", "magenta", "volcano", "gold", "lime");
const abstractTooltipProps = function() {
  return {
    trigger: [String, Array],
    visible: {
      type: Boolean,
      default: void 0
    },
    defaultVisible: {
      type: Boolean,
      default: void 0
    },
    placement: String,
    color: String,
    transitionName: String,
    overlayStyle: {
      type: Object,
      default: void 0
    },
    overlayClassName: String,
    openClassName: String,
    prefixCls: String,
    mouseEnterDelay: Number,
    mouseLeaveDelay: Number,
    getPopupContainer: Function,
    arrowPointAtCenter: {
      type: Boolean,
      default: void 0
    },
    autoAdjustOverflow: {
      type: [Boolean, Object],
      default: void 0
    },
    destroyTooltipOnHide: {
      type: Boolean,
      default: void 0
    },
    align: {
      type: Object,
      default: void 0
    },
    builtinPlacements: {
      type: Object,
      default: void 0
    },
    children: Array,
    onVisibleChange: Function,
    "onUpdate:visible": Function
  };
};
var autoAdjustOverflowEnabled = {
  adjustX: 1,
  adjustY: 1
};
var autoAdjustOverflowDisabled = {
  adjustX: 0,
  adjustY: 0
};
var targetOffset$1 = [0, 0];
function getOverflowOptions(autoAdjustOverflow2) {
  if (typeof autoAdjustOverflow2 === "boolean") {
    return autoAdjustOverflow2 ? autoAdjustOverflowEnabled : autoAdjustOverflowDisabled;
  }
  return _objectSpread(_objectSpread({}, autoAdjustOverflowDisabled), autoAdjustOverflow2);
}
function getPlacements(config) {
  var _config$arrowWidth = config.arrowWidth, arrowWidth = _config$arrowWidth === void 0 ? 4 : _config$arrowWidth, _config$horizontalArr = config.horizontalArrowShift, horizontalArrowShift = _config$horizontalArr === void 0 ? 16 : _config$horizontalArr, _config$verticalArrow = config.verticalArrowShift, verticalArrowShift = _config$verticalArrow === void 0 ? 8 : _config$verticalArrow, autoAdjustOverflow2 = config.autoAdjustOverflow, arrowPointAtCenter = config.arrowPointAtCenter;
  var placementMap = {
    left: {
      points: ["cr", "cl"],
      offset: [-4, 0]
    },
    right: {
      points: ["cl", "cr"],
      offset: [4, 0]
    },
    top: {
      points: ["bc", "tc"],
      offset: [0, -4]
    },
    bottom: {
      points: ["tc", "bc"],
      offset: [0, 4]
    },
    topLeft: {
      points: ["bl", "tc"],
      offset: [-(horizontalArrowShift + arrowWidth), -4]
    },
    leftTop: {
      points: ["tr", "cl"],
      offset: [-4, -(verticalArrowShift + arrowWidth)]
    },
    topRight: {
      points: ["br", "tc"],
      offset: [horizontalArrowShift + arrowWidth, -4]
    },
    rightTop: {
      points: ["tl", "cr"],
      offset: [4, -(verticalArrowShift + arrowWidth)]
    },
    bottomRight: {
      points: ["tr", "bc"],
      offset: [horizontalArrowShift + arrowWidth, 4]
    },
    rightBottom: {
      points: ["bl", "cr"],
      offset: [4, verticalArrowShift + arrowWidth]
    },
    bottomLeft: {
      points: ["tl", "bc"],
      offset: [-(horizontalArrowShift + arrowWidth), 4]
    },
    leftBottom: {
      points: ["br", "cl"],
      offset: [-4, verticalArrowShift + arrowWidth]
    }
  };
  Object.keys(placementMap).forEach(function(key2) {
    placementMap[key2] = arrowPointAtCenter ? _objectSpread(_objectSpread({}, placementMap[key2]), {}, {
      overflow: getOverflowOptions(autoAdjustOverflow2),
      targetOffset: targetOffset$1
    }) : _objectSpread(_objectSpread({}, placements$3[key2]), {}, {
      overflow: getOverflowOptions(autoAdjustOverflow2)
    });
    placementMap[key2].ignoreShake = true;
  });
  return placementMap;
}
function firstNotUndefined() {
  var arr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  for (var i = 0, len = arr.length; i < len; i++) {
    if (arr[i] !== void 0) {
      return arr[i];
    }
  }
  return void 0;
}
var splitObject = function splitObject2(obj, keys2) {
  var picked = {};
  var omitted = _objectSpread({}, obj);
  keys2.forEach(function(key2) {
    if (obj && key2 in obj) {
      picked[key2] = obj[key2];
      delete omitted[key2];
    }
  });
  return {
    picked,
    omitted
  };
};
var PresetColorRegex$1 = new RegExp("^(".concat(PresetColorTypes.join("|"), ")(-inverse)?$"));
var tooltipProps = function tooltipProps2() {
  return _objectSpread(_objectSpread({}, abstractTooltipProps()), {}, {
    title: PropTypes$1.any
  });
};
var tooltipDefaultProps = function tooltipDefaultProps2() {
  return {
    trigger: "hover",
    transitionName: "zoom-big-fast",
    align: {},
    placement: "top",
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    arrowPointAtCenter: false,
    autoAdjustOverflow: true
  };
};
const ToolTip = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ATooltip",
  inheritAttrs: false,
  props: initDefaultProps$1(tooltipProps(), {
    trigger: "hover",
    transitionName: "zoom-big-fast",
    align: {},
    placement: "top",
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    arrowPointAtCenter: false,
    autoAdjustOverflow: true
  }),
  slots: ["title"],
  setup: function setup32(props2, _ref) {
    var slots = _ref.slots, emit = _ref.emit, attrs = _ref.attrs, expose = _ref.expose;
    var _useConfigInject = useConfigInject("tooltip", props2), prefixCls = _useConfigInject.prefixCls, getPopupContainer = _useConfigInject.getPopupContainer;
    var visible = ref(firstNotUndefined([props2.visible, props2.defaultVisible]));
    var tooltip = ref();
    var rafId;
    watch(function() {
      return props2.visible;
    }, function(val) {
      wrapperRaf.cancel(rafId);
      rafId = wrapperRaf(function() {
        visible.value = !!val;
      });
    });
    var isNoTitle = function isNoTitle2() {
      var _props$title;
      var title = (_props$title = props2.title) !== null && _props$title !== void 0 ? _props$title : slots.title;
      return !title && title !== 0;
    };
    var handleVisibleChange = function handleVisibleChange2(val) {
      var noTitle = isNoTitle();
      if (props2.visible === void 0) {
        visible.value = noTitle ? false : val;
      }
      if (!noTitle) {
        emit("update:visible", val);
        emit("visibleChange", val);
      }
    };
    var getPopupDomNode2 = function getPopupDomNode3() {
      return tooltip.value.getPopupDomNode();
    };
    expose({
      getPopupDomNode: getPopupDomNode2,
      visible,
      forcePopupAlign: function forcePopupAlign2() {
        var _tooltip$value;
        return (_tooltip$value = tooltip.value) === null || _tooltip$value === void 0 ? void 0 : _tooltip$value.forcePopupAlign();
      }
    });
    var tooltipPlacements = computed(function() {
      var builtinPlacements = props2.builtinPlacements, arrowPointAtCenter = props2.arrowPointAtCenter, autoAdjustOverflow2 = props2.autoAdjustOverflow;
      return builtinPlacements || getPlacements({
        arrowPointAtCenter,
        autoAdjustOverflow: autoAdjustOverflow2
      });
    });
    var isTrueProps = function isTrueProps2(val) {
      return val || val === "";
    };
    var getDisabledCompatibleChildren = function getDisabledCompatibleChildren2(ele) {
      var elementType = ele.type;
      if (_typeof(elementType) === "object" && ele.props) {
        if ((elementType.__ANT_BUTTON === true || elementType === "button") && isTrueProps(ele.props.disabled) || elementType.__ANT_SWITCH === true && (isTrueProps(ele.props.disabled) || isTrueProps(ele.props.loading))) {
          var _splitObject = splitObject(getStyle(ele), ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]), picked = _splitObject.picked, omitted = _splitObject.omitted;
          var spanStyle = _objectSpread(_objectSpread({
            display: "inline-block"
          }, picked), {}, {
            cursor: "not-allowed",
            lineHeight: 1,
            width: ele.props && ele.props.block ? "100%" : null
          });
          var buttonStyle = _objectSpread(_objectSpread({}, omitted), {}, {
            pointerEvents: "none"
          });
          var child = cloneElement(ele, {
            style: buttonStyle
          }, true);
          return createVNode("span", {
            "style": spanStyle,
            "class": "".concat(prefixCls.value, "-disabled-compatible-wrapper")
          }, [child]);
        }
      }
      return ele;
    };
    var getOverlay = function getOverlay2() {
      var _props$title2, _slots$title;
      return (_props$title2 = props2.title) !== null && _props$title2 !== void 0 ? _props$title2 : (_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots);
    };
    var onPopupAlign = function onPopupAlign2(domNode, align) {
      var placements2 = tooltipPlacements.value;
      var placement = Object.keys(placements2).filter(function(key2) {
        return placements2[key2].points[0] === align.points[0] && placements2[key2].points[1] === align.points[1];
      })[0];
      if (!placement) {
        return;
      }
      var rect = domNode.getBoundingClientRect();
      var transformOrigin = {
        top: "50%",
        left: "50%"
      };
      if (placement.indexOf("top") >= 0 || placement.indexOf("Bottom") >= 0) {
        transformOrigin.top = "".concat(rect.height - align.offset[1], "px");
      } else if (placement.indexOf("Top") >= 0 || placement.indexOf("bottom") >= 0) {
        transformOrigin.top = "".concat(-align.offset[1], "px");
      }
      if (placement.indexOf("left") >= 0 || placement.indexOf("Right") >= 0) {
        transformOrigin.left = "".concat(rect.width - align.offset[0], "px");
      } else if (placement.indexOf("right") >= 0 || placement.indexOf("Left") >= 0) {
        transformOrigin.left = "".concat(-align.offset[0], "px");
      }
      domNode.style.transformOrigin = "".concat(transformOrigin.left, " ").concat(transformOrigin.top);
    };
    return function() {
      var _filterEmpty, _slots$default, _classNames;
      var openClassName = props2.openClassName, color = props2.color, overlayClassName = props2.overlayClassName;
      var children = (_filterEmpty = filterEmpty((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots))) !== null && _filterEmpty !== void 0 ? _filterEmpty : null;
      children = children.length === 1 ? children[0] : children;
      var tempVisible = visible.value;
      if (props2.visible === void 0 && isNoTitle()) {
        tempVisible = false;
      }
      if (!children) {
        return null;
      }
      var child = getDisabledCompatibleChildren(isValidElement(children) ? children : createVNode("span", null, [children]));
      var childCls = classNames((_classNames = {}, _defineProperty(_classNames, openClassName || "".concat(prefixCls.value, "-open"), true), _defineProperty(_classNames, child.props && child.props.class, child.props && child.props.class), _classNames));
      var customOverlayClassName = classNames(overlayClassName, _defineProperty({}, "".concat(prefixCls.value, "-").concat(color), color && PresetColorRegex$1.test(color)));
      var formattedOverlayInnerStyle;
      var arrowContentStyle;
      if (color && !PresetColorRegex$1.test(color)) {
        formattedOverlayInnerStyle = {
          backgroundColor: color
        };
        arrowContentStyle = {
          backgroundColor: color
        };
      }
      var vcTooltipProps = _objectSpread(_objectSpread(_objectSpread({}, attrs), props2), {}, {
        prefixCls: prefixCls.value,
        getPopupContainer: getPopupContainer.value,
        builtinPlacements: tooltipPlacements.value,
        visible: tempVisible,
        ref: tooltip,
        overlayClassName: customOverlayClassName,
        overlayInnerStyle: formattedOverlayInnerStyle,
        onVisibleChange: handleVisibleChange,
        onPopupAlign
      });
      return createVNode(Tooltip$1, vcTooltipProps, {
        default: function _default4() {
          return [visible.value ? cloneElement(child, {
            class: childCls
          }) : child];
        },
        arrowContent: function arrowContent() {
          return createVNode("span", {
            "class": "".concat(prefixCls.value, "-arrow-content"),
            "style": arrowContentStyle
          }, null);
        },
        overlay: getOverlay
      });
    };
  }
});
const Tooltip = withInstall(ToolTip);
var popoverProps = function popoverProps2() {
  return _objectSpread(_objectSpread({}, abstractTooltipProps()), {}, {
    content: PropTypes$1.any,
    title: PropTypes$1.any
  });
};
var Popover = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "APopover",
  props: initDefaultProps$1(popoverProps(), _objectSpread(_objectSpread({}, tooltipDefaultProps()), {}, {
    trigger: "hover",
    transitionName: "zoom-big",
    placement: "top",
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1
  })),
  setup: function setup33(props2, _ref) {
    var expose = _ref.expose, slots = _ref.slots;
    var tooltipRef = ref();
    expose({
      getPopupDomNode: function getPopupDomNode2() {
        var _tooltipRef$value, _tooltipRef$value$get;
        return (_tooltipRef$value = tooltipRef.value) === null || _tooltipRef$value === void 0 ? void 0 : (_tooltipRef$value$get = _tooltipRef$value.getPopupDomNode) === null || _tooltipRef$value$get === void 0 ? void 0 : _tooltipRef$value$get.call(_tooltipRef$value);
      }
    });
    var _useConfigInject = useConfigInject("popover", props2), prefixCls = _useConfigInject.prefixCls, configProvider = _useConfigInject.configProvider;
    var rootPrefixCls = computed(function() {
      return configProvider.getPrefixCls();
    });
    var getOverlay = function getOverlay2() {
      var _slots$title, _slots$content;
      var _props$title = props2.title, title = _props$title === void 0 ? filterEmpty((_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots)) : _props$title, _props$content = props2.content, content = _props$content === void 0 ? filterEmpty((_slots$content = slots.content) === null || _slots$content === void 0 ? void 0 : _slots$content.call(slots)) : _props$content;
      var hasTitle = !!(Array.isArray(title) ? title.length : title);
      var hasContent = !!(Array.isArray(content) ? content.length : title);
      if (!hasTitle && !hasContent)
        return void 0;
      return createVNode(Fragment$1, null, [hasTitle && createVNode("div", {
        "class": "".concat(prefixCls.value, "-title")
      }, [title]), createVNode("div", {
        "class": "".concat(prefixCls.value, "-inner-content")
      }, [content])]);
    };
    return function() {
      return createVNode(Tooltip, _objectSpread(_objectSpread({}, omit$2(props2, ["title", "content"])), {}, {
        "prefixCls": prefixCls.value,
        "ref": tooltipRef,
        "transitionName": getTransitionName(rootPrefixCls.value, "zoom-big", props2.transitionName)
      }), {
        title: getOverlay,
        default: slots.default
      });
    };
  }
});
const Popover$1 = withInstall(Popover);
var groupProps = function groupProps2() {
  return {
    prefixCls: String,
    maxCount: Number,
    maxStyle: {
      type: Object,
      default: void 0
    },
    maxPopoverPlacement: {
      type: String,
      default: "top"
    },
    maxPopoverTrigger: String,
    size: {
      type: [Number, String, Object],
      default: "default"
    }
  };
};
var Group = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AAvatarGroup",
  inheritAttrs: false,
  props: groupProps(),
  setup: function setup34(props2, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs;
    var _useConfigInject = useConfigInject("avatar-group", props2), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    useProvideSize(props2);
    return function() {
      var _cls;
      var _props$maxPopoverPlac = props2.maxPopoverPlacement, maxPopoverPlacement = _props$maxPopoverPlac === void 0 ? "top" : _props$maxPopoverPlac, maxCount2 = props2.maxCount, maxStyle = props2.maxStyle, _props$maxPopoverTrig = props2.maxPopoverTrigger, maxPopoverTrigger = _props$maxPopoverTrig === void 0 ? "hover" : _props$maxPopoverTrig;
      var cls = (_cls = {}, _defineProperty(_cls, prefixCls.value, true), _defineProperty(_cls, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"), _defineProperty(_cls, "".concat(attrs.class), !!attrs.class), _cls);
      var children = getPropsSlot(slots, props2);
      var childrenWithProps = flattenChildren(children).map(function(child, index2) {
        return cloneElement(child, {
          key: "avatar-key-".concat(index2)
        });
      });
      var numOfChildren = childrenWithProps.length;
      if (maxCount2 && maxCount2 < numOfChildren) {
        var childrenShow = childrenWithProps.slice(0, maxCount2);
        var childrenHidden = childrenWithProps.slice(maxCount2, numOfChildren);
        childrenShow.push(createVNode(Popover$1, {
          "key": "avatar-popover-key",
          "content": childrenHidden,
          "trigger": maxPopoverTrigger,
          "placement": maxPopoverPlacement,
          "overlayClassName": "".concat(prefixCls.value, "-popover")
        }, {
          default: function _default4() {
            return [createVNode(Avatar$3, {
              "style": maxStyle
            }, {
              default: function _default5() {
                return ["+".concat(numOfChildren - maxCount2)];
              }
            })];
          }
        }));
        return createVNode("div", _objectSpread(_objectSpread({}, attrs), {}, {
          "class": cls,
          "style": attrs.style
        }), [childrenShow]);
      }
      return createVNode("div", _objectSpread(_objectSpread({}, attrs), {}, {
        "class": cls,
        "style": attrs.style
      }), [childrenWithProps]);
    };
  }
});
const Group$1 = Group;
Avatar$3.Group = Group$1;
Avatar$3.install = function(app) {
  app.component(Avatar$3.name, Avatar$3);
  app.component(Group$1.name, Group$1);
  return app;
};
var autoAdjustOverflow$1 = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset = [0, 0];
var placements$1 = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: autoAdjustOverflow$1,
    offset: [0, -4],
    targetOffset
  },
  topCenter: {
    points: ["bc", "tc"],
    overflow: autoAdjustOverflow$1,
    offset: [0, -4],
    targetOffset
  },
  topRight: {
    points: ["br", "tr"],
    overflow: autoAdjustOverflow$1,
    offset: [0, -4],
    targetOffset
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: autoAdjustOverflow$1,
    offset: [0, 4],
    targetOffset
  },
  bottomCenter: {
    points: ["tc", "bc"],
    overflow: autoAdjustOverflow$1,
    offset: [0, 4],
    targetOffset
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: autoAdjustOverflow$1,
    offset: [0, 4],
    targetOffset
  }
};
const placements$2 = placements$1;
var _excluded$a = ["prefixCls", "arrow", "showAction", "overlayStyle", "trigger", "placement", "align", "getPopupContainer", "transitionName", "animation", "overlayClassName"];
const Dropdown = defineComponent({
  compatConfig: {
    MODE: 3
  },
  props: {
    minOverlayWidthMatchTrigger: {
      type: Boolean,
      default: void 0
    },
    arrow: {
      type: Boolean,
      default: false
    },
    prefixCls: PropTypes$1.string.def("rc-dropdown"),
    transitionName: String,
    overlayClassName: PropTypes$1.string.def(""),
    openClassName: String,
    animation: PropTypes$1.any,
    align: PropTypes$1.object,
    overlayStyle: {
      type: Object,
      default: void 0
    },
    placement: PropTypes$1.string.def("bottomLeft"),
    overlay: PropTypes$1.any,
    trigger: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.arrayOf(PropTypes$1.string)]).def("hover"),
    alignPoint: {
      type: Boolean,
      default: void 0
    },
    showAction: PropTypes$1.array,
    hideAction: PropTypes$1.array,
    getPopupContainer: Function,
    visible: {
      type: Boolean,
      default: void 0
    },
    defaultVisible: {
      type: Boolean,
      default: false
    },
    mouseEnterDelay: PropTypes$1.number.def(0.15),
    mouseLeaveDelay: PropTypes$1.number.def(0.1)
  },
  emits: ["visibleChange", "overlayClick"],
  slots: ["overlay"],
  setup: function setup35(props2, _ref) {
    var slots = _ref.slots, emit = _ref.emit, expose = _ref.expose;
    var triggerVisible = ref(!!props2.visible);
    watch(function() {
      return props2.visible;
    }, function(val) {
      if (val !== void 0) {
        triggerVisible.value = val;
      }
    });
    var triggerRef = ref();
    expose({
      triggerRef
    });
    var onClick2 = function onClick3(e) {
      if (props2.visible === void 0) {
        triggerVisible.value = false;
      }
      emit("overlayClick", e);
    };
    var onVisibleChange = function onVisibleChange2(visible) {
      if (props2.visible === void 0) {
        triggerVisible.value = visible;
      }
      emit("visibleChange", visible);
    };
    var getMenuElement = function getMenuElement2() {
      var _slots$overlay;
      var overlayElement = (_slots$overlay = slots.overlay) === null || _slots$overlay === void 0 ? void 0 : _slots$overlay.call(slots);
      var extraOverlayProps = {
        prefixCls: "".concat(props2.prefixCls, "-menu"),
        onClick: onClick2,
        getPopupContainer: function getPopupContainer() {
          return triggerRef.value.getPopupDomNode();
        }
      };
      return createVNode(Fragment$1, null, [props2.arrow && createVNode("div", {
        "class": "".concat(props2.prefixCls, "-arrow")
      }, null), cloneElement(overlayElement, extraOverlayProps, false)]);
    };
    var minOverlayWidthMatchTrigger = computed(function() {
      var _props$minOverlayWidt = props2.minOverlayWidthMatchTrigger, matchTrigger = _props$minOverlayWidt === void 0 ? !props2.alignPoint : _props$minOverlayWidt;
      return matchTrigger;
    });
    var renderChildren2 = function renderChildren3() {
      var _slots$default;
      var children = (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
      return triggerVisible.value && children ? cloneElement(children[0], {
        class: props2.openClassName || "".concat(props2.prefixCls, "-open")
      }, false) : children;
    };
    var triggerHideAction = computed(function() {
      if (!props2.hideAction && props2.trigger.indexOf("contextmenu") !== -1) {
        return ["click"];
      }
      return props2.hideAction;
    });
    return function() {
      var prefixCls = props2.prefixCls, arrow = props2.arrow, showAction = props2.showAction, overlayStyle = props2.overlayStyle, trigger2 = props2.trigger, placement = props2.placement, align = props2.align, getPopupContainer = props2.getPopupContainer, transitionName2 = props2.transitionName, animation = props2.animation, overlayClassName = props2.overlayClassName, otherProps = _objectWithoutProperties(props2, _excluded$a);
      return createVNode(Trigger, _objectSpread(_objectSpread({}, otherProps), {}, {
        "prefixCls": prefixCls,
        "ref": triggerRef,
        "popupClassName": classNames(overlayClassName, _defineProperty({}, "".concat(prefixCls, "-show-arrow"), arrow)),
        "popupStyle": overlayStyle,
        "builtinPlacements": placements$2,
        "action": trigger2,
        "showAction": showAction,
        "hideAction": triggerHideAction.value || [],
        "popupPlacement": placement,
        "popupAlign": align,
        "popupTransitionName": transitionName2,
        "popupAnimation": animation,
        "popupVisible": triggerVisible.value,
        "stretch": minOverlayWidthMatchTrigger.value ? "minWidth" : "",
        "onPopupVisibleChange": onVisibleChange,
        "getPopupContainer": getPopupContainer
      }), {
        popup: getMenuElement,
        default: renderChildren2
      });
    };
  }
});
const Wave = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Wave",
  props: {
    insertExtraNode: Boolean,
    disabled: Boolean
  },
  setup: function setup36(props2, _ref) {
    var slots = _ref.slots, expose = _ref.expose;
    getCurrentInstance();
    var _useConfigInject = useConfigInject("", props2), csp = _useConfigInject.csp;
    expose({
      csp
    });
    return function() {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)[0];
    };
  }
});
function convertLegacyProps(type) {
  if (type === "danger") {
    return {
      danger: true
    };
  }
  return {
    type
  };
}
var buttonProps = function buttonProps2() {
  return {
    prefixCls: String,
    type: String,
    htmlType: {
      type: String,
      default: "button"
    },
    shape: {
      type: String
    },
    size: {
      type: String
    },
    loading: {
      type: [Boolean, Object],
      default: function _default4() {
        return false;
      }
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    ghost: {
      type: Boolean,
      default: void 0
    },
    block: {
      type: Boolean,
      default: void 0
    },
    danger: {
      type: Boolean,
      default: void 0
    },
    icon: PropTypes$1.any,
    href: String,
    target: String,
    title: String,
    onClick: {
      type: Function
    },
    onMousedown: {
      type: Function
    }
  };
};
const buttonTypes = buttonProps;
var getCollapsedWidth = function getCollapsedWidth2(node) {
  if (node) {
    node.style.width = "0px";
    node.style.opacity = "0";
    node.style.transform = "scale(0)";
  }
};
var getRealWidth = function getRealWidth2(node) {
  nextTick(function() {
    if (node) {
      node.style.width = "".concat(node.scrollWidth, "px");
      node.style.opacity = "1";
      node.style.transform = "scale(1)";
    }
  });
};
var resetStyle = function resetStyle2(node) {
  if (node && node.style) {
    node.style.width = null;
    node.style.opacity = null;
    node.style.transform = null;
  }
};
const LoadingIcon = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "LoadingIcon",
  props: {
    prefixCls: String,
    loading: [Boolean, Object],
    existIcon: Boolean
  },
  setup: function setup37(props2) {
    return function() {
      var existIcon = props2.existIcon, prefixCls = props2.prefixCls, loading = props2.loading;
      if (existIcon) {
        return createVNode("span", {
          "class": "".concat(prefixCls, "-loading-icon")
        }, [createVNode(LoadingOutlined, null, null)]);
      }
      var visible = !!loading;
      return createVNode(Transition, {
        "name": "".concat(prefixCls, "-loading-icon-motion"),
        "onBeforeEnter": getCollapsedWidth,
        "onEnter": getRealWidth,
        "onAfterEnter": resetStyle,
        "onBeforeLeave": getRealWidth,
        "onLeave": function onLeave(node) {
          setTimeout(function() {
            getCollapsedWidth(node);
          });
        },
        "onAfterLeave": resetStyle
      }, {
        default: function _default4() {
          return [visible ? createVNode("span", {
            "class": "".concat(prefixCls, "-loading-icon")
          }, [createVNode(LoadingOutlined, null, null)]) : null];
        }
      });
    };
  }
});
var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isUnborderedButtonType(type) {
  return type === "text" || type === "link";
}
const Button$1 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AButton",
  inheritAttrs: false,
  __ANT_BUTTON: true,
  props: initDefaultProps$1(buttonTypes(), {
    type: "default"
  }),
  slots: ["icon"],
  setup: function setup38(props2, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs, emit = _ref.emit;
    var _useConfigInject = useConfigInject("btn", props2), prefixCls = _useConfigInject.prefixCls, autoInsertSpaceInButton = _useConfigInject.autoInsertSpaceInButton, direction = _useConfigInject.direction, size = _useConfigInject.size;
    var buttonNodeRef = ref(null);
    var delayTimeoutRef = ref(void 0);
    var isNeedInserted = false;
    var innerLoading = ref(false);
    var hasTwoCNChar = ref(false);
    var autoInsertSpace = computed(function() {
      return autoInsertSpaceInButton.value !== false;
    });
    var loadingOrDelay = computed(function() {
      return _typeof(props2.loading) === "object" && props2.loading.delay ? props2.loading.delay || true : !!props2.loading;
    });
    watch(loadingOrDelay, function(val) {
      clearTimeout(delayTimeoutRef.value);
      if (typeof loadingOrDelay.value === "number") {
        delayTimeoutRef.value = setTimeout(function() {
          innerLoading.value = val;
        }, loadingOrDelay.value);
      } else {
        innerLoading.value = val;
      }
    }, {
      immediate: true
    });
    var classes = computed(function() {
      var _ref2;
      var type = props2.type, _props$shape = props2.shape, shape = _props$shape === void 0 ? "default" : _props$shape, ghost = props2.ghost, block = props2.block, danger = props2.danger;
      var pre = prefixCls.value;
      var sizeClassNameMap = {
        large: "lg",
        small: "sm",
        middle: void 0
      };
      var sizeFullname = size.value;
      var sizeCls = sizeFullname ? sizeClassNameMap[sizeFullname] || "" : "";
      return _ref2 = {}, _defineProperty(_ref2, "".concat(pre), true), _defineProperty(_ref2, "".concat(pre, "-").concat(type), type), _defineProperty(_ref2, "".concat(pre, "-").concat(shape), shape !== "default" && shape), _defineProperty(_ref2, "".concat(pre, "-").concat(sizeCls), sizeCls), _defineProperty(_ref2, "".concat(pre, "-loading"), innerLoading.value), _defineProperty(_ref2, "".concat(pre, "-background-ghost"), ghost && !isUnborderedButtonType(type)), _defineProperty(_ref2, "".concat(pre, "-two-chinese-chars"), hasTwoCNChar.value && autoInsertSpace.value), _defineProperty(_ref2, "".concat(pre, "-block"), block), _defineProperty(_ref2, "".concat(pre, "-dangerous"), !!danger), _defineProperty(_ref2, "".concat(pre, "-rtl"), direction.value === "rtl"), _ref2;
    });
    var fixTwoCNChar = function fixTwoCNChar2() {
      var node = buttonNodeRef.value;
      if (!node || autoInsertSpaceInButton.value === false) {
        return;
      }
      var buttonText = node.textContent;
      if (isNeedInserted && isTwoCNChar(buttonText)) {
        if (!hasTwoCNChar.value) {
          hasTwoCNChar.value = true;
        }
      } else if (hasTwoCNChar.value) {
        hasTwoCNChar.value = false;
      }
    };
    var handleClick = function handleClick2(event) {
      if (innerLoading.value || props2.disabled) {
        event.preventDefault();
        return;
      }
      emit("click", event);
    };
    var insertSpace = function insertSpace2(child, needInserted) {
      var SPACE = needInserted ? " " : "";
      if (child.type === Text) {
        var text = child.children.trim();
        if (isTwoCNChar(text)) {
          text = text.split("").join(SPACE);
        }
        return createVNode("span", null, [text]);
      }
      return child;
    };
    watchEffect(function() {
      devWarning(!(props2.ghost && isUnborderedButtonType(props2.type)), "Button", "`link` or `text` button can't be a `ghost` button.");
    });
    onUpdated(fixTwoCNChar);
    return function() {
      var _slots$icon, _slots$default;
      var _props$icon = props2.icon, icon = _props$icon === void 0 ? (_slots$icon = slots.icon) === null || _slots$icon === void 0 ? void 0 : _slots$icon.call(slots) : _props$icon;
      var children = flattenChildren((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      isNeedInserted = children.length === 1 && !icon && !isUnborderedButtonType(props2.type);
      var type = props2.type, htmlType = props2.htmlType, disabled = props2.disabled, href = props2.href, title = props2.title, target = props2.target, onMousedown2 = props2.onMousedown;
      var iconType = innerLoading.value ? "loading" : icon;
      var buttonProps3 = _objectSpread(_objectSpread({}, attrs), {}, {
        title,
        disabled,
        class: [classes.value, attrs.class, _defineProperty({}, "".concat(prefixCls.value, "-icon-only"), children.length === 0 && !!iconType)],
        onClick: handleClick,
        onMousedown: onMousedown2
      });
      if (!disabled) {
        delete buttonProps3.disabled;
      }
      var iconNode = icon && !innerLoading.value ? icon : createVNode(LoadingIcon, {
        "existIcon": !!icon,
        "prefixCls": prefixCls.value,
        "loading": !!innerLoading.value
      }, null);
      var kids = children.map(function(child) {
        return insertSpace(child, isNeedInserted && autoInsertSpace.value);
      });
      if (href !== void 0) {
        return createVNode("a", _objectSpread(_objectSpread({}, buttonProps3), {}, {
          "href": href,
          "target": target,
          "ref": buttonNodeRef
        }), [iconNode, kids]);
      }
      var buttonNode = createVNode("button", _objectSpread(_objectSpread({}, buttonProps3), {}, {
        "ref": buttonNodeRef,
        "type": htmlType
      }), [iconNode, kids]);
      if (isUnborderedButtonType(type)) {
        return buttonNode;
      }
      return createVNode(Wave, {
        "ref": "wave",
        "disabled": !!innerLoading.value
      }, {
        default: function _default4() {
          return [buttonNode];
        }
      });
    };
  }
});
var UnreachableException = /* @__PURE__ */ _createClass(function UnreachableException2(value) {
  _classCallCheck(this, UnreachableException2);
  this.error = new Error("unreachable case: ".concat(JSON.stringify(value)));
});
var buttonGroupProps = function buttonGroupProps2() {
  return {
    prefixCls: String,
    size: {
      type: String
    }
  };
};
const ButtonGroup = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AButtonGroup",
  props: buttonGroupProps(),
  setup: function setup39(props2, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject("btn-group", props2), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    var classes = computed(function() {
      var _ref2;
      var size = props2.size;
      var sizeCls = "";
      switch (size) {
        case "large":
          sizeCls = "lg";
          break;
        case "small":
          sizeCls = "sm";
          break;
        case "middle":
        case void 0:
          break;
        default:
          console.warn(new UnreachableException(size).error);
      }
      return _ref2 = {}, _defineProperty(_ref2, "".concat(prefixCls.value), true), _defineProperty(_ref2, "".concat(prefixCls.value, "-").concat(sizeCls), sizeCls), _defineProperty(_ref2, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"), _ref2;
    });
    return function() {
      var _slots$default;
      return createVNode("div", {
        "class": classes.value
      }, [flattenChildren((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots))]);
    };
  }
});
Button$1.Group = ButtonGroup;
Button$1.install = function(app) {
  app.component(Button$1.name, Button$1);
  app.component(ButtonGroup.name, ButtonGroup);
  return app;
};
function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
  if (ret !== void 0) {
    return !!ret;
  }
  if (objA === objB) {
    return true;
  }
  if (_typeof(objA) !== "object" || !objA || _typeof(objB) !== "object" || !objB) {
    return false;
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (var idx = 0; idx < keysA.length; idx++) {
    var key2 = keysA[idx];
    if (!bHasOwnProperty(key2)) {
      return false;
    }
    var valueA = objA[key2];
    var valueB = objB[key2];
    ret = compare ? compare.call(compareContext, valueA, valueB, key2) : void 0;
    if (ret === false || ret === void 0 && valueA !== valueB) {
      return false;
    }
  }
  return true;
}
function shallowequal(value, other, customizer, thisArg) {
  return shallowEqual(toRaw(value), toRaw(other), customizer, thisArg);
}
var MenuContextKey = Symbol("menuContextKey");
var useProvideMenu = function useProvideMenu2(props2) {
  provide(MenuContextKey, props2);
};
var useInjectMenu = function useInjectMenu2() {
  return inject(MenuContextKey);
};
var ForceRenderKey = Symbol("ForceRenderKey");
var useProvideForceRender = function useProvideForceRender2(forceRender) {
  provide(ForceRenderKey, forceRender);
};
var useInjectForceRender = function useInjectForceRender2() {
  return inject(ForceRenderKey, false);
};
var MenuFirstLevelContextKey = Symbol("menuFirstLevelContextKey");
var useProvideFirstLevel = function useProvideFirstLevel2(firstLevel) {
  provide(MenuFirstLevelContextKey, firstLevel);
};
var useInjectFirstLevel = function useInjectFirstLevel2() {
  return inject(MenuFirstLevelContextKey, true);
};
var MenuContextProvider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "MenuContextProvider",
  inheritAttrs: false,
  props: {
    mode: {
      type: String,
      default: void 0
    },
    overflowDisabled: {
      type: Boolean,
      default: void 0
    },
    isRootMenu: {
      type: Boolean,
      default: void 0
    }
  },
  setup: function setup40(props2, _ref) {
    var slots = _ref.slots;
    var menuContext = useInjectMenu();
    var newContext = _objectSpread({}, menuContext);
    if (props2.mode !== void 0) {
      newContext.mode = toRef(props2, "mode");
    }
    if (props2.isRootMenu !== void 0) {
      newContext.isRootMenu = toRef(props2, "isRootMenu");
    }
    if (props2.overflowDisabled !== void 0) {
      newContext.overflowDisabled = toRef(props2, "overflowDisabled");
    }
    useProvideMenu(newContext);
    return function() {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});
const useProvideMenu$1 = useProvideMenu;
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length, index2 = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index2-- : ++index2 < length) {
    if (predicate(array[index2], index2, array)) {
      return index2;
    }
  }
  return -1;
}
function baseIsNaN(value) {
  return value !== value;
}
function strictIndexOf(array, value, fromIndex) {
  var index2 = fromIndex - 1, length = array.length;
  while (++index2 < length) {
    if (array[index2] === value) {
      return index2;
    }
  }
  return -1;
}
function baseIndexOf(array, value, fromIndex) {
  return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
}
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}
function arrayIncludesWith(array, value, comparator) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (comparator(value, array[index2])) {
      return true;
    }
  }
  return false;
}
function noop$1() {
}
var INFINITY$3 = 1 / 0;
var createSet = !(Set$2 && 1 / setToArray(new Set$2([, -0]))[1] == INFINITY$3) ? noop$1 : function(values) {
  return new Set$2(values);
};
const createSet$1 = createSet;
var LARGE_ARRAY_SIZE = 200;
function baseUniq(array, iteratee, comparator) {
  var index2 = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
  if (comparator) {
    isCommon = false;
    includes2 = arrayIncludesWith;
  } else if (length >= LARGE_ARRAY_SIZE) {
    var set2 = iteratee ? null : createSet$1(array);
    if (set2) {
      return setToArray(set2);
    }
    isCommon = false;
    includes2 = cacheHas;
    seen = new SetCache();
  } else {
    seen = iteratee ? [] : result;
  }
  outer:
    while (++index2 < length) {
      var value = array[index2], computed2 = iteratee ? iteratee(value) : value;
      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed2 === computed2) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed2) {
            continue outer;
          }
        }
        if (iteratee) {
          seen.push(computed2);
        }
        result.push(value);
      } else if (!includes2(seen, computed2, comparator)) {
        if (seen !== result) {
          seen.push(computed2);
        }
        result.push(value);
      }
    }
  return result;
}
function uniq(array) {
  return array && array.length ? baseUniq(array) : [];
}
var SiderCollapsedKey = Symbol("siderCollapsed");
var OVERFLOW_KEY = "$$__vc-menu-more__key";
var KeyPathContext = Symbol("KeyPathContext");
var useInjectKeyPath = function useInjectKeyPath2() {
  return inject(KeyPathContext, {
    parentEventKeys: computed(function() {
      return [];
    }),
    parentKeys: computed(function() {
      return [];
    }),
    parentInfo: {}
  });
};
var useProvideKeyPath = function useProvideKeyPath2(eventKey, key2, menuInfo) {
  var _useInjectKeyPath = useInjectKeyPath(), parentEventKeys = _useInjectKeyPath.parentEventKeys, parentKeys = _useInjectKeyPath.parentKeys;
  var eventKeys = computed(function() {
    return [].concat(_toConsumableArray(parentEventKeys.value), [eventKey]);
  });
  var keys2 = computed(function() {
    return [].concat(_toConsumableArray(parentKeys.value), [key2]);
  });
  provide(KeyPathContext, {
    parentEventKeys: eventKeys,
    parentKeys: keys2,
    parentInfo: menuInfo
  });
  return keys2;
};
var measure = Symbol("measure");
var PathContext = defineComponent({
  compatConfig: {
    MODE: 3
  },
  setup: function setup41(_props, _ref) {
    var slots = _ref.slots;
    provide(measure, true);
    return function() {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});
var useMeasure = function useMeasure2() {
  return inject(measure, false);
};
const useProvideKeyPath$1 = useProvideKeyPath;
function useDirectionStyle(level) {
  var _useInjectMenu = useInjectMenu(), mode = _useInjectMenu.mode, rtl2 = _useInjectMenu.rtl, inlineIndent = _useInjectMenu.inlineIndent;
  return computed(function() {
    return mode.value !== "inline" ? null : rtl2.value ? {
      paddingRight: "".concat(level.value * inlineIndent.value, "px")
    } : {
      paddingLeft: "".concat(level.value * inlineIndent.value, "px")
    };
  });
}
var indexGuid$2 = 0;
var menuItemProps = function menuItemProps2() {
  return {
    id: String,
    role: String,
    disabled: Boolean,
    danger: Boolean,
    title: {
      type: [String, Boolean],
      default: void 0
    },
    icon: PropTypes$1.any,
    onMouseenter: Function,
    onMouseleave: Function,
    onClick: Function,
    onKeydown: Function,
    onFocus: Function
  };
};
const __unplugin_components_3 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AMenuItem",
  inheritAttrs: false,
  props: menuItemProps(),
  slots: ["icon", "title"],
  setup: function setup42(props2, _ref) {
    var slots = _ref.slots, emit = _ref.emit, attrs = _ref.attrs;
    var instance = getCurrentInstance();
    var isMeasure = useMeasure();
    var key2 = _typeof(instance.vnode.key) === "symbol" ? String(instance.vnode.key) : instance.vnode.key;
    devWarning(_typeof(instance.vnode.key) !== "symbol", "MenuItem", 'MenuItem `:key="'.concat(String(key2), '"` not support Symbol type'));
    var eventKey = "menu_item_".concat(++indexGuid$2, "_$$_").concat(key2);
    var _useInjectKeyPath = useInjectKeyPath(), parentEventKeys = _useInjectKeyPath.parentEventKeys, parentKeys = _useInjectKeyPath.parentKeys;
    var _useInjectMenu = useInjectMenu(), prefixCls = _useInjectMenu.prefixCls, activeKeys = _useInjectMenu.activeKeys, disabled = _useInjectMenu.disabled, changeActiveKeys = _useInjectMenu.changeActiveKeys, rtl2 = _useInjectMenu.rtl, inlineCollapsed = _useInjectMenu.inlineCollapsed, siderCollapsed = _useInjectMenu.siderCollapsed, onItemClick = _useInjectMenu.onItemClick, selectedKeys = _useInjectMenu.selectedKeys, registerMenuInfo = _useInjectMenu.registerMenuInfo;
    _useInjectMenu.unRegisterMenuInfo;
    var firstLevel = useInjectFirstLevel();
    var isActive = ref(false);
    var keysPath = computed(function() {
      return [].concat(_toConsumableArray(parentKeys.value), [key2]);
    });
    var menuInfo = {
      eventKey,
      key: key2,
      parentEventKeys,
      parentKeys,
      isLeaf: true
    };
    registerMenuInfo(eventKey, menuInfo);
    watch(activeKeys, function() {
      isActive.value = !!activeKeys.value.find(function(val) {
        return val === key2;
      });
    }, {
      immediate: true
    });
    var mergedDisabled = computed(function() {
      return disabled.value || props2.disabled;
    });
    var selected = computed(function() {
      return selectedKeys.value.includes(key2);
    });
    var classNames2 = computed(function() {
      var _ref2;
      var itemCls = "".concat(prefixCls.value, "-item");
      return _ref2 = {}, _defineProperty(_ref2, "".concat(itemCls), true), _defineProperty(_ref2, "".concat(itemCls, "-danger"), props2.danger), _defineProperty(_ref2, "".concat(itemCls, "-active"), isActive.value), _defineProperty(_ref2, "".concat(itemCls, "-selected"), selected.value), _defineProperty(_ref2, "".concat(itemCls, "-disabled"), mergedDisabled.value), _ref2;
    });
    var getEventInfo = function getEventInfo2(e) {
      return {
        key: key2,
        eventKey,
        keyPath: keysPath.value,
        eventKeyPath: [].concat(_toConsumableArray(parentEventKeys.value), [eventKey]),
        domEvent: e,
        item: _objectSpread(_objectSpread({}, props2), attrs)
      };
    };
    var onInternalClick = function onInternalClick2(e) {
      if (mergedDisabled.value) {
        return;
      }
      var info = getEventInfo(e);
      emit("click", e);
      onItemClick(info);
    };
    var onMouseEnter = function onMouseEnter2(event) {
      if (!mergedDisabled.value) {
        changeActiveKeys(keysPath.value);
        emit("mouseenter", event);
      }
    };
    var onMouseLeave = function onMouseLeave2(event) {
      if (!mergedDisabled.value) {
        changeActiveKeys([]);
        emit("mouseleave", event);
      }
    };
    var onInternalKeyDown = function onInternalKeyDown2(e) {
      emit("keydown", e);
      if (e.which === KeyCode$1.ENTER) {
        var info = getEventInfo(e);
        emit("click", e);
        onItemClick(info);
      }
    };
    var onInternalFocus = function onInternalFocus2(e) {
      changeActiveKeys(keysPath.value);
      emit("focus", e);
    };
    var renderItemChildren = function renderItemChildren2(icon, children) {
      var wrapNode = createVNode("span", {
        "class": "".concat(prefixCls.value, "-title-content")
      }, [children]);
      if (!icon || isValidElement(children) && children.type === "span") {
        if (children && inlineCollapsed.value && firstLevel && typeof children === "string") {
          return createVNode("div", {
            "class": "".concat(prefixCls.value, "-inline-collapsed-noicon")
          }, [children.charAt(0)]);
        }
      }
      return wrapNode;
    };
    var directionStyle = useDirectionStyle(computed(function() {
      return keysPath.value.length;
    }));
    return function() {
      var _props$title, _slots$title, _slots$default, _ref3;
      if (isMeasure)
        return null;
      var title = (_props$title = props2.title) !== null && _props$title !== void 0 ? _props$title : (_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots);
      var children = flattenChildren((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      var childrenLength = children.length;
      var tooltipTitle = title;
      if (typeof title === "undefined") {
        tooltipTitle = firstLevel && childrenLength ? children : "";
      } else if (title === false) {
        tooltipTitle = "";
      }
      var tooltipProps3 = {
        title: tooltipTitle
      };
      if (!siderCollapsed.value && !inlineCollapsed.value) {
        tooltipProps3.title = null;
        tooltipProps3.visible = false;
      }
      var optionRoleProps = {};
      if (props2.role === "option") {
        optionRoleProps["aria-selected"] = selected.value;
      }
      var icon = getPropsSlot(slots, props2, "icon");
      return createVNode(Tooltip, _objectSpread(_objectSpread({}, tooltipProps3), {}, {
        "placement": rtl2.value ? "left" : "right",
        "overlayClassName": "".concat(prefixCls.value, "-inline-collapsed-tooltip")
      }), {
        default: function _default4() {
          return [createVNode(Overflow$1.Item, _objectSpread(_objectSpread(_objectSpread({
            "component": "li"
          }, attrs), {}, {
            "id": props2.id,
            "style": _objectSpread(_objectSpread({}, attrs.style || {}), directionStyle.value),
            "class": [classNames2.value, (_ref3 = {}, _defineProperty(_ref3, "".concat(attrs.class), !!attrs.class), _defineProperty(_ref3, "".concat(prefixCls.value, "-item-only-child"), (icon ? childrenLength + 1 : childrenLength) === 1), _ref3)],
            "role": props2.role || "menuitem",
            "tabindex": props2.disabled ? null : -1,
            "data-menu-id": key2,
            "aria-disabled": props2.disabled
          }, optionRoleProps), {}, {
            "onMouseenter": onMouseEnter,
            "onMouseleave": onMouseLeave,
            "onClick": onInternalClick,
            "onKeydown": onInternalKeyDown,
            "onFocus": onInternalFocus,
            "title": typeof title === "string" ? title : void 0
          }), {
            default: function _default5() {
              return [cloneElement(icon, {
                class: "".concat(prefixCls.value, "-item-icon")
              }, false), renderItemChildren(icon, children)];
            }
          })];
        }
      });
    };
  }
});
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var placements = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: autoAdjustOverflow,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: autoAdjustOverflow,
    offset: [0, 7]
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: autoAdjustOverflow,
    offset: [-4, 0]
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: autoAdjustOverflow,
    offset: [4, 0]
  }
};
var placementsRtl = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: autoAdjustOverflow,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: autoAdjustOverflow,
    offset: [0, 7]
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: autoAdjustOverflow,
    offset: [-4, 0]
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: autoAdjustOverflow,
    offset: [4, 0]
  }
};
var popupPlacementMap = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};
const PopupTrigger = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "PopupTrigger",
  inheritAttrs: false,
  props: {
    prefixCls: String,
    mode: String,
    visible: Boolean,
    popupClassName: String,
    popupOffset: Array,
    disabled: Boolean,
    onVisibleChange: Function
  },
  slots: ["popup"],
  emits: ["visibleChange"],
  setup: function setup43(props2, _ref) {
    var slots = _ref.slots, emit = _ref.emit;
    var innerVisible = ref(false);
    var _useInjectMenu = useInjectMenu(), getPopupContainer = _useInjectMenu.getPopupContainer, rtl2 = _useInjectMenu.rtl, subMenuOpenDelay = _useInjectMenu.subMenuOpenDelay, subMenuCloseDelay = _useInjectMenu.subMenuCloseDelay, builtinPlacements = _useInjectMenu.builtinPlacements, triggerSubMenuAction = _useInjectMenu.triggerSubMenuAction, isRootMenu = _useInjectMenu.isRootMenu, forceSubMenuRender = _useInjectMenu.forceSubMenuRender, motion = _useInjectMenu.motion, defaultMotions = _useInjectMenu.defaultMotions;
    var forceRender = useInjectForceRender();
    var placement = computed(function() {
      return rtl2.value ? _objectSpread(_objectSpread({}, placementsRtl), builtinPlacements.value) : _objectSpread(_objectSpread({}, placements), builtinPlacements.value);
    });
    var popupPlacement = computed(function() {
      return popupPlacementMap[props2.mode];
    });
    var visibleRef = ref();
    watch(function() {
      return props2.visible;
    }, function(visible) {
      wrapperRaf.cancel(visibleRef.value);
      visibleRef.value = wrapperRaf(function() {
        innerVisible.value = visible;
      });
    }, {
      immediate: true
    });
    var onVisibleChange = function onVisibleChange2(visible) {
      emit("visibleChange", visible);
    };
    var mergedMotion = computed(function() {
      var _defaultMotions$value, _defaultMotions$value2;
      var m = motion.value || ((_defaultMotions$value = defaultMotions.value) === null || _defaultMotions$value === void 0 ? void 0 : _defaultMotions$value[props2.mode]) || ((_defaultMotions$value2 = defaultMotions.value) === null || _defaultMotions$value2 === void 0 ? void 0 : _defaultMotions$value2.other);
      var res = typeof m === "function" ? m() : m;
      return res ? getTransitionProps(res.name, {
        css: true
      }) : void 0;
    });
    return function() {
      var prefixCls = props2.prefixCls, popupClassName = props2.popupClassName, mode = props2.mode, popupOffset = props2.popupOffset, disabled = props2.disabled;
      return createVNode(Trigger, {
        "prefixCls": prefixCls,
        "popupClassName": classNames("".concat(prefixCls, "-popup"), _defineProperty({}, "".concat(prefixCls, "-rtl"), rtl2.value), popupClassName),
        "stretch": mode === "horizontal" ? "minWidth" : null,
        "getPopupContainer": isRootMenu.value ? getPopupContainer.value : function(triggerNode) {
          return triggerNode.parentNode;
        },
        "builtinPlacements": placement.value,
        "popupPlacement": popupPlacement.value,
        "popupVisible": innerVisible.value,
        "popupAlign": popupOffset && {
          offset: popupOffset
        },
        "action": disabled ? [] : [triggerSubMenuAction.value],
        "mouseEnterDelay": subMenuOpenDelay.value,
        "mouseLeaveDelay": subMenuCloseDelay.value,
        "onPopupVisibleChange": onVisibleChange,
        "forceRender": forceRender || forceSubMenuRender.value,
        "popupAnimation": mergedMotion.value
      }, {
        popup: slots.popup,
        default: slots.default
      });
    };
  }
});
var InternalSubMenuList = function InternalSubMenuList2(_props, _ref) {
  var _slots$default;
  var slots = _ref.slots, attrs = _ref.attrs;
  var _useInjectMenu = useInjectMenu(), prefixCls = _useInjectMenu.prefixCls, mode = _useInjectMenu.mode;
  return createVNode("ul", _objectSpread(_objectSpread({}, attrs), {}, {
    "class": classNames(prefixCls.value, "".concat(prefixCls.value, "-sub"), "".concat(prefixCls.value, "-").concat(mode.value === "inline" ? "inline" : "vertical")),
    "data-menu-list": true
  }), [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
};
InternalSubMenuList.displayName = "SubMenuList";
const SubMenuList = InternalSubMenuList;
const InlineSubMenuList = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "InlineSubMenuList",
  inheritAttrs: false,
  props: {
    id: String,
    open: Boolean,
    keyPath: Array
  },
  setup: function setup44(props2, _ref) {
    var slots = _ref.slots;
    var fixedMode = computed(function() {
      return "inline";
    });
    var _useInjectMenu = useInjectMenu(), motion = _useInjectMenu.motion, mode = _useInjectMenu.mode, defaultMotions = _useInjectMenu.defaultMotions;
    var sameModeRef = computed(function() {
      return mode.value === fixedMode.value;
    });
    var destroy3 = ref(!sameModeRef.value);
    var mergedOpen = computed(function() {
      return sameModeRef.value ? props2.open : false;
    });
    watch(mode, function() {
      if (sameModeRef.value) {
        destroy3.value = false;
      }
    }, {
      flush: "post"
    });
    var mergedMotion = computed(function() {
      var _defaultMotions$value, _defaultMotions$value2;
      var m = motion.value || ((_defaultMotions$value = defaultMotions.value) === null || _defaultMotions$value === void 0 ? void 0 : _defaultMotions$value[fixedMode.value]) || ((_defaultMotions$value2 = defaultMotions.value) === null || _defaultMotions$value2 === void 0 ? void 0 : _defaultMotions$value2.other);
      var res = typeof m === "function" ? m() : m;
      return _objectSpread(_objectSpread({}, res), {}, {
        appear: props2.keyPath.length <= 1
      });
    });
    return function() {
      var _slots$default;
      if (destroy3.value) {
        return null;
      }
      return createVNode(MenuContextProvider, {
        "mode": fixedMode.value
      }, {
        default: function _default4() {
          return [createVNode(Transition, mergedMotion.value, {
            default: function _default5() {
              return [withDirectives(createVNode(SubMenuList, {
                "id": props2.id
              }, {
                default: function _default6() {
                  return [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)];
                }
              }), [[vShow, mergedOpen.value]])];
            }
          })];
        }
      });
    };
  }
});
var indexGuid$1 = 0;
var subMenuProps = function subMenuProps2() {
  return {
    icon: PropTypes$1.any,
    title: PropTypes$1.any,
    disabled: Boolean,
    level: Number,
    popupClassName: String,
    popupOffset: Array,
    internalPopupClose: Boolean,
    eventKey: String,
    expandIcon: Function,
    onMouseenter: Function,
    onMouseleave: Function,
    onTitleClick: Function
  };
};
const SubMenu = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ASubMenu",
  inheritAttrs: false,
  props: subMenuProps(),
  slots: ["icon", "title", "expandIcon"],
  setup: function setup45(props2, _ref) {
    var _props$eventKey, _parentInfo$childrenE;
    var slots = _ref.slots, attrs = _ref.attrs, emit = _ref.emit;
    useProvideFirstLevel(false);
    var isMeasure = useMeasure();
    var instance = getCurrentInstance();
    var vnodeKey = _typeof(instance.vnode.key) === "symbol" ? String(instance.vnode.key) : instance.vnode.key;
    devWarning(_typeof(instance.vnode.key) !== "symbol", "SubMenu", 'SubMenu `:key="'.concat(String(vnodeKey), '"` not support Symbol type'));
    var key2 = isValid$1(vnodeKey) ? vnodeKey : "sub_menu_".concat(++indexGuid$1, "_$$_not_set_key");
    var eventKey = (_props$eventKey = props2.eventKey) !== null && _props$eventKey !== void 0 ? _props$eventKey : isValid$1(vnodeKey) ? "sub_menu_".concat(++indexGuid$1, "_$$_").concat(vnodeKey) : key2;
    var _useInjectKeyPath = useInjectKeyPath(), parentEventKeys = _useInjectKeyPath.parentEventKeys, parentInfo = _useInjectKeyPath.parentInfo, parentKeys = _useInjectKeyPath.parentKeys;
    var keysPath = computed(function() {
      return [].concat(_toConsumableArray(parentKeys.value), [key2]);
    });
    var childrenEventKeys = ref([]);
    var menuInfo = {
      eventKey,
      key: key2,
      parentEventKeys,
      childrenEventKeys,
      parentKeys
    };
    (_parentInfo$childrenE = parentInfo.childrenEventKeys) === null || _parentInfo$childrenE === void 0 ? void 0 : _parentInfo$childrenE.value.push(eventKey);
    useProvideKeyPath$1(eventKey, key2, menuInfo);
    var _useInjectMenu = useInjectMenu(), prefixCls = _useInjectMenu.prefixCls, activeKeys = _useInjectMenu.activeKeys, contextDisabled = _useInjectMenu.disabled, changeActiveKeys = _useInjectMenu.changeActiveKeys, mode = _useInjectMenu.mode, inlineCollapsed = _useInjectMenu.inlineCollapsed, antdMenuTheme = _useInjectMenu.antdMenuTheme, openKeys = _useInjectMenu.openKeys, overflowDisabled = _useInjectMenu.overflowDisabled, onOpenChange = _useInjectMenu.onOpenChange, registerMenuInfo = _useInjectMenu.registerMenuInfo;
    _useInjectMenu.unRegisterMenuInfo;
    var selectedSubMenuKeys = _useInjectMenu.selectedSubMenuKeys, menuExpandIcon = _useInjectMenu.expandIcon;
    var hasKey = vnodeKey !== void 0 && vnodeKey !== null;
    var forceRender = !isMeasure && (useInjectForceRender() || !hasKey);
    useProvideForceRender(forceRender);
    if (isMeasure && hasKey || !isMeasure && !hasKey || forceRender) {
      registerMenuInfo(eventKey, menuInfo);
    }
    var subMenuPrefixCls = computed(function() {
      return "".concat(prefixCls.value, "-submenu");
    });
    var mergedDisabled = computed(function() {
      return contextDisabled.value || props2.disabled;
    });
    var elementRef = ref();
    var popupRef = ref();
    var originOpen = computed(function() {
      return openKeys.value.includes(key2);
    });
    var open2 = computed(function() {
      return !overflowDisabled.value && originOpen.value;
    });
    var childrenSelected = computed(function() {
      return selectedSubMenuKeys.value.includes(key2);
    });
    var isActive = ref(false);
    watch(activeKeys, function() {
      isActive.value = !!activeKeys.value.find(function(val) {
        return val === key2;
      });
    }, {
      immediate: true
    });
    var onInternalTitleClick = function onInternalTitleClick2(e) {
      if (mergedDisabled.value) {
        return;
      }
      emit("titleClick", e, key2);
      if (mode.value === "inline") {
        onOpenChange(key2, !originOpen.value);
      }
    };
    var onMouseEnter = function onMouseEnter2(event) {
      if (!mergedDisabled.value) {
        changeActiveKeys(keysPath.value);
        emit("mouseenter", event);
      }
    };
    var onMouseLeave = function onMouseLeave2(event) {
      if (!mergedDisabled.value) {
        changeActiveKeys([]);
        emit("mouseleave", event);
      }
    };
    var directionStyle = useDirectionStyle(computed(function() {
      return keysPath.value.length;
    }));
    var onPopupVisibleChange = function onPopupVisibleChange2(newVisible) {
      if (mode.value !== "inline") {
        onOpenChange(key2, newVisible);
      }
    };
    var onInternalFocus = function onInternalFocus2() {
      changeActiveKeys(keysPath.value);
    };
    var popupId = eventKey && "".concat(eventKey, "-popup");
    var popupClassName = computed(function() {
      return classNames(prefixCls.value, "".concat(prefixCls.value, "-").concat(antdMenuTheme.value), props2.popupClassName);
    });
    var renderTitle = function renderTitle2(title, icon) {
      if (!icon) {
        return inlineCollapsed.value && !parentKeys.value.length && title && typeof title === "string" ? createVNode("div", {
          "class": "".concat(prefixCls.value, "-inline-collapsed-noicon")
        }, [title.charAt(0)]) : createVNode("span", {
          "class": "".concat(prefixCls.value, "-title-content")
        }, [title]);
      }
      var titleIsSpan = isValidElement(title) && title.type === "span";
      return createVNode(Fragment$1, null, [cloneElement(icon, {
        class: "".concat(prefixCls.value, "-item-icon")
      }, false), titleIsSpan ? title : createVNode("span", {
        "class": "".concat(prefixCls.value, "-title-content")
      }, [title])]);
    };
    var triggerModeRef = computed(function() {
      return mode.value !== "inline" && keysPath.value.length > 1 ? "vertical" : mode.value;
    });
    var renderMode = computed(function() {
      return mode.value === "horizontal" ? "vertical" : mode.value;
    });
    var subMenuTriggerModeRef = computed(function() {
      return triggerModeRef.value === "horizontal" ? "vertical" : triggerModeRef.value;
    });
    var baseTitleNode = function baseTitleNode2() {
      var subMenuPrefixClsValue = subMenuPrefixCls.value;
      var icon = getPropsSlot(slots, props2, "icon");
      var expandIcon = props2.expandIcon || slots.expandIcon || menuExpandIcon.value;
      var title = renderTitle(getPropsSlot(slots, props2, "title"), icon);
      return createVNode("div", {
        "style": directionStyle.value,
        "class": "".concat(subMenuPrefixClsValue, "-title"),
        "tabindex": mergedDisabled.value ? null : -1,
        "ref": elementRef,
        "title": typeof title === "string" ? title : null,
        "data-menu-id": key2,
        "aria-expanded": open2.value,
        "aria-haspopup": true,
        "aria-controls": popupId,
        "aria-disabled": mergedDisabled.value,
        "onClick": onInternalTitleClick,
        "onFocus": onInternalFocus
      }, [title, mode.value !== "horizontal" && expandIcon ? expandIcon(_objectSpread(_objectSpread({}, props2), {}, {
        isOpen: open2.value
      })) : createVNode("i", {
        "class": "".concat(subMenuPrefixClsValue, "-arrow")
      }, null)]);
    };
    return function() {
      var _classNames;
      if (isMeasure) {
        var _slots$default;
        if (!hasKey) {
          return null;
        }
        return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
      }
      var subMenuPrefixClsValue = subMenuPrefixCls.value;
      var titleNode = function titleNode2() {
        return null;
      };
      if (!overflowDisabled.value && mode.value !== "inline") {
        titleNode = function titleNode2() {
          return createVNode(PopupTrigger, {
            "mode": triggerModeRef.value,
            "prefixCls": subMenuPrefixClsValue,
            "visible": !props2.internalPopupClose && open2.value,
            "popupClassName": popupClassName.value,
            "popupOffset": props2.popupOffset,
            "disabled": mergedDisabled.value,
            "onVisibleChange": onPopupVisibleChange
          }, {
            default: function _default4() {
              return [baseTitleNode()];
            },
            popup: function popup() {
              return createVNode(MenuContextProvider, {
                "mode": subMenuTriggerModeRef.value,
                "isRootMenu": false
              }, {
                default: function _default4() {
                  return [createVNode(SubMenuList, {
                    "id": popupId,
                    "ref": popupRef
                  }, {
                    default: slots.default
                  })];
                }
              });
            }
          });
        };
      } else {
        titleNode = function titleNode2() {
          return createVNode(PopupTrigger, null, {
            default: baseTitleNode
          });
        };
      }
      return createVNode(MenuContextProvider, {
        "mode": renderMode.value
      }, {
        default: function _default4() {
          return [createVNode(Overflow$1.Item, _objectSpread(_objectSpread({
            "component": "li"
          }, attrs), {}, {
            "role": "none",
            "class": classNames(subMenuPrefixClsValue, "".concat(subMenuPrefixClsValue, "-").concat(mode.value), attrs.class, (_classNames = {}, _defineProperty(_classNames, "".concat(subMenuPrefixClsValue, "-open"), open2.value), _defineProperty(_classNames, "".concat(subMenuPrefixClsValue, "-active"), isActive.value), _defineProperty(_classNames, "".concat(subMenuPrefixClsValue, "-selected"), childrenSelected.value), _defineProperty(_classNames, "".concat(subMenuPrefixClsValue, "-disabled"), mergedDisabled.value), _classNames)),
            "onMouseenter": onMouseEnter,
            "onMouseleave": onMouseLeave,
            "data-submenu-id": key2
          }), {
            default: function _default5() {
              return createVNode(Fragment$1, null, [titleNode(), !overflowDisabled.value && createVNode(InlineSubMenuList, {
                "id": popupId,
                "open": open2.value,
                "keyPath": keysPath.value
              }, {
                default: slots.default
              })]);
            }
          })];
        }
      });
    };
  }
});
function hasClass(node, className) {
  if (node.classList) {
    return node.classList.contains(className);
  }
  var originClass = node.className;
  return " ".concat(originClass, " ").indexOf(" ".concat(className, " ")) > -1;
}
function addClass(node, className) {
  if (node.classList) {
    node.classList.add(className);
  } else {
    if (!hasClass(node, className)) {
      node.className = "".concat(node.className, " ").concat(className);
    }
  }
}
function removeClass(node, className) {
  if (node.classList) {
    node.classList.remove(className);
  } else {
    if (hasClass(node, className)) {
      var originClass = node.className;
      node.className = " ".concat(originClass, " ").replace(" ".concat(className, " "), " ");
    }
  }
}
var collapseMotion = function collapseMotion2() {
  var name2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant-motion-collapse";
  var appear = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return {
    name: name2,
    appear,
    css: true,
    onBeforeEnter: function onBeforeEnter(node) {
      node.style.height = "0px";
      node.style.opacity = "0";
      addClass(node, name2);
    },
    onEnter: function onEnter(node) {
      nextTick(function() {
        node.style.height = "".concat(node.scrollHeight, "px");
        node.style.opacity = "1";
      });
    },
    onAfterEnter: function onAfterEnter(node) {
      if (node) {
        removeClass(node, name2);
        node.style.height = null;
        node.style.opacity = null;
      }
    },
    onBeforeLeave: function onBeforeLeave(node) {
      addClass(node, name2);
      node.style.height = "".concat(node.offsetHeight, "px");
      node.style.opacity = null;
    },
    onLeave: function onLeave(node) {
      setTimeout(function() {
        node.style.height = "0px";
        node.style.opacity = "0";
      });
    },
    onAfterLeave: function onAfterLeave(node) {
      if (node) {
        removeClass(node, name2);
        if (node.style) {
          node.style.height = null;
          node.style.opacity = null;
        }
      }
    }
  };
};
const collapseMotion$1 = collapseMotion;
var menuProps = function menuProps2() {
  return {
    id: String,
    prefixCls: String,
    disabled: Boolean,
    inlineCollapsed: Boolean,
    disabledOverflow: Boolean,
    forceSubMenuRender: Boolean,
    openKeys: Array,
    selectedKeys: Array,
    activeKey: String,
    selectable: {
      type: Boolean,
      default: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    motion: Object,
    theme: {
      type: String,
      default: "light"
    },
    mode: {
      type: String,
      default: "vertical"
    },
    inlineIndent: {
      type: Number,
      default: 24
    },
    subMenuOpenDelay: {
      type: Number,
      default: 0.1
    },
    subMenuCloseDelay: {
      type: Number,
      default: 0.1
    },
    builtinPlacements: {
      type: Object
    },
    triggerSubMenuAction: {
      type: String,
      default: "hover"
    },
    getPopupContainer: Function,
    expandIcon: Function,
    onOpenChange: Function,
    onSelect: Function,
    onDeselect: Function,
    onClick: [Function, Array],
    onFocus: Function,
    onBlur: Function,
    onMousedown: Function,
    "onUpdate:openKeys": Function,
    "onUpdate:selectedKeys": Function,
    "onUpdate:activeKey": Function
  };
};
var EMPTY_LIST = [];
const Menu = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AMenu",
  inheritAttrs: false,
  props: menuProps(),
  slots: ["expandIcon", "overflowedIndicator"],
  setup: function setup46(props2, _ref) {
    var slots = _ref.slots, emit = _ref.emit, attrs = _ref.attrs;
    var _useConfigInject = useConfigInject("menu", props2), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction, getPrefixCls2 = _useConfigInject.getPrefixCls;
    var store = ref({});
    var siderCollapsed = inject(SiderCollapsedKey, ref(void 0));
    var inlineCollapsed = computed(function() {
      if (siderCollapsed.value !== void 0) {
        return siderCollapsed.value;
      }
      return props2.inlineCollapsed;
    });
    var isMounted = ref(false);
    watchEffect(function() {
      devWarning(!(props2.inlineCollapsed === true && props2.mode !== "inline"), "Menu", "`inlineCollapsed` should only be used when `mode` is inline.");
      devWarning(!(siderCollapsed.value !== void 0 && props2.inlineCollapsed === true), "Menu", "`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.");
    });
    var activeKeys = ref([]);
    var mergedSelectedKeys = ref([]);
    var keyMapStore = ref({});
    watch(store, function() {
      var newKeyMapStore = {};
      for (var _i = 0, _Object$values = Object.values(store.value); _i < _Object$values.length; _i++) {
        var menuInfo = _Object$values[_i];
        newKeyMapStore[menuInfo.key] = menuInfo;
      }
      keyMapStore.value = newKeyMapStore;
    }, {
      flush: "post"
    });
    watchEffect(function() {
      if (props2.activeKey !== void 0) {
        var keys2 = [];
        var menuInfo = props2.activeKey ? keyMapStore.value[props2.activeKey] : void 0;
        if (menuInfo && props2.activeKey !== void 0) {
          keys2 = uniq([].concat(unref(menuInfo.parentKeys), props2.activeKey));
        } else {
          keys2 = [];
        }
        if (!shallowequal(activeKeys.value, keys2)) {
          activeKeys.value = keys2;
        }
      }
    });
    watch(function() {
      return props2.selectedKeys;
    }, function(selectedKeys) {
      if (selectedKeys) {
        mergedSelectedKeys.value = selectedKeys.slice();
      }
    }, {
      immediate: true,
      deep: true
    });
    var selectedSubMenuKeys = ref([]);
    watch([keyMapStore, mergedSelectedKeys], function() {
      var subMenuParentKeys = [];
      mergedSelectedKeys.value.forEach(function(key2) {
        var menuInfo = keyMapStore.value[key2];
        if (menuInfo) {
          subMenuParentKeys = subMenuParentKeys.concat(unref(menuInfo.parentKeys));
        }
      });
      subMenuParentKeys = uniq(subMenuParentKeys);
      if (!shallowequal(selectedSubMenuKeys.value, subMenuParentKeys)) {
        selectedSubMenuKeys.value = subMenuParentKeys;
      }
    }, {
      immediate: true
    });
    var triggerSelection = function triggerSelection2(info) {
      if (!props2.selectable) {
        return;
      }
      var targetKey = info.key;
      var exist = mergedSelectedKeys.value.includes(targetKey);
      var newSelectedKeys;
      if (props2.multiple) {
        if (exist) {
          newSelectedKeys = mergedSelectedKeys.value.filter(function(key2) {
            return key2 !== targetKey;
          });
        } else {
          newSelectedKeys = [].concat(_toConsumableArray(mergedSelectedKeys.value), [targetKey]);
        }
      } else {
        newSelectedKeys = [targetKey];
      }
      var selectInfo = _objectSpread(_objectSpread({}, info), {}, {
        selectedKeys: newSelectedKeys
      });
      if (!shallowequal(newSelectedKeys, mergedSelectedKeys.value)) {
        if (props2.selectedKeys === void 0) {
          mergedSelectedKeys.value = newSelectedKeys;
        }
        emit("update:selectedKeys", newSelectedKeys);
        if (exist && props2.multiple) {
          emit("deselect", selectInfo);
        } else {
          emit("select", selectInfo);
        }
      }
      if (mergedMode.value !== "inline" && !props2.multiple && mergedOpenKeys.value.length) {
        triggerOpenKeys(EMPTY_LIST);
      }
    };
    var mergedOpenKeys = ref([]);
    watch(function() {
      return props2.openKeys;
    }, function() {
      var openKeys = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : mergedOpenKeys.value;
      if (!shallowequal(mergedOpenKeys.value, openKeys)) {
        mergedOpenKeys.value = openKeys.slice();
      }
    }, {
      immediate: true,
      deep: true
    });
    var timeout;
    var changeActiveKeys = function changeActiveKeys2(keys2) {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        if (props2.activeKey === void 0) {
          activeKeys.value = keys2;
        }
        emit("update:activeKey", keys2[keys2.length - 1]);
      });
    };
    var disabled = computed(function() {
      return !!props2.disabled;
    });
    var isRtl = computed(function() {
      return direction.value === "rtl";
    });
    var mergedMode = ref("vertical");
    var mergedInlineCollapsed = ref(false);
    watchEffect(function() {
      if ((props2.mode === "inline" || props2.mode === "vertical") && inlineCollapsed.value) {
        mergedMode.value = "vertical";
        mergedInlineCollapsed.value = inlineCollapsed.value;
      } else {
        mergedMode.value = props2.mode;
        mergedInlineCollapsed.value = false;
      }
    });
    var isInlineMode = computed(function() {
      return mergedMode.value === "inline";
    });
    var triggerOpenKeys = function triggerOpenKeys2(keys2) {
      mergedOpenKeys.value = keys2;
      emit("update:openKeys", keys2);
      emit("openChange", keys2);
    };
    var inlineCacheOpenKeys = ref(mergedOpenKeys.value);
    var mountRef = ref(false);
    watch(mergedOpenKeys, function() {
      if (isInlineMode.value) {
        inlineCacheOpenKeys.value = mergedOpenKeys.value;
      }
    }, {
      immediate: true
    });
    watch(isInlineMode, function() {
      if (!mountRef.value) {
        mountRef.value = true;
        return;
      }
      if (isInlineMode.value) {
        mergedOpenKeys.value = inlineCacheOpenKeys.value;
      } else {
        triggerOpenKeys(EMPTY_LIST);
      }
    }, {
      immediate: true
    });
    var className = computed(function() {
      var _ref2;
      return _ref2 = {}, _defineProperty(_ref2, "".concat(prefixCls.value), true), _defineProperty(_ref2, "".concat(prefixCls.value, "-root"), true), _defineProperty(_ref2, "".concat(prefixCls.value, "-").concat(mergedMode.value), true), _defineProperty(_ref2, "".concat(prefixCls.value, "-inline-collapsed"), mergedInlineCollapsed.value), _defineProperty(_ref2, "".concat(prefixCls.value, "-rtl"), isRtl.value), _defineProperty(_ref2, "".concat(prefixCls.value, "-").concat(props2.theme), true), _ref2;
    });
    var rootPrefixCls = computed(function() {
      return getPrefixCls2();
    });
    var defaultMotions = computed(function() {
      return {
        horizontal: {
          name: "".concat(rootPrefixCls.value, "-slide-up")
        },
        inline: collapseMotion$1,
        other: {
          name: "".concat(rootPrefixCls.value, "-zoom-big")
        }
      };
    });
    useProvideFirstLevel(true);
    var getChildrenKeys = function getChildrenKeys2() {
      var eventKeys = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var keys2 = [];
      var storeValue = store.value;
      eventKeys.forEach(function(eventKey) {
        var _storeValue$eventKey = storeValue[eventKey], key2 = _storeValue$eventKey.key, childrenEventKeys = _storeValue$eventKey.childrenEventKeys;
        keys2.push.apply(keys2, [key2].concat(_toConsumableArray(getChildrenKeys2(unref(childrenEventKeys)))));
      });
      return keys2;
    };
    var onInternalClick = function onInternalClick2(info) {
      emit("click", info);
      triggerSelection(info);
    };
    var onInternalOpenChange = function onInternalOpenChange2(key2, open2) {
      var childrenEventKeys = keyMapStore.value[key2].childrenEventKeys;
      var newOpenKeys = mergedOpenKeys.value.filter(function(k) {
        return k !== key2;
      });
      if (open2) {
        newOpenKeys.push(key2);
      } else if (mergedMode.value !== "inline") {
        var subPathKeys = getChildrenKeys(unref(childrenEventKeys));
        newOpenKeys = uniq(newOpenKeys.filter(function(k) {
          return !subPathKeys.includes(k);
        }));
      }
      if (!shallowequal(mergedOpenKeys, newOpenKeys)) {
        triggerOpenKeys(newOpenKeys);
      }
    };
    var registerMenuInfo = function registerMenuInfo2(key2, info) {
      store.value = _objectSpread(_objectSpread({}, store.value), {}, _defineProperty({}, key2, info));
    };
    var unRegisterMenuInfo = function unRegisterMenuInfo2(key2) {
      delete store.value[key2];
      store.value = _objectSpread({}, store.value);
    };
    var lastVisibleIndex = ref(0);
    var expandIcon = computed(function() {
      return props2.expandIcon || slots.expandIcon ? function(opt) {
        var icon = props2.expandIcon || slots.expandIcon;
        icon = typeof icon === "function" ? icon(opt) : icon;
        return cloneElement(icon, {
          class: "".concat(prefixCls.value, "-submenu-expand-icon")
        }, false);
      } : null;
    });
    useProvideMenu$1({
      store,
      prefixCls,
      activeKeys,
      openKeys: mergedOpenKeys,
      selectedKeys: mergedSelectedKeys,
      changeActiveKeys,
      disabled,
      rtl: isRtl,
      mode: mergedMode,
      inlineIndent: computed(function() {
        return props2.inlineIndent;
      }),
      subMenuCloseDelay: computed(function() {
        return props2.subMenuCloseDelay;
      }),
      subMenuOpenDelay: computed(function() {
        return props2.subMenuOpenDelay;
      }),
      builtinPlacements: computed(function() {
        return props2.builtinPlacements;
      }),
      triggerSubMenuAction: computed(function() {
        return props2.triggerSubMenuAction;
      }),
      getPopupContainer: computed(function() {
        return props2.getPopupContainer;
      }),
      inlineCollapsed: mergedInlineCollapsed,
      antdMenuTheme: computed(function() {
        return props2.theme;
      }),
      siderCollapsed,
      defaultMotions: computed(function() {
        return isMounted.value ? defaultMotions.value : null;
      }),
      motion: computed(function() {
        return isMounted.value ? props2.motion : null;
      }),
      overflowDisabled: ref(void 0),
      onOpenChange: onInternalOpenChange,
      onItemClick: onInternalClick,
      registerMenuInfo,
      unRegisterMenuInfo,
      selectedSubMenuKeys,
      isRootMenu: ref(true),
      expandIcon,
      forceSubMenuRender: computed(function() {
        return props2.forceSubMenuRender;
      })
    });
    return function() {
      var _slots$default, _slots$overflowedIndi;
      var childList = flattenChildren((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      var allVisible = lastVisibleIndex.value >= childList.length - 1 || mergedMode.value !== "horizontal" || props2.disabledOverflow;
      var wrappedChildList = mergedMode.value !== "horizontal" || props2.disabledOverflow ? childList : childList.map(function(child, index2) {
        return createVNode(MenuContextProvider, {
          "key": child.key,
          "overflowDisabled": index2 > lastVisibleIndex.value
        }, {
          default: function _default4() {
            return child;
          }
        });
      });
      var overflowedIndicator = ((_slots$overflowedIndi = slots.overflowedIndicator) === null || _slots$overflowedIndi === void 0 ? void 0 : _slots$overflowedIndi.call(slots)) || createVNode(EllipsisOutlined, null, null);
      return createVNode(Overflow$1, _objectSpread(_objectSpread({}, attrs), {}, {
        "onMousedown": props2.onMousedown,
        "prefixCls": "".concat(prefixCls.value, "-overflow"),
        "component": "ul",
        "itemComponent": __unplugin_components_3,
        "class": [className.value, attrs.class],
        "role": "menu",
        "id": props2.id,
        "data": wrappedChildList,
        "renderRawItem": function renderRawItem(node) {
          return node;
        },
        "renderRawRest": function renderRawRest(omitItems) {
          var len = omitItems.length;
          var originOmitItems = len ? childList.slice(-len) : null;
          return createVNode(Fragment$1, null, [createVNode(SubMenu, {
            "eventKey": OVERFLOW_KEY,
            "key": OVERFLOW_KEY,
            "title": overflowedIndicator,
            "disabled": allVisible,
            "internalPopupClose": len === 0
          }, {
            default: function _default4() {
              return originOmitItems;
            }
          }), createVNode(PathContext, null, {
            default: function _default4() {
              return [createVNode(SubMenu, {
                "eventKey": OVERFLOW_KEY,
                "key": OVERFLOW_KEY,
                "title": overflowedIndicator,
                "disabled": allVisible,
                "internalPopupClose": len === 0
              }, {
                default: function _default5() {
                  return originOmitItems;
                }
              })];
            }
          })]);
        },
        "maxCount": mergedMode.value !== "horizontal" || props2.disabledOverflow ? Overflow$1.INVALIDATE : Overflow$1.RESPONSIVE,
        "ssr": "full",
        "data-menu-list": true,
        "onVisibleChange": function onVisibleChange(newLastIndex) {
          lastVisibleIndex.value = newLastIndex;
        }
      }), {
        default: function _default4() {
          return [createVNode(Teleport, {
            "to": "body"
          }, {
            default: function _default5() {
              return [createVNode("div", {
                "style": {
                  display: "none"
                },
                "aria-hidden": true
              }, [createVNode(PathContext, null, {
                default: function _default6() {
                  return [wrappedChildList];
                }
              })])];
            }
          })];
        }
      });
    };
  }
});
var menuItemGroupProps = function menuItemGroupProps2() {
  return {
    title: PropTypes$1.any
  };
};
const ItemGroup = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AMenuItemGroup",
  inheritAttrs: false,
  props: menuItemGroupProps(),
  slots: ["title"],
  setup: function setup47(props2, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs;
    var _useInjectMenu = useInjectMenu(), prefixCls = _useInjectMenu.prefixCls;
    var groupPrefixCls = computed(function() {
      return "".concat(prefixCls.value, "-item-group");
    });
    var isMeasure = useMeasure();
    return function() {
      var _slots$default, _slots$default2;
      if (isMeasure)
        return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
      return createVNode("li", _objectSpread(_objectSpread({}, attrs), {}, {
        "onClick": function onClick2(e) {
          return e.stopPropagation();
        },
        "class": groupPrefixCls.value
      }), [createVNode("div", {
        "title": typeof props2.title === "string" ? props2.title : void 0,
        "class": "".concat(groupPrefixCls.value, "-title")
      }, [getPropsSlot(slots, props2, "title")]), createVNode("ul", {
        "class": "".concat(groupPrefixCls.value, "-list")
      }, [(_slots$default2 = slots.default) === null || _slots$default2 === void 0 ? void 0 : _slots$default2.call(slots)])]);
    };
  }
});
var menuDividerProps = function menuDividerProps2() {
  return {
    prefixCls: String,
    dashed: Boolean
  };
};
const Divider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AMenuDivider",
  props: menuDividerProps(),
  setup: function setup48(props2) {
    var _useConfigInject = useConfigInject("menu", props2), prefixCls = _useConfigInject.prefixCls;
    var cls = computed(function() {
      var _ref;
      return _ref = {}, _defineProperty(_ref, "".concat(prefixCls.value, "-item-divider"), true), _defineProperty(_ref, "".concat(prefixCls.value, "-item-divider-dashed"), !!props2.dashed), _ref;
    });
    return function() {
      return createVNode("li", {
        "class": cls.value
      }, null);
    };
  }
});
Menu.install = function(app) {
  app.component(Menu.name, Menu);
  app.component(__unplugin_components_3.name, __unplugin_components_3);
  app.component(SubMenu.name, SubMenu);
  app.component(Divider.name, Divider);
  app.component(ItemGroup.name, ItemGroup);
  return app;
};
Menu.Item = __unplugin_components_3;
Menu.Divider = Divider;
Menu.SubMenu = SubMenu;
Menu.ItemGroup = ItemGroup;
var SECONDS_A_MINUTE = 60;
var SECONDS_A_HOUR = SECONDS_A_MINUTE * 60;
var SECONDS_A_DAY = SECONDS_A_HOUR * 24;
var SECONDS_A_WEEK = SECONDS_A_DAY * 7;
var MILLISECONDS_A_SECOND = 1e3;
var MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND;
var MS = "millisecond";
var S = "second";
var MIN = "minute";
var H = "hour";
var D = "day";
var W = "week";
var M = "month";
var Q = "quarter";
var Y = "year";
var DATE = "date";
var FORMAT_DEFAULT = "YYYY-MM-DDTHH:mm:ssZ";
var INVALID_DATE_STRING = "Invalid Date";
var REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
var REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const en = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
  ordinal: function ordinal(n) {
    var s = ["th", "st", "nd", "rd"];
    var v = n % 100;
    return "[" + n + (s[(v - 20) % 10] || s[v] || s[0]) + "]";
  }
};
var padStart = function padStart2(string, length, pad) {
  var s = String(string);
  if (!s || s.length >= length)
    return string;
  return "" + Array(length + 1 - s.length).join(pad) + string;
};
var padZoneStr = function padZoneStr2(instance) {
  var negMinutes = -instance.utcOffset();
  var minutes = Math.abs(negMinutes);
  var hourOffset = Math.floor(minutes / 60);
  var minuteOffset = minutes % 60;
  return (negMinutes <= 0 ? "+" : "-") + padStart(hourOffset, 2, "0") + ":" + padStart(minuteOffset, 2, "0");
};
var monthDiff = function monthDiff2(a, b) {
  if (a.date() < b.date())
    return -monthDiff2(b, a);
  var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month());
  var anchor = a.clone().add(wholeMonthDiff, M);
  var c = b - anchor < 0;
  var anchor2 = a.clone().add(wholeMonthDiff + (c ? -1 : 1), M);
  return +(-(wholeMonthDiff + (b - anchor) / (c ? anchor - anchor2 : anchor2 - anchor)) || 0);
};
var absFloor = function absFloor2(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
};
var prettyUnit = function prettyUnit2(u) {
  var special = {
    M,
    y: Y,
    w: W,
    d: D,
    D: DATE,
    h: H,
    m: MIN,
    s: S,
    ms: MS,
    Q
  };
  return special[u] || String(u || "").toLowerCase().replace(/s$/, "");
};
var isUndefined = function isUndefined2(s) {
  return s === void 0;
};
const U = {
  s: padStart,
  z: padZoneStr,
  m: monthDiff,
  a: absFloor,
  p: prettyUnit,
  u: isUndefined
};
var L = "en";
var Ls = {};
Ls[L] = en;
var isDayjs = function isDayjs2(d) {
  return d instanceof Dayjs;
};
var parseLocale = function parseLocale2(preset, object, isLocal) {
  var l;
  if (!preset)
    return L;
  if (typeof preset === "string") {
    var presetLower = preset.toLowerCase();
    if (Ls[presetLower]) {
      l = presetLower;
    }
    if (object) {
      Ls[presetLower] = object;
      l = presetLower;
    }
    var presetSplit = preset.split("-");
    if (!l && presetSplit.length > 1) {
      return parseLocale2(presetSplit[0]);
    }
  } else {
    var name2 = preset.name;
    Ls[name2] = preset;
    l = name2;
  }
  if (!isLocal && l)
    L = l;
  return l || !isLocal && L;
};
var dayjs = function dayjs2(date, c) {
  if (isDayjs(date)) {
    return date.clone();
  }
  var cfg = typeof c === "object" ? c : {};
  cfg.date = date;
  cfg.args = arguments;
  return new Dayjs(cfg);
};
var wrapper = function wrapper2(date, instance) {
  return dayjs(date, {
    locale: instance.$L,
    utc: instance.$u,
    x: instance.$x,
    $offset: instance.$offset
  });
};
var Utils = U;
Utils.l = parseLocale;
Utils.i = isDayjs;
Utils.w = wrapper;
var parseDate = function parseDate2(cfg) {
  var date = cfg.date, utc = cfg.utc;
  if (date === null)
    return new Date(NaN);
  if (Utils.u(date))
    return new Date();
  if (date instanceof Date)
    return new Date(date);
  if (typeof date === "string" && !/Z$/i.test(date)) {
    var d = date.match(REGEX_PARSE);
    if (d) {
      var m = d[2] - 1 || 0;
      var ms = (d[7] || "0").substring(0, 3);
      if (utc) {
        return new Date(Date.UTC(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms));
      }
      return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms);
    }
  }
  return new Date(date);
};
var Dayjs = /* @__PURE__ */ function() {
  function Dayjs2(cfg) {
    this.$L = parseLocale(cfg.locale, null, true);
    this.parse(cfg);
  }
  var _proto = Dayjs2.prototype;
  _proto.parse = function parse2(cfg) {
    this.$d = parseDate(cfg);
    this.$x = cfg.x || {};
    this.init();
  };
  _proto.init = function init() {
    var $d = this.$d;
    this.$y = $d.getFullYear();
    this.$M = $d.getMonth();
    this.$D = $d.getDate();
    this.$W = $d.getDay();
    this.$H = $d.getHours();
    this.$m = $d.getMinutes();
    this.$s = $d.getSeconds();
    this.$ms = $d.getMilliseconds();
  };
  _proto.$utils = function $utils() {
    return Utils;
  };
  _proto.isValid = function isValid4() {
    return !(this.$d.toString() === INVALID_DATE_STRING);
  };
  _proto.isSame = function isSame(that, units) {
    var other = dayjs(that);
    return this.startOf(units) <= other && other <= this.endOf(units);
  };
  _proto.isAfter = function isAfter(that, units) {
    return dayjs(that) < this.startOf(units);
  };
  _proto.isBefore = function isBefore(that, units) {
    return this.endOf(units) < dayjs(that);
  };
  _proto.$g = function $g(input, get2, set2) {
    if (Utils.u(input))
      return this[get2];
    return this.set(set2, input);
  };
  _proto.unix = function unix() {
    return Math.floor(this.valueOf() / 1e3);
  };
  _proto.valueOf = function valueOf() {
    return this.$d.getTime();
  };
  _proto.startOf = function startOf(units, _startOf) {
    var _this = this;
    var isStartOf = !Utils.u(_startOf) ? _startOf : true;
    var unit = Utils.p(units);
    var instanceFactory = function instanceFactory2(d, m) {
      var ins = Utils.w(_this.$u ? Date.UTC(_this.$y, m, d) : new Date(_this.$y, m, d), _this);
      return isStartOf ? ins : ins.endOf(D);
    };
    var instanceFactorySet = function instanceFactorySet2(method, slice) {
      var argumentStart = [0, 0, 0, 0];
      var argumentEnd = [23, 59, 59, 999];
      return Utils.w(_this.toDate()[method].apply(
        _this.toDate("s"),
        (isStartOf ? argumentStart : argumentEnd).slice(slice)
      ), _this);
    };
    var $W = this.$W, $M = this.$M, $D = this.$D;
    var utcPad = "set" + (this.$u ? "UTC" : "");
    switch (unit) {
      case Y:
        return isStartOf ? instanceFactory(1, 0) : instanceFactory(31, 11);
      case M:
        return isStartOf ? instanceFactory(1, $M) : instanceFactory(0, $M + 1);
      case W: {
        var weekStart = this.$locale().weekStart || 0;
        var gap = ($W < weekStart ? $W + 7 : $W) - weekStart;
        return instanceFactory(isStartOf ? $D - gap : $D + (6 - gap), $M);
      }
      case D:
      case DATE:
        return instanceFactorySet(utcPad + "Hours", 0);
      case H:
        return instanceFactorySet(utcPad + "Minutes", 1);
      case MIN:
        return instanceFactorySet(utcPad + "Seconds", 2);
      case S:
        return instanceFactorySet(utcPad + "Milliseconds", 3);
      default:
        return this.clone();
    }
  };
  _proto.endOf = function endOf(arg) {
    return this.startOf(arg, false);
  };
  _proto.$set = function $set(units, _int) {
    var _C$D$C$DATE$C$M$C$Y$C;
    var unit = Utils.p(units);
    var utcPad = "set" + (this.$u ? "UTC" : "");
    var name2 = (_C$D$C$DATE$C$M$C$Y$C = {}, _C$D$C$DATE$C$M$C$Y$C[D] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[DATE] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[M] = utcPad + "Month", _C$D$C$DATE$C$M$C$Y$C[Y] = utcPad + "FullYear", _C$D$C$DATE$C$M$C$Y$C[H] = utcPad + "Hours", _C$D$C$DATE$C$M$C$Y$C[MIN] = utcPad + "Minutes", _C$D$C$DATE$C$M$C$Y$C[S] = utcPad + "Seconds", _C$D$C$DATE$C$M$C$Y$C[MS] = utcPad + "Milliseconds", _C$D$C$DATE$C$M$C$Y$C)[unit];
    var arg = unit === D ? this.$D + (_int - this.$W) : _int;
    if (unit === M || unit === Y) {
      var date = this.clone().set(DATE, 1);
      date.$d[name2](arg);
      date.init();
      this.$d = date.set(DATE, Math.min(this.$D, date.daysInMonth())).$d;
    } else if (name2)
      this.$d[name2](arg);
    this.init();
    return this;
  };
  _proto.set = function set2(string, _int2) {
    return this.clone().$set(string, _int2);
  };
  _proto.get = function get2(unit) {
    return this[Utils.p(unit)]();
  };
  _proto.add = function add(number, units) {
    var _this2 = this, _C$MIN$C$H$C$S$unit;
    number = Number(number);
    var unit = Utils.p(units);
    var instanceFactorySet = function instanceFactorySet2(n) {
      var d = dayjs(_this2);
      return Utils.w(d.date(d.date() + Math.round(n * number)), _this2);
    };
    if (unit === M) {
      return this.set(M, this.$M + number);
    }
    if (unit === Y) {
      return this.set(Y, this.$y + number);
    }
    if (unit === D) {
      return instanceFactorySet(1);
    }
    if (unit === W) {
      return instanceFactorySet(7);
    }
    var step = (_C$MIN$C$H$C$S$unit = {}, _C$MIN$C$H$C$S$unit[MIN] = MILLISECONDS_A_MINUTE, _C$MIN$C$H$C$S$unit[H] = MILLISECONDS_A_HOUR, _C$MIN$C$H$C$S$unit[S] = MILLISECONDS_A_SECOND, _C$MIN$C$H$C$S$unit)[unit] || 1;
    var nextTimeStamp = this.$d.getTime() + number * step;
    return Utils.w(nextTimeStamp, this);
  };
  _proto.subtract = function subtract(number, string) {
    return this.add(number * -1, string);
  };
  _proto.format = function format(formatStr) {
    var _this3 = this;
    var locale2 = this.$locale();
    if (!this.isValid())
      return locale2.invalidDate || INVALID_DATE_STRING;
    var str = formatStr || FORMAT_DEFAULT;
    var zoneStr = Utils.z(this);
    var $H = this.$H, $m = this.$m, $M = this.$M;
    var weekdays = locale2.weekdays, months = locale2.months, meridiem = locale2.meridiem;
    var getShort = function getShort2(arr, index2, full, length) {
      return arr && (arr[index2] || arr(_this3, str)) || full[index2].slice(0, length);
    };
    var get$H = function get$H2(num) {
      return Utils.s($H % 12 || 12, num, "0");
    };
    var meridiemFunc = meridiem || function(hour, minute, isLowercase) {
      var m = hour < 12 ? "AM" : "PM";
      return isLowercase ? m.toLowerCase() : m;
    };
    var matches = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: $M + 1,
      MM: Utils.s($M + 1, 2, "0"),
      MMM: getShort(locale2.monthsShort, $M, months, 3),
      MMMM: getShort(months, $M),
      D: this.$D,
      DD: Utils.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: getShort(locale2.weekdaysMin, this.$W, weekdays, 2),
      ddd: getShort(locale2.weekdaysShort, this.$W, weekdays, 3),
      dddd: weekdays[this.$W],
      H: String($H),
      HH: Utils.s($H, 2, "0"),
      h: get$H(1),
      hh: get$H(2),
      a: meridiemFunc($H, $m, true),
      A: meridiemFunc($H, $m, false),
      m: String($m),
      mm: Utils.s($m, 2, "0"),
      s: String(this.$s),
      ss: Utils.s(this.$s, 2, "0"),
      SSS: Utils.s(this.$ms, 3, "0"),
      Z: zoneStr
    };
    return str.replace(REGEX_FORMAT, function(match2, $1) {
      return $1 || matches[match2] || zoneStr.replace(":", "");
    });
  };
  _proto.utcOffset = function utcOffset() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  };
  _proto.diff = function diff(input, units, _float) {
    var _C$Y$C$M$C$Q$C$W$C$D$;
    var unit = Utils.p(units);
    var that = dayjs(input);
    var zoneDelta = (that.utcOffset() - this.utcOffset()) * MILLISECONDS_A_MINUTE;
    var diff2 = this - that;
    var result = Utils.m(this, that);
    result = (_C$Y$C$M$C$Q$C$W$C$D$ = {}, _C$Y$C$M$C$Q$C$W$C$D$[Y] = result / 12, _C$Y$C$M$C$Q$C$W$C$D$[M] = result, _C$Y$C$M$C$Q$C$W$C$D$[Q] = result / 3, _C$Y$C$M$C$Q$C$W$C$D$[W] = (diff2 - zoneDelta) / MILLISECONDS_A_WEEK, _C$Y$C$M$C$Q$C$W$C$D$[D] = (diff2 - zoneDelta) / MILLISECONDS_A_DAY, _C$Y$C$M$C$Q$C$W$C$D$[H] = diff2 / MILLISECONDS_A_HOUR, _C$Y$C$M$C$Q$C$W$C$D$[MIN] = diff2 / MILLISECONDS_A_MINUTE, _C$Y$C$M$C$Q$C$W$C$D$[S] = diff2 / MILLISECONDS_A_SECOND, _C$Y$C$M$C$Q$C$W$C$D$)[unit] || diff2;
    return _float ? result : Utils.a(result);
  };
  _proto.daysInMonth = function daysInMonth() {
    return this.endOf(M).$D;
  };
  _proto.$locale = function $locale() {
    return Ls[this.$L];
  };
  _proto.locale = function locale2(preset, object) {
    if (!preset)
      return this.$L;
    var that = this.clone();
    var nextLocaleName = parseLocale(preset, object, true);
    if (nextLocaleName)
      that.$L = nextLocaleName;
    return that;
  };
  _proto.clone = function clone() {
    return Utils.w(this.$d, this);
  };
  _proto.toDate = function toDate() {
    return new Date(this.valueOf());
  };
  _proto.toJSON = function toJSON() {
    return this.isValid() ? this.toISOString() : null;
  };
  _proto.toISOString = function toISOString() {
    return this.$d.toISOString();
  };
  _proto.toString = function toString2() {
    return this.$d.toUTCString();
  };
  return Dayjs2;
}();
var proto = Dayjs.prototype;
dayjs.prototype = proto;
[["$ms", MS], ["$s", S], ["$m", MIN], ["$H", H], ["$W", D], ["$M", M], ["$y", Y], ["$D", DATE]].forEach(function(g) {
  proto[g[1]] = function(input) {
    return this.$g(input, g[0], g[1]);
  };
});
dayjs.extend = function(plugin, option) {
  if (!plugin.$i) {
    plugin(option, Dayjs, dayjs);
    plugin.$i = true;
  }
  return dayjs;
};
dayjs.locale = parseLocale;
dayjs.isDayjs = isDayjs;
dayjs.unix = function(timestamp) {
  return dayjs(timestamp * 1e3);
};
dayjs.en = Ls[L];
dayjs.Ls = Ls;
dayjs.p = {};
function arrayMap(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index2 < length) {
    result[index2] = iteratee(array[index2], index2, array);
  }
  return result;
}
var symbolTag$2 = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$2;
}
var INFINITY$2 = 1 / 0;
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto$1 ? symbolProto$1.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$1(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$2 ? "-0" : result;
}
function baseSlice(array, start, end) {
  var index2 = -1, length = array.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index2 < length) {
    result[index2] = array[index2 + start];
  }
  return result;
}
function baseProperty(key2) {
  return function(object) {
    return object == null ? void 0 : object[key2];
  };
}
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index2 = string.length;
  while (index2-- && reWhitespace.test(string.charAt(index2))) {
  }
  return index2;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$1(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$1(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var INFINITY$1 = 1 / 0, MAX_INTEGER = 17976931348623157e292;
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY$1 || value === -INFINITY$1) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
function toInteger(value) {
  var result = toFinite(value), remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
function toString(value) {
  return value == null ? "" : baseToString(value);
}
var _excluded$9 = ["prefixCls", "name", "id", "type", "disabled", "readonly", "tabindex", "autofocus", "value", "required"];
var checkboxProps = {
  prefixCls: String,
  name: String,
  id: String,
  type: String,
  defaultChecked: {
    type: [Boolean, Number],
    default: void 0
  },
  checked: {
    type: [Boolean, Number],
    default: void 0
  },
  disabled: Boolean,
  tabindex: {
    type: [Number, String]
  },
  readonly: Boolean,
  autofocus: Boolean,
  value: PropTypes$1.any,
  required: Boolean
};
const VcCheckbox = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Checkbox",
  inheritAttrs: false,
  props: initDefaultProps$1(checkboxProps, {
    prefixCls: "rc-checkbox",
    type: "checkbox",
    defaultChecked: false
  }),
  emits: ["click", "change"],
  setup: function setup49(props2, _ref) {
    var attrs = _ref.attrs, emit = _ref.emit, expose = _ref.expose;
    var checked = ref(props2.checked === void 0 ? props2.defaultChecked : props2.checked);
    var inputRef = ref();
    watch(function() {
      return props2.checked;
    }, function() {
      checked.value = props2.checked;
    });
    expose({
      focus: function focus() {
        var _inputRef$value;
        (_inputRef$value = inputRef.value) === null || _inputRef$value === void 0 ? void 0 : _inputRef$value.focus();
      },
      blur: function blur() {
        var _inputRef$value2;
        (_inputRef$value2 = inputRef.value) === null || _inputRef$value2 === void 0 ? void 0 : _inputRef$value2.blur();
      }
    });
    var eventShiftKey = ref();
    var handleChange2 = function handleChange3(e) {
      if (props2.disabled) {
        return;
      }
      if (props2.checked === void 0) {
        checked.value = e.target.checked;
      }
      e.shiftKey = eventShiftKey.value;
      var eventObj = {
        target: _objectSpread(_objectSpread({}, props2), {}, {
          checked: e.target.checked
        }),
        stopPropagation: function stopPropagation() {
          e.stopPropagation();
        },
        preventDefault: function preventDefault() {
          e.preventDefault();
        },
        nativeEvent: e
      };
      if (props2.checked !== void 0) {
        inputRef.value.checked = !!props2.checked;
      }
      emit("change", eventObj);
      eventShiftKey.value = false;
    };
    var onClick2 = function onClick3(e) {
      emit("click", e);
      eventShiftKey.value = e.shiftKey;
    };
    return function() {
      var _classNames;
      var prefixCls = props2.prefixCls, name2 = props2.name, id = props2.id, type = props2.type, disabled = props2.disabled, readonly = props2.readonly, tabindex = props2.tabindex, autofocus = props2.autofocus, value = props2.value, required = props2.required, others = _objectWithoutProperties(props2, _excluded$9);
      var className = attrs.class, onFocus2 = attrs.onFocus, onBlur2 = attrs.onBlur, onKeydown = attrs.onKeydown, onKeypress = attrs.onKeypress, onKeyup = attrs.onKeyup;
      var othersAndAttrs = _objectSpread(_objectSpread({}, others), attrs);
      var globalProps2 = Object.keys(othersAndAttrs).reduce(function(prev2, key2) {
        if (key2.substr(0, 5) === "aria-" || key2.substr(0, 5) === "data-" || key2 === "role") {
          prev2[key2] = othersAndAttrs[key2];
        }
        return prev2;
      }, {});
      var classString = classNames(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-checked"), checked.value), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
      var inputProps2 = _objectSpread(_objectSpread({
        name: name2,
        id,
        type,
        readonly,
        disabled,
        tabindex,
        class: "".concat(prefixCls, "-input"),
        checked: !!checked.value,
        autofocus,
        value
      }, globalProps2), {}, {
        onChange: handleChange2,
        onClick: onClick2,
        onFocus: onFocus2,
        onBlur: onBlur2,
        onKeydown,
        onKeypress,
        onKeyup,
        required
      });
      return createVNode("span", {
        "class": classString
      }, [createVNode("input", _objectSpread({
        "ref": inputRef
      }, inputProps2), null), createVNode("span", {
        "class": "".concat(prefixCls, "-inner")
      }, null)]);
    };
  }
});
var _excluded$8 = ["prefixCls", "id"];
var radioProps = function radioProps2() {
  return {
    prefixCls: String,
    checked: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    isGroup: {
      type: Boolean,
      default: void 0
    },
    value: PropTypes$1.any,
    name: String,
    id: String,
    autofocus: {
      type: Boolean,
      default: void 0
    },
    onChange: Function,
    onFocus: Function,
    onBlur: Function,
    onClick: Function,
    "onUpdate:checked": Function,
    "onUpdate:value": Function
  };
};
const Radio = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ARadio",
  props: radioProps(),
  setup: function setup50(props2, _ref) {
    var emit = _ref.emit, expose = _ref.expose, slots = _ref.slots;
    var formItemContext = useInjectFormItemContext();
    var vcCheckbox = ref();
    var radioGroupContext = inject("radioGroupContext", void 0);
    var _useConfigInject = useConfigInject("radio", props2), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    var focus = function focus2() {
      vcCheckbox.value.focus();
    };
    var blur = function blur2() {
      vcCheckbox.value.blur();
    };
    expose({
      focus,
      blur
    });
    var handleChange2 = function handleChange3(event) {
      var targetChecked = event.target.checked;
      emit("update:checked", targetChecked);
      emit("update:value", targetChecked);
      emit("change", event);
      formItemContext.onFieldChange();
    };
    var onChange = function onChange2(e) {
      emit("change", e);
      if (radioGroupContext && radioGroupContext.onRadioChange) {
        radioGroupContext.onRadioChange(e);
      }
    };
    return function() {
      var _classNames;
      var radioGroup = radioGroupContext;
      props2.prefixCls;
      var _props$id = props2.id, id = _props$id === void 0 ? formItemContext.id.value : _props$id, restProps = _objectWithoutProperties(props2, _excluded$8);
      var rProps = _objectSpread({
        prefixCls: prefixCls.value,
        id
      }, omit$2(restProps, ["onUpdate:checked", "onUpdate:value"]));
      if (radioGroup) {
        rProps.name = radioGroup.props.name;
        rProps.onChange = onChange;
        rProps.checked = props2.value === radioGroup.stateValue.value;
        rProps.disabled = props2.disabled || radioGroup.props.disabled;
      } else {
        rProps.onChange = handleChange2;
      }
      var wrapperClassString = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-wrapper"), true), _defineProperty(_classNames, "".concat(prefixCls.value, "-wrapper-checked"), rProps.checked), _defineProperty(_classNames, "".concat(prefixCls.value, "-wrapper-disabled"), rProps.disabled), _defineProperty(_classNames, "".concat(prefixCls.value, "-wrapper-rtl"), direction.value === "rtl"), _classNames));
      return createVNode("label", {
        "class": wrapperClassString
      }, [createVNode(VcCheckbox, _objectSpread(_objectSpread({}, rProps), {}, {
        "type": "radio",
        "ref": vcCheckbox
      }), null), slots.default && createVNode("span", null, [slots.default()])]);
    };
  }
});
var RadioGroupSizeTypes = tuple("large", "default", "small");
var radioGroupProps = function radioGroupProps2() {
  return {
    prefixCls: String,
    value: PropTypes$1.any,
    size: PropTypes$1.oneOf(RadioGroupSizeTypes),
    options: {
      type: Array
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    name: String,
    buttonStyle: {
      type: String,
      default: "outline"
    },
    id: String,
    optionType: {
      type: String,
      default: "default"
    },
    onChange: Function,
    "onUpdate:value": Function
  };
};
const __unplugin_components_0$2 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ARadioGroup",
  props: radioGroupProps(),
  setup: function setup51(props2, _ref) {
    var slots = _ref.slots, emit = _ref.emit;
    var formItemContext = useInjectFormItemContext();
    var _useConfigInject = useConfigInject("radio", props2), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction, size = _useConfigInject.size;
    var stateValue = ref(props2.value);
    var updatingValue = ref(false);
    watch(function() {
      return props2.value;
    }, function(val) {
      stateValue.value = val;
      updatingValue.value = false;
    });
    var onRadioChange = function onRadioChange2(ev) {
      var lastValue = stateValue.value;
      var value = ev.target.value;
      if (!("value" in props2)) {
        stateValue.value = value;
      }
      if (!updatingValue.value && value !== lastValue) {
        updatingValue.value = true;
        emit("update:value", value);
        emit("change", ev);
        formItemContext.onFieldChange();
      }
      nextTick(function() {
        updatingValue.value = false;
      });
    };
    provide("radioGroupContext", {
      onRadioChange,
      stateValue,
      props: props2
    });
    return function() {
      var _classNames;
      var options = props2.options, optionType = props2.optionType, buttonStyle = props2.buttonStyle, _props$id = props2.id, id = _props$id === void 0 ? formItemContext.id.value : _props$id;
      var groupPrefixCls = "".concat(prefixCls.value, "-group");
      var classString = classNames(groupPrefixCls, "".concat(groupPrefixCls, "-").concat(buttonStyle), (_classNames = {}, _defineProperty(_classNames, "".concat(groupPrefixCls, "-").concat(size.value), size.value), _defineProperty(_classNames, "".concat(groupPrefixCls, "-rtl"), direction.value === "rtl"), _classNames));
      var children = null;
      if (options && options.length > 0) {
        var optionsPrefixCls = optionType === "button" ? "".concat(prefixCls.value, "-button") : prefixCls.value;
        children = options.map(function(option) {
          if (typeof option === "string" || typeof option === "number") {
            return createVNode(Radio, {
              "key": option,
              "prefixCls": optionsPrefixCls,
              "disabled": props2.disabled,
              "value": option,
              "checked": stateValue.value === option
            }, {
              default: function _default4() {
                return [option];
              }
            });
          }
          var value = option.value, disabled = option.disabled, label = option.label;
          return createVNode(Radio, {
            "key": "radio-group-value-options-".concat(value),
            "prefixCls": optionsPrefixCls,
            "disabled": disabled || props2.disabled,
            "value": value,
            "checked": stateValue.value === value
          }, {
            default: function _default4() {
              return [label];
            }
          });
        });
      } else {
        var _slots$default;
        children = (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
      }
      return createVNode("div", {
        "class": classString,
        "id": id
      }, [children]);
    };
  }
});
const Button = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ARadioButton",
  props: radioProps(),
  setup: function setup52(props2, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject("radio-button", props2), prefixCls = _useConfigInject.prefixCls;
    var radioGroupContext = inject("radioGroupContext", void 0);
    return function() {
      var _slots$default;
      var rProps = _objectSpread(_objectSpread({}, props2), {}, {
        prefixCls: prefixCls.value
      });
      if (radioGroupContext) {
        rProps.onChange = radioGroupContext.onRadioChange;
        rProps.checked = rProps.value === radioGroupContext.stateValue.value;
        rProps.disabled = rProps.disabled || radioGroupContext.props.disabled;
      }
      return createVNode(Radio, rProps, {
        default: function _default4() {
          return [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)];
        }
      });
    };
  }
});
Radio.Group = __unplugin_components_0$2;
Radio.Button = Button;
Radio.install = function(app) {
  app.component(Radio.name, Radio);
  app.component(Radio.Group.name, Radio.Group);
  app.component(Radio.Button.name, Radio.Button);
  return app;
};
function useRaf(callback) {
  var rafRef = ref();
  var removedRef = ref(false);
  function trigger2() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (!removedRef.value) {
      wrapperRaf.cancel(rafRef.value);
      rafRef.value = wrapperRaf(function() {
        callback.apply(void 0, args);
      });
    }
  }
  return trigger2;
}
function useRafState(defaultState) {
  var batchRef = ref([]);
  var state = ref(typeof defaultState === "function" ? defaultState() : defaultState);
  var flushUpdate = useRaf(function() {
    var value = state.value;
    batchRef.value.forEach(function(callback) {
      value = callback(value);
    });
    batchRef.value = [];
    state.value = value;
  });
  function updater(callback) {
    batchRef.value.push(callback);
    flushUpdate();
  }
  return [state, updater];
}
const TabNode = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "TabNode",
  props: {
    id: {
      type: String
    },
    prefixCls: {
      type: String
    },
    tab: {
      type: Object
    },
    active: {
      type: Boolean
    },
    closable: {
      type: Boolean
    },
    editable: {
      type: Object
    },
    onClick: {
      type: Function
    },
    onResize: {
      type: Function
    },
    renderWrapper: {
      type: Function
    },
    removeAriaLabel: {
      type: String
    },
    onFocus: {
      type: Function
    }
  },
  emits: ["click", "resize", "remove", "focus"],
  setup: function setup53(props2, _ref) {
    var expose = _ref.expose, attrs = _ref.attrs;
    var domRef = ref();
    function onInternalClick(e) {
      var _props$tab;
      if ((_props$tab = props2.tab) !== null && _props$tab !== void 0 && _props$tab.disabled) {
        return;
      }
      props2.onClick(e);
    }
    expose({
      domRef
    });
    function onRemoveTab(event) {
      var _props$tab2;
      event.preventDefault();
      event.stopPropagation();
      props2.editable.onEdit("remove", {
        key: (_props$tab2 = props2.tab) === null || _props$tab2 === void 0 ? void 0 : _props$tab2.key,
        event
      });
    }
    var removable = computed(function() {
      var _props$tab3;
      return props2.editable && props2.closable !== false && !((_props$tab3 = props2.tab) !== null && _props$tab3 !== void 0 && _props$tab3.disabled);
    });
    return function() {
      var _classNames, _editable$removeIcon;
      var prefixCls = props2.prefixCls, id = props2.id, active = props2.active, _props$tab4 = props2.tab, key2 = _props$tab4.key, tab = _props$tab4.tab, disabled = _props$tab4.disabled, closeIcon = _props$tab4.closeIcon, renderWrapper = props2.renderWrapper, removeAriaLabel = props2.removeAriaLabel, editable = props2.editable, onFocus2 = props2.onFocus;
      var tabPrefix = "".concat(prefixCls, "-tab");
      var node = createVNode("div", {
        "key": key2,
        "ref": domRef,
        "class": classNames(tabPrefix, (_classNames = {}, _defineProperty(_classNames, "".concat(tabPrefix, "-with-remove"), removable.value), _defineProperty(_classNames, "".concat(tabPrefix, "-active"), active), _defineProperty(_classNames, "".concat(tabPrefix, "-disabled"), disabled), _classNames)),
        "style": attrs.style,
        "onClick": onInternalClick
      }, [createVNode("div", {
        "role": "tab",
        "aria-selected": active,
        "id": id && "".concat(id, "-tab-").concat(key2),
        "class": "".concat(tabPrefix, "-btn"),
        "aria-controls": id && "".concat(id, "-panel-").concat(key2),
        "aria-disabled": disabled,
        "tabindex": disabled ? null : 0,
        "onClick": function onClick2(e) {
          e.stopPropagation();
          onInternalClick(e);
        },
        "onKeydown": function onKeydown(e) {
          if ([KeyCode$1.SPACE, KeyCode$1.ENTER].includes(e.which)) {
            e.preventDefault();
            onInternalClick(e);
          }
        },
        "onFocus": onFocus2
      }, [typeof tab === "function" ? tab() : tab]), removable.value && createVNode("button", {
        "type": "button",
        "aria-label": removeAriaLabel || "remove",
        "tabindex": 0,
        "class": "".concat(tabPrefix, "-remove"),
        "onClick": function onClick2(e) {
          e.stopPropagation();
          onRemoveTab(e);
        }
      }, [(closeIcon === null || closeIcon === void 0 ? void 0 : closeIcon()) || ((_editable$removeIcon = editable.removeIcon) === null || _editable$removeIcon === void 0 ? void 0 : _editable$removeIcon.call(editable)) || "\xD7"])]);
      return renderWrapper ? renderWrapper(node) : node;
    };
  }
});
var DEFAULT_SIZE$1 = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};
function useOffsets(tabs, tabSizes) {
  var offsetMap = ref(/* @__PURE__ */ new Map());
  watchEffect(function() {
    var _tabsValue$;
    var map = /* @__PURE__ */ new Map();
    var tabsValue = tabs.value;
    var lastOffset = tabSizes.value.get((_tabsValue$ = tabsValue[0]) === null || _tabsValue$ === void 0 ? void 0 : _tabsValue$.key) || DEFAULT_SIZE$1;
    var rightOffset = lastOffset.left + lastOffset.width;
    for (var i = 0; i < tabsValue.length; i += 1) {
      var key2 = tabsValue[i].key;
      var data3 = tabSizes.value.get(key2);
      if (!data3) {
        var _tabsValue;
        data3 = tabSizes.value.get((_tabsValue = tabsValue[i - 1]) === null || _tabsValue === void 0 ? void 0 : _tabsValue.key) || DEFAULT_SIZE$1;
      }
      var entity = map.get(key2) || _objectSpread({}, data3);
      entity.right = rightOffset - entity.left - entity.width;
      map.set(key2, entity);
    }
    offsetMap.value = new Map(map);
  });
  return offsetMap;
}
const AddButton = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AddButton",
  inheritAttrs: false,
  props: {
    prefixCls: String,
    editable: {
      type: Object
    },
    locale: {
      type: Object,
      default: void 0
    }
  },
  setup: function setup54(props2, _ref) {
    var expose = _ref.expose, attrs = _ref.attrs;
    var domRef = ref();
    expose({
      domRef
    });
    return function() {
      var prefixCls = props2.prefixCls, editable = props2.editable, locale2 = props2.locale;
      if (!editable || editable.showAdd === false) {
        return null;
      }
      return createVNode("button", {
        "ref": domRef,
        "type": "button",
        "class": "".concat(prefixCls, "-nav-add"),
        "style": attrs.style,
        "aria-label": (locale2 === null || locale2 === void 0 ? void 0 : locale2.addAriaLabel) || "Add tab",
        "onClick": function onClick2(event) {
          editable.onEdit("add", {
            event
          });
        }
      }, [editable.addIcon ? editable.addIcon() : "+"]);
    };
  }
});
var operationNodeProps = {
  prefixCls: {
    type: String
  },
  id: {
    type: String
  },
  tabs: {
    type: Object
  },
  rtl: {
    type: Boolean
  },
  tabBarGutter: {
    type: Number
  },
  activeKey: {
    type: [String, Number]
  },
  mobile: {
    type: Boolean
  },
  moreIcon: PropTypes$1.any,
  moreTransitionName: {
    type: String
  },
  editable: {
    type: Object
  },
  locale: {
    type: Object,
    default: void 0
  },
  removeAriaLabel: String,
  onTabClick: {
    type: Function
  }
};
const OperationNode = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "OperationNode",
  inheritAttrs: false,
  props: operationNodeProps,
  emits: ["tabClick"],
  slots: ["moreIcon"],
  setup: function setup55(props2, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots;
    var _useState = useState(false), _useState2 = _slicedToArray(_useState, 2), open2 = _useState2[0], setOpen = _useState2[1];
    var _useState3 = useState(null), _useState4 = _slicedToArray(_useState3, 2), selectedKey = _useState4[0], setSelectedKey = _useState4[1];
    var selectOffset = function selectOffset2(offset2) {
      var enabledTabs = props2.tabs.filter(function(tab2) {
        return !tab2.disabled;
      });
      var selectedIndex = enabledTabs.findIndex(function(tab2) {
        return tab2.key === selectedKey.value;
      }) || 0;
      var len = enabledTabs.length;
      for (var i = 0; i < len; i += 1) {
        selectedIndex = (selectedIndex + offset2 + len) % len;
        var tab = enabledTabs[selectedIndex];
        if (!tab.disabled) {
          setSelectedKey(tab.key);
          return;
        }
      }
    };
    var onKeyDown = function onKeyDown2(e) {
      var which = e.which;
      if (!open2.value) {
        if ([KeyCode$1.DOWN, KeyCode$1.SPACE, KeyCode$1.ENTER].includes(which)) {
          setOpen(true);
          e.preventDefault();
        }
        return;
      }
      switch (which) {
        case KeyCode$1.UP:
          selectOffset(-1);
          e.preventDefault();
          break;
        case KeyCode$1.DOWN:
          selectOffset(1);
          e.preventDefault();
          break;
        case KeyCode$1.ESC:
          setOpen(false);
          break;
        case KeyCode$1.SPACE:
        case KeyCode$1.ENTER:
          if (selectedKey.value !== null)
            props2.onTabClick(selectedKey.value, e);
          break;
      }
    };
    var popupId = computed(function() {
      return "".concat(props2.id, "-more-popup");
    });
    var selectedItemId = computed(function() {
      return selectedKey.value !== null ? "".concat(popupId.value, "-").concat(selectedKey.value) : null;
    });
    var onRemoveTab = function onRemoveTab2(event, key2) {
      event.preventDefault();
      event.stopPropagation();
      props2.editable.onEdit("remove", {
        key: key2,
        event
      });
    };
    watch(open2, function() {
      if (!open2.value) {
        setSelectedKey(null);
      }
    });
    return function() {
      var _slots$moreIcon;
      var prefixCls = props2.prefixCls, id = props2.id, tabs = props2.tabs, locale2 = props2.locale, mobile = props2.mobile, _props$moreIcon = props2.moreIcon, moreIcon = _props$moreIcon === void 0 ? ((_slots$moreIcon = slots.moreIcon) === null || _slots$moreIcon === void 0 ? void 0 : _slots$moreIcon.call(slots)) || createVNode(EllipsisOutlined, null, null) : _props$moreIcon, moreTransitionName = props2.moreTransitionName, editable = props2.editable, tabBarGutter = props2.tabBarGutter, rtl2 = props2.rtl, onTabClick = props2.onTabClick;
      var dropdownPrefix = "".concat(prefixCls, "-dropdown");
      var dropdownAriaLabel = locale2 === null || locale2 === void 0 ? void 0 : locale2.dropdownAriaLabel;
      var moreStyle = _defineProperty({}, rtl2 ? "marginRight" : "marginLeft", tabBarGutter);
      if (!tabs.length) {
        moreStyle.visibility = "hidden";
        moreStyle.order = 1;
      }
      var overlayClassName = classNames(_defineProperty({}, "".concat(dropdownPrefix, "-rtl"), rtl2));
      var moreNode = mobile ? null : createVNode(Dropdown, {
        "prefixCls": dropdownPrefix,
        "trigger": ["hover"],
        "visible": open2.value,
        "transitionName": moreTransitionName,
        "onVisibleChange": setOpen,
        "overlayClassName": overlayClassName,
        "mouseEnterDelay": 0.1,
        "mouseLeaveDelay": 0.1
      }, {
        overlay: function overlay() {
          return createVNode(Menu, {
            "onClick": function onClick2(_ref2) {
              var key2 = _ref2.key, domEvent = _ref2.domEvent;
              onTabClick(key2, domEvent);
              setOpen(false);
            },
            "id": popupId.value,
            "tabindex": -1,
            "role": "listbox",
            "aria-activedescendant": selectedItemId.value,
            "selectedKeys": [selectedKey.value],
            "aria-label": dropdownAriaLabel !== void 0 ? dropdownAriaLabel : "expanded dropdown"
          }, {
            default: function _default4() {
              return [tabs.map(function(tab) {
                var _tab$closeIcon, _editable$removeIcon;
                var removable = editable && tab.closable !== false && !tab.disabled;
                return createVNode(__unplugin_components_3, {
                  "key": tab.key,
                  "id": "".concat(popupId.value, "-").concat(tab.key),
                  "role": "option",
                  "aria-controls": id && "".concat(id, "-panel-").concat(tab.key),
                  "disabled": tab.disabled
                }, {
                  default: function _default5() {
                    return [createVNode("span", null, [typeof tab.tab === "function" ? tab.tab() : tab.tab]), removable && createVNode("button", {
                      "type": "button",
                      "aria-label": props2.removeAriaLabel || "remove",
                      "tabindex": 0,
                      "class": "".concat(dropdownPrefix, "-menu-item-remove"),
                      "onClick": function onClick2(e) {
                        e.stopPropagation();
                        onRemoveTab(e, tab.key);
                      }
                    }, [((_tab$closeIcon = tab.closeIcon) === null || _tab$closeIcon === void 0 ? void 0 : _tab$closeIcon.call(tab)) || ((_editable$removeIcon = editable.removeIcon) === null || _editable$removeIcon === void 0 ? void 0 : _editable$removeIcon.call(editable)) || "\xD7"])];
                  }
                });
              })];
            }
          });
        },
        default: function _default4() {
          return createVNode("button", {
            "type": "button",
            "class": "".concat(prefixCls, "-nav-more"),
            "style": moreStyle,
            "tabindex": -1,
            "aria-hidden": "true",
            "aria-haspopup": "listbox",
            "aria-controls": popupId.value,
            "id": "".concat(id, "-more"),
            "aria-expanded": open2.value,
            "onKeydown": onKeyDown
          }, [moreIcon]);
        }
      });
      return createVNode("div", {
        "class": classNames("".concat(prefixCls, "-nav-operations"), attrs.class),
        "style": attrs.style
      }, [moreNode, createVNode(AddButton, {
        "prefixCls": prefixCls,
        "locale": locale2,
        "editable": editable
      }, null)]);
    };
  }
});
var TabsContextKey = Symbol("tabsContextKey");
var useProvideTabs = function useProvideTabs2(props2) {
  provide(TabsContextKey, props2);
};
var useInjectTabs = function useInjectTabs2() {
  return inject(TabsContextKey, {
    tabs: ref([]),
    prefixCls: ref()
  });
};
defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "TabsContextProvider",
  inheritAttrs: false,
  props: {
    tabs: {
      type: Object,
      default: void 0
    },
    prefixCls: {
      type: String,
      default: void 0
    }
  },
  setup: function setup56(props2, _ref) {
    var slots = _ref.slots;
    useProvideTabs(toRefs(props2));
    return function() {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});
var MIN_SWIPE_DISTANCE = 0.1;
var STOP_SWIPE_DISTANCE = 0.01;
var REFRESH_INTERVAL = 20;
var SPEED_OFF_MULTIPLE = Math.pow(0.995, REFRESH_INTERVAL);
function useTouchMove(domRef, onOffset) {
  var _useState = useState("$qHM8AVP5hR"), _useState2 = _slicedToArray(_useState, 2), touchPosition = _useState2[0], setTouchPosition = _useState2[1];
  var _useState3 = useState(0), _useState4 = _slicedToArray(_useState3, 2), lastTimestamp = _useState4[0], setLastTimestamp = _useState4[1];
  var _useState5 = useState(0), _useState6 = _slicedToArray(_useState5, 2), lastTimeDiff = _useState6[0], setLastTimeDiff = _useState6[1];
  var _useState7 = useState("$MLBeJqoe38"), _useState8 = _slicedToArray(_useState7, 2), lastOffset = _useState8[0], setLastOffset = _useState8[1];
  var motionInterval = ref();
  function onTouchStart(e) {
    var _e$touches$ = e.touches[0], screenX = _e$touches$.screenX, screenY = _e$touches$.screenY;
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    clearInterval(motionInterval.value);
  }
  function onTouchMove(e) {
    if (!touchPosition.value)
      return;
    e.preventDefault();
    var _e$touches$2 = e.touches[0], screenX = _e$touches$2.screenX, screenY = _e$touches$2.screenY;
    var offsetX = screenX - touchPosition.value.x;
    var offsetY = screenY - touchPosition.value.y;
    onOffset(offsetX, offsetY);
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    var now2 = Date.now();
    setLastTimeDiff(now2 - lastTimestamp.value);
    setLastTimestamp(now2);
    setLastOffset({
      x: offsetX,
      y: offsetY
    });
  }
  function onTouchEnd() {
    if (!touchPosition.value)
      return;
    var lastOffsetValue = lastOffset.value;
    setTouchPosition(null);
    setLastOffset(null);
    if (lastOffsetValue) {
      var distanceX = lastOffsetValue.x / lastTimeDiff.value;
      var distanceY = lastOffsetValue.y / lastTimeDiff.value;
      var absX = Math.abs(distanceX);
      var absY = Math.abs(distanceY);
      if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE)
        return;
      var currentX = distanceX;
      var currentY = distanceY;
      motionInterval.value = setInterval(function() {
        if (Math.abs(currentX) < STOP_SWIPE_DISTANCE && Math.abs(currentY) < STOP_SWIPE_DISTANCE) {
          clearInterval(motionInterval.value);
          return;
        }
        currentX *= SPEED_OFF_MULTIPLE;
        currentY *= SPEED_OFF_MULTIPLE;
        onOffset(currentX * REFRESH_INTERVAL, currentY * REFRESH_INTERVAL);
      }, REFRESH_INTERVAL);
    }
  }
  var lastWheelDirectionRef = ref();
  function onWheel(e) {
    var deltaX = e.deltaX, deltaY = e.deltaY;
    var mixed = 0;
    var absX = Math.abs(deltaX);
    var absY = Math.abs(deltaY);
    if (absX === absY) {
      mixed = lastWheelDirectionRef.value === "x" ? deltaX : deltaY;
    } else if (absX > absY) {
      mixed = deltaX;
      lastWheelDirectionRef.value = "x";
    } else {
      mixed = deltaY;
      lastWheelDirectionRef.value = "y";
    }
    if (onOffset(-mixed, -mixed)) {
      e.preventDefault();
    }
  }
  ref({
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onWheel
  });
}
function useSyncState(defaultState, onChange) {
  var stateRef = ref(defaultState);
  function setState2(updater) {
    var newValue = typeof updater === "function" ? updater(stateRef.value) : updater;
    if (newValue !== stateRef.value) {
      onChange(newValue, stateRef.value);
    }
    stateRef.value = newValue;
  }
  return [stateRef, setState2];
}
var useRefs = function useRefs2() {
  var refs = ref(/* @__PURE__ */ new Map());
  var setRef = function setRef2(key2) {
    return function(el) {
      refs.value.set(key2, el);
    };
  };
  return [setRef, refs];
};
const useRefs$1 = useRefs;
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray$1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var FUNC_ERROR_TEXT$1 = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  var memoized = function() {
    var args = arguments, key2 = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key2)) {
      return cache.get(key2);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key2, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key2) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key2;
  });
  var cache = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match2, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match2);
  });
  return result;
});
const stringToPath$1 = stringToPath;
function castPath(value, object) {
  if (isArray$1(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath$1(toString(value));
}
var INFINITY = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function baseGet(object, path) {
  path = castPath(path, object);
  var index2 = 0, length = path.length;
  while (object != null && index2 < length) {
    object = object[toKey(path[index2++])];
  }
  return index2 && index2 == length ? object : void 0;
}
var defineProperty = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
const defineProperty$1 = defineProperty;
function baseAssignValue(object, key2, value) {
  if (key2 == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key2, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key2] = value;
  }
}
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function assignValue(object, key2, value) {
  var objValue = object[key2];
  if (!(hasOwnProperty$2.call(object, key2) && eq(objValue, value)) || value === void 0 && !(key2 in object)) {
    baseAssignValue(object, key2, value);
  }
}
function baseSet(object, path, value, customizer) {
  if (!isObject$1(object)) {
    return object;
  }
  path = castPath(path, object);
  var index2 = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index2 < length) {
    var key2 = toKey(path[index2]), newValue = value;
    if (key2 === "__proto__" || key2 === "constructor" || key2 === "prototype") {
      return object;
    }
    if (index2 != lastIndex) {
      var objValue = nested[key2];
      newValue = customizer ? customizer(objValue, key2, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject$1(objValue) ? objValue : isIndex(path[index2 + 1]) ? [] : {};
      }
    }
    assignValue(nested, key2, newValue);
    nested = nested[key2];
  }
  return object;
}
function basePickBy(object, paths, predicate) {
  var index2 = -1, length = paths.length, result = {};
  while (++index2 < length) {
    var path = paths[index2], value = baseGet(object, path);
    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}
function baseHasIn(object, key2) {
  return object != null && key2 in Object(object);
}
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);
  var index2 = -1, length = path.length, result = false;
  while (++index2 < length) {
    var key2 = toKey(path[index2]);
    if (!(result = object != null && hasFunc(object, key2))) {
      break;
    }
    object = object[key2];
  }
  if (result || ++index2 != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key2, length) && (isArray$1(object) || isArguments$1(object));
}
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}
var spreadableSymbol = Symbol$2 ? Symbol$2.isConcatSpreadable : void 0;
function isFlattenable(value) {
  return isArray$1(value) || isArguments$1(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index2 = -1, length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index2 < length) {
    var value = array[index2];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var nativeMax$2 = Math.max;
function overRest(func, start, transform) {
  start = nativeMax$2(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index2 = -1, length = nativeMax$2(args.length - start, 0), array = Array(length);
    while (++index2 < length) {
      array[index2] = args[start + index2];
    }
    index2 = -1;
    var otherArgs = Array(start + 1);
    while (++index2 < start) {
      otherArgs[index2] = args[index2];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
function constant(value) {
  return function() {
    return value;
  };
}
function identity(value) {
  return value;
}
var baseSetToString = !defineProperty$1 ? identity : function(func, string) {
  return defineProperty$1(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
const baseSetToString$1 = baseSetToString;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var setToString = shortOut(baseSetToString$1);
const setToString$1 = setToString;
function flatRest(func) {
  return setToString$1(overRest(func, void 0, flatten), func + "");
}
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});
const pick$1 = pick;
var DEFAULT_SIZE = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
};
var tabNavListProps = function tabNavListProps2() {
  return {
    id: {
      type: String
    },
    tabPosition: {
      type: String
    },
    activeKey: {
      type: [String, Number]
    },
    rtl: {
      type: Boolean
    },
    animated: {
      type: Object,
      default: void 0
    },
    editable: {
      type: Object
    },
    moreIcon: PropTypes$1.any,
    moreTransitionName: {
      type: String
    },
    mobile: {
      type: Boolean
    },
    tabBarGutter: {
      type: Number
    },
    renderTabBar: {
      type: Function
    },
    locale: {
      type: Object,
      default: void 0
    },
    onTabClick: {
      type: Function
    },
    onTabScroll: {
      type: Function
    }
  };
};
const TabNavList = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "TabNavList",
  inheritAttrs: false,
  props: tabNavListProps(),
  slots: ["moreIcon", "leftExtra", "rightExtra", "tabBarExtraContent"],
  emits: ["tabClick", "tabScroll"],
  setup: function setup57(props2, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots;
    var _useInjectTabs = useInjectTabs(), tabs = _useInjectTabs.tabs, prefixCls = _useInjectTabs.prefixCls;
    var tabsWrapperRef = ref();
    var tabListRef = ref();
    var operationsRef = ref();
    var innerAddButtonRef = ref();
    var _useRefs = useRefs$1(), _useRefs2 = _slicedToArray(_useRefs, 2), setRef = _useRefs2[0], btnRefs = _useRefs2[1];
    var tabPositionTopOrBottom = computed(function() {
      return props2.tabPosition === "top" || props2.tabPosition === "bottom";
    });
    var _useSyncState = useSyncState(0, function(next2, prev2) {
      if (tabPositionTopOrBottom.value && props2.onTabScroll) {
        props2.onTabScroll({
          direction: next2 > prev2 ? "left" : "right"
        });
      }
    }), _useSyncState2 = _slicedToArray(_useSyncState, 2), transformLeft = _useSyncState2[0], setTransformLeft = _useSyncState2[1];
    var _useSyncState3 = useSyncState(0, function(next2, prev2) {
      if (!tabPositionTopOrBottom.value && props2.onTabScroll) {
        props2.onTabScroll({
          direction: next2 > prev2 ? "top" : "bottom"
        });
      }
    }), _useSyncState4 = _slicedToArray(_useSyncState3, 2), transformTop = _useSyncState4[0], setTransformTop = _useSyncState4[1];
    var _useState = useState(0), _useState2 = _slicedToArray(_useState, 2), wrapperScrollWidth = _useState2[0], setWrapperScrollWidth = _useState2[1];
    var _useState3 = useState(0), _useState4 = _slicedToArray(_useState3, 2), wrapperScrollHeight = _useState4[0], setWrapperScrollHeight = _useState4[1];
    var _useState5 = useState(null), _useState6 = _slicedToArray(_useState5, 2), wrapperWidth = _useState6[0], setWrapperWidth = _useState6[1];
    var _useState7 = useState(null), _useState8 = _slicedToArray(_useState7, 2), wrapperHeight = _useState8[0], setWrapperHeight = _useState8[1];
    var _useState9 = useState(0), _useState10 = _slicedToArray(_useState9, 2), addWidth = _useState10[0], setAddWidth = _useState10[1];
    var _useState11 = useState(0), _useState12 = _slicedToArray(_useState11, 2), addHeight = _useState12[0], setAddHeight = _useState12[1];
    var _useRafState = useRafState(/* @__PURE__ */ new Map()), _useRafState2 = _slicedToArray(_useRafState, 2), tabSizes = _useRafState2[0], setTabSizes = _useRafState2[1];
    var tabOffsets = useOffsets(tabs, tabSizes);
    var operationsHiddenClassName = computed(function() {
      return "".concat(prefixCls.value, "-nav-operations-hidden");
    });
    var transformMin = ref(0);
    var transformMax = ref(0);
    watchEffect(function() {
      if (!tabPositionTopOrBottom.value) {
        transformMin.value = Math.min(0, wrapperHeight.value - wrapperScrollHeight.value);
        transformMax.value = 0;
      } else if (props2.rtl) {
        transformMin.value = 0;
        transformMax.value = Math.max(0, wrapperScrollWidth.value - wrapperWidth.value);
      } else {
        transformMin.value = Math.min(0, wrapperWidth.value - wrapperScrollWidth.value);
        transformMax.value = 0;
      }
    });
    var alignInRange = function alignInRange2(value) {
      if (value < transformMin.value) {
        return transformMin.value;
      }
      if (value > transformMax.value) {
        return transformMax.value;
      }
      return value;
    };
    var touchMovingRef = ref();
    var _useState13 = useState("$fLpcI2LyBp"), _useState14 = _slicedToArray(_useState13, 2), lockAnimation = _useState14[0], setLockAnimation = _useState14[1];
    var doLockAnimation = function doLockAnimation2() {
      setLockAnimation(Date.now());
    };
    var clearTouchMoving = function clearTouchMoving2() {
      clearTimeout(touchMovingRef.value);
    };
    var doMove = function doMove2(setState2, offset2) {
      setState2(function(value) {
        var newValue = alignInRange(value + offset2);
        return newValue;
      });
    };
    useTouchMove(tabsWrapperRef, function(offsetX, offsetY) {
      if (tabPositionTopOrBottom.value) {
        if (wrapperWidth.value >= wrapperScrollWidth.value) {
          return false;
        }
        doMove(setTransformLeft, offsetX);
      } else {
        if (wrapperHeight.value >= wrapperScrollHeight.value) {
          return false;
        }
        doMove(setTransformTop, offsetY);
      }
      clearTouchMoving();
      doLockAnimation();
      return true;
    });
    watch(lockAnimation, function() {
      clearTouchMoving();
      if (lockAnimation.value) {
        touchMovingRef.value = setTimeout(function() {
          setLockAnimation(0);
        }, 100);
      }
    });
    var scrollToTab = function scrollToTab2() {
      var key2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : props2.activeKey;
      var tabOffset = tabOffsets.value.get(key2) || {
        width: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0
      };
      if (tabPositionTopOrBottom.value) {
        var newTransform = transformLeft.value;
        if (props2.rtl) {
          if (tabOffset.right < transformLeft.value) {
            newTransform = tabOffset.right;
          } else if (tabOffset.right + tabOffset.width > transformLeft.value + wrapperWidth.value) {
            newTransform = tabOffset.right + tabOffset.width - wrapperWidth.value;
          }
        } else if (tabOffset.left < -transformLeft.value) {
          newTransform = -tabOffset.left;
        } else if (tabOffset.left + tabOffset.width > -transformLeft.value + wrapperWidth.value) {
          newTransform = -(tabOffset.left + tabOffset.width - wrapperWidth.value);
        }
        setTransformTop(0);
        setTransformLeft(alignInRange(newTransform));
      } else {
        var _newTransform = transformTop.value;
        if (tabOffset.top < -transformTop.value) {
          _newTransform = -tabOffset.top;
        } else if (tabOffset.top + tabOffset.height > -transformTop.value + wrapperHeight.value) {
          _newTransform = -(tabOffset.top + tabOffset.height - wrapperHeight.value);
        }
        setTransformLeft(0);
        setTransformTop(alignInRange(_newTransform));
      }
    };
    var visibleStart = ref(0);
    var visibleEnd = ref(0);
    watchEffect(function() {
      var _ref3;
      var unit;
      var position;
      var transformSize;
      var basicSize;
      var tabContentSize;
      var addSize;
      var tabOffsetsValue = tabOffsets.value;
      if (["top", "bottom"].includes(props2.tabPosition)) {
        unit = "width";
        basicSize = wrapperWidth.value;
        tabContentSize = wrapperScrollWidth.value;
        addSize = addWidth.value;
        position = props2.rtl ? "right" : "left";
        transformSize = Math.abs(transformLeft.value);
      } else {
        unit = "height";
        basicSize = wrapperHeight.value;
        tabContentSize = wrapperScrollWidth.value;
        addSize = addHeight.value;
        position = "top";
        transformSize = -transformTop.value;
      }
      var mergedBasicSize = basicSize;
      if (tabContentSize + addSize > basicSize && tabContentSize < basicSize) {
        mergedBasicSize = basicSize - addSize;
      }
      var tabsVal = tabs.value;
      if (!tabsVal.length) {
        var _ref2;
        return _ref2 = [0, 0], visibleStart.value = _ref2[0], visibleEnd.value = _ref2[1], _ref2;
      }
      var len = tabsVal.length;
      var endIndex = len;
      for (var i = 0; i < len; i += 1) {
        var offset2 = tabOffsetsValue.get(tabsVal[i].key) || DEFAULT_SIZE;
        if (offset2[position] + offset2[unit] > transformSize + mergedBasicSize) {
          endIndex = i - 1;
          break;
        }
      }
      var startIndex = 0;
      for (var _i = len - 1; _i >= 0; _i -= 1) {
        var _offset = tabOffsetsValue.get(tabsVal[_i].key) || DEFAULT_SIZE;
        if (_offset[position] < transformSize) {
          startIndex = _i + 1;
          break;
        }
      }
      return _ref3 = [startIndex, endIndex], visibleStart.value = _ref3[0], visibleEnd.value = _ref3[1], _ref3;
    });
    var onListHolderResize = function onListHolderResize2() {
      var _tabsWrapperRef$value, _tabsWrapperRef$value2, _innerAddButtonRef$va, _tabListRef$value, _tabListRef$value2;
      var offsetWidth = ((_tabsWrapperRef$value = tabsWrapperRef.value) === null || _tabsWrapperRef$value === void 0 ? void 0 : _tabsWrapperRef$value.offsetWidth) || 0;
      var offsetHeight = ((_tabsWrapperRef$value2 = tabsWrapperRef.value) === null || _tabsWrapperRef$value2 === void 0 ? void 0 : _tabsWrapperRef$value2.offsetHeight) || 0;
      var addDom = ((_innerAddButtonRef$va = innerAddButtonRef.value) === null || _innerAddButtonRef$va === void 0 ? void 0 : _innerAddButtonRef$va.$el) || {};
      var newAddWidth = addDom.offsetWidth || 0;
      var newAddHeight = addDom.offsetHeight || 0;
      setWrapperWidth(offsetWidth);
      setWrapperHeight(offsetHeight);
      setAddWidth(newAddWidth);
      setAddHeight(newAddHeight);
      var newWrapperScrollWidth = (((_tabListRef$value = tabListRef.value) === null || _tabListRef$value === void 0 ? void 0 : _tabListRef$value.offsetWidth) || 0) - newAddWidth;
      var newWrapperScrollHeight = (((_tabListRef$value2 = tabListRef.value) === null || _tabListRef$value2 === void 0 ? void 0 : _tabListRef$value2.offsetHeight) || 0) - newAddHeight;
      setWrapperScrollWidth(newWrapperScrollWidth);
      setWrapperScrollHeight(newWrapperScrollHeight);
      setTabSizes(function() {
        var newSizes = /* @__PURE__ */ new Map();
        tabs.value.forEach(function(_ref4) {
          var key2 = _ref4.key;
          var btnRef = btnRefs.value.get(key2);
          var btnNode = (btnRef === null || btnRef === void 0 ? void 0 : btnRef.$el) || btnRef;
          if (btnNode) {
            newSizes.set(key2, {
              width: btnNode.offsetWidth,
              height: btnNode.offsetHeight,
              left: btnNode.offsetLeft,
              top: btnNode.offsetTop
            });
          }
        });
        return newSizes;
      });
    };
    var hiddenTabs = computed(function() {
      return [].concat(_toConsumableArray(tabs.value.slice(0, visibleStart.value)), _toConsumableArray(tabs.value.slice(visibleEnd.value + 1)));
    });
    var _useState15 = useState("$ZWDIrO98hF"), _useState16 = _slicedToArray(_useState15, 2), inkStyle = _useState16[0], setInkStyle = _useState16[1];
    var activeTabOffset = computed(function() {
      return tabOffsets.value.get(props2.activeKey);
    });
    var inkBarRafRef = ref();
    var cleanInkBarRaf = function cleanInkBarRaf2() {
      wrapperRaf.cancel(inkBarRafRef.value);
    };
    watch([activeTabOffset, tabPositionTopOrBottom, function() {
      return props2.rtl;
    }], function() {
      var newInkStyle = {};
      if (activeTabOffset.value) {
        if (tabPositionTopOrBottom.value) {
          if (props2.rtl) {
            newInkStyle.right = toPx(activeTabOffset.value.right);
          } else {
            newInkStyle.left = toPx(activeTabOffset.value.left);
          }
          newInkStyle.width = toPx(activeTabOffset.value.width);
        } else {
          newInkStyle.top = toPx(activeTabOffset.value.top);
          newInkStyle.height = toPx(activeTabOffset.value.height);
        }
      }
      cleanInkBarRaf();
      inkBarRafRef.value = wrapperRaf(function() {
        setInkStyle(newInkStyle);
      });
    });
    watch([function() {
      return props2.activeKey;
    }, activeTabOffset, tabOffsets, tabPositionTopOrBottom], function() {
      scrollToTab();
    }, {
      flush: "post"
    });
    watch([function() {
      return props2.rtl;
    }, function() {
      return props2.tabBarGutter;
    }, function() {
      return props2.activeKey;
    }, function() {
      return tabs.value;
    }], function() {
      onListHolderResize();
    }, {
      flush: "post"
    });
    var ExtraContent = function ExtraContent2(_ref5) {
      var position = _ref5.position, prefixCls2 = _ref5.prefixCls, extra = _ref5.extra;
      if (!extra)
        return null;
      var content = extra === null || extra === void 0 ? void 0 : extra({
        position
      });
      return content ? createVNode("div", {
        "class": "".concat(prefixCls2, "-extra-content")
      }, [content]) : null;
    };
    return function() {
      var _classNames;
      var id = props2.id, animated = props2.animated, activeKey = props2.activeKey, rtl2 = props2.rtl, editable = props2.editable, locale2 = props2.locale, tabPosition = props2.tabPosition, tabBarGutter = props2.tabBarGutter, onTabClick = props2.onTabClick;
      var className = attrs.class, style = attrs.style;
      var pre = prefixCls.value;
      var hasDropdown = !!hiddenTabs.value.length;
      var wrapPrefix = "".concat(pre, "-nav-wrap");
      var pingLeft;
      var pingRight;
      var pingTop;
      var pingBottom;
      if (tabPositionTopOrBottom.value) {
        if (rtl2) {
          pingRight = transformLeft.value > 0;
          pingLeft = transformLeft.value + wrapperWidth.value < wrapperScrollWidth.value;
        } else {
          pingLeft = transformLeft.value < 0;
          pingRight = -transformLeft.value + wrapperWidth.value < wrapperScrollWidth.value;
        }
      } else {
        pingTop = transformTop.value < 0;
        pingBottom = -transformTop.value + wrapperHeight.value < wrapperScrollHeight.value;
      }
      var tabNodeStyle = {};
      if (tabPosition === "top" || tabPosition === "bottom") {
        tabNodeStyle[rtl2 ? "marginRight" : "marginLeft"] = typeof tabBarGutter === "number" ? "".concat(tabBarGutter, "px") : tabBarGutter;
      } else {
        tabNodeStyle.marginTop = typeof tabBarGutter === "number" ? "".concat(tabBarGutter, "px") : tabBarGutter;
      }
      var tabNodes = tabs.value.map(function(tab, i) {
        var key2 = tab.key;
        return createVNode(TabNode, {
          "id": id,
          "prefixCls": pre,
          "key": key2,
          "tab": tab,
          "style": i === 0 ? void 0 : tabNodeStyle,
          "closable": tab.closable,
          "editable": editable,
          "active": key2 === activeKey,
          "removeAriaLabel": locale2 === null || locale2 === void 0 ? void 0 : locale2.removeAriaLabel,
          "ref": setRef(key2),
          "onClick": function onClick2(e) {
            onTabClick(key2, e);
          },
          "onFocus": function onFocus2() {
            scrollToTab(key2);
            doLockAnimation();
            if (!tabsWrapperRef.value) {
              return;
            }
            if (!rtl2) {
              tabsWrapperRef.value.scrollLeft = 0;
            }
            tabsWrapperRef.value.scrollTop = 0;
          }
        }, slots);
      });
      return createVNode("div", {
        "role": "tablist",
        "class": classNames("".concat(pre, "-nav"), className),
        "style": style,
        "onKeydown": function onKeydown() {
          doLockAnimation();
        }
      }, [createVNode(ExtraContent, {
        "position": "left",
        "prefixCls": pre,
        "extra": slots.leftExtra
      }, null), createVNode(ResizeObserver, {
        "onResize": onListHolderResize
      }, {
        default: function _default4() {
          return [createVNode("div", {
            "class": classNames(wrapPrefix, (_classNames = {}, _defineProperty(_classNames, "".concat(wrapPrefix, "-ping-left"), pingLeft), _defineProperty(_classNames, "".concat(wrapPrefix, "-ping-right"), pingRight), _defineProperty(_classNames, "".concat(wrapPrefix, "-ping-top"), pingTop), _defineProperty(_classNames, "".concat(wrapPrefix, "-ping-bottom"), pingBottom), _classNames)),
            "ref": tabsWrapperRef
          }, [createVNode(ResizeObserver, {
            "onResize": onListHolderResize
          }, {
            default: function _default5() {
              return [createVNode("div", {
                "ref": tabListRef,
                "class": "".concat(pre, "-nav-list"),
                "style": {
                  transform: "translate(".concat(transformLeft.value, "px, ").concat(transformTop.value, "px)"),
                  transition: lockAnimation.value ? "none" : void 0
                }
              }, [tabNodes, createVNode(AddButton, {
                "ref": innerAddButtonRef,
                "prefixCls": pre,
                "locale": locale2,
                "editable": editable,
                "style": _objectSpread(_objectSpread({}, tabNodes.length === 0 ? void 0 : tabNodeStyle), {}, {
                  visibility: hasDropdown ? "hidden" : null
                })
              }, null), createVNode("div", {
                "class": classNames("".concat(pre, "-ink-bar"), _defineProperty({}, "".concat(pre, "-ink-bar-animated"), animated.inkBar)),
                "style": inkStyle.value
              }, null)])];
            }
          })])];
        }
      }), createVNode(OperationNode, _objectSpread(_objectSpread({}, props2), {}, {
        "removeAriaLabel": locale2 === null || locale2 === void 0 ? void 0 : locale2.removeAriaLabel,
        "ref": operationsRef,
        "prefixCls": pre,
        "tabs": hiddenTabs.value,
        "class": !hasDropdown && operationsHiddenClassName.value
      }), pick$1(slots, ["moreIcon"])), createVNode(ExtraContent, {
        "position": "right",
        "prefixCls": pre,
        "extra": slots.rightExtra
      }, null), createVNode(ExtraContent, {
        "position": "right",
        "prefixCls": pre,
        "extra": slots.tabBarExtraContent
      }, null)]);
    };
  }
});
const TabPanelList = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "TabPanelList",
  inheritAttrs: false,
  props: {
    activeKey: {
      type: [String, Number]
    },
    id: {
      type: String
    },
    rtl: {
      type: Boolean
    },
    animated: {
      type: Object,
      default: void 0
    },
    tabPosition: {
      type: String
    },
    destroyInactiveTabPane: {
      type: Boolean
    }
  },
  setup: function setup58(props2) {
    var _useInjectTabs = useInjectTabs(), tabs = _useInjectTabs.tabs, prefixCls = _useInjectTabs.prefixCls;
    return function() {
      var id = props2.id, activeKey = props2.activeKey, animated = props2.animated, tabPosition = props2.tabPosition, rtl2 = props2.rtl, destroyInactiveTabPane = props2.destroyInactiveTabPane;
      var tabPaneAnimated = animated.tabPane;
      var pre = prefixCls.value;
      var activeIndex = tabs.value.findIndex(function(tab) {
        return tab.key === activeKey;
      });
      return createVNode("div", {
        "class": "".concat(pre, "-content-holder")
      }, [createVNode("div", {
        "class": ["".concat(pre, "-content"), "".concat(pre, "-content-").concat(tabPosition), _defineProperty({}, "".concat(pre, "-content-animated"), tabPaneAnimated)],
        "style": activeIndex && tabPaneAnimated ? _defineProperty({}, rtl2 ? "marginRight" : "marginLeft", "-".concat(activeIndex, "00%")) : null
      }, [tabs.value.map(function(tab) {
        return cloneElement(tab.node, {
          key: tab.key,
          prefixCls: pre,
          tabKey: tab.key,
          id,
          animated: tabPaneAnimated,
          active: tab.key === activeKey,
          destroyInactiveTabPane
        });
      })])]);
    };
  }
});
var tabsProps = function tabsProps2() {
  return {
    prefixCls: {
      type: String
    },
    id: {
      type: String
    },
    activeKey: {
      type: [String, Number]
    },
    defaultActiveKey: {
      type: [String, Number]
    },
    direction: {
      type: String
    },
    animated: {
      type: [Boolean, Object]
    },
    renderTabBar: {
      type: Function
    },
    tabBarGutter: {
      type: Number
    },
    tabBarStyle: {
      type: Object
    },
    tabPosition: {
      type: String
    },
    destroyInactiveTabPane: {
      type: Boolean
    },
    hideAdd: Boolean,
    type: {
      type: String
    },
    size: {
      type: String
    },
    centered: Boolean,
    onEdit: {
      type: Function
    },
    onChange: {
      type: Function
    },
    onTabClick: {
      type: Function
    },
    onTabScroll: {
      type: Function
    },
    "onUpdate:activeKey": {
      type: Function
    },
    locale: {
      type: Object,
      default: void 0
    },
    onPrevClick: Function,
    onNextClick: Function,
    tabBarExtraContent: PropTypes$1.any
  };
};
function parseTabList(children) {
  return children.map(function(node) {
    if (isValidElement(node)) {
      var props2 = _objectSpread({}, node.props || {});
      for (var _i = 0, _Object$entries = Object.entries(props2); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), k = _Object$entries$_i[0], v = _Object$entries$_i[1];
        delete props2[k];
        props2[camelize$1(k)] = v;
      }
      var slots = node.children || {};
      var key2 = node.key !== void 0 ? node.key : void 0;
      var _props$tab = props2.tab, tab = _props$tab === void 0 ? slots.tab : _props$tab, disabled = props2.disabled, forceRender = props2.forceRender, closable = props2.closable, animated = props2.animated, active = props2.active, destroyInactiveTabPane = props2.destroyInactiveTabPane;
      return _objectSpread(_objectSpread({
        key: key2
      }, props2), {}, {
        node,
        closeIcon: slots.closeIcon,
        tab,
        disabled: disabled === "" || disabled,
        forceRender: forceRender === "" || forceRender,
        closable: closable === "" || closable,
        animated: animated === "" || animated,
        active: active === "" || active,
        destroyInactiveTabPane: destroyInactiveTabPane === "" || destroyInactiveTabPane
      });
    }
    return null;
  }).filter(function(tab) {
    return tab;
  });
}
var InternalTabs = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "InternalTabs",
  inheritAttrs: false,
  props: _objectSpread(_objectSpread({}, initDefaultProps$1(tabsProps(), {
    tabPosition: "top",
    animated: {
      inkBar: true,
      tabPane: false
    }
  })), {}, {
    tabs: {
      type: Array
    }
  }),
  slots: ["tabBarExtraContent", "leftExtra", "rightExtra", "moreIcon", "addIcon", "removeIcon", "renderTabBar"],
  setup: function setup59(props2, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots;
    devWarning(!(props2.onPrevClick !== void 0) && !(props2.onNextClick !== void 0), "Tabs", "`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead.");
    devWarning(!(props2.tabBarExtraContent !== void 0), "Tabs", "`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead.");
    devWarning(!(slots.tabBarExtraContent !== void 0), "Tabs", "`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");
    var _useConfigInject = useConfigInject("tabs", props2), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction, size = _useConfigInject.size, rootPrefixCls = _useConfigInject.rootPrefixCls;
    var rtl2 = computed(function() {
      return direction.value === "rtl";
    });
    var mergedAnimated = computed(function() {
      var animated = props2.animated, tabPosition = props2.tabPosition;
      if (animated === false || ["left", "right"].includes(tabPosition)) {
        return {
          inkBar: false,
          tabPane: false
        };
      } else if (animated === true) {
        return {
          inkBar: true,
          tabPane: true
        };
      } else {
        return _objectSpread({
          inkBar: true,
          tabPane: false
        }, _typeof(animated) === "object" ? animated : {});
      }
    });
    var _useState = useState(false), _useState2 = _slicedToArray(_useState, 2), mobile = _useState2[0];
    _useState2[1];
    var _useMergedState = useMergedState(function() {
      var _props$tabs$;
      return (_props$tabs$ = props2.tabs[0]) === null || _props$tabs$ === void 0 ? void 0 : _props$tabs$.key;
    }, {
      value: computed(function() {
        return props2.activeKey;
      }),
      defaultValue: props2.defaultActiveKey
    }), _useMergedState2 = _slicedToArray(_useMergedState, 2), mergedActiveKey = _useMergedState2[0], setMergedActiveKey = _useMergedState2[1];
    var _useState3 = useState(function() {
      return props2.tabs.findIndex(function(tab) {
        return tab.key === mergedActiveKey.value;
      });
    }), _useState4 = _slicedToArray(_useState3, 2), activeIndex = _useState4[0], setActiveIndex = _useState4[1];
    watchEffect(function() {
      var newActiveIndex = props2.tabs.findIndex(function(tab) {
        return tab.key === mergedActiveKey.value;
      });
      if (newActiveIndex === -1) {
        var _props$tabs$newActive;
        newActiveIndex = Math.max(0, Math.min(activeIndex.value, props2.tabs.length - 1));
        setMergedActiveKey((_props$tabs$newActive = props2.tabs[newActiveIndex]) === null || _props$tabs$newActive === void 0 ? void 0 : _props$tabs$newActive.key);
      }
      setActiveIndex(newActiveIndex);
    });
    var _useMergedState3 = useMergedState(null, {
      value: computed(function() {
        return props2.id;
      })
    }), _useMergedState4 = _slicedToArray(_useMergedState3, 2), mergedId = _useMergedState4[0];
    _useMergedState4[1];
    var mergedTabPosition = computed(function() {
      if (mobile.value && !["left", "right"].includes(props2.tabPosition)) {
        return "top";
      } else {
        return props2.tabPosition;
      }
    });
    var onInternalTabClick = function onInternalTabClick2(key2, e) {
      var _props$onTabClick;
      (_props$onTabClick = props2.onTabClick) === null || _props$onTabClick === void 0 ? void 0 : _props$onTabClick.call(props2, key2, e);
      var isActiveChanged = key2 !== mergedActiveKey.value;
      setMergedActiveKey(key2);
      if (isActiveChanged) {
        var _props$onChange;
        (_props$onChange = props2.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props2, key2);
      }
    };
    useProvideTabs({
      tabs: computed(function() {
        return props2.tabs;
      }),
      prefixCls
    });
    return function() {
      var _classNames;
      var id = props2.id, type = props2.type, tabBarGutter = props2.tabBarGutter, tabBarStyle = props2.tabBarStyle, locale2 = props2.locale, destroyInactiveTabPane = props2.destroyInactiveTabPane, _props$renderTabBar = props2.renderTabBar, renderTabBar = _props$renderTabBar === void 0 ? slots.renderTabBar : _props$renderTabBar, onTabScroll = props2.onTabScroll, hideAdd = props2.hideAdd, centered = props2.centered;
      var sharedProps = {
        id: mergedId.value,
        activeKey: mergedActiveKey.value,
        animated: mergedAnimated.value,
        tabPosition: mergedTabPosition.value,
        rtl: rtl2.value,
        mobile: mobile.value
      };
      var editable;
      if (type === "editable-card") {
        editable = {
          onEdit: function onEdit(editType, _ref2) {
            var _props$onEdit;
            var key2 = _ref2.key, event = _ref2.event;
            (_props$onEdit = props2.onEdit) === null || _props$onEdit === void 0 ? void 0 : _props$onEdit.call(props2, editType === "add" ? event : key2, editType);
          },
          removeIcon: function removeIcon() {
            return createVNode(CloseOutlined, null, null);
          },
          addIcon: slots.addIcon ? slots.addIcon : function() {
            return createVNode(PlusOutlined, null, null);
          },
          showAdd: hideAdd !== true
        };
      }
      var tabNavBar;
      var tabNavBarProps = _objectSpread(_objectSpread({}, sharedProps), {}, {
        moreTransitionName: "".concat(rootPrefixCls.value, "-slide-up"),
        editable,
        locale: locale2,
        tabBarGutter,
        onTabClick: onInternalTabClick,
        onTabScroll,
        style: tabBarStyle
      });
      if (renderTabBar) {
        tabNavBar = renderTabBar(_objectSpread(_objectSpread({}, tabNavBarProps), {}, {
          DefaultTabBar: TabNavList
        }));
      } else {
        tabNavBar = createVNode(TabNavList, tabNavBarProps, pick$1(slots, ["moreIcon", "leftExtra", "rightExtra", "tabBarExtraContent"]));
      }
      var pre = prefixCls.value;
      return createVNode("div", _objectSpread(_objectSpread({}, attrs), {}, {
        "id": id,
        "class": classNames(pre, "".concat(pre, "-").concat(mergedTabPosition.value), (_classNames = {}, _defineProperty(_classNames, "".concat(pre, "-").concat(size.value), size.value), _defineProperty(_classNames, "".concat(pre, "-card"), ["card", "editable-card"].includes(type)), _defineProperty(_classNames, "".concat(pre, "-editable-card"), type === "editable-card"), _defineProperty(_classNames, "".concat(pre, "-centered"), centered), _defineProperty(_classNames, "".concat(pre, "-mobile"), mobile.value), _defineProperty(_classNames, "".concat(pre, "-editable"), type === "editable-card"), _defineProperty(_classNames, "".concat(pre, "-rtl"), rtl2.value), _classNames), attrs.class)
      }), [tabNavBar, createVNode(TabPanelList, _objectSpread(_objectSpread({
        "destroyInactiveTabPane": destroyInactiveTabPane
      }, sharedProps), {}, {
        "animated": mergedAnimated.value
      }), null)]);
    };
  }
});
const Tabs = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ATabs",
  inheritAttrs: false,
  props: initDefaultProps$1(tabsProps(), {
    tabPosition: "top",
    animated: {
      inkBar: true,
      tabPane: false
    }
  }),
  slots: ["tabBarExtraContent", "leftExtra", "rightExtra", "moreIcon", "addIcon", "removeIcon", "renderTabBar"],
  setup: function setup60(props2, _ref3) {
    var attrs = _ref3.attrs, slots = _ref3.slots, emit = _ref3.emit;
    var handleChange2 = function handleChange3(key2) {
      emit("update:activeKey", key2);
      emit("change", key2);
    };
    return function() {
      var _slots$default;
      var tabs = parseTabList(flattenChildren((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)));
      return createVNode(InternalTabs, _objectSpread(_objectSpread(_objectSpread({}, omit$2(props2, ["onUpdate:activeKey"])), attrs), {}, {
        "onChange": handleChange2,
        "tabs": tabs
      }), slots);
    };
  }
});
var tabPaneProps = function tabPaneProps2() {
  return {
    tab: PropTypes$1.any,
    disabled: {
      type: Boolean
    },
    forceRender: {
      type: Boolean
    },
    closable: {
      type: Boolean
    },
    animated: {
      type: Boolean
    },
    active: {
      type: Boolean
    },
    destroyInactiveTabPane: {
      type: Boolean
    },
    prefixCls: {
      type: String
    },
    tabKey: {
      type: [String, Number]
    },
    id: {
      type: String
    }
  };
};
const __unplugin_components_1$2 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ATabPane",
  inheritAttrs: false,
  __ANT_TAB_PANE: true,
  props: tabPaneProps(),
  slots: ["closeIcon", "tab"],
  setup: function setup61(props2, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots;
    var visited = ref(props2.forceRender);
    watch([function() {
      return props2.active;
    }, function() {
      return props2.destroyInactiveTabPane;
    }], function() {
      if (props2.active) {
        visited.value = true;
      } else if (props2.destroyInactiveTabPane) {
        visited.value = false;
      }
    }, {
      immediate: true
    });
    var mergedStyle = computed(function() {
      if (!props2.active) {
        if (props2.animated) {
          return {
            visibility: "hidden",
            height: 0,
            overflowY: "hidden"
          };
        } else {
          return {
            display: "none"
          };
        }
      }
      return {};
    });
    return function() {
      var _slots$default;
      var prefixCls = props2.prefixCls, forceRender = props2.forceRender, id = props2.id, active = props2.active, tabKey = props2.tabKey;
      return createVNode("div", {
        "id": id && "".concat(id, "-panel-").concat(tabKey),
        "role": "tabpanel",
        "tabindex": active ? 0 : -1,
        "aria-labelledby": id && "".concat(id, "-tab-").concat(tabKey),
        "aria-hidden": !active,
        "style": [mergedStyle.value, attrs.style],
        "class": ["".concat(prefixCls, "-tabpane"), active && "".concat(prefixCls, "-tabpane-active"), attrs.class]
      }, [(active || visited.value || forceRender) && ((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots))]);
    };
  }
});
Tabs.TabPane = __unplugin_components_1$2;
Tabs.install = function(app) {
  app.component(Tabs.name, Tabs);
  app.component(__unplugin_components_1$2.name, __unplugin_components_1$2);
  return app;
};
var canUseDocElement = function canUseDocElement2() {
  return canUseDom();
};
const useFlexGapSupport = function() {
  var flexible = ref(false);
  return flexible;
};
var RowContextKey = Symbol("rowContextKey");
var useProvideRow = function useProvideRow2(state) {
  provide(RowContextKey, state);
};
var useInjectRow = function useInjectRow2() {
  return inject(RowContextKey, {
    gutter: computed(function() {
      return void 0;
    }),
    wrap: computed(function() {
      return void 0;
    }),
    supportFlexGap: computed(function() {
      return void 0;
    })
  });
};
tuple("top", "middle", "bottom", "stretch");
tuple("start", "end", "center", "space-around", "space-between");
var rowProps = function rowProps2() {
  return {
    align: String,
    justify: String,
    prefixCls: String,
    gutter: {
      type: [Number, Array, Object],
      default: 0
    },
    wrap: {
      type: Boolean,
      default: void 0
    }
  };
};
var ARow = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ARow",
  props: rowProps(),
  setup: function setup62(props2, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject("row", props2), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    var screens2 = ref({
      xs: true,
      sm: true,
      md: true,
      lg: true,
      xl: true,
      xxl: true,
      xxxl: true
    });
    var supportFlexGap = useFlexGapSupport();
    var gutter = computed(function() {
      var results = [0, 0];
      var _props$gutter = props2.gutter, gutter2 = _props$gutter === void 0 ? 0 : _props$gutter;
      var normalizedGutter = Array.isArray(gutter2) ? gutter2 : [gutter2, 0];
      normalizedGutter.forEach(function(g, index2) {
        if (_typeof(g) === "object") {
          for (var i = 0; i < responsiveArray.length; i++) {
            var breakpoint = responsiveArray[i];
            if (screens2.value[breakpoint] && g[breakpoint] !== void 0) {
              results[index2] = g[breakpoint];
              break;
            }
          }
        } else {
          results[index2] = g || 0;
        }
      });
      return results;
    });
    useProvideRow({
      gutter,
      supportFlexGap,
      wrap: computed(function() {
        return props2.wrap;
      })
    });
    var classes = computed(function() {
      var _classNames;
      return classNames(prefixCls.value, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-no-wrap"), props2.wrap === false), _defineProperty(_classNames, "".concat(prefixCls.value, "-").concat(props2.justify), props2.justify), _defineProperty(_classNames, "".concat(prefixCls.value, "-").concat(props2.align), props2.align), _defineProperty(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"), _classNames));
    });
    var rowStyle = computed(function() {
      var gt = gutter.value;
      var style = {};
      var horizontalGutter = gt[0] > 0 ? "".concat(gt[0] / -2, "px") : void 0;
      var verticalGutter = gt[1] > 0 ? "".concat(gt[1] / -2, "px") : void 0;
      if (horizontalGutter) {
        style.marginLeft = horizontalGutter;
        style.marginRight = horizontalGutter;
      }
      if (supportFlexGap.value) {
        style.rowGap = "".concat(gt[1], "px");
      } else if (verticalGutter) {
        style.marginTop = verticalGutter;
        style.marginBottom = verticalGutter;
      }
      return style;
    });
    return function() {
      var _slots$default;
      return createVNode("div", {
        "class": classes.value,
        "style": rowStyle.value
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});
const Row$1 = ARow;
function parseFlex(flex) {
  if (typeof flex === "number") {
    return "".concat(flex, " ").concat(flex, " auto");
  }
  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return "0 0 ".concat(flex);
  }
  return flex;
}
var colProps = function colProps2() {
  return {
    span: [String, Number],
    order: [String, Number],
    offset: [String, Number],
    push: [String, Number],
    pull: [String, Number],
    xs: {
      type: [String, Number, Object],
      default: void 0
    },
    sm: {
      type: [String, Number, Object],
      default: void 0
    },
    md: {
      type: [String, Number, Object],
      default: void 0
    },
    lg: {
      type: [String, Number, Object],
      default: void 0
    },
    xl: {
      type: [String, Number, Object],
      default: void 0
    },
    xxl: {
      type: [String, Number, Object],
      default: void 0
    },
    xxxl: {
      type: [String, Number, Object],
      default: void 0
    },
    prefixCls: String,
    flex: [String, Number]
  };
};
const Col$1 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ACol",
  props: colProps(),
  setup: function setup63(props2, _ref) {
    var slots = _ref.slots;
    var _useInjectRow = useInjectRow(), gutter = _useInjectRow.gutter, supportFlexGap = _useInjectRow.supportFlexGap, wrap = _useInjectRow.wrap;
    var _useConfigInject = useConfigInject("col", props2), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    var classes = computed(function() {
      var _classNames;
      var span = props2.span, order = props2.order, offset2 = props2.offset, push = props2.push, pull = props2.pull;
      var pre = prefixCls.value;
      var sizeClassObj = {};
      ["xs", "sm", "md", "lg", "xl", "xxl", "xxxl"].forEach(function(size) {
        var _objectSpread2;
        var sizeProps = {};
        var propSize = props2[size];
        if (typeof propSize === "number") {
          sizeProps.span = propSize;
        } else if (_typeof(propSize) === "object") {
          sizeProps = propSize || {};
        }
        sizeClassObj = _objectSpread(_objectSpread({}, sizeClassObj), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, "".concat(pre, "-").concat(size, "-").concat(sizeProps.span), sizeProps.span !== void 0), _defineProperty(_objectSpread2, "".concat(pre, "-").concat(size, "-order-").concat(sizeProps.order), sizeProps.order || sizeProps.order === 0), _defineProperty(_objectSpread2, "".concat(pre, "-").concat(size, "-offset-").concat(sizeProps.offset), sizeProps.offset || sizeProps.offset === 0), _defineProperty(_objectSpread2, "".concat(pre, "-").concat(size, "-push-").concat(sizeProps.push), sizeProps.push || sizeProps.push === 0), _defineProperty(_objectSpread2, "".concat(pre, "-").concat(size, "-pull-").concat(sizeProps.pull), sizeProps.pull || sizeProps.pull === 0), _defineProperty(_objectSpread2, "".concat(pre, "-rtl"), direction.value === "rtl"), _objectSpread2));
      });
      return classNames(pre, (_classNames = {}, _defineProperty(_classNames, "".concat(pre, "-").concat(span), span !== void 0), _defineProperty(_classNames, "".concat(pre, "-order-").concat(order), order), _defineProperty(_classNames, "".concat(pre, "-offset-").concat(offset2), offset2), _defineProperty(_classNames, "".concat(pre, "-push-").concat(push), push), _defineProperty(_classNames, "".concat(pre, "-pull-").concat(pull), pull), _classNames), sizeClassObj);
    });
    var mergedStyle = computed(function() {
      var flex = props2.flex;
      var gutterVal = gutter.value;
      var style = {};
      if (gutterVal && gutterVal[0] > 0) {
        var horizontalGutter = "".concat(gutterVal[0] / 2, "px");
        style.paddingLeft = horizontalGutter;
        style.paddingRight = horizontalGutter;
      }
      if (gutterVal && gutterVal[1] > 0 && !supportFlexGap.value) {
        var verticalGutter = "".concat(gutterVal[1] / 2, "px");
        style.paddingTop = verticalGutter;
        style.paddingBottom = verticalGutter;
      }
      if (flex) {
        style.flex = parseFlex(flex);
        if (wrap.value === false && !style.minWidth) {
          style.minWidth = 0;
        }
      }
      return style;
    });
    return function() {
      var _slots$default;
      return createVNode("div", {
        "class": classes.value,
        "style": mergedStyle.value
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});
const Row = withInstall(Row$1);
const Col = withInstall(Col$1);
var TabPane = Tabs.TabPane;
var cardProps = function cardProps2() {
  return {
    prefixCls: String,
    title: PropTypes$1.any,
    extra: PropTypes$1.any,
    bordered: {
      type: Boolean,
      default: true
    },
    bodyStyle: {
      type: Object,
      default: void 0
    },
    headStyle: {
      type: Object,
      default: void 0
    },
    loading: {
      type: Boolean,
      default: false
    },
    hoverable: {
      type: Boolean,
      default: false
    },
    type: {
      type: String
    },
    size: {
      type: String
    },
    actions: PropTypes$1.any,
    tabList: {
      type: Array
    },
    tabBarExtraContent: PropTypes$1.any,
    activeTabKey: String,
    defaultActiveTabKey: String,
    cover: PropTypes$1.any,
    onTabChange: {
      type: Function
    }
  };
};
var Card$2 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ACard",
  props: cardProps(),
  slots: ["title", "extra", "tabBarExtraContent", "actions", "cover", "customTab"],
  setup: function setup64(props2, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject("card", props2), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction, size = _useConfigInject.size;
    var getAction = function getAction2(actions) {
      var actionList = actions.map(function(action, index2) {
        return isVNode(action) && !isEmptyElement(action) || !isVNode(action) ? createVNode("li", {
          "style": {
            width: "".concat(100 / actions.length, "%")
          },
          "key": "action-".concat(index2)
        }, [createVNode("span", null, [action])]) : null;
      });
      return actionList;
    };
    var triggerTabChange = function triggerTabChange2(key2) {
      var _props$onTabChange;
      (_props$onTabChange = props2.onTabChange) === null || _props$onTabChange === void 0 ? void 0 : _props$onTabChange.call(props2, key2);
    };
    var isContainGrid = function isContainGrid2() {
      var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var containGrid;
      obj.forEach(function(element) {
        if (element && isPlainObject$1(element.type) && element.type.__ANT_CARD_GRID) {
          containGrid = true;
        }
      });
      return containGrid;
    };
    return function() {
      var _slots$tabBarExtraCon, _slots$title, _slots$extra, _slots$actions, _slots$cover, _slots$default, _classString, _tabsProps;
      var _props$headStyle = props2.headStyle, headStyle = _props$headStyle === void 0 ? {} : _props$headStyle, _props$bodyStyle = props2.bodyStyle, bodyStyle = _props$bodyStyle === void 0 ? {} : _props$bodyStyle, loading = props2.loading, _props$bordered = props2.bordered, bordered = _props$bordered === void 0 ? true : _props$bordered, type = props2.type, tabList = props2.tabList, hoverable = props2.hoverable, activeTabKey = props2.activeTabKey, defaultActiveTabKey = props2.defaultActiveTabKey, _props$tabBarExtraCon = props2.tabBarExtraContent, tabBarExtraContent = _props$tabBarExtraCon === void 0 ? filterEmptyWithUndefined((_slots$tabBarExtraCon = slots.tabBarExtraContent) === null || _slots$tabBarExtraCon === void 0 ? void 0 : _slots$tabBarExtraCon.call(slots)) : _props$tabBarExtraCon, _props$title = props2.title, title = _props$title === void 0 ? filterEmptyWithUndefined((_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots)) : _props$title, _props$extra = props2.extra, extra = _props$extra === void 0 ? filterEmptyWithUndefined((_slots$extra = slots.extra) === null || _slots$extra === void 0 ? void 0 : _slots$extra.call(slots)) : _props$extra, _props$actions = props2.actions, actions = _props$actions === void 0 ? filterEmptyWithUndefined((_slots$actions = slots.actions) === null || _slots$actions === void 0 ? void 0 : _slots$actions.call(slots)) : _props$actions, _props$cover = props2.cover, cover = _props$cover === void 0 ? filterEmptyWithUndefined((_slots$cover = slots.cover) === null || _slots$cover === void 0 ? void 0 : _slots$cover.call(slots)) : _props$cover;
      var children = flattenChildren((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      var pre = prefixCls.value;
      var classString = (_classString = {}, _defineProperty(_classString, "".concat(pre), true), _defineProperty(_classString, "".concat(pre, "-loading"), loading), _defineProperty(_classString, "".concat(pre, "-bordered"), bordered), _defineProperty(_classString, "".concat(pre, "-hoverable"), !!hoverable), _defineProperty(_classString, "".concat(pre, "-contain-grid"), isContainGrid(children)), _defineProperty(_classString, "".concat(pre, "-contain-tabs"), tabList && tabList.length), _defineProperty(_classString, "".concat(pre, "-").concat(size.value), size.value), _defineProperty(_classString, "".concat(pre, "-type-").concat(type), !!type), _defineProperty(_classString, "".concat(pre, "-rtl"), direction.value === "rtl"), _classString);
      var loadingBlockStyle = bodyStyle.padding === 0 || bodyStyle.padding === "0px" ? {
        padding: "24px"
      } : void 0;
      var block = createVNode("div", {
        "class": "".concat(pre, "-loading-block")
      }, null);
      var loadingBlock = createVNode("div", {
        "class": "".concat(pre, "-loading-content"),
        "style": loadingBlockStyle
      }, [createVNode(Row, {
        "gutter": 8
      }, {
        default: function _default4() {
          return [createVNode(Col, {
            "span": 22
          }, {
            default: function _default5() {
              return [block];
            }
          })];
        }
      }), createVNode(Row, {
        "gutter": 8
      }, {
        default: function _default4() {
          return [createVNode(Col, {
            "span": 8
          }, {
            default: function _default5() {
              return [block];
            }
          }), createVNode(Col, {
            "span": 15
          }, {
            default: function _default5() {
              return [block];
            }
          })];
        }
      }), createVNode(Row, {
        "gutter": 8
      }, {
        default: function _default4() {
          return [createVNode(Col, {
            "span": 6
          }, {
            default: function _default5() {
              return [block];
            }
          }), createVNode(Col, {
            "span": 18
          }, {
            default: function _default5() {
              return [block];
            }
          })];
        }
      }), createVNode(Row, {
        "gutter": 8
      }, {
        default: function _default4() {
          return [createVNode(Col, {
            "span": 13
          }, {
            default: function _default5() {
              return [block];
            }
          }), createVNode(Col, {
            "span": 9
          }, {
            default: function _default5() {
              return [block];
            }
          })];
        }
      }), createVNode(Row, {
        "gutter": 8
      }, {
        default: function _default4() {
          return [createVNode(Col, {
            "span": 4
          }, {
            default: function _default5() {
              return [block];
            }
          }), createVNode(Col, {
            "span": 3
          }, {
            default: function _default5() {
              return [block];
            }
          }), createVNode(Col, {
            "span": 16
          }, {
            default: function _default5() {
              return [block];
            }
          })];
        }
      })]);
      var hasActiveTabKey = activeTabKey !== void 0;
      var tabsProps3 = (_tabsProps = {
        size: "large"
      }, _defineProperty(_tabsProps, hasActiveTabKey ? "activeKey" : "defaultActiveKey", hasActiveTabKey ? activeTabKey : defaultActiveTabKey), _defineProperty(_tabsProps, "onChange", triggerTabChange), _defineProperty(_tabsProps, "class", "".concat(pre, "-head-tabs")), _tabsProps);
      var head;
      var tabs = tabList && tabList.length ? createVNode(Tabs, tabsProps3, {
        default: function _default4() {
          return [tabList.map(function(item) {
            var temp = item.tab, itemSlots = item.slots;
            var name2 = itemSlots === null || itemSlots === void 0 ? void 0 : itemSlots.tab;
            devWarning(!itemSlots, "Card", "tabList slots is deprecated, Please use `customTab` instead.");
            var tab = temp !== void 0 ? temp : slots[name2] ? slots[name2](item) : null;
            tab = renderSlot(slots, "customTab", item, function() {
              return [tab];
            });
            return createVNode(TabPane, {
              "tab": tab,
              "key": item.key,
              "disabled": item.disabled
            }, null);
          })];
        },
        rightExtra: tabBarExtraContent ? function() {
          return tabBarExtraContent;
        } : null
      }) : null;
      if (title || extra || tabs) {
        head = createVNode("div", {
          "class": "".concat(pre, "-head"),
          "style": headStyle
        }, [createVNode("div", {
          "class": "".concat(pre, "-head-wrapper")
        }, [title && createVNode("div", {
          "class": "".concat(pre, "-head-title")
        }, [title]), extra && createVNode("div", {
          "class": "".concat(pre, "-extra")
        }, [extra])]), tabs]);
      }
      var coverDom = cover ? createVNode("div", {
        "class": "".concat(pre, "-cover")
      }, [cover]) : null;
      var body = createVNode("div", {
        "class": "".concat(pre, "-body"),
        "style": bodyStyle
      }, [loading ? loadingBlock : children]);
      var actionDom = actions && actions.length ? createVNode("ul", {
        "class": "".concat(pre, "-actions")
      }, [getAction(actions)]) : null;
      return createVNode("div", {
        "class": classString,
        "ref": "cardContainerRef"
      }, [head, coverDom, children && children.length ? body : null, actionDom]);
    };
  }
});
const Card$3 = Card$2;
var cardMetaProps = function cardMetaProps2() {
  return {
    prefixCls: String,
    title: PropTypes$1.any,
    description: PropTypes$1.any,
    avatar: PropTypes$1.any
  };
};
const Meta = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ACardMeta",
  props: cardMetaProps(),
  slots: ["title", "description", "avatar"],
  setup: function setup65(props2, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject("card", props2), prefixCls = _useConfigInject.prefixCls;
    return function() {
      var classString = _defineProperty({}, "".concat(prefixCls.value, "-meta"), true);
      var avatar = getPropsSlot(slots, props2, "avatar");
      var title = getPropsSlot(slots, props2, "title");
      var description = getPropsSlot(slots, props2, "description");
      var avatarDom = avatar ? createVNode("div", {
        "class": "".concat(prefixCls.value, "-meta-avatar")
      }, [avatar]) : null;
      var titleDom = title ? createVNode("div", {
        "class": "".concat(prefixCls.value, "-meta-title")
      }, [title]) : null;
      var descriptionDom = description ? createVNode("div", {
        "class": "".concat(prefixCls.value, "-meta-description")
      }, [description]) : null;
      var MetaDetail = titleDom || descriptionDom ? createVNode("div", {
        "class": "".concat(prefixCls.value, "-meta-detail")
      }, [titleDom, descriptionDom]) : null;
      return createVNode("div", {
        "class": classString
      }, [avatarDom, MetaDetail]);
    };
  }
});
var cardGridProps = function cardGridProps2() {
  return {
    prefixCls: String,
    hoverable: {
      type: Boolean,
      default: true
    }
  };
};
const Grid = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ACardGrid",
  __ANT_CARD_GRID: true,
  props: cardGridProps(),
  setup: function setup66(props2, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject("card", props2), prefixCls = _useConfigInject.prefixCls;
    var classNames2 = computed(function() {
      var _ref2;
      return _ref2 = {}, _defineProperty(_ref2, "".concat(prefixCls.value, "-grid"), true), _defineProperty(_ref2, "".concat(prefixCls.value, "-grid-hoverable"), props2.hoverable), _ref2;
    });
    return function() {
      var _slots$default;
      return createVNode("div", {
        "class": classNames2.value
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});
Card$3.Meta = Meta;
Card$3.Grid = Grid;
Card$3.install = function(app) {
  app.component(Card$3.name, Card$3);
  app.component(Meta.name, Meta);
  app.component(Grid.name, Grid);
  return app;
};
var now$1 = function() {
  return root$1.Date.now();
};
const now$2 = now$1;
var FUNC_ERROR_TEXT = "Expected a function";
var nativeMax$1 = Math.max, nativeMin$1 = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject$1(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax$1(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin$1(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$2();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now$2());
  }
  function debounced() {
    var time = now$2(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
function arrayEach(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (iteratee(array[index2], index2, array) === false) {
      break;
    }
  }
  return array;
}
function copyObject(source, props2, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index2 = -1, length = props2.length;
  while (++index2 < length) {
    var key2 = props2[index2];
    var newValue = customizer ? customizer(object[key2], source[key2], key2, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key2];
    }
    if (isNew) {
      baseAssignValue(object, key2, newValue);
    } else {
      assignValue(object, key2, newValue);
    }
  }
  return object;
}
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key2 in Object(object)) {
      result.push(key2);
    }
  }
  return result;
}
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject$1(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result = [];
  for (var key2 in object) {
    if (!(key2 == "constructor" && (isProto || !hasOwnProperty$1.call(object, key2)))) {
      result.push(key2);
    }
  }
  return result;
}
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root$1.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
function copyArray(source, array) {
  var index2 = -1, length = source.length;
  array || (array = Array(length));
  while (++index2 < length) {
    array[index2] = source[index2];
  }
  return array;
}
function copySymbols(source, object) {
  return copyObject(source, getSymbols$1(source), object);
}
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols$1(object));
    object = getPrototype$1(object);
  }
  return result;
};
const getSymbolsIn$1 = getSymbolsIn;
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn$1(source), object);
}
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn$1);
}
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function initCloneArray(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object);
    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);
    case dataViewTag$1:
      return cloneDataView(object, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$2:
      return new Ctor();
    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);
    case regexpTag$1:
      return cloneRegExp(object);
    case setTag$2:
      return new Ctor();
    case symbolTag$1:
      return cloneSymbol(object);
  }
}
var objectCreate = Object.create;
var baseCreate = function() {
  function object() {
  }
  return function(proto2) {
    if (!isObject$1(proto2)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto2);
    }
    object.prototype = proto2;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
const baseCreate$1 = baseCreate;
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate$1(getPrototype$1(object)) : {};
}
var mapTag$1 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike(value) && getTag$1(value) == mapTag$1;
}
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
const isMap$1 = isMap;
var setTag$1 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike(value) && getTag$1(value) == setTag$1;
}
var nodeIsSet = nodeUtil$1 && nodeUtil$1.isSet;
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
const isSet$1 = isSet;
var CLONE_DEEP_FLAG$2 = 1, CLONE_FLAT_FLAG$1 = 2, CLONE_SYMBOLS_FLAG$2 = 4;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone(value, bitmask, customizer, key2, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$2, isFlat = bitmask & CLONE_FLAT_FLAG$1, isFull = bitmask & CLONE_SYMBOLS_FLAG$2;
  if (customizer) {
    result = object ? customizer(value, key2, object, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject$1(value)) {
    return value;
  }
  var isArr = isArray$1(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag$1(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer$1(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet$1(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap$1(value)) {
    value.forEach(function(subValue, key3) {
      result.set(key3, baseClone(subValue, bitmask, customizer, key3, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props2 = isArr ? void 0 : keysFunc(value);
  arrayEach(props2 || value, function(subValue, key3) {
    if (props2) {
      key3 = subValue;
      subValue = value[key3];
    }
    assignValue(result, key3, baseClone(subValue, bitmask, customizer, key3, value, stack));
  });
  return result;
}
var CLONE_DEEP_FLAG$1 = 1, CLONE_SYMBOLS_FLAG$1 = 4;
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG$1 | CLONE_SYMBOLS_FLAG$1);
}
function toArray$2(value) {
  if (value === void 0 || value === null) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}
function get$1(entity, path) {
  var current2 = entity;
  for (var i = 0; i < path.length; i += 1) {
    if (current2 === null || current2 === void 0) {
      return void 0;
    }
    current2 = current2[path[i]];
  }
  return current2;
}
function internalSet(entity, paths, value, removeIfUndefined) {
  if (!paths.length) {
    return value;
  }
  var _paths = _toArray(paths), path = _paths[0], restPath = _paths.slice(1);
  var clone;
  if (!entity && typeof path === "number") {
    clone = [];
  } else if (Array.isArray(entity)) {
    clone = _toConsumableArray(entity);
  } else {
    clone = _objectSpread({}, entity);
  }
  if (removeIfUndefined && value === void 0 && restPath.length === 1) {
    delete clone[path][restPath[0]];
  } else {
    clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
  }
  return clone;
}
function set$1(entity, paths, value) {
  var removeIfUndefined = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (paths.length && removeIfUndefined && value === void 0 && !get$1(entity, paths.slice(0, -1))) {
    return entity;
  }
  return internalSet(entity, paths, value, removeIfUndefined);
}
function getNamePath(path) {
  return toArray$2(path);
}
function getValue(store, namePath) {
  var value = get$1(store, namePath);
  return value;
}
function setValue(store, namePath, value) {
  var removeIfUndefined = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  var newStore = set$1(store, namePath, value, removeIfUndefined);
  return newStore;
}
function containsNamePath(namePathList, namePath) {
  return namePathList && namePathList.some(function(path) {
    return matchNamePath(path, namePath);
  });
}
function isObject2(obj) {
  return _typeof(obj) === "object" && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
}
function internalSetValues(store, values) {
  var newStore = Array.isArray(store) ? _toConsumableArray(store) : _objectSpread({}, store);
  if (!values) {
    return newStore;
  }
  Object.keys(values).forEach(function(key2) {
    var prevValue = newStore[key2];
    var value = values[key2];
    var recursive = isObject2(prevValue) && isObject2(value);
    newStore[key2] = recursive ? internalSetValues(prevValue, value || {}) : value;
  });
  return newStore;
}
function setValues(store) {
  for (var _len = arguments.length, restValues = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    restValues[_key - 1] = arguments[_key];
  }
  return restValues.reduce(function(current2, newStore) {
    return internalSetValues(current2, newStore);
  }, store);
}
function cloneByNamePathList(store, namePathList) {
  var newStore = {};
  namePathList.forEach(function(namePath) {
    var value = getValue(store, namePath);
    newStore = setValue(newStore, namePath, value);
  });
  return newStore;
}
function matchNamePath(namePath, changedNamePath) {
  if (!namePath || !changedNamePath || namePath.length !== changedNamePath.length) {
    return false;
  }
  return namePath.every(function(nameUnit, i) {
    return changedNamePath[i] === nameUnit;
  });
}
var typeTemplate = "'${name}' is not a valid ${type}";
var defaultValidateMessages = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
};
var AsyncValidator = RawAsyncValidator;
function replaceMessage(template, kv) {
  return template.replace(/\$\{\w+\}/g, function(str) {
    var key2 = str.slice(2, -1);
    return kv[key2];
  });
}
function validateRule(_x, _x2, _x3, _x4, _x5) {
  return _validateRule.apply(this, arguments);
}
function _validateRule() {
  _validateRule = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime.mark(function _callee2(name2, value, rule, options, messageVariables) {
    var cloneRule, subRuleField, validator, messages, result, subResults, kv, fillVariableResult;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            cloneRule = _objectSpread({}, rule);
            delete cloneRule.ruleIndex;
            delete cloneRule.trigger;
            subRuleField = null;
            if (cloneRule && cloneRule.type === "array" && cloneRule.defaultField) {
              subRuleField = cloneRule.defaultField;
              delete cloneRule.defaultField;
            }
            validator = new AsyncValidator(_defineProperty({}, name2, [cloneRule]));
            messages = setValues({}, defaultValidateMessages, options.validateMessages);
            validator.messages(messages);
            result = [];
            _context2.prev = 9;
            _context2.next = 12;
            return Promise.resolve(validator.validate(_defineProperty({}, name2, value), _objectSpread({}, options)));
          case 12:
            _context2.next = 17;
            break;
          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](9);
            if (_context2.t0.errors) {
              result = _context2.t0.errors.map(function(_ref4, index2) {
                var message2 = _ref4.message;
                return isValidElement(message2) ? cloneVNode(message2, {
                  key: "error_".concat(index2)
                }) : message2;
              });
            } else {
              console.error(_context2.t0);
              result = [messages.default()];
            }
          case 17:
            if (!(!result.length && subRuleField)) {
              _context2.next = 22;
              break;
            }
            _context2.next = 20;
            return Promise.all(value.map(function(subValue, i) {
              return validateRule("".concat(name2, ".").concat(i), subValue, subRuleField, options, messageVariables);
            }));
          case 20:
            subResults = _context2.sent;
            return _context2.abrupt("return", subResults.reduce(function(prev2, errors) {
              return [].concat(_toConsumableArray(prev2), _toConsumableArray(errors));
            }, []));
          case 22:
            kv = _objectSpread(_objectSpread({}, rule), {}, {
              name: name2,
              enum: (rule.enum || []).join(", ")
            }, messageVariables);
            fillVariableResult = result.map(function(error) {
              if (typeof error === "string") {
                return replaceMessage(error, kv);
              }
              return error;
            });
            return _context2.abrupt("return", fillVariableResult);
          case 25:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[9, 14]]);
  }));
  return _validateRule.apply(this, arguments);
}
function validateRules(namePath, value, rules, options, validateFirst, messageVariables) {
  var name2 = namePath.join(".");
  var filledRules = rules.map(function(currentRule, ruleIndex) {
    var originValidatorFunc = currentRule.validator;
    var cloneRule = _objectSpread(_objectSpread({}, currentRule), {}, {
      ruleIndex
    });
    if (originValidatorFunc) {
      cloneRule.validator = function(rule, val, callback) {
        var hasPromise = false;
        var wrappedCallback = function wrappedCallback2() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          Promise.resolve().then(function() {
            warning$1(!hasPromise, "Your validator function has already return a promise. `callback` will be ignored.");
            if (!hasPromise) {
              callback.apply(void 0, args);
            }
          });
        };
        var promise = originValidatorFunc(rule, val, wrappedCallback);
        hasPromise = promise && typeof promise.then === "function" && typeof promise.catch === "function";
        warning$1(hasPromise, "`callback` is deprecated. Please return a promise instead.");
        if (hasPromise) {
          promise.then(function() {
            callback();
          }).catch(function(err) {
            callback(err || " ");
          });
        }
      };
    }
    return cloneRule;
  }).sort(function(_ref, _ref2) {
    var w1 = _ref.warningOnly, i1 = _ref.ruleIndex;
    var w2 = _ref2.warningOnly, i2 = _ref2.ruleIndex;
    if (!!w1 === !!w2) {
      return i1 - i2;
    }
    if (w1) {
      return 1;
    }
    return -1;
  });
  var summaryPromise;
  if (validateFirst === true) {
    summaryPromise = new Promise(/* @__PURE__ */ function() {
      var _ref3 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime.mark(function _callee(resolve, reject) {
        var i, rule, errors;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                i = 0;
              case 1:
                if (!(i < filledRules.length)) {
                  _context.next = 12;
                  break;
                }
                rule = filledRules[i];
                _context.next = 5;
                return validateRule(name2, value, rule, options, messageVariables);
              case 5:
                errors = _context.sent;
                if (!errors.length) {
                  _context.next = 9;
                  break;
                }
                reject([{
                  errors,
                  rule
                }]);
                return _context.abrupt("return");
              case 9:
                i += 1;
                _context.next = 1;
                break;
              case 12:
                resolve([]);
              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return function(_x6, _x7) {
        return _ref3.apply(this, arguments);
      };
    }());
  } else {
    var rulePromises = filledRules.map(function(rule) {
      return validateRule(name2, value, rule, options, messageVariables).then(function(errors) {
        return {
          errors,
          rule
        };
      });
    });
    summaryPromise = (validateFirst ? finishOnFirstFailed(rulePromises) : finishOnAllFailed(rulePromises)).then(function(errors) {
      return Promise.reject(errors);
    });
  }
  summaryPromise.catch(function(e) {
    return e;
  });
  return summaryPromise;
}
function finishOnAllFailed(_x8) {
  return _finishOnAllFailed.apply(this, arguments);
}
function _finishOnAllFailed() {
  _finishOnAllFailed = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime.mark(function _callee3(rulePromises) {
    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", Promise.all(rulePromises).then(function(errorsList) {
              var _ref5;
              var errors = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(errorsList));
              return errors;
            }));
          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _finishOnAllFailed.apply(this, arguments);
}
function finishOnFirstFailed(_x9) {
  return _finishOnFirstFailed.apply(this, arguments);
}
function _finishOnFirstFailed() {
  _finishOnFirstFailed = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime.mark(function _callee4(rulePromises) {
    var count;
    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            count = 0;
            return _context4.abrupt("return", new Promise(function(resolve) {
              rulePromises.forEach(function(promise) {
                promise.then(function(ruleError) {
                  if (ruleError.errors.length) {
                    resolve([ruleError]);
                  }
                  count += 1;
                  if (count === rulePromises.length) {
                    resolve([]);
                  }
                });
              });
            }));
          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _finishOnFirstFailed.apply(this, arguments);
}
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch(object, source, matchData, customizer) {
  var index2 = matchData.length, length = index2, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index2--) {
    var data3 = matchData[index2];
    if (noCustomizer && data3[2] ? data3[1] !== object[data3[0]] : !(data3[0] in object)) {
      return false;
    }
  }
  while (++index2 < length) {
    data3 = matchData[index2];
    var key2 = data3[0], objValue = object[key2], srcValue = data3[1];
    if (noCustomizer && data3[2]) {
      if (objValue === void 0 && !(key2 in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key2, object, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
function isStrictComparable(value) {
  return value === value && !isObject$1(value);
}
function getMatchData(object) {
  var result = keys(object), length = result.length;
  while (length--) {
    var key2 = result[length], value = object[key2];
    result[length] = [key2, value, isStrictComparable(value)];
  }
  return result;
}
function matchesStrictComparable(key2, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key2] === srcValue && (srcValue !== void 0 || key2 in Object(object));
  };
}
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet(object, path);
  return result === void 0 ? defaultValue : result;
}
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
function baseIteratee(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == "object") {
    return isArray$1(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate);
      collection = keys(collection);
      predicate = function(key2) {
        return iteratee(iterable[key2], key2, iterable);
      };
    }
    var index2 = findIndexFunc(collection, predicate, fromIndex);
    return index2 > -1 ? iterable[iteratee ? collection[index2] : index2] : void 0;
  };
}
var nativeMax = Math.max;
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index2 = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index2 < 0) {
    index2 = nativeMax(length + index2, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate), index2);
}
var find = createFind(findIndex);
const find$1 = find;
var FormContextKey = Symbol("formContextKey");
var useProvideForm = function useProvideForm2(state) {
  provide(FormContextKey, state);
};
var useInjectForm = function useInjectForm2() {
  return inject(FormContextKey, {
    name: computed(function() {
      return void 0;
    }),
    labelAlign: computed(function() {
      return "right";
    }),
    vertical: computed(function() {
      return false;
    }),
    addField: function addField(_eventKey, _field) {
    },
    removeField: function removeField(_eventKey) {
    },
    model: computed(function() {
      return void 0;
    }),
    rules: computed(function() {
      return void 0;
    }),
    colon: computed(function() {
      return void 0;
    }),
    labelWrap: computed(function() {
      return void 0;
    }),
    labelCol: computed(function() {
      return void 0;
    }),
    requiredMark: computed(function() {
      return false;
    }),
    validateTrigger: computed(function() {
      return void 0;
    }),
    onValidate: function onValidate() {
    },
    validateMessages: computed(function() {
      return defaultValidateMessages;
    })
  });
};
var FormItemPrefixContextKey = Symbol("formItemPrefixContextKey");
var useProvideFormItemPrefix = function useProvideFormItemPrefix2(state) {
  provide(FormItemPrefixContextKey, state);
};
var useInjectFormItemPrefix = function useInjectFormItemPrefix2() {
  return inject(FormItemPrefixContextKey, {
    prefixCls: computed(function() {
      return "";
    })
  });
};
var FormItemLabel = function FormItemLabel2(props2, _ref) {
  var _props$label, _slots$label, _slots$tooltip, _classNames2;
  var slots = _ref.slots, emit = _ref.emit, attrs = _ref.attrs;
  var _props$attrs = _objectSpread(_objectSpread({}, props2), attrs), prefixCls = _props$attrs.prefixCls, htmlFor = _props$attrs.htmlFor, labelCol = _props$attrs.labelCol, labelAlign = _props$attrs.labelAlign, colon = _props$attrs.colon, required = _props$attrs.required, requiredMark = _props$attrs.requiredMark;
  var _useLocaleReceiver = useLocaleReceiver("Form"), _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 1), formLocale = _useLocaleReceiver2[0];
  var label = (_props$label = props2.label) !== null && _props$label !== void 0 ? _props$label : (_slots$label = slots.label) === null || _slots$label === void 0 ? void 0 : _slots$label.call(slots);
  if (!label)
    return null;
  var _useInjectForm = useInjectForm(), vertical = _useInjectForm.vertical, contextLabelAlign = _useInjectForm.labelAlign, contextLabelCol = _useInjectForm.labelCol, labelWrap = _useInjectForm.labelWrap, contextColon = _useInjectForm.colon;
  var mergedLabelCol = labelCol || (contextLabelCol === null || contextLabelCol === void 0 ? void 0 : contextLabelCol.value) || {};
  var mergedLabelAlign = labelAlign || (contextLabelAlign === null || contextLabelAlign === void 0 ? void 0 : contextLabelAlign.value);
  var labelClsBasic = "".concat(prefixCls, "-item-label");
  var labelColClassName = classNames(labelClsBasic, mergedLabelAlign === "left" && "".concat(labelClsBasic, "-left"), mergedLabelCol.class, _defineProperty({}, "".concat(labelClsBasic, "-wrap"), !!labelWrap.value));
  var labelChildren = label;
  var computedColon = colon === true || (contextColon === null || contextColon === void 0 ? void 0 : contextColon.value) !== false && colon !== false;
  var haveColon = computedColon && !vertical.value;
  if (haveColon && typeof label === "string" && label.trim() !== "") {
    labelChildren = label.replace(/[:|：]\s*$/, "");
  }
  labelChildren = createVNode(Fragment$1, null, [labelChildren, (_slots$tooltip = slots.tooltip) === null || _slots$tooltip === void 0 ? void 0 : _slots$tooltip.call(slots, {
    class: "".concat(prefixCls, "-item-tooltip")
  })]);
  if (requiredMark === "optional" && !required) {
    var _formLocale$value, _defaultLocale$Form;
    labelChildren = createVNode(Fragment$1, null, [labelChildren, createVNode("span", {
      "class": "".concat(prefixCls, "-item-optional")
    }, [((_formLocale$value = formLocale.value) === null || _formLocale$value === void 0 ? void 0 : _formLocale$value.optional) || ((_defaultLocale$Form = defaultLocale.Form) === null || _defaultLocale$Form === void 0 ? void 0 : _defaultLocale$Form.optional)])]);
  }
  var labelClassName = classNames((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-item-required"), required), _defineProperty(_classNames2, "".concat(prefixCls, "-item-required-mark-optional"), requiredMark === "optional"), _defineProperty(_classNames2, "".concat(prefixCls, "-item-no-colon"), !computedColon), _classNames2));
  return createVNode(Col$1, _objectSpread(_objectSpread({}, mergedLabelCol), {}, {
    "class": labelColClassName
  }), {
    default: function _default4() {
      return [createVNode("label", {
        "for": htmlFor,
        "class": labelClassName,
        "title": typeof label === "string" ? label : "",
        "onClick": function onClick2(e) {
          return emit("click", e);
        }
      }, [labelChildren])];
    }
  });
};
FormItemLabel.displayName = "FormItemLabel";
FormItemLabel.inheritAttrs = false;
const FormItemLabel$1 = FormItemLabel;
const ErrorList = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ErrorList",
  props: ["errors", "help", "onDomErrorVisibleChange", "helpStatus", "warnings"],
  setup: function setup67(props2) {
    var _useConfigInject = useConfigInject("", props2), rootPrefixCls = _useConfigInject.prefixCls;
    var _useInjectFormItemPre = useInjectFormItemPrefix(), prefixCls = _useInjectFormItemPre.prefixCls, status = _useInjectFormItemPre.status;
    var baseClassName = computed(function() {
      return "".concat(prefixCls.value, "-item-explain");
    });
    var visible = computed(function() {
      return !!(props2.errors && props2.errors.length);
    });
    var innerStatus = ref(status.value);
    watch([visible, status], function() {
      if (visible.value) {
        innerStatus.value = status.value;
      }
    });
    return function() {
      var _props$errors, _props$errors2;
      var colMItem = collapseMotion$1("".concat(rootPrefixCls.value, "-show-help-item"));
      var transitionGroupProps = getTransitionGroupProps("".concat(rootPrefixCls.value, "-show-help-item"), colMItem);
      transitionGroupProps.class = baseClassName.value;
      return (_props$errors = props2.errors) !== null && _props$errors !== void 0 && _props$errors.length ? createVNode(TransitionGroup, _objectSpread(_objectSpread({}, transitionGroupProps), {}, {
        "tag": "div"
      }), {
        default: function _default4() {
          return [(_props$errors2 = props2.errors) === null || _props$errors2 === void 0 ? void 0 : _props$errors2.map(function(error, index2) {
            return createVNode("div", {
              "key": index2,
              "role": "alert",
              "class": innerStatus.value ? "".concat(baseClassName.value, "-").concat(innerStatus.value) : ""
            }, [error]);
          })];
        }
      }) : null;
    };
  }
});
var iconMap = {
  success: CheckCircleFilled,
  warning: ExclamationCircleFilled,
  error: CloseCircleFilled,
  validating: LoadingOutlined
};
var FormItemInput = defineComponent({
  compatConfig: {
    MODE: 3
  },
  slots: ["help", "extra", "errors"],
  inheritAttrs: false,
  props: ["prefixCls", "errors", "hasFeedback", "onDomErrorVisibleChange", "wrapperCol", "help", "extra", "status"],
  setup: function setup68(props2, _ref) {
    var slots = _ref.slots;
    var formContext = useInjectForm();
    var contextWrapperCol = formContext.wrapperCol;
    var subFormContext = _objectSpread({}, formContext);
    delete subFormContext.labelCol;
    delete subFormContext.wrapperCol;
    useProvideForm(subFormContext);
    useProvideFormItemPrefix({
      prefixCls: computed(function() {
        return props2.prefixCls;
      }),
      status: computed(function() {
        return props2.status;
      })
    });
    return function() {
      var _slots$help, _slots$errors, _slots$extra;
      var prefixCls = props2.prefixCls, wrapperCol = props2.wrapperCol, _props$help = props2.help, help = _props$help === void 0 ? (_slots$help = slots.help) === null || _slots$help === void 0 ? void 0 : _slots$help.call(slots) : _props$help, _props$errors = props2.errors, errors = _props$errors === void 0 ? (_slots$errors = slots.errors) === null || _slots$errors === void 0 ? void 0 : _slots$errors.call(slots) : _props$errors, hasFeedback = props2.hasFeedback, status = props2.status, _props$extra = props2.extra, extra = _props$extra === void 0 ? (_slots$extra = slots.extra) === null || _slots$extra === void 0 ? void 0 : _slots$extra.call(slots) : _props$extra;
      var baseClassName = "".concat(prefixCls, "-item");
      var mergedWrapperCol = wrapperCol || (contextWrapperCol === null || contextWrapperCol === void 0 ? void 0 : contextWrapperCol.value) || {};
      var className = classNames("".concat(baseClassName, "-control"), mergedWrapperCol.class);
      var IconNode = status && iconMap[status];
      return createVNode(Col$1, _objectSpread(_objectSpread({}, mergedWrapperCol), {}, {
        "class": className
      }), {
        default: function _default4() {
          var _slots$default;
          return createVNode(Fragment$1, null, [createVNode("div", {
            "class": "".concat(baseClassName, "-control-input")
          }, [createVNode("div", {
            "class": "".concat(baseClassName, "-control-input-content")
          }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]), hasFeedback && IconNode ? createVNode("span", {
            "class": "".concat(baseClassName, "-children-icon")
          }, [createVNode(IconNode, null, null)]) : null]), createVNode(ErrorList, {
            "errors": errors,
            "help": help,
            "class": "".concat(baseClassName, "-explain-connected")
          }, null), extra ? createVNode("div", {
            "class": "".concat(baseClassName, "-extra")
          }, [extra]) : null]);
        }
      });
    };
  }
});
const FormItemInput$1 = FormItemInput;
function useDebounce(value) {
  var cacheValue = shallowRef(value.value.slice());
  var timeout = null;
  watchEffect(function() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      cacheValue.value = value.value;
    }, value.value.length ? 0 : 10);
  });
  return cacheValue;
}
tuple("success", "warning", "error", "validating", "");
function getPropByPath$1(obj, namePathList, strict) {
  var tempObj = obj;
  var keyArr = namePathList;
  var i = 0;
  try {
    for (var len = keyArr.length; i < len - 1; ++i) {
      if (!tempObj && !strict)
        break;
      var key2 = keyArr[i];
      if (key2 in tempObj) {
        tempObj = tempObj[key2];
      } else {
        if (strict) {
          throw Error("please transfer a valid name path to form item!");
        }
        break;
      }
    }
    if (strict && !tempObj) {
      throw Error("please transfer a valid name path to form item!");
    }
  } catch (error) {
    console.error("please transfer a valid name path to form item!");
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : void 0
  };
}
var formItemProps = function formItemProps2() {
  return {
    htmlFor: String,
    prefixCls: String,
    label: PropTypes$1.any,
    help: PropTypes$1.any,
    extra: PropTypes$1.any,
    labelCol: {
      type: Object
    },
    wrapperCol: {
      type: Object
    },
    hasFeedback: {
      type: Boolean,
      default: false
    },
    colon: {
      type: Boolean,
      default: void 0
    },
    labelAlign: PropTypes$1.oneOf(tuple("left", "right")),
    prop: {
      type: [String, Number, Array]
    },
    name: {
      type: [String, Number, Array]
    },
    rules: [Array, Object],
    autoLink: {
      type: Boolean,
      default: true
    },
    required: {
      type: Boolean,
      default: void 0
    },
    validateFirst: {
      type: Boolean,
      default: void 0
    },
    validateStatus: PropTypes$1.oneOf(tuple("", "success", "warning", "error", "validating")),
    validateTrigger: {
      type: [String, Array]
    },
    messageVariables: {
      type: Object
    },
    hidden: Boolean,
    noStyle: Boolean
  };
};
var indexGuid = 0;
var defaultItemNamePrefixCls = "form_item";
const __unplugin_components_2 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AFormItem",
  inheritAttrs: false,
  __ANT_NEW_FORM_ITEM: true,
  props: formItemProps(),
  slots: ["help", "label", "extra"],
  setup: function setup69(props2, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs, expose = _ref.expose;
    warning$1(props2.prop === void 0, "`prop` is deprecated. Please use `name` instead.");
    var eventKey = "form-item-".concat(++indexGuid);
    var _useConfigInject = useConfigInject("form", props2), prefixCls = _useConfigInject.prefixCls;
    var formContext = useInjectForm();
    var fieldName = computed(function() {
      return props2.name || props2.prop;
    });
    var errors = ref([]);
    var validateDisabled = ref(false);
    var inputRef = ref();
    var namePath = computed(function() {
      var val = fieldName.value;
      return getNamePath(val);
    });
    var fieldId = computed(function() {
      if (!namePath.value.length) {
        return void 0;
      } else {
        var formName = formContext.name.value;
        var mergedId = namePath.value.join("_");
        return formName ? "".concat(formName, "_").concat(mergedId) : "".concat(defaultItemNamePrefixCls, "_").concat(mergedId);
      }
    });
    var getNewFieldValue = function getNewFieldValue2() {
      var model = formContext.model.value;
      if (!model || !fieldName.value) {
        return;
      } else {
        return getPropByPath$1(model, namePath.value, true).v;
      }
    };
    var fieldValue = computed(function() {
      return getNewFieldValue();
    });
    var initialValue = ref(cloneDeep(fieldValue.value));
    var mergedValidateTrigger = computed(function() {
      var validateTrigger = props2.validateTrigger !== void 0 ? props2.validateTrigger : formContext.validateTrigger.value;
      validateTrigger = validateTrigger === void 0 ? "change" : validateTrigger;
      return toArray$2(validateTrigger);
    });
    var rulesRef = computed(function() {
      var formRules = formContext.rules.value;
      var selfRules = props2.rules;
      var requiredRule = props2.required !== void 0 ? {
        required: !!props2.required,
        trigger: mergedValidateTrigger.value
      } : [];
      var prop = getPropByPath$1(formRules, namePath.value);
      formRules = formRules ? prop.o[prop.k] || prop.v : [];
      var rules = [].concat(selfRules || formRules || []);
      if (find$1(rules, function(rule) {
        return rule.required;
      })) {
        return rules;
      } else {
        return rules.concat(requiredRule);
      }
    });
    var isRequired2 = computed(function() {
      var rules = rulesRef.value;
      var isRequired3 = false;
      if (rules && rules.length) {
        rules.every(function(rule) {
          if (rule.required) {
            isRequired3 = true;
            return false;
          }
          return true;
        });
      }
      return isRequired3 || props2.required;
    });
    var validateState = ref();
    watchEffect(function() {
      validateState.value = props2.validateStatus;
    });
    var messageVariables = computed(function() {
      var variables = {};
      if (typeof props2.label === "string") {
        variables.label = props2.label;
      } else if (props2.name) {
        variables.label = String(name);
      }
      if (props2.messageVariables) {
        variables = _objectSpread(_objectSpread({}, variables), props2.messageVariables);
      }
      return variables;
    });
    var validateRules$1 = function validateRules$12(options) {
      if (namePath.value.length === 0) {
        return;
      }
      var _props$validateFirst = props2.validateFirst, validateFirst = _props$validateFirst === void 0 ? false : _props$validateFirst;
      var _ref2 = options || {}, triggerName = _ref2.triggerName;
      var filteredRules = rulesRef.value;
      if (triggerName) {
        filteredRules = filteredRules.filter(function(rule) {
          var trigger2 = rule.trigger;
          if (!trigger2 && !mergedValidateTrigger.value.length) {
            return true;
          }
          var triggerList = toArray$2(trigger2 || mergedValidateTrigger.value);
          return triggerList.includes(triggerName);
        });
      }
      if (!filteredRules.length) {
        return Promise.resolve();
      }
      var promise = validateRules(namePath.value, fieldValue.value, filteredRules, _objectSpread({
        validateMessages: formContext.validateMessages.value
      }, options), validateFirst, messageVariables.value);
      validateState.value = "validating";
      errors.value = [];
      promise.catch(function(e) {
        return e;
      }).then(function() {
        var results = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        if (validateState.value === "validating") {
          var res = results.filter(function(result) {
            return result && result.errors.length;
          });
          validateState.value = res.length ? "error" : "success";
          errors.value = res.map(function(r) {
            return r.errors;
          });
          formContext.onValidate(fieldName.value, !errors.value.length, errors.value.length ? toRaw(errors.value[0]) : null);
        }
      });
      return promise;
    };
    var _onFieldBlur = function onFieldBlur2() {
      validateRules$1({
        triggerName: "blur"
      });
    };
    var _onFieldChange = function onFieldChange2() {
      if (validateDisabled.value) {
        validateDisabled.value = false;
        return;
      }
      validateRules$1({
        triggerName: "change"
      });
    };
    var clearValidate2 = function clearValidate3() {
      validateState.value = props2.validateStatus;
      validateDisabled.value = false;
      errors.value = [];
    };
    var resetField = function resetField2() {
      validateState.value = props2.validateStatus;
      validateDisabled.value = true;
      errors.value = [];
      var model = formContext.model.value || {};
      var value = fieldValue.value;
      var prop = getPropByPath$1(model, namePath.value, true);
      if (Array.isArray(value)) {
        prop.o[prop.k] = [].concat(initialValue.value);
      } else {
        prop.o[prop.k] = initialValue.value;
      }
      nextTick(function() {
        validateDisabled.value = false;
      });
    };
    var htmlFor = computed(function() {
      return props2.htmlFor === void 0 ? fieldId.value : props2.htmlFor;
    });
    var onLabelClick = function onLabelClick2() {
      var id = htmlFor.value;
      if (!id || !inputRef.value) {
        return;
      }
      var control = inputRef.value.$el.querySelector('[id="'.concat(id, '"]'));
      if (control && control.focus) {
        control.focus();
      }
    };
    expose({
      onFieldBlur: _onFieldBlur,
      onFieldChange: _onFieldChange,
      clearValidate: clearValidate2,
      resetField
    });
    useProvideFormItemContext({
      id: fieldId,
      onFieldBlur: function onFieldBlur2() {
        if (props2.autoLink) {
          _onFieldBlur();
        }
      },
      onFieldChange: function onFieldChange2() {
        if (props2.autoLink) {
          _onFieldChange();
        }
      },
      clearValidate: clearValidate2
    }, computed(function() {
      return !!(props2.autoLink && formContext.model.value && fieldName.value);
    }));
    var registered = false;
    watch(fieldName, function(val) {
      if (val) {
        if (!registered) {
          registered = true;
          formContext.addField(eventKey, {
            fieldValue,
            fieldId,
            fieldName,
            resetField,
            clearValidate: clearValidate2,
            namePath,
            validateRules: validateRules$1,
            rules: rulesRef
          });
        }
      } else {
        registered = false;
        formContext.removeField(eventKey);
      }
    }, {
      immediate: true
    });
    var debounceErrors = useDebounce(errors);
    var mergedValidateStatus = computed(function() {
      if (props2.validateStatus !== void 0) {
        return props2.validateStatus;
      } else if (debounceErrors.value.length) {
        return "error";
      }
      return validateState.value;
    });
    var itemClassName = computed(function() {
      var _ref3;
      return _ref3 = {}, _defineProperty(_ref3, "".concat(prefixCls.value, "-item"), true), _defineProperty(_ref3, "".concat(prefixCls.value, "-item-has-feedback"), mergedValidateStatus.value && props2.hasFeedback), _defineProperty(_ref3, "".concat(prefixCls.value, "-item-has-success"), mergedValidateStatus.value === "success"), _defineProperty(_ref3, "".concat(prefixCls.value, "-item-has-warning"), mergedValidateStatus.value === "warning"), _defineProperty(_ref3, "".concat(prefixCls.value, "-item-has-error"), mergedValidateStatus.value === "error"), _defineProperty(_ref3, "".concat(prefixCls.value, "-item-is-validating"), mergedValidateStatus.value === "validating"), _defineProperty(_ref3, "".concat(prefixCls.value, "-item-hidden"), props2.hidden), _ref3;
    });
    return function() {
      var _slots$default, _props$help;
      if (props2.noStyle)
        return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
      var help = (_props$help = props2.help) !== null && _props$help !== void 0 ? _props$help : slots.help ? filterEmpty(slots.help()) : null;
      return createVNode(Row$1, _objectSpread(_objectSpread({}, attrs), {}, {
        "class": [itemClassName.value, help !== void 0 && help !== null || debounceErrors.value.length ? "".concat(prefixCls.value, "-item-with-help") : "", attrs.class],
        "key": "row"
      }), {
        default: function _default4() {
          var _props$label, _slots$label, _props$extra, _slots$extra;
          return createVNode(Fragment$1, null, [createVNode(FormItemLabel$1, _objectSpread(_objectSpread({}, props2), {}, {
            "htmlFor": htmlFor.value,
            "required": isRequired2.value,
            "requiredMark": formContext.requiredMark.value,
            "prefixCls": prefixCls.value,
            "onClick": onLabelClick,
            "label": (_props$label = props2.label) !== null && _props$label !== void 0 ? _props$label : (_slots$label = slots.label) === null || _slots$label === void 0 ? void 0 : _slots$label.call(slots)
          }), null), createVNode(FormItemInput$1, _objectSpread(_objectSpread({}, props2), {}, {
            "errors": help !== void 0 && help !== null ? toArray$2(help) : debounceErrors.value,
            "prefixCls": prefixCls.value,
            "status": mergedValidateStatus.value,
            "ref": inputRef,
            "help": help,
            "extra": (_props$extra = props2.extra) !== null && _props$extra !== void 0 ? _props$extra : (_slots$extra = slots.extra) === null || _slots$extra === void 0 ? void 0 : _slots$extra.call(slots)
          }), {
            default: slots.default
          })]);
        }
      });
    };
  }
});
function allPromiseFinish(promiseList) {
  var hasError = false;
  var count = promiseList.length;
  var results = [];
  if (!promiseList.length) {
    return Promise.resolve([]);
  }
  return new Promise(function(resolve, reject) {
    promiseList.forEach(function(promise, index2) {
      promise.catch(function(e) {
        hasError = true;
        return e;
      }).then(function(result) {
        count -= 1;
        results[index2] = result;
        if (count > 0) {
          return;
        }
        if (hasError) {
          reject(results);
        }
        resolve(results);
      });
    });
  });
}
var nativeMin = Math.min;
function baseIntersection(arrays, iteratee, comparator) {
  var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array(othLength), maxLength = Infinity, result = [];
  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = arrayMap(array, baseUnary(iteratee));
    }
    maxLength = nativeMin(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : void 0;
  }
  array = arrays[0];
  var index2 = -1, seen = caches[0];
  outer:
    while (++index2 < length && result.length < maxLength) {
      var value = array[index2], computed2 = iteratee ? iteratee(value) : value;
      value = comparator || value !== 0 ? value : 0;
      if (!(seen ? cacheHas(seen, computed2) : includes2(result, computed2, comparator))) {
        othIndex = othLength;
        while (--othIndex) {
          var cache = caches[othIndex];
          if (!(cache ? cacheHas(cache, computed2) : includes2(arrays[othIndex], computed2, comparator))) {
            continue outer;
          }
        }
        if (seen) {
          seen.push(computed2);
        }
        result.push(value);
      }
    }
  return result;
}
function baseRest(func, start) {
  return setToString$1(overRest(func, start, identity), func + "");
}
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
function castArrayLikeObject(value) {
  return isArrayLikeObject(value) ? value : [];
}
var intersection = baseRest(function(arrays) {
  var mapped = arrayMap(arrays, castArrayLikeObject);
  return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
});
const intersection$1 = intersection;
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}
function customOmitClone(value) {
  return isPlainObject$1(value) ? void 0 : value;
}
var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});
const omit$1 = omit;
function isRequired(rules) {
  var isRequired2 = false;
  if (rules && rules.length) {
    rules.every(function(rule) {
      if (rule.required) {
        isRequired2 = true;
        return false;
      }
      return true;
    });
  }
  return isRequired2;
}
function toArray$1(value) {
  if (value === void 0 || value === null) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}
function getPropByPath(obj, path, strict) {
  var tempObj = obj;
  path = path.replace(/\[(\w+)\]/g, ".$1");
  path = path.replace(/^\./, "");
  var keyArr = path.split(".");
  var i = 0;
  for (var len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict)
      break;
    var key2 = keyArr[i];
    if (key2 in tempObj) {
      tempObj = tempObj[key2];
    } else {
      if (strict) {
        throw new Error("please transfer a valid name path to validate!");
      }
      break;
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null,
    isValid: tempObj && keyArr[i] in tempObj
  };
}
function useForm(modelRef) {
  var rulesRef = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ref({});
  var options = arguments.length > 2 ? arguments[2] : void 0;
  var initialModel = cloneDeep(unref(modelRef));
  var validateInfos = reactive({});
  var rulesKeys = shallowRef([]);
  var resetFields = function resetFields2(newValues) {
    _extends(unref(modelRef), _objectSpread(_objectSpread({}, cloneDeep(initialModel)), newValues));
    nextTick(function() {
      Object.keys(validateInfos).forEach(function(key2) {
        validateInfos[key2] = {
          autoLink: false,
          required: isRequired(unref(rulesRef)[key2])
        };
      });
    });
  };
  var filterRules = function filterRules2() {
    var rules = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var trigger2 = arguments.length > 1 ? arguments[1] : void 0;
    if (!trigger2.length) {
      return rules;
    } else {
      return rules.filter(function(rule) {
        var triggerList = toArray$1(rule.trigger || "change");
        return intersection$1(triggerList, trigger2).length;
      });
    }
  };
  var lastValidatePromise = null;
  var validateFields = function validateFields2(names) {
    var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var strict = arguments.length > 2 ? arguments[2] : void 0;
    var promiseList = [];
    var values = {};
    var _loop = function _loop2(i2) {
      var name2 = names[i2];
      var prop = getPropByPath(unref(modelRef), name2, strict);
      if (!prop.isValid)
        return "continue";
      values[name2] = prop.v;
      var rules = filterRules(unref(rulesRef)[name2], toArray$1(option && option.trigger));
      if (rules.length) {
        promiseList.push(validateField(name2, prop.v, rules, option || {}).then(function() {
          return {
            name: name2,
            errors: [],
            warnings: []
          };
        }).catch(function(ruleErrors) {
          var mergedErrors = [];
          var mergedWarnings = [];
          ruleErrors.forEach(function(_ref) {
            var warningOnly = _ref.rule.warningOnly, errors = _ref.errors;
            if (warningOnly) {
              mergedWarnings.push.apply(mergedWarnings, _toConsumableArray(errors));
            } else {
              mergedErrors.push.apply(mergedErrors, _toConsumableArray(errors));
            }
          });
          if (mergedErrors.length) {
            return Promise.reject({
              name: name2,
              errors: mergedErrors,
              warnings: mergedWarnings
            });
          }
          return {
            name: name2,
            errors: mergedErrors,
            warnings: mergedWarnings
          };
        }));
      }
    };
    for (var i = 0; i < names.length; i++) {
      var _ret = _loop(i);
      if (_ret === "continue")
        continue;
    }
    var summaryPromise = allPromiseFinish(promiseList);
    lastValidatePromise = summaryPromise;
    var returnPromise = summaryPromise.then(function() {
      if (lastValidatePromise === summaryPromise) {
        return Promise.resolve(values);
      }
      return Promise.reject([]);
    }).catch(function(results) {
      var errorList = results.filter(function(result) {
        return result && result.errors.length;
      });
      return Promise.reject({
        values,
        errorFields: errorList,
        outOfDate: lastValidatePromise !== summaryPromise
      });
    });
    returnPromise.catch(function(e) {
      return e;
    });
    return returnPromise;
  };
  var validateField = function validateField2(name2, value, rules) {
    var option = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    var promise = validateRules([name2], value, rules, _objectSpread({
      validateMessages: defaultValidateMessages
    }, option), !!option.validateFirst);
    if (!validateInfos[name2]) {
      return promise.catch(function(e) {
        return e;
      });
    }
    validateInfos[name2].validateStatus = "validating";
    promise.catch(function(e) {
      return e;
    }).then(function() {
      var results = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      if (validateInfos[name2].validateStatus === "validating") {
        var _options$onValidate;
        var res = results.filter(function(result) {
          return result && result.errors.length;
        });
        validateInfos[name2].validateStatus = res.length ? "error" : "success";
        validateInfos[name2].help = res.length ? res.map(function(r) {
          return r.errors;
        }) : null;
        options === null || options === void 0 ? void 0 : (_options$onValidate = options.onValidate) === null || _options$onValidate === void 0 ? void 0 : _options$onValidate.call(options, name2, !res.length, res.length ? toRaw(validateInfos[name2].help[0]) : null);
      }
    });
    return promise;
  };
  var validate = function validate2(names, option) {
    var keys2 = [];
    var strict = true;
    if (!names) {
      strict = false;
      keys2 = rulesKeys.value;
    } else if (Array.isArray(names)) {
      keys2 = names;
    } else {
      keys2 = [names];
    }
    var promises = validateFields(keys2, option || {}, strict);
    promises.catch(function(e) {
      return e;
    });
    return promises;
  };
  var clearValidate2 = function clearValidate3(names) {
    var keys2 = [];
    if (!names) {
      keys2 = rulesKeys.value;
    } else if (Array.isArray(names)) {
      keys2 = names;
    } else {
      keys2 = [names];
    }
    keys2.forEach(function(key2) {
      validateInfos[key2] && _extends(validateInfos[key2], {
        validateStatus: "",
        help: null
      });
    });
  };
  var mergeValidateInfo = function mergeValidateInfo2(items) {
    var info = {
      autoLink: false
    };
    var help = [];
    var infos = Array.isArray(items) ? items : [items];
    for (var i = 0; i < infos.length; i++) {
      var arg = infos[i];
      if ((arg === null || arg === void 0 ? void 0 : arg.validateStatus) === "error") {
        info.validateStatus = "error";
        arg.help && help.push(arg.help);
      }
      info.required = info.required || (arg === null || arg === void 0 ? void 0 : arg.required);
    }
    info.help = help;
    return info;
  };
  var oldModel = initialModel;
  var isFirstTime = true;
  var modelFn = function modelFn2(model) {
    var names = [];
    rulesKeys.value.forEach(function(key2) {
      var prop = getPropByPath(model, key2, false);
      var oldProp = getPropByPath(oldModel, key2, false);
      var isFirstValidation = isFirstTime && (options === null || options === void 0 ? void 0 : options.immediate) && prop.isValid;
      if (isFirstValidation || !isEqual(prop.v, oldProp.v)) {
        names.push(key2);
      }
    });
    validate(names, {
      trigger: "change"
    });
    isFirstTime = false;
    oldModel = cloneDeep(toRaw(model));
  };
  var debounceOptions = options === null || options === void 0 ? void 0 : options.debounce;
  var first = true;
  watch(rulesRef, function() {
    rulesKeys.value = rulesRef ? Object.keys(unref(rulesRef)) : [];
    if (!first && options && options.validateOnRuleChange) {
      validate();
    }
    first = false;
  }, {
    deep: true,
    immediate: true
  });
  watch(rulesKeys, function() {
    var newValidateInfos = {};
    rulesKeys.value.forEach(function(key3) {
      newValidateInfos[key3] = _extends({}, validateInfos[key3], {
        autoLink: false,
        required: isRequired(unref(rulesRef)[key3])
      });
      delete validateInfos[key3];
    });
    for (var key2 in validateInfos) {
      if (Object.prototype.hasOwnProperty.call(validateInfos, key2)) {
        delete validateInfos[key2];
      }
    }
    _extends(validateInfos, newValidateInfos);
  }, {
    immediate: true
  });
  watch(modelRef, debounceOptions && debounceOptions.wait ? debounce(modelFn, debounceOptions.wait, omit$1(debounceOptions, ["wait"])) : modelFn, {
    immediate: options && !!options.immediate,
    deep: true
  });
  return {
    modelRef,
    rulesRef,
    initialModel,
    validateInfos,
    resetFields,
    validate,
    validateField,
    mergeValidateInfo,
    clearValidate: clearValidate2
  };
}
var formProps = function formProps2() {
  return {
    layout: PropTypes$1.oneOf(tuple("horizontal", "inline", "vertical")),
    labelCol: {
      type: Object
    },
    wrapperCol: {
      type: Object
    },
    colon: {
      type: Boolean,
      default: void 0
    },
    labelAlign: PropTypes$1.oneOf(tuple("left", "right")),
    labelWrap: {
      type: Boolean,
      default: void 0
    },
    prefixCls: String,
    requiredMark: {
      type: [String, Boolean],
      default: void 0
    },
    hideRequiredMark: {
      type: Boolean,
      default: void 0
    },
    model: PropTypes$1.object,
    rules: {
      type: Object
    },
    validateMessages: {
      type: Object,
      default: void 0
    },
    validateOnRuleChange: {
      type: Boolean,
      default: void 0
    },
    scrollToFirstError: {
      type: [Boolean, Object]
    },
    onSubmit: Function,
    name: String,
    validateTrigger: {
      type: [String, Array]
    },
    size: {
      type: String
    },
    onValuesChange: {
      type: Function
    },
    onFieldsChange: {
      type: Function
    },
    onFinish: {
      type: Function
    },
    onFinishFailed: {
      type: Function
    },
    onValidate: {
      type: Function
    }
  };
};
function isEqualName(name1, name2) {
  return isEqual(toArray$2(name1), toArray$2(name2));
}
var Form = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AForm",
  inheritAttrs: false,
  props: initDefaultProps$1(formProps(), {
    layout: "horizontal",
    hideRequiredMark: false,
    colon: true
  }),
  Item: __unplugin_components_2,
  useForm,
  setup: function setup70(props2, _ref) {
    var emit = _ref.emit, slots = _ref.slots, expose = _ref.expose, attrs = _ref.attrs;
    var size = useInjectSize(props2);
    var _useConfigInject = useConfigInject("form", props2), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction, contextForm = _useConfigInject.form;
    var requiredMark = computed(function() {
      return props2.requiredMark === "" || props2.requiredMark;
    });
    var mergedRequiredMark = computed(function() {
      var _contextForm$value;
      if (requiredMark.value !== void 0) {
        return requiredMark.value;
      }
      if (contextForm && ((_contextForm$value = contextForm.value) === null || _contextForm$value === void 0 ? void 0 : _contextForm$value.requiredMark) !== void 0) {
        return contextForm.value.requiredMark;
      }
      if (props2.hideRequiredMark) {
        return false;
      }
      return true;
    });
    var mergedColon = computed(function() {
      var _props$colon, _contextForm$value2;
      return (_props$colon = props2.colon) !== null && _props$colon !== void 0 ? _props$colon : (_contextForm$value2 = contextForm.value) === null || _contextForm$value2 === void 0 ? void 0 : _contextForm$value2.colon;
    });
    var _useInjectGlobalForm = useInjectGlobalForm(), globalValidateMessages = _useInjectGlobalForm.validateMessages;
    var validateMessages = computed(function() {
      return _objectSpread(_objectSpread(_objectSpread({}, defaultValidateMessages), globalValidateMessages.value), props2.validateMessages);
    });
    var formClassName = computed(function() {
      var _classNames;
      return classNames(prefixCls.value, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-").concat(props2.layout), true), _defineProperty(_classNames, "".concat(prefixCls.value, "-hide-required-mark"), mergedRequiredMark.value === false), _defineProperty(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"), _defineProperty(_classNames, "".concat(prefixCls.value, "-").concat(size.value), size.value), _classNames));
    });
    var lastValidatePromise = ref();
    var fields = {};
    var addField = function addField2(eventKey, field) {
      fields[eventKey] = field;
    };
    var removeField = function removeField2(eventKey) {
      delete fields[eventKey];
    };
    var getFieldsByNameList = function getFieldsByNameList2(nameList) {
      var provideNameList = !!nameList;
      var namePathList = provideNameList ? toArray$2(nameList).map(getNamePath) : [];
      if (!provideNameList) {
        return Object.values(fields);
      } else {
        return Object.values(fields).filter(function(field) {
          return namePathList.findIndex(function(namePath) {
            return isEqualName(namePath, field.fieldName.value);
          }) > -1;
        });
      }
    };
    var resetFields = function resetFields2(name2) {
      if (!props2.model) {
        warning(false, "Form", "model is required for resetFields to work.");
        return;
      }
      getFieldsByNameList(name2).forEach(function(field) {
        field.resetField();
      });
    };
    var clearValidate2 = function clearValidate3(name2) {
      getFieldsByNameList(name2).forEach(function(field) {
        field.clearValidate();
      });
    };
    var handleFinishFailed = function handleFinishFailed2(errorInfo) {
      var scrollToFirstError = props2.scrollToFirstError;
      emit("finishFailed", errorInfo);
      if (scrollToFirstError && errorInfo.errorFields.length) {
        var scrollToFieldOptions = {};
        if (_typeof(scrollToFirstError) === "object") {
          scrollToFieldOptions = scrollToFirstError;
        }
        scrollToField(errorInfo.errorFields[0].name, scrollToFieldOptions);
      }
    };
    var validate = function validate2() {
      return validateField.apply(void 0, arguments);
    };
    var scrollToField = function scrollToField2(name2) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var fields2 = getFieldsByNameList(name2 ? [name2] : void 0);
      if (fields2.length) {
        var fieldId = fields2[0].fieldId.value;
        var node = fieldId ? document.getElementById(fieldId) : null;
        if (node) {
          scrollIntoView(node, _objectSpread({
            scrollMode: "if-needed",
            block: "nearest"
          }, options));
        }
      }
    };
    var getFieldsValue = function getFieldsValue2() {
      var nameList = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      if (nameList === true) {
        var allNameList = [];
        Object.values(fields).forEach(function(_ref2) {
          var namePath = _ref2.namePath;
          allNameList.push(namePath.value);
        });
        return cloneByNamePathList(props2.model, allNameList);
      } else {
        return cloneByNamePathList(props2.model, nameList);
      }
    };
    var validateFields = function validateFields2(nameList, options) {
      warning(!(nameList instanceof Function), "Form", "validateFields/validateField/validate not support callback, please use promise instead");
      if (!props2.model) {
        warning(false, "Form", "model is required for validateFields to work.");
        return Promise.reject("Form `model` is required for validateFields to work.");
      }
      var provideNameList = !!nameList;
      var namePathList = provideNameList ? toArray$2(nameList).map(getNamePath) : [];
      var promiseList = [];
      Object.values(fields).forEach(function(field) {
        var _field$rules;
        if (!provideNameList) {
          namePathList.push(field.namePath.value);
        }
        if (!((_field$rules = field.rules) !== null && _field$rules !== void 0 && _field$rules.value.length)) {
          return;
        }
        var fieldNamePath = field.namePath.value;
        if (!provideNameList || containsNamePath(namePathList, fieldNamePath)) {
          var promise = field.validateRules(_objectSpread({
            validateMessages: validateMessages.value
          }, options));
          promiseList.push(promise.then(function() {
            return {
              name: fieldNamePath,
              errors: [],
              warnings: []
            };
          }).catch(function(ruleErrors) {
            var mergedErrors = [];
            var mergedWarnings = [];
            ruleErrors.forEach(function(_ref3) {
              var warningOnly = _ref3.rule.warningOnly, errors = _ref3.errors;
              if (warningOnly) {
                mergedWarnings.push.apply(mergedWarnings, _toConsumableArray(errors));
              } else {
                mergedErrors.push.apply(mergedErrors, _toConsumableArray(errors));
              }
            });
            if (mergedErrors.length) {
              return Promise.reject({
                name: fieldNamePath,
                errors: mergedErrors,
                warnings: mergedWarnings
              });
            }
            return {
              name: fieldNamePath,
              errors: mergedErrors,
              warnings: mergedWarnings
            };
          }));
        }
      });
      var summaryPromise = allPromiseFinish(promiseList);
      lastValidatePromise.value = summaryPromise;
      var returnPromise = summaryPromise.then(function() {
        if (lastValidatePromise.value === summaryPromise) {
          return Promise.resolve(getFieldsValue(namePathList));
        }
        return Promise.reject([]);
      }).catch(function(results) {
        var errorList = results.filter(function(result) {
          return result && result.errors.length;
        });
        return Promise.reject({
          values: getFieldsValue(namePathList),
          errorFields: errorList,
          outOfDate: lastValidatePromise.value !== summaryPromise
        });
      });
      returnPromise.catch(function(e) {
        return e;
      });
      return returnPromise;
    };
    var validateField = function validateField2() {
      return validateFields.apply(void 0, arguments);
    };
    var handleSubmit = function handleSubmit2(e) {
      e.preventDefault();
      e.stopPropagation();
      emit("submit", e);
      if (props2.model) {
        var res = validateFields();
        res.then(function(values) {
          emit("finish", values);
        }).catch(function(errors) {
          handleFinishFailed(errors);
        });
      }
    };
    expose({
      resetFields,
      clearValidate: clearValidate2,
      validateFields,
      getFieldsValue,
      validate,
      scrollToField
    });
    useProvideForm({
      model: computed(function() {
        return props2.model;
      }),
      name: computed(function() {
        return props2.name;
      }),
      labelAlign: computed(function() {
        return props2.labelAlign;
      }),
      labelCol: computed(function() {
        return props2.labelCol;
      }),
      labelWrap: computed(function() {
        return props2.labelWrap;
      }),
      wrapperCol: computed(function() {
        return props2.wrapperCol;
      }),
      vertical: computed(function() {
        return props2.layout === "vertical";
      }),
      colon: mergedColon,
      requiredMark: mergedRequiredMark,
      validateTrigger: computed(function() {
        return props2.validateTrigger;
      }),
      rules: computed(function() {
        return props2.rules;
      }),
      addField,
      removeField,
      onValidate: function onValidate(name2, status, errors) {
        emit("validate", name2, status, errors);
      },
      validateMessages
    });
    watch(function() {
      return props2.rules;
    }, function() {
      if (props2.validateOnRuleChange) {
        validateFields();
      }
    });
    return function() {
      var _slots$default;
      return createVNode("form", _objectSpread(_objectSpread({}, attrs), {}, {
        "onSubmit": handleSubmit,
        "class": [formClassName.value, attrs.class]
      }), [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});
const Form$1 = Form;
Form$1.useInjectFormItemContext = useInjectFormItemContext;
Form$1.ItemRest = FormItemRest;
Form$1.install = function(app) {
  app.component(Form$1.name, Form$1);
  app.component(Form$1.Item.name, Form$1.Item);
  app.component(FormItemRest.name, FormItemRest);
  return app;
};
var checkableTagProps = function checkableTagProps2() {
  return {
    prefixCls: String,
    checked: {
      type: Boolean,
      default: void 0
    },
    onChange: {
      type: Function
    },
    onClick: {
      type: Function
    },
    "onUpdate:checked": Function
  };
};
var CheckableTag = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ACheckableTag",
  props: checkableTagProps(),
  setup: function setup71(props2, _ref) {
    var slots = _ref.slots, emit = _ref.emit;
    var _useConfigInject = useConfigInject("tag", props2), prefixCls = _useConfigInject.prefixCls;
    var handleClick = function handleClick2(e) {
      var checked = props2.checked;
      emit("update:checked", !checked);
      emit("change", !checked);
      emit("click", e);
    };
    var cls = computed(function() {
      var _classNames;
      return classNames(prefixCls.value, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-checkable"), true), _defineProperty(_classNames, "".concat(prefixCls.value, "-checkable-checked"), props2.checked), _classNames));
    });
    return function() {
      var _slots$default;
      return createVNode("span", {
        "class": cls.value,
        "onClick": handleClick
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});
const CheckableTag$1 = CheckableTag;
var PresetColorRegex = new RegExp("^(".concat(PresetColorTypes.join("|"), ")(-inverse)?$"));
var PresetStatusColorRegex = new RegExp("^(".concat(PresetStatusColorTypes.join("|"), ")$"));
var tagProps = function tagProps2() {
  return {
    prefixCls: String,
    color: {
      type: String
    },
    closable: {
      type: Boolean,
      default: false
    },
    closeIcon: PropTypes$1.any,
    visible: {
      type: Boolean,
      default: void 0
    },
    onClose: {
      type: Function
    },
    "onUpdate:visible": Function,
    icon: PropTypes$1.any
  };
};
var Tag = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ATag",
  props: tagProps(),
  slots: ["closeIcon", "icon"],
  setup: function setup72(props2, _ref) {
    var slots = _ref.slots, emit = _ref.emit, attrs = _ref.attrs;
    var _useConfigInject = useConfigInject("tag", props2), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    var visible = ref(true);
    watchEffect(function() {
      if (props2.visible !== void 0) {
        visible.value = props2.visible;
      }
    });
    var handleCloseClick = function handleCloseClick2(e) {
      e.stopPropagation();
      emit("update:visible", false);
      emit("close", e);
      if (e.defaultPrevented) {
        return;
      }
      if (props2.visible === void 0) {
        visible.value = false;
      }
    };
    var isPresetColor = computed(function() {
      var color = props2.color;
      if (!color) {
        return false;
      }
      return PresetColorRegex.test(color) || PresetStatusColorRegex.test(color);
    });
    var tagClassName = computed(function() {
      var _classNames;
      return classNames(prefixCls.value, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-").concat(props2.color), isPresetColor.value), _defineProperty(_classNames, "".concat(prefixCls.value, "-has-color"), props2.color && !isPresetColor.value), _defineProperty(_classNames, "".concat(prefixCls.value, "-hidden"), !visible.value), _defineProperty(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"), _classNames));
    });
    return function() {
      var _slots$icon, _slots$closeIcon, _slots$default;
      var _props$icon = props2.icon, icon = _props$icon === void 0 ? (_slots$icon = slots.icon) === null || _slots$icon === void 0 ? void 0 : _slots$icon.call(slots) : _props$icon, color = props2.color, _props$closeIcon = props2.closeIcon, closeIcon = _props$closeIcon === void 0 ? (_slots$closeIcon = slots.closeIcon) === null || _slots$closeIcon === void 0 ? void 0 : _slots$closeIcon.call(slots) : _props$closeIcon, _props$closable = props2.closable, closable = _props$closable === void 0 ? false : _props$closable;
      var renderCloseIcon = function renderCloseIcon2() {
        if (closable) {
          return closeIcon ? createVNode("span", {
            "class": "".concat(prefixCls.value, "-close-icon"),
            "onClick": handleCloseClick
          }, [closeIcon]) : createVNode(CloseOutlined, {
            "class": "".concat(prefixCls.value, "-close-icon"),
            "onClick": handleCloseClick
          }, null);
        }
        return null;
      };
      var tagStyle = {
        backgroundColor: color && !isPresetColor.value ? color : void 0
      };
      var iconNode = icon || null;
      var children = (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
      var kids = iconNode ? createVNode(Fragment$1, null, [iconNode, createVNode("span", null, [children])]) : children;
      var isNeedWave = "onClick" in attrs;
      var tagNode = createVNode("span", {
        "class": tagClassName.value,
        "style": tagStyle
      }, [kids, renderCloseIcon()]);
      return isNeedWave ? createVNode(Wave, null, {
        default: function _default4() {
          return [tagNode];
        }
      }) : tagNode;
    };
  }
});
Tag.CheckableTag = CheckableTag$1;
Tag.install = function(app) {
  app.component(Tag.name, Tag);
  app.component(CheckableTag$1.name, CheckableTag$1);
  return app;
};
const __unplugin_components_1$1 = Tag;
function getScrollBarSize(fresh) {
  {
    return 0;
  }
}
function setStyle(style) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _options$element = options.element, element = _options$element === void 0 ? document.body : _options$element;
  var oldStyle = {};
  var styleKeys = Object.keys(style);
  styleKeys.forEach(function(key2) {
    oldStyle[key2] = element.style[key2];
  });
  styleKeys.forEach(function(key2) {
    element.style[key2] = style[key2];
  });
  return oldStyle;
}
function isBodyOverflowing() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var cacheStyle$1 = {};
const switchScrollingEffect = function(close3) {
  if (!isBodyOverflowing() && !close3) {
    return;
  }
  var scrollingEffectClassName2 = "ant-scrolling-effect";
  var scrollingEffectClassNameReg2 = new RegExp("".concat(scrollingEffectClassName2), "g");
  var bodyClassName = document.body.className;
  if (close3) {
    if (!scrollingEffectClassNameReg2.test(bodyClassName))
      return;
    setStyle(cacheStyle$1);
    cacheStyle$1 = {};
    document.body.className = bodyClassName.replace(scrollingEffectClassNameReg2, "").trim();
    return;
  }
  var scrollBarSize = getScrollBarSize();
  if (scrollBarSize) {
    cacheStyle$1 = setStyle({
      position: "relative",
      width: "calc(100% - ".concat(scrollBarSize, "px)")
    });
    if (!scrollingEffectClassNameReg2.test(bodyClassName)) {
      var addClassName = "".concat(bodyClassName, " ").concat(scrollingEffectClassName2);
      document.body.className = addClassName.trim();
    }
  }
};
var locks = [];
var scrollingEffectClassName = "ant-scrolling-effect";
var scrollingEffectClassNameReg = new RegExp("".concat(scrollingEffectClassName), "g");
var uuid$1 = 0;
var cacheStyle = /* @__PURE__ */ new Map();
var ScrollLocker = /* @__PURE__ */ _createClass(function ScrollLocker2(_options) {
  var _this = this;
  _classCallCheck(this, ScrollLocker2);
  _defineProperty(this, "getContainer", function() {
    var _this$options;
    return (_this$options = _this.options) === null || _this$options === void 0 ? void 0 : _this$options.container;
  });
  _defineProperty(this, "reLock", function(options) {
    var findLock = locks.find(function(_ref) {
      var target = _ref.target;
      return target === _this.lockTarget;
    });
    if (findLock) {
      _this.unLock();
    }
    _this.options = options;
    if (findLock) {
      findLock.options = options;
      _this.lock();
    }
  });
  _defineProperty(this, "lock", function() {
    var _this$options3;
    if (locks.some(function(_ref2) {
      var target = _ref2.target;
      return target === _this.lockTarget;
    })) {
      return;
    }
    if (locks.some(function(_ref3) {
      var _this$options2;
      var options = _ref3.options;
      return (options === null || options === void 0 ? void 0 : options.container) === ((_this$options2 = _this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.container);
    })) {
      locks = [].concat(_toConsumableArray(locks), [{
        target: _this.lockTarget,
        options: _this.options
      }]);
      return;
    }
    var scrollBarSize = 0;
    var container = ((_this$options3 = _this.options) === null || _this$options3 === void 0 ? void 0 : _this$options3.container) || document.body;
    if (container === document.body && window.innerWidth - document.documentElement.clientWidth > 0 || container.scrollHeight > container.clientHeight) {
      scrollBarSize = getScrollBarSize();
    }
    var containerClassName = container.className;
    if (locks.filter(function(_ref4) {
      var _this$options4;
      var options = _ref4.options;
      return (options === null || options === void 0 ? void 0 : options.container) === ((_this$options4 = _this.options) === null || _this$options4 === void 0 ? void 0 : _this$options4.container);
    }).length === 0) {
      cacheStyle.set(container, setStyle({
        width: scrollBarSize !== 0 ? "calc(100% - ".concat(scrollBarSize, "px)") : void 0,
        overflow: "hidden",
        overflowX: "hidden",
        overflowY: "hidden"
      }, {
        element: container
      }));
    }
    if (!scrollingEffectClassNameReg.test(containerClassName)) {
      var addClassName = "".concat(containerClassName, " ").concat(scrollingEffectClassName);
      container.className = addClassName.trim();
    }
    locks = [].concat(_toConsumableArray(locks), [{
      target: _this.lockTarget,
      options: _this.options
    }]);
  });
  _defineProperty(this, "unLock", function() {
    var _this$options5;
    var findLock = locks.find(function(_ref5) {
      var target = _ref5.target;
      return target === _this.lockTarget;
    });
    locks = locks.filter(function(_ref6) {
      var target = _ref6.target;
      return target !== _this.lockTarget;
    });
    if (!findLock || locks.some(function(_ref7) {
      var _findLock$options;
      var options = _ref7.options;
      return (options === null || options === void 0 ? void 0 : options.container) === ((_findLock$options = findLock.options) === null || _findLock$options === void 0 ? void 0 : _findLock$options.container);
    })) {
      return;
    }
    var container = ((_this$options5 = _this.options) === null || _this$options5 === void 0 ? void 0 : _this$options5.container) || document.body;
    var containerClassName = container.className;
    if (!scrollingEffectClassNameReg.test(containerClassName))
      return;
    setStyle(cacheStyle.get(container), {
      element: container
    });
    cacheStyle.delete(container);
    container.className = container.className.replace(scrollingEffectClassNameReg, "").trim();
  });
  this.lockTarget = uuid$1++;
  this.options = _options;
});
var openCount = 0;
var cacheOverflow = {};
var getParent = function getParent2(getContainer4) {
  {
    return null;
  }
};
const Portal = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "PortalWrapper",
  inheritAttrs: false,
  props: {
    wrapperClassName: String,
    forceRender: {
      type: Boolean,
      default: void 0
    },
    getContainer: PropTypes$1.any,
    visible: {
      type: Boolean,
      default: void 0
    }
  },
  setup: function setup73(props2, _ref) {
    var slots = _ref.slots;
    var container = ref();
    var componentRef = ref();
    ref();
    var scrollLocker = new ScrollLocker({
      container: getParent(props2.getContainer)
    });
    var attachToParent = function attachToParent2() {
      var force = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      if (force || container.value && !container.value.parentNode) {
        var parent2 = getParent(props2.getContainer);
        if (parent2) {
          parent2.appendChild(container.value);
          return true;
        }
        return false;
      }
      return true;
    };
    var getContainer4 = function getContainer5() {
      {
        return null;
      }
    };
    var setWrapperClassName = function setWrapperClassName2() {
      var wrapperClassName = props2.wrapperClassName;
      if (container.value && wrapperClassName && wrapperClassName !== container.value.className) {
        container.value.className = wrapperClassName;
      }
    };
    onUpdated(function() {
      setWrapperClassName();
      attachToParent();
    });
    var switchScrolling = function switchScrolling2() {
      {
        setStyle(cacheOverflow);
        cacheOverflow = {};
        switchScrollingEffect(true);
      }
    };
    getCurrentInstance();
    return function() {
      var forceRender = props2.forceRender, visible = props2.visible;
      var portal = null;
      var childProps = {
        getOpenCount: function getOpenCount2() {
          return openCount;
        },
        getContainer: getContainer4,
        switchScrollingEffect: switchScrolling,
        scrollLocker
      };
      if (forceRender || visible || componentRef.value) {
        portal = createVNode(Portal$1, {
          "getContainer": getContainer4,
          "ref": componentRef
        }, {
          default: function _default4() {
            var _slots$default;
            return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots, childProps);
          }
        });
      }
      return portal;
    };
  }
});
function dialogPropTypes() {
  return {
    keyboard: {
      type: Boolean,
      default: void 0
    },
    mask: {
      type: Boolean,
      default: void 0
    },
    afterClose: Function,
    closable: {
      type: Boolean,
      default: void 0
    },
    maskClosable: {
      type: Boolean,
      default: void 0
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    destroyOnClose: {
      type: Boolean,
      default: void 0
    },
    mousePosition: PropTypes$1.shape({
      x: Number,
      y: Number
    }).loose,
    title: PropTypes$1.any,
    footer: PropTypes$1.any,
    transitionName: String,
    maskTransitionName: String,
    animation: PropTypes$1.any,
    maskAnimation: PropTypes$1.any,
    wrapStyle: {
      type: Object,
      default: void 0
    },
    bodyStyle: {
      type: Object,
      default: void 0
    },
    maskStyle: {
      type: Object,
      default: void 0
    },
    prefixCls: String,
    wrapClassName: String,
    rootClassName: String,
    width: [String, Number],
    height: [String, Number],
    zIndex: Number,
    bodyProps: PropTypes$1.any,
    maskProps: PropTypes$1.any,
    wrapProps: PropTypes$1.any,
    getContainer: PropTypes$1.any,
    dialogStyle: {
      type: Object,
      default: void 0
    },
    dialogClass: String,
    closeIcon: PropTypes$1.any,
    forceRender: {
      type: Boolean,
      default: void 0
    },
    getOpenCount: Function,
    focusTriggerAfterClose: {
      type: Boolean,
      default: void 0
    },
    onClose: Function,
    modalRender: Function
  };
}
function getMotionName(prefixCls, transitionName2, animationName) {
  var motionName = transitionName2;
  if (!motionName && animationName) {
    motionName = "".concat(prefixCls, "-").concat(animationName);
  }
  return motionName;
}
var uuid = -1;
function getUUID() {
  uuid += 1;
  return uuid;
}
function getScroll(w, top) {
  var ret = w["page".concat(top ? "Y" : "X", "Offset")];
  var method = "scroll".concat(top ? "Top" : "Left");
  if (typeof ret !== "number") {
    var d = w.document;
    ret = d.documentElement[method];
    if (typeof ret !== "number") {
      ret = d.body[method];
    }
  }
  return ret;
}
function offset(el) {
  var rect = el.getBoundingClientRect();
  var pos = {
    left: rect.left,
    top: rect.top
  };
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScroll(w);
  pos.top += getScroll(w, true);
  return pos;
}
var sentinelStyle = {
  width: 0,
  height: 0,
  overflow: "hidden",
  outline: "none"
};
const Content = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Content",
  inheritAttrs: false,
  props: _objectSpread(_objectSpread({}, dialogPropTypes()), {}, {
    motionName: String,
    ariaId: String,
    onVisibleChanged: Function,
    onMousedown: Function,
    onMouseup: Function
  }),
  setup: function setup74(props2, _ref) {
    var expose = _ref.expose, slots = _ref.slots, attrs = _ref.attrs;
    var sentinelStartRef = ref();
    var sentinelEndRef = ref();
    var dialogRef = ref();
    expose({
      focus: function focus() {
        var _sentinelStartRef$val;
        (_sentinelStartRef$val = sentinelStartRef.value) === null || _sentinelStartRef$val === void 0 ? void 0 : _sentinelStartRef$val.focus();
      },
      changeActive: function changeActive(next2) {
        var _document = document, activeElement = _document.activeElement;
        if (next2 && activeElement === sentinelEndRef.value) {
          sentinelStartRef.value.focus();
        } else if (!next2 && activeElement === sentinelStartRef.value) {
          sentinelEndRef.value.focus();
        }
      }
    });
    var transformOrigin = ref();
    var contentStyleRef = computed(function() {
      var width = props2.width, height = props2.height;
      var contentStyle = {};
      if (width !== void 0) {
        contentStyle.width = typeof width === "number" ? "".concat(width, "px") : width;
      }
      if (height !== void 0) {
        contentStyle.height = typeof height === "number" ? "".concat(height, "px") : height;
      }
      if (transformOrigin.value) {
        contentStyle.transformOrigin = transformOrigin.value;
      }
      return contentStyle;
    });
    var onPrepare = function onPrepare2() {
      nextTick(function() {
        if (dialogRef.value) {
          var elementOffset = offset(dialogRef.value);
          transformOrigin.value = props2.mousePosition ? "".concat(props2.mousePosition.x - elementOffset.left, "px ").concat(props2.mousePosition.y - elementOffset.top, "px") : "";
        }
      });
    };
    var onVisibleChanged = function onVisibleChanged2(visible) {
      props2.onVisibleChanged(visible);
    };
    return function() {
      var _slots$footer, _slots$title, _slots$closeIcon, _slots$default;
      var prefixCls = props2.prefixCls, _props$footer = props2.footer, footer = _props$footer === void 0 ? (_slots$footer = slots.footer) === null || _slots$footer === void 0 ? void 0 : _slots$footer.call(slots) : _props$footer, _props$title = props2.title, title = _props$title === void 0 ? (_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots) : _props$title, ariaId = props2.ariaId, closable = props2.closable, _props$closeIcon = props2.closeIcon, closeIcon = _props$closeIcon === void 0 ? (_slots$closeIcon = slots.closeIcon) === null || _slots$closeIcon === void 0 ? void 0 : _slots$closeIcon.call(slots) : _props$closeIcon, onClose = props2.onClose, bodyStyle = props2.bodyStyle, bodyProps = props2.bodyProps, onMousedown2 = props2.onMousedown, onMouseup = props2.onMouseup, visible = props2.visible, _props$modalRender = props2.modalRender, modalRender = _props$modalRender === void 0 ? slots.modalRender : _props$modalRender, destroyOnClose = props2.destroyOnClose, motionName = props2.motionName;
      var footerNode;
      if (footer) {
        footerNode = createVNode("div", {
          "class": "".concat(prefixCls, "-footer")
        }, [footer]);
      }
      var headerNode;
      if (title) {
        headerNode = createVNode("div", {
          "class": "".concat(prefixCls, "-header")
        }, [createVNode("div", {
          "class": "".concat(prefixCls, "-title"),
          "id": ariaId
        }, [title])]);
      }
      var closer;
      if (closable) {
        closer = createVNode("button", {
          "type": "button",
          "onClick": onClose,
          "aria-label": "Close",
          "class": "".concat(prefixCls, "-close")
        }, [closeIcon || createVNode("span", {
          "class": "".concat(prefixCls, "-close-x")
        }, null)]);
      }
      var content = createVNode("div", {
        "class": "".concat(prefixCls, "-content")
      }, [closer, headerNode, createVNode("div", _objectSpread({
        "class": "".concat(prefixCls, "-body"),
        "style": bodyStyle
      }, bodyProps), [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]), footerNode]);
      var transitionProps = getTransitionProps(motionName);
      return createVNode(Transition, _objectSpread(_objectSpread({}, transitionProps), {}, {
        "onBeforeEnter": onPrepare,
        "onAfterEnter": function onAfterEnter() {
          return onVisibleChanged(true);
        },
        "onAfterLeave": function onAfterLeave() {
          return onVisibleChanged(false);
        }
      }), {
        default: function _default4() {
          return [visible || !destroyOnClose ? withDirectives(createVNode("div", _objectSpread(_objectSpread({}, attrs), {}, {
            "ref": dialogRef,
            "key": "dialog-element",
            "role": "document",
            "style": [contentStyleRef.value, attrs.style],
            "class": [prefixCls, attrs.class],
            "onMousedown": onMousedown2,
            "onMouseup": onMouseup
          }), [createVNode("div", {
            "tabindex": 0,
            "ref": sentinelStartRef,
            "style": sentinelStyle,
            "aria-hidden": "true"
          }, null), modalRender ? modalRender({
            originVNode: content
          }) : content, createVNode("div", {
            "tabindex": 0,
            "ref": sentinelEndRef,
            "style": sentinelStyle,
            "aria-hidden": "true"
          }, null)]), [[vShow, visible]]) : null];
        }
      });
    };
  }
});
const Mask = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Mask",
  props: {
    prefixCls: String,
    visible: Boolean,
    motionName: String,
    maskProps: Object
  },
  setup: function setup75(props2, _ref) {
    _objectDestructuringEmpty(_ref);
    return function() {
      var prefixCls = props2.prefixCls, visible = props2.visible, maskProps = props2.maskProps, motionName = props2.motionName;
      var transitionProps = getTransitionProps(motionName);
      return createVNode(Transition, transitionProps, {
        default: function _default4() {
          return [withDirectives(createVNode("div", _objectSpread({
            "class": "".concat(prefixCls, "-mask")
          }, maskProps), null), [[vShow, visible]])];
        }
      });
    };
  }
});
const Dialog = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Dialog",
  inheritAttrs: false,
  props: initDefaultProps$1(_objectSpread(_objectSpread({}, dialogPropTypes()), {}, {
    getOpenCount: Function,
    scrollLocker: Object
  }), {
    mask: true,
    visible: false,
    keyboard: true,
    closable: true,
    maskClosable: true,
    destroyOnClose: false,
    prefixCls: "rc-dialog",
    getOpenCount: function getOpenCount() {
      return null;
    },
    focusTriggerAfterClose: true
  }),
  setup: function setup76(props2, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots;
    var lastOutSideActiveElementRef = ref();
    var wrapperRef = ref();
    var contentRef = ref();
    var animatedVisible = ref(props2.visible);
    var ariaIdRef = ref("vcDialogTitle".concat(getUUID()));
    var onDialogVisibleChanged = function onDialogVisibleChanged2(newVisible) {
      if (newVisible) {
        if (!contains(wrapperRef.value, document.activeElement)) {
          var _contentRef$value;
          lastOutSideActiveElementRef.value = document.activeElement;
          (_contentRef$value = contentRef.value) === null || _contentRef$value === void 0 ? void 0 : _contentRef$value.focus();
        }
      } else {
        var preAnimatedVisible = animatedVisible.value;
        animatedVisible.value = false;
        if (props2.mask && lastOutSideActiveElementRef.value && props2.focusTriggerAfterClose) {
          try {
            lastOutSideActiveElementRef.value.focus({
              preventScroll: true
            });
          } catch (e) {
          }
          lastOutSideActiveElementRef.value = null;
        }
        if (preAnimatedVisible) {
          var _props$afterClose;
          (_props$afterClose = props2.afterClose) === null || _props$afterClose === void 0 ? void 0 : _props$afterClose.call(props2);
        }
      }
    };
    var onInternalClose = function onInternalClose2(e) {
      var _props$onClose;
      (_props$onClose = props2.onClose) === null || _props$onClose === void 0 ? void 0 : _props$onClose.call(props2, e);
    };
    var contentClickRef = ref(false);
    var contentTimeoutRef = ref();
    var onContentMouseDown = function onContentMouseDown2() {
      clearTimeout(contentTimeoutRef.value);
      contentClickRef.value = true;
    };
    var onContentMouseUp = function onContentMouseUp2() {
      contentTimeoutRef.value = setTimeout(function() {
        contentClickRef.value = false;
      });
    };
    var onWrapperClick = function onWrapperClick2(e) {
      if (!props2.maskClosable)
        return null;
      if (contentClickRef.value) {
        contentClickRef.value = false;
      } else if (wrapperRef.value === e.target) {
        onInternalClose(e);
      }
    };
    var onWrapperKeyDown = function onWrapperKeyDown2(e) {
      if (props2.keyboard && e.keyCode === KeyCode$1.ESC) {
        e.stopPropagation();
        onInternalClose(e);
        return;
      }
      if (props2.visible) {
        if (e.keyCode === KeyCode$1.TAB) {
          contentRef.value.changeActive(!e.shiftKey);
        }
      }
    };
    watch(function() {
      return props2.visible;
    }, function() {
      if (props2.visible) {
        animatedVisible.value = true;
      }
    }, {
      flush: "post"
    });
    watchEffect(function() {
      var _props$scrollLocker2;
      (_props$scrollLocker2 = props2.scrollLocker) === null || _props$scrollLocker2 === void 0 ? void 0 : _props$scrollLocker2.unLock();
      if (animatedVisible.value) {
        var _props$scrollLocker3;
        (_props$scrollLocker3 = props2.scrollLocker) === null || _props$scrollLocker3 === void 0 ? void 0 : _props$scrollLocker3.lock();
      }
    });
    return function() {
      var prefixCls = props2.prefixCls, mask = props2.mask, visible = props2.visible, maskTransitionName = props2.maskTransitionName, maskAnimation = props2.maskAnimation, zIndex = props2.zIndex, wrapClassName = props2.wrapClassName, rootClassName = props2.rootClassName, wrapStyle = props2.wrapStyle, closable = props2.closable, maskProps = props2.maskProps, maskStyle = props2.maskStyle, transitionName2 = props2.transitionName, animation = props2.animation, wrapProps = props2.wrapProps, _props$title = props2.title, title = _props$title === void 0 ? slots.title : _props$title;
      var style = attrs.style, className = attrs.class;
      return createVNode("div", _objectSpread({
        "class": ["".concat(prefixCls, "-root"), rootClassName]
      }, pickAttrs(props2, {
        data: true
      })), [createVNode(Mask, {
        "prefixCls": prefixCls,
        "visible": mask && visible,
        "motionName": getMotionName(prefixCls, maskTransitionName, maskAnimation),
        "style": _objectSpread({
          zIndex
        }, maskStyle),
        "maskProps": maskProps
      }, null), createVNode("div", _objectSpread({
        "tabIndex": -1,
        "onKeydown": onWrapperKeyDown,
        "class": classNames("".concat(prefixCls, "-wrap"), wrapClassName),
        "ref": wrapperRef,
        "onClick": onWrapperClick,
        "role": "dialog",
        "aria-labelledby": title ? ariaIdRef.value : null,
        "style": _objectSpread(_objectSpread({
          zIndex
        }, wrapStyle), {}, {
          display: !animatedVisible.value ? "none" : null
        })
      }, wrapProps), [createVNode(Content, _objectSpread(_objectSpread({}, omit$2(props2, ["scrollLocker"])), {}, {
        "style": style,
        "class": className,
        "onMousedown": onContentMouseDown,
        "onMouseup": onContentMouseUp,
        "ref": contentRef,
        "closable": closable,
        "ariaId": ariaIdRef.value,
        "prefixCls": prefixCls,
        "visible": visible,
        "onClose": onInternalClose,
        "onVisibleChanged": onDialogVisibleChanged,
        "motionName": getMotionName(prefixCls, transitionName2, animation)
      }), slots)])]);
    };
  }
});
var IDialogPropTypes = dialogPropTypes();
var DialogWrap = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "DialogWrap",
  inheritAttrs: false,
  props: initDefaultProps$1(IDialogPropTypes, {
    visible: false
  }),
  setup: function setup77(props2, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots;
    var animatedVisible = ref(props2.visible);
    useProvidePortal({}, {
      inTriggerContext: false
    });
    watch(function() {
      return props2.visible;
    }, function() {
      if (props2.visible) {
        animatedVisible.value = true;
      }
    }, {
      flush: "post"
    });
    return function() {
      var visible = props2.visible, getContainer4 = props2.getContainer, forceRender = props2.forceRender, _props$destroyOnClose = props2.destroyOnClose, destroyOnClose = _props$destroyOnClose === void 0 ? false : _props$destroyOnClose, _afterClose = props2.afterClose;
      var dialogProps = _objectSpread(_objectSpread(_objectSpread({}, props2), attrs), {}, {
        ref: "_component",
        key: "dialog"
      });
      if (getContainer4 === false) {
        return createVNode(Dialog, _objectSpread(_objectSpread({}, dialogProps), {}, {
          "getOpenCount": function getOpenCount2() {
            return 2;
          }
        }), slots);
      }
      if (!forceRender && destroyOnClose && !animatedVisible.value) {
        return null;
      }
      return createVNode(Portal, {
        "visible": visible,
        "forceRender": forceRender,
        "getContainer": getContainer4
      }, {
        default: function _default4(childProps) {
          dialogProps = _objectSpread(_objectSpread(_objectSpread({}, dialogProps), childProps), {}, {
            afterClose: function afterClose() {
              _afterClose === null || _afterClose === void 0 ? void 0 : _afterClose();
              animatedVisible.value = false;
            }
          });
          return createVNode(Dialog, dialogProps, slots);
        }
      });
    };
  }
});
const DialogWrap$1 = DialogWrap;
const MiniSelect = defineComponent({
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: false,
  props: selectProps(),
  Option: VcSelect.Option,
  setup: function setup78(props2, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots;
    return function() {
      var selelctProps = _objectSpread(_objectSpread({}, props2), {}, {
        size: "small"
      }, attrs);
      return createVNode(VcSelect, selelctProps, slots);
    };
  }
});
const Pager = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Pager",
  inheritAttrs: false,
  props: {
    rootPrefixCls: String,
    page: Number,
    active: {
      type: Boolean,
      default: void 0
    },
    last: {
      type: Boolean,
      default: void 0
    },
    locale: PropTypes$1.object,
    showTitle: {
      type: Boolean,
      default: void 0
    },
    itemRender: {
      type: Function,
      default: function _default2() {
      }
    },
    onClick: {
      type: Function
    },
    onKeypress: {
      type: Function
    }
  },
  eimt: ["click", "keypress"],
  setup: function setup79(props2, _ref) {
    var emit = _ref.emit, attrs = _ref.attrs;
    var handleClick = function handleClick2() {
      emit("click", props2.page);
    };
    var handleKeyPress = function handleKeyPress2(event) {
      emit("keypress", event, handleClick, props2.page);
    };
    return function() {
      var _classNames;
      var showTitle = props2.showTitle, page = props2.page, itemRender = props2.itemRender;
      var _cls = attrs.class, style = attrs.style;
      var prefixCls = "".concat(props2.rootPrefixCls, "-item");
      var cls = classNames(prefixCls, "".concat(prefixCls, "-").concat(props2.page), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-active"), props2.active), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), !props2.page), _classNames), _cls);
      return createVNode("li", {
        "onClick": handleClick,
        "onKeypress": handleKeyPress,
        "title": showTitle ? String(page) : null,
        "tabindex": "0",
        "class": cls,
        "style": style
      }, [itemRender({
        page,
        type: "page",
        originalElement: createVNode("a", {
          "rel": "nofollow"
        }, [page])
      })]);
    };
  }
});
const KEYCODE = {
  ZERO: 48,
  NINE: 57,
  NUMPAD_ZERO: 96,
  NUMPAD_NINE: 105,
  BACKSPACE: 8,
  DELETE: 46,
  ENTER: 13,
  ARROW_UP: 38,
  ARROW_DOWN: 40
};
const Options = defineComponent({
  compatConfig: {
    MODE: 3
  },
  props: {
    disabled: {
      type: Boolean,
      default: void 0
    },
    changeSize: Function,
    quickGo: Function,
    selectComponentClass: PropTypes$1.any,
    current: Number,
    pageSizeOptions: PropTypes$1.array.def(["10", "20", "50", "100"]),
    pageSize: Number,
    buildOptionText: Function,
    locale: PropTypes$1.object,
    rootPrefixCls: String,
    selectPrefixCls: String,
    goButton: PropTypes$1.any
  },
  setup: function setup80(props2) {
    var goInputText = ref("");
    var validValue = computed(function() {
      return !goInputText.value || isNaN(goInputText.value) ? void 0 : Number(goInputText.value);
    });
    var defaultBuildOptionText = function defaultBuildOptionText2(opt) {
      return "".concat(opt.value, " ").concat(props2.locale.items_per_page);
    };
    var handleChange2 = function handleChange3(e) {
      var _e$target = e.target, value = _e$target.value, composing = _e$target.composing;
      if (e.isComposing || composing || goInputText.value === value)
        return;
      goInputText.value = value;
    };
    var handleBlur = function handleBlur2(e) {
      var goButton = props2.goButton, quickGo = props2.quickGo, rootPrefixCls = props2.rootPrefixCls;
      if (goButton || goInputText.value === "") {
        return;
      }
      if (e.relatedTarget && (e.relatedTarget.className.indexOf("".concat(rootPrefixCls, "-item-link")) >= 0 || e.relatedTarget.className.indexOf("".concat(rootPrefixCls, "-item")) >= 0)) {
        goInputText.value = "";
        return;
      } else {
        quickGo(validValue.value);
        goInputText.value = "";
      }
    };
    var go = function go2(e) {
      if (goInputText.value === "") {
        return;
      }
      if (e.keyCode === KEYCODE.ENTER || e.type === "click") {
        props2.quickGo(validValue.value);
        goInputText.value = "";
      }
    };
    var pageSizeOptions = computed(function() {
      var pageSize2 = props2.pageSize, pageSizeOptions2 = props2.pageSizeOptions;
      if (pageSizeOptions2.some(function(option) {
        return option.toString() === pageSize2.toString();
      })) {
        return pageSizeOptions2;
      }
      return pageSizeOptions2.concat([pageSize2.toString()]).sort(function(a, b) {
        var numberA = isNaN(Number(a)) ? 0 : Number(a);
        var numberB = isNaN(Number(b)) ? 0 : Number(b);
        return numberA - numberB;
      });
    });
    return function() {
      var rootPrefixCls = props2.rootPrefixCls, locale2 = props2.locale, changeSize = props2.changeSize, quickGo = props2.quickGo, goButton = props2.goButton, Select2 = props2.selectComponentClass, selectPrefixCls = props2.selectPrefixCls, pageSize2 = props2.pageSize, disabled = props2.disabled;
      var prefixCls = "".concat(rootPrefixCls, "-options");
      var changeSelect = null;
      var goInput = null;
      var gotoButton = null;
      if (!changeSize && !quickGo) {
        return null;
      }
      if (changeSize && Select2) {
        var buildOptionText = props2.buildOptionText || defaultBuildOptionText;
        var options = pageSizeOptions.value.map(function(opt, i) {
          return createVNode(Select2.Option, {
            "key": i,
            "value": opt
          }, {
            default: function _default4() {
              return [buildOptionText({
                value: opt
              })];
            }
          });
        });
        changeSelect = createVNode(Select2, {
          "disabled": disabled,
          "prefixCls": selectPrefixCls,
          "showSearch": false,
          "class": "".concat(prefixCls, "-size-changer"),
          "optionLabelProp": "children",
          "value": (pageSize2 || pageSizeOptions.value[0]).toString(),
          "onChange": function onChange(value) {
            return changeSize(Number(value));
          },
          "getPopupContainer": function getPopupContainer(triggerNode) {
            return triggerNode.parentNode;
          }
        }, {
          default: function _default4() {
            return [options];
          }
        });
      }
      if (quickGo) {
        if (goButton) {
          gotoButton = typeof goButton === "boolean" ? createVNode("button", {
            "type": "button",
            "onClick": go,
            "onKeyup": go,
            "disabled": disabled,
            "class": "".concat(prefixCls, "-quick-jumper-button")
          }, [locale2.jump_to_confirm]) : createVNode("span", {
            "onClick": go,
            "onKeyup": go
          }, [goButton]);
        }
        goInput = createVNode("div", {
          "class": "".concat(prefixCls, "-quick-jumper")
        }, [locale2.jump_to, withDirectives(createVNode("input", {
          "disabled": disabled,
          "type": "text",
          "value": goInputText.value,
          "onInput": handleChange2,
          "onChange": handleChange2,
          "onKeyup": go,
          "onBlur": handleBlur
        }, null), [[antInputDirective]]), locale2.page, gotoButton]);
      }
      return createVNode("li", {
        "class": "".concat(prefixCls)
      }, [changeSelect, goInput]);
    };
  }
});
const LOCALE = {
  items_per_page: "\u6761/\u9875",
  jump_to: "\u8DF3\u81F3",
  jump_to_confirm: "\u786E\u5B9A",
  page: "\u9875",
  prev_page: "\u4E0A\u4E00\u9875",
  next_page: "\u4E0B\u4E00\u9875",
  prev_5: "\u5411\u524D 5 \u9875",
  next_5: "\u5411\u540E 5 \u9875",
  prev_3: "\u5411\u524D 3 \u9875",
  next_3: "\u5411\u540E 3 \u9875"
};
var _excluded$7 = ["class"];
function isInteger(value) {
  return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
}
function defaultItemRender(_ref) {
  var originalElement = _ref.originalElement;
  return originalElement;
}
function calculatePage(p, state, props2) {
  var pageSize2 = typeof p === "undefined" ? state.statePageSize : p;
  return Math.floor((props2.total - 1) / pageSize2) + 1;
}
const VcPagination = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Pagination",
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: {
    disabled: {
      type: Boolean,
      default: void 0
    },
    prefixCls: PropTypes$1.string.def("rc-pagination"),
    selectPrefixCls: PropTypes$1.string.def("rc-select"),
    current: Number,
    defaultCurrent: PropTypes$1.number.def(1),
    total: PropTypes$1.number.def(0),
    pageSize: Number,
    defaultPageSize: PropTypes$1.number.def(10),
    hideOnSinglePage: {
      type: Boolean,
      default: false
    },
    showSizeChanger: {
      type: Boolean,
      default: void 0
    },
    showLessItems: {
      type: Boolean,
      default: false
    },
    selectComponentClass: PropTypes$1.any,
    showPrevNextJumpers: {
      type: Boolean,
      default: true
    },
    showQuickJumper: PropTypes$1.oneOfType([PropTypes$1.looseBool, PropTypes$1.object]).def(false),
    showTitle: {
      type: Boolean,
      default: true
    },
    pageSizeOptions: PropTypes$1.arrayOf(PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string])),
    buildOptionText: Function,
    showTotal: Function,
    simple: {
      type: Boolean,
      default: void 0
    },
    locale: PropTypes$1.object.def(LOCALE),
    itemRender: PropTypes$1.func.def(defaultItemRender),
    prevIcon: PropTypes$1.any,
    nextIcon: PropTypes$1.any,
    jumpPrevIcon: PropTypes$1.any,
    jumpNextIcon: PropTypes$1.any,
    totalBoundaryShowSizeChanger: PropTypes$1.number.def(50)
  },
  data: function data2() {
    var props2 = this.$props;
    var current2 = firstNotUndefined([this.current, this.defaultCurrent]);
    var pageSize2 = firstNotUndefined([this.pageSize, this.defaultPageSize]);
    current2 = Math.min(current2, calculatePage(pageSize2, void 0, props2));
    return {
      stateCurrent: current2,
      stateCurrentInputValue: current2,
      statePageSize: pageSize2
    };
  },
  watch: {
    current: function current(val) {
      this.setState({
        stateCurrent: val,
        stateCurrentInputValue: val
      });
    },
    pageSize: function pageSize(val) {
      var newState = {};
      var current2 = this.stateCurrent;
      var newCurrent = calculatePage(val, this.$data, this.$props);
      current2 = current2 > newCurrent ? newCurrent : current2;
      if (!hasProp(this, "current")) {
        newState.stateCurrent = current2;
        newState.stateCurrentInputValue = current2;
      }
      newState.statePageSize = val;
      this.setState(newState);
    },
    stateCurrent: function stateCurrent(_val, oldValue) {
      var _this = this;
      this.$nextTick(function() {
        if (_this.$refs.paginationNode) {
          var lastCurrentNode = _this.$refs.paginationNode.querySelector(".".concat(_this.prefixCls, "-item-").concat(oldValue));
          if (lastCurrentNode && document.activeElement === lastCurrentNode) {
            lastCurrentNode.blur();
          }
        }
      });
    },
    total: function total() {
      var newState = {};
      var newCurrent = calculatePage(this.pageSize, this.$data, this.$props);
      if (hasProp(this, "current")) {
        var current2 = Math.min(this.current, newCurrent);
        newState.stateCurrent = current2;
        newState.stateCurrentInputValue = current2;
      } else {
        var _current = this.stateCurrent;
        if (_current === 0 && newCurrent > 0) {
          _current = 1;
        } else {
          _current = Math.min(this.stateCurrent, newCurrent);
        }
        newState.stateCurrent = _current;
      }
      this.setState(newState);
    }
  },
  methods: {
    getJumpPrevPage: function getJumpPrevPage() {
      return Math.max(1, this.stateCurrent - (this.showLessItems ? 3 : 5));
    },
    getJumpNextPage: function getJumpNextPage() {
      return Math.min(calculatePage(void 0, this.$data, this.$props), this.stateCurrent + (this.showLessItems ? 3 : 5));
    },
    getItemIcon: function getItemIcon(icon, label) {
      var prefixCls = this.$props.prefixCls;
      var iconNode = getComponent(this, icon, this.$props) || createVNode("button", {
        "type": "button",
        "aria-label": label,
        "class": "".concat(prefixCls, "-item-link")
      }, null);
      return iconNode;
    },
    getValidValue: function getValidValue(e) {
      var inputValue = e.target.value;
      var allPages = calculatePage(void 0, this.$data, this.$props);
      var stateCurrentInputValue = this.$data.stateCurrentInputValue;
      var value;
      if (inputValue === "") {
        value = inputValue;
      } else if (isNaN(Number(inputValue))) {
        value = stateCurrentInputValue;
      } else if (inputValue >= allPages) {
        value = allPages;
      } else {
        value = Number(inputValue);
      }
      return value;
    },
    isValid: function isValid3(page) {
      return isInteger(page) && page !== this.stateCurrent;
    },
    shouldDisplayQuickJumper: function shouldDisplayQuickJumper() {
      var _this$$props = this.$props, showQuickJumper = _this$$props.showQuickJumper, pageSize2 = _this$$props.pageSize, total2 = _this$$props.total;
      if (total2 <= pageSize2) {
        return false;
      }
      return showQuickJumper;
    },
    handleKeyDown: function handleKeyDown(event) {
      if (event.keyCode === KEYCODE.ARROW_UP || event.keyCode === KEYCODE.ARROW_DOWN) {
        event.preventDefault();
      }
    },
    handleKeyUp: function handleKeyUp(e) {
      if (e.isComposing || e.target.composing)
        return;
      var value = this.getValidValue(e);
      var stateCurrentInputValue = this.stateCurrentInputValue;
      if (value !== stateCurrentInputValue) {
        this.setState({
          stateCurrentInputValue: value
        });
      }
      if (e.keyCode === KEYCODE.ENTER) {
        this.handleChange(value);
      } else if (e.keyCode === KEYCODE.ARROW_UP) {
        this.handleChange(value - 1);
      } else if (e.keyCode === KEYCODE.ARROW_DOWN) {
        this.handleChange(value + 1);
      }
    },
    changePageSize: function changePageSize(size) {
      var current2 = this.stateCurrent;
      var preCurrent = current2;
      var newCurrent = calculatePage(size, this.$data, this.$props);
      current2 = current2 > newCurrent ? newCurrent : current2;
      if (newCurrent === 0) {
        current2 = this.stateCurrent;
      }
      if (typeof size === "number") {
        if (!hasProp(this, "pageSize")) {
          this.setState({
            statePageSize: size
          });
        }
        if (!hasProp(this, "current")) {
          this.setState({
            stateCurrent: current2,
            stateCurrentInputValue: current2
          });
        }
      }
      this.__emit("update:pageSize", size);
      if (current2 !== preCurrent) {
        this.__emit("update:current", current2);
      }
      this.__emit("showSizeChange", current2, size);
      this.__emit("change", current2, size);
    },
    handleChange: function handleChange(p) {
      var disabled = this.$props.disabled;
      var page = p;
      if (this.isValid(page) && !disabled) {
        var currentPage = calculatePage(void 0, this.$data, this.$props);
        if (page > currentPage) {
          page = currentPage;
        } else if (page < 1) {
          page = 1;
        }
        if (!hasProp(this, "current")) {
          this.setState({
            stateCurrent: page,
            stateCurrentInputValue: page
          });
        }
        this.__emit("update:current", page);
        this.__emit("change", page, this.statePageSize);
        return page;
      }
      return this.stateCurrent;
    },
    prev: function prev() {
      if (this.hasPrev()) {
        this.handleChange(this.stateCurrent - 1);
      }
    },
    next: function next() {
      if (this.hasNext()) {
        this.handleChange(this.stateCurrent + 1);
      }
    },
    jumpPrev: function jumpPrev() {
      this.handleChange(this.getJumpPrevPage());
    },
    jumpNext: function jumpNext() {
      this.handleChange(this.getJumpNextPage());
    },
    hasPrev: function hasPrev() {
      return this.stateCurrent > 1;
    },
    hasNext: function hasNext() {
      return this.stateCurrent < calculatePage(void 0, this.$data, this.$props);
    },
    getShowSizeChanger: function getShowSizeChanger() {
      var _this$$props2 = this.$props, showSizeChanger = _this$$props2.showSizeChanger, total2 = _this$$props2.total, totalBoundaryShowSizeChanger = _this$$props2.totalBoundaryShowSizeChanger;
      if (typeof showSizeChanger !== "undefined") {
        return showSizeChanger;
      }
      return total2 > totalBoundaryShowSizeChanger;
    },
    runIfEnter: function runIfEnter(event, callback) {
      if (event.key === "Enter" || event.charCode === 13) {
        for (var _len = arguments.length, restParams = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          restParams[_key - 2] = arguments[_key];
        }
        callback.apply(void 0, restParams);
      }
    },
    runIfEnterPrev: function runIfEnterPrev(event) {
      this.runIfEnter(event, this.prev);
    },
    runIfEnterNext: function runIfEnterNext(event) {
      this.runIfEnter(event, this.next);
    },
    runIfEnterJumpPrev: function runIfEnterJumpPrev(event) {
      this.runIfEnter(event, this.jumpPrev);
    },
    runIfEnterJumpNext: function runIfEnterJumpNext(event) {
      this.runIfEnter(event, this.jumpNext);
    },
    handleGoTO: function handleGoTO(event) {
      if (event.keyCode === KEYCODE.ENTER || event.type === "click") {
        this.handleChange(this.stateCurrentInputValue);
      }
    },
    renderPrev: function renderPrev(prevPage) {
      var itemRender = this.$props.itemRender;
      var prevButton = itemRender({
        page: prevPage,
        type: "prev",
        originalElement: this.getItemIcon("prevIcon", "prev page")
      });
      var disabled = !this.hasPrev();
      return isValidElement(prevButton) ? cloneElement(prevButton, disabled ? {
        disabled
      } : {}) : prevButton;
    },
    renderNext: function renderNext(nextPage) {
      var itemRender = this.$props.itemRender;
      var nextButton = itemRender({
        page: nextPage,
        type: "next",
        originalElement: this.getItemIcon("nextIcon", "next page")
      });
      var disabled = !this.hasNext();
      return isValidElement(nextButton) ? cloneElement(nextButton, disabled ? {
        disabled
      } : {}) : nextButton;
    }
  },
  render: function render5() {
    var _classNames6;
    var _this$$props3 = this.$props, prefixCls = _this$$props3.prefixCls, disabled = _this$$props3.disabled, hideOnSinglePage = _this$$props3.hideOnSinglePage, total2 = _this$$props3.total, locale2 = _this$$props3.locale, showQuickJumper = _this$$props3.showQuickJumper, showLessItems = _this$$props3.showLessItems, showTitle = _this$$props3.showTitle, showTotal = _this$$props3.showTotal, simple = _this$$props3.simple, itemRender = _this$$props3.itemRender, showPrevNextJumpers = _this$$props3.showPrevNextJumpers, jumpPrevIcon = _this$$props3.jumpPrevIcon, jumpNextIcon = _this$$props3.jumpNextIcon, selectComponentClass = _this$$props3.selectComponentClass, selectPrefixCls = _this$$props3.selectPrefixCls, pageSizeOptions = _this$$props3.pageSizeOptions;
    var stateCurrent2 = this.stateCurrent, statePageSize = this.statePageSize;
    var _splitAttrs$extraAttr = splitAttrs(this.$attrs).extraAttrs, className = _splitAttrs$extraAttr.class, restAttrs = _objectWithoutProperties(_splitAttrs$extraAttr, _excluded$7);
    if (hideOnSinglePage === true && this.total <= statePageSize) {
      return null;
    }
    var allPages = calculatePage(void 0, this.$data, this.$props);
    var pagerList = [];
    var jumpPrev2 = null;
    var jumpNext2 = null;
    var firstPager = null;
    var lastPager = null;
    var gotoButton = null;
    var goButton = showQuickJumper && showQuickJumper.goButton;
    var pageBufferSize = showLessItems ? 1 : 2;
    var prevPage = stateCurrent2 - 1 > 0 ? stateCurrent2 - 1 : 0;
    var nextPage = stateCurrent2 + 1 < allPages ? stateCurrent2 + 1 : allPages;
    var hasPrev2 = this.hasPrev();
    var hasNext2 = this.hasNext();
    if (simple) {
      if (goButton) {
        if (typeof goButton === "boolean") {
          gotoButton = createVNode("button", {
            "type": "button",
            "onClick": this.handleGoTO,
            "onKeyup": this.handleGoTO
          }, [locale2.jump_to_confirm]);
        } else {
          gotoButton = createVNode("span", {
            "onClick": this.handleGoTO,
            "onKeyup": this.handleGoTO
          }, [goButton]);
        }
        gotoButton = createVNode("li", {
          "title": showTitle ? "".concat(locale2.jump_to).concat(stateCurrent2, "/").concat(allPages) : null,
          "class": "".concat(prefixCls, "-simple-pager")
        }, [gotoButton]);
      }
      return createVNode("ul", _objectSpread({
        "class": classNames("".concat(prefixCls, " ").concat(prefixCls, "-simple"), _defineProperty({}, "".concat(prefixCls, "-disabled"), disabled), className)
      }, restAttrs), [createVNode("li", {
        "title": showTitle ? locale2.prev_page : null,
        "onClick": this.prev,
        "tabindex": hasPrev2 ? 0 : null,
        "onKeypress": this.runIfEnterPrev,
        "class": classNames("".concat(prefixCls, "-prev"), _defineProperty({}, "".concat(prefixCls, "-disabled"), !hasPrev2)),
        "aria-disabled": !hasPrev2
      }, [this.renderPrev(prevPage)]), createVNode("li", {
        "title": showTitle ? "".concat(stateCurrent2, "/").concat(allPages) : null,
        "class": "".concat(prefixCls, "-simple-pager")
      }, [withDirectives(createVNode("input", {
        "type": "text",
        "value": this.stateCurrentInputValue,
        "disabled": disabled,
        "onKeydown": this.handleKeyDown,
        "onKeyup": this.handleKeyUp,
        "onInput": this.handleKeyUp,
        "onChange": this.handleKeyUp,
        "size": "3"
      }, null), [[antInputDirective]]), createVNode("span", {
        "class": "".concat(prefixCls, "-slash")
      }, [createTextVNode("\uFF0F")]), allPages]), createVNode("li", {
        "title": showTitle ? locale2.next_page : null,
        "onClick": this.next,
        "tabindex": hasNext2 ? 0 : null,
        "onKeypress": this.runIfEnterNext,
        "class": classNames("".concat(prefixCls, "-next"), _defineProperty({}, "".concat(prefixCls, "-disabled"), !hasNext2)),
        "aria-disabled": !hasNext2
      }, [this.renderNext(nextPage)]), gotoButton]);
    }
    if (allPages <= 3 + pageBufferSize * 2) {
      var pagerProps = {
        locale: locale2,
        rootPrefixCls: prefixCls,
        showTitle,
        itemRender,
        onClick: this.handleChange,
        onKeypress: this.runIfEnter
      };
      if (!allPages) {
        pagerList.push(createVNode(Pager, _objectSpread(_objectSpread({}, pagerProps), {}, {
          "key": "noPager",
          "page": 1,
          "class": "".concat(prefixCls, "-item-disabled")
        }), null));
      }
      for (var i = 1; i <= allPages; i += 1) {
        var active = stateCurrent2 === i;
        pagerList.push(createVNode(Pager, _objectSpread(_objectSpread({}, pagerProps), {}, {
          "key": i,
          "page": i,
          "active": active
        }), null));
      }
    } else {
      var prevItemTitle = showLessItems ? locale2.prev_3 : locale2.prev_5;
      var nextItemTitle = showLessItems ? locale2.next_3 : locale2.next_5;
      if (showPrevNextJumpers) {
        jumpPrev2 = createVNode("li", {
          "title": this.showTitle ? prevItemTitle : null,
          "key": "prev",
          "onClick": this.jumpPrev,
          "tabindex": "0",
          "onKeypress": this.runIfEnterJumpPrev,
          "class": classNames("".concat(prefixCls, "-jump-prev"), _defineProperty({}, "".concat(prefixCls, "-jump-prev-custom-icon"), !!jumpPrevIcon))
        }, [itemRender({
          page: this.getJumpPrevPage(),
          type: "jump-prev",
          originalElement: this.getItemIcon("jumpPrevIcon", "prev page")
        })]);
        jumpNext2 = createVNode("li", {
          "title": this.showTitle ? nextItemTitle : null,
          "key": "next",
          "tabindex": "0",
          "onClick": this.jumpNext,
          "onKeypress": this.runIfEnterJumpNext,
          "class": classNames("".concat(prefixCls, "-jump-next"), _defineProperty({}, "".concat(prefixCls, "-jump-next-custom-icon"), !!jumpNextIcon))
        }, [itemRender({
          page: this.getJumpNextPage(),
          type: "jump-next",
          originalElement: this.getItemIcon("jumpNextIcon", "next page")
        })]);
      }
      lastPager = createVNode(Pager, {
        "locale": locale2,
        "last": true,
        "rootPrefixCls": prefixCls,
        "onClick": this.handleChange,
        "onKeypress": this.runIfEnter,
        "key": allPages,
        "page": allPages,
        "active": false,
        "showTitle": showTitle,
        "itemRender": itemRender
      }, null);
      firstPager = createVNode(Pager, {
        "locale": locale2,
        "rootPrefixCls": prefixCls,
        "onClick": this.handleChange,
        "onKeypress": this.runIfEnter,
        "key": 1,
        "page": 1,
        "active": false,
        "showTitle": showTitle,
        "itemRender": itemRender
      }, null);
      var left = Math.max(1, stateCurrent2 - pageBufferSize);
      var right = Math.min(stateCurrent2 + pageBufferSize, allPages);
      if (stateCurrent2 - 1 <= pageBufferSize) {
        right = 1 + pageBufferSize * 2;
      }
      if (allPages - stateCurrent2 <= pageBufferSize) {
        left = allPages - pageBufferSize * 2;
      }
      for (var _i = left; _i <= right; _i += 1) {
        var _active = stateCurrent2 === _i;
        pagerList.push(createVNode(Pager, {
          "locale": locale2,
          "rootPrefixCls": prefixCls,
          "onClick": this.handleChange,
          "onKeypress": this.runIfEnter,
          "key": _i,
          "page": _i,
          "active": _active,
          "showTitle": showTitle,
          "itemRender": itemRender
        }, null));
      }
      if (stateCurrent2 - 1 >= pageBufferSize * 2 && stateCurrent2 !== 1 + 2) {
        pagerList[0] = createVNode(Pager, {
          "locale": locale2,
          "rootPrefixCls": prefixCls,
          "onClick": this.handleChange,
          "onKeypress": this.runIfEnter,
          "key": left,
          "page": left,
          "class": "".concat(prefixCls, "-item-after-jump-prev"),
          "active": false,
          "showTitle": this.showTitle,
          "itemRender": itemRender
        }, null);
        pagerList.unshift(jumpPrev2);
      }
      if (allPages - stateCurrent2 >= pageBufferSize * 2 && stateCurrent2 !== allPages - 2) {
        pagerList[pagerList.length - 1] = createVNode(Pager, {
          "locale": locale2,
          "rootPrefixCls": prefixCls,
          "onClick": this.handleChange,
          "onKeypress": this.runIfEnter,
          "key": right,
          "page": right,
          "class": "".concat(prefixCls, "-item-before-jump-next"),
          "active": false,
          "showTitle": this.showTitle,
          "itemRender": itemRender
        }, null);
        pagerList.push(jumpNext2);
      }
      if (left !== 1) {
        pagerList.unshift(firstPager);
      }
      if (right !== allPages) {
        pagerList.push(lastPager);
      }
    }
    var totalText = null;
    if (showTotal) {
      totalText = createVNode("li", {
        "class": "".concat(prefixCls, "-total-text")
      }, [showTotal(total2, [total2 === 0 ? 0 : (stateCurrent2 - 1) * statePageSize + 1, stateCurrent2 * statePageSize > total2 ? total2 : stateCurrent2 * statePageSize])]);
    }
    var prevDisabled = !hasPrev2 || !allPages;
    var nextDisabled = !hasNext2 || !allPages;
    var buildOptionText = this.buildOptionText || this.$slots.buildOptionText;
    return createVNode("ul", _objectSpread(_objectSpread({
      "unselectable": "on",
      "ref": "paginationNode"
    }, restAttrs), {}, {
      "class": classNames((_classNames6 = {}, _defineProperty(_classNames6, "".concat(prefixCls), true), _defineProperty(_classNames6, "".concat(prefixCls, "-disabled"), disabled), _classNames6), className)
    }), [totalText, createVNode("li", {
      "title": showTitle ? locale2.prev_page : null,
      "onClick": this.prev,
      "tabindex": prevDisabled ? null : 0,
      "onKeypress": this.runIfEnterPrev,
      "class": classNames("".concat(prefixCls, "-prev"), _defineProperty({}, "".concat(prefixCls, "-disabled"), prevDisabled)),
      "aria-disabled": prevDisabled
    }, [this.renderPrev(prevPage)]), pagerList, createVNode("li", {
      "title": showTitle ? locale2.next_page : null,
      "onClick": this.next,
      "tabindex": nextDisabled ? null : 0,
      "onKeypress": this.runIfEnterNext,
      "class": classNames("".concat(prefixCls, "-next"), _defineProperty({}, "".concat(prefixCls, "-disabled"), nextDisabled)),
      "aria-disabled": nextDisabled
    }, [this.renderNext(nextPage)]), createVNode(Options, {
      "disabled": disabled,
      "locale": locale2,
      "rootPrefixCls": prefixCls,
      "selectComponentClass": selectComponentClass,
      "selectPrefixCls": selectPrefixCls,
      "changeSize": this.getShowSizeChanger() ? this.changePageSize : null,
      "current": stateCurrent2,
      "pageSize": statePageSize,
      "pageSizeOptions": pageSizeOptions,
      "buildOptionText": buildOptionText || null,
      "quickGo": this.shouldDisplayQuickJumper() ? this.handleChange : null,
      "goButton": goButton
    }, null)]);
  }
});
var _excluded$6 = ["size", "itemRender", "buildOptionText", "selectComponentClass", "responsive"];
var paginationProps = function paginationProps2() {
  return {
    total: Number,
    defaultCurrent: Number,
    disabled: {
      type: Boolean,
      default: void 0
    },
    current: Number,
    defaultPageSize: Number,
    pageSize: Number,
    hideOnSinglePage: {
      type: Boolean,
      default: void 0
    },
    showSizeChanger: {
      type: Boolean,
      default: void 0
    },
    pageSizeOptions: Array,
    buildOptionText: Function,
    showQuickJumper: {
      type: [Boolean, Object],
      default: void 0
    },
    showTotal: Function,
    size: String,
    simple: {
      type: Boolean,
      default: void 0
    },
    locale: Object,
    prefixCls: String,
    selectPrefixCls: String,
    totalBoundaryShowSizeChanger: Number,
    selectComponentClass: String,
    itemRender: Function,
    role: String,
    responsive: Boolean,
    showLessItems: {
      type: Boolean,
      default: void 0
    },
    onChange: Function,
    onShowSizeChange: Function,
    "onUpdate:current": Function,
    "onUpdate:pageSize": Function
  };
};
const Pagination = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "APagination",
  inheritAttrs: false,
  props: paginationProps(),
  setup: function setup81(props2, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs;
    var _useConfigInject = useConfigInject("pagination", props2), prefixCls = _useConfigInject.prefixCls, configProvider = _useConfigInject.configProvider, direction = _useConfigInject.direction;
    var selectPrefixCls = computed(function() {
      return configProvider.getPrefixCls("select", props2.selectPrefixCls);
    });
    var breakpoint = useBreakpoint();
    var _useLocaleReceiver = useLocaleReceiver("Pagination", enUS$1, toRef(props2, "locale")), _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 1), locale2 = _useLocaleReceiver2[0];
    var getIconsProps = function getIconsProps2(pre) {
      var ellipsis = createVNode("span", {
        "class": "".concat(pre, "-item-ellipsis")
      }, [createTextVNode("\u2022\u2022\u2022")]);
      var prevIcon = createVNode("button", {
        "class": "".concat(pre, "-item-link"),
        "type": "button",
        "tabindex": -1
      }, [createVNode(LeftOutlined, null, null)]);
      var nextIcon = createVNode("button", {
        "class": "".concat(pre, "-item-link"),
        "type": "button",
        "tabindex": -1
      }, [createVNode(RightOutlined, null, null)]);
      var jumpPrevIcon = createVNode("a", {
        "rel": "nofollow",
        "class": "".concat(pre, "-item-link")
      }, [createVNode("div", {
        "class": "".concat(pre, "-item-container")
      }, [createVNode(DoubleLeftOutlined, {
        "class": "".concat(pre, "-item-link-icon")
      }, null), ellipsis])]);
      var jumpNextIcon = createVNode("a", {
        "rel": "nofollow",
        "class": "".concat(pre, "-item-link")
      }, [createVNode("div", {
        "class": "".concat(pre, "-item-container")
      }, [createVNode(DoubleRightOutlined, {
        "class": "".concat(pre, "-item-link-icon")
      }, null), ellipsis])]);
      if (direction.value === "rtl") {
        var _ref2 = [nextIcon, prevIcon];
        prevIcon = _ref2[0];
        nextIcon = _ref2[1];
        var _ref3 = [jumpNextIcon, jumpPrevIcon];
        jumpPrevIcon = _ref3[0];
        jumpNextIcon = _ref3[1];
      }
      return {
        prevIcon,
        nextIcon,
        jumpPrevIcon,
        jumpNextIcon
      };
    };
    return function() {
      var _breakpoint$value;
      var size = props2.size, _props$itemRender = props2.itemRender, itemRender = _props$itemRender === void 0 ? slots.itemRender : _props$itemRender, _props$buildOptionTex = props2.buildOptionText, buildOptionText = _props$buildOptionTex === void 0 ? slots.buildOptionText : _props$buildOptionTex, selectComponentClass = props2.selectComponentClass, responsive = props2.responsive, restProps = _objectWithoutProperties(props2, _excluded$6);
      var isSmall = size === "small" || !!((_breakpoint$value = breakpoint.value) !== null && _breakpoint$value !== void 0 && _breakpoint$value.xs && !size && responsive);
      var paginationProps3 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, restProps), getIconsProps(prefixCls.value)), {}, {
        prefixCls: prefixCls.value,
        selectPrefixCls: selectPrefixCls.value,
        selectComponentClass: selectComponentClass || (isSmall ? MiniSelect : VcSelect),
        locale: locale2.value,
        buildOptionText
      }, attrs), {}, {
        class: classNames(_defineProperty({
          mini: isSmall
        }, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"), attrs.class),
        itemRender
      });
      return createVNode(VcPagination, paginationProps3, null);
    };
  }
});
const __unplugin_components_0$1 = withInstall(Pagination);
var _excluded$5 = ["prefixCls", "visible", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose"];
var mousePosition = null;
var getClickPosition = function getClickPosition2(e) {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  };
  setTimeout(function() {
    return mousePosition = null;
  }, 100);
};
if (canUseDocElement()) {
  addEventListenerWrap(document.documentElement, "click", getClickPosition, true);
}
var modalProps = function modalProps2() {
  return {
    prefixCls: String,
    visible: {
      type: Boolean,
      default: void 0
    },
    confirmLoading: {
      type: Boolean,
      default: void 0
    },
    title: PropTypes$1.any,
    closable: {
      type: Boolean,
      default: void 0
    },
    closeIcon: PropTypes$1.any,
    onOk: Function,
    onCancel: Function,
    "onUpdate:visible": Function,
    onChange: Function,
    afterClose: Function,
    centered: {
      type: Boolean,
      default: void 0
    },
    width: [String, Number],
    footer: PropTypes$1.any,
    okText: PropTypes$1.any,
    okType: String,
    cancelText: PropTypes$1.any,
    icon: PropTypes$1.any,
    maskClosable: {
      type: Boolean,
      default: void 0
    },
    forceRender: {
      type: Boolean,
      default: void 0
    },
    okButtonProps: Object,
    cancelButtonProps: Object,
    destroyOnClose: {
      type: Boolean,
      default: void 0
    },
    wrapClassName: String,
    maskTransitionName: String,
    transitionName: String,
    getContainer: {
      type: [String, Function, Boolean, Object],
      default: void 0
    },
    zIndex: Number,
    bodyStyle: {
      type: Object,
      default: void 0
    },
    maskStyle: {
      type: Object,
      default: void 0
    },
    mask: {
      type: Boolean,
      default: void 0
    },
    keyboard: {
      type: Boolean,
      default: void 0
    },
    wrapProps: Object,
    focusTriggerAfterClose: {
      type: Boolean,
      default: void 0
    },
    modalRender: Function
  };
};
var destroyFns = [];
const Modal = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AModal",
  inheritAttrs: false,
  props: initDefaultProps$1(modalProps(), {
    width: 520,
    transitionName: "zoom",
    maskTransitionName: "fade",
    confirmLoading: false,
    visible: false,
    okType: "primary"
  }),
  setup: function setup82(props2, _ref) {
    var emit = _ref.emit, slots = _ref.slots, attrs = _ref.attrs;
    var _useLocaleReceiver = useLocaleReceiver("Modal"), _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 1), locale2 = _useLocaleReceiver2[0];
    var _useConfigInject = useConfigInject("modal", props2), prefixCls = _useConfigInject.prefixCls, rootPrefixCls = _useConfigInject.rootPrefixCls, direction = _useConfigInject.direction, getPopupContainer = _useConfigInject.getPopupContainer;
    var handleCancel = function handleCancel2(e) {
      emit("update:visible", false);
      emit("cancel", e);
      emit("change", false);
    };
    var handleOk = function handleOk2(e) {
      emit("ok", e);
    };
    var renderFooter = function renderFooter2() {
      var _slots$okText, _slots$cancelText;
      var _props$okText = props2.okText, okText = _props$okText === void 0 ? (_slots$okText = slots.okText) === null || _slots$okText === void 0 ? void 0 : _slots$okText.call(slots) : _props$okText, okType = props2.okType, _props$cancelText = props2.cancelText, cancelText = _props$cancelText === void 0 ? (_slots$cancelText = slots.cancelText) === null || _slots$cancelText === void 0 ? void 0 : _slots$cancelText.call(slots) : _props$cancelText, confirmLoading = props2.confirmLoading;
      return createVNode(Fragment$1, null, [createVNode(Button$1, _objectSpread({
        "onClick": handleCancel
      }, props2.cancelButtonProps), {
        default: function _default4() {
          return [cancelText || locale2.value.cancelText];
        }
      }), createVNode(Button$1, _objectSpread(_objectSpread({}, convertLegacyProps(okType)), {}, {
        "loading": confirmLoading,
        "onClick": handleOk
      }, props2.okButtonProps), {
        default: function _default4() {
          return [okText || locale2.value.okText];
        }
      })]);
    };
    return function() {
      var _slots$closeIcon, _classNames;
      props2.prefixCls;
      var visible = props2.visible, wrapClassName = props2.wrapClassName, centered = props2.centered, getContainer4 = props2.getContainer, _props$closeIcon = props2.closeIcon, _closeIcon = _props$closeIcon === void 0 ? (_slots$closeIcon = slots.closeIcon) === null || _slots$closeIcon === void 0 ? void 0 : _slots$closeIcon.call(slots) : _props$closeIcon, _props$focusTriggerAf = props2.focusTriggerAfterClose, focusTriggerAfterClose = _props$focusTriggerAf === void 0 ? true : _props$focusTriggerAf, restProps = _objectWithoutProperties(props2, _excluded$5);
      var wrapClassNameExtended = classNames(wrapClassName, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-centered"), !!centered), _defineProperty(_classNames, "".concat(prefixCls.value, "-wrap-rtl"), direction.value === "rtl"), _classNames));
      return createVNode(DialogWrap$1, _objectSpread(_objectSpread(_objectSpread({}, restProps), attrs), {}, {
        "getContainer": getContainer4 || getPopupContainer.value,
        "prefixCls": prefixCls.value,
        "wrapClassName": wrapClassNameExtended,
        "visible": visible,
        "mousePosition": mousePosition,
        "onClose": handleCancel,
        "focusTriggerAfterClose": focusTriggerAfterClose,
        "transitionName": getTransitionName(rootPrefixCls.value, "zoom", props2.transitionName),
        "maskTransitionName": getTransitionName(rootPrefixCls.value, "fade", props2.maskTransitionName)
      }), _objectSpread(_objectSpread({}, slots), {}, {
        footer: slots.footer || renderFooter,
        closeIcon: function closeIcon() {
          return createVNode("span", {
            "class": "".concat(prefixCls.value, "-close-x")
          }, [_closeIcon || createVNode(CloseOutlined, {
            "class": "".concat(prefixCls.value, "-close-icon")
          }, null)]);
        }
      }));
    };
  }
});
var useDestroyed = function useDestroyed2() {
  var destroyed = ref(false);
  return destroyed;
};
const useDestroyed$1 = useDestroyed;
var actionButtonProps = {
  type: {
    type: String
  },
  actionFn: Function,
  close: Function,
  autofocus: Boolean,
  prefixCls: String,
  buttonProps: Object,
  emitEvent: Boolean,
  quitOnNullishReturnValue: Boolean
};
function isThenable(thing) {
  return !!(thing && !!thing.then);
}
const ActionButton = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ActionButton",
  props: actionButtonProps,
  setup: function setup83(props2, _ref) {
    var slots = _ref.slots;
    var clickedRef = ref(false);
    var buttonRef = ref();
    var loading = ref(false);
    var isDestroyed = useDestroyed$1();
    var handlePromiseOnOk = function handlePromiseOnOk2(returnValueOfOnOk) {
      var close3 = props2.close;
      if (!isThenable(returnValueOfOnOk)) {
        return;
      }
      loading.value = true;
      returnValueOfOnOk.then(function() {
        if (!isDestroyed.value) {
          loading.value = false;
        }
        close3.apply(void 0, arguments);
        clickedRef.value = false;
      }, function(e) {
        console.error(e);
        if (!isDestroyed.value) {
          loading.value = false;
        }
        clickedRef.value = false;
      });
    };
    var onClick2 = function onClick3(e) {
      var actionFn = props2.actionFn, _props$close = props2.close, close3 = _props$close === void 0 ? function() {
      } : _props$close;
      if (clickedRef.value) {
        return;
      }
      clickedRef.value = true;
      if (!actionFn) {
        close3();
        return;
      }
      var returnValueOfOnOk;
      if (props2.emitEvent) {
        returnValueOfOnOk = actionFn(e);
        if (props2.quitOnNullishReturnValue && !isThenable(returnValueOfOnOk)) {
          clickedRef.value = false;
          close3(e);
          return;
        }
      } else if (actionFn.length) {
        returnValueOfOnOk = actionFn(close3);
        clickedRef.value = false;
      } else {
        returnValueOfOnOk = actionFn();
        if (!returnValueOfOnOk) {
          close3();
          return;
        }
      }
      handlePromiseOnOk(returnValueOfOnOk);
    };
    return function() {
      var type = props2.type, prefixCls = props2.prefixCls, buttonProps3 = props2.buttonProps;
      return createVNode(Button$1, _objectSpread(_objectSpread(_objectSpread({}, convertLegacyProps(type)), {}, {
        "onClick": onClick2,
        "loading": loading.value,
        "prefixCls": prefixCls
      }, buttonProps3), {}, {
        "ref": buttonRef
      }), slots);
    };
  }
});
function renderSomeContent(someContent) {
  if (typeof someContent === "function") {
    return someContent();
  }
  return someContent;
}
const ConfirmDialog = defineComponent({
  name: "ConfirmDialog",
  inheritAttrs: false,
  props: ["icon", "onCancel", "onOk", "close", "closable", "zIndex", "afterClose", "visible", "keyboard", "centered", "getContainer", "maskStyle", "okButtonProps", "cancelButtonProps", "okType", "prefixCls", "okCancel", "width", "mask", "maskClosable", "okText", "cancelText", "autoFocusButton", "transitionName", "maskTransitionName", "type", "title", "content", "direction", "rootPrefixCls", "bodyStyle", "closeIcon", "modalRender", "focusTriggerAfterClose", "wrapClassName"],
  setup: function setup84(props2, _ref) {
    var attrs = _ref.attrs;
    var _useLocaleReceiver = useLocaleReceiver("Modal"), _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 1), locale2 = _useLocaleReceiver2[0];
    return function() {
      var icon = props2.icon, onCancel = props2.onCancel, onOk = props2.onOk, close3 = props2.close, _props$closable = props2.closable, closable = _props$closable === void 0 ? false : _props$closable, zIndex = props2.zIndex, afterClose = props2.afterClose, visible = props2.visible, keyboard = props2.keyboard, centered = props2.centered, getContainer4 = props2.getContainer, maskStyle = props2.maskStyle, okButtonProps = props2.okButtonProps, cancelButtonProps = props2.cancelButtonProps, _props$okCancel = props2.okCancel, okCancel = _props$okCancel === void 0 ? true : _props$okCancel, _props$width = props2.width, width = _props$width === void 0 ? 416 : _props$width, _props$mask = props2.mask, mask = _props$mask === void 0 ? true : _props$mask, _props$maskClosable = props2.maskClosable, maskClosable = _props$maskClosable === void 0 ? false : _props$maskClosable, type = props2.type, title = props2.title, content = props2.content, direction = props2.direction, closeIcon = props2.closeIcon, modalRender = props2.modalRender, focusTriggerAfterClose = props2.focusTriggerAfterClose, rootPrefixCls = props2.rootPrefixCls, bodyStyle = props2.bodyStyle, wrapClassName = props2.wrapClassName;
      var okType = props2.okType || "primary";
      var prefixCls = props2.prefixCls || "ant-modal";
      var contentPrefixCls = "".concat(prefixCls, "-confirm");
      var style = attrs.style || {};
      var okText = renderSomeContent(props2.okText) || (okCancel ? locale2.value.okText : locale2.value.justOkText);
      var cancelText = renderSomeContent(props2.cancelText) || locale2.value.cancelText;
      var autoFocusButton = props2.autoFocusButton === null ? false : props2.autoFocusButton || "ok";
      var classString = classNames(contentPrefixCls, "".concat(contentPrefixCls, "-").concat(type), "".concat(prefixCls, "-").concat(type), _defineProperty({}, "".concat(contentPrefixCls, "-rtl"), direction === "rtl"), attrs.class);
      var cancelButton = okCancel && createVNode(ActionButton, {
        "actionFn": onCancel,
        "close": close3,
        "autofocus": autoFocusButton === "cancel",
        "buttonProps": cancelButtonProps,
        "prefixCls": "".concat(rootPrefixCls, "-btn")
      }, {
        default: function _default4() {
          return [cancelText];
        }
      });
      return createVNode(Modal, {
        "prefixCls": prefixCls,
        "class": classString,
        "wrapClassName": classNames(_defineProperty({}, "".concat(contentPrefixCls, "-centered"), !!centered), wrapClassName),
        "onCancel": function onCancel2(e) {
          return close3({
            triggerCancel: true
          }, e);
        },
        "visible": visible,
        "title": "",
        "footer": "",
        "transitionName": getTransitionName(rootPrefixCls, "zoom", props2.transitionName),
        "maskTransitionName": getTransitionName(rootPrefixCls, "fade", props2.maskTransitionName),
        "mask": mask,
        "maskClosable": maskClosable,
        "maskStyle": maskStyle,
        "style": style,
        "bodyStyle": bodyStyle,
        "width": width,
        "zIndex": zIndex,
        "afterClose": afterClose,
        "keyboard": keyboard,
        "centered": centered,
        "getContainer": getContainer4,
        "closable": closable,
        "closeIcon": closeIcon,
        "modalRender": modalRender,
        "focusTriggerAfterClose": focusTriggerAfterClose
      }, {
        default: function _default4() {
          return [createVNode("div", {
            "class": "".concat(contentPrefixCls, "-body-wrapper")
          }, [createVNode("div", {
            "class": "".concat(contentPrefixCls, "-body")
          }, [renderSomeContent(icon), title === void 0 ? null : createVNode("span", {
            "class": "".concat(contentPrefixCls, "-title")
          }, [renderSomeContent(title)]), createVNode("div", {
            "class": "".concat(contentPrefixCls, "-content")
          }, [renderSomeContent(content)])]), createVNode("div", {
            "class": "".concat(contentPrefixCls, "-btns")
          }, [cancelButton, createVNode(ActionButton, {
            "type": okType,
            "actionFn": onOk,
            "close": close3,
            "autofocus": autoFocusButton === "ok",
            "buttonProps": okButtonProps,
            "prefixCls": "".concat(rootPrefixCls, "-btn")
          }, {
            default: function _default5() {
              return [okText];
            }
          })])])];
        }
      });
    };
  }
});
var confirm = function confirm2(config) {
  var container = document.createDocumentFragment();
  var currentConfig = _objectSpread(_objectSpread({}, omit$2(config, ["parentContext", "appContext"])), {}, {
    close: close3,
    visible: true
  });
  var confirmDialogInstance = null;
  function destroy3() {
    if (confirmDialogInstance) {
      render(null, container);
      confirmDialogInstance.component.update();
      confirmDialogInstance = null;
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var triggerCancel = args.some(function(param) {
      return param && param.triggerCancel;
    });
    if (config.onCancel && triggerCancel) {
      config.onCancel.apply(config, args);
    }
    for (var i = 0; i < destroyFns.length; i++) {
      var fn = destroyFns[i];
      if (fn === close3) {
        destroyFns.splice(i, 1);
        break;
      }
    }
  }
  function close3() {
    var _this = this;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    currentConfig = _objectSpread(_objectSpread({}, currentConfig), {}, {
      visible: false,
      afterClose: function afterClose() {
        if (typeof config.afterClose === "function") {
          config.afterClose();
        }
        destroy3.apply(_this, args);
      }
    });
    update(currentConfig);
  }
  function update(configUpdate) {
    if (typeof configUpdate === "function") {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = _objectSpread(_objectSpread({}, currentConfig), configUpdate);
    }
    if (confirmDialogInstance) {
      _extends(confirmDialogInstance.component.props, currentConfig);
      confirmDialogInstance.component.update();
    }
  }
  var Wrapper = function Wrapper2(p) {
    var global2 = globalConfigForApi;
    var rootPrefixCls = global2.prefixCls;
    var prefixCls = p.prefixCls || "".concat(rootPrefixCls, "-modal");
    return createVNode(ConfigProvider, _objectSpread(_objectSpread({}, global2), {}, {
      "notUpdateGlobalConfig": true,
      "prefixCls": rootPrefixCls
    }), {
      default: function _default4() {
        return [createVNode(ConfirmDialog, _objectSpread(_objectSpread({}, p), {}, {
          "rootPrefixCls": rootPrefixCls,
          "prefixCls": prefixCls
        }), null)];
      }
    });
  };
  function render$1(props2) {
    var vm = createVNode(Wrapper, _objectSpread({}, props2));
    vm.appContext = config.parentContext || config.appContext || vm.appContext;
    render(vm, container);
    return vm;
  }
  confirmDialogInstance = render$1(currentConfig);
  destroyFns.push(close3);
  return {
    destroy: close3,
    update
  };
};
const confirm$1 = confirm;
function withWarn(props2) {
  return _objectSpread(_objectSpread({
    icon: function icon() {
      return createVNode(ExclamationCircleOutlined, null, null);
    },
    okCancel: false
  }, props2), {}, {
    type: "warning"
  });
}
function withInfo(props2) {
  return _objectSpread(_objectSpread({
    icon: function icon() {
      return createVNode(InfoCircleOutlined, null, null);
    },
    okCancel: false
  }, props2), {}, {
    type: "info"
  });
}
function withSuccess(props2) {
  return _objectSpread(_objectSpread({
    icon: function icon() {
      return createVNode(CheckCircleOutlined, null, null);
    },
    okCancel: false
  }, props2), {}, {
    type: "success"
  });
}
function withError(props2) {
  return _objectSpread(_objectSpread({
    icon: function icon() {
      return createVNode(CloseCircleOutlined, null, null);
    },
    okCancel: false
  }, props2), {}, {
    type: "error"
  });
}
function withConfirm(props2) {
  return _objectSpread(_objectSpread({
    icon: function icon() {
      return createVNode(ExclamationCircleOutlined, null, null);
    },
    okCancel: true
  }, props2), {}, {
    type: "confirm"
  });
}
function modalWarn(props2) {
  return confirm$1(withWarn(props2));
}
Modal.info = function infoFn(props2) {
  return confirm$1(withInfo(props2));
};
Modal.success = function successFn(props2) {
  return confirm$1(withSuccess(props2));
};
Modal.error = function errorFn(props2) {
  return confirm$1(withError(props2));
};
Modal.warning = modalWarn;
Modal.warn = modalWarn;
Modal.confirm = function confirmFn(props2) {
  return confirm$1(withConfirm(props2));
};
Modal.destroyAll = function destroyAllFn() {
  while (destroyFns.length) {
    var close3 = destroyFns.pop();
    if (close3) {
      close3();
    }
  }
};
Modal.install = function(app) {
  app.component(Modal.name, Modal);
  return app;
};
var progressStatuses = tuple("normal", "exception", "active", "success");
var ProgressType = tuple("line", "circle", "dashboard");
var ProgressSize = tuple("default", "small");
var progressProps = function progressProps2() {
  return {
    prefixCls: String,
    type: PropTypes$1.oneOf(ProgressType),
    percent: Number,
    format: {
      type: Function
    },
    status: PropTypes$1.oneOf(progressStatuses),
    showInfo: {
      type: Boolean,
      default: void 0
    },
    strokeWidth: Number,
    strokeLinecap: String,
    strokeColor: {
      type: [String, Object],
      default: void 0
    },
    trailColor: String,
    width: Number,
    success: {
      type: Object,
      default: function _default4() {
        return {};
      }
    },
    gapDegree: Number,
    gapPosition: String,
    size: PropTypes$1.oneOf(ProgressSize),
    steps: Number,
    successPercent: Number,
    title: String
  };
};
function validProgress(progress) {
  if (!progress || progress < 0) {
    return 0;
  }
  if (progress > 100) {
    return 100;
  }
  return progress;
}
function getSuccessPercent(_ref) {
  var success = _ref.success, successPercent = _ref.successPercent;
  var percent = successPercent;
  if (success && "progress" in success) {
    devWarning(false, "Progress", "`success.progress` is deprecated. Please use `success.percent` instead.");
    percent = success.progress;
  }
  if (success && "percent" in success) {
    percent = success.percent;
  }
  return percent;
}
var _excluded$4 = ["from", "to", "direction"];
var lineProps = function lineProps2() {
  return _objectSpread(_objectSpread({}, progressProps()), {}, {
    prefixCls: String,
    direction: {
      type: String
    }
  });
};
var sortGradient = function sortGradient2(gradients) {
  var tempArr = [];
  Object.keys(gradients).forEach(function(key2) {
    var formattedKey = parseFloat(key2.replace(/%/g, ""));
    if (!isNaN(formattedKey)) {
      tempArr.push({
        key: formattedKey,
        value: gradients[key2]
      });
    }
  });
  tempArr = tempArr.sort(function(a, b) {
    return a.key - b.key;
  });
  return tempArr.map(function(_ref) {
    var key2 = _ref.key, value = _ref.value;
    return "".concat(value, " ").concat(key2, "%");
  }).join(", ");
};
var handleGradient = function handleGradient2(strokeColor, directionConfig) {
  var _strokeColor$from = strokeColor.from, from = _strokeColor$from === void 0 ? presetPrimaryColors.blue : _strokeColor$from, _strokeColor$to = strokeColor.to, to = _strokeColor$to === void 0 ? presetPrimaryColors.blue : _strokeColor$to, _strokeColor$directio = strokeColor.direction, direction = _strokeColor$directio === void 0 ? directionConfig === "rtl" ? "to left" : "to right" : _strokeColor$directio, rest = _objectWithoutProperties(strokeColor, _excluded$4);
  if (Object.keys(rest).length !== 0) {
    var sortedGradients = sortGradient(rest);
    return {
      backgroundImage: "linear-gradient(".concat(direction, ", ").concat(sortedGradients, ")")
    };
  }
  return {
    backgroundImage: "linear-gradient(".concat(direction, ", ").concat(from, ", ").concat(to, ")")
  };
};
const Line = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Line",
  props: lineProps(),
  setup: function setup85(props2, _ref2) {
    var slots = _ref2.slots;
    var backgroundProps = computed(function() {
      var strokeColor = props2.strokeColor, direction = props2.direction;
      return strokeColor && typeof strokeColor !== "string" ? handleGradient(strokeColor, direction) : {
        background: strokeColor
      };
    });
    var trailStyle = computed(function() {
      return props2.trailColor ? {
        backgroundColor: props2.trailColor
      } : void 0;
    });
    var percentStyle = computed(function() {
      var percent = props2.percent, strokeWidth = props2.strokeWidth, strokeLinecap = props2.strokeLinecap, size = props2.size;
      return _objectSpread({
        width: "".concat(validProgress(percent), "%"),
        height: "".concat(strokeWidth || (size === "small" ? 6 : 8), "px"),
        borderRadius: strokeLinecap === "square" ? 0 : ""
      }, backgroundProps.value);
    });
    var successPercent = computed(function() {
      return getSuccessPercent(props2);
    });
    var successPercentStyle = computed(function() {
      var strokeWidth = props2.strokeWidth, size = props2.size, strokeLinecap = props2.strokeLinecap, success = props2.success;
      return {
        width: "".concat(validProgress(successPercent.value), "%"),
        height: "".concat(strokeWidth || (size === "small" ? 6 : 8), "px"),
        borderRadius: strokeLinecap === "square" ? 0 : "",
        backgroundColor: success === null || success === void 0 ? void 0 : success.strokeColor
      };
    });
    return function() {
      var _slots$default;
      return createVNode(Fragment$1, null, [createVNode("div", {
        "class": "".concat(props2.prefixCls, "-outer")
      }, [createVNode("div", {
        "class": "".concat(props2.prefixCls, "-inner"),
        "style": trailStyle.value
      }, [createVNode("div", {
        "class": "".concat(props2.prefixCls, "-bg"),
        "style": percentStyle.value
      }, null), successPercent.value !== void 0 ? createVNode("div", {
        "class": "".concat(props2.prefixCls, "-success-bg"),
        "style": successPercentStyle.value
      }, null) : null])]), (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});
var defaultProps = {
  percent: 0,
  prefixCls: "vc-progress",
  strokeColor: "#2db7f5",
  strokeLinecap: "round",
  strokeWidth: 1,
  trailColor: "#D9D9D9",
  trailWidth: 1
};
var useTransitionDuration = function useTransitionDuration2(paths) {
  var prevTimeStamp = ref(null);
  onUpdated(function() {
    var now2 = Date.now();
    var updated2 = false;
    paths.value.forEach(function(val) {
      var path = (val === null || val === void 0 ? void 0 : val.$el) || val;
      if (!path) {
        return;
      }
      updated2 = true;
      var pathStyle = path.style;
      pathStyle.transitionDuration = ".3s, .3s, .3s, .06s";
      if (prevTimeStamp.value && now2 - prevTimeStamp.value < 100) {
        pathStyle.transitionDuration = "0s, 0s";
      }
    });
    if (updated2) {
      prevTimeStamp.value = Date.now();
    }
  });
  return paths;
};
var propTypes = {
  gapDegree: Number,
  gapPosition: {
    type: String
  },
  percent: {
    type: [Array, Number]
  },
  prefixCls: String,
  strokeColor: {
    type: [Object, String, Array]
  },
  strokeLinecap: {
    type: String
  },
  strokeWidth: Number,
  trailColor: String,
  trailWidth: Number,
  transition: String
};
var _excluded$3 = ["prefixCls", "strokeWidth", "trailWidth", "gapDegree", "gapPosition", "trailColor", "strokeLinecap", "strokeColor"];
var gradientSeed = 0;
function stripPercentToNumber(percent) {
  return +percent.replace("%", "");
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function getPathStyles(offset2, percent, strokeColor, strokeWidth) {
  var gapDegree = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  var gapPosition = arguments.length > 5 ? arguments[5] : void 0;
  var radius = 50 - strokeWidth / 2;
  var beginPositionX = 0;
  var beginPositionY = -radius;
  var endPositionX = 0;
  var endPositionY = -2 * radius;
  switch (gapPosition) {
    case "left":
      beginPositionX = -radius;
      beginPositionY = 0;
      endPositionX = 2 * radius;
      endPositionY = 0;
      break;
    case "right":
      beginPositionX = radius;
      beginPositionY = 0;
      endPositionX = -2 * radius;
      endPositionY = 0;
      break;
    case "bottom":
      beginPositionY = radius;
      endPositionY = 2 * radius;
      break;
  }
  var pathString = "M 50,50 m ".concat(beginPositionX, ",").concat(beginPositionY, "\n   a ").concat(radius, ",").concat(radius, " 0 1 1 ").concat(endPositionX, ",").concat(-endPositionY, "\n   a ").concat(radius, ",").concat(radius, " 0 1 1 ").concat(-endPositionX, ",").concat(endPositionY);
  var len = Math.PI * 2 * radius;
  var pathStyle = {
    stroke: strokeColor,
    strokeDasharray: "".concat(percent / 100 * (len - gapDegree), "px ").concat(len, "px"),
    strokeDashoffset: "-".concat(gapDegree / 2 + offset2 / 100 * (len - gapDegree), "px"),
    transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s"
  };
  return {
    pathString,
    pathStyle
  };
}
const VCCircle = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "VCCircle",
  props: initDefaultProps$1(propTypes, defaultProps),
  setup: function setup86(props2) {
    gradientSeed += 1;
    var gradientId = ref(gradientSeed);
    var percentList = computed(function() {
      return toArray(props2.percent);
    });
    var strokeColorList = computed(function() {
      return toArray(props2.strokeColor);
    });
    var _useRefs = useRefs$1(), _useRefs2 = _slicedToArray(_useRefs, 2), setRef = _useRefs2[0], paths = _useRefs2[1];
    useTransitionDuration(paths);
    var getStokeList = function getStokeList2() {
      var prefixCls = props2.prefixCls, strokeWidth = props2.strokeWidth, strokeLinecap = props2.strokeLinecap, gapDegree = props2.gapDegree, gapPosition = props2.gapPosition;
      var stackPtg = 0;
      return percentList.value.map(function(ptg, index2) {
        var color = strokeColorList.value[index2] || strokeColorList.value[strokeColorList.value.length - 1];
        var stroke = Object.prototype.toString.call(color) === "[object Object]" ? "url(#".concat(prefixCls, "-gradient-").concat(gradientId.value, ")") : "";
        var _getPathStyles = getPathStyles(stackPtg, ptg, color, strokeWidth, gapDegree, gapPosition), pathString = _getPathStyles.pathString, pathStyle = _getPathStyles.pathStyle;
        stackPtg += ptg;
        var pathProps = {
          key: index2,
          d: pathString,
          stroke,
          "stroke-linecap": strokeLinecap,
          "stroke-width": strokeWidth,
          opacity: ptg === 0 ? 0 : 1,
          "fill-opacity": "0",
          class: "".concat(prefixCls, "-circle-path"),
          style: pathStyle
        };
        return createVNode("path", _objectSpread({
          "ref": setRef(index2)
        }, pathProps), null);
      });
    };
    return function() {
      var prefixCls = props2.prefixCls, strokeWidth = props2.strokeWidth, trailWidth = props2.trailWidth, gapDegree = props2.gapDegree, gapPosition = props2.gapPosition, trailColor = props2.trailColor, strokeLinecap = props2.strokeLinecap;
      props2.strokeColor;
      var restProps = _objectWithoutProperties(props2, _excluded$3);
      var _getPathStyles2 = getPathStyles(0, 100, trailColor, strokeWidth, gapDegree, gapPosition), pathString = _getPathStyles2.pathString, pathStyle = _getPathStyles2.pathStyle;
      delete restProps.percent;
      var gradient = strokeColorList.value.find(function(color) {
        return Object.prototype.toString.call(color) === "[object Object]";
      });
      var pathFirst = {
        d: pathString,
        stroke: trailColor,
        "stroke-linecap": strokeLinecap,
        "stroke-width": trailWidth || strokeWidth,
        "fill-opacity": "0",
        class: "".concat(prefixCls, "-circle-trail"),
        style: pathStyle
      };
      return createVNode("svg", _objectSpread({
        "class": "".concat(prefixCls, "-circle"),
        "viewBox": "0 0 100 100"
      }, restProps), [gradient && createVNode("defs", null, [createVNode("linearGradient", {
        "id": "".concat(prefixCls, "-gradient-").concat(gradientId.value),
        "x1": "100%",
        "y1": "0%",
        "x2": "0%",
        "y2": "0%"
      }, [Object.keys(gradient).sort(function(a, b) {
        return stripPercentToNumber(a) - stripPercentToNumber(b);
      }).map(function(key2, index2) {
        return createVNode("stop", {
          "key": index2,
          "offset": key2,
          "stop-color": gradient[key2]
        }, null);
      })])]), createVNode("path", pathFirst, null), getStokeList().reverse()]);
    };
  }
});
function getPercentage(_ref) {
  var percent = _ref.percent, success = _ref.success, successPercent = _ref.successPercent;
  var realSuccessPercent = validProgress(getSuccessPercent({
    success,
    successPercent
  }));
  return [realSuccessPercent, validProgress(validProgress(percent) - realSuccessPercent)];
}
function getStrokeColor(_ref2) {
  var _ref2$success = _ref2.success, success = _ref2$success === void 0 ? {} : _ref2$success, strokeColor = _ref2.strokeColor;
  var successColor = success.strokeColor;
  return [successColor || presetPrimaryColors.green, strokeColor || null];
}
const Circle = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Circle",
  inheritAttrs: false,
  props: progressProps(),
  setup: function setup87(props2, _ref3) {
    var slots = _ref3.slots;
    var gapDeg = computed(function() {
      if (props2.gapDegree || props2.gapDegree === 0) {
        return props2.gapDegree;
      }
      if (props2.type === "dashboard") {
        return 75;
      }
      return void 0;
    });
    var circleStyle = computed(function() {
      var circleSize = props2.width || 120;
      return {
        width: typeof circleSize === "number" ? "".concat(circleSize, "px") : circleSize,
        height: typeof circleSize === "number" ? "".concat(circleSize, "px") : circleSize,
        fontSize: "".concat(circleSize * 0.15 + 6, "px")
      };
    });
    var circleWidth = computed(function() {
      return props2.strokeWidth || 6;
    });
    var gapPos = computed(function() {
      return props2.gapPosition || props2.type === "dashboard" && "bottom" || "top";
    });
    var percent = computed(function() {
      return getPercentage(props2);
    });
    var isGradient = computed(function() {
      return Object.prototype.toString.call(props2.strokeColor) === "[object Object]";
    });
    var strokeColor = computed(function() {
      return getStrokeColor({
        success: props2.success,
        strokeColor: props2.strokeColor
      });
    });
    var wrapperClassName = computed(function() {
      var _ref4;
      return _ref4 = {}, _defineProperty(_ref4, "".concat(props2.prefixCls, "-inner"), true), _defineProperty(_ref4, "".concat(props2.prefixCls, "-circle-gradient"), isGradient.value), _ref4;
    });
    return function() {
      var _slots$default;
      return createVNode("div", {
        "class": wrapperClassName.value,
        "style": circleStyle.value
      }, [createVNode(VCCircle, {
        "percent": percent.value,
        "strokeWidth": circleWidth.value,
        "trailWidth": circleWidth.value,
        "strokeColor": strokeColor.value,
        "strokeLinecap": props2.strokeLinecap,
        "trailColor": props2.trailColor,
        "prefixCls": props2.prefixCls,
        "gapDegree": gapDeg.value,
        "gapPosition": gapPos.value
      }, null), (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});
var stepsProps = function stepsProps2() {
  return _objectSpread(_objectSpread({}, progressProps()), {}, {
    steps: Number,
    size: {
      type: String
    },
    strokeColor: String,
    trailColor: String
  });
};
const Steps = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Steps",
  props: stepsProps(),
  setup: function setup88(props2, _ref) {
    var slots = _ref.slots;
    var current2 = computed(function() {
      return Math.round(props2.steps * ((props2.percent || 0) / 100));
    });
    var stepWidth = computed(function() {
      return props2.size === "small" ? 2 : 14;
    });
    var styledSteps = computed(function() {
      var steps = props2.steps, _props$strokeWidth = props2.strokeWidth, strokeWidth = _props$strokeWidth === void 0 ? 8 : _props$strokeWidth, strokeColor = props2.strokeColor, trailColor = props2.trailColor, prefixCls = props2.prefixCls;
      var temp = [];
      for (var i = 0; i < steps; i += 1) {
        var _cls;
        var cls = (_cls = {}, _defineProperty(_cls, "".concat(prefixCls, "-steps-item"), true), _defineProperty(_cls, "".concat(prefixCls, "-steps-item-active"), i <= current2.value - 1), _cls);
        temp.push(createVNode("div", {
          "key": i,
          "class": cls,
          "style": {
            backgroundColor: i <= current2.value - 1 ? strokeColor : trailColor,
            width: "".concat(stepWidth.value, "px"),
            height: "".concat(strokeWidth, "px")
          }
        }, null));
      }
      return temp;
    });
    return function() {
      var _slots$default;
      return createVNode("div", {
        "class": "".concat(props2.prefixCls, "-steps-outer")
      }, [styledSteps.value, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});
const Progress = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AProgress",
  props: initDefaultProps$1(progressProps(), {
    type: "line",
    percent: 0,
    showInfo: true,
    trailColor: null,
    size: "default",
    strokeLinecap: "round"
  }),
  slots: ["format"],
  setup: function setup89(props2, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject("progress", props2), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    devWarning(props2.successPercent == void 0, "Progress", "`successPercent` is deprecated. Please use `success.percent` instead.");
    var classString = computed(function() {
      var _ref2;
      var type = props2.type, showInfo = props2.showInfo, size = props2.size;
      var pre = prefixCls.value;
      return _ref2 = {}, _defineProperty(_ref2, pre, true), _defineProperty(_ref2, "".concat(pre, "-").concat(type === "dashboard" && "circle" || type), true), _defineProperty(_ref2, "".concat(pre, "-show-info"), showInfo), _defineProperty(_ref2, "".concat(pre, "-").concat(size), size), _defineProperty(_ref2, "".concat(pre, "-rtl"), direction.value === "rtl"), _ref2;
    });
    var percentNumber = computed(function() {
      var _props$percent = props2.percent, percent = _props$percent === void 0 ? 0 : _props$percent;
      var successPercent = getSuccessPercent(props2);
      return parseInt(successPercent !== void 0 ? successPercent.toString() : percent.toString(), 10);
    });
    var progressStatus = computed(function() {
      var status = props2.status;
      if (progressStatuses.indexOf(status) < 0 && percentNumber.value >= 100) {
        return "success";
      }
      return status || "normal";
    });
    var renderProcessInfo = function renderProcessInfo2() {
      var showInfo = props2.showInfo, format = props2.format, type = props2.type, percent = props2.percent, title = props2.title;
      var successPercent = getSuccessPercent(props2);
      if (!showInfo)
        return null;
      var text;
      var textFormatter = format || (slots === null || slots === void 0 ? void 0 : slots.format) || function(val) {
        return "".concat(val, "%");
      };
      var isLineType = type === "line";
      if (format || slots !== null && slots !== void 0 && slots.format || progressStatus.value !== "exception" && progressStatus.value !== "success") {
        text = textFormatter(validProgress(percent), validProgress(successPercent));
      } else if (progressStatus.value === "exception") {
        text = isLineType ? createVNode(CloseCircleFilled, null, null) : createVNode(CloseOutlined, null, null);
      } else if (progressStatus.value === "success") {
        text = isLineType ? createVNode(CheckCircleFilled, null, null) : createVNode(CheckOutlined, null, null);
      }
      return createVNode("span", {
        "class": "".concat(prefixCls.value, "-text"),
        "title": title === void 0 && typeof text === "string" ? text : void 0
      }, [text]);
    };
    return function() {
      var type = props2.type, steps = props2.steps, strokeColor = props2.strokeColor, title = props2.title;
      var progressInfo = renderProcessInfo();
      var progress;
      if (type === "line") {
        progress = steps ? createVNode(Steps, _objectSpread(_objectSpread({}, props2), {}, {
          "strokeColor": typeof strokeColor === "string" ? strokeColor : void 0,
          "prefixCls": prefixCls.value,
          "steps": steps
        }), {
          default: function _default4() {
            return [progressInfo];
          }
        }) : createVNode(Line, _objectSpread(_objectSpread({}, props2), {}, {
          "prefixCls": prefixCls.value
        }), {
          default: function _default4() {
            return [progressInfo];
          }
        });
      } else if (type === "circle" || type === "dashboard") {
        progress = createVNode(Circle, _objectSpread(_objectSpread({}, props2), {}, {
          "prefixCls": prefixCls.value
        }), {
          default: function _default4() {
            return [progressInfo];
          }
        });
      }
      var classNames2 = _objectSpread(_objectSpread({}, classString.value), {}, _defineProperty({}, "".concat(prefixCls.value, "-status-").concat(progressStatus.value), true));
      return createVNode("div", {
        "class": classNames2,
        "title": title
      }, [progress]);
    };
  }
});
const __unplugin_components_0 = withInstall(Progress);
var now = +new Date();
var index$g = 0;
function uid() {
  return "vc-upload-".concat(now, "-").concat(++index$g);
}
const attrAccept = function(file, acceptedFiles) {
  if (file && acceptedFiles) {
    var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(",");
    var fileName = file.name || "";
    var mimeType = file.type || "";
    var baseMimeType = mimeType.replace(/\/.*$/, "");
    return acceptedFilesArray.some(function(type) {
      var validType = type.trim();
      if (/^\*(\/\*)?$/.test(type)) {
        return true;
      }
      if (validType.charAt(0) === ".") {
        var lowerFileName = fileName.toLowerCase();
        var lowerType = validType.toLowerCase();
        var affixList = [lowerType];
        if (lowerType === ".jpg" || lowerType === ".jpeg") {
          affixList = [".jpg", ".jpeg"];
        }
        return affixList.some(function(affix) {
          return lowerFileName.endsWith(affix);
        });
      }
      if (/\/\*$/.test(validType)) {
        return baseMimeType === validType.replace(/\/.*$/, "");
      }
      if (mimeType === validType) {
        return true;
      }
      if (/^\w+$/.test(validType)) {
        warning$1(false, "Upload takes an invalidate 'accept' type '".concat(validType, "'.Skip for check."));
        return true;
      }
      return false;
    });
  }
  return true;
};
function loopFiles(item, callback) {
  var dirReader = item.createReader();
  var fileList = [];
  function sequence() {
    dirReader.readEntries(function(entries) {
      var entryList = Array.prototype.slice.apply(entries);
      fileList = fileList.concat(entryList);
      var isFinished = !entryList.length;
      if (isFinished) {
        callback(fileList);
      } else {
        sequence();
      }
    });
  }
  sequence();
}
var traverseFileTree = function traverseFileTree2(files, callback, isAccepted) {
  var _traverseFileTree = function _traverseFileTree2(item, path) {
    item.path = path || "";
    if (item.isFile) {
      item.file(function(file) {
        if (isAccepted(file)) {
          if (item.fullPath && !file.webkitRelativePath) {
            Object.defineProperties(file, {
              webkitRelativePath: {
                writable: true
              }
            });
            file.webkitRelativePath = item.fullPath.replace(/^\//, "");
            Object.defineProperties(file, {
              webkitRelativePath: {
                writable: false
              }
            });
          }
          callback([file]);
        }
      });
    } else if (item.isDirectory) {
      loopFiles(item, function(entries) {
        entries.forEach(function(entryItem) {
          _traverseFileTree2(entryItem, "".concat(path).concat(item.name, "/"));
        });
      });
    }
  };
  files.forEach(function(file) {
    _traverseFileTree(file.webkitGetAsEntry());
  });
};
const traverseFileTree$1 = traverseFileTree;
var uploadProps$1 = function uploadProps() {
  return {
    capture: [Boolean, String],
    multipart: {
      type: Boolean,
      default: void 0
    },
    name: String,
    disabled: {
      type: Boolean,
      default: void 0
    },
    componentTag: String,
    action: [String, Function],
    method: String,
    directory: {
      type: Boolean,
      default: void 0
    },
    data: [Object, Function],
    headers: Object,
    accept: String,
    multiple: {
      type: Boolean,
      default: void 0
    },
    onBatchStart: Function,
    onReject: Function,
    onStart: Function,
    onError: Function,
    onSuccess: Function,
    onProgress: Function,
    beforeUpload: Function,
    customRequest: Function,
    withCredentials: {
      type: Boolean,
      default: void 0
    },
    openFileDialogOnClick: {
      type: Boolean,
      default: void 0
    },
    prefixCls: String,
    id: String,
    onMouseenter: Function,
    onMouseleave: Function,
    onClick: Function
  };
};
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    var value = array[index2];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index2 = -1, iterable = Object(object), props2 = keysFunc(object), length = props2.length;
    while (length--) {
      var key2 = props2[fromRight ? length : ++index2];
      if (iteratee(iterable[key2], key2, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var baseFor = createBaseFor();
const baseFor$1 = baseFor;
function baseForOwn(object, iteratee) {
  return object && baseFor$1(object, iteratee, keys);
}
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length, index2 = fromRight ? length : -1, iterable = Object(collection);
    while (fromRight ? index2-- : ++index2 < length) {
      if (iteratee(iterable[index2], index2, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var baseEach = createBaseEach(baseForOwn);
const baseEach$1 = baseEach;
function baseAggregator(collection, setter, iteratee, accumulator) {
  baseEach$1(collection, function(value, key2, collection2) {
    setter(accumulator, value, iteratee(value), collection2);
  });
  return accumulator;
}
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray$1(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
    return func(collection, setter, baseIteratee(iteratee), accumulator);
  };
}
var partition = createAggregator(function(result, value, key2) {
  result[key2 ? 0 : 1].push(value);
}, function() {
  return [[], []];
});
const partition$1 = partition;
var _excluded$2 = ["componentTag", "prefixCls", "disabled", "id", "multiple", "accept", "capture", "directory", "openFileDialogOnClick", "onMouseenter", "onMouseleave"];
const AjaxUpload = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AjaxUploader",
  inheritAttrs: false,
  props: uploadProps$1(),
  setup: function setup90(props2, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs, expose = _ref.expose;
    var uid$1 = ref(uid());
    var reqs = {};
    var fileInput2 = ref();
    var processFile = /* @__PURE__ */ function() {
      var _ref2 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime.mark(function _callee(file, fileList) {
        var beforeUpload, transformedFile, action, mergedAction, data3, mergedData, parsedData, parsedFile, mergedParsedFile;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                beforeUpload = props2.beforeUpload;
                transformedFile = file;
                if (!beforeUpload) {
                  _context.next = 14;
                  break;
                }
                _context.prev = 3;
                _context.next = 6;
                return beforeUpload(file, fileList);
              case 6:
                transformedFile = _context.sent;
                _context.next = 12;
                break;
              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](3);
                transformedFile = false;
              case 12:
                if (!(transformedFile === false)) {
                  _context.next = 14;
                  break;
                }
                return _context.abrupt("return", {
                  origin: file,
                  parsedFile: null,
                  action: null,
                  data: null
                });
              case 14:
                action = props2.action;
                if (!(typeof action === "function")) {
                  _context.next = 21;
                  break;
                }
                _context.next = 18;
                return action(file);
              case 18:
                mergedAction = _context.sent;
                _context.next = 22;
                break;
              case 21:
                mergedAction = action;
              case 22:
                data3 = props2.data;
                if (!(typeof data3 === "function")) {
                  _context.next = 29;
                  break;
                }
                _context.next = 26;
                return data3(file);
              case 26:
                mergedData = _context.sent;
                _context.next = 30;
                break;
              case 29:
                mergedData = data3;
              case 30:
                parsedData = (_typeof(transformedFile) === "object" || typeof transformedFile === "string") && transformedFile ? transformedFile : file;
                if (parsedData instanceof File) {
                  parsedFile = parsedData;
                } else {
                  parsedFile = new File([parsedData], file.name, {
                    type: file.type
                  });
                }
                mergedParsedFile = parsedFile;
                mergedParsedFile.uid = file.uid;
                return _context.abrupt("return", {
                  origin: file,
                  data: mergedData,
                  parsedFile: mergedParsedFile,
                  action: mergedAction
                });
              case 35:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 9]]);
      }));
      return function processFile2(_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }();
    var post = function post2(_ref3) {
      _ref3.data;
      _ref3.origin;
      _ref3.action;
      _ref3.parsedFile;
      {
        return;
      }
    };
    var reset = function reset2() {
      uid$1.value = uid();
    };
    var abort = function abort2(file) {
      if (file) {
        var _uid = file.uid ? file.uid : file;
        if (reqs[_uid] && reqs[_uid].abort) {
          reqs[_uid].abort();
        }
        delete reqs[_uid];
      } else {
        Object.keys(reqs).forEach(function(uid2) {
          if (reqs[uid2] && reqs[uid2].abort) {
            reqs[uid2].abort();
          }
          delete reqs[uid2];
        });
      }
    };
    var uploadFiles = function uploadFiles2(files) {
      var originFiles = _toConsumableArray(files);
      var postFiles = originFiles.map(function(file) {
        file.uid = uid();
        return processFile(file, originFiles);
      });
      Promise.all(postFiles).then(function(fileList) {
        var onBatchStart = props2.onBatchStart;
        onBatchStart === null || onBatchStart === void 0 ? void 0 : onBatchStart(fileList.map(function(_ref4) {
          var origin = _ref4.origin, parsedFile = _ref4.parsedFile;
          return {
            file: origin,
            parsedFile
          };
        }));
        fileList.filter(function(file) {
          return file.parsedFile !== null;
        }).forEach(function(file) {
          post(file);
        });
      });
    };
    var onChange = function onChange2(e) {
      var accept = props2.accept, directory = props2.directory;
      var files = e.target.files;
      var acceptedFiles = _toConsumableArray(files).filter(function(file) {
        return !directory || attrAccept(file, accept);
      });
      uploadFiles(acceptedFiles);
      reset();
    };
    var onClick2 = function onClick3(e) {
      var el = fileInput2.value;
      if (!el) {
        return;
      }
      var onClick4 = props2.onClick;
      el.click();
      if (onClick4) {
        onClick4(e);
      }
    };
    var onKeyDown = function onKeyDown2(e) {
      if (e.key === "Enter") {
        onClick2(e);
      }
    };
    var onFileDrop = function onFileDrop2(e) {
      var multiple = props2.multiple;
      e.preventDefault();
      if (e.type === "dragover") {
        return;
      }
      if (props2.directory) {
        traverseFileTree$1(Array.prototype.slice.call(e.dataTransfer.items), uploadFiles, function(_file) {
          return attrAccept(_file, props2.accept);
        });
      } else {
        var files = partition$1(Array.prototype.slice.call(e.dataTransfer.files), function(file) {
          return attrAccept(file, props2.accept);
        });
        var successFiles = files[0];
        var errorFiles = files[1];
        if (multiple === false) {
          successFiles = successFiles.slice(0, 1);
        }
        uploadFiles(successFiles);
        if (errorFiles.length && props2.onReject)
          props2.onReject(errorFiles);
      }
    };
    expose({
      abort
    });
    return function() {
      var _cls, _slots$default;
      var Tag2 = props2.componentTag, prefixCls = props2.prefixCls, disabled = props2.disabled, id = props2.id, multiple = props2.multiple, accept = props2.accept, capture = props2.capture, directory = props2.directory, openFileDialogOnClick = props2.openFileDialogOnClick, onMouseenter2 = props2.onMouseenter, onMouseleave2 = props2.onMouseleave, otherProps = _objectWithoutProperties(props2, _excluded$2);
      var cls = (_cls = {}, _defineProperty(_cls, prefixCls, true), _defineProperty(_cls, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_cls, attrs.class, !!attrs.class), _cls);
      var dirProps = directory ? {
        directory: "directory",
        webkitdirectory: "webkitdirectory"
      } : {};
      var events = disabled ? {} : {
        onClick: openFileDialogOnClick ? onClick2 : function() {
        },
        onKeydown: openFileDialogOnClick ? onKeyDown : function() {
        },
        onMouseenter: onMouseenter2,
        onMouseleave: onMouseleave2,
        onDrop: onFileDrop,
        onDragover: onFileDrop,
        tabindex: "0"
      };
      return createVNode(Tag2, _objectSpread(_objectSpread({}, events), {}, {
        "class": cls,
        "role": "button",
        "style": attrs.style
      }), {
        default: function _default4() {
          return [createVNode("input", _objectSpread(_objectSpread(_objectSpread({}, pickAttrs(otherProps, {
            aria: true,
            data: true
          })), {}, {
            "id": id,
            "type": "file",
            "ref": fileInput2,
            "onClick": function onClick3(e) {
              return e.stopPropagation();
            },
            "key": uid$1.value,
            "style": {
              display: "none"
            },
            "accept": accept
          }, dirProps), {}, {
            "multiple": multiple,
            "onChange": onChange
          }, capture != null ? {
            capture
          } : {}), null), (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)];
        }
      });
    };
  }
});
function empty() {
}
const Upload$1 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Upload",
  inheritAttrs: false,
  props: initDefaultProps$1(uploadProps$1(), {
    componentTag: "span",
    prefixCls: "rc-upload",
    data: {},
    headers: {},
    name: "file",
    multipart: false,
    onStart: empty,
    onError: empty,
    onSuccess: empty,
    multiple: false,
    beforeUpload: null,
    customRequest: null,
    withCredentials: false,
    openFileDialogOnClick: true
  }),
  setup: function setup91(props2, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs, expose = _ref.expose;
    var uploader = ref();
    var abort = function abort2(file) {
      var _uploader$value;
      (_uploader$value = uploader.value) === null || _uploader$value === void 0 ? void 0 : _uploader$value.abort(file);
    };
    expose({
      abort
    });
    return function() {
      return createVNode(AjaxUpload, _objectSpread(_objectSpread(_objectSpread({}, props2), attrs), {}, {
        "ref": uploader
      }), slots);
    };
  }
});
function uploadProps2() {
  return {
    capture: [Boolean, String],
    type: String,
    name: String,
    defaultFileList: Array,
    fileList: Array,
    action: [String, Function],
    directory: {
      type: Boolean,
      default: void 0
    },
    data: [Object, Function],
    method: String,
    headers: Object,
    showUploadList: {
      type: [Boolean, Object],
      default: void 0
    },
    multiple: {
      type: Boolean,
      default: void 0
    },
    accept: String,
    beforeUpload: Function,
    onChange: Function,
    "onUpdate:fileList": Function,
    onDrop: Function,
    listType: String,
    onPreview: Function,
    onDownload: Function,
    onReject: Function,
    onRemove: Function,
    remove: Function,
    supportServerRender: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    prefixCls: String,
    customRequest: Function,
    withCredentials: {
      type: Boolean,
      default: void 0
    },
    openFileDialogOnClick: {
      type: Boolean,
      default: void 0
    },
    locale: {
      type: Object,
      default: void 0
    },
    id: String,
    previewFile: Function,
    transformFile: Function,
    iconRender: Function,
    isImageUrl: Function,
    progress: Object,
    itemRender: Function,
    maxCount: Number,
    height: [Number, String],
    removeIcon: Function,
    downloadIcon: Function,
    previewIcon: Function
  };
}
function uploadListProps() {
  return {
    listType: String,
    onPreview: Function,
    onDownload: Function,
    onRemove: Function,
    items: Array,
    progress: Object,
    prefixCls: String,
    showRemoveIcon: {
      type: Boolean,
      default: void 0
    },
    showDownloadIcon: {
      type: Boolean,
      default: void 0
    },
    showPreviewIcon: {
      type: Boolean,
      default: void 0
    },
    removeIcon: Function,
    downloadIcon: Function,
    previewIcon: Function,
    locale: {
      type: Object,
      default: void 0
    },
    previewFile: Function,
    iconRender: Function,
    isImageUrl: Function,
    appendAction: Function,
    appendActionVisible: {
      type: Boolean,
      default: void 0
    },
    itemRender: Function
  };
}
function file2Obj(file) {
  return _objectSpread(_objectSpread({}, file), {}, {
    lastModified: file.lastModified,
    lastModifiedDate: file.lastModifiedDate,
    name: file.name,
    size: file.size,
    type: file.type,
    uid: file.uid,
    percent: 0,
    originFileObj: file
  });
}
function updateFileList(file, fileList) {
  var nextFileList = _toConsumableArray(fileList);
  var fileIndex = nextFileList.findIndex(function(_ref) {
    var uid2 = _ref.uid;
    return uid2 === file.uid;
  });
  if (fileIndex === -1) {
    nextFileList.push(file);
  } else {
    nextFileList[fileIndex] = file;
  }
  return nextFileList;
}
function getFileItem(file, fileList) {
  var matchKey = file.uid !== void 0 ? "uid" : "name";
  return fileList.filter(function(item) {
    return item[matchKey] === file[matchKey];
  })[0];
}
function removeFileItem(file, fileList) {
  var matchKey = file.uid !== void 0 ? "uid" : "name";
  var removed = fileList.filter(function(item) {
    return item[matchKey] !== file[matchKey];
  });
  if (removed.length === fileList.length) {
    return null;
  }
  return removed;
}
var extname = function extname2() {
  var url = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  var temp = url.split("/");
  var filename = temp[temp.length - 1];
  var filenameWithoutSuffix = filename.split(/#|\?/)[0];
  return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [""])[0];
};
var isImageFileType = function isImageFileType2(type) {
  return type.indexOf("image/") === 0;
};
var isImageUrl = function isImageUrl2(file) {
  if (file.type && !file.thumbUrl) {
    return isImageFileType(file.type);
  }
  var url = file.thumbUrl || file.url || "";
  var extension = extname(url);
  if (/^data:image\//.test(url) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i.test(extension)) {
    return true;
  }
  if (/^data:/.test(url)) {
    return false;
  }
  if (extension) {
    return false;
  }
  return true;
};
var MEASURE_SIZE = 200;
function previewImage(file) {
  return new Promise(function(resolve) {
    if (!file.type || !isImageFileType(file.type)) {
      resolve("");
      return;
    }
    var canvas = document.createElement("canvas");
    canvas.width = MEASURE_SIZE;
    canvas.height = MEASURE_SIZE;
    canvas.style.cssText = "position: fixed; left: 0; top: 0; width: ".concat(MEASURE_SIZE, "px; height: ").concat(MEASURE_SIZE, "px; z-index: 9999; display: none;");
    document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.onload = function() {
      var width = img.width, height = img.height;
      var drawWidth = MEASURE_SIZE;
      var drawHeight = MEASURE_SIZE;
      var offsetX = 0;
      var offsetY = 0;
      if (width > height) {
        drawHeight = height * (MEASURE_SIZE / width);
        offsetY = -(drawHeight - drawWidth) / 2;
      } else {
        drawWidth = width * (MEASURE_SIZE / height);
        offsetX = -(drawWidth - drawHeight) / 2;
      }
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      var dataURL = canvas.toDataURL();
      document.body.removeChild(canvas);
      resolve(dataURL);
    };
    img.src = window.URL.createObjectURL(file);
  });
}
var listItemProps = function listItemProps2() {
  return {
    prefixCls: String,
    locale: {
      type: Object,
      default: void 0
    },
    file: Object,
    items: Array,
    listType: String,
    isImgUrl: Function,
    showRemoveIcon: {
      type: Boolean,
      default: void 0
    },
    showDownloadIcon: {
      type: Boolean,
      default: void 0
    },
    showPreviewIcon: {
      type: Boolean,
      default: void 0
    },
    removeIcon: Function,
    downloadIcon: Function,
    previewIcon: Function,
    iconRender: Function,
    actionIconRender: Function,
    itemRender: Function,
    onPreview: Function,
    onClose: Function,
    onDownload: Function,
    progress: Object
  };
};
const ListItem = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ListItem",
  inheritAttrs: false,
  props: listItemProps(),
  setup: function setup92(props2, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs;
    var showProgress = ref(false);
    ref();
    var _useConfigInject = useConfigInject("upload", props2), rootPrefixCls = _useConfigInject.rootPrefixCls;
    var transitionProps = computed(function() {
      return getTransitionProps("".concat(rootPrefixCls.value, "-fade"));
    });
    return function() {
      var _infoUploadingClass, _listContainerNameCla;
      var prefixCls = props2.prefixCls, locale2 = props2.locale, listType = props2.listType, file = props2.file, items = props2.items, progressProps3 = props2.progress, _props$iconRender = props2.iconRender, iconRender = _props$iconRender === void 0 ? slots.iconRender : _props$iconRender, _props$actionIconRend = props2.actionIconRender, actionIconRender = _props$actionIconRend === void 0 ? slots.actionIconRender : _props$actionIconRend, _props$itemRender = props2.itemRender, itemRender = _props$itemRender === void 0 ? slots.itemRender : _props$itemRender, isImgUrl = props2.isImgUrl, showPreviewIcon = props2.showPreviewIcon, showRemoveIcon = props2.showRemoveIcon, showDownloadIcon = props2.showDownloadIcon, _props$previewIcon = props2.previewIcon, customPreviewIcon = _props$previewIcon === void 0 ? slots.previewIcon : _props$previewIcon, _props$removeIcon = props2.removeIcon, customRemoveIcon = _props$removeIcon === void 0 ? slots.removeIcon : _props$removeIcon, _props$downloadIcon = props2.downloadIcon, customDownloadIcon = _props$downloadIcon === void 0 ? slots.downloadIcon : _props$downloadIcon, onPreview = props2.onPreview, onDownload = props2.onDownload, onClose = props2.onClose;
      var className = attrs.class, style = attrs.style;
      var spanClassName = "".concat(prefixCls, "-span");
      var iconNode = iconRender({
        file
      });
      var icon = createVNode("div", {
        "class": "".concat(prefixCls, "-text-icon")
      }, [iconNode]);
      if (listType === "picture" || listType === "picture-card") {
        if (file.status === "uploading" || !file.thumbUrl && !file.url) {
          var _uploadingClassName;
          var uploadingClassName = (_uploadingClassName = {}, _defineProperty(_uploadingClassName, "".concat(prefixCls, "-list-item-thumbnail"), true), _defineProperty(_uploadingClassName, "".concat(prefixCls, "-list-item-file"), file.status !== "uploading"), _uploadingClassName);
          icon = createVNode("div", {
            "class": uploadingClassName
          }, [iconNode]);
        } else {
          var _aClassName;
          var thumbnail = isImgUrl !== null && isImgUrl !== void 0 && isImgUrl(file) ? createVNode("img", {
            "src": file.thumbUrl || file.url,
            "alt": file.name,
            "class": "".concat(prefixCls, "-list-item-image")
          }, null) : iconNode;
          var aClassName = (_aClassName = {}, _defineProperty(_aClassName, "".concat(prefixCls, "-list-item-thumbnail"), true), _defineProperty(_aClassName, "".concat(prefixCls, "-list-item-file"), isImgUrl && !isImgUrl(file)), _aClassName);
          icon = createVNode("a", {
            "class": aClassName,
            "onClick": function onClick2(e) {
              return onPreview(file, e);
            },
            "href": file.url || file.thumbUrl,
            "target": "_blank",
            "rel": "noopener noreferrer"
          }, [thumbnail]);
        }
      }
      var infoUploadingClass = (_infoUploadingClass = {}, _defineProperty(_infoUploadingClass, "".concat(prefixCls, "-list-item"), true), _defineProperty(_infoUploadingClass, "".concat(prefixCls, "-list-item-").concat(file.status), true), _defineProperty(_infoUploadingClass, "".concat(prefixCls, "-list-item-list-type-").concat(listType), true), _infoUploadingClass);
      var linkProps = typeof file.linkProps === "string" ? JSON.parse(file.linkProps) : file.linkProps;
      var removeIcon = showRemoveIcon ? actionIconRender({
        customIcon: customRemoveIcon ? customRemoveIcon({
          file
        }) : createVNode(DeleteOutlined, null, null),
        callback: function callback() {
          return onClose(file);
        },
        prefixCls,
        title: locale2.removeFile
      }) : null;
      var downloadIcon = showDownloadIcon && file.status === "done" ? actionIconRender({
        customIcon: customDownloadIcon ? customDownloadIcon({
          file
        }) : createVNode(DownloadOutlined, null, null),
        callback: function callback() {
          return onDownload(file);
        },
        prefixCls,
        title: locale2.downloadFile
      }) : null;
      var downloadOrDelete = listType !== "picture-card" && createVNode("span", {
        "key": "download-delete",
        "class": ["".concat(prefixCls, "-list-item-card-actions"), {
          picture: listType === "picture"
        }]
      }, [downloadIcon, removeIcon]);
      var listItemNameClass = "".concat(prefixCls, "-list-item-name");
      var preview = file.url ? [createVNode("a", _objectSpread(_objectSpread({
        "key": "view",
        "target": "_blank",
        "rel": "noopener noreferrer",
        "class": listItemNameClass,
        "title": file.name
      }, linkProps), {}, {
        "href": file.url,
        "onClick": function onClick2(e) {
          return onPreview(file, e);
        }
      }), [file.name]), downloadOrDelete] : [createVNode("span", {
        "key": "view",
        "class": listItemNameClass,
        "onClick": function onClick2(e) {
          return onPreview(file, e);
        },
        "title": file.name
      }, [file.name]), downloadOrDelete];
      var previewStyle = {
        pointerEvents: "none",
        opacity: 0.5
      };
      var previewIcon = showPreviewIcon ? createVNode("a", {
        "href": file.url || file.thumbUrl,
        "target": "_blank",
        "rel": "noopener noreferrer",
        "style": file.url || file.thumbUrl ? void 0 : previewStyle,
        "onClick": function onClick2(e) {
          return onPreview(file, e);
        },
        "title": locale2.previewFile
      }, [customPreviewIcon ? customPreviewIcon({
        file
      }) : createVNode(EyeOutlined, null, null)]) : null;
      var actions = listType === "picture-card" && file.status !== "uploading" && createVNode("span", {
        "class": "".concat(prefixCls, "-list-item-actions")
      }, [previewIcon, file.status === "done" && downloadIcon, removeIcon]);
      var message2;
      if (file.response && typeof file.response === "string") {
        message2 = file.response;
      } else {
        var _file$error, _file$error2;
        message2 = ((_file$error = file.error) === null || _file$error === void 0 ? void 0 : _file$error.statusText) || ((_file$error2 = file.error) === null || _file$error2 === void 0 ? void 0 : _file$error2.message) || locale2.uploadError;
      }
      var iconAndPreview = createVNode("span", {
        "class": spanClassName
      }, [icon, preview]);
      var dom = createVNode("div", {
        "class": infoUploadingClass
      }, [createVNode("div", {
        "class": "".concat(prefixCls, "-list-item-info")
      }, [iconAndPreview]), actions, showProgress.value && createVNode(Transition, transitionProps.value, {
        default: function _default4() {
          return [withDirectives(createVNode("div", {
            "class": "".concat(prefixCls, "-list-item-progress")
          }, ["percent" in file ? createVNode(__unplugin_components_0, _objectSpread(_objectSpread({}, progressProps3), {}, {
            "type": "line",
            "percent": file.percent
          }), null) : null]), [[vShow, file.status === "uploading"]])];
        }
      })]);
      var listContainerNameClass = (_listContainerNameCla = {}, _defineProperty(_listContainerNameCla, "".concat(prefixCls, "-list-").concat(listType, "-container"), true), _defineProperty(_listContainerNameCla, "".concat(className), !!className), _listContainerNameCla);
      var item = file.status === "error" ? createVNode(Tooltip, {
        "title": message2,
        "getPopupContainer": function getPopupContainer(node) {
          return node.parentNode;
        }
      }, {
        default: function _default4() {
          return [dom];
        }
      }) : dom;
      return createVNode("div", {
        "class": listContainerNameClass,
        "style": style,
        "ref": ref
      }, [itemRender ? itemRender({
        originNode: item,
        file,
        fileList: items,
        actions: {
          download: onDownload.bind(null, file),
          preview: onPreview.bind(null, file),
          remove: onClose.bind(null, file)
        }
      }) : item]);
    };
  }
});
var HackSlot = function HackSlot2(_, _ref) {
  var _slots$default;
  var slots = _ref.slots;
  return filterEmpty((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots))[0];
};
const UploadList = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AUploadList",
  props: initDefaultProps$1(uploadListProps(), {
    listType: "text",
    progress: {
      strokeWidth: 2,
      showInfo: false
    },
    showRemoveIcon: true,
    showDownloadIcon: false,
    showPreviewIcon: true,
    previewFile: previewImage,
    isImageUrl,
    items: [],
    appendActionVisible: true
  }),
  setup: function setup93(props2, _ref2) {
    var slots = _ref2.slots, expose = _ref2.expose;
    var motionAppear = ref(false);
    getCurrentInstance();
    watchEffect(function() {
      if (props2.listType !== "picture" && props2.listType !== "picture-card") {
        return;
      }
      (props2.items || []).forEach(function(file) {
        {
          return;
        }
      });
    });
    var onInternalPreview = function onInternalPreview2(file, e) {
      if (!props2.onPreview) {
        return;
      }
      e === null || e === void 0 ? void 0 : e.preventDefault();
      return props2.onPreview(file);
    };
    var onInternalDownload = function onInternalDownload2(file) {
      if (typeof props2.onDownload === "function") {
        props2.onDownload(file);
      } else if (file.url) {
        window.open(file.url);
      }
    };
    var onInternalClose = function onInternalClose2(file) {
      var _props$onRemove;
      (_props$onRemove = props2.onRemove) === null || _props$onRemove === void 0 ? void 0 : _props$onRemove.call(props2, file);
    };
    var internalIconRender = function internalIconRender2(_ref3) {
      var file = _ref3.file;
      var iconRender = props2.iconRender || slots.iconRender;
      if (iconRender) {
        return iconRender({
          file,
          listType: props2.listType
        });
      }
      var isLoading = file.status === "uploading";
      var fileIcon = props2.isImageUrl && props2.isImageUrl(file) ? createVNode(PictureTwoTone, null, null) : createVNode(FileTwoTone, null, null);
      var icon = isLoading ? createVNode(LoadingOutlined, null, null) : createVNode(PaperClipOutlined, null, null);
      if (props2.listType === "picture") {
        icon = isLoading ? createVNode(LoadingOutlined, null, null) : fileIcon;
      } else if (props2.listType === "picture-card") {
        icon = isLoading ? props2.locale.uploading : fileIcon;
      }
      return icon;
    };
    var actionIconRender = function actionIconRender2(opt) {
      var customIcon = opt.customIcon, callback = opt.callback, prefixCls2 = opt.prefixCls, title = opt.title;
      var btnProps = {
        type: "text",
        size: "small",
        title,
        onClick: function onClick2() {
          callback();
        },
        class: "".concat(prefixCls2, "-list-item-card-actions-btn")
      };
      if (isValidElement(customIcon)) {
        return createVNode(Button$1, btnProps, {
          icon: function icon() {
            return customIcon;
          }
        });
      }
      return createVNode(Button$1, btnProps, {
        default: function _default4() {
          return [createVNode("span", null, [customIcon])];
        }
      });
    };
    expose({
      handlePreview: onInternalPreview,
      handleDownload: onInternalDownload
    });
    var _useConfigInject = useConfigInject("upload", props2), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    var listClassNames = computed(function() {
      var _ref4;
      return _ref4 = {}, _defineProperty(_ref4, "".concat(prefixCls.value, "-list"), true), _defineProperty(_ref4, "".concat(prefixCls.value, "-list-").concat(props2.listType), true), _defineProperty(_ref4, "".concat(prefixCls.value, "-list-rtl"), direction.value === "rtl"), _ref4;
    });
    var transitionGroupProps = computed(function() {
      return _objectSpread(_objectSpread(_objectSpread({}, collapseMotion$1("".concat(prefixCls.value, "-").concat(props2.listType === "picture-card" ? "animate-inline" : "animate"))), getTransitionGroupProps("".concat(prefixCls.value, "-").concat(props2.listType === "picture-card" ? "animate-inline" : "animate"))), {}, {
        class: listClassNames.value,
        appear: motionAppear.value
      });
    });
    return function() {
      var listType = props2.listType, locale2 = props2.locale, isImgUrl = props2.isImageUrl, _props$items = props2.items, items = _props$items === void 0 ? [] : _props$items, showPreviewIcon = props2.showPreviewIcon, showRemoveIcon = props2.showRemoveIcon, showDownloadIcon = props2.showDownloadIcon, removeIcon = props2.removeIcon, previewIcon = props2.previewIcon, downloadIcon = props2.downloadIcon, progress = props2.progress, appendAction = props2.appendAction, itemRender = props2.itemRender, appendActionVisible = props2.appendActionVisible;
      var appendActionDom = appendAction === null || appendAction === void 0 ? void 0 : appendAction();
      return createVNode(TransitionGroup, _objectSpread(_objectSpread({}, transitionGroupProps.value), {}, {
        "tag": "div"
      }), {
        default: function _default4() {
          return [items.map(function(file) {
            var key2 = file.uid;
            return createVNode(ListItem, {
              "key": key2,
              "locale": locale2,
              "prefixCls": prefixCls.value,
              "file": file,
              "items": items,
              "progress": progress,
              "listType": listType,
              "isImgUrl": isImgUrl,
              "showPreviewIcon": showPreviewIcon,
              "showRemoveIcon": showRemoveIcon,
              "showDownloadIcon": showDownloadIcon,
              "onPreview": onInternalPreview,
              "onDownload": onInternalDownload,
              "onClose": onInternalClose,
              "removeIcon": removeIcon,
              "previewIcon": previewIcon,
              "downloadIcon": downloadIcon,
              "itemRender": itemRender
            }, _objectSpread(_objectSpread({}, slots), {}, {
              iconRender: internalIconRender,
              actionIconRender
            }));
          }), appendAction ? withDirectives(createVNode(HackSlot, {
            "key": "__ant_upload_appendAction"
          }, {
            default: function _default5() {
              return appendActionDom;
            }
          }), [[vShow, !!appendActionVisible]]) : null];
        }
      });
    };
  }
});
var _excluded$1 = ["class", "style"];
var LIST_IGNORE = "__LIST_IGNORE_".concat(Date.now(), "__");
const Upload = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AUpload",
  inheritAttrs: false,
  props: initDefaultProps$1(uploadProps2(), {
    type: "select",
    multiple: false,
    action: "",
    data: {},
    accept: "",
    showUploadList: true,
    listType: "text",
    disabled: false,
    supportServerRender: true
  }),
  setup: function setup94(props2, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs, expose = _ref.expose;
    var formItemContext = useInjectFormItemContext();
    var _useMergedState = useMergedState(props2.defaultFileList || [], {
      value: toRef(props2, "fileList"),
      postState: function postState(list) {
        var timestamp = Date.now();
        return (list !== null && list !== void 0 ? list : []).map(function(file, index2) {
          if (!file.uid && !Object.isFrozen(file)) {
            file.uid = "__AUTO__".concat(timestamp, "_").concat(index2, "__");
          }
          return file;
        });
      }
    }), _useMergedState2 = _slicedToArray(_useMergedState, 2), mergedFileList = _useMergedState2[0], setMergedFileList = _useMergedState2[1];
    var dragState = ref("drop");
    var upload = ref();
    var onInternalChange = function onInternalChange2(file, changedFileList, event) {
      var _props$onUpdateFileL, _props$onChange;
      var cloneList = _toConsumableArray(changedFileList);
      if (props2.maxCount === 1) {
        cloneList = cloneList.slice(-1);
      } else if (props2.maxCount) {
        cloneList = cloneList.slice(0, props2.maxCount);
      }
      setMergedFileList(cloneList);
      var changeInfo = {
        file,
        fileList: cloneList
      };
      if (event) {
        changeInfo.event = event;
      }
      (_props$onUpdateFileL = props2["onUpdate:fileList"]) === null || _props$onUpdateFileL === void 0 ? void 0 : _props$onUpdateFileL.call(props2, changeInfo.fileList);
      (_props$onChange = props2.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props2, changeInfo);
      formItemContext.onFieldChange();
    };
    var mergedBeforeUpload = /* @__PURE__ */ function() {
      var _ref2 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime.mark(function _callee(file, fileListArgs) {
        var beforeUpload, transformFile, parsedFile, result;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                beforeUpload = props2.beforeUpload, transformFile = props2.transformFile;
                parsedFile = file;
                if (!beforeUpload) {
                  _context.next = 13;
                  break;
                }
                _context.next = 5;
                return beforeUpload(file, fileListArgs);
              case 5:
                result = _context.sent;
                if (!(result === false)) {
                  _context.next = 8;
                  break;
                }
                return _context.abrupt("return", false);
              case 8:
                delete file[LIST_IGNORE];
                if (!(result === LIST_IGNORE)) {
                  _context.next = 12;
                  break;
                }
                Object.defineProperty(file, LIST_IGNORE, {
                  value: true,
                  configurable: true
                });
                return _context.abrupt("return", false);
              case 12:
                if (_typeof(result) === "object" && result) {
                  parsedFile = result;
                }
              case 13:
                if (!transformFile) {
                  _context.next = 17;
                  break;
                }
                _context.next = 16;
                return transformFile(parsedFile);
              case 16:
                parsedFile = _context.sent;
              case 17:
                return _context.abrupt("return", parsedFile);
              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return function mergedBeforeUpload2(_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }();
    var onBatchStart = function onBatchStart2(batchFileInfoList) {
      var filteredFileInfoList = batchFileInfoList.filter(function(info) {
        return !info.file[LIST_IGNORE];
      });
      if (!filteredFileInfoList.length) {
        return;
      }
      var objectFileList = filteredFileInfoList.map(function(info) {
        return file2Obj(info.file);
      });
      var newFileList = _toConsumableArray(mergedFileList.value);
      objectFileList.forEach(function(fileObj) {
        newFileList = updateFileList(fileObj, newFileList);
      });
      objectFileList.forEach(function(fileObj, index2) {
        var triggerFileObj = fileObj;
        if (!filteredFileInfoList[index2].parsedFile) {
          var originFileObj = fileObj.originFileObj;
          var clone;
          try {
            clone = new File([originFileObj], originFileObj.name, {
              type: originFileObj.type
            });
          } catch (e) {
            clone = new Blob([originFileObj], {
              type: originFileObj.type
            });
            clone.name = originFileObj.name;
            clone.lastModifiedDate = new Date();
            clone.lastModified = new Date().getTime();
          }
          clone.uid = fileObj.uid;
          triggerFileObj = clone;
        } else {
          fileObj.status = "uploading";
        }
        onInternalChange(triggerFileObj, newFileList);
      });
    };
    var onSuccess = function onSuccess2(response, file, xhr) {
      try {
        if (typeof response === "string") {
          response = JSON.parse(response);
        }
      } catch (e) {
      }
      if (!getFileItem(file, mergedFileList.value)) {
        return;
      }
      var targetItem = file2Obj(file);
      targetItem.status = "done";
      targetItem.percent = 100;
      targetItem.response = response;
      targetItem.xhr = xhr;
      var nextFileList = updateFileList(targetItem, mergedFileList.value);
      onInternalChange(targetItem, nextFileList);
    };
    var onProgress = function onProgress2(e, file) {
      if (!getFileItem(file, mergedFileList.value)) {
        return;
      }
      var targetItem = file2Obj(file);
      targetItem.status = "uploading";
      targetItem.percent = e.percent;
      var nextFileList = updateFileList(targetItem, mergedFileList.value);
      onInternalChange(targetItem, nextFileList, e);
    };
    var onError = function onError2(error, response, file) {
      if (!getFileItem(file, mergedFileList.value)) {
        return;
      }
      var targetItem = file2Obj(file);
      targetItem.error = error;
      targetItem.response = response;
      targetItem.status = "error";
      var nextFileList = updateFileList(targetItem, mergedFileList.value);
      onInternalChange(targetItem, nextFileList);
    };
    var handleRemove = function handleRemove2(file) {
      var currentFile;
      var mergedRemove = props2.onRemove || props2.remove;
      Promise.resolve(typeof mergedRemove === "function" ? mergedRemove(file) : mergedRemove).then(function(ret) {
        if (ret === false) {
          return;
        }
        var removedFileList = removeFileItem(file, mergedFileList.value);
        if (removedFileList) {
          var _mergedFileList$value, _upload$value;
          currentFile = _objectSpread(_objectSpread({}, file), {}, {
            status: "removed"
          });
          (_mergedFileList$value = mergedFileList.value) === null || _mergedFileList$value === void 0 ? void 0 : _mergedFileList$value.forEach(function(item) {
            var matchKey = currentFile.uid !== void 0 ? "uid" : "name";
            if (item[matchKey] === currentFile[matchKey] && !Object.isFrozen(item)) {
              item.status = "removed";
            }
          });
          (_upload$value = upload.value) === null || _upload$value === void 0 ? void 0 : _upload$value.abort(currentFile);
          onInternalChange(currentFile, removedFileList);
        }
      });
    };
    var onFileDrop = function onFileDrop2(e) {
      dragState.value = e.type;
      if (e.type === "drop") {
        var _props$onDrop;
        (_props$onDrop = props2.onDrop) === null || _props$onDrop === void 0 ? void 0 : _props$onDrop.call(props2, e);
      }
    };
    expose({
      onBatchStart,
      onSuccess,
      onProgress,
      onError,
      fileList: mergedFileList,
      upload
    });
    var _useConfigInject = useConfigInject("upload", props2), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    var _useLocaleReceiver = useLocaleReceiver("Upload", defaultLocale.Upload, computed(function() {
      return props2.locale;
    })), _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 1), locale2 = _useLocaleReceiver2[0];
    var renderUploadList = function renderUploadList2(button, buttonVisible) {
      var removeIcon = props2.removeIcon, previewIcon = props2.previewIcon, downloadIcon = props2.downloadIcon, previewFile = props2.previewFile, onPreview = props2.onPreview, onDownload = props2.onDownload, disabled = props2.disabled, isImageUrl3 = props2.isImageUrl, progress = props2.progress, itemRender = props2.itemRender, iconRender = props2.iconRender, showUploadList = props2.showUploadList;
      var _ref3 = typeof showUploadList === "boolean" ? {} : showUploadList, showDownloadIcon = _ref3.showDownloadIcon, showPreviewIcon = _ref3.showPreviewIcon, showRemoveIcon = _ref3.showRemoveIcon;
      return showUploadList ? createVNode(UploadList, {
        "listType": props2.listType,
        "items": mergedFileList.value,
        "previewFile": previewFile,
        "onPreview": onPreview,
        "onDownload": onDownload,
        "onRemove": handleRemove,
        "showRemoveIcon": !disabled && showRemoveIcon,
        "showPreviewIcon": showPreviewIcon,
        "showDownloadIcon": showDownloadIcon,
        "removeIcon": removeIcon,
        "previewIcon": previewIcon,
        "downloadIcon": downloadIcon,
        "iconRender": iconRender,
        "locale": locale2.value,
        "isImageUrl": isImageUrl3,
        "progress": progress,
        "itemRender": itemRender,
        "appendActionVisible": buttonVisible,
        "appendAction": button
      }, _objectSpread({}, slots)) : button === null || button === void 0 ? void 0 : button();
    };
    return function() {
      var _props$id, _classNames2, _slots$default2;
      var listType = props2.listType, disabled = props2.disabled, type = props2.type;
      attrs.class;
      attrs.style;
      var transAttrs = _objectWithoutProperties(attrs, _excluded$1);
      var rcUploadProps = _objectSpread(_objectSpread(_objectSpread({
        onBatchStart,
        onError,
        onProgress,
        onSuccess
      }, transAttrs), props2), {}, {
        id: (_props$id = props2.id) !== null && _props$id !== void 0 ? _props$id : formItemContext.id.value,
        prefixCls: prefixCls.value,
        beforeUpload: mergedBeforeUpload,
        onChange: void 0
      });
      delete rcUploadProps.remove;
      if (!slots.default || disabled) {
        delete rcUploadProps.id;
      }
      if (type === "drag") {
        var _classNames, _slots$default;
        var dragCls = classNames(prefixCls.value, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-drag"), true), _defineProperty(_classNames, "".concat(prefixCls.value, "-drag-uploading"), mergedFileList.value.some(function(file) {
          return file.status === "uploading";
        })), _defineProperty(_classNames, "".concat(prefixCls.value, "-drag-hover"), dragState.value === "dragover"), _defineProperty(_classNames, "".concat(prefixCls.value, "-disabled"), disabled), _defineProperty(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"), _classNames), attrs.class);
        return createVNode("span", null, [createVNode("div", {
          "class": dragCls,
          "onDrop": onFileDrop,
          "onDragover": onFileDrop,
          "onDragleave": onFileDrop,
          "style": attrs.style
        }, [createVNode(Upload$1, _objectSpread(_objectSpread({}, rcUploadProps), {}, {
          "ref": upload,
          "class": "".concat(prefixCls.value, "-btn")
        }), _objectSpread({
          default: function _default4() {
            return [createVNode("div", {
              "class": "".concat(prefixCls, "-drag-container")
            }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)])];
          }
        }, slots))]), renderUploadList()]);
      }
      var uploadButtonCls = classNames(prefixCls.value, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls.value, "-select"), true), _defineProperty(_classNames2, "".concat(prefixCls.value, "-select-").concat(listType), true), _defineProperty(_classNames2, "".concat(prefixCls.value, "-disabled"), disabled), _defineProperty(_classNames2, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"), _classNames2));
      var children = flattenChildren((_slots$default2 = slots.default) === null || _slots$default2 === void 0 ? void 0 : _slots$default2.call(slots));
      var renderUploadButton = function renderUploadButton2(uploadButtonStyle) {
        return createVNode("div", {
          "class": uploadButtonCls,
          "style": uploadButtonStyle
        }, [createVNode(Upload$1, _objectSpread(_objectSpread({}, rcUploadProps), {}, {
          "ref": upload
        }), slots)]);
      };
      if (listType === "picture-card") {
        return createVNode("span", {
          "class": classNames("".concat(prefixCls.value, "-picture-card-wrapper"), attrs.class)
        }, [renderUploadList(renderUploadButton, !!(children && children.length))]);
      }
      return createVNode("span", {
        "class": attrs.class
      }, [renderUploadButton(children && children.length ? void 0 : {
        display: "none"
      }), renderUploadList()]);
    };
  }
});
var _excluded = ["height"], _excluded2 = ["style"];
const Dragger = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AUploadDragger",
  inheritAttrs: false,
  props: uploadProps2(),
  setup: function setup95(props2, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs;
    return function() {
      var height = props2.height, restProps = _objectWithoutProperties(props2, _excluded);
      var style = attrs.style, restAttrs = _objectWithoutProperties(attrs, _excluded2);
      var draggerProps = _objectSpread(_objectSpread(_objectSpread({}, restProps), restAttrs), {}, {
        type: "drag",
        style: _objectSpread(_objectSpread({}, style), {}, {
          height: typeof height === "number" ? "".concat(height, "px") : height
        })
      });
      return createVNode(Upload, draggerProps, slots);
    };
  }
});
const __unplugin_components_1 = _extends(Upload, {
  Dragger,
  LIST_IGNORE,
  install: function install(app) {
    app.component(Upload.name, Upload);
    app.component(Dragger.name, Dragger);
    return app;
  }
});
const _default$1 = "";
const index$f = "";
const index$e = "";
const index$d = "";
const index$c = "";
function set(target, key2, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key2);
    target.splice(key2, 1, val);
    return val;
  }
  target[key2] = val;
  return val;
}
function del(target, key2) {
  if (Array.isArray(target)) {
    target.splice(key2, 1);
    return;
  }
  delete target[key2];
}
const isVue2 = false;
/*!
  * pinia v2.0.22
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = process.env.NODE_ENV !== "production" ? Symbol("pinia") : Symbol();
function isPlainObject(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
const IS_CLIENT = false;
const USE_DEVTOOLS = (process.env.NODE_ENV !== "production" || false) && !(process.env.NODE_ENV === "test") && IS_CLIENT;
const saveAs = () => {
};
function toastMessage(message2, type) {
  const piniaMessage = "\u{1F34D} " + message2;
  if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
    __VUE_DEVTOOLS_TOAST__(piniaMessage, type);
  } else if (type === "error") {
    console.error(piniaMessage);
  } else if (type === "warn") {
    console.warn(piniaMessage);
  } else {
    console.log(piniaMessage);
  }
}
function isPinia(o) {
  return "_a" in o && "install" in o;
}
function checkClipboardAccess() {
  if (!("clipboard" in navigator)) {
    toastMessage(`Your browser doesn't support the Clipboard API`, "error");
    return true;
  }
}
function checkNotFocusedError(error) {
  if (error instanceof Error && error.message.toLowerCase().includes("document is not focused")) {
    toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
    return true;
  }
  return false;
}
async function actionGlobalCopyState(pinia) {
  if (checkClipboardAccess())
    return;
  try {
    await navigator.clipboard.writeText(JSON.stringify(pinia.state.value));
    toastMessage("Global state copied to clipboard.");
  } catch (error) {
    if (checkNotFocusedError(error))
      return;
    toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
    console.error(error);
  }
}
async function actionGlobalPasteState(pinia) {
  if (checkClipboardAccess())
    return;
  try {
    pinia.state.value = JSON.parse(await navigator.clipboard.readText());
    toastMessage("Global state pasted from clipboard.");
  } catch (error) {
    if (checkNotFocusedError(error))
      return;
    toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
    console.error(error);
  }
}
async function actionGlobalSaveState(pinia) {
  try {
    saveAs(new Blob([JSON.stringify(pinia.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (error) {
    toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
    console.error(error);
  }
}
let fileInput;
function getFileOpener() {
  if (!fileInput) {
    fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".json";
  }
  function openFile() {
    return new Promise((resolve, reject) => {
      fileInput.onchange = async () => {
        const files = fileInput.files;
        if (!files)
          return resolve(null);
        const file = files.item(0);
        if (!file)
          return resolve(null);
        return resolve({ text: await file.text(), file });
      };
      fileInput.oncancel = () => resolve(null);
      fileInput.onerror = reject;
      fileInput.click();
    });
  }
  return openFile;
}
async function actionGlobalOpenStateFile(pinia) {
  try {
    const open2 = await getFileOpener();
    const result = await open2();
    if (!result)
      return;
    const { text, file } = result;
    pinia.state.value = JSON.parse(text);
    toastMessage(`Global state imported from "${file.name}".`);
  } catch (error) {
    toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
    console.error(error);
  }
}
function formatDisplay(display) {
  return {
    _custom: {
      display
    }
  };
}
const PINIA_ROOT_LABEL = "\u{1F34D} Pinia (root)";
const PINIA_ROOT_ID = "_root";
function formatStoreForInspectorTree(store) {
  return isPinia(store) ? {
    id: PINIA_ROOT_ID,
    label: PINIA_ROOT_LABEL
  } : {
    id: store.$id,
    label: store.$id
  };
}
function formatStoreForInspectorState(store) {
  if (isPinia(store)) {
    const storeNames = Array.from(store._s.keys());
    const storeMap = store._s;
    const state2 = {
      state: storeNames.map((storeId) => ({
        editable: true,
        key: storeId,
        value: store.state.value[storeId]
      })),
      getters: storeNames.filter((id) => storeMap.get(id)._getters).map((id) => {
        const store2 = storeMap.get(id);
        return {
          editable: false,
          key: id,
          value: store2._getters.reduce((getters, key2) => {
            getters[key2] = store2[key2];
            return getters;
          }, {})
        };
      })
    };
    return state2;
  }
  const state = {
    state: Object.keys(store.$state).map((key2) => ({
      editable: true,
      key: key2,
      value: store.$state[key2]
    }))
  };
  if (store._getters && store._getters.length) {
    state.getters = store._getters.map((getterName) => ({
      editable: false,
      key: getterName,
      value: store[getterName]
    }));
  }
  if (store._customProperties.size) {
    state.customProperties = Array.from(store._customProperties).map((key2) => ({
      editable: true,
      key: key2,
      value: store[key2]
    }));
  }
  return state;
}
function formatEventData(events) {
  if (!events)
    return {};
  if (Array.isArray(events)) {
    return events.reduce((data3, event) => {
      data3.keys.push(event.key);
      data3.operations.push(event.type);
      data3.oldValue[event.key] = event.oldValue;
      data3.newValue[event.key] = event.newValue;
      return data3;
    }, {
      oldValue: {},
      keys: [],
      operations: [],
      newValue: {}
    });
  } else {
    return {
      operation: formatDisplay(events.type),
      key: formatDisplay(events.key),
      oldValue: events.oldValue,
      newValue: events.newValue
    };
  }
}
function formatMutationType(type) {
  switch (type) {
    case MutationType.direct:
      return "mutation";
    case MutationType.patchFunction:
      return "$patch";
    case MutationType.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let isTimelineActive = true;
const componentStateTypes = [];
const MUTATIONS_LAYER_ID = "pinia:mutations";
const INSPECTOR_ID = "pinia";
const getStoreType = (id) => "\u{1F34D} " + id;
function registerPiniaDevtools(app, pinia) {
  setupDevtoolsPlugin({
    id: "dev.esm.pinia",
    label: "Pinia \u{1F34D}",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes,
    app
  }, (api2) => {
    if (typeof api2.now !== "function") {
      toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
    }
    api2.addTimelineLayer({
      id: MUTATIONS_LAYER_ID,
      label: `Pinia \u{1F34D}`,
      color: 15064968
    });
    api2.addInspector({
      id: INSPECTOR_ID,
      label: "Pinia \u{1F34D}",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            actionGlobalCopyState(pinia);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await actionGlobalPasteState(pinia);
            api2.sendInspectorTree(INSPECTOR_ID);
            api2.sendInspectorState(INSPECTOR_ID);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            actionGlobalSaveState(pinia);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await actionGlobalOpenStateFile(pinia);
            api2.sendInspectorTree(INSPECTOR_ID);
            api2.sendInspectorState(INSPECTOR_ID);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: "Reset the state (option store only)",
          action: (nodeId) => {
            const store = pinia._s.get(nodeId);
            if (!store) {
              toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
            } else if (!store._isOptionsAPI) {
              toastMessage(`Cannot reset "${nodeId}" store because it's a setup store.`, "warn");
            } else {
              store.$reset();
              toastMessage(`Store "${nodeId}" reset.`);
            }
          }
        }
      ]
    });
    api2.on.inspectComponent((payload, ctx) => {
      const proxy = payload.componentInstance && payload.componentInstance.proxy;
      if (proxy && proxy._pStores) {
        const piniaStores = payload.componentInstance.proxy._pStores;
        Object.values(piniaStores).forEach((store) => {
          payload.instanceData.state.push({
            type: getStoreType(store.$id),
            key: "state",
            editable: true,
            value: store._isOptionsAPI ? {
              _custom: {
                value: toRaw(store.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => store.$reset()
                  }
                ]
              }
            } : Object.keys(store.$state).reduce((state, key2) => {
              state[key2] = store.$state[key2];
              return state;
            }, {})
          });
          if (store._getters && store._getters.length) {
            payload.instanceData.state.push({
              type: getStoreType(store.$id),
              key: "getters",
              editable: false,
              value: store._getters.reduce((getters, key2) => {
                try {
                  getters[key2] = store[key2];
                } catch (error) {
                  getters[key2] = error;
                }
                return getters;
              }, {})
            });
          }
        });
      }
    });
    api2.on.getInspectorTree((payload) => {
      if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
        let stores = [pinia];
        stores = stores.concat(Array.from(pinia._s.values()));
        payload.rootNodes = (payload.filter ? stores.filter((store) => "$id" in store ? store.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
      }
    });
    api2.on.getInspectorState((payload) => {
      if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
        const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
        if (!inspectedStore) {
          return;
        }
        if (inspectedStore) {
          payload.state = formatStoreForInspectorState(inspectedStore);
        }
      }
    });
    api2.on.editInspectorState((payload, ctx) => {
      if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
        const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
        if (!inspectedStore) {
          return toastMessage(`store "${payload.nodeId}" not found`, "error");
        }
        const { path } = payload;
        if (!isPinia(inspectedStore)) {
          if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
            path.unshift("$state");
          }
        } else {
          path.unshift("state");
        }
        isTimelineActive = false;
        payload.set(inspectedStore, path, payload.state.value);
        isTimelineActive = true;
      }
    });
    api2.on.editComponentState((payload) => {
      if (payload.type.startsWith("\u{1F34D}")) {
        const storeId = payload.type.replace(/^🍍\s*/, "");
        const store = pinia._s.get(storeId);
        if (!store) {
          return toastMessage(`store "${storeId}" not found`, "error");
        }
        const { path } = payload;
        if (path[0] !== "state") {
          return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
        }
        path[0] = "$state";
        isTimelineActive = false;
        payload.set(store, path, payload.state.value);
        isTimelineActive = true;
      }
    });
  });
}
function addStoreToDevtools(app, store) {
  if (!componentStateTypes.includes(getStoreType(store.$id))) {
    componentStateTypes.push(getStoreType(store.$id));
  }
  setupDevtoolsPlugin({
    id: "dev.esm.pinia",
    label: "Pinia \u{1F34D}",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes,
    app,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: true
      }
    }
  }, (api2) => {
    const now2 = typeof api2.now === "function" ? api2.now.bind(api2) : Date.now;
    store.$onAction(({ after, onError, name: name2, args }) => {
      const groupId = runningActionId++;
      api2.addTimelineEvent({
        layerId: MUTATIONS_LAYER_ID,
        event: {
          time: now2(),
          title: "\u{1F6EB} " + name2,
          subtitle: "start",
          data: {
            store: formatDisplay(store.$id),
            action: formatDisplay(name2),
            args
          },
          groupId
        }
      });
      after((result) => {
        activeAction = void 0;
        api2.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "\u{1F6EC} " + name2,
            subtitle: "end",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name2),
              args,
              result
            },
            groupId
          }
        });
      });
      onError((error) => {
        activeAction = void 0;
        api2.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            logType: "error",
            title: "\u{1F4A5} " + name2,
            subtitle: "end",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name2),
              args,
              error
            },
            groupId
          }
        });
      });
    }, true);
    store._customProperties.forEach((name2) => {
      watch(() => unref(store[name2]), (newValue, oldValue) => {
        api2.notifyComponentUpdate();
        api2.sendInspectorState(INSPECTOR_ID);
        if (isTimelineActive) {
          api2.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              title: "Change",
              subtitle: name2,
              data: {
                newValue,
                oldValue
              },
              groupId: activeAction
            }
          });
        }
      }, { deep: true });
    });
    store.$subscribe(({ events, type }, state) => {
      api2.notifyComponentUpdate();
      api2.sendInspectorState(INSPECTOR_ID);
      if (!isTimelineActive)
        return;
      const eventData = {
        time: now2(),
        title: formatMutationType(type),
        data: {
          store: formatDisplay(store.$id),
          ...formatEventData(events)
        },
        groupId: activeAction
      };
      activeAction = void 0;
      if (type === MutationType.patchFunction) {
        eventData.subtitle = "\u2935\uFE0F";
      } else if (type === MutationType.patchObject) {
        eventData.subtitle = "\u{1F9E9}";
      } else if (events && !Array.isArray(events)) {
        eventData.subtitle = events.type;
      }
      if (events) {
        eventData.data["rawEvent(s)"] = {
          _custom: {
            display: "DebuggerEvent",
            type: "object",
            tooltip: "raw DebuggerEvent[]",
            value: events
          }
        };
      }
      api2.addTimelineEvent({
        layerId: MUTATIONS_LAYER_ID,
        event: eventData
      });
    }, { detached: true, flush: "sync" });
    const hotUpdate = store._hotUpdate;
    store._hotUpdate = markRaw((newStore) => {
      hotUpdate(newStore);
      api2.addTimelineEvent({
        layerId: MUTATIONS_LAYER_ID,
        event: {
          time: now2(),
          title: "\u{1F525} " + store.$id,
          subtitle: "HMR update",
          data: {
            store: formatDisplay(store.$id),
            info: formatDisplay(`HMR update`)
          }
        }
      });
      api2.notifyComponentUpdate();
      api2.sendInspectorTree(INSPECTOR_ID);
      api2.sendInspectorState(INSPECTOR_ID);
    });
    const { $dispose } = store;
    store.$dispose = () => {
      $dispose();
      api2.notifyComponentUpdate();
      api2.sendInspectorTree(INSPECTOR_ID);
      api2.sendInspectorState(INSPECTOR_ID);
      api2.getSettings().logStoreChanges && toastMessage(`Disposed "${store.$id}" store \u{1F5D1}`);
    };
    api2.notifyComponentUpdate();
    api2.sendInspectorTree(INSPECTOR_ID);
    api2.sendInspectorState(INSPECTOR_ID);
    api2.getSettings().logStoreChanges && toastMessage(`"${store.$id}" store installed \u{1F195}`);
  });
}
let runningActionId = 0;
let activeAction;
function patchActionForGrouping(store, actionNames) {
  const actions = actionNames.reduce((storeActions, actionName) => {
    storeActions[actionName] = toRaw(store)[actionName];
    return storeActions;
  }, {});
  for (const actionName in actions) {
    store[actionName] = function() {
      const _actionId = runningActionId;
      const trackedStore = new Proxy(store, {
        get(...args) {
          activeAction = _actionId;
          return Reflect.get(...args);
        },
        set(...args) {
          activeAction = _actionId;
          return Reflect.set(...args);
        }
      });
      return actions[actionName].apply(trackedStore, arguments);
    };
  }
}
function devtoolsPlugin({ app, store, options }) {
  if (store.$id.startsWith("__hot:")) {
    return;
  }
  if (options.state) {
    store._isOptionsAPI = true;
  }
  if (typeof options.state === "function") {
    patchActionForGrouping(
      store,
      Object.keys(options.actions)
    );
    const originalHotUpdate = store._hotUpdate;
    toRaw(store)._hotUpdate = function(newStore) {
      originalHotUpdate.apply(this, arguments);
      patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions));
    };
  }
  addStoreToDevtools(
    app,
    store
  );
}
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        if (USE_DEVTOOLS) {
          registerPiniaDevtools(app, pinia);
        }
        toBeInstalled.forEach((plugin) => _p.push(plugin));
        toBeInstalled = [];
      }
    },
    use(plugin) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin);
      } else {
        _p.push(plugin);
      }
      return this;
    },
    _p,
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
    pinia.use(devtoolsPlugin);
  }
  return pinia;
}
function patchObject(newState, oldState) {
  for (const key2 in oldState) {
    const subPatch = oldState[key2];
    if (!(key2 in newState)) {
      continue;
    }
    const targetValue = newState[key2];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && !isRef(subPatch) && !isReactive(subPatch)) {
      newState[key2] = patchObject(targetValue, subPatch);
    } else {
      {
        newState[key2] = subPatch;
      }
    }
  }
  return newState;
}
const noop = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentInstance()) {
    onUnmounted(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key2) => target.set(key2, value));
  }
  if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key2 in patchToApply) {
    if (!patchToApply.hasOwnProperty(key2))
      continue;
    const subPatch = patchToApply[key2];
    const targetValue = target[key2];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key2) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key2] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key2] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : Symbol();
function shouldHydrate(obj) {
  return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o) {
  return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup96() {
    if (!initialState && (!(process.env.NODE_ENV !== "production") || !hot)) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = process.env.NODE_ENV !== "production" && hot ? toRefs(ref(state ? state() : {}).value) : toRefs(pinia.state.value[id]);
    return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name2) => {
      if (process.env.NODE_ENV !== "production" && name2 in localState) {
        console.warn(`[\u{1F34D}]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name2}" in store "${id}".`);
      }
      computedGetters[name2] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name2].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup96, options, pinia, hot, true);
  store.$reset = function $reset() {
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign($state, newState);
    });
  };
  return store;
}
function createSetupStore($id, setup96, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign({ actions: {} }, options);
  if (process.env.NODE_ENV !== "production" && !pinia._e.active) {
    throw new Error("Pinia destroyed");
  }
  const $subscribeOptions = {
    deep: true
  };
  if (process.env.NODE_ENV !== "production" && !isVue2) {
    $subscribeOptions.onTrigger = (event) => {
      if (isListening) {
        debuggerEvents = event;
      } else if (isListening == false && !store._hotUpdating) {
        if (Array.isArray(debuggerEvents)) {
          debuggerEvents.push(event);
        } else {
          console.error("\u{1F34D} debuggerEvents should be an array. This is most likely an internal Pinia bug.");
        }
      }
    };
  }
  let isListening;
  let isSyncListening;
  let subscriptions = markRaw([]);
  let actionSubscriptions = markRaw([]);
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && (!(process.env.NODE_ENV !== "production") || !hot)) {
    {
      pinia.state.value[$id] = {};
    }
  }
  const hotState = ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (process.env.NODE_ENV !== "production") {
      debuggerEvents = [];
    }
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = process.env.NODE_ENV !== "production" ? () => {
    throw new Error(`\u{1F34D}: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
  } : noop;
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  function wrapAction(name2, action) {
    return function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name: name2,
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = action.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
  }
  const _hmrPayload = /* @__PURE__ */ markRaw({
    actions: {},
    getters: {},
    state: [],
    hotState
  });
  const partialStore = {
    _p: pinia,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(assign(
    process.env.NODE_ENV !== "production" && IS_CLIENT ? {
      _customProperties: markRaw(/* @__PURE__ */ new Set()),
      _hmrPayload
    } : {},
    partialStore
  ));
  pinia._s.set($id, store);
  const setupStore = pinia._e.run(() => {
    scope = effectScope();
    return scope.run(() => setup96());
  });
  for (const key2 in setupStore) {
    const prop = setupStore[key2];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (process.env.NODE_ENV !== "production" && hot) {
        set(hotState.value, key2, toRef(setupStore, key2));
      } else if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key2];
          } else {
            mergeReactiveObjects(prop, initialState[key2]);
          }
        }
        {
          pinia.state.value[$id][key2] = prop;
        }
      }
      if (process.env.NODE_ENV !== "production") {
        _hmrPayload.state.push(key2);
      }
    } else if (typeof prop === "function") {
      const actionValue = process.env.NODE_ENV !== "production" && hot ? prop : wrapAction(key2, prop);
      {
        setupStore[key2] = actionValue;
      }
      if (process.env.NODE_ENV !== "production") {
        _hmrPayload.actions[key2] = prop;
      }
      optionsForPlugin.actions[key2] = prop;
    } else if (process.env.NODE_ENV !== "production") {
      if (isComputed(prop)) {
        _hmrPayload.getters[key2] = isOptionsStore ? options.getters[key2] : prop;
      }
    }
  }
  {
    assign(store, setupStore);
    assign(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => process.env.NODE_ENV !== "production" && hot ? hotState.value : pinia.state.value[$id],
    set: (state) => {
      if (process.env.NODE_ENV !== "production" && hot) {
        throw new Error("cannot set hotState");
      }
      $patch(($state) => {
        assign($state, state);
      });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    store._hotUpdate = markRaw((newStore) => {
      store._hotUpdating = true;
      newStore._hmrPayload.state.forEach((stateKey) => {
        if (stateKey in store.$state) {
          const newStateTarget = newStore.$state[stateKey];
          const oldStateSource = store.$state[stateKey];
          if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
            patchObject(newStateTarget, oldStateSource);
          } else {
            newStore.$state[stateKey] = oldStateSource;
          }
        }
        set(store, stateKey, toRef(newStore.$state, stateKey));
      });
      Object.keys(store.$state).forEach((stateKey) => {
        if (!(stateKey in newStore.$state)) {
          del(store, stateKey);
        }
      });
      isListening = false;
      isSyncListening = false;
      pinia.state.value[$id] = toRef(newStore._hmrPayload, "hotState");
      isSyncListening = true;
      nextTick().then(() => {
        isListening = true;
      });
      for (const actionName in newStore._hmrPayload.actions) {
        const action = newStore[actionName];
        set(store, actionName, wrapAction(actionName, action));
      }
      for (const getterName in newStore._hmrPayload.getters) {
        const getter = newStore._hmrPayload.getters[getterName];
        const getterValue = isOptionsStore ? computed(() => {
          setActivePinia(pinia);
          return getter.call(store, store);
        }) : getter;
        set(store, getterName, getterValue);
      }
      Object.keys(store._hmrPayload.getters).forEach((key2) => {
        if (!(key2 in newStore._hmrPayload.getters)) {
          del(store, key2);
        }
      });
      Object.keys(store._hmrPayload.actions).forEach((key2) => {
        if (!(key2 in newStore._hmrPayload.actions)) {
          del(store, key2);
        }
      });
      store._hmrPayload = newStore._hmrPayload;
      store._getters = newStore._getters;
      store._hotUpdating = false;
    });
  }
  pinia._p.forEach((extender) => {
    if (process.env.NODE_ENV !== "production" && IS_CLIENT) {
      const extensions = scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      }));
      Object.keys(extensions || {}).forEach((key2) => store._customProperties.add(key2));
      assign(store, extensions);
    } else {
      assign(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (process.env.NODE_ENV !== "production" && store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
    console.warn(`[\u{1F34D}]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
  }
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
function defineStore(idOrOptions, setup96, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup96 === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup96;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
  }
  function useStore(pinia, hot) {
    const currentInstance = getCurrentInstance();
    pinia = (process.env.NODE_ENV === "test" && activePinia && activePinia._testing ? null : pinia) || currentInstance && inject(piniaSymbol);
    if (pinia)
      setActivePinia(pinia);
    if (process.env.NODE_ENV !== "production" && !activePinia) {
      throw new Error(`[\u{1F34D}]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
    }
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup96, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
      if (process.env.NODE_ENV !== "production") {
        useStore._pinia = pinia;
      }
    }
    const store = pinia._s.get(id);
    if (process.env.NODE_ENV !== "production" && hot) {
      const hotId = "__hot:" + id;
      const newStore = isSetupStore ? createSetupStore(hotId, setup96, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
      hot._hotUpdate(newStore);
      delete pinia.state.value[hotId];
      pinia._s.delete(hotId);
    }
    if (process.env.NODE_ENV !== "production" && IS_CLIENT && currentInstance && currentInstance.proxy && !hot) {
      const vm = currentInstance.proxy;
      const cache = "_pStores" in vm ? vm._pStores : vm._pStores = {};
      cache[id] = store;
    }
    return store;
  }
  useStore.$id = id;
  return useStore;
}
const USER_REGISTER = async function(options) {
  return await useApi("/user/v1/register", { method: "POST", body: options });
};
const USER_LOGIN = async function(options) {
  return await useApi("/user/v1/login", { method: "POST", body: options });
};
const CHANGE_PASSWORD = async function(options) {
  return await useApi("/user/v1/forget", { method: "POST", body: options });
};
const GET_USER_INFO = async function() {
  return await useApi("/user/v1/detail");
};
const GET_PLAY_RECORD = async function(params) {
  return await useApi("/user/v1/play_record", {
    method: "post",
    body: params
  });
};
const useUser = defineStore(
  "user",
  () => {
    const token = ref("");
    const isLogin = ref(false);
    const personalInfo = ref({
      id: null,
      username: "",
      head_img: "",
      phone: "",
      pwd: "",
      position: null,
      slogan: "",
      sex: "1",
      city: null,
      learn_time: null,
      openid: null
    });
    const switchLoginState = async (_token) => {
      token.value = _token;
      await asyncUserInfo();
    };
    const asyncUserInfo = async () => {
      if (token.value === "") {
        isLogin.value = false;
        return;
      }
      const userInfo = await GET_USER_INFO();
      if (userInfo.code === 1) {
        isLogin.value = true;
        personalInfo.value = { ...userInfo.data };
      }
    };
    const logout = () => {
      navigateTo("/");
      clearInfo();
      message.success("\u9000\u51FA\u767B\u5F55\u6210\u529F\uFF01");
    };
    const clearInfo = function() {
      token.value = "";
      isLogin.value = false;
      personalInfo.value = {};
      nextTick(() => navigateTo("/"));
    };
    return {
      token,
      isLogin,
      personalInfo,
      asyncUserInfo,
      switchLoginState,
      logout
    };
  },
  { persist: true }
);
const baseUrl = "http://127.0.0.1:8081/api";
const _useApi = $fetch.create({
  baseURL: baseUrl,
  async onRequest({ options }) {
    const __$temp_1 = useUser(), token = toRef(__$temp_1, "token");
    options.headers = new Headers(options.headers);
    if (token.value)
      options.headers.set("authorization", token.value);
  },
  async onResponse({ response }) {
    const data3 = response._data;
    if (data3.code !== 1) {
      if (data3.code === 270004)
        return;
      if (data3.code === 250004)
        return;
      if (data3.code === 280001)
        return;
      if (data3.code === 400001)
        return;
      message.error(data3.msg);
    }
  }
});
const useApi = async (request, options) => {
  return await _useApi(request, options);
};
const getHotProduct = async function() {
  return await useApi("/rank/v1/hot_product");
};
const GET_DURATION = async function() {
  return await useApi("/rank/v1/duration");
};
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "LearnRankList",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const data3 = ([__temp, __restore] = withAsyncContext(() => GET_DURATION()), __temp = await __temp, __restore(), __temp).data;
    let maxData = ref(9);
    const overflowY = computed(() => {
      return maxData.value <= 9 ? "hidden" : "scroll";
    });
    const getData = computed(() => {
      if (!data3)
        return;
      const cloneData = JSON.parse(JSON.stringify(data3));
      return cloneData.splice(0, maxData.value);
    });
    const onMoreClick = function() {
      if (maxData.value >= data3.length) {
        message.warn("\u6CA1\u6709\u66F4\u591A\u7684\u6570\u636E\u4E86");
      } else {
        maxData.value += 9;
      }
    };
    const getMinuteHandle = function(_minute) {
      const hours = Math.floor(_minute / 60);
      const minute = _minute % 60;
      return `${hours}\u5C0F\u65F6${minute.toFixed(2)}\u5206`;
    };
    const getRankColor = function(rank) {
      switch (rank) {
        case 1:
          return "#FF5353";
        case 2:
          return "#F6742E";
        case 3:
          return "#FFBC09";
        default:
          return "#333333";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_card = Card$3;
      const _component_a_tag = __unplugin_components_1$1;
      const _cssVars = { style: {
        "--316e4ff0": unref(overflowY)
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: { "box-shadow": "0px 0px 10px 0px #d5d5d5" },
        "rounded-10px": "",
        "h-653px": ""
      }, _attrs, _cssVars))} data-v-087148b5>`);
      _push(ssrRenderComponent(_component_a_card, {
        "rounded-10px": "",
        class: "h-100%! w-284px",
        id: "learn-rank-list"
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div flex flex-col data-v-087148b5${_scopeId}><div flexb style="${ssrRenderStyle({ padding: "0 24px 10px 24px" })}" data-v-087148b5${_scopeId}><span data-v-087148b5${_scopeId}>\u5377\u738B\u6392\u884C\u699C</span>`);
            _push2(ssrRenderComponent(_component_a_tag, {
              color: "#a6aaae",
              "w-70px": "",
              "h-24px": "",
              "text-center": "",
              "leading-22px": "",
              "text-12px": "",
              "rounded-5px": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u8FD1\u4E03\u5929`);
                } else {
                  return [
                    createTextVNode("\u8FD1\u4E03\u5929")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div text="#404040" flex items-center text-center text-14px p2 border-t b="#f0f0f0" data-v-087148b5${_scopeId}><span ml-4 data-v-087148b5${_scopeId}>\u6392\u884C</span><span ml-16 data-v-087148b5${_scopeId}>\u540D\u79F0</span><span ml-16 data-v-087148b5${_scopeId}>\u5B66\u4E60\u65F6\u957F</span></div></div>`);
          } else {
            return [
              createVNode("div", {
                flex: "",
                "flex-col": ""
              }, [
                createVNode("div", {
                  flexb: "",
                  style: { padding: "0 24px 10px 24px" }
                }, [
                  createVNode("span", null, "\u5377\u738B\u6392\u884C\u699C"),
                  createVNode(_component_a_tag, {
                    color: "#a6aaae",
                    "w-70px": "",
                    "h-24px": "",
                    "text-center": "",
                    "leading-22px": "",
                    "text-12px": "",
                    "rounded-5px": ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u8FD1\u4E03\u5929")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", {
                  text: "#404040",
                  flex: "",
                  "items-center": "",
                  "text-center": "",
                  "text-14px": "",
                  p2: "",
                  "border-t": "",
                  b: "#f0f0f0"
                }, [
                  createVNode("span", { "ml-4": "" }, "\u6392\u884C"),
                  createVNode("span", { "ml-16": "" }, "\u540D\u79F0"),
                  createVNode("span", { "ml-16": "" }, "\u5B66\u4E60\u65F6\u957F")
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(getData), (item, index2) => {
              _push2(`<div mb-4 class="grid-item" data-v-087148b5${_scopeId}><span text-24px text-center style="${ssrRenderStyle({ color: getRankColor(index2 + 1) })}" data-v-087148b5${_scopeId}>${ssrInterpolate(index2 + 1)}</span><div flex items-center mr-2px relative data-v-087148b5${_scopeId}><img w-36px h-36px rounded-full b="~ red" select-none${ssrRenderAttr("src", item.head_img)} data-v-087148b5${_scopeId}><p h-17px text-12px ml-9px truncate${ssrRenderAttr("title", item.username)} data-v-087148b5${_scopeId}>${ssrInterpolate(item.username)}</p></div><span text-12px data-v-087148b5${_scopeId}>${ssrInterpolate(getMinuteHandle(item.minute))}</span></div>`);
            });
            _push2(`<!--]--><button bg="#f2f2f2" text="center #555555" hover="bg-gray-100 text-gray-8" rounded="br-10px bl-10px" class="btn border-none text-14px p2 absolute bottom-0 cursor-pointer" data-v-087148b5${_scopeId}> \u67E5\u770B\u66F4\u591A </button>`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment$1, null, renderList(unref(getData), (item, index2) => {
                return openBlock(), createBlock("div", {
                  "mb-4": "",
                  class: "grid-item",
                  ref_for: true,
                  ref: "learnRankListData"
                }, [
                  createVNode("span", {
                    "text-24px": "",
                    "text-center": "",
                    style: { color: getRankColor(index2 + 1) }
                  }, toDisplayString(index2 + 1), 5),
                  createVNode("div", {
                    flex: "",
                    "items-center": "",
                    "mr-2px": "",
                    relative: ""
                  }, [
                    createVNode("img", {
                      "w-36px": "",
                      "h-36px": "",
                      "rounded-full": "",
                      b: "~ red",
                      "select-none": "",
                      src: item.head_img
                    }, null, 8, ["src"]),
                    createVNode("p", {
                      "h-17px": "",
                      "text-12px": "",
                      "ml-9px": "",
                      truncate: "",
                      title: item.username
                    }, toDisplayString(item.username), 9, ["title"])
                  ]),
                  createVNode("span", { "text-12px": "" }, toDisplayString(getMinuteHandle(item.minute)), 1)
                ], 512);
              }), 256)),
              createVNode("button", {
                onClick: onMoreClick,
                bg: "#f2f2f2",
                text: "center #555555",
                hover: "bg-gray-100 text-gray-8",
                rounded: "br-10px bl-10px",
                class: "btn border-none text-14px p2 absolute bottom-0 cursor-pointer"
              }, " \u67E5\u770B\u66F4\u591A ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const LearnRankList_vue_vue_type_style_index_0_scoped_087148b5_lang = "";
const _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key2, val] of props2) {
    target[key2] = val;
  }
  return target;
};
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LearnRankList.vue");
  return _sfc_setup$r ? _sfc_setup$r(props2, ctx) : void 0;
};
const __nuxt_component_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-087148b5"]]);
const _imports_0$8 = "" + globalThis.__publicAssetsURL("images/svg/hot_list.svg");
const _imports_1$2 = "" + globalThis.__publicAssetsURL("images/hot_top.png");
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "HotProduct",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const data3 = reactive(([__temp, __restore] = withAsyncContext(() => getHotProduct()), __temp = await __temp, __restore(), __temp).data);
    const colorMap = {
      1: "#ffc132",
      2: "#8da3b7",
      3: "#f49855",
      4: "#df5d5d"
    };
    let maxData = ref(8);
    const realData = computed(() => {
      if (data3) {
        let list = [...data3];
        return list.splice(0, maxData.value);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "w-285px": "",
        "h-618px": "",
        relative: "",
        "rounded-10px": "",
        "pt-27px": "",
        "z-2": "",
        "h-650px": "",
        bg: "#f4f4f4",
        style: { "box-shadow": "0px 0px 10px 0px #cacaca" }
      }, _attrs))}><img${ssrRenderAttr("src", _imports_0$8)} absolute top-0 z--1><img${ssrRenderAttr("src", _imports_1$2)} w-120px h-130px absolute right-2 top-8 z--1><button bg="#f2f2f2" text="center #555555" hover="bg-gray-100 text-gray-8" class="btn border-none text-14px absolute bottom-0 cursor-pointer wfull h-12 z-20"> \u67E5\u770B\u66F4\u591A </button><span color-white text-24px font-600 pl-15px>\u70ED\u95E8\u6392\u884C\u699C</span><div rounded-10px bg-white w-266px h-502px ml-10px mt-38px pb-36px overflow-scroll flex="~ col" class="hot-body"><!--[-->`);
      ssrRenderList(unref(realData), (item, index2) => {
        _push(`<div><div p="t-4px l-9px r-6px" class="flex items-baseline justify-between relative z-2"><span text-20px italic font-700 mr-10px h-54px style="${ssrRenderStyle({ color: index2 + 1 > 4 ? "#555555" : colorMap[index2 + 1] })}">${ssrInterpolate(index2 + 1)}</span><span color="#555555"${ssrRenderAttr("title", item.title)} class="font-500 select-none cursor-pointer wfull truncate-2 break-all">${ssrInterpolate(item.title)}</span></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HotProduct.vue");
  return _sfc_setup$q ? _sfc_setup$q(props2, ctx) : void 0;
};
const __nuxt_component_0$3 = defineComponent({
  name: "ClientOnly",
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots }) {
    const mounted3 = ref(false);
    return (props2) => {
      var _a;
      if (mounted3.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props2.fallback || props2.placeholder || "";
      const fallbackTag = props2.fallbackTag || props2.placeholderTag || "span";
      return createElementBlock(fallbackTag, null, fallbackStr);
    };
  }
});
const GET_BANNER = async (location2) => {
  return await useApi("/banner/v1/list", {
    params: { location: location2 }
  });
};
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "Banner",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const swiperData = reactive(([__temp, __restore] = withAsyncContext(() => GET_BANNER("home_swiper_banner")), __temp = await __temp, __restore(), __temp).data);
    const imgSrcArr = computed(() => {
      var _a;
      return (_a = swiperData.img_url) == null ? void 0 : _a.split(",");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        navigation: "",
        pagination: "",
        class: "banner",
        modules: [unref(Navigation), unref(Autoplay), unref(Pagination$1)],
        autoplay: { delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true },
        loop: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(imgSrcArr), (item, idx) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: item }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<a${ssrRenderAttr("href", swiperData.pc_link)} target="__blank" data-v-0a089caf${_scopeId2}><img${ssrRenderAttr("src", item)} data-v-0a089caf${_scopeId2}></a>`);
                  } else {
                    return [
                      createVNode("a", {
                        href: swiperData.pc_link,
                        target: "__blank"
                      }, [
                        createVNode("img", { src: item }, null, 8, ["src"])
                      ], 8, ["href"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment$1, null, renderList(unref(imgSrcArr), (item, idx) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: item }, {
                  default: withCtx(() => [
                    createVNode("a", {
                      href: swiperData.pc_link,
                      target: "__blank"
                    }, [
                      createVNode("img", { src: item }, null, 8, ["src"])
                    ], 8, ["href"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const Banner_vue_vue_type_style_index_0_scoped_0a089caf_lang = "";
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/Banner.vue");
  return _sfc_setup$p ? _sfc_setup$p(props2, ctx) : void 0;
};
const Banner = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-0a089caf"]]);
const Banner$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Banner
}, Symbol.toStringTag, { value: "Module" }));
const GET_CATEGROY_LIST = async () => {
  return await useApi("/product/v1/category");
};
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "Classify",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    let now2 = ref(0);
    let showCategory = ref(false);
    const displayCategory = computed(() => {
      return showCategory.value ? "block" : "none";
    });
    let data3 = ref();
    data3.value = ([__temp, __restore] = withAsyncContext(() => GET_CATEGROY_LIST()), __temp = await __temp, __restore(), __temp).data.map((item) => {
      item.name = item.name.replace("&", " | ");
      return item;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_caret_right_outlined = CaretRightOutlined;
      const _cssVars = { style: {
        "--9f497448": displayCategory.value
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "classify-container" }, _attrs, _cssVars))} data-v-9ea5a098><ul relative data-v-9ea5a098><!--[-->`);
      ssrRenderList(data3.value, (item, idx) => {
        _push(`<li relative data-v-9ea5a098>${ssrInterpolate(item.name)} <div absolute top-0 right-3 text="#a0a0a0" text-13px data-v-9ea5a098>`);
        _push(ssrRenderComponent(_component_caret_right_outlined, null, null, _parent));
        _push(`</div></li>`);
      });
      _push(`<!--]--><div class="category top-0 left-160px z-10 p-6" rounded display-none absolute h-400px w-634px bg="#fdfdfd" data-v-9ea5a098><div class="category-content" data-v-9ea5a098><div data-v-9ea5a098><span data-v-9ea5a098>\u57FA\u7840\u8BFE\u7A0B</span><div flex mt-2 data-v-9ea5a098><!--[-->`);
      ssrRenderList((_a = data3.value[now2.value]) == null ? void 0 : _a.subCategoryList.filter((item) => item.level === "junior"), (item, idx) => {
        _push(`<p class="ml-4 text-12px cursor-pointer" data-v-9ea5a098>${ssrInterpolate(item.name)}</p>`);
      });
      _push(`<!--]--></div></div><div mt-6 data-v-9ea5a098><span data-v-9ea5a098>\u8FDB\u9636\u8BFE\u7A0B</span><div flex mt-2 data-v-9ea5a098><!--[-->`);
      ssrRenderList((_b = data3.value[now2.value]) == null ? void 0 : _b.subCategoryList.filter((item) => item.level === "middle"), (item, idx) => {
        _push(`<p class="ml-4 text-12px cursor-pointer" data-v-9ea5a098>${ssrInterpolate(item.name)}</p>`);
      });
      _push(`<!--]--></div></div></div></div></ul></div>`);
    };
  }
});
const Classify_vue_vue_type_style_index_0_scoped_9ea5a098_lang = "";
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/Classify.vue");
  return _sfc_setup$o ? _sfc_setup$o(props2, ctx) : void 0;
};
const Classify = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-9ea5a098"]]);
const Classify$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Classify
}, Symbol.toStringTag, { value: "Module" }));
const index$b = "";
const index$a = "";
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "RecentStudy",
  __ssrInlineRender: true,
  props: {
    title: null,
    percent: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_progress = __unplugin_components_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        "w-152px": "",
        "mb-2": "",
        class: "recent-study"
      }, _attrs))} data-v-a107ca1b><p class="truncate w-152px text-12px color-#7f7f7f" data-v-a107ca1b>${ssrInterpolate(__props.title)}</p>`);
      _push(ssrRenderComponent(_component_a_progress, {
        percent: __props.percent,
        size: "small",
        strokeColor: "#f88930",
        color: "#aaaaaa"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const RecentStudy_vue_vue_type_style_index_0_scoped_a107ca1b_lang = "";
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/UserInfomation/RecentStudy.vue");
  return _sfc_setup$n ? _sfc_setup$n(props2, ctx) : void 0;
};
const RecentStudy = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-a107ca1b"]]);
const RecentStudy$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RecentStudy
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "LoggedIn",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const __$temp_1 = useUser(), personalInfo = toRef(__$temp_1, "personalInfo");
    const res = ([__temp, __restore] = withAsyncContext(() => GET_PLAY_RECORD({ page: 1, size: 4 })), __temp = await __temp, __restore(), __temp).data.current_data;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_avatar = Avatar$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "logged-container" }, _attrs))} data-v-9d61d965><div data-v-9d61d965><div class="top" data-v-9d61d965><div class="user-info" pt-4 ml-14px data-v-9d61d965>`);
      _push(ssrRenderComponent(_component_a_avatar, {
        size: 50,
        src: personalInfo.value.head_img
      }, null, _parent));
      _push(`<div ml-12px data-v-9d61d965><span color="#4f555d" font-400 data-v-9d61d965>${ssrInterpolate(personalInfo.value.username)}</span></div></div><div mt-8px mx-14px flexb class="text-12px text-#7f7f7f" data-v-9d61d965><span data-v-9d61d965>\u5B66\u4E60\u65F6\u957F\uFF1A${ssrInterpolate((personalInfo.value.learn_time / 3600).toFixed(2))}\u5C0F\u65F6</span></div><div flex justify-center pl-14px pr-14px mt-15px data-v-9d61d965><div flexc flex-col mb-10px cursor-pointer data-v-9d61d965><span text-14px color="#4f555d" data-v-9d61d965>\u6700\u8FD1\u5B66\u4E60</span><span bg="#4f555d" w-24px h-2px data-v-9d61d965></span></div></div></div><div mb-1 class="recent-study" data-v-9d61d965><!--[-->`);
      ssrRenderList(unref(res), (item) => {
        var _a;
        _push(`<div mt-2 data-v-9d61d965>`);
        _push(ssrRenderComponent(RecentStudy, {
          title: item.product_title,
          percent: Math.ceil(((_a = item.learn_ids.split(",")) == null ? void 0 : _a.length) / item.episode_num * 100)
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const LoggedIn_vue_vue_type_style_index_0_scoped_9d61d965_lang = "";
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/UserInfomation/LoggedIn.vue");
  return _sfc_setup$m ? _sfc_setup$m(props2, ctx) : void 0;
};
const LoggedIn = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-9d61d965"]]);
const LoggedIn$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LoggedIn
}, Symbol.toStringTag, { value: "Module" }));
const useModel = defineStore("model", () => {
  const registerModel = reactive({
    base: false,
    finish: false
  });
  const forgetModel = reactive({
    first: false,
    second: false,
    phoneCache: ""
  });
  const wxModel = ref(false);
  const loginModel = ref(false);
  const changeToFinish = () => {
    registerModel.base = false;
    registerModel.finish = true;
  };
  const changeToForget = () => {
    loginModel.value = false;
    forgetModel.first = true;
  };
  const switchForget = () => {
    forgetModel.first = !forgetModel.first;
    forgetModel.second = !forgetModel.second;
  };
  const changeToLogin = () => {
    loginModel.value = true;
  };
  return {
    registerModel,
    wxModel,
    loginModel,
    forgetModel,
    changeToFinish,
    changeToForget,
    switchForget,
    changeToLogin
  };
});
const _imports_0$7 = "" + globalThis.__publicAssetsURL("images/new.png");
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "NotLoggedIn",
  __ssrInlineRender: true,
  setup(__props) {
    const __$temp_1 = useModel();
    toRef(__$temp_1, "registerModel");
    toRef(__$temp_1, "loginModel");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        flexc: "",
        "flex-col": "",
        p2: ""
      }, _attrs))}><img mt-10 mb-1${ssrRenderAttr("src", _imports_0$7)} w-140px h-176px cursor-pointer><span text="center white" bg="#ff602a" leading-10px class="cursor-pointer rounded-71px w-130px h-24px text-12px p2"> \u767B\u5F55 / \u6CE8\u518C </span></div>`);
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/UserInfomation/NotLoggedIn.vue");
  return _sfc_setup$l ? _sfc_setup$l(props2, ctx) : void 0;
};
const NotLoggedIn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$l
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "UserInformation",
  __ssrInlineRender: true,
  setup(__props) {
    const __$temp_1 = useUser(), isLogin = toRef(__$temp_1, "isLogin");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "w-180px": "",
        "h-400px": "",
        "rounded-10px": "",
        "shadow-lg": "",
        flex: "",
        "flex-col": "",
        class: "shadow-user"
      }, _attrs))}>`);
      if (isLogin.value) {
        _push(ssrRenderComponent(LoggedIn, null, null, _parent));
      } else {
        _push(ssrRenderComponent(_sfc_main$l, null, null, _parent));
      }
      _push(`</div>`);
    };
  }
});
const UserInformation_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/UserInformation.vue");
  return _sfc_setup$k ? _sfc_setup$k(props2, ctx) : void 0;
};
const UserInformation = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$k
}, Symbol.toStringTag, { value: "Module" }));
const _imports_0$6 = "" + globalThis.__publicAssetsURL("images/icon_hot.png");
const _imports_0$5 = "" + globalThis.__publicAssetsURL("images/fire.png");
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "CardTag",
  __ssrInlineRender: true,
  props: {
    cardTag: null
  },
  setup(__props) {
    const convertLevel = (level) => {
      switch (level) {
        case "JUNIOR":
          return "\u521D\u7EA7";
        case "MIDDLE":
          return "\u4E2D\u7EA7";
        case "SENIOR":
          return "\u9AD8\u7EA7";
        default:
          return "\u672A\u77E5";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_user_outlined = UserOutlined;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-s" }, _attrs))} data-v-f8bda8b2><div text-14px leading-16px text="#404040" class="title" data-v-f8bda8b2>${ssrInterpolate(__props.cardTag.title)}</div><div class="level" data-v-f8bda8b2><div mr-12px data-v-f8bda8b2>\u7EA7\u522B\uFF1A${ssrInterpolate(convertLevel(__props.cardTag.course_level))}</div><span ml-4px flexc data-v-f8bda8b2><!--[-->`);
      ssrRenderList(5, (i) => {
        _push(`<img mr-4px${ssrRenderAttr("src", _imports_0$5)} w-14px h-14px data-v-f8bda8b2>`);
      });
      _push(`<!--]--></span></div><div class="peoples-price" data-v-f8bda8b2><span class="peoples" text-16px color="#7f7f7f" data-v-f8bda8b2>`);
      _push(ssrRenderComponent(_component_user_outlined, null, null, _parent));
      _push(` ${ssrInterpolate(__props.cardTag.uv)}</span><div class="price" flexc data-v-f8bda8b2><div color="#aaaaaa" data-v-f8bda8b2> \xA5<span class="price-original" data-v-f8bda8b2>${ssrInterpolate(__props.cardTag.old_amount)}</span></div><div color="#e51b11" data-v-f8bda8b2> \xA5<span class="price-present" data-v-f8bda8b2>${ssrInterpolate(__props.cardTag.amount)}</span></div></div></div></div>`);
    };
  }
});
const CardTag_vue_vue_type_style_index_0_scoped_f8bda8b2_lang = "";
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/Card/CardTag.vue");
  return _sfc_setup$j ? _sfc_setup$j(props2, ctx) : void 0;
};
const CardTag = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-f8bda8b2"]]);
const CardTag$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CardTag
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    card: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-tag" }, _attrs))} data-v-30a1527f><h3 class="title" data-v-30a1527f>${ssrInterpolate(__props.card.title)}</h3></div>`);
    };
  }
});
const Card_vue_vue_type_style_index_0_scoped_30a1527f_lang = "";
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/Card/Card.vue");
  return _sfc_setup$i ? _sfc_setup$i(props2, ctx) : void 0;
};
const Card = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-30a1527f"]]);
const Card$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Card
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "CardBase",
  __ssrInlineRender: true,
  props: {
    choiceCard: null,
    card: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$5;
      _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
        to: `/videoDetailsPage?id=${__props.card.id}`
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-box" cursor-pointer data-v-40a2d60e${_scopeId}><div class="top" data-v-40a2d60e${_scopeId}><img${ssrRenderAttr("src", __props.card.cover_img)} data-v-40a2d60e${_scopeId}></div><div class="bottom" data-v-40a2d60e${_scopeId}>`);
            if (__props.choiceCard === 0) {
              _push2(`<div data-v-40a2d60e${_scopeId}>`);
              _push2(ssrRenderComponent(CardTag, { "card-tag": __props.card }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else if (__props.choiceCard === 1) {
              _push2(`<div data-v-40a2d60e${_scopeId}>`);
              _push2(ssrRenderComponent(Card, { card: __props.card }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "card-box",
                "cursor-pointer": ""
              }, [
                createVNode("div", { class: "top" }, [
                  createVNode("img", {
                    src: __props.card.cover_img
                  }, null, 8, ["src"])
                ]),
                createVNode("div", { class: "bottom" }, [
                  __props.choiceCard === 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode(CardTag, { "card-tag": __props.card }, null, 8, ["card-tag"])
                  ])) : __props.choiceCard === 1 ? (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode(Card, { card: __props.card }, null, 8, ["card"])
                  ])) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const CardBase_vue_vue_type_style_index_0_scoped_40a2d60e_lang = "";
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/Card/CardBase.vue");
  return _sfc_setup$h ? _sfc_setup$h(props2, ctx) : void 0;
};
const CardBase = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-40a2d60e"]]);
const CardBase$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CardBase
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "CardContainer",
  __ssrInlineRender: true,
  props: {
    title: null,
    subTitles: null,
    choiceCard: null,
    cards: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ "w-full": "" }, _attrs))}>`);
      if (__props.title) {
        _push(`<div flex items-center><div flex items-end><img${ssrRenderAttr("src", _imports_0$6)} h-29px w-29px mr-5px><h2 text-16px mb-0px text="#4f555d">${ssrInterpolate(__props.title)}</h2></div><!--[-->`);
        ssrRenderList(__props.subTitles, (item) => {
          _push(`<div ml-48px flexc text-14px mr-40px pt-3px>${ssrInterpolate(item)}</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div flex items-center class="cards-bg"><div class="cards" mt-12px flex="~ wrap gap-24px"><!--[-->`);
      ssrRenderList(__props.cards, (item, index2) => {
        _push(ssrRenderComponent(CardBase, {
          card: item,
          key: index2,
          "choice-card": __props.choiceCard
        }, null, _parent));
      });
      _push(`<!--]--></div><div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/CardContainer.vue");
  return _sfc_setup$g ? _sfc_setup$g(props2, ctx) : void 0;
};
const CardContainer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$g
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "listRightBanner",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const bannerData = ref(([__temp, __restore] = withAsyncContext(() => GET_BANNER("list_right_banner")), __temp = await __temp, __restore(), __temp).data);
    const bannerImgSrcs = computed(() => {
      return bannerData.value.img_url.split(",");
    });
    const bannerImgHrefs = computed(() => {
      return bannerData.value.pc_link.split(",");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "side-swiper" }, _attrs))} data-v-3880ae99>`);
      _push(ssrRenderComponent(unref(Swiper), {
        autoplay: { delay: 2500, disableOnInteraction: false },
        class: "banner-student",
        modules: [unref(Autoplay)],
        loop: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(bannerImgSrcs.value, (item, idx) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: item }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<a target="__blank"${ssrRenderAttr("href", bannerImgHrefs.value[idx])} data-v-3880ae99${_scopeId2}><img${ssrRenderAttr("src", item)} data-v-3880ae99${_scopeId2}></a>`);
                  } else {
                    return [
                      createVNode("a", {
                        target: "__blank",
                        href: bannerImgHrefs.value[idx]
                      }, [
                        createVNode("img", { src: item }, null, 8, ["src"])
                      ], 8, ["href"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment$1, null, renderList(bannerImgSrcs.value, (item, idx) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: item }, {
                  default: withCtx(() => [
                    createVNode("a", {
                      target: "__blank",
                      href: bannerImgHrefs.value[idx]
                    }, [
                      createVNode("img", { src: item }, null, 8, ["src"])
                    ], 8, ["href"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const listRightBanner_vue_vue_type_style_index_0_scoped_3880ae99_lang = "";
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/listRightBanner.vue");
  return _sfc_setup$f ? _sfc_setup$f(props2, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-3880ae99"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "AliYun",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const data3 = ([__temp, __restore] = withAsyncContext(() => GET_BANNER("aliyun_ecs")), __temp = await __temp, __restore(), __temp).data;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ListRightBanner = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "advertisement-bg" }, _attrs))} data-v-9f2a4505>`);
      _push(ssrRenderComponent(_component_ListRightBanner, { class: "advertisement" }, null, _parent));
      _push(`<div wfull h-505px class="shadow-adv" mt-14px data-v-9f2a4505><a${ssrRenderAttr("href", unref(data3).pc_link)} target="_blank" data-v-9f2a4505><img wfull hfull cursor-pointer${ssrRenderAttr("src", unref(data3).img_url)}${ssrRenderAttr("alt", unref(data3).name)} data-v-9f2a4505></a></div></div>`);
    };
  }
});
const AliYun_vue_vue_type_style_index_0_scoped_9f2a4505_lang = "";
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/AliYun.vue");
  return _sfc_setup$e ? _sfc_setup$e(props2, ctx) : void 0;
};
const AliYun = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-9f2a4505"]]);
const AliYun$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AliYun
}, Symbol.toStringTag, { value: "Module" }));
const _imports_0$4 = "" + globalThis.__publicAssetsURL("images/svg/jsjs.svg");
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "Instructor",
  __ssrInlineRender: true,
  props: {
    name: null,
    avatar: null,
    company: null,
    description: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_avatar = Avatar$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        "h-318px": "",
        "w-340px": "",
        "mt-3": "",
        class: "instructor"
      }, _attrs))} data-v-b86624fb><div class="top" flex ml-36px data-v-b86624fb>`);
      _push(ssrRenderComponent(_component_a_avatar, {
        size: 80,
        src: __props.avatar,
        style: { "border": "1px solid #f2f2f2" }
      }, null, _parent));
      _push(`<div class="info" data-v-b86624fb><h3 text-24px text="#222222" data-v-b86624fb>${ssrInterpolate(__props.name)}</h3><span text-18px text="#404040" data-v-b86624fb>${ssrInterpolate(__props.company)}</span></div></div><div flex flex-col w-296px text-12px style="${ssrRenderStyle({ "margin": "0 16px" })}" data-v-b86624fb><div mt-1 data-v-b86624fb><p font-700 data-v-b86624fb>\u4E2A\u4EBA\u4ECB\u7ECD:</p><p data-v-b86624fb>${ssrInterpolate(__props.description)}</p></div></div></div>`);
    };
  }
});
const Instructor_vue_vue_type_style_index_0_scoped_b86624fb_lang = "";
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/Instructor/Instructor.vue");
  return _sfc_setup$d ? _sfc_setup$d(props2, ctx) : void 0;
};
const Instructor = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-b86624fb"]]);
const Instructor$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Instructor
}, Symbol.toStringTag, { value: "Module" }));
const GET_TEACHER_LIST = async () => {
  return await useApi("/teacher/v1/list");
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "AboutInstructor",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const data3 = ref(([__temp, __restore] = withAsyncContext(() => GET_TEACHER_LIST()), __temp = await __temp, __restore(), __temp).data);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "about-instructor",
        "w-full": ""
      }, _attrs))} data-v-bd334f76><div flex items-center data-v-bd334f76><div flex items-end data-v-bd334f76><img${ssrRenderAttr("src", _imports_0$4)} h-29px w-29px mr-5px data-v-bd334f76><h2 text-16px text="#4f555d" data-v-bd334f76>\u8BB2\u5E08\u4ECB\u7ECD</h2></div></div><div h-350px w-1200px mt-8px data-v-bd334f76>`);
      _push(ssrRenderComponent(unref(Swiper), {
        autoplay: { delay: 2500, disableOnInteraction: false },
        spaceBetween: 60,
        slidesPerView: 3,
        modules: [unref(Autoplay)],
        class: "mySwiper"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(data3.value, (item) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: item.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(Instructor, {
                      name: item.name,
                      avatar: item.head_img,
                      description: item.profile
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(Instructor, {
                        name: item.name,
                        avatar: item.head_img,
                        description: item.profile
                      }, null, 8, ["name", "avatar", "description"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment$1, null, renderList(data3.value, (item) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: item.id
                }, {
                  default: withCtx(() => [
                    createVNode(Instructor, {
                      name: item.name,
                      avatar: item.head_img,
                      description: item.profile
                    }, null, 8, ["name", "avatar", "description"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const AboutInstructor_vue_vue_type_style_index_0_scoped_bd334f76_lang = "";
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/Instructor/AboutInstructor.vue");
  return _sfc_setup$c ? _sfc_setup$c(props2, ctx) : void 0;
};
const AboutInstructor = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-bd334f76"]]);
const AboutInstructor$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AboutInstructor
}, Symbol.toStringTag, { value: "Module" }));
const meta$q = void 0;
const meta$p = void 0;
const meta$o = void 0;
const meta$n = void 0;
const meta$m = void 0;
const meta$l = void 0;
const meta$k = void 0;
const meta$j = void 0;
const meta$i = void 0;
const meta$h = void 0;
const meta$g = void 0;
const meta$f = void 0;
const meta$e = void 0;
const meta$d = void 0;
const meta$c = void 0;
const QUERY_PRODUCT_BY_CID = async function(params) {
  return await useApi("/product/v1/query_by_cid", {
    method: "POST",
    body: params
  });
};
const GET_VIDEO_DETAILS = async (id) => {
  return await useApi("/product/v1/detail", {
    params: { id }
  });
};
const GET_LATEST_LEARN = async (id) => {
  return await useApi("order/v1/latest", {
    params: { id }
  });
};
const GET_CHAPTER = async (id) => {
  return await useApi("/product/v1/chapter", {
    params: { id }
  });
};
const GET_VIDEO_MATERIALS = async (id) => {
  return await useApi("product/v1/material_by_id", {
    params: { id }
  });
};
const QUERY_PAY = async function(id) {
  return await useApi("/order/v1/query_pay", { params: { id } });
};
const PAY_CALLBACK = async (outTradeNo) => {
  return await useApi("/order/v1/callback", {
    method: "post",
    body: {
      out_trade_no: outTradeNo
    }
  });
};
const QUERY_STATE = async (outTradeNo) => {
  return await useApi("/order/v1/query_state", {
    params: {
      out_trade_no: outTradeNo
    }
  });
};
const index$9 = "";
const _imports_0$3 = "" + globalThis.__publicAssetsURL("images/svg/close_icon.svg");
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Wechat",
  __ssrInlineRender: true,
  props: {
    wechat: null,
    outTradeNo: null
  },
  emits: ["onCancel"],
  setup(__props) {
    const handlePay = async () => {
      const data3 = await PAY_CALLBACK(__props.outTradeNo);
      if (data3.code === 1) {
        message.success("\u652F\u4ED8\u6210\u529F");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_button = Button$1;
      if (__props.wechat.visible) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "wechat" }, _attrs))} data-v-aed55e4e><div class="bg" data-v-aed55e4e><div class="content flexc flex-col wfull relative" data-v-aed55e4e><img${ssrRenderAttr("src", _imports_0$3)} class="absolute top-30px right-30px cursor-pointer select-none" data-v-aed55e4e><p mt-24px color="#7f7f7f" ml-15px data-v-aed55e4e>\u8BA2\u5355\u7F16\u53F7\uFF1A${ssrInterpolate(__props.outTradeNo)}</p><p mt-24px color="#7f7f7f" ml-15px data-v-aed55e4e>\u8BF7\u5C3D\u5FEB\u626B\u7801\u5B8C\u6210\u652F\u4ED8\uFF0C\u4EE5\u4FBF\u8BA2\u5355\u5C3D\u5FEB\u5904\u7406\uFF01</p><div class="bottom-opt" data-v-aed55e4e>`);
        _push(ssrRenderComponent(_component_a_button, {
          onClick: ($event) => _ctx.$emit("onCancel")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u5173\u95ED`);
            } else {
              return [
                createTextVNode("\u5173\u95ED")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_a_button, {
          type: "primary",
          onClick: handlePay
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u8D2D\u4E70`);
            } else {
              return [
                createTextVNode("\u8D2D\u4E70")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const Wechat_vue_vue_type_style_index_0_scoped_aed55e4e_lang = "";
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/payPage/Wechat.vue");
  return _sfc_setup$b ? _sfc_setup$b(props2, ctx) : void 0;
};
const Wechat = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-aed55e4e"]]);
const Wechat$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wechat
}, Symbol.toStringTag, { value: "Module" }));
const meta$b = void 0;
const meta$a = void 0;
const index$8 = "";
const index$7 = "";
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Avatar",
  __ssrInlineRender: true,
  setup(__props) {
    const __$temp_1 = useUser(), token = toRef(__$temp_1, "token"), personalInfo = toRef(__$temp_1, "personalInfo"), asyncUserInfo = toRef(__$temp_1, "asyncUserInfo");
    const fileList = ref([]);
    let loading = ref(false);
    const handleChange2 = async (info) => {
      if (info.file.status === "uploading") {
        loading.value = true;
        return;
      }
      if (info.file.status === "done") {
        loading.value = false;
        if (info.file.response.code === 1) {
          await asyncUserInfo.value();
          message.success("\u4E0A\u4F20\u6210\u529F\uFF01");
        }
        return;
      }
      if (info.file.status === "error") {
        loading.value = false;
        message.error("\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\uFF01");
      }
    };
    const beforeUpload = (file) => {
      const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        message.error("\u53EA\u80FD\u4E0A\u4F20JPG\u6216\u8005PNG\u683C\u5F0F\u56FE\u7247!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error("\u56FE\u7247\u5FC5\u987B\u5C0F\u4E8E2mb");
      }
      return isJpgOrPng && isLt2M;
    };
    const cursor = computed(() => {
      return !loading.value ? "default" : "not-allowed";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_loading_outlined = LoadingOutlined$1;
      const _component_a_upload = __unplugin_components_1;
      const _cssVars = { style: {
        "--68c0e69f": cursor.value
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({
        "w-100px": "",
        "h-100px": "",
        "rounded-full": "",
        "overflow-hidden": "",
        relative: "",
        class: "avatar"
      }, _attrs, _cssVars))} data-v-b75df038>`);
      if (loading.value) {
        _push(`<div absolute z-20 class="top-90% left-10%" style="${ssrRenderStyle({ cursor: cursor.value })}" data-v-b75df038>`);
        _push(ssrRenderComponent(_component_loading_outlined, {
          "text-80px": "",
          "text-white": ""
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_a_upload, {
        "file-list": fileList.value,
        "onUpdate:file-list": ($event) => fileList.value = $event,
        name: "headImg",
        "list-type": "picture",
        "max-count": 1,
        "show-upload-list": false,
        action: "http://127.0.0.1:8081/api/user/v1/update_img",
        "before-upload": beforeUpload,
        onChange: handleChange2,
        headers: { authorization: `${token.value}` },
        style: !loading.value ? null : { display: "none" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div opacity-60 w-100px bg-black z-20 bottom-0 text-white text-btn center-text-30 data-v-b75df038${_scopeId}>\u4FEE\u6539\u5934\u50CF</div>`);
          } else {
            return [
              createVNode("div", {
                "opacity-60": "",
                "w-100px": "",
                "bg-black": "",
                "z-20": "",
                "bottom-0": "",
                "text-white": "",
                "text-btn": "",
                "center-text-30": ""
              }, "\u4FEE\u6539\u5934\u50CF")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<img${ssrRenderAttr("src", personalInfo.value.head_img)} w-100px h-100px style="${ssrRenderStyle({ opacity: loading.value ? "0.6" : "1" })}" data-v-b75df038></div>`);
    };
  }
});
const Avatar_vue_vue_type_style_index_0_scoped_b75df038_lang = "";
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/personal/Avatar.vue");
  return _sfc_setup$a ? _sfc_setup$a(props2, ctx) : void 0;
};
const Avatar = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-b75df038"]]);
const Avatar$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Avatar
}, Symbol.toStringTag, { value: "Module" }));
const index$6 = "";
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "BasicInfor",
  __ssrInlineRender: true,
  setup(__props) {
    let __$temp_1 = useUser(), personalInfo = toRef(__$temp_1, "personalInfo");
    toRef(__$temp_1, "asyncUserInfo");
    let formData = ref({ ...personalInfo.value });
    let disabled = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_radio_group = __unplugin_components_0$2;
      const _component_a_radio = Radio;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "BasicInfor" }, _attrs))} data-v-c883fdc2><div class="username" data-v-c883fdc2><span data-v-c883fdc2>\u6635\u79F0</span><input${ssrRenderAttr("value", formData.value.username)}${ssrIncludeBooleanAttr(disabled.value) ? " disabled" : ""} class="${ssrRenderClass([!disabled.value && "notDisable"])}" data-v-c883fdc2></div><div class="sex" data-v-c883fdc2><span data-v-c883fdc2>\u6027\u522B</span><span style="${ssrRenderStyle(disabled.value ? null : { display: "none" })}" data-v-c883fdc2>${ssrInterpolate(["\u5973", "\u7537"][formData.value.sex])}</span>`);
      _push(ssrRenderComponent(_component_a_radio_group, {
        value: formData.value.sex,
        "onUpdate:value": ($event) => formData.value.sex = $event,
        style: !disabled.value ? null : { display: "none" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_radio, { value: "1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u7537`);
                } else {
                  return [
                    createTextVNode("\u7537")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_radio, { value: "0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u5973`);
                } else {
                  return [
                    createTextVNode("\u5973")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_radio, { value: "1" }, {
                default: withCtx(() => [
                  createTextVNode("\u7537")
                ]),
                _: 1
              }),
              createVNode(_component_a_radio, { value: "0" }, {
                default: withCtx(() => [
                  createTextVNode("\u5973")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="city" data-v-c883fdc2><span data-v-c883fdc2>\u57CE\u5E02</span><input${ssrRenderAttr("value", formData.value.city)}${ssrIncludeBooleanAttr(disabled.value) ? " disabled" : ""} class="${ssrRenderClass([!disabled.value && "notDisable"])}" data-v-c883fdc2></div><div class="autograph" data-v-c883fdc2><span data-v-c883fdc2>\u7B7E\u540D</span><input${ssrRenderAttr("value", formData.value.slogan)}${ssrIncludeBooleanAttr(disabled.value) ? " disabled" : ""} class="${ssrRenderClass([!disabled.value && "notDisable"])}" data-v-c883fdc2></div><div class="button" data-v-c883fdc2><button class="btn border-none center-text-34 color-white w-100px" bg="#f38e48" style="${ssrRenderStyle(disabled.value ? null : { display: "none" })}" data-v-c883fdc2>\u7F16\u8F91</button><div style="${ssrRenderStyle(!disabled.value ? null : { display: "none" })}" data-v-c883fdc2><button btn border-none text-14px color-white w-100px center-text-34 bg="#f38e48" data-v-c883fdc2>\u4FDD\u5B58</button><button btn border-none text-14px color-white w-100px center-text-34 ml-40px b="#f38e48" class="cancel" data-v-c883fdc2> \u53D6\u6D88 </button></div></div></div>`);
    };
  }
});
const BasicInfor_vue_vue_type_style_index_0_scoped_c883fdc2_lang = "";
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/personal/PersonalSettings/BasicInfor.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props2, ctx) : void 0;
};
const BasicInfor = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-c883fdc2"]]);
const BasicInfor$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: BasicInfor
}, Symbol.toStringTag, { value: "Module" }));
const PersonalSettings_vue_vue_type_style_index_0_scoped_4754166f_lang = "";
const _sfc_main$8 = {
  __name: "PersonalSettings",
  __ssrInlineRender: true,
  setup(__props) {
    const activeKey = ref("1");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_tabs = Tabs;
      const _component_a_tab_pane = __unplugin_components_1$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "PersonalSettings" }, _attrs))} data-v-4754166f>`);
      _push(ssrRenderComponent(_component_a_tabs, {
        activeKey: activeKey.value,
        "onUpdate:activeKey": ($event) => activeKey.value = $event,
        "p-8px": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_tab_pane, {
              key: "1",
              tab: "\u57FA\u672C\u4FE1\u606F"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(BasicInfor, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(BasicInfor)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_tab_pane, {
                key: "1",
                tab: "\u57FA\u672C\u4FE1\u606F"
              }, {
                default: withCtx(() => [
                  createVNode(BasicInfor)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/personal/PersonalSettings.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props2, ctx) : void 0;
};
const PersonalSettings = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-4754166f"]]);
const PersonalSettings$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PersonalSettings
}, Symbol.toStringTag, { value: "Module" }));
const meta$9 = void 0;
const meta$8 = void 0;
const meta$7 = void 0;
const meta$6 = void 0;
const index$5 = "";
const index$4 = "";
const index$3 = "";
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Pagination",
  __ssrInlineRender: true,
  props: {
    pagination: null
  },
  emits: ["change"],
  setup(__props, { emit: emits }) {
    const props2 = __props;
    const _pageSize = props2.pagination.pageSize;
    const isStart = computed(() => {
      return props2.pagination.page === 1;
    });
    const isEnd = computed(() => {
      return props2.pagination.page === Math.ceil(props2.pagination.total / props2.pagination.pageSize);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_pagination = __unplugin_components_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pagination" }, _attrs))} data-v-a1352555><span mr-30px class="${ssrRenderClass({ disable: unref(isStart) })}" data-v-a1352555>\u9996\u9875</span><span mr-40px class="${ssrRenderClass({ disable: unref(isStart) })}" data-v-a1352555>\u4E0A\u4E00\u9875</span>`);
      _push(ssrRenderComponent(_component_a_pagination, {
        size: "small",
        "show-less-items": "",
        "show-size-changer": false,
        "show-quick-jumper": false,
        total: __props.pagination.total,
        current: __props.pagination.page,
        "onUpdate:current": ($event) => __props.pagination.page = $event,
        onChange: ($event) => _ctx.$emit("change", $event),
        "page-size": unref(_pageSize)
      }, null, _parent));
      _push(`<span ml-20px class="${ssrRenderClass({ disable: unref(isEnd) })}" data-v-a1352555>\u4E0B\u4E00\u9875</span><span ml-30px class="${ssrRenderClass({ disable: unref(isEnd) })}" data-v-a1352555> \u5C3E\u9875 </span></div>`);
    };
  }
});
const Pagination_vue_vue_type_style_index_0_scoped_a1352555_lang = "";
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pagination.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props2, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-a1352555"]]);
const useVideo = defineStore("video", () => {
  const videoInfor = reactive({
    orderState: false,
    videoPrice: null,
    easyPoint: null,
    logicPoint: null,
    contentPoint: null
  });
  const checkPay = async (id) => {
    if ((await QUERY_PAY(id)).code == 1) {
      videoInfor.orderState = true;
    } else {
      videoInfor.orderState = false;
    }
  };
  return {
    videoInfor,
    checkPay
  };
});
const getComment = async (params) => {
  return await useApi("/comment/v1/page", {
    method: "post",
    body: params
  });
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "UserComment",
  __ssrInlineRender: true,
  props: {
    id: null
  },
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const paginationData = reactive({ page: 1, total: 0, pageSize: 8 });
    const __$temp_1 = useVideo(), videoInfor = toRef(__$temp_1, "videoInfor");
    let data3 = ref();
    data3.value = ([__temp, __restore] = withAsyncContext(() => getComment({ page: paginationData.page, size: paginationData.pageSize, id: __props.id })), __temp = await __temp, __restore(), __temp).data;
    paginationData.total = ((_a = data3.value) == null ? void 0 : _a.total_record) || 0;
    const change = async (page) => {
      paginationData.page = page;
      data3.value = data3.value = (await getComment({ page, id: __props.id, size: paginationData.pageSize })).data;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b;
      const _component_pagination = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ wfull: "" }, _attrs))} data-v-54227137><div class="evaluation" data-v-54227137><div flex items-center mr-74px data-v-54227137><h2 data-v-54227137>\u7EFC\u5408<br data-v-54227137>\u8BC4\u5206</h2><h2 class="text-52px! color-#f38e48! ml-5px w-60px!" data-v-54227137>${ssrInterpolate(((videoInfor.value.contentPoint + videoInfor.value.easyPoint + videoInfor.value.logicPoint) / 3).toFixed(2))}</h2></div><div class="vertical-line" data-v-54227137></div><div flexc flex-col ml-65px mr-65px font-500 data-v-54227137><span text-28px color="#f38e48" data-v-54227137>${ssrInterpolate(videoInfor.value.contentPoint)}</span><span text-20px color="#222222" w-87px data-v-54227137>\u5185\u5BB9\u5B9E\u7528</span></div><div class="vertical-line" data-v-54227137></div><div flexc flex-col ml-65px mr-65px font-500 data-v-54227137><span text-28px color="#f38e48" data-v-54227137>${ssrInterpolate(videoInfor.value.easyPoint)}</span><span text-20px color="#222222" w-87px data-v-54227137>\u7B80\u6D01\u6613\u61C2</span></div><div class="vertical-line" data-v-54227137></div><div flexc flex-col ml-65px mr-65px font-500 data-v-54227137><span text-28px color="#f38e48" data-v-54227137>${ssrInterpolate(videoInfor.value.logicPoint)}</span><span text-20px color="#222222" w-87px data-v-54227137>\u903B\u8F91\u6E05\u6670</span></div></div><!--[-->`);
      ssrRenderList((_b = (_a2 = data3.value) == null ? void 0 : _a2.current_data) != null ? _b : [], (item) => {
        _push(`<div ml-34px mt-39px data-v-54227137><div flex data-v-54227137><img w-60px h-60px${ssrRenderAttr("src", item.head_img)} class="rounded-full" data-v-54227137><div ml-10px wfull data-v-54227137><div flexb data-v-54227137><span text="#333333" text-20px data-v-54227137>${ssrInterpolate(item.username)}</span></div><p text-16px mt-6px color="#555555" data-v-54227137>${ssrInterpolate(item.content)}</p><div flexb p1 color="#aaaaaa" data-v-54227137><span data-v-54227137>${ssrInterpolate(unref(dayjs)(item.gmt_create).format("YYYY-MM-DD HH:mm:ss"))}</span></div></div></div></div>`);
      });
      _push(`<!--]-->`);
      if (paginationData.page > 1) {
        _push(ssrRenderComponent(_component_pagination, {
          pagination: paginationData,
          "onUpdate:pagination": ($event) => isRef(paginationData) ? paginationData.value = $event : null,
          onChange: change
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const UserComment_vue_vue_type_style_index_0_scoped_54227137_lang = "";
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UserComment.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props2, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-54227137"]]);
const useMaterials = defineStore(
  "materials",
  () => {
    const materialsInfor = reactive({
      bdZipUrl: "",
      noteUrl: ""
    });
    const GET_VIDEO_MATERIALSData = async function(id) {
      var _a, _b;
      const __$temp_1 = useUser(), isLogin = toRef(__$temp_1, "isLogin");
      if (!isLogin.value)
        return;
      const res = await GET_VIDEO_MATERIALS(id);
      materialsInfor.bdZipUrl = (_a = res.data) == null ? void 0 : _a.bd_zip_url;
      materialsInfor.noteUrl = (_b = res.data) == null ? void 0 : _b.note_url;
    };
    const clearInfo = function() {
      materialsInfor.bdZipUrl = "";
      materialsInfor.noteUrl = "";
    };
    return {
      clearInfo,
      GET_VIDEO_MATERIALSData,
      ...toRefs(materialsInfor)
    };
  },
  { persist: true }
);
const index$2 = "";
const _imports_0$2 = "" + globalThis.__publicAssetsURL("images/note.png");
const _imports_1$1 = "" + globalThis.__publicAssetsURL("images/materials.png");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Materials",
  __ssrInlineRender: true,
  props: {
    center: { type: Boolean },
    id: null
  },
  setup(__props) {
    const visible = ref(false);
    const __$temp_1 = useUser();
    toRef(__$temp_1, "isLogin");
    let __$temp_2 = useModel();
    toRef(__$temp_2, "loginModel");
    const __$temp_3 = useMaterials(), bdZipUrl = toRef(__$temp_3, "bdZipUrl");
    toRef(__$temp_3, "noteUrl");
    const handleOk = (e) => {
      visible.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_modal = Modal;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: __props.center ? "center" : "materials"
      }, _attrs))} data-v-75b3f7a4><div class="note" data-v-75b3f7a4><img${ssrRenderAttr("src", _imports_0$2)} h-83px w-83px data-v-75b3f7a4><div text-16px color="#666666" mt-7px mb-12px data-v-75b3f7a4>\u8001\u5E08\u7B14\u8BB0</div><span w-99px h-28px text="#4d555d" class="b b-#4d555d" rounded-5px text-center cursor-pointer leading-26px data-v-75b3f7a4> \u67E5\u770B </span></div><div class="note" data-v-75b3f7a4><img${ssrRenderAttr("src", _imports_1$1)} h-83px w-83px data-v-75b3f7a4><div text-16px color="#666666" mt-7px mb-12px data-v-75b3f7a4>\u8BFE\u7A0B\u8D44\u6599</div><span w-99px h-28px text="#4d555d" class="b b-#4d555d" rounded-5px text-center cursor-pointer leading-26px data-v-75b3f7a4> \u4E0B\u8F7D </span></div>`);
      _push(ssrRenderComponent(_component_a_modal, {
        visible: visible.value,
        "onUpdate:visible": ($event) => visible.value = $event,
        title: "\u4E0B\u8F7D",
        onOk: handleOk,
        footer: null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<div class="xiazai" data-v-75b3f7a4${_scopeId}><div data-v-75b3f7a4${_scopeId}>\u767E\u5EA6\u4E91</div><div class="address" data-v-75b3f7a4${_scopeId}><div data-v-75b3f7a4${_scopeId}> \u5730\u5740\uFF1A<a${ssrRenderAttr("href", (_a = bdZipUrl.value) == null ? void 0 : _a.split("||")[0])} data-v-75b3f7a4${_scopeId}>${ssrInterpolate((_b = bdZipUrl.value) == null ? void 0 : _b.split("||")[0])}</a></div><div data-v-75b3f7a4${_scopeId}>\u5BC6\u7801\uFF1A${ssrInterpolate((_c = bdZipUrl.value) == null ? void 0 : _c.split("||")[1])}</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "xiazai" }, [
                createVNode("div", null, "\u767E\u5EA6\u4E91"),
                createVNode("div", { class: "address" }, [
                  createVNode("div", null, [
                    createTextVNode(" \u5730\u5740\uFF1A"),
                    createVNode("a", {
                      href: (_d = bdZipUrl.value) == null ? void 0 : _d.split("||")[0]
                    }, toDisplayString((_e = bdZipUrl.value) == null ? void 0 : _e.split("||")[0]), 9, ["href"])
                  ]),
                  createVNode("div", null, "\u5BC6\u7801\uFF1A" + toDisplayString((_f = bdZipUrl.value) == null ? void 0 : _f.split("||")[1]), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const Materials_vue_vue_type_style_index_0_scoped_75b3f7a4_lang = "";
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Materials.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props2, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-75b3f7a4"]]);
const _imports_0$1 = "" + globalThis.__publicAssetsURL("images/svg/arrows-up-down.svg");
const _imports_1 = "" + globalThis.__publicAssetsURL("images/play.png");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ChapterSection",
  __ssrInlineRender: true,
  props: ["item", "index"],
  setup(__props) {
    let __$temp_1 = useVideo();
    toRef(__$temp_1, "videoInfor");
    let __$temp_2 = useUser();
    toRef(__$temp_2, "isLogin");
    useRoute().query.id;
    let sectionShow = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        wfull: "",
        class: "b b-#f2f2f2"
      }, _attrs))} data-v-ecf9616c><div class="chapter" data-v-ecf9616c><div data-v-ecf9616c><span data-v-ecf9616c>${ssrInterpolate(`\u7B2C ${__props.index + 1} \u7AE0 `)}\xA0</span><span data-v-ecf9616c>${ssrInterpolate(__props.item.title)}</span></div><div w-20px h-12px mr-40px data-v-ecf9616c><img${ssrRenderAttr("src", _imports_0$1)} style="${ssrRenderStyle({ transform: !sectionShow.value ? "rotate(180deg)" : "" })}" data-v-ecf9616c></div></div><!--[-->`);
      ssrRenderList(__props.item.episodeList, (subItem, subIndex) => {
        _push(`<div class="collection" flex style="${ssrRenderStyle(sectionShow.value && __props.item.episodeList.length > 0 ? null : { display: "none" })}" data-v-ecf9616c><div flex data-v-ecf9616c><img w-22px h-22px${ssrRenderAttr("src", _imports_1)} data-v-ecf9616c><div ml-2px data-v-ecf9616c>${ssrInterpolate(`\u7B2C ${subIndex + 1} \u8282 \xA0${subItem.title}`)}</div></div><div class="free" style="${ssrRenderStyle(subItem.free === 0 ? null : { display: "none" })}" data-v-ecf9616c>\u8BD5\u770B</div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const ChapterSection_vue_vue_type_style_index_0_scoped_ecf9616c_lang = "";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/videoDetailsPage/ChapterSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props2, ctx) : void 0;
};
const ChapterSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-ecf9616c"]]);
const ChapterSection$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ChapterSection
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "OutLine",
  __ssrInlineRender: true,
  props: {
    id: null
  },
  async setup(__props) {
    let __temp, __restore;
    const chapterList = reactive(([__temp, __restore] = withAsyncContext(() => GET_CHAPTER(__props.id)), __temp = await __temp, __restore(), __temp).data);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-93aed601><!--[-->`);
      ssrRenderList(chapterList, (item, index2) => {
        _push(`<div class="outlineItem" data-v-93aed601>`);
        _push(ssrRenderComponent(ChapterSection, {
          item,
          index: index2,
          "mb-20px": ""
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const OutLine_vue_vue_type_style_index_0_scoped_93aed601_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/videoDetailsPage/OutLine.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props2, ctx) : void 0;
};
const OutLine = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-93aed601"]]);
const OutLine$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: OutLine
}, Symbol.toStringTag, { value: "Module" }));
const meta$5 = void 0;
const meta$4 = void 0;
const meta$3 = void 0;
const _imports_0 = "" + globalThis.__publicAssetsURL("images/blank_img.png");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Blank",
  __ssrInlineRender: true,
  props: {
    text: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "blank" }, _attrs))} data-v-5688f094><img${ssrRenderAttr("src", _imports_0)} w-256px h-256px data-v-5688f094><p text-16px color="#4d555d" data-v-5688f094>${ssrInterpolate(__props.text)}</p></div>`);
    };
  }
});
const Blank_vue_vue_type_style_index_0_scoped_5688f094_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blank.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props2, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5688f094"]]);
const meta$2 = void 0;
const useDanmuState = defineStore(
  "danmu_state",
  () => {
    const global2 = ref(false);
    return { global: global2 };
  },
  { persist: true }
);
const meta$1 = void 0;
const useSocket = defineStore("socket", () => {
  let socket = ref(null);
  let videoDanmuList = ref([]);
  const initialize = () => {
    socket.value = io("ws://127.0.0.1:8081");
    socket.value.on("connect", () => {
      console.log("socketio\u5DF2\u8FDE\u63A5");
    });
    onBulletChat();
  };
  const handleAddDanmu = (data3) => {
    socket.value.emit("bulletChat", data3);
  };
  const onBulletChat = () => {
    socket.value.on("message", (data3) => {
      videoDanmuList.value.push(data3);
    });
  };
  return {
    videoDanmuList: videoDanmuList.value,
    initialize,
    handleAddDanmu
  };
});
const meta = void 0;
const _routes = [
  {
    name: "index",
    path: "/",
    file: "/Users/mawenqing/Documents/xfw/class-nuxt/pages/index.vue",
    children: [
      {
        name: "index-AliYun",
        path: "AliYun",
        file: "/Users/mawenqing/Documents/xfw/class-nuxt/pages/index/AliYun.vue",
        children: [],
        meta: meta$p,
        alias: (meta$p == null ? void 0 : meta$p.alias) || [],
        component: () => Promise.resolve().then(() => AliYun$1).then((m) => m.default || m)
      },
      {
        name: "index-Banner",
        path: "Banner",
        file: "/Users/mawenqing/Documents/xfw/class-nuxt/pages/index/Banner.vue",
        children: [],
        meta: meta$o,
        alias: (meta$o == null ? void 0 : meta$o.alias) || [],
        component: () => Promise.resolve().then(() => Banner$1).then((m) => m.default || m)
      },
      {
        name: "index-BroadSide",
        path: "BroadSide",
        file: "/Users/mawenqing/Documents/xfw/class-nuxt/pages/index/BroadSide.vue",
        children: [],
        meta: meta$n,
        alias: (meta$n == null ? void 0 : meta$n.alias) || [],
        component: () => import("./_nuxt/BroadSide.699a3741.js").then((m) => m.default || m)
      },
      {
        name: "index-Card-Card",
        path: "Card/Card",
        file: "/Users/mawenqing/Documents/xfw/class-nuxt/pages/index/Card/Card.vue",
        children: [],
        meta: meta$m,
        alias: (meta$m == null ? void 0 : meta$m.alias) || [],
        component: () => Promise.resolve().then(() => Card$1).then((m) => m.default || m)
      },
      {
        name: "index-Card-CardBase",
        path: "Card/CardBase",
        file: "/Users/mawenqing/Documents/xfw/class-nuxt/pages/index/Card/CardBase.vue",
        children: [],
        meta: meta$l,
        alias: (meta$l == null ? void 0 : meta$l.alias) || [],
        component: () => Promise.resolve().then(() => CardBase$1).then((m) => m.default || m)
      },
      {
        name: "index-Card-CardTag",
        path: "Card/CardTag",
        file: "/Users/mawenqing/Documents/xfw/class-nuxt/pages/index/Card/CardTag.vue",
        children: [],
        meta: meta$k,
        alias: (meta$k == null ? void 0 : meta$k.alias) || [],
        component: () => Promise.resolve().then(() => CardTag$1).then((m) => m.default || m)
      },
      {
        name: "index-CardContainer",
        path: "CardContainer",
        file: "/Users/mawenqing/Documents/xfw/class-nuxt/pages/index/CardContainer.vue",
        children: [],
        meta: meta$j,
        alias: (meta$j == null ? void 0 : meta$j.alias) || [],
        component: () => Promise.resolve().then(() => CardContainer).then((m) => m.default || m)
      },
      {
        name: "index-Classify",
        path: "Classify",
        file: "/Users/mawenqing/Documents/xfw/class-nuxt/pages/index/Classify.vue",
        children: [],
        meta: meta$i,
        alias: (meta$i == null ? void 0 : meta$i.alias) || [],
        component: () => Promise.resolve().then(() => Classify$1).then((m) => m.default || m)
      },
      {
        name: "index-Instructor-AboutInstructor",
        path: "Instructor/AboutInstructor",
        file: "/Users/mawenqing/Documents/xfw/class-nuxt/pages/index/Instructor/AboutInstructor.vue",
        children: [],
        meta: meta$h,
        alias: (meta$h == null ? void 0 : meta$h.alias) || [],
        component: () => Promise.resolve().then(() => AboutInstructor$1).then((m) => m.default || m)
      },
      {
        name: "index-Instructor-Instructor",
        path: "Instructor/Instructor",
        file: "/Users/mawenqing/Documents/xfw/class-nuxt/pages/index/Instructor/Instructor.vue",
        children: [],
        meta: meta$g,
        alias: (meta$g == null ? void 0 : meta$g.alias) || [],
        component: () => Promise.resolve().then(() => Instructor$1).then((m) => m.default || m)
      },
      {
        name: "index-UserInfomation-LoggedIn",
        path: "UserInfomation/LoggedIn",
        file: "/Users/mawenqing/Documents/xfw/class-nuxt/pages/index/UserInfomation/LoggedIn.vue",
        children: [],
        meta: meta$f,
        alias: (meta$f == null ? void 0 : meta$f.alias) || [],
        component: () => Promise.resolve().then(() => LoggedIn$1).then((m) => m.default || m)
      },
      {
        name: "index-UserInfomation-NotLoggedIn",
        path: "UserInfomation/NotLoggedIn",
        file: "/Users/mawenqing/Documents/xfw/class-nuxt/pages/index/UserInfomation/NotLoggedIn.vue",
        children: [],
        meta: meta$e,
        alias: (meta$e == null ? void 0 : meta$e.alias) || [],
        component: () => Promise.resolve().then(() => NotLoggedIn).then((m) => m.default || m)
      },
      {
        name: "index-UserInfomation-RecentStudy",
        path: "UserInfomation/RecentStudy",
        file: "/Users/mawenqing/Documents/xfw/class-nuxt/pages/index/UserInfomation/RecentStudy.vue",
        children: [],
        meta: meta$d,
        alias: (meta$d == null ? void 0 : meta$d.alias) || [],
        component: () => Promise.resolve().then(() => RecentStudy$1).then((m) => m.default || m)
      },
      {
        name: "index-UserInformation",
        path: "UserInformation",
        file: "/Users/mawenqing/Documents/xfw/class-nuxt/pages/index/UserInformation.vue",
        children: [],
        meta: meta$c,
        alias: (meta$c == null ? void 0 : meta$c.alias) || [],
        component: () => Promise.resolve().then(() => UserInformation).then((m) => m.default || m)
      }
    ],
    meta: meta$q,
    alias: (meta$q == null ? void 0 : meta$q.alias) || [],
    component: () => import("./_nuxt/index.fdc04c76.js").then((m) => m.default || m)
  },
  {
    name: "payPage",
    path: "/payPage",
    file: "/Users/mawenqing/Documents/xfw/class-nuxt/pages/payPage.vue",
    children: [
      {
        name: "payPage-Wechat",
        path: "Wechat",
        file: "/Users/mawenqing/Documents/xfw/class-nuxt/pages/payPage/Wechat.vue",
        children: [],
        meta: meta$a,
        alias: (meta$a == null ? void 0 : meta$a.alias) || [],
        component: () => Promise.resolve().then(() => Wechat$1).then((m) => m.default || m)
      }
    ],
    meta: meta$b,
    alias: (meta$b == null ? void 0 : meta$b.alias) || [],
    component: () => import("./_nuxt/payPage.d66ac8c2.js").then((m) => m.default || m)
  },
  {
    name: "personal",
    path: "/personal",
    file: "/Users/mawenqing/Documents/xfw/class-nuxt/pages/personal.vue",
    children: [
      {
        name: "personal-Avatar",
        path: "Avatar",
        file: "/Users/mawenqing/Documents/xfw/class-nuxt/pages/personal/Avatar.vue",
        children: [],
        meta: meta$8,
        alias: (meta$8 == null ? void 0 : meta$8.alias) || [],
        component: () => Promise.resolve().then(() => Avatar$1).then((m) => m.default || m)
      },
      {
        name: "personal-PersonalSettings",
        path: "PersonalSettings",
        file: "/Users/mawenqing/Documents/xfw/class-nuxt/pages/personal/PersonalSettings.vue",
        children: [
          {
            name: "personal-PersonalSettings-BasicInfor",
            path: "BasicInfor",
            file: "/Users/mawenqing/Documents/xfw/class-nuxt/pages/personal/PersonalSettings/BasicInfor.vue",
            children: [],
            meta: meta$6,
            alias: (meta$6 == null ? void 0 : meta$6.alias) || [],
            component: () => Promise.resolve().then(() => BasicInfor$1).then((m) => m.default || m)
          }
        ],
        meta: meta$7,
        alias: (meta$7 == null ? void 0 : meta$7.alias) || [],
        component: () => Promise.resolve().then(() => PersonalSettings$1).then((m) => m.default || m)
      }
    ],
    meta: meta$9,
    alias: (meta$9 == null ? void 0 : meta$9.alias) || [],
    component: () => import("./_nuxt/personal.0be9dc32.js").then((m) => m.default || m)
  },
  {
    name: "videoDetailsPage",
    path: "/videoDetailsPage",
    file: "/Users/mawenqing/Documents/xfw/class-nuxt/pages/videoDetailsPage.vue",
    children: [
      {
        name: "videoDetailsPage-ChapterSection",
        path: "ChapterSection",
        file: "/Users/mawenqing/Documents/xfw/class-nuxt/pages/videoDetailsPage/ChapterSection.vue",
        children: [],
        meta: meta$4,
        alias: (meta$4 == null ? void 0 : meta$4.alias) || [],
        component: () => Promise.resolve().then(() => ChapterSection$1).then((m) => m.default || m)
      },
      {
        name: "videoDetailsPage-OutLine",
        path: "OutLine",
        file: "/Users/mawenqing/Documents/xfw/class-nuxt/pages/videoDetailsPage/OutLine.vue",
        children: [],
        meta: meta$3,
        alias: (meta$3 == null ? void 0 : meta$3.alias) || [],
        component: () => Promise.resolve().then(() => OutLine$1).then((m) => m.default || m)
      }
    ],
    meta: meta$5,
    alias: (meta$5 == null ? void 0 : meta$5.alias) || [],
    component: () => import("./_nuxt/videoDetailsPage.93ae0048.js").then((m) => m.default || m)
  },
  {
    name: "videoListPage",
    path: "/videoListPage",
    file: "/Users/mawenqing/Documents/xfw/class-nuxt/pages/videoListPage.vue",
    children: [],
    meta: meta$2,
    alias: (meta$2 == null ? void 0 : meta$2.alias) || [],
    component: () => import("./_nuxt/videoListPage.0016952b.js").then((m) => m.default || m)
  },
  {
    name: "videoPlayPage",
    path: "/videoPlayPage",
    file: "/Users/mawenqing/Documents/xfw/class-nuxt/pages/videoPlayPage.vue",
    children: [
      {
        name: "videoPlayPage-Player",
        path: "Player",
        file: "/Users/mawenqing/Documents/xfw/class-nuxt/pages/videoPlayPage/Player.vue",
        children: [],
        meta,
        alias: (meta == null ? void 0 : meta.alias) || [],
        component: () => import("./_nuxt/Player.317a0eaa.js").then((m) => m.default || m)
      }
    ],
    meta: meta$1,
    alias: (meta$1 == null ? void 0 : meta$1.alias) || [],
    component: () => import("./_nuxt/videoPlayPage.69c63c75.js").then((m) => m.default || m)
  }
];
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions
};
const auth_45global = defineNuxtRouteMiddleware((to, from) => {
  const __$temp_1 = useUser(), isLogin = toRef(__$temp_1, "isLogin");
  const __$temp_2 = useModel(), changeToLogin = toRef(__$temp_2, "changeToLogin");
  const authPath = ["payPage", "personal", "videoPlayPage"];
  if (authPath.filter((item) => to.fullPath.includes(item)).length > 0 && !isLogin.value) {
    changeToLogin.value();
    message.warn("\u8BF7\u5148\u767B\u5F55\uFF01");
    if (from.fullPath === to.fullPath)
      return "/";
    return from;
  }
});
const globalMiddleware = [
  auth_45global
];
const namedMiddleware = {};
const node_modules_nuxt_dist_pages_runtime_router_mjs_qNv5Ky2ZmB = defineNuxtPlugin(async (nuxtApp) => {
  var _a, _b, _c, _d;
  let __temp, __restore;
  nuxtApp.vueApp.component("NuxtPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtNestedPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtChild", NuxtPage);
  let routerBase = useRuntimeConfig().app.baseURL;
  if (routerOptions.hashMode && !routerBase.includes("#")) {
    routerBase += "#";
  }
  const history = (_b = (_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) != null ? _b : createMemoryHistory(routerBase);
  const routes = (_d = (_c = routerOptions.routes) == null ? void 0 : _c.call(routerOptions, _routes)) != null ? _d : _routes;
  const initialURL = nuxtApp.ssrContext.url;
  const router = createRouter({
    ...routerOptions,
    history,
    routes
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const _route = shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _route.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    var _a2, _b2, _c2, _d2;
    if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d2 = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d2.default)) {
      syncCurrentRoute();
    }
  });
  const route = {};
  for (const key2 in _route.value) {
    route[key2] = computed(() => _route.value[key2]);
  }
  nuxtApp._route = reactive(route);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  useError();
  try {
    if (true) {
      ;
      [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
      ;
    }
    ;
    [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
    ;
  } catch (error2) {
    callWithNuxt(nuxtApp, showError, [error2]);
  }
  const initialLayout = useState$1("_layout");
  router.beforeEach(async (to, from) => {
    var _a2, _b2;
    to.meta = reactive(to.meta);
    if (nuxtApp.isHydrating) {
      to.meta.layout = (_a2 = initialLayout.value) != null ? _a2 : to.meta.layout;
    }
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry2 of componentMiddleware) {
          middlewareEntries.add(entry2);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry2 of middlewareEntries) {
      const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
      if (!middleware) {
        throw new Error(`Unknown route middleware: '${entry2}'.`);
      }
      const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
      {
        if (result === false || result instanceof Error) {
          const error2 = result || createError$1({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return callWithNuxt(nuxtApp, showError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (to.matched.length === 0) {
      callWithNuxt(nuxtApp, showError, [createError$1({
        statusCode: 404,
        fatal: false,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.event.res.statusCode = 404;
    } else {
      const currentURL = to.fullPath || "/";
      if (!isEqual$2(currentURL, initialURL)) {
        await callWithNuxt(nuxtApp, navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      callWithNuxt(nuxtApp, showError, [error2]);
    }
  });
  return { provide: { router } };
});
const node_modules__64pinia_nuxt_dist_runtime_plugin_vue3_mjs_A0OWXRrUgq = defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
  setActivePinia(pinia);
  {
    nuxtApp.payload.pinia = pinia.state.value;
  }
  return {
    provide: {
      pinia
    }
  };
});
const __uno = "";
const _nuxt_unocss_mjs_MzCDxu9LMj = defineNuxtPlugin(() => {
});
const plugins_persistedState_ts_4ZrO3u181n = defineNuxtPlugin((nuxtApp) => {
  const date = new Date();
  date.setDate(date.getDate() + 7);
  nuxtApp.$pinia.use(
    createNuxtPersistedState(useCookie, {
      cookieOptions: {
        expires: date,
        maxAge: 3600 * 24 * 7,
        sameSite: "strict"
      }
    })
  );
});
const _plugins = [
  _nuxt_components_plugin_mjs_KR1HBZs4kY,
  node_modules_nuxt_dist_head_runtime_lib_vueuse_head_plugin_mjs_D7WGfuP1A0,
  node_modules_nuxt_dist_head_runtime_plugin_mjs_1QO0gqa6n2,
  node_modules_nuxt_dist_pages_runtime_router_mjs_qNv5Ky2ZmB,
  node_modules__64pinia_nuxt_dist_runtime_plugin_vue3_mjs_A0OWXRrUgq,
  _nuxt_unocss_mjs_MzCDxu9LMj,
  plugins_persistedState_ts_4ZrO3u181n
];
const _sfc_main$1 = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const ErrorComponent = defineAsyncComponent(() => import("./_nuxt/error-component.e4e679f1.js").then((r) => r.default || r));
    const nuxtApp = useNuxtApp();
    provide("_route", useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        callWithNuxt(nuxtApp, showError, [err]);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_App = resolveComponent("App");
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else {
            _push(ssrRenderComponent(_component_App, null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props2, ctx) : void 0;
};
const layouts = {
  default: defineAsyncComponent(() => import("./_nuxt/default.5e2f8b28.js").then((m) => m.default || m))
};
const __nuxt_component_0 = defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props2, context) {
    const route = useRoute();
    return () => {
      var _a, _b, _c;
      const layout = (_b = (_a = isRef(props2.name) ? props2.name.value : props2.name) != null ? _a : route.meta.layout) != null ? _b : "default";
      const hasLayout = layout && layout in layouts;
      const transitionProps = (_c = route.meta.layoutTransition) != null ? _c : appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => {
          return _wrapIf(layouts[layout], hasLayout, context.slots).default();
        }
      }).default();
    };
  }
});
const swiper_min = "";
const navigation_min = "";
const pagination_min = "";
const _default3 = "";
const index$1 = "";
const index = "";
const _sfc_main = {
  __name: "app",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const __$temp_1 = useSocket(), initialize = toRef(__$temp_1, "initialize");
    initialize.value();
    const __$temp_2 = useUser(), asyncUserInfo = toRef(__$temp_2, "asyncUserInfo");
    [__temp, __restore] = withAsyncContext(() => asyncUserInfo.value()), await __temp, __restore();
    useHead({
      title: "\u5C0F\u537F\u8BFE\u5802",
      meta: [
        { name: "description", content: "\u5C0F\u537F\u8BFE\u5802\u7684\u7F51\u7AD9" },
        { name: "keywords", content: "vue3\u6559\u7A0B,\u5FAE\u670D\u52A1\u6559\u7A0B,nuxt3\u6559\u7A0B" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtPage = resolveComponent("NuxtPage");
      _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtPage, {
              key: _ctx.$route.fullPath
            }, null, _parent2, _scopeId));
          } else {
            return [
              (openBlock(), createBlock(_component_NuxtPage, {
                key: _ctx.$route.fullPath
              }))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main$1);
    vueApp.component("App", _sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);
export {
  flattenChildren as $,
  AliYun as A,
  Banner as B,
  Classify as C,
  useDanmuState as D,
  message as E,
  PropTypes$1 as F,
  GET_VIDEO_DETAILS as G,
  omit$2 as H,
  classNames as I,
  filterEmpty as J,
  tuple as K,
  cloneElement as L,
  useInjectFormItemContext as M,
  useConfigInject as N,
  OutLine as O,
  PersonalSettings as P,
  QUERY_STATE as Q,
  antInputDirective as R,
  isPlainObject$1 as S,
  warning as T,
  wrapperRaf as U,
  ResizeObserver as V,
  Wechat as W,
  isValidElement as X,
  VcSelect as Y,
  selectProps as Z,
  _export_sfc as _,
  useHead as a,
  buttonTypes as a0,
  initDefaultProps$1 as a1,
  devWarning as a2,
  getPlacements as a3,
  Dropdown as a4,
  VcCheckbox as a5,
  withInstall as a6,
  useModel as a7,
  _imports_0$3 as a8,
  USER_REGISTER as a9,
  Form$1 as aa,
  __unplugin_components_2 as ab,
  Modal as ac,
  USER_LOGIN as ad,
  CHANGE_PASSWORD as ae,
  Avatar$3 as af,
  Menu as ag,
  __unplugin_components_3 as ah,
  _sfc_main$k as b,
  _sfc_main$g as c,
  AboutInstructor as d,
  entry$1 as default,
  __nuxt_component_0$4 as e,
  _sfc_main$q as f,
  __nuxt_component_0$3 as g,
  useRoute as h,
  useUser as i,
  Avatar as j,
  GET_PLAY_RECORD as k,
  __unplugin_components_0 as l,
  useVideo as m,
  navigateTo as n,
  GET_LATEST_LEARN as o,
  __nuxt_component_0$5 as p,
  __nuxt_component_1$1 as q,
  __nuxt_component_2 as r,
  Card$3 as s,
  GET_CATEGROY_LIST as t,
  useApi as u,
  QUERY_PRODUCT_BY_CID as v,
  Button$1 as w,
  __nuxt_component_0$1 as x,
  __nuxt_component_1 as y,
  useSocket as z
};
//# sourceMappingURL=server.mjs.map
