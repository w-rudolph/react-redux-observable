import { getTopics, getTopic } from '../models/topic';
import ACTION from '../consts/action';

const getAllTopic = (action$) => {
    return action$.ofType(ACTION.GET_TOPICS)
        .switchMap(() => getTopics())
        .map(res => {
            return {
                type: ACTION.UPDATE_TOPICS,
                payload: res.data.data
            }
        });
}

const getTopicDetail = (action$) => {
    return action$.ofType(ACTION.GET_TOPIC_DETAIL)
        .switchMap(val => getTopic(val.payload))
        .map(res => {
            return {
                type: ACTION.UPDATE_CURRENT_TOPIC,
                payload: res.data.data
            }
        });
}

export default [getAllTopic, getTopicDetail];