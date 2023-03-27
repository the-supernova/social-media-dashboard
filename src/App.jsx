import { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import BigCard from "./components/BigCard";
import SmallCard from "./components/SmallCard";

import facebook from "./images/icon-facebook.svg";
import instagram from "./images/icon-instagram.svg";
import twitter from "./images/icon-twitter.svg";
import youtube from "./images/icon-youtube.svg";

function App() {
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    if (checked) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [checked])

  return (
    <div className="flex flex-col gap-8 px-8 sm:px-10 md:px-12 lg:px-16 py-8">
      <nav className="w-full flex flex-col sm:flex-row gap-4 justify-between text-[#63687E] dark:text-[#8b97c6] font-bold">
        <div className="flex flex-col items-start">
          <h1 className="text-[#1E202A] dark:text-white text-[1.5rem] lg:text-[2.5rem]">
            Social Media Dashboard
          </h1>
          <p>Total Followers: 23,004</p>
        </div>
        <div className="flex gap-4">
          <p>{checked ? 'Dark' : 'Light'} Mode</p>
          <DarkModeSwitch
            checked={checked}
            onChange={() => setChecked(!checked)}
            sunColor={"#1E202A"}
          />
        </div>
      </nav>

      <div className="grid sm:grid-rows-2 sm:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 gap-4 md:gap-8">
        <BigCard
          bg={"bg-[#198ff5]"}
          icon={facebook}
          user={"@nathanf"}
          stat={1987}
          grow={true}
          today={12}
        />
        <BigCard
          bg={"bg-[#1ca0f2]"}
          icon={twitter}
          user={"@nathanf"}
          stat={1044}
          grow={true}
          today={99}
        />
        <BigCard
          bg={"bg-gradient-to-r from-[#fdc468] to-[#df4996]"}
          icon={instagram}
          user={"@realnathanf"}
          stat={"11k"}
          grow={true}
          today={1099}
        />
        <BigCard
          bg={"bg-[#c4032a]"}
          icon={youtube}
          user={"Nathan F."}
          stat={8239}
          grow={false}
          today={144}
        />
      </div>

      <h2 className="text-[#1E202A] dark:text-white text-[1.5rem] md:text-[2rem] font-bold">
        Overview - Today
      </h2>

      <div className="grid grid-rows-8 sm:grid-rows-4 lg:grid-rows-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        <SmallCard
          type={"Page Views"}
          icon={facebook}
          stat={87}
          grow={true}
          today={3}
        />
        <SmallCard
          type={"Likes"}
          icon={facebook}
          stat={52}
          grow={false}
          today={2}
        />
        <SmallCard
          type={"Likes"}
          icon={instagram}
          stat={5462}
          grow={true}
          today={2257}
        />
        <SmallCard
          type={"Profile Views"}
          icon={instagram}
          stat={"52k"}
          grow={true}
          today={1375}
        />
        <SmallCard
          type={"Retweets"}
          icon={twitter}
          stat={117}
          grow={true}
          today={303}
        />
        <SmallCard
          type={"Likes"}
          icon={twitter}
          stat={507}
          grow={true}
          today={553}
        />
        <SmallCard
          type={"Likes"}
          icon={youtube}
          stat={107}
          grow={false}
          today={19}
        />
        <SmallCard
          type={"Total Views"}
          icon={youtube}
          stat={1407}
          grow={false}
          today={12}
        />
      </div>
    </div>
  );
}

export default App;
