"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { flowerImageUrl } from "@/lib/cloudinary";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#fef6f0]">
      <motion.div
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, ease: [0.22, 0.0, 0.36, 1] }}
          className="w-36 h-36 rounded-full overflow-hidden"
        >
          <Image
            src={flowerImageUrl("rose")}
            alt=""
            width={144}
            height={144}
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
        className="mt-10 text-xs tracking-widest uppercase text-[var(--color-ink-muted)]"
        style={{ fontFamily: "var(--font-body)" }}
      >
        gathering flowers
      </motion.p>
    </div>
  );
}
