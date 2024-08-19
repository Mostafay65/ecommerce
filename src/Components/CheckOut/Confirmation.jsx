import React from "react";
import styles from "./Confirmation.module.css";

export default function Confirmation({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h4 className="text-main text-uppercase">Confirm Payment</h4>
        <hr />
        <p className="text-sec mb-3">Are you sure you want to confirm the payment?</p>
        <div className={styles.modalActions}>
          <button className={`btn btn-danger w-25`} onClick={onClose}>
            Cancel
          </button>
          <button className={`btn btn-main w-25`} onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
