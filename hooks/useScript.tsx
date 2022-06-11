import { useEffect } from 'react';

interface UseScriptInterface {
  url: string;
}

export const useScript = ({ url }: UseScriptInterface) => {
  // --------------------------------------------------------------------------------
  // 📌  Script loader
  // --------------------------------------------------------------------------------

  useEffect(() => {
    const script = document.createElement('script');

    // 📌 check if script is already loaded if so return
    if (document.querySelector(`script[src="${url}"]`)) return;

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};
