export interface Download {
  id?: number;

  userId?: number;
  document: {
    documentId?: number;
    documentName?: string;
    description?: string;
    documentSize?: number;
    date?: Date;
    documentURL?: string;

    documentDownloads: {
      id?: number;
      userId?: number;
      documentId?: number;
    };
  };
  downloaddate?: Date;
}
