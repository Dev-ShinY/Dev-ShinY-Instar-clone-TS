import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

interface IProps {
  title: string
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default function PageTitle({ title }: IProps) {
  return (
    <Helmet> 
      <title>
        { title } | Instaclone
      </title> 
    </Helmet>
  );
};