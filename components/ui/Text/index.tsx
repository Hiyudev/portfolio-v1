import { useTheme } from 'next-themes';
import { toast } from 'react-toastify';
import useCopyToClipboard from '../../../hooks/useClipboard';
import Clipboardicon from '../../icons/Clipboard';

export const TagText = ({ children }) => {
  return (
    <span className="font-black before:content-['<'] before:text-transparent before:text-stroke-black before:dark:text-stroke-white before:text-stroke after:content-['/>'] after:text-transparent after:text-stroke-black after:dark:text-stroke-white after:text-stroke">
      {children}
    </span>
  );
};

export const HighlightText = ({ children }) => {
  return (
    <span className="before:transition-transform before:duration-750 before:block before:absolute before:-inset-1 before:-skew-y-3 hover:before:skew-y-3 before:bg-gradient-to-r before:bg-gradient relative inline-block">
      <span className="relative font-bold text-white">{children}</span>
    </span>
  );
};

export const ClipboardText = ({ text }) => {
  const { theme } = useTheme();
  const [_, copy] = useCopyToClipboard();

  const handleCopy = async (text) => {
    const res = await copy(text);
    if (res) {
      toast.success('Sucess copied on clipboard', {
        theme: theme === 'dark' ? 'dark' : 'light',
      });
    }
  };

  return (
    <span className="flex flex-row space-x-2">
      <button
        className="opacity-75 hover:opacity-100 transition-opacity"
        onClick={() => handleCopy(text)}
      >
        <Clipboardicon />
      </button>

      <span>{text}</span>
    </span>
  );
};
