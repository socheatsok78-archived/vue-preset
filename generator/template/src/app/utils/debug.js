/**
 * Debug log output
 */
if (process.env.NODE_ENV === 'development') {
  console.groupCollapsed(' ---> Environment Variables');
  console.table(process.env);
  console.groupEnd();
}
