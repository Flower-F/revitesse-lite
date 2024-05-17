import { useLocalStorage, useMedia, useUpdateEffect } from 'react-use';
import { useEffect } from 'react';

const useDarkStorage = (defaultValue?: boolean) => {
  const isDarkOS = useMedia('(prefers-color-scheme: dark)');
  const [isDarkMode, setDarkMode] = useLocalStorage('revitesse-dark-mode', defaultValue ?? isDarkOS ?? false);

  useUpdateEffect(() => {
    setDarkMode(isDarkOS);
  }, [isDarkOS]);

  return {
    isDarkMode,
    toggle: () => setDarkMode(!isDarkMode),
  };
};

const useDark = () => {
  const { isDarkMode: isDark, toggle: toggleDark } = useDarkStorage();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return {
    isDark,
    toggleDark,
  };
};

export default useDark;
