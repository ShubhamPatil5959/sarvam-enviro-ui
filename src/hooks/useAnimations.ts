import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook that applies IntersectionObserver-based scroll reveal animations.
 * Call this in any page/component that contains `.reveal`, `.reveal-left`,
 * `.reveal-right`, `.reveal-scale`, or `.reveal-blur` elements.
 */
export function useScrollReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    // Add a small timeout to ensure DOM has updated after route change
    const timeout = setTimeout(() => {
      const root = containerRef.current;
      if (!root) return;

      const allTargets = root.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur'
      );
      
      // Remove revealed class to replay animations on route change
      allTargets.forEach(t => t.classList.remove('revealed'));

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target); // animate once
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
      );

      allTargets.forEach((t) => observer.observe(t));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return containerRef;
}

/**
 * Hook that animates a number from 0 to `end` when the element scrolls
 * into view.
 */
export function useAnimatedCounter(end: number, duration = 2000, startOnView = true) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animate = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      const startTime = performance.now();
      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * end);
        el.textContent = current.toString() + (end >= 100 ? '+' : '+');
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    if (!startOnView) {
      animate();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, startOnView]);

  return ref;
}

/**
 * Typewriter effect hook — types `text` one character at a time.
 */
export function useTypewriter(text: string, speed = 60) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.textContent = '';
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        el.textContent = text.slice(0, i + 1);
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return ref;
}

/**
 * Mouse parallax: elements shift slightly with mouse movement.
 */
export function useMouseParallax(strength = 20) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / strength;
      const dy = (e.clientY - cy) / strength;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [strength]);

  return ref;
}
