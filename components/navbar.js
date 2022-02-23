import styles from "../styles/Navbar.module.css"

export default function Navbar() {
    return (
        <div className = {styles.Navbar}>
            <ul>
                <li>
                    <a href = "/">Home</a>
                </li>
                <li>
                    <a href = "/About">About</a>
                </li>

            </ul>
        </div>
    )
}