import { formatName } from "../utils/formatName.js";
import { collegeName } from "../config/constants.js";

export function getStudent() {
    const student = {
        name: formatName(" chandan saw "),
        college: collegeName,
    };

    return student;
}