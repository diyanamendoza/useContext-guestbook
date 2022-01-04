import Header from "../../components/Layout/Header";

export default function Layout({ children }) {
    return (
        <>
           <Header/>
           <img src='journal-2.jpg' alt='journal-background' />
           <main>{children}</main>
        </>
    )
}
