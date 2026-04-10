import { useState, useEffect } from "react";

/* ───────────────────── TRADITIONS ───────────────────── */

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
      "In Chinese philosophy, yuánfèn describes the invisible pull between certain people — not random chance, but something that's been quietly building. Less like fate. More like readiness.",
    subheader:
      "Yuánfèn says the right connection arrives when you're ready for it. So what brought you here?",
    learn:
      "Yuánfèn draws from Buddhist, Confucian, and Daoist thought. Every meaningful encounter results from countless small turns aligning — across time, choices, and circumstances that lead somewhere unexpected. The connection was always possible. It just needed the right moment.",
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

const TRADITION_CONTEXT = {
  greek: "the Greek loves — eight words for the ways humans connect",
  ayni: "ayni, the Quechua principle that every relationship is a living exchange",
  ubuntu:
    "ubuntu, the Southern African idea that you become yourself through the people around you",
  yuanfen:
    "yuánfèn, the Chinese understanding that meaningful connection arrives when you're ready",
  anamcara: "anam cara, the Celtic tradition of the soul friend",
};

/* ───────────────────── QUESTIONS ───────────────────── */

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

/* ───────────────────── ARCHETYPES ───────────────────── */

const ARCHETYPES = {
  anchor: {
    name: "Anchor",
    article: "an",
    plural: "Anchors",
    vibe: "Steady hands. Quiet loyalty. Tuesday nights.",
    description: `An Anchor doesn't sweep in. They stay. The kind of presence that doesn't announce itself — it just shows up on Tuesday, and Thursday, and the day everything falls apart.\n\nThey've probably been called predictable by someone who confused fireworks for warmth. What they actually are is deliberate. The shared errand, the comfortable silence, the midnight check-in that isn't going anywhere except closer.\n\nAn Anchor makes ordinary life feel like enough. And they've been waiting for someone who finally agrees.`,
  },
  witness: {
    name: "Witness",
    article: "a",
    plural: "Witnesses",
    vibe: "Sees everything. Says little. Means all of it.",
    description: `A Witness won't try to fix you. They won't offer advice you didn't ask for or rewrite your story with a neater ending. They'll just be there — fully, quietly, without looking away.\n\nThey have this quality where silence isn't awkward. It's honest. That feeling when someone is actually present and you can tell? That's their whole thing.\n\nA Witness listens like they mean it. And they've been waiting for someone worth that kind of attention.`,
  },
  architect: {
    name: "Architect",
    article: "an",
    plural: "Architects",
    vibe: "Shared plans. Built on purpose. Made to last.",
    description: `An Architect thinks in blueprints — not the controlling kind, the collaborative kind. They want to sit across from you and ask: what are we building? They get excited about logistics the way other people get excited about first dates.\n\nThey've been let down by connections that stayed in the feelings stage and never became anything real. They don't just want to know you — they want to build something alongside you. A home, a plan, a rhythm that works because two people decided it would.\n\nAn Architect takes the future seriously. They've been waiting for someone to build it with.`,
  },
  spark: {
    name: "Spark",
    article: "a",
    plural: "Sparks",
    vibe: "Midnight texts. New neighborhoods. Better questions.",
    description: `A Spark doesn't want to settle down. They want to settle in — to a life that keeps moving, keeps asking, keeps surprising both of you.\n\nThey'll text you something at midnight that changes how you think about a topic, take you somewhere you've never been, and ask the question nobody else thought to ask. They've been called a lot. They've mostly made peace with it. What they haven't found is someone who actually matches that energy.\n\nA Spark widens your world. And they've been waiting for someone who doesn't try to shrink theirs.`,
  },
  mirror: {
    name: "Mirror",
    article: "a",
    plural: "Mirrors",
    vibe: "Gets it without being told. Already in the room.",
    description: `A Mirror has this uncanny way of saying what you were already thinking. Not because they're reading your mind — because they've been standing in the same place, existentially, for a while now.\n\nThey know what it's like to look at the options everyone else seems fine with and think: there has to be something else. They've done quiet work on themselves — not because they were broken, but because they were curious.\n\nA Mirror doesn't need the backstory. They've been waiting for someone who gets that.`,
  },
};

/* ───────────────────── SCORING ───────────────────── */

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

const ARCHETYPE_FORMULAS = {
  spark: (t) => (t.passion || 0) * 1.2 + (t.growth || 0),
  witness: (t) => (t.depth || 0) * 1.2 + (t.care || 0) * 0.5,
  anchor: (t) => (t.stability || 0) + (t.care || 0) * 1.2,
  architect: (t) => (t.stability || 0) * 1.2 + (t.depth || 0) * 0.5,
  mirror: (t) => (t.growth || 0) * 1.1 + (t.depth || 0),
};

function calcTopTraditions(answersArr, archetype) {
  const formula = ARCHETYPE_FORMULAS[archetype];
  const contributions = answersArr.map((a, i) => {
    const total = { passion: 0, depth: 0, stability: 0, growth: 0, care: 0 };
    a.tagsList.forEach((tags) => {
      Object.keys(total).forEach((k) => (total[k] += tags[k] || 0));
    });
    return { tradition: QUESTIONS[i].tradition, contribution: formula(total) };
  });
  contributions.sort((a, b) => b.contribution - a.contribution);
  return contributions.slice(0, 2).map((c) => c.tradition);
}

/* ───────────────────── SHARE CARD ART ───────────────────── */

function ShareArt({ archetype, size = 200 }) {
  const c1 = "#D8CCF0";
  const c2 = "#B49EDB";
  const dim = "#8A7BA8";
  const s = size;
  const cx = s / 2;
  const cy = s / 2;

  const stars = Array.from({ length: 24 }, (_, i) => {
    const seed = (i * 7 + 13) % 100;
    const x = (seed * s) / 100;
    const y = (((i * 31 + 7) % 100) * s) / 100;
    const r = 0.4 + (seed % 3) * 0.3;
    return (
      <circle
        key={i}
        cx={x}
        cy={y}
        r={r}
        fill="#D8CCF0"
        opacity={0.15 + (seed % 4) * 0.08}
      />
    );
  });

  const arts = {
    anchor: (
      <>
        <ellipse
          cx={cx}
          cy={cy}
          rx={s * 0.35}
          ry={s * 0.15}
          stroke={dim}
          strokeWidth="0.6"
          opacity="0.25"
          fill="none"
        />
        <circle
          cx={cx - s * 0.16}
          cy={cy}
          r={s * 0.04}
          fill={c1}
          opacity="0.9"
        />
        <circle
          cx={cx + s * 0.16}
          cy={cy}
          r={s * 0.04}
          fill={c2}
          opacity="0.9"
        />
        <line
          x1={cx - s * 0.12}
          y1={cy}
          x2={cx + s * 0.12}
          y2={cy}
          stroke={c1}
          strokeWidth="0.5"
          opacity="0.3"
        />
      </>
    ),
    witness: (
      <>
        <circle
          cx={cx}
          cy={cy}
          r={s * 0.28}
          stroke={dim}
          strokeWidth="0.4"
          opacity="0.12"
          fill="none"
        />
        <circle
          cx={cx}
          cy={cy}
          r={s * 0.18}
          stroke={dim}
          strokeWidth="0.5"
          opacity="0.18"
          fill="none"
        />
        <circle
          cx={cx}
          cy={cy}
          r={s * 0.08}
          stroke={dim}
          strokeWidth="0.6"
          opacity="0.25"
          fill="none"
        />
        <circle
          cx={cx - s * 0.06}
          cy={cy}
          r={s * 0.03}
          fill={c1}
          opacity="0.9"
        />
        <circle
          cx={cx + s * 0.06}
          cy={cy}
          r={s * 0.03}
          fill={c2}
          opacity="0.9"
        />
      </>
    ),
    architect: (
      <>
        <rect
          x={cx - s * 0.18}
          y={cy - s * 0.12}
          width={s * 0.36}
          height={s * 0.24}
          stroke={dim}
          strokeWidth="0.5"
          opacity="0.2"
          fill="none"
          rx="1"
        />
        <line
          x1={cx}
          y1={cy - s * 0.12}
          x2={cx}
          y2={cy + s * 0.12}
          stroke={dim}
          strokeWidth="0.4"
          opacity="0.15"
        />
        <line
          x1={cx - s * 0.18}
          y1={cy}
          x2={cx + s * 0.18}
          y2={cy}
          stroke={dim}
          strokeWidth="0.4"
          opacity="0.15"
        />
        <circle
          cx={cx - s * 0.09}
          cy={cy - s * 0.06}
          r={s * 0.03}
          fill={c1}
          opacity="0.9"
        />
        <circle
          cx={cx + s * 0.09}
          cy={cy + s * 0.06}
          r={s * 0.03}
          fill={c2}
          opacity="0.9"
        />
      </>
    ),
    spark: (
      <>
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const a = (i * Math.PI * 2) / 6 - Math.PI / 2;
          const r = s * 0.22;
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={cx + r * Math.cos(a)}
              y2={cy + r * Math.sin(a)}
              stroke={dim}
              strokeWidth="0.4"
              opacity="0.18"
            />
          );
        })}
        <circle
          cx={cx - s * 0.05}
          cy={cy - s * 0.02}
          r={s * 0.035}
          fill={c1}
          opacity="0.9"
        />
        <circle
          cx={cx + s * 0.07}
          cy={cy + s * 0.03}
          r={s * 0.035}
          fill={c2}
          opacity="0.9"
        />
      </>
    ),
    mirror: (
      <>
        <line
          x1={cx}
          y1={cy - s * 0.25}
          x2={cx}
          y2={cy + s * 0.25}
          stroke={dim}
          strokeWidth="0.4"
          opacity="0.15"
        />
        <circle
          cx={cx - s * 0.1}
          cy={cy - s * 0.04}
          r={s * 0.035}
          fill={c1}
          opacity="0.9"
        />
        <circle
          cx={cx + s * 0.1}
          cy={cy - s * 0.04}
          r={s * 0.035}
          fill={c2}
          opacity="0.9"
        />
        <circle
          cx={cx - s * 0.1}
          cy={cy + s * 0.08}
          r={s * 0.025}
          fill={c1}
          opacity="0.35"
        />
        <circle
          cx={cx + s * 0.1}
          cy={cy + s * 0.08}
          r={s * 0.025}
          fill={c2}
          opacity="0.35"
        />
      </>
    ),
  };

  return (
    <svg viewBox={`0 0 ${s} ${s}`} width={s} height={s} fill="none">
      {stars}
      {arts[archetype]}
    </svg>
  );
}

/* ───────────────────── STYLES ───────────────────── */

const B = { fontFamily: "'DM Sans', sans-serif" };
const H = { fontFamily: "'Playfair Display', Georgia, serif" };

/* ───────────────────── LOGO ───────────────────── */

function Logo({ size = 48 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #D8CCF0 0%, #B49EDB 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 3px 16px rgba(155,127,199,0.18)",
      }}
    >
      <svg
        width={size * 0.44}
        height={size * 0.44}
        viewBox="0 0 24 24"
        fill="none"
      >
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="5.5"
          stroke="#fff"
          strokeWidth="0.8"
          opacity="0.45"
          transform="rotate(-18 12 12)"
        />
        <circle cx="8.5" cy="11.2" r="2.4" fill="#fff" opacity="0.9" />
        <circle cx="15.5" cy="12.8" r="2.4" fill="#fff" opacity="0.9" />
      </svg>
    </div>
  );
}

/* ───────────────────── BACK ARROW ───────────────────── */

function BackArrow({ onClick, color = "#AEA7B7" }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "8px 12px 8px 0",
        display: "flex",
        alignItems: "center",
        gap: 6,
        ...B,
        fontSize: 13,
        color,
        fontWeight: 400,
        opacity: 0.7,
        transition: "opacity 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M10 3L5 8L10 13"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Back
    </button>
  );
}

/* ───────────────────── INTRO ───────────────────── */

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
      <div style={{ marginBottom: 22 }}>
        <Logo size={48} />
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
            margin: 0,
          }}
        >
          Love takes many forms, and this space is built for all of them. Forget
          labels, find a partner based on something deeper. Lavenderist draws
          from wisdom across the world to unlock what really brings humans
          together. The rest is up to you.
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

/* ───────────────────── QUESTION ───────────────────── */

function Question({ q, idx, total, onAnswer, onBack }) {
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
      setTimeout(() => {
        onAnswer(i, [q.options[i].tags]);
      }, 400);
    }
  };

  const confirm = () => {
    if (q.multiSelect && sel.length > 0) {
      onAnswer(
        sel,
        sel.map((i) => q.options[i].tags)
      );
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
      {/* Progress bar */}
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
        {/* Back navigation */}
        <div style={{ marginBottom: 12 }}>
          <BackArrow onClick={onBack} color={t.accent} />
        </div>

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

/* ───────────────────── RESULT ───────────────────── */

function Result({ archetype, topTraditions, answers }) {
  const [v, setV] = useState(false);
  const [showE, setShowE] = useState(false);
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [copied, setCopied] = useState(false);
  const r = ARCHETYPES[archetype];
  const pars = r.description.split("\n\n");

  useEffect(() => {
    setTimeout(() => setV(true), 80);
  }, []);

  const tradLine =
    topTraditions.length >= 2
      ? `Your answers drew from ${TRADITION_CONTEXT[topTraditions[0]]} and ${
          TRADITION_CONTEXT[topTraditions[1]]
        }.`
      : topTraditions.length === 1
      ? `Your answers drew from ${TRADITION_CONTEXT[topTraditions[0]]}.`
      : "";

  const handleSignup = () => {
    if (!email.includes("@")) return;

    const payload = {
      email,
      archetype,
      archetypeName: r.name,
      topTraditions,
      answers: answers.map((a, i) => ({
        tradition: QUESTIONS[i].tradition,
        question: QUESTIONS[i].question,
        selected: a.selected,
        selectedText: Array.isArray(a.selected)
          ? a.selected.map((idx) => QUESTIONS[i].options[idx].text)
          : [QUESTIONS[i].options[a.selected].text],
      })),
      timestamp: new Date().toISOString(),
    };

    // ── Mailchimp integration point ──
    // Send `payload` to your Mailchimp API endpoint here.
    // The payload includes: email, archetype, topTraditions,
    // per-question answers with tradition + selected text, and timestamp.
    console.log("Lavenderist waitlist signup:", payload);
    setDone(true);
  };

  const shareUrl = `https://lavenderist.com/?r=${archetype}`;

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(shareUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {});
  };

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
          Your connection archetype
        </p>

        <p
          style={{
            ...H,
            fontSize: "clamp(17px, 2.8vw, 20px)",
            color: "#6B6575",
            margin: "0 0 2px 0",
            fontWeight: 400,
          }}
        >
          A pattern emerged. It sounds like you need
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
          {r.article} {r.name}
        </h1>
        <p
          style={{
            ...B,
            fontSize: 14,
            color: "#8A7BA8",
            fontStyle: "italic",
            margin: "0 0 20px 0",
          }}
        >
          {r.vibe}
        </p>

        {/* Tradition context */}
        {tradLine && (
          <p
            style={{
              ...B,
              fontSize: 13,
              color: "#9E96A8",
              lineHeight: 1.65,
              margin: "0 0 32px 0",
              fontStyle: "italic",
            }}
          >
            {tradLine}
          </p>
        )}

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

        {/* Share section */}
        <div style={{ margin: "0 0 36px 0" }}>
          <button
            onClick={() => setShowShare(!showShare)}
            style={{
              background: "none",
              border: "none",
              ...B,
              fontSize: 13,
              color: "#8A7BA8",
              cursor: "pointer",
              fontWeight: 500,
              padding: "4px 0",
            }}
          >
            {showShare ? "— hide" : "↗ Share your result"}
          </button>

          {showShare && (
            <div
              style={{
                marginTop: 16,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: "100%",
                  maxWidth: 340,
                  background:
                    "linear-gradient(170deg, #1a1520 0%, #2D2A33 60%, #1a1520 100%)",
                  borderRadius: 16,
                  padding: "36px 28px 28px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <ShareArt archetype={archetype} size={120} />
                </div>
                <p
                  style={{
                    ...B,
                    fontSize: 12,
                    color: "#8A7BA880",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    margin: "0 0 8px 0",
                  }}
                >
                  I'm looking for
                </p>
                <p
                  style={{
                    ...H,
                    fontSize: 28,
                    color: "#F0ECF4",
                    fontStyle: "italic",
                    margin: "0 0 4px 0",
                    fontWeight: 400,
                  }}
                >
                  {r.article} {r.name}
                </p>
                <p
                  style={{
                    ...B,
                    fontSize: 12,
                    color: "#8A7BA8",
                    fontStyle: "italic",
                    margin: "0 0 24px 0",
                  }}
                >
                  {r.vibe}
                </p>
                <div
                  style={{
                    width: 24,
                    height: 1,
                    margin: "0 auto 16px",
                    background: "#8A7BA830",
                  }}
                />
                <p
                  style={{
                    ...B,
                    fontSize: 11,
                    color: "#8A7BA8",
                    letterSpacing: "0.08em",
                    margin: "0 0 4px 0",
                  }}
                >
                  Find Out More
                </p>
                <p
                  style={{
                    ...B,
                    fontSize: 10,
                    color: "#8A7BA860",
                    letterSpacing: "0.05em",
                  }}
                >
                  lavenderist.com
                </p>
              </div>

              <button
                onClick={handleCopyLink}
                style={{
                  ...B,
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#8A7BA8",
                  background: "#F8F5FC",
                  border: "1px solid #E8E4EE",
                  borderRadius: 20,
                  padding: "8px 20px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {copied ? "Copied!" : "Copy link"}
              </button>
            </div>
          )}
        </div>

        <div
          style={{
            width: 40,
            height: 1,
            margin: "0 auto 32px auto",
            background: "#E8E4EE",
          }}
        />

        {/* CTA section */}
        {!done ? (
          !showE ? (
            <div>
              <p
                style={{
                  ...B,
                  fontSize: "clamp(14px, 2.3vw, 15px)",
                  color: "#5A5363",
                  lineHeight: 1.7,
                  margin: "0 0 20px 0",
                }}
              >
                Life partners, co-parents, deep companions, or something
                entirely your own — we're building a space for connections like
                yours.
              </p>
              <p
                style={{
                  ...B,
                  fontSize: 13,
                  color: "#9E96A8",
                  lineHeight: 1.65,
                  margin: "0 0 28px 0",
                  fontStyle: "italic",
                }}
              >
                This archetype is one thread. The full experience draws from
                personality, astrology, cultural wisdom, and more — because the
                patterns between them are where the real connections live.
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
                Join the waitlist — we'll be in touch when it's time.
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
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSignup();
                  }}
                />
                <button
                  onClick={handleSignup}
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
              We'll be in touch when it's time.
            </p>
          </div>
        )}

        {/* Tradition legend */}
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

/* ───────────────────── APP ───────────────────── */

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
  const [answers, setAnswers] = useState([]);
  const [arch, setArch] = useState(null);
  const [topTrad, setTopTrad] = useState([]);

  const handleAnswer = (selected, tagsList) => {
    const ns = { ...sc };
    tagsList.forEach((tags) => {
      ns.passion += tags.passion || 0;
      ns.depth += tags.depth || 0;
      ns.stability += tags.stability || 0;
      ns.growth += tags.growth || 0;
      ns.care += tags.care || 0;
    });
    setSc(ns);
    const newAnswers = [...answers, { selected, tagsList }];
    setAnswers(newAnswers);

    if (qi < QUESTIONS.length - 1) {
      setQi(qi + 1);
    } else {
      const result = getArchetype(ns);
      setArch(result);
      setTopTrad(calcTopTraditions(newAnswers, result));
      setStage("result");
    }
  };

  const handleBack = () => {
    if (stage === "quiz" && qi === 0) {
      setStage("intro");
      setSc({ passion: 0, depth: 0, stability: 0, growth: 0, care: 0 });
      setAnswers([]);
      setQi(0);
      return;
    }
    if (stage === "quiz" && qi > 0) {
      const prevAnswer = answers[answers.length - 1];
      const ns = { ...sc };
      prevAnswer.tagsList.forEach((tags) => {
        ns.passion -= tags.passion || 0;
        ns.depth -= tags.depth || 0;
        ns.stability -= tags.stability || 0;
        ns.growth -= tags.growth || 0;
        ns.care -= tags.care || 0;
      });
      setSc(ns);
      setAnswers(answers.slice(0, -1));
      setQi(qi - 1);
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
            setAnswers([]);
          }}
        />
      )}
      {stage === "quiz" && (
        <Question
          q={QUESTIONS[qi]}
          idx={qi}
          total={QUESTIONS.length}
          onAnswer={handleAnswer}
          onBack={handleBack}
        />
      )}
      {stage === "result" && (
        <Result archetype={arch} topTraditions={topTrad} answers={answers} />
      )}
    </div>
  );
}
