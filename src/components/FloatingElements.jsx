import { useCallback, useEffect, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/* Subscribes to a media query without the render-then-correct flash a
   useState + useEffect pair produces. */
const useMediaQuery = (query) => {
  const subscribe = useCallback(
    (onChange) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
};

const FLOATING_ELEMENTS = [
  {
    content: "π",
    x: "7%",
    y: "17%",
    size: "text-5xl sm:text-6xl",
    rotate: -12,
    depth: 1.2,
    floatX: 18,
    floatY: 12,
  },
  {
    content: "∫",
    x: "91%",
    y: "16%",
    size: "text-5xl sm:text-7xl",
    rotate: 10,
    depth: 0.8,
    floatX: -14,
    floatY: 18,
  },
  {
    content: "H₂O",
    x: "11%",
    y: "67%",
    size: "text-xl sm:text-2xl",
    rotate: -8,
    depth: 0.6,
    floatX: 12,
    floatY: -15,
  },
  {
    content: "E = mc²",
    x: "83%",
    y: "69%",
    size: "text-lg sm:text-2xl",
    rotate: 7,
    depth: 0.9,
    floatX: -16,
    floatY: -10,
  },
  {
    content: "α",
    x: "23%",
    y: "35%",
    size: "text-3xl sm:text-4xl",
    rotate: 15,
    depth: 0.7,
    floatX: 10,
    floatY: 16,
  },
  {
    content: "Δ",
    x: "75%",
    y: "31%",
    size: "text-3xl sm:text-5xl",
    rotate: -10,
    depth: 1,
    floatX: -12,
    floatY: 14,
  },
  {
    content: "CO₂",
    x: "5%",
    y: "45%",
    size: "text-base sm:text-xl",
    rotate: 8,
    depth: 0.5,
    floatX: 15,
    floatY: -12,
  },
  {
    content: "√x",
    x: "94%",
    y: "44%",
    size: "text-2xl sm:text-3xl",
    rotate: -6,
    depth: 0.7,
    floatX: -13,
    floatY: -16,
  },
  {
    content: "λ",
    x: "34%",
    y: "13%",
    size: "text-2xl sm:text-3xl",
    rotate: -5,
    depth: 0.5,
    floatX: 14,
    floatY: 10,
  },
  {
    content: "Ω",
    x: "68%",
    y: "12%",
    size: "text-3xl sm:text-4xl",
    rotate: 12,
    depth: 0.8,
    floatX: -10,
    floatY: 14,
  },
  {
    content: "x² + y²",
    x: "18%",
    y: "88%",
    size: "text-sm sm:text-lg",
    rotate: -5,
    depth: 0.4,
    floatX: 10,
    floatY: -12,
  },
  {
    content: "NaCl",
    x: "80%",
    y: "88%",
    size: "text-sm sm:text-lg",
    rotate: 6,
    depth: 0.5,
    floatX: -12,
    floatY: -10,
  },
];

/* Phones only get the first few — a dozen springs animating forever is real
   battery and jank on a mid-range Android. */
const MOBILE_ELEMENT_COUNT = 5;

const springConfig = {
  stiffness: 45,
  damping: 18,
  mass: 0.7,
};

const FloatingElement = ({ element, index, mouseX, mouseY, enableParallax }) => {
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const label = (
    <span className={`${element.size} font-semibold text-brand whitespace-nowrap`}>
      {element.content}
    </span>
  );

  /* Two layers on purpose: the outer one carries the cursor parallax, the inner
     one the idle drift. On a single element the keyframe `animate` would
     overwrite the x/y motion values and the parallax would never show. */
  return (
    <div
      className="absolute pointer-events-none select-none"
      style={{ left: element.x, top: element.y }}
    >
      <motion.div style={enableParallax ? { x: cursorX, y: cursorY } : undefined}>
        <motion.div
          animate={{
            x: [0, element.floatX, 0, -element.floatX, 0],
            y: [0, element.floatY, 0, -element.floatY, 0],
            rotate: [element.rotate - 2, element.rotate + 2, element.rotate - 2],
            opacity: [0.1, 0.18, 0.1],
          }}
          transition={{
            x: {
              duration: 10 + index,
              repeat: Infinity,
              ease: "easeInOut",
            },
            y: {
              duration: 8 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 8 + index * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            },
            opacity: {
              duration: 5 + index * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          {label}
        </motion.div>
      </motion.div>
    </div>
  );
};

/* No animation at all when the visitor has asked the OS for reduced motion. */
const StaticElement = ({ element }) => (
  <div
    className="absolute pointer-events-none select-none opacity-15"
    style={{
      left: element.x,
      top: element.y,
      transform: `rotate(${element.rotate}deg)`,
    }}
  >
    <span className={`${element.size} font-semibold text-brand whitespace-nowrap`}>
      {element.content}
    </span>
  </div>
);

const FloatingElements = ({ containerRef }) => {
  /* matchMedia rather than a resize listener: it fires once per breakpoint
     crossing instead of on every pixel of an address-bar collapse. */
  const isMobile = useMediaQuery("(max-width: 767px)");
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    if (isMobile || reduceMotion || !containerRef?.current) return;

    const container = containerRef.current;

    const handlePointerMove = (event) => {
      /* Touch drags fire pointermove too; parallax is a mouse affordance. */
      if (event.pointerType !== "mouse") return;

      const rect = container.getBoundingClientRect();

      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;

      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

      mouseX.set(x * 25);
      mouseY.set(y * 25);
    };

    const handlePointerLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    container.addEventListener("pointermove", handlePointerMove);

    container.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      container.removeEventListener("pointermove", handlePointerMove);

      container.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [containerRef, isMobile, reduceMotion, mouseX, mouseY]);

  const elements = isMobile
    ? FLOATING_ELEMENTS.slice(0, MOBILE_ELEMENT_COUNT)
    : FLOATING_ELEMENTS;

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Ambient glow */}

      <div className="absolute left-[10%] top-[15%] w-64 h-64 rounded-full bg-brand/5 blur-3xl" />

      <div className="absolute right-[10%] top-[35%] w-72 h-72 rounded-full bg-brand/5 blur-3xl" />

      {/* Floating academic elements */}

      {elements.map((element, index) =>
        reduceMotion ? (
          <StaticElement key={`${element.content}-${index}`} element={element} />
        ) : (
          <FloatingElement
            key={`${element.content}-${index}`}
            element={element}
            index={index}
            mouseX={mouseX}
            mouseY={mouseY}
            enableParallax={!isMobile}
          />
        ),
      )}
    </div>
  );
};

export default FloatingElements;
