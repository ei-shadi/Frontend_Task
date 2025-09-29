import Image from "next/image";
import RightArrow from "../../../public/icons/arrow-right.png"


const Button = ({label="Click Me"}) => {
  return (
    <div className="bg-white rounded-lg py-4 px-6 text-[#0058FF] flex items-center justify-center gap-2 w-auto hover:bg-black hover:text-white cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.05]">
      <h3 className="text-sm md:text-[16px] font-bold">{label}</h3>
      <Image src={RightArrow} width={20} height={20} alt="arrow" />
    </div>
  );
};

export default Button;