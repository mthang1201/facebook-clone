export default function PostNewThings() {
    return (
        <div className="flex flex-col text-sm font-bold text-zinc-300">
            <div className="flex gap-2 m-3">
                <img className="bg-blue-300 rounded-full" src="https://api.dicebear.com/9.x/avataaars/svg" width="42" height="42" alt="profile" />
                <button className="rounded-full bg-zinc-700 hover:bg-zinc-600 text-left pl-3 w-full">What's on your mind?</button>
            </div>
            <div className="mx-3 border-t border-zinc-600" />
            {/* Options for post new things */}
            <div className="flex my-2 h-11 px-3">
                <button className="flex gap-2 items-center justify-center rounded-lg hover:bg-zinc-700 w-full">
                    <svg style={{fill:"#f02848"}} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-camera-video" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/>
                    </svg>
                    Live video
                </button>
                <button className="flex gap-2 items-center justify-center rounded-lg hover:bg-zinc-700 w-full">
                    <svg style={{fill:"#44be62"}} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-images" viewBox="0 0 16 16">
                        <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                        <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z"/>
                    </svg>
                    Photo/video
                </button>
                <button className="flex gap-2 items-center justify-center rounded-lg hover:bg-zinc-700 w-full">
                    <svg style={{fill:"#f7ba28"}} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-emoji-laughing" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M12.331 9.5a1 1 0 0 1 0 1A5 5 0 0 1 8 13a5 5 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5M7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5"/>
                    </svg>
                    Feeling/activity
                </button>
            </div>
        </div>
    );
}