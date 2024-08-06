import Image from "next/image";
import { FaPlay } from "react-icons/fa";

interface PlaylistCardProps {
  name: string;
  imageUrl: string;
  href: string;
}

export const PlaylistCard: React.FC<PlaylistCardProps> = ({
  name,
  imageUrl,
  href,
}) => {
  return (
    <button className="relative group flex items-center gap-x-4 pr-4 overflow-hidden rounded-md bg-neutral-100/10 transition hover:bg-neutral-100/20">
      <div className="relative min-h-16 min-w-16">
        <Image src={imageUrl} alt={name} className="object-cover" fill />
      </div>
      <p className="font-bold truncate py-5">{name}</p>
      <div className="absolute right-5 flex items-center justify-center p-4 rounded-full bg-green-500 opacity-0 transition drop-shadow-sm group-hover:opacity-100 hover:scale-105">
        <FaPlay size={12} className="text-black" />
      </div>
    </button>
  );
};
