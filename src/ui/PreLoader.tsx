"use client";
import { useEffect, useRef, useState } from "react";

export default function Preloader() {
  const [done, setDone] = useState(false);
  const prevOverflowRef = useRef<string>("");

  // 1) manejo del evento de carga + fallback
  useEffect(() => {
    const finish = () => setDone(true);

    if (document.readyState === "complete") {
      requestAnimationFrame(finish);
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    const t = setTimeout(finish, 2000); // fallback

    return () => {
      window.removeEventListener("load", finish);
      clearTimeout(t);
    };
  }, []);

  // 2) bloquear mientras no terminó y RESTAURAR apenas termina
  useEffect(() => {
    if (!prevOverflowRef.current) {
      prevOverflowRef.current = document.body.style.overflow || "";
    }

    if (!done) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = prevOverflowRef.current; // 🔓 restaura ya
    }

    // por si se desmonta en medio de una transición
    return () => {
      document.body.style.overflow = prevOverflowRef.current;
    };
  }, [done]);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center bg-black/90 backdrop-blur">
      <div className="relative h-20 w-20">
        <span className="absolute inset-0 rounded-full border-4 border-white/10" />
        <span className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 animate-spin" />
        <span className="absolute inset-2 rounded-full border-4 border-transparent border-t-purple-400 animate-spin [animation-duration:2s]" />
      </div>
    </div>
  );
}
