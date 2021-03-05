import { ZIndexType } from '../types';

const zIndices: Record<ZIndexType, number | string> = {
  auto: 'auto',
  hide: -1,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  backdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
};

export default zIndices;
