import { useNavigate, useParams } from 'react-router-dom';

const HiPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div>
      <div className='iconify inline-block text-4xl carbon--pedestrian' />
      <p>Hi, {params.name}</p>
      <p className='text-sm opacity-50'>
        <em>Dynamic route!</em>
      </p>

      <div>
        <button className='btn m-3 mt-8 text-sm' onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default HiPage;
