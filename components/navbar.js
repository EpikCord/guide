import styles from "../styles/Navbar.module.css"

export default function Navbar() {
    return (
        <div className = {styles.Navbar}>
            <ul>
                <li>
                    <a href = "/">Home</a>
                </li>
                <li>
                    <a href = "/getting-started">Getting Started</a>
                </li>
                <li>
                    <a href = "/commands">Commands</a>
                </li>
                <li>
                    <a href = "/events">Events</a>
                </li>
                <li>
                    <a href = "/message-components">Message Components</a>
                </li>
            </ul>
        </div>
    )
}