import axios from "axios";
import type { Note, NoteTag } from "@/types/note";

const api = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
  },
});

const PER_PAGE = 12;

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

interface FetchNotesParams {
  page: number;
  perPage: number;
  search?: string;
  tag?: string;
}

export interface NewNoteData {
  title: string;
  content: string;
  tag: NoteTag;
}

export const fetchNotes = async (
  search: string,
  page: number,
  tag?: string
): Promise<FetchNotesResponse> => {
  const params: FetchNotesParams = { page, perPage: PER_PAGE };

  if (search.trim()) {
    params.search = search.trim();
  }

  if (tag && tag !== "all") {
    params.tag = tag;
  }

  const response = await api.get<FetchNotesResponse>("/notes", { params });
  return response.data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const response = await api.get<Note>(`/notes/${id}`);
  return response.data;
};

export const createNote = async (data: NewNoteData): Promise<Note> => {
  const response = await api.post<Note>("/notes", data);
  return response.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const response = await api.delete<Note>(`/notes/${id}`);
  return response.data;
};
