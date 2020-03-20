import React from 'react';
import { Document, Font } from '@react-pdf/renderer';

import { Body, Image, Text, Title, Subtitle, PageNumber, Header } from './ProjectReport.style';

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

// Create Document Component
export default ({nom, prenom, email }) => (
  <Document>
    <Body>
      <Header fixed>
        ~ Created with react-pdf ~
      </Header>
      <Title>Rocket Team</Title>
      <Image
        src="/favicon-local.png"
      />
      <Subtitle>
       High-quality Pdf designed for my best clients.
      </Subtitle>
      <Text>
        Hello {prenom} {nom}, we are delighted to have you as our favorite customer.
      </Text>
      <Text>
        We will send our newsletter to your email address: {email}.
      </Text>
      <PageNumber render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Body>
  </Document>
);
