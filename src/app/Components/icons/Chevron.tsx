import { ReactElement } from "react";

const Chevron = ({size}: Props): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width={size ? size : '20'}
    height={size ? size : '20'}
    viewBox="0 0 16 16"
    fillRule="evenodd"
    fill="currentColor"
  >
    <g stroke="none" strokeWidth="1" fillRule="evenodd" fill="currentColor">
      <g>
        <path d="M7.31766333,10.3631203 L3.78032506,7.06143781 C3.40788109,6.71380588 3.38776696,6.13006903 3.73539888,5.75762506 C3.76592296,5.72492234 3.79878543,5.69448328 3.83372614,5.66654882 L3.968504,5.55879638 C4.36643654,5.24065658 4.9399326,5.27254456 5.3001423,5.63283917 L7.85859531,8.19189531 C7.93665763,8.2700427 8.06329063,8.27005762 8.14140469,8.19196197 C8.1414158,8.19195086 8.14142691,8.19193975 8.14140469,8.19189531 L10.6998577,5.63283917 C11.0600674,5.27254456 11.6335635,5.24065658 12.031496,5.55879638 L12.1662739,5.66654882 C12.5642058,5.98468814 12.6288905,6.5651786 12.3107512,6.96311055 C12.2828167,6.99805126 12.2523777,7.03091373 12.2196749,7.06143781 L8.68233667,10.3631203 C8.29812476,10.7217362 7.70187524,10.7217362 7.31766333,10.3631203 Z"></path>
      </g>
    </g>
  </svg>
);

interface Props {
  size?: string;
}

export default Chevron;
