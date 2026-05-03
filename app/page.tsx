"use client";

import { graphqlClient } from "@/clients/api";
import FeedCard from "@/components/FeedCard";
import TweetComposer from "@/components/TweetComposer";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";
import { useCurrentUser } from "@/hooks/user";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useQueryClient } from "@tanstack/react-query";
import { Bell, Bookmark, HashIcon, HomeIcon, MoreHorizontal, User } from "lucide-react";
import { useCallback } from "react";
import toast from "react-hot-toast";
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

  const { user } = useCurrentUser();
  const queryClient = useQueryClient();

  const handleLoginWithGoogle = useCallback(async (cred: CredentialResponse) => {
    const googleToken = cred.credential;
    if (!googleToken) return toast.error("Google token not found");

    const { verifyGoogleToken } = await graphqlClient.request(verifyUserGoogleTokenQuery, { token: googleToken });
    if (!verifyGoogleToken) return toast.error("Google token verification failed");
    toast.success("Google token verification successful");
    console.log(verifyGoogleToken);

    if (verifyGoogleToken) {
      window.localStorage.setItem("__x_token__", verifyGoogleToken);
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
    }
  }, []);

  return (
    <div className="bg-background">
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-4 px-4 flex flex-col justify-between h-screen">
          <div>
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

          <div className="mb-4">
            <div className="flex items-center justify-between gap-3 hover:bg-muted px-3 py-2 rounded-full cursor-pointer transition-all">
              <div className="flex items-center gap-3 min-w-0">
                <Avatar size="lg">
                  <AvatarImage src={user?.profileImageUrl ?? undefined} alt={(user ? `${user.firstName} ${user.lastName}` : "User")} />
                  <AvatarFallback>
                    {user ? `${user.firstName?.[0] ?? ""}${user.lastName?.[0] ?? ""}`.toUpperCase() : "U"}
                  </AvatarFallback>
                  <AvatarBadge>
                    <BsTwitterX />
                  </AvatarBadge>
                </Avatar>
                <div className="min-w-0">
                  <div className="text-foreground text-sm font-bold truncate">
                    {user ? `${user.firstName} ${user.lastName}` : "Guest"}
                  </div>
                  <div className="text-muted-foreground text-sm truncate">
                    {user ? user.email : "@guest"}
                  </div>
                </div>
              </div>
              <MoreHorizontal className="text-muted-foreground" size={18} />
            </div>
          </div>
        </div>
        <div className="col-span-6 border-r border-l border-border overflow-y-auto no-scrollbar">
          <TweetComposer />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3">
          {!user && (
            <div className="p-4">
              <div className="bg-background border border-border rounded-2xl p-6">
                <h2 className="text-foreground text-2xl font-extrabold mb-2">New to X?</h2>
                <p className="text-muted-foreground text-sm mb-4">Sign up now to get your own personalized timeline!</p>
                <div className="space-y-3">
                  <GoogleLogin onSuccess={handleLoginWithGoogle} />
                  {/* <Button className="w-full bg-white hover:bg-gray-100 text-black border border-gray-300 rounded-full font-semibold">
                </Button> */}
                  {/* <Button className="w-full bg-white hover:bg-gray-100 text-black border border-gray-300 rounded-full font-semibold">
                  Sign up with Apple
                </Button> */}
                  <div className="flex items-center gap-2 my-2">
                    <div className="flex-1 h-px bg-border" />
                    <span className="text-xs text-muted-foreground">or</span>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  <Button className="w-full bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white rounded-full font-semibold">
                    Create account
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  By signing up, you agree to the <a href="#" className="text-[#1d9bf0] hover:underline">Terms of Service</a> and <a href="#" className="text-[#1d9bf0] hover:underline">Privacy Policy</a>, including <a href="#" className="text-[#1d9bf0] hover:underline">Cookie Use</a>.
                </p>
                <div className="mt-6">
                  <p className="text-muted-foreground text-sm">
                    Have an account already? <a href="#" className="text-[#1d9bf0] hover:underline font-semibold">Sign in</a>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
