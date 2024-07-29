import Banner from "./components/Banner";
import Information from "./components/Information";
import BrokerInformation from "./components/BrokerInformation";
import Project from "./components/Project";
import Storage from "./components/Storage";
import ActiveModules from "./components/ActiveModules";
import { motion } from "framer-motion";
const ProfileOverview = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
     className="flex w-full flex-col gap-5">
      <div className="w-full mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
        <div className="col-span-6 lg:!mb-0">
          <Banner />
        </div>

        {/* <div className="col-span-3 lg:!mb-0">
          <Storage />
        </div> */}

        <div className="z-0 col-span-6 lg:!mb-0">
          <ActiveModules />
        </div>
      </div>
      {/* all project & ... */}

      <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
      <div className="col-span-6  lg:mb-0">
          <BrokerInformation />
        </div>
        <div className="col-span-6 lg:mb-0">
          <Information />
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileOverview;
