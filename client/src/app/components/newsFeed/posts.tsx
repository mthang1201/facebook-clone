import Post from "@/app/components/newsFeed/post/post";

export default function Posts() {
    return (
        <div className="flex flex-col gap-4">
            <Post />
            <Post />
        </div>
    );
}