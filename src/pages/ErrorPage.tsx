import { useRouteError, ErrorResponse, useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div>
      <div className='iconify inline-block text-4xl carbon--js-error'></div>
      <p className='text-sm'>Sorry, an unexpected error has occurred.</p>
      <p className='text-sm opacity-50'>
        <em>{(error as ErrorResponse)?.statusText || (error as Error)?.message || 'unknown error'}</em>
      </p>

      <div>
        <button className='btn m-3 mt-8 text-sm' onClick={() => navigate('/')}>
          Back Home
        </button>
      </div>
    </div>
  );
};
