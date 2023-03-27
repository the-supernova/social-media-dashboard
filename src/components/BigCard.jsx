import down from "../images/icon-down.svg";
import up from "../images/icon-up.svg";
export default function BigCard({ bg, icon, user, stat, grow, today }) {
  return (
    <div className={`flex ${bg} rounded-md hover:opacity-40 cursor-pointer`}>
      <div className="self-end gap-6 w-full h-[97%] bg-[#F0F2FA] dark:bg-[#252a41] rounded-b-md flex flex-col items-center py-4 md:py-8 text-[#63687E] dark:text-[#8b97c6]">
        <div className="flex items-center text-[.75rem] md:text-[1rem] gap-2 font-bold">
          <img className="self-center" src={icon} />
          <p>{user}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[#1E202A] dark:text-[#FFFFFF] text-[3.5rem] sm:text-[4rem] md:text-[4.5rem] xl:text-[5rem] font-bold">{stat}</p>
          <p className="uppercase tracking-[.25em] md:tracking-[.5em]">Followers</p>
        </div>
        <div className="flex gap-1 text-[.75rem] md:text-[1rem]">
          <img className="self-center" src={grow ? up : down} />
          <p className={`${grow? "text-[#1db489]" : "text-[#dc414c]"} font-bold`}>
            {today} Today
          </p>
        </div>
      </div>
    </div>
  );
}
