import { inyectionContainer } from "@/features/shared/infra/inyection-container";
import Image from "next/image";

export async function Avatar() {
  const { apiAccountRepository } = inyectionContainer();
  const account = await apiAccountRepository.getAccount();

  return (
    <Image
      width={40}
      height={40}  
      className="w-10 h-10 rounded-full mr-4"
      src={account.avatar ??
        "https://th.bing.com/th/id/OIP.inaUKK4nXGZLIqoxcnxLDQHaHa?rs=1&pid=ImgDetMain"}
      alt={`Avatar of ${account.username}`} 
    />
  );
}
