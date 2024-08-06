import { VscLibrary } from "react-icons/vsc";
import { GoPlus } from "react-icons/go";

export const Library = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="flex items-center gap-x-2">
          <VscLibrary className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-bold">Your Library</p>
        </div>
        <GoPlus
          className="text-neutral-400 cursor-pointer transition hover:text-white"
          size={22}
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">List of songs</div>
    </div>
  );
};
