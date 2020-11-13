import { random } from "lodash";
function useGetRandom(
  minNumber: number,
  maxNumber: number,
  float?: boolean
): number {
  const floating = float;
  return random(minNumber, maxNumber, floating);
}
console.log(useGetRandom(1, 2323232323232));
