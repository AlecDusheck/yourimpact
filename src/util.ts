export class Utils {
   static onlyUnique = (value, index, self): boolean => {
    return self.indexOf(value) === index;
  }

  static capitalize = (value: string): string => {
     if (value.length === 1) { return value.toUpperCase(); }
     return value.substring(0, 1).toUpperCase() + value.substring(1, value.length);
  }
}

export interface MapMarker {
  lat: number;
  long: number;
  label: string;
}
