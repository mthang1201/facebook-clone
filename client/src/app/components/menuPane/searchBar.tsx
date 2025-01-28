export default function SearchBar() {
    return (
        <div className="flex items-center w-full">
            <button className="h-12 w-12 ml-3 mr-2">
                <img src="/facebook.png" alt="search"/>
            </button>
            <div className="flex items-center bg-zinc-700 hover:bg-zinc-600 w-full rounded-full h-10 mr-3">
                <svg className="ml-3" style={{fill:"#aaacb1"}} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
                <input placeholder="Search Facebook" className="h-10 pl-3 bg-zinc-700 hover:bg-zinc-600 rounded-full text-sm text-left w-full font-bold text-zinc-300"/>
            </div>
        </div>
    );
}