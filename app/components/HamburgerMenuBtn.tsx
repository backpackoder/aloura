export function HamburgerMenuBtn({
  isMenuOpen,
  handler,
}: {
  isMenuOpen: boolean;
  handler: () => void;
}) {
  return (
    <button
      className="z-50 fixed top-0 right-0 w-[100px] h-[100px] bg-[rgba(0,0,0,0.5)] rounded-3xl md:hidden"
      onClick={() => handler()}
    >
      <span
        className={`absolute left-1/2 -translate-x-1/2 w-3/5 h-1 bg-red-700 border-red-700 rounded-full duration-300
        ${isMenuOpen ? "top-1/2 rotate-45" : "top-1/4"}`}
      />
      <span
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 w-3/5 h-1 bg-red-700 border-red-700 rounded-full duration-300
        ${isMenuOpen ? "opacity-0" : ""}`}
      />
      <span
        className={`absolute left-1/2 -translate-x-1/2 w-3/5 h-1 bg-red-700 border-red-700 rounded-full duration-300
        ${isMenuOpen ? "top-1/2 -rotate-45" : "top-3/4"}`}
      />
    </button>
  );
}
