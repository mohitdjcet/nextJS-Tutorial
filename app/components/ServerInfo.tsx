export default function ServerInfo() {
    const severTime = new Date().toLocaleTimeString();

    return (
        <div>
            <h1>Server Time: {severTime}</h1>
        </div>
    )
}