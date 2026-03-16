import FeedCard from "@/components/FeedCard";
import { Button } from "@/components/ui/button";
import { Bell, Bookmark, HashIcon, HomeIcon, MoreHorizontal, User } from "lucide-react";
import { BiEnvelope, BiMoney } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";

interface XSidebarItemProps {
  icon: React.ReactNode;
  title: string;
}

const xSidebarItems: XSidebarItemProps[] = [
  {
    icon: <HomeIcon className="text-foreground" size={20} />,
    title: "Home",
  },
  {
    icon: <HashIcon className="text-foreground" size={20} />,
    title: "Explore",
  },
  {
    icon: <Bell className="text-foreground" size={20} />,
    title: "Notifications",
  },
  {
    icon: <BiEnvelope className="text-foreground" size={20} />,
    title: "Messages",
  },
  {
    icon: <Bookmark className="text-foreground" size={20} />,
    title: "Bookmarks",
  },
  {
    icon: <BiMoney className="text-foreground" size={20} />,
    title: "Tweeter Blue",
  },
  {
    icon: <User className="text-foreground" size={20} />,
    title: "Profile",
  },
  {
    icon: <MoreHorizontal className="text-foreground" size={20} />,
    title: "More Options",
  },
];

export default function Home() {
  return (
    <div className="bg-background">
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-4 px-4">
          <div className="hover:bg-muted w-fit h-fit p-2 rounded-full cursor-pointer transition-all">
            <BsTwitterX className="text-foreground text-xl" />
          </div>
          <div className="mt-4">
            <ul>
              {xSidebarItems.map((item) => (
                <li key={item.title} className="flex items-center w-fit gap-4 hover:bg-muted px-3 py-2 rounded-full cursor-pointer transition-all">
                  {item.icon}
                  <span className="text-foreground text-base font-bold">{item.title}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <Button className="w-full bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white text-base font-bold py-4 rounded-full cursor-pointer transition-all">
                Tweet
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-r border-l border-border overflow-y-auto no-scrollbar">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
