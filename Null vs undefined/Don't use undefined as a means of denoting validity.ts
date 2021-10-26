// For example an awful function like this:
function toInt(str: string) {
  return str ? parseInt(str) : undefined;
}

// can be much better written like this:
function toInt(str: string): { valid: boolean, int?: number } {
  const int = parseInt(str);
  return isNaN(int) ? 
          { valid: false } : 
          { valid: true, int }
}