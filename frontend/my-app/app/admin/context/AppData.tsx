
// let globalSearchQuery: string = 'Search...';
// localStorage.setItem('globalSearchQuery', 'Search...');
export const getGlobalSearchQuery = (): string => {
    return sessionStorage.getItem('globalSearchQuery') || 'Search...';
  };
  
  export const setGlobalSearchQuery = (query: string): void => {
    sessionStorage.setItem('globalSearchQuery', query);
  };