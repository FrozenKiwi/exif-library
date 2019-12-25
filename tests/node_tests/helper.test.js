// "helper" tests.
const exifLib = require('../../dist/exif-library');

test('test "degToDmsRational" -- 1', () => {
  const rationalArray = exifLib.GPSHelper.degToDmsRational(180.0);
  expect(rationalArray).toEqual([[180, 1], [0, 1], [0, 100]]);
});

test('test "degToDmsRational" -- 2', () => {
  const rationalArray = exifLib.GPSHelper.degToDmsRational(30.303);
  expect(rationalArray).toEqual([[30, 1], [18, 1], [1080, 100]]);
});


test('test "dmsRationalToDeg" -- 1', () => {
  const deg = exifLib.GPSHelper.dmsRationalToDeg([[180, 1], [0, 1], [0, 100]], "N");
  expect(deg).toBe(180.0);
});

test('test "dmsRationalToDeg" -- 2', () => {
  const deg = exifLib.GPSHelper.dmsRationalToDeg([[30, 1], [18, 1], [1080, 100]], "N");
  expect(deg).toBe(30.303);
});

test('test "dmsRationalToDeg" -- 3', () => {
  const deg = exifLib.GPSHelper.dmsRationalToDeg([[30, 1], [18, 1], [1080, 100]], "S");
  expect(deg).toBe(-30.303);
});