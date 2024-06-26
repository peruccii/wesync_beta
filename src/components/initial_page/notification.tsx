import { notification1 } from "../../assets";

const Notification = ({ className, title }: any) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-color-n-9/40 backdrop-blur border border-color-n-1/10 rounded-2xl gap-5`}
    >
      <img
        src={notification1.src}
        width={62}
        height={62}
        alt="image"
        className="rounded-xl"
      />
      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>
        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">         
              <li
                key={2}
                className="flex w-6 h-6 border-2 border-color-n-12 rounded-full overflow-hidden"
              >
                <img
                  src='https://avatars.githubusercontent.com/u/98404186?v=4'
                  className="w-full"
                  width={20}
                  height={20}
                  alt=''
                />
              </li>
              <li
                key={1}
                className="flex w-6 h-6 border-2 border-color-n-12 rounded-full overflow-hidden"
              >
                <img
                  src='https://avatars.githubusercontent.com/u/98404088?v=4'
                  className="w-full"
                  width={20}
                  height={20}
                  alt=''
                />
              </li>
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notification;