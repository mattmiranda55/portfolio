export function isMobileDevice(): boolean {
  return window.innerWidth < 768
}

export function isIOSDevice(): boolean {
  return /iPhone|iPad|iPod/.test(navigator.userAgent)
}

export function isMacOS(): boolean {
  return /Mac/.test(navigator.platform)
}

export function setupResponsiveListener(callback: (isMobile: boolean) => void) {
  const handler = () => {
    callback(isMobileDevice())
  }
  
  window.addEventListener('resize', handler)
  
  // Initial call
  handler()
  
  // Return cleanup function
  return () => window.removeEventListener('resize', handler)
}
