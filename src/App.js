import { ThemeProvider} from '@mui/material/styles'
import './App.css';
import Intro from './components/Intro';
import Projects from './components/Projects';
import theme from './components/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Intro/>
        <Projects/>
      </ThemeProvider>
    </div>
  );
}

export default App;
