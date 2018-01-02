import { connect } from 'react-redux';
import './topics.scss';
import { Button } from 'element-react';
import Case from '../components/Case';
import { NavLink } from 'react-router-dom';
import ACTION from '../consts/action';

const mapStateToProps = (state) => {
    return {
        topics: state.topics
    }
};
const mapDispatchToProps = (dispatch) => {
    return { dispatch };
};

class Topics extends React.Component {

    componentWillMount() {
        const { topics, dispatch } = this.props;
        dispatch({ type: ACTION.GET_TOPICS })
    }
    render() {
        const { topics, dispatch } = this.props;
        return (
            <div className="topics-container">
                <ul className="topics">
                    {topics.map(topic => {
                        return this.renderTopicItem(topic);
                    })}
                </ul>
            </div>
        );
    }

    getTopicTab(tab = 'ask') {
        return {
            ask: '问答',
            share: '分享',
            job: '工作'
        }[tab];
    }

    renderTopicItem(topic) {
        return (
            <li key={topic.id} className="topic-item">
                <a className="user-avatar" href='javascript:void(0)' title={topic.author.loginname}>
                    <img width="30" height="30" src={topic.author.avatar_url} alt="" />
                </a>
                <span className="topic_count">
                    <span className="reply_count">{topic.reply_count}</span> / <span className="visit_count">{topic.visit_count}</span>
                </span>
                <Case when={topic.top}>
                    <span className="put_top">置顶</span>
                </Case>
                <Case when={!topic.top && topic.good}>
                    <span className="put_good">精华</span>
                </Case>
                <Case when={!topic.top && !topic.good}>
                    <span className="topic_tab">{this.getTopicTab(topic.tab)}</span>
                </Case>
                <span className="topic-title">
                    <NavLink title={topic.title} to={`topic/${topic.id}`}>{topic.title}</NavLink>
                </span>
            </li>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topics);