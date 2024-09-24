"use client";

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-2 py-2">
        <Image
          className="object-cover rounded-full"
          src="/images/logo.jpg"
          alt="logo"
          width={50}
          height={60}
        />
        <p className="font-medium text-lg">Horror story</p>
      </div>
    </Link>
  );
};

export default Logo;
