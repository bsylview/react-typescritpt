import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'main': {
    'display': 'flex',
    'flexDirection': 'column'
  },
  'title': {
    'fontSize': [{ 'unit': 'rem', 'value': 2 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 2 }],
    'alignSelf': 'center'
  },
  'normal': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyle': 'none'
  }
});
