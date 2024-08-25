import { useEffect, useState } from "react";
import axios from "axios";
import InboxItem from './InboxItem';
import Inbox from "./Inbox";
import InboxRightView from "./InboxRIghtView";

function InboxView() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectMailId, setSelectMailId] = useState(null);
  console.log(selectMailId);
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setData(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }, 2500);
  
    return () => clearInterval(interval);
  }, []);
  
  const loadMail = async (mailId) => {
    setSelectMailId(mailId);
  };

  
  if(loading){
    return (
      <div className="bg-[#ECEFF3] dark:bg-black dark:text-white text-[#5B5F66] flex h-screen w-full justify-center items-center">
        Loading ...
      </div>
    )
  } else{
    return (
      <div className="bg-[#ECEFF3] dark:bg-black text-white pt-16 flex w-full  h-screen">
        <div className="w-1/4 ">
          <InboxItem data={data} loadMail={loadMail} />
        </div>
        <div className="w-2/4">
          <Inbox selectMailId={selectMailId} />
        </div>
        <div className="w-1/4">
          <InboxRightView />
        </div>
      </div>
    )
  }

}

export default InboxView;