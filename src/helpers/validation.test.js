import { describe, it } from 'vitest';
import { validateInputNotEmpty, validateNameStartsWithUppercase, validateNameIsUnique, validateSelectIsNotEmpty, validateGenderNotEmpty, validateImageNotEmpty, validateAgreeIsChecked, validateImageIsImage, } from './validation';
describe('validateInputNotEmpty', () => {
    it('returns false for an empty value', () => {
        expect(validateInputNotEmpty('')).toEqual(false);
    });
    it('returns true for a non-empty value', () => {
        expect(validateInputNotEmpty('a')).toEqual(true);
        expect(validateInputNotEmpty(' ')).toEqual(true);
    });
});
describe('validateNameStartsWithUppercase', () => {
    it('returns false for a value not starting with an uppercase letter', () => {
        expect(validateNameStartsWithUppercase('name')).toEqual(false);
        expect(validateNameStartsWithUppercase('nAme')).toEqual(false);
        expect(validateNameStartsWithUppercase('1Name')).toEqual(false);
        expect(validateNameStartsWithUppercase('$Name')).toEqual(false);
        expect(validateNameStartsWithUppercase(' Name')).toEqual(false);
        expect(validateNameStartsWithUppercase('имя')).toEqual(false);
    });
    it('returns true for a value starting with an uppercase letter', () => {
        expect(validateNameStartsWithUppercase('Name')).toEqual(true);
        expect(validateNameStartsWithUppercase('NAME')).toEqual(true);
        expect(validateNameStartsWithUppercase('Name.')).toEqual(true);
        expect(validateNameStartsWithUppercase('Имя')).toEqual(true);
    });
});
const names = ['Biggs Darklighter', 'Luke Skywalker', 'C-3PO'];
describe('validateNameIsUnique', () => {
    it('returns false if the value is in the array', () => {
        expect(validateNameIsUnique('Luke Skywalker', names)).toEqual(false);
        expect(validateNameIsUnique('Biggs Darklighter', names)).toEqual(false);
        expect(validateNameIsUnique('C-3PO', names)).toEqual(false);
    });
    it('returns true if the value is not in the array', () => {
        expect(validateNameIsUnique('Leia Skywalker', names)).toEqual(true);
        expect(validateNameIsUnique('Luke', names)).toEqual(true);
        expect(validateNameIsUnique('Skywalker', names)).toEqual(true);
        expect(validateNameIsUnique('Biggs', names)).toEqual(true);
        expect(validateNameIsUnique('Luke Skywalker C-3PO', names)).toEqual(true);
        expect(validateNameIsUnique('C-3PO 1', names)).toEqual(true);
        expect(validateNameIsUnique('Name', names)).toEqual(true);
        expect(validateNameIsUnique('имя', names)).toEqual(true);
    });
});
describe('validateSelectIsNotEmpty', () => {
    it('returns false for an empty value', () => {
        expect(validateSelectIsNotEmpty('default')).toEqual(false);
    });
    it('returns true for a non-empty value', () => {
        expect(validateSelectIsNotEmpty('Human')).toEqual(true);
        expect(validateSelectIsNotEmpty('Wookie')).toEqual(true);
    });
});
describe('validateGenderNotEmpty', () => {
    it('returns false if none of the argumens are true', () => {
        expect(validateGenderNotEmpty(false)).toEqual(false);
        expect(validateGenderNotEmpty(false, false)).toEqual(false);
        expect(validateGenderNotEmpty(false, false, false)).toEqual(false);
    });
    it('returns true if at least one argument is true', () => {
        expect(validateGenderNotEmpty(true, false)).toEqual(true);
        expect(validateGenderNotEmpty(true, false)).toEqual(true);
        expect(validateGenderNotEmpty(false, false, true)).toEqual(true);
        expect(validateGenderNotEmpty(true)).toEqual(true);
        expect(validateGenderNotEmpty(true, true)).toEqual(true);
    });
});
const emptyFileList = [];
const nonEmptyFileList = ['file1'];
describe('validateImageNotEmpty', () => {
    it('returns false if the array is empty', () => {
        expect(validateImageNotEmpty(emptyFileList)).toEqual(false);
    });
    it('returns true if the array is not empty', () => {
        expect(validateImageNotEmpty(nonEmptyFileList)).toEqual(true);
    });
});
describe('validateAgreeIsChecked', () => {
    it('returns false if the value is false', () => {
        expect(validateAgreeIsChecked(false)).toEqual(false);
    });
    it('returns true if the value is true', () => {
        expect(validateAgreeIsChecked(true)).toEqual(true);
    });
});
const FileListWithFileWithoutExtension = [{ name: 'image' }];
const FileListWithPDFFile = [{ name: 'image.pdf' }];
const FileListWithTXTFile = [{ name: 'image.txt' }];
const FileListWithJPGImage = [{ name: 'image.jpg' }];
const FileListWithPNGImage = [{ name: 'image.png' }];
const FileListWithSVGImage = [{ name: 'image.svg' }];
const FileListWithWEBPImage = [{ name: 'image.webp' }];
describe('validateImageIsImage', () => {
    it('returns false if the file list is empty or there is no file extension', () => {
        expect(validateImageIsImage(FileListWithFileWithoutExtension)).toEqual(false);
        expect(validateImageIsImage(emptyFileList)).toEqual(false);
    });
    it('returns false if the file extension is not an image extension', () => {
        expect(validateImageIsImage(FileListWithPDFFile)).toEqual(false);
        expect(validateImageIsImage(FileListWithTXTFile)).toEqual(false);
    });
    it('returns true if the file extension is an image extension', () => {
        expect(validateImageIsImage(FileListWithJPGImage)).toEqual(true);
        expect(validateImageIsImage(FileListWithPNGImage)).toEqual(true);
        expect(validateImageIsImage(FileListWithSVGImage)).toEqual(true);
        expect(validateImageIsImage(FileListWithWEBPImage)).toEqual(true);
    });
});
