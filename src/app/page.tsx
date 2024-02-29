import Image from "next/image";
import banner from "../../public/banner2.png"
import DynamicBlur from "@/components/DynamicBlur";

export default function Home() {
  return (
    <main className="flex items-center justify-center mt-28 h-[1000px] px-10">
      <div className="flex flex-col gap-2">
        <h2>Static Blur Image</h2>
        <div className="overflow-hidden">
          <Image src={banner} alt="image" height={500} width={400} placeholder="blur"/>
        </div>
        <div className="flex gap-2 ">
          <DynamicBlur src={"https://picsum.photos/id/237/200/300"} />
          <DynamicBlur src={"https://foresight.sparklin.com/wp-content/uploads/2023/07/AirDrop-2-scaled.webp"} />
          <DynamicBlur src={"https://foresight.sparklin.com/wp-content/uploads/2023/10/lynettew-150x150.jpg"} />
          <DynamicBlur src={"https://foresight.sparklin.com/wp-content/uploads/2023/10/dex-ezekiel-IxDPZ-AHfoI-unsplash-150x150.jpg"} />
        </div>
      </div>
    </main>
  );
}
