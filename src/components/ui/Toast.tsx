import { useEffect } from 'react';
import { X } from 'lucide-react';

interface ToastProps {
  show: boolean;
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

export default function Toast({ show, type, message, onClose }: ToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative group">
        {/* Toast Shadow/Border */}
        <div 
          className={`absolute -left-1.5 top-1.5 w-full h-full border-2 
            ${type === 'success' 
              ? 'border-emerald-600 dark:border-emerald-500 bg-emerald-600 dark:bg-emerald-500' 
              : 'border-red-600 dark:border-red-500 bg-red-600 dark:bg-red-500'} 
            rounded-xl transition-all duration-500`}
        />

        {/* Main Toast */}
        <div 
          className={`relative flex items-center gap-2 p-4 
            ${type === 'success' 
              ? 'bg-emerald-100 dark:bg-emerald-900 border-emerald-300 dark:border-emerald-700' 
              : 'bg-red-100 dark:bg-red-900 border-red-300 dark:border-red-700'}
            border-2 rounded-xl transition-all duration-500`}
        >
          <p className="font-['Roboto_Mono'] text-sm">
            {message}
          </p>
          <button
            onClick={onClose}
            className="relative group/close"
          >
            {/* Close Button Shadow/Border */}
            <div className={`absolute -left-1 top-1 w-6 h-6 border-2 
              ${type === 'success' 
                ? 'border-emerald-600 dark:border-emerald-500 bg-emerald-600 dark:bg-emerald-500' 
                : 'border-red-600 dark:border-red-500 bg-red-600 dark:bg-red-500'}
              rounded-md transition-all duration-500 group-hover/close:-translate-x-0.5 group-hover/close:translate-y-0.5`}
            />
            <div className={`relative w-6 h-6 
              ${type === 'success' 
                ? 'bg-emerald-100 dark:bg-emerald-900 border-emerald-300 dark:border-emerald-700' 
                : 'bg-red-100 dark:bg-red-900 border-red-300 dark:border-red-700'}
              border-2 rounded-md flex items-center justify-center 
              transition-all duration-500 group-hover/close:translate-x-0.5 group-hover/close:-translate-y-0.5`}
            >
              <X className="w-3 h-3" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}