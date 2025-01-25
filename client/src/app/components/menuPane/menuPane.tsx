import MenuBar from "./menuBar";
import Profile from "./profile";
import SearchBar from "./searchBar";

export default function MenuPane() {
  return (
    <div className="menu-pane h-16 grid grid-cols-[1fr_2fr_1fr]">
      <div className="col-start-1 col-end-2 flex items-center">
        <SearchBar />
      </div>
      <div className="col-start-2 col-end-3 flex items-center justify-center">
        <MenuBar />
      </div>
      <div className="bg-lime-500 col-start-3 col-end-4">
        <Profile />
      </div>
    </div>
  );
}