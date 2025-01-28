export default function Header() {
    return (
        <div className="flex p-3">
            <div className="flex w-full h-9 gap-2">
                <button>
                    <img className="bg-blue-300 rounded-full" src="https://api.dicebear.com/9.x/avataaars/svg" width="36" height="36" alt="profile" />
                </button>
                <div className="flex flex-col items-start">
                    <button className="text-sm">
                        Phan Hiền
                    </button>
                    <div className="h-full" />
                    <button className="text-zinc-300 text-xs">
                        2h
                    </button>
                </div>
            </div>
            <button className="rounded-full hover:bg-zinc-700">
                <svg className="mx-2" style={{fill:"#aaacb1"}}  xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                </svg>
            </button>
            <button className="rounded-full hover:bg-zinc-700">
                <svg className="mx-2" style={{fill:"#aaacb1"}} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
            </button>
        </div>
    );
}