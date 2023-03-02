import { LocalOffer, Public, School } from '@mui/icons-material';
import React from 'react';
import { TitleText } from './CustomTexts';


function Pricing() {
  return (
    <section className="bg-gray-100 py-12 px-5">
      <div className="container mx-auto">
      <TitleText title={<>REGISTRATION FEE</>} textStyles='text-center' />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md">
            <div className="px-6 py-4">
              <div className="flex items-center mb-4">
                <LocalOffer fontSize="large" />
                <h3 className="text-lg font-bold ml-4">Local</h3>
              </div>
              <div className="text-4xl font-bold mb-4">N15,000</div>
              <p>Access to local events</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md">
            <div className="px-6 py-4">
              <div className="flex items-center mb-4">
                <Public fontSize="large" />
                <h3 className="text-lg font-bold ml-4">Virtual</h3>
              </div>
              <div className="text-4xl font-bold mb-4">N10,000</div>
              <p>Access to virtual events</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md">
            <div className="px-6 py-4">
              <div className="flex items-center mb-4">
                <Public fontSize="large" />
                <h3 className="text-lg font-bold ml-4">International</h3>
              </div>
              <div className="text-4xl font-bold mb-4">$100</div>
              <p>Access to international events</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md">
            <div className="px-6 py-4">
              <div className="flex items-center mb-4">
                <School fontSize="large" />
                <h3 className="text-lg font-bold ml-4">Students</h3>
              </div>
              <div className="text-4xl font-bold mb-4">N5,000</div>
              <p>Access to events for students</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
