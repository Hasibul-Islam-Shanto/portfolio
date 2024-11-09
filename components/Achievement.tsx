"use client";
import achievements from "@/constants/achievement";
import { Button } from "./ui/MovingBorder";

const Achievement = () => {
  const handleOpenImage = (imageUrl: string) => {
    window.open(imageUrl, "_blank");
  };

  return (
    <>
      <div className="py-20 w-full">
        <h1 className="heading">
          Achievements & <span className="text-purple">Publications</span>
        </h1>

        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
          {achievements.map((item) => (
            <Button
              key={item.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <div
                onClick={() => handleOpenImage(item.imageUrl)}
                className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-5 gap-2"
              >
                <div className="lg:ms-5 space-y-2">
                  <h1 className="text-start text-lg md:text-2xl font-bold">
                    {item.title}
                  </h1>
                  <p className="text-start text-lg font-bold">
                    {item.achievement}
                  </p>
                  <p className="text-start text-md text-white-100 mt-3 font-semibold">
                    {item.description}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Achievement;
