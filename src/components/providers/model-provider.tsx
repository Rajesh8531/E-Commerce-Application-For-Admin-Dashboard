import { Toaster } from "react-hot-toast"
import PreviewModal from "../modals/previewModal"

const ModalProvider = () => {
  return (
    <>
      <PreviewModal />
      <Toaster />
    </>
  )
}

export default ModalProvider