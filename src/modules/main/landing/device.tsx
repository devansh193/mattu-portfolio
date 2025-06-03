import Image from "next/image";

export const Device = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Image
        src="/device.jpg"
        alt="device"
        height={400}
        width={1000}
        className="w-full h-full grayscale rounded-3xl object-cover"
      />
    </div>
  );
};
