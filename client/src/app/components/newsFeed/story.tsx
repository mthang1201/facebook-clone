export default function Story() {
    return (
        <button className="relative">
            <img className="bg-blue-300 rounded-lg w-28 h-52" src="https://api.dicebear.com/9.x/avataaars/svg" alt="profile" />
            <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-blue-500" />
            <img className="absolute top-4 left-4 w-8 h-8 bg-blue-300 rounded-full" src="https://api.dicebear.com/9.x/avataaars/svg" alt="profile" />
        </button>
    );
}