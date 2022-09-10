const Footer = () => {
  const { toggleDark } = useDark()

  return (
    <nav text-xl mt-6 inline-flex gap-2>
      <button icon-btn onClick={toggleDark}>
        <div dark:i-carbon-moon i-carbon-sun />
      </button>

      <a
        icon-btn i-carbon-logo-github
        rel="noreferrer"
        href="https://github.com/flower-f/revitesse-lite"
        target="_blank"
        title="GitHub"
      >
        Github Link
      </a>
    </nav>
  )
}

export default Footer
