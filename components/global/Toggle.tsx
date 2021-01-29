import { SetStateAction } from "react";
import clsx from "clsx";

type Props = {
  onClick: (value: SetStateAction<boolean>) => void;
  selected: boolean;
};

export default function Toggle({ onClick, selected }: Props) {
  return (
    <div className="flex items-center">
      <span
        role="checkbox"
        aria-checked={selected}
        onClick={() => onClick(!selected)}
        className={clsx(
          "relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline",
          {
            "bg-gray-600": selected,
            "bg-gray-200": !selected,
          }
        )}
      >
        <span
          aria-hidden="true"
          className={clsx(
            "inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200",
            {
              "translate-x-5": selected,
              "translate-x-0": !selected,
            }
          )}
        ></span>
      </span>
    </div>
  );
}
