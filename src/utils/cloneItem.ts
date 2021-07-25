import rfdc from 'rfdc';

type CloneItemType = <T>(item: T) => T;

export const cloneItem: CloneItemType = item => {
  return rfdc()(item);
};
