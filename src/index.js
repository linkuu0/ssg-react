// webpack

import { lookup } from "dns";
import { getRandomMinMax } from "./utils";

// commonjs, esmodule

function rollDice() {
    return getRandomMinMax(1, 6);
}

loop(() => console.log(rollDice()), 20);
