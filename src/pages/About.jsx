function About() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>About Me</h1>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', gap: '24px', marginTop: '20px', flexWrap: 'wrap' }}>
        <img
          src="/art/Lucy.jpg"
          alt="Lucy artwork"
          style={{ width: '260px', flexShrink: 0, borderRadius: '12px', boxShadow: '0 6px 18px rgba(0,0,0,0.15)' }}
        />

        {/* Arrow positioned to the right of the image, angled toward it */}
        <div style={{
          position: 'absolute',
          left: '300px',
          top: '50%',
          transform: 'translateY(-50%) rotate(180deg) scaleY(-1)',
          display: 'flex',
          alignItems: 'center',
        }}>
          <img
              src="/art/Arrow.jpg"
            alt="Arrow pointing to image"
            style={{
              width: '360px',
              transform: 'rotate(-20deg)',
              filter: 'drop-shadow(2px 2px 3px rgba(0,0,0,0.2))',
            }}
          />
        </div>

        <p style={{ marginTop: '0', marginLeft: '120px', fontSize: '1rem', lineHeight: '1.6' }}>
          Commissions please, furry's will be given preference.
        </p>
      </div>
    </div>
  );
}

export default About;