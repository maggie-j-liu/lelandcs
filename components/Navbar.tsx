import Link from "next/link";
const Navbar = () => {
  return (
    <h2
      className={
        "font-mono xs:vertical-text font-medium w-max text-2xl sm:text-3xl md:text-4xl text-center fixed top-2 left-4 xs:left-auto xs:right-4 xs:top-4"
      }
    >
      <Link href="/">
        <a className="hover:light-gradient">Home.</a>
      </Link>{" "}
      <Link href="/projects">
        <a className="hover:light-gradient">Projects.</a>
      </Link>{" "}
      <span className="text-sm hidden xs:inline">Leland CS Club</span>
    </h2>
  );
};
export default Navbar;
