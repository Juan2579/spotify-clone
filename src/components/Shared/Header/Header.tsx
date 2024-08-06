"use client";

import { useRouter } from "next/navigation";

import Button from "../Button";
import { PlaylistCard } from "@/components/Playlist/PlaylistCard";

import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

export const Header = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const handleGoForward = () => {
    router.forward();
  };

  return (
    <header className="h-fit bg-gradient-to-b from-emerald-600 p-6">
      <div className="w-full flex items-center justify-between mb-4">
        <div className="hidden gap-x-2 items-center md:flex">
          <button
            onClick={handleGoBack}
            className="flex items-center justify-center transition hover:opacity-75 rounded-full bg-black"
          >
            <RxCaretLeft className="text-white" size={32} />
          </button>
          <button
            onClick={handleGoForward}
            className="flex items-center justify-center transition hover:opacity-75 rounded-full bg-black"
          >
            <RxCaretRight className="text-white" size={32} />
          </button>
        </div>
        <div className="flex items-center gap-x-2 md:hidden">
          <button className="flex items-center justify-center p-2 bg-white rounded-full transition hover:opacity-75">
            <HiHome size={24} className="text-black" />
          </button>
          <button className="flex items-center justify-center p-2 bg-white rounded-full transition hover:opacity-75">
            <BiSearch size={24} className="text-black" />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button className="bg-transparent text-neutral-300">
                Sign Up
              </Button>
            </div>
            <div>
              <Button className="bg-white px-6 py-2">Log in</Button>
            </div>
          </>
        </div>
      </div>

      <h1 className="text-white text-3xl font-semibold">Welcome back</h1>
      <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <PlaylistCard
          imageUrl="/images/liked.png"
          name="Liked Songs"
          href="/liked"
        />
      </div>
    </header>
  );
};
