import styles from "./Topo.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Topo () {
    return (
        <section className={styles.containerTopo}>
            <div className={styles.menu}>
                <Image src="/logo.png" alt="Logomarca" width={150} height={40}/>
                <nav className={styles.containerLINKS}>
                    <Link className={styles.links} href="#produtos">PRODUTOS</Link>
                    <Link className={styles.links} href="#sobre">SOBRE</Link>
                    <Link className={styles.links} href="#contato">CONTATO</Link>
                </nav>
            </div>
        </section>
    );
}