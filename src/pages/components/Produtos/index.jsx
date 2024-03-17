import styles from "./Produtos.module.css";

export default function Produtos() {
    return(
        <section>
            <h3>Nossos Produtos</h3>
            <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
            <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            
            <div className={styles.ContainerProduto}>
                <h4>Óculos de grau</h4>
                <p>R$ 500,00</p>
            </div>
            <div className={styles.ContainerProduto}>
                <h4>Óculos de transition</h4>
                <p>R$ 750,00</p>
            </div>
            <div className={styles.ContainerProduto}>
                <h4>Óculos de sol</h4>
                <p>R$ 700,00</p>
            </div>
            <div className={styles.ContainerProduto}>
                <h4>Óculos de infantil</h4>
                <p>R$ 500,00</p>
            </div>

            <h3>Todos os nossos produtos incluem:</h3>
            <ul>
                <li>Garantia de 1 ano</li>
                <li>Manutenção preventiva</li>
                <li>Descontos especiais na compra da segunda unidade</li>
                <li>Flexibilidade de pagamento</li>
            </ul>

        </section>
    );
}