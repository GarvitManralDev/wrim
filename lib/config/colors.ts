/**
 * Color Utilities
 * Quick access to brand colors based on the WRIM logo
 */

// Orange/Yellow gradient colors (from logo graphic)
export const orangeColors = {
  50: '#FFF5F0',
  100: '#FFE8D9',
  200: '#FFD1B3',
  300: '#FFB38A',
  400: '#FF9261',
  500: '#FF6B35', // Primary orange
  600: '#FF8533',
  700: '#FF9A2E',
  800: '#FFB347', // Bright orange-yellow
  900: '#FFD93D', // Bright yellow-orange
} as const;

// Blue gradient colors (from WRIM text)
export const blueColors = {
  50: '#EFF6FF',
  100: '#DBEAFE',
  200: '#BFDBFE',
  300: '#93C5FD',
  400: '#60A5FA', // Light blue
  500: '#3B82F6', // Mid blue
  600: '#2563EB',
  700: '#1E40AF', // Dark blue
  800: '#1E3A8A',
  900: '#1E293B',
} as const;

// Gray/Charcoal colors (from tagline)
export const grayColors = {
  50: '#F8F9FA',
  100: '#E9ECEF',
  200: '#DEE2E6',
  300: '#CED4DA',
  400: '#ADB5BD',
  500: '#868E96',
  600: '#495057',
  700: '#343A40',
  800: '#2D3436', // Dark gray/charcoal
  900: '#212529',
} as const;

// Gradient strings for direct use
export const gradients = {
  orangeYellow: 'linear-gradient(90deg, #FF6B35 0%, #FF8533 25%, #FF9A2E 50%, #FFB347 75%, #FFD93D 100%)',
  blueGradient: 'linear-gradient(90deg, #1E40AF 0%, #2563EB 33%, #3B82F6 66%, #60A5FA 100%)',
  orangeLine: 'linear-gradient(90deg, #FF6B35 0%, #FF9261 50%, #FFB347 100%)',
} as const;

// Tailwind gradient classes
export const tailwindGradients = {
  orangeYellow: 'bg-gradient-to-r from-orange-500 via-orange-600 to-orange-400',
  blueGradient: 'bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400',
  orangeLine: 'bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300',
} as const;

