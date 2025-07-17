import React from 'react'
import {
  ContactForm,
  FAQ,
  IntroSection,
  JoinSection,
} from '@/components';

export default function Page() {
  return (
    <main>
      <IntroSection />
      <JoinSection />
      <FAQ />
      <ContactForm/>
    </main>
  );
}