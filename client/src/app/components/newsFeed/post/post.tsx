import Header from "./header";
import Content from "./content";
import Footer from "./footer";

export default function Post() {
    return (
        <div className="post">
            <Header />
            <Content />
            <Footer />
        </div>
    );
}