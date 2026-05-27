import { useTheme, type Theme } from "../context/ThemeContext";

const THEMES: { id: Theme; label: string; bg: string; ring: string }[] = [
  { id: "dark",  label: "Dark",  bg: "#1a1a1a", ring: "#555" },
  { id: "light", label: "Light", bg: "#f5f5f0", ring: "#bbb" },
  { id: "neon",  label: "Neon",  bg: "#080812", ring: "#00e5ff" },
  { id: "warm",  label: "Warm",  bg: "#fdf6ec", ring: "#c05c2a" },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2" role="group" aria-label="Choose theme">
      {THEMES.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          title={t.label}
          aria-label={`Switch to ${t.label} theme`}
          aria-pressed={theme === t.id}
          className="w-3.5 h-3.5 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-1 focus-visible:ring-offset-background"
          style={{
            background: t.bg,
            border: `2px solid ${t.ring}`,
            transform: theme === t.id ? "scale(1.3)" : "scale(1)",
            boxShadow: theme === t.id ? `0 0 0 2px var(--foreground)` : "none",
          }}
        />
      ))}
    </div>
  );
}
