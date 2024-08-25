import { IoIosSend } from "react-icons/io";
import { IoMailOpen } from "react-icons/io5";
import mail from "../../assets/mail.svg";

function InboxRightView() {
  return (
    <div className="h-full border-l-2 bg-white dark:bg-black dark:border-[#33383F] border-[#E0E0E0] overflow-y-scroll no-scrollbar px-2">
      <div className="mt-5 rounded-lg py-2 pl-4 text-black dark:text-white bg-[#ECEFF3] dark:bg-[#23272C]">
        Lead Details
      </div>

      <div className="my-10 px-6 space-y-6 text-[#637381] dark:text-white">
        {[
          { label: "Name", value: "Orlando" },
          { label: "Contact No", value: "+54-9062827869" },
          { label: "Email ID", value: "orlando@gmail.com" },
          { label: "Linkedin", value: "linkedin.com/in/timvadde/" },
          { label: "Company Name", value: "Reachinbox" },
        ].map((item, index) => (
          <div key={index} className="flex justify-between text-sm">
            <div>{item.label}</div>
            <div className="dark:text-[#B9B9B9]">{item.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-lg py-2 pl-4 text-black dark:text-white bg-[#ECEFF3] dark:bg-[#23272C]">
        Activities
      </div>

      <div className="my-8 px-4">
        <div className="px-2 text-black dark:text-white">Campaign Name</div>
        <div className="my-4 px-2 text-sm text-black dark:text-white">
          3 Steps | 5 Days in Sequence
        </div>

        <div className="px-2">
          {[
            { step: "Step 1: Email", status: "Sent 3rd, Feb", icon: <IoIosSend className="mr-2" /> },
            { step: "Step 2: Email", status: "Open 5th, Feb", icon: <IoMailOpen className="mr-2 text-yellow-500" /> },
            { step: "Step 3: Email", status: "Open 5th, Feb", icon: <IoMailOpen className="mr-2 text-yellow-500" /> },
          ].map((activity, index) => (
            <div key={index} className="flex my-4 items-center">
              <img
                src={mail}
                className="w-12 p-2 rounded-full dark:bg-[#23272C] bg-[#EEF1F4]"
                alt="Mail"
              />
              <div className="ml-10 space-y-2 text-black dark:text-white">
                <div>{activity.step}</div>
                <div className="text-sm text-[#B9B9B9] flex items-center">
                  {activity.icon} {activity.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InboxRightView;