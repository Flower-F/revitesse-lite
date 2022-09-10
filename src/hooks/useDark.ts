const useDarkStorage = (defaultValue?: boolean) => {
  const isDarkOS = useMediaQuery('(prefers-color-scheme: dark)')
  const [isDarkMode, setDarkMode] = useLocalStorageState(
    'revitesse-dark-mode',
    {
      defaultValue: defaultValue ?? isDarkOS ?? false,
    },
  )

  useUpdateEffect(() => {
    setDarkMode(isDarkOS)
  }, [isDarkOS])

  return {
    isDarkMode,
    toggle: () => setDarkMode(prev => !prev),
  }
}

const useDark = () => {
  const { isDarkMode: isDark, toggle: toggleDark } = useDarkStorage()

  useEffect(() => {
    if (isDark)
      document.documentElement.classList.add('dark')
    else
      document.documentElement.classList.remove('dark')
  }, [isDark])

  return {
    isDark,
    toggleDark,
  }
}

export default useDark
