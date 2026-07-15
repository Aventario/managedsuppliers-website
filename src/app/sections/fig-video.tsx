"use client";

import { useState } from "react";
import { Container, INK } from "../components/art";
import Reveal from "../components/reveal";
import { TiltIn } from "../components/motion";

/** "From Problem to Solution" video section, mirroring the original
 *  managedsuppliers.com. Click-to-play, fully self-hosted (transcoded from
 *  the original HubSpot .mov; identical local copy found in the project). */
const VIDEO_SRC = "/assets/video/story.mp4";

export default function FigVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="story" className="scroll-mt-24 bg-background py-20">
      <Container>
        <Reveal>
          <h2 className="text-center [font-family:Lato,_Helvetica,_Arial,_sans-serif] text-[2.05rem] font-black leading-tight tracking-tight md:text-[2.6rem]" style={{ color: INK }}>
            From Problem to Solution
          </h2>
          <p className="mt-2 text-center text-lg font-semibold text-foreground">The Story behind managedsuppliers</p>
        </Reveal>

        <TiltIn className="mx-auto mt-12 max-w-[900px]">
          <div className="overflow-hidden rounded-xl shadow-[0_28px_60px_-30px_rgba(36,59,83,0.45)] ring-1 ring-[#8dccc0]/70">
            {playing ? (
              <video controls autoPlay className="block aspect-video w-full bg-black" poster="/assets/original/Screenshot-posedio-video.jpg">
                <source type="video/mp4" src={VIDEO_SRC} />
              </video>
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label="Play the explainer video: the story behind managedsuppliers"
                className="group relative block w-full"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/original/Screenshot-posedio-video.jpg"
                  alt="Preview frame of the managedsuppliers explainer video"
                  loading="lazy"
                  className="block aspect-video w-full object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-[#243b53]/25 transition group-hover:bg-[#243b53]/35">
                  <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-background/95 shadow-lg transition group-hover:scale-105 motion-reduce:transition-none">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="#279c85" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
                  </span>
                </span>
              </button>
            )}
          </div>
        </TiltIn>
      </Container>
    </section>
  );
}
