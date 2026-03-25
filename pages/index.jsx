import styles from "@/styles/Home.module.css";

export default function Home(){
    return(
        <div>
            <h1 style={{color:"green"}}>Home Page</h1>
            <button className={styles.button}>Click me</button>
        </div>
    )
}