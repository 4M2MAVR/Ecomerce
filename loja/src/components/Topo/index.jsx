import './Topo.css'

export default function topo() {
    return (
        <header>
            <div className='anuncio'>
                <div className='anuncio-conteudo'>
                <p>TUDO em 10x SEM JUROS</p>
                </div>
            </div>

            <div className='topo'>
                <picture>
                    <a href="#">
                        <img src="./miku_icon.jpg" alt="" />
                    </a>
                </picture>

                <nav>
                    <a href="#">Home</a>
                    <a href="#">Produtos</a>
                    <a href="#">Lançamentos</a>
                    <a href="#">Contato</a>
                </nav>
            </div>
        </header>
    )
}