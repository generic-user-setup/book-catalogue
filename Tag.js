export default function TagCheatSheet() {
  const categories = [
    {
      label: "🌑 CONTENT NOTES",
      subtitle: "things to be aware of",
      headerColor: "#3B2612",
      bg: "#FDF0E8",
      border: "#E8C0A0",
      tags: [
        ["💀", "Death / grief / loss"],
        ["🔥", "Ka-ra-te — violence"],
        ["🌶️", "Smut — explicit erotica"],
        ["👙", "Sexy times — mild/moderate sexual content"],
        ["🚬", "Drugs r bad kids — addiction / substance use"],
        ["⚔️", "Military industrial complex ahead"],
        ["🌒", "Dark themes"],
        ["🌪️", "Disaster themes"],
        ["🌍", "Colonialism ahoy"],
        ["🐾", "Animal harm"],
        ["🩸", "Gore"],
        ["📰", "Real crime, real people"],
        ["🚫", "#notallmen — sexual violence / assault"],
        ["🧹", "Shitty parents — abuse, neglect, toxic family"],
        ["🧠🔥", "So much mental health"],
        ["🪬", "Surveillance state"],
        ["🚪🔪", "Home invasion"],
        ["💍🔪", "Intimate partner violence"],
      ],
    },
    {
      label: "✨ INVITATIONS",
      subtitle: "things to look forward to",
      headerColor: "#2A5A28",
      bg: "#EAF4E8",
      border: "#A8D0A0",
      tags: [
        ["😂", "Laughter ahead"],
        ["🧣", "Warm fuzzies — cozy, heartwarming"],
        ["🧠", "Learning afoot — nonfiction, educational"],
        ["💕", "The feels — emotionally moving"],
        ["🌿", "Touch grass — nature writing, place-based"],
        ["🗺️", "Armchair travel — vivid sense of place"],
        ["💡", "Big ideas — philosophy, science, paradigm-shifting"],
        ["💃", "Unputdownable — stay-up-all-night pacing"],
        ["🌹", "Swoon — romance, love story, sexual tension"],
        ["🦋", "Character growth — transformation, redemption"],
        ["🔍", "Whodunit brain — mystery, puzzle, satisfying reveal"],
        ["🏔️", "Epic scope — world-building, saga"],
        ["🌾", "Local roots — Minnesota / regional"],
        ["🧒", "Kid friendly"],
        ["🙄", "Has teens acting like teens"],
        ["🥂", "Grown ass people acting like teens"],
        ["😈", "Chaos reigns — satisfying revenge"],
      ],
    },
    {
      label: "👁️ CENTERED EXPERIENCE",
      subtitle: "whose story is this",
      headerColor: "#2A3A6A",
      bg: "#EAF0FA",
      border: "#A0B0E0",
      tags: [
        ["👩", "Women centered"],
        ["👑", "Black woman centered"],
        ["✊", "Black centered"],
        ["🪶", "Indigenous centered"],
        ["🌺", "Latina centered"],
        ["🌸", "Asian centered"],
        ["🏳️‍🌈", "Queer centered"],
        ["🏳️‍⚧️", "Trans centered"],
        ["👴", "Older protagonist"],
        ["🧿🫀", "AI / android centered"],
        ["👽", "Alien / nonhuman POV"],
        ["💼", "Working class centered"],
        ["🧑‍🔬", "Scientist centered"],
        ["🌍", "Global south centered"],
        ["👨", "Men being men"],
        ["♿", "Bodily autonomy can be yours too — disability centered"],
        ["🌀", "The struggles are real — mentally ill protagonist"],
      ],
    },
    {
      label: "🕰️ TIMEFRAME",
      subtitle: "when and where is the story set",
      headerColor: "#5A4A2A",
      bg: "#F5F0E8",
      border: "#D0C0A0",
      tags: [
        ["🏛️", "Real past — historical fiction"],
        ["📜", "Fake past — secondary world / historical fantasy"],
        ["⌛🔫", "Time hopping — time travel"],
        ["🌎", "Contemporary real world — present day Earth"],
        ["🌎🪞", "Parallel world — alternate Earth / mirror reality"],
        ["🚀", "Space — aboard ships, stations, or the void"],
        ["☄️", "Extragalactic — beyond our galaxy"],
        ["🤖", "Near future — Jetsons energy"],
        ["🌌", "Far future — deep time, distant civilizations"],
      ],
    },
    {
      label: "📖 READING EXPERIENCE",
      subtitle: "time commitment",
      headerColor: "#4A2A6A",
      bg: "#F0EAF5",
      border: "#C0A0E0",
      tags: [
        ["⚡", "Quick read — novella / short fiction / under 200 pages"],
        ["☕", "One sitting — 200–300 pages"],
        ["🌙", "A few evenings — 300–500 pages"],
        ["🛋️", "Take your time — 500+ pages"],
        ["🗻", "Commitment — series / multi-volume"],
      ],
    },
  ];

  return (
    <div style={{ fontFamily: "Georgia, serif", maxWidth: 780, margin: "0 auto", padding: 32, background: "#faf8f4", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ textAlign: "center", borderBottom: "3px solid #5a3e2b", paddingBottom: 20, marginBottom: 32 }}>
        <div style={{ fontSize: 36, marginBottom: 8 }}>🏕️</div>
        <h1 style={{ fontSize: 28, color: "#3b2612", margin: "0 0 6px", letterSpacing: 2, textTransform: "uppercase" }}>Cabin Library</h1>
        <p style={{ fontSize: 16, color: "#7a5c3e", margin: "0 0 10px", fontStyle: "italic" }}>Tag & Symbol Guide</p>
        <p style={{ fontSize: 13, color: "#9a7a5a", margin: 0, fontFamily: "sans-serif" }}>
          Use this guide to read the tags on any book in the catalogue.
        </p>
      </div>

      {/* Categories */}
      {categories.map((cat) => (
        <div key={cat.label} style={{ marginBottom: 32 }}>
          {/* Section header */}
          <div style={{
            borderBottom: `3px solid ${cat.headerColor}`,
            paddingBottom: 8,
            marginBottom: 6,
          }}>
            <span style={{ fontSize: 18, fontWeight: "bold", color: cat.headerColor, letterSpacing: 1 }}>
              {cat.label}
            </span>
          </div>
          <p style={{ margin: "0 0 12px", fontSize: 12, color: "#888", fontStyle: "italic", fontFamily: "sans-serif" }}>
            {cat.subtitle}
          </p>

          {/* Tag rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {cat.tags.map(([emoji, desc]) => (
              <div key={desc} style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: cat.bg,
                border: `1px solid ${cat.border}`,
                borderRadius: 6,
                padding: "7px 12px",
              }}>
                <span style={{ fontSize: 18, minWidth: 32, textAlign: "center", flexShrink: 0 }}>{emoji}</span>
                <span style={{ fontSize: 13, color: "#3a2a1a", fontFamily: "sans-serif" }}>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Footer */}
      <div style={{
        textAlign: "center",
        borderTop: "2px solid #d4b896",
        paddingTop: 20,
        marginTop: 8,
      }}>
        <p style={{ fontSize: 13, color: "#9a7a5a", fontStyle: "italic", margin: 0, fontFamily: "sans-serif" }}>
          Books are tagged for your comfort, not your judgment.<br />
          Everything here is welcome at this cabin.
        </p>
      </div>
    </div>
  );
}
