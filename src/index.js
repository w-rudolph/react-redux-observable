import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, HashRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import reducers from './reducers';
import rootEpic from './epics';
import axios from 'axios';

import 'element-theme-default';
import Home from './pages/home';
import Todos from './pages/todos';
import Topics from './pages/topics';
import TopicDetail from './pages/topic-detail';
import { Layout, Menu } from 'element-react';

// interceptors
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

const store = createStore(
    reducers,
    applyMiddleware(createEpicMiddleware(rootEpic))
)

const App = () => {
    return (
        <HashRouter>
            <Layout.Row gutter="10">
                <Layout.Col span="4">
                    <Menu>
                        <Menu.Item index="1"><NavLink to="/home" replace>Home</NavLink></Menu.Item>
                        <Menu.Item index="2"><NavLink to="/todos" replace>Todo MVC</NavLink></Menu.Item>
                        <Menu.Item index="3"><NavLink to="/topics" replace>Tpocs</NavLink></Menu.Item>
                    </Menu>
                </Layout.Col>
                <Layout.Col span="20">
                    <Switch>
                        <Route exact path="/home" component={Home}></Route>
                        <Route path="/todos" component={Todos}></Route>
                        <Route path="/topics" component={Topics}></Route>
                        <Route path="/topic/:id" component={TopicDetail}></Route>
                        <Redirect to="/home" />
                    </Switch>
                </Layout.Col>
            </Layout.Row>
        </HashRouter>
    );
};

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);