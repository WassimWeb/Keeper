import notes from "../notes";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

export default function App() {

    return (
        <>
            <Header />
            <Note notes={notes} />
            <Footer />
        </>
    )

}
