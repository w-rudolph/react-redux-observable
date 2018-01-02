import ACTION from '../consts/action';

function topics(state = [], action) {
    switch (action.type) {
        case ACTION.UPDATE_TOPICS:
            return [...action.payload];
        default:
            return state;
    }
}

function topicDetail(state = {}, action) {
    switch (action.type) {
        case ACTION.UPDATE_CURRENT_TOPIC:
            return action.payload;
        default:
            return state;
    }
}

export default {
    topics,
    topicDetail
}