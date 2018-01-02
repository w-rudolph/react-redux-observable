import PropTypes from 'prop-types';

const Case = ({ when = false, children }) => {
    if (!when) {
        return null;
    }
    const count = React.Children.count(children);
    switch (count) {
        case 0:
            return null;
        case 1:
            return typeof (children) == 'string' ? React.createElement('span', null, children) : children;
        default:
            throw 'more than one child node was added to Case Component';
    }
};

Case.propTypes = { when: PropTypes.bool };

export default Case;