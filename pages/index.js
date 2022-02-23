import CodeBlock from "../components/codeblock"
import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div>
            <div>
                <h1>EpikCord Guide</h1>
                <p className = {styles.subheadding}> Welcome to the EpikCord Guide! </p>

            </div>
 
            <div className = {styles.text}>
                <p>This guide will help you get started using EpikCord.py as there is no documentation right now.</p>
                <p>If you have any questions, feel free to contact us on Discord <a target = "blank" href="https://discord.gg/4R473R73kQ">here</a>!</p>
            </div>
 
        </div>
    )
}