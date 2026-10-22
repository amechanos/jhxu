// @ts-nocheck

import { useEffect } from 'react';
import gunSound from '../assets/gun.wav';

const useCanvasCursor = () => {
  function Oscillator(e) {
    this.init(e || {});
  }

  Oscillator.prototype = {
    init: function (e) {
      this.phase = e.phase || 0;
      this.offset = e.offset || 0;
      this.frequency = e.frequency || 0.001;
      this.amplitude = e.amplitude || 1;
      this._value = 0;
    },
    update: function () {
      this.phase += this.frequency;
      this._value = this.offset + Math.sin(this.phase) * this.amplitude;
      return this._value;
    },
    value: function () {
      return this._value;
    },
  };

  function Line(e) {
    this.init(e || {});
  }

  Line.prototype = {
    init: function (e) {
      this.spring = e.spring + 0.1 * Math.random() - 0.02;
      this.friction = E.friction + 0.01 * Math.random() - 0.002;
      this.nodes = [];
      for (var t, n = 0; n < E.size; n++) {
        t = new Node();
        t.x = pos.x;
        t.y = pos.y;
        this.nodes.push(t);
      }
    },
    update: function () {
      var e = this.spring,
        t = this.nodes[0];
      t.vx += (pos.x - t.x) * e;
      t.vy += (pos.y - t.y) * e;
      for (var n, i = 0, a = this.nodes.length; i < a; i++)
        ((t = this.nodes[i]),
          0 < i &&
            ((n = this.nodes[i - 1]),
            (t.vx += (n.x - t.x) * e),
            (t.vy += (n.y - t.y) * e),
            (t.vx += n.vx * E.dampening),
            (t.vy += n.vy * E.dampening)),
          (t.vx *= this.friction),
          (t.vy *= this.friction),
          (t.x += t.vx),
          (t.y += t.vy),
          (e *= E.tension));
    },
    draw: function () {
      var e,
        t,
        n = this.nodes[0].x,
        i = this.nodes[0].y;
      ctx.beginPath();
      ctx.moveTo(n, i);
      for (var a = 1, o = this.nodes.length - 2; a < o; a++) {
        e = this.nodes[a];
        t = this.nodes[a + 1];
        n = 0.5 * (e.x + t.x);
        i = 0.5 * (e.y + t.y);
        ctx.quadraticCurveTo(e.x, e.y, n, i);
      }
      e = this.nodes[a];
      t = this.nodes[a + 1];
      ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
      ctx.stroke();
      ctx.closePath();
    },
  };

  function onMousemove(e) {
    function o() {
      lines = [];
      for (var e = 0; e < E.trails; e++)
        lines.push(new Line({ spring: 0.4 + (e / E.trails) * 0.025 }));
    }
    function c(e) {
      (e.touches
        ? ((pos.x = e.touches[0].pageX), (pos.y = e.touches[0].pageY))
        : ((pos.x = e.clientX), (pos.y = e.clientY)),
        e.preventDefault());
    }
    function l(e) {
      1 == e.touches.length &&
        ((pos.x = e.touches[0].pageX), (pos.y = e.touches[0].pageY));
    }
    mouseMoveHandler = c;
    touchMoveHandler = c;
    touchStartHandler = l;
    (document.removeEventListener('mousemove', onMousemove),
      document.removeEventListener('touchstart', onMousemove),
      document.addEventListener('mousemove', c),
      document.addEventListener('touchmove', c),
      document.addEventListener('touchstart', l),
      c(e),
      o(),
      render());
  }

  function render() {
    if (ctx.running) {
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.globalCompositeOperation = 'lighter';

      // Drift between ship cove (~218) and lavender (~282) to match the site palette
      const hue = Math.round(f.update());
      ctx.strokeStyle = 'hsla(' + hue + ',75%,58%,0.10)';

      // Thickness controlled by E.lineWidth
      ctx.lineWidth = E.lineWidth;
      
      for (var e, t = 0; t < E.trails; t++) {
        (e = lines[t]).update();
        e.draw();
      }
      ctx.frame++;
      animationFrame = window.requestAnimationFrame(render);
    }
  }

  function resizeCanvas() {
    ctx.canvas.width = window.innerWidth - 20;
    ctx.canvas.height = window.innerHeight;
  }

  var ctx,
    f,
    e = 0,
    pos = {},
    lines = [],
    animationFrame,
    mouseMoveHandler,
    touchMoveHandler,
    touchStartHandler,
    E = {
      debug: true,
      friction: 0.45,
      trails: 3,
      size: 18,
      dampening: 0.45,
      tension: 0.9,
      lineWidth: 24,       // ← Change thickness here
    };

  function Node() {
    this.x = 0;
    this.y = 0;
    this.vy = 0;
    this.vx = 0;
  }

  const renderCanvas = function () {
    const canvas = document.getElementById('canvas');
    if (!canvas) {
      throw new Error('Cursor canvas element #canvas was not found.');
    }
    ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error('Unable to create a 2D context for the cursor canvas.');
    }

    // Push canvas behind content
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
  
    canvas.style.filter = 'blur(3px)';   // ← add this

    ctx.running = true;

    ctx.frame = 1;
    f = new Oscillator({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 32,
      frequency: 0.0035,
      offset: 250,
    });
    document.addEventListener('mousemove', onMousemove);
    document.addEventListener('touchstart', onMousemove);
    document.body.addEventListener('orientationchange', resizeCanvas);
    window.addEventListener('resize', resizeCanvas);
    const onFocus = () => {
      if (!ctx.running) {
        ctx.running = true;
        render();
      }
    };
    const onBlur = () => {
      ctx.running = false;
    };
    window.addEventListener('focus', onFocus);
    window.addEventListener('blur', onBlur);
    resizeCanvas();

    return () => {
      ctx.running = false;
      if (animationFrame !== undefined) {
        window.cancelAnimationFrame(animationFrame);
      }
      document.removeEventListener('mousemove', onMousemove);
      document.removeEventListener('touchstart', onMousemove);
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('touchmove', touchMoveHandler);
      document.removeEventListener('touchstart', touchStartHandler);
      document.body.removeEventListener('orientationchange', resizeCanvas);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('blur', onBlur);
    };
  };

  useEffect(() => {
    return renderCanvas();
  }, []);

  useEffect(() => {
    const shot = new Audio(gunSound);
    shot.preload = 'auto';

    const onClick = (ev) => {
      if (ev.button !== 0) return;
      const cursor = getComputedStyle(ev.target).cursor;
      if (/,\s*pointer$/.test(cursor)) return;

      const sound = shot.cloneNode();
      sound.volume = 0.4;
      sound.play().catch(() => {});

      const hole = document.createElement('div');
      const size = 11;
      hole.style.cssText =
        'position:absolute;pointer-events:none;z-index:9999;border-radius:50%;' +
        `width:${size}px;height:${size}px;` +
        `left:${ev.pageX - size / 2}px;top:${ev.pageY - size / 2}px;` +
        'background:radial-gradient(circle,#000 0%,#000 45%,#1a1a22 70%,rgba(60,60,75,0.65) 100%);' +
        'box-shadow:0 0 0 1px rgba(255,255,255,0.12),inset 0 1px 1px rgba(255,255,255,0.25);' +
        'transition:opacity 1.5s ease-out;opacity:1;';
      document.body.appendChild(hole);

      setTimeout(() => {
        hole.style.opacity = '0';
        setTimeout(() => hole.remove(), 1500);
      }, 3000);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
};

export default useCanvasCursor;