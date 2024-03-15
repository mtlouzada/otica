import { Link } from "react-router-dom";
import styles from "./Topo.module.css";
import Image from "next/image";
import Logo from "../../public/logo.png";

export default function Topo () {
    return (
        <section>
            <div className={styles.menu}>
                <Image src={Logo} alt="Logomarca" />
                <nav className={styles.links}>
                    <Link href="#produtos">PRODUTOS</Link>
                    <Link href="#sobre">SOBRE</Link>
                    <Link href="#contato">CONTATO</Link>
                </nav>
            </div>
        </section>
    );
}