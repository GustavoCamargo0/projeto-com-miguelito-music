export default function Header({ pesquisa, setPesquisa }) {
  return (
    <header>
      <input 
        type="text" 
        value={pesquisa}
        onChange={e => setPesquisa(e.target.value)}
        placeholder='O que você quer ouvir?'
      />
    </header>
  )
}