import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

export default function SEO({ 
  title, 
  description, 
  keywords = "AppMe, AppMe Pvt Ltd, Cologeos, software development, school management system, IT consulting, cloud architecture, web development, mobile apps",
  ogImage = "/assets/images/about1.jpg",
  ogUrl = "https://appme.in"
}: SEOProps) {
  // WhatsApp and Facebook require absolute URLs for images
  const absoluteImageUrl = ogImage.startsWith('http') ? ogImage : `https://appme.in${ogImage}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="AppMe Pvt Ltd" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:site_name" content="AppMe Pvt Ltd" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={absoluteImageUrl} />

      {/* Canonical URL */}
      <link rel="canonical" href={ogUrl} />
    </Head>
  );
}
