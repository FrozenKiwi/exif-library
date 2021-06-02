import * as utils from "./utils";
import { TagsFieldNames, IExifElement } from "./interfaces";
export declare class ExifReader {
    tiftag: string;
    endianMark: string;
    constructor(exifBinary: string);
    getIfd: (pointer: number, ifdName: TagsFieldNames) => IExifElement;
    getFirstIfdPointer: (pointer: number, ifdName: TagsFieldNames) => string;
    convertValue: (field: utils.IfdField) => string | number | number[] | number[][];
    setEndianMark: () => void;
}
