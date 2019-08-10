import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';

import Home from './components/pages/Home/HomePage';
import Posts from './components/pages/Posts/PostsPage';
import Contact from './components/pages/Contact/ContactPage';
import NotFound from './components/pages/NotFound/NotFoundPage';

import SinglePostPage from './components/pages/SinglePost/SinglePostPage';
import AddPostPage from './components/pages/AddPost/AddPostPage';

class App extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        fetch('http://localhost:8000/api/posts')
            .then(res => res.json())
            .then(res => {
                this.setState({ posts: res });
            });
    }

    render() {
        return (
            <MainLayout>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/posts' exact component={Posts} />
                    <Route path='/posts/new' exact component={AddPostPage} />
                    <Route path='/posts/:id' exact component={SinglePostPage} />  
                    <Route path='/contact' exact component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </MainLayout>
        );
    }
};

export default App;