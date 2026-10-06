/* @ds-bundle: {"format":4,"namespace":"VAHODesignSystem_66d4ce","components":[{"name":"BrushStroke","sourcePath":"components/brand/BrushStroke.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Sticker","sourcePath":"components/brand/Sticker.jsx"},{"name":"ColorSwatch","sourcePath":"components/commerce/ColorSwatch.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"QuantityStepper","sourcePath":"components/commerce/QuantityStepper.jsx"},{"name":"SizeSelector","sourcePath":"components/commerce/SizeSelector.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/BrushStroke.jsx":"a910553a14b0","components/brand/Icon.jsx":"64433538f374","components/brand/Logo.jsx":"539daa258804","components/brand/Sticker.jsx":"c54b6eb2bb0f","components/commerce/ColorSwatch.jsx":"ec721d3ca390","components/commerce/ProductCard.jsx":"66694827418b","components/commerce/QuantityStepper.jsx":"834cb0a1b558","components/commerce/SizeSelector.jsx":"3b7fe672eb47","components/core/Badge.jsx":"ca42c7e8f4bb","components/core/Button.jsx":"8cc3bbb27549","components/core/IconButton.jsx":"07ead4df4fff","components/core/Tag.jsx":"1730dc99cba1","components/feedback/Dialog.jsx":"24519d01cc9c","components/feedback/Toast.jsx":"e84d1e677eed","components/feedback/Tooltip.jsx":"434400d2502e","components/forms/Checkbox.jsx":"7f466c0228dc","components/forms/Input.jsx":"79ec9cbd0a9e","components/forms/Radio.jsx":"e7e222c021c8","components/forms/Select.jsx":"61584381d67e","components/forms/Switch.jsx":"b3237af3e06a","components/navigation/Tabs.jsx":"d33d34715a0e","ui_kits/shop/App.jsx":"b5c00983be28","ui_kits/shop/CartDrawer.jsx":"30067835c715","ui_kits/shop/Collection.jsx":"dca305ff6bdd","ui_kits/shop/Footer.jsx":"b92e5bd81c7b","ui_kits/shop/Header.jsx":"dc702b2747b5","ui_kits/shop/Home.jsx":"1a803014ef03","ui_kits/shop/Product.jsx":"f615818e79e8","ui_kits/shop/data.jsx":"118e9bec10ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VAHODesignSystem_66d4ce = window.VAHODesignSystem_66d4ce || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/BrushStroke.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function BrushStroke({
  color = 'lime',
  width = 200,
  base = 'assets',
  rotate = 0,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${base}/brush/brush-${color}.png`,
    alt: "",
    "aria-hidden": "true",
    width: width,
    style: {
      display: 'block',
      height: 'auto',
      transform: rotate ? `rotate(${rotate}deg)` : undefined,
      pointerEvents: 'none',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { BrushStroke });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/BrushStroke.jsx", error: String((e && e.message) || e) }); }

// components/brand/Icon.jsx
try { (() => {
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style
}) {
  const url = `https://unpkg.com/lucide-static@0.460.0/icons/${name}.svg`;
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flexShrink: 0,
      background: color,
      WebkitMask: `url(${url}) center/contain no-repeat`,
      mask: `url(${url}) center/contain no-repeat`,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Logo({
  color = 'orange',
  width = 120,
  base = 'assets',
  alt = 'VAHO',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${base}/logo/vaho-logo-${color}.png`,
    alt: alt,
    width: width,
    style: {
      display: 'block',
      height: 'auto',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Sticker.jsx
try { (() => {
const BG = {
  orange: 'var(--vaho-orange)',
  fuchsia: 'var(--vaho-fuchsia)',
  purple: 'var(--vaho-purple)',
  lime: 'var(--vaho-lime)',
  white: 'var(--vaho-white)',
  black: 'var(--vaho-black)'
};
const INK = {
  orange: 'white',
  fuchsia: 'white',
  purple: 'white',
  lime: 'fuchsia',
  white: 'fuchsia',
  black: 'white'
};
function Sticker({
  color = 'orange',
  size = 96,
  base = 'assets',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: BG[color],
      border: color === 'white' ? '1px solid var(--ink-300)' : 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${base}/logo/vaho-logo-${INK[color]}.png`,
    alt: "VAHO",
    style: {
      width: '78%',
      height: 'auto'
    }
  }));
}
Object.assign(__ds_scope, { Sticker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Sticker.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ColorSwatch.jsx
try { (() => {
function ColorSwatch({
  options = [],
  value,
  onChange,
  size = 32,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      ...style
    }
  }, options.map(o => {
    const on = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      role: "radio",
      "aria-checked": on,
      "aria-label": o.label,
      title: o.label,
      onClick: () => onChange && onChange(o.value),
      style: {
        width: size,
        height: size,
        borderRadius: '50%',
        padding: 3,
        background: 'transparent',
        border: `1.5px solid ${on ? 'var(--vaho-black)' : 'transparent'}`,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        background: o.color,
        border: '1px solid var(--ink-300)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { ColorSwatch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ColorSwatch.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function ProductCard({
  image,
  name,
  price,
  colorName,
  badge,
  swatches = [],
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 5',
      background: 'var(--vaho-white)',
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: `url(${image}) center/cover`,
      transform: h ? 'scale(1.03)' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 15px/1.3 var(--font-sans)',
      color: 'var(--ink-900)'
    }
  }, name), colorName && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1.3 var(--font-sans)',
      color: 'var(--ink-500)'
    }
  }, colorName)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 15px/1.3 var(--font-sans)',
      color: 'var(--ink-900)',
      whiteSpace: 'nowrap'
    }
  }, price)), swatches.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, swatches.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: c,
      border: '1px solid var(--ink-300)'
    }
  }))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/commerce/QuantityStepper.jsx
try { (() => {
function QuantityStepper({
  value = 1,
  onChange,
  min = 1,
  max = 10,
  style
}) {
  const b = (d, dis) => ({
    width: 36,
    height: '100%',
    border: 'none',
    background: 'transparent',
    font: '400 18px/1 var(--font-sans)',
    color: dis ? 'var(--ink-300)' : 'var(--ink-900)',
    cursor: dis ? 'default' : 'pointer'
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 40,
      border: '1px solid var(--line-200)',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--vaho-white)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Menos",
    disabled: value <= min,
    onClick: () => onChange && onChange(Math.max(min, value - 1)),
    style: b(-1, value <= min)
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 24,
      textAlign: 'center',
      font: '500 14px/1 var(--font-sans)'
    }
  }, value), /*#__PURE__*/React.createElement("button", {
    "aria-label": "M\xE1s",
    disabled: value >= max,
    onClick: () => onChange && onChange(Math.min(max, value + 1)),
    style: b(1, value >= max)
  }, "+"));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/commerce/SizeSelector.jsx
try { (() => {
function SizeSelector({
  sizes = ['XS', 'S', 'M', 'L', 'XL'],
  value,
  onChange,
  unavailable = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      ...style
    }
  }, sizes.map(s => {
    const on = s === value,
      off = unavailable.includes(s);
    return /*#__PURE__*/React.createElement("button", {
      key: s,
      role: "radio",
      "aria-checked": on,
      disabled: off,
      onClick: () => onChange && onChange(s),
      style: {
        minWidth: 52,
        height: 44,
        padding: '0 12px',
        borderRadius: 'var(--radius-md)',
        font: '500 14px/1 var(--font-sans)',
        cursor: off ? 'not-allowed' : 'pointer',
        background: on ? 'var(--vaho-black)' : 'var(--vaho-white)',
        color: on ? '#fff' : off ? 'var(--ink-300)' : 'var(--ink-900)',
        border: `1px solid ${on ? 'var(--vaho-black)' : 'var(--line-200)'}`,
        textDecoration: off ? 'line-through' : 'none'
      }
    }, s);
  }));
}
Object.assign(__ds_scope, { SizeSelector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/SizeSelector.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const T = {
  lime: ['var(--vaho-lime)', 'var(--vaho-black)'],
  fuchsia: ['var(--vaho-fuchsia)', '#fff'],
  orange: ['var(--vaho-orange)', 'var(--vaho-black)'],
  purple: ['var(--vaho-purple)', '#fff'],
  black: ['var(--vaho-black)', '#fff'],
  neutral: ['var(--vaho-white)', 'var(--vaho-black)']
};
function Badge({
  tone = 'lime',
  children,
  style
}) {
  const [bg, fg] = T[tone] || T.lime;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 22,
      padding: '0 10px',
      borderRadius: 'var(--radius-pill)',
      background: bg,
      color: fg,
      border: tone === 'neutral' ? '1px solid var(--line-200)' : 'none',
      font: '600 11px/1 var(--font-sans)',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const V = {
  primary: {
    bg: 'var(--vaho-black)',
    fg: 'var(--vaho-white)',
    bd: 'var(--vaho-black)',
    hbg: 'var(--ink-700)'
  },
  accent: {
    bg: 'var(--vaho-fuchsia)',
    fg: 'var(--vaho-white)',
    bd: 'var(--vaho-fuchsia)',
    hbg: 'var(--vaho-fuchsia-600)'
  },
  secondary: {
    bg: 'transparent',
    fg: 'var(--vaho-black)',
    bd: 'var(--vaho-black)',
    hbg: 'var(--vaho-white)'
  },
  ghost: {
    bg: 'transparent',
    fg: 'var(--vaho-black)',
    bd: 'transparent',
    hbg: 'var(--line-100)'
  },
  inverse: {
    bg: 'var(--vaho-white)',
    fg: 'var(--vaho-black)',
    bd: 'var(--vaho-white)',
    hbg: 'var(--vaho-cream)'
  }
};
const S = {
  sm: {
    h: 36,
    px: 16,
    fs: 13
  },
  md: {
    h: 44,
    px: 22,
    fs: 14
  },
  lg: {
    h: 52,
    px: 28,
    fs: 15
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth,
  disabled,
  iconLeft,
  iconRight,
  children,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const v = V[variant] || V.primary;
  const s = S[size] || S.md;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: s.h,
      padding: `0 ${s.px}px`,
      width: fullWidth ? '100%' : undefined,
      font: `500 ${s.fs}px/1 var(--font-sans)`,
      letterSpacing: '.01em',
      color: v.fg,
      background: h && !disabled ? v.hbg : v.bg,
      border: `1px solid ${v.bd}`,
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      transform: p && !disabled ? 'scale(.98)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 40,
  badge,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const bg = variant === 'solid' ? h ? 'var(--ink-700)' : 'var(--vaho-black)' : variant === 'outline' ? h ? 'var(--vaho-white)' : 'transparent' : h ? 'var(--line-100)' : 'transparent';
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: bg,
      color: variant === 'solid' ? 'var(--vaho-white)' : 'var(--vaho-black)',
      border: variant === 'outline' ? '1px solid var(--vaho-black)' : '1px solid transparent',
      cursor: 'pointer',
      padding: 0,
      transition: 'background var(--dur-fast)',
      ...style
    }
  }, rest), icon, badge != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      right: 0,
      minWidth: 16,
      height: 16,
      padding: '0 4px',
      borderRadius: 8,
      background: 'var(--vaho-fuchsia)',
      color: '#fff',
      font: '600 10px/16px var(--font-sans)'
    }
  }, badge));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  selected,
  onClick,
  children,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    "aria-pressed": !!selected,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 34,
      padding: '0 16px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      background: selected ? 'var(--vaho-black)' : h ? 'var(--vaho-white)' : 'transparent',
      color: selected ? '#fff' : 'var(--vaho-black)',
      border: `1px solid ${selected ? 'var(--vaho-black)' : 'var(--ink-300)'}`,
      font: '500 13px/1 var(--font-sans)',
      transition: 'background var(--dur-fast)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  width = 440
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.35)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '100%',
      background: 'var(--vaho-cream)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lift)',
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 16
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: '600 22px/1.2 var(--font-sans)',
      letterSpacing: '-.01em'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Cerrar",
    onClick: onClose,
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      font: '300 22px/1 var(--font-sans)'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 15px/1.5 var(--font-sans)',
      color: 'var(--ink-700)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  message,
  tone = 'default',
  action,
  onAction,
  style
}) {
  const dot = tone === 'success' ? 'var(--vaho-lime)' : tone === 'error' ? 'var(--status-error)' : 'var(--vaho-fuchsia)';
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 18px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--vaho-black)',
      color: '#fff',
      font: '500 14px/1.3 var(--font-sans)',
      boxShadow: 'var(--shadow-lift)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: dot,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", null, message), action && /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--vaho-lime)',
      font: '600 13px/1 var(--font-sans)',
      cursor: 'pointer',
      padding: 0,
      marginLeft: 4
    }
  }, action));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  children,
  placement = 'top'
}) {
  const [o, setO] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: '100%',
    marginTop: 8
  } : {
    bottom: '100%',
    marginBottom: 8
  };
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setO(true),
    onMouseLeave: () => setO(false),
    onFocus: () => setO(true),
    onBlur: () => setO(false),
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, children, o && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      ...pos,
      whiteSpace: 'nowrap',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--vaho-black)',
      color: '#fff',
      font: '500 12px/1.2 var(--font-sans)',
      pointerEvents: 'none',
      zIndex: 50
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  onChange,
  label,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      font: '400 14px/1.3 var(--font-sans)',
      color: 'var(--ink-900)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-sm)',
      border: `1.5px solid ${checked ? 'var(--vaho-black)' : 'var(--ink-300)'}`,
      background: checked ? 'var(--vaho-black)' : 'var(--vaho-white)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transition: 'background var(--dur-fast)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 10,
      borderRight: '2px solid #fff',
      borderBottom: '2px solid #fff',
      transform: 'translateY(-1px) rotate(45deg)'
    }
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const labelStyle = {
  font: '500 13px/1.2 var(--font-sans)',
  color: 'var(--ink-900)'
};
const hintStyle = err => ({
  font: '400 12px/1.4 var(--font-sans)',
  color: err ? 'var(--status-error)' : 'var(--ink-500)'
});
function Input({
  label,
  hint,
  error,
  id,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const iid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: iid,
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: iid,
    onFocus: () => setF(true),
    onBlur: () => setF(false)
  }, rest, {
    style: {
      height: 46,
      padding: '0 16px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--vaho-white)',
      font: '400 15px/1 var(--font-sans)',
      color: 'var(--ink-900)',
      outline: 'none',
      border: `1px solid ${error ? 'var(--status-error)' : f ? 'var(--vaho-black)' : 'var(--line-200)'}`,
      boxShadow: f ? '0 0 0 3px var(--vaho-purple-100)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  })), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: hintStyle(!!error)
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  checked,
  onChange,
  label,
  name,
  value,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      font: '400 14px/1.3 var(--font-sans)',
      color: 'var(--ink-900)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: !!checked,
    disabled: disabled,
    onChange: () => onChange && onChange(value),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: `1.5px solid ${checked ? 'var(--vaho-black)' : 'var(--ink-300)'}`,
      background: 'var(--vaho-white)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--vaho-black)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const labelStyle = {
  font: '500 13px/1.2 var(--font-sans)',
  color: 'var(--ink-900)'
};
const hintStyle = err => ({
  font: '400 12px/1.4 var(--font-sans)',
  color: err ? 'var(--status-error)' : 'var(--ink-500)'
});
function Select({
  label,
  options = [],
  hint,
  error,
  id,
  style,
  ...rest
}) {
  const iid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: iid,
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: iid
  }, rest, {
    style: {
      width: '100%',
      height: 46,
      padding: '0 40px 0 16px',
      appearance: 'none',
      WebkitAppearance: 'none',
      borderRadius: 'var(--radius-md)',
      background: 'var(--vaho-white)',
      border: `1px solid ${error ? 'var(--status-error)' : 'var(--line-200)'}`,
      font: '400 15px/1 var(--font-sans)',
      color: 'var(--ink-900)',
      cursor: 'pointer'
    }
  }), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 16,
      top: '50%',
      width: 8,
      height: 8,
      borderRight: '1.5px solid var(--ink-900)',
      borderBottom: '1.5px solid var(--ink-900)',
      transform: 'translateY(-70%) rotate(45deg)',
      pointerEvents: 'none'
    }
  })), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: hintStyle(!!error)
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      font: '400 14px/1.3 var(--font-sans)',
      color: 'var(--ink-900)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": !!checked,
    disabled: disabled,
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 40,
      height: 24,
      borderRadius: 12,
      padding: 2,
      border: 'none',
      cursor: 'inherit',
      background: checked ? 'var(--vaho-fuchsia)' : 'var(--ink-300)',
      transition: 'background var(--dur-base) var(--ease-out)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      transform: checked ? 'translateX(16px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)',
      boxShadow: '0 1px 2px rgba(0,0,0,.2)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 28,
      borderBottom: '1px solid var(--line-200)',
      ...style
    }
  }, items.map(it => {
    const v = typeof it === 'string' ? it : it.value,
      l = typeof it === 'string' ? it : it.label,
      on = v === value;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(v),
      style: {
        position: 'relative',
        padding: '12px 0',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        font: `${on ? 600 : 400} 14px/1 var(--font-sans)`,
        color: on ? 'var(--ink-900)' : 'var(--ink-500)'
      }
    }, l, on && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        background: 'var(--vaho-fuchsia)',
        borderRadius: 1
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shop/App.jsx
try { (() => {
function App() {
  const {
    Toast
  } = window.VAHODesignSystem_66d4ce;
  const [view, setView] = React.useState(() => localStorage.getItem('vaho-shop-view') || 'home');
  const [cat, setCat] = React.useState('Todo');
  const [pid, setPid] = React.useState('tee-white');
  const [cart, setCart] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  React.useEffect(() => {
    localStorage.setItem('vaho-shop-view', view);
    window.scrollTo(0, 0);
  }, [view, pid, cat]);
  const go = (v, c) => {
    setView(v);
    if (c) setCat(c);
  };
  const openP = id => {
    setPid(id);
    setView('product');
  };
  const add = (p, size) => {
    setCart(c => {
      const i = c.findIndex(x => x.p.id === p.id && x.size === size);
      if (i >= 0) {
        const n = [...c];
        n[i] = {
          ...n[i],
          q: n[i].q + 1
        };
        return n;
      }
      return [...c, {
        p,
        size,
        q: 1
      }];
    });
    setToast('Añadido a tu cesta');
    setTimeout(() => setToast(null), 2400);
  };
  const setQty = (k, n) => setCart(c => n <= 0 ? c.filter((_, i) => i !== k) : c.map((x, i) => i === k ? {
    ...x,
    q: n
  } : x));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    go: go,
    count: cart.reduce((s, i) => s + i.q, 0),
    openCart: () => setOpen(true)
  }), view === 'home' && /*#__PURE__*/React.createElement(Home, {
    go: go,
    open: openP
  }), view === 'collection' && /*#__PURE__*/React.createElement(Collection, {
    cat: cat,
    setCat: setCat,
    open: openP
  }), view === 'product' && /*#__PURE__*/React.createElement(Product, {
    id: pid,
    add: add
  }), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(CartDrawer, {
    open: open,
    onClose: () => setOpen(false),
    items: cart,
    setQty: setQty
  }), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 28,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    message: toast,
    action: "Ver",
    onAction: () => {
      setOpen(true);
      setToast(null);
    }
  })));
}
(function mount(n) {
  const el = document.getElementById('root');
  if (window.VAHODesignSystem_66d4ce) {
    ReactDOM.createRoot(el).render(/*#__PURE__*/React.createElement(App, null));
    return;
  }
  if (n > 50) {
    el.innerHTML = '<p style="padding:40px;font-family:Inter,sans-serif">No se pudo cargar el sistema de diseño (_ds_bundle.js).</p>';
    return;
  }
  setTimeout(() => mount(n + 1), 100);
})(0);
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shop/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shop/CartDrawer.jsx
try { (() => {
function CartDrawer({
  open,
  onClose,
  items,
  setQty
}) {
  const {
    Button,
    QuantityStepper,
    IconButton,
    Icon,
    Checkbox
  } = window.VAHODesignSystem_66d4ce;
  const [gift, setGift] = React.useState(false);
  const total = items.reduce((s, i) => s + i.p.price * i.q, 0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.3)',
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity var(--dur-base)',
      zIndex: 40
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      width: 420,
      maxWidth: '100%',
      background: 'var(--vaho-cream)',
      boxShadow: 'var(--shadow-lift)',
      transform: open ? 'none' : 'translateX(100%)',
      transition: 'transform var(--dur-slow) var(--ease-out)',
      zIndex: 50,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 24px',
      borderBottom: '1px solid var(--line-200)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 18px/1 var(--font-sans)'
    }
  }, "Tu cesta"), /*#__PURE__*/React.createElement(IconButton, {
    label: "Cerrar",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "x"
    }),
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, items.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 15px/1.5 var(--font-sans)',
      color: 'var(--ink-500)'
    }
  }, "A\xFAn no hay nada. Tu pr\xF3ximo instante te espera."), items.map((i, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'grid',
      gridTemplateColumns: '72px 1fr auto',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 90,
      background: `url(${i.p.img}) ${i.p.pos}/cover`,
      borderRadius: 4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px/1.2 var(--font-sans)'
    }
  }, i.p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px/1.3 var(--font-sans)',
      color: 'var(--ink-500)'
    }
  }, i.p.color, i.size ? ' · ' + i.size : ''), /*#__PURE__*/React.createElement(QuantityStepper, {
    value: i.q,
    min: 0,
    onChange: n => setQty(k, n)
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px/1 var(--font-sans)'
    }
  }, eur(i.p.price * i.q))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      borderTop: '1px solid var(--line-200)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: gift,
    onChange: setGift,
    label: "Envolver para regalo (gratis)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      font: '600 16px/1 var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, eur(total))), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    disabled: !items.length
  }, "Finalizar compra"))));
}
window.CartDrawer = CartDrawer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shop/CartDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shop/Collection.jsx
try { (() => {
function Collection({
  cat,
  setCat,
  open
}) {
  const {
    Tag,
    ProductCard,
    Badge
  } = window.VAHODesignSystem_66d4ce;
  const list = cat === 'Todo' ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '48px 32px 96px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 8px',
      font: '600 44px/1.1 var(--font-sans)',
      letterSpacing: '-.02em'
    }
  }, cat === 'Todo' ? 'Colección' : cat), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 28px',
      font: '400 16px/1.5 var(--font-sans)',
      color: 'var(--ink-500)'
    }
  }, list.length, " piezas \xB7 colores vivos, firma real."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 36,
      flexWrap: 'wrap'
    }
  }, ['Todo', 'Camisetas', 'Neceseres', 'Pañuelos'].map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    selected: cat === c,
    onClick: () => setCat(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))',
      gap: '40px 24px'
    }
  }, list.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    image: p.img,
    name: p.name,
    colorName: p.color,
    price: eur(p.price),
    swatches: p.swatches,
    badge: p.badge && /*#__PURE__*/React.createElement(Badge, {
      tone: p.badge[0]
    }, p.badge[1]),
    onClick: () => open(p.id)
  }))));
}
window.Collection = Collection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shop/Collection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shop/Footer.jsx
try { (() => {
function Footer() {
  const {
    Logo,
    Input,
    Button
  } = window.VAHODesignSystem_66d4ce;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--vaho-black)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '72px 32px 40px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.3fr) minmax(0,1fr) minmax(0,1fr)',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    color: "white",
    width: 120,
    base: A
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 15px/1.5 var(--font-sans)',
      color: 'rgba(255,255,255,.75)',
      maxWidth: 320
    }
  }, "\xDAnete y te contamos los nuevos colores antes que a nadie."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "hola@tuemail.com",
    style: {
      flex: 1,
      height: 44,
      borderRadius: 999,
      border: '1px solid rgba(255,255,255,.3)',
      background: 'transparent',
      color: '#fff',
      padding: '0 18px',
      font: '400 14px var(--font-sans)'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse"
  }, "Unirme"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      font: '400 14px/1 var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px/1 var(--font-sans)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.6)',
      marginBottom: 6
    }
  }, "Tienda"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Camisetas"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Neceseres"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Pa\xF1uelos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      font: '400 14px/1 var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px/1 var(--font-sans)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.6)',
      marginBottom: 6
    }
  }, "Hola"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "@vaho"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "hola@vaho.es"), /*#__PURE__*/React.createElement("span", null, "Madrid"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '20px 32px',
      borderTop: '1px solid rgba(255,255,255,.15)',
      font: '400 12px/1 var(--font-sans)',
      color: 'rgba(255,255,255,.6)'
    }
  }, "\xA9 2026 VAHO \xB7 Un instante, tuyo."));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shop/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shop/Header.jsx
try { (() => {
function Header({
  go,
  count,
  openCart
}) {
  const {
    Logo,
    IconButton,
    Icon
  } = window.VAHODesignSystem_66d4ce;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(250,248,244,.92)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--line-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--vaho-black)',
      color: '#fff',
      textAlign: 'center',
      font: '500 12px/32px var(--font-sans)',
      letterSpacing: '.04em'
    }
  }, "Env\xEDo gratis desde 50 \u20AC \xB7 Hecho con cari\xF1o en Madrid"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '0 32px',
      height: 72,
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      font: '500 14px/1 var(--font-sans)'
    }
  }, ['Camisetas', 'Neceseres', 'Pañuelos'].map(c => /*#__PURE__*/React.createElement("a", {
    key: c,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('collection', c);
    }
  }, c))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    color: "fuchsia",
    width: 96,
    base: A
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Buscar",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "search"
    })
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: "Mi cuenta",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "user"
    })
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: "Cesta",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "shopping-bag"
    }),
    badge: count || null,
    onClick: openCart
  }))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shop/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shop/Home.jsx
try { (() => {
function Home({
  go,
  open
}) {
  const {
    Button,
    BrushStroke,
    ProductCard,
    Badge,
    Sticker
  } = window.VAHODesignSystem_66d4ce;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '56px 32px 96px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,5fr) minmax(0,6fr)',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px/1 var(--font-sans)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-500)'
    }
  }, "Nueva colecci\xF3n \xB7 Oto\xF1o"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      isolation: 'isolate',
      paddingBottom: 56
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '600 64px/1.02 var(--font-sans)',
      letterSpacing: '-.03em',
      position: 'relative',
      zIndex: 1
    }
  }, "Un instante,", /*#__PURE__*/React.createElement("br", null), "tuyo."), /*#__PURE__*/React.createElement(BrushStroke, {
    color: "lime",
    width: 220,
    base: A,
    style: {
      position: 'absolute',
      left: -8,
      bottom: 0,
      zIndex: -1
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 18px/1.55 var(--font-sans)',
      color: 'var(--ink-700)',
      maxWidth: 420,
      textWrap: 'pretty'
    }
  }, "Camisetas, neceseres y pa\xF1uelos en colores vivos, marcados con una firma real. Para el gimnasio antes del trabajo, el estudio de noche y los findes con tus amigas."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('collection', 'Todo')
  }, "Ver colecci\xF3n"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => go('collection', 'Pañuelos')
  }, "Pa\xF1uelos"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4/5',
      background: `url(${A}/imagery/sol-white-tee-scarf.png) center 30%/cover`,
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement(Sticker, {
    color: "orange",
    size: 104,
    base: A,
    style: {
      position: 'absolute',
      left: -40,
      bottom: 48,
      transform: 'rotate(-10deg)'
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '0 32px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: '600 32px/1.1 var(--font-sans)',
      letterSpacing: '-.02em'
    }
  }, "Para tus peque\xF1os momentos"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('collection', 'Todo');
    },
    style: {
      font: '500 14px/1 var(--font-sans)'
    }
  }, "Ver todo \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gap: 24
    }
  }, PRODUCTS.slice(0, 4).map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    image: p.img,
    name: p.name,
    colorName: p.color,
    price: eur(p.price),
    swatches: p.swatches,
    badge: p.badge && /*#__PURE__*/React.createElement(Badge, {
      tone: p.badge[0]
    }, p.badge[1]),
    onClick: () => open(p.id)
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--vaho-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '96px 32px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1/1',
      background: `url(${A}/imagery/mirror-white-tee-orange-bag.png) center 35%/cover`,
      borderRadius: 4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 440
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: '500 40px/1.15 var(--font-sans)',
      letterSpacing: '-.02em',
      color: 'var(--vaho-purple)',
      position: 'relative',
      zIndex: 1
    }
  }, "Hecha a mano, sentida en el alma.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 17px/1.6 var(--font-sans)',
      color: 'var(--ink-700)'
    }
  }, "Cada pieza lleva una firma escrita a mano de verdad. Real, imperfecta, sincera. Como t\xFA en tu mejor momento: creciendo."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      font: '500 11px/1 var(--font-sans)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--vaho-fuchsia)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Crea"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Explora"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "S\xE9 t\xFA"))))));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shop/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shop/Product.jsx
try { (() => {
function Product({
  id,
  add
}) {
  const {
    Button,
    ColorSwatch,
    SizeSelector,
    Tabs,
    Badge,
    Dialog,
    BrushStroke
  } = window.VAHODesignSystem_66d4ce;
  const p = PRODUCTS.find(x => x.id === id);
  const isTee = p.cat === 'Camisetas';
  const [size, setSize] = React.useState('M');
  const [tab, setTab] = React.useState('Descripción');
  const [guide, setGuide] = React.useState(false);
  const [col, setCol] = React.useState('a');
  const tabText = {
    'Descripción': p.desc,
    'Materiales': isTee ? '100% algodón peinado, 180 g/m². Firma bordada.' : 'Exterior de polipiel suave, interior forrado. Firma serigrafiada.',
    'Envíos': 'Envío en 24–72 h en península. Devoluciones gratis durante 30 días.'
  };
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '40px 32px 96px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,7fr) minmax(0,5fr)',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/5',
      background: `url(${p.img}) ${p.pos}/cover`,
      borderRadius: 4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      paddingTop: 12
    }
  }, p.badge && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: p.badge[0]
  }, p.badge[1])), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 6px',
      font: '600 36px/1.1 var(--font-sans)',
      letterSpacing: '-.02em'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 15px/1.4 var(--font-sans)',
      color: 'var(--ink-500)'
    }
  }, p.color)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 22px/1 var(--font-sans)'
    }
  }, eur(p.price)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px/1 var(--font-sans)'
    }
  }, "Color"), /*#__PURE__*/React.createElement(ColorSwatch, {
    value: col,
    onChange: setCol,
    options: p.swatches.map((c, i) => ({
      value: 'abc'[i],
      label: c,
      color: c
    }))
  })), isTee && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px/1 var(--font-sans)'
    }
  }, "Talla"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setGuide(true);
    },
    style: {
      font: '400 13px/1 var(--font-sans)',
      textDecoration: 'underline'
    }
  }, "Gu\xEDa de tallas")), /*#__PURE__*/React.createElement(SizeSelector, {
    value: size,
    onChange: setSize,
    unavailable: ['XS']
  })), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    onClick: () => add(p, isTee ? size : null)
  }, "A\xF1adir a la cesta \xB7 ", eur(p.price)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      isolation: 'isolate',
      font: '500 15px/1.4 var(--font-sans)',
      color: 'var(--vaho-purple)',
      paddingBottom: 64
    }
  }, "Un instante, tuyo.", /*#__PURE__*/React.createElement(BrushStroke, {
    color: "lime",
    width: 150,
    base: A,
    style: {
      position: 'absolute',
      left: -6,
      bottom: 0,
      zIndex: -1
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tabs, {
    items: ['Descripción', 'Materiales', 'Envíos'],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 15px/1.6 var(--font-sans)',
      color: 'var(--ink-700)',
      margin: '16px 0 0'
    }
  }, tabText[tab]))), /*#__PURE__*/React.createElement(Dialog, {
    open: guide,
    onClose: () => setGuide(false),
    title: "Gu\xEDa de tallas",
    footer: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => setGuide(false)
    }, "Entendido")
  }, "Corte recto y c\xF3modo. Si dudas entre dos tallas, elige la tuya de siempre; si te gusta m\xE1s suelta, sube una.", /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 8,
      marginTop: 16,
      textAlign: 'center',
      font: '500 13px/1.8 var(--font-sans)'
    }
  }, ['XS', 'S', 'M', 'L', 'XL'].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      background: '#fff',
      borderRadius: 8,
      padding: 8
    }
  }, s, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 400,
      color: 'var(--ink-500)'
    }
  }, 48 + i * 3, " cm"))))));
}
window.Product = Product;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shop/Product.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shop/data.jsx
try { (() => {
const A = '../../assets';
const PRODUCTS = [{
  id: 'tee-white',
  name: 'Camiseta básica',
  color: 'Blanco · firma fucsia',
  price: 29,
  img: A + '/imagery/sol-white-tee-scarf.png',
  pos: 'center 45%',
  badge: ['lime', 'Nuevo'],
  swatches: ['#fff', '#000'],
  cat: 'Camisetas',
  desc: 'Algodón suave, corte recto y tu firma en el pecho. Para el gimnasio antes del trabajo o el café con tus amigas.'
}, {
  id: 'tee-black',
  name: 'Camiseta básica',
  color: 'Negro · firma fucsia',
  price: 29,
  img: A + '/imagery/cafe-black-tee.png',
  pos: 'center 40%',
  swatches: ['#000', '#fff'],
  cat: 'Camisetas',
  desc: 'La negra de siempre, con un toque de color donde tú lo ves. Cómoda, libre, tuya.'
}, {
  id: 'bag-orange',
  name: 'Neceser',
  color: 'Naranja · firma fucsia',
  price: 32,
  img: A + '/imagery/mirror-white-tee-orange-bag.png',
  pos: 'center 82%',
  badge: ['fuchsia', 'Edición limitada'],
  swatches: ['var(--vaho-orange)', '#000', '#fff'],
  cat: 'Neceseres',
  desc: 'Cabe todo lo de tu rutina y un poco más. Cremallera dorada, interior fácil de limpiar.'
}, {
  id: 'bag-black',
  name: 'Neceser',
  color: 'Negro · firma fucsia',
  price: 32,
  img: A + '/imagery/mirror-white-tee-black-bag.png',
  pos: 'center 82%',
  swatches: ['#000', 'var(--vaho-orange)', '#fff'],
  cat: 'Neceseres',
  desc: 'Para el gimnasio, el viaje o el cajón del baño. Negro, con la firma en fucsia.'
}, {
  id: 'scarf',
  name: 'Pañuelo VAHO',
  color: 'Multicolor',
  price: 35,
  img: A + '/imagery/blue-wall-black-tee.png',
  pos: '60% 12%',
  badge: ['orange', 'Últimas'],
  swatches: ['var(--vaho-fuchsia)'],
  cat: 'Pañuelos',
  desc: 'Nuestra firma repetida en naranja, fucsia, lila y lima. En el pelo, al cuello o en el bolso.'
}];
const eur = n => n.toFixed(0) + ' €';
Object.assign(window, {
  A,
  PRODUCTS,
  eur
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shop/data.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BrushStroke = __ds_scope.BrushStroke;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Sticker = __ds_scope.Sticker;

__ds_ns.ColorSwatch = __ds_scope.ColorSwatch;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.SizeSelector = __ds_scope.SizeSelector;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
