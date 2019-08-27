import { StyleSheet } from '@react-pdf/renderer'

import colors from '../../styles/color.style'

const stylePDF = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  sidebar: {
    backgroundColor: `${ colors.grey }`,
    width: '35%',
    height: '100%',
    padding: '0 10px'
  },
  main: {
    width: '65%',
    height: '100%'
  },
  fullName: {
    textTransform: 'capitalize',
    marginBottom: 0,
    display: 'flex',
    fontSize: 25
  },
  jobTitle: {
    textTransform: 'capitalize',
    fontSize: 15,
    marginTop: '5px',
    color: `${ colors.lightGrey }`
  }
});

export default stylePDF