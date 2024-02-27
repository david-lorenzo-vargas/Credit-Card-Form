import { ReactElement } from "react";

const CheckBox = ({
  boxId,
  boxName,
  checked,
  onClick,
}: Props): ReactElement => {
  return (
    <div className="relative">
      <div
        className={`
          rounded
          h-10
          w-10
          border
          flex
          flex-row
          items-center
          justify-center
          ${checked ? 'bg-blue border-blue' : 'bg-white border-lightGray'}
        `}
      >
        <span className={`${checked ? 'text-white' : ''}`}>
          {boxName}
        </span>
      </div>
      <input
        type="checkbox"
        name={boxId}
        id={boxId}
        onClick={onClick}
        className="absolute top-0 h-10 w-10 opacity-0"
        defaultChecked={checked}
        aria-label={`${boxId}-${boxName}`}
      />
    </div>
  );
};

interface Props {
  boxId: string;
  boxName: string;
  checked: boolean;
  onClick: () => void;
}

export default CheckBox;
