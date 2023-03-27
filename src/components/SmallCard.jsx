import down from "../images/icon-down.svg";
import up from "../images/icon-up.svg";
export default function SmallCard({ type, icon, stat, grow, today }) {
  return (
    <div className="flex flex-col p-8 bg-[#F0F2FA] dark:bg-[#252a41] hover:opacity-40 cursor-pointer gap-4 rounded-md">
      <div className="flex justify-between">
        <p className="font-bold text-[#63687E] dark:text-[#8b97c6]]">{type}</p>
        <img className="self-center" src={icon} />
      </div>
      <div className="flex justify-between gap-4 font-bold">
        <p className="text-[#1E202A] dark:text-white text-[2rem] md:text-[2.5rem] lg:text-[1.75rem] xl:text-[3rem]">{stat}</p>
        <div className="flex gap-1 items-center">
          <img className="self-center" src={grow ? up : down} />
          <p className={`${grow? "text-[#1db489]" : "text-[#dc414c]"} text-[.75rem] md:text-[1rem]`}>{today}%</p>
        </div>
      </div>
    </div>
  );
}
