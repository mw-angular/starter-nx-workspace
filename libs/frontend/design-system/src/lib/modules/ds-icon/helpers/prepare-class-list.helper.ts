import { DsIconSvgClassType } from '../entities/ds-icon-svg-class.type';

export function prepareClassListHelper(svgClass: DsIconSvgClassType): string[] {
  let svgClassList: string[];

  if (Array.isArray(svgClass)) {
    svgClassList = svgClass;
  } else if (svgClass instanceof Set) {
    svgClassList = [...svgClass];
  } else if (typeof svgClass === 'string') {
    svgClassList = svgClass.split(' ');
  } else {
    svgClassList = Object.keys(svgClass)
      .filter((key: string): key is string => svgClass[key])
      .map((key: string): string[] => key.split(' '))
      .reduce((acc: string[], val: string[]): string[] => acc.concat(val), []);
  }

  return svgClassList
    .map((key: string): string => key.trim())
    .filter((klass: string): klass is string => Boolean(klass));
}
