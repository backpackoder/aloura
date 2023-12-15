export function HamburgerMenuBtn({
  isMenuOpen,
  handler,
}: {
  isMenuOpen: boolean;
  handler: () => void;
}) {
  return (
    <button className="relative w-[100px] h-[100px] md:hidden" onClick={() => handler()}>
      <span
        className={`absolute left-1/2 -translate-x-1/2 w-4/5 h-1 bg-red-700 border-red-700 rounded-full duration-300
        ${isMenuOpen ? "top-1/2 rotate-45" : "top-1/4"}`}
      />
      <span
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 w-4/5 h-1 bg-red-700 border-red-700 rounded-full duration-300
        ${isMenuOpen ? "opacity-0" : ""}`}
      />
      <span
        className={`absolute left-1/2 -translate-x-1/2 w-4/5 h-1 bg-red-700 border-red-700 rounded-full duration-300
        ${isMenuOpen ? "top-1/2 -rotate-45" : "top-3/4"}`}
      />
    </button>
  );
}
