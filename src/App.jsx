function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{background: '#FAFAF5'}}>
      
      {/* Watercolor blobs */}
      <div className="absolute top-[-50px] left-[-50px] w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{background: '#A8D5A2'}}></div>
      <div className="absolute top-[-30px] right-[-60px] w-80 h-80 rounded-full opacity-20 blur-3xl"
        style={{background: '#F9E07F'}}></div>
      <div className="absolute bottom-[-60px] left-[20%] w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{background: '#A8D5A2'}}></div>
      <div className="absolute bottom-[-40px] right-[-40px] w-72 h-72 rounded-full opacity-25 blur-3xl"
        style={{background: '#F9E07F'}}></div>
      <div className="absolute top-[40%] left-[40%] w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{background: '#3D5A3E'}}></div>

      {/* Main content */}
      <div className="text-center z-10 px-8">
        <h1 className="text-6xl font-bold text-[#3D5A3E] mb-4">
          Trailo
        </h1>
        <p className="text-xl text-[#3D5A3E] opacity-80 mb-2">
          Your next adventure is closer than you think.
        </p>
        <p className="text-md text-[#3D5A3E] opacity-60 mb-8">
          Tell us your vibe. We'll handle the rest.
        </p>
        <button className="px-10 py-4 bg-[#3D5A3E] text-white font-semibold rounded-full hover:bg-[#F9E07F] hover:text-[#3D5A3E] transition-all duration-300 text-lg shadow-lg">
          Start Planning ✈️
        </button>
      </div>
    </div>
  )
}

export default App