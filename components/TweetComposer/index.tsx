 "use client";
 
 import { useCallback, useMemo, useState } from "react";
 import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
 import { Button } from "@/components/ui/button";
 import { Image as ImageIcon, Smile, BarChart2, CalendarClock, MapPin } from "lucide-react";
 import { useCurrentUser } from "@/hooks/user";
 
 const MAX_LEN = 280;
 
 const TweetComposer: React.FC = () => {
   const { user } = useCurrentUser();
   const [text, setText] = useState("");
 
   const remaining = useMemo(() => MAX_LEN - text.length, [text]);
   const nearLimit = remaining <= 20;

   const handleSelectImage = useCallback(() => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();
   }, []);
 
   return (
     <div className="px-4 py-3 border-b border-border">
       <div className="flex items-start gap-3">
         <Avatar size="lg">
           <AvatarImage src={user?.profileImageUrl ?? undefined} alt={user ? `${user.firstName} ${user.lastName}` : "User"} />
           <AvatarFallback>
             {user ? `${user.firstName?.[0] ?? ""}${user.lastName?.[0] ?? ""}`.toUpperCase() : "U"}
           </AvatarFallback>
         </Avatar>
 
         <div className="flex-1 min-w-0">
           <textarea
             value={text}
             onChange={(e) => setText(e.target.value.slice(0, MAX_LEN))}
             placeholder="What is happening?!"
             className="w-full bg-transparent resize-none outline-none text-[20px] leading-7 text-foreground placeholder:text-muted-foreground min-h-16"
             rows={3}
           />
 
           <div className="mt-3 flex items-center justify-between">
             <div className="flex items-center gap-1 text-[#1d9bf0]">
               <button onClick={handleSelectImage} className="p-2 rounded-full hover:bg-[#1d9bf0]/10 transition" aria-label="Media">
                 <ImageIcon className="size-5" />
               </button>
               <button className="p-2 rounded-full hover:bg-[#1d9bf0]/10 transition" aria-label="Poll">
                 <BarChart2 className="size-5" />
               </button>
               <button className="p-2 rounded-full hover:bg-[#1d9bf0]/10 transition" aria-label="Emoji">
                 <Smile className="size-5" />
               </button>
               <button className="p-2 rounded-full hover:bg-[#1d9bf0]/10 transition" aria-label="Schedule">
                 <CalendarClock className="size-5" />
               </button>
               <button className="p-2 rounded-full hover:bg-[#1d9bf0]/10 transition" aria-label="Location">
                 <MapPin className="size-5" />
               </button>
             </div>
 
             <div className="flex items-center gap-3">
               <div className="text-xs tabular-nums">
                 <span className={nearLimit ? "text-rose-500" : "text-muted-foreground"}>
                   {remaining}
                 </span>
               </div>
               <Button
                 disabled={text.trim().length === 0}
                 className="rounded-full bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white px-5"
               >
                 Post
               </Button>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 };
 
 export default TweetComposer;
 
