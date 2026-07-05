import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'neutral',
  securityLevel: 'loose',
  themeVariables: {
    fontFamily: 'Inter, system-ui, sans-serif',
    primaryColor: '#6366f1', // brand indigo
    edgeLabelBackground: '#ffffff',
    lineColor: '#94a3b8',
  }
});

let uniqueIdCounter = 0;

export default function Mermaid({ chart }) {
  const [svg, setSvg] = useState('');
  const [error, setError] = useState(null);
  const elementId = useRef(`mermaid-diagram-${uniqueIdCounter++}`);

  useEffect(() => {
    let isMounted = true;
    
    const renderDiagram = async () => {
      if (!chart) return;
      try {
        // Clean up container if it exists from a previous run
        const existing = document.getElementById(elementId.current);
        if (existing) {
          existing.remove();
        }

        const { svg: renderedSvg } = await mermaid.render(elementId.current, chart);
        if (isMounted) {
          setSvg(renderedSvg);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
          console.error('Mermaid render error:', err);
        }
        // Reset Mermaid's internal parser state if it fails
        const badElement = document.getElementById(elementId.current);
        if (badElement) {
          badElement.remove();
        }
      }
    };

    renderDiagram();

    return () => {
      isMounted = false;
    };
  }, [chart]);

  if (error) {
    return (
      <div className="my-8 p-4 rounded-xl border border-red-200 bg-red-50 text-red-600 text-sm font-semibold">
        Failed to render diagram. Please check the Mermaid syntax.
      </div>
    );
  }

  if (!svg) {
    return (
      <div className="my-8 py-10 flex justify-center items-center bg-slate-50 border border-slate-100 rounded-2xl animate-pulse">
        <div className="w-6 h-6 border-2 border-slate-300 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div 
      className="my-10 p-6 sm:p-10 bg-white border border-slate-200/60 rounded-3xl shadow-sm flex justify-center overflow-x-auto selection:bg-transparent"
      dangerouslySetInnerHTML={{ __html: svg }} 
    />
  );
}
