"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter, useParams } from "next/navigation";
import { fetchNoteById } from "@/lib/api";
import Modal from "@/components/Modal/Modal";
import css from "./NotePreview.module.css";

const NotePreview = () => {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  const close = () => router.back();

  if (isLoading) {
    return (
      <Modal onClose={close}>
        <p>Loading, please wait...</p>
      </Modal>
    );
  }

  if (error || !note) {
    return (
      <Modal onClose={close}>
        <p>Something went wrong.</p>
      </Modal>
    );
  }

  return (
    <Modal onClose={close}>
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{note.title}</h2>
          </div>
          <p className={css.tag}>{note.tag}</p>
          <p className={css.content}>{note.content}</p>
          <p className={css.date}>Created date: {note.createdAt}</p>
          <button className={css.backBtn} onClick={close}>
            Back
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default NotePreview;
