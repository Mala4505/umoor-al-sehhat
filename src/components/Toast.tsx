import React, { useEffect } from 'react';
import { CheckCircleIcon, XCircleIcon, XIcon } from 'lucide-react';
export interface ToastMessage {
  id: string;
  type: 'success' | 'error';
  message: string;
}
interface ToastProps {
  toast: ToastMessage | null;
  onDismiss: () => void;
}
export function Toast({ toast, onDismiss }: ToastProps) {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(onDismiss, 3000);
    return () => clearTimeout(timer);
  }, [toast, onDismiss]);
  if (!toast) return null;
  const isSuccess = toast.type === 'success';
  return (
    <div
      className={`fixed bottom-6 left-1/2 z-50 flex w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 items-center gap-3 rounded-2xl px-4 py-3.5 shadow-lg transition-all ${isSuccess ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'}`}
      role="alert"
      aria-live="polite">

      {isSuccess ?
      <CheckCircleIcon className="h-5 w-5 flex-shrink-0" /> :

      <XCircleIcon className="h-5 w-5 flex-shrink-0" />
      }
      <p className="flex-1 text-sm font-medium">{toast.message}</p>
      <button
        onClick={onDismiss}
        className="flex-shrink-0 rounded-full p-0.5 opacity-80 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Dismiss notification">

        <XIcon className="h-4 w-4" />
      </button>
    </div>);

}