export const createGradient = (ctx, chartArea, r, g, b) => {
    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
    gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.85)`);
    gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0.15)`);
    return gradient;
};

export const gradients = {
    blue: (ctx, chartArea) => createGradient(ctx, chartArea, 127, 119, 221), // purple
    green: (ctx, chartArea) => createGradient(ctx, chartArea, 29, 158, 117),  // teal
    orange: (ctx, chartArea) => createGradient(ctx, chartArea, 239, 159, 39),  // amber
    pink: (ctx, chartArea) => createGradient(ctx, chartArea, 216, 90, 48),   // coral
};