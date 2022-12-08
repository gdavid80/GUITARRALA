import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/header.module.css'

const Header = () => {

    const router = useRouter()
    

  return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.barra} `}>
            {/*1opcion */}
            {/* <img src='/img/logo.svg'/> */}
            {/*2opcion */}
            {/* <img src={logo.src} /> */}
             {/*3opcion */}
             <Link href={'/'} legacyBehavior>
                    <a>
                        <Image src="/img/logo.svg" width={300} height={40} alt='imagen logotipo' />

                    </a>
                </Link>

             <nav className={styles.navegacion}>
             <Link href="/" legacyBehavior>
                        <a className={ router.pathname === '/' ? styles.active : ''}>
                            Inicio
                        </a>
                    </Link>

                    <Link href="/nosotros" legacyBehavior>
                        <a className={ router.pathname === '/nosotros' ? styles.active : ''}>
                            Nosotros
                        </a>
                    </Link>

                                        
                    <Link href="/tienda" legacyBehavior>
                        <a className={ router.pathname === '/tienda' ? styles.active : ''}>
                            Tienda
                        </a>
                    </Link>

                    <Link href="/blog" legacyBehavior>
                        <a className={ router.pathname === '/blog' ? styles.active : ''}>
                            Blog
                        </a>
                    </Link>

                </nav>
        </div>
    </header>
  )
}

export default Header