import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="relative top-0 right-0 left-0 z-[100] py-5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:w-full md:px-6">
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold text-white lg:text-4xl">
            NETCLONE
          </h1>
        </div>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
