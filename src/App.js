import { ThemeProvider} from '@mui/material/styles'
import './App.css';

import Intro from './components/Intro';
import Projects from './components/Projects';
import Design from './components/Design';
import theme from './components/theme';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Intro/>
        <Projects/>
        <Design />
      </ThemeProvider>
    </div>
  );
}

export default App;
