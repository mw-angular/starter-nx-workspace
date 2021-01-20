import { DsIconSvgClassType } from '../entities/ds-icon-svg-class.type';
import { prepareClassListHelper } from './prepare-class-list.helper';

describe('prepareClassListHelper', (): void => {
  describe('string input', (): void => {
    it('should handle classes separated by space', (): void => {
      expect.hasAssertions();

      const svgClass: DsIconSvgClassType = 'class1 class2 class3';
      const result: string[] = prepareClassListHelper(svgClass);

      expect(result).toStrictEqual(['class1', 'class2', 'class3']);
    });

    it('should handle one class', (): void => {
      expect.hasAssertions();

      const svgClass: DsIconSvgClassType = 'class1';
      const result: string[] = prepareClassListHelper(svgClass);

      expect(result).toStrictEqual(['class1']);
    });

    it('should handle empty string', (): void => {
      expect.hasAssertions();

      const svgClass: DsIconSvgClassType = '';
      const result: string[] = prepareClassListHelper(svgClass);

      expect(result).toStrictEqual([]);
    });

    it('should handle space string', (): void => {
      expect.hasAssertions();

      const svgClass: DsIconSvgClassType = ' ';
      const result: string[] = prepareClassListHelper(svgClass);

      expect(result).toStrictEqual([]);
    });

    it('should handle string with extra spaces', (): void => {
      expect.hasAssertions();

      const svgClass: DsIconSvgClassType = ' class1  class2 class3   ';
      const result: string[] = prepareClassListHelper(svgClass);

      expect(result).toStrictEqual(['class1', 'class2', 'class3']);
    });
  });

  describe('string array input', (): void => {
    it('should handle string array', (): void => {
      expect.hasAssertions();

      const svgClass: DsIconSvgClassType = ['class1', 'class2', 'class3'];
      const result: string[] = prepareClassListHelper(svgClass);

      expect(result).toStrictEqual(['class1', 'class2', 'class3']);
    });

    it('should handle string array with empty elements', (): void => {
      expect.hasAssertions();

      const svgClass: DsIconSvgClassType = ['class1', '', 'class2', ' ', 'class3'];
      const result: string[] = prepareClassListHelper(svgClass);

      expect(result).toStrictEqual(['class1', 'class2', 'class3']);
    });
  });

  describe('set of strings input', (): void => {
    it('should handle Set of strings', (): void => {
      expect.hasAssertions();

      const svgClass: DsIconSvgClassType = new Set<string>().add('class1').add('class2').add('class3');
      const result: string[] = prepareClassListHelper(svgClass);

      expect(result).toStrictEqual(['class1', 'class2', 'class3']);
    });
  });

  describe('object input', (): void => {
    it('should handle simple object', (): void => {
      expect.hasAssertions();

      const svgClass: DsIconSvgClassType = {
        class1: true,
        class2: false,
        class3: true,
      };
      const result: string[] = prepareClassListHelper(svgClass);

      expect(result).toStrictEqual(['class1', 'class3']);
    });

    it('should handle object of strings with spaces', (): void => {
      expect.hasAssertions();

      const svgClass: DsIconSvgClassType = {
        'class1 class2': false,
        'class3 class4 class5': true,
        'class6': true,
        ' class7   class8  ': true,
      };
      const result: string[] = prepareClassListHelper(svgClass);

      expect(result).toStrictEqual(['class3', 'class4', 'class5', 'class6', 'class7', 'class8']);
    });
  });
});
