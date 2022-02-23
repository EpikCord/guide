import Link from 'next/link';
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
    return (
        <div className = {styles.Navbar}>
            <ul>
                <li>
                    <Link href = "/">Home</Link>
                </li>
                <li>
                    <Link href = "/getting-started">Getting Started</Link>
                </li>
                <li>
                    <Link href = "/commands">Commands</Link>
                </li>
                <li>
                    <Link href = "/events">Events</Link>
                </li>
                <li>
                    <Link href = "/message-components">Message Components</Link>
                </li>
            </ul>
        </div>
    )
}