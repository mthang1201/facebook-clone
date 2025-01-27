import Header from "./header";
import Content from "./content";
import Footer from "./footer";

export default function Post() {
    return (
        <div className="bg-zinc-800 rounded-lg">
            <Header />
            <Content />
            <Footer />
        </div>
    );
}