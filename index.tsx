import React from 'react';
import ReactDOM from 'react-dom/client';

// 1. 최상단에서 즉시 환경 변수 Shim 설정
// 브라우저 네이티브 ESM에서는 import.meta.env가 없으므로 process.env를 연결합니다.
if (typeof (import.meta as any).env === 'undefined') {
  (import.meta as any).env = (window as any).process?.env || {};
}

// 2. App 컴포넌트를 지연 로딩하여 Shim이 먼저 실행되도록 보장하거나, 
// App.tsx 내부에서 안전한 접근 방식을 사용하도록 합니다. (여기서는 App.tsx의 안전 접근 방식과 병행)
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);