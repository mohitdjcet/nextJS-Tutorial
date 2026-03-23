export default function Layout({children}:{children:React.ReactNode}){
    return(
        <div>
            <header style={{background:'#ddd',padding:"12px"}}>My Navbar</header>
            <main>
                {children}
            </main>
            <footer style={{background:'#ddd',padding:"12px"}}>My Footer</footer>
        </div>
    )
}