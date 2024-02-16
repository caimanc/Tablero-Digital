import  {Button} from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        esta solo se debe ver si uno esta logeado
      </div>
      <div>
        <UserButton />
      </div>

    </div>
  );
}
