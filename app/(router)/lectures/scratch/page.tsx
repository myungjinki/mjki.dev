import Link from "next/link";

import { scratch } from "../utils/objects";

export default function ScratchPage() {
  return (
    <div className="flex flex-col gap-8">
      {scratch.map((game) => (
        <Link key={game.id} href={`./scratch/${game.id}`}>
          {game.title}
        </Link>
      ))}
    </div>
  );
}
