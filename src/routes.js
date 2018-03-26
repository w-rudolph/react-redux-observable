import Home from 'bundle-loader?lazy!./pages/home';
import Todos from 'bundle-loader?lazy!./pages/todos';
import Topics from 'bundle-loader?lazy!./pages/topics';
import TopicDetail from 'bundle-loader?lazy!./pages/topic-detail';
import Bundle from './components/Bundle';

const Dynamic = Cpt => (props) => (
    <Bundle load={Cpt}>
        {(Container) => <Container {...props} />}
    </Bundle>
);
const routes = {
    Home: Dynamic(Home),
    Todos: Dynamic(Todos),
    Topics: Dynamic(Topics),
    TopicDetail: Dynamic(TopicDetail),
};
export default routes;