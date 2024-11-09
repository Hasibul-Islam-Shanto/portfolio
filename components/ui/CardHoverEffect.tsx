import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id: number;
    title: string;
    description: string[];
    iconLists: string[];
    img: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 mt-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <motion.div
          key={item.id}
          className="relative group p-4 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <img src={item.img} alt={item.title} className="p-3 rounded-3xl" />
            <div className=" px-5 flex flex-col justify-start items-start space-y-2">
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <ul className="text-left text-[#BEC1DD] text-base space-y-2 py-2 list-disc px-3">
                {item.description.map((des, index) => (
                  <li key={index}>{des}</li>
                ))}
              </ul>
            </div>
            <motion.div className="w-full flex items-center justify-between py-2 px-5">
              <div className="flex items-center">
                {item.iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${5 * index + 2}px)`,
                    }}
                  >
                    <img src={icon} alt="icon5" className="p-2" />
                  </div>
                ))}
              </div>
              <Link
                href={item.link}
                className="flex justify-center items-center border-[1px] border-white/[.2] p-2 rounded-lg"
              >
                <p className="flex lg:text-base md:text-xs text-sm text-purple">
                  Github Link
                </p>
                <FaGithub className="ms-3" color="#CBACF9" />
              </Link>
            </motion.div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
