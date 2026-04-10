import { useState, useEffect } from "react";

const TRADITIONS = {
  greek: {
    label: "The Greek Loves",
    region: "Mediterranean",
    header:
      "The ancient Greeks didn't have one word for love — they had eight. Each described a completely different kind of connection. Most apps assume you want the same one.",
    subheader: null,
    learn:
      "Eros is passionate desire. Philia is the love between close friends. Storge is the protective bond of family. Agape is selfless, universal care. Ludus is playful, lighthearted affection. Pragma is the steady love that endures. Philautia is love of self. Mania is all-consuming intensity. The Greeks believed a full life needed many of these — not just one.",
    accent: "#9B87C2",
    bg: "#F8F5FC",
    icon: (s) => (
      <svg viewBox="0 0 80 80" width={s} height={s} fill="none">
        <circle
          cx="40"
          cy="40"
          r="36"
          stroke="#9B87C2"
          strokeWidth="1"
          opacity="0.2"
        />
        <circle
          cx="40"
          cy="40"
          r="24"
          stroke="#9B87C2"
          strokeWidth="1"
          opacity="0.3"
        />
        <circle
          cx="40"
          cy="40"
          r="12"
          stroke="#9B87C2"
          strokeWidth="1.5"
          opacity="0.45"
        />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const a = (i * Math.PI * 2) / 8 - Math.PI / 2;
          return (
            <circle
              key={i}
              cx={40 + 36 * Math.cos(a)}
              cy={40 + 36 * Math.sin(a)}
              r="3.5"
              fill="#9B87C2"
              opacity="0.4"
            />
          );
        })}
      </svg>
    ),
  },
  ayni: {
    label: "Ayni",
    region: "Quechua · South America",
    header:
      'The Quechua people of the Andes have practiced ayni for centuries — the principle that every relationship is a living exchange. "Today for you, tomorrow for me." It only works when both people know what they give and what they need.',
    subheader: "Where does your exchange tend to go off-balance?",
    learn:
      "Ayni has shaped community life across Peru, Bolivia, and Ecuador for generations. It's not charity and not a transaction — it's an ongoing cycle of mutual care. When the balance breaks, the relationship breaks. The Quechua believe this applies to every bond: between neighbors, generations, people and the land.",
    accent: "#C2785B",
    bg: "#FDF8F5",
    icon: (s) => (
      <svg viewBox="0 0 80 80" width={s} height={s} fill="none">
        <path
          d="M40 8L72 40L40 72L8 40Z"
          stroke="#C2785B"
          strokeWidth="1.2"
          opacity="0.25"
        />
        <path
          d="M40 20L60 40L40 60L20 40Z"
          stroke="#C2785B"
          strokeWidth="1.2"
          opacity="0.35"
        />
        <path d="M40 32L48 40L40 48L32 40Z" fill="#C2785B" opacity="0.2" />
        <circle cx="40" cy="8" r="3" fill="#C2785B" opacity="0.45" />
        <circle cx="72" cy="40" r="3" fill="#C2785B" opacity="0.45" />
        <circle cx="40" cy="72" r="3" fill="#C2785B" opacity="0.45" />
        <circle cx="8" cy="40" r="3" fill="#C2785B" opacity="0.45" />
      </svg>
    ),
  },
  ubuntu: {
    label: "Ubuntu",
    region: "Southern Africa",
    header:
      'In the Nguni Bantu tradition, ubuntu teaches that you become yourself through the people around you. "I am because we are." Not a solo journey — a shared one.',
    subheader:
      "If who you are depends on who you're with — who are you when someone's actually paying attention?",
    learn:
      "Ubuntu says identity is built through connection and mutual recognition. It challenges the idea that you need to be \"complete on your own\" before partnering with someone. Your sense of self isn't something you bring to a relationship — it's something that emerges from one.",
    accent: "#5E9E5E",
    bg: "#F5FAF5",
    icon: (s) => (
      <svg viewBox="0 0 80 80" width={s} height={s} fill="none">
        <circle
          cx="40"
          cy="26"
          r="11"
          stroke="#5E9E5E"
          strokeWidth="1.2"
          opacity="0.35"
        />
        <circle
          cx="22"
          cy="54"
          r="11"
          stroke="#5E9E5E"
          strokeWidth="1.2"
          opacity="0.35"
        />
        <circle
          cx="58"
          cy="54"
          r="11"
          stroke="#5E9E5E"
          strokeWidth="1.2"
          opacity="0.35"
        />
        <line
          x1="34"
          y1="35"
          x2="27"
          y2="45"
          stroke="#5E9E5E"
          strokeWidth="1.2"
          opacity="0.25"
        />
        <line
          x1="46"
          y1="35"
          x2="53"
          y2="45"
          stroke="#5E9E5E"
          strokeWidth="1.2"
          opacity="0.25"
        />
        <line
          x1="33"
          y1="54"
          x2="47"
          y2="54"
          stroke="#5E9E5E"
          strokeWidth="1.2"
          opacity="0.25"
        />
      </svg>
    ),
  },
  yuanfen: {
    label: "Yuánfèn · 缘分",
    region: "China · East Asia",
    header:
      "In Chinese philosophy, yuánfèn describes the invisible pull between certain people — not random chance, but conditions that have been quietly building. Less like fate. More like readiness.",
    subheader:
      "Yuánfèn says the right connection arrives when you're ready for it. So what brought you here?",
    learn:
      "Yuánfèn draws from Buddhist, Confucian, and Daoist thought. Every meaningful encounter results from countless conditions aligning — across time, choices, and small turns that lead somewhere unexpected. The connection was always possible. It just needed the right moment to arrive.",
    accent: "#4D8A8A",
    bg: "#F3FAFA",
    icon: (s) => (
      <svg viewBox="0 0 80 80" width={s} height={s} fill="none">
        <path
          d="M20 58 Q32 18 40 40 Q48 62 60 22"
          stroke="#4D8A8A"
          strokeWidth="1.5"
          opacity="0.35"
        />
        <path
          d="M16 40 Q40 12 64 40 Q40 68 16 40Z"
          stroke="#4D8A8A"
          strokeWidth="0.8"
          opacity="0.2"
        />
        <circle cx="40" cy="40" r="3.5" fill="#4D8A8A" opacity="0.4" />
        <text
          x="54"
          y="72"
          fontFamily="serif"
          fontSize="20"
          fill="#4D8A8A"
          opacity="0.18"
        >
          缘
        </text>
      </svg>
    ),
  },
  anamcara: {
    label: "Anam Cara",
    region: "Celtic · Ireland",
    header:
      'In Celtic tradition, your anam cara — literally "soul friend" — is the person you can be completely yourself with. Not a romantic partner, not just a friend. Someone who sees your inner life without flinching.',
    subheader: "The Celts believed every person needs a witness like this.",
    learn:
      "Anam cara comes from early Irish monasticism, where everyone was encouraged to find a soul friend — someone to see the full truth of who you are and hold it without judgment. The Celts considered this bond essential to a meaningful life.",
    accent: "#7E70B0",
    bg: "#F7F5FC",
    icon: (s) => (
      <svg viewBox="0 0 80 80" width={s} height={s} fill="none">
        <path
          d="M40 10 Q28 26 40 40 Q52 26 40 10Z"
          stroke="#7E70B0"
          strokeWidth="1"
          opacity="0.3"
          fill="#7E70B0"
          fillOpacity="0.04"
        />
        <path
          d="M40 70 Q28 54 40 40 Q52 54 40 70Z"
          stroke="#7E70B0"
          strokeWidth="1"
          opacity="0.3"
          fill="#7E70B0"
          fillOpacity="0.04"
        />
        <path
          d="M10 40 Q26 28 40 40 Q26 52 10 40Z"
          stroke="#7E70B0"
          strokeWidth="1"
          opacity="0.3"
          fill="#7E70B0"
          fillOpacity="0.04"
        />
        <path
          d="M70 40 Q54 28 40 40 Q54 52 70 40Z"
          stroke="#7E70B0"
          strokeWidth="1"
          opacity="0.3"
          fill="#7E70B0"
          fillOpacity="0.04"
        />
        <circle cx="40" cy="40" r="5" fill="#7E70B0" opacity="0.25" />
        <circle
          cx="40"
          cy="40"
          r="32"
          stroke="#7E70B0"
          strokeWidth="0.6"
          opacity="0.12"
        />
      </svg>
    ),
  },
};

const QUESTIONS = [
  {
    tradition: "greek",
    question: "Which of these sounds like the connection you're drawn to?",
    multiSelect: true,
    columns: true,
    options: [
      {
        text: "Eros — Passion, chemistry, intensity. The pull that's hard to explain.",
        tags: { passion: 3, depth: 0, stability: 0, growth: 0, care: 0 },
      },
      {
        text: "Philia — A deep bond between equals. Best friends, but with real weight.",
        tags: { passion: 0, depth: 3, stability: 0, growth: 1, care: 0 },
      },
      {
        text: "Storge — Protective, familial loyalty. The love that shows up no matter what.",
        tags: { passion: 0, depth: 0, stability: 2, growth: 0, care: 3 },
      },
      {
        text: "Agape — Selfless care without conditions. You give because you want to.",
        tags: { passion: 0, depth: 1, stability: 0, growth: 1, care: 3 },
      },
      {
        text: "Ludus — Playful, light, easy. Connection that doesn't take itself too seriously.",
        tags: { passion: 2, depth: 0, stability: 0, growth: 2, care: 0 },
      },
      {
        text: "Pragma — Enduring, built over time. Patient and intentional.",
        tags: { passion: 0, depth: 1, stability: 3, growth: 0, care: 1 },
      },
      {
        text: "Philautia — I'm here to understand myself and what I want first.",
        tags: { passion: 0, depth: 2, stability: 0, growth: 3, care: 0 },
      },
      {
        text: "Mania — Total devotion. You don't do halfway — you're all in or you're out.",
        tags: { passion: 3, depth: 1, stability: 0, growth: 0, care: 0 },
      },
    ],
  },
  {
    tradition: "ayni",
    question:
      "In your closest relationships, which imbalance keeps showing up?",
    options: [
      {
        text: "I build the structure — plans, stability, the practical stuff — and rarely ask for help.",
        tags: { passion: 0, depth: 0, stability: 3, growth: 0, care: 1 },
      },
      {
        text: "I go deep fast. Emotionally, I'm at a 10 before most people hit a 4.",
        tags: { passion: 2, depth: 3, stability: 0, growth: 0, care: 0 },
      },
      {
        text: "I hold back until I'm sure it's safe. Usually too long.",
        tags: { passion: 0, depth: 1, stability: 2, growth: 0, care: 1 },
      },
      {
        text: "I bring big energy in a crisis but I'm harder to find when things are calm.",
        tags: { passion: 1, depth: 0, stability: 0, growth: 3, care: 0 },
      },
    ],
  },
  {
    tradition: "ubuntu",
    question:
      "Think about the version of yourself you actually like. Where does that person show up?",
    options: [
      {
        text: "When I'm working on a project. Give me something to build and I'm at my best.",
        tags: { passion: 0, depth: 0, stability: 2, growth: 2, care: 0 },
      },
      {
        text: "In a real conversation — not small talk, the kind where you lose track of time.",
        tags: { passion: 1, depth: 3, stability: 0, growth: 1, care: 0 },
      },
      {
        text: "When I'm looking after someone. Cooking, checking in, making sure people are okay.",
        tags: { passion: 0, depth: 0, stability: 1, growth: 0, care: 3 },
      },
      {
        text: "On my own. But I want someone who makes me want to leave that space sometimes.",
        tags: { passion: 0, depth: 1, stability: 0, growth: 3, care: 0 },
      },
    ],
  },
  {
    tradition: "yuanfen",
    question: "What actually brought you here today?",
    options: [
      {
        text: "I've known what I want for a while. I just haven't had a good place to look for it.",
        tags: { passion: 0, depth: 1, stability: 2, growth: 1, care: 1 },
      },
      {
        text: "Something shifted recently. I'm rethinking what I've been looking for entirely.",
        tags: { passion: 1, depth: 2, stability: 0, growth: 2, care: 0 },
      },
      {
        text: "Curiosity. This felt different from everything else out there.",
        tags: { passion: 1, depth: 0, stability: 0, growth: 3, care: 0 },
      },
      {
        text: "Honestly, exhaustion. I'm done pretending the standard options work for me.",
        tags: { passion: 0, depth: 2, stability: 1, growth: 1, care: 0 },
      },
    ],
  },
  {
    tradition: "anamcara",
    question:
      "If someone could truly see you — all of you, no editing — what would that change in your life?",
    options: [
      {
        text: "I'd stop shrinking myself to fit what I think people expect.",
        tags: { passion: 1, depth: 2, stability: 0, growth: 2, care: 0 },
      },
      {
        text: "I'd make bigger decisions. I hold back because I don't have a thinking partner.",
        tags: { passion: 0, depth: 1, stability: 2, growth: 2, care: 0 },
      },
      {
        text: "I'd feel less like I'm carrying everything alone. Not fixed — just seen.",
        tags: { passion: 0, depth: 2, stability: 0, growth: 0, care: 3 },
      },
      {
        text: "It would make the life I've already built feel less like something I'm doing alone.",
        tags: { passion: 0, depth: 3, stability: 1, growth: 0, care: 1 },
      },
    ],
  },
];

const ARCHETYPES = {
  anchor: {
    name: "The Anchor",
    vibe: "Steady hands. Quiet loyalty. Tuesday nights.",
    description: `Your person doesn't sweep in. They just... stay. They're the kind of steady that doesn't announce itself — it shows up on Tuesday, and Thursday, and the day everything falls apart. They've probably been called "too predictable" by someone who confused fireworks for warmth.\n\nThey don't need grand gestures. They need you to leave your shoes by their door and mean it. The kind of trust that's built in unremarkable moments — the shared errand, the comfortable silence, the "are you still up?" that isn't going anywhere.\n\nYou're looking for someone who makes ordinary life feel like enough. They've been looking for someone who finally agrees.`,
  },
  witness: {
    name: "The Witness",
    vibe: "Sees everything. Says little. Means all of it.",
    description: `Your person won't try to fix you. They won't offer advice you didn't ask for or rewrite your story with a neater ending. They'll just be there — fully, quietly, without flinching.\n\nThey have this quality where silence isn't uncomfortable. It's just honest. You know that feeling when someone looks at you and you can tell they're actually present? That's their entire thing.\n\nYou've been looking for someone who listens like they mean it. They've been looking for someone worth listening to.`,
  },
  architect: {
    name: "The Architect",
    vibe: "Shared plans. Built on purpose. Made to last.",
    description: `Your person thinks in blueprints — not the controlling kind, the collaborative kind. They want to sit across from you and ask: what are we building? They get genuinely excited about logistics the way some people get excited about first dates.\n\nThey've been frustrated by connections that stayed in the feelings stage and never became anything structural. They don't just want to know you — they want to build something alongside you. A home, a plan, a rhythm that works because two people decided to make it work on purpose.\n\nYou're looking for someone who takes the future seriously. They've been looking for someone to build it with.`,
  },
  spark: {
    name: "The Spark",
    vibe: "Midnight texts. New neighborhoods. Better questions.",
    description: `Your person doesn't want to settle down. They want to settle in — to a life that keeps moving, keeps asking questions, keeps surprising both of you.\n\nThey'll send you something at midnight that changes how you think about a topic, take you somewhere you've never heard of, and ask the question nobody else would think to ask. They've been called "a lot" and they've mostly made peace with it. What they haven't found is someone who actually matches that energy.\n\nYou're looking for someone who widens your world. They've been looking for someone who doesn't try to shrink theirs.`,
  },
  mirror: {
    name: "The Mirror",
    vibe: "Gets it without being told. Already in the room.",
    description: `Your person has this uncanny habit of saying what you were already thinking. Not because they're reading your mind — because they've been standing in the same place, existentially, for a while now.\n\nThey know what it's like to look at the options everyone else seems fine with and think: there has to be something else. They've done quiet work on themselves — not because they were broken, but because they were curious.\n\nYou've been looking for someone who doesn't need the backstory. They've been looking for exactly the same thing.`,
  },
};

function getArchetype(sc) {
  const t = [
    ["spark", sc.passion * 1.2 + sc.growth],
    ["witness", sc.depth * 1.2 + sc.care * 0.5],
    ["anchor", sc.stability + sc.care * 1.2],
    ["architect", sc.stability * 1.2 + sc.depth * 0.5],
    ["mirror", sc.growth * 1.1 + sc.depth],
  ].sort((a, b) => b[1] - a[1]);
  return t[0][0];
}

const B = { fontFamily: "'DM Sans', sans-serif" };
const H = { fontFamily: "'Playfair Display', Georgia, serif" };

function Intro({ onStart }) {
  const [v, setV] = useState(false);
  useEffect(() => {
    setV(true);
  }, []);
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "48px 24px",
        textAlign: "center",
        opacity: v ? 1 : 0,
        transform: v ? "none" : "translateY(12px)",
        transition: "all 0.7s ease",
        background:
          "linear-gradient(175deg, #FAF8FD 0%, #FFFFFF 35%, #FFF 100%)",
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #D8CCF0 0%, #B49EDB 100%)",
          marginBottom: 22,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 3px 16px rgba(155,127,199,0.18)",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="#fff"
            strokeWidth="1.5"
            opacity="0.9"
          />
          <circle cx="12" cy="12" r="3" fill="#fff" opacity="0.7" />
        </svg>
      </div>

      <h1
        style={{
          ...H,
          fontSize: "clamp(38px, 8.5vw, 64px)",
          fontWeight: 400,
          color: "#2D2A33",
          margin: "0 0 6px 0",
          lineHeight: 1,
          letterSpacing: "-0.01em",
        }}
      >
        Lavenderist
      </h1>
      <p
        style={{
          ...B,
          fontSize: 13,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#8A7BA8",
          margin: "0 0 44px 0",
          fontWeight: 500,
        }}
      >
        Reimagine partnership
      </p>

      <div style={{ maxWidth: 460, marginBottom: 40 }}>
        <p
          style={{
            ...B,
            fontSize: "clamp(15px, 2.5vw, 16px)",
            color: "#5A5363",
            lineHeight: 1.75,
            margin: "0 0 14px 0",
          }}
        >
          Love takes many forms, and Lavenderist is built for all of them. A
          space for people who seek to build something intentional together, on
          their own terms, in their own way, without having to fit a familiar
          shape.
        </p>
        <p
          style={{
            ...B,
            fontSize: "clamp(15px, 2.5vw, 16px)",
            color: "#5A5363",
            lineHeight: 1.75,
            margin: 0,
          }}
        >
          Life partners, co-parents, deep companions, or any arrangement that
          makes sense to you. No explanation needed. Whatever it looks like,
          find a partner who walks your path.
        </p>
      </div>

      <button
        onClick={onStart}
        style={{
          ...B,
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          background: "#2D2A33",
          color: "#fff",
          border: "none",
          padding: "15px 44px",
          cursor: "pointer",
          borderRadius: 32,
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.background = "#444050";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "#2D2A33";
        }}
      >
        Start the Quiz
      </button>

      <div
        style={{
          marginTop: 48,
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {Object.values(TRADITIONS).map((t, i) => (
          <div
            key={i}
            style={{ display: "flex", alignItems: "center", gap: 5 }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: t.accent,
                opacity: 0.4,
              }}
            />
            <span
              style={{
                ...B,
                fontSize: 10,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#AEA7B7",
              }}
            >
              {t.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Question({ q, idx, total, onAnswer }) {
  const [v, setV] = useState(false);
  const [sel, setSel] = useState(q.multiSelect ? [] : null);
  const [learn, setLearn] = useState(false);
  const t = TRADITIONS[q.tradition];

  useEffect(() => {
    setV(false);
    setSel(q.multiSelect ? [] : null);
    setLearn(false);
    setTimeout(() => setV(true), 50);
  }, [idx]);

  const pick = (i) => {
    if (q.multiSelect) {
      setSel((prev) =>
        prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
      );
    } else {
      setSel(i);
      setTimeout(() => onAnswer([q.options[i].tags]), 400);
    }
  };

  const confirm = () => {
    if (q.multiSelect && sel.length > 0) {
      onAnswer(sel.map((i) => q.options[i].tags));
    }
  };

  const isSelected = (i) => (q.multiSelect ? sel.includes(i) : sel === i);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "48px 24px",
        opacity: v ? 1 : 0,
        transform: v ? "none" : "translateY(14px)",
        transition: "all 0.4s ease",
        background: `linear-gradient(180deg, ${t.bg} 0%, #FFFFFF 50%)`,
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "#F0ECF4",
          zIndex: 10,
        }}
      >
        <div
          style={{
            height: "100%",
            background: t.accent,
            width: `${((idx + 1) / total) * 100}%`,
            transition: "width 0.4s ease",
            borderRadius: "0 2px 2px 0",
            opacity: 0.7,
          }}
        />
      </div>

      <div style={{ maxWidth: 640, margin: "0 auto", width: "100%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 18,
          }}
        >
          <div style={{ flexShrink: 0 }}>{t.icon(56)}</div>
          <div>
            <div
              style={{
                ...B,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: t.accent,
              }}
            >
              {t.label}
            </div>
            <div style={{ ...B, fontSize: 11, color: "#AEA7B7", marginTop: 1 }}>
              {t.region}
            </div>
          </div>
        </div>

        <p
          style={{
            ...B,
            fontSize: "clamp(14px, 2.3vw, 15.5px)",
            color: "#6B6575",
            lineHeight: 1.65,
            margin: "0 0 4px 0",
            fontWeight: 400,
          }}
        >
          {t.header}
        </p>

        <button
          onClick={() => setLearn(!learn)}
          style={{
            background: "none",
            border: "none",
            ...B,
            fontSize: 12,
            color: t.accent,
            cursor: "pointer",
            padding: "4px 0",
            marginBottom: learn ? 0 : 18,
            fontWeight: 500,
          }}
        >
          {learn ? "— less" : "+ learn more"}
        </button>

        {learn && (
          <div
            style={{
              ...B,
              fontSize: 13,
              color: "#7A7385",
              lineHeight: 1.7,
              margin: "6px 0 18px 0",
              padding: "12px 16px",
              borderLeft: `3px solid ${t.accent}30`,
              background: `${t.accent}06`,
              borderRadius: "0 6px 6px 0",
            }}
          >
            {t.learn}
          </div>
        )}

        {t.subheader && (
          <p
            style={{
              ...B,
              fontSize: 13,
              color: "#9E96A8",
              margin: "0 0 6px 0",
            }}
          >
            {t.subheader}
          </p>
        )}

        <h2
          style={{
            ...B,
            fontSize: "clamp(20px, 3.5vw, 26px)",
            fontWeight: 500,
            color: "#2D2A33",
            margin: "0 0 6px 0",
            lineHeight: 1.35,
          }}
        >
          {q.question}
        </h2>
        {q.multiSelect && (
          <p
            style={{
              ...B,
              fontSize: 13,
              color: "#9E96A8",
              margin: "0 0 18px 0",
            }}
          >
            Select all that feel true for you.
          </p>
        )}
        {!q.multiSelect && <div style={{ height: 16 }} />}

        <div
          style={{
            display: q.columns ? "grid" : "flex",
            gridTemplateColumns: q.columns ? "1fr 1fr" : undefined,
            flexDirection: q.columns ? undefined : "column",
            gap: 8,
          }}
        >
          {q.options.map((o, i) => {
            const active = isSelected(i);
            return (
              <button
                key={i}
                onClick={() => pick(i)}
                style={{
                  ...B,
                  fontSize: q.columns ? 13 : 14,
                  color: active ? "#fff" : "#4A4453",
                  background: active ? t.accent : "#FAFAFC",
                  border: `1px solid ${active ? t.accent : "#EDEBF0"}`,
                  padding: q.columns ? "12px 14px" : "14px 18px",
                  cursor: "pointer",
                  textAlign: "left",
                  lineHeight: 1.5,
                  borderRadius: 8,
                  transition: "all 0.2s ease",
                  boxShadow: active ? `0 2px 10px ${t.accent}28` : "none",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.borderColor = `${t.accent}66`;
                    e.currentTarget.style.background = `${t.accent}06`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.borderColor = "#EDEBF0";
                    e.currentTarget.style.background = "#FAFAFC";
                  }
                }}
              >
                {q.multiSelect && (
                  <span
                    style={{
                      width: 18,
                      height: 18,
                      minWidth: 18,
                      borderRadius: 4,
                      border: `1.5px solid ${active ? "#fff" : "#CDCAD3"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 1,
                      transition: "all 0.2s ease",
                      background: active
                        ? "rgba(255,255,255,0.2)"
                        : "transparent",
                    }}
                  >
                    {active && (
                      <svg width="12" height="12" viewBox="0 0 16 16">
                        <path
                          d="M3 8l3 3 7-7"
                          stroke="#fff"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </span>
                )}
                <span>{o.text}</span>
              </button>
            );
          })}
        </div>

        {q.multiSelect && (
          <div
            style={{ marginTop: 20, display: "flex", justifyContent: "center" }}
          >
            <button
              onClick={confirm}
              disabled={sel.length === 0}
              style={{
                ...B,
                fontSize: 14,
                fontWeight: 600,
                background: sel.length > 0 ? "#2D2A33" : "#E8E6EC",
                color: sel.length > 0 ? "#fff" : "#AEA7B7",
                border: "none",
                padding: "13px 40px",
                borderRadius: 32,
                cursor: sel.length > 0 ? "pointer" : "default",
                transition: "all 0.3s ease",
              }}
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Result({ archetype }) {
  const [v, setV] = useState(false);
  const [showE, setShowE] = useState(false);
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const r = ARCHETYPES[archetype];
  useEffect(() => {
    setTimeout(() => setV(true), 80);
  }, []);
  const pars = r.description.split("\n\n");

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "56px 24px",
        opacity: v ? 1 : 0,
        transform: v ? "none" : "translateY(14px)",
        transition: "all 0.7s ease",
        background: "linear-gradient(180deg, #FAF8FD 0%, #FFFFFF 40%)",
      }}
    >
      <div style={{ maxWidth: 520, width: "100%", textAlign: "center" }}>
        <p
          style={{
            ...B,
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#8A7BA8",
            marginBottom: 18,
            fontWeight: 500,
          }}
        >
          Your match archetype
        </p>

        <p
          style={{
            ...H,
            fontSize: "clamp(18px, 3vw, 22px)",
            color: "#6B6575",
            margin: "0 0 2px 0",
            fontWeight: 400,
          }}
        >
          The person you've been looking for is
        </p>
        <h1
          style={{
            ...H,
            fontSize: "clamp(36px, 7.5vw, 56px)",
            fontWeight: 400,
            color: "#2D2A33",
            margin: "0 0 6px 0",
            lineHeight: 1,
            fontStyle: "italic",
          }}
        >
          {r.name}
        </h1>
        <p
          style={{
            ...B,
            fontSize: 14,
            color: "#8A7BA8",
            fontStyle: "italic",
            margin: "0 0 32px 0",
          }}
        >
          {r.vibe}
        </p>

        <div
          style={{
            width: 40,
            height: 1,
            margin: "0 auto 28px auto",
            background: "#E8E4EE",
          }}
        />

        <div style={{ textAlign: "left" }}>
          {pars.map((p, i) => (
            <p
              key={i}
              style={{
                ...B,
                fontSize: "clamp(14.5px, 2.3vw, 16px)",
                color: "#4A4453",
                lineHeight: 1.8,
                margin: `0 0 ${i < pars.length - 1 ? 16 : 36}px 0`,
              }}
            >
              {p}
            </p>
          ))}
        </div>

        <div
          style={{
            width: 40,
            height: 1,
            margin: "0 auto 32px auto",
            background: "#E8E4EE",
          }}
        />

        {!done ? (
          !showE ? (
            <div>
              <p
                style={{
                  ...H,
                  fontSize: "clamp(18px, 3.5vw, 22px)",
                  color: "#2D2A33",
                  margin: "0 0 6px 0",
                  fontStyle: "italic",
                }}
              >
                Find them on Lavenderist.
              </p>
              <p
                style={{
                  ...B,
                  fontSize: 14,
                  color: "#8A8494",
                  margin: "0 0 24px 0",
                  lineHeight: 1.6,
                }}
              >
                We're building a platform designed for connections like yours.
                Join the waitlist — we'll let you know when we launch.
              </p>
              <button
                onClick={() => setShowE(true)}
                style={{
                  ...B,
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  background: "#2D2A33",
                  color: "#fff",
                  border: "none",
                  padding: "15px 40px",
                  cursor: "pointer",
                  borderRadius: 32,
                }}
              >
                Join the Waitlist
              </button>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
              }}
            >
              <p style={{ ...B, fontSize: 13, color: "#8A8494" }}>
                Join the waitlist — we'll let you know when it's time.
              </p>
              <div style={{ display: "flex", width: "100%", maxWidth: 380 }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  style={{
                    flex: 1,
                    ...B,
                    fontSize: 14,
                    padding: "12px 16px",
                    background: "#FAFAFC",
                    border: "1px solid #EDEBF0",
                    borderRight: "none",
                    color: "#2D2A33",
                    outline: "none",
                    borderRadius: "8px 0 0 8px",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#9B87C2")}
                  onBlur={(e) => (e.target.style.borderColor = "#EDEBF0")}
                />
                <button
                  onClick={() => {
                    if (email.includes("@")) setDone(true);
                  }}
                  style={{
                    ...B,
                    fontSize: 13,
                    fontWeight: 600,
                    background: "#2D2A33",
                    color: "#fff",
                    border: "none",
                    padding: "12px 22px",
                    cursor: "pointer",
                    borderRadius: "0 8px 8px 0",
                  }}
                >
                  Join
                </button>
              </div>
            </div>
          )
        ) : (
          <div>
            <p
              style={{
                ...H,
                fontSize: 22,
                color: "#2D2A33",
                fontStyle: "italic",
                margin: "0 0 8px 0",
              }}
            >
              You're on the list.
            </p>
            <p
              style={{ ...B, fontSize: 14, color: "#8A8494", lineHeight: 1.6 }}
            >
              We'll reach out when the conditions are right.
            </p>
          </div>
        )}

        <div
          style={{
            marginTop: 48,
            paddingTop: 20,
            borderTop: "1px solid #F0ECF4",
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {Object.values(TRADITIONS).map((t, i) => (
            <div
              key={i}
              style={{ display: "flex", alignItems: "center", gap: 5 }}
            >
              <div
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: t.accent,
                  opacity: 0.35,
                }}
              />
              <span
                style={{
                  ...B,
                  fontSize: 9,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#B5AFBE",
                }}
              >
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [stage, setStage] = useState("intro");
  const [qi, setQi] = useState(0);
  const [sc, setSc] = useState({
    passion: 0,
    depth: 0,
    stability: 0,
    growth: 0,
    care: 0,
  });
  const [arch, setArch] = useState(null);

  const handleAnswer = (tagsArray) => {
    const ns = { ...sc };
    tagsArray.forEach((tags) => {
      ns.passion += tags.passion || 0;
      ns.depth += tags.depth || 0;
      ns.stability += tags.stability || 0;
      ns.growth += tags.growth || 0;
      ns.care += tags.care || 0;
    });
    setSc(ns);
    if (qi < QUESTIONS.length - 1) setQi(qi + 1);
    else {
      setArch(getArchetype(ns));
      setStage("result");
    }
  };

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap"
        rel="stylesheet"
      />
      <style>{`*{box-sizing:border-box;margin:0;padding:0}::selection{background:#D8CCF044}input::placeholder{color:#B5AFBE}html{-webkit-font-smoothing:antialiased}`}</style>
      {stage === "intro" && (
        <Intro
          onStart={() => {
            setStage("quiz");
            setQi(0);
            setSc({ passion: 0, depth: 0, stability: 0, growth: 0, care: 0 });
          }}
        />
      )}
      {stage === "quiz" && (
        <Question
          q={QUESTIONS[qi]}
          idx={qi}
          total={QUESTIONS.length}
          onAnswer={handleAnswer}
        />
      )}
      {stage === "result" && <Result archetype={arch} />}
    </div>
  );
}
