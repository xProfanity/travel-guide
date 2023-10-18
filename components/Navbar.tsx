import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
            <Image
                src={"/hilink-logo.svg"}
                alt="logo"
                width={74}
                height={29}
            />
        </Link>
    </div>
  )
}
