import { Footer } from 'components/footer/Footer';
import { TitleBlock } from './components/TitleBlock';
import { BlockForm } from './components/blockForm/BlockForm';

function App() {
    return (
        <div style={{ textAlign: 'center' }}>
            <TitleBlock />
            <BlockForm />
            <Footer />
        </div>
    );
}

export default App;
