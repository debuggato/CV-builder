import React from 'react'
import { Page, Text, View, Document } from '@react-pdf/renderer'

import stylePDF from './PDF.style'


const FilePDF = (props: any) => {
  return (
    <Document>
      <Page size="A4" style={stylePDF.page}>
        <View style={stylePDF.sidebar}>
          <Text>Contact Informations</Text>
          <Text>{ props.getEmail ? `E-mail: ${props.getEmail}` : '' }</Text>
          <Text>{ props.getAddress ? `Address: ${props.getAddress}` : ''}</Text>
          <Text>{ props.getPhone ? `Phone: ${props.getPhone}` : ''}</Text>
          <Text>Languages</Text>
          <Text>Skills</Text>
        </View>
        <View style={stylePDF.main}>
          <Text style={ stylePDF.fullName }>{ props.getFirstName + ' ' + props.getLastName}</Text>
          <Text style={ stylePDF.jobTitle }>{ props.getJobTitle }</Text>
        </View>
      </Page>
    </Document>
  )
}

export default FilePDF