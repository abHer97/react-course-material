import { ImgHTMLAttributes } from 'react';

export enum FileSize {
  original = 'original',
  w200 = 'w200',
  w300 = 'w300',
  w400 = 'w400',
  w500 = 'w500',
  w1280 = 'w1280',
}

export interface ImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  fileSize: FileSize;
}

export function Img({ fileSize, src, ...props }: ImgProps) {
  return <img src={`https://image.tmdb.org/t/p/${fileSize}/${src}`} {...props} />;
}
