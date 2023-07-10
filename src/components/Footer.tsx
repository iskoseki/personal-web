import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className=" bottom-0 bg-black z-50 rounded-r-md fixed mb-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-8 items-center justify-between">
        <p className="text-white">Made with 💜 from Rosario.</p>
      </div>
    </footer>
  );
};

export default Footer;
