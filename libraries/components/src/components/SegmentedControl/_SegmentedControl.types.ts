import { ISegmentedControlOption } from './SegmentedControlOption/_SegmentedControlOption.types';

type SegmentControlOption = Omit<ISegmentedControlOption, 'onClick'> & {
	value: string;
};

export type ISegmentedControl = {
	controls: SegmentControlOption[];
	onClick: (value: string) => void;
};
