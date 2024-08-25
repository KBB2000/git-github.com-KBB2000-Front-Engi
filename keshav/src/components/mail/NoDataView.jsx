import { useEffect } from "react";
import Nomail from "../../assets/nomail.svg";
import axios from "axios";

function NoDataView() {

    useEffect(() => {
        const reset = async() => {
        const token = localStorage.getItem("token");
        await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
          headers: {
            Authorization: token,
          },
        });
      }
      reset();
    }, []);

      
  return (
    <div className="h-screen flex justify-center items-center flex-col dark:text-white dark:bg-black text-[#5B5F66] bg-[#ECEFF3] ">
      <div>
        <img src={Nomail}></img>
      </div>
      <div className="my-8 text-2xl">
        It’s the beginning of a legendary sales pipeline
      </div>
      <div className="text-center dark:text-[#9E9E9E] text-[#5B5F66]">
        When you have inbound E-mails<br/> you’ll see them here
      </div>
    </div>
  );
}

export default NoDataView;