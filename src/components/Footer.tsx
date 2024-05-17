import useDark from '~/hooks/useDark';

const Footer = () => {
  const { toggleDark } = useDark();

  return (
    <nav className='text-xl mt-6 inline-flex gap-2'>
      <button className='icon-btn' onClick={toggleDark}>
        <div className='dark:i-carbon-moon i-carbon-sun' />
      </button>

      <a
        className='icon-btn i-carbon-logo-github'
        rel='noreferrer'
        href='https://github.com/flower-f/revitesse-lite'
        target='_blank'
        title='GitHub'
      >
        Github Link
      </a>
    </nav>
  );
};

export default Footer;
