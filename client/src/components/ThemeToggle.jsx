import { useProductStore } from "../store/useProductStore";

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useProductStore();

  return (
    <button
      onClick={toggleDarkMode}
      className="px-3 py-1 rounded bg-black text-white dark:bg-white dark:text-black transition"
    >
      {darkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
};

export default ThemeToggle;