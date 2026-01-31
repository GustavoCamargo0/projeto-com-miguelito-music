export default function Menu({ pesquisa, setPesquisa, children }) {
  return (
    <div className="h-screen flex flex-col bg-black text-white">

      <header className="flex items-center w-screen p-2 bg-black">

        <div className="flex justify-between items-center gap-130 mx-4">
        <img src="https://img.icons8.com/?size=100&id=99983&format=png&color=FFFFFF" alt="Spotify Icon" className="w-10 h-10 cursor-pointer" />
        
        <button className="p-2 rounded-full cursor-pointer bg-neutral-900 opacity-80 hover:opacity-100 hover:bg-neutral-800 transition-all duration-200">
          <img className="h-8 w-8" src="https://img.icons8.com/?size=100&id=i6fZC6wuprSu&format=png&color=FFFFFF" alt="Home Icon" />
        </button>
        </div>

          <input className="placeholder:text-xl placeholder:text-zinc-400 text-xl w-132 h-12 bg-neutral-900 px-5 rounded-full text-white outline-none hover:bg-neutral-800 focus:bg-neutral-800 transition-all duration-200" 
            type="text" 
            value={pesquisa} 
            onChange={e => setPesquisa(e.target.value)}
            placeholder='O que você quer ouvir?'
          />
      </header>

      <div className="flex flex-1">
        <aside className="w-105 flex flex-col items-center py-3 px-4 bg-neutral-900 ml-2 rounded-lg overflow-y-auto">
          <div className="flex items-center justify-between w-full mb-2">
            <h1 className="text-base font-bold">Sua Biblioteca</h1>

            <button className="py-1 px-4 bg-neutral-800 flex items-center rounded-full">
              <img className="w-4 h-4" src="https://img.icons8.com/?size=100&id=3220&format=png&color=FFFFFF" alt="Library Icon" />
              <span className="ml-3 font-semibold">Criar</span>
            </button>

            <button>
              <img src="" alt="" />
            </button>
          </div>
        </aside>

        <main className="flex-1 bg-white mx-2 p-6 rounded-lg overflow-y-auto">
          {children}
        </main>
      </div>

      <footer className="bg-black h-20 py-2">
        footer
      </footer>
    </div>
  )
}