import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const SYMBOLS = [
  "π",
  "∫",
  "λ",
  "Δ",
  "α",
  "β",
  "γ",
  "θ",
  "φ",
  "Ω",
  "√x",
  "E=mc²",
  "F=ma",
  "H₂O",
  "CO₂",
  "Na",
  "O₂",
  "PV=nRT",
  "η",
  "Σ",
  "μ",
  "∞",
  "x²",
  "y = mx + c",
  "H₂SO₄",
  "NaCl",
];

const Particle = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // =====================================================
    // SCENE
    // =====================================================

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);

    camera.position.z = 18;

    // Calculate the horizontal world-space visible to camera
    const getWorldWidth = () => {
      const verticalWorldHeight =
        2 * camera.position.z * Math.tan((camera.fov * Math.PI) / 360);

      return verticalWorldHeight * camera.aspect;
    };

    let worldWidth = getWorldWidth();

    // =====================================================
    // RENDERER
    // =====================================================

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));

    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);

    container.appendChild(renderer.domElement);

    // =====================================================
    // MAIN GROUP
    // =====================================================

    const fieldGroup = new THREE.Group();

    scene.add(fieldGroup);

    // =====================================================
    // FOURIER WAVES
    // =====================================================

    const waveGroup = new THREE.Group();

    fieldGroup.add(waveGroup);

    // More waves
    const waveCount = window.innerWidth < 768 ? 4 : 8;

    const waveColors = [
      0x38bdf8, 0x60a5fa, 0x818cf8, 0x22d3ee, 0x93c5fd, 0x7dd3fc, 0xa5b4fc,
      0x67e8f9,
    ];

    const waves = [];

    const pointCount = window.innerWidth < 768 ? 100 : 180;

    for (let w = 0; w < waveCount; w++) {
      const points = [];

      for (let i = 0; i < pointCount; i++) {
        const x = (i / (pointCount - 1)) * worldWidth - worldWidth / 2;

        points.push(new THREE.Vector3(x, 0, 0));
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);

      const material = new THREE.LineBasicMaterial({
        color: waveColors[w % waveColors.length],

        // Increased visibility
        opacity: 0.14 + w * 0.025,

        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });

      const line = new THREE.Line(geometry, material);

      waveGroup.add(line);

      waves.push({
        line,
        geometry,
        pointCount,

        frequency: 0.45 + Math.random() * 1.15,

        amplitude: 0.55 + Math.random() * 0.75,

        speed: 0.25 + Math.random() * 0.35,

        phase: Math.random() * Math.PI * 2,

        verticalOffset: (w - (waveCount - 1) / 2) * 0.55,
      });
    }

    // =====================================================
    // COMPOSITE FOURIER RESULT WAVE
    // =====================================================

    const resultPointCount = window.innerWidth < 768 ? 120 : 220;

    const resultPoints = [];

    for (let i = 0; i < resultPointCount; i++) {
      const x = (i / (resultPointCount - 1)) * worldWidth - worldWidth / 2;

      resultPoints.push(new THREE.Vector3(x, 0, 0));
    }

    const resultGeometry = new THREE.BufferGeometry().setFromPoints(
      resultPoints,
    );

    const resultMaterial = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,

      // Stronger composite wave
      opacity: 0.22,

      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const resultWave = new THREE.Line(resultGeometry, resultMaterial);

    waveGroup.add(resultWave);

    // =====================================================
    // SYMBOL TEXTURES
    // =====================================================

    const textureCache = new Map();

    const createTexture = (text) => {
      if (textureCache.has(text)) {
        return textureCache.get(text);
      }

      const canvas = document.createElement("canvas");

      const context = canvas.getContext("2d");

      canvas.width = 512;
      canvas.height = 256;

      context.clearRect(0, 0, canvas.width, canvas.height);

      context.textAlign = "center";
      context.textBaseline = "middle";

      context.font = "600 76px Inter, Arial, sans-serif";

      context.fillStyle = "rgba(56, 189, 248, 0.72)";

      context.fillText(text, canvas.width / 2, canvas.height / 2);

      const texture = new THREE.CanvasTexture(canvas);

      texture.colorSpace = THREE.SRGBColorSpace;

      texture.minFilter = THREE.LinearFilter;

      texture.magFilter = THREE.LinearFilter;

      texture.generateMipmaps = false;

      textureCache.set(text, texture);

      return texture;
    };

    // =====================================================
    // FLOATING SYMBOLS
    // =====================================================

    const symbolGroup = new THREE.Group();

    fieldGroup.add(symbolGroup);

    const particleCount = window.innerWidth < 768 ? 14 : 32;

    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const symbol = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];

      const texture = createTexture(symbol);

      const material = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.12 + Math.random() * 0.2,
        depthWrite: false,
      });

      const sprite = new THREE.Sprite(material);

      const depth = Math.random() * 8 - 4;

      // Spread symbols across the entire
      // responsive world width
      const horizontalPosition = (Math.random() - 0.5) * worldWidth;

      sprite.position.set(
        horizontalPosition,
        (Math.random() - 0.5) * 10,
        depth,
      );

      const size = 0.25 + Math.random() * 0.35;

      sprite.scale.set(size * 2.2, size, 1);

      symbolGroup.add(sprite);

      particles.push({
        sprite,

        baseX: sprite.position.x,
        baseY: sprite.position.y,
        baseZ: sprite.position.z,

        phase: Math.random() * Math.PI * 2,

        speed: 0.05 + Math.random() * 0.12,

        drift: 0.15 + Math.random() * 0.35,
      });
    }

    // =====================================================
    // CURSOR
    // =====================================================

    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    const handlePointerMove = (event) => {
      const rect = container.getBoundingClientRect();

      mouse.targetX = ((event.clientX - rect.left) / rect.width) * 2 - 1;

      mouse.targetY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    };

    const handlePointerLeave = () => {
      mouse.targetX = 0;
      mouse.targetY = 0;
    };

    container.addEventListener("pointermove", handlePointerMove);

    container.addEventListener("pointerleave", handlePointerLeave);

    // =====================================================
    // ANIMATION
    // =====================================================

    const clock = new THREE.Clock();

    let animationFrame;

    const animate = () => {
      animationFrame = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();

      // Smooth cursor movement
      mouse.x += (mouse.targetX - mouse.x) * 0.035;

      mouse.y += (mouse.targetY - mouse.y) * 0.035;

      // =================================================
      // FOURIER COMPONENT WAVES
      // =================================================

      waves.forEach((wave, waveIndex) => {
        const position = wave.geometry.attributes.position;

        for (let i = 0; i < wave.pointCount; i++) {
          const x = (i / (wave.pointCount - 1)) * worldWidth - worldWidth / 2;

          // Normalized position
          // across the whole screen
          const normalized = (x + worldWidth / 2) / worldWidth;

          // Soft edge envelope
          const envelope = Math.sin(normalized * Math.PI);

          // Fundamental
          const fundamental = Math.sin(
            x * wave.frequency + time * wave.speed + wave.phase,
          );

          // Second harmonic
          const harmonic = Math.sin(
            x * wave.frequency * 2.1 - time * wave.speed * 1.4 + wave.phase,
          );

          // Higher harmonic
          const highFrequency = Math.sin(
            x * wave.frequency * 3.7 + time * wave.speed * 0.7,
          );

          // Composite Fourier signal
          const y =
            wave.verticalOffset +
            envelope *
              wave.amplitude *
              (fundamental * 0.65 + harmonic * 0.25 + highFrequency * 0.1);

          position.setX(i, x);
          position.setY(i, y);

          position.setZ(i, waveIndex * 0.035);
        }

        position.needsUpdate = true;
      });

      // =================================================
      // COMPOSITE FOURIER WAVE
      // =================================================

      const resultPosition = resultGeometry.attributes.position;

      // Slowly changing Fourier coefficients
      const a1 = 0.9 + Math.sin(time * 0.31) * 0.25;

      const a2 = 0.45 + Math.cos(time * 0.23) * 0.18;

      const a3 = 0.25 + Math.sin(time * 0.17 + 1.5) * 0.12;

      for (let i = 0; i < resultPointCount; i++) {
        const x = (i / (resultPointCount - 1)) * worldWidth - worldWidth / 2;

        const normalized = (x + worldWidth / 2) / worldWidth;

        const envelope = Math.sin(normalized * Math.PI);

        const wave1 = Math.sin(x * 0.8 + time * 0.45);

        const wave2 = Math.sin(x * 1.7 - time * 0.32);

        const wave3 = Math.sin(x * 3.2 + time * 0.21);

        const composite = envelope * (wave1 * a1 + wave2 * a2 + wave3 * a3);

        resultPosition.setX(i, x);
        resultPosition.setY(i, composite);

        resultPosition.setZ(i, -0.12);
      }

      resultPosition.needsUpdate = true;

      // =================================================
      // FLOATING SYMBOL MOTION
      // =================================================

      particles.forEach((particle) => {
        const sprite = particle.sprite;

        const driftX =
          Math.sin(time * particle.speed + particle.phase) * particle.drift;

        const driftY =
          Math.cos(time * particle.speed * 0.8 + particle.phase) *
          particle.drift;

        // Cursor influence
        const cursorInfluence = 0.3;

        const targetX = particle.baseX + driftX + mouse.x * cursorInfluence;

        const targetY = particle.baseY + driftY + mouse.y * cursorInfluence;

        sprite.position.x += (targetX - sprite.position.x) * 0.025;

        sprite.position.y += (targetY - sprite.position.y) * 0.025;

        sprite.position.z =
          particle.baseZ +
          Math.sin(time * particle.speed * 0.4 + particle.phase) * 0.15;

        sprite.material.rotation =
          Math.sin(time * particle.speed * 0.5 + particle.phase) * 0.08;
      });

      // =================================================
      // GLOBAL CURSOR PARALLAX
      // =================================================

      fieldGroup.rotation.y += (mouse.x * 0.025 - fieldGroup.rotation.y) * 0.01;

      fieldGroup.rotation.x += (mouse.y * 0.02 - fieldGroup.rotation.x) * 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // =====================================================
    // RESIZE
    // =====================================================

    /* Last size actually rendered. Mobile browsers fire `resize` on every
       address-bar collapse while scrolling, but this canvas is sized by the
       hero's content box, so those events usually carry no size change at all —
       without this guard each one rebuilds every wave's vertex buffer. */
    let lastWidth = width;
    let lastHeight = height;
    let resizeFrame = null;

    const applyResize = () => {
      resizeFrame = null;

      const newWidth = container.clientWidth;

      const newHeight = container.clientHeight;

      if (newWidth === lastWidth && newHeight === lastHeight) return;

      lastWidth = newWidth;
      lastHeight = newHeight;

      camera.aspect = newWidth / newHeight;

      camera.updateProjectionMatrix();

      // Recalculate visible world width
      worldWidth = getWorldWidth();

      renderer.setSize(newWidth, newHeight);

      // -----------------------------------------------
      // Resize Fourier waves
      // -----------------------------------------------

      waves.forEach((wave) => {
        const position = wave.geometry.attributes.position;

        for (let i = 0; i < wave.pointCount; i++) {
          const x = (i / (wave.pointCount - 1)) * worldWidth - worldWidth / 2;

          position.setX(i, x);
        }

        position.needsUpdate = true;
      });

      // -----------------------------------------------
      // Resize composite wave
      // -----------------------------------------------

      const resultPosition = resultGeometry.attributes.position;

      for (let i = 0; i < resultPointCount; i++) {
        const x = (i / (resultPointCount - 1)) * worldWidth - worldWidth / 2;

        resultPosition.setX(i, x);
      }

      resultPosition.needsUpdate = true;
    };

    /* Coalesce bursts of resize events (drag-resizing a desktop window,
       rotating a phone) into one rebuild per frame. */
    const handleResize = () => {
      if (resizeFrame !== null) return;

      resizeFrame = requestAnimationFrame(applyResize);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    // =====================================================
    // CLEANUP
    // =====================================================

    return () => {
      cancelAnimationFrame(animationFrame);

      container.removeEventListener("pointermove", handlePointerMove);

      container.removeEventListener("pointerleave", handlePointerLeave);

      window.removeEventListener("resize", handleResize);

      window.removeEventListener("orientationchange", handleResize);

      if (resizeFrame !== null) cancelAnimationFrame(resizeFrame);

      // Dispose wave geometries
      waves.forEach((wave) => {
        wave.geometry.dispose();
        wave.line.material.dispose();
      });

      // Dispose composite wave
      resultGeometry.dispose();
      resultMaterial.dispose();

      // Dispose particle textures/materials
      particles.forEach((particle) => {
        particle.sprite.material.map?.dispose();
        particle.sprite.material.dispose();
      });

      textureCache.clear();

      renderer.dispose();

      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden pointer-events-auto"
      aria-hidden="true"
    />
  );
};

export default Particle;
