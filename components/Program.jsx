import React from 'react';
import { TitleText } from './CustomTexts';

function Schedule() {
  return (
    <section className="bg-gray-100 py-12 px-5">
      <div className="container mx-auto">
      <TitleText title={<>Programme</>} textStyles='text-center' />

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md">
            <div className="px-6 py-4 bg-blue-500 text-white font-bold rounded-t-lg">
              Tuesday 29th May, 2023
            </div>
            <div className="px-6 py-4">
              <p>ARRIVAL OF PARTICIPANTS</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md">
            <div className="px-6 py-4 bg-blue-500 text-white font-bold rounded-t-lg">
              Wednesday 30th May, 2023
            </div>
            <div className="px-6 py-4">
              <p>Opening ceremony</p>
              <p>Plenary and Technical Sessions</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md">
            <div className="px-6 py-4 bg-blue-500 text-white font-bold rounded-t-lg">
              Thursday 31st May, 2023
            </div>
            <div className="px-6 py-4">
              <p>Plenary and Technical Sessions</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md">
            <div className="px-6 py-4 bg-blue-500 text-white font-bold rounded-t-lg">
              Friday 1st June, 2023
            </div>
            <div className="px-6 py-4">
              <p>Plenary and Technical Sessions</p>
              <p>Awards and Closing</p>
              <p>Departure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
