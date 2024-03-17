import styles from "./Sobre.module.css";

export default function Sobre() {
    return(
        <section>
            <h3>Quem somos nós?</h3>
            <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Ótica vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>


            <div className={styles.ContainerSobreINFOS}>
                <div>
                    <h4>Nossas Filiais</h4>
                    <p>Hoje temos mais de 20 filias pelo Brasil e na América</p>
                </div>
                <div>
                    <h4>Atendimento Flexível</h4>
                    <p>Nossa equipe é treinada para te atender com clareza e atenção.</p>
                </div>
            </div>

        </section>
    );
}