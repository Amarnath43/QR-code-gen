function Accordion({
  title,
  isOpen,
  onClick,
  children,
}) {
  return (
    <div className="mb-4 border border-gray-200 rounded-xl overflow-hidden bg-white">

      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-5 py-4 bg-gray-100 hover:bg-gray-200 transition"
      >
        <span className="font-semibold text-gray-700">
          {title}
        </span>

        <span className="text-2xl text-gray-500">
          {isOpen ? "-" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="p-5">
          {children}
        </div>
      )}
    </div>
  );
}

export default Accordion;