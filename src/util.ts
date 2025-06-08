export function convertTime(time: number): string {
  const minutes: number = Math.floor(time / 60)
  const seconds: number = time - minutes * 60

  return (minutes + '').padStart(2, '0') + ':' + (seconds + '').padStart(2, '0')
}
