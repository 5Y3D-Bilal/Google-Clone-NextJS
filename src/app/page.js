import HomeHeader_ from "@/components/HomeHeader_";
import HomeSearch_ from "@/components/HomeSearch_";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header Component */}
      <HomeHeader_ />
      <div className="flex flex-col items-center mt-24">
        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png' alt="Google Lable" width={300}
          height={100} />
        <HomeSearch_ />
      </div>
    </>
  );
}
