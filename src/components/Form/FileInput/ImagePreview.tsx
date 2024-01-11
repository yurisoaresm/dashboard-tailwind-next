'use client';

import { User } from 'lucide-react';
import { useMemo } from 'react';

import { useFileInput } from './Root';

export interface ImagePreviewProps {}

export function ImagePreview(props: ImagePreviewProps) {
  const { files } = useFileInput();

  const previewURL = useMemo(() => {
    if (files.length === 0) return null;

    return URL.createObjectURL(files[0]);
  }, [files]);

  if (previewURL === null) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
        <User className="h-8 w-8 text-violet-500" />
      </div>
    );
  } else {
    return (
      <img
        src={previewURL}
        alt="image preview"
        className="h-16 w-16 rounded-full object-cover"
      />
    );
  }
}
