import { connect } from 'react-redux';
import { getDateDiff } from '../utils/util';
import Case from '../components/Case';
import './topics';
import ACTION from '../consts/action';

class TopicDetail extends React.Component {
    componentWillMount() {
        const { match, dispatch } = this.props;
        const topicId = match.params.id;
        if (topicId) {
            dispatch({ type: ACTION.GET_TOPIC_DETAIL, payload: topicId });
        }
    }

    render() {
        const { topicDetail } = this.props;
        return this.renderTopicDetail(topicDetail);
    }

    getTopicTab(tab = 'ask') {
        return {
            ask: '问答',
            share: '分享',
            job: '工作'
        }[tab];
    }

    renderTopicDetail(topic) {
        return (
            <div className="topics-container">
                <Case when={topic.top}>
                    <span className="put_top">置顶</span>
                </Case>
                <Case when={!topic.top && topic.good}>
                    <span className="put_good">精华</span>
                </Case>
                <Case when={!topic.top && !topic.good}>
                    <span className="topic_tab">{this.getTopicTab(topic.tab)}</span>
                </Case>
                &nbsp;<span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{topic.title}</span>
                <div className="topic-other">
                    <span>{topic.create_at ? "发布于 " + getDateDiff(topic.create_at) + " • " : ""}</span>作者 <span>{topic.author ? topic.author.loginname : ""}</span> • <span>{topic.visit_count}</span> 次浏览 • <span> 来自 {this.getTopicTab(topic.tab)}</span>
                </div>
                <div className="topic-content" dangerouslySetInnerHTML={{ __html: topic.content }} />
                <div className="topic-reply">
                    <div className="reply-count">
                        <span>{topic.reply_count}</span> 回复
                            </div>
                    <div className="reply-content">
                        <ul className="reply-items">
                            {(topic.replies || []).map((reply, index) => {
                                return <li className="reply-item" key={index}>
                                    <a href="jjavascript:void(0)"><img width="30" height="30" src={reply.author.avatar_url} alt="" /></a>&nbsp;<a className="reply-loginname" href="#">{reply.author.loginname}</a>&nbsp;<span className="reply-floor">{index + 1}楼 • {getDateDiff(reply.create_at)}</span><br />
                                    <span dangerouslySetInnerHTML={{ __html: reply.content }}></span>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { topicDetail: state.topicDetail }
}
const mapDispatchToProps = (dispatch) => {
    return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicDetail);