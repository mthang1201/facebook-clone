export default function SidePane() {
    return (
        <div className="flex flex-col bg-purple-400 ml-1 h-full">
            <div className="flex flex-col items-start">
                <button className="flex items-center h-14 w-full gap-4">
                    Friends
                </button>
                <button className="rounded-lg flex items-center h-14 w-full gap-4 bg-red-500">
                    <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                    </svg>
                    Memories
                </button>
                <button className="rounded-lg flex items-center h-14 w-full gap-4">
                    <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/>
                    </svg>
                    Saved
                </button>
                <button className="rounded-lg flex items-center h-14 w-full gap-4">
                    Groups
                </button>
                <button className="rounded-lg flex items-center h-14 w-full gap-4">
                    Video
                </button>
                <button className="rounded-lg flex items-center h-14 w-full gap-4">
                    Marketplace
                </button>
                <button className="rounded-lg flex items-center h-14 w-full gap-4">
                    Feeds
                </button>
                <button className="rounded-lg flex items-center h-14 w-full gap-4">
                    See more
                </button>
            </div>
            <div className="mx-3 border-t border-zinc-700" />
            <div className="bg-red-400">
                <div>
                    Your shortcuts
                </div>
                <div className="flex flex-col items-start bg-yellow-700">
                    {/* <button className="rounded-lg flex items-center h-14 w-full gap-4">
                        Satorial Guys
                    </button>
                    <button className="rounded-lg flex items-center h-14 w-full gap-4">
                        AWS Study Group
                    </button>
                    <button className="rounded-lg flex items-center h-14 w-full gap-4">
                        BLEND & RETOUCH
                    </button>
                    <button className="rounded-lg flex items-center h-14 w-full gap-4">
                        J2TEAM Community
                    </button> */}
                </div>
            </div>
        </div>
    );
}