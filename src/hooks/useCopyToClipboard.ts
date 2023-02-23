import { useState } from "react";
import { toast } from "react-toastify";
import ToastErrorIcon from "../components/UI/ToastErrorIcon";
import ToastSuccessIcon from "../components/UI/ToastSuccessIcon";

export default function useCopyToClipboard() {

  //Actual method to copy to clipoard on Copy button click event.
  const copyToClipboard = async (value) => {
    if (!value) toast.error("Nothing to copy!", { icon: ToastErrorIcon, toastId: 'nothing_to_copy' });
    else {
      toast.success("Copied!", {
        icon: ToastSuccessIcon,
        toastId: 'create_api_key_copied',
      });
      "clipboard" in navigator
        ? await navigator.clipboard.writeText(value)
        : document.execCommand("copy", true, value);
    }
  };
  return { copyToClipboard };
}
