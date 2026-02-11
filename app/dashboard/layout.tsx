import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    return(
        <section style={{padding:12, background:"#a69e9e"}}>
            <aside style={{padding:12, background:"#c9c1c1"}}>
                <h2>Dashboard Sidebar</h2>
                <ul>
                    <li>Overview</li>
                    <li>Analytics</li>
                    <li>Settings</li>
                </ul>
            </aside>
            <div style={{padding:12}}>
                {children}
            </div>
        </section>
    )
}