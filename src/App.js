import Content from './Components/Content';
import SideBar from './Components/SideBar';
import './App.css';
import Footer from './Components/Footer';
function App() {
    return (
        <>
            <div className="app">
                <SideBar />
                <div className="app__content">
                    <Content />
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
