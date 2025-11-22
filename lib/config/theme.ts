/**
 * WRIM Brand Color Theme
 * Based on the official logo design
 */

export const theme = {
  colors: {
    // Orange/Yellow Gradient (from logo's graphic element and line)
    orange: {
      50: '#FFF5F0',
      100: '#FFE8D9',
      200: '#FFD1B3',
      300: '#FFB38A',
      400: '#FF9261',
      500: '#FF6B35', // Primary orange (deeper orange from logo)
      600: '#FF8533',
      700: '#FF9A2E',
      800: '#FFB347', // Bright orange-yellow (middle of gradient)
      900: '#FFD93D', // Bright yellow-orange (end of gradient)
    },
    // Blue Gradient (from "WRIM" text)
    blue: {
      50: '#EFF6FF',
      100: '#DBEAFE',
      200: '#BFDBFE',
      300: '#93C5FD',
      400: '#60A5FA', // Light blue (end of gradient)
      500: '#3B82F6', // Mid blue
      600: '#2563EB',
      700: '#1E40AF', // Dark blue (start of gradient)
      800: '#1E3A8A',
      900: '#1E293B',
    },
    // Dark Gray/Charcoal (from tagline "WE ARE IMMORTALS")
    gray: {
      50: '#F8F9FA',
      100: '#E9ECEF',
      200: '#DEE2E6',
      300: '#CED4DA',
      400: '#ADB5BD',
      500: '#868E96',
      600: '#495057',
      700: '#343A40',
      800: '#2D3436', // Dark gray/charcoal from logo tagline
      900: '#212529',
    },
    // Neutral colors
    white: '#FFFFFF',
    black: '#000000',
  },
  gradients: {
    // Orange to Yellow gradient (logo graphic)
    orangeYellow: 'linear-gradient(90deg, #FF6B35 0%, #FF8533 25%, #FF9A2E 50%, #FFB347 75%, #FFD93D 100%)',
    // Blue gradient (logo text)
    blueGradient: 'linear-gradient(90deg, #1E40AF 0%, #2563EB 33%, #3B82F6 66%, #60A5FA 100%)',
    // Orange line gradient (logo bottom line)
    orangeLine: 'linear-gradient(90deg, #FF6B35 0%, #FF9261 50%, #FFB347 100%)',
  },
} as const;

export type Theme = typeof theme;

