import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button variant="outline" onClick={toggleTheme}>
      {theme === "default" ? "Switch to Gradient Theme" : "Switch to Default Theme"}
    </Button>
  );
}

export default ThemeToggle;
