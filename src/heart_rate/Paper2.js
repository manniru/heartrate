import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      // Name of the styleSheet
      root: {
        // Name of the rule
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 70,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
      },
    },
  },
});

class Paper2 extends React.Component {


  render() {
  return (
    
      <Paper style={{
        // Name of the rule
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 70,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
        width: 300,
        height: 150,
      }}
      >

        <Typography type="headline" style={{ color: 'white' }} align="center">
        {this.props.title}
        </Typography>

        <Typography type="title" align="center">
        No of Users: {this.props.num} (N{this.props.sum})
        </Typography>

        <Typography type="subheading" style={{}} align="center">
        No of Pulses: 3,870 (N4,783,900)
        </Typography>

        <Typography type="body1" style={{ color: 'white' }} align="center">
        Dashboard Dashboard
        </Typography>
      
      </Paper>
    );
  }
}

Paper2.propTypes = {
  title: PropTypes.string,
  num: PropTypes.string,
  sum: PropTypes.string
};

export default Paper2;
