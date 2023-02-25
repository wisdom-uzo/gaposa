import React from 'react';
import { Document } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';


const documentUrl = "https://res.cloudinary.com/dkukvhd6b/image/upload/v1677327974/abibatsalaudeen71%40gmail.com81026.pdf"


const CloudinaryDocument = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dkukvhd6b',
    },
  });

  const publicId = documentUrl.replace(/^.*\//, '').split('.')[0];
  const format = documentUrl.split('.').pop();

  const url = cld.document(documentUrl).page(1);

  return (
    <Document
      cldDoc={url}
      alt="Cloudinary Document"
      publicId={publicId}
      format={format}
      fallbackSrc={documentUrl}
      style={{ maxWidth: '100%' }}
    />
  );
};

export default CloudinaryDocument;






