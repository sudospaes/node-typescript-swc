export function Singleton(constructor: any): any {
  let instance: any;
  return class {
    constructor(...args: any) {
      if (instance) {
        return instance;
      }
      return (instance = new constructor(...args));
    }
  };
}
