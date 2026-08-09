import React from 'react';
import { Studio } from 'sanity';
import config from '../../sanity.config';
import SEO from './SEO';

export default function SanityStudioPage() {
  const env = (import.meta as any).env || {};
  const studioPath = env.VITE_SANITY_STUDIO_PATH || '/secure-control-panel-7f8a92';

  return (
    <div className="w-full h-screen flex flex-col bg-brand-ivory overflow-hidden font-sans">
      <SEO 
        title="Content Management Studio | Harmony Yoga Center"
        description="Internal content management system studio for Harmony Yoga Center."
        path={studioPath}
        noindex={true}
      />

      {/* Embedded Sanity Studio View */}
      <div className="flex-1 w-full h-full relative overflow-hidden">
        <Studio config={config} />
      </div>
    </div>
  );
}
