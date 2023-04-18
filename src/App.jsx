
import './App.css';
import {createTheme,ThemeProvider,CssBaseline,Paper,Typography} from '@mui/material'
import Layout from './Layout/Layout';
function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main:'#fff',
      },
      secondary:{
        main:'#1a242f'
      }
    },
        

  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    {/* <Paper>
      <Typography color='primary'>My React App</Typography>
    </Paper> */}
    <Layout/>
    </ThemeProvider>
  );
}

export default App;
