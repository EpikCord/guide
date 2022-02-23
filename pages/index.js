import CodeBlock from "../components/codeblock"
import styles from "../styles/Home.module.css"

const messageCommandBotCode = `from EpikCord import Client, Intents # Import what we will need\nclient = Client("TOKEN", Intents().all()) # Create a Client instance, where token is the token for your Discord Bot, and lazily use all intents\n\n@client.event # The decorator that registers event handlers.\nasync def message_create(message): # EpikCord will pass in a parameter with type Message which represents the message sent\n    if message.content == "!hello": # If the message is !hello\n        await message.channel.send(content="Hello!" # Say hello back otherwise that's rude.\n\nclient.login() # Make the client login to Discord.`

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

                <p>TL;DR, the most basic bot uses the following code: {CodeBlock(messageCommandBotCode)}</p>
            </div>
 
        </div>
    )
}