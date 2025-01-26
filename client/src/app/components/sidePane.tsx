export default function SidePane() {
    return (
        <div className="flex flex-col ml-2 mt-4">
            <div className="flex flex-col items-start">
                <button className="rounded-lg flex items-center h-14 w-full gap-4">
                    <img className="bg-blue-300 rounded-full ml-2" src="https://api.dicebear.com/9.x/avataaars/svg" width="28" height="28" alt="profile" />
                    Guest
                </button>
                {/* <button className="flex items-center h-14 w-full gap-4">
                    <img src="/friends.png" style={{fill:"#1d8ae5"}} className="w-7 h-7 ml-2" alt="friends"/>
                    Friends
                </button> */}
                <button className="rounded-lg flex items-center h-14 w-full gap-4">
                    <svg style={{fill:"#1d8ae5"}} className="ml-2" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                    </svg>
                    Memories
                </button>
                <button className="rounded-lg flex items-center h-14 w-full gap-4">
                    <svg style={{fill:"#1d8ae5"}} className="ml-2" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/>
                    </svg>
                    Saved
                </button>
                {/* <button className="rounded-lg flex items-center h-14 w-full gap-4">
                    <img src="/groups.png" style={{fill:"#1d8ae5"}} className="w-7 h-7 ml-2" alt="friends"/>
                    Groups
                </button> */}
                <button className="rounded-lg flex items-center h-14 w-full gap-4">
                    <svg style={{fill:"#1d8ae5"}} className="ml-2" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"/>
                    </svg>
                    Video
                </button>
                <button className="rounded-lg flex items-center h-14 w-full gap-4">
                    <svg style={{fill:"#1d8ae5"}} className="ml-2" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5m2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5"/>
                    </svg>
                    Marketplace
                </button>
                <button className="rounded-lg flex items-center h-14 w-full gap-4">
                    <svg style={{fill:"#1d8ae5"}} className="ml-2" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm1.5 2.5c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1 0-2m0 4a6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1 0-2m.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                    </svg>
                    Feeds
                </button>
                <button className="rounded-lg flex items-center h-14 w-full gap-4">
                    <svg style={{fill:"#aaacb1"}} className="ml-2" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
                    </svg>
                    See more
                </button>
            </div>
            <div className="mx-3 border-t border-zinc-700" />
            <div className="flex flex-col">
                <div className="text-zinc-300 font-bold rounded-lg flex items-center pt-3 pb-1 w-full gap-4 pl-2">
                    Your shortcuts
                </div>
                <div className="flex flex-col items-start">
                    <button className="rounded-lg flex items-center h-14 w-full gap-4 pl-2">
                        <svg style={{fill:"#aaacb1"}} xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/>
                        </svg>
                        CLB Tuần Phở
                    </button>
                    <button className="rounded-lg flex items-center h-14 w-full gap-4 pl-2">
                        <svg style={{fill:"#aaacb1"}} xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/>
                        </svg>
                        AWS Study Group
                    </button>
                    <button className="rounded-lg flex items-center h-14 w-full gap-4 pl-2">
                        <svg style={{fill:"#aaacb1"}} xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/>
                        </svg>
                        BLEND & RETOUCH
                    </button>
                    <button className="rounded-lg flex items-center h-14 w-full gap-4 pl-2">
                        <svg style={{fill:"#aaacb1"}} xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/>
                        </svg>
                        J2TEAM Community
                    </button>
                </div>
            </div>
        </div>
    );
}