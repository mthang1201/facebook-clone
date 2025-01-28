import Story from "@/app/components/newsFeed/story";
import CreateStory from "@/app/components/newsFeed/createStory";

export default function Stories() {
    return (   
        <div className="w-[548px] flex gap-2 overflow-x-auto overflow-y-hidden scroll-snap-x snap-mandatory">
            <div className="rounded-lg w-28 h-52 snap-start shrink-0">
                <CreateStory />
            </div>
            <div className="rounded-lg w-28 h-52 snap-start shrink-0">
                <Story />
            </div>
            <div className="rounded-lg w-28 h-52 snap-start shrink-0">
                <Story />
            </div>
            <div className="rounded-lg w-28 h-52 snap-start shrink-0">
                <Story />
            </div>
            <div className="rounded-lg w-28 h-52 snap-start shrink-0">
                <Story />
            </div>
            <div className="rounded-lg w-28 h-52 snap-start shrink-0">
                <Story />
            </div>
            <div className="rounded-lg w-28 h-52 snap-start shrink-0">
                <Story />
            </div>
        </div>
    );
}