"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Check, Paperclip, Globe, Send, BarChart3 } from "lucide-react";

/* ─────────────────────── Shared card dimensions ─────────────────────── */
// Both cards share the same outer wrapper class so they're always equal size.
// w-full max-w-[360px] on mobile → sm:w-[380px] → lg:w-[440px]
// height is driven by the inner content; we use flex-1 + min-h to equalise.

const CARD_CLASS =
  "w-full sm:w-[380px] lg:w-[440px] xl:max-w-[580px] flex flex-col";

/* ─────────────────────── Decision Intelligence Card ─────────────────────── */

const features = [
  "End-to-end data pipeline setup",
  "Custom ML models on your data",
  "Live decision intelligence feed",
  "Real-time KPI dashboards",
  "Dedicated onboarding specialist",
];

function DecisionCard() {
  return (
    /* Outer sizing wrapper — matches ChatUI exactly */
    <div className={CARD_CLASS}>
      {/* Gradient border shell */}
      <div
        className="relative flex flex-col flex-1"
        style={{
          borderRadius: "1.125rem",
          padding: "1.5px",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(124,92,252,0.55) 45%, rgba(244,114,182,0.38) 100%)",
          boxShadow: "0px -16px 24px 0px rgba(255,255,255,0.06) inset",
        }}
      >
        {/* Rotating beam */}
        <div
          className="absolute inset-[-1px] overflow-hidden pointer-events-none z-0"
          style={{ borderRadius: "1.125rem" }}
          aria-hidden="true"
        >
          <div
            style={{
              position: "absolute",
              width: "200%",
              height: "38px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              transformOrigin: "center center",
              background:
                "linear-gradient(0deg, hsla(0,0%,100%,0) 0%, hsl(277,95%,60%) 40%, hsl(277,95%,60%) 60%, hsla(0,0%,40%,0) 100%)",
              animation: "ctaBeamRotate 8s linear infinite",
            }}
          />
        </div>

        {/* Inner body — flex-1 so it fills the border shell */}
        <div
          className="relative z-10 flex flex-col flex-1 gap-5 p-6 lg:p-7"
          style={{
            borderRadius: "calc(1.125rem - 1.5px)",
            background:
              "radial-gradient(at 88% 40%, hsla(240,15%,9%,1) 0px, transparent 85%), radial-gradient(at 0% 64%, hsla(263,93%,56%,0.72) 0px, transparent 85%), radial-gradient(at 41% 94%, hsla(284,100%,84%,0.45) 0px, transparent 85%), radial-gradient(at 100% 99%, hsla(306,100%,57%,0.36) 0px, transparent 85%), hsla(240,15%,9%,1)",
          }}
        >
          {/* Badge + title */}
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-primary/70">
                Early Access
              </span>
              <span className="text-[9px] bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 px-2 py-0.5 rounded-full font-semibold">
                Limited spots
              </span>
            </div>
            <h3 className="text-xl lg:text-2xl font-extrabold text-white tracking-tight leading-snug">
              Decision Intelligence
              <br />
              <span className="text-gradient">Full Platform Access</span>
            </h3>
            <p className="text-[12px] lg:text-[13px] text-white/45 mt-2 font-light leading-relaxed">
              Everything you need to turn raw data into confident business decisions.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/[0.08]" />

          {/* Features — flex-1 pushes CTA to bottom */}
          <ul className="flex flex-col gap-2.5 flex-1">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span
                  className="flex items-center justify-center w-[18px] h-[18px] lg:w-[20px] lg:h-[20px] rounded-full shrink-0"
                  style={{ background: "hsl(266,92%,58%)" }}
                >
                  <Check className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white stroke-[3]" />
                </span>
                <span className="text-[12px] lg:text-[13px] text-white/78">{f}</span>
              </li>
            ))}
          </ul>

          {/* CTA pinned to bottom */}
          <div className="flex flex-col gap-3 mt-auto pt-2">
            <button
              className="w-full py-3 lg:py-3.5 rounded-full text-[13px] lg:text-[14px] font-bold text-white cursor-pointer border-0 transition-all duration-300 hover:opacity-90 hover:-translate-y-px active:scale-[0.98]"
              style={{
                background:
                  "linear-gradient(0deg, rgba(94,58,238,1) 0%, rgba(197,107,240,1) 100%)",
                boxShadow: "inset 0 -2px 25px -4px rgba(255,255,255,0.25)",
              }}
            >
              Request Early Access →
            </button>
            <p className="text-center text-[10px] text-white/25">
              Free 14-day trial · No credit card required
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ctaBeamRotate {
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

/* ─────────────────────── Chat UI ─────────────────────── */

interface Message {
  role: "user" | "assistant";
  text: string;
}

const SEED_MESSAGES: Message[] = [
  { role: "user", text: "Which SKUs are at risk of stockout this week?" },
  {
    role: "assistant",
    text: "3 SKUs flagged at high risk:\n\n• SKU-0482 — 4 days remaining (reorder now)\n• SKU-1190 — 6 days (Supplier B lead: 5 days)\n• SKU-3341 — 7 days (demand spike predicted)",
  },
  { role: "user", text: "Recommended reorder quantity for SKU-0482?" },
];

const AUTO_REPLY =
  "Recommended reorder: 340 units from Supplier B. Based on 28-day rolling demand (avg 82 units/week) + 14% buffer for upcoming sale period. Estimated cost: ₹1.2L at current rate.";

function ChatUI() {
  const [messages, setMessages] = React.useState<Message[]>(SEED_MESSAGES);
  const [input, setInput] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const [typedText, setTypedText] = React.useState("");
  const [replied, setReplied] = React.useState(false);
  const bottomRef = React.useRef<HTMLDivElement>(null);
  // Track whether scroll-to-bottom is allowed (only after user interaction)
  const allowScrollRef = React.useRef(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
      let i = 0;
      const iv = setInterval(() => {
        i++;
        setTypedText(AUTO_REPLY.slice(0, i));
        if (i >= AUTO_REPLY.length) {
          clearInterval(iv);
          setIsTyping(false);
          setMessages((p) => [...p, { role: "assistant", text: AUTO_REPLY }]);
          setTypedText("");
        }
      }, 16);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Only scroll into view when user has sent a message — never during auto-play
  React.useEffect(() => {
    if (!allowScrollRef.current) return;
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    const t = input.trim();
    if (!t || replied) return;
    allowScrollRef.current = true;
    setMessages((p) => [...p, { role: "user", text: t }]);
    setInput("");
    setReplied(true);
    setTimeout(() => {
      setMessages((p) => [
        ...p,
        {
          role: "assistant",
          text: "Analysing your pipeline data now — I'll surface a recommendation shortly.",
        },
      ]);
    }, 1000);
  };

  return (
    /* Outer sizing wrapper — identical class to DecisionCard */
    <div className={cn(CARD_CLASS, "gap-3")}>
      {/* Chat window — flex-1 so it fills to match card height */}
      <div
        className="relative flex flex-col flex-1 overflow-hidden"
        style={{
          borderRadius: "16px",
          padding: "1.5px",
          background:
            "linear-gradient(135deg, #7e7e7e 0%, #363636 40%, #363636 100%)",
        }}
      >
        {/* Corner shimmer */}
        <div
          className="absolute top-[-10px] left-[-10px] w-[28px] h-[28px] pointer-events-none z-10"
          style={{
            background:
              "radial-gradient(ellipse at center, #ffffff, rgba(255,255,255,0.25), transparent)",
            filter: "blur(1px)",
          }}
          aria-hidden="true"
        />

        <div
          className="flex flex-col flex-1 overflow-hidden"
          style={{ borderRadius: "14px", background: "rgba(0,0,0,0.85)" }}
        >
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-pulse" />
              <span className="text-[11px] lg:text-[12px] font-semibold text-white/65">
                Neurolytix Intelligence
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-white/25">
              <BarChart3 className="w-3 h-3" />
              Live data
            </div>
          </div>

          {/* Messages — flex-1 scrollable */}
          <div className="flex flex-col gap-2.5 p-4 lg:p-5 flex-1 overflow-y-auto no-scrollbar">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  "flex",
                  msg.role === "user" ? "justify-end" : "justify-start",
                )}
              >
                {msg.role === "assistant" && (
                  <div className="w-5 h-5 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 mr-1.5 mt-0.5">
                    <span className="text-[7px] font-black text-primary">N</span>
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[80%] rounded-[11px] px-3 py-2 text-[11px] lg:text-[12px] leading-[1.65] whitespace-pre-line",
                    msg.role === "user"
                      ? "bg-primary/20 border border-primary/25 text-white/85 rounded-tr-[3px]"
                      : "bg-white/[0.05] border border-white/[0.08] text-white/65 rounded-tl-[3px]",
                  )}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing / streaming */}
            {(isTyping || typedText) && (
              <div className="flex justify-start">
                <div className="w-5 h-5 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 mr-1.5 mt-0.5">
                  <span className="text-[7px] font-black text-primary">N</span>
                </div>
                <div className="max-w-[80%] rounded-[11px] rounded-tl-[3px] px-3 py-2 text-[11px] lg:text-[12px] leading-[1.65] bg-white/[0.05] border border-white/[0.08] text-white/65 whitespace-pre-line">
                  {typedText ? (
                    <>
                      {typedText}
                      <span className="animate-blink">|</span>
                    </>
                  ) : (
                    <span className="flex items-center gap-1 py-0.5">
                      {[0, 150, 300].map((d) => (
                        <span
                          key={d}
                          className="w-1 h-1 rounded-full bg-white/40 animate-bounce"
                          style={{ animationDelay: `${d}ms` }}
                        />
                      ))}
                    </span>
                  )}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input — pinned to bottom, shrink-0 */}
          <div className="border-t border-white/[0.06] shrink-0">
            <div className="px-4 pt-3 pb-1">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Ask about your data..."
                rows={2}
                className="w-full bg-transparent text-[11.5px] lg:text-[12.5px] text-white placeholder:text-white/20 resize-none outline-none leading-relaxed no-scrollbar"
              />
            </div>

            {/* Toolbar */}
            <div className="flex items-center justify-between px-4 pb-3.5">
              <div className="flex items-center gap-0.5">
                {[
                  { Icon: Paperclip, label: "Attach" },
                  { Icon: BarChart3, label: "Data" },
                  { Icon: Globe, label: "Connect" },
                ].map(({ Icon, label }) => (
                  <button
                    key={label}
                    aria-label={label}
                    className="flex items-center justify-center p-1.5 text-white/20 hover:text-white/70 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer bg-transparent border-0"
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>

              <button
                onClick={handleSend}
                aria-label="Send"
                className="flex p-[2px] rounded-[10px] cursor-pointer border-0 transition-all duration-150 active:scale-[0.92]"
                style={{
                  background:
                    "linear-gradient(to top, #292929, #555555, #292929)",
                  boxShadow: "inset 0 6px 2px -4px rgba(255,255,255,0.5)",
                }}
              >
                <span
                  className="flex items-center justify-center w-[30px] h-[30px] rounded-[8px]"
                  style={{
                    background: "rgba(0,0,0,0.1)",
                    backdropFilter: "blur(3px)",
                  }}
                >
                  <Send className="w-3.5 h-3.5 text-white/50" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick tags — outside the bordered window */}
      <div className="flex items-center gap-2 flex-wrap shrink-0">
        {["Forecast demand", "Churn risk", "Reorder alerts"].map((tag) => (
          <span
            key={tag}
            className="text-[10px] lg:text-[11px] text-white/50 px-2.5 py-1 rounded-[8px] border border-white/[0.09] bg-white/[0.02] cursor-pointer hover:bg-white/[0.06] hover:text-white/75 transition-all duration-200 select-none"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────── Main Section ─────────────────────── */

export function CTABanner() {
  return (
    <section
      id="cta"
      className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Soft ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(109,59,255,0.08)_0%,transparent_65%)]" />
      </div>

      {/* Cards — stack on mobile, row on sm+ */}
      <div className="relative z-10 flex flex-col sm:flex-row items-stretch justify-center gap-5 lg:gap-6">
        <DecisionCard />
        <ChatUI />
      </div>
    </section>
  );
}