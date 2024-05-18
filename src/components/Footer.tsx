import { useDark } from '~/hooks/useDark';

const Footer = () => {
  const { toggleDark } = useDark();

  return (
    <nav className='mt-6 inline-flex gap-2 text-xl'>
      <button className='icon-btn' onClick={toggleDark}>
        <div className='iconify carbon--sun dark:carbon--moon' />
      </button>

      <a
        className='icon-btn iconify carbon--logo-github'
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
