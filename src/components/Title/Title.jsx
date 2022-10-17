import PropTypes from 'prop-types';

const Title = ({ title }) => {
  return (
    <>
      <h3 style={{ display: 'flex', justifyContent: 'center' }}>{title}</h3>
    </>
  );
};
Title.propTypes = {
  title: PropTypes.string,
};
export default Title;
