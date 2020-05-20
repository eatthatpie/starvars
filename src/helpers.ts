export function getWindowWidth(): number {
  return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
  )
}
