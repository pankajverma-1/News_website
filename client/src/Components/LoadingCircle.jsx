import { Alert } from 'react-bootstrap';
import ReactLoading from 'react-loading';

const LoadingCircle = ({ error }) => {
  return (
    <>
      <div
        style={{
          position: 'Fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: '3000',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.61)',
          backdropFilter: 'blur(5px)',
        }}
      >
        {error ? (
          <Alert variant={'danger'}>{error}</Alert>
        ) : (
          <ReactLoading
            type={'spin'}
            color={'white'}
            height={'64px'}
            width={'64px'}
          />
        )}
      </div>
    </>
  );
};

export default LoadingCircle;
