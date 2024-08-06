import { NewestSongs } from "@/components/NewestSongs/NewestSongs";
import { Box } from "@/components/Shared/Box";
import { Header } from "@/components/Shared/Header/Header";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Box className="h-full flex flex-col overflow-y-auto overflow-hidden">
        <Header />
        <NewestSongs />
      </Box>
    </main>
  );
}
