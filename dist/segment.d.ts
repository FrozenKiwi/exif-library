export declare const getThumbnail: (jpeg: string) => string;
export declare const splitIntoSegments: (data: string) => string[];
export declare const getExifSeg: (segments: Array<string>) => string;
export declare const mergeSegments: (segments: Array<string>, exif: string) => string;
