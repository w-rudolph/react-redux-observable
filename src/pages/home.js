import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {}
};

class Home extends React.Component {
    render() {
        return (
            <div>
                Redux-Observable demo
            </div>
        );
    }
}

export default connect(mapStateToProps)(Home);