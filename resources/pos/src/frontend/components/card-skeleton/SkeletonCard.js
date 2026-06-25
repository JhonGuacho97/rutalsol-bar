export const SkeletonCard = () => {
    return (
        <div className="product-custom-card">
            <div className="card position-relative h-100" style={{ overflow: 'hidden', borderRadius: '10px' }}>
                {/* imagen — misma altura que card-img-top */}
                <div style={{
                    width: '100%',
                    height: '100px',
                    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 1.5s infinite',
                }} />
                {/* body */}
                <div className="px-2 pt-2 pb-1 custom-card-body">
                    {/* nombre — 2 líneas como product-title */}
                    <div style={{
                        height: '12px', width: '90%', borderRadius: '4px', marginBottom: '4px',
                        background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                        backgroundSize: '200% 100%', animation: 'shimmer 1.5s infinite'
                    }} />
                    {/* badge precio */}
                    <div style={{
                        height: '18px', width: '40%', borderRadius: '4px',
                        background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                        backgroundSize: '200% 100%', animation: 'shimmer 1.5s infinite'
                    }} />
                </div>
            </div>
        </div>
    );
};