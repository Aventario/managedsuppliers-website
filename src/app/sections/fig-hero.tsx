"use client";

import { useState } from "react";
import { Container, PrimaryButton, INK } from "../components/art";
import { ARROW_FX, BTN_FX } from "../components/screenshot-frame";

/** Centered SaaS hero: headline, subline, CTAs, and the explainer video
 *  below in a framed card. Video is self-hosted (/assets/video/explainer.mp4,
 *  transcoded from the original HubSpot .mov); nothing plays until clicked.
 *  Content renders visible by default (no JS-dependent reveal). */
export default function FigHero() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden bg-background">
      {/* semi-transparent brand triangle (signet motif, as in the Figma) */}
      <svg
        className="pointer-events-none absolute -right-32 -top-24 h-[640px] w-[640px]"
        viewBox="0 0 57.71 53.82"
        aria-hidden="true"
      >
        <path d="M39.69,31.32L15.71,47.82v.63c0,4.31,4.84,6.85,8.39,4.41l31.3-21.55c3.09-2.13,3.09-6.69,0-8.82L24.1,.95c-3.55-2.44-8.39,.1-8.39,4.41v.63l23.98,16.51c3.09,2.13,3.09,6.69,0,8.82Z" fill="#8dccc0" opacity="0.14" />
        <path d="M39.69,31.32c3.09-2.13,3.09-6.69,0-8.82L15.71,5.99V47.82l23.98-16.51Z" fill="#8dccc0" opacity="0.1" />
      </svg>
      <svg
        className="pointer-events-none absolute -left-40 top-72 h-[420px] w-[420px] -scale-x-100"
        viewBox="0 0 57.71 53.82"
        aria-hidden="true"
      >
        <path d="M39.69,31.32c3.09-2.13,3.09-6.69,0-8.82L15.71,5.99V47.82l23.98-16.51Z" fill="#8dccc0" opacity="0.08" />
      </svg>

      <Container className="relative py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="[font-family:Lato,_Helvetica,_Arial,_sans-serif] text-[1.75rem] font-black leading-[1.1] tracking-tight vp375:text-[2rem] md:text-[3.6rem] md:leading-[1.06]" style={{ color: INK }}>
            <span data-hero-line className="block">
              A{" "}
              <span className="relative inline-block">
                <span className="relative z-10">smarter way</span>
                <span className="absolute inset-x-0 -bottom-1 -z-10 h-3" style={{ background: "#ebc747" }} aria-hidden="true" />
              </span>
            </span>
            <span data-hero-line className="block">to manage suppliers</span>
          </h1>
          <p data-hero-sub className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground">
            Manage your vendor relationships with our cloud-based solution. From drafting SOWs to execution and comprehensive reporting, managedsuppliers has it all for you.
          </p>
          <div data-hero-cta className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <PrimaryButton href="/contact" className={BTN_FX}>Book a demo</PrimaryButton>
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className={`inline-flex items-center gap-2 text-base font-semibold text-accent ${ARROW_FX}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
              Watch the 2-minute explainer
            </button>
          </div>
        </div>

        <div data-hero-video id="video" className="mx-auto mt-14 max-w-[960px] scroll-mt-24">
          <div className="overflow-hidden rounded-2xl shadow-[0_36px_80px_-32px_rgba(36,59,83,0.5)] ring-1 ring-[#8dccc0]/70">
            {playing ? (
              <video controls autoPlay className="block aspect-video w-full bg-black" poster="/assets/video/explainer-poster.jpg">
                <source type="video/mp4" src="/assets/video/explainer.mp4" />
              </video>
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label="Play the 2-minute animated explainer of how managedsuppliers works"
                className="group relative block w-full"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/video/explainer-poster.jpg"
                  alt="Frame from the animated managedsuppliers explainer video"
                  loading="eager"
                  className="block aspect-video w-full object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-[#243b53]/25 transition group-hover:bg-[#243b53]/35">
                  <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-background/95 shadow-lg transition group-hover:scale-105 motion-reduce:transition-none">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="#279c85" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
                  </span>
                </span>
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-background/90 px-4 py-1.5 text-sm font-semibold shadow" style={{ color: INK }}>
                  See how managedsuppliers works in 2 minutes
                </span>
              </button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
