declare module 'follow-redirects' {
  interface HttpClient {
    get(url: any, callback?: any): any;
  }
  const https: HttpClient;
}