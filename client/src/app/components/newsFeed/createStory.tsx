export default function CreateStory() {
    return (
        <button className="relative">
            <img className="bg-blue-300 rounded-lg w-28 h-52" src="https://api.dicebear.com/9.x/avataaars/svg" alt="profile" />
            <div className="absolute bottom-2 w-28 h-10 bg-zinc-800" />
            <div className="absolute bottom-0 w-28 rounded-lg h-12 bg-zinc-800" />
            <div className="absolute bottom-7 left-9 w-10 h-10 rounded-full bg-zinc-800" />
            <div className="absolute bottom-8 left-10 w-8 h-8 rounded-full bg-blue-500" />
            <div className="absolute bottom-10 left-[55px] w-[2px] h-4 rounded-lg bg-white" />
            <div className="absolute bottom-[47px] left-12 w-4 h-[2px] rounded-lg bg-white" />
        </button>
    );
}