export const validateFileSize = (fileSize: number | undefined, max = 5) => {
  if (!fileSize) return false
  return fileSize < max * 1000 * 1000
}
