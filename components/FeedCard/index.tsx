import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { BarChart3, Bookmark, Heart, MessageCircle, MoreHorizontal, Repeat2, Upload } from 'lucide-react'

const FeedCard: React.FC = () => {
  return (
    <div className="px-4 py-3 border-b border-border hover:bg-muted/20 transition-colors">
      <div className="flex items-start gap-3">
        <Avatar size="lg">
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/53485762?v=4"
            alt="Rajesh Biswas"
          />
          <AvatarFallback>RB</AvatarFallback>
        </Avatar>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-foreground font-semibold truncate">
                Rajesh Biswas
              </span>
              <span className="text-muted-foreground truncate">
                @rajesh_biswas
              </span>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">2h</span>
            </div>
            <button
              aria-label="More"
              className="rounded-full p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition"
            >
              <MoreHorizontal className="size-5" />
            </button>
          </div>

          <div className="mt-1.5">
            <p className="text-foreground text-[15px] leading-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
              reiciendis porro sint soluta dolores aspernatur temporibus maxime!
              Non explicabo inventore labore fugiat harum culpa quam in velit
              deleniti. Cumque, beatae.
            </p>
          </div>

          <div className="mt-3 overflow-hidden rounded-2xl border border-border bg-muted/20 aspect-[16/9]" />

          <div className="mt-2 grid grid-cols-5">
            <div className="flex items-center gap-1 text-muted-foreground hover:text-sky-500">
              <button
                aria-label="Reply"
                className="rounded-full p-2 hover:bg-sky-500/10 transition"
              >
                <MessageCircle className="size-4" />
              </button>
              <span className="text-xs">20</span>
            </div>

            <div className="flex items-center gap-1 text-muted-foreground hover:text-emerald-500">
              <button
                aria-label="Repost"
                className="rounded-full p-2 hover:bg-emerald-500/10 transition"
              >
                <Repeat2 className="size-4" />
              </button>
              <span className="text-xs">14</span>
            </div>

            <div className="flex items-center gap-1 text-muted-foreground hover:text-rose-500">
              <button
                aria-label="Like"
                className="rounded-full p-2 hover:bg-rose-500/10 transition"
              >
                <Heart className="size-4" />
              </button>
              <span className="text-xs">56</span>
            </div>

            <div className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
              <button
                aria-label="Views"
                className="rounded-full p-2 hover:bg-muted/40 transition"
              >
                <BarChart3 className="size-4" />
              </button>
              <span className="text-xs">1,245</span>
            </div>

            <div className="flex items-center justify-end gap-1 text-muted-foreground">
              <button
                aria-label="Bookmark"
                className="rounded-full p-2 hover:bg-muted/40 hover:text-foreground transition"
              >
                <Bookmark className="size-4" />
              </button>
              <button
                aria-label="Share"
                className="rounded-full p-2 hover:bg-muted/40 hover:text-foreground transition"
              >
                <Upload className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedCard
