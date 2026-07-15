"use client";

import { useState } from "react";
import { Container, ArrowLink, INK } from "../components/art";
import Reveal from "../components/reveal";
import { ARROW_FX } from "../components/screenshot-frame";

export type Faq = { question: string; answer: string };

export const FAQS: Faq[] = [
  {
    question: "What is managedsuppliers?",
    answer:
      "managedsuppliers is a cloud SaaS solution for vendor and contract management. It guides users through the entire contract lifecycle, from creation through negotiation and ongoing measurement to evaluation, renewal, or amendment. All steps are handled and stored centrally.",
  },
  {
    question: "Who is managedsuppliers for?",
    answer:
      "It is built for companies that manage many suppliers and individual engagements, each governed by contracts or Statements of Work. Procurement, vendor management, and contract teams use it together with their suppliers, connected through a customizable role concept.",
  },
  {
    question: "Which features does managedsuppliers cover?",
    answer:
      "Six core features map the lifecycle of an engagement: Creation, Negotiation, Measurement, Improvement, Forecasting, and Change Requests. Reporting works across all of them, with dynamic dashboards at SOW, supplier, frame contract, and vendor landscape level.",
  },
  {
    question: "How is it different from contract storage tools?",
    answer:
      "Conventional contract management software focuses on establishing and storing contracts. managedsuppliers goes further: once a contract is concluded, it supports active management, performance measurement, automated reports, on-demand evaluations, improvement plans, and change requests.",
  },
  {
    question: "Where is my data stored, and how secure is it?",
    answer:
      "All contract versions, changes, comments, and performance data are stored in a central and secure database. As a cloud SaaS solution, managedsuppliers has no restrictions on archive size, and the automated process keeps the archive tidy and traceable.",
  },
  {
    question: "What happens when a document changes?",
    answer:
      "Every change is transparently traceable and can only be accepted by authorized personnel. Full version history means nothing is overwritten or lost, and earlier versions can be restored at any time if needed.",
  },
  {
    question: "How do suppliers and internal teams collaborate?",
    answer:
      "An individual role concept connects knowledge bearers and contacts from your side and the supplier side. Both parties work on the same draft in real time, which replaces email chains and poorly documented coordination meetings. Role assignment controls who can access and execute which activities.",
  },
  {
    question: "Does managedsuppliers support electronic signatures?",
    answer:
      "Yes. Once a decision has been made, managedsuppliers supports common processes and tools for secure and certified signatures, such as DocuSign. Agreed change requests can be sent straight to the signature process.",
  },
  {
    question: "How does forecasting work?",
    answer:
      "Forecasts are generated from historical values, actual values, and contract volumes, at engagement level, department level, or globally at supplier level. You can calculate and compare options for new engagements, including best-case and worst-case scenarios, and run deviation analyses against agreed or planned targets.",
  },
  {
    question: "What role does AI play in the platform?",
    answer:
      "managedsuppliers uses artificial intelligence to provide reliable predictions on future expenses and performance, such as KPI compliance. These predictions build on the contract and performance data already held in the platform.",
  },
  {
    question: "How are change requests handled?",
    answer:
      "The SOW is already in the software as the baseline for discussion. Both parties incorporate suggestions and align on proposed changes, and you accept, reject, or propose counter-changes. After signature, the SOW and associated sections such as KPIs, expenses, and the timeline update automatically across dashboards and reports.",
  },
  {
    question: "How does supplier rating work?",
    answer:
      "During negotiation, a rating based on the number of requested changes, the time taken to agree on content, and stakeholder satisfaction gives a brief overview of collaboration with each supplier. An integrated rating tool also supports weighted ratings on freely customizable criteria.",
  },
  {
    question: "Can we reuse existing contract content?",
    answer:
      "Yes. New SOWs are generated from predefined templates, and agreements, clauses, text blocks, KPIs, and fee components stored in the frame contract can be reused. This promotes standardization, comparability, and efficiency, and prevents crucial sections from being overlooked.",
  },
  {
    question: "How do we get started?",
    answer:
      "Get in touch through the contact page to book a demo. We walk you through the platform against your current supplier and contract setup and discuss the implementation in your organization.",
  },
];

function FaqItem({ faq }: { faq: Faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-[#e6efeb] bg-background">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base font-bold" style={{ color: INK }}>{faq.question}</span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#279c85"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-[0.95rem] leading-relaxed text-foreground">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="flex flex-col gap-4">
      {faqs.map((faq) => (
        <FaqItem key={faq.question} faq={faq} />
      ))}
    </div>
  );
}

/** Full FAQ list + FAQPage JSON-LD, used by the /faq page. */
export function FaqPageContent() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  return (
    <Container className="py-16 md:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-[880px]">
        <FaqList faqs={FAQS} />
        <div className="mt-10 flex justify-center">
          <ArrowLink href="/contact" className={ARROW_FX}>Still have questions? Get in touch</ArrowLink>
        </div>
      </div>
    </Container>
  );
}

export default function FigFaq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-background py-20">
      <Container>
        <div className="mx-auto max-w-[880px]">
          <Reveal>
            <h2 className="text-center [font-family:Lato,_Helvetica,_Arial,_sans-serif] text-[2.05rem] font-black leading-tight tracking-tight md:text-[2.6rem]" style={{ color: INK }}>
              Frequently asked questions
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <FaqList faqs={FAQS.slice(0, 6)} />
            <div className="mt-8 flex justify-center">
              <ArrowLink href="/faq" className={ARROW_FX}>View all FAQs</ArrowLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
