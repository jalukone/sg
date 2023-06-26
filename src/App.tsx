function App() {

  return (
      <div className="flex h-screen items-center justify-center bg-black">
        <div className="relative">
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r 
            from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur"></div>
          <button className="relative rounded-lg bg-black px-7 py-4 text-white">
             <h1 className="text-6xl">Building Site -<br/>
              <span className="italic text-xl bg-gradient-to-r from-rose-400 
                via-fuchsia-500 to-indigo-500 bg-[length:100%_6px] bg-no-repeat bg-bottom">
                JalukOne
              </span>
            </h1>
          </button>
        </div>
      </div>
  )
}

export default App

