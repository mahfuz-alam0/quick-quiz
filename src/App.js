import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Main from './Layout/Main';
import Statistics from './components/Statistics/Statistics'
import Blog from './components/Blog/Blog';
import PlayQuiz from './components/PlayQuiz/PlayQuiz';
import Page404 from './components/404page/Page404';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
                    element: <Home></Home>
                },
                {
                    path: 'quiz/:quizId',
                    loader: async ({ params }) => {
                        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
                    },
                    element: <PlayQuiz></PlayQuiz>
                },
                {
                    path: 'statistics',
                    loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
                    element: <Statistics></Statistics>

                },
                {
                    path: 'blog',
                    element: <Blog></Blog>
                },
                {
                    path: '*',
                    element: <Page404></Page404>
                },
            ]
        }
    ])

    return (
        <div className="App">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
