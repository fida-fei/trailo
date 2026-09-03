function Navbar() {
  return (
    <nav className="w-full flex flex-row items-center justify-between px-8 py-4 bg-[#FDF6E3]">
      <div className="text-2xl font-bold text-[#2D6A4F]">
        Trailo ✈️
      </div>
      <div className="flex flex-row items-center gap-6">
        <a href="#" className="text-[#2D6A4F] hover:text-[#F4A623] transition-all duration-300">
          How it works
        </a>
        <a href="#" className="text-[#2D6A4F] hover:text-[#F4A623] transition-all duration-300">
          About
        </a>
        <button className="px-4 py-2 bg-[#2D6A4F] text-white rounded-full hover:bg-[#F4A623] hover:text-[#2D6A4F] transition-all duration-300 font-semibold">
          Plan a Trip
        </button>
      </div>
    </nav>
  )
}

export default Navbar