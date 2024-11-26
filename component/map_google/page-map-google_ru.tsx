'use client';
import React from 'react';
import classes from '@/component/head/page-head.module.css';
const MapGoogle = () => {
  return (
    <section
      style={{ marginBottom: '30px', width: '100%', height: '400px' }}
      id="map"
    >
      <h4 className={`${classes.container_h4_map}`}>наш адрес</h4>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.674841407545!2d30.394433676557036!3d50.44715697159153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cdbf8c427727%3A0x8dd5ba36fc0e4ea5!2z0J_QtdGA0LXRgtGP0LbQutCwINC8J9GP0LrQuNGFINC80LXQsdC70ZbQsiAtINCg0LXQvNC-0L3RgiDQvCfRj9C60LjRhSDQvNC10LHQu9GW0LIgKE1ldmFybyk!5e0!3m2!1sru!2sua!4v1722245226372!5m2!1sru!2sua"
        style={{
          border: 0,
          width: '100%',
          height: '400px',
          position: 'absolute',
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default MapGoogle;
