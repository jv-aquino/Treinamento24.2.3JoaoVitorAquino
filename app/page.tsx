import SideBar from "@/components/SideBar/SideBar";
import MainFeed from "@/components/MainFeed/MainFeed";
import News from "@/components/News/News";

export default function Home() {
  return (
    <>
      <div className="max-w-full relative flex">
        <SideBar />
        
        <MainFeed />

        <News />
      </div>
    </>
  );
}
