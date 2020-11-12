import { random } from "lodash";

declare module "lodash" {
  export function random(
    valueMin: number,
    valueMax: number,
    valueFloat?: number
  );
}
