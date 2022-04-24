import { toast, ToastContainer } from 'react-toastify'

export const displaySuccessToast = (txHash: string, colorMode: any) =>
  toast.success(`Success! tx: ${txHash}`, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: colorMode,
  })

export const displayErrorToast = (error: any, colorMode: any) =>
  toast.error(`${error}`, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: colorMode,
  })

export const Toast = () => (
  <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
)
