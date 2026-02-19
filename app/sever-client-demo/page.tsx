import ServerInfo from "../components/ServerInfo";
import Counter from "../components/Counter";

export default function SeverClientDemo() {
    return (
        <main style={{padding: "40px"}}>
            <h1>Server Client Demo</h1>
            <ServerInfo />
            <Counter />
        </main>
    )
}