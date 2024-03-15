import styles from "./banner.module.css";


export default function Banner() {
    return(
        <section className={styles.ContainerBanner}>
            <div>
                <p>Preços baixos em</p>
                <h1>Óculos de Grau e de sol</h1>
                <p>você só encontra aqui</p>
            </div>
        </section>
    );
}