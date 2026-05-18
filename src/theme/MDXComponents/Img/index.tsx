import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import type {Props} from '@theme/MDXComponents/Img';

import styles from './styles.module.css';

function transformImgClassName(className?: string): string {
  return clsx(className, styles.img);
}

function isGitBookAsset(src: unknown): boolean {
  return typeof src === 'string' && src.startsWith('/gitbook/assets/');
}

export default function MDXImg(props: Props): ReactNode {
  const nativeSizeProps = isGitBookAsset(props.src)
    ? {style: {...props.style, maxWidth: '100%'}}
    : {};

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      decoding="async"
      loading="lazy"
      {...props}
      {...nativeSizeProps}
      className={transformImgClassName(props.className)}
    />
  );
}
