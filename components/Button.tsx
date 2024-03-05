import { PressableProps, Text, TouchableOpacity } from 'react-native';

type TProps = {
  children?: any;
  outline?: boolean;
  colorType?: 'primary' | 'danger';
  className?: string;
  onPress?: any;
};

export default function Button({ children, outline, colorType = 'primary', className, onPress, ...props }: TProps) {
  const bgClasses = () => {
    if (colorType === 'danger') {
      if (outline) {
        return 'px-3 py-2 border border-red-600 rounded-md';
      }

      return 'px-3 py-2 bg-red-600 rounded-md';
    }

    if (colorType === 'primary') {
      if (outline) {
        return 'px-3 py-2 border border-blue-600 rounded-md';
      }

      return 'px-3 py-2 bg-blue-600 rounded-md';
    }
  };

  const textClasses = () => {
    if (colorType === 'danger') {
      if (outline) {
        return 'text-red-600 font-semibold text-center';
      }

      if (!outline) {
        return 'text-white font-semibold text-center';
      }
    }

    if (colorType === 'primary') {
      if (outline) {
        return 'text-blue-600 font-semibold text-center';
      }

      return 'text-white font-semibold text-center';
    }
  };

  return (
    <TouchableOpacity activeOpacity={1} className={`${bgClasses()} ${className}`} {...props} onPress={onPress}>
      <Text className={`${textClasses()}`}>{children}</Text>
    </TouchableOpacity>
  );
}
