import React, {Component} from 'react';
import { BlobProvider} from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import ProjectReport from '../ProjectReport'

type OwnProps = {
  nom: string;
  prenom: string;
  email: string;
  pdfId: string | null;
}

// Create Document Component
export default class PdfBlobProvider extends Component {


    render() {
      const {nom, prenom, email, pdfId } = this.props;
      if(pdfId === null){
        return null;
      }

      return (
        <BlobProvider key={pdfId} document={<ProjectReport email={email} nom={nom} prenom={prenom}/>}>
          {({ blob, loading }) => {
            if(loading){
              return null;
            }
            saveAs(blob, "somename.pdf");
            return null;
            }}
        </BlobProvider>
      );
    };
}; 
