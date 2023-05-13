import { ConditionalWrapperProps } from './ConditionalWrapper.annotations';

// https://blog.hackages.io/conditionally-wrap-an-element-in-react-a8b9a47fab2
export const ConditionalWrapper = ({ condition, wrapper, children }: ConditionalWrapperProps): JSX.Element =>
	condition ? wrapper(children) : children;
