// import Image from "next/image";


// export async function Avatar() {


//   return account.avatar ? (
//     <Image
//       width={40}
//       height={40}  
//       className="w-10 h-10 rounded-full mr-4"
//       src={account.avatar ??
//         "https://th.bing.com/th/id/OIP.inaUKK4nXGZLIqoxcnxLDQHaHa?rs=1&pid=ImgDetMain"}
//       alt={`Avatar of ${account.username}`} 
//     />
//   ) : (
//     <div
//       className="rounded-full bg-grey flex justify-center items-center text-white"
//       style={{ height: 40, width: 40 }}
//     >
//       {account.username.at(0)!.toUpperCase()}
//     </div>
//   );
// }

import Image from "next/image";

interface Props {
  username: string;
  imageURL?: string;
  size?: number;
}

export function Avatar({ size = 36, ...props }: Props) {
  return props.imageURL ? (
    <Image
      className="rounded-full"
      width={36}
      height={36}
      src={
        props.imageURL ??
        "https://th.bing.com/th/id/OIP.inaUKK4nXGZLIqoxcnxLDQHaHa?rs=1&pid=ImgDetMain"
      }
      alt={props.username}
    />
  ) : (
    <div
      className="rounded-full bg-grey flex justify-center items-center text-white"
      style={{ height: size, width: size }}
    >
      {props.username.at(0)!.toUpperCase()}
    </div>
  );
}
